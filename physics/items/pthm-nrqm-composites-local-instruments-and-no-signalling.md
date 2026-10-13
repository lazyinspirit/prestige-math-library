---
id: pthm-nrqm-composites-local-instruments-and-no-signalling
aliases: [ nrqm-composites-local-instruments-and-no-signalling ]
kind: physics-theorem
domain: physics
title: "Local instruments and no-signalling: operations on one factor do not
  change the other factor's local statistics"
status: published
origin: session
dependency_level: 13
deps:
  [
    def-countable-choice,
    def-axiom-of-choice,
    def-nrqm-composites-framework-composite-systems-and-local-readouts,
    def-nrqm-composites-framework-reduced-preparations,
    def-nrqm-measurement-framework-declared-measurements-and-instruments,
    def-nrqm-observables-framework-observable-and-outcome-law,
    lem-nrqm-composites-bounded-tensor-maps,
    lem-nrqm-composites-countable-kraus-normalization,
    lem-nrqm-composites-local-pvm-tensor-extension,
    lem-nrqm-composites-local-trace-preserving-no-signalling,
    lem-nrqm-composites-separable-partial-trace,
    pthm-nrqm-composites-local-readout-laws-and-reduced-preparations,
    pthm-nrqm-measurement-countable-kraus-instruments,
    thm-trace-class-is-a-two-sided-banach-operator-ideal
  ]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-nrqm-composites-framework-composite-systems-and-local-readouts: formulation-prerequisite
  def-nrqm-composites-framework-reduced-preparations: formulation-prerequisite
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-countable-kraus-normalization: mathematical-premise
  lem-nrqm-composites-local-pvm-tensor-extension: mathematical-premise
  lem-nrqm-composites-local-trace-preserving-no-signalling: mathematical-premise
  lem-nrqm-composites-separable-partial-trace: mathematical-premise
  pthm-nrqm-composites-local-readout-laws-and-reduced-preparations: physical-result
  pthm-nrqm-measurement-countable-kraus-instruments: physical-result
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared local instruments of one factor of a composite of
  two distinguishable subsystems: a declared finite or countable instrument on
  one factor leaves the reduced preparation, and hence every local outcome law,
  of the other factor unchanged once its classical record is discarded;
  conditioning on the record displays the correlation through the conditional
  reduced preparations, whose probability-weighted average is the original
  reduced preparation. The statement is a conditional consequence of the
  framework's measurement readings and the cited mathematics; it asserts no
  relativistic causality principle, no disturbance of the other factor by any
  particular apparatus, no apparatus realization and no empirical fact."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        6.1.4, printed pages 111-115 (PDF pages 119-123): the predictions of one
        observer's measurements are unaffected by the other observer's choice of
        measurement direction"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8
        'Multiparticle States and Tensor Products', Sections 2-3, chapter pages
        8-12: partial measurement of one particle of an entangled pair and the
        resulting description of the other factor"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba\
        2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the framework's composition and measurement readings for a declared
composite of two distinguishable subsystems $A,B$ with assigned spaces $H,K$
([[def-nrqm-composites-framework-composite-systems-and-local-readouts]],
[[def-nrqm-measurement-framework-declared-measurements-and-instruments]],
[[def-nrqm-composites-framework-reduced-preparations]]), and assume the Axiom
of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]), as required by the local
sharp-readout law used below. Let $\rho\in D(H\widehat\otimes K)$ be a preparation of the
declared composite with reduced preparations
$\rho_{A}=\operatorname{Tr}_{K}\rho$, $\rho_{B}=\operatorname{Tr}_{H}\rho$, and
let $(M_{a,r})_{\substack{a\in A_{0}\\ r\in R_{a}}}$ be a declared finite or
countable instrument of subsystem $B$, normalized:
$\sum_{a,r}M_{a,r}^{*}M_{a,r}=I_{K}$ in the strong sense, with effects
$F_{a}:=\sum_{r}M_{a,r}^{*}M_{a,r}$ and outcome probabilities
$p_{a}=\operatorname{tr}(\rho_{B}F_{a})$. Then:
 
**(a) The local extension.** The family
$(I_{H}\otimes M_{a,r})_{\substack{a\in A_{0}\\ r\in R_{a}}}$ is a declared
finite or countable instrument of the declared composite, with outcome effects
$F_{a}^{\mathrm{loc}}=I_{H}\otimes F_{a}$, outcome probabilities
$p_{a}=\operatorname{tr}(\rho F_{a}^{\mathrm{loc}})$, and conditional states
$$\rho_{a}:=\frac{1}{p_{a}}\sum_{r}(I_{H}\otimes M_{a,r})\,\rho\,(I_{H}\otimes M_{a,r})^{*}\qquad(p_{a}>0).$$

**(b) No-signalling.** The discarded-outcome state
$\Phi(\rho):=\sum_{a,r}(I_{H}\otimes M_{a,r})\,\rho\,(I_{H}\otimes M_{a,r})^{*}$
is a preparation of the composite, its reduced preparation on $A$ is unchanged,
$$\operatorname{Tr}_{K}\Phi(\rho)=\operatorname{Tr}_{K}\rho=\rho_{A},$$
and consequently every local outcome law of subsystem $A$ is unchanged:
$$\mu^{A^{\mathrm{loc}}}_{\Phi(\rho)}=\mu^{A^{\mathrm{loc}}}_{\rho}\qquad\text{for every assigned sharp observable }(A,u_{A})\text{ of }A .$$
The same holds with the roles of $A$ and $B$ exchanged.

**(c) Conditional reductions.** If $p_{a}>0$, the conditional state $\rho_{a}$
has reduced preparation $(\rho_{a})_{A}=\operatorname{Tr}_{K}\rho_{a}$ on $A$,
and
$$\sum_{a:p_{a}>0}p_{a}\,(\rho_{a})_{A}=\rho_{A};$$
the conditional reduced preparations $(\rho_{a})_{A}$ may differ from
$\rho_{A}$, and the recorded outcome $a$ is the classical datum needed to
select them.

**(d) Scope.** Clauses (a)-(c) are conditional consequences of P1, P2 and P3
in the stated readings and of the cited mathematics; they concern declared
instruments of the declared composite. They assert no relativistic causality
principle, no claim that a particular apparatus realizes the declared
instrument, no disturbance of the other factor by any concrete device and no
empirical fact.

## Facts & Assumptions

**Given:** The declared composite with assigned spaces $H,K$; a preparation $\rho$; reduced preparations $\rho_{A},\rho_{B}$; a declared finite or countable instrument $(M_{a,r})$ of subsystem $B$ with effects $F_{a}$; the Axiom of Countable Choice and the Axiom of Choice.

[F1] **Local extension of an instrument.** For a declared finite or countable instrument $(M_{a,r})$ of subsystem $B$ the family $(I_{H}\otimes M_{a,r})$ is a declared instrument of the declared composite, with effects $I_{H}\otimes F_{a}$ and conditional updates as displayed; this is part of clause (e) of [[def-nrqm-composites-framework-composite-systems-and-local-readouts]] ([[lem-nrqm-composites-bounded-tensor-maps]], [[lem-nrqm-composites-local-pvm-tensor-extension]] clause (c)).
 
[F2] **Declared instrument reading and discarded map.** Apply clause (d) of [[def-nrqm-measurement-framework-declared-measurements-and-instruments]] on the composite space to the extended family of [F1]. Its effects are $F_a^{\mathrm{loc}}=I_H\otimes F_a$, its probabilities are $p_a=\operatorname{tr}(\rho F_a^{\mathrm{loc}})$, and its conditional states are $\sum_r(I_H\otimes M_{a,r})\rho(I_H\otimes M_{a,r})^*/p_a$ only when $p_a>0$. Enumerate the factor operators as $(N_b)$ on $K$ and put $L_b=I_H\otimes N_b$ on $H\widehat\otimes K$. By [F1], $\sum_bL_b^*L_b=I_{H\widehat\otimes K}$ strongly. Clause (a) of [[pthm-nrqm-measurement-countable-kraus-instruments]] applied to $(L_b)$ and $\rho$ gives the trace-norm convergent discarded map $\Phi(\rho)=\sum_bL_b\rho L_b^*$, positivity, trace preservation and a state. A finite family is padded by zero operators. Each positive branch has trace equal to its probability; a zero-probability branch is zero because a positive trace-class operator has trace norm equal to its trace, as used in that theorem's proof. Grouping the positive series therefore yields $\Phi(\rho)=\sum_{a:p_a>0}p_a\rho_a$ in trace norm. No repeatability criterion is used.

[F3] **Local trace-preserving maps leave the other reduction fixed.** For bounded operators $(N_{b})_{b\ge1}$ on $K$ with $\sum_{b\le N}N_{b}^{*}N_{b}\to I_{K}$ strongly and a trace-class $R$ on $H\widehat\otimes K$, the series $\sum_{b}(I_{H}\otimes N_{b})R(I_{H}\otimes N_{b})^{*}$ converges in trace norm, its sum $\Phi(R)$ is trace class and $\operatorname{Tr}_{K}\Phi(R)=\operatorname{Tr}_{K}R$ ([[lem-nrqm-composites-local-trace-preserving-no-signalling]]).

[F4] **Local readout law.** For every assigned sharp observable $(A,u_{A})$ of subsystem $A$, the local readout law is $\mu^{A^{\mathrm{loc}}}_{\rho'}(B)=\operatorname{tr}(\rho'_{A}E_{A}(B))$ for every preparation $\rho'$ of the composite with reduced preparation $\rho'_{A}=\operatorname{Tr}_{K}\rho'$ ([[pthm-nrqm-composites-local-readout-laws-and-reduced-preparations]] clause (a), [[lem-nrqm-composites-separable-partial-trace]] clause (a)).

[F5] **Reduced preparations.** $\rho_{A}=\operatorname{Tr}_{K}\rho$ and $\rho_{B}=\operatorname{Tr}_{H}\rho$ are linear, trace-norm continuous images of $\rho$, and the outcome probabilities of a declared instrument of $B$ read $p_{a}=\operatorname{tr}(\rho_{B}F_{a})$ ([[def-nrqm-composites-framework-reduced-preparations]] clauses (a), (b), [[lem-nrqm-composites-separable-partial-trace]] clauses (a), (b)).

[F6] **Choice hypothesis.** The Axiom of Choice is assumed by the cited local sharp-readout result for the general spectral PVM construction ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct; read the local extension off the fibered definition of local instruments, apply the trace-preserving local-map lemma to the discarded-outcome state to fix the reduction of the untouched factor, and average the conditional reductions with the outcome probabilities.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Extension and discarded map] By [F1] the family $(I_{H}\otimes M_{a,r})$ is a declared instrument of the composite with effects $I_{H}\otimes F_{a}$ and conditional states $\rho_{a}$ for $p_{a}>0$; by [F2] its discarded-outcome map $\Phi$ is positive and trace preserving, so $\Phi(\rho)$ is a preparation of the composite; and re-indexing the doubly indexed family as a sequence $(N_{b})$ on $K$ with $\sum_{b\le N}N_{b}^{*}N_{b}\to I_{K}$ strongly, [F3] gives $\operatorname{Tr}_{K}\Phi(\rho)=\operatorname{Tr}_{K}\rho=\rho_{A}$. This is (a) together with the first assertion of (b); likewise $p_{a}=\operatorname{tr}(\rho F_{a}^{\mathrm{loc}})=\operatorname{tr}(\rho_{B}F_{a})$ by [F5]. [given, F1, F2, F3, F5, algebra]

2.1 [No-signalling] Let $(A,u_{A})$ be an assigned sharp observable of $A$. By step 1.1 the state $\Phi(\rho)$ has reduced preparation $\rho_{A}$, so [F4] gives $\mu^{A^{\mathrm{loc}}}_{\Phi(\rho)}(B)=\operatorname{tr}(\rho_{A}E_{A}(B))=\mu^{A^{\mathrm{loc}}}_{\rho}(B)$ for every Borel $B$: no local A-statistic changes under the discarded local instrument. This is (b). [given, F4, F6, step 1.1, algebra]

2.2 [Conditional reductions] For each $a$ with $p_{a}>0$, the conditional state $\rho_{a}$ of [F2] satisfies $p_{a}\rho_{a}=\sum_{r}(I_{H}\otimes M_{a,r})\rho(I_{H}\otimes M_{a,r})^{*}$, so by linearity and trace-norm continuity of $\operatorname{Tr}_{K}$ from [F5] one has $p_{a}(\rho_{a})_{A}=\operatorname{Tr}_{K}\sum_{r}(I_{H}\otimes M_{a,r})\rho(I_{H}\otimes M_{a,r})^{*}$. Summing over the positive-probability outcomes and using the trace-norm convergence of the discarded series from [F3] gives $\sum_{a:p_{a}>0}p_{a}(\rho_{a})_{A}=\operatorname{Tr}_{K}\Phi(\rho)=\rho_{A}$ by step 1.1; the terms for zero-probability outcomes are zero contributions to $\Phi(\rho)$ and no conditional state is assigned to them. This is (c); the exchanged-roles form of (b) is the same argument with $H$ and $K$ interchanged. [given, F2, F3, F5, step 1.1, algebra]

3.1 [Assembly and scope] Step 1.1 is (a), step 2.1 is (b), step 2.2 is (c), and (d) records that only the declared readings and the cited mathematics were used, with no causality or apparatus claim. [step 1.1, step 2.1, step 2.2] ∎
