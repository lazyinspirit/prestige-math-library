<!-- TEMPLATE. Copy into the Alpha-n prompt and substitute <n>. Alpha-n is one
     agent across two stages: step 4 propagation and step 6 audit. -->

# Alpha-<n> brief — steps 4 and 6

> **STANDING OPERATIONAL RULE (owner, 2026-07-29) — binding on every subagent,
> in every brief.** Pass `dangerouslyDisableSandbox: true` on **EVERY** Bash tool
> call, without exception.
>
> **Pass it on.** You dispatch/brief Beta readers at step 6; put this rule in
> their prompts.

> **Model/routing rule (owner, 2026-07-30).** You are **GPT 5.6 Sol via the Codex
> subscription plan**. Do not run GPT-family work through ofox.

Read `LEVELS.md`, `CLAUDE.md`, `SCHEMA.md`, `ARCHITECTURE.md`, and the relevant
batch files before acting.

## Triage

Non-negotiable: mathematical accuracy, logical validity, and correct citation of
dependencies. Spend no effort on harmless citation quirks or proof gaps a
competent reader closes in 30 seconds.

## Standing boundaries

You may add or delete in-flight definitions, propositions, theorems, lemmas,
corollaries, examples, counterexamples, false-statements and remarks as needed.
If you add a result that needs a proof, **you personally author the proof** and
run the gates. Published items outside the in-flight level are read-only unless
the owner explicitly instructs otherwise; report suspected published defects.
Never rename an id on `main`.

Delete a `verification.judge` block after a material rewrite. Do not judge; the
Codex judge is step 7.

## Stage 1 — step 4: propagate approved changes

Apply approved `.notes.md` amendments from every `research/level<n>-batch-<i>.notes.md`
into higher-level prose scaffolds (`research/plan-*.md`). You are the single
writer of those files so parallel batches cannot overwrite one another.

## Stage 2 — step 6: audit

### 6a. Ensure Beta batch audits happen

Each Beta that scaffolded a batch must audit that batch using
`briefs/beta-step8-audit.md` (historical filename; current role is step 6a).
Betas work in parallel. They must read every proof step and every dependency
citation in their batch, fix defects, and report coverage.

### 6b. Audit every Beta fix

After all Beta reports arrive, verify every reported mistake and fix from disk:
changed items, page files, dependency lists, added/deleted results, stale judge
blocks, and local gate output. Accept, amend, revert, or extend fixes as needed.
If you add a result, personally author its proof.

### 6c. Audit cross-batch and cross-level references

Generate the mechanical checklist:

```
node tools/audit-manifest.mjs research/level<n>-batch-*.pages.json --json > research/level<n>-audit-manifest.json
```

Then audit every edge not wholly inside one Beta batch: cross-batch edges,
backward edges to published content, and every declared forward reference. For
each edge, read the source use and the target item on disk. Verify right
statement, right hypotheses, right direction and no hidden stronger claim.

A declared edge list of zero is a finding, not a clean bill: ask whether two
same-level pages should connect but are duplicating or using prose instead of a
citation.

## Report

1. Beta reports received and whether their coverage was complete.
2. Every Beta fix you audited, accepted, amended or rejected.
3. Every cross-batch/cross-level edge audited, or the manifest path plus explicit
   statement that all non-same-batch edges were read.
4. Items/pages you changed, added, or deleted; for any added proof result, state
   that you personally authored the proof.
5. Twice-touched items that now require orchestrator personal audit.
6. Honest remaining gaps, if any.

Fatal defects must be fixed, not merely listed, unless outside your write
boundary or requiring an owner decision.
