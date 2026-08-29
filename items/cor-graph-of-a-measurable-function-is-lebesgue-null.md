---
id: cor-graph-of-a-measurable-function-is-lebesgue-null
kind: corollary
title: "The graph of a measurable function R^n to R is Lebesgue null"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral, thm-tonelli-theorem-for-sigma-finite-product-spaces, prop-countable-subsets-of-rn-are-lebesgue-null, thm-arithmetic-and-lattice-operations-preserve-measurability, def-countable-choice]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Exercise 50"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $n \ge 1$
and let $f : \mathbb R^n \to \mathbb R$ be Lebesgue measurable.
Then its graph
$$\Gamma_f := \{(x,t) \in \mathbb R^n \times \mathbb R : t=f(x)\}$$
is Lebesgue measurable and has $(n+1)$-dimensional Lebesgue measure zero.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a positive integer $n$, and a Lebesgue
measurable function $f : \mathbb R^n \to \mathbb R$.

[L1] Arithmetic operations preserve measurability. ([[thm-arithmetic-and-lattice-operations-preserve-measurability]])

[L2] Tonelli's theorem holds on sigma-finite products. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[L3] Assuming countable choice, countable subsets of Euclidean space are
Lebesgue null. ([[prop-countable-subsets-of-rn-are-lebesgue-null]])

## Proof

**Proof technique:** direct.

1.1 The function $H(x,t):=t-f(x)$ is measurable by [L1], so $$\Gamma_f = H^{-1}(\{0\})$$ is measurable. [L1]

2.1 For each $x \in \mathbb R^n$, the section $(\Gamma_f)_x$ is the singleton $\{f(x)\}$, which is countable and therefore Lebesgue null by [L3]. Applying [L2] to $\mathbf 1_{\Gamma_f}$ yields $$\lambda_{n+1}(\Gamma_f) = \int_{\mathbb R^n} \lambda_1((\Gamma_f)_x)\,d\lambda_n = \int_{\mathbb R^n} 0\,d\lambda_n = 0.$$ Hence the graph is Lebesgue null. [L2, L3] ∎
