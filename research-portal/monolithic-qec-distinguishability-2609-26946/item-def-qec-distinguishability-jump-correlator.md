---
title: Jump correlators and bath-memory parameters
status: published
research_item: def-qec-distinguishability-jump-correlator
dependency_level: 7
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 9, Eq. (S2.2) and following paragraph; PDF p. 10, Eqs.
        (S2.7)–(S2.10) and surrounding text
      statement: The article introduces gamma through the interaction H_int =
        sqrt(gamma) sum_alpha X_alpha B_alpha, with Hermitian coupling operators
        on the system and bath. The article defines the matrix jump correlator
        by the positive square root of the spectral matrix divided by 2π and its
        Fourier integral, and defines Γ and τ_B using its mixed norm and first
        time moment. It interprets them as an upper bath-induced evolution rate
        and a characteristic bath-correlation time, distinguishing τ_B from
        checking time.
      hypotheses: The article's stationary-bath and system–bath coupling setting; the
        convergence and positivity conditions below are made explicit here.
      reading_limits: Read the supplied extracted text and inspected the PDF page
        images at pp. 9–10, including Eq. (S2.2) and Eqs. (S2.7)–(S2.10). This
        citation attributes the interaction convention, definitions and
        interpretations; it does not prove a physical rate bound or a dynamical
        approximation.
---

PDF p. 9: ` Eq. (S2.2) and following paragraph: coupling convention `; PDF p. 10: ` Eqs. (S2.7)–(S2.10) `

## Prerequisites

- [def-qec-distinguishability-bath-correlator](item-def-qec-distinguishability-bath-correlator)
- [post-qec-distinguishability-ule-coupling](item-post-qec-distinguishability-ule-coupling)
- [def-qec-prereq-support-spectral-calculus](item-def-qec-prereq-support-spectral-calculus)
- [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Definition

Assume the Axiom of Choice and Countable Choice, and use the bath correlation and spectral-density convention in which $\mathcal J_{\alpha\beta}(\omega)=(2\pi)^{-1}\int_{\mathbb R}\mathcal J_{\alpha\beta}(t)e^{i\omega t}\,dt$. Here $\alpha,\beta=1,\ldots,n$ label a finite positive number $n$ of bath coupling channels. Assume the traces and entrywise integrability required for this spectral density, and suppose that $\mathcal J(\omega)$ is Hermitian positive semidefinite for every real $\omega$.

The frequency-domain jump correlator is $g(\omega)=[\mathcal J(\omega)/(2\pi)]^{1/2}$, the unique Hermitian positive semidefinite square root. If its entries are Lebesgue integrable, its time-domain jump correlator is $g(t)=\int_{\mathbb R}g(\omega)e^{-i\omega t}\,d\omega$, entrywise. For an $n\times n$ matrix $M$, define the mixed norm $\|M\|_{2,1}=\sum_{b=1}^n(\sum_{\alpha=1}^n|M_{\alpha b}|^2)^{1/2}$.

Let $\gamma>0$ be the coupling parameter in $H_{\rm int}=\sqrt\gamma\sum_{\alpha=1}^n X_\alpha\otimes B_\alpha$, in units $\hbar=1$, for a finite-dimensional system and Hermitian coupling operators with system operator norms $\|X_\alpha\|\leq1$. The $B_\alpha$ are the same bath operators used to construct $\mathcal J$ above. For unbounded bath operators, a concrete Hamiltonian application requires an appropriate common domain and self-adjoint realization. This uses the interaction convention of the system–bath postulate; its Gaussianity, preparation and short-memory assumptions are additional conditions for a ULE approximation, not requirements for defining the quantities below.

Assume $0<I_0<\infty$ and $I_1<\infty$, where $I_0=\int_{\mathbb R}\|g(t)\|_{2,1}\,dt$ and $I_1=\int_{\mathbb R}|t|\,\|g(t)\|_{2,1}\,dt$. Define $\Gamma=4\gamma I_0^2$ and $\tau_B=I_1/I_0$. Equivalently, the numerator of $\tau_B$ is $\int_{\mathbb R}\|t g(t)\|_{2,1}\,dt$. The article interprets $\Gamma$ as an upper bath-induced evolution rate and $\tau_B$ as a characteristic bath-correlation time; its notation distinguishes $\tau_B$ from checking time, the interval used for error checks. These interpretations do not by themselves establish a dynamical bound.

## Definition references

[post-qec-distinguishability-ule-coupling](item-post-qec-distinguishability-ule-coupling)

[def-qec-distinguishability-bath-correlator](item-def-qec-distinguishability-bath-correlator)

[def-qec-prereq-support-spectral-calculus](item-def-qec-prereq-support-spectral-calculus)

[def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Facts & Assumptions

[F1] The bath-correlator definition supplies the finite-channel correlation and spectral-density convention when its trace and integrability conditions hold, under the stated choice assumptions. [def-qec-distinguishability-bath-correlator](item-def-qec-distinguishability-bath-correlator)

[F2] For a finite-dimensional positive semidefinite operator, the support spectral construction gives a basis-independent positive square root. [def-qec-prereq-support-spectral-calculus](item-def-qec-prereq-support-spectral-calculus)

[F3] The stationary-spectrum kernel contract specifies the entrywise Fourier integral, mixed norm and finite nonzero zeroth and finite first kernel moments used here. [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[F4] The system–bath coupling postulate supplies the convention $H_{\rm int}=\sqrt\gamma\sum_{\alpha=1}^n X_\alpha\otimes B_\alpha$ for Hermitian coupling operators with $\gamma>0$ and $\|X_\alpha\|\leq1$. Its bath operators are identified with those in [F1]. Only this interaction convention is used here; no ULE approximation is invoked. [post-qec-distinguishability-ule-coupling](item-post-qec-distinguishability-ule-coupling)

[A1] Assume the Axiom of Choice and Countable Choice as required by the bath-correlator interface. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Justification

**Given:** The bath and choice assumptions, positive semidefinite spectral matrix, entrywise integrability of its square-root kernel, and the stated moment conditions.

**Goal:** Show that the displayed correlators and parameters are well defined under these assumptions.

1.1 By [F1], the spectral matrix is defined entrywise. At each real frequency it is finite-dimensional and positive semidefinite, so [F2] supplies its basis-independent positive square root after division by the positive scalar $2\pi$. The assumed entrywise integrability and [F3] then give a finite matrix $g(t)$ for every real $t$. [given, A1, F1, F2, F3]

2.1 By [F4], $\gamma$ is the positive parameter of the stated interaction convention. The finite sums in the mixed norm are defined for every such matrix. By the assumed moment conditions, $I_0$ is finite and strictly positive and $I_1$ is finite; hence $\Gamma$ and $\tau_B$ are finite and the latter has a nonzero denominator. Since $t$ is real, direct substitution into the mixed norm gives $\|t g(t)\|_{2,1}=|t|\|g(t)\|_{2,1}$, establishing the equivalent numerator. [given, F3, F4, step 1.1, algebra] ∎
