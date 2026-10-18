# Step 3a reader report — batch 26

Run `numerical-analysis-remaining-71-2026-10-17`; batch `26`. The live status was `3a-read`, with no active worker. The assigned carriers were drafts from this run, so the authorized item repairs below were in scope.

## Opened inventory

Assigned pages:

- A page: `singular-and-infinite-interval-quadrature` at `library/numerical-linear-algebra-and-approximation/singular-and-infinite-interval-quadrature.md`.
- B page: `singular-and-infinite-interval-quadrature-examples` at `library/numerical-linear-algebra-and-approximation/singular-and-infinite-interval-quadrature-examples.md`.

The three page prerequisites named by the batch manifest were opened: `gaussian-quadrature`, `clenshaw-curtis-and-extrapolation-quadrature`, and `the-residue-theorem`. The A page currently lists only the first two in its frontmatter; see the remaining finding below.

All 27 assigned items were opened in dependency order:

- `alg-double-exponential-trapezoid`, `def-duffy-reference-triangle-map`, `lem-c1-divided-difference-extends-continuously`, `lem-double-exponential-truncated-tail-bound`, `lem-log-power-regularity-after-endpoint-substitution`, `lem-real-power-improper-integral`, `thm-analytic-strip-trapezoid-error`, `thm-gaussian-product-rule-error-bound`;
- `def-cauchy-principal-value-subtraction`, `lem-duffy-reference-map-jacobian-and-image`, `lem-real-power-lebesgue-integrability`, `thm-double-exponential-transforms-and-integral-identities`, `lem-gauss-jacobi-weight-finite-moment-measure`;
- `thm-cauchy-principal-value-subtraction-identity`, `thm-double-exponential-trapezoid-error-bound`, `thm-duffy-weak-singularity-transform`, `def-gauss-jacobi-quadrature-rule`;
- `alg-duffy-weighted-product-gauss-quadrature`, `alg-endpoint-power-regularized-jacobi-quadrature`, `lem-gauss-jacobi-rule-data-well-defined`, `thm-gauss-jacobi-exactness-and-derivative-error`;
- `cor-duffy-weighted-product-gauss-error`, `thm-endpoint-regularized-jacobi-error`;
- examples `ex-gaussian-integral-on-infinite-line-by-tanh-sinh`, `ex-principal-value-subtraction-with-interior-pole`, `ex-duffy-weak-singularity-on-reference-triangle`, and `ex-x-minus-half-log-x-gauss-jacobi`.

The relevant dependency statements and definitions were opened for the real exponential, powers, logarithm, differentiation, FTC, substitution, compactness, Riemann integrability, Lebesgue measure and convergence, Gaussian moment data/rules/remainders, complex exponential and contour calculus, winding numbers, Duffy change of variables, and hyperbolic/trigonometric identities. The checked supplier IDs included `def-real-exponential-function-and-e`, `def-real-power`, `def-natural-logarithm`, `def-derivative`, `def-higher-derivatives-and-smoothness`, `thm-exponential-limits-and-range`, `thm-natural-logarithm-laws`, `thm-real-power-continuity-and-derivatives`, `thm-real-power-laws`, `thm-logarithm-derivative-and-integral`, `thm-substitution`, `thm-ftc-first-part`, `thm-ftc-second-part`, `thm-continuous-implies-integrable`, `def-gauss-moment-data`, `def-gauss-quadrature-rule`, `thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights`, `thm-gauss-hermite-mean-value-remainder`, `lem-gauss-quadrature-rule-data-well-defined`, `thm-heine-cantor-metric`, `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`, `thm-change-of-variables-for-compact-jordan-sets`, `thm-residue-theorem-null-homologous-cycle`, `def-admissible-cycle-for-residue-theorem`, `def-null-homologous-and-homologous-complex-cycles`, `cor-winding-number-is-the-normalized-argument-increment`, `thm-winding-number-zero-unbounded-component`, `cor-goursat-rectangle-theorem`, `cor-residue-quotient-simple-zero`, `def-complex-exponential`, `thm-complex-exponential-is-entire-with-derivative-itself`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-sine-cosine-zero-sets-and-fundamental-period`, `thm-quarter-turn-values-and-shift-formulas`, `thm-complex-exponential-addition-and-real-extension`, `def-hyperbolic-functions`, `thm-hyperbolic-identities-and-derivatives`, `thm-gaussian-integral`, and `lem-sine-positive-and-cosine-decreasing-on-zero-two`.

## Repairs

- `alg-double-exponential-trapezoid`: added `def-pi-via-first-positive-cosine-zero`, which supplies the explicit `π` in all three maps. Added David H. Bailey’s *A Catalogue of Mathematical Formulas Involving π, with Analysis* (J. Numer. Anal. Approx. Theory 50 (2021), no. 2, pp. 108–125), §5.3, printed pp. 118–120, as support for the exp-sinh and sinh-sinh maps. Trefethen–Weideman §14, Table 14.1, supports the tanh-sinh map but does not state the other two.
- `lem-log-power-regularity-after-endpoint-substitution`: added `thm-natural-logarithm-laws` and made the needed limit `−log t → +∞` explicit before applying exponential domination.
- `lem-real-power-improper-integral`: replaced the incorrect use of `cor-integral-logarithm-is-strictly-increasing` with `thm-natural-logarithm-laws`. The opened corollary states monotonicity of the integral-log function `L`; it does not identify that function with the inverse-defined `log` used in this proof.
- `lem-real-power-lebesgue-integrability`: added `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values` and cited it for boundedness of `x^γ` on each cutoff interval, which is needed to apply the Riemann criterion.
- `thm-gaussian-product-rule-error-bound`: stated the real-valued domain of `G`, matching `def-gauss-quadrature-rule`, and added the compact extreme-value theorem to justify that the derivative supremum norms are finite. The direct downstream consumer `cor-duffy-weighted-product-gauss-error` has a real transformed amplitude; I also checked the out-of-batch in-run consumer `lem-bem-panel-pair-duffy-certificates`, whose amplitudes are real.
- `cor-duffy-weighted-product-gauss-error`: changed the title from “mixed-derivative” to “bound using pure coordinate derivatives,” matching the actual `∂r^{2n}` and `∂s^{2n}` bound.
- `thm-endpoint-regularized-jacobi-error`: restricted the substitution step’s truncation parameter to `0<ε<1`, the domain on which the transformed functions are defined.
- `thm-double-exponential-transforms-and-integral-identities`: specified absolute improper Riemann integrability for the transformed integrand, matching its finite-interval substitution and improper-integral proof.
- `thm-double-exponential-trapezoid-error-bound`: added `thm-continuous-implies-integrable` and used it to establish integrability on the compact middle interval before applying the transform identity.
- `ex-gaussian-integral-on-infinite-line-by-tanh-sinh`: added `thm-continuous-implies-integrable` for the compact part of the transformed integral, and added the sine/cosine zero-set and quarter-turn suppliers to justify `sin y, cos y > 0` in the complex-strip counterexample.

Updated the proof-contract citations and derivations for the repaired proof arguments, including the affected Gaussian-product and double-exponential consumers. The edited items had no stale `verification.judge` record to remove. The batch manifest was not edited; its dependency snapshots still reflect the pre-reader arrays for items whose `deps` changed.

## Source checks

- Trefethen and Weideman, “The Exponentially Convergent Trapezoidal Rule,” SIAM Review 56(3) (2014), §5.1, Theorem 5.1 (printed p. 401) and residue proof (printed pp. 402–403); §6 on separating discretization and truncation error; §14, Table 14.1 (printed p. 429), tanh-sinh transformation. The local analytic-strip item proves its sharper boundary-integral form directly.
- Bailey, §5.3, printed pp. 118–120, explicitly gives `g(t)=tanh((π/2)sinh t)`, `g(t)=exp((π/2)sinh t)` for a half-line, and `g(t)=sinh((π/2)sinh t)` for the whole line.
- Imperial College, *Numerical quadrature — Finite Element course notes*, §1.6, equations (1.11)–(1.13), gives the square-to-triangle Duffy map and Jacobian. Its orientation is equivalent to the assigned map after reflecting one square coordinate.
- Bishop, *The Riemann Mapping Theorem*, Chapter 3, §3, printed pp. 112–113, states the Gaussian derivative remainder and the Jacobi-weight case used by the assigned items.
- Trefethen–Weideman §5.19 discusses subtracting the singular value for a Cauchy principal value at zero; the assigned bounded-interval subtraction identity is established by its local proof.

## Remaining defects and page verdicts

- **Uneditable page defect:** `singular-and-infinite-interval-quadrature` frontmatter `requires` omits `the-residue-theorem`, although the batch manifest lists it and the page’s analytic-strip proof uses `thm-residue-theorem-null-homologous-cycle`. This is outside the authorized A-page prose edit scope. It is the sole finding in the JSON artifact.
- **A-page verdict:** the mathematical summary and diagram explanation match the checked items; the missing page prerequisite above remains.
- **B-page verdict:** the examples summary is accurate, including the explicit no-total-error caveat for the Gaussian example. No other page defect was identified.

## Validation and blocker

Reflow reported unchanged for all 10 edited item paths. Precheck passed for all 10. The final batched proof-layout command reported `10 items, 32 steps, 0 defects`.

No mathematical blocker remains in the assigned items. The A-page prerequisite metadata and the batch manifest’s pre-reader dependency snapshots remain for the owner/engine to reconcile before mechanical closure; neither was in this dispatch’s editable scope.

The final status refresh still showed the run in `3a-read` with no worker active. It also reported unrelated failures in `3a-collect` batch 7 and `3a-split` batch 11; both are outside batch 26 and were not modified.

## Coverage note

All assigned pages and items were opened; assigned items were read in dependency order. I opened the relevant statement/definition sections of the cited supplier items and the cited source passages, but did not re-audit unrelated published supplier proof bodies outside this frontier.
