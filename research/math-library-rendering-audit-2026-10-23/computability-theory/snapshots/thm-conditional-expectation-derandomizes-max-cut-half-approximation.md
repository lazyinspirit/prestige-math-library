---
id: thm-conditional-expectation-derandomizes-max-cut-half-approximation
kind: theorem
title: "Conditional expectation yields a deterministic half-approximation for Max-Cut"
status: published
origin: pipeline
deps:
  - def-finite-simple-graph
  - def-optimization-problem-and-approximation-ratio
  - thm-random-cut-has-expected-half-the-edges
  - thm-linearity-of-expectation
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §5.2 conditional-expectation argument, printed pp. 108–109"
      url: "https://designofapproxalgs.com/book.pdf"
    - title: "Cornell CS 4820, Lecture notes on randomized approximation algorithms, §1.1.2 Algorithms 1–2, PDF pp. 2–3"
      url: "https://www.cs.cornell.edu/courses/cs4820/2011sp/handouts/approx_algs.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

For every finite simple graph, there is a deterministic polynomial-time
algorithm returning a cut of at least $m/2$ edges, hence at least half of
$\operatorname{OPT}_{\mathrm{MaxCut}}$. It fixes vertices one at a time to the
side with the larger conditional expected final cut size.

## Facts & Assumptions

**Given:** A finite simple graph $G=(V,E)$ with $m=|E|$, a fixed ordering $v_1,\dots,v_n$ of its vertices, and the product probability space of independent fair bits $b_1,\dots,b_n$, one per vertex.

[F1] Placing each vertex independently and uniformly in one of two sides gives the cut number $X$ with $\mathbb E[X]=m/2$, and every placement crosses at most $m$ edges, so $\operatorname{OPT}_{\mathrm{MaxCut}}\le m$; for $m=0$ both values are zero. ([[thm-random-cut-has-expected-half-the-edges]])

[F2] For the maximization problem Max-Cut the objective is the number of crossing edges, the optimum is a maximum over the finitely many placements and is attained, and a polynomial-time $1/2$-approximation returns a feasible cut of value at least $\tfrac12\operatorname{OPT}_{\mathrm{MaxCut}}$ in the value-inequality sense. ([[def-optimization-problem-and-approximation-ratio]])

[F3] Expectation is linear on every finite family of real random variables, with no independence hypothesis. ([[thm-linearity-of-expectation]])

[F4] Every edge of a finite simple graph is a two-element subset $\{u,v\}$ of distinct vertices. ([[def-finite-simple-graph]])

## Proof

**Proof technique:** direct.

1.1 Let $X:=\sum_{e\in E}X_e$ be the number of crossing edges, where $X_e$ is the indicator that the endpoints of $e$ lie on different sides. For a partial assignment $a=(a_1,\dots,a_k)$ of the first $k$ bits, define the conditional expectation $\mathbb E[X\mid a]$ as the average of $X$ over the $2^{\,n-k}$ equally weighted completions. The closed form is $\mathbb E[X\mid a]=A(a)+\tfrac12 B(a)$, where $A(a)$ counts the edges whose two endpoints are among the fixed vertices and which cross under $a$, and $B(a)$ counts the edges with at least one unfixed endpoint: a fully fixed edge contributes its crossing indicator, an edge with exactly one fixed endpoint crosses for exactly one of the two equally likely values of the free bit, an edge with two unfixed endpoints crosses for exactly two of the four equally likely pairs of free bits, and [F3] sums these contributions, the edges being finitely many. [F1, F3, F4, given, construct]

2.1 For any $k<n$ and any $a$, the completions of $a$ split into those with $b_{k+1}=0$ and those with $b_{k+1}=1$, two equally weighted families of equal size, so $\mathbb E[X\mid a]=\tfrac12\bigl(\mathbb E[X\mid a,0]+\mathbb E[X\mid a,1]\bigr)$. Hence at least one of the two one-bit extensions has conditional expectation at least $\mathbb E[X\mid a]$, and the maximizer is at least the current value. [step 1.1, algebra]

3.1 Define the algorithm: start with the empty assignment $a$; for $k=0,1,\dots,n-1$ compute the two numbers $\mathbb E[X\mid a,0]$ and $\mathbb E[X\mid a,1]$ from the closed form of step 1.1, each a sum over the $m$ edges, and extend $a$ by $b_{k+1}=0$ if $\mathbb E[X\mid a,0]\ge\mathbb E[X\mid a,1]$ and by $b_{k+1}=1$ otherwise; return the resulting cut. By step 2.1 the conditional expectation does not decrease at any choice, so the nondecreasing sequence $\mathbb E[X\mid\varnothing]=m/2,\mathbb E[X\mid b_1],\dots,\mathbb E[X\mid b_1,\dots,b_n]=X$ ends at the actual cut size of the returned placement, giving $X\ge m/2$. [F1, step 1.1, step 2.1, construct]

4.1 The algorithm is deterministic after the fixed tie rule $b_{k+1}=0$ and the fixed vertex order, and it runs in polynomial time: $n$ rounds with two closed-form evaluations of $O(m)$ exact rational operations each, all comparisons of rationals with polynomially bounded bit lengths. By step 3.1 and [F1], the returned feasible cut satisfies $X\ge m/2\ge\tfrac12\operatorname{OPT}_{\mathrm{MaxCut}}$; when $m=0$ both values are zero. By [F2] this is a deterministic polynomial-time $1/2$-approximation for Max-Cut. [F1, F2, step 3.1, algebra] ∎
