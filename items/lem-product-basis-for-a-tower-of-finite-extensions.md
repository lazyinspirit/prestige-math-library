---
id: lem-product-basis-for-a-tower-of-finite-extensions
kind: lemma
title: "Products of bases form a basis in a tower of finite extensions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-linear-basis, thm-unique-coordinates-with-respect-to-an-ordered-basis]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Statement

Let $F\subseteq K\subseteq L$ be fields. If $(u_1,\ldots,u_m)$ is an $F$-basis of $K$ and $(v_1,\ldots,v_n)$ is a $K$-basis of $L$, then

$$\{u_iv_j:1\le i\le m,\ 1\le j\le n\}$$

is an $F$-basis of $L$.

## Facts & Assumptions

**Given:** A tower $F\subseteq K\subseteq L$ and the two finite bases in the Statement.

[L1] A basis is a linearly independent spanning set ([[def-linear-basis]]).

[L2] Every vector has unique coordinates with respect to an ordered basis ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

## Proof

**Proof technique:** direct.

1.1 For $x\in L$, use the $K$-basis to write $x=\sum_jb_jv_j$ with $b_j\in K$, then use the $F$-basis to write $b_j=\sum_i c_{ij}u_i$. Thus $x=\sum_{i,j}c_{ij}u_iv_j$, so the products span $L$ over $F$. [given, L1, L2]

1.2 Suppose $\sum_{i,j}c_{ij}u_iv_j=0$ with $c_{ij}\in F$. Grouping by $v_j$ gives $\sum_j(\sum_i c_{ij}u_i)v_j=0$. Independence of the $v_j$ makes every inner coefficient zero, and independence of the $u_i$ then makes every $c_{ij}=0$. [given, L1, L2, algebra]

2.1 The products span and are independent, hence form an $F$-basis. [step 1.1, step 1.2, L1] ∎
