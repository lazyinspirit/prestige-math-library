---
id: thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral
kind: theorem
title: "The region under a nonnegative measurable function is product-measurable and has measure equal to the integral"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-tonelli-theorem-for-sigma-finite-product-spaces, def-product-measure-on-sigma-finite-spaces, thm-arithmetic-and-lattice-operations-preserve-measurability, def-lebesgue-measure-and-the-lebesgue-sigma-algebra]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Exercise 50"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a sigma-finite measure space, let $\lambda_1$ be
Lebesgue measure on $\mathbb R$, and let $f : X \to [0,\infty]$ be measurable.
Then

$$G_f := \{(x,t) \in X \times \mathbb R : 0 \le t < f(x)\}$$

belongs to $\mathcal A \otimes \mathcal L(\mathbb R)$ and
$$
(\mu \times \lambda_1)(G_f)=\int_X f\,d\mu.
$$

## Facts & Assumptions

**Given:** A sigma-finite measure space $(X,\mathcal A,\mu)$ and a measurable function $f : X \to [0,\infty]$.

[L1] Tonelli's theorem holds for the sigma-finite product $X \times \mathbb R$. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[L2] Arithmetic operations preserve measurability. ([[thm-arithmetic-and-lattice-operations-preserve-measurability]])

## Proof

**Proof technique:** direct.

1.1 The function $(x,t) \mapsto f(x)-t$ is measurable by [L2], so $$ G_f = \{(x,t): t \ge 0\} \cap \{(x,t): f(x)-t>0\} $$ is product-measurable. [L2]

2.1 For fixed $x$, the section of $G_f$ is $$ (G_f)_x = [0,f(x)), $$ whose one-dimensional Lebesgue measure is exactly $f(x)$, including the cases $f(x)=0$ and $f(x)=\infty$. Applying [L1] to $\mathbf 1_{G_f}$ therefore gives $$ (\mu \times \lambda_1)(G_f) = \int_X \lambda_1((G_f)_x)\,d\mu = \int_X f\,d\mu. $$ This is the claimed area formula. [L1] ∎
