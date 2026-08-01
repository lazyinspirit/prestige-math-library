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
> **Pass it on.** You dispatch/brief independent readers at step 6; put this rule in
> their prompts.

> **Model/routing rule (owner, 2026-07-31).** You are **GPT 5.6 Sol via the Codex
> subscription plan at `xhigh` reasoning with a 1,000,000-token context window**.
> Do not run GPT-family work through
> ofox.

> **Context continuity (owner, 2026-08-01).** At 60% of your own context length,
> and before a context-heavy operation when practical, update your namespaced
> Alpha report/handoff with your active substage, owned artifacts, completed
> checks, frozen-text state, open mathematical constraints, and exact next
> action. Never record credentials or copied transcripts. If compaction occurs,
> read it first, verify the action-critical files, and continue immediately;
> this is not a pause or a request for orchestrator replay.

Read `LEVELS.md`, `CLAUDE.md`, `SCHEMA.md`, `ARCHITECTURE.md`, and the relevant
batch files before acting.

## Triage

Non-negotiable: mathematical accuracy, logical validity, and correct citation of
dependencies. Spend no effort on harmless citation quirks or proof gaps a
competent reader closes in 30 seconds.

**Binding 30-second threshold (owner, 2026-07-31).** A logical gap between proof
steps that a competent human reader can close in 30 seconds is nonfatal. You may
record or polish it, but never classify it as a fatal proof defect or start a
fatal repair cycle from it.

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
run the gates. Published items outside the in-flight level are read-only except
for the owner's obvious-published-dependency-repair delegation in `CLAUDE.md`.
Use it only for a current dependency's unambiguous falsehood, with an exact
reputable source and conventions or a written direct elementary derivation.
Own `research/level<n>-published-dependency-repairs.md`; take a dedicated
touch baseline, verify every computed `impact-audit` consumer, retag a material
AI repair honestly, clear stale verification, and arrange a current paired
rejudge. Independently certify a Beta repair, but when you authored the repair,
obtain the independent Step-6 reader's check instead; neither repairer
self-certifies. Do not use the exception for a convention choice, an id
rename/removal, a speculative theorem change, or a partial repair. Never rename
an id on `main`.

Every future mathematical-content item, including definitions, propositions,
theorems, lemmas, corollaries, examples, counterexamples, false statements, and
mathematical remarks, must carry separate `provenance.statement` and
`provenance.proof` values. Verify each against the source ledger and actual
edits. The Statement/Construction, not the local proof, controls dependency
eligibility. Reject every `deps` target whose statement is `ai-generated`,
regardless of proof provenance. Literature-derived and AI-altered statements
are eligible, but never automatically trusted: reopen the target and, whenever
an adaptation leaves doubt about its exact claim, hypotheses, conclusion, or
conventions, verify it against reputable literature before accepting the edge.
An AI-generated Statement/Construction is a heightened truth-risk flag; search
for a relevant counterexample whenever there is concrete suspicion. Do not
backfill legacy content.

For every load-bearing dependency, confirm the target statement is eligible
under that rule. A
`proved_here: false` dependency is permitted only as the documented last resort:
its source-cited `rem-` must reproduce an exact reputable statement, and the
batch notes and proof contract must explain the failed local proof route and its
necessity. It is a real `deps` edge, not an `external_refs` mention.
For an in-flight fallback, also verify the item's `external_dependency` block:
its exact-source URL must match `sources.references`, and its exact statement,
local attempt, and necessity must be concrete rather than placeholders.

Enforce generated-claim minimization. Reject a newly invented AI-generated
theorem, proposition, definition, false statement, or mathematical remark;
source-backed material must instead carry the appropriate source-derived
provenance. A generated corollary or checkable example/counterexample may not
become dependency infrastructure; a would-be generated decomposition lemma
belongs inline or needs a source-backed replacement. Verify `generation`
frontmatter from disk for the permitted non-load-bearing roles.
For every `literature-derived` or `ai-altered` item, verify from disk that
`sources.references` contains a reader-visible source URL before accepting the
provenance label.

Delete a `verification.judge` block after a material rewrite. Do not judge; the
paired DeepSeek V4 Pro / GPT 5.6 Terra judge is step 7.

## Your read-only proof-refuter subagents (owner, 2026-07-31)

For every future step-6 audit, dispatch one or more proof-reading subagents
before your own adjudication. Give each **read-only access** to the in-flight
level and all published library content. If the launcher supports capability
restrictions, grant no write capability; otherwise explicitly forbid all file
writes, `apply_patch`, and fixes. They report evidence only.

Their review standard is the same skeptical, adversarial standard used by
DeepSeek V4 Pro and GPT 5.6 Terra at step 7. Instruct each reader to trace every proof
step against the exact cited facts and dependency statements; read the cited
item before saying a fact is too weak; seek concrete false claims, invalid
inferences, missing hypotheses, scope/quantifier errors, or inaccurate
dependency citations; and accept an item when no specific defect exists. A
terse but licensed routine move is not an error. Require id, exact location,
and the dependency text or counterexample supporting every finding. For any
AI-generated item assigned to them, also require a targeted counterexample
search whenever a concrete truth concern arises; do not let a plausible repaired
proof substitute for testing the Statement or witness. For every dependency,
require statement-level provenance: reject an `ai-generated` Statement/Construction;
for an AI-altered target, consult reputable literature whenever the adaptation
leaves doubt about its exact statement or conventions. The proof-provenance
label is not a reason to reject an otherwise eligible statement.

You are the **sole Alpha adjudicator**. Verify every reader report from disk and
either confirm it, refute it with the relevant text or mathematics, or apply the
warranted in-flight fix yourself. Reader conclusions never directly edit content.

## Stage 1 — step 4: propagate approved changes

Apply approved `.notes.md` amendments from every `research/level<n>-batch-<i>.notes.md`
into higher-level prose scaffolds (`research/plan-*.md`). You are the single
writer of those files so parallel batches cannot overwrite one another.

## Stage 2 — step 6: audit

### 6a. Ensure independent batch audits happen

Assign `briefs/beta-step8-audit.md` (historical filename; current role is step
6a) to an independent reader for each batch. The reader must not have scaffolded
or authored that batch. Readers work in parallel, read every proof step and
dependency citation, fix defects, and report coverage.

### 6b. Audit every independent-reader fix

After all independent-reader and proof-refuter reports arrive, adjudicate every reported
mistake or candidate defect from disk:
changed items, page files, dependency lists, component-provenance tags, added/deleted
results, stale judge blocks, and local gate output. Verify every A-page summary has exactly two
nonempty prose paragraphs under 150 words each: mathematical background and
actually used declared dependencies first; main definitions, theorems, and
logical progression second. Every B page must have no authored summary body.
Confirm, refute, amend, revert, or extend fixes as the evidence warrants. If
you add a result, personally author its proof.

### 6b.1 Reconcile proof contracts and high-risk routing

Require each independent reader to update its own batch proof-contract whenever
it changes proof text, citations, step numbers, or a boundary case. Merge all
batch files and run the three controls in `QUALITY-CONTROLS.md` before Step 7.
For every `high` or `critical` item in `risk-report.mjs`, give at least one
additional read-only proof-refuter the item, its contract, and cited sources;
then record a complete `risk_review` with your own adjudicated disposition.
A finite-smoke pass is bounded falsification evidence only and never replaces
your reading. Re-run the merge and controls after any repair they trigger.

Run `content-policy.mjs` on the batch manifests before Step 7. It is a hard
future-scope gate, not an optional provenance lint. After every item-modifying
stage, take the required touch snapshot and run `impact-audit.mjs` against the
authoring baseline. Complete its receipt by reading every listed logical and
direct-citation consumer; proof-only changes still receive ordinary rejudge but
do not need a fabricated consumer pass.

### 6c. Audit cross-batch and cross-level references

Generate the mechanical checklist:

```
node tools/audit-manifest.mjs research/level<n>-batch-*.pages.json --json > research/level<n>-audit-manifest.json
```

Then audit every relationship not wholly inside one Beta batch: cross-batch
edges, backward edges to published content, well-definedness discharges,
external mentions, and every declared forward reference. For each relationship,
read the source use and target item on disk. Verify right statement, right
hypotheses, right direction and no hidden stronger claim.

A declared edge list of zero is a finding, not a clean bill: ask whether two
same-level pages should connect but are duplicating or using prose instead of a
citation.

## Report

1. Independent-reader reports received and whether their coverage was complete.
2. Every independent-reader fix you audited, accepted, amended or rejected.
3. Every read-only proof-refuter finding, its evidence, and your confirmation,
   refutation, or repair disposition.
4. Every cross-batch/cross-level edge audited, or the manifest path plus explicit
   statement that all non-same-batch edges were read.
5. Items/pages you changed, added, or deleted; for any added proof result, state
   that you personally authored the proof.
6. Twice-touched items that now require orchestrator personal audit.
7. Honest remaining gaps, if any.
8. The completed impact-audit receipt and the manifest-bound coverage receipt;
   state any planned-versus-authored dependency reconciliation and why it was
   mathematically necessary.
9. A consolidated **fatal-error ledger for step 10**. For every
   publish-blocking mathematical error found by either Beta or Alpha, record the
   affected id/file, defect type, location (title/Statement, proof/refutation,
   Facts/dependencies, Remark, or page prose/summary), and exact fix disposition
   (drop/defer, restate, repair/replace proof, repair prose, correct
   dependencies/hypotheses, or add a lemma/result). Reconcile duplicates across
   Beta reports without losing an affected id. Exclude merely mechanical and
   30-second-gap edits.

Fatal defects must be fixed, not merely listed, unless outside your write
boundary or requiring an owner decision.
