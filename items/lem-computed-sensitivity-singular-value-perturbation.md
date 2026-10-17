---
id: lem-computed-sensitivity-singular-value-perturbation
kind: lemma
title: "Computed sensitivity errors perturb every singular value by at most their operator-norm error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-inner-product-norm
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-eckart-young-best-rank-k-approximation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
      locator: "The complete 404-page text was retrieved; §7E and §7F, printed pp. 272–284, were inspected, including Theorem 7.92 and its best rank-k approximation proof."
---

## Statement

Let $J,J_h\in\mathbb R^{m\times n}$, let $r=\min\{m,n\}$, and let $\sigma_1(A)\ge\cdots\ge\sigma_r(A)\ge0$ denote the singular values of a real matrix $A$. Then for every $1\le i\le r$,
$$|\sigma_i(J_h)-\sigma_i(J)|\le\|J_h-J\|_2,$$
where $\|\cdot\|_2$ is the Euclidean operator norm.

## Facts & Assumptions

**Given:** Real matrices $J,J_h\in\mathbb R^{m\times n}$ and an index $1\le i\le r=\min\{m,n\}$.

[F1] [[thm-eckart-young-best-rank-k-approximation]]: the best operator-norm error among matrices of rank at most $i-1$ is $\sigma_i(A)$, attained by an SVD truncation, for both $A=J$ and $A=J_h$.

[F2] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: $\|A\|_2=\max_{\|v\|_2=1}\|Av\|_2$ for a nonzero domain, and the Euclidean vector norm satisfies the triangle inequality ([[def-inner-product-norm]]).

## Proof

**Proof technique:** direct.

1.1 Let $J_{i-1}$ be the rank-at-most-$(i-1)$ SVD truncation of $J$. By [F1], $\|J-J_{i-1}\|_2=\sigma_i(J)$, while the minimal-error characterization in [F1] for $J_h$ gives $\sigma_i(J_h)\le\|J_h-J_{i-1}\|_2$. For every unit vector $v$, the vector triangle inequality gives $\|(J_h-J_{i-1})v\|_2\le\|(J-J_{i-1})v\|_2+\|(J_h-J)v\|_2\le\|J-J_{i-1}\|_2+\|J_h-J\|_2$; taking the maximum over unit $v$ proves $\sigma_i(J_h)\le\sigma_i(J)+\|J_h-J\|_2$. [F1, F2, given, choose, algebra]

2.1 Apply step 1.1 with $J_h$ in place of $J$ and $J-J_h$ in place of $J_h-J$. This gives $\sigma_i(J)\le\sigma_i(J_h)+\|J-J_h\|_2$. The two one-sided inequalities imply the asserted absolute-value bound. [step 1.1, algebra] ∎
