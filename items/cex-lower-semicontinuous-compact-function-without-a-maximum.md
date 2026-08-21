---
id: cex-lower-semicontinuous-compact-function-without-a-maximum
kind: counterexample
title: "A lower semicontinuous function on $[0,1]$ with no maximum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-semicontinuity-on-euclidean-subsets, prop-semicontinuity-agrees-on-the-real-line, thm-euclidean-semicontinuity-level-set-characterisations, thm-euclidean-semicontinuous-extreme-value-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lectures 2 and 5"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
pipeline_run: null
---

## Statement refuted

Every lower semicontinuous real-valued function on a nonempty compact set attains both a minimum and a maximum.

## Facts & Assumptions

**Given:** Define $g:[0,1]\to\mathbb R$ by $g(0)=-1$ and $g(x)=-x$ for $0<x\le1$, with the one-dimensional convention identified by [[def-semicontinuity-on-euclidean-subsets]], [[prop-semicontinuity-agrees-on-the-real-line]].

[L1] Lower semicontinuity is equivalent to relative openness of every strict superlevel set and to relative closedness of every weak sublevel set ([[thm-euclidean-semicontinuity-level-set-characterisations]]).

[L2] Every lower semicontinuous real-valued function on a nonempty compact Euclidean set is bounded below and attains a minimum ([[thm-euclidean-semicontinuous-extreme-value-theorem]]).

## Counterexample

**Proof technique:** direct.

1.1 The weak sublevel $\{g\le\alpha\}$ is empty for $\alpha<-1$, equals $\{0,1\}$ at $\alpha=-1$, equals $\{0\}\cup[-\alpha,1]$ for $-1<\alpha<0$, and is all of $[0,1]$ for $\alpha\ge0$. Each is relatively closed, so [L1] makes $g$ lower semicontinuous. [L1, given, algebra]

2.1 Every value of $g$ is negative, but $g(1/N)=-1/N$ approaches zero through positive natural $N$. Hence $\sup g([0,1])=0$ and the supremum is not attained, so $g$ has no maximum. [step 1.1, algebra]

3.1 The function does attain its minimum $-1$ at zero, as [L2] requires. It is only the unsupported opposite extremum that fails. [step 2.1, L2] ∎
