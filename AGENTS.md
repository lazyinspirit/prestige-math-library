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
binds Audit-Beta and Alpha to **GPT 5.6 Sol through the Codex subscription**
at `xhigh` with a 1,000,000-token context window. Independent readers use
**GPT 5.6 Terra** with the same settings; proof-refuters remain **DeepSeek V4
Pro** at its `max` API reasoning setting. Alpha must recover
the durable prior-session audit record before acting. Judge lanes are DeepSeek
V4 Pro plus GPT 5.6 Terra (`JUDGE_LINEUP=deepseek+terra`) through the
same independent 16-call-per-model scheduler used by the build.
A non-Anthropic session may run the ORCHESTRATOR duties (gates, sweeps,
ledgers, commits, reports) — the judge lanes are subprocesses and work from
any session — but it must not silently substitute itself for an assigned audit
role. Ask the owner to amend the rule first; record the amendment in
`AUDIT-WORKFLOW.md` in the same commit.
