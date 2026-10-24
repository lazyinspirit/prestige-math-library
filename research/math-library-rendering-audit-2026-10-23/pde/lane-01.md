# PDE rendering audit — lane 01

## Scope and result

Reviewed all 95 assigned frozen titles and complete ItemBodies and opened all 192 receipt-listed screenshot tiles individually with `tools.view_image(detail="original")`. Screenshot hashes were checked against receipt hashes; source hashes were checked against the assignment. No genuine LaTeX/TikZ rendering defect, verified clipping defect, or diagram-mathematics defect was found. Receipt KaTeX error and diagram-failure arrays are empty throughout; no TikZ diagram is present in this lane.

Multiple-tile items were inspected tile-by-tile in receipt order; adjoining overlap regions were checked for continuity. Visible line wraps and tile edges do not indicate clipping. No clipping concern required standalone/original/DOM diagnostics.

## Diagram review

One uncertain editorial diagram proposal: [def-augmented-characteristic-system-for-a-quasilinear-pde](../../../../items/def-augmented-characteristic-system-for-a-quasilinear-pde.md:26). Lines 26–33 define the lifted initial strip and ODE system. A compact TikZ schematic could show the initial surface $y\mapsto(\gamma(y),\phi(y))$, the characteristic flow $\dot X=a(X,Z)$ and $\dot Z=b(X,Z)$, then the spatial projection $\Psi(s,y)=X(s,y)$. The exact transversality condition is given by the initial derivative columns $[a(\gamma(y),\phi(y)),D\gamma(y)]$ in [lem-characteristic-strip-jacobian-at-the-initial-surface](../../../../items/lem-characteristic-strip-jacobian-at-the-initial-surface.md:27); the characteristic lift of a classical solution is stated in [lem-quasilinear-solution-lifts-to-characteristics](../../../../items/lem-quasilinear-solution-lifts-to-characteristics.md:23). This is editorial only; the prose and formulas already state the claims and no proof should rely on a diagram. The remaining 94 items were checked individually and no sufficiently high-value source-supported diagram proposal was identified.

## Item and tile coverage

Each row records the assigned frozen source and its tile count. Exact tile paths, receipt hashes, offsets, heights, and per-tile original-resolution attestations are in [lane-01.json](lane-01.json).

| Item | Frozen source | Tiles |
|---|---|---:|
| `cex-a-characteristic-analytic-surface-does-not-determine-the-normal-jet` | `items/cex-a-characteristic-analytic-surface-does-not-determine-the-normal-jet.md` | 1 |
| `cex-a-time-discontinuous-forcing-can-block-classical-regularity-at-its-jump` | `items/cex-a-time-discontinuous-forcing-can-block-classical-regularity-at-its-jump.md` | 2 |
| `cex-bounded-form-without-coercivity-need-not-be-solvable` | `items/cex-bounded-form-without-coercivity-need-not-be-solvable.md` | 1 |
| `cex-critical-sobolev-embedding-is-not-compact` | `items/cex-critical-sobolev-embedding-is-not-compact.md` | 2 |
| `cex-exterior-dirichlet-uniqueness-needs-growth-or-decay-control` | `items/cex-exterior-dirichlet-uniqueness-needs-growth-or-decay-control.md` | 2 |
| `cex-harnack-estimate-needs-an-additive-forcing-term` | `items/cex-harnack-estimate-needs-an-additive-forcing-term.md` | 2 |
| `cex-linfinity-approximate-identity-need-not-converge-in-supremum-norm` | `items/cex-linfinity-approximate-identity-need-not-converge-in-supremum-norm.md` | 2 |
| `cex-neumann-poisson-problem-needs-the-compatibility-condition` | `items/cex-neumann-poisson-problem-needs-the-compatibility-condition.md` | 3 |
| `cex-pointwise-shock-values-do-not-affect-the-weak-solution` | `items/cex-pointwise-shock-values-do-not-affect-the-weak-solution.md` | 2 |
| `cex-second-derivatives-of-the-fundamental-solution-are-not-locally-integrable-absolutely` | `items/cex-second-derivatives-of-the-fundamental-solution-are-not-locally-integrable-absolutely.md` | 4 |
| `cex-the-translation-semigroup-is-not-analytic` | `items/cex-the-translation-semigroup-is-not-analytic.md` | 4 |
| `cex-wave-formula-with-sphere-area-and-ball-volume-confused` | `items/cex-wave-formula-with-sphere-area-and-ball-volume-confused.md` | 2 |
| `cor-bessel-potential-spaces-are-hilbert-and-complete` | `items/cor-bessel-potential-spaces-are-hilbert-and-complete.md` | 2 |
| `cor-comparison-and-uniqueness-for-the-bounded-cylinder-heat-problem` | `items/cor-comparison-and-uniqueness-for-the-bounded-cylinder-heat-problem.md` | 1 |
| `cor-first-green-identity-on-a-bounded-c-one-domain` | `items/cor-first-green-identity-on-a-bounded-c-one-domain.md` | 1 |
| `cor-hopf-lax-preserves-a-modulus-of-continuity` | `items/cor-hopf-lax-preserves-a-modulus-of-continuity.md` | 1 |
| `cor-mass-conservation-for-integrable-entropy-solutions` | `items/cor-mass-conservation-for-integrable-entropy-solutions.md` | 2 |
| `cor-poincare-constant-and-first-dirichlet-eigenvalue` | `items/cor-poincare-constant-and-first-dirichlet-eigenvalue.md` | 2 |
| `cor-smooth-coefficients-and-boundary-make-elliptic-eigenfunctions-smooth` | `items/cor-smooth-coefficients-and-boundary-make-elliptic-eigenfunctions-smooth.md` | 2 |
| `cor-strong-maximum-principle-for-weak-elliptic-solutions` | `items/cor-strong-maximum-principle-for-weak-elliptic-solutions.md` | 2 |
| `cor-uniqueness-implies-existence-for-the-elliptic-dirichlet-problem` | `items/cor-uniqueness-implies-existence-for-the-elliptic-dirichlet-problem.md` | 2 |
| `def-augmented-characteristic-system-for-a-quasilinear-pde` | `items/def-augmented-characteristic-system-for-a-quasilinear-pde.md` | 1 |
| `def-closed-convex-obstacle-set-and-variational-inequality` | `items/def-closed-convex-obstacle-set-and-variational-inequality.md` | 2 |
| `def-dissipative-operator` | `items/def-dissipative-operator.md` | 2 |
| `def-fully-nonlinear-first-order-pde-and-complete-integral` | `items/def-fully-nonlinear-first-order-pde-and-complete-integral.md` | 1 |
| `def-hk-and-hk-zero-notation` | `items/def-hk-and-hk-zero-notation.md` | 1 |
| `def-linear-semilinear-quasilinear-and-fully-nonlinear-pde` | `items/def-linear-semilinear-quasilinear-and-fully-nonlinear-pde.md` | 1 |
| `def-piecewise-smooth-shock-and-one-sided-traces` | `items/def-piecewise-smooth-shock-and-one-sided-traces.md` | 1 |
| `def-self-similar-riemann-problem` | `items/def-self-similar-riemann-problem.md` | 1 |
| `def-subharmonic-and-superharmonic-functions-in-rn` | `items/def-subharmonic-and-superharmonic-functions-in-rn.md` | 1 |
| `def-weak-derivative-of-a-locally-integrable-function` | `items/def-weak-derivative-of-a-locally-integrable-function.md` | 1 |
| `ex-affine-and-harmonic-polynomial-functions` | `items/ex-affine-and-harmonic-polynomial-functions.md` | 1 |
| `ex-cauchy-kovalevskaya-for-a-second-order-normal-form` | `items/ex-cauchy-kovalevskaya-for-a-second-order-normal-form.md` | 1 |
| `ex-dirichlet-energy-with-affine-boundary-data` | `items/ex-dirichlet-energy-with-affine-boundary-data.md` | 2 |
| `ex-eikonal-equation-as-a-viscosity-equation` | `items/ex-eikonal-equation-as-a-viscosity-equation.md` | 2 |
| `ex-harmonic-taylor-series-on-a-ball` | `items/ex-harmonic-taylor-series-on-a-ball.md` | 1 |
| `ex-inviscid-burgers-rarefying-data` | `items/ex-inviscid-burgers-rarefying-data.md` | 1 |
| `ex-natural-neumann-condition-from-a-free-endpoint` | `items/ex-natural-neumann-condition-from-a-free-endpoint.md` | 2 |
| `ex-one-dimensional-form-attains-the-lax-milgram-one-over-alpha-bound` | `items/ex-one-dimensional-form-attains-the-lax-milgram-one-over-alpha-bound.md` | 2 |
| `ex-point-source-wave-front-in-three-dimensions` | `items/ex-point-source-wave-front-in-three-dimensions.md` | 2 |
| `ex-rankine-hugoniot-in-space-time-normal-form` | `items/ex-rankine-hugoniot-in-space-time-normal-form.md` | 2 |
| `ex-scaling-for-the-sobolev-conjugate` | `items/ex-scaling-for-the-sobolev-conjugate.md` | 2 |
| `ex-sobolev-truncations-preserve-zero-regions` | `items/ex-sobolev-truncations-preserve-zero-regions.md` | 5 |
| `ex-two-dimensional-logarithmic-kernel-has-unit-normalised-flux` | `items/ex-two-dimensional-logarithmic-kernel-has-unit-normalised-flux.md` | 3 |
| `ex-zero-wave-energy-means-spatial-constant-before-data-fix-the-constant` | `items/ex-zero-wave-energy-means-spatial-constant-before-data-fix-the-constant.md` | 2 |
| `lem-an-analytic-germ-has-a-rational-geometric-majorant` | `items/lem-an-analytic-germ-has-a-rational-geometric-majorant.md` | 1 |
| `lem-ball-poisson-kernel-is-positive-and-normalised` | `items/lem-ball-poisson-kernel-is-positive-and-normalised.md` | 2 |
| `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness` | `items/lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness.md` | 3 |
| `lem-characteristic-strip-jacobian-at-the-initial-surface` | `items/lem-characteristic-strip-jacobian-at-the-initial-surface.md` | 1 |
| `lem-coercive-sectorial-form-resolvents-define-a-closed-m-sectorial-operator` | `items/lem-coercive-sectorial-form-resolvents-define-a-closed-m-sectorial-operator.md` | 4 |
| `lem-coordinate-direction-form-of-the-slobodeckij-seminorm` | `items/lem-coordinate-direction-form-of-the-slobodeckij-seminorm.md` | 3 |
| `lem-dirichlet-green-function-is-unique-and-positive` | `items/lem-dirichlet-green-function-is-unique-and-positive.md` | 3 |
| `lem-energy-identity-on-a-truncated-wave-cone` | `items/lem-energy-identity-on-a-truncated-wave-cone.md` | 2 |
| `lem-finite-interior-ball-chain-propagates-weak-harnack-bounds` | `items/lem-finite-interior-ball-chain-propagates-weak-harnack-bounds.md` | 2 |
| `lem-fundamental-lemma-of-the-calculus-of-variations` | `items/lem-fundamental-lemma-of-the-calculus-of-variations.md` | 2 |
| `lem-heat-kernel-semigroup-identity` | `items/lem-heat-kernel-semigroup-identity.md` | 2 |
| `lem-interior-sphere-barrier-for-the-laplacian` | `items/lem-interior-sphere-barrier-for-the-laplacian.md` | 1 |
| `lem-laplace-fundamental-solution-is-harmonic-off-its-pole` | `items/lem-laplace-fundamental-solution-is-harmonic-off-its-pole.md` | 2 |
| `lem-ltwo-and-divergence-data-embed-in-h-minus-one` | `items/lem-ltwo-and-divergence-data-embed-in-h-minus-one.md` | 2 |
| `lem-neumann-compatibility-from-the-divergence-theorem` | `items/lem-neumann-compatibility-from-the-divergence-theorem.md` | 2 |
| `lem-one-dimensional-trace-truncation-compatibility` | `items/lem-one-dimensional-trace-truncation-compatibility.md` | 4 |
| `lem-quasilinear-solution-lifts-to-characteristics` | `items/lem-quasilinear-solution-lifts-to-characteristics.md` | 1 |
| `lem-semigroup-generator-commutes-with-orbits-on-its-domain` | `items/lem-semigroup-generator-commutes-with-orbits-on-its-domain.md` | 2 |
| `lem-sobolev-integration-by-parts-for-dual-exponents` | `items/lem-sobolev-integration-by-parts-for-dual-exponents.md` | 4 |
| `lem-strict-subsolution-perturbation-for-the-heat-operator` | `items/lem-strict-subsolution-perturbation-for-the-heat-operator.md` | 2 |
| `lem-tangential-difference-quotient-test-function` | `items/lem-tangential-difference-quotient-test-function.md` | 3 |
| `lem-transport-characteristics-depend-c-one-on-initial-position` | `items/lem-transport-characteristics-depend-c-one-on-initial-position.md` | 2 |
| `lem-viscous-approximations-obey-uniform-linfinity-and-energy-bounds` | `items/lem-viscous-approximations-obey-uniform-linfinity-and-energy-bounds.md` | 2 |
| `lem-weak-equation-for-a-first-derivative-includes-coefficient-commutators` | `items/lem-weak-equation-for-a-first-derivative-includes-coefficient-commutators.md` | 2 |
| `lem-yosida-resolvent-converges-strongly-to-the-identity` | `items/lem-yosida-resolvent-converges-strongly-to-the-identity.md` | 1 |
| `rem-abstract-generator-domain-smoothing-becomes-spatial-regularity-only-after-domain-identification` | `items/rem-abstract-generator-domain-smoothing-becomes-spatial-regularity-only-after-domain-identification.md` | 1 |
| `rem-euler-lagrange-is-necessary-not-sufficient-without-convexity` | `items/rem-euler-lagrange-is-necessary-not-sufficient-without-convexity.md` | 1 |
| `rem-plane-harmonic-theory-is-owned-by-complex-analysis` | `items/rem-plane-harmonic-theory-is-owned-by-complex-analysis.md` | 1 |
| `rem-two-dimensional-poisson-disc-theory-is-cited-not-repeated` | `items/rem-two-dimensional-poisson-disc-theory-is-cited-not-repeated.md` | 1 |
| `thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation` | `items/thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation.md` | 2 |
| `thm-comparison-for-first-order-hamilton-jacobi-equations` | `items/thm-comparison-for-first-order-hamilton-jacobi-equations.md` | 3 |
| `thm-de-giorgi-nash-interior-holder-regularity` | `items/thm-de-giorgi-nash-interior-holder-regularity.md` | 3 |
| `thm-divergence-theorem-for-bounded-c-one-euclidean-domains` | `items/thm-divergence-theorem-for-bounded-c-one-euclidean-domains.md` | 1 |
| `thm-even-dimensional-wave-formula-by-descent` | `items/thm-even-dimensional-wave-formula-by-descent.md` | 2 |
| `thm-first-positive-neumann-eigenvalue-has-the-mean-zero-rayleigh-characterisation` | `items/thm-first-positive-neumann-eigenvalue-has-the-mean-zero-rayleigh-characterisation.md` | 4 |
| `thm-garding-inequality-for-a-divergence-form-elliptic-operator` | `items/thm-garding-inequality-for-a-divergence-form-elliptic-operator.md` | 2 |
| `thm-half-relaxed-limit-stability-for-viscosity-solutions` | `items/thm-half-relaxed-limit-stability-for-viscosity-solutions.md` | 3 |
| `thm-higher-eigenvalues-by-orthogonality-constrained-minimisation` | `items/thm-higher-eigenvalues-by-orthogonality-constrained-minimisation.md` | 3 |
| `thm-hopf-lax-dynamic-programming-semigroup` | `items/thm-hopf-lax-dynamic-programming-semigroup.md` | 2 |
| `thm-interior-schauder-estimate-for-uniformly-elliptic-equations` | `items/thm-interior-schauder-estimate-for-uniformly-elliptic-equations.md` | 3 |
| `thm-linfinity-stability-for-the-inhomogeneous-heat-equation` | `items/thm-linfinity-stability-for-the-inhomogeneous-heat-equation.md` | 2 |
| `thm-lp-trace-operator-on-a-bounded-c-one-domain` | `items/thm-lp-trace-operator-on-a-bounded-c-one-domain.md` | 3 |
| `thm-newtonian-potential-solves-poisson-distributionally` | `items/thm-newtonian-potential-solves-poisson-distributionally.md` | 5 |
| `thm-poisson-formula-for-the-two-dimensional-wave-equation` | `items/thm-poisson-formula-for-the-two-dimensional-wave-equation.md` | 2 |
| `thm-rellich-kondrachov-for-p-less-than-n` | `items/thm-rellich-kondrachov-for-p-less-than-n.md` | 2 |
| `thm-sobolev-gauss-green-formula-on-c-one-domains` | `items/thm-sobolev-gauss-green-formula-on-c-one-domains.md` | 2 |
| `thm-strong-maximum-principle-for-classical-subharmonic-functions` | `items/thm-strong-maximum-principle-for-classical-subharmonic-functions.md` | 1 |
| `thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic` | `items/thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic.md` | 1 |
| `thm-wave-tails-in-one-and-even-spatial-dimensions` | `items/thm-wave-tails-in-one-and-even-spatial-dimensions.md` | 3 |
| `thm-whole-space-heat-uniqueness-under-gaussian-growth` | `items/thm-whole-space-heat-uniqueness-under-gaussian-growth.md` | 2 |

## Evidence limits

This audit is limited to the frozen assignment snapshots, rendered HTML captures, and screenshot receipts in the local audit directory. It does not assert production-route behavior.
