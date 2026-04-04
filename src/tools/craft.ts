// src/tools/craft.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { CRAFT_ELEMENTS, CRAFT_MAP } from "../data/craft.js";

export function registerCraftTools(server: McpServer): void {

  server.registerTool(
    "story_get_craft_element",
    {
      title: "Get Writing Craft Element",
      description: `Look up a specific writing craft element with principles, common mistakes, and diverse author perspectives.

Args:
  - name (string): Craft element (e.g., "dialogue", "pacing", "POV", "point of view", "showing", "tension", "suspense", "voice", "style", "revision", "editing")

Returns: Full craft guide including principles, common mistakes, perspectives from multiple authors, and exercises.`,
      inputSchema: z.object({
        name: z.string().min(1).describe("Craft element name or keyword")
      }),
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false }
    },
    async ({ name }) => {
      const key = name.toLowerCase();
      let element = CRAFT_MAP.get(key);
      if (!element) {
        element = CRAFT_ELEMENTS.find(c =>
          c.name.toLowerCase().includes(key) || key.includes(c.name.toLowerCase())
        );
      }
      if (!element) {
        const available = CRAFT_ELEMENTS.map(c => c.name).join(", ");
        return {
          content: [{ type: "text", text: `Craft element "${name}" not found. Available: ${available}` }]
        };
      }
      return {
        content: [{ type: "text", text: JSON.stringify(element, null, 2) }]
      };
    }
  );

  server.registerTool(
    "story_list_craft_elements",
    {
      title: "List All Craft Elements",
      description: `List all writing craft elements covered.

Returns: All craft elements with name and overview.`,
      inputSchema: z.object({}),
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false }
    },
    async () => {
      const output = CRAFT_ELEMENTS.map(c => ({
        name: c.name,
        overview: c.overview.substring(0, 200) + "..."
      }));
      return {
        content: [{ type: "text", text: JSON.stringify(output, null, 2) }]
      };
    }
  );

  server.registerTool(
    "story_get_exercises",
    {
      title: "Get Writing Exercises",
      description: `Get writing exercises for a specific craft element or from a specific author.

Args:
  - topic (string): Craft element name or author name (e.g., "dialogue", "Stephen King", "revision", "Chekhov")

Returns: Targeted writing exercises to practice the skill.`,
      inputSchema: z.object({
        topic: z.string().min(1).describe("Craft element or author name")
      }),
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false }
    },
    async ({ topic }) => {
      const key = topic.toLowerCase();
      const results: { source: string; exercises: string[] }[] = [];

      // Check craft elements
      for (const element of CRAFT_ELEMENTS) {
        if (element.name.toLowerCase().includes(key) || key.includes(element.name.toLowerCase())) {
          results.push({ source: `Craft: ${element.name}`, exercises: element.exercises });
        }
      }

      // Check authors (lazy import to avoid circular deps)
      const { AUTHORS, AUTHOR_MAP } = await import("../data/authors.js");
      let author = AUTHOR_MAP.get(key);
      if (!author) {
        author = AUTHORS.find((a: { name: string }) => a.name.toLowerCase().includes(key));
      }
      if (author) {
        results.push({ source: `Author: ${author.name}`, exercises: author.writing_exercises });
      }

      if (results.length === 0) {
        return {
          content: [{ type: "text", text: `No exercises found for "${topic}". Try: dialogue, pacing, POV, tension, voice, revision, or an author name.` }]
        };
      }
      return {
        content: [{ type: "text", text: JSON.stringify(results, null, 2) }]
      };
    }
  );
}
