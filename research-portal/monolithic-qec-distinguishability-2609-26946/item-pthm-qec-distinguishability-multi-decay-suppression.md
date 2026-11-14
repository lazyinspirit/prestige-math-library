---
title: Multiple decays vanish over fixed total time with fast checks
status: draft
research_item: pthm-qec-distinguishability-multi-decay-suppression
dependency_level: 18
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF page 14, opening paragraph of Section S4; page 16, final paragraph
        of Section S4
      statement: The article states that two or more decays in one check interval have
        probability O((gamma tau)^2), vanish over fixed total time as the
        interval shrinks, and that the number of detected decays is set by the
        physical decay rate rather than checking frequency.
      hypotheses: The article's idealized angular-momentum model, fast checks and
        check-and-recovery discussion.
      reading_limits: The supplied extracted text at the cited passages was read. This
        reference attributes the article's claim and is not used as proof of the
        conditional bounds below.
---

PDF p. 14: ` Opening paragraph of S4 `; PDF p. 16: ` Final S4 paragraph `

## Prerequisites

- [lem-qec-author-9ff6bb2d6819-no-jump-survival](item-lem-qec-author-9ff6bb2d6819-no-jump-survival)
- [lem-qec-author-9ff6bb2d6819-record-hazard-compensator](item-lem-qec-author-9ff6bb2d6819-record-hazard-compensator)
- [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)
- [alg-qec-distinguishability-syndrome-measurement](item-alg-qec-distinguishability-syndrome-measurement)
- [pthm-qec-distinguishability-uniform-decay-rate](item-pthm-qec-distinguishability-uniform-decay-rate)
- [lem-qec-prereq-bounded-intensity-two-jumps](item-lem-qec-prereq-bounded-intensity-two-jumps)
- [math:lem-conditional-intensity-interevent-survival-and-density](https://alphabetamath.cc/item/lem-conditional-intensity-interevent-survival-and-density)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)
- [math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)
- [math:cor-expectation-of-an-indicator-is-probability](https://alphabetamath.cc/item/cor-expectation-of-an-indicator-is-probability)
- [math:cor-expectation-linearity-monotonicity-and-modulus-bound](https://alphabetamath.cc/item/cor-expectation-linearity-monotonicity-and-modulus-bound)
- [math:def-conditional-expectation-given-a-sigma-algebra](https://alphabetamath.cc/item/def-conditional-expectation-given-a-sigma-algebra)


## Statement

Adopt the finite lifted model, its physical and spectral hypotheses, and the Axiom of Choice, Countable Choice and Dependent Choice. Its finite physical space is the orthogonal sum of angular-momentum blocks $J=0,\ldots,N$, with $N\geq1$; $\gamma>0$ is the specified downward jump-rate scale. Use the exact monitored quantum-jump record of its finite GKSL evolution. A jump is one event in that record, and an interval has a multiple-decay event if it contains at least two jumps.

Let $T>0$, let $M$ be a positive integer, and set $\tau=T/M$. At the end of each interval perform the ideal two-projector check of a fixed excited host block $J_0\geq1$, and, after a detected outcome, apply a supplied recovery that returns the state to that host block before the next interval. Start in that block. The recovery may depend on the earlier record; it is assumed instantaneous for this cycle model. Let $D_M$ be the number of detected outcomes. Then each interval has multiple-decay probability at most $\gamma^2\tau^2/2$, even conditional on its preceding history, and the probability that any of the $M$ intervals contains multiple decays is at most $\gamma^2T\tau/2$. Consequently that probability tends to zero as $\tau\downarrow0$ along $T/M$.

Furthermore $\mathbb E D_M\leq\gamma T$, independently of $M$. Thus increasing the checking frequency does not by itself increase the expected number of detected decay outcomes without bound. This is an upper bound governed by the model's physical rate; it does not assert an exact count or a Poisson distribution. The statement concerns multiple-decay probability, not an unspecified error metric or a complete proof of recovery fidelity.

## Statement references

[post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

[alg-qec-distinguishability-syndrome-measurement](item-alg-qec-distinguishability-syndrome-measurement)

[pthm-qec-distinguishability-uniform-decay-rate](item-pthm-qec-distinguishability-uniform-decay-rate)

[lem-qec-prereq-bounded-intensity-two-jumps](item-lem-qec-prereq-bounded-intensity-two-jumps)

[lem-qec-author-9ff6bb2d6819-no-jump-survival](item-lem-qec-author-9ff6bb2d6819-no-jump-survival)

[lem-qec-author-9ff6bb2d6819-record-hazard-compensator](item-lem-qec-author-9ff6bb2d6819-record-hazard-compensator)

[math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable)

## Facts & Assumptions

[F1] The finite lifted model specifies a diagonal Hamiltonian and three downward jump matrices $L_\delta$, $\delta=-1,0,1$, together with finite GKSL evolution and the stated inherited hypotheses. [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

[F2] For these jumps, $Q:=\sum_\delta L_\delta^\dagger L_\delta=\gamma\sum_{J=1}^{N}\Pi_J$, where $\Pi_J$ projects onto block $J$; each jump maps block $J\geq1$ into block $J-1$ and annihilates the ground block. [pthm-qec-distinguishability-uniform-decay-rate](item-pthm-qec-distinguishability-uniform-decay-rate) [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

[F3] The ideal syndrome instrument measures $P=\Pi_{J_0}$ and $I-P$ after the interval; a suitable recovery is an additional input, not something constructed by the check. [alg-qec-distinguishability-syndrome-measurement](item-alg-qec-distinguishability-syndrome-measurement)

[F4] For a finite GKSL jump instrument, $Q\leq rI$ supplies a history-uniform hazard bound $r$ for every conditional state. Under that bound, the probability of at least two jumps in an interval of length $\tau$ is at most $r^2\tau^2/2$, and the probability of such an interval among $T/\tau$ intervals is at most $r^2T\tau/2$, including when allowed resets change the interval's initial state. [lem-qec-prereq-bounded-intensity-two-jumps](item-lem-qec-prereq-bounded-intensity-two-jumps)

[F5] A conditional waiting law with hazard $\lambda$ has no-jump survival $\exp(-\int\lambda)$ under its stated measurable-law hypotheses. [math:lem-conditional-intensity-interevent-survival-and-density](https://alphabetamath.cc/item/lem-conditional-intensity-interevent-survival-and-density)

[F6] For the finite matrices in [F1], put $B=-iH-Q/2$ and $V_t=e^{tB}$. The no-jump map is $S_t(X)=V_tXV_t^\dagger$, with $\operatorname{Tr}S_t(\sigma)>0$ for every density matrix $\sigma$ and finite $t\geq0$. The exact record instrument identifies the conditional state on a zero-event interval of length $t$ as $S_t(\sigma)/\operatorname{Tr}S_t(\sigma)$; its record average is the specified GKSL channel. These interfaces assume AC, already included in [A1]. [lem-qec-author-9ff6bb2d6819-no-jump-survival](item-lem-qec-author-9ff6bb2d6819-no-jump-survival) [lem-qec-author-9ff6bb2d6819-record-hazard-compensator](item-lem-qec-author-9ff6bb2d6819-record-hazard-compensator)

[F7] On any probability space, expectation is integration against its probability measure. For every measurable event $A$, $\mathbb E\mathbf 1_A=\mathbb P(A)$; in particular its indicator is integrable since $|\mathbf 1_A|=\mathbf 1_A$ and $\mathbb P(A)\leq1$. Expectation is linear for two integrable random variables and monotone for almost-sure order between real integrable random variables. [math:def-expectation-of-a-nonnegative-or-integrable-random-variable](https://alphabetamath.cc/item/def-expectation-of-a-nonnegative-or-integrable-random-variable) [math:cor-expectation-of-an-indicator-is-probability](https://alphabetamath.cc/item/cor-expectation-of-an-indicator-is-probability) [math:cor-expectation-linearity-monotonicity-and-modulus-bound](https://alphabetamath.cc/item/cor-expectation-linearity-monotonicity-and-modulus-bound)

[F8] For an integrable real random variable $X$ and sub-sigma-algebra $\mathcal G$, a conditional-expectation version $p$ is $\mathcal G$-measurable and integrable, with $\int_B p\,d\mathbb P=\int_B X\,d\mathbb P$ for every $B\in\mathcal G$. In particular the equality for $B=\Omega$ gives $\mathbb E p=\mathbb E X$. Here the conditional probabilities come from the supplied record and check laws, rather than an existence assertion based only on a displayed hazard. [math:def-conditional-expectation-given-a-sigma-algebra](https://alphabetamath.cc/item/def-conditional-expectation-given-a-sigma-algebra)

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice, together with the lifted model's physical and spectral hypotheses. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice) [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

## Proof

**Given:** The finite lifted model, the initial host-block state, the ideal checks and host-block-returning recoveries, with $T=M\tau$ as in the Statement.

**Goal:** Bound multiple-decay events and the expected number of detected outcomes over the fixed total time.

1.1 The mutually orthogonal block projectors in [F2] sum to the identity. Hence $0\leq Q\leq\gamma I$. In particular, for every positive trace-one conditional state $\sigma$, including any state produced by a measurement or recovery, $\operatorname{Tr}(Q\sigma)\leq\gamma$. The bound therefore holds throughout every interval, not merely at its start or for a stationary state. [F1, F2, algebra]

1.2 The initial state of each interval is supported in the host block: this holds initially, after a detected outcome by the assumed recovery, and after a null outcome by the projector in [F3]. Write $P=\Pi_{J_0}$ and let $P\sigma P=\sigma$ be that initial state. Since $H$ and $Q$ are diagonal in the block basis, $PH=HP$ and $PQ=QP$. Hence $P$ commutes with $B=-iH-Q/2$ and its diagonal exponential $V_t=e^{tB}$. It follows that $PS_t(\sigma)P=S_t(\sigma)$, where $S_t$ is the exact no-jump map in [F6]. Its strictly positive trace permits normalization, so the zero-event conditional state is still supported in $P$. Therefore $(I-P)S_\tau(\sigma)(I-P)=0$, and [F3] gives zero detection probability conditional on no events. Thus, if no jump occurs in an interval, the $I-P$ outcome cannot occur. A detected outcome therefore implies at least one jump in that interval; the converse is not needed for the bound. [given, F1, F2, F3, F6, A1, algebra]

1.3 Let $A_k$ be the measurable event that check $k$ detects a decay, put $X_k=\mathbf 1_{A_k}$, and let $\mathcal G_{k-1}$ be the preceding full-history sigma-algebra. Then $D_M=\sum_{k=1}^M X_k$. By [F7], $\mathbb E X_k=\mathbb P(A_k)\leq1$; since $|X_k|=X_k$, each indicator is integrable. The same indicator identity for the whole probability space makes the constant one integrable with expectation one. These statements apply on the full record probability space, regardless of whether it has finitely many outcomes. [given, F6, F7, algebra]

2.1 Apply [F4] with $r=\gamma$. The per-interval conditional bound is $\gamma^2\tau^2/2$, and summing over the $M=T/\tau$ intervals bounds the probability of at least one multiple-decay interval by $\gamma^2T\tau/2$. This tends to zero for fixed $T$ and $\gamma$ as $M\to\infty$. No independence of intervals or Poisson assumption is needed. [F4, A1, step 1.1, algebra]

3.1 Conditional on the preceding history, [F5] and the hazard bound give a probability of at least one jump no greater than $1-e^{-\gamma\tau}\leq\gamma\tau$. By step 1.2 the same upper bound applies to a detection. The actual conditional detection law supplies a version $p_k=\mathbb E[X_k\mid\mathcal G_{k-1}]$ in the sense of [F8], with $0\leq p_k\leq\gamma\tau$ almost surely. Taking the whole probability space as the event in [F8] gives $\mathbb E X_k=\mathbb E p_k$; monotonicity and scalar linearity in [F7] therefore give $\mathbb P(A_k)\leq\gamma\tau$. Finite iteration of the two-variable linearity in [F7], starting from the integrable indicators in step 1.3, makes every partial sum integrable and yields $\mathbb E D_M=\sum_{k=1}^M\mathbb E X_k\leq M\gamma\tau=\gamma T$. This proves the stated rate-controlled bound without asserting that every jump is detected or that recovery is exact on logical information. [F4, F5, F6, F7, F8, A1, step 1.1, step 1.2, step 1.3, algebra] ∎

## Source notes

The article's fixed-time multiple-decay and detected-event claims are attributed above. The proof uses the completed finite-model and bounded-hazard suppliers; the article is not used as a proof of its own claim. The expectation bound makes the rate-controlled statement precise under the stated cycle assumptions.
