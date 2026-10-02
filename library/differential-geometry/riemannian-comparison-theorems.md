---
page: riemannian-comparison-theorems
title: "Riemannian Comparison Theorems"
status: published
requires: [riemannian-metrics-length-distance-and-volume, connections-levi-civita-and-parallel-transport, geodesics-the-exponential-map-completeness-and-hopf-rinow, riemann-curvature-and-riemannian-submanifolds, jacobi-fields-conjugate-points-and-the-cut-locus, covering-spaces-and-lifting, product-measures-and-the-fubini-tonelli-theorems, radon-measures-and-the-riesz-markov-kakutani-theorem, simply-connected-plane-domains]
items:
  - def-comparison-sine-cosine-and-cotangent-functions
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - def-radial-jacobi-tensor
  - lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point
  - def-radial-riccati-operator
  - thm-radial-riccati-equation
  - lem-trace-riccati-inequality
  - thm-sturm-comparison-for-scalar-jacobi-equations
  - thm-rauch-comparison-theorem-first-form
  - lem-riccati-comparison-for-scalar-initial-shape
  - thm-rauch-comparison-theorem-second-form
  - prop-rigidity-in-rauch-comparison
  - cor-upper-sectional-curvature-bounds-delay-conjugate-points
  - cor-lower-positive-sectional-curvature-forces-conjugate-points
  - def-laplace-beltrami-operator-as-trace-of-the-hessian
  - thm-hessian-comparison-for-distance-under-sectional-curvature-bounds
  - thm-laplacian-comparison-for-distance-under-a-ricci-lower-bound
  - rem-weak-laplacian-comparison-at-the-cut-locus
  - thm-no-conjugate-points-under-nonpositive-sectional-curvature
  - thm-a-complete-local-isometry-is-a-covering-map
  - thm-cartan-hadamard
  - cor-simply-connected-complete-nonpositively-curved-manifolds-have-unique-geodesics-between-points
  - cor-squared-distance-is-strictly-convex-along-geodesics-in-a-hadamard-manifold
  - thm-bonnet-conjugate-radius-theorem
  - thm-bonnet-myers
  - lem-pullback-metric-on-a-cover-of-a-complete-manifold-is-complete
  - cor-bonnet-myers-fundamental-group-is-finite
  - prop-round-sphere-model-geometry
  - prop-half-space-model-geometry
  - prop-flat-torus-model-geometry
  - def-model-space-radial-area-and-ball-volume
  - def-radial-volume-jacobian
  - lem-logarithmic-derivative-of-the-radial-volume-jacobian-is-the-distance-laplacian
  - thm-relative-volume-density-comparison
  - thm-bishop-gromov-volume-comparison
  - thm-cheng-maximal-diameter-rigidity
  - cor-bishop-volume-upper-bound
  - cor-volume-doubling-under-a-nonnegative-ricci-lower-bound
  - prop-rigidity-in-bishop-gromov-on-an-interval
  - cor-complete-noncompact-manifolds-with-nonnegative-ricci-curvature-have-at-most-euclidean-volume-growth
  - def-comparison-triangle-in-the-two-dimensional-space-form
  - lem-first-variation-hinge-derivative-formula
  - lem-toponogov-distance-support-inequality
  - thm-toponogov-hinge-comparison
  - thm-toponogov-triangle-comparison
  - prop-distance-between-corresponding-side-points-in-toponogov-comparison
  - cor-diameter-rigidity-from-toponogov-under-a-sectional-lower-bound
  - rem-alexandrov-and-differentiable-sphere-theorems
  - fs-higher-sectional-curvature-makes-jacobi-fields-spread-faster
  - fs-cartan-hadamard-says-exp-p-is-injective-without-simple-connectedness
  - fs-positive-ricci-curvature-without-a-uniform-lower-bound-implies-compactness
  - fs-bishop-gromov-volume-ratio-is-nondecreasing-under-a-ricci-lower-bound
  - fs-a-section-curvature-lower-bound-makes-triangles-thinner-than-the-model
  - fs-the-laplace-beltrami-definition-licenses-the-use-of-all-euclidean-harmonic-function-theory-on-manifolds
examples: []
---

This page develops the comparison theory of Jacobi fields, the distance
function and the volume of balls under curvature bounds, together with the
model-space geometry those comparisons are measured against, and closes with
the Toponogov hinge, triangle and diameter-rigidity statements. The curvature
convention is fixed once: a lower bound $K\ge k$ means every tangent
two-plane of $(M,g)$ has sectional curvature at least $k$, and the model
objects are the simply connected $k$-space forms $M^2_k$ and $S^n_{1/\sqrt k}$
with the metric induced from Euclidean space. The inherited Axiom of Countable
Choice $\mathrm{AC}_\omega$ is declared on exactly the items whose interfaces
consume it (Hopf--Rinow minimizers selected one at a time, cut times, the
exponential map on the cut domain, comparison triangles and second variation);
the scalar and algebraic items are choice-free, and no argument selects a
family at once.

The model functions $\operatorname{sn}_k$, $\operatorname{cs}_k$ and
$\operatorname{ct}_k$ are defined by their piecewise formulas with the
positive domain $(0,\pi/\sqrt k)$ for $k>0$ and $(0,\infty)$ for $k\le0$;
their differential identities are proved, not assumed. The radial Jacobi
tensor $A(t)$, the radial Riccati operator $S=D_tA\,A^{-1}$ and the
invertibility of $A$ before the first conjugate instant supply the linear
machinery: the Riccati equation, its trace inequality under a Ricci lower
bound, and the Sturm comparison for scalar Jacobi equations. Rauch
comparison is proved in two forms: the first compares fields with $J(0)=0$
and equal initial-derivative norms; the second starts from nonzero matched
initial values with scalar-shape data $D_tJ(0)=\lambda J(0)$,
and rigidity is recorded in both forms: equality forces the radial sectional
curvature to be exactly $k$ wherever the compared field is nonzero.

Tracing the Riccati operator gives the Hessian comparison for the distance
function $r$ under sectional curvature bounds and the Laplacian comparison
under a Ricci lower bound, with the singular directions of $r$ and the
behaviour at the cut locus treated explicitly; a remark records what a
distributional passage would require beyond the pointwise statement proved
here. The same traced comparison, integrated against the radial volume
Jacobian, gives the relative-volume-density comparison and then the
Bishop--Gromov volume comparison: the ball-volume ratio
$R_p(r)=\operatorname{vol}_g(B(p,r))/V^\star_k(r)$ is nonincreasing, with
limit one at the origin, the upper bound $\operatorname{vol}_g(B(p,r))\le
V^\star_k(r)$ for $k=0$, volume doubling for a nonnegative Ricci bound, and
the equality case on an interval, which forces the metric to be the model
metric. Cheng's maximal-diameter rigidity and the at-most-Euclidean volume
growth of complete noncompact manifolds with nonnegative Ricci curvature are
its corollaries.

The nonpositive-curvature branch is developed separately: a complete local
isometry is a covering map, Cartan--Hadamard makes $\exp_p$ a global
diffeomorphism when the manifold is complete, simply connected and of
nonpositive sectional curvature, and consequently such manifolds have unique
minimizing geodesics between any two points and squared distance strictly
convex along geodesics. Bonnet's conjugate-radius theorem and the
Bonnet--Myers diameter bound $\operatorname{diam}\le\pi/\sqrt k$ are
proved from the index form and the model sine field, and Myers' theorem
yields finiteness of the fundamental group through the lifted complete metric
on the universal cover.

The Toponogov branch proves the hinge comparison from the first-variation
derivative of the distance to a moving endpoint, the triangle comparison by
applying the hinge at each vertex, the chord comparison for corresponding
points on two sides, and the maximal-diameter rigidity that identifies an
$n$-manifold with $K\ge k>0$ and diameter exactly $\pi/\sqrt k$ with the
round sphere; the proof of the last statement is deliberately the sectional
one, using the chord comparison at the degenerate perimeter and
nonnegativity of the index form rather than the Ricci-curvature
Bishop--Gromov theorem. A closing remark records the metric (Alexandrov)
curvature formulation, the differentiable sphere theorems and the stability
theory as deferred: no pinching sphere theorem, synthetic metric-space
comparison theory or stability theorem is proved on this page. The six false-statement
items record, with explicit refutations, the natural overreach: triangles
thin rather than fat under a lower bound, higher curvature making Jacobi
fields spread faster, exp injectivity without simple connectedness, pointwise
positive Ricci curvature as a compactness criterion, volume ratios increasing
under a lower Ricci bound, and Euclidean harmonic theory transferring to
manifolds without compactness or boundary hypotheses.
