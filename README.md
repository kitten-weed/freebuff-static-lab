# freebuff-static-lab — GitHub Pages + Freebuff test rig

Student Pack static playground: push to `main` → Pages URL. Freebuff edits here locally or via Cloud.

## Quick start

```bash
cd ~/Desktop/freebuff-static-lab
npm start          # http://localhost:8080
npm test           # smoke: index 200, api ok, 404 fallback
```

Freebuff:

```bash
npm install -g freebuff
freebuff           # reads knowledge.md + AGENTS.md, edits, runs npm test
freebuff --trust-agents  # CI / non-interactive (repo .agents + mcp.json)
```

## Pages wiring (2 clicks after push)

1. Push repo to GitHub (commands in `PUSH.md`), then **Settings → Pages → Source: GitHub Actions**.
2. Push to `main` → workflow `pages.yml` deploys `./` (with `GITHUB_SHA` stamped into `api/health.json`). URL: `https://<user>.github.io/freebuff-static-lab/`.
3. **Enforce HTTPS** in Pages settings once DNS settles. Custom domain: copy `CNAME.example` → `CNAME`, add domain in Pages settings.

## What's inside (bells)

| Bell | File |
|---|---|
| Pages deploy (artifact, no branch) | `.github/workflows/pages.yml` |
| CI smoke on every push/PR | `.github/workflows/ci.yml` |
| PR preview artifact | `ci.yml` upload-artifact |
| Local zero-dep server | `serve.cjs` |
| Smoke test | `smoke.mjs` |
| Freebuff context | `knowledge.md`, `AGENTS.md`, `.agents/mcp.json` |
| Codespaces (Student Pro) | `.devcontainer/devcontainer.json` |
| Dependabot + security | `.github/dependabot.yml`, `SECURITY.md` |
| Templates | PR template, bug/feature forms |

## Student Pack to claim (already verified)

- **GitHub Pro**: private repos + Pages on private + protected branches — automatic.
- **Codespaces Pro allowance**: this repo has a devcontainer, just open in Codespaces.
- **Copilot Student**: free with AI credits — check current allowance on activation.
- **Domains**: 1× `.me` (Namecheap) + 1× 25+ TLDs (Name.com) + 1× `.TECH` — point one at Pages via `CNAME`.
- **DigitalOcean $200/yr**: separate static/VM hosting if Pages limits pinch. **Azure $100**: no card needed.
- Claim page: `https://education.github.com/pack/offers`.
