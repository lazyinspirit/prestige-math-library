---
id: def-qec-prereq-calibrated-cycle-contract
kind: definition
domain: mathematics
title: Calibrated recovery cycles and accumulated-error contract
status: draft
origin: session
deps:
  - def-qec-prereq-restricted-logical-channel
  - def-qec-prereq-diagonal-lift-phase-data
  - lem-qec-prereq-channel-composition-budget
  - math:def-qc-instrument-and-conditional-state
  - math:def-probability-measure
  - math:def-filtration-and-filtered-probability-space
  - math:def-sigma-algebra
  - math:prop-measure-monotonicity
  - math:thm-finite-union-bound
  - physics:lem-qsm-dt-finite-matrix-trace-ideal
dependency_roles:
  def-qec-prereq-restricted-logical-channel: mathematical-premise
  def-qec-prereq-diagonal-lift-phase-data: mathematical-premise
  lem-qec-prereq-channel-composition-budget: mathematical-premise
  math:def-qc-instrument-and-conditional-state: mathematical-premise
  math:def-probability-measure: mathematical-premise
  math:def-filtration-and-filtered-probability-space: mathematical-premise
  math:def-sigma-algebra: mathematical-premise
  math:prop-measure-monotonicity: mathematical-premise
  math:thm-finite-union-bound: mathematical-premise
  physics:lem-qsm-dt-finite-matrix-trace-ideal: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
formulation_deps:
  - def-qec-prereq-restricted-logical-channel
  - def-qec-prereq-diagonal-lift-phase-data
  - lem-qec-prereq-channel-composition-budget
  - math:def-qc-instrument-and-conditional-state
  - math:def-probability-measure
  - math:def-filtration-and-filtered-probability-space
  - physics:lem-qsm-dt-finite-matrix-trace-ideal
argument_deps:
  - def-qec-prereq-restricted-logical-channel
  - def-qec-prereq-diagonal-lift-phase-data
  - lem-qec-prereq-channel-composition-budget
  - math:def-qc-instrument-and-conditional-state
  - math:def-probability-measure
  - math:def-filtration-and-filtered-probability-space
  - math:def-sigma-algebra
  - math:prop-measure-monotonicity
  - math:thm-finite-union-bound
  - physics:lem-qsm-dt-finite-matrix-trace-ideal
proof_strategy: direct
---

## Definition

Let $H_L,H_P,H_O,H_S$ be nonzero finite-dimensional complex inner-product spaces. Write $\mathcal L(H)$ for the linear endomorphisms of $H$. A density operator is a positive semidefinite operator of trace one. A quantum channel is a complex-linear, completely positive, trace-preserving map; complete positivity means that every finite identity amplification preserves positive semidefinite operators.

A calibrated cycle consists of a linear isometry $V:H_L\to H_P$ encoding a logical input $\rho$ as $V\rho V^*$, a specified finite interval of length $h\geq0$ with a noise channel $\mathcal N_h:\mathcal L(H_P)\to\mathcal L(H_O)$, a finite instrument $(\mathcal I_a)_{a\in\Omega}$ from $H_O$ to $H_S$, and a decoder channel $\mathcal R_a:\mathcal L(H_S)\to\mathcal L(H_L)$ for each outcome. Here $\Omega$ is finite and nonempty; each instrument map is completely positive and their sum is trace-preserving. The unconditional logical cycle is $\mathcal E_h=\sum_{a\in\Omega}\mathcal R_a\circ\mathcal I_a\circ\mathcal N_h\circ\operatorname{Ad}_V$, where $\operatorname{Ad}_V(X)=VXV^*$.

When the recovery rule uses diagonal-lift phases, calibration means that the specified real diagonal lift values and the elapsed interval used by that rule are available to it. It does not assert that an unknown decay time is observed; any averaging over such a time requires a specified probability distribution.

A continuous-checking error contract at fixed total time $T>0$ specifies, for each positive integer $N$, a calibrated cycle with $h=T/N$, a reference logical channel $\mathcal F_h$, and a uniform bound $\|\mathcal E_h-\mathcal F_h\|_{1\to1}\leq\epsilon_N$. Here $\|A\|_1=\operatorname{Tr}\sqrt{A^*A}$ and $\|\Phi\|_{1\to1}=\sup_{X\ne0}\|\Phi(X)\|_1/\|X\|_1$. The contract also specifies a bound $\delta_N$ on the probability of two or more decays in a cycle, uniformly over the allowed inputs, together with the event model that defines this probability. It states the dependence of $\epsilon_N$ and $\delta_N$ on $N$, $T$ and the chosen code support: the physical subspace containing the encoded states. The condition $N\epsilon_N\to0$ is sufficient to certify vanishing accumulated channel error through this budget; it is not necessary for the actual error to vanish when the supplied bound is loose. A separate claim that the probability of any multiple-decay cycle vanishes can use $N\delta_N\to0$ under the history condition below. If a reference system is included, the same contract must explicitly bound the identity-extended one-cycle difference on that reference.

For that probability claim, for each $N$ and each allowed input the application supplies a probability space $(\Xi,\mathcal A,\mathbb P)$, a filtration $\mathcal G_0\subseteq\cdots\subseteq\mathcal G_N\subseteq\mathcal A$, and events $B_k\in\mathcal G_k$ describing two or more decays in cycle $k$, for $1\leq k\leq N$. The required bound after every preceding measurable history is $\mathbb P(B_k\cap H)\leq\delta_N\mathbb P(H)$ for every $H\in\mathcal G_{k-1}$, with $\delta_N\geq0$. When $\mathbb P(H)>0$, this is the conditional-probability bound $\mathbb P(B_k\mid H):=\mathbb P(B_k\cap H)/\mathbb P(H)\leq\delta_N$; the intersection inequality also covers histories of probability zero. The sample space need not be finite, and independence is not assumed.

A bound on normalized single-decay conditional states alone is not an unconditional channel bound. An accumulation argument using such bounds must specify the corresponding outcome probabilities and weight each conditional contribution by its probability, including all other outcomes. Zero-probability outcomes have no assigned conditional state and contribute zero through their unnormalized output.

## Definition references

[[def-qec-prereq-restricted-logical-channel]]

[[def-qec-prereq-diagonal-lift-phase-data]]

[[lem-qec-prereq-channel-composition-budget]]

[[math:def-qc-instrument-and-conditional-state]]

[[math:def-probability-measure]]

[[math:def-filtration-and-filtered-probability-space]]

[[math:def-sigma-algebra]]

[[math:prop-measure-monotonicity]]

[[math:thm-finite-union-bound]]

[[physics:lem-qsm-dt-finite-matrix-trace-ideal]]

## Facts & Assumptions

[F1] Isometric encoding and a channel followed by a decoded recovery give a logical channel on the logical operator space. [[def-qec-prereq-restricted-logical-channel]]

[F2] Calibrated diagonal-lift data consist of specified real lift values and the elapsed interval available to the recovery rule; an unknown jump time is not thereby observed. [[def-qec-prereq-diagonal-lift-phase-data]]

[F3] For finite channels $\mathcal E,\mathcal F$ on one matrix space, $\|\mathcal E^N-\mathcal F^N\|_{1\to1}\leq N\|\mathcal E-\mathcal F\|_{1\to1}$; the analogous bound holds on a fixed finite reference extension. [[lem-qec-prereq-channel-composition-budget]]

[F4] A finite instrument has completely positive outcome maps whose sum preserves trace. Its outcome weight is the trace of the unnormalized output, and its conditional state is that output divided by its weight when the weight is positive. [[math:def-qc-instrument-and-conditional-state]]

[F5] On a finite complex inner-product space, $\|X\|_1=\operatorname{Tr}\sqrt{X^*X}$ is a norm, in particular definite and homogeneous and satisfying the triangle inequality. [[physics:lem-qsm-dt-finite-matrix-trace-ideal]]

[F6] A probability space has a measure of total mass one on its event sigma-algebra. A filtration is an increasing sequence of sub-sigma-algebras, without a requirement that the initial one be trivial. [[math:def-probability-measure]] [[math:def-filtration-and-filtered-probability-space]]

[F7] A sigma-algebra is closed under complements and finite unions, hence under finite intersections. [[math:def-sigma-algebra]]

[F8] A measure is monotone on measurable sets. For finitely many events $A_1,\ldots,A_N$, $\mathbb P(\bigcup_{k=1}^N A_k)\leq\sum_{k=1}^N\mathbb P(A_k)$. [[math:prop-measure-monotonicity]] [[math:thm-finite-union-bound]]

## Justification

**Given:** The finite spaces, encoding, channels, instrument, calibrated data and error contract in the Definition; for a multiple-decay claim, the supplied probability space, filtration, events and history bound.

**Goal:** Verify the logical cycle and the stated channel and event budgets, and explain the role of branch weights.

1.1 The encoding and noise maps are well typed by [F1]. Each composite $\mathcal R_a\circ\mathcal I_a\circ\mathcal N_h\circ\operatorname{Ad}_V$ is completely positive, because every finite amplification is a composition of positive maps. Their finite sum is completely positive. Since every decoder preserves trace and the instrument sum preserves trace by [F4], the sum also preserves trace; hence $\mathcal E_h$ is a channel. The phase clause is precisely the availability assumption of [F2] and does not assert existence of an observation or an averaging law. [given, F1, F2, F4]

1.2 For each fixed $N$, applying [F3] to the specified cycle and reference gives $\|\mathcal E_h^N-\mathcal F_h^N\|_{1\to1}\leq N\epsilon_N$; the reference-extended version requires the separately stated extended bound. Thus $N\epsilon_N\to0$ is sufficient for this budget to certify vanishing accumulated error. Necessity for the actual error would be false: if both channels are the identity and the supplied valid bound is $\epsilon_N=1/N$, their accumulated error is zero for every $N$, while $N\epsilon_N=1$. Calibration alone implies neither a one-cycle error estimate nor its asymptotic rate. [given, F3, algebra]

1.3 Fix an allowed input and its supplied event model. Put $H_k=\bigcap_{j<k}(\Xi\setminus B_j)$, with $H_1=\Xi$, and $A_k=B_k\cap H_k$. By [F6] and [F7], $H_k\in\mathcal G_{k-1}$ and $A_k\in\mathcal G_k\subseteq\mathcal A$. The $A_k$ are disjoint first-occurrence events and have union $\bigcup_{k=1}^N B_k$: every point in that finite union has a least index at which it belongs to a $B_k$. [given, F6, F7, construct]

2.1 The history bound gives $\mathbb P(A_k)\leq\delta_N\mathbb P(H_k)\leq\delta_N$, since [F6] and monotonicity in [F8] give $\mathbb P(H_k)\leq\mathbb P(\Xi)=1$. The union bound in [F8] therefore gives $\mathbb P(\bigcup_{k=1}^N B_k)=\mathbb P(\bigcup_{k=1}^N A_k)\leq\sum_{k=1}^N\mathbb P(A_k)\leq N\delta_N$. Thus $N\delta_N\to0$ suffices for the separate event claim. The event model and the history estimate remain assumptions to be supplied by an application. [given, F6, F8, step 1.3, algebra]

3.1 The decoded branch maps in step 1.1 also form a finite instrument, so [F4] applies to their outputs. For an instrument outcome of positive weight $p_a$, [F4] writes its unnormalized output as $p_a\rho_a$; at zero weight its positive unnormalized output has trace zero and is zero. Indeed, for a positive semidefinite matrix $B$, $\sqrt{B^*B}=B$, so $\|B\|_1=\operatorname{Tr}B$; definiteness in [F5] then gives $B=0$ if its trace is zero. For any two families of unnormalized logical branch outputs $(B_a)$ and $(C_a)$ on the same finite outcome set, the triangle inequality in [F5] gives $\|\sum_a B_a-\sum_a C_a\|_1\leq\sum_a\|B_a-C_a\|_1$. Consequently unconditional output comparisons involve the probability-weighted contributions and all outcomes, including those outside the single-decay branch. A conditional-state estimate without its weight and the other branches does not supply the stated channel norm bound. [F4, F5, step 1.1, algebra] ∎
