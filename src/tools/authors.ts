// src/tools/authors.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { AUTHORS, AUTHOR_MAP } from "../data/authors.js";

export function registerAuthorTools(server: McpServer): void {

  server.registerTool(
    "story_get_author",
    {
      title: "Get Author's Writing Advice",
      description: `Look up a specific author's writing philosophy, core principles, and exercises.

Args:
  - name (string): Author name or keyword (e.g., "Stephen King", "King", "Vonnegut", "Sanderson", "Le Guin", "McKee", "Snyder", "Campbell", "Truby", "Palahniuk", "Chekhov", "Stein", "save the cat", "hero's journey")

Returns: Full author profile including philosophy, core principles, notable quotes, writing exercises, and contrarian view.`,
      inputSchema: z.object({
        name: z.string().min(1).describe("Author name or keyword")
      }),
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false }
    },
    async ({ name }) => {
      const key = name.toLowerCase();
      let author = AUTHOR_MAP.get(key);
      if (!author) {
        author = AUTHORS.find(a =>
          a.name.toLowerCase().includes(key) || key.includes(a.name.toLowerCase())
        );
      }
      if (!author) {
        const available = AUTHORS.map(a => a.name).join(", ");
        return {
          content: [{ type: "text", text: `Author "${name}" not found. Available: ${available}` }]
        };
      }
      return {
        content: [{ type: "text", text: JSON.stringify(author, null, 2) }]
      };
    }
  );

  server.registerTool(
    "story_list_authors",
    {
      title: "List All Authors",
      description: `List all authors whose writing advice is available.

Returns: All authors with name, key work, genre focus, and philosophy summary.`,
      inputSchema: z.object({}),
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false }
    },
    async () => {
      const output = AUTHORS.map(a => ({
        name: a.name,
        key_work: a.key_work,
        genre_focus: a.genre_focus,
        philosophy: a.philosophy.substring(0, 200) + "..."
      }));
      return {
        content: [{ type: "text", text: JSON.stringify(output, null, 2) }]
      };
    }
  );

  server.registerTool(
    "story_get_advice_on_topic",
    {
      title: "Get Multiple Authors' Advice on a Topic",
      description: `Search across all authors for advice on a specific writing topic. Returns every author who has something to say about the topic.

Args:
  - topic (string): Writing topic to search for (e.g., "adverbs", "dialogue", "outlining", "magic systems", "revision", "show don't tell", "character", "plot")

Returns: Relevant advice from multiple authors, showing different (sometimes contradictory) perspectives.`,
      inputSchema: z.object({
        topic: z.string().min(1).describe("Writing topic to search across authors")
      }),
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false }
    },
    async ({ topic }) => {
      const key = topic.toLowerCase();
      const results: { author: string; relevant_principles: string[]; relevant_quotes: string[] }[] = [];

      for (const author of AUTHORS) {
        const principles = author.core_principles.filter(p => p.toLowerCase().includes(key));
        const quotes = author.notable_quotes.filter(q => q.toLowerCase().includes(key));
        const philosophyMatch = author.philosophy.toLowerCase().includes(key);
        const contrarianMatch = author.contrarian_view.toLowerCase().includes(key);

        if (principles.length > 0 || quotes.length > 0 || philosophyMatch || contrarianMatch) {
          const entry: { author: string; relevant_principles: string[]; relevant_quotes: string[]; philosophy?: string; contrarian_note?: string } = {
            author: author.name,
            relevant_principles: principles,
            relevant_quotes: quotes
          };
          if (philosophyMatch) entry.philosophy = author.philosophy;
          if (contrarianMatch) entry.contrarian_note = author.contrarian_view;
          results.push(entry);
        }
      }

      if (results.length === 0) {
        return {
          content: [{ type: "text", text: `No specific advice found for "${topic}". Try broader terms like: dialogue, character, plot, revision, voice, structure, show, tell, conflict.` }]
        };
      }
      return {
        content: [{ type: "text", text: JSON.stringify(results, null, 2) }]
      };
    }
  );
}
