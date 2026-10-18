---
id: cex-it-continuous-optimal-reconstruction-need-not-have-a-density
kind: counterexample
title: "A Gaussian rate-distortion optimizer need not have a density"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-it-general-mutual-information
  - def-it-general-rate-distortion-function
  - def-measure-with-density
  - thm-it-gaussian-squared-error-rate-distortion
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC is assumed by the standard-Borel Gaussian rate-distortion theorem."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Robert M. Gray, Source Coding Theory, first edition"
      url: "https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf"
      locator: "Chapter 4, §§4.5–4.6: continuous-alphabet rate-distortion and Gaussian squared error."
    - title: "MIT OpenCourseWare 6.441, Chapter 25: Evaluating R(D)"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/5721b7df786b416dadad7c7bb3364d00_MIT6_441S16_chapter_25.pdf"
      locator: "§25.1.2, PDF pp. 2–4 / printed pp. 256–258: Gaussian rate-distortion formula."
---

## Statement

Let $X\sim N(0,\sigma^2)$ with $\sigma^2>0$, use squared-error distortion, and choose $D\ge\sigma^2$. The constant reconstruction $Y=0$ attains the Gaussian information rate-distortion value zero, but its law $\delta_0$ has no density with respect to Lebesgue measure.

## Facts & Assumptions

**Given:** AC, a nondegenerate centered Gaussian source, squared-error distortion, and $D\ge\sigma^2$.

[A1] [[def-axiom-of-choice]]: the Gaussian rate-distortion supplier assumes AC.

[F1] [[def-it-general-rate-distortion-function]]: the information rate is the infimum of mutual information over joint laws meeting the expected-distortion constraint.

[F2] [[def-it-general-mutual-information]]: mutual information is the joint-law KL from the product of the marginals.

[F3] [[thm-it-gaussian-squared-error-rate-distortion]]: for $D\ge\sigma^2$, the Gaussian squared-error information rate is zero.

[F4] [[def-measure-with-density]]: having a density with respect to Lebesgue measure requires absolute continuity with respect to that measure.

## Proof




1.1 The constant choice $Y=0$ has expected distortion $\mathbb E X^2=\sigma^2\le D$. Since $Y$ is constant, $P_{XY}=P_X\otimes\delta_0=P_X\otimes P_Y$, so [F2] gives mutual information zero. By [F3], zero is the minimum rate; hence this reconstruction is optimal. [A1, F1, F2, F3, given, construct]

2.1 The singleton $\{0\}$ has Lebesgue measure zero but $\delta_0(\{0\})=1$. Thus $\delta_0$ is not absolutely continuous with respect to Lebesgue measure and, by [F4], cannot have a Lebesgue density. [F4, step 1.1, given, algebra] ∎
