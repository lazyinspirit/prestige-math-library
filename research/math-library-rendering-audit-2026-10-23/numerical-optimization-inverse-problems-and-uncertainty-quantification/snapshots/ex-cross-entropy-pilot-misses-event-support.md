---
id: ex-cross-entropy-pilot-misses-event-support
kind: example
title: A pilot with no rare-event hit returns failure
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-cross-entropy-pilot-production
  - thm-cross-entropy-production-unbiased-given-pilot
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Patrick Laub, Algorithms for Rare Event Estimation, Short Course, Lecture 2, Cross-Entropy Method"
      url: "https://laub.au/rare-events/slides/L2.slides.html"
    - title: "Gino Biondini, An Introduction to Rare Event Simulation and Importance Sampling, Handbook of Statistics 33, Chapter 2, §5"
      url: "https://www.math.buffalo.edu/~biondini/papers/handbookstatistics2015v33chapter2.pdf"
---

## Example

Let $P$ be Bernoulli on $\{0,1\}$ with $P(\{1\})=1/10$, set $A=\{1\}$, and use the one-member proposal family $q=P$. A pilot of size $m\ge1$ misses $A$ with positive probability even though the target probability is positive.

## Facts & Assumptions

**Given:** $Y_1,\ldots,Y_m$ are IID Bernoulli$(1/10)$, the target event is $A=\{1\}$, and the pilot rule in [[alg-cross-entropy-pilot-production]] is used.

[F1] [[alg-cross-entropy-pilot-production]]: If no pilot sample lies in $A$, the algorithm returns the status pilot-no-hit.

[F2] [[thm-cross-entropy-production-unbiased-given-pilot]]: Conditional unbiasedness applies only after a successful pilot and admissible production proposal.

## Verification

**Proof technique:** direct.

1.1 By the IID assumption, $ P(Y_1\notin A,\ldots,Y_m\notin A)=\prod_{j=1}^mP(Y_j=0)=(9/10)^m>0. $ Also $P(A)=1/10>0$. [given, algebra]

2.1 On this positive-probability pilot event, [F1] returns pilot-no-hit, so no fitted proposal or production estimate is returned. The positive target probability therefore does not imply pilot success; [F2] makes no production-unbiasedness assertion on this failure branch. [F1, F2, step 1.1, given] ∎
