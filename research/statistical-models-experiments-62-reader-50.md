# Step 3a reader report — batch 50

Run: `statistical-models-experiments-62`  
Batch: `50`  
Role: reader  
Verdict: accept both assigned pages; no unresolved findings or blockers.

## Opened inventory

Assigned pages:

- A page: `library/statistical-models-and-experiments/finite-window-spatial-point-process-likelihoods.md`
- B page: `library/statistical-models-and-experiments/finite-window-spatial-point-process-likelihoods-examples.md`

The A-page prerequisites were also opened:

- `library/statistical-models-and-experiments/poisson-and-cox-point-process-models.md`
- `library/mathematical-statistics/dominated-experiments-likelihood-and-sufficiency.md`
- `library/measure-theory/measures-and-their-basic-properties.md`

Assigned A-page items were read in manifest dependency-level order:

1. `lem-borel-product-of-second-countable-spaces`
2. `def-finite-window-spatial-observation`
3. `lem-finite-configuration-product-measurable`
4. `lem-finite-window-pair-count-is-measurable`
5. `lem-finite-product-measure-with-density`
6. `def-papangelou-conditional-intensity`
7. `def-finite-window-pseudolikelihood`
8. `def-finite-window-gibbs-density`
9. `lem-diffuse-finite-window-poisson-process-is-simple`
10. `thm-finite-window-spatial-poisson-likelihood`
11. `prop-homogeneous-poisson-window-mle`
12. `lem-finite-window-gibbs-density-ratio-is-papangelou`

The two assigned B-page items were opened after their suppliers:

- `ex-homogeneous-poisson-window-mle-boundary`
- `ex-strauss-exact-likelihood-versus-pseudolikelihood`

Batch-48 draft suppliers used by these claims were opened and checked at the
exact interfaces used by batch 50:

- `def-random-measure-and-locally-finite-point-process`
- `def-scalar-poisson-count-law`
- `lem-deletion-of-one-point-is-measurable`
- `def-poisson-and-cox-point-process`
- `thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law`
- `lem-finite-intensity-mecke-identity`

Further draft suppliers used by those arguments were also opened:
`lem-poisson-count-law-normalization-and-moments`,
`lem-point-process-law-is-determined-by-count-fidi`, and
`lem-locally-compact-second-countable-spaces-have-compact-exhaustions`.
Relevant published transitive context included
`def-finite-sigma-finite-and-semifinite-measures`,
`thm-locally-compact-hausdorff-basics`,
`thm-closed-subspace-of-a-compact-space-is-compact`,
`def-measure-kernel-and-probability-kernel`,
`def-law-or-distribution-of-a-random-element`,
`lem-law-of-a-random-element-is-a-probability-measure`, and
`def-moments-variance-and-covariance`.

For the direct published dependencies of assigned items, I checked the
relevant Definition or Statement clauses: `cor-mean-value-theorem`,
`def-borel-sigma-algebra`, `def-countable-choice`, `def-dirac-measure`,
`def-dominated-statistical-experiment`,
`def-expectation-of-a-nonnegative-or-integrable-random-variable`,
`def-extended-real-valued-measurable-function`, `def-generated-sigma-algebra`,
`def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `def-likelihood-density`,
`def-measurable-space`, `def-measure`, `def-measure-with-density`,
`def-natural-logarithm`, `def-nonnegative-lebesgue-integral`,
`def-probability-measure`,
`def-product-sigma-algebra-and-finite-product-sigma-algebras`,
`def-product-topology`, `def-real-exponential-function-and-e`,
`def-restriction-of-a-measure`, `def-second-countable-space`, `def-sigma-algebra`,
`prop-closure-properties-of-measurable-functions-used-by-the-integral`,
`prop-dirac-measure-is-a-probability-measure`,
`prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`,
`prop-measure-monotonicity`, `prop-restriction-is-a-measure`,
`thm-borel-sets-are-lebesgue-measurable`, `thm-dynkin-pi-lambda`,
`thm-exponential-addition-formula`, `thm-exponential-is-strictly-increasing`,
`thm-generated-sigma-algebra-exists-and-is-minimal`,
`thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`,
`thm-lebesgue-measure-is-a-complete-measure`,
`thm-lebesgue-measure-of-a-box-of-every-kind`,
`thm-logarithm-derivative-and-integral`,
`thm-measurability-of-integration-against-a-kernel`,
`thm-measure-uniqueness-on-a-sigma-finite-pi-system`,
`thm-natural-logarithm-laws`, `thm-nonnegative-weighted-sums-of-measures`,
`thm-product-of-countable`, `thm-rational-points-and-boxes-in-rn`,
`thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`,
`thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, and
`thm-tonelli-theorem-for-sigma-finite-product-spaces`.

The current batch proof-contract file
`research/statistical-models-experiments-62-batch-50.proof-contracts.json` was
consulted alongside the authored item facts, step derivations, and boundary
worksheets. The manifest, notes, contracts, and author decisions were treated
as navigation and evidence, not as proof verdicts.

## Mathematical review and page verdicts

**A page — accept.** Its summary accurately limits the scope to finite Borel
windows, boundary membership, the finite Poisson density, the homogeneous
rate boundary, finite-window Gibbs normalization, and fixed-boundary
Papangelou/pseudolikelihood definitions. It makes no unsupported generic
consistency or Gibbs asymptotic claim.

The local Borel-product lemma proves both inclusions using countable bases and
continuous coordinate projections; its proof requires no arbitrary choice.
The finite-window definition gives a well-defined trace measure on the trace
Borel sigma-algebra, a measurable finite-configuration subspace, multiplicity,
and the stated boundary-membership convention. The occurrence-product and
pair-count measurability lemmas handle zero values, the empty configuration,
co-located occurrences, and the diagonal terms. The finite product-density
lemma applies to finite reference measures and finite-integral densities,
including its separate empty-product case.

The finite-intensity Poisson suppliers match the local uses: the mixed-binomial
law handles zero and positive total mass, the point-process law uniqueness
argument uses the evaluation sigma-algebra, and the deletion and Mecke
interfaces retain the occurrence convention. The finite-window likelihood
proof verifies the explicit density on every measurable configuration event
through the tuple expansions and product-density lemma; it does not depend on
selecting arbitrary Radon–Nikodym versions. The homogeneous MLE proof correctly
separates the positive-count maximizer from the zero-count boundary and its
attainment condition. The positive-density Gibbs ratio proof uses the finite
Mecke identity with its stated positivity and finiteness hypotheses.

**B page — accept.** The MLE example substitutes (n=3), (|W|=4) and then
checks the empty-count boundary. The Strauss example specifies the support,
reference law, parameters, radius and empty boundary; its normalizer is bounded
above by (\mathbb E[\beta^N]=e^{4(\beta-1)}) and below by the empty-pattern
mass (e^{-4}). For (\gamma=1), the exact and pseudo likelihoods differ by
the observation-independent factor (e^4). For (0<\gamma<1), the empty
and singleton density ratios are respectively (\beta) and
\(\beta\exp(\beta(1-\gamma)a)\), where the included square gives
\(a\ge4/25>0\); hence the criteria are not proportional. Multiplicities
and almost-sure simplicity under the diffuse Poisson reference are handled
without conflating the two.

Source locators were checked against the source texts. Last and Penrose,
[*Lectures on the Poisson Process*](https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf),
gives the finite mixed-binomial construction in Chapter 3, Theorems 3.6 and
Proposition 3.8, and the Mecke equation in Chapter 4, Theorem 4.1. Baddeley,
[*Spatial Point Processes and their Applications*](https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf),
gives the finite Poisson tuple expansion in §4.3, Example 4.5; the Poisson
density in §4.4, Example 4.6; the density-ratio conditional intensity in §4.5,
Theorem 4.1 and Example 4.8; the Strauss intensity in §4.6, Example 4.11; the
homogeneous Poisson rate estimate in §4.7, Example 4.12; and the
pseudolikelihood formula in §4.9, Definition 4.3 and Example 4.15. Hunter,
[*Measure Theory*](https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf),
§5.1 (printed p. 55), states that the product sigma-algebra is generated by
measurable rectangles; the local countable-base proof supplies the topological
equality.

## Edits, defects, checks, and blockers

- **Edits:** None. All assigned mathematical statements, proofs, facts, and
  page summaries passed independent review; no material repair or contract
  update was needed. An attempted formatting-only adjustment was a no-op: the
  item files already separate numbered proof steps as required. No stale
  `verification.judge` records were present in the assigned items.
- **Uneditable defects:** None found in the assigned pages or their required
  draft/published suppliers.
- **Formatting check:** `node tools/proof-layout.mjs` on all 14 assigned item
  paths reported 14 items, 33 steps, and 0 defects. Reflow and precheck were
  not run because no item was repaired.
- **Blocker:** None in batch 50. The run remains active in `3a-read`; the live
  status showed no in-flight process and other batches still uncovered, which
  is outside this dispatch's scope.

Published dependency bodies were consulted at the relevant claim clauses; this
review did not re-audit every unrelated proof in the published library.
