# Step 3a reader report — batch 43

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Batch: `43`

## Opened inventory

Pages opened:

- A page `clenshaw-curtis-and-extrapolation-quadrature` at `library/numerical-linear-algebra-and-approximation/clenshaw-curtis-and-extrapolation-quadrature.md`.
- B page `clenshaw-curtis-and-extrapolation-quadrature-examples` at `library/numerical-linear-algebra-and-approximation/clenshaw-curtis-and-extrapolation-quadrature-examples.md`.

All 20 A-page items were opened in dependency-level order: `alg-na-romberg-trapezoid-table`, `def-na-bernoulli-polynomials`, `def-na-clenshaw-curtis-dct-i`, `def-na-closed-newton-cotes-eight-panel-rule`, `def-na-peano-kernel`, `lem-na-chebyshev-degree-bound-from-recurrence`, `lem-na-chebyshev-recurrence-angle-identity`, `lem-na-bernoulli-polynomial-identities`, `lem-na-chebyshev-integral-moments`, `lem-na-clenshaw-curtis-dct-i-orthogonality`, `thm-na-peano-kernel-remainder-and-bound`, `thm-na-euler-maclaurin-composite-trapezoid-remainder`, `cor-na-composite-trapezoid-even-power-expansion`, `lem-na-closed-newton-cotes-eight-panel-weights-and-exactness`, `thm-na-romberg-even-power-cancellation`, `cor-na-closed-newton-cotes-eight-panel-peano-bound`, `thm-na-clenshaw-curtis-interpolation-coefficients`, `def-na-clenshaw-curtis-quadrature`, `thm-na-clenshaw-curtis-exactness-and-near-best-error`, and `alg-na-computed-clenshaw-curtis-via-fast-dft`.

All three B-page examples were opened: `ex-na-square-root-endpoint-breaks-romberg-order`, `ex-na-eight-panel-newton-cotes-negative-weight-amplification`, and `ex-na-clenshaw-curtis-integrates-quadratics`.

Claim-supporting current-run dependencies inspected included the batch-4 cardinal interpolation definition, basis lemma and uniqueness theorem; the batch-19 best-approximation definition, cardinal interpolation norm lemma and near-best theorem; and the batch-15 computed DFT procedure plus its floating-point model definition. Relevant published definitions and statements for canonical naturals, natural powers, real polynomials, Chebyshev recurrences, calculus, Riemann integration, trigonometric identities, rational powers and the composite trapezoid were also opened.

## Repairs and evidence

- `alg-na-romberg-trapezoid-table`, Definition step 1: stated that each natural panel count `2^ell` is positive by the natural-power recursion, so every call to the composite trapezoid meets its `N >= 1` input condition.
- `def-na-bernoulli-polynomials` and `lem-na-bernoulli-polynomial-identities`: made the natural-to-real map `iota` explicit in the Bernoulli recursion and derivative identity. This gives the real scalar multiplying the polynomial and each real denominator a well-typed value; positivity and invertibility follow from the cited canonical-natural results.
- `def-na-peano-kernel` and `thm-na-peano-kernel-remainder-and-bound`: included the zero polynomial explicitly in exactness, since the published polynomial definition assigns it no degree. Also stated that `L(p)` means `L` applied to the polynomial's evaluation function, and recorded continuity and integrability of those evaluation functions. The theorem hypothesis and its Taylor-polynomial step now match that definition.
- `lem-na-chebyshev-degree-bound-from-recurrence`: the coefficient-support induction alone did not establish that `deg T_n` was defined. Added the recurrence-at-one induction, which gives `T_n(1)=1`; coefficient-convolution evaluation and the nonzero formal-polynomial degree definition then justify `deg T_n <= n`.
- `cor-na-composite-trapezoid-even-power-expansion`: specified that the trapezoid panel count `N` is an integer at least one and made the extrapolation index a natural.
- `lem-na-closed-newton-cotes-eight-panel-weights-and-exactness`, `cor-na-closed-newton-cotes-eight-panel-peano-bound`, and `thm-na-clenshaw-curtis-exactness-and-near-best-error`: made zero-polynomial exactness explicit and identified polynomial inputs with their evaluation functions where they enter quadrature or integration. In the Newton–Cotes proof, the cardinal-sum polynomial can be zero or degree at most eight; the degree-nine decomposition now states the zero case as well.
- `thm-na-clenshaw-curtis-interpolation-coefficients` and `def-na-clenshaw-curtis-quadrature`: specified `n` as a natural, matching the DCT-I and moment definitions and covering both the positive-degree formula and the zero-degree midpoint branch.
- `ex-na-eight-panel-newton-cotes-negative-weight-amplification`: replaced the undefined expression `Q_8(f+delta)` for a node-only perturbation by an explicit functional on sample vectors. The exact weight arithmetic gives `sum |w_j| = 13714/4725` and `sum w_j = 2`; sign-aligned perturbations attain the bound.
- `alg-na-computed-clenshaw-curtis-via-fast-dft`: stated that, when `n >= 1`, each sample must belong to the selected DFT model's representable real set before it is passed as a complex coordinate. This matches the called DFT procedure's input precondition. Also specified the integer types of the precision, series and recursion controls.

Updated the batch-43 proof-contract entries from current facts and steps after the repairs, then refreshed the affected supplier-interface clauses. None of the changed draft items contained a `verification.judge` record.

No page prose was edited. No defect remains unedited in the assigned items or in the claim-supporting dependencies examined.

## Page verdicts

- A page `clenshaw-curtis-and-extrapolation-quadrature`: pass. Its summaries of the DCT-I convention, midpoint case, affine-scaled error factor, conditional Romberg cancellation, Peano bound, Newton–Cotes exactness and DFT status match the reviewed items. The physical-interval factor is `b-a` (hence `2` on `[-1,1]`).
- B page `clenshaw-curtis-and-extrapolation-quadrature-examples`: pass. Its summaries of the square-root endpoint example, quadratic rule and negative-weight perturbation example match the reviewed examples; the sample-perturbation calculation is now stated on sample vectors.

## Checks and blocker

- Reflow and precheck were run for every changed item. All prechecks passed; reflow reported the proof layout already normalized.
- Final batched `node tools/proof-layout.mjs` check on all 14 changed item paths: `14 items, 32 steps, 0 defects`.
- Independently recomputed the nine Newton–Cotes cardinal integrals with exact rational arithmetic. They match the displayed weights; their absolute sum is `13714/4725` and signed sum is `2`.
- At the on-disk run status check for this dispatch, the run was `running` with no worker in flight. It showed an existing `3a-split` blocker for batch 6; this is outside batch 43 and did not block this review.

## Sources consulted

- NIST DLMF §24.2(i), equations 24.2.1–24.2.5, for Bernoulli polynomial generating/coefficient identities: <https://dlmf.nist.gov/24.2>.
- NIST DLMF §3.5(iii), equations 3.5.9–3.5.12, for the smoothness-qualified finite trapezoid error expansion and Romberg recurrence; §3.5(iv), equations 3.5.15–3.5.17, for interpolatory rules and Clenshaw–Curtis nodes/weights: <https://dlmf.nist.gov/3.5>.
- L. Ridgway Scott, *Numerical Analysis*, 2nd ed., §13.2, equations 13.31–13.44 and Theorem 13.5 (printed pp. 223–225), for Taylor's integral remainder, the truncated-power Peano representation and its `L1` bound; §13.3, equation 13.63 (printed p. 227), for the Bernoulli-kernel remainder; §13.4.1 (printed p. 237), for Clenshaw–Curtis as interpolation quadrature. <https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf>.
- Lloyd N. Trefethen, “Is Gauss Quadrature Better than Clenshaw–Curtis?”, §2 (printed pp. 69–70), for Lobatto nodes, the even-extension FFT implementation and integrated Chebyshev coefficients. <https://courses.grainger.illinois.edu/cs591mh/fa2012/trefethen/Clenshaw-Curtis.pdf>.

## Coverage note

All assigned pages and items were opened. I checked the dependency statements/proofs and authoritative passages needed for the reviewed claims, including the draft cross-batch suppliers named above. This report does not certify every transitive prerequisite proof, unrelated batch, or the whole-run gate battery.
