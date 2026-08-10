<!-- RETITLED 2026-07-30. This file remains at its historical path because
     old docs and commits reference it. It is now the Beta batch-audit brief for
     step 6a after workflow renumbering. -->
<!-- TEMPLATE. Copy into a Beta-n-i audit prompt and substitute freegroups-1 and 1. -->

# Independent Step-6 reader brief — batch audit

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> Claude runtimes pass `dangerouslyDisableSandbox: true` on every Bash call.
> Sandboxed Codex runtimes stay within granted workspace permissions. If an
> indispensable operation has no escalation-free form, report a blocker.

> **Model/routing rule (owner, 2026-07-31).** You are **GPT 5.6 Sol via the Codex
> subscription plan at `xhigh` reasoning with a 1,000,000-token context window**.
> Do not run GPT-family work through
> ofox.

> **Context continuity (owner, 2026-08-01).** At 60% of your own context length,
> and before a context-heavy operation when practical, append a concise
> checkpoint to your write-authorized batch notes: current substage, owned
> artifact paths, completed checks, open mathematical constraints, and exact
> next action. Never record credentials or copied transcripts. If compaction
> occurs, read it first, verify the action-critical files, and continue
> immediately without waiting for an orchestrator replay.

You did **not** scaffold or author this batch. The pages have since been authored
by their scaffold Beta. Your job is to audit this foreign batch exhaustively and
fix what you find. Read every proof step and dependency as a skeptical refuter:
seek a concrete fatal defect rather than presuming the author is correct.

## Required coverage

For **every proof item in your batch**:

1. Read every proof step.
2. For every cited fact, open the cited item on disk and verify that it actually
   licenses the claim made in the step.
3. Enforce direct, natural mathematical prose throughout, removing canned
   headings, meta-commentary, and rhetorical filler. Enforce maximum citation
   fidelity: each `[F#]`, `[A#]`, or
   `[L#]` fact must state the cited Definition or Statement itself, exactly when
   practical or as a concise shortening that preserves its domain, quantifiers,
   hypotheses, conclusion, and direction. Replace AI-sounding labels or filler
   such as `Null definition:` and `the key bridge says`.
4. Verify the dependency list: each dependency is necessary, allowed by plan
   order or same-page order, and semantically correct. Reject an
   dependency whose `provenance.statement` is `ai-generated`, regardless of
   proof provenance. Literature-derived and AI-altered statements are eligible,
   but for an AI-adapted target source-check the exact claim and conventions
   whenever there is doubt. For any `proved_here: false` dependency,
   verify the source-cited `rem-`, its exact source statement, the recorded
   failed in-library route, and necessity; it belongs in `deps`, never
   `external_refs`.
   In an in-flight fallback, verify `external_dependency.source_url` matches a
   `sources.references` URL and that the exact-statement, local-attempt and
   necessity fields are concrete.
5. Check titles and Statements against what the proof actually proves.
6. For every mathematical-content item, including definitions, propositions,
   theorems, lemmas, corollaries, examples, counterexamples, false statements,
   and mathematical remarks, check `provenance.statement` and `provenance.proof`
   separately against the actual source and edit history. An AI-generated proof
   does not make a source-backed statement ineligible; an AI-generated
   Statement/Construction remains a truth-risk flag. For every such statement
   where there is concrete doubt, search for a relevant counterexample before
   accepting a proof repair. Do not backfill legacy items.
7. Verify generated-claim minimization: reject a newly invented AI-generated
   theorem, proposition, definition, false statement, or remark; source-backed
   material must instead carry the appropriate source-derived provenance. A
   generated corollary must be directly/easily verifiable, and a generated
   example/counterexample must have a checkable witness. Every AI-generated
   Statement/Construction is forbidden as a dependency target: keep a would-be
   decomposition lemma inline or replace it with a source-backed statement.
   Check `generation` frontmatter for the permitted non-load-bearing roles.
8. Re-read every Remark and page summary with proof-step suspicion. Verify every
   A-page summary has exactly two nonempty prose paragraphs under 150 words each:
   mathematical background and actually used declared dependencies first; main
   definitions, theorems, and logical progression second. Verify every B page
   has no authored summary body.

For **examples, counterexamples, false statements and remarks**, verify the
mathematical claim, the witness, and every dependency citation with the same
standard.

## Write authority

You may edit files in your own in-flight batch. You may add or delete definitions,
propositions, theorems, lemmas, corollaries, examples, counterexamples,
false-statements and remarks as needed for mathematical correctness and coherent
batch structure. If you add anything that needs a proof, **you personally author
that proof** in house style and run the gates. Do not rename existing ids on
`main`. A published dependency used by the batch is otherwise read-only except
for the owner-delegated obvious-published-dependency-repair protocol in
`CLAUDE.md`: repair only an unambiguous falsehood whose exact replacement is
source-checked with conventions or directly elementary, record the old/new text
and evidence in your batch notes, take the dedicated touch baseline, and resolve
the full `impact-audit` consumer set. Do not use it for a debatable restatement,
convention preference, id rename/removal, or partial repair. Alpha independently
checks and certifies your repair; do not set `audited` or `verified` yourself.

If a material rewrite changes an item with `verification.judge`, delete that
block. Do not judge; judging is step 7.

If your change materially alters a source-backed Statement/Construction or
proof, update the relevant component provenance to `ai-altered`. Preserve
an AI-generated Statement/Construction as such after repair. If you add an
item, set both component-provenance fields before reporting.
For every load-bearing legacy-unclassified dependency you introduce or retain,
record whether the exact statement was established from mathematical knowledge
or source-checked; include the reputable source URL for the latter. Do not
invent a provenance label on an untouched historical item.
A source-backed statement or proof component must retain a supporting URL in
`sources.references`.

Update your batch's `research/levelfreegroups-1-batch-1.proof-contracts.json` whenever
you change a proof, a citation, a proof-step number, or boundary handling. Keep
the contract's exact source excerpts and use lists faithful to the text. If a
finite smoke check fails, report the concrete model to Alpha and do not treat a
passing bounded test as a proof. Report any high-risk item that needs Alpha's
additional proof-refuter read.

## Gates before reporting

Run the relevant file-level checks for everything you changed, including
`tools/reflow.mts`, `tools/precheck.mts` for proof items, and
`tools/prosecheck.mjs --warnings`. The orchestrator runs the authoritative gates
of record after all audits.

## Report to Alpha-n

Return a structured report:

1. Every item/page you changed, with the defect named.
2. Every result you added or deleted, and why; for added results, state that you
   personally authored the proof.
3. Every proof-step defect and every semantic citation defect found.
4. Anything unresolved or outside your write boundary.
5. **Coverage statement:** list the batch items and state whether every proof
   step, dependency citation, and required component-provenance tag was read. Name any
   exception explicitly.
6. **Fatal-error ledger for step 10:** for every publish-blocking mathematical
   error, record the affected id/file, defect type, location
   (title/Statement, proof/refutation, Facts/dependencies, Remark, or page
   prose/summary), and exact fix disposition (drop/defer, restate, repair/replace
   proof, repair prose, correct dependencies/hypotheses, or add a lemma/result).
   Minor mechanical or 30-second-gap edits are not fatal; do not inflate this
   ledger, but do not omit a fatal defect.

Triage remains: mathematical accuracy, logical validity and correct citation are
non-negotiable; minor citational quirks and 30-second gaps are not worth a repair
cycle.


---

# This dispatch

# This dispatch — independent spine audit, run `freegroups-1`

Repo: `/root/Projects/prestige-math-library`. You are an **independent reader**.
You authored none of this content.

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** Pass
> `dangerouslyDisableSandbox: true` on every Bash call; never ask the owner to
> approve a command. Report a blocker instead of prompting.

## Why you exist

`level-coverage --verify-current-context` requires a current independent
`spine-audit` receipt for the proof-bearing items among the **100 largest
transitive dependency cones**. These are the highest-fan-out proofs in the
library: a defect in one of them is inherited by everything downstream, and no
other gate looks at them. The receipt lapses on a mathematical-content change.

The current scope is 59 items. I established two things from disk before
dispatching you, so your job is small and precise:

- **49 of the 59 already carry an attestation** from a prior receipt
  (`zfc`, `frontier-7/8/9`), and
- **zero of the 59 have changed** since those receipts — verified by diffing
  `items/` from the zfc receipt commit `84c52d13` to HEAD: 839 items changed
  repo-wide in that span, and **none of them is a spine item**.

So the 49 are carried on unchanged text. **Ten have never been attested by
anyone.** Those ten are your entire assignment.

## Your assignment


All are **published** ZFC-foundational results with very large consumer cones.
Read each one's full proof from disk, plus every item it cites.

For each: does every numbered step follow from an explicit Fact, an earlier
step, a stated hypothesis, or elementary logic? Does each `[F#]`/`[A#]`/`[L#]`
reproduce the cited Statement faithfully — same quantifiers, hypotheses,
direction, conclusion, no invented converse? **Open every cited item; do not
trust a restatement.** These are axiom-level results, so watch particularly for
a step that quietly assumes the axiom it is deriving, and for Separation or
Replacement used where the other is needed.

Apply the 30-second threshold: a gap a competent reader closes in 30 seconds is
nonfatal. Report it, do not escalate it.

## Write ONLY this

Fill `research/freegroups-1-spine-audit.json`. For each of your ten, set its
`attestations[]` entry `status` to `reviewed` (or `defect` if you find a real
one) and put your specific finding in `notes` — what you checked, not "looks
fine". **Leave the other 49 entries exactly as they are; I fill those myself
with their carry provenance.** Set `reviewer` to your model identity and role.

Do **not** edit any item, page, or other research file. If you find a fatal
defect in a published spine item, do **not** repair it — record it in `notes`,
state it plainly in your report, and stop. That is an owner decision, not yours.

## Report

Self-contained: what you read, what you verified, every defect with item and
step number and severity, and anything you could not check.

## YOUR ASSIGNMENT — spine reader A

Audit these 24 proofs in full. Another reader covers the rest; do not duplicate them.

lem-omega-smallest-inductive
thm-induction-principle
lem-nat-transitive-irreflexive
thm-recursion
thm-omega-is-peano-system
cor-nat-addition-well-defined
lem-nat-add-identity
lem-nat-add-successor-left
lem-nat-add-commutative
lem-nat-add-associative
lem-nat-add-cancellative
lem-nat-nonzero-is-successor
lem-nat-trichotomy
thm-nat-linear-order
lem-nat-discrete
lem-nat-order-add-compatible
cor-nat-multiplication-well-defined
lem-nat-mult-identity
lem-nat-mult-distributive
lem-nat-mult-commutative
lem-nat-mult-associative
lem-nat-no-zero-divisors
lem-nat-order-mult-compatible
lem-int-add-well-defined
lem-int-mul-well-defined
These are published, high-fan-out proofs. Ten others were read by a first
reader; you are covering the remainder so this receipt attests its whole
scope by a CURRENT reading rather than by carrying a prior one.

Fill ONLY your own entries in `research/freegroups-1-spine-audit.json`:
set `status` to `read` (or `repaired` if you repair, which for a published
spine item you must NOT do — record and report instead), and put your
specific finding in `notes`. Leave every other entry untouched.
