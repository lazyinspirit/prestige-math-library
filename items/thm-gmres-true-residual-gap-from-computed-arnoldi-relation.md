---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-gmres-true-residual-gap-from-computed-arnoldi-relation.json
  precheck: pass
id: thm-gmres-true-residual-gap-from-computed-arnoldi-relation
kind: theorem
title: "A computed GMRES correction has an explicit finite-precision residual gap"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-two-pass-mgs-arnoldi-local-relation-and-orthogonality-bound,
       def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma,
       def-induced-matrix-p-norm,
       thm-floating-point-dot-product-componentwise-and-normwise-error-bounds,
       lem-product-of-one-plus-deltas-gives-theta-n,
       thm-cauchy-schwarz-and-the-euclidean-norm]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "Nicholas J. Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., §§19.8–19.13, printed pp. 415–430"
      url: "https://djvu.online/file/uGJmLc3c54Qe6"
      locator: "Finite-precision Arnoldi and GMRES residual behavior, including loss of orthogonality. The residual-gap identity is derived from the local relation here."
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §§6.4 and 6.8, printed pp. 179–190 and 201–204"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
      locator: "GMRES projected least-squares residual and finite-precision residual monitoring context."
---

## Statement

Let $A\in\mathbb R^{n\times n}$ with $n\ge1$, let $r_0=b-Ax_0$, and let
$m\ge1$. Put $Q_m=[q_1\ \cdots\ q_m]$,
$Q_{m+1}=[q_1\ \cdots\ q_{m+1}]$, and
$\bar H_m\in\mathbb R^{(m+1)\times m}$. Suppose computed Arnoldi vectors
satisfy
$$AQ_m=Q_{m+1}\bar H_m+E_m,$$
where the columns of $E_m$ are the local error vectors of
[[thm-two-pass-mgs-arnoldi-local-relation-and-orthogonality-bound]]. Let
$I$ be the $(m+1)$-by-$(m+1)$ identity and
$\bar G=Q_{m+1}^{\mathsf T}Q_{m+1}-I$ and
$\eta=\|\bar G\|_F$, where $\|B\|_F=(\sum_{a,b}|B_{ab}|^2)^{1/2}$.
Suppose
$$r_0=\beta_1q_1+\delta_0,\qquad \hat x=x_0+Q_my+\delta_x,$$
where $y\in\mathbb R^m$ is the coefficient vector returned by the computed
GMRES least-squares stage and $\delta_x$ is the update error (zero for an
exact vector update). Define $e_1=(1,0,\ldots,0)^{\mathsf T}\in\mathbb R^{m+1}$
and the Arnoldi-coordinate least-squares residual
$$g:=\beta_1e_1-\bar H_my,$$
using the stored computed values, and let $r=b-A\hat x$ be the exact true
residual. Then
$$\|r-Q_{m+1}g\|_2\le \|\delta_0\|_2+\|E_m\|_2\|y\|_2+\|A\|_2\|\delta_x\|_2,$$
and
$$\|r\|_2\le\sqrt{1+\eta}\,\|g\|_2+ \|\delta_0\|_2+\|E_m\|_2\|y\|_2+\|A\|_2\|\delta_x\|_2.$$
Matrix $2$-norms are induced by Euclidean vector norms. For the recomputation
conclusion, assume the real operationwise model of
[[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]] with
unit roundoff $u$, $nu<1$, and successful row-dot and subtraction operations;
every nonzero exact product and partial sum in a row dot is normal-range, and
exact-zero products, sums, or subtractions are permitted. If the true residual
is recomputed by these rounded row dot products and rounded subtraction, write
$\widehat{Ax}$ for the computed product and
$\hat r=\operatorname{fl}(b-\widehat{Ax})$. Then
$$\bigl|\|\hat r\|_2-\|r\|_2\bigr|\le\rho_{rec},\qquad \rho_{rec}:=\left(\sum_{i=1}^n d_i^2\right)^{1/2},$$
where
$$d_i:=\gamma_n\sum_{j=1}^n|A_{ij}|\,|\hat x_j| +u|b_i-\widehat{Ax}_i|.$$
No accuracy claim is made for the least-squares solve: its computed $y$ and
the resulting $g$ appear explicitly.

## Facts & Assumptions

**Given:** The computed Arnoldi relation, initial residual representation,
iterate update representation, computed coefficient vector, and successful
rowwise residual-recomputation operations in the Statement.

[F1] [[thm-two-pass-mgs-arnoldi-local-relation-and-orthogonality-bound]]:
two-pass MGS produces $AQ_m=Q_{m+1}\bar H_m+E_m$ and an explicit bound on
$\|Q_{m+1}^{\mathsf T}Q_{m+1}-I\|_F$ under its success and full-rank
hypotheses.

[F2] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]:
successful real operations round with relative error at most $u$, exact-zero
operations return zero, and $\gamma_n=nu/(1-nu)$ for $nu<1$.

[F3] [[thm-floating-point-dot-product-componentwise-and-normwise-error-bounds]]:
when every exact product, rounded product, and intermediate sum is nonzero
normal-range, a length-$n$ row dot has absolute error at most $\gamma_n$ times
the sum of absolute products.

[F4] [[def-induced-matrix-p-norm]]: $\|Bv\|_2\le\|B\|_2\|v\|_2$ for the
induced Euclidean matrix norm.

[F5] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: for finite real vectors,
$|u^{\mathsf T}v|\le\|u\|_2\|v\|_2$.

[F6] [[lem-product-of-one-plus-deltas-gives-theta-n]]: padding a product of at
most $n$ relative-error factors with factors $1$ gives deviation at most
$\gamma_n$ when $nu<1$.

## Proof

1.1 From the representations in the Statement, $$\begin{aligned} r&=b-A(x_0+Q_my+\delta_x)\\ &=r_0-AQ_my-A\delta_x\\ &=Q_{m+1}(\beta_1e_1-\bar H_my) +\delta_0-E_my-A\delta_x\\ &=Q_{m+1}g+\delta_0-E_my-A\delta_x. \end{aligned}$$ Subtracting $Q_{m+1}g$ and applying the triangle inequality and [F4] proves the first bound. [given, F1, F4, algebra]

2.1 For any $v\in\mathbb R^{m+1}$, $$\|Q_{m+1}v\|_2^2 =v^{\mathsf T}(I+\bar G)v =\|v\|_2^2+v^{\mathsf T}\bar Gv.$$ By [F5], $|v^{\mathsf T}\bar Gv|\le\|v\|_2\|\bar Gv\|_2$. By [F4], $\|\bar Gv\|_2\le\|\bar G\|_2\|v\|_2$, and $\|\bar G\|_2\le\|\bar G\|_F=\eta$: for each row, [F5] bounds the square of its dot product with $v$ by the squared row norm times $\|v\|_2^2$; summing rows gives this inequality. Thus $\|Q_{m+1}v\|_2\le\sqrt{1+\eta}\|v\|_2$. Apply this to $v=g$ in step 1.1 and use the triangle inequality to obtain the true-residual bound. [given, F1, F4, F5, step 1.1, algebra]

3.1 For row $i$, each exact product and partial sum is either zero or normal-range. By [F2], a zero operation returns zero and contributes relative-error factor $1$, while every nonzero operation contributes a factor $1+\varepsilon$ with $|\varepsilon|\le u$. Unrolling the row dot gives at most $n$ factors in the coefficient of each product, so [F6] yields $|\widehat{Ax}_i-(A\hat x)_i| \le\gamma_n\sum_j|A_{ij}||\hat x_j|$, the same error bound as the narrower supplier [F3]. The rounded subtraction gives $|\hat r_i-(b_i-\widehat{Ax}_i)| \le u|b_i-\widehat{Ax}_i|$ by [F2], with an exact-zero subtraction contributing zero error. Adding these errors shows $|\hat r_i-r_i|\le d_i$, hence $\|\hat r-r\|_2\le\rho_{rec}$. The reverse triangle inequality proves the stated difference of residual norms. [given, F2, F3, F6, algebra] ∎
