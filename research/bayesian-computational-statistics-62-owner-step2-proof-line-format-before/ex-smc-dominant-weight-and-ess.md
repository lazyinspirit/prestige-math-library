---
id: ex-smc-dominant-weight-and-ess
kind: example
title: "A dominant particle weight and the effective sample size"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-smc-clt-function-classes-and-variance-recursions
  - def-importance-weight-effective-sample-size
proof_strategy: direct
axiom_use: "No choice axiom is used; the finite two-state weight and ESS calculations are explicit."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Simo Särkkä and Lennart Svensson, Bayesian Filtering and Smoothing, 2nd ed., §§11.2, 11.4–11.5"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
---

## Example

Use proposal probabilities $q(A)=1/4$, $q(B)=3/4$ and target probabilities $\pi(A)=99/100$, $\pi(B)=1/100$. Compute the weight-based effective sample size for four proposal draws containing one $A$ and three $B$ values.

## Facts & Assumptions

**Given:** The proposal, target, and observed finite draw described in the Example.

[F1] [[def-smc-clt-function-classes-and-variance-recursions]]: Importance weights are Radon–Nikodym derivatives of target law with respect to proposal law and have proposal mean one.

[F2] [[def-importance-weight-effective-sample-size]]: For nonnegative weights with positive sum, $\operatorname{ESS}_w=(\sum_iw_i)^2/\sum_iw_i^2$; it depends only on observed weights.

## Verification

**Given:** $q(A)=1/4$, $q(B)=3/4$, $\pi(A)=99/100$, and one observed $A$ with three observed $B$ values.

1.1 The proposal-to-target ratios are $w(A)=\pi(A)/q(A)=99/25$ and $w(B)=\pi(B)/q(B)=1/75$, and $q(A)w(A)+q(B)w(B)=1$. The event of exactly one $A$ in four IID proposal draws has probability $\binom41(1/4)(3/4)^3=27/64>0$. [F1, given, algebra]

1.2 The four unnormalized weights sum to $99/25+3/75=4$, so their normalized values are $99/100,1/300,1/300,1/300$. By [F2],
$$\operatorname{ESS}_w=\left((99/100)^2+3(1/300)^2\right)^{-1}=\frac{7500}{7351}\approx1.0203.$$
The first particle carries $99\%$ of the observed weight, which explains the low ESS; the calculation concerns weight concentration only. [F2, step 1.1, given, algebra] ∎
