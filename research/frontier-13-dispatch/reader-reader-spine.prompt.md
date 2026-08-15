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

## Spine attestation — one item

`spine-audit.mjs` lists the proof-bearing items among the **100 largest
transitive dependency cones**. This run's scope is 60 items; **59 are byte-identical
to the text attested in `research/frontier-12-spine-audit.json` and were not
modified by this run** (verified: 0 modified published items in the tree). One id
is new to the top-100 scope because this run's 467 items enlarged its consumer
cone:

### `lem-of-q-embeds`

Read the proof in full and attest it. This is a high-fan-out published item — the
gate exists to stop a level resting on an unreviewed proof that thousands of
items depend on transitively.

Check, in priority order:

1. **Every numbered step follows** from an explicit fact, an earlier step, a given
   hypothesis, or elementary algebra.
2. **Every citation is faithful** to the cited item's actual Statement — open each
   dependency. An inflated restatement that licenses a step the real statement
   does not is this project's dominant defect class; this run confirmed dozens.
3. **Title and Statement claim no more than the proof gives**, including boundary
   and degenerate cases.

You are attesting a **published** item. If you find a genuine defect, that is a
`confirmed_fatal` on published content and it goes to the owner, not into a
repair — say so plainly and stop. Do not edit anything.

Report: `research/frontier-13-reader-spine.md` — the verdict, what you checked,
and the specific evidence. State how much of the proof you actually read.
