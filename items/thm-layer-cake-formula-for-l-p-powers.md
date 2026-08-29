---
id: thm-layer-cake-formula-for-l-p-powers
kind: theorem
title: "For 0 < p < infinity, the layer-cake formula computes the integral of |f|^p from the distribution function"
status: published
origin: session
landmark: true
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-distribution-function-of-absolute-value, def-real-power, thm-real-power-continuity-and-derivatives, thm-ftc-second-part, thm-monotone-convergence-for-the-integral, thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Proposition 6.24"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space, let $f : X \to \mathbb C$ be
measurable, and let $0<p<\infty$. Then
$$\int_X |f|^p\,d\mu = p\int_0^\infty t^{p-1}\mu(\{|f|>t\})\,dt = p\int_0^\infty t^{p-1}A_f(t)\,dt,$$
where either side may be $+\infty$.

## Facts & Assumptions

**Given:** A measurable function $f : X \to \mathbb C$ and a real number $0<p<\infty$.

[L1] The distribution function is $A_f(t)=\mu(\{|f|>t\})$. ([[def-distribution-function-of-absolute-value]])

[L2] The derivative of $t^p$ is $p t^{p-1}$ on $(0,\infty)$, and the fundamental theorem of calculus recovers $a^p$ by integrating that derivative. ([[thm-real-power-continuity-and-derivatives]], [[thm-ftc-second-part]])

[L3] Every nonnegative measurable function admits increasing simple approximations. ([[thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]])

[L4] Monotone convergence passes increasing limits through the integral. ([[thm-monotone-convergence-for-the-integral]])

## Proof

**Proof technique:** direct.

1.1 Fix $a \ge 0$. By [L2], $$ a^p = \int_0^a p t^{p-1}\,dt = \int_0^\infty p t^{p-1}\mathbf 1_{\{t<a\}}\,dt. $$ [L2]

2.1 Let $s=\sum_{j=1}^m a_j \mathbf 1_{E_j}$ be a nonnegative simple function, with the sets $E_j$ pairwise disjoint and the coefficients $a_j \ge 0$. Then $$ \int_X s^p\,d\mu = \sum_{j=1}^m a_j^p \mu(E_j). $$ Using step 1.1 for each coefficient and exchanging the resulting finite sum with the real integral gives $$ \int_X s^p\,d\mu = p\int_0^\infty t^{p-1}\mu(\{s>t\})\,dt. $$ [step 1.1, algebra]

3.1 By [L3], choose simple functions $s_n \uparrow |f|$. Then $s_n^p \uparrow |f|^p$, and for each $t \ge 0$ one has $\mathbf 1_{\{s_n>t\}} \uparrow \mathbf 1_{\{|f|>t\}}$, hence $\mu(\{s_n>t\}) \uparrow \mu(\{|f|>t\})=A_f(t)$ by [L1]. Applying [L4] first on $X$ and then on $(0,\infty)$ to the identities from step 2.1 yields $$ \int_X |f|^p\,d\mu = p\int_0^\infty t^{p-1}\mu(\{|f|>t\})\,dt = p\int_0^\infty t^{p-1}A_f(t)\,dt. $$ [L1, L3, L4, step 2.1] ∎
