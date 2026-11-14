---
title: ULE correction bound and validity condition
status: published
research_item: pthm-qec-distinguishability-ule-error-bound
dependency_level: 8
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 10, paragraph after Eq. (S2.10), and Eq. (S2.3) on p. 9
      statement: The article states that the correction in its reduced-state equation
        obeys the spectral-norm bound $\|\xi(t)\|\leq 2\Gamma^2\tau_B$ at all
        times, and describes the system as effectively Markovian when
        $\Gamma\tau_B\ll 1$.
      hypotheses: The article's system-bath model and ULE discussion in Supplement S2.
      reading_limits: Read the supplied extracted text at the cited passages. This
        reference attributes the article's claim; it is not used as proof of the
        exact-state bound.
---

PDF p. 10: ` Paragraph after Eq. (S2.10) `

## Prerequisites

- [pthm-qec-distinguishability-ule-equation](item-pthm-qec-distinguishability-ule-equation)
- [def-qec-distinguishability-jump-correlator](item-def-qec-distinguishability-jump-correlator)
- [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)
- [pthm-qec-prereq-ule-modified-state-error-contract](item-pthm-qec-prereq-ule-modified-state-error-contract)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Statement

Assume the Axiom of Choice and Countable Choice and all model and preparation hypotheses of the ULE equation and independent modified-state contract: a finite-dimensional system with a positive finite number $n$ of Hermitian coupling channels, system couplings normalized by $\|X_\alpha\|\leq1$, a centered stationary Gaussian bath, and the source's remote-past factorized preparation formulation. Adopt the system–bath postulate used by that equation. Let $r(t)$ be the exact interaction-picture reduced operator. Assume that $r(t)$ is differentiable and that the unitary system propagator $U(t)$ is differentiable with $\dot U(t)=-iH_S(t)U(t)$, in units with $\hbar=1$. Let $\widetilde{\mathcal D}_t$ be the interaction-picture ULE generator of that equation.

Adopt the trace and domain conditions of the jump-correlator interface: the bath products defining the two-time correlation are well defined on their required domains and trace class, with well-defined traces invariant under a common time translation. Write their stationary correlation matrix as $C(t-s)$ and require every entry of $C$ to be Lebesgue integrable on $\mathbb R$. With the spectral-density convention $J(\omega)=(2\pi)^{-1}\int_{\mathbb R}C(t)e^{i\omega t}\,dt$, require $J(\omega)$ to be Hermitian positive semidefinite for every real $\omega$. Require the entries of its positive square root $g(\omega)=[J(\omega)/(2\pi)]^{1/2}$ to be Lebesgue integrable, and define $g(t)=\int_{\mathbb R}g(\omega)e^{-i\omega t}\,d\omega$ entrywise.

Let $I_0=\int_{\mathbb R}\|g(t)\|_{2,1}\,dt$ and $I_1=\int_{\mathbb R}|t|\|g(t)\|_{2,1}\,dt$, with $0<I_0<\infty$ and $I_1<\infty$. For coupling parameter $\gamma>0$, set $\Gamma=4\gamma I_0^2$ and $\tau_B=I_1/I_0$. The mixed norm is $\|M\|_{2,1}=\sum_b(\sum_\alpha |M_{\alpha b}|^2)^{1/2}$. Explicitly assume the independent contract's short-memory regime $\Gamma\tau_B\ll1$.

Under the independent modified-state contract there is a modified interaction-picture operator $\sigma(t)$ such that $\|\sigma(t)-r(t)\|\leq\Gamma\tau_B$ and, for its differential residual $\eta(t)=\dot\sigma(t)-\widetilde{\mathcal D}_t(\sigma(t))$, $\|\eta(t)\|\leq2\Gamma^2\tau_B$ at all times covered by that contract. Here $\|A\|$ is the spectral operator norm, the supremum of $\|Av\|$ over unit vectors $v$. Thus the differential correction is of order $\Gamma^2\tau_B$ in the assumed approximation regime. These estimates alone do not give a uniform-in-time trajectory error after the residual is dropped.

The article states the same numerical residual bound for the correction $\xi$ in its exact reduced-state equation and describes the evolution as effectively Markovian when $\Gamma\tau_B\ll1$. The independent contract used here instead bounds $\eta$ for $\sigma$; it does not establish the stated bound for the exact-state correction $\xi$.

## Statement references

[pthm-qec-distinguishability-ule-equation](item-pthm-qec-distinguishability-ule-equation)

[def-qec-distinguishability-jump-correlator](item-def-qec-distinguishability-jump-correlator)

[def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[pthm-qec-prereq-ule-modified-state-error-contract](item-pthm-qec-prereq-ule-modified-state-error-contract)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Facts & Assumptions

[F1] Under its system–bath postulate and independent jump and modified-state hypotheses, including the short-memory regime and the differentiability of $r$ and $U$ with $\dot U=-iH_SU$, the ULE equation defines the exact-state residual and identifies the interaction-picture generator; it distinguishes that residual from the modified-state residual. [pthm-qec-distinguishability-ule-equation](item-pthm-qec-distinguishability-ule-equation)

[F2] Under its trace-class product, operator-domain, stationary-correlation, entrywise correlation-integrability, pointwise positive spectral-matrix and integrable square-root conditions, the jump-correlator definition gives $g$, the mixed norm and the parameters $\Gamma$ and $\tau_B$, subject also to the stated moment and choice assumptions. [def-qec-distinguishability-jump-correlator](item-def-qec-distinguishability-jump-correlator)

[F3] The stationary-spectrum kernel contract specifies the entrywise Fourier convention, the positive square-root construction for a pointwise Hermitian positive semidefinite spectral matrix, integrability of the square-root entries and finite nonzero zeroth and finite first time-kernel moments. [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[F4] Under the independent ULE model, remote-past preparation and assumed short-memory regime, the modified-state contract supplies the distance and differential-residual bounds for its ULE generator. [pthm-qec-prereq-ule-modified-state-error-contract](item-pthm-qec-prereq-ule-modified-state-error-contract)

[A1] Assume the Axiom of Choice and Countable Choice as required by the correlator interface. Countable Choice permits choosing one member from each set in a sequence of nonempty sets. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Proof

**Given:** All stated model, preparation, choice, differentiability, bath-trace, spectral, kernel-integrability, moment and short-memory hypotheses, with $r$, $\widetilde{\mathcal D}$ and the parameters as defined above.

**Goal:** Establish the modified-state bounds and their stated scope.

1.1 The trace and domain hypotheses make the stationary bath correlation available to [F2]. Its entrywise integrability and the assumed pointwise Hermitian positive semidefinite spectrum allow the positive square root in [F3]; the integrability of the square-root entries makes its entrywise Fourier integral well defined. The separate time-kernel moment hypotheses make $I_0$ positive and finite and $I_1$ finite. Thus [F2] and [F3], under [A1], identify the displayed $g$, $\Gamma$ and $\tau_B$ with those of the independent ULE contract. [given, F2, F3, A1]

2.1 The adopted system–bath, independent-model and preparation hypotheses, the assumed short-memory regime, and the differentiability of $r$ and $U$ with the stated propagator equation meet the hypotheses used by [F1]. Thus $\widetilde{\mathcal D}_t$ is the same interaction-picture ULE generator as in [F4], with the same kernel and parameters from step 1.1. The exact-state residual is $\xi(t)=U(t)(\dot r(t)-\widetilde{\mathcal D}_t(r(t)))U(t)^\dagger$. This identity supplies no bound on $\xi$. [given, F1, F4, step 1.1]

3.1 Apply [F4] under these hypotheses: it supplies $\sigma$ with $\|\sigma-r\|\leq\Gamma\tau_B$ and $\|\dot\sigma-\widetilde{\mathcal D}_t(\sigma)\|\leq2\Gamma^2\tau_B$. The latter is exactly the bound on $\eta$, so its size is of order $\Gamma^2\tau_B$ in the assumed regime. By step 2.1, $\xi$ is defined from the derivative of the exact state, whereas $\eta$ is defined from that of $\sigma$. A bound on $\sigma-r$ alone does not bound its derivative, so these estimates do not establish the corresponding bound for $\xi$. Nor does a pointwise differential residual bound alone assert an all-time uniform trajectory error. [F4, step 1.1, step 2.1] ∎

## Source notes

The article attribution records its exact-state assertion without using that assertion as a premise. The quantitative bound proved here is a conditional application of the independent modified-state contract; no unchanged remote-past constant is asserted for arbitrary finite preparation.
