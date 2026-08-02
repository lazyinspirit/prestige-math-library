# Agent entrypoint

This repository's canonical agent instructions live in `CLAUDE.md`.

Before touching this repo, read `CLAUDE.md` fully, then follow it as the
normative instruction file. Do not duplicate those rules here; update
`CLAUDE.md` instead.

**Active run.** If a `research/*RESUME.md` exists, a build or audit is
in flight: read it before doing anything else, and verify the disk state it
describes rather than trusting it. As of 2026-08-02 the active run is the
published-page audit at `research/audit/RESUME.md` (normative workflow:
`AUDIT-WORKFLOW.md`).

**Model rule, read before you take an audit role.** `AUDIT-WORKFLOW.md` §2/§3
binds every audit ROLE — Audit-Beta, Alpha, independent readers,
proof-refuters — to **Opus 5 at high reasoning effort**, and the judge lanes
to DeepSeek V4 Pro plus headless Sonnet 5 (`JUDGE_LINEUP=deepseek+sonnet`).
A non-Anthropic session may run the ORCHESTRATOR duties (gates, sweeps,
ledgers, commits, reports) — the judge lanes are subprocesses and work from
any session — but it must not silently substitute itself for an Opus audit
role. Ask the owner to amend the rule first; record the amendment in
`AUDIT-WORKFLOW.md` in the same commit.
