---
id: cex-taking-out-an-unbounded-factor-needs-integrability
kind: counterexample
title: "Taking out an unbounded factor needs integrability"
status: published
origin: pipeline
deps: [thm-taking-out-what-is-known, def-conditional-expectation-as-an-ae-class, def-axiom-of-choice, def-integer-power, thm-geometric-series, def-probability-measure, def-dirac-measure, prop-dirac-measure-is-a-probability-measure, def-nonnegative-weighted-sum-of-measures, thm-nonnegative-weighted-sums-of-measures, thm-monotone-convergence-for-the-integral]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement refuted

Under the AC conditional-class convention, omitting product integrability from the signed $L^1$ taking-out rule can leave its left side undefined even when both factors are integrable and the product of the factor with the conditional mean is zero.

## Facts & Assumptions

**Given:** The proposed signed taking-out rule with product integrability omitted; a countable atomic witness will be constructed.

[F1] The Dirac set function is the indicator that the specified point belongs to an event. ([[def-dirac-measure]])

[F2] Each Dirac set function is a probability measure. ([[prop-dirac-measure-is-a-probability-measure]])

[F3] Countable nonnegative weighted sums are defined eventwise. ([[def-nonnegative-weighted-sum-of-measures]])

[F4] Nonnegative weighted sums of measures are measures. ([[thm-nonnegative-weighted-sums-of-measures]])

[F5] Integer powers at the positive base two are defined. ([[def-integer-power]])

[F6] For |r|<1 the geometric series from n=0 sums to 1/(1-r). ([[thm-geometric-series]])

[F7] A measure of total mass one is a probability measure. ([[def-probability-measure]])

[F8] The signed $L^1$ conditional expectation requires an integrable real input. ([[def-conditional-expectation-as-an-ae-class]])

[F9] The taking-out rule requires integrability of the input product. ([[thm-taking-out-what-is-known]])

[F10] Integrals on the countable atomic space are sums, by increasing partial sums for nonnegative functions. ([[thm-monotone-convergence-for-the-integral]])

## Counterexample

**Proof technique:** direct.

1.1 Let $\Omega=\mathbb N_{\ge1}\times\{-1,1\}$ with its power-set sigma-algebra. By [F5]–[F6], $S=\sum_{n\ge1}2^{-3n}=(1/8)/(1-1/8)=1/7$. Set $w_n=2^{-3n-1}/S$. These weights are positive finite numbers. [F5, F6]

2.1 Define $P=\sum_{n\ge1}w_n\delta_{(n,-1)}+\sum_{n\ge1}w_n\delta_{(n,1)}$. The Dirac probabilities [F1]–[F2] and weighted-sum construction [F3]–[F4] make this a measure on all subsets. Its mass is $2\sum_nw_n=S/S=1$, so [F7] makes it a probability measure. In particular each atom (n,s) has mass w_n. [step 1.1, F1, F2, F3, F4, F7]

3.1 Let $\mathcal G=\sigma((n,s)\mapsto n)$, $X(n,s)=s2^n$ and $Z(n,s)=2^{2n}$. Z is finite G-measurable, X is real measurable, and [F10] evaluates their absolute moments as sums. Using [F6], $E|X|=S^{-1}\sum_{n\ge1}2^{-2n}=7/3$ and $E|Z|=S^{-1}\sum_{n\ge1}2^{-n}=7$. Thus each is integrable. [step 1.1, step 2.1, F5, F6, F10]

4.1 Each G-event is a union of two-point fibres. On the nth fibre the X integral is $w_n(-2^n)+w_n2^n=0$; summing is legitimate by the finite absolute moment in step 3.1. Consequently the zero function has every defining event integral and is a version of $E[X\mid\mathcal G]$ by [F8]. Hence $ZE[X\mid\mathcal G]=0$ is integrable. [step 3.1, F8]

5.1 But $ZX(n,s)=s2^{3n}$. Its positive-part integral is $\sum_{n\ge1}w_n2^{3n}=\sum_{n\ge1}(2S)^{-1}=\infty$, and the negative-part integral has exactly the same value. These sums are nonnegative integrals by [F10]. Thus the signed expectation would require infinity minus infinity; ZX is not an $L^1$ input to [F8]. The left side $E[ZX\mid\mathcal G]$ of [F9] is undefined in that sense although the proposed right side is zero. This proves the failure when the product-integrability hypothesis is omitted. [step 2.1, step 4.1, F8, F9, F10] ∎

## Source notes

Durrett Theorem 4.1.14, printed pp.212–213, states the integrable-product hypothesis. The constructed atomic counterexample, its normalization and all moments are independently calculated here.
