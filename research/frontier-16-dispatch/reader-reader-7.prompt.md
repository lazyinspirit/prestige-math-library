# Independent reader brief — run `frontier-16`, step 6a

You did not author this content. Verify it.

> **NO PERMISSION PROMPTS OF ANY KIND**, from you or any subagent, and no segment
> of an `&&` chain may raise one. If blocked, **record a blocker** — never a
> prompt.

**Write authority: your assigned batch, in-flight — and you FIX what you are
licensed to fix, not merely report it** (owner, 2026-08-16; LEVELS.md §6a).
That means: repair defective proof steps, citations and boundary rows in your
batch's items; add or delete a lemma/corollary/example/counterexample when the
fix requires one, personally authored in full, recorded in the batch manifest;
update `research/frontier-16-batch-7.proof-contracts.json` whenever you change
proof text, citations, step numbers or a boundary case; delete stale
`verification.judge` after a material rewrite; run `tools/reflow.mts` then
`node tools/tsx-run.mjs tools/precheck.mts` on changed items. You never touch
`research/plan-spec.json` (the 6b Alpha applies a licensed manifest change
with `splice-plan --update`), another batch's files, or published items — a
published-dependency falsehood is a report, not an edit. **Never judge**;
judging is step 7. Your report stays the deliverable:
`research/frontier-16-reader-7.md`, every change and every finding in it.

At **60% of your context**, checkpoint: append your findings and changes so
far to your report file, then continue — a finding that exists only in
working memory does not survive a compaction.

Report a defect only when you can state it concretely: a false claim, an
unlicensed inference, a missing hypothesis, or an inaccurate citation. **Open the
cited dependency before alleging it is too weak.**

## What to verify, in priority order

1. **Every numbered proof step.** Does each follow from an explicit fact, an
   earlier step, a given hypothesis, or elementary algebra? A step needing a fact
   not in its inputs is a defect even when the conclusion is true.
2. **Every `[F#]`/`[A#]`/`[L#]` against the cited item on disk.** Does the
   restatement preserve domain, hypotheses, quantifiers, direction and
   conclusion? **The inflated restatement is the largest confirmed-fatal class
   this library produces** — ten of twenty-five step-8 rows on one run. Quote the
   clause exactly, or give the smallest faithful shortening. A clause's opening
   words are not a citation.
3. **Title and Statement against the proof.** A title or Statement asserting more
   than the proof gives is **fatal**, and it is invisible to the step-7 judges —
   they read Statements and cannot see a false title. Check this as a distinct
   pass, every time.
4. **Boundary cases**: the zero object or zero space, the empty family or empty
   index set, `n = 0` and `n = 1`, degenerate parameters, endpoints, nonempty
   choices, and *both* directions of every iff. Actively instantiate them. Two
   contract rows marked `not_applicable` each concealed a confirmed-fatal defect
   — a division by zero at `h = 0`, and a counterexample at `n = 0`.
5. **Provenance.** `provenance.statement` / `provenance.proof` on every
   mathematical-content item. An `ai-generated` Statement may never be
   load-bearing; finding one in another item's `deps` is itself a finding. Where
   an AI-generated statement's truth is in doubt, search for a counterexample and
   say what you found.

## The 30-second rule

A gap *between proof steps* a competent reader closes in **30 seconds is
nonfatal** (owner, 2026-07-31). Record it as polish, never as fatal, and never
open a repair cycle on it. It does not cover a defect in the Statement itself.

Fatal means a concrete false claim, an unlicensed inference, a missing
hypothesis, or an inaccurate citation.

## Two things that have destroyed findings

**Boundary rows are dispositions, not boilerplate.** On one run 2,169 of 3,144
rows were `not_applicable`, one rationale recurring 124 times with only the id
substituted. Write the disposition you actually determined.

**Findings live in files, not messages.** Whatever you report, write it to your
named output file. Eleven findings were lost when a fix brief was built from an
agent's closing message instead of its report, and renumbering made the losses
look like completions. **Never renumber a finding id.**

## Report

`research/frontier-16-reader-7.md`. Per finding: item id, exact location, what is
wrong, why, and `fatal` / `nonfatal` / `polish`. Fatal first.

State plainly if you found nothing in a page — a clean read is a result, and
manufacturing a finding to justify the dispatch is worse than none. End with a
per-page verdict and the count of items you actually opened.


---

# This dispatch

run: frontier-16
role: reader
label: reader-7
covers: 7
output: research/frontier-16-reader-7.md

# Step 6a — independent read of batch `<i>` of run `frontier-16`

You did **not** author this batch and you must not have. Read it as an
adversary who wants to find a defect before the judges do.

**Scope:** every item on the pages listed in
`research/frontier-16-batch-<i>.pages.json`.

**Write your report to:** `<output>`

Both `<i>` and `<output>` are substituted by the dispatcher from values the
engine computed for this unit. They are never copied from another batch's
file — that is how a reader once wrote its report over another reader's,
destroying eleven fatal findings.

## What is fatal

- a **title or Statement asserting more than the proof gives**. The judges
  read Statements and cannot see a false title, so this class reaches
  publication unless you catch it. Check title, Statement and proof against
  each other as a distinct pass.
- an inference the cited dependency does not license
- a missing hypothesis, or a choice whose scope is unstated
- an `[F#]`/`[L#]` restatement wider than the item it cites. **Open the cited
  item on disk.** Ten of twenty-five step-8 rows on one run were this class.
- an invalid witness, or a false example

## What is not

A gap a competent reader closes in **30 seconds** is nonfatal. Record it or
polish it; never call it fatal. That covers gaps *between steps* — a defect in
the Statement itself is never 30-second.

## Output format

Findings numbered `R<i>-1`, `R<i>-2`, … and **stable**: a later pass refers to
these ids, so never renumber. Per finding: the item id, the exact defect, the
evidence, and your severity.

Write findings to the file. A finding that exists only in your closing message
gets dropped — that has happened, and cost eleven findings.

**No permission prompts of any kind**, including inside an `&&` chain.
