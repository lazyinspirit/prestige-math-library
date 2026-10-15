---
id: thm-hh-cyclotomic-murphy-basis-and-cellularity
kind: theorem
title: "The cyclotomic Murphy basis and cellularity"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 6
deps:
  - def-hh-cell-datum-dominance-and-cell-ideals
  - def-hh-cyclotomic-murphy-elements
  - def-hh-multiplicative-cyclotomic-hecke-algebra
  - lem-hh-cyclotomic-component-shift-and-dominance-ideals
  - lem-hh-componentwise-initial-row-straightening
  - lem-hh-type-a-garnir-straightening-and-murphy-cell-law
  - thm-hh-ariki-koike-basis-and-generic-splitness
  - lem-hh-colored-permutation-rsk-and-tableau-square-count
  - lem-hh-finite-matrix-and-module-preliminaries
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Richard Dipper, Gordon James, and Andrew Mathas, Cyclotomic q-Schur algebras, Mathematische Zeitschrift 229 (1998), 385–416"
      url: "https://pnp.mathematik.uni-stuttgart.de/iaz/iaz1/Dipper/papers/cyclo.ps"
      locator: "§3, Propositions 3.22–3.25 and Theorem 3.26, printed pp. 395–397: dominance ideals, fixed-row closure, integral Murphy cellular basis, and rank count. Full text inspected."
    - title: "Jun Hu and Andrew Mathas, Seminormal forms and cyclotomic quiver Hecke algebras of type A, arXiv:1304.0906v3 (2014)"
      url: "https://arxiv.org/pdf/1304.0906v3"
      locator: "§2.5, PDF pp. 10–12: cyclotomic Murphy basis and cellularity statement; proof route traced to the integral treatments. Full text inspected."
---

## Statement

Let $R=\mathbb Z[Q^{\pm1},u_1^{\pm1},\ldots,u_r^{\pm1}]$ and let $H_{r,n}$ be the multiplicative cyclotomic Hecke algebra of [[def-hh-multiplicative-cyclotomic-hecke-algebra]]. For every $r$-multipartition $\lambda$ and standard multitableaux $s,t$ of shape $\lambda$, form
$$m_{st}=T_{d(s)}^*u_\lambda x_\lambda T_{d(t)}$$
using [[def-hh-cyclotomic-murphy-elements]]. Then the elements $m_{st}$ form an $R$-basis of $H_{r,n}$, satisfy $m_{st}^*=m_{ts}$, and obey the dominance cell law
$$m_{st}h\equiv\sum_{v\in\operatorname{Std}(\lambda)}r_{t,v}(h)m_{sv}\pmod{N^{\triangleright\lambda}}$$
for every $h\in H_{r,n}$, with coefficients independent of $s$. The dominance spans $N^{\unrhd\lambda}$ and $N^{\triangleright\lambda}$ are two-sided ideals. The basis and cell law hold over the universal ring and after every commutative base change; no semisimplicity or invertibility of quantum integers is assumed after specialization; the identities descend from the universal integral ring.

Here $N^{\unrhd\lambda}$ is the $R$-span of all $m_{uv}$ whose common shape $\mu$ satisfies $\mu\unrhd\lambda$, and $N^{\triangleright\lambda}$ is the span of those with $\mu\triangleright\lambda$.

## Facts & Assumptions

**Given:** The universal coefficient ring, the multiplicative cyclotomic presentation, the multipartition dominance order, and the standard Murphy elements.

[F1] [[lem-hh-cyclotomic-component-shift-and-dominance-ideals]]: the component shift identity and the asserted dominance support and ideal closure under $X_1$ and finite generators.

[F2] [[lem-hh-componentwise-initial-row-straightening]]: componentwise composition straightening, dominance support, and coefficient independence in the finite-generator cell law.

[F3] [[lem-hh-type-a-garnir-straightening-and-murphy-cell-law]]: the ordinary type-A integral Murphy basis and dominance cell law.

[F4] [[thm-hh-ariki-koike-basis-and-generic-splitness]]: $H_{r,n}$ is free over $R$ of rank $r^n n!$, with the stated basis after arbitrary commutative base change.

[F5] [[lem-hh-colored-permutation-rsk-and-tableau-square-count]]: the number of pairs of standard multitableaux of equal shape is $\sum_\lambda|\operatorname{Std}(\lambda)|^2=r^n n!$.

[F6] [[lem-hh-finite-matrix-and-module-preliminaries]]: a square spanning family of a finite free module of equal rank has a coordinate matrix with right inverse and unit determinant.

[F7] [[def-hh-cell-datum-dominance-and-cell-ideals]]: a basis, involution, and dominance-independent coefficient law define a cell datum; the higher-cell spans are ideals.

## Proof

**Given:** $H_{r,n}$, the Murphy elements, and the facts in the Statement.

1.1 For every $\lambda$, the componentwise and shift lemmas [F1]–[F3] give two-sided ideals $N^{\unrhd\lambda},N^{\triangleright\lambda}$ and show that right multiplication by any algebra generator preserves shape dominance. They also give the fixed-initial-row law for $m_{t^\lambda,t}$: modulo $N^{\triangleright\lambda}$ it is a linear combination of $m_{t^\lambda,v}$, with coefficients independent of the first index after left multiplication. To see closure under the full generator set, use the finite generators $T_i$ and $X_1$ from [F1]; the cyclotomic polynomial has unit constant coefficient, so $X_1^{-1}$ is a polynomial in $X_1$, while $T_i^{-1}=Q^{-1}(T_i-(Q-1))$ and the recursion expresses every $X_j$ as a word in $T_i,X_1$. [F1, F2, F3, algebra]

2.1 Let $U_\lambda$ be the span of $m_{t^\lambda,v}$ for standard $v$ of shape $\lambda$. The fixed-initial-row law shows $U_\lambda+N^{\triangleright\lambda}$ is a right ideal. For any $h\in H_{r,n}$ there are coefficients $r_{t,v}(h)$ such that$m_{t^\lambda,t}h\equiv\sum_v r_{t,v}(h)m_{t^\lambda,v}\pmod{N^{\triangleright\lambda}}.$ Since $N^{\triangleright\lambda}$ is a two-sided ideal, multiplying by $T_{d(s)}^*$ gives the displayed cell law for every $s$, and the coefficients remain independent of $s$. The generator-fixing anti-involution gives $m_{st}^*=m_{ts}$. [F1, F2, F3, step 1.1]

3.1 The row-filled multipartition $\lambda_0=(\varnothing,\ldots,\varnothing,(1^n))$ is dominated by every multipartition. Before the final component its cumulative counts are zero. At the first $k$ rows of the final component its count is $\min(k,n)$. If a multipartition has $a$ boxes in earlier components and final component $\gamma$, then $|\gamma|=n-a$ and the first $k$ rows of the partition $\gamma$ contain at least $\min(k,n-a)$ boxes; thus its cumulative count is at least $a+\min(k,n-a)\ge\min(k,n)$. Its row subgroup is trivial and its cyclotomic factor $u_{\lambda_0}$ is empty, so $m_{t^{\lambda_0},t^{\lambda_0}}=1$. Taking $\lambda=\lambda_0$ in step 2.1 expresses every $h\in H_{r,n}$ as a linear combination of the one initial-row layer elements plus elements of $N^{\triangleright\lambda_0}$, which by definition are in the span of the standard Murphy family. Hence the family spans $H_{r,n}$. [F1, F2, step 2.1, algebra]

4.1 By [F5] the spanning family has $r^n n!$ elements, and by [F4] the algebra is free of rank $r^n n!$ over $R$. Its square coordinate matrix is surjective, so [F6] gives a right inverse; taking determinants shows its determinant is a unit. Therefore the family is an $R$-basis. Together with step 2.1 this gives a cellular basis and the stated dominance ideals by [F7]. Tensoring the universal basis and its multiplication congruences along any commutative base change gives the same basis and cell law after specialization. [F4, F5, F6, F7, step 2.1, step 3.1] ∎
