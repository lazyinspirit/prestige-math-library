---
id: ex-strong-law-for-empirical-indicator-averages
kind: example
title: Strong law for empirical indicator averages
deps: ["lem-measurable-functions-preserve-independence", "cor-expectation-of-an-indicator-is-probability", "thm-kolmogorov-iid-l1-strong-law", "thm-finite-and-countable-subadditivity-of-measures"]
sources:
  references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Example

For IID random elements $(X_n)$ and a fixed measurable A, $n^{-1}\sum_{k\le n}\mathbf1_A(X_k)\to P(X_1\in A)$ almost surely. A single conull event works for any specified countable class of sets A.

## Facts & Assumptions

[F1] [[lem-measurable-functions-preserve-independence]]: Let $(X_i)_{i\in I}$ be an independent family of random elements
$X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$. For each $i$, let
$g_i:(S_i,\Sigma_i)\to(T_i,\mathcal T_i)$ be measurable. Then the family
$(g_i\circ X_i)_{i\in I}$ is independent.

[F2] [[cor-expectation-of-an-indicator-is-probability]]: Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space and let $A\in\mathcal F$.
Then the indicator $\mathbf 1_A$ satisfies
$$\mathbb E[\mathbf 1_A]=\mathbb P(A).$$

[F3] [[thm-kolmogorov-iid-l1-strong-law]]: For IID real $(X_n)_{n\ge1}$ with $\mathbb E|X_1|<\infty$, $S_n/n\to\mu=\mathbb EX_1$ almost surely.

[F4] [[thm-finite-and-countable-subadditivity-of-measures]]: Let $\mu$ be a measure and let $(E_k)_{k\in\mathbb N}$ be measurable. Then

$$\mu\left(\bigcup_{k\in\mathbb N}E_k\right)\le\sum_{k=0}^{\infty}\mu(E_k).$$

For every $m\in\mathbb N$ one also has

$$\mu\left(\bigcup_{k<m}E_k\right)\le\sum_{k<m}\mu(E_k),$$

including $m=0$, where both sides are $0$.

## Verification

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 The measurable maps $x\mapsto\mathbf1_A(x)$ take values in {0,1}. F1 preserves the IID property, and F2 computes their expectation as $p_A=P(X_1\in A)$; their absolute expectations are at most one. [F1, F2]

2.1 F3 applied to step 1.1 gives the fixed-set limit. For a specified countable class, let N_A be the failure event for that limit. F4 gives $P(\bigcup_A N_A)\le\sum_A0=0$. Outside this union every stated frequency converges simultaneously. [F3, F4, step 1.1] ∎
