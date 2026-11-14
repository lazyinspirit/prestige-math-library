---
title: Interaction-picture ULE jumps and Lamb shift
status: draft
research_item: pthm-qec-distinguishability-ule-time-dependent
dependency_level: 8
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 10, Eqs. (S2.11)–(S2.12)
      statement: The article states the interaction-picture jump and Lamb-shift
        formulas with the matrix kernel
        $\varphi(u,v)=g(u)g(-v)\operatorname{sgn}(u-v)$.
      hypotheses: The system–bath and short-memory setting described in Supplement S2.
      reading_limits: The supplied extracted article text at the cited equations was
        read. This reference attributes the article formulation and is not used
        as proof.
---

PDF p. 10: ` Eqs. (S2.11)–(S2.12) `

## Prerequisites

- [pthm-qec-prereq-ule-jump-and-lamb-contract](item-pthm-qec-prereq-ule-jump-and-lamb-contract)
- [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)
- [def-qec-distinguishability-jump-correlator](item-def-qec-distinguishability-jump-correlator)
- [def-qec-distinguishability-interaction-picture](item-def-qec-distinguishability-interaction-picture)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [physics:def-nrqm-state-geometry-pure-mixed-states-and-purity](https://alphabetamath.cc/physics/item/def-nrqm-state-geometry-pure-mixed-states-and-purity)


## Statement

Assume the Axiom of Choice and Countable Choice. Work in units $\hbar=1$ with a finite-dimensional system and Hamiltonian $H=H_S(t)+H_B+\sqrt\gamma\sum_{\alpha=1}^nX_\alpha B_\alpha$, where $n$ is finite, $\gamma>0$, the coupling operators are Hermitian, and $\|X_\alpha\|\leq1$. Let $\mathcal H_B$ be the bath Hilbert space and let $\rho_B$ be a density operator on it, meaning a self-adjoint positive trace-class operator with $\operatorname{Tr}_B\rho_B=1$. Assume that every bath operator product appearing inside a trace in the centering, correlation and Wick-pairing hypotheses is well-defined and trace class, including when bath operators are unbounded. Assume a centered stationary Gaussian bath: its state $\rho_B$ commutes with $H_B$, $\operatorname{Tr}(\rho_B B_\alpha)=0$, and its correlation functions are determined by two-point functions through Wick pairings. Use factorized preparation in the remote-past formulation of the ULE contract and assume its weak Markov regime $\Gamma\tau_B\ll1$.

With $\widetilde B_\alpha(t)=e^{iH_Bt}B_\alpha e^{-iH_Bt}$, put $C_{\alpha\beta}(t-s)=\operatorname{Tr}_B(\widetilde B_\alpha(t)\widetilde B_\beta(s)\rho_B)$ and $J(\omega)=(2\pi)^{-1}\int_{\mathbb R}C(t)e^{i\omega t}\,dt$ entrywise. Assume the kernel contract: the entries of $C$ are integrable, $J(\omega)$ is Hermitian positive semidefinite, $g(\omega)=[J(\omega)/(2\pi)]^{1/2}$ has integrable entries, and $g(t)=\int_{\mathbb R}g(\omega)e^{-i\omega t}\,d\omega$ has finite nonzero zeroth and finite first mixed-norm moments. Here $\|M\|_{2,1}=\sum_b(\sum_a|M_{ab}|^2)^{1/2}$, $\Gamma=4\gamma(\int\|g(t)\|_{2,1}dt)^2$, and $\tau_B=\int|t|\|g(t)\|_{2,1}dt/\int\|g(t)\|_{2,1}dt$.

Let $U_S(t)$ be the unitary system propagator and define the interaction-picture coupling $\widetilde X_\alpha(s)=U_S(s)^\dagger X_\alpha U_S(s)$. The jump operators and Lamb-shift Hamiltonian correction in the ULE approximation are $\widetilde L_\lambda(t)=\sqrt\gamma\sum_\alpha\int_{-\infty}^{\infty}g_{\lambda\alpha}(t-s)\widetilde X_\alpha(s)\,ds$ and $\widetilde\Lambda(t)=\frac\gamma{2i}\int_{-\infty}^{\infty}ds\int_{-\infty}^{\infty}ds'\sum_{\alpha\beta}\widetilde X_\alpha(s)\widetilde X_\beta(s')\varphi_{\alpha\beta}(s-t,s'-t)$, where $\varphi(u,v)=g(u)g(-v)\operatorname{sgn}(u-v)$ is a matrix product. These formulas do not assert that the exact reduced dynamics have no residual correction.

## Facts & Assumptions

[F1] The independent ULE contract supplies the interaction-picture jump and Lamb coefficients for the stated normalized finite-channel Gaussian model, kernel regularity, remote-past preparation and weak Markov regime. [pthm-qec-prereq-ule-jump-and-lamb-contract](item-pthm-qec-prereq-ule-jump-and-lamb-contract)

[F2] The kernel contract specifies the positive matrix square root, Fourier convention and moment conditions used above. [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[F3] The jump-correlator definition uses the same square-root and time-transform convention and calls the resulting parameters $\Gamma$ and $\tau_B$. [def-qec-distinguishability-jump-correlator](item-def-qec-distinguishability-jump-correlator)

[F4] The interaction-picture convention defines system operators by conjugation with the unitary propagator. [def-qec-distinguishability-interaction-picture](item-def-qec-distinguishability-interaction-picture)

[F5] A density operator on a nonzero complex Hilbert space is self-adjoint, positive and trace class with trace one. This mathematical definition is read under Countable Choice; existence of the bath-product traces is separately assumed in the statement. [physics:def-nrqm-state-geometry-pure-mixed-states-and-purity](https://alphabetamath.cc/physics/item/def-nrqm-state-geometry-pure-mixed-states-and-purity)

[A1] Assume the Axiom of Choice and Countable Choice for the stated definition interfaces. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Proof

**Given:** The model, preparation, kernel regularity and choice assumptions in the statement.

**Goal:** Identify the interaction-picture ULE coefficients in the stated notation.

1.1 The bath state has the density-operator type of [F5], and existence of the required bath-product traces is an explicit hypothesis. The hypotheses match [F1]. Its kernel $h$ is the positive square root of $J/(2\pi)$ with the same Fourier convention and moment conditions as $g$ in [F2] and [F3]; therefore $h=g$. Its interaction-picture operator $U_S(s)^\dagger X_\alpha U_S(s)$ is exactly the operator defined using [F4]. [given, A1, F1, F2, F3, F4, F5]

2.1 Substitute $h=g$ and the interaction-picture notation into the two coefficient formulas of [F1]. Its matrix kernel $h(u)h(-v)\operatorname{sgn}(u-v)$ is $\varphi(u,v)$, so its jump and Lamb-shift expressions are precisely the two displayed formulas. The conclusion concerns the approximation coefficients, with the scope stated in [F1]. [F1, step 1.1] ∎

## Source notes

The article reference attributes Eqs. (S2.11)–(S2.12). The independent ULE contract supplies the physical input; its microscopic derivation is imported there and is not reconstructed here.
