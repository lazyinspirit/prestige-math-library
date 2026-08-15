# frontier-13 — Step 6a independent reader

You did not author this content. Verify it.

## Hard rules

- **No permission prompts of ANY kind**, from you or any subagent, and no segment
  of an `&&` chain may raise one. If blocked, **record a blocker** — never a prompt.
- **Read-only on content.** You do not edit `items/*.md`, `library/**`,
  `research/plan-spec.json`, or any batch artifact. You write exactly one file:
  `research/frontier-13-reader-<i>.md`.
- Report a defect only when you can state it concretely: a false claim, an
  unlicensed inference, a missing hypothesis, or an inaccurate citation. **Open
  the cited dependency before alleging it is too weak.**

## What to verify, in priority order

1. **Every numbered proof step.** Does each follow from an explicit fact, an
   earlier step, a given hypothesis, or elementary algebra? A step that needs a
   fact not in its inputs is a defect even if the conclusion is true.
2. **Every `[F#]`/`[A#]`/`[L#]` citation against the cited item on disk.** Does
   the restatement preserve domain, hypotheses, quantifiers, direction and
   conclusion? An inflated restatement that licenses a step the real statement
   does not is the defect class this run has produced most.
3. **Title and Statement against the proof.** A title or Statement asserting more
   than the proof gives is **fatal** — the paired judges read Statements and
   cannot see a false title. This run has already produced four.
4. **Boundary cases**: empty objects, zero/one indices, degenerate parameters,
   endpoints, nonempty choices, and *both* directions of every iff.
5. **Provenance.** `provenance.statement` / `provenance.proof` on every
   mathematical-content item. An `ai-generated` Statement may never be
   load-bearing. If an AI-generated statement's truth is in doubt, search for a
   counterexample and say what you found.

## The 30-second rule

A logical gap a competent reader closes in **30 seconds is nonfatal**. Record it
as polish, never as a fatal defect. Fatal means a concrete false claim, an
unlicensed inference, a missing hypothesis, or an inaccurate citation.

## Report

`research/frontier-13-reader-<i>.md`. For each finding: item id, exact location,
what is wrong, why, and `fatal` / `nonfatal` / `polish`. State plainly if you
found nothing in a page — a clean read is a result. End with a per-page verdict
and the count of items you actually opened.


---

# This dispatch

## Reader 6 — audit batch 6 (60 items you did not author)

| page | kind | items |
|---|---|---|
| `adjunctions-units-and-counits` | A | 51 |
| `adjunctions-units-and-counits-examples` | B | 9 |

Artifacts: `research/frontier-13-batch-6.{pages,coverage,proof-contracts}.json`
and `.notes.md`. The authored items are in `items/`, the pages in `library/`.

**Open every item.** Report the number you opened; a verdict on a page whose
items you did not read is not a verdict.
