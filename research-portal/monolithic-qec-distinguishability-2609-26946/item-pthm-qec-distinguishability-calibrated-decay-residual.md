---
title: Jump-time dephasing vanishes with the checking interval
status: published
research_item: pthm-qec-distinguishability-calibrated-decay-residual
dependency_level: 21
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 16, final paragraph of Section S4
      statement: The article discusses phase accumulation between a decay and its
        detection, calibration of known phases, and a jump-time-averaged
        residual that vanishes with the checking interval.
      hypotheses: The article's idealized lifted model and checking discussion.
      reading_limits: The supplied PDF text on p. 16 was read for attribution. This
        article citation is not used as proof of the conditional assertions
        below.
---

PDF p. 16: ` Final paragraph of S4 `

## Prerequisites

- [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)
- [pthm-qec-distinguishability-calibrated-null-compensation](item-pthm-qec-distinguishability-calibrated-null-compensation)
- [pthm-qec-distinguishability-single-decay-correctability](item-pthm-qec-distinguishability-single-decay-correctability)
- [lem-qec-prereq-jump-time-phase-gram](item-lem-qec-prereq-jump-time-phase-gram)
- [def-qec-prereq-diagonal-lift-phase-data](item-def-qec-prereq-diagonal-lift-phase-data)
- [lem-qec-prereq-bounded-phase-averaging-control](item-lem-qec-prereq-bounded-phase-averaging-control)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)
- [def-qec-distinguishability-ae-code](item-def-qec-distinguishability-ae-code)
- [def-qec-distinguishability-aydin-barg-code](item-def-qec-distinguishability-aydin-barg-code)
- [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract)
- [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)
- [math:def-qc-trace-norm](https://alphabetamath.cc/item/def-qc-trace-norm)
- [math:def-qc-exact-recovery-of-a-quantum-code](https://alphabetamath.cc/item/def-qc-exact-recovery-of-a-quantum-code)
- [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)
- [math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)
- [math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)


## Statement

Adopt the finite lifted model, its physical and spectral hypotheses, and the Axiom of Choice, Countable Choice and Dependent Choice. Fix its finite parameters, including $\gamma>0$. Write $V_K$ for its spin-$K$ block and $H_R=\bigoplus_{K=0}^N V_K$ for the full finite model space. Choose either the specified Æ code in the $J=5$ block or the specified signed Aydin–Barg code in the $J=4$ block, with its defining logical isometry $V:H_L\to V_J\subseteq H_R$, where $H_L=\mathbb C^2$. For the complete selected coherent order-one tensor error span, choose a set $S\subseteq\{0,\ldots,N\}$ containing $J$ and $J-1$ with $|K-J|\leq1$ for each $K\in S$. The span is the complex linear span of the identity and all embedded coherent rank-zero and rank-one spherical-tensor components from $V_J$ into these selected blocks, in the stated error-span contract on $\bigoplus_{K\in S}V_K$. Tensor rank refers to the transformation law, not matrix rank or individually resolved magnetic transitions. A density operator is a positive semidefinite operator of trace one. Let $\rho$ be a logical density operator, start from $V\rho V^\dagger$, and perform the ideal block check after an interval of length $\tau>0$. For the single-decay history, the elapsed time between the jump into the $J-1$ block and the check is at most $\tau$.

A decoded recovery channel is a complex-linear, completely positive, trace-preserving map $\mathcal R:\mathcal L(H_R)\to\mathcal L(H_L)$, where $\mathcal L(K)$ is the space of linear endomorphisms of $K$. Exact decoded recovery of a noise channel $\mathcal N$ means $\mathcal R\circ\mathcal N\circ\operatorname{Ad}_V=\operatorname{id}_{\mathcal L(H_L)}$, with $\operatorname{Ad}_V(X)=VXV^\dagger$. The trace norm $\|X\|_1$ is the sum of the singular values of $X$.

For sufficiently small $\tau$, a recovery channel correcting the complete selected coherent order-one tensor error span decodes the exact normalized detected-decay branch to within $O(\tau)$ of $\rho$ in trace norm, uniformly over logical density operators. The detected-branch probability is $\gamma\tau+O(\tau^2)$, and the corresponding unnormalized decoded error is $O(\tau^2)$. A known diagonal phase correction for an elapsed time at most $\tau$ preserves these limits. For the special lift $\Delta(J,m)=\Delta_0Jm$, a calibrated inverse of the known null-branch rotation returns a null-branch state to its state at the start of the interval, provided the unitary control is available. Calibration means that the relevant lift values and elapsed interval are known to the recovery rule; it does not reveal the jump time.

More specifically, for the separate phase-averaging assertion let $(\Omega,\mathcal F,\mathbb P)$ be a probability space and $s:\Omega\to\mathbb R$ a measurable real random variable whose common input-independent law is supported on $I=[a,a+\tau]$. Let $\eta$ be a density operator on $\mathbb C^r$ for an integer $r\geq1$, and suppose a normalized conditional branch is represented in its fixed finite basis by $\sigma=\mathbb E[D(s)\eta D(s)^\dagger]$, where $D(s)$ has diagonal entries $e^{id_js}$ for fixed real $d_j$. Here $\mathbb E$ denotes integration against $\mathbb P$, entrywise for matrices. Put $m=\mathbb E s$ and $M=\max_{j,k}|d_j-d_k|$; assume that $m$ and the $d_j$ are supplied to the mean-phase correction. After the known mean-phase correction $\sigma\mapsto D(m)^\dagger\sigma D(m)$, each relative-coherence multiplier differs from $1$ by at most $M^2\tau^2/2$. Thus this phase-averaging residual vanishes as $\tau\downarrow0$ for fixed $M$. This conditional diagonal representation and its common waiting law are additional hypotheses; they are not asserted for an arbitrary decoded branch by the entrywise estimate.

The single-branch bounds do not alone establish a repeated-check channel limit or a multiple-decay bound.

## Statement references

[def-qec-distinguishability-ae-code](item-def-qec-distinguishability-ae-code)

[def-qec-distinguishability-aydin-barg-code](item-def-qec-distinguishability-aydin-barg-code)

[def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract)

[math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)

[math:def-qc-trace-norm](https://alphabetamath.cc/item/def-qc-trace-norm)

[math:def-qc-exact-recovery-of-a-quantum-code](https://alphabetamath.cc/item/def-qc-exact-recovery-of-a-quantum-code)

[math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)

[math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)

[math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable)

## Facts & Assumptions

[F1] The stipulated finite model has a real diagonal Hamiltonian, three downward jumps, and fixed finite lift values. [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

[F2] For either specified code, the complete coherent order-one tensor error span has a recovery channel. The exact detected-decay branch has probability $\gamma\tau+O(\tau^2)$ and normalized decoded trace-norm error $O(\tau)$; known diagonal calibration over at most $\tau$ preserves that limit. [pthm-qec-distinguishability-single-decay-correctability](item-pthm-qec-distinguishability-single-decay-correctability)

[F3] For the special lift $\Delta(J,m)=\Delta_0Jm$, ideal null checks give a known diagonal rotation, whose inverse returns the interval's initial state when the calibrated control is available. [pthm-qec-distinguishability-calibrated-null-compensation](item-pthm-qec-distinguishability-calibrated-null-compensation)

[F4] In a finite diagonal lift, relative phase evolution is determined by differences of the real diagonal entries; calibration supplies specified phase data, not an unobserved jump time. [def-qec-prereq-diagonal-lift-phase-data](item-def-qec-prereq-diagonal-lift-phase-data)

[F5] Under the stated common probability law and diagonal averaging formula, the phase Gram entries multiply the corresponding matrix coherences. [lem-qec-prereq-jump-time-phase-gram](item-lem-qec-prereq-jump-time-phase-gram)

[F6] Under Countable Choice, centering a bounded waiting time on an interval of length $\tau$ gives the uniform multiplier estimate $M^2\tau^2/2$ for frequencies with pairwise differences bounded by $M$. [lem-qec-prereq-bounded-phase-averaging-control](item-lem-qec-prereq-bounded-phase-averaging-control)

[F7] The two code definitions specify their codewords and logical isometries. The error-span contract specifies the ambient identity and coherent rank-zero and rank-one tensor components for finite selected blocks; here the host and downward neighbor are selected. [def-qec-distinguishability-ae-code](item-def-qec-distinguishability-ae-code) [def-qec-distinguishability-aydin-barg-code](item-def-qec-distinguishability-aydin-barg-code) [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract)

[F8] Quantum channels are complex-linear, completely positive and trace-preserving on full operator spaces. Exact decoded recovery has logical output and satisfies the channel-composition identity in the statement; the trace norm is the sum of singular values. [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel) [math:def-qc-exact-recovery-of-a-quantum-code](https://alphabetamath.cc/item/def-qc-exact-recovery-of-a-quantum-code) [math:def-qc-trace-norm](https://alphabetamath.cc/item/def-qc-trace-norm)

[F9] A probability space has a probability measure of total mass one. A real random variable is measurable into the real Borel space, and expectation of an integrable variable is its integral against the probability measure. The phase-averaging estimate applies to the bounded $s$ in the statement and supplies the finite mean used in its correction. [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure) [math:def-random-element-and-real-random-variable](https://alphabetamath.cc/item/def-random-element-and-real-random-variable) [math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable) [lem-qec-prereq-bounded-phase-averaging-control](item-lem-qec-prereq-bounded-phase-averaging-control)

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice and the inherited physical and spectral hypotheses of the model. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice) [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

## Proof

**Given:** The model, code, ideal check and assumptions in the statement; for the final multiplier estimate, also the specified common law and diagonal averaging representation.

**Goal:** Establish the conditional recovery limits, the available null-phase compensation, and the stated conditional phase-averaging bound.

1.1 A single jump occurring during the interval enters the next lower block, and the check occurs no later than the interval endpoint. Its time in that block before the check is therefore between $0$ and $\tau$. The code isometries and the selected span in [F7] match the hypotheses of [F2], with the host and its downward neighbor selected. In the decoded-recovery and trace-norm conventions of [F8], the recovery, branch probability and normalized trace-norm estimate follow from [F2] under these fixed-model and code hypotheses. Multiplying the normalized difference by its branch probability gives the $O(\tau^2)$ unnormalized decoded error. [given, F1, F2, F7, F8, A1]

1.2 For the additional diagonal representation, use the probability-space and expectation conventions in [F9]. The supplied mean $m$ specifies the correction $D(m)^\dagger$. To meet the interval hypothesis of [F5], put $u=s-a$, which lies in $[0,\tau]$ almost surely, and let $\mu$ be its Borel probability law: $\mu(B)=\mathbb P(\{\omega:u(\omega)\in B\})$. Values on any exceptional null set can be reset to zero without changing any integral. Put $D_a(u)=\operatorname{diag}(e^{id_ju})$ and $\eta_a=D(a)\eta D(a)^\dagger$. Since $D(a)$ is diagonal with entries of modulus one, $\eta_a$ is positive with trace one. The original branch is $\mathbb E[D_a(u)\eta_aD_a(u)^\dagger]$. The functions $d_ju$ are bounded Borel functions on $[0,\tau]$, so [F5] applies to this translated representation. In the original basis its multiplier relative to $\eta_{jk}$ is $e^{i(d_j-d_k)a}\int e^{i(d_j-d_k)u}\,d\mu(u)=\mathbb E e^{i(d_j-d_k)s}=G_{jk}$, including when $\eta_{jk}=0$; no division by that entry is used. The inverse mean-phase correction multiplies it by $e^{-i(d_j-d_k)m}$. The law is supported on an interval of length $\tau$ and the finite set of frequency differences is bounded by $M$, so [F6] bounds the corrected multiplier's distance from $1$ by $M^2\tau^2/2$. [given, F5, F6, F9, A1]

2.1 The known diagonal correction over at most $\tau$ preserves the detected-branch limit by [F2]. For the special lift, [F3] gives the null rotation and its inverse under the stated control assumption. The calibration convention in [F4] does not make the random jump time observable. [F2, F3, F4, step 1.1]

3.1 The bound in step 1.2 tends to zero for fixed $M$. It applies to the stated conditional representation; the recovery estimate in step 1.1 is a separate result and does not require identifying every decoded branch with that representation. Neither calculation supplies probabilities for multiple-decay histories or a composition estimate for all repeated-check outcomes. This proves the stated conditional conclusions. [step 1.1, step 2.1, step 1.2] ∎
