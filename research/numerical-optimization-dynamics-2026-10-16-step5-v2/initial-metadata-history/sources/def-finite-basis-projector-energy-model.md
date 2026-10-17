---
id: def-finite-basis-projector-energy-model
kind: definition
title: "Finite-basis projector energy model"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-rank-r-orthogonal-projector-domain
  - def-cholesky-factorisation-with-positive-diagonal
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - prop-positive-definite-overlap-whitening-preserves-generalized-ritz-pencil
  - def-matrix-product-and-identity-matrix
  - def-trace-of-a-square-matrix
  - def-real-frechet-derivative-on-real-and-complex-matrix-spaces
justified_by:
  - prop-finite-projector-energy-reality-and-gradient
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Eric Cancès and Claude Le Bris, On the convergence of SCF algorithms for the Hartree-Fock equations, ESAIM: Mathematical Modelling and Numerical Analysis 34 (2000), §2.1"
      url: https://numdam.org/item/M2AN_2000__34_4_749_0.pdf
    - title: "Alan Edelman, Tomás A. Arias, and Steven T. Smith, The Geometry of Algorithms with Orthogonality Constraints, SIAM Journal on Matrix Analysis and Applications 20 (1998), §§2.3–2.5"
      url: https://math.mit.edu/~edelman/publications/geometry_of_algorithms.pdf
verification:
  precheck: n/a
---

## Definition

Let $S=S^*\succ0$ be an $n\times n$ finite-basis overlap matrix and supply its
Cholesky factor $L$ with $S=LL^*$, $L$ invertible
([[def-cholesky-factorisation-with-positive-diagonal]],
[[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]).
If $h_0=h_0^*$ is the coefficient-basis one-body matrix, set
$h=L^{-1}h_0L^{-*}$, where $L^{-*}=(L^*)^{-1}$; this is the Cholesky
whitening whose generalized Ritz quotient is preserved by
[[prop-positive-definite-overlap-whitening-preserves-generalized-ritz-pencil]].
For coefficient vectors use $y=L^*c$; the interaction map and chosen
exchange-correlation functional below are supplied in these orthonormal
coordinates. Fix $1\le r<n$ and the
projector domain $\mathcal P_r$ of [[def-rank-r-orthogonal-projector-domain]].

With the whitened Hermitian matrix $h=L^{-1}h_0L^{-*}$ fixed above, supply a real-linear self-adjoint map
$G:\mathbb H_n\to\mathbb H_n$ for the Frobenius inner product, and a real-valued
$C^2$ functional $E_{xc}$ on an open neighborhood of $\mathcal P_r$. Define
$$E(P):=\operatorname{tr}(hP)+\tfrac12\operatorname{tr}(P G(P))+E_{xc}(P),\qquad F(P):=h+G(P)+\nabla E_{xc}(P).$$
Here $F(P)$ is the Hermitian Frobenius-gradient formula justified by
[[prop-finite-projector-energy-reality-and-gradient]].

The finite-basis Hartree–Fock model is the special case $E_{xc}=0$ with a
supplied symmetry-compatible Coulomb/exchange tensor defining $G$. A
Kohn–Sham-like model supplies its density map and chosen differentiable
exchange-correlation functional. These are finite-dimensional mathematical
models; this definition makes no assertion that the selected functional is an
exact continuum physical energy.

