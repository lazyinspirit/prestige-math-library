---
id: lem-singular-value-product-bound
kind: lemma
title: "Singular values contract under left and right multiplication"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-eckart-young-best-rank-k-approximation, def-operator-norm-on-a-finite-dimensional-inner-product-space]
dependency_level: 0
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
proof_strategy: direct
sources:
  references:
    - title: "Wen-Wei Lin, Lecture Notes of Matrix Computations, §3.1"
      url: "https://zhims.github.io/doc/note/computing/matrixComputations.pdf"
---

## Statement

Let $X\in\mathbb F^{m\times n}$, $Y\in\mathbb F^{n\times q}$, and $Z\in\mathbb F^{r\times m}$ over $\mathbb F=\mathbb R$ or $\mathbb C$. For every $1\le i\le\min(m,n,q)$ and $1\le j\le\min(r,m,n)$,
$$\sigma_i(XY)\le\sigma_i(X)\|Y\|_2,\qquad \sigma_j(ZX)\le\|Z\|_2\sigma_j(X).$$

## Facts & Assumptions

**Given:** Compatible finite matrices $X,Y,Z$ and indices in the displayed ranges.

[F1] [[thm-eckart-young-best-rank-k-approximation]]: the spectral-norm distance from a matrix $M$ to matrices of rank at most $i-1$ is $\sigma_i(M)$, attained by its SVD truncation.

[F2] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: $\|Y\|_2=\sup_{\|z\|_2=1}\|Yz\|_2$, so $\|ZY\|_2\le\|Z\|_2\|Y\|_2$ for every compatible $Z$.

## Proof

1.1 Let $X_{i-1}$ be the rank-at-most-$(i-1)$ SVD truncation in [F1]. Then $X_{i-1}Y$ has rank at most $i-1$, and [F1] applied to $XY$ gives $\sigma_i(XY)\le\|(X-X_{i-1})Y\|_2$. [F1, construct]

2.1 For each unit vector $z$, [F2] gives $\|(X-X_{i-1})Yz\|_2\le\|X-X_{i-1}\|_2\|Yz\|_2\le\|X-X_{i-1}\|_2\|Y\|_2$. Taking the supremum over such $z$ and using [F1] yields $\|(X-X_{i-1})Y\|_2\le\sigma_i(X)\|Y\|_2$. Combining with step 1.1 proves the right-multiplication inequality. [step 1.1, F1, F2, algebra]

3.1 Let $X_{j-1}$ be the rank-at-most-$(j-1)$ SVD truncation of $X$. Then $ZX_{j-1}$ has rank at most $j-1$, so [F1] gives $\sigma_j(ZX)\le\|Z(X-X_{j-1})\|_2$. For every unit vector $v$, [F2] gives $\|Z(X-X_{j-1})v\|_2\le\|Z\|_2\|(X-X_{j-1})v\|_2$. Taking the supremum and using [F1] yields $\|Z(X-X_{j-1})\|_2\le\|Z\|_2\sigma_j(X)$, proving the left-multiplication inequality. [F1, F2, construct] ∎
