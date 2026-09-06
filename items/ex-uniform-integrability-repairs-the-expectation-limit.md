---
id: ex-uniform-integrability-repairs-the-expectation-limit
kind: example
title: "Uniform integrability repairs the expectation limit"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-uniform-integrability-characterizes-l1-convergence-under-probability-convergence, def-uniformly-integrable-family]
proof_strategy: direct
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Theorem 4.6.3"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

Let $X_n\to X$ in probability and suppose $|X_n|\le M$ almost surely for one finite constant $M$ and every $n$. Then $X_n\to X$ in $L^1$ and $\mathbb E X_n\to\mathbb E X$.

## Facts & Assumptions

**Given:** $X_n\to X$ in probability and $|X_n|\le M$ almost surely for all $n$.

[L1] Uniform integrability is the uniform decay of tail integrals ([[def-uniformly-integrable-family]]).

[L2] Under probability convergence, uniform integrability is equivalent to $L^1$ convergence ([[cor-uniform-integrability-characterizes-l1-convergence-under-probability-convergence]]).

## Verification

**Proof technique:** direct.

1.1 If $R>M$, then $|X_n|\mathbf1_{|X_n|>R}=0$ almost surely for every $n$. Hence the family $(X_n)$ is uniformly integrable by [L1]. [L1]

2.1 By [L2], $X_n\to X$ in $L^1$. Therefore $|\mathbb E X_n-\mathbb E X|\le\mathbb E|X_n-X|\to0$, proving convergence of expectations. [step 1.1, L2] ∎
