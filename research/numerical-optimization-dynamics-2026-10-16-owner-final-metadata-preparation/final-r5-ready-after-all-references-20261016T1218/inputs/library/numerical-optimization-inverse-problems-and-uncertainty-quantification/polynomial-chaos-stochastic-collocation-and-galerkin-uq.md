---
page: polynomial-chaos-stochastic-collocation-and-galerkin-uq
title: Polynomial chaos stochastic collocation and Galerkin UQ
status: draft
requires:
  - finite-element-meshes-and-interpolation
  - ceas-lemma-and-aubin-nitsche-error-estimates
  - gaussian-quadrature
  - spectral-collocation-and-galerkin-methods
  - sparse-grid-cubature-and-mixed-regularity
  - robust-covariance-and-high-dimensional-stability
  - gaussian-process-support-and-concentration
  - parabolic-finite-element-methods
items:
  - def-finite-product-chaos-input
  - rem-chaos-completeness-and-spectral-rate-caveats
  - def-chaos-total-degree-and-hyperbolic-cross-index-sets
  - def-finite-input-bochner-l2-space
  - lem-positive-moment-gram-produces-univariate-chaos-polynomials
  - def-chaos-orthonormal-tensor-basis
  - def-uniformly-elliptic-affine-random-diffusion
  - lem-chaos-index-sets-are-finite
  - thm-finite-input-bochner-l2-is-hilbert
  - alg-christoffel-weighted-least-squares-collocation
  - def-finite-chaos-orthogonal-projection
  - lem-affine-form-integrable-on-bochner-l2
  - thm-independent-polynomial-chaos-tensors-are-orthonormal
  - def-chaos-quadrature-coefficient-estimator
  - lem-christoffel-sampling-law-and-gram-mean
  - thm-affine-random-diffusion-solution-is-bochner
  - thm-finite-chaos-projection-parseval-and-moments
  - thm-product-chaos-and-spatial-density-in-bochner-l2
  - thm-chaos-quadrature-coefficient-error-split
  - thm-christoffel-gram-concentration-bound
  - thm-stochastic-galerkin-coercivity-and-cea
  - cor-smolyak-chaos-coefficient-error-bound
  - cor-stochastic-galerkin-fe-interpolation-rate
  - thm-weighted-least-squares-stability-and-error
  - cor-tensor-gauss-exact-chaos-coefficients
examples: []
---

## Finite product-law basis

The input is a finite family of independent real random variables with a specified product law and an explicit admissible moment cutoff. Gram–Schmidt gives the law-matched finite univariate polynomials; their tensor products are orthonormal by product integration. Total-degree and hyperbolic-cross truncations are intersected with the declared cutoff box. The construction proves finite orthogonality only. Polynomial completeness requires a separate law-specific density hypothesis, and moments alone do not supply it.

## Projection and coefficient quadrature

For any finite chaos space, the projection leaves an exact orthogonal residual. Its squared norm, mean and variance retain that residual, so no completeness premise is hidden in Parseval-style identities. A cubature coefficient estimator, using a representative evaluable at its nodes, splits into projection error and coefficient quadrature error. Tensor Gaussian exactness applies when each marginal rule integrates the coordinate degrees of every product integrand; the coefficient result here assumes a polynomial input and the stated node count. The Smolyak bound applies only to the uniform cube when each coefficient integrand satisfies the supplied mixed fourth-derivative and endpoint hypotheses.

## Christoffel-weighted least squares

The algorithm samples from the normalized Christoffel density, weights by the reciprocal leverage, and returns coefficients only when the empirical Gram spectrum is in $[1/2,3/2]$. The locally proved matrix concentration argument gives this event with probability at least $1-\delta$ when $M\ge12|\Lambda|\log(2|\Lambda|/\delta)$. On the event, the fit error separates into the finite projection residual and the weighted sampled residual. This is a least-squares guarantee; no universal aliasing or collocation-equals-Galerkin statement is made.

## Affine random diffusion and Galerkin approximation

For bounded product input, an affine coefficient uniformly bounded above and below for every supported parameter, and bounded affine forcing $F(y)=f_0+\sum_j y_jf_j$ with $f_j\in V^*$, the pointwise weak solution is Lipschitz in the parameter and defines a Bochner $L^2(H_0^1)$ solution. Countable Choice is used through the stated Sobolev, Bochner and Lax–Milgram interfaces. Integrating the form preserves its exact continuity and coercivity constants, so a finite tensor Galerkin space whose chaos indices lie in the declared admissible cutoff box satisfies Céa's estimate with factor $a^*/a_*$. The finite-element rate is stated only on a shape-regular matching affine mesh and when the solution has an exact finite chaos expansion with spatially regular coefficients and a global conforming interpolant assembled from a fixed reference element with bounded degrees of freedom on the required Sobolev class. No arbitrary-input spectral rate is claimed.

The proof items preserve the law-specific and regularity hypotheses in [[rem-chaos-completeness-and-spectral-rate-caveats]].
