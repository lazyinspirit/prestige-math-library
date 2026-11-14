---
title: No-jump phase tracking without decay-rate suppression
status: draft
research_item: pthm-qec-distinguishability-calibrated-null-compensation
dependency_level: 20
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF page 16, Eqs. (S4.10)–(S4.12) and the two following paragraphs
      statement: The article describes a null-branch rotation, its iteration,
        unchanged decay rate under the checks, compensation of known phases, and
        substitution of the current state into its decay-branch formulas.
      hypotheses: The article's lifted equal-rate model and projective checking procedure.
      reading_limits: The supplied extracted text at the cited passage was read for
        attribution. The article is not used as a proof of this conditional
        result.
---

PDF p. 16: ` Paragraphs after Eq. (S4.12) `

## Prerequisites

- [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)
- [pthm-qec-distinguishability-uniform-decay-rate](item-pthm-qec-distinguishability-uniform-decay-rate)
- [pthm-qec-distinguishability-lifted-null-elements](item-pthm-qec-distinguishability-lifted-null-elements)
- [alg-qec-distinguishability-syndrome-measurement](item-alg-qec-distinguishability-syndrome-measurement)
- [pthm-qec-distinguishability-single-decay-map](item-pthm-qec-distinguishability-single-decay-map)
- [lem-qec-prereq-trajectory-dyson-expansion](item-lem-qec-prereq-trajectory-dyson-expansion)
- [def-qec-distinguishability-angular-basis](item-def-qec-distinguishability-angular-basis)
- [def-qec-prereq-diagonal-lift-phase-data](item-def-qec-prereq-diagonal-lift-phase-data)
- [def-qec-prereq-calibrated-cycle-contract](item-def-qec-prereq-calibrated-cycle-contract)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)


## Statement

Adopt the finite lifted model and all its inherited physical, spectral and choice hypotheses, including the Axiom of Choice, Countable Choice and Dependent Choice. Its orthonormal basis is $|J,m\rangle$ with integer $J=0,\ldots,N$ and $m=-J,\ldots,J$. Let $J_0\geq1$, let $P=\Pi_{J_0}$ project onto that block, and let the initial density operator $\rho_0$ be supported in it. A density operator is positive semidefinite with trace one. The model has $\gamma>0$ and lift $\Delta(J,m)=\Delta_0Jm$ with real $\Delta_0$. On the host block $J_z|J_0,m\rangle=m|J_0,m\rangle$.

For ideal checks at nondecreasing times $0=t_0\leq t_1\leq\cdots\leq t_n=t$, condition on obtaining the host-block outcome $P$ at every check. Write $U_s=e^{-i\Delta_0J_0sJ_z}$ on that block. The joint probability of these outcomes is $e^{-\gamma t}$, and their conditional state is $U_t\rho_0U_t^\dagger$. Thus each null interval of length $\tau$ applies the rotation $e^{-i\theta J_z}$ with $\theta=\Delta_0J_0\tau$, and the conditional matrix elements satisfy $\rho_{mm'}(t)=\rho_{mm'}(0)e^{-i\Delta_0J_0(m-m')t}$. This is also the uninterrupted no-jump conditional evolution. The survival probability has constant hazard $\gamma$; these ideal host-block checks do not suppress it.

If the lift and elapsed interval are calibrated and the corresponding unitary control is available, applying $U_\tau^\dagger$ after each null outcome returns the state present at the beginning of that interval. In particular, starting from a code state, it returns that state after each compensated null check. Calibration supplies known phase data; it does not establish the availability or accuracy of physical control, nor reveal an unknown decay time.

For a subsequent short interval, the first-order detected-decay formula of the single-decay result applies with its input matrix elements replaced by those of the state at the beginning of that interval. Equivalently, the end-of-interval null-evolved entries can be substituted at first order for fixed parameters: their difference from the input is $O(\tau)$, so the unnormalized decay branch changes by $O(\tau^2)$. The normalized decay formula is a first-order conditional approximation, not an exact finite-time identity.

## Statement references

[post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

[pthm-qec-distinguishability-uniform-decay-rate](item-pthm-qec-distinguishability-uniform-decay-rate)

[alg-qec-distinguishability-syndrome-measurement](item-alg-qec-distinguishability-syndrome-measurement)

[pthm-qec-distinguishability-single-decay-map](item-pthm-qec-distinguishability-single-decay-map)

[def-qec-distinguishability-angular-basis](item-def-qec-distinguishability-angular-basis)

[def-qec-prereq-diagonal-lift-phase-data](item-def-qec-prereq-diagonal-lift-phase-data)

[def-qec-prereq-calibrated-cycle-contract](item-def-qec-prereq-calibrated-cycle-contract)

## Facts & Assumptions

[F1] The postulated finite model has diagonal Hamiltonian eigenvalues $\omega_0J(J+1)+\Delta_0Jm$ and jump operators that map each $J\geq1$ block into the $J-1$ block. [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

[F2] In this model $V=-\frac12\sum_\delta L_\delta^\dagger L_\delta=-\gamma I/2$ on every excited block. [pthm-qec-distinguishability-uniform-decay-rate](item-pthm-qec-distinguishability-uniform-decay-rate)

[F3] The finite trajectory expansion expresses the channel as the no-jump term $E(s)XE(s)^\dagger$ plus ordered terms with one or more jumps, where $E(s)=e^{s(-iH+V)}$. [lem-qec-prereq-trajectory-dyson-expansion](item-lem-qec-prereq-trajectory-dyson-expansion)

[F4] The ideal check uses the two projectors $P$ and $I-P$; an outcome's conditional state is its unnormalized output divided by its positive trace. [alg-qec-distinguishability-syndrome-measurement](item-alg-qec-distinguishability-syndrome-measurement)

[F5] The first-order detected-decay branch is linear in its input entries, has weight $\gamma\tau$ for a host-block density operator, and differs from the exact unnormalized checked output by $O(\tau^2)$ at fixed finite model parameters. [pthm-qec-distinguishability-single-decay-map](item-pthm-qec-distinguishability-single-decay-map)

[F6] The lifted null-branch supplier gives the same phase and trace through first order for a short interval. [pthm-qec-distinguishability-lifted-null-elements](item-pthm-qec-distinguishability-lifted-null-elements)

[F7] The magnetic basis diagonalizes $J_z$ with eigenvalue $m$; calibrated phase data make the specified lift values and elapsed interval available to the recovery rule, without observing an unknown jump time. [def-qec-distinguishability-angular-basis](item-def-qec-distinguishability-angular-basis) [def-qec-prereq-diagonal-lift-phase-data](item-def-qec-prereq-diagonal-lift-phase-data) [def-qec-prereq-calibrated-cycle-contract](item-def-qec-prereq-calibrated-cycle-contract)

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice, together with the physical and spectral assumptions inherited by the model and its stated results. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice) [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

## Proof

**Given:** The stipulated model, host-supported initial state, ideal checks, and assumptions in the Statement.

**Goal:** Establish the exact null evolution and survival probability, the conditional compensation, and the stated scope of the next decay formula.

1.1 The diagonal Hamiltonian and scalar $V$ preserve each block. On the host block, $G=-iH+V=-i\omega_0J_0(J_0+1)I-i\Delta_0J_0J_z-\gamma I/2$. Hence $E(s)P=e^{-\gamma s/2}e^{-i\omega_0J_0(J_0+1)s}U_sP$. Each jump lowers the block label and every intervening $E$ preserves it, so every term with at least one jump in [F3] is annihilated by projection onto $P$ on the output. Therefore the unnormalized host outcome for a host-supported input $X$ is $e^{-\gamma s}U_sXU_s^\dagger$. [F1, F2, F3, F7, algebra]

2.1 The trace of this output for a density operator is $e^{-\gamma s}>0$, and [F4] gives conditional state $U_sXU_s^\dagger$. Applying the same expression successively to the intervals and using $U_aU_b=U_{a+b}$ gives joint weight $\prod_k e^{-\gamma(t_k-t_{k-1})}=e^{-\gamma t}$ and conditional state $U_t\rho_0U_t^\dagger$. The no-jump term in [F3] has the same weight and normalized state, proving equality with uninterrupted no-jump evolution. Since $-d(\log e^{-\gamma t})/dt=\gamma$, its survival hazard is unchanged by these checks. [F3, F4, step 1.1, algebra]

3.1 By the eigenvalue relation in [F7], conjugation by $U_t$ multiplies the $(m,m')$ matrix element by $e^{-i\Delta_0J_0(m-m')t}$. If the stated unitary control is available, $U_\tau^\dagger U_\tau=I$, so applying it after the null outcome restores the interval's input state. The calibration convention supplies the required phase data but does not itself supply control or a jump-time observation. [F7, step 2.1, algebra]

4.1 Apply [F5] to the actual host-supported input at the start of the next interval. By step 2.1, its null-evolved state differs entrywise by $O(\tau)$ at fixed finite parameters; the displayed single-decay branch is $\tau$ times a fixed linear function of those entries. Substitution of the null-evolved entries therefore changes the unnormalized first-order expression by $O(\tau^2)$. Its positive weight is $\gamma\tau$ for $\tau>0$, so normalization gives the corresponding first-order conditional approximation, without asserting equality at finite $\tau$. This is consistent with the short-time null expansion in [F6]. [F5, F6, step 2.1, algebra] ∎
