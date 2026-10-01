# knowledge.md — freebuff-static-lab

Project context for Freebuff/Codebuff (`/init` convention). Freebuff reads this on every run.

## What this is
Zero-build static rig for testing GitHub Pages + local serve. Files served: `index.html`, `styles.css`, `app.js` (ES module), `api/health.json` probe, `404.html` fallback.

## Run / verify (always do this after edits)
- `npm start` → http://localhost:8080
- `npm test` → boots `serve.cjs` on :8123, asserts index 200 + marker, `api/health.json` `{status:"ok"}`, 404 fallback

## Deploy
Push to `main` → `.github/workflows/pages.yml` stamps `api/health.json.sha` with short SHA, uploads `./` as Pages artifact, deploys. Source must be **GitHub Actions** in Settings → Pages. PRs get a `preview-<sha>` artifact from `ci.yml`.

## Conventions
- No framework, no build step, no secrets in tree. Keep `api/` PII-free (Pages artifact is public).
- Edit `index.html`/`app.js` for probes; keep smoke markers (`freebuff-static-lab`, `status:"ok"`) intact or update `smoke.mjs` to match.
- Trust: repo `.agents/` + `mcp.json` need consent — interactive prompt on `freebuff`, or `freebuff --trust-agents` / `CODEBUFF_TRUST_AGENT_DIRS=1` in CI.
