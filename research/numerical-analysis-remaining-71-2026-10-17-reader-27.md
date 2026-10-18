# Step 3a independent reader report — batch 27

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Scope: batch `27`

## Opened inventory

Assigned pages reviewed:

- `library/numerical-linear-algebra-and-approximation/gaussian-basis-integral-recurrences-and-boys-error.md`
- `library/numerical-linear-algebra-and-approximation/gaussian-basis-integral-recurrences-and-boys-error-examples.md`

Additional dependency page consulted:

- `library/numerical-linear-algebra-and-approximation/stable-special-function-recurrences-and-certified-evaluation.md`

Assigned A-items reviewed in dependency order:

1. `def-cartesian-gaussian-primitives-and-contractions`
2. `def-boys-function-and-coulomb-auxiliary-recurrence`
3. `def-finite-gaussian-basis-variational-energy-and-gradient`
4. `thm-gaussian-product-theorem-and-polynomial-shift`
5. `thm-boys-integral-identities-series-and-incomplete-gamma`
6. `lem-boys-positive-midpoint-enclosure`
7. `lem-cartesian-gaussian-moments-and-parameter-derivatives`
8. `thm-gaussian-contraction-error-energy-gradient-bounds`
9. `def-hermite-gaussian-coulomb-auxiliary-functions`
10. `thm-cartesian-gaussian-integrals-absolutely-convergent`
11. `lem-boys-small-taylor-remainder`
12. `lem-boys-incomplete-gamma-large-t-tail-bound`
13. `lem-boys-upward-downward-recurrence-error-amplification`
14. `thm-cartesian-pair-hermite-expansion-and-coefficient-recurrence`
15. `thm-cartesian-gaussian-raising-lowering-and-kinetic-recurrences`
16. `thm-positive-coulomb-bilinear-cauchy-schwarz-screening`
17. `thm-gaussian-coulomb-hermite-recurrences-and-integral-formulas`
18. `alg-certified-boys-finite-budget-branch-evaluation`
19. `thm-boys-branch-evaluation-enclosures-are-sound`
20. `alg-finite-gaussian-basis-integral-recurrence-evaluation`
21. `thm-finite-gaussian-integral-evaluator-soundness-and-screening-error`

Assigned B-items reviewed:

- `ex-highly-contracted-gaussian-coefficients-amplify-error`
- `ex-overlap-near-linear-dependence`
- `ex-same-center-s-orbital-integrals`
- `ex-small-t-upward-boys-cancellation`
- `ex-screened-coulomb-blocks-accumulate-error`

The proof review also opened the dependencies needed for the claims: the real exponential and integral foundations; Gamma, Beta, logarithm, and complex analytic prerequisites; differentiation under the integral, integration by parts, convergence, and Tonelli/Fubini results; finite-format and outward-rounded interval arithmetic; complex elementary-function enclosures; and the current-run Gamma/log-Gamma and certified-evaluation suppliers used by the Boys evaluator. Relevant batch-25 supplier items included `def-certified-evaluation-result-contract`, `lem-binet-loggamma-right-halfplane-identity`, and `lem-sectorial-stirling-explicit-remainder-bound`, along with the Gamma evaluator, its soundness result, the log-Gamma product and shift results, and the meromorphic Gamma functional equation.

External source passages checked:

- Helgaker, “Molecular Integral Evaluation,” pp. 19–25 (Gaussian Coulomb and Hermite auxiliary recurrences), p. 20 (Boys function identities and regimes), and p. 35 (positive Coulomb matrix and Cauchy–Schwarz screening): <https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf>.
- McMurchie and Davidson, UCRL-13791, §§II–IV, pp. 5–18 (Gaussian/Hermite expansions and auxiliary recurrences), and §V, pp. 19–21 (computational considerations and contraction-loop scheme): <https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf>.
- NIST DLMF §§5.8, 5.9(i), and 5.11, including Eqs. 5.8.2, 5.9.10, 5.11.3, and 5.11.10–11: <https://dlmf.nist.gov/5.8>, <https://dlmf.nist.gov/5.9>, <https://dlmf.nist.gov/5.11>.

## Edits and evidence

All edits below are in assigned batch-27 items. No page prose or out-of-batch item was edited.

- `thm-boys-integral-identities-series-and-incomplete-gamma`: repaired the differentiation argument. The previous dominated-convergence justification bounded derivative integrands but did not justify the relevant difference quotients. The proof now obtains the series by DCT applied to exponential partial sums and bounds difference quotients on compact parameter intervals by the mean value theorem before applying DCT. Added the direct real-exponential and mean-value-theorem dependencies. The integral and series agree with the cited Boys identities in Helgaker, p. 20.
- `lem-cartesian-gaussian-moments-and-parameter-derivatives`: established absolute integrability of polynomial-times-Gaussian moments before using improper integrals and integration by parts. The proof now supplies a power-series bound for Gaussian tail decay, including the vanishing boundary term, and makes the absolute-moment justification explicit when expanding the norm power.
- `thm-positive-coulomb-bilinear-cauchy-schwarz-screening`: made the diagonal-null argument explicit using Tonelli sections. The zero-parameter case is handled directly as a nonnegative square; for positive parameter, the proof now gives an integrable absolute-series majorant before applying Fubini. Helgaker, p. 35 supports the Coulomb positivity and Cauchy–Schwarz context. The McMurchie–Davidson reference now points to §V as computational/contraction-loop discussion; the local proof, rather than that section, establishes the stated accumulated screening bound.
- `lem-boys-upward-downward-recurrence-error-amplification`: clarified that finite radius bounds require finite endpoint conversions; overflow does not yield a finite interval or propagated estimate.
- `alg-certified-boys-finite-budget-branch-evaluation`: made status behavior explicit. Internal overflow and child `range` results make a seed or direction unavailable; `range` is returned only for a certified requested value outside finite format. The exact `T=0` branch uses rational comparison, and endpoint overflow discards that recurrence direction. Added the direct finite-format prerequisite. The algorithm follows the small-, intermediate-, and large-argument evaluation regimes documented by Helgaker, p. 20, with enclosure soundness delegated to the stated certified suppliers.
- `alg-finite-gaussian-basis-integral-recurrence-evaluation`: specified the requested output subset, energy/gradient flags and tolerances, and the signed center/weight interval representation of the nuclear list. Defined `H_ab = T_ab + Σ_l w_l V_{C_l}`. For valid input data, child or intermediate failures now produce an inconclusive result; `range` is reserved for a certified final result outside finite format. Added the direct finite-format prerequisite.
- `ex-screened-coulomb-blocks-accumulate-error`: corrected the McMurchie–Davidson §V locator to describe its computational considerations and contraction-loop scheme, without attributing the local screening-error bound to that section.

The affected proof-contract entries were regenerated or updated. Reflow left all seven changed item files unchanged. Precheck passed for all seven (the two algorithms had no proof steps to check). One final batched proof-layout run reported `7 items, 17 steps, 0 defects`. The selected proof-contract check reported `0 errors, 0 warnings, 7/7 item(s) checked`. No stale `verification.judge` record was present on the changed items.

## Uneditable defects

Two current-run supplier items outside batch 27 use an inaccurate DLMF locator in `sources.references[0]`. Both are in batch 25, so they were not edited. DLMF identifies Binet’s formula in §5.9(i), Eq. 5.9.10; §5.11 covers asymptotic expansions and Stirling remainders. The local proofs remain complete, so these are nonfatal citation defects. The assigned consumer is `alg-certified-boys-finite-budget-branch-evaluation`.

- `lem-binet-loggamma-right-halfplane-identity`, `sources.references[0]`: the reference labels DLMF §5.11 as the Binet formula/integral locator. The correct DLMF locator is §5.9(i), Eq. 5.9.10.
- `lem-sectorial-stirling-explicit-remainder-bound`, `sources.references[0]`: the reference associates Binet’s integral with DLMF §5.11. That section is the asymptotic-expansion/Stirling-remainder source; Binet’s formula is in §5.9(i), Eq. 5.9.10.

## Page verdicts

- `gaussian-basis-integral-recurrences-and-boys-error`: no page-level defect identified in the definitions, theorem summaries, or stated dependency framing reviewed. The assigned mathematics and the Helgaker passages support the described Gaussian/Boys recurrence material.
- `gaussian-basis-integral-recurrences-and-boys-error-examples`: no page-level defect identified in the example summaries. The citation imprecision in the assigned screening example was corrected in its item prose; no page prose was changed.
- `stable-special-function-recurrences-and-certified-evaluation` (dependency page): no defect identified in the portions used to check the batch-27 Gamma/log-Gamma evaluator dependencies. Its content was consulted as a dependency and was not edited.

## Blocker

No batch-27 mathematical review blocker remains. After the report and findings payload were written, the latest status still showed the run active with no job in flight and batch 27 among the missing 3a-read/split coverage (36/71 covered). The run state has not yet recorded this reader response. Other batches also remain uncovered, outside this assignment.
