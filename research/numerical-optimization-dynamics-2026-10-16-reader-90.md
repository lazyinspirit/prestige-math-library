# Step 3a reader report — batch 90

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Batch: `90`

## Opened inventory

### Assigned pages

- A page `spectral-collocation-and-galerkin-methods` at `library/numerical-pdes-and-spatial-discretization/spectral-collocation-and-galerkin-methods.md`.
- B page `spectral-collocation-and-galerkin-methods-examples` at `library/numerical-pdes-and-spatial-discretization/spectral-collocation-and-galerkin-methods-examples.md`.

The A-page prerequisite summaries were opened at `library/real-analysis/fundamental-trigonometric-identities.md`, `library/numerical-linear-algebra-and-approximation/polynomial-interpolation-and-remainder.md`, `library/numerical-linear-algebra-and-approximation/polynomial-approximation-and-chebyshev-interpolation.md`, `library/numerical-linear-algebra-and-approximation/composite-quadrature-rules.md`, `library/numerical-linear-algebra-and-approximation/gaussian-quadrature.md`, `library/fourier-analysis/absolute-convergence-and-the-wiener-algebra.md`, and `library/fourier-analysis/finite-fourier-analysis-and-the-fast-fourier-transform.md`. The B page's prerequisite A page is listed above.

### Assigned items

All 34 manifest items were opened and reviewed in dependency order. The A-page items were:

- `def-periodic-fourier-collocation-grid`, `lem-periodic-fourier-mode-aliasing-under-sampling`, `alg-periodic-fourier-collocation-differentiation-matrix`, `thm-periodic-fourier-collocation-differentiation-is-exact`;
- `def-chebyshev-gauss-lobatto-collocation-grid`, `lem-chebyshev-lobatto-mode-aliasing`, `alg-chebyshev-gauss-lobatto-differentiation-matrix`, `thm-chebyshev-gauss-lobatto-differentiation-is-exact`, `alg-chebyshev-dirichlet-bvp-collocation-boundary-elimination`, `thm-chebyshev-dirichlet-collocation-status-and-system`;
- `def-chebyshev-arcsine-weighted-l2-pairing`, `lem-chebyshev-polynomials-orthogonal-in-arcsine-weight`, `def-chebyshev-weighted-spectral-sobolev-scale`, `thm-chebyshev-weighted-orthogonal-projection-rate`, `thm-chebyshev-lobatto-interpolation-near-best-weighted-error`, `thm-chebyshev-lobatto-interpolation-rate-under-spectral-sobolev-regularity`, `thm-chebyshev-lobatto-pointwise-remainder-bound`, `thm-chebyshev-lobatto-interpolation-exponential-rate-for-analytic-data`;
- `alg-chebyshev-composite-simpson-weighted-mass-matrix`, `thm-composite-simpson-error-for-chebyshev-weighted-mass-matrix`, `def-weighted-orthogonal-polynomial-galerkin-space`, `thm-weighted-orthogonal-polynomial-galerkin-projection-is-well-defined`, `alg-gaussian-orthogonal-polynomial-galerkin-mass-matrix`, `thm-gaussian-orthogonal-polynomial-galerkin-mass-matrix-exact`;
- `def-legendre-polynomial-family-and-l2-pairing`, `lem-legendre-weighted-derivative-orthogonality-and-norm`, `def-legendre-weighted-sobolev-scale`, `thm-legendre-weighted-projection-error-rate`, `rem-chebyshev-collocation-conditioning-and-spectral-radius-scope`.

The five B-page examples were `ex-periodic-fourier-collocation-exactness-and-nyquist-mode`, `ex-chebyshev-lobatto-endpoint-clustering`, `ex-analytic-and-nonsmooth-chebyshev-coefficient-decay`, `ex-quadratic-product-aliases-on-even-fourier-grid`, and `ex-gaussian-and-simpson-weighted-mass-matrix-check`.

### Mathematical suppliers and source checks

The local supplier statements and relevant proof sections were opened where used to check exact hypotheses and omitted inferences. This included the finite Fourier inversion and character-orthogonality results; trigonometric parity, chain rule, derivative, and finite-sum derivative laws; polynomial interpolation uniqueness and Chebyshev identities; continuous algebra, composition, and integrability; integral linearity, monotonicity, and the Riemann/Lebesgue agreement; real-power laws, derivatives and positivity; square-root uniqueness; finite Cauchy–Schwarz, the p-series bound and nonnegative-series criterion; complex holomorphy, chain rule, exponential identities and modulus; Gaussian exactness, positivity, and simple interior zeros; and the Simpson Peano-kernel and error results. The repair-specific sources are named again below.

For the conditioning remark, Shen and Tang, *Spectral and High-Order Methods with Applications*, author-hosted PDF <https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf>, §2.3, “Diffusion operator with Dirichlet boundary conditions,” printed pp. 87–88, equations (2.3.5)–(2.3.7) (PDF pp. 92–93), was checked. That passage concerns the interior second-derivative matrix with homogeneous Dirichlet endpoints and reports an $O(N^4)$ bound and the stated numerical spectral-radius asymptotic for $N\geq30$. The assigned remark keeps those scope qualifications.

## Repairs

The changes below close proof prerequisites or make the existing argument explicit; they do not change the intended numerical claims.

1. `def-chebyshev-arcsine-weighted-l2-pairing`: added the needed positivity, continuity, and integrability dependencies, and stated that the angular pairing is defined because the transformed integrand is continuous and integrable. This closes the definition's implicit existence-of-integral step using `def-pi-via-first-positive-cosine-zero`, `thm-algebra-of-continuous-functions`, and `thm-continuous-implies-integrable`.

2. `lem-chebyshev-polynomials-orthogonal-in-arcsine-weight`: added the chain rule, differentiability/continuity, composition and product continuity, continuous integrability, and integral-linearity suppliers. The proof now states the derivative and FTC step, the continuity/integrability of the transformed integrand, and linearity of the finite integral sum before using them. These additions justify the substitution-based orthogonality calculation from the cited sine/cosine and integration facts.

3. `def-legendre-polynomial-family-and-l2-pairing`: added continuous-algebra and continuous-integrability dependencies and stated why products of the defined polynomials have an integral, so the pairing is well-defined.

4. `def-chebyshev-weighted-spectral-sobolev-scale` and `def-legendre-weighted-sobolev-scale`: added the real-power laws, positivity/monotonicity facts, and `lem-square-summable-sequences-form-a-hilbert-space`. Each definition now explains that its positive weighted coefficient model is a Hilbert completion and identifies the coefficient norm in that completion. For positive smoothness, the reciprocal spectral factor is explicitly nonincreasing. The weighted sequence model is therefore justified rather than merely named.

5. `def-weighted-orthogonal-polynomial-galerkin-space`: added the real-power and exponential-reciprocal positivity suppliers and made the positivity of the real-power weights explicit.

6. `thm-periodic-fourier-collocation-differentiation-is-exact`: added `thm-algebra-of-derivatives` and made the finite character expansion and coefficient recovery by finite Fourier inversion explicit. This supplies uniqueness of the real trigonometric interpolant and justifies differentiating its finite sum.

7. `thm-chebyshev-gauss-lobatto-differentiation-is-exact`: added the finite-sum derivative supplier and cited it for differentiation of the interpolating polynomial's finite expansion.

8. `ex-periodic-fourier-collocation-exactness-and-nyquist-mode`: added the chain-rule and derivative-algebra dependencies used for the sine/cosine mode derivatives, including the even-grid Nyquist case.

9. `thm-composite-simpson-error-for-chebyshev-weighted-mass-matrix`: added the chain rule, derivative algebra, differentiable-implies-continuous, continuous algebra, and smoothness-definition sources. The first proof step now derives the required $C^4$ regularity and fourth derivative before invoking the Simpson error estimate.

10. `thm-weighted-orthogonal-polynomial-galerkin-projection-is-well-defined`: added Lebesgue-integral linearity and stated that the finite polynomial sums are integrable and may be integrated termwise. This closes the well-definedness step for the finite-dimensional projection equations.

11. `ex-chebyshev-lobatto-endpoint-clustering`: added square-root uniqueness and reciprocal/algebra-of-limits sources. The example now derives the $\sqrt2/2$ endpoint value, proves the endpoint gap is minimal, and gives the two-sided bound $2/N^2\leq\delta_{\min}\leq\pi^2/(2N^2)$, which entails the claimed asymptotic clustering.

12. `ex-gaussian-and-simpson-weighted-mass-matrix-check`: added the published rational bounds `lem-qa-13-pi-rational-bounds`, square-root and absolute-value suppliers, and continuity/integrability facts. The proof now establishes the Gaussian nodes from square-root uniqueness, justifies the support integrals, and proves the displayed Simpson-versus-Gaussian inequality using $3<\pi$ and $\pi^4>81>30$.

13. `ex-analytic-and-nonsmooth-chebyshev-coefficient-decay`: added chain-rule, absolute-value, continuity, and differentiability-continuity suppliers. The argument now explicitly establishes continuity/integrability of the coefficient integrands and justifies the cosine antiderivative used in the integration-by-parts calculation.

14. `thm-chebyshev-lobatto-interpolation-rate-under-spectral-sobolev-regularity`: replaced an imported absolute-convergence shortcut with a direct finite Cauchy–Schwarz argument for absolute coefficient summability. Added the real-power, p-series, FTC, and nonnegative-series sources; the tail estimate now derives the stated $1+1/(2s-1)$ factor by finite integral comparison and the real-power derivative/FTC.

15. `thm-chebyshev-lobatto-interpolation-exponential-rate-for-analytic-data`: added the complex holomorphy, composition, chain/product, exponential, logarithm, and real-power sources. The proof now constructs an open rectangle on which the cosine composition is holomorphic, verifies the strip lies inside the relevant ellipse by its semiaxes, and applies Cauchy's estimate. It also defines the coefficient convention explicitly, derives the complex coefficient integral using parity and Euler's identity, and verifies periodicity and the lower-edge modulus bound.

16. `thm-chebyshev-weighted-orthogonal-projection-rate` and `thm-legendre-weighted-projection-error-rate`: made the nondecreasing spectral-weight hypotheses explicit in each theorem's first fact, as required for the projection tail comparison.

17. `lem-periodic-fourier-mode-aliasing-under-sampling`: expanded the real sine/cosine basis into the complete set of character residues, addressed the even-grid Nyquist representative, and stated how finite Fourier inversion proves uniqueness.

No `verification.judge` record was present on the changed items. The affected proof-contract citations and derivation inputs were synchronized with the repaired fact text and steps; the strict checker passed for all 14 changed proof-bearing items. No page prose, B-page prose, published content, other-batch item, or plan specification was edited.

## Unedited defects

None identified. All confirmed defects found in the writable batch-90 items were repaired. No page-level defect or remaining supplier defect requiring an uneditable finding was identified.

## Page verdicts

- `spectral-collocation-and-galerkin-methods` (A): pass. After the repairs, its summaries match the periodic Fourier and Chebyshev collocation conventions, weighted projection/interpolation estimates, quadrature and Galerkin mass-matrix claims, and the source-qualified conditioning remark.
- `spectral-collocation-and-galerkin-methods-examples` (B): pass. Its summaries match the reviewed exactness, aliasing, endpoint-clustering, coefficient-decay, and weighted-mass-matrix examples after the local example repairs.

## Checks and blocker

For all 19 changed items, `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` exited successfully and reported no additional reflow changes. `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` passed for each changed path; the 14 proof-bearing items had zero failing proofs, and the definitions had no failing checks. The strict proof-contract check returned `ok: true` with no errors or warnings for the 14 changed proof-bearing items. The required final batched `node tools/proof-layout.mjs` invocation over all 19 changed item paths reported `19 items, 50 steps, 0 defects`.

No batch-90 blocker remains.

## Coverage limits

The full assigned item and page inventory above was reviewed, along with the local supplier statements and proof sections needed to verify the claims and repairs. This was not a recursive re-audit of every transitive dependency behind every supplier, nor an independent audit of every external reference outside the source check identified above. The report records the concrete source passages and local mathematical evidence used for the judgments; no broader source coverage is claimed.
