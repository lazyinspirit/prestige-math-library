---
page: finite-element-eigenvalue-approximation
title: "Finite-element eigenvalue approximation"
status: published
items:
  - def-eigenspace-best-approximation-gap
  - thm-compact-coercive-form-spectrum-and-minmax
  - lem-finite-dimensional-galerkin-minmax
  - lem-compact-self-adjoint-residual-controls-invariant-subspace-gap
  - thm-finite-hermitian-ritz-residual-certifies-spectrum-and-eigendirection
  - prop-positive-definite-overlap-whitening-preserves-generalized-ritz-pencil
  - lem-conforming-energy-projection-is-best-approximation
  - lem-conforming-galerkin-ritz-matrix-error-is-quadratic-in-gap
  - thm-conforming-galerkin-eigenvalue-upper-bound-quadratic-gap-error
  - thm-conforming-galerkin-eigenspace-gap-under-isolated-cluster
examples: []
---

For a bounded Hermitian coercive form with compact, injective, dense mass
embedding, the page establishes the compact solution-operator spectrum and
the attained continuous min–max principle under Countable Choice. It proves
finite-dimensional Ritz min–max, the fixed-index conforming upper bound, and
an explicit quadratic eigenvalue error in the directed energy best-approximation
gap. The gap must be small for the quadratic estimate; the one-sided min–max
bound needs only conformity and sufficient discrete dimension.

The projection and matrix estimates supply the no-collapse and Rayleigh
quotient arguments. Isolated repeated eigenvalues are treated as invariant
subspaces with a gap condition; the result does not select individual
eigenvectors. Separate finite Hermitian residual estimates give
residual-to-spectrum and gap-conditioned eigendirection bounds, with the
target location stated explicitly. Positive-definite overlap whitening is an
exact change of coordinates for a generalized Ritz pencil.

The coercive-shift branch measures best approximation in the shifted energy
norm and then subtracts the common spectral shift. The symmetric form results
do not claim a nonsymmetric or nonconforming Babuška–Osborn extension; that
would require separate primal, adjoint, stability and operator perturbation
proofs. Elliptic Dirichlet examples retain the stronger Axiom of Choice and
Countable Choice hypotheses of their published spectral suppliers.
