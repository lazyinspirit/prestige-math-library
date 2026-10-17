---
id: thm-smolyak-polynomial-multi-degree-exactness
kind: theorem
title: Smolyak polynomial exactness from actual one-dimensional levels
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: sparse-grid-cubature-and-mixed-regularity
dependency_level: 4
deps:
  - def-smolyak-univariate-level-hierarchy
  - def-smolyak-cubature
  - lem-smolyak-rectangular-telescope
  - cor-riemann-integral-of-a-product-function
  - thm-multidimensional-integral-properties
  - lem-finite-sum-laws
  - thm-composite-simpson-exact-through-degree-three
justified_by: []
proof_strategy: direct
axiom_use: None. The exactness proof uses finite expansions only.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "T. Gerstner and M. Griebel, Sparse Grids, Encyclopedia of Quantitative Finance, §Numerical integration"
      url: "https://ins.uni-bonn.de/media/public/publication-media/sparsegrids_j8NLaMi.pdf?name=sparsegrids.pdf"
    - title: "N. Zabaras, Sparse Grid Collocation Methods, lecture notes, slide 18"
      url: "https://web.ics.purdue.edu/~ibilion/www.zabaras.com/Courses/UQ/Smolyak.pdf"
---

## Statement

Let $d\ge1$ and let $(Q_\ell)$ be a nested hierarchy as in
[[def-smolyak-univariate-level-hierarchy]]. Suppose nondecreasing integers
$m_\ell\ge0$ are supplied such that $Q_\ell(p)=\int_0^1p$ for every real
polynomial $p$ of degree at most $m_\ell$. Let $p_j$ be a polynomial of degree
at most $s_j$ in coordinate $j$, and suppose $q_j$ is the least level with
$s_j\le m_{q_j}$. If a finite downward-closed Smolyak set $\Lambda$ contains
the whole rectangle $R_q=\{\ell:0\le\ell_j\le q_j\}$, then its rule
[[def-smolyak-cubature]] exactly integrates every finite linear combination of
the tensor polynomials $p_1(x_1)\cdots p_d(x_d)$ with those coordinate-degree
bounds. In particular, for
$$\Lambda_n:=\{\ell\in\mathbb N_0^d:|\ell|_1\le n\},$$
the rule is exact whenever $\sum_jq_j\le n$. The $m_\ell$ are the exactness
degrees of the actual one-dimensional levels; the conclusion does not infer
them from node counts.

For the selected composite-Simpson hierarchy, each level is exact through
degree three, so every tensor polynomial with coordinate degrees at most three
is exact on any admissible $\Lambda$.

## Facts & Assumptions

**Given:** $d\ge1$, a nested one-dimensional rule hierarchy with the stated nondecreasing polynomial exactness degrees, coordinate polynomials $p_j$, their degree levels $q_j$, and a finite downward-closed $\Lambda\supseteq R_q$.

[A1] For every level $\ell$, $Q_\ell$ integrates every polynomial of degree at most $m_\ell$ exactly, and $m_\ell$ is nondecreasing.

[F1] [[def-smolyak-univariate-level-hierarchy]]: $\Delta_0=Q_0$ and $\Delta_\ell=Q_\ell-Q_{\ell-1}$ for $\ell\ge1$; tensor rules multiply coordinate weights.

[F2] [[def-smolyak-cubature]]: $Q_\Lambda$ is the finite sum of tensor details over $\ell\in\Lambda$.

[F3] [[lem-smolyak-rectangular-telescope]]: the sum of the tensor details over $R_q$ is $Q_{q_1}\otimes\cdots\otimes Q_{q_d}$.

[F4] [[cor-riemann-integral-of-a-product-function]]: the integral of a product function on a product of nondegenerate rectangles is the product of the coordinate integrals.

[F5] [[thm-multidimensional-integral-properties]]: the multiple Riemann integral is linear on finite sums of integrable functions.

[F6] [[lem-finite-sum-laws]]: finite sums distribute over finite sums and products.

[F7] [[thm-composite-simpson-exact-through-degree-three]]: the composite-Simpson rule on $[0,1]$ is exact for every polynomial of degree at most three whenever its panel count is even and at least two.

## Proof

1.1 Fix a tensor polynomial $p(x)=\prod_{j=1}^dp_j(x_j)$. If some $\ell_j>q_j$, then $\ell_j-1\ge q_j$, so [A1] makes both $Q_{\ell_j}$ and $Q_{\ell_j-1}$ exact on $p_j$; hence $\Delta_{\ell_j}(p_j)=0$. Therefore every tensor detail with $\ell\notin R_q$ vanishes on $p$. [given, A1, F1, algebra]

2.1 Since $R_q\subseteq\Lambda$, [F2] and step 1.1 reduce $Q_\Lambda(p)$ to the rectangular detail sum. By [F3] this is $\prod_{j=1}^d Q_{q_j}(p_j)$, which equals $\prod_j\int_0^1p_j$ by [A1]. Repeated application of [F4] identifies this product with $I_d(p)$. [given, A1, F2, F3, F4, step 1.1, algebra]

3.1 Every stated tensor polynomial is a finite linear combination of products handled in step 2.1. The finite rule and the multiple integral are linear by [F5]–[F6], so exactness extends term by term. If $\sum_jq_j\le n$, every $\ell\in R_q$ has $|\ell|_1\le n$, hence $R_q\subseteq\Lambda_n$, proving the isotropic-simplex claim. [given, F5, F6, step 2.1, algebra]

4.1 For the hierarchy of [[def-smolyak-univariate-level-hierarchy]], each level has panel count $2^{\ell+1}$, which is even and at least two. Thus [F7] makes every $Q_\ell$ exact through degree three. Set $m_\ell=3$ for all $\ell$; for coordinate degrees $s_j\le3$ the least levels are $q_j=0$, so $R_q=\{0\}\subseteq\Lambda$. Step 3.1 gives the stated exactness for these tensor polynomials. [given, F1, F7, step 3.1] ∎
