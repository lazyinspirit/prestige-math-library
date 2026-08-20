---
id: prop-semicontinuity-agrees-on-the-real-line
kind: proposition
title: "Euclidean semicontinuity agrees with the published real-line definition"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-semicontinuity-on-euclidean-subsets, def-semicontinuity, lem-real-and-metric-notions-agree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lectures 2 and 4"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
pipeline_run: null
---

## Statement

Under the standard identification $\mathbb R^1\cong\mathbb R$, a real-valued function on $A\subseteq\mathbb R$ is upper or lower semicontinuous according to [[def-semicontinuity-on-euclidean-subsets]] if and only if it is upper or lower semicontinuous according to [[def-semicontinuity]].

## Facts & Assumptions

**Given:** A subset $A$ of the real line and a function $f:A\to\mathbb R$. The usual real and metric neighbourhoods agree [[lem-real-and-metric-notions-agree]].

[F1] In the Euclidean definition, $f$ is upper semicontinuous at $a$ when for every $\varepsilon>0$ there is $\delta>0$ such that $f(x)<f(a)+\varepsilon$ for every $x\in A\cap B_2(a,\delta)$ ([[def-semicontinuity-on-euclidean-subsets]]).

[F2] In the real-line definition, $f$ is upper semicontinuous at $c$ when for every real $\varepsilon>0$ there is a real $\delta>0$ giving the same inequality on $A\cap N_\delta(c)$; the lower clause reverses the one-sided bound ([[def-semicontinuity]]).

## Proof

**Proof technique:** direct.

1.1 Under $\mathbb R^1\cong\mathbb R$, one has $B_2(c,\delta)=N_\delta(c)$ for every centre and positive radius. Substitution makes the upper clauses [F1] and [F2] identical in both directions, and the same set identity makes the two lower clauses identical. [F1, F2, given, algebra]

2.1 Therefore the pointwise notions agree at every point of $A$, including relative endpoints and isolated points, and hence the on-set notions agree; on the empty set both are vacuous. [step 1.1] ∎
