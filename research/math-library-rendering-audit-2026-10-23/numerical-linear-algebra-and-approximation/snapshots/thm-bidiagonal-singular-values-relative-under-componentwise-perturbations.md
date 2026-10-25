---
id: thm-bidiagonal-singular-values-relative-under-componentwise-perturbations
kind: theorem
title: "Componentwise relative perturbations of bidiagonal matrices control every singular value relatively"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-singular-value-product-bound, cor-rank-equals-number-of-nonzero-singular-values]
dependency_level: 1
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
proof_strategy: direct
sources:
  references:
    - title: "James Demmel and W. Kahan, Accurate Singular Values of Bidiagonal Matrices, Corollary 2"
      url: "https://www.netlib.org/lapack/lawnspdf/lawn03.pdf"
    - title: "Lecture Notes on Matrix Computations, §3.2.2"
      url: "https://zhims.github.io/doc/note/computing/matrixComputations.pdf"
---

## Statement

Let $n\ge1$, and let $B,\widetilde B\in\mathbb F^{n\times n}$ be upper bidiagonal, $\mathbb F=\mathbb R$ or $\mathbb C$, with $0\le\epsilon<1$. Suppose each corresponding nonzero diagonal or superdiagonal entry is multiplied by a scalar whose modulus lies in $[1-\epsilon,1+\epsilon]$, and every zero entry remains zero. Put $q=(1+\epsilon)/(1-\epsilon)$. Then $B$ and $\widetilde B$ have the same number of zero singular values, and for each positive singular value in descending order,
$$q^{-2n}\sigma_i(B)\le\sigma_i(\widetilde B)\le q^{2n}\sigma_i(B).$$

This is a relative perturbation theorem. A computed bidiagonal SVD inherits it only when a separate backward-error analysis verifies this componentwise relative assumption; an absolute normwise perturbation estimate by itself is not that verification.

## Facts & Assumptions

**Given:** Two upper bidiagonal matrices satisfying the componentwise relative hypothesis and $q=(1+\epsilon)/(1-\epsilon)$.

[F1] [[lem-singular-value-product-bound]]: both $\sigma_i(XY)\le\sigma_i(X)\|Y\|_2$ and $\sigma_i(ZX)\le\|Z\|_2\sigma_i(X)$ hold for compatible matrices in their stated index ranges.

[F2] For diagonal $D=\operatorname{diag}(d_i)$, $\|Dx\|_2^2=\sum_i|d_i|^2|x_i|^2\le(\max_i|d_i|)^2\|x\|_2^2$, with equality on a coordinate vector attaining the maximum; hence $\|D\|_2=\max_i|d_i|$.

[F3] [[cor-rank-equals-number-of-nonzero-singular-values]]: a square matrix has as many zero singular values as its dimension minus its rank.

## Proof

1.1 Write the diagonal ratios as $s_i=\widetilde d_i/d_i$ when $d_i\ne0$, and put $s_i=1$ when $d_i=0$. Write the superdiagonal ratios as $t_i=\widetilde e_i/e_i$ when $e_i\ne0$, and put $t_i=1$ when $e_i=0$. Set $r_1=1$, $\ell_i=s_i/r_i$, and, for $i<n$, set $r_{i+1}=r_i t_i/s_i$. Then $L=\operatorname{diag}(\ell_i)$ and $R=\operatorname{diag}(r_i)$ are invertible and entrywise multiplication gives $\widetilde B=LBR$, including at zero entries because both matrices preserve each zero. [given, construct]

2.1 Since $|s_i|,|t_i|\in[1-\epsilon,1+\epsilon]$, each ratio $|t_i/s_i|$ lies in $[q^{-1},q]$. Induction gives $q^{-(i-1)}\le|r_i|\le q^{i-1}$. From $\ell_i=s_i/r_i$ and $q(1-\epsilon)=1+\epsilon$, both $|\ell_i|$ and $|\ell_i|^{-1}$ are at most $q^n$; the same bound holds for $|r_i|$ and $|r_i|^{-1}$. By [F2], $\|L\|_2,\|L^{-1}\|_2,\|R\|_2,\|R^{-1}\|_2\le q^n$. [step 1.1, F2, induction, algebra]

3.1 First apply the right-multiplication inequality in [F1] to $(LB)R$, then the left-multiplication inequality to $LB$: $\sigma_i(\widetilde B)\le\|R\|_2\sigma_i(LB)\le\|R\|_2\|L\|_2\sigma_i(B)\le q^{2n}\sigma_i(B)$. Applying the same two inequalities to $B=L^{-1}\widetilde B R^{-1}$ gives the reverse bound. Since $L,R$ are invertible, multiplication by them preserves rank; [F3] then shows the zero singular values agree. [step 1.1, step 2.1, F1, F3, algebra]

4.1 Step 3.1 proves both inequalities and the zero-value assertion. [step 3.1] ∎
