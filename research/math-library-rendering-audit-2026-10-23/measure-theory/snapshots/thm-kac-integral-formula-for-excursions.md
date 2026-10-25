---
id: thm-kac-integral-formula-for-excursions
kind: theorem
title: Kac integral formula for excursions
deps: ["prop-ergodic-positive-sets-sweep-out-almost-every-point", "thm-continuity-from-above-for-measures", "thm-integrals-are-invariant-under-measure-preserving-maps", "prop-first-return-time-and-induced-map-are-measurable", "thm-monotone-convergence-for-the-integral", "thm-linearity-of-the-lebesgue-integral-on-l-one"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Sarig Theorem 1.7(3), pp.28–29
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

In an ergodic probability-preserving system, let $\mu(E)>0$. For nonnegative measurable $f:X\to[0,\infty]$, define $S_Ef(x)=\sum_{j=0}^{r_E(x)-1}f(T^jx)$ on E, using the infinite nonnegative sum when $r_E(x)=\infty$. Then $\int_E S_Ef\,d\mu=\int_Xf\,d\mu$. For integrable real or complex f the excursion is absolutely summable a.e. on E; setting it to zero on its measurable null failure set gives the same identity.

## Facts & Assumptions

[F1] In an ergodic probability system, almost every point visits every fixed positive-measure set at some positive time. [[prop-ergodic-positive-sets-sweep-out-almost-every-point]].

[F2] Pullback preserves nonnegative and integrable integrals. [[thm-integrals-are-invariant-under-measure-preserving-maps]].

[F3] Return-time tails and finite iterates are measurable. [[prop-first-return-time-and-induced-map-are-measurable]].

[F4] Nonnegative truncations and excursion partial sums pass through integrals. [[thm-monotone-convergence-for-the-integral]].

[F5] After absolute integrability is established, real/complex component integrals combine linearly. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F6] The measures of decreasing measurable sets of finite measure converge to the measure of their intersection. [[thm-continuity-from-above-for-measures]].

## Proof

**Given:** In an ergodic probability-preserving system, let $\mu(E)>0$. For nonnegative measurable $f:X\to[0,\infty]$, define $S_Ef(x)=\sum_{j=0}^{r_E(x)-1}f(T^jx)$ on E, using the infinite nonnegative sum when $r_E(x)=\infty$. Then $\int_E S_Ef\,d\mu=\int_Xf\,d\mu$. For integrable real or complex f the excursion is absolutely summable a.e. on E; setting it to zero on its measurable null failure set gives the same identity.

1.1 First let $0\le f\le M<\infty$. Put $A_N=\bigcap_{j=1}^{N}T^{-j}E^c$. Splitting the integral at E and pulling the complement part back gives $\int f=\int_E f+\int f\circ T\,\mathbf1_{A_1}$. More generally pulling back the part of $\int f\circ T^N\mathbf1_{A_N}$ outside E gives the next remainder, while its part on E is $\int_E f\circ T^N\mathbf1_{\{r_E>N\}}$. Thus for N>=1 the exact finite identity is $\int f=\int_E\sum_{j=0}^{N-1}f\circ T^j\mathbf1_{\{r_E>j\}}+\int f\circ T^N\mathbf1_{A_N}$. All products are defined piecewise as zero off their indicated sets. [F2, F3]

2.1 The sets $A_N$ decrease, and their intersection is the complement of $\bigcup_{j\ge1}T^{-j}E$. This intersection is null by [F1]. Since the ambient probability measure is finite, [F6] gives $\mu(A_N)\to0$. The remainder is bounded between zero and $M\mu(A_N)$ and hence vanishes. The excursion partial sums on E increase pointwise to S_Ef; monotone convergence proves the identity for bounded nonnegative f. [step 1.1, F1, F4, F6]

3.1 For arbitrary nonnegative f use $f_m=\min(f,m)$. These increase pointwise to f, and $S_Ef_m\uparrow S_Ef$: one inequality is termwise, and the other follows by first restricting to any finite number of excursion terms and then increasing m. Monotone convergence on X and E proves the equality, including infinite values. [step 2.1, F4]

4.1 For integrable real or complex f, apply step 3.1 to $|f|$: $\int_E S_E|f|=\int|f|<\infty$. Thus $S_E|f|$ is finite a.e. (otherwise its integral is at least $K$ times the positive measure of its infinity set for every K). On this conull set the excursion is absolutely summable. Apply step 3.1 to the positive and negative parts of the real and imaginary components, each bounded by $|f|$. Their excursion integrals are finite, so linearity yields the asserted identity without subtracting infinities. Null-set values have no effect. [step 3.1, F5] ∎
