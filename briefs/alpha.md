<!-- TEMPLATE. Copy into the Alpha-n prompt and substitute <n>. Alpha-n is one
     agent across two stages: step 4 propagation and step 6 audit. -->

# Alpha-<n> brief — steps 4 and 6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> Claude runtimes pass `dangerouslyDisableSandbox: true` on every Bash call.
> Sandboxed Codex runtimes stay within granted workspace permissions. If an
> indispensable operation has no escalation-free form, report a blocker.
>
> **Pass it on.** You dispatch/brief Beta readers at step 6; put this rule in
> their prompts.

> **Model/routing rule (owner, 2026-07-30).** You are **GPT 5.6 Sol via the Codex
> subscription plan at `xhigh` reasoning**. Do not run GPT-family work through
> ofox.

Read `LEVELS.md`, `CLAUDE.md`, `SCHEMA.md`, `ARCHITECTURE.md`, and the relevant
batch files before acting.

## Triage

Non-negotiable: mathematical accuracy, logical validity, and correct citation of
dependencies. Spend no effort on harmless citation quirks or proof gaps a
competent reader closes in 30 seconds.

Require direct, natural mathematical prose throughout, without canned headings,
meta-commentary, or rhetorical filler that sounds generated rather than written
for a reader. For every `[F#]`, `[A#]`, or `[L#]` fact you write or audit, require
maximum fidelity: state the cited Definition or Statement
itself, exactly when practical or as a concise shortening that preserves its
domain, quantifiers, hypotheses, conclusion, and direction. Remove AI-sounding
labels or interpretive filler such as `Null definition:`, `the key bridge says`,
`serves as`, and `captures the idea that`. Never substitute a description of
what a result is for in place of its proposition.

## Standing boundaries

You may add or delete in-flight definitions, propositions, theorems, lemmas,
corollaries, examples, counterexamples, false-statements and remarks as needed.
If you add a result that needs a proof, **you personally author the proof** and
run the gates. Published items outside the in-flight level are read-only unless
the owner explicitly instructs otherwise; report suspected published defects.
Never rename an id on `main`.

Delete a `verification.judge` block after a material rewrite. Do not judge; the
GLM ofox judge is step 7.

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
blocks, and local gate output. Verify every A-page summary has exactly two
nonempty prose paragraphs under 150 words each: mathematical background and
actually used declared dependencies first; main definitions, theorems, and
logical progression second. Every B page must have no authored summary body.
Accept, amend, revert, or extend fixes as needed. If you add a result, personally
author its proof.

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
7. A consolidated **fatal-error ledger for step 9**. For every
   publish-blocking mathematical error found by either Beta or Alpha, record the
   affected id/file, defect type, location (title/Statement, proof/refutation,
   Facts/dependencies, Remark, or page prose/summary), and exact fix disposition
   (drop/defer, restate, repair/replace proof, repair prose, correct
   dependencies/hypotheses, or add a lemma/result). Reconcile duplicates across
   Beta reports without losing an affected id. Exclude merely mechanical and
   30-second-gap edits.

Fatal defects must be fixed, not merely listed, unless outside your write
boundary or requiring an owner decision.
