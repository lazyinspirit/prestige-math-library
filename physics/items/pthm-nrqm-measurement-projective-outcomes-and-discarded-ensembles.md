---
id: pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles
aliases: [ nrqm-measurement-projective-outcomes-and-discarded-ensembles ]
kind: physics-theorem
domain: physics
title: "Consequences of a declared ideal sharp measurement: repeatability and
  discarded ensembles"
status: draft
origin: pipeline
dependency_level: 10
deps:
  [
    def-bounded-linear-operator,
    def-countable-choice,
    def-hilbert-orthogonal-projection,
    def-nrqm-measurement-framework-declared-measurements-and-instruments,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    lem-nrqm-composites-nuclear-bounded-cyclicity,
    lem-nrqm-composites-rank-one-operator-calculus,
    lem-nrqm-measurement-nonselective-luders-map,
    lem-nrqm-measurement-selective-luders-update,
    post-nrqm-framework-ideal-conditional-measurement,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-preparation-and-apparatus,
    post-nrqm-framework-state-and-composition
  ]
dependency_roles:
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-measurement-nonselective-luders-map: mathematical-premise
  lem-nrqm-measurement-selective-luders-update: mathematical-premise
  post-nrqm-framework-ideal-conditional-measurement: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: formulation-prerequisite
  post-nrqm-framework-state-and-composition: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional consequence of the adopted ideal
  conditional-measurement postulate P3 for a declared ideal sharp measurement:
  the Born outcome probabilities, the selective Lueders conditional states, the
  certainty of an immediately repeated outcome, the discarded-outcome state as
  the outcome-weighted mixture of the conditional states, invariance of bounded
  quantities compatible with the declared measurement under discarding, and the
  loss of coherence between non-selected branches. The theorem asserts nothing
  about any laboratory apparatus, about outcome uniqueness or about measurements
  outside the declared class."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.4,
        printed page 15 (reproducible ideal measurements and the state change)
        and Section 6.3, printed pages 121-126 (density operators and the trace
        rule)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.3,
        printed pages 76-77 (Born rule, collapse and repeat measurement)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state postulate P1, the observable and probability postulate P2 and the ideal conditional-measurement postulate P3 of the framework ([[post-nrqm-framework-state-and-composition]], [[post-nrqm-framework-observable-and-probability]], [[post-nrqm-framework-ideal-conditional-measurement]]), and assume the Axiom of Countable Choice, the hypothesis of the cited mathematics. Let $(P_{a})_{a\in A}$ be a declared ideal sharp measurement of a system with state space $D(H)$ ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]], [[def-nrqm-state-geometry-framework-state-space]]) and let $\rho$ be a state. Then:

**(a) Outcome law.** For every outcome label $a$ the probability is $p_{a}=\operatorname{tr}(\rho P_{a})$, with $p_{a}\ge0$ and $\sum_{a}p_{a}=1$; for the pure state of a unit vector $\psi$ it is $p_{a}=\|P_{a}\psi\|^{2}$.

**(b) Conditional state and repeatability.** If $p_{a}>0$, the conditional state after the outcome $a$ is the state $\rho_{a}=P_{a}\rho P_{a}/p_{a}$, with $\operatorname{tr}(\rho_{a}P_{a})=1$ and $\operatorname{tr}(\rho_{a}P_{b})=0$ for $b\ne a$. Immediate repetition of the same declared measurement therefore returns the same outcome with certainty:
$$\mathbb P(\text{second outcome }b\mid\text{first outcome }a)=\delta_{ab}.$$

**(c) Discarded outcomes.** The discarded-outcome state $\Phi(\rho)=\sum_{a}P_{a}\rho P_{a}$ is a state and coincides with the outcome-weighted mixture of the conditional states,
$$\Phi(\rho)=\sum_{a:p_{a}>0}p_{a}\rho_{a},$$
the series converging in trace norm; moreover $\operatorname{tr}(\Phi(\rho)P_{a})=p_{a}$ for every $a$ and $\Phi(\rho)=\sum_{a}P_{a}\Phi(\rho)P_{a}$. The conditional-vs-discarded distinction is therefore exactly the distinction between one selected branch $\rho_{a}$ and the mixture of all branches.

**(d) Compatible bounded quantities.** If $B$ is a bounded operator with $P_{a}B=BP_{a}$ for every $a$, then $\operatorname{tr}(\Phi(\rho)B)=\operatorname{tr}(\rho B)$. In particular, if the declared measurement is the spectral measurement of a bounded assigned sharp observable $A=\sum_{a}a_{a}P_{a}$ (a finite or norm-convergent series with real $a_{a}$), then $A$ commutes with every $P_{a}$ and the mean of $A$ is unchanged by discarding the outcomes.

**(e) Loss of coherence.** If $\psi=\alpha u+\beta v$ with $u,v$ orthonormal, $u\in\operatorname{ran}P_{1}$, $v\in\operatorname{ran}P_{2}$ for distinct labels $1\ne2$, and $\rho=T_{\psi,\psi}$, then
$$\Phi(\rho)=|\alpha|^{2}T_{u,u}+|\beta|^{2}T_{v,v},\qquad \operatorname{tr}\bigl(\Phi(\rho)(T_{u,v}+T_{v,u})\bigr)=0,$$
whereas for the coherent preparation $\operatorname{tr}(\rho(T_{u,v}+T_{v,u}))=2\operatorname{Re}(\alpha\overline{\beta})$: the discarded-outcome ensemble is the classical mixture of the branch states and carries no coherence between the ranges of $P_{1}$ and $P_{2}$.

**(f) Scope.** Clauses (a)-(e) are conditional on the adopted P3 and on the mathematical items cited; they do not assert that any laboratory apparatus realizes a declared ideal sharp measurement, do not select a unique recorded outcome, and do not describe the disturbance produced by an apparatus outside the declared class (clause (v) of P3). The identification of a device with a declared measurement is a tested identification with uncertainty under P7.

## Facts & Assumptions

**Given:** The adopted postulates P1, P2, P3; a declared ideal sharp measurement $(P_{a})_{a\in A}$ with strong sum $I$; a state $\rho$; probabilities $p_{a}=\operatorname{tr}(\rho P_{a})$; the discarded-outcome state $\Phi(\rho)=\sum_{a}P_{a}\rho P_{a}$; a bounded operator $B$ commuting with every $P_{a}$; vectors $\psi,u,v$ and scalars $\alpha,\beta$ as in clause (e).

[F1] **Declared measurements.** The family $(P_{a})$ is a finite or countable family of pairwise orthogonal orthogonal projections with strong sum $I$, and its Lueders instrument has outcome probabilities $p_{a}=\operatorname{tr}(\rho P_{a})$, conditional states $\rho_{a}=P_{a}\rho P_{a}/p_{a}$ for $p_{a}>0$, and discarded-outcome state $\Phi(\rho)=\sum_{a}P_{a}\rho P_{a}$ ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clauses (a)-(b); [[post-nrqm-framework-ideal-conditional-measurement]] clauses (i)-(iv)).

[F2] **Selective update.** For $p_{a}>0$ the operator $\rho_{a}$ is a state with $\operatorname{tr}(\rho_{a}P_{a})=1$, $\operatorname{tr}(\rho_{a}Q)=0$ for every orthogonal projection $Q$ with $QP_{a}=0$, and $P_{a}\rho_{a}P_{a}=\rho_{a}$ ([[lem-nrqm-measurement-selective-luders-update]] clauses (a)-(c)).

[F3] **Non-selective map.** The series $\Phi(\rho)$ converges in trace norm; $\Phi(\rho)$ is a state; $\Phi(\rho)=\sum_{a:p_{a}>0}p_{a}\rho_{a}$; $P_{b}\Phi(\rho)P_{b}=P_{b}\rho P_{b}$ for every $b$, so in particular $\operatorname{tr}(\Phi(\rho)P_{b})=p_{b}$; $\Phi(\rho)=\sum_{b}P_{b}\Phi(\rho)P_{b}$; and for bounded $B$ commuting with every $P_{a}$ one has $\operatorname{tr}(\Phi(\rho)B)=\operatorname{tr}(\rho B)$ ([[lem-nrqm-measurement-nonselective-luders-map]] clauses (a)-(d)).

[F4] **Rank-one pairing.** $T_{u,v}x=\langle x,v\rangle u$ is trace class with $\operatorname{tr}(T_{u,v})=\langle u,v\rangle$, and $\operatorname{tr}(S T_{u,v})=\langle Su,v\rangle$ for trace-class $S$ ([[lem-nrqm-composites-rank-one-operator-calculus]] clause (b), [[lem-nrqm-composites-nuclear-bounded-cyclicity]] clause (b)).

[F5] **States and mixtures.** A convex combination of states is a state; the trace is linear and trace-norm continuous ([[def-nrqm-state-geometry-pure-mixed-states-and-purity]], [[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a)).

## Proof

1.1 [Clause (a)] By [F1] the outcome probabilities of the declared measurement are $p_{a}=\operatorname{tr}(\rho P_{a})$. Since $0\le P_{a}\le I$ and $\rho\ge0$ with $\operatorname{tr}\rho=1$, positivity of $P_{a}\rho P_{a}$ and cyclicity give $p_{a}=\operatorname{tr}(P_{a}\rho P_{a})\ge0$ [F2, F4]. Trace-norm convergence of $\Phi(\rho)=\sum_{a}P_{a}\rho P_{a}$ and continuity of the trace give $\sum_{a}p_{a}=\operatorname{tr}\Phi(\rho)=1$ by [F3]. For a pure preparation, [F1] with the rank-one calculus [F4] gives $p_{a}=\operatorname{tr}(T_{\psi,\psi}P_{a})=\langle P_{a}\psi,\psi\rangle=\|P_{a}\psi\|^{2}$. This is (a). [given, F1, F2, F3, F4, algebra]

1.2 [Clause (e)] Under the hypotheses of clause (e), the computation of [[lem-nrqm-measurement-nonselective-luders-map]] clause (e) applies verbatim to $\rho=T_{\psi,\psi}$: it gives $\Phi(\rho)=|\alpha|^{2}T_{u,u}+|\beta|^{2}T_{v,v}$, $\operatorname{tr}(\Phi(\rho)(T_{u,v}+T_{v,u}))=0$, and $\operatorname{tr}(\rho(T_{u,v}+T_{v,u}))=2\operatorname{Re}(\alpha\overline{\beta})$. This is (e). [given, F3, F4, algebra]

2.1 [Clause (b)] If $p_{a}>0$, [F2] gives that $\rho_{a}$ is a state with $\operatorname{tr}(\rho_{a}P_{a})=1$; for $b\ne a$ the projections $P_{b}$ and $P_{a}$ satisfy $P_{b}P_{a}=0$, so [F2] gives $\operatorname{tr}(\rho_{a}P_{b})=0$. Applying the outcome law of clause (a) to the preparation $\rho_{a}$, the probability of the outcome $b$ in an immediate repetition of the same declared measurement is $\operatorname{tr}(\rho_{a}P_{b})=\delta_{ab}$. This is (b). [step 1.1, given, F1, F2, algebra]

3.1 [Clause (c)] By [F3], $\Phi(\rho)$ is a state and equals the trace-norm convergent series $\sum_{a:p_{a}>0}p_{a}\rho_{a}$; since $\operatorname{tr}((p_{a}\rho_{a})P_{b})=\delta_{ab}p_{a}$ by clause (b) and trace-norm continuity of the trace, summing gives $\operatorname{tr}(\Phi(\rho)P_{b})=p_{b}$ for every $b$, and [F3] also gives $\Phi(\rho)=\sum_{b}P_{b}\Phi(\rho)P_{b}$. This is (c). [step 2.1, given, F3, F5, algebra]

4.1 [Clause (d)] If $B$ is bounded and $P_{a}B=BP_{a}$ for every $a$, [F3] gives $\operatorname{tr}(\Phi(\rho)B)=\operatorname{tr}(\rho B)$. If $A=\sum_{a}a_{a}P_{a}$ is a bounded assigned sharp observable with real coefficients $a_{a}$, then $AP_{b}=\sum_{a}a_{a}P_{a}P_{b}=a_{b}P_{b}=P_{b}A$, so $A$ commutes with every $P_{a}$ and the identity applies to $B=A$: the mean $\operatorname{tr}(\rho A)$ of the bounded observable $A$ is unchanged by discarding the outcomes. This is (d). [step 3.1, given, F3, algebra]

5.1 [Clause (f) and scope] Clauses (a)-(e) were obtained from the adopted clauses of P3 [F1] and the cited mathematical lemmas [F2, F3, F4]; no clause used a claim about a laboratory apparatus, an apparatus dynamics, or a preferred recorded outcome. Clause (v) of P3 explicitly excludes outcome uniqueness and arbitrary apparatuses from the declared class, and P7 makes the identification of a device with the declared measurement a tested identification with uncertainty. This is (f). [step 1.2, given, F1, F3, algebra] ∎
