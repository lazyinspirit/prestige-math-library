---
id: lem-it-gaussian-reference-kernel-information-lower-bound
kind: lemma
title: "Gaussian reference-kernel mutual-information lower bound"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-it-general-mutual-information
  - def-kullback-leibler-divergence
  - def-standard-borel-space
  - def-standard-normal-and-normal-laws
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-general-kl-chain-rule-for-standard-borel-kernels
  - thm-kullback-leibler-is-nonnegative
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC is used by the KL definition, the standard-Borel conditional-law chain rule, and the normal-law construction; the lower-bound argument has no additional choice use."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Robert M. Gray, Source Coding Theory, first edition"
      url: "https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf"
      locator: "Chapter 4, §4.6, printed pp. 99–102: Gaussian squared-error Shannon lower bound."
    - title: "MIT OpenCourseWare 6.441, Chapter 25: Evaluating R(D)"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/5721b7df786b416dadad7c7bb3364d00_MIT6_441S16_chapter_25.pdf"
      locator: "§25.1.2, PDF pp. 2–4 / printed pp. 256–258: scalar Gaussian rate-distortion converse."
---

## Statement

Assume AC. Let \(X\sim N(0,\sigma^2)\) with \(\sigma^2>0\), let \(Y\) be any real-valued reconstruction jointly distributed with \(X\), and suppose \(0<D<\sigma^2\) and \(\delta:=\mathbb E(X-Y)^2\le D\). Then

$$I_{\mathrm{nat}}(X;Y)\ge\frac12\ln\frac{\sigma^2}{D}.$$

No density for \(Y\), conditional differential entropy, or subtraction of potentially infinite entropies is assumed.

## Facts & Assumptions

**Given:** AC, \(X\sim N(0,\sigma^2)\), \(Y\in\mathbb R\), \(0<D<\sigma^2\), and \(\delta=\mathbb E(X-Y)^2\le D\).

[A1] [[def-axiom-of-choice]]: AC is required by the KL and normal-law suppliers below.

[F1] [[def-it-general-mutual-information]]: \(I_{\mathrm{nat}}(X;Y)=D(P_{XY}\|P_X\otimes P_Y)\).

[F2] [[def-standard-normal-and-normal-laws]]: \(N(m,s)\), for \(s>0\), is the affine image of the standard normal with density \((2\pi)^{-1/2}e^{-z^2/2}\).

[F3] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: a positive affine change of variable transforms a density by its Jacobian.

[F4] [[def-kullback-leibler-divergence]]: for \(P\ll Q\), \(D(P\|Q)=\int\ln(dP/dQ)\,dP\); if absolute continuity fails, the divergence is \(+\infty\).

[F5] [[thm-general-kl-chain-rule-for-standard-borel-kernels]]: when two joint laws have the same standard-Borel marginal, their joint KL is the integral of the conditional KL divergences.

[F6] [[thm-kullback-leibler-is-nonnegative]]: under AC, KL divergence between probability laws is nonnegative.

## Proof

**Given:** The hypotheses and suppliers [A1], [F1]–[F6].

1.1 By [F2]–[F3], the laws \(N(0,\sigma^2)\) and \(N(y,D)\) have everywhere-positive Lebesgue densities \(p_X(x)=(2\pi\sigma^2)^{-1/2}e^{-x^2/(2\sigma^2)}\) and \(q_y(x)=(2\pi D)^{-1/2}e^{-(x-y)^2/(2D)}\). Define \(Q(dx,dy):=P_Y(dy)q_y(x)\,dx\); this is the joint law whose conditional law of \(X\) given \(Y=y\) is \(N(y,D)\), with \(Y\)-marginal \(P_Y\). Both \(Q\) and \(P_X\otimes P_Y\) are equivalent to \(dx\,P_Y(dy)\), since their densities are strictly positive. If \(P_{XY}\not\ll P_X\otimes P_Y\), [F1] and [F4] give \(I_{\mathrm{nat}}(X;Y)=+\infty\), so the result holds. Otherwise equivalence gives \(P_{XY}\ll Q\) as well. [A1, F1, F2, F3, F4, given, construct]

1.2 On the remaining case, the logarithm of the reference-density ratio is
$$\ln\frac{q_Y(X)}{p_X(X)}=\frac12\ln\frac{\sigma^2}{D}-\frac{(X-Y)^2}{2D}+\frac{X^2}{2\sigma^2}.$$
It is integrable because \(\mathbb E(X-Y)^2=\delta<\infty\) and \(\mathbb E X^2=\sigma^2\). The Radon–Nikodym chain identity \(dP_{XY}/d(P_X\otimes P_Y)=(dP_{XY}/dQ)(dQ/d(P_X\otimes P_Y))\), integrated using [F4], therefore yields
$$I_{\mathrm{nat}}(X;Y)=D(P_{XY}\|Q)+\frac12\ln\frac{\sigma^2}{D}+\frac12-\frac{\delta}{2D}.$$
The finite cross term prevents an \(\infty-\infty\) ambiguity if the first divergence is infinite. [A1, F1, F4, step 1.1, algebra]

2.1 Since \(Q\) and \(P_{XY}\) have the same \(Y\)-marginal, [F5] expresses \(D(P_{XY}\|Q)\) as an integral of conditional KL divergences; [F6] makes it nonnegative, including the value \(+\infty\). Also \(\delta\le D\), so \(1/2-\delta/(2D)\ge0\). The identity in step 1.2 gives the claimed lower bound. [A1, F5, F6, step 1.2, algebra] ∎
