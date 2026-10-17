---
id: ex-nearly-rank-deficient-design-matrix
kind: example
title: "A nearly rank-deficient two-column design changes numerical rank with tolerance"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-numerical-rank-relative-to-a-norm-scale-and-tolerance, prop-spectral-numerical-rank-counts-singular-values-over-real-or-complex, thm-singular-value-decomposition, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison, def-operator-norm-on-a-finite-dimensional-inner-product-space]
dependency_level: 1
verification:
  precheck: pass
proof_strategy: direct
---

## Example

For $\epsilon=10^{-8}$, let the design matrix be
$$A_\epsilon=\begin{pmatrix}1&1\\0&\epsilon\end{pmatrix}.$$
Its exact rank is two, but its spectral numerical rank is one at tolerance $10^{-7}$ and two at tolerance $10^{-9}$.

## Facts & Assumptions

**Given:** The displayed real matrix $A_\epsilon$ and the two absolute spectral-norm tolerances.

[F1] [[prop-spectral-numerical-rank-counts-singular-values-over-real-or-complex]]: spectral numerical rank counts singular values strictly greater than the declared tolerance.

[F2] [[thm-singular-value-decomposition]]: $A$ has an SVD $A=U\Sigma V^*$ with diagonal entries of $\Sigma$ equal to its nonnegative singular values.

[F3] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: $\|A\|_2=\sigma_1(A)$ and $\|A\|_F^2=\sigma_1(A)^2+\sigma_2(A)^2$.

[F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: $\|A\|_2=\sup_{\|x\|_2=1}\|Ax\|_2$.

## Verification

1.1 The determinant of $A_\epsilon$ is $\epsilon\ne0$, so its exact rank is two. By [F2], write $A_\epsilon=U\Sigma V^*$; taking determinants and using $|\det U|=|\det V|=1$ (from $U^*U=V^*V=I$) gives $\sigma_1\sigma_2=\epsilon$. Its first column has norm one, hence [F4] gives $\sigma_1=\|A_\epsilon\|_2\ge1$; by [F3], $\sigma_1\le\|A_\epsilon\|_F=\sqrt{2+\epsilon^2}<2$. Therefore $\epsilon/2<\sigma_2\le\epsilon$. [F2, F3, F4, algebra]

2.1 At $\tau=10^{-7}$, $\sigma_2\le10^{-8}<\tau<1\le\sigma_1$, so exactly one singular value exceeds $\tau$. At $\tau=10^{-9}$, $\sigma_2>5\cdot10^{-9}>\tau$ and $\sigma_1\ge1>\tau$, so both exceed $\tau$. [step 1.1, algebra]

3.1 Applying [F1] to the two counts in step 2.1 gives numerical ranks one and two, respectively, although the exact rank remains two. [step 2.1, F1] ∎
