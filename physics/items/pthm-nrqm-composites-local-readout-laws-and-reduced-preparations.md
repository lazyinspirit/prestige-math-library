---
id: pthm-nrqm-composites-local-readout-laws-and-reduced-preparations
aliases: [ nrqm-composites-local-readout-laws-and-reduced-preparations ]
kind: physics-theorem
domain: physics
title: "Local readout laws and reduced preparations: the subsystem state
  determines, and is determined by, the local statistics"
status: published
origin: session
dependency_level: 12
deps:
  [
    def-axiom-of-choice,
    def-countable-choice,
    def-nrqm-composites-framework-composite-systems-and-local-readouts,
    def-nrqm-composites-framework-reduced-preparations,
    def-nrqm-measurement-framework-declared-measurements-and-instruments,
    def-nrqm-observables-framework-observable-and-outcome-law,
    lem-nrqm-composites-bounded-tensor-maps,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    lem-nrqm-composites-local-pvm-tensor-extension,
    lem-nrqm-composites-nuclear-bounded-cyclicity,
    lem-nrqm-composites-rank-one-operator-calculus,
    lem-nrqm-composites-separable-partial-trace,
    lem-nrqm-observables-states-separated-by-bounded-projections,
    pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles,
    thm-trace-class-is-a-two-sided-banach-operator-ideal,
    thm-trace-is-absolutely-convergent-and-basis-independent
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-composites-framework-composite-systems-and-local-readouts: formulation-prerequisite
  def-nrqm-composites-framework-reduced-preparations: formulation-prerequisite
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-local-pvm-tensor-extension: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-composites-separable-partial-trace: mathematical-premise
  lem-nrqm-observables-states-separated-by-bounded-projections: mathematical-premise
  pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles: physical-result
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The reading of the framework's Born law (P2) and ideal
  conditional-measurement law (P3) for quantities of one factor of a declared
  composite of two distinguishable subsystems: the outcome law of a local
  readout equals the outcome law of the factor quantity in the reduced
  preparation, the reduced preparation is determined by the local statistics,
  and a declared ideal sharp measurement of the factor acts on the composite
  with conditional and discarded reductions inherited from the factor. The
  unchanged opposite reduction is proved only for the declared ideal P3
  instrument; no disturbance claim about a real apparatus, no dynamics, no
  interaction, no apparatus realization and no empirical fact are asserted."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        6.3.1, printed pages 125-127 (PDF pages 133-135): expectation values of
        one subsystem's observables computed from the reduced density operator"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8
        'Multiparticle States and Tensor Products', Sections 2-3, chapter pages
        8-12: measuring one particle of an entangled pair and the resulting
        description of the other factor"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba\
        2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the framework's composition, state and measurement readings for a
declared composite of two distinguishable subsystems $A,B$ with assigned
spaces $H,K$ ([[def-nrqm-composites-framework-composite-systems-and-local-readouts]],
[[def-nrqm-composites-framework-reduced-preparations]],
[[def-nrqm-measurement-framework-declared-measurements-and-instruments]]),
and assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]), the choice hypotheses of
the cited suppliers. Let $\rho,\rho'\in D(H\widehat\otimes K)$ be
preparations with reduced preparations $\rho_{A}=\operatorname{Tr}_{K}\rho$,
$\rho'_{A}=\operatorname{Tr}_{K}\rho'$ and
$\rho_{B}=\operatorname{Tr}_{H}\rho$. Then:

**(a) Local readout law.** For every assigned sharp observable $(A,u_{A})$ of
subsystem $A$ with local readout $(A^{\mathrm{loc}},u_{A})$ and every Borel
$B\subseteq\mathbb R$,
$$\mu^{A^{\mathrm{loc}}}_{\rho}(B)=\operatorname{tr}\bigl(\rho\,(E_{A}(B)\otimes I_{K})\bigr)=\operatorname{tr}\bigl(\rho_{A}\,E_{A}(B)\bigr)=\mu^{A}_{\rho_{A}}(B),$$
where $E_{A}$ is the spectral projection valued measure of $A$. In particular
the local statistics of subsystem $A$ depend on the composite preparation only
through its reduced preparation, and if $\rho_{A}=\rho'_{A}$ then every local
readout law is the same in $\rho$ and in $\rho'$.

**(b) Determination of the reduced preparation.** Conversely, if
$\rho_{A}\ne\rho'_{A}$, then there are a bounded assigned sharp observable
$(P,1)$ of subsystem $A$ and a Borel set $B$ with
$\mu^{P^{\mathrm{loc}}}_{\rho}(B)\ne\mu^{P^{\mathrm{loc}}}_{\rho'}(B)$: the
family of local readout laws of subsystem $A$ determines $\rho_{A}$ among the
preparations of the composite.

**(c) Ideal local measurement.** Let $(P_{a})_{a\in A_{0}}$ be a declared
ideal sharp measurement of subsystem $A$
([[def-nrqm-measurement-framework-declared-measurements-and-instruments]]
clause (a)). Then $(P_{a}\otimes I_{K})_{a\in A_{0}}$ is a declared ideal
sharp measurement of the declared composite, its outcome probabilities in a
preparation $\rho$ are
$$p_{a}=\operatorname{tr}\bigl(\rho\,(P_{a}\otimes I_{K})\bigr)=\operatorname{tr}(\rho_{A}P_{a}),$$
and for $p_{a}>0$ the conditional state
$\rho_{a}:=(P_{a}\otimes I_{K})\rho\,(P_{a}\otimes I_{K})/p_{a}$ of the
composite has the reduced preparation
$$(\rho_{a})_{A}=\frac{P_{a}\rho_{A}P_{a}}{p_{a}},$$
which is the selective Lueders update of $\rho_{A}$ by $P_{a}$. The
discarded-outcome state $\Phi(\rho)=\sum_{a}(P_{a}\otimes I_{K})\rho\,(P_{a}\otimes I_{K})$
has reduced preparations
$$\Phi(\rho)_{A}=\sum_{a}P_{a}\rho_{A}P_{a},\qquad \Phi(\rho)_{B}=\operatorname{Tr}_{H}\Phi(\rho)=\rho_{B} .$$
The analogous statements hold with the roles of $A$ and $B$ exchanged.

**(d) Scope.** Clauses (a)-(c) are conditional consequences of P1, P2 and P3
in the readings of the cited items and of the cited mathematics. They concern
the declared composite and its declared measurements; they assert no dynamics,
no interaction, no apparatus realization, no uniqueness of recorded outcomes
and no empirical fact, and clause (c) is a statement about the declared ideal
Lueders instrument only, not about every laboratory procedure.

## Facts & Assumptions

**Given:** The declared composite with assigned spaces $H,K$; preparations $\rho,\rho'$; reduced preparations $\rho_{A},\rho'_{A},\rho_{B}$; an assigned sharp observable $(A,u_{A})$ of subsystem $A$ with spectral measure $E_{A}$; a declared ideal sharp measurement $(P_{a})_{a\in A_{0}}$ of subsystem $A$; the choice hypotheses.

[F1] **Local readout and its outcome law.** For an assigned sharp observable $(A,u_{A})$ of subsystem $A$, the local readout $(A^{\mathrm{loc}},u_{A})$ is the assigned sharp observable of the composite with spectral projection valued measure $F_{A}=E_{A}(\cdot)\otimes I_{K}$, so that $\mu^{A^{\mathrm{loc}}}_{\rho}(B)=\operatorname{tr}(\rho(E_{A}(B)\otimes I_{K}))$; $E_{A}$ is regular and $F_{A}$ is a regular projection valued measure by [[lem-nrqm-composites-local-pvm-tensor-extension]] ([[def-nrqm-composites-framework-composite-systems-and-local-readouts]] clause (c), [[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (a), (b)).

[F2] **Partial trace.** $\operatorname{tr}((\operatorname{Tr}_{K}T)X)=\operatorname{tr}(T(X\otimes I_{K}))$ for every trace-class $T$ and bounded $X$, and $\operatorname{Tr}_{K}$ is linear, positive, trace preserving and trace-norm contractive; moreover $\operatorname{Tr}_{K}T_{u\otimes v,u'\otimes v'}=\langle v,v'\rangle T_{u,u'}$ ([[lem-nrqm-composites-separable-partial-trace]] clauses (a), (b), (c)).

[F3] **Trace pairing and cyclicity.** For trace-class $T$ and bounded $B$ one has $\operatorname{tr}(BT)=\operatorname{tr}(TB)$ and $|\operatorname{tr}T|\le\|T\|_{1}$ ([[lem-nrqm-composites-nuclear-bounded-cyclicity]] clause (b), [[thm-trace-is-absolutely-convergent-and-basis-independent]], [[thm-trace-class-is-a-two-sided-banach-operator-ideal]] clauses 1, 2); the rank-one operators satisfy $\operatorname{tr}(ST_{w,w'})=\langle Sw,w'\rangle$, $T_{w,w'}$ is bounded with $\|T_{w,w'}\|=\|w\|\,\|w'\|$, and $T_{w,w}$ is an orthogonal projection for unit $w$ ([[lem-nrqm-composites-rank-one-operator-calculus]] clauses (a), (b), (c), (e)).

[F4] **Separating local statistics.** If two density operators $\rho_{A}\ne\rho'_{A}$ on $H$ are distinct, then there is a unit $w$ with $\langle\rho_{A}w,w\rangle\ne\langle\rho'_{A}w,w\rangle$, and the rank-one projection $P=T_{w,w}$ has the outcome laws $\mu^{P}_{\rho_{A}}(\{1\})=\operatorname{tr}(\rho_{A}P)=\langle\rho_{A}w,w\rangle$ and $\mu^{P}_{\rho'_{A}}(\{1\})=\langle\rho'_{A}w,w\rangle$ ([[lem-nrqm-observables-states-separated-by-bounded-projections]] clauses (a), (b), [[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (b)).

[F5] **Ideal sharp measurement of the composite.** For a declared ideal sharp measurement $(P_{a})$ of a system, the outcome probability in $\rho$ is $p_{a}=\operatorname{tr}(\rho P_{a})$, the conditional state is $P_{a}\rho P_{a}/p_{a}$ when $p_{a}>0$, and the discarded-outcome state is the trace-norm convergent sum $\Phi(\rho)=\sum_{a}P_{a}\rho P_{a}$ with $\operatorname{tr}(\Phi(\rho)P_{a})=p_{a}$ ([[pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles]] clauses (a), (b), (c), [[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clauses (a), (b)).

[F6] **Tensor calculus and strong continuity.** $(S\otimes I_{K})\kappa(x\otimes y)=\kappa(Sx\otimes y)$ for bounded $S$, and $(S\otimes T)(S'\otimes T')=(SS')\otimes(TT')$, $(S\otimes T)^{*}=S^{*}\otimes T^{*}$, $\|S\otimes T\|\le\|S\|\,\|T\|$ for bounded operators ([[lem-nrqm-composites-bounded-tensor-maps]] clauses (a), (b), (c)); if a sequence of bounded operators is uniformly bounded and converges strongly, then tensoring with $I_{K}$ preserves the strong convergence ([[lem-nrqm-composites-local-pvm-tensor-extension]] clause (c)).

[F7] **Density-operator expansion.** The preparation $\rho$ has a finite or countable trace-norm convergent expansion $\rho=\sum_nw_nT_{u_n,u_n}$ with $(u_n)$ orthonormal, $w_n\ge0$ and $\sum_nw_n=1$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a)).

## Proof

**Proof technique:** direct; establish the intertwining identity for the partial
trace and bounded operators on one factor, derive the local readout law from
the partial trace characterization, read the determination of the reduced
preparation off the separating rank-one projection, and compute the conditional
and discarded reductions of a local ideal sharp measurement with the
intertwining identity.

**Given:** The data of the statement and [F1]-[F7].

1.1 [Intertwining identity] Let $T$ be trace class on $H\widehat\otimes K$ and $X,Y$ bounded on $H$. For every bounded $Z$ on $H$, [F2] gives $\operatorname{tr}\bigl(\operatorname{Tr}_{K}\bigl((X\otimes I)T(Y\otimes I)\bigr)Z\bigr)=\operatorname{tr}\bigl((X\otimes I)T(Y\otimes I)(Z\otimes I)\bigr)=\operatorname{tr}\bigl(T(YZX\otimes I)\bigr)=\operatorname{tr}\bigl((\operatorname{Tr}_{K}T)(YZX)\bigr)=\operatorname{tr}\bigl(X(\operatorname{Tr}_{K}T)YZ\bigr)$ by [F3] and [F6]; since $\operatorname{Tr}_{K}((X\otimes I)T(Y\otimes I))$ and $X(\operatorname{Tr}_{K}T)Y$ are trace-class operators with equal trace pairings against every bounded $Z$, they are equal by [F3]. [F2, F3, F6, algebra]

1.2 [The extended family is a declared measurement] The operators $P_{a}\otimes I_{K}$ are orthogonal projections by [F6]; $P_{a}P_{b}=0$ for $a\ne b$ gives $(P_{a}\otimes I_{K})(P_{b}\otimes I_{K})=(P_{a}P_{b})\otimes I_{K}=0$; and $\sum_{a\in A_{0}}(P_{a}\otimes I_{K})=I_{H}\otimes I_{K}$ in the strong sense, because the finite partial sums are $(\sum_{a\le N}P_{a})\otimes I_{K}$ by linearity and converge strongly to $I_{H}\otimes I_{K}$ by [F6], the projections $\sum_{a\le N}P_{a}$ being uniformly bounded and converging strongly to $I_{H}$. Hence $(P_{a}\otimes I_{K})$ is a declared ideal sharp measurement of the composite. [given, F6, algebra]

1.3 [Local readout law] For every Borel $B$, [F1] gives $\mu^{A^{\mathrm{loc}}}_{\rho}(B)=\operatorname{tr}(\rho(E_{A}(B)\otimes I_{K}))$, and [F2] applied with the bounded operator $E_{A}(B)$ gives $\operatorname{tr}(\rho(E_{A}(B)\otimes I_{K}))=\operatorname{tr}(\rho_{A}E_{A}(B))=\mu^{A}_{\rho_{A}}(B)$ by [F1]; applying the same identity to $\rho'$ gives the case $\rho_{A}=\rho'_{A}$, so this is (a). [given, F1, F2, algebra]

2.1 [Determination of the reduced preparation] Suppose $\rho_{A}\ne\rho'_{A}$. By [F4] there is a unit $w$ with $\langle\rho_{A}w,w\rangle\ne\langle\rho'_{A}w,w\rangle$; declare the bounded self-adjoint operator $P:=T_{w,w}$ with unit $1$ as a bounded assigned sharp observable of subsystem $A$. Its local readout $(P^{\mathrm{loc}},1)$ has, by step 1.3, the outcome law $\mu^{P^{\mathrm{loc}}}_{\rho}(\{1\})=\operatorname{tr}(\rho(P\otimes I_{K}))=\operatorname{tr}(\rho_{A}P)=\langle\rho_{A}w,w\rangle$, and likewise $\mu^{P^{\mathrm{loc}}}_{\rho'}(\{1\})=\langle\rho'_{A}w,w\rangle$; the two numbers differ, so some local readout law differs, which is (b). [given, F3, F4, step 1.3, algebra]

2.2 [Conditional local measurement] By step 1.2 the family $(P_{a}\otimes I_{K})$ is a declared ideal sharp measurement of the composite, so [F5] gives $p_{a}=\operatorname{tr}(\rho(P_{a}\otimes I_{K}))=\operatorname{tr}(\rho_{A}P_{a})$ by [F2], and the conditional state $\rho_{a}=(P_{a}\otimes I_{K})\rho(P_{a}\otimes I_{K})/p_{a}$ for $p_{a}>0$. Step 1.1 with $X=Y=P_{a}$ gives $\operatorname{Tr}_{K}\bigl((P_{a}\otimes I_{K})\rho(P_{a}\otimes I_{K})\bigr)=P_{a}\rho_{A}P_{a}$, hence $(\rho_{a})_{A}=P_{a}\rho_{A}P_{a}/p_{a}$; the conditional update of the composite reduces to the selective Lueders update of $\rho_{A}$, which is the first part of (c). [given, F2, F5, step 1.1, step 1.2, algebra]

2.3 [Discarded local measurement] The discarded-outcome state $\Phi(\rho)$ of [F5] has $A$-reduction $\sum_{a}P_{a}\rho_{A}P_{a}$: apply $\operatorname{Tr}_{K}$ to the trace-norm convergent series termwise using step 1.1 and the trace-norm continuity of $\operatorname{Tr}_{K}$ from [F2]. For the $B$-reduction let $Y$ be bounded on $K$, enumerate the outcomes, and set $S_N=\sum_{a\le N}P_a$. Orthogonality and the strong resolution of the identity give $0\le S_N\le I_H$ and $S_N\to I_H$ strongly. By [F6], $S_N\otimes I_K\to I_H\otimes I_K$ strongly, and the tensor product rule gives $S_N\otimes Y=(S_N\otimes I_K)(I_H\otimes Y)\to I_H\otimes Y$ strongly with $\sup_N\|S_N\otimes Y\|\le\|Y\|$. The strong limit passes through this trace pairing by a finite-tail argument: [F7] and the rank-one trace identity in [F3] give $\operatorname{tr}(\rho(S_N\otimes Y))=\sum_kw_k\langle(S_N\otimes Y)u_k,u_k\rangle$. For each $k$ the summand converges to $w_k\langle(I_H\otimes Y)u_k,u_k\rangle$, and its modulus is at most $w_k\|Y\|$. Given $\varepsilon>0$, choose a finite initial segment ending at $N_0$ whose omitted weights sum to less than $\varepsilon/(4\|Y\|)$ when $Y\ne0$; the tail of the difference from the limit is at most $2\|Y\|\sum_{k>N_0}w_k<\varepsilon/2$, while strong convergence on the finite segment makes that part less than $\varepsilon/2$ for all sufficiently large $N$; hence $\operatorname{tr}(\rho(S_N\otimes Y))\to\operatorname{tr}(\rho(I_H\otimes Y))$. The case $Y=0$ is immediate. Now let $\Phi_N(\rho)=\sum_{a\le N}(P_a\otimes I_K)\rho(P_a\otimes I_K)$. Trace-norm convergence in [F5] and the trace ideal bound give $\operatorname{tr}(\Phi_N(\rho)(I_H\otimes Y))\to\operatorname{tr}(\Phi(\rho)(I_H\otimes Y))$. For each finite $N$, cyclicity [F3] and the tensor rules [F6] give $\operatorname{tr}(\Phi_N(\rho)(I_H\otimes Y))=\operatorname{tr}(\rho(S_N\otimes Y))$. Therefore $\operatorname{tr}(\operatorname{Tr}_{H}\Phi(\rho)Y)=\operatorname{tr}(\Phi(\rho)(I_H\otimes Y))=\operatorname{tr}(\rho(I_H\otimes Y))=\operatorname{tr}(\rho_BY)$ by [F2]. Since the trace pairings against every bounded $Y$ determine a trace-class operator, $\operatorname{Tr}_{H}\Phi(\rho)=\rho_B$. This completes (c); the exchanged-roles statement is the same argument with $H$ and $K$ interchanged. [given, F2, F3, F5, F6, F7, step 1.1, step 1.2, algebra]

3.1 [Assembly and scope] Step 1.3 is (a), step 2.1 is (b), steps 2.2 and 2.3 are (c), and (d) records that only P1, P2, P3 in their stated readings and the cited mathematics were used. [step 1.3, step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **Which factor is measured.** Clause (c) measures subsystem $A$; its
  discarded version leaves $\rho_{B}$ fixed while changing $\rho_{A}$ into the
  Lueders mixture. The conditional version changes the description of $B$ as
  well, and that conditional change is exactly the correlation between the
  factors; no signalling claim beyond the outcome-law invariance is made here.
- **Unbounded readouts.** Clause (a) covers unbounded assigned sharp
  observables of the factor, including the position and momentum observables of
  the massive-particle model, because the local readout is defined through the
  spectral measure $E_{A}(\cdot)\otimes I_{K}$.
