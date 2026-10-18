# Agent entrypoint

This repository's canonical agent instructions live in `CLAUDE.md`.

Before touching this repo, read `CLAUDE.md` fully, then follow it as the
normative instruction file. Do not duplicate those rules here; update
`CLAUDE.md` instead.

**Active run.** The build driver is `tools/autopilot/`; a live run has a
`.autopilot/` state dir at the repo root (`node tools/tsx-run.mjs
tools/autopilot/bin/autopilot.mts status --run RUN --state-dir .autopilot/RUN`
recomputes from disk). The sixteen historical `research/*RESUME.md` handoffs
were retired after their concluded status was verified; the exact inventory is
in `research/run-telemetry/cleanup.jsonl.gz`. Verify active work against
`.autopilot/` and `git log`, never against an old handoff's own claim.

The build has no LLM orchestrator: `tools/autopilot/` owns every transition.
