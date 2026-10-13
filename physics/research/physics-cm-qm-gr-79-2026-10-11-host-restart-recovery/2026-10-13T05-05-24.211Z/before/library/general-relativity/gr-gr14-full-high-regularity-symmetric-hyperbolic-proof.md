---
requires:
  - absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus
  - banach-valued-integration-and-the-radon-nikodym-property
  - bounded-variation-and-riemann-stieltjes
  - cm-math-continuum
  - compactness
  - compactness-in-metric-spaces
  - completeness-and-uniform-continuity
  - complex-lp-spaces-and-test-function-conventions
  - complex-power-series-and-analytic-functions
  - connections-levi-civita-and-parallel-transport
  - continuity-ivt-evt-and-uniform-continuity
  - convexity
  - countability-and-uncountability
  - darboux-lhopital-and-taylor
  - determinants-of-matrices-over-a-commutative-ring
  - dual-spaces-bilinear-forms-and-inertia
  - euclidean-ordinary-differential-equations-with-smooth-dependence
  - euclidean-surface-measure-divergence-and-green-identities
  - exterior-powers-orientation-and-hodge-duality
  - finite-counting-and-binomial-coefficients
  - foundations-of-the-real-numbers
  - geodesics-the-exponential-map-completeness-and-hopf-rinow
  - gr-causal-and-initial-value-boundaries
  - gr-connections-and-free-fall
  - gr-curvature-and-tides
  - gr-einstein-and-matter
  - gr-framework-and-geometry
  - gr-gr13-convex-normal-neighborhoods
  - gr-tensors-and-observers
  - hilbert-space-geometry-and-riesz-representation
  - improper-integrals
  - inner-product-spaces-and-orthogonality
  - inverse-and-implicit-function-theorems
  - linear-independence-bases-and-dimension
  - manifolds-with-boundary-collars-and-orientations
  - matrices-and-the-matrix-of-a-linear-map
  - metric-spaces
  - mixed-partials-taylor-and-extrema
  - monotone-sequences-and-cauchy-completeness
  - normed-and-banach-spaces
  - orthonormal-bases-parseval-and-fourier-series
  - picard-lindelof-and-first-order-odes
  - product-measures-and-the-fubini-tonelli-theorems
  - properties-of-the-integral-and-the-working-ftc
  - rank-theorems-and-embedded-submanifolds
  - riemannian-metrics-length-distance-and-volume
  - rn-as-a-normed-space
  - roots-and-rational-powers
  - smooth-manifolds-and-smooth-maps
  - smooth-partitions-of-unity-and-exhaustions
  - sr-spacetime-primitives
  - strongly-continuous-semigroups-and-hille-yosida
  - tangent-cotangent-and-the-differential
  - tensor-fields-exterior-algebra-and-differential-forms
  - the-de-rham-theorem-and-degree
  - the-derivative-and-mean-value-theorems
  - the-determinant-of-a-linear-operator
  - the-exterior-derivative-and-cartan-calculus
  - the-fundamental-theorems-of-calculus
  - the-inverse-function-theorem-completed
  - the-lebesgue-integral-and-the-convergence-theorems
  - the-logarithm-and-general-powers
  - the-lp-spaces-holder-minkowski-and-riesz-fischer
  - the-maximal-function-and-lebesgue-differentiation
  - the-riemann-integral
  - the-spectral-theorem-and-singular-value-decomposition
  - the-total-derivative
  - topological-spaces-and-continuity
  - topology-of-r
  - uniform-convergence-of-functions
  - vector-fields-flows-and-lie-derivatives
  - weak-derivatives-and-sobolev-spaces
page: gr-gr14-full-high-regularity-symmetric-hyperbolic-proof
title: "Gr14 Full High Regularity Symmetric Hyperbolic Proof"
status: draft
library: physics
items:
  - def-gr-periodic-torus-and-sobolev-spaces
  - lem-gr-finite-speed-independence-of-extension
  - lem-gr-positive-definite-symmetric-matrix-bounds
  - lem-gr-rational-diagonal-extraction
  - lem-gr-periodic-fourier-differentiation-and-norm-equivalence
  - def-gr-galerkin-fourier-projection
  - def-gr-periodic-symmetric-hyperbolic-system
  - lem-gr-periodic-sobolev-completeness
  - lem-gr-periodic-sobolev-embedding
  - lem-gr-galerkin-projection-properties
  - lem-gr-periodic-sobolev-algebra
  - lem-gr-smooth-composition-and-commutator-estimates
  - lem-gr-galerkin-ode-local-solution
  - lem-gr-galerkin-time-derivative-bound
  - def-gr-dust-reduction-variables-and-gauge
  - lem-gr-galerkin-compactness
  - lem-gr-galerkin-energy-inequality
  - lem-gr-galerkin-second-time-derivative-bound
  - def-gr-barotropic-enthalpy-variable
  - def-gr-dust-electric-magnetic-weyl-variables-and-schouten
  - lem-gr-galerkin-limit-is-classical-solution
  - def-gr-dust-torsion-and-curvature-residuals
  - lem-gr-dust-symmetric-hyperbolic-reduction
  - lem-gr-dust-weyl-reconstruction-from-electric-magnetic
  - thm-gr-periodic-symmetric-hyperbolic-existence
  - def-gr-harmonic-gauge-and-reduced-equations
  - lem-gr-dust-reduced-evolution-equations
  - thm-gr-constraint-equations-in-normal-frame
  - thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability
  - lem-gr-harmonic-initial-data-construction
  - thm-gr-dust-subsidiary-and-residual-vanishing
  - thm-gr-periodic-symmetric-hyperbolic-smooth-persistence
  - lem-gr-dust-initial-data-and-tilted-initialization
  - lem-gr-einstein-residual-and-subsidiary-identity
  - lem-gr-reduced-einstein-principal-part
  - thm-gr-local-symmetric-hyperbolic-well-posedness
  - lem-gr-barotropic-fluid-symmetric-hyperbolic-system
  - lem-gr-scalar-einstein-symmetric-hyperbolic-reduction
  - thm-gr-harmonic-constraint-propagation
  - thm-gr-reduced-einstein-local-existence
  - thm-gr-local-geometric-uniqueness
  - thm-gr-local-geometric-development
  - thm-gr-barotropic-fluid-local-evolution
  - thm-gr-dust-local-evolution
  - thm-gr-scalar-field-local-evolution
  - thm-gr-high-regularity-selected-matter-development
  - pthm-gr-high-regularity-local-development
  - rem-gr-high-regularity-scope
examples: []
---
This page develops the complete local high-regularity kernel behind the Gr14
claim that the Einstein field law reduces to symmetric hyperbolic form: the
periodic first-order theory (E0), the harmonic-gauge reduced Einstein equation
and its subsidiary system (E1), the geometric initial-data, development and
uniqueness theorems (E2), and the selected scalar, barotropic-fluid and
geodesic-dust matter reductions with the full dust residual chain (E3). Every
item except the closing physics theorem and scope note is mathematics: a
conditional deduction about smooth Lorentzian metrics, symmetric hyperbolic
systems and their solutions. No item reports a measurement; the page asserts no
existence, uniqueness or stability property of nature.

**E0 — periodic symmetric hyperbolic systems.** The torus
$\mathbb T^3_{2\pi}$, its normalized measure, characters, weak derivatives and
the spaces $H^s$ are fixed in
[[def-gr-periodic-torus-and-sobolev-spaces]]; the Fourier differentiation
identity and the equivalence of the derivative and weight norms are
[[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]], the Sobolev
embedding $H^s\subseteq C^m$ for $s-m>3/2$ together with its Hölder modulus is
[[lem-gr-periodic-sobolev-embedding]], and the algebra and nonlinear
composition/commutator estimates used for quasilinear coefficients are
[[lem-gr-periodic-sobolev-algebra]] and
[[lem-gr-smooth-composition-and-commutator-estimates]]. A quasilinear
symmetric hyperbolic system with a positive definite time matrix is defined in
[[def-gr-periodic-symmetric-hyperbolic-system]]; the Galerkin projection onto
Fourier modes and its self-adjointness, derivative-commutation, contraction and
tail properties are [[def-gr-galerkin-fourier-projection]] and
[[lem-gr-galerkin-projection-properties]], with
[[lem-gr-positive-definite-symmetric-matrix-bounds]] supplying the uniform
eigenvalue and inverse bounds. The finite-dimensional Galerkin ODE and its
continuation criterion are [[lem-gr-galerkin-ode-local-solution]]; the
time-derivative and weighted-energy a priori bounds are
[[lem-gr-galerkin-time-derivative-bound]] and
[[lem-gr-galerkin-energy-inequality]]; compactness of the approximation family
and the passage to a classical solution are
[[lem-gr-galerkin-compactness]] and
[[lem-gr-galerkin-limit-is-classical-solution]], with the completeness of the
periodic Sobolev scale, the locally uniform extraction and the higher-order
time-continuity estimate supplied by
[[lem-gr-periodic-sobolev-completeness]],
[[lem-gr-rational-diagonal-extraction]] and
[[lem-gr-galerkin-second-time-derivative-bound]]. These assemble into local
existence [[thm-gr-periodic-symmetric-hyperbolic-existence]], uniqueness and
continuous dependence
[[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]], smooth
persistence [[thm-gr-periodic-symmetric-hyperbolic-smooth-persistence]], and
finite-speed independence of extensions
[[lem-gr-finite-speed-independence-of-extension]]; the packaged local
well-posedness statement with the domain of dependence is
[[thm-gr-local-symmetric-hyperbolic-well-posedness]]. The theorems are stated
for data of class $H^s$, $s\ge5$, and they assert nothing at the critical
threshold, nothing global in time and no uniform slab on noncompact data.

**E1 — harmonic reduction and the subsidiary system.** The gauge vector
$H^a=g^{bc}(\Gamma^a{}_{bc}-\bar\Gamma^a{}_{bc})$, the reduced Einstein
equation and the constraint residuals are defined in
[[def-gr-harmonic-gauge-and-reduced-equations]]. Its principal part and
first-order symmetric hyperbolic reduction are
[[lem-gr-reduced-einstein-principal-part]]; smooth initial data with vanishing
initial gauge give a smooth reduced solution in
[[thm-gr-reduced-einstein-local-existence]]. The residual identity
$E_{ab}=\tfrac12(\nabla_aH_b+\nabla_bH_a-g_{ab}\nabla^cH_c)$ and the
homogeneous wave equation for $H$ are
[[lem-gr-einstein-residual-and-subsidiary-identity]]; the constraint
equations in the normal frame, with the Gauss and Codazzi equations, are
[[thm-gr-constraint-equations-in-normal-frame]]; and the construction of the
initial metric jet from $(h,K)$ that makes the gauge vanish initially is
[[lem-gr-harmonic-initial-data-construction]]. The propagation theorem
[[thm-gr-harmonic-constraint-propagation]] then closes the reduction: a
reduced solution with vanishing initial gauge and constraints solves the full
field equation near the initial surface.

**E2 — geometric data, development and uniqueness.** The abstract matter
sector and the local development theorem are
[[thm-gr-local-geometric-development]]: constrained geometric data and a
matter sector whose combined system is symmetric hyperbolic with on-shell
conservation produce a smooth local development, with the initial surface in
the interior of its domain of dependence, and the local solutions glue. Local
geometric uniqueness
[[thm-gr-local-geometric-uniqueness]] puts two developments of the same data
into a common harmonic-map gauge and identifies them by the reduced uniqueness
theorem, so the background metric and the extension choices disappear from the
conclusion.

**E3 — selected matter sectors.** The scalar branch is
[[lem-gr-scalar-einstein-symmetric-hyperbolic-reduction]] and
[[thm-gr-scalar-field-local-evolution]]. For a strict barotropic fluid the
enthalpy variable $r=\int\sqrt{p'}/(\epsilon+p)\,d\epsilon$ is defined in
[[def-gr-barotropic-enthalpy-variable]]; the equivalence of the fluid equations
to a symmetric hyperbolic system with positive definite symbol and the
eigenvalue bound $z-c_s|\zeta_\perp|>0$ are
[[lem-gr-barotropic-fluid-symmetric-hyperbolic-system]], and the development
theorem is [[thm-gr-barotropic-fluid-local-evolution]]. The geodesic-dust
branch is carried by the reduction variables and comoving-parallel gauge
[[def-gr-dust-reduction-variables-and-gauge]], the electric-magnetic Weyl
variables and Schouten tensor
[[def-gr-dust-electric-magnetic-weyl-variables-and-schouten]] with the
reconstruction lemma
[[lem-gr-dust-weyl-reconstruction-from-electric-magnetic]], the reduced Weyl
evolution and transport equations
[[lem-gr-dust-reduced-evolution-equations]], the symbol lemma
[[lem-gr-dust-symmetric-hyperbolic-reduction]], the torsion and curvature
residuals [[def-gr-dust-torsion-and-curvature-residuals]], the subsidiary and
residual-vanishing theorem
[[thm-gr-dust-subsidiary-and-residual-vanishing]], and the tilted constrained
initialization [[lem-gr-dust-initial-data-and-tilted-initialization]]; these
give [[thm-gr-dust-local-evolution]], including empty regions and never
dividing by the density. The four branches are collected in
[[thm-gr-high-regularity-selected-matter-development]].

**Physical reading and scope.** The physics theorem
[[pthm-gr-high-regularity-local-development]] reads the mathematical kernel as
a conditional local-development statement for the adopted postulates, and
[[rem-gr-high-regularity-scope]] records what is and is not established: no
global or all-time existence, no maximality, no shocks or analysis of
free-boundary or junction behavior, and no low-regularity sources. Smooth dust
zero sets and empty regions are included; no claim that the model describes
nature is made. The
companion examples page
[[gr-gr14-full-high-regularity-symmetric-hyperbolic-proof-examples]] works the
periodic energy method, the sharp embedding threshold, the fluid principal
symbol and the failure of evolution for negative $p'$.
