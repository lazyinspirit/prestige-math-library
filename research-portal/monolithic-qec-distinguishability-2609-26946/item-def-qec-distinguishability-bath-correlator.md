---
title: Bath correlation matrix and Fourier convention
status: draft
research_item: def-qec-distinguishability-bath-correlator
dependency_level: 6
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 10, Eqs. (S2.5)–(S2.6) and the following sentence
      statement: The bath correlation matrix is the trace of two interaction-picture
        bath operators against a steady bath state, and its Fourier transform
        uses the factor 1/(2π) and positive exponential.
      hypotheses: A steady bath state and the bath interaction-picture convention; the
        definition below explicitly qualifies the trace and Fourier integral.
      reading_limits: Read the supplied extracted article text at the cited passage.
        This citation attributes the article's formulation; it is not a proof of
        well-definedness.
---

PDF p. 10: ` Eqs. (S2.5)–(S2.6) `

## Prerequisites

- [post-qec-distinguishability-ule-coupling](item-post-qec-distinguishability-ule-coupling)
- [def-qec-distinguishability-interaction-picture](item-def-qec-distinguishability-interaction-picture)
- [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-trace-class-operator](https://alphabetamath.cc/item/def-trace-class-operator)
- [math:def-trace-of-a-trace-class-operator](https://alphabetamath.cc/item/def-trace-of-a-trace-class-operator)
- [math:thm-trace-is-absolutely-convergent-and-basis-independent](https://alphabetamath.cc/item/thm-trace-is-absolutely-convergent-and-basis-independent)
- [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)
- [math:def-symmetric-self-adjoint-and-essentially-self-adjoint](https://alphabetamath.cc/item/def-symmetric-self-adjoint-and-essentially-self-adjoint)
- [math:def-unbounded-linear-operator-domain-and-graph](https://alphabetamath.cc/item/def-unbounded-linear-operator-domain-and-graph)
- [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)
- [math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra](https://alphabetamath.cc/item/def-lebesgue-measure-and-the-lebesgue-sigma-algebra)
- [math:thm-lebesgue-measure-is-a-complete-measure](https://alphabetamath.cc/item/thm-lebesgue-measure-is-a-complete-measure)


## Definition

Assume the Axiom of Choice and Countable Choice. Work in units with $\hbar=1$. Let $H_B$ be a self-adjoint bath Hamiltonian on a complex Hilbert space, $\rho_B$ a stationary bath density operator, and $B_1,\ldots,B_n$ bath coupling operators, with $n$ a finite nonnegative integer. Stationary means $\rho_B$ is unchanged by the free bath unitary evolution. A density operator is positive, trace class and has trace one. Write $\operatorname{Tr}_B$ for the basis-independent trace of a trace-class operator on the bath space, and define the interaction-picture bath operators by $\widetilde B_\alpha(t)=e^{iH_Bt}B_\alpha e^{-iH_Bt}$.

Whenever the products in the following expression have well-defined traces in this trace-class sense and the resulting two-time functions are invariant under a common time translation, the bath correlation matrix is the matrix-valued function of the time difference defined by $\mathcal J_{\alpha\beta}(t-s)=\operatorname{Tr}_B[\widetilde B_\alpha(t)\widetilde B_\beta(s)\rho_B]$. In particular $\mathcal J_{\alpha\beta}(t)$ uses the second time $s=0$. If every entry is Lebesgue integrable over $\mathbb R$, define its spectral density, with the article's Fourier convention, by $\mathcal J_{\alpha\beta}(\omega)=(2\pi)^{-1}\int_{-\infty}^{\infty}\mathcal J_{\alpha\beta}(t)e^{i\omega t}\,dt$. Here $\alpha,\beta$ label coupling channels and $\omega$ is real angular frequency. For $n=0$, the correlation and its spectrum are the unique empty $0\times0$ matrices; there are no entries to integrate.

For unbounded bath operators the trace condition includes the necessary operator domains and trace-class products. Stationarity alone does not imply integrability. If that integrability condition fails, the density formula above supplies no spectral density; any extension beyond it requires a separately specified convention.

## Definition references

[post-qec-distinguishability-ule-coupling](item-post-qec-distinguishability-ule-coupling)

[def-qec-distinguishability-interaction-picture](item-def-qec-distinguishability-interaction-picture)

[def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[math:def-trace-class-operator](https://alphabetamath.cc/item/def-trace-class-operator)

[math:def-trace-of-a-trace-class-operator](https://alphabetamath.cc/item/def-trace-of-a-trace-class-operator)

[math:thm-trace-is-absolutely-convergent-and-basis-independent](https://alphabetamath.cc/item/thm-trace-is-absolutely-convergent-and-basis-independent)

[math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)

[math:def-symmetric-self-adjoint-and-essentially-self-adjoint](https://alphabetamath.cc/item/def-symmetric-self-adjoint-and-essentially-self-adjoint)

[math:def-unbounded-linear-operator-domain-and-graph](https://alphabetamath.cc/item/def-unbounded-linear-operator-domain-and-graph)

[math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)

[math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra](https://alphabetamath.cc/item/def-lebesgue-measure-and-the-lebesgue-sigma-algebra)

[math:thm-lebesgue-measure-is-a-complete-measure](https://alphabetamath.cc/item/thm-lebesgue-measure-is-a-complete-measure)

## Facts & Assumptions

[F1] The system–bath coupling postulate uses finitely many bath coupling channels and a stationary bath, and records the same two-time correlation when its traces exist. [post-qec-distinguishability-ule-coupling](item-post-qec-distinguishability-ule-coupling)

[F2] For self-adjoint $H_B$, the bath interaction-picture convention supplies the unitary conjugation and specifies its domain for an unbounded bath operator, under the stated choice assumptions. [def-qec-distinguishability-interaction-picture](item-def-qec-distinguishability-interaction-picture)

[F3] For a positive integer number of channels, the stationary-spectrum contract defines the entrywise Fourier integral with factor $(2\pi)^{-1}$ for an integrable matrix correlation. [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[F4] Under Countable Choice, trace class means compact with summable singular values. Every trace-class operator on a complex Hilbert space has a well-defined complex trace, equal to the absolutely convergent diagonal sum for every supplied Hilbert basis and independent of that basis. [math:def-trace-class-operator](https://alphabetamath.cc/item/def-trace-class-operator) [math:def-trace-of-a-trace-class-operator](https://alphabetamath.cc/item/def-trace-of-a-trace-class-operator) [math:thm-trace-is-absolutely-convergent-and-basis-independent](https://alphabetamath.cc/item/thm-trace-is-absolutely-convergent-and-basis-independent)

[F5] Use Lebesgue measure $\lambda$ on $\mathbb R$, written $dt$ in the Fourier integral; under Countable Choice it is a measure on the Lebesgue sigma-algebra. A complex function $h$ is Lebesgue integrable when it is measurable and $\int_{\mathbb R}|h|\,d\lambda<\infty$; its integral is $\int h\,d\lambda=\int\operatorname{Re}h\,d\lambda+i\int\operatorname{Im}h\,d\lambda$. [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals) [math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra](https://alphabetamath.cc/item/def-lebesgue-measure-and-the-lebesgue-sigma-algebra) [math:thm-lebesgue-measure-is-a-complete-measure](https://alphabetamath.cc/item/thm-lebesgue-measure-is-a-complete-measure)

[A1] Assume the Axiom of Choice and Countable Choice for the interaction-picture, trace and Lebesgue-measure suppliers and their stated hypotheses. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Justification

**Given:** The bath data, choice assumptions, trace and common-time-translation conditions, and the entrywise integrability condition where the spectral density is used.

**Goal:** Verify that the displayed correlation and spectral density are well defined under those conditions.

1.1 By [F2], each bath unitary conjugation is defined on its stated transformed domain. The trace and domain conditions explicitly required in the definition put each displayed product in the trace class, so [F4], under Countable Choice from [A1], gives a basis-independent complex number for each two-time entry. Common-time-translation invariance makes this number depend only on $t-s$: translating both times by $-s$ gives the value at $(t-s,0)$. Thus the definition assigns one value to each time difference. [given, A1, F2, F4, algebra]

2.1 If $n=0$, both matrices are empty and no Fourier supplier is invoked. Otherwise $n$ is a positive integer, so the finite channel set gives a finite matrix of these functions, in the coupling convention of [F1]. Interpret the integrability condition using Lebesgue measure and the complex integral in [F5], under [A1]. When each entry is integrable, all hypotheses of the Fourier-definition part of [F3] hold, and it applies entrywise to make the displayed Fourier integral finite for every real $\omega$, with the stated normalization and sign. The assumptions do not assert that a nonintegrable correlation has an ordinary spectral density. [given, A1, F1, F3, F5, step 1.1] ∎
