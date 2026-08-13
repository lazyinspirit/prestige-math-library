# Real-analysis enrichment gap survey (`ra-enrich-01`)

Date: 2026-08-13  
Run: phase 1a, plan only

## Scope and method

I read all 87 Markdown files under `library/real-analysis/` and checked their
declared item and example lists against `research/plan-spec.json`. Four are
category metadata (`_category.md` at the root and in `differential-geometry/`,
`functional-analysis/`, and `measure-theory/`), not mathematical pages with
nonempty item lists. The survey below therefore accounts for every one of the
83 substantive published page files: 45 A/standalone pages and 38
`-examples` companions.

“Phase 1” means an item that can be added to an existing page without a forward
dependency. “Phase 2” means a coherent A/B pair that must go through a later
step 0–10 build. Measure-theoretic strengthenings are recorded as track
boundaries, not silently converted into real-analysis work.

## Verdict on the owner's four named gaps

| Named topic | What is already published | Disposition |
|---|---|---|
| Taylor series | The finite theory is extensive on `darboux-lhopital-and-taylor`: Taylor polynomials, Peano, Lagrange, Cauchy, Schlömilch–Roche, and remainder bounds. `power-series-and-real-analytic-functions` proves smoothness and coefficient recovery for power-series sums, re-expansion, and the real-analytic identity theorem. | **Phase 1:** add the missing name/definition of the Taylor series itself and state precisely that convergence to the function is equivalent to the Taylor remainder tending to zero, with the standard uniform derivative-bound criterion. Add the canonical two-sided flat counterexample \(e^{-1/x^2}\), while distinguishing it from the already-published one-sided flat example. |
| Maclaurin series | No published item uses the word “Maclaurin,” although the requisite series are proved separately: geometric, exponential, sine, cosine, \(\log(1+x)\), and arctangent. | **Phase 1:** one definition (“Taylor series at \(0\)”) and one synthesis corollary collecting those already-proved expansions. No separate page and no duplicated proofs. |
| Harmonic series | `ex-harmonic-series-diverges`, `thm-cauchy-condensation`, rational and real \(p\)-series, the alternating harmonic series, its value \(\log 2\), rearrangements, and Abel applications are all published. | The convergence/divergence theory is already covered. **Phase 1:** add only the distinct asymptotic topic \(H_n=\log n+\gamma+o(1)\), including existence of the Euler–Mascheroni constant. |
| Analytic sine/cosine versus geometry | `def-sine-and-cosine-by-power-series` is followed by derivatives, addition, Pythagoras, zeros, period, and analytic \(\pi\); `arc-length-and-rectifiable-curves` supplies the speed integral; `pi-the-equivalent-characterizations` proves circumference \(=2\pi r\); and the still-later `thm-sine-and-cosine-parametrize-the-unit-circle` proves the full-circle bijection. No item says “hypotenuse,” and no published item calibrates analytic parameter with geometric radian angle. | **Phase 1, headline bridge:** define radian angle by unit-circle arc length and prove that \((\cos t,\sin t)\) has accumulated length \(t\); then deduce \(\cos\theta=A/H\) and \(\sin\theta=O/H\) for an arbitrary nondegenerate acute right triangle in standard position. Both fit `pi-the-equivalent-characterizations`, after arc length is available and before its polygon theorem uses the geometric formulas. |

## Page-by-page survey

The coverage column deliberately records what is present, including on pages
where no addition is proposed. Counts are item/example entries on each physical
page.

| Published page file | Existing coverage | Gap or thin spot and disposition |
|---|---|---|
| `absolute-convergence-and-rearrangement.md` | Absolute/conditional convergence, Dirichlet/Abel tests, Riemann rearrangement, Cauchy products, double-series Fubini, infinite products, decimals (26 entries). | Strong; no phase-1 addition. Vector-valued unconditional convergence belongs with functional analysis. |
| `absolute-convergence-and-rearrangement-examples.md` | Harmonic/alternating-harmonic, rearrangement, Cauchy-product, and infinite-product examples (14). | Harmonic examples are already ample; no gap. |
| `approximation-and-compactness-in-ck.md` | Arzelà–Ascoli, Bernstein/Weierstrass, real Stone–Weierstrass, Baire, generic nowhere differentiability, Takagi (29). | Fourier approximation needs coefficients, kernels, convergence modes, and examples: **phase-2 Fourier pair**. |
| `approximation-and-compactness-in-ck-examples.md` | Equicontinuity, Bernstein, algebra, and compactness examples (7). | No phase-1 addition; Fourier examples belong to phase 2. |
| `arc-length-and-rectifiable-curves.md` | Polygonal length, BV characterization, additivity/reparametrization, lower semicontinuity, speed integral, length function, unit-speed parametrization (15). | Coherent. Its machinery supports the later **phase-1 radian calibration**; adding that here would forward-depend on sine/cosine. |
| `arc-length-and-rectifiable-curves-examples.md` | Rectifiable/nonrectifiable curves, graphs, reparametrization, and a unit-circle arc computation (8). | `ex-unit-circle-arc-has-length-theta` computes length but intentionally does not define angle; a B-page leaf cannot support the later bridge. |
| `bounded-variation-and-riemann-stieltjes.md` | BV/Jordan decomposition, regulated functions, Riemann–Stieltjes criteria/calculus, Young existence (35). | Very full. AC representation and Banach–Zarecki need the measure track. |
| `bounded-variation-and-riemann-stieltjes-examples.md` | Jump, Cantor, step, singular-integrator, and Young-boundary examples (12). | No phase-1 gap; measure refinements are out of track. |
| `cantor-set-baire-and-measure-zero.md` | Baire category, elementary null/content-zero sets, Cantor/fat Cantor sets and function (24). | Strong elementary scope; Lebesgue measurability is measure-track work. |
| `cantor-set-baire-and-measure-zero-examples.md` | Meagreness/nullity independence and Cantor examples (12). | No phase-1 addition. |
| `construction-of-r-via-cauchy-sequences.md` | Full \(\mathbb Z\to\mathbb Q\to\mathbb R\) quotient construction, order, density, completeness (40). | Foundationally complete for purpose; no addition. |
| `construction-of-r-via-dedekind-cuts.md` | Full cut construction, operations/order, completeness, rational embedding (39). | Foundationally complete for purpose; no addition. |
| `continuity-ivt-evt-and-uniform-continuity.md` | Sequential continuity, compact images, EVT/IVT, fixed point, uniform continuity, Heine–Cantor, dense extension (21). | Standard core present; no gap. |
| `continuity-ivt-evt-and-uniform-continuity-examples.md` | Endpoint, noncompactness, oscillation, and uniform-continuity examples (10). | No addition. |
| `convexity.md` | Slopes, local Lipschitzness, one-sided derivatives, supports, derivative criteria, Jensen, extrema, inflection (19). | Coherent one-dimensional scope; no thin-item repair. |
| `convexity-examples.md` | Strict/nonstrict, nonsmooth, midpoint, support, inflection examples (4). | Short but representative; no addition. |
| `countability-and-uncountability.md` | Countability machinery, Schröder–Bernstein, products/unions, rationals, Cantor, uncountability (21). | Complete for analysis prerequisites; further cardinal theory is out of track. |
| `darboux-lhopital-and-taylor.md` | Darboux for derivatives, L’Hôpital, finite Taylor polynomial and standard remainders/tests (20). | Finite Taylor theory is done. **Phase 1:** infinite-series naming/representation belongs on the later power-series page. |
| `darboux-lhopital-and-taylor-examples.md` | Darboux/L’Hôpital hypothesis failures and finite Taylor examples (8). | No duplicate finite theory; the flat infinite-series example belongs later. |
| `equivalent-forms-of-completeness.md` | LUB/nested intervals/Bolzano–Weierstrass/Cauchy/monotone equivalence; Cesàro, Stolz, Silverman–Toeplitz (21). | Strong; no addition. |
| `equivalent-forms-of-completeness-examples.md` | Non-Archimedean and summability counterexamples (10). | No addition. |
| `formal-laurent-series-field.md` | Concrete Cauchy-complete non-Archimedean ordered field not LUB-complete (11). | Purposefully narrow standalone page; no addition. |
| `foundations-of-the-real-numbers.md` | Ordered-field algebra, absolute value, Archimedean property, rational density, roots, uniqueness/equivalence (43). | Complete prerequisite hub; no addition. |
| `fubini-and-change-of-variables.md` | Riemann/Jordan Fubini, Cavalieri, Jacobians, linear/\(C^1\) change of variables, compact support (25). | Riemann/Jordan scope is explicit; Tonelli/Lebesgue Fubini belong to measure. |
| `fubini-and-change-of-variables-examples.md` | Section, non-Jordan, injectivity/Jacobian, and coordinate-change examples (13). | No addition. |
| `fundamental-trigonometric-identities.md` | Six-function identities, transformations, `thm-sine-and-cosine-parametrize-the-unit-circle`, rational parametrizations, Chebyshev/de Moivre, minimax (19). | The full analytic unit-circle bijection is already here; geometric angle meaning and triangle ratios are supplied earlier by the planned \(\pi\)-hub bridge, without forward-depending on this page. |
| `fundamental-trigonometric-identities-examples.md` | Domain/sign, parametrization, and Chebyshev examples (6). | No addition. |
| `further-trigonometric-identities-and-inverses.md` | Principal inverse trig, derivatives, arctangent integral/series, Gregory–Leibniz (5). | Thin but coherent. **Phase 1:** one standard-Maclaurin synthesis here, the first page after all constituent expansions exist. |
| `further-trigonometric-identities-and-inverses-examples.md` | Branch/domain and inverse-identity counterexamples (3). | Short but adequate; no extra example. |
| `improper-integrals.md` | Definitions, Cauchy/comparison/absolute tests, \(p\)-test, principal value, Dirichlet/Abel, substitutions, Frullani (25). | Strong Riemann improper theory; no addition. |
| `improper-integrals-examples.md` | Endpoint/infinity, conditional, principal-value, comparison, substitution, Frullani examples (12). | No addition. |
| `inverse-and-implicit-function-theorems.md` | \(C^1\) maps, invertible linear maps, Newton contraction, Euclidean inverse and implicit theorems (5). | Genuinely thin: constant rank and regular-level-set consequences require a **phase-2 rank pair**. |
| `inverse-and-implicit-function-theorems-examples.md` | Singular derivative, local/global injectivity, implicit-branch examples (3). | Adequate for IFT; rank/level-set examples belong to phase 2. |
| `limits-of-real-functions.md` | Epsilon, one-sided/infinite and sequential limits; locality, algebra/order/squeeze/composition, integer part (21). | Standard core present; no addition. |
| `limits-of-real-functions-examples.md` | Rational, piecewise, and oscillatory examples (13). | No addition. |
| `limsup-and-subsequential-limits.md` | Extended reals, limsup/liminf, subsequences, algebraic bounds, root/ratio, factorial domination (23). | Strong; no addition. |
| `limsup-and-subsequential-limits-examples.md` | Oscillating, dense, infinite, and strict-inequality examples (9). | No addition. |
| `line-integrals-and-the-gradient-theorem.md` | Line integrals, conservative fields, Poincaré, simply connected planar domains, and Green for finite unions of elementary regions (31). | Green is **already published**. Surface area/flux, divergence, and 3D Stokes need a **phase-2 surface pair**. |
| `line-integrals-and-the-gradient-theorem-examples.md` | Conservative fields, punctured-plane circulation, Green area, path examples (9). | No phase-1 addition; surface examples belong to phase 2. |
| `mixed-partials-taylor-and-extrema.md` | Higher derivatives/Hessians, Schwarz, multivariable Taylor, quadratic tests, constraints/Lagrange multipliers (30). | Strong. Regular-level-set geometry fits the phase-2 rank pair. |
| `mixed-partials-taylor-and-extrema-examples.md` | Mixed-partial failures, Hessian degeneracy, Taylor/extremum/multiplier examples (9). | No addition. |
| `monotone-functions-and-discontinuities.md` | One-sided limits, jumps/countable discontinuities, inverse continuity, BV links (32). | Very full; no addition. |
| `monotone-functions-and-discontinuities-examples.md` | Jump, dense-discontinuity, inverse, endpoint examples (11). | No addition. |
| `monotone-sequences-and-cauchy-completeness.md` | Monotone convergence, Cauchy completeness, contractions/rates, recursive/root sequences (20). | Already supplies fixed-point machinery for phase-2 Picard–Lindelöf; no local item. |
| `monotone-sequences-and-cauchy-completeness-examples.md` | Monotone/Cauchy/contraction examples and failures (11). | No addition. |
| `pi-the-equivalent-characterizations.md` | Analytic zero/period \(\pi\), circle length/area, polygons, Gregory–Leibniz, Wallis, Viète, ledger (14). | **Phase 1:** radian calibration and right-triangle ratio theorem; both sine/cosine and arc length are earlier. |
| `pi-the-equivalent-characterizations-examples.md` | Polygon, circumference/area, Wallis/Viète and rate examples (7). | The bridge must be dependency-bearing A-page mathematics; no B addition. |
| `power-series-and-real-analytic-functions.md` | Radius, compact uniform convergence, termwise calculus, coefficient recovery, re-expansion, analyticity/identity, closure, Abel/Cesàro/Tauber (30). | **Phase 1:** Taylor/Maclaurin definition and remainder representation/criterion. |
| `power-series-and-real-analytic-functions-examples.md` | Radius, endpoint, re-expansion, analytic identity, summability examples (8). | A standard-expansions item here would illegally forward-depend on later exp/log/trig pages. |
| `properties-of-the-integral-and-the-working-ftc.md` | Integral algebra/order, additivity/bounds, FTC I/II, primitives, mean value, integral functions (20). | The core FTC is already here; no addition. |
| `properties-of-the-integral-and-the-working-ftc-examples.md` | Integrability/algebra/FTC endpoint and hypothesis examples (13). | No addition. |
| `rn-as-a-normed-space.md` | \(p\)-norms, metric/topology/compactness/completeness, linear maps, equivalence of norms (22). | Adequate Euclidean scope; abstract Banach/Hilbert theory is elsewhere. |
| `rn-as-a-normed-space-examples.md` | Norm equivalence, compactness, dimension-dependent examples (12). | No addition. |
| `roots-and-rational-powers.md` | Integer/rational powers, roots, Bernoulli/binomial tools, limits and laws (22). | Complete for downstream work; no addition. |
| `sequences-and-limits.md` | Sequence/limit definitions, uniqueness, boundedness/Cauchy, algebra/order/squeeze, infinity, subsequences (18). | Compact but complete core; no addition. |
| `series-and-nonnegative-tests.md` | Series/Cauchy, geometric/telescoping, comparison, condensation, \(p\), root/ratio/Kummer/Raabe/Gauss/Abel–Dini (25). | Harmonic/\(p\)-series decision theory is comprehensive; the distinct harmonic asymptotic goes later with log. |
| `series-and-nonnegative-tests-examples.md` | Harmonic divergence, \(p\)-series, condensation, telescoping and test-sharpness examples (12). | No further harmonic divergence proof needed. |
| `sine-cosine-and-the-definition-of-pi.md` | Series definitions, derivatives/ODE, addition/Pythagoras, analytic \(\pi\), zeros/periods/signs, reciprocal trig, \(\sin x/x\) (16). | Analytic theory is strong. Geometry cannot be here because arc length is later; use the phase-1 \(\pi\)-hub bridge. |
| `sine-cosine-and-the-definition-of-pi-examples.md` | Analytic values, periodicity/domain, and limit examples (5). | No addition. |
| `suprema-and-infima.md` | Bounds, sup/inf/max/min, epsilon characterizations, finite max, translation/scaling/sum (17). | Low count is not a defect; focused foundational page. |
| `suprema-and-infima-examples.md` | Attained/unattained, empty/unbounded, algebra examples (8). | No addition. |
| `the-complex-exponential-and-eulers-formula.md` | Complex completeness/series, exponential/Euler, polar/log/powers, roots, complex trig, FTA (28). | Strong. Periodic Fourier theory is absent and too large for an item: **phase-2 Fourier pair**. |
| `the-complex-exponential-and-eulers-formula-examples.md` | Branch, root, exponential-fibre, polynomial examples (8). | No phase-1 addition; Fourier waves belong to phase 2. |
| `the-derivative-and-mean-value-theorems.md` | Derivative forms, algebra/chain/inverse, extrema, Rolle/MVT/Cauchy MVT, monotonicity/Lipschitz (19). | Standard core present; no addition. |
| `the-derivative-and-mean-value-theorems-examples.md` | Nondifferentiability, MVT hypotheses, inverse/monotonicity examples (10). | No addition. |
| `the-exponential-function.md` | Series definition, functional equation, derivative/order/range, growth, IVP, product limit, Picard iterates, equivalences, \(e\) (19). | No phase-1 theorem. General nonlinear Picard requires a **phase-2 ODE pair**. |
| `the-exponential-function-examples.md` | Product-limit, flat/bump, Cauchy functional equation, uniform-continuity examples (6). | **Phase 1:** add the exact \(e^{-1/x^2}\) Maclaurin counterexample, distinct from published one-sided \(e^{-1/x}\). |
| `the-fundamental-theorems-of-calculus.md` | Exceptional-set Newton–Leibniz, parts/substitution, one-sided FTC, parameter differentiation, Stieltjes FTC (10). | Core FTC is on `properties...`. Nonlinear integral equations require the **phase-2 ODE pair**; Lebesgue FTC belongs to measure. |
| `the-fundamental-theorems-of-calculus-examples.md` | Exceptional-set, substitution, parameter, Stieltjes examples (6). | No phase-1 addition; ODE examples belong to phase 2. |
| `the-integral-logarithm-and-its-characterisations.md` | Integral log/exp, laws/equivalence, hyperbolic-area \(e\), functional-equation characterizations (19). | Strong equivalence page; no addition. |
| `the-integral-logarithm-and-its-characterisations-examples.md` | Integral/series/product and pathological functional-equation examples (5). | Short but sufficient; no addition. |
| `the-logarithm-and-general-powers.md` | Log, real powers/equivalence, series/growth, real \(p\)-series, inequalities, hyperbolic functions (25). | **Phase 1:** existence of \(\gamma=\lim(H_n-\log n)\) and the harmonic asymptotic. |
| `the-logarithm-and-general-powers-examples.md` | Bases, irrational powers, log limits, inequalities, hyperbolic examples (6). | No addition. |
| `the-riemann-integral.md` | Darboux/Riemann definitions/equivalence, main integrability criteria, elementary null-set criterion (18). | Complete deliberate Riemann scope; measure integration is another track. |
| `the-riemann-integral-examples.md` | Dirichlet/Thomae/step/tagged-sum examples (10). | No addition. |
| `the-riemann-integral-in-rn-and-jordan-content.md` | Multidimensional Riemann, null/content-zero, Jordan content/boundary, Jordan-set integration (30). | Strong prerequisite; surface integration needs a **phase-2 surface pair**. |
| `the-riemann-integral-in-rn-and-jordan-content-examples.md` | Jordan/non-Jordan, graph/null, multidimensional examples (8). | No addition. |
| `the-total-derivative.md` | Linear maps, partial/total derivatives, Jacobian/gradient, chain rule, continuous partials, mean-value bound (17). | Adequate core. Constant rank needs a **phase-2 pair**, not one theorem. |
| `the-total-derivative-examples.md` | Partial-vs-total, chain/Jacobian/gradient examples (6). | No addition. |
| `topology-of-r.md` | Open/closed, closure/boundary, open-set structure, density, Heine–Borel, connectedness, perfect sets (22). | Complete one-dimensional prerequisite; no addition. |
| `topology-of-r-examples.md` | Dense, open/closed, compactness, connectedness, perfect-set examples (11). | No addition. |
| `uniform-convergence-of-functions.md` | Pointwise/uniform/Cauchy, continuity/integration/differentiation interchange, \(C(K)\), M/Dirichlet/Abel, Dini (19). | Strong. Fourier convergence modes/kernels require the **phase-2 Fourier pair**. |
| `uniform-convergence-of-functions-examples.md` | Pointwise-not-uniform, interchange failures, test sharpness, Dini failures (8). | No addition. |

## Consolidated gap register

### Phase 1: additions to existing pages

1. Taylor/Maclaurin series definition, including the warning that the formal
   series need not represent the function.
2. Taylor-remainder representation criterion and its standard uniform
   derivative-bound sufficient condition.
3. The two-sided flat function \(e^{-1/x^2}\), whose Maclaurin series is zero.
4. One theorem identifying the standard geometric, exponential,
   trigonometric, logarithmic, and arctangent series as Maclaurin series.
5. Radian measure calibrated by unit-circle arc length.
6. Equality of analytic sine/cosine with opposite/hypotenuse and
   adjacent/hypotenuse in an acute right triangle.
7. Existence of the Euler–Mascheroni constant and the harmonic-number
   asymptotic.

### Phase 2: whole A/B pairs

1. Fourier Series and Fejér Summation.
2. Picard–Lindelöf and First-Order ODEs.
3. Constant-Rank Normal Forms and Regular Level Sets.
4. Surface Integrals, the Divergence Theorem, and Stokes’ Theorem.

Exact items, dependencies, sources, anchors, and pair placement are in
`research/ra-enrich-01-PLAN.md`.
