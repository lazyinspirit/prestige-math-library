---
id: cex-a-non-locally-finite-sum-can-be-discontinuous
kind: counterexample
title: "Without local finiteness, a pointwise finite sum of continuous functions can be discontinuous"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [lem-locally-finite-sums-are-continuous, lem-algebra-of-continuous-real-maps-on-a-space]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
pipeline_run: null
---

## Statement refuted

Every pointwise finite sum of continuous real-valued functions is continuous.

## Facts & Assumptions

**Given:** For $n\ge1$, the interval endpoints $a_n=1/(n+1)$, $b_n=1/n$, midpoint $c_n=(a_n+b_n)/2$, and radius $r_n=(b_n-a_n)/2$.

[L1] Maxima, absolute values, and finite algebraic combinations of continuous real functions are continuous ([[lem-algebra-of-continuous-real-maps-on-a-space]]).

[L2] A locally finite family has a continuous pointwise sum ([[lem-locally-finite-sums-are-continuous]]).

## Counterexample

**Proof technique:** direct.

1.1 Define $f_n(x)=\max\{0,1-|x-c_n|/r_n\}$. Each $f_n$ is continuous by [L1], is supported in $[a_n,b_n]$, and satisfies $f_n(c_n)=1$. [L1, construct]

2.1 The cozero sets $(a_n,b_n)$ are pairwise disjoint, so $f=\sum_{n\ge1}f_n$ is pointwise finite and $f(0)=0$. [step 1.1]

3.1 Since $c_n\to0$ while $f(c_n)=1$ for every $n$, $f$ is not continuous at $0$. [step 1.1, step 2.1]

4.1 The cozero family is not locally finite at $0$, so this example does not contradict [L2] and refutes the displayed pointwise-finite claim. [L2, step 2.1, step 3.1] ∎
