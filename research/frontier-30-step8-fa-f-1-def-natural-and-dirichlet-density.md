# Final-adjudicator evidence: `def-natural-and-dirichlet-density`

## Disposition

`repaired`

The Alpha's mathematical repair is correct.  The current definition restricts
integer sets to positive integers, uses
`(s-1) sum_{n in A} n^{-s}` for density relative to all positive integers,
and defines prime-relative Dirichlet density by the limiting ratio to the full
prime sum.  Because
`sum_p p^{-s} = log(1/(s-1)) + O(1)`, that ratio limit is equivalent to a
`delta log(1/(s-1)) + o(log(1/(s-1)))` asymptotic.  It does not impose the
strictly stronger bounded-remainder condition rejected by the second frozen
judge context.

## Independent review

I inspected the item, its empty prerequisite list, its number-theory A-page,
the batch-8 page and coverage records, the downstream proof-contract uses, the
two frozen judge rejections, defect records `frontier-30-S8-f-006` and
`frontier-30-S8-f-042`, and the Alpha's recovery adjudication.  The statement
is correctly scoped and agrees with the page convention distinguishing density
among all positive integers from relative density among the primes.

The item has no local proof, as appropriate for a definition.  Its cited source
directly supports all substantive formulas:

- https://kskedlaya.org/ant/chap-primes-in-ap.html — Definition 4.3 defines
  natural density relative to an infinite set of positive integers;
  Definition 4.4 defines Dirichlet density as the limit of the ratio of the two
  Dirichlet sums; Example 4.5 identifies the positive-integer specialization
  with `(s-1) sum n^{-s}`; and Example 4.6 proves
  `sum_p p^{-s} = -log(s-1) + O(1)` and gives the prime-relative logarithmic
  ratio.

## Independent repair and checks

The current item bytes required no further mathematical edit.  However, the
live batch-8 and merged proof-contract entries for the direct consumer
`thm-natural-density-implies-dirichlet-density` still quoted the superseded
pre-repair `O(1)` wording.  The strict proof-contract checker reported
`citation-quote-mismatch`.  I regenerated exactly that consumer's citation and
derivation entries in both
`research/frontier-30-batch-8.proof-contracts.json` and
`research/frontier-30-proof-contracts.json` from the current item text.  This
is a direct run-local contract repair, not an edit to a dependency, so no
owner-prerequisite-repair licence is applicable.

Focused checks after regeneration:

- item precheck for `items/def-natural-and-dirichlet-density.md`;
- strict proof-contract checking of the affected batch and merged entries;
- citation-fidelity checking of the affected batch contract;
- dependency checking for the repository graph.

