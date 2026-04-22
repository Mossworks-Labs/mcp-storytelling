# mcp-storytelling

MCP server for writing craft, narrative structure, and author perspectives.

Part of the [CRAFT](https://github.com/Mossworks-Labs/craft) content studio.

## Tools

| Tool | Description |
|------|-------------|
| `author_perspectives` | Writing styles and approaches of notable authors |
| `story_structures` | Narrative frameworks (three-act, hero's journey, etc.) |
| `writing_craft` | Prose techniques, dialogue, pacing, and voice |
| `genre_guides` | Genre conventions and audience expectations |

## Usage

### Stdio (Claude Code / local)

```json
{
  "mcpServers": {
    "storytelling": {
      "command": "node",
      "args": ["dist/index.js"]
    }
  }
}
```

### HTTP (Docker / Kubernetes)

```bash
docker build -t mcp-storytelling .
docker run -p 8080:8080 -e MCP_TRANSPORT=http mcp-storytelling
```

## Development

```bash
npm install
npm run build
node dist/index.js
```

Requires Node.js 22+.
