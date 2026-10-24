---
id: thm-infinite-ramsey-on-the-naturals
kind: theorem
title: "Infinite Ramsey theorem on $\\mathbb N$: every finite colouring of $[\\mathbb N]^k$ has an infinite monochromatic set, in ZF"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ramsey-colouring-and-arrow-notation, lem-infinite-pigeonhole-on-the-naturals, thm-induction-principle, thm-recursion, thm-well-ordering-principle, def-countable]
justified_by: []
aliases: []
landmark: true
short: "Infinite Ramsey theorem"
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Theorem 9.1.2"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch9.pdf"
    - title: "I. B. Leader, Ramsey Theory, Theorems 1-2"
      url: "https://www.dpmms.cam.ac.uk/~par31/notes/ramsey.pdf"
pipeline_run: null
---

## Statement

For every positive natural $k$ and every colouring of $[\mathbb N]^k$ by a nonempty finite colour set, there is an infinite monochromatic subset of $\mathbb N$ in the sense of [[def-ramsey-colouring-and-arrow-notation]] and [[def-countable]]. The construction uses natural recursion ([[thm-recursion]]) and induction ([[thm-induction-principle]]) but no form of choice.

## Facts & Assumptions

**Given:** A positive natural $k$, a nonempty finite colour set $C$, and a colouring $c:[\mathbb N]^k\to C$.

[L1] Every finite colouring of $\mathbb N$ has an infinite colour class, in ZF ([[lem-infinite-pigeonhole-on-the-naturals]]).

[L2] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).



## Proof

**Proof technique:** induction.

1.1 For $k=1$, [L1] is exactly the assertion. The one-colour case is immediate for every $k$. [base, L1]

1.2 Assume the result for $k$ and consider a colouring of $(k+1)$-subsets. Whenever the induction hypothesis produces an infinite homogeneous subset of a set of naturals, make one output canonical as follows. Among the $k$-subsets whose colours admit an infinite homogeneous set, choose the lexicographically least subset and use its colour. Then recursively choose the least next natural that extends the current finite prefix to some infinite homogeneous set of that colour. The candidate sets are nonempty, so [L2] and natural recursion define a unique increasing enumeration without ordering the arbitrary colour set and without choice. [ih, L2, construct]

2.1 Set $R_0=\mathbb N$. Given the infinite reservoir $R_n$, let $x_n$ be its least element and transfer the colouring $A\mapsto c(A\cup\{x_n\})$ on $[R_n\setminus\{x_n\}]^k$ along that set's unique increasing enumeration from $\mathbb N$. Apply the induction hypothesis and the canonical rule of step 1.2, then transfer back to obtain an infinite homogeneous reservoir $R_{n+1}\subseteq R_n\setminus\{x_n\}$; let $d_n$ be its colour. Natural recursion performs this construction for all $n$. [step 1.2, ih, L2]

3.1 Apply [L1] to $n\mapsto d_n$. Let $j$ be the least index whose colour class is infinite, and put $I=\{n:d_n=d_j\}$. If $i_0<\cdots<i_k$ lie in $I$, then $x_{i_1},\ldots,x_{i_k}\in R_{i_0+1}$ by nestedness, so $c(\{x_{i_0},\ldots,x_{i_k}\})=d_{i_0}=d_j$. Hence $\{x_i:i\in I\}$ is infinite and monochromatic. [step 2.1, L1, L2]

4.1 The base and the induction step establish the theorem for every positive $k$, and every selection made in the construction was the least member of a nonempty subset of $\mathbb N$. [step 1.1, step 3.1, discharge-induction] ∎
