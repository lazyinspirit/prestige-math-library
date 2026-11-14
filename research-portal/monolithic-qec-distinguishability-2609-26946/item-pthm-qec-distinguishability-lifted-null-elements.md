---
title: Lifted null-branch matrix elements and normalization
status: published
research_item: pthm-qec-distinguishability-lifted-null-elements
dependency_level: 19
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 16, Eqs. (S4.10)–(S4.12), with the preceding commutator
        calculation
      statement: For the lift Δ(J,m)=Δ₀Jm, the article gives the first-order
        null-branch matrix elements, their trace, and the normalized expression
        involving 1−γτ.
      hypotheses: The article's lifted equal-rate model, initial state in the J₀
        manifold, and short-checking expansion.
      reading_limits: The supplied extracted text at the cited passage was read. This
        is attribution of the article-origin formulas, not a premise for the
        proof below.
---

PDF p. 16: ` Eqs. (S4.10)–(S4.12) `

## Prerequisites

- [pthm-qec-distinguishability-null-projection](item-pthm-qec-distinguishability-null-projection)
- [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)
- [pthm-qec-distinguishability-uniform-decay-rate](item-pthm-qec-distinguishability-uniform-decay-rate)
- [lem-qec-prereq-finite-taylor-control](item-lem-qec-prereq-finite-taylor-control)
- [def-qec-prereq-diagonal-lift-phase-data](item-def-qec-prereq-diagonal-lift-phase-data)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)


## Statement

Adopt the finite lifted model, the hypotheses of its null-projection and uniform-decay results, and the Axiom of Choice, Countable Choice and Dependent Choice inherited there. In particular, the finite physical space has orthonormal basis $|J,m\rangle$ with $J=0,\ldots,N$ and $m=-J,\ldots,J$; the initial density operator $\rho_0$ is supported on the block $J_0\in\{1,\ldots,N\}$. A density operator is positive semidefinite with trace one. Let $H$ be the model Hamiltonian with real lift $\Delta(J,m)=\Delta_0Jm$ and rate $\gamma>0$. Put $V=-\frac12\sum_\delta L_\delta^\dagger L_\delta$, $K_{\rm null}=I+\tau(-iH+V)$, $B=K_{\rm null}\rho_0K_{\rm null}^\dagger$, and $r_{mm'}=\langle J_0,m|\rho_0|J_0,m'\rangle$. Write $a_{mm'}=\Delta_0J_0(m-m')$ and $[\rho_0,H]=\rho_0H-H\rho_0$.

As $\tau\downarrow0$ at fixed model parameters, $i[\rho_0,H]_{mm'}=-ia_{mm'}r_{mm'}$, $B_{mm'}=[1+(-ia_{mm'}-\gamma)\tau]r_{mm'}+O(\tau^2)$, and $\operatorname{Tr}B=1-\gamma\tau+O(\tau^2)$. For sufficiently small $\tau\geq0$, $\operatorname{Tr}B>0$ and the normalized null output $\rho_{\rm null}=B/\operatorname{Tr}B$ satisfies $[\rho_{\rm null}]_{mm'}=r_{mm'}[1-ia_{mm'}\tau/(1-\gamma\tau)]+O(\tau^2)=r_{mm'}(1-ia_{mm'}\tau)+O(\tau^2)$. The displayed quotient expression is a first-order formula with a remainder, not an asserted exact finite-time identity.

The exact channel followed by the same null projection has the same displayed first-order matrix-element, trace and normalized-state expansions for sufficiently small $\tau$. Here each $O(\tau^2)$ is bounded in absolute value by a constant times $\tau^2$ near zero, with the model and initial state fixed; no uniform estimate over varying model parameters is claimed.

## Statement references

[pthm-qec-distinguishability-null-projection](item-pthm-qec-distinguishability-null-projection)

[post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

[pthm-qec-distinguishability-uniform-decay-rate](item-pthm-qec-distinguishability-uniform-decay-rate)

[def-qec-prereq-diagonal-lift-phase-data](item-def-qec-prereq-diagonal-lift-phase-data)

## Facts & Assumptions

[F1] In the lifted model, the Hamiltonian eigenvalue on $|J_0,m\rangle$ is $E_m=\omega_0J_0(J_0+1)+\Delta_0J_0m$, so $E_m-E_{m'}=a_{mm'}$. The diagonal phase-data convention uses differences of diagonal entries. [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model) [def-qec-prereq-diagonal-lift-phase-data](item-def-qec-prereq-diagonal-lift-phase-data)

[F2] Under the benchmark and its inherited system, bath, spectral and choice hypotheses, $V=-\gamma I/2$ on every excited block. [pthm-qec-distinguishability-uniform-decay-rate](item-pthm-qec-distinguishability-uniform-decay-rate)

[F3] The null-projection result gives $B=\rho_0+\tau(i[\rho_0,H]+V\rho_0+\rho_0V)+O(\tau^2)$ in spectral norm, and the exact projected channel output equals $B+O(\tau^2)$ in that norm. The conditional output is obtained by dividing by its positive trace. [pthm-qec-distinguishability-null-projection](item-pthm-qec-distinguishability-null-projection)

[F4] Scalar expansions with nonzero constant denominator can be divided through the desired order, retaining an $O(\tau^2)$ remainder at fixed parameters. [lem-qec-prereq-finite-taylor-control](item-lem-qec-prereq-finite-taylor-control)

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice as required by the physical suppliers. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)

## Proof

**Given:** The lifted model, supported density operator and checking interval in the statement, with the assumptions in [A1].

**Goal:** Derive the first-order unnormalized and normalized null-branch formulas for the approximate and exact channels.

1.1 Since $H$ is diagonal, $[\rho_0,H]_{mm'}=(E_{m'}-E_m)r_{mm'}=-a_{mm'}r_{mm'}$. On the support of $\rho_0$, [F2] gives $V\rho_0+\rho_0V=-\gamma\rho_0$. Substitution into [F3] yields the stated matrix-element expansion. A spectral-norm $O(\tau^2)$ bound also bounds each matrix element between unit basis vectors. [F1, F2, F3, A1, algebra]

2.1 Summing the finitely many diagonal entries of step 1.1 gives $\operatorname{Tr}B=(1-\gamma\tau)\operatorname{Tr}\rho_0+O(\tau^2)=1-\gamma\tau+O(\tau^2)$: the commutator contribution vanishes on the diagonal. Thus the trace tends to one and is positive for sufficiently small nonnegative $\tau$. The denominator $1-\gamma\tau$ is also nonzero there. [given, step 1.1, algebra]

3.1 By [F4], division by the trace gives $[\rho_{\rm null}]_{mm'}=r_{mm'}(1-ia_{mm'}\tau)+O(\tau^2)$. Moreover $\tau/(1-\gamma\tau)=\tau+O(\tau^2)$, proving the equivalent displayed quotient form with its remainder. This argument does not require $r_{mm'}$ to be nonzero. [F4, step 1.1, step 2.1, algebra]

4.1 By [F3], the exact projected output differs from $B$ by $O(\tau^2)$ in spectral norm. In finite dimension this also changes each entry and the trace by $O(\tau^2)$. Its trace consequently tends to one, so it is positive sufficiently near zero; applying [F4] once more gives the same normalized expansion. All constants here may depend on the fixed finite model and state. [F3, F4, step 2.1, step 3.1, algebra] ∎
