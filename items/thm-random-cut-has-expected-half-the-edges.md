---
id: thm-random-cut-has-expected-half-the-edges
kind: theorem
title: "A random cut crosses half the edges in expectation"
status: published
origin: pipeline
deps:
  - def-optimization-problem-and-approximation-ratio
  - def-finite-simple-graph
  - thm-product-probability-has-independent-coordinate-events
  - lem-indicator-expectation-and-products
  - thm-linearity-of-expectation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §§1.1, 1.6, 2.4, 5.1–5.2, 16.2, printed pp. 14–15, 24–26, 44–46, 107–109, 413–414"
      url: "https://designofapproxalgs.com/book.pdf"
    - title: "Cornell CS 4820, Lecture notes on randomized approximation algorithms, §1.1–1.1.2, PDF pp. 1–3"
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

In a finite simple graph $G$ with $m$ edges, place each vertex independently
and uniformly in one of two sides. The number $X$ of crossing edges satisfies
$\mathbb E[X]=m/2$. Since
$\operatorname{OPT}_{\mathrm{MaxCut}}\le m$, this random algorithm has expected
value at least $\operatorname{OPT}_{\mathrm{MaxCut}}/2$; for $m=0$ both values
are zero.

## Facts & Assumptions

**Given:** A finite simple graph $G=(V,E)$ with $m=|E|$, the random placement of each vertex $v$ on one of two sides according to a fair independent bit $b_v$, and the number $X$ of edges whose endpoints land on different sides.

[F1] Every edge of a finite simple graph is a two-element subset $\{u,v\}\subseteq V$ of distinct vertices. ([[def-finite-simple-graph]])

[F2] In a finite product of finite probability spaces the coordinate events are mutually independent, and for a set $J$ of coordinates the probability of the intersection is the product of the coordinate probabilities. ([[thm-product-probability-has-independent-coordinate-events]])

[F3] For every event $A$ one has $\mathbb E[\mathbf 1_A]=\mathbb P(A)$, and a finite sum of indicators counts the events containing the outcome. ([[lem-indicator-expectation-and-products]])

[F4] Expectation is linear for every finite family of real random variables, with no independence hypothesis. ([[thm-linearity-of-expectation]])

[F5] For the maximization problem Max-Cut the objective is the number of crossing edges; the optimum $\operatorname{OPT}_{\mathrm{MaxCut}}$ is a maximum over the finitely many placements, and a randomized algorithm whose expected value is at least half the optimum is the corresponding $1/2$-guarantee in value form. ([[def-optimization-problem-and-approximation-ratio]])

## Proof

**Proof technique:** direct.

1.1 Take one uniform two-point probability space per vertex and form their finite product; its outcomes are the maps $b:V\to\{0,1\}$ with the weights of [F2], so the bits $b_v$ are independent and each is $0$ or $1$ with probability $1/2$. Interpret side $b_v$ as the side of vertex $v$; this is exactly the stated independent uniform placement. [F2, given, construct]

2.1 For each edge $e=\{u,v\}$ define the indicator $X_e:=\mathbf 1_{b_u\ne b_v}$ of the event that $e$ crosses the cut, and put $X:=\sum_{e\in E}X_e$. At each outcome the sum counts precisely the crossing edges, so $X$ is the number of crossing edges. [F1, F3, step 1.1, construct]

2.2 Fix an edge $e=\{u,v\}$. The events $\{b_u=0\}$ and $\{b_v=1\}$ are coordinate events, so [F2] gives $\mathbb P[b_u=0,b_v=1]=\tfrac12\cdot\tfrac12=\tfrac14$; similarly $\mathbb P[b_u=1,b_v=0]=\tfrac14$. The two cases are disjoint and exhaust $\{b_u\ne b_v\}$, hence $\mathbb P[b_u\ne b_v]=\tfrac14+\tfrac14=\tfrac12$. [F2, step 1.1, algebra]

3.1 By [F3] and step 2.2, $\mathbb E[X_e]=\mathbb P[b_u\ne b_v]=\tfrac12$ for every edge $e$. [F3, step 2.2, algebra]

3.2 If $m=0$, then $X=\sum_{e\in\varnothing}X_e=0$ at every outcome by the empty-sum convention of [F3], so $\mathbb E[X]=0=m/2$; also every placement crosses all zero edges, so $\operatorname{OPT}_{\mathrm{MaxCut}}=0$, and both values are zero. [F3, F5, step 2.1, algebra]

4.1 By linearity [F4] applied to the finite family $(X_e)_{e\in E}$, $\mathbb E[X]=\sum_{e\in E}\mathbb E[X_e]=m\cdot\tfrac12=m/2$. The calculation uses only the individual probabilities of step 3.1; no independence between distinct edge indicators is assumed or needed. [F4, step 2.1, step 3.1, algebra]

5.1 Every placement yields a cut with at most $m$ crossing edges, since $G$ has $m$ edges in total; hence $\operatorname{OPT}_{\mathrm{MaxCut}}\le m$, and step 4.1 gives $\mathbb E[X]=m/2\ge\operatorname{OPT}_{\mathrm{MaxCut}}/2$. [F5, step 4.1, algebra]

6.1 Consequently the independent uniform placement produces a cut whose expected number of crossing edges is $m/2$, at least half of $\operatorname{OPT}_{\mathrm{MaxCut}}$ in the value sense of [F5], with the zero-edge case covered by step 3.2. [step 5.1, step 3.2] ∎
