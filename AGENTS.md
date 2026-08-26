# Agent entrypoint

This repository's canonical agent instructions live in `CLAUDE.md`.

Before touching this repo, read `CLAUDE.md` fully, then follow it as the
normative instruction file. Do not duplicate those rules here; update
`CLAUDE.md` instead.

**Active run.** The build driver is `tools/autopilot/`; a live run has a
`.autopilot/` state dir at the repo root (`node tools/autopilot/bin/autopilot.mts
status` recomputes from disk). The many `research/*RESUME.md` files belong to
CONCLUDED runs — sixteen of them exist and none is in flight; verify against
`.autopilot/` and `git log`, never against a RESUME file's own claim.

The build has no LLM orchestrator: `tools/autopilot/` owns every transition.
