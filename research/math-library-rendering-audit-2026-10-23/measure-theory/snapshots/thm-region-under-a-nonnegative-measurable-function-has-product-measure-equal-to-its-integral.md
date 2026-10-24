---
verification:
  repair: research/quantum-computing-algorithms-60-2026-10-15-owner/published-repairs/thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral.json
id: thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral
kind: theorem
title: "The region under a nonnegative measurable function is product-measurable and has measure equal to the integral"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-tonelli-theorem-for-sigma-finite-product-spaces, def-product-measure-on-sigma-finite-spaces, thm-arithmetic-and-lattice-operations-preserve-measurability, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-extended-reals, def-product-sigma-algebra-and-finite-product-sigma-algebras, thm-threshold-characterisations-of-real-and-extended-real-measurability, def-sigma-algebra]
proof_strategy: direct
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
$$ (\mu \times \lambda_1)(G_f)=\int_X f\,d\mu. $$

## Facts & Assumptions

**Given:** A sigma-finite measure space $(X,\mathcal A,\mu)$ and a measurable function $f : X \to [0,\infty]$.

[L1] Tonelli's theorem holds for the sigma-finite product $X \times \mathbb R$. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[L2] Arithmetic operations preserve measurability. ([[thm-arithmetic-and-lattice-operations-preserve-measurability]])

[L3] Extended-real reflection is defined everywhere; addition is defined except at opposite-infinity pairs. ([[def-extended-reals]])

[L4] Measurable rectangles belong to the product sigma-algebra, which is a sigma-algebra; strict real threshold sets test extended-real measurability. ([[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[def-sigma-algebra]], [[thm-threshold-characterisations-of-real-and-extended-real-measurability]])

## Proof

**Proof technique:** direct.

1.1 On $X\times\mathbb R$ define $F(x,t)=f(x)$ and $T(x,t)=t$. For every real $a$, their strict upper threshold sets are respectively $\{f>a\}\times\mathbb R$ and $X\times(a,\infty)$, so [L4] makes them measurable. By [L2], the reflection $-T$ is measurable. Since $T$ is finite at every point, $F+(-T)$ is defined everywhere by [L3], including when $F=+\infty$, and is measurable by the defined-sum clause of [L2]. For finite $f(x)$, real order arithmetic gives $f(x)+(-t)>0$ if and only if $t<f(x)$; for $f(x)=+\infty$, both conditions hold for every real $t$. Thus $$G_f=\{(x,t):T(x,t)\ge0\}\cap\{(x,t):(F+(-T))(x,t)>0\}$$ is product-measurable by [L4]. This uses only reflection and defined partial addition on the extended real line. [given, L2, L3, L4]

2.1 For fixed $x$, the section of $G_f$ is $$ (G_f)_x = [0,f(x)), $$ whose one-dimensional Lebesgue measure is exactly $f(x)$, including the cases $f(x)=0$ and $f(x)=\infty$. Applying [L1] to $\mathbf 1_{G_f}$ therefore gives $$ (\mu \times \lambda_1)(G_f) = \int_X \lambda_1((G_f)_x)\,d\mu = \int_X f\,d\mu. $$ This is the claimed area formula. [L1] ∎
