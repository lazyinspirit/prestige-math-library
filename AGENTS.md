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

**Model rule, read before you take an audit role.** `AUDIT-WORKFLOW.md` §2/§3
binds Audit-Beta and Alpha to **GPT 5.6 Sol through the Codex subscription**
at `xhigh` with a 1,000,000-token context window. Independent readers use
**GPT 5.6 Terra** with the same settings; proof-refuters remain **DeepSeek V4
Pro** at its `max` API reasoning setting. Alpha must recover
the durable prior-session audit record before acting. Judge lanes are DeepSeek
V4 Pro plus GPT 5.6 Terra (`JUDGE_LINEUP=deepseek+terra`) through the
same independent 16-call-per-model scheduler used by the build.
A non-Anthropic session may run the SESSION duties (gates, sweeps, ledgers,
commits, reports) — the judge lanes are subprocesses and work from any session —
but it must not silently substitute itself for an assigned audit role. The build
has no orchestrator at all: `tools/autopilot/` owns every transition. Ask the owner to amend the rule first; record the amendment in
`AUDIT-WORKFLOW.md` in the same commit.
