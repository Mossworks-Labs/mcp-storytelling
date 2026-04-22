FROM node:22-alpine AS builder
LABEL org.opencontainers.image.source="https://github.com/Mossworks-Labs/mcp-storytelling" \
      org.opencontainers.image.description="MCP server: storytelling" \
      org.opencontainers.image.licenses="MIT"

WORKDIR /app
COPY package.json tsconfig.json ./
RUN npm install
COPY src/ ./src/

RUN npm run build

FROM node:22-alpine AS runtime

LABEL org.opencontainers.image.source="https://github.com/Mossworks-Labs/mcp-storytelling"
LABEL org.opencontainers.image.description="MCP server for storytelling tools"
LABEL org.opencontainers.image.licenses="MIT"

WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

ENV TRANSPORT=stdio

CMD ["node", "dist/index.js"]
