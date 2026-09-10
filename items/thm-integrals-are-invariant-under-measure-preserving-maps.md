---
id: thm-integrals-are-invariant-under-measure-preserving-maps
kind: theorem
title: Integral invariance under measure-preserving maps
deps: [def-measure-preserving-transformation-and-system, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function,
  thm-monotone-convergence-for-the-integral, thm-linearity-of-the-lebesgue-integral-on-l-one]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: E–W Lemma 2.6, pp.15–16
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
  scraped: []
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

If $T$ preserves $\mu$ and $f:X\to[0,\infty]$ is measurable, then $\int f\circ T\,d\mu=\int f\,d\mu$, allowing infinity. If $f$ is integrable real or complex valued, $f\circ T$ is integrable and the same equality holds. Conversely, for a measurable self-map, equality for every measurable indicator implies measure preservation.

## Facts & Assumptions

[F1] Nonnegative measurable functions admit increasing simple approximations [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]].

[F2] Increasing nonnegative measurable functions have increasing integrals with the expected limit [[thm-monotone-convergence-for-the-integral]].

[F3] The integral is complex-linear on integrable functions [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 For $E\in\mathcal A$, $\mathbf1_E\circ T=\mathbf1_{T^{-1}E}$, hence its integral is $\mu(T^{-1}E)=\mu(E)$. A nonnegative simple function written over disjoint fibers has integral equal to the sum of coefficient times fiber measure, so the identity holds for every such function, also when the sum is infinite in value. [given]

2.1 For nonnegative measurable $f$, take $s_n\uparrow f$ as supplied by simple approximation. Then $s_n\circ T\uparrow f\circ T$ measurably. Integral monotone convergence on both sides gives $\int f\circ T=\lim_n\int s_n\circ T=\lim_n\int s_n=\int f$. [F1, F2, step 1.1]

3.1 For integrable $f$, applying step 2.1 to $|f|$ proves $\int|f\circ T|=\int|f|<\infty$. Apply that step to the positive and negative parts of each real component. Subtract their finite integrals and combine the real and imaginary parts by linearity to obtain the asserted equality. [F3, step 2.1]

4.1 Conversely the indicator identity is exactly $\mu(T^{-1}E)=\mu(E)$ for each measurable $E$. Thus it is measure preservation. [step 1.1, given] ∎
