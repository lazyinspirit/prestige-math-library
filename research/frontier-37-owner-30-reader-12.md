# Step 5a reader report — batch 12

Run: `frontier-37-owner-30`  
Verdict: both assigned pages are mathematically sound after the two item repairs below. No uneditable finding remains.

## Opened inventory

Pages:

- A — `library/fourier-analysis/riesz-potentials-and-the-hardy-littlewood-sobolev-inequality.md`
- B — `library/fourier-analysis/riesz-potentials-and-the-hardy-littlewood-sobolev-inequality-examples.md`

Assigned items:

- A: `def-riesz-potential-of-order-alpha`; `lem-riesz-potential-near-far-splitting`; `lem-hedberg-pointwise-inequality`; `thm-hardy-littlewood-sobolev-fractional-integration`; `rem-fractional-integration-endpoints`.
- B: `ex-riesz-potential-scaling-determines-the-target-exponent`; `cex-hardy-littlewood-sobolev-strong-p-equals-one-endpoint`; `cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint`.

Opened the direct dependency statements used by these arguments, including the complex Lp and Lebesgue conventions, local integrability, maximal-function definition and bounds, Hölder, polar coordinates, change of variables, Tonelli, density and extension, integral rules, measurability interfaces, bump functions, real powers, and improper-integral criteria. Opened the current proof contracts as evidence, then checked claims against the current item and dependency files.

## Repairs and evidence

- `cex-hardy-littlewood-sobolev-strong-p-equals-one-endpoint`: the former proof cited the one-way result “convergent improper Riemann integral implies the same finite Lebesgue integral” to infer that a divergent improper integral has infinite Lebesgue integral. I opened `thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line`; its statement gives only the convergent direction. Replaced the tail step with a direct dyadic-shell lower bound after polar coordinates. Each interval `J_j=[2^j a,2^{j+1}a)` contributes at least `1/2` to the Lebesgue integral of `1/r`, so the tail integral is infinite. Added the interval-volume, simple-integral, and additivity dependencies and updated this item’s proof contract.
- `cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint`: repaired the same one-way inference at the origin. The proof now applies the Lebesgue change-of-variables theorem to `u=log(e/r)`, then proves divergence using dyadic intervals. Its nonzero-point estimate previously cited the one-dimensional improper-substitution result for a translation/reflection of an `n`-dimensional Lebesgue integral; replaced that reference with the `C^1` Lebesgue change-of-variables theorem and its Jacobian fact. Added the Borel-to-Lebesgue inclusion used in the measurability paragraph and the logarithm/exponential facts that make the substitution a `C^1` diffeomorphism. Reordered the proof steps to the validator’s canonical order, updated dependencies and the proof contract.

Both changed items had no stale `verification.judge` record. Reflow and precheck results:

- `cex-hardy-littlewood-sobolev-strong-p-equals-one-endpoint`: reflow unchanged; precheck passed.
- `cex-riesz-potential-integral-can-diverge-at-the-upper-endpoint`: reflow unchanged; precheck passed.

The source checks confirmed the recorded scope: Williams, Proposition 11.4, printed p. 73, gives the unit-kernel fractional-integration statement and near/far method; Guth, Proposition 0.1 and Theorem 0.2, p. 1, give the scaling restriction and strong inequality; Harboure, §1 Theorems 1, 3, and 4 and the following remark, printed pp. 2–7, state the strict range, weak lower endpoint, critical compact-support mean-oscillation bound, and far-kernel renormalization. The [Williams notes](https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf), [Guth notes](https://ocw.mit.edu/courses/18-s997-the-polynomial-method-fall-2012/214a7e215cfb9c3bdd3507e528b8db3c_MIT18_S997F12_lec30.pdf), and [Harboure notes](https://congreso.us.es/cidama/activos/cursos/EHarbourefull.pdf) were opened at the cited sections. The repaired endpoint counterexamples also have direct local proofs, so those source summaries are not used as proof suppliers.

## Page verdicts

- A page: pass. Its summary accurately states the unit normalization, strict-range hypotheses, near/far and Hedberg arguments, the Lp-to-Lq conclusion, and the endpoint remark’s recorded-not-proved status.
- B page: pass. Its scaling and endpoint summaries match the assigned examples and counterexamples. No B-page prose was edited.

## Uneditable findings

None.

## Blocker

No blocker affects batch 12. The final recomputed run status is still `running` at Step 5a, with a separate `5a-split` failure for batch 9 (failed three times) and no worker running. Batch 9 is outside this dispatch’s scope.

## Coverage limitation

Published dependency statements were checked at the interfaces used by the assigned proofs; their proofs were not independently re-proved. No unresolved mathematical uncertainty remains in this batch.
