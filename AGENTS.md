# AGENTS.md — freebuff-static-lab

Read `knowledge.md` first. This repo is a static Pages rig; Freebuff and humans share these rules.

- Serve: `npm start` (port 8080). Test: `npm test` (must pass before push).
- No build step, no dependencies to add without asking. Zero-dep `serve.cjs` stays.
- `.agents/mcp.json` holds MCP servers (currently empty placeholder). Stdio servers run on first prompt; `$VAR` fills from CLI env, not headers.
- Deploy is Pages Actions (`pages.yml`); never commit to a `gh-pages` branch by hand.
