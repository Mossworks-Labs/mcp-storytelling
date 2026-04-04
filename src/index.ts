// src/index.ts
// Storytelling MCP Server
// Covers: author perspectives, story structures, writing craft, genre guides

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import express from "express";

import { registerAuthorTools } from "./tools/authors.js";
import { registerStructureTools } from "./tools/structure.js";
import { registerCraftTools } from "./tools/craft.js";

const server = new McpServer({
  name: "storytelling-mcp",
  version: "1.0.0"
});

// Register all tool domains
registerAuthorTools(server);
registerStructureTools(server);
registerCraftTools(server);

// ─── Transport: stdio ─────────────────────────────────────────────────────────
async function runStdio(): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Storytelling MCP Server running on stdio");
}

// ─── Transport: HTTP ──────────────────────────────────────────────────────────
async function runHTTP(): Promise<void> {
  const app = express();
  app.use(express.json());

  app.post("/mcp", async (req, res) => {
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
      enableJsonResponse: true
    });
    res.on("close", () => transport.close());
    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
  });

  app.get("/health", (_req, res) => {
    res.json({ status: "ok", server: "storytelling-mcp", version: "1.0.0" });
  });

  const port = parseInt(process.env.PORT ?? "3000");
  app.listen(port, () => {
    console.error(`Storytelling MCP Server running on http://localhost:${port}/mcp`);
  });
}

// Choose transport based on environment
const transport = process.env.TRANSPORT ?? "stdio";
if (transport === "http") {
  runHTTP().catch(error => {
    console.error("Server error:", error);
    process.exit(1);
  });
} else {
  runStdio().catch(error => {
    console.error("Server error:", error);
    process.exit(1);
  });
}
