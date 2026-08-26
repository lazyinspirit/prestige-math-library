---
id: cor-binary-trees-satisfy-b-equals-one-plus-z-b-squared
kind: corollary
title: "Rooted plane binary trees satisfy $B(x)=1+xB(x)^2$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-neutral-and-atomic-classes, thm-symbolic-sum-and-product-rules, thm-order-raising-recursive-specifications-have-unique-solutions, lem-formal-order-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 5: Combinatorial Constructions"
      url: "https://enumeration.ca/toolbox/combinatorial-constructions/"
pipeline_run: null
---

## Statement

Let $B(x)$ be the generating function of rooted plane binary trees, specified by

$$\mathcal{B} = \mathcal{E} + \mathcal{Z} \times \mathcal{B}^2.$$

Then $B(x)$ is the unique formal power series satisfying

$$B(x)=1+xB(x)^2.$$

## Facts & Assumptions

**Given:** The recursive specification $\mathcal{B} = \mathcal{E} + \mathcal{Z} \times \mathcal{B}^2$.

[L1] Disjoint union and Cartesian product translate to addition and multiplication of ordinary generating functions ([[thm-symbolic-sum-and-product-rules]]).

[L2] An order-raising recursive specification has a unique solution ([[thm-order-raising-recursive-specifications-have-unique-solutions]]).

[L3] Formal order is non-Archimedean under sums and satisfies $\operatorname{ord}_x(fg)\ge\operatorname{ord}_x(f)+\operatorname{ord}_x(g)$ over a commutative ring ([[lem-formal-order-laws]]).

## Proof

**Proof technique:** direct.

1.1 The associated operator is $F(Y)=1+xY^2$. For any $U,V$, one has $F(U)-F(V)=x(U+V)(U-V)$, so [L3] gives $\operatorname{ord}_x(F(U)-F(V)) \ge \operatorname{ord}_x(U-V)+1$. Thus the specification is order-raising. [L3, algebra]

2.1 By [L2], the specification has a unique formal power series solution $B(x)$. [step 1.1, L2]

3.1 The neutral class contributes $1$, the atomic class contributes $x$, and the ordered pair of left and right subtrees contributes $B(x)^2$ by [L1]. Hence the specification translates to $B(x)=1+xB(x)^2$. [step 2.1, L1] ∎
