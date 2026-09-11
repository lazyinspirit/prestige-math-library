# Prerequisite drift review — `phase-2-fourier-support-2`

Scope reviewed: `research/phase-2-fourier-support-2-scope-ledger.json`,
`research/phase-2-fourier-support-2-batch-1.pages.json`, the controlling FA-22
and FA-23 prose plus the 2026-09-11 amendment in
`research/plan-functional-analysis-track.md`, the retained detailed inventory
in `research/frontier-34-fa-prereqs-batch-8.pages.json`, the moved momentum
example in `research/frontier-34-fa-prereqs-batch-7.pages.json`, the owner scope
restriction and mathematical argument in
`research/phase-2-five-cap-admission.{md,json}`, and the canonical
`research/plan-spec.json`.

For source verification I read Dyatlov, MIT 18.155, §11.1 in full (printed
pp. 119–126, Definition 11.1 through Proposition 11.18), including the
Schwartz seminorms, differentiation/multiplication identities, Gaussian
calculation, regularized inversion, and product formula:
https://math.mit.edu/~dyatlov/18.155/155-notes.pdf. I also checked the complete
Euclidean Schwartz-to-Plancherel route and its Poisson-summation interface in
Tao, *245C, Notes 2*, §§3, Exercises 34–45 and 54:
https://terrytao.wordpress.com/2009/04/06/the-fourier-transform/.

### fourier-transform-convolution-and-approximate-identities

VERDICT: no-drift

The canonical direct edges are all backward and match the later owner-approved
admission: `countability-and-uncountability` (order 18),
`properties-of-the-integral-and-the-working-ftc` (order 161),
`uniform-convergence-of-functions` (order 169), `the-exponential-function`
(order 175), `the-complex-exponential-and-eulers-formula` (order 189),
`the-total-derivative` (order 229), `mixed-partials-taylor-and-extrema` (order
231), `stone-weierstrass-general` (order 287),
`improper-and-parameter-dependent-multiple-integrals` (order 288.00011),
`lebesgue-measure-on-euclidean-space` (order 288.007),
`the-lebesgue-integral-and-the-convergence-theorems` (order 288.015),
`the-lebesgue-and-riemann-integrals-compared` (order 288.017),
`product-measures-and-the-fubini-tonelli-theorems` (order 288.021),
`signed-and-complex-measures-hahn-and-jordan` (order 288.023),
`the-radon-nikodym-theorem-and-lebesgue-decomposition` (order 288.025),
`the-lp-spaces-holder-minkowski-and-riesz-fischer` (order 288.027),
`density-separability-and-convolution-in-lp` (order 288.029),
`complex-lp-spaces-and-test-function-conventions` (order 288.0321),
`the-maximal-function-and-lebesgue-differentiation` (order 288.033),
`radon-measures-and-the-riesz-markov-kakutani-theorem` (order 288.039), and
`bounded-linear-operators-and-quotient-spaces` (order 288.049).

The retained A inventory has 62 distinct item dependencies. Resolving their
current homes against `plan-spec.json` found no unresolved ID and no supplier
outside this closure. The required arguments use exactly the supplied complex
Lp conventions, change of variables, Tonelli/Fubini, dominated convergence,
Gaussian integration and integration by parts, translation/convolution and
approximate identities, Lebesgue points, finite complex measures and Radon
regularity, and bounded dense extension. The source arguments confirm that the
Gaussian ODE computation and Gaussian-regularized inversion can be carried out
before Schwartz theory and without an ODE-existence page.

Two historical candidate edges are not findings. The 2026-09-11 owner
admission explicitly replaced the former blanket edge to
`unbounded-self-adjoint-operators-and-stones-theorem` (order 288.087) with the
actual published supplier homes above. No FA-22 proof uses unbounded operators.
The older §14.6 instruction naming
`complex-riesz-thorin-endpoint-interpolation` (order 288.078121) is superseded
for this bounded admission: the retained interpolation item is only an
orientation remark, cites the pinned published
`thm-riesz-thorin-interpolation` on
`the-maximal-function-and-lebesgue-differentiation` (order 288.033), and
explicitly does not claim the missing infinite-target Hausdorff–Young step.
Adding either non-load-bearing edge would contradict the exact
`new_requires` scope restriction rather than repair prerequisite drift.

All 58 external supplier files pinned by the admission receipt retain their
recorded SHA-256 hashes and published homes. Remaining uncertainty is confined
to future authoring and independent proof review of the local Gaussian,
radial-majorant, and complex-measure-smoothing arguments; it does not expose a
missing page prerequisite or require an owner decision.

### schwartz-space-and-the-plancherel-theorem

VERDICT: no-drift

Its sole direct edge, `fourier-transform-convolution-and-approximate-identities`
(order 288.089), is backward from order 288.091 and intentionally carries all
published external inputs transitively. The retained A inventory has 47
distinct item dependencies. Resolving their current homes found no unresolved
ID and no supplier outside this closure. In particular the closure contains
`complex-lp-spaces-and-test-function-conventions` (order 288.0321) for complex
Lp completeness, density and inner products,
`density-separability-and-convolution-in-lp` (order 288.029) for smooth compact
approximation, `bounded-linear-operators-and-quotient-spaces` (order 288.049)
for dense bounded extension, and `stone-weierstrass-general` (order 287) for
periodic uniqueness.

The mathematical routes do not need any omitted substantial supplier. The
Schwartz metric and its completeness are proved locally from uniform derivative
limits; smooth cutoffs are constructed locally from the standard flat
exponential; Fourier invariance and inversion use the FA-22 integral theory;
Parseval plus complex L2 completeness, density, and bounded extension gives a
surjective Plancherel transform. Periodic uniqueness is local from complex
Stone–Weierstrass, so Poisson summation does not require a Fourier-series page.
The amended Hermite completeness proof uses Gaussian-weighted moments,
dominated exponential-series interchange, FA-22 uniqueness, and finite
orthogonal partial sums, so it does not require
`orthonormal-bases-parseval-and-fourier-series` (order 288.073), a spectral
theorem, or an arbitrary Hilbert-basis choice.

The 2026-09-11 amendment also supplies
`lem-real-ltwo-multipliers-and-unitary-transport` locally on this A page.
Truncation, the explicit adjoint test, dominated convergence and Fatou prove
the real multiplication operator's self-adjointness and exact generator domain;
unitary transport through Plancherel then supports the rehomed momentum example.
Consequently `unbounded-self-adjoint-operators-and-stones-theorem` (order
288.087) is not a prerequisite. Remaining uncertainty is the normal Step 3/5
obligation to author and independently judge these local proofs; no unresolved
mathematics presently calls for a new pair, rescope, order change, or owner
hold.

No edit was made to `research/plan-spec.json`.

Validation: `node tools/drift-review-check.mjs --run
phase-2-fourier-support-2 --before-apply` passed with both A pages reviewed and
materialization/buildability pending. `node tools/validate-plan.mjs
research/plan-spec.json` passed: declared page order is acyclic and consistent,
with no item-level cycles, forward references, B-page dependencies, or
unresolved IDs among the 978 pages whose item lists are currently materialized.
The validator's standing note that 641 planned pages still have empty item lists
applies; these two pages are among them until the engine's scaffold stage.
