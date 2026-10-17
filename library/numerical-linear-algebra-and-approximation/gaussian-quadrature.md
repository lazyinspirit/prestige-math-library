---
page: gaussian-quadrature
title: "Gaussian quadrature"
status: published
requires:
  - inner-product-spaces-and-orthogonality
  - polynomial-interpolation-and-remainder
  - verified-linear-systems-and-spectral-enclosures
  - restarted-and-block-eigensolvers
  - the-lebesgue-integral-and-the-convergence-theorems
items:
  - def-gauss-moment-data
  - def-coordinatewise-product-moment-functional
  - def-gauss-polynomial-moment-inner-product
  - thm-gauss-polynomial-moment-pairing-is-an-inner-product
  - thm-monic-gauss-orthogonal-polynomials-exist-uniquely
  - lem-gauss-monic-three-term-recurrence
  - thm-gauss-orthogonal-polynomial-has-simple-interior-zeros
  - thm-hermite-interpolant-double-node-remainder
  - def-gauss-quadrature-rule
  - thm-jacobi-matrix-spectrum-equals-gauss-nodes
  - thm-consecutive-gauss-orthogonal-polynomials-strictly-interlace
  - lem-gauss-quadrature-rule-data-well-defined
  - def-tensor-product-gauss-rule
  - thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights
  - thm-gauss-hermite-mean-value-remainder
  - thm-gauss-weights-equal-mu0-times-first-eigenvector-coordinate-squared
  - thm-tensor-product-gauss-exactness-and-exponential-node-count
  - lem-tensor-product-moment-functional-equals-product-measure-integral
  - lem-gauss-weight-residual-gap-bound
  - alg-golub-welsch-certified-node-and-weight-enclosures
  - thm-golub-welsch-certified-enclosures-are-sound
examples: []
---

For a finite positive Borel measure on a compact interval whose support has at
least $m+1$ points, the moment pairing is positive definite through degree
$m-1$ under the exactness-order moment assumptions, and through degree $m$ on
the stronger degree-$2m$ branch. The degree-$m$ monic polynomial orthogonal to
lower degrees has $m$ simple roots in the interval's interior. Integrating the corresponding
Lagrange cardinal polynomials defines the Gaussian weights; polynomial
division and orthogonality give exactness through degree $2m-1$, and applying
exactness to squared cardinal polynomials gives strict positivity.

The moment interface separates two claims. Moments through degree $2m-1$
suffice for the node construction and exactness theorem. The Hermite
mean-value remainder also needs the degree-$2m$ moment that makes
$\int p_m^2\,d\mu$ finite and positive. The proof constructs the degree-$m$
polynomial from the positive degree-$(m-1)$ moment matrix, so it does not
assume a degree-$m$ norm on the exactness-only branch.

The three-term recurrence gives a real symmetric tridiagonal Jacobi matrix.
Consecutive orthogonal polynomials, equivalently consecutive leading principal
Jacobi truncations, have strictly interlacing roots. Its eigenvalues are exactly the Gaussian nodes, and a normalized eigenvector's
first-coordinate square times the total mass is the associated weight. The
Golub–Welsch procedure uses a finite eigensolver only to propose Ritz data;
outward interval residual, Gram, and spectral checks must certify every
returned enclosure. A failed finite check returns inconclusive and makes no
error claim. Tensor products preserve coordinatewise exactness, with
$\prod_jm_j$ nodes for coordinate orders $m_j$. A separate Tonelli–Fubini
argument identifies the algebraic product-moment functional with integration
under the finite product measure, so polynomial-chaos coefficient exactness
uses a proved measure interface.
