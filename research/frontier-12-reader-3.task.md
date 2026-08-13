## Reader 3 — audit batch 4 (61 items)

You did **not** author this batch. That separation is the point of your role.

| order | kind | page | items |
|---|---|---|---|
| 183 | A | `pi-the-equivalent-characterizations` | 14 |
| 184 | B | `pi-the-equivalent-characterizations-examples` | 7 |
| 241 | A | `line-integrals-and-the-gradient-theorem` | 31 |
| 242 | B | `line-integrals-and-the-gradient-theorem-examples` | 9 |

Every item id is listed in `research/plan-spec.json` under these pages, and each
one is a file at `items/<id>.md`. The batch's own record — what its author
promised — is `research/frontier-12-batch-4.notes.md` and
`research/frontier-12-batch-4.proof-contracts.json`.

### Write your findings to

`research/frontier-12-reader-3.findings.md`

### You are READ-ONLY on content

Do not edit any file under `items/` or `library/`. Alpha adjudicates every
finding from disk and applies any repair. Your job is evidence, not a verdict.

### Priorities for this batch

Read every item, but spend your attention where the exposure is. 61 items is
a lot; a shallow pass over all of them is worth less than a real pass over the
proof-bearing ones plus a check of every citation.

Specific things known to be live in this run:

- **Hypotheses.** `char != 2` for polarisation and orthogonal diagonalisation;
  ordered fields for Sylvester's inertia; star-shaped rather than merely
  connected for the converse of closedness; smallness conditions in the
  category-theory limits; pairwise versus mutual independence in probability;
  nonnegativity for Markov; the split-characteristic-polynomial hypothesis where
  the source assumed an algebraically closed field.
- **Citation fidelity.** A `[F#]`/`[A#]`/`[L#]` fact must state the cited
  proposition itself. This run already caught one at scaffold stage — a quoted
  `|sin x| <= |x|` where the source states `sin(x) <= x` for `x >= 0`. Open the
  cited item on disk and compare; do not trust the restatement.
- **Green's theorem** (if batch 4) is deliberately scoped to elementary regions
  and finite unions. Complaining it does not cover arbitrary Jordan domains is
  NOT a finding. A proof step that quietly assumes a Jordan domain IS one.
- **Titles.** A title or Statement claiming more than the proof delivers is
  fatal, and the step-7 judges cannot see a false title.

Item ids, for your checklist:

- `def-circular-arcs-circumference-and-diameter`
- `def-riemann-area-between-continuous-graphs`
- `thm-pi-zero-and-period-characterizations`
- `thm-unit-semicircle-arc-length-is-pi`
- `thm-circle-circumference-diameter-ratio-is-pi`
- `thm-archimedean-polygon-perimeter-characterization-of-pi`
- `thm-disc-area-is-pi-r-squared`
- `thm-gregory-leibniz-series-for-pi-from-a-finite-remainder`
- `lem-wallis-integrals-recurrence-and-squeeze`
- `thm-wallis-product-for-pi`
- `cor-central-binomial-coefficient-asymptotic-from-wallis`
- `lem-viete-finite-cosine-product-and-nested-radicals`
- `thm-viete-product-for-pi`
- `thm-pi-equivalent-characterizations-ledger`
- `ex-unit-circle-pi-calibration-table`
- `ex-gregory-leibniz-partial-sums-with-certified-error`
- `ex-wallis-partial-products-and-integral-bounds`
- `ex-viete-first-nested-radical-approximants`
- `fs-any-positive-zero-of-sine-characterizes-pi`
- `fs-circumference-to-radius-ratio-is-pi`
- `cex-a-multiple-traversal-has-the-same-circle-trace-but-greater-length`
- `def-piecewise-c1-path-operations-and-oriented-reparametrizations`
- `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`
- `lem-line-integrals-are-independent-of-the-piecewise-c1-partition`
- `thm-line-integrals-under-oriented-reparametrization`
- `thm-line-integrals-under-reversal-and-concatenation`
- `thm-scalar-and-vector-line-integral-estimates`
- `cor-scalar-line-integral-of-one-is-arc-length`
- `cor-arc-length-accumulation-derivative-is-speed`
- `def-piecewise-c1-path-connected-conservative-and-path-independent`
- `thm-gradient-theorem-for-line-integrals`
- `cor-conservative-fields-are-path-independent-and-have-zero-circulation`
- `thm-path-independence-iff-zero-closed-loop-integrals`
- `thm-path-independent-field-has-a-potential-by-line-integrals`
- `thm-conservative-path-independent-and-zero-loop-equivalence`
- `cor-potentials-differ-by-a-componentwise-constant`
- `lem-potentials-glue-over-a-path-connected-overlap`
- `def-closed-and-exact-c1-vector-fields`
- `lem-clairaut-for-c2-potentials-by-rectangular-differences`
- `thm-exact-c1-vector-fields-are-closed`
- `def-star-shaped-open-subset-of-rn`
- `thm-poincare-lemma-for-star-shaped-domains`
- `cor-closed-exact-and-conservative-equivalence-on-star-shaped-domains`
- `def-type-i-type-ii-and-elementary-green-regions`
- `def-positive-orientation-for-elementary-region-boundaries`
- `lem-green-type-i-boundary-identity`
- `lem-green-type-ii-boundary-identity`
- `lem-green-boundary-cancellation-under-finite-gluing`
- `thm-greens-theorem-for-finite-unions-of-elementary-regions`
- `cor-area-as-a-line-integral-for-elementary-regions`
- `rem-greens-theorem-jordan-domain-limitation`
- `rem-domain-hypotheses-for-closed-versus-exact`
- `ex-scalar-line-integral-over-a-unit-semicircle`
- `ex-line-segment-scalar-and-vector-line-integrals`
- `ex-gradient-theorem-for-a-polynomial-potential`
- `ex-constructing-a-potential-on-an-open-rectangle`
- `cex-the-one-form-y-dx-is-path-dependent`
- `cex-vortex-field-is-closed-but-not-exact-on-the-punctured-plane`
- `fs-every-closed-c1-field-on-a-connected-open-set-is-exact`
- `fs-vector-line-integrals-are-invariant-under-reversal`
- `ex-a-vector-line-integral-counts-multiple-traversals`
