# Independent reader brief — run `<run>`, step 6a

You did not author this content. Verify it.

> **NO PERMISSION PROMPTS OF ANY KIND**, from you or any subagent, and no segment
> of an `&&` chain may raise one. If blocked, **record a blocker** — never a
> prompt.

**Read-only on content.** You do not edit `items/*.md`, `library/**`,
`research/plan-spec.json`, or any batch artifact. You write exactly one file:
`research/<run>-reader-<i>.md`.

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

`research/<run>-reader-<i>.md`. Per finding: item id, exact location, what is
wrong, why, and `fatal` / `nonfatal` / `polish`. Fatal first.

State plainly if you found nothing in a page — a clean read is a result, and
manufacturing a finding to justify the dispatch is worse than none. End with a
per-page verdict and the count of items you actually opened.
