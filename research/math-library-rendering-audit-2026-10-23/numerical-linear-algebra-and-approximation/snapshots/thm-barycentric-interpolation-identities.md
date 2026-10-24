---
id: thm-barycentric-interpolation-identities
kind: theorem
title: "Barycentric interpolation identities"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-cardinal-polynomial-interpolation
  - lem-cardinal-basis-degree-and-values
  - thm-cardinal-polynomial-interpolant-exists-uniquely
  - thm-reals-field
  - lem-finite-sum-laws
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  scraped: []
  references:
    - title: "Mark Embree, Lecture Notes on Numerical Analysis, lecture 1"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
    - title: "Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation"
      url: "https://math.pku.edu.cn/teachers/litj/notes/numer_anal/SIAMRev_46_501_Trefethen_Barycentric.pdf"
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
---

## Statement

Let $n\in\mathbb N$, $n\ge0$, let $x_0<\cdots<x_n$ be distinct real nodes, let $y_0,\ldots,y_n\in\mathbb R$, and define $\omega_n,w_j,I_n y$ as in [[def-cardinal-polynomial-interpolation]]. For every real $x$ that is not a node,
$$\omega_n(x)\sum_{j=0}^{n}\frac{w_j}{x-x_j}=1,\qquad \omega_n(x)\sum_{j=0}^{n}\frac{y_jw_j}{x-x_j}=I_n y(x).$$
In particular, the denominator sum is nonzero and
$$I_n y(x)=\frac{\sum_{j=0}^{n}y_jw_j/(x-x_j)}{\sum_{j=0}^{n}w_j/(x-x_j)}.$$
At a node $x_i$, the interpolant is defined by the separate value $I_n y(x_i)=y_i$; the quotient is not used there.

## Facts & Assumptions

**Given:** Distinct real nodes $x_0<\cdots<x_n$, real data $y_0,\ldots,y_n$, and a real query $x$ not equal to any node.

[F1] [[def-cardinal-polynomial-interpolation]]: $\omega_n(X)=\prod_{k=0}^{n}(X-x_k)$, $w_j=(\prod_{k\ne j}(x_j-x_k))^{-1}$, $\ell_j(X)=\prod_{k\ne j}(X-x_k)/(x_j-x_k)$, and $I_n y(X)=\sum_{j=0}^{n}y_j\ell_j(X)$.

[F2] [[thm-cardinal-polynomial-interpolant-exists-uniquely]]: for any data on these nodes there is exactly one polynomial of degree at most $n$ interpolating them, and it is $I_n y$.

[F3] [[lem-cardinal-basis-degree-and-values]]: $\ell_j(x_i)=1$ when $i=j$ and $0$ otherwise, and $\omega_n(x)\ne0$ off the nodes.

[F4] [[thm-reals-field]] and [[lem-finite-sum-laws]]: real division by a nonzero number is defined; finite products split into consecutive factors and satisfy $\prod_{k<n}(a_kb_k)=(\prod_{k<n}a_k)(\prod_{k<n}b_k)$, including the empty-product case.

## Proof

1.1 Split the product for $\omega_n(x)$ before and after index $j$ using [F4]: it is $A(x-x_j)B$, where $A=\prod_{k<j}(x-x_k)$ and $B=\prod_{j<k\le n}(x-x_k)$; the omitted numerator product is $AB$. In the increasing omitted-index order of [F1], the product law [F4] gives $\ell_j(x)=\bigl(\prod_{k\ne j}(x-x_k)\bigr)\bigl(\prod_{k\ne j}(x_j-x_k)^{-1}\bigr)$. The second product is $w_j$: multiplying it by $\prod_{k\ne j}(x_j-x_k)$ gives the product of $1$'s, including the empty case, so it is that product's inverse. Thus $\ell_j(x)=ABw_j=\omega_n(x)w_j/(x-x_j)$, using $x\ne x_j$ to cancel the nonzero factor. [given, F1, F4, algebra]

1.2 By [F1], $S(X):=\sum_{j=0}^{n}\ell_j(X)=I_n(1,\ldots,1)(X)$, so it has degree at most $n$ by [F2]. At each node $x_i$, [F3] gives $S(x_i)=1$. The constant polynomial $1$ is another degree-at-most-$n$ interpolant of these data; uniqueness in [F2] gives $S(X)=1$. [given, F1, F2, F3, algebra]

2.1 Summing the identities of step 1.1 over $j$ gives $\omega_n(x)\sum_{j=0}^{n}w_j/(x-x_j)=\sum_{j=0}^{n}\ell_j(x)=1$ by step 1.2. Since $\omega_n(x)\ne0$ by [F3], the denominator sum equals $1/\omega_n(x)$ and is nonzero by the field laws [F4]. [given, F3, F4, step 1.1, step 1.2, algebra]

3.1 Multiplying step 1.1 by $y_j$ and summing gives $\omega_n(x)\sum_{j=0}^{n}y_jw_j/(x-x_j)=\sum_{j=0}^{n}y_j\ell_j(x)=I_n y(x)$ by [F1]. Dividing this identity by the nonzero identity in step 2.1 proves the quotient formula. At $x_i$, [F2] gives $I_n y(x_i)=y_i$, which is the separate node value stated above. [given, F1, F2, F4, step 1.1, step 2.1, algebra] ∎
