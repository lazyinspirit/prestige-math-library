---
page: cm-math-canonical
title: Cm Math Canonical
status: draft
items:
  - def-cm-phase-domain-and-standard-symplectic-two-form
  - def-cm-finite-regularity-canonical-calculus
  - lem-cm-standard-symplectic-form-is-closed-and-nondegenerate
  - prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart
  - prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity
  - cor-cm-hamiltonian-flow-preserves-phase-volume
  - prop-cm-canonical-map-tests-and-hamiltonian-transport
  - def-cm-generating-function-of-the-first-and-second-kind
  - prop-cm-generating-functions-yield-canonical-maps
  - prop-cm-canonical-map-locally-has-a-generating-function
  - prop-cm-time-dependent-generating-function
  - prop-cm-cylinder-shift-has-no-global-generating-function
  - def-cm-hamilton-jacobi-equation-and-complete-integral
  - thm-cm-hamilton-jacobi-characteristics-from-a-complete-integral
  - rem-cm-scope-of-canonical-methods
  - lem-cm-closed-two-form-radial-primitive
  - thm-cm-liouville-arnold-action-angle-repaired
  - cor-cm-action-angle-radian-scaling
  - rem-cm-scope-of-complete-integrability-and-action-angle
examples: []
requires:
  - cm-math-variations
  - hamiltonian-mechanics-and-completely-integrable-systems
  - product-measures-and-the-fubini-tonelli-theorems
  - the-exterior-derivative-and-cartan-calculus
  - vector-fields-flows-and-lie-derivatives
  - tensor-fields-exterior-algebra-and-differential-forms
  - symplectic-manifolds-moser-stability-and-darboux-weinstein-theory
  - sigma-algebras-and-borel-sets
  - line-integrals-and-the-gradient-theorem
  - the-de-rham-complex-homotopy-and-mayer-vietoris
  - subspaces-products-and-quotients
  - orthonormal-bases-parseval-and-fourier-series
  - partitions-of-unity-and-paracompactness
  - cm-math-dynamics
---

The canonical and symplectic layer of the non-relativistic classical mechanics
collection, all of it mathematics: the phase domain with its canonical one-form
and standard symplectic two-form, the Hamiltonian field and Poisson bracket in
those coordinates, the canonical matrix identity satisfied by the derivative of
a Hamiltonian flow together with phase-volume preservation, the matrix test for
canonical maps and the naturality of Hamiltonian fields under them, generating
functions of the first and second kind with their canonicity and local existence
theorems, the global obstruction exhibited by the cylinder shift, the
Hamilton-Jacobi equation with its complete integrals, characteristics, Jacobi
constants and canonical labels, the local two-form primitive, and a complete
local proof of the Liouville-Arnold action-angle theorem together with its
period conventions and scope. Every item carries `domain: mathematics` and
depends only on mathematical suppliers; nothing here asserts that any model
describes nature, and the physical reading of momenta, Hamiltonians and
measured data remains with the consuming classical-mechanics pages.

The finite $C^1/C^2$ canonical-map and differential-form vocabulary is fixed by
[[def-cm-finite-regularity-canonical-calculus]]; its smooth subcase agrees with
the imported smooth definitions. The coordinate model is fixed by
[[def-cm-phase-domain-and-standard-symplectic-two-form]], and
[[lem-cm-standard-symplectic-form-is-closed-and-nondegenerate]] proves that its
standard two-form is closed and nondegenerate and computes the contraction and
block identities. On that basis
[[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]] identifies
the Hamiltonian field $X_H=J\nabla H$, Hamilton's equations and the coordinate
Poisson bracket for $C^2$ data, while
[[prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity]] shows that
the autonomous or nonautonomous evolution derivative satisfies $Y^{\mathsf T}JY=J$ and $\det Y=1$, and
[[cor-cm-hamiltonian-flow-preserves-phase-volume]] converts the unit
determinant into preservation of Lebesgue measure through the
change-of-variables theorem. The published root items
[[def-tautological-one-form-on-a-cotangent-bundle]],
[[thm-the-canonical-cotangent-two-form-is-symplectic]],
[[def-hamiltonian-vector-field-and-hamiltonian-function]],
[[thm-hamilton-equations-in-canonical-cotangent-coordinates]],
[[def-poisson-bracket-on-a-symplectic-manifold]],
[[prop-coordinate-formula-for-the-poisson-bracket]],
[[prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry]] and
[[thm-poisson-bracket-satisfies-the-jacobi-identity]] deliver the corresponding
cotangent-bundle and bracket-identity statements by reference, as recorded in
[[rem-cm-scope-of-canonical-methods]].

Canonical maps are tested and transported by
[[prop-cm-canonical-map-tests-and-hamiltonian-transport]], the two kinds of
generating function are defined in
[[def-cm-generating-function-of-the-first-and-second-kind]], their canonicity is
proved in [[prop-cm-generating-functions-yield-canonical-maps]], the local
converse is [[prop-cm-canonical-map-locally-has-a-generating-function]], the
time-dependent shift $K=H+S_t$ is
[[prop-cm-time-dependent-generating-function]], and
[[prop-cm-cylinder-shift-has-no-global-generating-function]] exhibits the
topological obstruction to globalizing a generating function. The
Hamilton-Jacobi layer consists of
[[def-cm-hamilton-jacobi-equation-and-complete-integral]] and
[[thm-cm-hamilton-jacobi-characteristics-from-a-complete-integral]], whose
characteristics, Jacobi constants and canonical $(\beta,\alpha)$ labels are the
mathematical content behind the physics pages' Hamilton-Jacobi contract;
[[ex-cm-free-particle-hamilton-jacobi-complete-integral]] and
[[ex-cm-linear-shear-generating-function]] on the companion page record worked
checks.

The integrability layer is closed as follows:
[[lem-cm-closed-two-form-radial-primitive]] supplies the closed two-form
primitive on a star-shaped ball that the published Liouville-Arnold proof needs
at its step 5.2, and
[[thm-cm-liouville-arnold-action-angle-repaired]] then gives a complete local
proof of the action-angle theorem for a compact connected regular fibre of a
completely integrable system over a saturated proper submersion neighbourhood,
consuming the published commuting-flow, lattice, torus, Cartan, submersion and
inverse-function suppliers and carrying the countable-choice assumption exactly
where the published theorem does. [[cor-cm-action-angle-radian-scaling]]
converts between period-one and radian conventions, and
[[rem-cm-scope-of-complete-integrability-and-action-angle]] records the
hypotheses, the excluded singular and noncompact cases, and the published proof
gap with its local repair.
