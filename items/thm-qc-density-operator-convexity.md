---
id: thm-qc-density-operator-convexity
kind: theorem
title: The set of density operators is convex
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 5
deps: [def-qc-ensemble-and-purification, def-qc-density-operator, thm-qc-ensemble-barycenter-is-density]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §2.1.2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles, §2.5.1"
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §15.1"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

For a nonzero finite-dimensional complex-inner-product space $H$, the set of density operators on $H$ is convex: if $\rho,\sigma$ are density operators and $t\in[0,1]$, then $t\rho+(1-t)\sigma$ is a density operator.

## Facts & Assumptions

**Given:** Density operators $\rho,\sigma$ on $H$ and a real number $t$ with $0\le t\le1$.

[F1] [[def-qc-density-operator]]: a density operator is a non-negative endomorphism with trace one.

[F2] [[def-qc-ensemble-and-purification]]: a finite ensemble has finite nonnegative weights summing to one and density-operator components, and its barycenter is their weighted sum.

[F3] [[thm-qc-ensemble-barycenter-is-density]]: the barycenter of a finite ensemble of density operators is a density operator, including zero-weight components.

## Proof

1.1 The pair of weights $(t,1-t)$ is nonnegative and sums to one for every $t\in[0,1]$, including $t=0$ and $t=1$. Since $\rho,\sigma$ are density operators by [F1], $(t,\rho),(1-t,\sigma)$ is a finite ensemble by [F2]. [given, F1, F2, algebra]

2.1 Its barycenter is $t\rho+(1-t)\sigma$ by [F2], and is a density operator by [F3]. Thus every segment between two density operators lies in the set, so the set is convex. [given, F2, F3, step 1.1, algebra] ∎
