---
id: lem-mollified-biot-savart-kernel-is-smooth-globally-lipschitz
kind: lemma
title: The mollified Biot-Savart kernel is smooth and globally Lipschitz
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-mollified-biot-savart-vortex-kernel
  - def-countable-choice
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-mean-value-inequality-for-total-derivatives
proof_strategy: direct
axiom_use: Countable Choice is required by the smooth-convolution and polar-coordinate suppliers; no full Axiom of Choice is used.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: J. Liu and X. Xin, Convergence of Vortex Methods for Weak Solutions to the 2-D Euler Equations with Vortex Sheet Data
      url: https://sites.math.duke.edu/~jliu/pdf/Liu_Xin_CPAM_1995.pdf
    - title: Gregory R. Baker and Lan D. Pham, A Comparison of Blob Methods for Vortex Sheet Roll Up
      url: https://people.math.osu.edu/baker.27/blobs.pdf
---

## Statement

Assume Countable Choice and the mollifier of [[def-mollified-biot-savart-vortex-kernel]]. For every $\varepsilon>0$, $G_\varepsilon$ and $K_\varepsilon$ are $C^\infty$ on $\mathbb R^2$, and there is $C_\rho<\infty$ independent of $\varepsilon$ such that
$$\sup_{x\in\mathbb R^2}\|DK_\varepsilon(x)\|_{\mathrm{op}}\le C_\rho\varepsilon^{-2}.$$
Consequently $K_\varepsilon$ is globally Lipschitz with constant at most $C_\rho\varepsilon^{-2}$.

## Facts & Assumptions

**Given:** Countable Choice, the singular kernel $K(z)=z^\perp/(2\pi|z|^2)$, a smooth radial compactly supported unit-mass mollifier $\rho_\varepsilon$, and $\varepsilon>0$.

[A1] Assume Countable Choice for the smooth convolution and polar-coordinate suppliers ([[def-countable-choice]]).

[F1] Convolution of a locally integrable function with a smooth compactly supported mollifier is smooth, and derivatives pass to the mollifier ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]).

[F2] Polar coordinates give the integral of a nonnegative radial function on $\mathbb R^2$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F3] The linear scaling map $x\mapsto\varepsilon x$ scales Lebesgue measure by its determinant ([[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F4] A globally bounded derivative on the convex domain $\mathbb R^2$ gives a global Lipschitz bound ([[thm-mean-value-inequality-for-total-derivatives]]).

## Proof
1.1 By [F1], $G_\varepsilon$ and $K_\varepsilon$ are smooth and $DK_\varepsilon(x)=\int_{\mathbb R^2}K(x-z)D\rho_\varepsilon(z)dz,$ componentwise. The gradient $D\rho_\varepsilon$ is supported in $|z|\le\varepsilon$ and satisfies $\|D\rho_\varepsilon\|_\infty=\varepsilon^{-3}\|D\rho\|_\infty$. If $|x|\le2\varepsilon$, then $|x-z|\le3\varepsilon$. Since $|K(w)|\le(2\pi|w|)^{-1}$, polar integration [F2] gives $\int_{|w|\le3\varepsilon}|K(w)|dw\le C\varepsilon$. Thus $\|DK_\varepsilon(x)\|\le C_\rho\varepsilon^{-2}$ in this region. [A1, F1, F2, given, algebra]

2.1 If $|x|>2\varepsilon$ and $|z|\le\varepsilon$, then $|x-z|>|x|/2$ and $|K(x-z)|\le C/|x|$. Scaling [F3] gives $\|D\rho_\varepsilon\|_1=\varepsilon^{-1}\|D\rho\|_1$, so $\|DK_\varepsilon(x)\|\le \frac{C}{|x|}\|D\rho_\varepsilon\|_1\le C_\rho\varepsilon^{-2}.$ Combining this with step 1.1 yields the global derivative bound. [F1, F3, step 1.1, algebra]

3.1 Apply [F4] to the smooth map $K_\varepsilon$ along the segment between any $x,y\in\mathbb R^2$. The derivative bound in step 2.1 gives $|K_\varepsilon(x)-K_\varepsilon(y)|\le C_\rho\varepsilon^{-2}|x-y|.$ This is the claimed global Lipschitz property. [F4, step 2.1] ∎
