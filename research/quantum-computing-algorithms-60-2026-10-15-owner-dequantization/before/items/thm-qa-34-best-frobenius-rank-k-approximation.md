---
id: thm-qa-34-best-frobenius-rank-k-approximation
kind: theorem
title: Truncated singular values give the best Frobenius rank-k approximation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-frobenius-matrix-norm
  - def-orthogonal-projection
  - thm-singular-value-decomposition
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references: []
---

## Statement

Let $A\in\mathbb R^{m\times n}$ have singular values $\sigma_1\ge\sigma_2\ge\cdots\ge0$, padded by zeros to $\min(m,n)$. For an integer $0\le k\le\min(m,n)$ let $A_k$ be the truncation to the first $k$ singular terms of an SVD of $A$. Then $\operatorname{rank}(A_k)\le k$, and for every matrix $B$ with $\operatorname{rank}(B)\le k$,
$$\|A-A_k\|_F^2=\sum_{j>k}\sigma_j^2\le\|A-B\|_F^2.$$

## Facts & Assumptions

**Given:** The finite real matrix and integer $k$ in the Statement.

[F1] [[thm-singular-value-decomposition]]: $A=\sum_j\sigma_j u_jv_j^T$ with orthonormal left and right singular vectors.

[F2] [[def-frobenius-matrix-norm]]: the Frobenius norm is the Euclidean norm of the full entry list.

[F3] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: $\|A\|_F^2=\sum_j\sigma_j^2$.

[F4] [[def-orthogonal-projection]]: every finite-dimensional subspace has an orthogonal projection onto it.

## Proof



1.1 By [F1], write $A=\sum_{j=1}^r\sigma_j u_jv_j^T$ for its $r$ positive singular values, and set $A_k=\sum_{j=1}^{\min(k,r)}\sigma_j u_jv_j^T$. Its image lies in the span of at most $k$ left singular vectors, so its rank is at most $k$. The residual is the sum of the positive singular terms with index greater than $k$; padding the singular-value list by zeros, [F2]–[F3] give $\|A-A_k\|_F^2=\sum_{j>k}\sigma_j^2$. [given, F1, F2, F3, algebra]

1.2 Let $P$ be the orthogonal projection onto the row space of $B$, which exists by [F4]. Its rank is at most $k$, every row of $B$ lies in $\operatorname{ran}P$, and hence $B=BP$. Rowwise, $A-B=A(I-P)+(AP-B)$, where the first summand has each row in $\operatorname{ran}(I-P)$ and the second has each row in $\operatorname{ran}P$. These subspaces are orthogonal, so summing the rowwise Pythagorean identities gives $\|A-B\|_F^2\ge\|A(I-P)\|_F^2=\|A\|_F^2-\|AP\|_F^2$. [given, F2, F4, algebra]

1.3 Let $v_1,\ldots,v_r$ be the right singular vectors for the positive singular values, and complete them to an orthonormal basis $v_1,\ldots,v_n$ of $\mathbb R^n$ using vectors in $\ker A$; set $\sigma_j=0$ for $j>r$. The SVD gives $AP=\sum_{j=1}^r\sigma_j u_j(Pv_j)^T$, so orthonormality of $u_1,\ldots,u_r$ and [F2] give $\|AP\|_F^2=\sum_{j=1}^n\sigma_j^2 b_j$, where $b_j=\|Pv_j\|_2^2\in[0,1]$. If $w_1,\ldots,w_s$ is an orthonormal basis of $\operatorname{ran}P$, then Parseval in the basis $v_1,\ldots,v_n$ gives $\sum_jb_j=\sum_{\ell=1}^s\sum_j|\langle v_j,w_\ell\rangle|^2=s=\operatorname{rank}P\le k$. For $k=0$, every $b_j=0$. For $k\ge1$, put $\lambda_j=\sigma_j^2$ and use $\lambda_j\ge\lambda_k$ for $j\le k$ and $\lambda_j\le\lambda_k$ for $j>k$ to obtain $\sum_{j=1}^k\lambda_j-\sum_{j=1}^n\lambda_jb_j=\sum_{j=1}^k\lambda_j(1-b_j)-\sum_{j=k+1}^n\lambda_jb_j\ge\lambda_k\left(k-\sum_{j=1}^n b_j\right)\ge0.$ Thus $\|AP\|_F^2\le\sum_{j\le k}\sigma_j^2$ in either case. [given, F1, F2, algebra]

2.1 Substitute the bound from step 1.3 into step 1.2 and use $\|A\|_F^2=\sum_j\sigma_j^2$ from [F3]. This gives $\|A-B\|_F^2\ge\sum_{j>k}\sigma_j^2=\|A-A_k\|_F^2$, proving the claim. [step 1.2, step 1.3, F3, algebra] ∎
