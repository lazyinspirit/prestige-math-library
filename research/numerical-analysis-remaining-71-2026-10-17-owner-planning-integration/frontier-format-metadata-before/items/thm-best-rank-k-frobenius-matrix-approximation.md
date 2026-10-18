---
id: thm-best-rank-k-frobenius-matrix-approximation
kind: theorem
title: Best rank-k matrix approximation in Frobenius norm
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-tensor-arrays-and-frobenius-inner-product, thm-singular-value-decomposition]
aliases: []
verification:
  precheck: pass
sources:
  references:
    - title: "Mark D. Dupuy, Tensor Train Decomposition, full lecture notes, Chapter 1, §1.1.2 (2026)"
      url: "https://msdupuy.github.io/teaching/TT_lectures_2026.pdf"
---

## Statement

Let $A\in\mathbb F^{m\times n}$, where $m,n\ge1$, have a singular value decomposition
$$ A=\sum_{j=1}^{q}\sigma_j u_jv_j^*,\qquad \sigma_1\ge\cdots\ge\sigma_q>0, $$
where $q=\operatorname{rank}(A)$. For an integer $k\ge0$, put
$$ A_k=\sum_{j=1}^{\min(k,q)}\sigma_j u_jv_j^*, \qquad \delta_k^2=\sum_{j=k+1}^{q}\sigma_j^2 $$
with an empty sum equal to zero. Then $\operatorname{rank}(A_k)\le k$, $\|A-A_k\|_F=\delta_k$, and every matrix $B$ with $\operatorname{rank}(B)\le k$ satisfies $\|A-B\|_F\ge\delta_k$.

## Facts & Assumptions

**Given:** A finite-dimensional real or complex matrix $A$ and a rank budget $k\ge0$.

[F1] [[def-finite-tensor-arrays-and-frobenius-inner-product]]: matrix Frobenius norm is the square root of the sum of squared entry moduli, and rank is the dimension of the column image.

[F2] [[thm-singular-value-decomposition]]: a finite-dimensional real or complex linear map has orthonormal input and output bases in which it acts diagonally with nonnegative singular values.

## Proof

1.1 Choose the full output singular-vector basis $u_1,\ldots,u_m$ from an SVD of $A$, ordered so its first $q$ vectors correspond to the positive singular values in the statement. The SVD sends each positive input singular vector to a nonzero multiple of its corresponding output vector and sends every remaining input basis vector to zero. Thus the image of $A$ is exactly $\operatorname{span}(u_1,\ldots,u_q)$, so $q=\operatorname{rank}(A)$ by [F1]. If $k\ge q$, then $A_k=A$ and $\delta_k=0$, so the lower bound follows from nonnegativity of the norm. Suppose henceforth that $k<q$, and let $B$ have rank at most $k$. Its column image has an orthonormal basis; let $P$ be the orthogonal projection onto that image. Then $PB=B$, and the columnwise orthogonal decomposition by $P$ and $I-P$ gives $\|A-B\|_F^2\ge\|(I-P)(A-B)\|_F^2=\|(I-P)A\|_F^2$. [given, F1, F2, algebra]

2.1 Put $a_j=\|Pu_j\|^2$ for $1\le j\le q$. Since $P$ is an orthogonal projection, $0\le a_j\le1$. Expanding the SVD of $A$ and using orthonormality of $(v_j)$ gives $\|(I-P)A\|_F^2=\sum_{j=1}^q\sigma_j^2(1-a_j)$. If $(w_\ell)_{\ell=1}^{s}$ is an orthonormal basis of the range of $P$, then the full output basis from step 1.1 gives $\sum_{j=1}^q a_j\le\sum_{\ell=1}^{s}\sum_{j=1}^{m}|\langle w_\ell,u_j\rangle|^2=s=\operatorname{rank}(B)\le k$. [given, F1, F2, step 1.1, algebra]

3.1 Write $\lambda_j=\sigma_j^2$, so $\lambda_1\ge\cdots\ge\lambda_q>0$. Using $\sum_j a_j\le k$, $0\le a_j\le1$, and $k<q$, we obtain $\sum_{j=1}^q\lambda_j a_j\le\sum_{j=1}^k\lambda_j a_j+\lambda_{k+1}\sum_{j=k+1}^q a_j\le k\lambda_{k+1}+\sum_{j=1}^k(\lambda_j-\lambda_{k+1})a_j\le\sum_{j=1}^k\lambda_j$. Therefore step 2.1 implies $\|A-B\|_F^2\ge\sum_{j=k+1}^q\sigma_j^2=\delta_k^2$. [step 2.1, algebra]

4.1 The image of $A_k$ is contained in $\operatorname{span}(u_1,\ldots,u_{\min(k,q)})$, so its rank is at most $k$. The omitted SVD terms are pairwise Frobenius-orthogonal rank-one matrices because both singular-vector families are orthonormal; hence $\|A-A_k\|_F^2=\sum_{j=k+1}^q\sigma_j^2=\delta_k^2$. Together with step 3.1, this proves the truncation is optimal. [F1, F2, step 3.1, algebra] ∎
