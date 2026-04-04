// src/tools/structure.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { STRUCTURES, STRUCTURE_MAP } from "../data/structure.js";
import { GENRES, GENRE_MAP } from "../data/genres.js";

export function registerStructureTools(server: McpServer): void {

  server.registerTool(
    "story_get_structure",
    {
      title: "Get Story Structure",
      description: `Look up a specific narrative structure or framework.

Args:
  - name (string): Structure name (e.g., "three act", "hero's journey", "save the cat", "five act", "fichtean", "kishotenketsu", "in medias res", "story circle", "dan harmon")

Returns: Full structure details including beats, strengths, weaknesses, best uses, and examples.`,
      inputSchema: z.object({
        name: z.string().min(1).describe("Structure name or keyword")
      }),
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false }
    },
    async ({ name }) => {
      const key = name.toLowerCase();
      let structure = STRUCTURE_MAP.get(key);
      if (!structure) {
        structure = STRUCTURES.find(s =>
          s.name.toLowerCase().includes(key) || key.includes(s.name.toLowerCase())
        );
      }
      if (!structure) {
        const available = STRUCTURES.map(s => s.name).join(", ");
        return {
          content: [{ type: "text", text: `Structure "${name}" not found. Available: ${available}` }]
        };
      }
      return {
        content: [{ type: "text", text: JSON.stringify(structure, null, 2) }]
      };
    }
  );

  server.registerTool(
    "story_list_structures",
    {
      title: "List All Story Structures",
      description: `List all narrative structures and frameworks.

Returns: All structures with name, origin, overview, and best uses.`,
      inputSchema: z.object({}),
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false }
    },
    async () => {
      const output = STRUCTURES.map(s => ({
        name: s.name,
        origin: s.origin,
        best_for: s.best_for,
        overview: s.overview.substring(0, 200) + "..."
      }));
      return {
        content: [{ type: "text", text: JSON.stringify(output, null, 2) }]
      };
    }
  );

  server.registerTool(
    "story_get_genre",
    {
      title: "Get Genre Writing Guide",
      description: `Look up genre-specific writing advice, conventions, and common pitfalls.

Args:
  - name (string): Genre name (e.g., "literary", "fantasy", "sci-fi", "horror", "thriller", "mystery", "romance", "crime")

Returns: Full genre guide including conventions, reader expectations, common pitfalls, and recommended structures.`,
      inputSchema: z.object({
        name: z.string().min(1).describe("Genre name")
      }),
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false }
    },
    async ({ name }) => {
      const key = name.toLowerCase();
      let genre = GENRE_MAP.get(key);
      if (!genre) {
        genre = GENRES.find(g =>
          g.name.toLowerCase().includes(key) || key.includes(g.name.toLowerCase())
        );
      }
      if (!genre) {
        const available = GENRES.map(g => g.name).join(", ");
        return {
          content: [{ type: "text", text: `Genre "${name}" not found. Available: ${available}` }]
        };
      }
      return {
        content: [{ type: "text", text: JSON.stringify(genre, null, 2) }]
      };
    }
  );

  server.registerTool(
    "story_list_genres",
    {
      title: "List All Genres",
      description: `List all genres with writing guides available.

Returns: All genres with name, overview, and key conventions.`,
      inputSchema: z.object({}),
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false }
    },
    async () => {
      const output = GENRES.map(g => ({
        name: g.name,
        overview: g.overview.substring(0, 200) + "...",
        recommended_structures: g.recommended_structures
      }));
      return {
        content: [{ type: "text", text: JSON.stringify(output, null, 2) }]
      };
    }
  );
}
