---
title: Matrix elements of the fast detected-decay state
status: draft
research_item: pthm-qec-distinguishability-single-decay-map
dependency_level: 18
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF page 15, Eqs. (S4.7)–(S4.9)
      statement: The article gives the unnormalized detected-decay branch, its trace
        gamma times tau, and the corresponding normalized state in the
        first-order fast-check model.
      hypotheses: The idealized angular-momentum decay model, an initial state in one
        excited manifold, and the first-order fast-check description.
      reading_limits: The supplied extracted article text at these equations was read
        for attribution. The article is not used as proof of the conditional
        calculation.
---

PDF p. 15: ` Eqs. (S4.7)–(S4.9) `

## Prerequisites

- [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)
- [math:def-trace-of-a-square-matrix](https://alphabetamath.cc/item/def-trace-of-a-square-matrix)
- [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)
- [pthm-qec-distinguishability-short-time-kraus](item-pthm-qec-distinguishability-short-time-kraus)
- [alg-qec-distinguishability-syndrome-measurement](item-alg-qec-distinguishability-syndrome-measurement)
- [def-qec-distinguishability-angular-basis](item-def-qec-distinguishability-angular-basis)
- [lem-qec-distinguishability-cg-rate-identity](item-lem-qec-distinguishability-cg-rate-identity)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)
- [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)
- [math:cor-operator-norm-submultiplicative-and-t-star-t-identity](https://alphabetamath.cc/item/cor-operator-norm-submultiplicative-and-t-star-t-identity)


## Statement

Adopt the finite lifted model with integer blocks $J=0,\ldots,N$, $N\geq1$, its stated physical and spectral hypotheses, and the Axiom of Choice, Countable Choice and Dependent Choice. In particular $\gamma>0$. Let $J_0\in\{1,\ldots,N\}$ and let the density operator $\rho_0$ be supported in the $J_0$ block. A density operator is positive semidefinite with trace one. For $m,m'=-J_0,\ldots,J_0$ write $\rho_{mm'}=\langle J_0,m|\rho_0|J_0,m'\rangle$. For $\delta\in\{-1,0,1\}$ let $C_{m,\delta}=C^{J_0-1,m+\delta}_{1,\delta;J_0,m}$ be the ordered-coupling coefficient, with out-of-range terms zero.

For a checking interval $\tau\geq0$, let $K_\delta=\sqrt\tau L_\delta$ be the first-order jump operators and perform the ideal two-projector check of the $J_0$ block. Its approximate unnormalized decay branch is

$$B_{\mathrm{dec}}=\gamma\tau\frac{2J_0+1}{2J_0-1}\sum_{m,m',\delta}C_{m,\delta}C^*_{m',\delta}\rho_{mm'}|J_0-1,m+\delta\rangle\langle J_0-1,m'+\delta|.$$

Here and below the sums run over the displayed magnetic labels and $\delta\in\{-1,0,1\}$; a term with an out-of-range output label is zero. Its trace is

$$\operatorname{Tr}B_{\mathrm{dec}}=\gamma\tau\frac{2J_0+1}{2J_0-1}\sum_m\rho_{mm}\sum_\delta|C_{m,\delta}|^2=\gamma\tau.$$

When $\tau>0$, the normalized approximate decay state is the displayed expression for $B_{\mathrm{dec}}$ with the factor $\gamma\tau$ removed. At $\tau=0$ this branch has zero weight and no conditional state. These are first-order branch formulas; the exact checked channel has an $O(\tau^2)$ unnormalized output error at fixed finite model parameters.

## Statement references

[def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[math:def-trace-of-a-square-matrix](https://alphabetamath.cc/item/def-trace-of-a-square-matrix)

[post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

[pthm-qec-distinguishability-short-time-kraus](item-pthm-qec-distinguishability-short-time-kraus)

[alg-qec-distinguishability-syndrome-measurement](item-alg-qec-distinguishability-syndrome-measurement)

[def-qec-distinguishability-angular-basis](item-def-qec-distinguishability-angular-basis)

[lem-qec-distinguishability-cg-rate-identity](item-lem-qec-distinguishability-cg-rate-identity)

## Facts & Assumptions

[F1] The finite lifted model postulates $L_\delta=\sqrt\gamma\sum_{J=1}^{N}\sum_m\sqrt{(2J+1)/(2J-1)}\,C^{J-1,m+\delta}_{1,\delta;J,m}|J-1,m+\delta\rangle\langle J,m|$, with out-of-range terms zero, and $\gamma>0$. [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

[F2] In the first-order description $K_\delta=\sqrt\tau L_\delta$; at fixed finite model parameters the exact channel differs from the first-order Kraus sum by $O(\tau^2)$ in induced matrix spectral norm. [pthm-qec-distinguishability-short-time-kraus](item-pthm-qec-distinguishability-short-time-kraus)

[F3] For an input supported in the $J_0$ block, the ideal two-projector check selects $\sum_\delta K_\delta\rho_0K_\delta^\dagger$ as the approximate unnormalized decay branch. Its conditional state is obtained by dividing by its trace only when that trace is positive. [alg-qec-distinguishability-syndrome-measurement](item-alg-qec-distinguishability-syndrome-measurement)

[F4] The magnetic basis is orthonormal, and the specified ordered-coupling coefficient is zero outside the target magnetic-label range. [def-qec-distinguishability-angular-basis](item-def-qec-distinguishability-angular-basis)

[F5] For every admissible $m$ and $J_0\geq1$, $\sum_\delta|C_{m,\delta}|^2=(2J_0-1)/(2J_0+1)$. [lem-qec-distinguishability-cg-rate-identity](item-lem-qec-distinguishability-cg-rate-identity)

[F6] Bras, matrix elements, outer products and adjoints use the finite operator conventions: $\langle v|x\rangle=v^\dagger x$, $|u\rangle\langle v|x=u(v^\dagger x)$, and $A^\dagger$ is the conjugate transpose in the specified orthonormal bases. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F7] In the specified orthonormal coordinates, the matrix spectral norm is the operator norm $\|A\|=\max_{\|v\|_2=1}\|Av\|_2$, where $\|v\|_2^2=\sum_{J,m}|v_{J,m}|^2$. For compatible finite matrices, $\|AB\|\leq\|A\|\|B\|$. [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space) [math:cor-operator-norm-submultiplicative-and-t-star-t-identity](https://alphabetamath.cc/item/cor-operator-norm-submultiplicative-and-t-star-t-identity)

[F8] For a finite square matrix $A=(a_{ij})$ over $\mathbb C$, its trace is $\operatorname{Tr}A=\sum_i a_{ii}$ in the specified coordinates. [math:def-trace-of-a-square-matrix](https://alphabetamath.cc/item/def-trace-of-a-square-matrix)

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice, together with the physical and spectral assumptions inherited from the finite lifted model. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice) [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

## Proof

**Given:** The finite lifted model, supported density operator, interval and ideal check in the Statement.

**Goal:** Calculate the approximate decay branch, its trace and its normalized state, and state the scope of the approximation.

1.1 Expand $\rho_0=\sum_{m,m'}\rho_{mm'}|J_0,m\rangle\langle J_0,m'|$ in the orthonormal basis. On this block, [F1] gives $L_\delta|J_0,m\rangle=\sqrt{\gamma(2J_0+1)/(2J_0-1)}\,C_{m,\delta}|J_0-1,m+\delta\rangle$, with zero for an out-of-range label. Substituting this and $K_\delta=\sqrt\tau L_\delta$ into the branch in [F3] gives the displayed double magnetic sum. [given, F1, F2, F3, F4, F6, algebra]

2.1 Using the diagonal-sum trace definition in [F8], for fixed $\delta$ orthonormality makes the trace of $|J_0-1,m+\delta\rangle\langle J_0-1,m'+\delta|$ vanish unless $m=m'$. Thus the trace is the first displayed trace sum. Applying [F5] cancels the dimension ratio, and $\sum_m\rho_{mm}=\operatorname{Tr}\rho_0=1$, giving $\gamma\tau$. For $\tau>0$ this is positive, so [F3] gives the normalized expression; for $\tau=0$ it gives no conditional state. [given, F3, F4, F5, F6, F8, step 1.1, algebra]

3.1 Write $P=\Pi_{J_0}$ and $Q=I-P$ for the check projectors. In the orthonormal block coordinates of [F4] and [F6], $Q$ deletes the $J_0$ coordinates, so every vector satisfies $\|Qv\|_2^2=\sum_{J\ne J_0,m}|v_{J,m}|^2\leq\sum_{J,m}|v_{J,m}|^2=\|v\|_2^2$. The norm definition in [F7] gives $\|Q\|\leq1$, and its submultiplicativity gives $\|QXQ\|\leq\|Q\|^2\|X\|\leq\|X\|$ for every matrix $X$. Let $E_\tau=\mathcal N_\tau(\rho_0)-\widetilde{\mathcal N}_\tau(\rho_0)$, where the two maps are the exact channel and first-order Kraus sum of [F2]. By [F3] and step 1.1, the exact decay branch minus $B_{\mathrm{dec}}$ is $QE_\tau Q$. Thus $\|QE_\tau Q\|\leq\|E_\tau\|\leq\|\mathcal N_\tau-\widetilde{\mathcal N}_\tau\|\,\|\rho_0\|=O(\tau^2)$ by the induced-norm bound in [F2], for this fixed input and finite model. The statement does not claim the normalized expression is exact at finite time. [F2, F3, F4, F6, F7, step 1.1, algebra] ∎
