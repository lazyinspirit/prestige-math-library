---
id: thm-rounded-cholesky-componentwise-and-normwise-backward-error
kind: theorem
title: "A successful rounded Cholesky factorization has componentwise and normwise backward error bounds"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-rounded-cholesky-with-failure-status
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - lem-product-of-one-plus-deltas-gives-theta-n
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
sources:
  references:
    - title: "Fundamentals of Numerical Computation, floating-point arithmetic"
      url: https://fncbook.com/floating-point/
    - title: "Fundamentals of Numerical Computation, Cholesky factorization"
      url: https://fncbook.com/structure/
    - title: "Stuart and Voss, Matrix Analysis and Algorithms, Warwick lecture notes"
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
---

## Statement

Let $n\ge1$ and let $A=A^*$ be positive definite in $\mathbb C^{n\times n}$. Suppose the rounded Cholesky algorithm succeeds with $\widehat L$. Put $m=20n+20$ and $g=\gamma_m=\frac{m u}{1-m u}$; assume $m u<1/5$. For $E=\widehat L\widehat L^*-A$, which is Hermitian, and with $|M|$ denoting entrywise absolute value for matrices,
$$|E|\le100g\,|\widehat L|\,|\widehat L|^*\quad\hbox{entrywise},\qquad \|E\|_F\le100g\|\widehat L\|_F^2,\qquad \|E\|_2\le100g\|\widehat L\|_F^2.$$
Thus $c_n(u)u=\frac{100m u}{1-m u}$. If also $100\sqrt n\,g\le1/2$, then
$$\|E\|_F\le200\sqrt n\,g\|A\|_F,\qquad \|E\|_2\le200\sqrt n\,g\|A\|_F.$$
These bounds apply on success only; positive definiteness does not guarantee rounded success.

## Facts & Assumptions
**Given:** successful rounded recurrences, the normal-range model, and the exact Cholesky convention.

[F1] [[alg-rounded-cholesky-with-failure-status]]: success supplies positive rounded pivots and rounded updates using six-real-operation complex products.

[F2] [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]: Hermitian positive-definite input has an exact lower triangular factor with positive diagonal.

[F3] [[lem-product-of-one-plus-deltas-gives-theta-n]]: a chain of k successful operations has the gamma_k relative bound when ku<1.

[F4] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: $\|M\|_2\le\|M\|_F$.

[F5] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: finite-dimensional Euclidean vectors satisfy the Cauchy-Schwarz inequality.

## Proof

1.1 For one complex product $zw$, write its real exact products as $ac,bd,ad,bc$. Each rounded product has error at most $u$ times its operand product; each final rounded real sum or difference contributes at most $u$ times the sum of the two operand magnitudes. Hence the real-component error is at most $(2u+u^2)(|ac|+|bd|)$ and the imaginary-component error at most $(2u+u^2)(|ad|+|bc|)$. Since $u<1/200$, their Euclidean combination is at most $6u|z||w|$. A sequential sum of at most $n$ complex products contributes at most $\gamma_n(1+6u)$ times the absolute product sum; adding product errors gives $6u+\gamma_n(1+6u)=\frac{(n+6)u}{1-nu}\le\gamma_{n+6}\le g$. Each diagonal term $|\widehat l_{jk}|^2$ uses two rounded squares and one rounded addition; sequentially summing at most $n$ terms uses at most $4n$ rounded real operations, so the same expansion bounds the diagonal sum error by $\gamma_{4n}S_j\le gS_j$. [given, F1, F3, algebra]

2.1 For $i>j$, let $S_{ij}=\sum_{k<j}\widehat l_{ik}\overline{\widehat l_{jk}}$, $T_{ij}=\sum_{k\le j}|\widehat l_{ik}||\widehat l_{jk}|$, and $\widehat S_{ij}$ be the computed dot product. Step 1.1 gives $|\widehat S_{ij}-S_{ij}|\le gT_{ij}$ and $|\widehat S_{ij}|\le(1+g)T_{ij}$. The subtraction error is at most $u(|a_{ij}|+|\widehat S_{ij}|)$, and the two component divisions imply $|\widehat l_{ij}\widehat l_{jj}-\widehat r_{ij}|\le u|\widehat r_{ij}|$; also $|\widehat r_{ij}|\le(1+u)(|a_{ij}|+|\widehat S_{ij}|)$. Therefore $|E_{ij}|\le gT_{ij}+u(2+u)(|a_{ij}|+(1+g)T_{ij})$. Since $|a_{ij}|\le T_{ij}+|E_{ij}|$, moving $u(2+u)|E_{ij}|$ to the left gives $|E_{ij}|\le\frac{g+u(2+u)(2+g)}{1-u(2+u)}T_{ij}$. Here $u\le g/m$, $g<1/4$, $m\ge40$, and $u<1/200$, so the numerator coefficient is less than $1.12g$ and the denominator exceeds $0.989$. The quotient is less than $1.14g<100g$. [step 1.1, F1, algebra]

2.2 On the diagonal put $S_j=\sum_{k<j}|\widehat l_{jk}|^2$. Step 1.1 and the pivot subtraction give $p_j=a_{jj}-S_j+\epsilon_j$ with $|\epsilon_j|\le u|a_{jj}|+(g+u(1+g))S_j\le u|a_{jj}|+1.26gS_j$. The rounded square root has $\widehat l_{jj}=\sqrt{p_j}(1+\delta_j)$, $|\delta_j|\le u$, so $|\widehat l_{jj}^2-p_j|\le(2u+u^2)p_j\le3up_j$. From $|a_{jj}|\le S_j+p_j+|\epsilon_j|$ we get $(1-u)|a_{jj}|\le(1+1.26g)S_j+p_j$. Since $u<1/200$ and $g<1/4$, this implies $|a_{jj}|\le1.33S_j+1.01p_j\le\frac{21}{10}(S_j+p_j)$. Also $p_j=\widehat l_{jj}^2/(1+\delta_j)^2\le1.011\widehat l_{jj}^2$, so $\frac{21}{10}(S_j+p_j)\le\frac{11}{5}(S_j+\widehat l_{jj}^2)$. Thus $|E_{jj}|\le u|a_{jj}|+1.26gS_j+3up_j\le1.32gS_j+0.14g\widehat l_{jj}^2\le100g(S_j+\widehat l_{jj}^2)$, using $u\le g/40$. Hermitian symmetry gives the corresponding conjugate entries, proving the componentwise estimate. [step 1.1, F1, F3, algebra]

3.1 By [F5], Cauchy-Schwarz applied to each row-column inner product gives $\||\widehat L||\widehat L|^*\|_F^2\le\sum_{i,j}(\sum_k|\widehat l_{ik}|^2)(\sum_k|\widehat l_{jk}|^2)=\|\widehat L\|_F^4$. The entrywise bound therefore yields $\|E\|_F\le100g\|\widehat L\|_F^2$, and [F4] gives the spectral bound. For the relative consequence, take traces in $\widehat L\widehat L^*=A+E$: $\|\widehat L\|_F^2\le\sqrt n\|A\|_F+\sqrt n\|E\|_F\le\sqrt n\|A\|_F+100\sqrt n\,g\|\widehat L\|_F^2$. The additional condition gives $\|\widehat L\|_F^2\le2\sqrt n\|A\|_F$, yielding both stated relative norm bounds. [step 2.1, step 2.2, F2, F4, F5, algebra] ∎