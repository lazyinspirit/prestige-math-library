---
page: cm-math-geometry
title: Cm Math Geometry
status: published
items:
  - def-cm-equilibrium-and-lyapunov-stability
  - def-cm-orbital-and-linear-stability
  - def-cm-hyperbolic-equilibrium-and-limit-cycles
  - def-cm-stroboscopic-map
  - lem-cm-stroboscopic-iterate-identity
  - def-cm-constrained-configuration-and-mass-metric
  - lem-cm-mass-metric-positivity
  - def-cm-material-region-and-density
  - def-cm-traction-and-stress
  - def-cm-affine-time-space
  - lem-cm-adapted-coordinates-exist-and-are-unique
  - lem-cm-adapted-charts-and-galilean-transformations
  - lem-cm-moving-frame-acceleration-identity
  - def-cm-special-orthogonal-group
  - lem-cm-so3-is-a-matrix-group
  - lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold
  - lem-cm-rigid-labeling-stabilizer
examples: []
requires:
  - countability-and-uncountability
  - rank-theorems-and-embedded-submanifolds
  - regular-surfaces-and-surface-integrals
  - rn-as-a-normed-space
  - the-total-derivative
  - compactness-in-metric-spaces
  - dual-spaces-bilinear-forms-and-inertia
  - linear-independence-bases-and-dimension
  - picard-lindelof-and-first-order-odes
  - the-derivative-and-mean-value-theorems
  - the-inverse-function-theorem-completed
  - the-lebesgue-integral-and-the-convergence-theorems
  - vector-spaces-and-subspaces
  - determinants-of-matrices-over-a-commutative-ring
  - exterior-powers-orientation-and-hodge-duality
  - inner-product-spaces-and-orthogonality
  - lebesgue-measure-on-euclidean-space
  - linear-maps-rank-nullity-and-quotient-spaces
  - matrices-and-the-matrix-of-a-linear-map
  - metric-spaces
  - monotone-sequences-and-cauchy-completeness
  - separation-axioms
  - smooth-manifolds-and-smooth-maps
  - tangent-cotangent-and-the-differential
  - the-topology-of-euclidean-space
  - eigenvalues-eigenvectors-and-the-characteristic-polynomial
---

The geometric and kinematic prerequisites of the non-relativistic classical
mechanics collection, all of them mathematics.

The stability group fixes the dynamical vocabulary: [[def-cm-equilibrium-and-lyapunov-stability]]
defines equilibria, Lyapunov and asymptotic stability, [[def-cm-orbital-and-linear-stability]]
defines invariant sets, the distance to a set, orbital stability and linear
stability, [[def-cm-hyperbolic-equilibrium-and-limit-cycles]] defines hyperbolic
equilibria and fixed points, periodic orbits, limit cycles and homoclinic
trajectories, and [[def-cm-stroboscopic-map]] defines the time-$P$ map of a
$P$-periodic system with [[lem-cm-stroboscopic-iterate-identity]] recording its
iterates and the equilibrium fixed-point identity. The constrained-mechanics
definitions are [[def-cm-constrained-configuration-and-mass-metric]], with the
nondegeneracy criterion [[lem-cm-mass-metric-positivity]], keeping the intrinsic dimension of the configuration manifold distinct from the ambient particle dimension $3N$, and the continuum
vocabulary [[def-cm-material-region-and-density]] and
[[def-cm-traction-and-stress]], which record the density-as-integrand
convention, the traction sign convention and the fact that a representing stress
matrix is an object whose existence is a theorem under stated hypotheses, not a
definitional consequence.

The affine-time model is [[def-cm-affine-time-space]]: a four-dimensional real
vector space with a surjective time functional, an inner product on its kernel,
and an affine space of events, together with adapted charts whose time
coordinate is fixed by the functional. [[lem-cm-adapted-coordinates-exist-and-are-unique]]
proves that adapted coordinates exist and are unique and that each simultaneous
slice is an affine space over the kernel with its slice distance; [[lem-cm-adapted-charts-and-galilean-transformations]]
derives the transformation $t'=t+b$, $x'=Rx+vt+a$ between two adapted charts
with $R\in SO(3)$ under the orientation convention, and the velocity and
acceleration transformation laws. [[lem-cm-moving-frame-acceleration-identity]]
computes the angular velocity $\Omega=R^{\mathsf T}R'$, proves that $R^{\mathsf T}x''=y''+2\omega\times y'+\omega'\times y+\omega\times(\omega\times y)+R^{\mathsf T}c''$
for $x=Ry+c$, and records norm preservation.

The rotation-group facts are [[def-cm-special-orthogonal-group]],
[[lem-cm-so3-is-a-matrix-group]], [[lem-cm-so3-is-a-compact-three-dimensional-embedded-submanifold]]
and [[lem-cm-rigid-labeling-stabilizer]]: $SO(3)$ is a subgroup of
$GL_3(\mathbb R)$ with $R^{-1}=R^{\mathsf T}$, a compact three-dimensional
embedded submanifold of $M_3(\mathbb R)$ with tangent space $\{R\Omega:\Omega^{\mathsf T}=-\Omega\}$,
and a labeling containing two linearly independent vectors has trivial
stabilizer. All items carry `domain: mathematics`; dependence is only on
mathematical suppliers, and every external item dependency is a published
canonical root mathematics item. The affine-space structure is stated inline in
[[def-cm-affine-time-space]]; the separate draft special-relativity definition
is not a dependency. The companion page
[[cm-math-geometry-examples]] verifies the transformation, rotating-frame,
constraint, counterexample, primitive and stroboscopic computations in finite
form.
