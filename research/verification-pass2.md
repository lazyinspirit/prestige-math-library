# Verification pass 2 — 152 items, nine escalation verifiers, 2026-07-25

Run AFTER the rounds 1+2 rebuild, with the same instrument that produced
`research/verification-benchmark.md`: one read-only Opus verifier per page,
each reading every item on its page in full **and every item cited in its
Statement / Definition / Facts in full**, ruling CERTIFY or WITHHOLD and biasing
hard toward WITHHOLD.

**Result: 109 CERTIFY / 43 WITHHOLD (28.3%)**, against the benchmark's
50/150 (33.3%).

> **Arithmetic note.** The `filters-and-ultrafilters` verifier reported
> "6 CERTIFY / 6 WITHHOLD" but its own verdict list contains 5 and 7. The totals
> below are recounted from the per-item lists, not from the agents' summary
> lines. Recount every agent's arithmetic; do not trust the summary.

## Per page

| page | rebuilt in round 1+2 | certify | withhold | rate | benchmark rate |
|---|---|---|---|---|---|
| order-zorn-and-the-axiom-of-choice | yes | 21 | 3 | 12.5% | 30.4% |
| ordinals-and-transfinite-recursion | yes | 19 | 4 | 17.4% | 30.4% |
| roots-and-rational-powers | yes | 18 | 4 | 18.2% | 36.4% |
| sequences-and-limits | yes | 13 | 5 | 27.8% | 66.7% |
| suprema-and-infima | yes | 11 | 6 | 35.3% | 29.4% |
| countability-and-uncountability | yes | 13 | 7 | 35.0% | 21.1% |
| suprema-and-infima-examples | **no** | 5 | 3 | 37.5% | 12.5% |
| filters-and-ultrafilters | **no** | 5 | 7 | 58.3% | 33.3% |
| order-zorn-...-examples | **no** | 4 | 4 | 50.0% | 25.0% |
| **total** | | **109** | **43** | **28.3%** | 33.3% |

Cohort split: pages the rebuild covered **23.4%** (29/124, from 35.2%); pages it
did not cover **50.0%** (14/28, from 25.0%).

## THE RESULT THAT MATTERS MORE THAN THE RATE

**The withhold rate is a SAMPLING RATE, not a quality score.** The escalation
tier rotates its findings exactly as the judge does. On
`countability-and-uncountability`: 2 of the original 4 defects were fixed, 2
recurred, and **5 NEW defects appeared in items the first pass had CERTIFIED**.

So a page can be genuinely better and score worse, and two passes over identical
content would not agree. Never present a before/after rate as a quality delta
without the per-item ledger (fixed / recurred / newly-found) beside it.

## Why the un-rebuilt cohort got WORSE

Two causes, both mine:

1. **Coverage hole.** Five rebuild agents covered six pages;
   `filters-and-ultrafilters` and both examples pages got NO agent, so six
   benchmark defects were never fixed. Diff the assigned set against the defect
   list before declaring a round done.
2. **Rewriting an item breaks its consumers, and no gate catches it.** Fixing
   `lem-max-is-sup` (inf/min dual moved out of the Statement) and
   `lem-finite-choice` (restated over an indexed family) left three downstream
   items citing the OLD form, on pages nobody touched. **A consumer sweep must
   follow every rewrite.**

## The 43 withheld items

### order-zorn-and-the-axiom-of-choice (3 of 24)
`thm-zorn` order axioms unlicensed, `def-partial-order` absent from deps ·
`thm-zorn-implies-ac` applies Zorn to a poset never verified to be one ·
`cor-ac-iff-zorn` relative-consistency claim with no Con(ZF)

### ordinals-and-transfinite-recursion (4 of 23)
`def-ordinal` Remark asserts a biconditional false without clause 1
(counterexample α = {{{∅}}}) · `lem-omega-least-limit-ordinal` "without Infinity
every ordinal would be 0 or a successor" — dropping an axiom is not its negation ·
`def-cardinal` says the countability page supplies pigeonhole; it does not, and
nothing in the repo proves it · `rem-choice-ledger` lists `cor-ac-iff-well-ordering`
as assuming full choice, but it is a ZF equivalence

### roots-and-rational-powers (4 of 22)
`lem-power-monotone` `1 > 0` mis-cited *(fixed in-session)* · `thm-am-gm` uses
`0·x = 0` uncited *(fixed)* · `fs-rational-power-of-negative-base` cites
`def-rat-order` for `−8 < 0` in ℝ *(fixed)* · `thm-weighted-am-gm-rational` takes
finite sums outside ℝ, where no item defines them

### sequences-and-limits (5 of 18)
`def-sequence` and `rem-sequence-conventions` both argue "a sequence is not its
range" with witnesses having DIFFERENT ranges, which proves nothing ·
`lem-convergent-implies-bounded` and `thm-algebra-of-limits` cite items that do
not state `1 > 0` · `fs-bounded-implies-convergent` claims a sequence is
"referred to in the remarks of `lem-reciprocal-of-null-diverges`"; that file has
zero hits for it

### suprema-and-infima (6 of 17)
`def-infimum` empty `justified_by` · `thm-infimum-property` and `lem-inf-epsilon`
attribute an ELEMENTWISE order reversal to `lem-reflection`, which makes only
set-level claims · `lem-sup-scale`, `lem-sup-sum`, `fs-sup-belongs-to-set` cite
`def-field`/`lem-of-sign-rules` for `0·c = 0`, `2 ≠ 0` and closure of the
positives under addition, none of which those items state

### countability-and-uncountability (7 of 20)
`thm-n-cross-n-countable` and `lem-subset-of-countable` attribute transitivity of
`<` to items about transitive SETS and to trichotomy · `lem-finite-subsets-listable`
is the consumer that never adopted `lem-nat-order-is-membership` ·
`thm-r-uncountable` cites `def-nat-order` for `n < σ(n)` · `def-countable-choice`
and `rem-continuum-hypothesis` state independence results unconditionally ·
`fs-uncountable-contains-interval` asserts density of the irrationals, unproved
and unmarked

### suprema-and-infima-examples (3 of 8)
`ex-sup-of-open-interval` and `ex-inf-of-reciprocals` cite `lem-max-is-sup` for an
inf/min dual its rewritten Statement no longer contains · `ex-sup-of-sum-of-sets`
asserts non-attainment never established

### filters-and-ultrafilters (7 of 12)
`def-filter` non sequitur (incomparability ⇏ no greatest) · `def-ultrafilter`
generalises Feferman from ℕ to all sets · `lem-union-of-chain-of-filters` cites
`def-partial-order` for "upper bound" · `thm-ultrafilter-lemma` uncited cardinality
claim · `thm-ultrafilter-characterisation` false "exactly" in a Remark ·
`rem-choice-strengths` the THIRD copy of the false "costs exactly AC" ·
`fs-every-ultrafilter-principal` Blass and Sierpiński asserted in the library's
own voice with no ‡ marking

### order-zorn-and-the-axiom-of-choice-examples (4 of 8)
`ex-canonical-choice-on-naturals` mis-cites the rewritten `lem-finite-choice` ·
`ex-russells-socks` calls Fraenkel-Mostowski models ZF models (they are ZFA) and
carries an unmarked external dependency · `ex-zorn-poset-of-chains` cites
`def-partial-order` for a restriction claim it does not make, and states the
Hausdorff maximal principle with no AC hypothesis · `cex-zorn-hypothesis-fails`
states Zorn without its AC hypothesis
