# Push this rig to GitHub (gh auth is currently 401 — re-auth first)

```bash
gh auth login -h github.com
cd ~/Desktop/freebuff-static-lab
git init -b main
git add -A && git commit -m "freebuff-static-lab: Pages + Freebuff rig"
gh repo create freebuff-static-lab --public --source=. --push
# then: Settings → Pages → Source: GitHub Actions → push to main deploys
# Freebuff Cloud: https://freebuff.com/cloud → Connect repository
```
