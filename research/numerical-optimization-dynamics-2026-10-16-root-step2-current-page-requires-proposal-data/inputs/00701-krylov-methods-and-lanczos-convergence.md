---
page: krylov-methods-and-lanczos-convergence
title: "Krylov methods and Lanczos convergence"
status: draft
items:
  - lem-scaled-chebyshev-filter-bound-on-a-separated-interval
  - thm-two-pass-mgs-arnoldi-local-relation-and-orthogonality-bound
  - thm-cg-recursive-residual-gap-and-attainable-accuracy
  - thm-lanczos-largest-ritz-value-chebyshev-bound-with-degenerate-cases
  - thm-gmres-true-residual-gap-from-computed-arnoldi-relation
  - prop-sparse-unrestarted-gmres-work-and-storage
examples: []
---

For a real symmetric matrix, the Lanczos estimate keeps the top-eigenspace
projection of the starting vector and the gap separating the wanted eigenvalue
from the unwanted spectrum. A local scaled Chebyshev filter supplies the
polynomial bound. The page treats repeated top eigenvalues, an absent top
component, a collapsed unwanted interval, a scalar matrix, and exact invariant
subspace breakdown as separate branches. Every Lanczos convergence statement
is in exact arithmetic.

The cost proposition counts canonical CSR matvecs, one- or two-pass modified
Gram–Schmidt, incremental Givens updates, and Krylov storage; it excludes
convergence, wall-clock, and memory-bandwidth conclusions. The finite-precision
items use the declared real operationwise model: exact-zero products and
partial sums round exactly to zero, and nonzero exact intermediate results
must be normal-range. They give explicit local Arnoldi and residual-gap terms,
plus an a posteriori basis-orthogonality recurrence. A zero normalization or failed
range hypothesis is a separate breakdown or inconclusive branch. The CG item
relates its recursive residual to the exact residual and the energy-norm
error; it asserts neither exact-grade termination nor monotonicity of the
true residual.

The page retains all planned interfaces to the conjugate-gradient/MINRES,
eigenvalue-iteration, Krylov/GMRES, matrix-norm, spectral-theorem, finite-
precision direct-factorization, sparse-kernel, and stationary-iteration
pages. All required page files are now present; of the eight prerequisite
pages, the finite-precision direct-factorization, sparse-kernel, and
stationary-iteration pages remain drafts, and the other five are published.
The batch dependency record distinguishes the
item bodies actually used by these proofs from page-level context.
