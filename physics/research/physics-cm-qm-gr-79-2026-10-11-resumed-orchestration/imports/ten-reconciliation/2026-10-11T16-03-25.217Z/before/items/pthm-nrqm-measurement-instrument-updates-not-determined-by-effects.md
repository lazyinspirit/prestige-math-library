---
id: pthm-nrqm-measurement-instrument-updates-not-determined-by-effects
aliases: [nrqm-measurement-instrument-updates-not-determined-by-effects]
kind: physics-theorem
domain: physics
title: "Outcome effects do not determine the conditional update, and general instruments need not be repeatable"
status: draft
origin: pipeline
dependency_level: 10
deps: [def-bounded-linear-operator, def-countable-choice, def-hilbert-orthogonal-projection, def-hilbert-space, def-non-negative-and-positive-operator, def-nrqm-measurement-framework-declared-measurements-and-instruments, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-finite-effects-and-instruments, lem-nrqm-composites-rank-one-operator-calculus, pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles, post-nrqm-framework-ideal-conditional-measurement, post-nrqm-framework-observable-and-probability, post-nrqm-framework-state-and-composition]
dependency_roles:
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-non-negative-and-positive-operator: mathematical-premise
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-finite-effects-and-instruments: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles: physical-result
  post-nrqm-framework-ideal-conditional-measurement: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A declared-instrument statement on the two-level model: two normalized instruments with identical outcome effects have different conditional updates and therefore different predictions for a subsequent measurement, and a third instrument with effects proportional to the identity is not repeatable. The theorem is a statement about declared apparatus models under P2(iv) and P3(v); it asserts no apparatus realization and no empirical fact."
sources:
  references:
    - title: "J. Preskill, Lecture Notes for Ph219/CS219: Quantum Information, Chapter 3 'Foundations II: Measurement and Evolution' (updated July 2015), Section 3.1.2, printed pages 9-11 (post-measurement states are not determined by the POVM; repeatability condition via M_b M_a)"
      url: "https://preskill.caltech.edu/ph219/chap3_15.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 1.3.6 and 1.4, printed pages 14-15 (photon analyzers and ideal measurement)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state postulate P1, the observable and probability postulate P2 and the ideal conditional-measurement postulate P3 ([[post-nrqm-framework-state-and-composition]], [[post-nrqm-framework-observable-and-probability]], [[post-nrqm-framework-ideal-conditional-measurement]]), and assume the Axiom of Countable Choice. Let a declared two-level system have state space $D(\mathbb C^{2})$ with orthonormal basis $(e_{1},e_{2})$ of $\mathbb C^{2}$ ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]], [[def-nrqm-state-geometry-framework-state-space]]), write $P_{i}:=T_{e_{i},e_{i}}$ for the rank-one projections and $W:=T_{e_{2},e_{1}}+T_{e_{1},e_{2}}$ for the swap, and put $B:=P_{1}-P_{2}$. Then:

**(a) Two normalized instruments with equal effects.** The families
$$\bigl(M_{0},M_{1}\bigr)=\bigl(P_{1},P_{2}\bigr),\qquad \bigl(M_{0}',M_{1}'\bigr)=\bigl(WP_{1},P_{2}\bigr)$$
are both normalized declared instruments on $\mathbb C^{2}$, and both have the effects $F_{0}=F_{0}'=P_{1}$, $F_{1}=F_{1}'=P_{2}$.

**(b) Different updates and different predictions.** For every state $\rho$ with $p_{0}=\operatorname{tr}(\rho P_{1})>0$ the conditional state after the outcome $0$ is $T_{e_{1},e_{1}}$ for the first instrument and $T_{e_{2},e_{2}}$ for the second. Consequently, for the bounded assigned sharp observable $B=P_{1}-P_{2}$, the probability of the value $+1$ after the outcome $0$ is $1$ under the first instrument and $0$ under the second, although the two instruments have identical outcome effects and identical outcome probabilities $p_{0},p_{1}$ in every preparation. Hence the effects do not determine the conditional update; the update is part of the declared apparatus model (clause (v) of P3, [[lem-nrqm-composites-finite-effects-and-instruments]] clause (d)).

**(c) A non-repeatable declared instrument.** The family
$$N_{+}:=\frac{1}{\sqrt2}I,\qquad N_{-}:=\frac{1}{\sqrt2}B$$
is a normalized declared instrument with effects $F_{+}=F_{-}=\tfrac12 I$. Its outcome probabilities are $\tfrac12,\tfrac12$ in every preparation, and conditioned on either outcome an immediate repetition of the same declared instrument again yields each outcome with probability $\tfrac12$; the probability of repeating the same outcome is $\tfrac12$, not $1$. So declared instruments need not be repeatable, in contrast to the projective Lueders case of [[pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles]] clause (b).

**(d) Scope.** Clauses (a)-(c) are statements about the declared instruments displayed; they assert no property of any laboratory device, no uniqueness of recorded outcomes and no dynamics of an apparatus. Whether a device is described by one of these instruments is a tested identification with uncertainty under P7.

## Facts & Assumptions

**Given:** The adopted postulates P1, P2, P3; the two-level space $\mathbb C^{2}$ with orthonormal basis $(e_{1},e_{2})$; the rank-one projections $P_{1}=T_{e_{1},e_{1}}$, $P_{2}=T_{e_{2},e_{2}}$; the swap $W=T_{e_{2},e_{1}}+T_{e_{1},e_{2}}$; the operator $B=P_{1}-P_{2}$; the Kraus families of clauses (a) and (c); a state $\rho$.

[F1] **Rank-one calculus and two-level algebra.** $T_{u,v}x=\langle x,v\rangle u$ is bounded with $T_{u,v}T_{x,y}=\langle x,v\rangle T_{u,y}$ and $T_{u,v}^{*}=T_{v,u}$; for orthonormal $u,v$, $T_{u,u}$ and $T_{v,v}$ are orthogonal projections with $T_{u,u}+T_{v,v}=I$ on the span, $T_{u,u}T_{v,v}=0$, and $\operatorname{tr}(T_{u,u}S)=\langle Su,u\rangle$ for trace-class $S$ ([[lem-nrqm-composites-rank-one-operator-calculus]], [[def-hilbert-orthogonal-projection]]).

[F2] **Declared instruments.** A normalized finite Kraus family $(M_{a,r})$ with $\sum_{a,r}M_{a,r}^{*}M_{a,r}=I$ declares an instrument with effects $F_{a}=\sum_{r}M_{a,r}^{*}M_{a,r}$, outcome probabilities $p_{a}=\operatorname{tr}(\rho F_{a})$ and conditional updates $\rho\mapsto p_{a}^{-1}\sum_{r}M_{a,r}\rho M_{a,r}^{*}$ for $p_{a}>0$; the update is part of the declaration and is not determined by the effects ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clause (d), clause (iv) of [[post-nrqm-framework-observable-and-probability]], clause (v) of [[post-nrqm-framework-ideal-conditional-measurement]]).

[F3] **Abstract non-determination.** There are two normalized instruments on $\mathbb C^{2}$ with the same outcome effects whose updates differ on the same input; effects alone do not determine the update ([[lem-nrqm-composites-finite-effects-and-instruments]] clause (d)).

[F4] **Projective updates are repeatable.** For a declared ideal sharp measurement, the conditional state after outcome $a$ returns $a$ with certainty on immediate repetition ([[pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles]] clause (b)).

[F5] **States.** $T_{\psi,\psi}$ with $\|\psi\|=1$ is a state, and $\operatorname{tr}(T_{u,u}S)=\langle Su,u\rangle$ for bounded self-adjoint $S$ ([[def-nrqm-state-geometry-pure-mixed-states-and-purity]], [F1]).

## Proof

1.1 [Normalization of the first two instruments] For the first family, $M_{0}^{*}M_{0}=P_{1}^{2}=P_{1}$ and $M_{1}^{*}M_{1}=P_{2}$, so $M_{0}^{*}M_{0}+M_{1}^{*}M_{1}=P_{1}+P_{2}=I$ [F1]. For the second, $M_{0}^{\prime*}=P_{1}W^{*}$ gives $M_{0}^{\prime*}M_{0}'=P_{1}W^{*}WP_{1}=P_{1}^{2}=P_{1}$ because $W^{*}W=I$, and $M_{1}^{\prime*}M_{1}'=P_{2}$; again the sum is $I$. Both families are therefore normalized declared instruments [F2] with the displayed effects $F_{0}=P_{1}$, $F_{1}=P_{2}$ and $F_{0}'=P_{1}$, $F_{1}'=P_{2}$. This is (a). [given, F1, F2, algebra]

2.1 [Equal outcome probabilities] Since the effects of the two instruments coincide, for every state $\rho$ and each outcome the probability is $p_{0}=\operatorname{tr}(\rho P_{1})$ or $p_{1}=\operatorname{tr}(\rho P_{2})$ with the same value under either instrument [F2]; in particular $p_{0}+p_{1}=\operatorname{tr}(\rho(P_{1}+P_{2}))=1$. [step 1.1, F2, algebra]

2.2 [Non-repeatability] For the family of clause (c), $N_{+}^{*}N_{+}=\tfrac12I$ and $N_{-}^{*}N_{-}=\tfrac12B^{2}=\tfrac12I$ by $B^{2}=P_{1}+P_{2}=I$ [F1], so the family is normalized [F2] with effects $F_{+}=F_{-}=\tfrac12I$ and outcome probabilities $\tfrac12,\tfrac12$ in every preparation by [F2]. If the outcome $+$ occurs, the conditional state is $\tfrac12\rho/\tfrac12=\rho$, so the probability that an immediate repetition returns $+$ is again $\operatorname{tr}(\rho\cdot\tfrac12I)=\tfrac12$; if the outcome $-$ occurs, the conditional state is $(\tfrac12B\rho B)/(\tfrac12)=B\rho B$, and the probability that the repetition returns $-$ is $\operatorname{tr}(B\rho B\cdot\tfrac12I)=\tfrac12\operatorname{tr}(B^{2}\rho)=\tfrac12$. Hence the probability of repeating the same outcome is $\tfrac12$ in both cases, not $1$; the declared instrument is not repeatable. This is (c), and it is consistent with the repeatability of the projective case [F4] because $N_{\pm}$ are not projections. [step 1.1, F1, F2, F4, algebra]

3.1 [Different conditional updates] Let $\rho$ be a state with $p_{0}>0$. For the first instrument, $M_{0}\rho M_{0}^{*}=P_{1}\rho P_{1}$, and evaluating in the eigen-expansion of $\rho$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a)) or directly by [F1] gives $P_{1}\rho P_{1}=\operatorname{tr}(\rho P_{1})P_{1}=p_{0}P_{1}$; hence the conditional state is $P_{1}=T_{e_{1},e_{1}}$. For the second, $M_{0}'\rho M_{0}^{\prime*}=WP_{1}\rho P_{1}W^{*}=p_{0}WP_{1}W^{*}=p_{0}T_{e_{2},e_{2}}$ by [F1] and $We_{1}=e_{2}$; hence the conditional state is $T_{e_{2},e_{2}}$. The two updates differ, while step 2.1 gives equal outcome probabilities. [step 1.1, step 2.1, F1, F2, algebra]

4.1 [Different subsequent predictions] The observable $B=P_{1}-P_{2}$ is bounded and self-adjoint with spectral projections $P_{1}$ at $+1$ and $P_{2}$ at $-1$, so the probability of the value $+1$ in a preparation $\sigma$ is $\operatorname{tr}(\sigma P_{1})$. In the conditional state $T_{e_{1},e_{1}}$ of the first instrument this is $\operatorname{tr}(T_{e_{1},e_{1}}P_{1})=1$ by [F1], and in the conditional state $T_{e_{2},e_{2}}$ of the second it is $\operatorname{tr}(T_{e_{2},e_{2}}P_{1})=|\langle e_{1},e_{2}\rangle|^{2}=0$. Thus instruments with the same effects make different predictions for a subsequent measurement, which proves (b). [step 3.1, F1, F5, algebra]

5.1 [Scope] Steps 1.1-5.1 are computations inside the declared instruments of clauses (a) and (c) using the adopted P2(iv) and P3(v) through [F2]; they assert no device behaviour and no outcome uniqueness. This is (d). [step 2.2, F2, F3, algebra] ∎
