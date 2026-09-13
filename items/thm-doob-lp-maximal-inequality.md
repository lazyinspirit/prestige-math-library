---
id: thm-doob-lp-maximal-inequality
kind: theorem
title: Doob Lp maximal inequality
status: draft
origin: pipeline
deps: [thm-doob-l1-maximal-inequality, thm-layer-cake-formula-for-l-p-powers, thm-holder-inequality-for-integrals, thm-monotone-convergence-for-the-integral, cor-absolute-value-and-powers-of-a-martingale-are-submartingales, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, Theorem 2.44 and proof, pp. 22–23", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. Let $N\in\mathbb N_0$, $p>1$, and $q=p/(p-1)$. If $X=(X_n)_{n\ge0}$ is a nonnegative submartingale and $X_N\in L^p$, then
$$\left\|\max_{0\le k\le N}X_k\right\|_p\le q\|X_N\|_p.$$
In particular, for a martingale $M$ with $M_N\in L^p$,
$$\left\|\max_{0\le k\le N}|M_k|\right\|_p\le q\|M_N\|_p.$$

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-doob-l1-maximal-inequality]] gives the refined level inequality with $X_N$ restricted to the crossing event.

[F2] [[thm-layer-cake-formula-for-l-p-powers]] converts truncated $p$th moments to tail integrals.

[F3] [[thm-holder-inequality-for-integrals]] bounds the mixed terminal/maximal moment.

[F4] [[thm-monotone-convergence-for-the-integral]] removes truncation.

[F5] [[cor-absolute-value-and-powers-of-a-martingale-are-submartingales]] applies the result to $|M|$.

[F6] [[def-axiom-of-choice]] is inherited from F1 and F5 through conditional expectation.

## Proof

1.1 Put $X_N^*=\max_{k\le N}X_k$ and fix $r>0$. Layer cake and F1 give $$\begin{aligned} \mathbb E(X_N^*\wedge r)^p &=\int_0^r p\lambda^{p-1}\mathbb P(X_N^*\ge\lambda)\,d\lambda\\ &\le\int_0^r p\lambda^{p-2}\mathbb E[X_N1_{\{X_N^*\ge\lambda\}}]\,d\lambda\\ &=q\,\mathbb E\!\left[X_N(X_N^*\wedge r)^{p-1}\right]. \end{aligned}$$ The last identity follows by integrating $p\lambda^{p-2}$ up to $X_N^*\wedge r$. [F1, F2]

2.1 Hölder bounds the last expression by $$q\|X_N\|_p\|X_N^*\wedge r\|_p^{p-1}.$$ If the truncated norm is nonzero, divide by its $(p-1)$st power; if it is zero, the desired inequality is immediate. Thus $\|X_N^*\wedge r\|_p\le q\|X_N\|_p$. [F3, step 1.1]

3.1 Let $r\uparrow\infty$. F4 yields $\|X_N^*\|_p\le q\|X_N\|_p$, including the case where a priori the maximal moment might be infinite. [F4, step 2.1]

4.1 If $M$ is a martingale, $|M_k|$ is a nonnegative submartingale by F5 and its terminal value is $|M_N|$. Applying step 3.1 proves the second display. AC is exactly the inherited dependence in F6. [F5, F6] ∎
