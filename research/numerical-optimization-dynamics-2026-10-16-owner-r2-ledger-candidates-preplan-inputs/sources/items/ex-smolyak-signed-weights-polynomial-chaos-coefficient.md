---
id: ex-smolyak-signed-weights-polynomial-chaos-coefficient
kind: example
title: A signed Simpson-Smolyak weight makes a nonnegative chaos coefficient estimate negative
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: sparse-grid-cubature-and-mixed-regularity-examples
dependency_level: 8
deps:
  - def-smolyak-cubature
  - def-smolyak-univariate-level-hierarchy
  - alg-composite-simpson-rule
  - def-gauss-quadrature-rule
  - thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights
  - def-tensor-product-gauss-rule
  - def-finite-sum
  - lem-finite-sum-laws
  - thm-algebra-of-continuous-functions
  - thm-continuous-implies-integrable
  - thm-monotonicity-of-the-integral
  - thm-additivity-over-subintervals
  - cor-riemann-integral-of-a-product-function
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "T. Gerstner and M. Griebel, Sparse Grids, Encyclopedia of Quantitative Finance, §Numerical integration"
      url: "https://ins.uni-bonn.de/media/public/publication-media/sparsegrids_j8NLaMi.pdf?name=sparsegrids.pdf"
    - title: "John A. Gubner, Gaussian Quadrature and the Eigenvalue Problem, §§2–5"
      url: "https://gubner.ece.wisc.edu/gaussquad.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.6"
      url: "https://fncbook.com/integration/"
---

## Example

For $k=1,\ldots,8$, put $\phi(x)=\prod_{k=1}^8(1-8x/k)^2$ on $[0,1]$ and
$u(x,y)=\phi(x)\phi(y)$. This is a nonnegative polynomial. Under the uniform
law on $[0,1]^2$, the constant polynomial-chaos coefficient is
$c_{00}=\int_{[0,1]^2}u>0$. Yet the level-two composite-Simpson Smolyak rule
on $\Lambda_2=\{(i,j):i+j\le2\}$ returns $-1/144$. This shows why signed
Smolyak weights matter when integrating chaos coefficients. Any tensor
product of Gaussian rules with positive coordinate weights returns a
nonnegative value on $u$; no Gaussian exactness for this high-degree
polynomial is asserted.

## Facts & Assumptions

**Given:** The uniform probability law on $[0,1]^2$, $\phi(x)=\prod_{k=1}^8(1-8x/k)^2$, $u(x,y)=\phi(x)\phi(y)$, the constant chaos basis $\Psi_{00}=1$, and the Simpson hierarchy of [[def-smolyak-univariate-level-hierarchy]].

[F1] [[def-smolyak-univariate-level-hierarchy]]: $Q_\ell=Q_S(\cdot;0,1,2^{\ell+1})$, $\Delta_0=Q_0$, and $\Delta_\ell=Q_\ell-Q_{\ell-1}$.

[F2] [[alg-composite-simpson-rule]]: the endpoint weight at level $\ell$ is $1/(3\cdot2^{\ell+1})$, and the other weights are nonnegative.

[F3] [[def-smolyak-cubature]]: for $\Lambda_2=\{(i,j):i+j\le2\}$, the Smolyak functional is the sum of its six tensor details.

[F4] [[thm-algebra-of-continuous-functions]]: polynomials, their finite products, and sums are continuous.

[F5] [[thm-continuous-implies-integrable]]: a continuous function on a closed rectangle is Riemann integrable.

[F6] [[thm-monotonicity-of-the-integral]]: pointwise order between integrable functions implies the same order between their integrals.

[F7] [[thm-additivity-over-subintervals]]: the integral over $[0,1]$ is the sum of integrals over $[0,\delta]$ and $[\delta,1]$ when $0<\delta<1$.

[F8] [[cor-riemann-integral-of-a-product-function]]: the integral of a product function on a product rectangle factors into the coordinate integrals.

[F9] [[def-gauss-quadrature-rule]]: a Gaussian rule returns a finite weighted sum of samples.

[F10] [[thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights]]: for valid positive-measure moment data, every Gaussian weight is strictly positive.

[F11] [[def-tensor-product-gauss-rule]]: tensor weights are products of coordinate weights.

[F12] [[def-finite-sum]] and [[lem-finite-sum-laws]]: finite sums distribute; a finite sum of nonnegative terms is nonnegative.

## Verification

1.1 The polynomial $\phi$ is continuous by [F4] and satisfies $\phi(0)=1$. Continuity at zero gives $\eta>0$ such that $\phi(x)>1/2$ for $0\le x<\eta$; choose $\delta=\min(\eta/2,1/2)$, so $0<\delta<\eta$ and $\delta<1$. By [F5]–[F6], $\int_0^\delta\phi\ge\delta/2$ and $\int_\delta^1\phi\ge0$; [F7] then gives $\int_0^1\phi\ge\delta/2>0$. The product is integrable by continuity, and [F8] gives $c_{00}=(\int_0^1\phi)^2>0$. [given, F4, F5, F6, F7, F8, choose]

2.1 For each $m=0,\ldots,8$, $\phi(m/8)=0$ when $m>0$, because the factor indexed by $k=m$ vanishes; $\phi(0)=1$. The nested Simpson grids through level two are $X_0=\{0,1/2,1\}$, $X_1=\{m/4:0\le m\le4\}$, and $X_2=\{m/8:0\le m\le8\}$. Thus every sampled value of $u$ on any tensor rule in $\Lambda_2$ vanishes except at $(0,0)$, where it is one. [given, F1, F3, step 1.1, algebra]

3.1 Let $w_\ell$ be the level-$\ell$ endpoint weight. By [F2], $w_0=1/6$, $w_1=1/12$, and $w_2=1/24$. Expanding the six details from [F3] and using finite distributivity [F12] gives $Q_{\Lambda_2}=Q_2\otimes Q_0+Q_0\otimes Q_2-Q_1\otimes Q_0-Q_0\otimes Q_1+Q_1\otimes Q_1$. By step 2.1, its value on $u$ is the combined coefficient at $(0,0)$: $2w_2w_0-2w_1w_0+w_1^2=2/(24\cdot6)-2/(12\cdot6)+1/12^2=-1/144<0$. This differs in sign from $c_{00}>0$ in step 1.1. [given, F1, F2, F3, F12, step 2.1, algebra]

4.1 For tensor products of Gaussian rules with valid positive-measure moment data, [F10] makes every coordinate weight positive and [F11] makes each tensor weight a product of positive numbers. Since all samples of $u$ are nonnegative, [F9] and [F12] make the resulting finite sum nonnegative. Together with the negative Simpson estimate in step 3.1, this is a sign comparison; it does not claim that such a Gaussian rule exactly integrates $u$. [given, F9, F10, F11, F12, step 3.1, algebra] ∎
