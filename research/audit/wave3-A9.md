# Wave 3 — A9, scope-denial re-grep and published-claim decay

Run 2026-08-04 by the orchestrator over every file this wave materially changed.

## Universe

30 files: the 29 items `audit-split.mjs` classifies as material against `HEAD`
(the 26 from A4/A6 plus A8's three), the one changed page
`library/foundations/ordinal-arithmetic.md`, and the two out-of-wave items
repaired under the owner-authorised published-dependency repair. Pure retags are
excluded by construction: their prose is byte-identical.

## Mechanical half

`prosecheck.mjs` — **exit 0, "no positional claim contradicts the spec"**. The
decidable class (a "later"/"earlier" phrase whose linked target's page order
contradicts it) is clean.

## The sweep proper

Grep is the entry point, never the sweep. The phrase classes searched were
`neither`, `no item`, `no other item`, `lacks`, `absent from`, `silent on`,
`nowhere`, `does not exist`, `not developed`, `no such`, `only place`, `the only`
— 14 files produced 30 hits, and **every hit was read in place**. Findings:

**Nothing to repair.** Every hit falls into one of three clean classes:

1. **Ordinary mathematics.** "the only open sets are ∅ and X"; "no such V
   exists"; "∅ … is the only subset of 0". These are propositions, not corpus
   claims.
2. **Properly scoped page-local claims.** `ex-connectedness-of-the-standard-topologies`
   says "**No item among this page's declared prerequisites** settles whether the
   cofinite topology on an infinite X … is path-connected" — bounded to the
   declared prerequisites, which is the honest form.
   `rem-connectedness-conventions`'s title ends "and what is not developed here",
   scoped to its page.
3. **Already repaired this wave.** `rem-real-exponents-deferred` carried the one
   genuine corpus falsehood — "the page that carries that development does not
   exist yet" when `the-logarithm-and-general-powers` is published — and Alpha
   repaired it at A6. Its surviving "machinery that does not exist yet" is scoped
   by the preceding clause to that point in the reading order.

## One candidate recorded, not chased

`cex-omega-one-has-no-at-most-countable-cofinal-subset` line 49:

> Whether $\omega^{\omega}$ and $\varepsilon_0$ are at most countable is a
> question **no item on these pages settles**, so neither is offered here as an
> instance.

The claim is scoped ("on these pages"), which is why it is not a defect under the
standing triage rule. It is nonetheless the shape most likely to decay: the page
carries `thm-omega-one-is-the-least-uncountable-ordinal`, whose clause (a) gives
"an ordinal injects into ℕ iff it is at most countable", and
`thm-countable-subsets-of-omega-one-are-bounded` with its explicit AC_ω boundary.
Whether those together *settle* the countability of ε₀ — as opposed to making it
derivable — is a judgement about what "settles" means, and both readings are
defensible. **Recorded for the A10 owner queue; no edit made.**

This is the same disposition wave 2 gave its 14 scope-denial candidates.

## Published-claim decay noticed in passing

Two, both already handled and recorded here so the sweep's coverage is visible:

- `rem-real-exponents-deferred` — repaired by Alpha at A6 (above).
- `def-rational-power` — "There is no $a^x$ for irrational $x$ in this library",
  falsified by the published `def-real-power`, and cited in its next sentence to
  the very item recording that. Found by a judge lane at A7, confirmed fatal by
  Alpha at A8, repaired.

Both were true when written. No gate can see this class; it is found only by
reading the corpus level by level, which is what this workflow does.
