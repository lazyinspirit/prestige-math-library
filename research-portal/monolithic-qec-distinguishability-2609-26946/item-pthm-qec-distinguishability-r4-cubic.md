---
title: Cubic short-time loss and recoverable limits
status: draft
research_item: pthm-qec-distinguishability-r4-cubic
dependency_level: 5
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 2, Eq. (5) and following paragraph; PDF p. 8, Eq. (S1.5)
      statement: The short-time loss is |a|^2|b|^2 gamma Delta^2 t^3/3 plus O(t^4),
        with coefficient at most 1/12; the zero-decay and zero-lifting limits
        are perfectly recoverable.
      hypotheses: The idealized four-level model and its specified recovery, a
        normalized initial code state, and fixed parameters in the short-time
        expansion.
      reading_limits: Attribution to the supplied article text at the cited passages.
        The calculation below uses the completed model consequences, not the
        cited claim as a proof premise.
---

PDF p. 2: ` Eq. (5) and following paragraph `; PDF p. 8: ` Eq. (S1.5) `

## Prerequisites

- [post-qec-distinguishability-four-level-model](item-post-qec-distinguishability-four-level-model)
- [alg-qec-distinguishability-r4](item-alg-qec-distinguishability-r4)
- [pthm-qec-distinguishability-r4-fidelity](item-pthm-qec-distinguishability-r4-fidelity)
- [pthm-qec-distinguishability-decayed-coherence](item-pthm-qec-distinguishability-decayed-coherence)
- [pthm-qec-distinguishability-four-level-evolution](item-pthm-qec-distinguishability-four-level-evolution)
- [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)
- [lem-qec-prereq-finite-taylor-control](item-lem-qec-prereq-finite-taylor-control)
- [math:thm-qc-density-spectral-ensemble](https://alphabetamath.cc/item/thm-qc-density-spectral-ensemble)


## Statement

Assume the four-level model with real $\omega_0,\Delta$, rate $\gamma\geq0$, and the syndrome recovery $\mathcal R_4$. The code has orthonormal basis $|0\rangle,|1\rangle$. For a normalized code state $|\psi\rangle=a|0\rangle+b|1\rangle$, let $F_\psi(t)$ be the branch-averaged decoded state fidelity: the sum of each recovery outcome probability times its conditional output's overlap with $|\psi\rangle$, with a zero-probability outcome contributing zero. At fixed parameters, as $t\to0$ through nonnegative times,

$$1-F_\psi(t)=c_\psi\gamma\Delta^2t^3+O(t^4),\qquad c_\psi=\frac{|a|^2|b|^2}{3}\leq\frac1{12}.$$

Here $O(t^4)$ means a quantity bounded in absolute value by $C t^4$ for sufficiently small nonnegative $t$, for a constant $C$ that may depend on the fixed parameters. For positive $\gamma$, one power of time comes from the decay probability and two from the relative phase mismatch between decay paths. If $\gamma=0$ or $\Delta=0$, the recovered output equals the input for every code density operator at every finite $t\geq0$.

## Statement references

[post-qec-distinguishability-four-level-model](item-post-qec-distinguishability-four-level-model)

[alg-qec-distinguishability-r4](item-alg-qec-distinguishability-r4)

[pthm-qec-distinguishability-r4-fidelity](item-pthm-qec-distinguishability-r4-fidelity)

[pthm-qec-distinguishability-decayed-coherence](item-pthm-qec-distinguishability-decayed-coherence)

[def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[lem-qec-prereq-finite-taylor-control](item-lem-qec-prereq-finite-taylor-control)

[math:thm-qc-density-spectral-ensemble](https://alphabetamath.cc/item/thm-qc-density-spectral-ensemble)

## Facts & Assumptions

[F1] The postulated model has real $\omega_0,\Delta$, rate $\gamma\geq0$, and the stated orthonormal code basis; its evolution is a linear channel. [post-qec-distinguishability-four-level-model](item-post-qec-distinguishability-four-level-model)

[F2] The recovery has null operation $X\mapsto PXP$ and decay operation $X\mapsto UXU^\dagger$, with $P=|0\rangle\langle0|+|1\rangle\langle1|$ and $U=|0\rangle\langle2|+|1\rangle\langle3|$; discarding the outcome sums these operations. [alg-qec-distinguishability-r4](item-alg-qec-distinguishability-r4)

[F3] For $\gamma t>0$, put $p=1-e^{-\gamma t}$ and $\chi=\gamma(e^{i\Delta t}-e^{-\gamma t})/[(\gamma+i\Delta)p]$. The fidelity is $F_\psi=1-2|a|^2|b|^2p(1-\operatorname{Re}\chi)$. At $\gamma t=0$, it is one. [pthm-qec-distinguishability-r4-fidelity](item-pthm-qec-distinguishability-r4-fidelity)

[F4] For $\gamma t>0$, the normalized null output is $|\psi\rangle\langle\psi|$ and the normalized decay output has diagonal entries $|a|^2,|b|^2$ and off-diagonal entries $ab^*\chi$ and its conjugate. At $\gamma t=0$ the decay branch has zero probability. [pthm-qec-distinguishability-decayed-coherence](item-pthm-qec-distinguishability-decayed-coherence)

[F5] Outer products and adjoints use the finite orthonormal-basis conventions. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F6] The finite exponential series has a controlled remainder, and products and quotients with nonzero limiting denominator have the stated fixed-parameter expansions. [lem-qec-prereq-finite-taylor-control](item-lem-qec-prereq-finite-taylor-control)

[F7] On a nonzero finite-dimensional complex inner-product space, every density operator has a finite spectral ensemble $\rho=\sum_{j=1}^m\lambda_j|e_j\rangle\langle e_j|$, where the $e_j$ are orthonormal unit vectors, $\lambda_j>0$, and $\sum_j\lambda_j=1$. [math:thm-qc-density-spectral-ensemble](https://alphabetamath.cc/item/thm-qc-density-spectral-ensemble)

[F8] For the normalized code input and every $\gamma\geq0$, $t\geq0$, the exact evolved operator is $\rho(t)=e^{-\gamma t}|\psi\rangle\langle\psi|+(1-e^{-\gamma t})(|a|^2|2\rangle\langle2|+|b|^2|3\rangle\langle3|)+[ab^*c(t)|2\rangle\langle3|+\mathrm{h.c.}]$, where $c(t)=\gamma(e^{i\Delta t}-e^{-\gamma t})/(\gamma+i\Delta)$ when $(\gamma,\Delta)\ne(0,0)$ and $c(t)=0$ at $(0,0)$; h.c. denotes the Hermitian conjugate of the preceding term. [pthm-qec-distinguishability-four-level-evolution](item-pthm-qec-distinguishability-four-level-evolution)

## Proof

**Given:** The model, recovery, normalized code state, and fixed parameters in the statement.

**Goal:** Establish the short-time expansion and exact recovered outputs in the two parameter limits.

1.1 Suppose $\gamma>0$ and $t>0$. Set $c=\gamma(e^{i\Delta t}-e^{-\gamma t})/(\gamma+i\Delta)$, so $p\chi=c$. Applying the exponential expansion in [F6] to the scalar exponentials, and using $\gamma+i\Delta\ne0$, gives $p=\gamma t-\gamma^2t^2/2+\gamma^3t^3/6+O(t^4)$ and $c=\gamma t+\gamma(i\Delta-\gamma)t^2/2+\gamma(\gamma^2-i\gamma\Delta-\Delta^2)t^3/6+O(t^4)$. Consequently $p-\operatorname{Re}c=\gamma\Delta^2t^3/6+O(t^4)$. [given, F3, F6, algebra]

1.2 If $\gamma=0$ and $\Delta\ne0$, the expression for $c(t)$ in [F8] has zero numerator and nonzero denominator, so $c(t)=0$; if also $\Delta=0$, its specified boundary value is zero. Thus [F8] gives $\rho(t)=|\psi\rangle\langle\psi|$ at $\gamma=0$. By [F2] and [F5], $P|\psi\rangle=|\psi\rangle$ and $U|\psi\rangle=0$, so the unnormalized recovered null output is the input projector and the decay output is zero. The loss is identically zero and satisfies the expansion. If $\Delta=0$ and $\gamma t>0$, [F3] gives $\chi=1$; the two conditional outputs in [F4] then both equal $|\psi\rangle\langle\psi|$. At $t=0$, [F8] gives $c(0)=0$ and $\rho(0)=|\psi\rangle\langle\psi|$, and the same recovery calculation applies. Summing outcome-weighted outputs therefore restores every pure code state in either limit. [given, F2, F3, F4, F5, F8, algebra]

2.1 By [F3], $1-F_\psi=2|a|^2|b|^2(p-\operatorname{Re}c)$, which gives the displayed cubic coefficient. Normalization gives $|a|^2+|b|^2=1$, so $(|a|^2-|b|^2)^2\geq0$ implies $|a|^2|b|^2\leq1/4$. Moreover $p=\gamma t+O(t^2)$, and division after cancelling $t$ gives $1-\operatorname{Re}\chi=\Delta^2t^2/6+O(t^3)$. Thus the two factors have the stated time orders. [given, F3, F6, step 1.1, algebra]

3.1 The evolved-and-recovered map is linear by [F1] and [F2]. Apply [F7] on the code space $\mathcal C=\operatorname{span}\{|0\rangle,|1\rangle\}$, a nonzero two-dimensional complex inner-product space by [F1] and [F5]. Every code density operator therefore has an ensemble $\rho=\sum_{j=1}^m\lambda_j|e_j\rangle\langle e_j|$ with unit code vectors $e_j$ and positive weights summing to one. In either parameter limit, step 1.2 restores each projector, so linearity gives $\mathcal R_4(\mathcal N_t(\rho))=\sum_j\lambda_j|e_j\rangle\langle e_j|=\rho$. Together with step 2.1, this proves the exact limits and the expansion for all $\gamma\geq0$. [F1, F2, F5, F7, step 1.2, step 2.1, algebra] ∎
