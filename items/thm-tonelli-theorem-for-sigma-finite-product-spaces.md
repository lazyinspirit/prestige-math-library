---
id: thm-tonelli-theorem-for-sigma-finite-product-spaces
kind: theorem
title: "Tonelli's theorem for nonnegative measurable functions on a sigma-finite product"
status: draft
origin: session
landmark: true
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-sections-of-product-measurable-functions-are-measurable, thm-iterated-section-measures-agree-on-product-measurable-sets, thm-nonnegative-measurable-functions-admit-increasing-simple-approximations, thm-monotone-convergence-for-the-integral]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Theorem 1.7.18"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.37"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$ be sigma-finite measure
spaces, and let $f : X \times Y \to [0,\infty]$ be product-measurable. Then
$x \mapsto \int_Y f_x\,d\nu$ and $y \mapsto \int_X f^y\,d\mu$ are measurable,
and

$$\int_{X \times Y} f\,d(\mu \times \nu) = \int_X \left(\int_Y f_x\,d\nu\right)d\mu = \int_Y \left(\int_X f^y\,d\mu\right)d\nu.$$

## Facts & Assumptions

**Given:** Sigma-finite measure spaces $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$, and a product-measurable function $f : X \times Y \to [0,\infty]$.

[L1] Sections of a product-measurable function are measurable. ([[thm-sections-of-product-measurable-functions-are-measurable]])

[L2] For a measurable set $E$, the indicator function satisfies $$\int_{X \times Y} \mathbf 1_E\,d(\mu \times \nu) = \int_X \nu(E_x)\,d\mu = \int_Y \mu(E^y)\,d\nu.$$ ([[thm-iterated-section-measures-agree-on-product-measurable-sets]])

[L3] Every nonnegative measurable function admits an increasing sequence of nonnegative simple functions converging pointwise to it. ([[thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]])

[L4] Monotone convergence passes increasing limits through the integral. ([[thm-monotone-convergence-for-the-integral]])

## Proof

**Proof technique:** direct.

1.1 If $s$ is a nonnegative simple function, write $s=\sum_{j=1}^m c_j\mathbf 1_{E_j}$ with $c_j \ge 0$ and measurable sets $E_j$. Applying [L2] to each indicator $\mathbf 1_{E_j}$ and summing yields $$\int s\,d(\mu \times \nu) = \int_X \left(\int_Y s_x\,d\nu\right)d\mu = \int_Y \left(\int_X s^y\,d\mu\right)d\nu.$$ The inner integral functions are measurable because the same is true for each $\mathbf 1_{E_j}$ and simple combinations preserve measurability. [L2]

2.1 Choose simple functions $s_n \uparrow f$ by [L3]. Then for each $x$ and $y$ one has $(s_n)_x \uparrow f_x$ and $(s_n)^y \uparrow f^y$, so [L4] gives $$\int_Y (s_n)_x\,d\nu \uparrow \int_Y f_x\,d\nu,\qquad \int_X (s_n)^y\,d\mu \uparrow \int_X f^y\,d\mu.$$ Applying [L4] once more to the equalities of step 1.1 yields the stated measurability and the equality of all three integrals. [L1, L3, L4, step 1.1] ∎
