---
id: cor-dimension-of-the-kth-exterior-power-is-binomial
kind: corollary
title: "Dimension of the $k$th exterior power is binomial"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-wedge-monomials-in-a-dual-basis-form-a-basis,
       def-binomial-coefficient,
       def-dimension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Statement

If $V$ is a finite-dimensional real vector space with $\dim V=n$ and
$k\in\mathbb N$, then

$$
\dim\operatorname{Alt}^k(V)=\binom{n}{k}.
$$

In particular, $\operatorname{Alt}^k(V)=0$ for $k>n$.

## Facts & Assumptions

**Given:** A finite-dimensional real vector space $V$ with $\dim V=n$ and $k\in\mathbb N$.

[L1] The wedges $e^{i_1}\wedge\cdots\wedge e^{i_k}$ with $i_1<\cdots<i_k$ form a basis of $\operatorname{Alt}^k(V)$ ([[lem-wedge-monomials-in-a-dual-basis-form-a-basis]]).

[F1] The binomial coefficient $\binom{n}{k}$ counts the $k$-element subsets of an $n$-element set ([[def-binomial-coefficient]]).

## Proof
**Proof technique:** direct.

1.1 Choose a basis $e_1,\ldots,e_n$ of $V$. By [L1], $\operatorname{Alt}^k(V)$ has one basis vector for each strictly increasing $k$-tuple $(i_1,\ldots,i_k)$ from $\{1,\ldots,n\}$. [L1, given, choose]

2.1 Such tuples are the same thing as $k$-element subsets of an $n$-element set, so [F1] counts them by $\binom{n}{k}$. Therefore $\dim\operatorname{Alt}^k(V)=\binom{n}{k}$. If $k>n$, there are no such tuples, so the basis is empty and $\operatorname{Alt}^k(V)=0$. [F1, step 1.1, algebra]

3.1 This is exactly the claimed dimension formula and vanishing statement. [step 2.1] ∎
