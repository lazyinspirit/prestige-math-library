---
id: pthm-nrqm-kinematics-translation-covariance
aliases: [ nrqm-kinematics-translation-covariance ]
kind: physics-theorem
domain: physics
title: "Translation covariance of the massive spin-s kinematics and of its
  bounded-potential dynamics"
status: draft
origin: session
dependency_level: 10
deps:
  [
    def-axiom-of-choice,
    def-countable-choice,
    def-nrqm-autonomous-dynamics-framework-evolution,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    def-nrqm-magnetic-and-detection-position-and-momentum-operators,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-projection-valued-measure,
    def-strongly-continuous-one-parameter-unitary-group,
    lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group,
    lem-nrqm-kinematics-ccr-and-internal-factor-commutation,
    lem-nrqm-kinematics-component-valued-wavefunction-identifications,
    lem-nrqm-kinematics-componentwise-position-and-momentum,
    lem-nrqm-kinematics-momentum-representation,
    lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-observable-and-probability,
    pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow,
    pthm-nrqm-kinematics-spin-s-outcome-laws,
    thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators,
    thm-stone-one-parameter-unitary-groups
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-projection-valued-measure: mathematical-premise
  def-strongly-continuous-one-parameter-unitary-group: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  lem-nrqm-kinematics-ccr-and-internal-factor-commutation: mathematical-premise
  lem-nrqm-kinematics-component-valued-wavefunction-identifications: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-kinematics-momentum-representation: mathematical-premise
  lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators: mathematical-premise
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow: physical-result
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-stone-one-parameter-unitary-groups: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The translation covariance of the spin-s massive-particle
  model: the unitarity and operator conjugation identities of the componentwise
  translations, the resulting translation of the position law and invariance of
  the momentum laws, the conjugation of the free-plus-bounded-potential energy
  operator and of its flow, and the model's reading of a passive change of
  spatial origin. The statement is conditional on P2, P4, P5 and P6 and the
  cited mathematics, holds for real bounded measurable potentials only, and
  asserts nothing about singular or unbounded potentials, boundary realizations,
  relativistic models, radiation, apparatuses or empirical results."
proof_strategy: direct
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections
        4.1-4.3, printed pages 58-70 (PDF pages 66-78): translating kets,
        continuous transformations and generators, transformations of operators
        and symmetries"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 1 'Wave
        Mechanics', Section 6, printed pages 22-24 (PDF pages 22-24): position
        and momentum representations and the action of the momentum operator"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/61bc31b8d8b\
        f0680c322733910a71aa0_MIT8_05F13_Chap_01.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 7.1 printed pages 161-167 (PDF pages 173-179): Fourier transform
        conventions; Section 8.1 printed pages 173-175 (PDF pages 185-187): the
        one-parameter translation group with generator the momentum component"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the observable and probability postulate P2 in the reading of
[[def-nrqm-observables-framework-observable-and-outcome-law]], the
autonomous-dynamics postulate P4 in the reading of
[[def-nrqm-autonomous-dynamics-framework-evolution]], and the kinematics and
massive-particle model postulate P5 and internal-factor postulate P6 read
through [[def-nrqm-kinematics-framework-massive-spin-s-model]] for a particle
of mass parameter $m>0$ and spin label $s$
([[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]]), and
assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $H_{s}$ be the model's
state space with componentwise operators $Q_{j},P_{k}$ and translations
$T_{a}:=T_{a}^{(r)}$ ($r=2s+1$) of
[[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (c), let
$\mu^{A}_{\psi}(B)=\|E_{A}(B)\psi\|^{2}$ be the outcome law of an assigned sharp
observable $A$ in a unit vector $\psi$, and let $V:\mathbb R^{3}\to\mathbb R$
be real, bounded and measurable with $V_{a}(x):=V(x-a)$; write
$$H_{V}:=\frac{1}{2m}\sum_{k=1}^{3}P_{k}^{2}+M_{V},\qquad D(H_{V})=W^{2,2}(\mathbb R^{3};\mathbb C^{r}),$$
for the model's free-plus-bounded-potential energy operator
([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clause (c) applied componentwise, assembled by
[[lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators]]), with flow
$U_{V}(t)=\exp(-itH_{V}/\hbar)$ in the reading of
[[def-nrqm-autonomous-dynamics-framework-evolution]] clause (b). Then:

(a) for every $a\in\mathbb R^{3}$ the operator $T_{a}$ is unitary,
$T_{a}D(Q_{j})=D(Q_{j})$, $T_{a}D(P_{k})=D(P_{k})$, and
$$T_{a}Q_{j}T_{a}^{-1}=Q_{j}-a_{j}I,\qquad T_{a}P_{k}T_{a}^{-1}=P_{k};$$

(b) **Outcome-law covariance.** For every unit $\psi\in H_{s}$ and Borel
$B\subseteq\mathbb R$,
$$\mu^{Q_{j}}_{T_{a}\psi}(B)=\mu^{Q_{j}}_{\psi}(B-a_{j}),\qquad \mu^{P_{k}}_{T_{a}\psi}(B)=\mu^{P_{k}}_{\psi}(B):$$
translating the preparation by $a$ translates the position law by $a$ and
leaves every momentum law unchanged;

(c) **Dynamics covariance.** With $H_{V}$ and $H_{V_{a}}$ the energy operators
of the potentials $V$ and $V_{a}$,
$$T_{a}H_{V}T_{a}^{-1}=H_{V_{a}},\qquad T_{a}U_{V}(t)T_{a}^{-1}=U_{V_{a}}(t)\qquad(t\in\mathbb R);$$
in particular, if $V$ is invariant under translation by $a$ (equivalently
constant almost everywhere when this holds for every $a$), then $T_{a}$ leaves
$H_{V}$ and its flow invariant, and the free flow ($V=0$) commutes with every
translation;

(d) **Frame reading.** The model reads the inertial-frame change
$t'=t$, $x'=x+a$ of P5 (a change of spatial origin; the parameter $a$ has the
unit of length, [[def-nrqm-framework-quantities-and-units]]) on state
representatives by $\psi'(x')=\psi(x'-a)=(T_{a}\psi)(x')$; this is the
translation convention of the model, consistent with P5's frame class, and
clauses (b) and (c) are its covariance consequences for the outcome laws and
for the bounded-potential dynamics;

(e) **Scope.** The statement is conditional on P2, P4, P5 and P6 and the cited
mathematics, and it concerns the componentwise massive model with real bounded
measurable potentials only; singular or unbounded potentials, confined or
boundary realizations, massless and relativistic models and radiation are
separate model assumptions for which no translation covariance is asserted.
No apparatus, laboratory identification or empirical result is recorded.

## Facts & Assumptions

**Given:** The postulates P2, P4, P5, P6 read through [[def-nrqm-kinematics-framework-massive-spin-s-model]]; the Axiom of Countable Choice and the Axiom of Choice; the state space $H_{s}$ with $r=2s+1$; the operators $Q_{j},P_{k}$; the translations $T_{a}$; a real bounded measurable $V$; a unit vector $\psi$; $a\in\mathbb R^{3}$; $\lambda\in\mathbb R$; Borel $B\subseteq\mathbb R$.

[F1] **Componentwise kinematics.** $Q_{j}$ and $P_{k}$ are self-adjoint with the maximal componentwise domains; the translations $T_{a}$ are unitary with $T_{a}D(Q_{j})=D(Q_{j})$, $T_{a}Q_{j}T_{a}^{-1}=Q_{j}-a_{j}I$, $T_{a}D(P_{k})=D(P_{k})$, $T_{a}P_{k}T_{a}^{-1}=P_{k}$; on Schwartz classes $T_{a}$ is the shift and $P_{k}f=-i\hbar D_{k}f$ ([[lem-nrqm-kinematics-componentwise-position-and-momentum]] clauses (a),(c), [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]]).

[F2] **Laws and spectral measures.** The outcome law of an assigned sharp observable is $\mu^{A}_{\psi}(B)=\|E_{A}(B)\psi\|^{2}$; the spectral measures of the model are $E_{Q_{j}}(B)=M_{\mathbf 1_{x_{j}^{-1}(B)}}$ and $E_{P_{k}}(B)=U^{(s)-1}M_{\mathbf 1_{B}(p_{k})}U^{(s)}$ ([[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b), [[pthm-nrqm-kinematics-spin-s-outcome-laws]] clauses (a),(c), [[lem-nrqm-kinematics-momentum-representation]] clause (b), [[def-projection-valued-measure]]).

[F3] **Bounded-potential energy and flow.** For a real bounded measurable $V$ the operator $(1/2m)\sum_{k}P_{k}^{2}+M_{V}$ is self-adjoint on $W^{2,2}(\mathbb R^{3};\mathbb C)$ with domain invariant under the flow $e^{-itH/\hbar}$, which is a strongly continuous unitary group solving $i\hbar\frac{d}{dt}\psi(t)=H\psi(t)$ exactly on the domain ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clause (c), [[lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators]], [[pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow]] clauses (a)-(c), [[def-strongly-continuous-one-parameter-unitary-group]]). The generator of a strongly continuous unitary group determines the group ([[thm-stone-one-parameter-unitary-groups]], [[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]]).

[F4] **Multipliers shift.** $T_{a}M_{V}T_{a}^{-1}=M_{V_{a}}$ with $V_{a}(x)=V(x-a)$, and $T_{a}W^{2,2}(\mathbb R^{3};\mathbb C^{r}) =W^{2,2}(\mathbb R^{3};\mathbb C^{r})$, because the componentwise translation preserves the weak derivative and shifts the pointwise multiplier ([[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (c), [[lem-nrqm-kinematics-component-valued-wavefunction-identifications]] clause (c)).

## Proof

**Proof technique:** direct; read clause (a) from the componentwise translation identities, compute the law transport from the explicit multiplication and momentum-multiplier forms of the spectral measures, and conjugate the bounded-potential Hamiltonian and its flow, identifying the generator of the conjugated group.

**Given:** The data of the statement and [F1]-[F4].

1.1 [Operators and domains] Clause (a) is exactly [F1]: unitarity of $T_{a}$, the domain equalities and the two conjugation identities. [F1]

1.2 [Position-law transport] By [F2], both sides of $E_{Q_{j}}(B)T_{a}=T_{a}E_{Q_{j}}(B-a_{j})$ are componentwise multiplication operators: for a class $f$, $\bigl(E_{Q_{j}}(B)T_{a}f\bigr)(x)=\mathbf 1_{B}(x_{j})f(x-a)$ and $\bigl(T_{a}E_{Q_{j}}(B-a_{j})f\bigr)(x) =\mathbf 1_{B-a_{j}}(x_{j}-a_{j})f(x-a) =\mathbf 1_{B}(x_{j})f(x-a)$, so the operators agree. Taking norms and using unitarity of $T_{a}$ and the law formula [F2], $\mu^{Q_{j}}_{T_{a}\psi}(B)=\|E_{Q_{j}}(B)T_{a}\psi\|^{2} =\|E_{Q_{j}}(B-a_{j})\psi\|^{2}=\mu^{Q_{j}}_{\psi}(B-a_{j})$. [F1, F2, algebra]

1.3 [Hamiltonian covariance] By [F1], $T_{a}P_{k}T_{a}^{-1}=P_{k}$, hence also $T_{a}P_{k}^{2}T_{a}^{-1}=P_{k}^{2}$ with domain invariance; and [F4] gives $T_{a}M_{V}T_{a}^{-1}=M_{V_{a}}$, with $T_{a}W^{2,2}=W^{2,2}$. Therefore $T_{a}H_{V}T_{a}^{-1}=H_{V_{a}}$ as operators with domain $W^{2,2}(\mathbb R^{3};\mathbb C^{r})$. [F1, F3, F4, algebra]

2.1 [Momentum-law invariance] By [F2], $U^{(s)}E_{P_{k}}(B)U^{(s)-1}=M_{\mathbf 1_{B}(p_{k})}$ and $U^{(s)}T_{a}U^{(s)-1}=M_{e^{-ia\cdot p/\hbar}}$ ([[lem-nrqm-kinematics-momentum-representation]] clause (d)); the two multipliers commute, so $E_{P_{k}}(B)T_{a}=T_{a}E_{P_{k}}(B)$ and $\mu^{P_{k}}_{T_{a}\psi}(B)=\|E_{P_{k}}(B)T_{a}\psi\|^{2} =\|E_{P_{k}}(B)\psi\|^{2}=\mu^{P_{k}}_{\psi}(B)$. Together with step 1.2 this proves (b). [step 1.2, F1, F2, algebra]

2.2 [Flow covariance] Define $W(t):=T_{a}U_{V}(t)T_{a}^{-1}$. It is a strongly continuous unitary group because $U_{V}$ is one and conjugation by the unitary $T_{a}$ preserves the group law, unitarity and strong continuity. For $x\in D(H_{V_{a}})=T_{a}D(H_{V})$ one has $T_{a}^{-1}x\in D(H_{V})$ and $\frac1t\bigl(W(t)x-x\bigr) =T_{a}\frac1t\bigl(U_{V}(t)T_{a}^{-1}x-T_{a}^{-1}x\bigr) \longrightarrow T_{a}\Bigl(-\frac{i}{\hbar}H_{V}T_{a}^{-1}x\Bigr) =-\frac{i}{\hbar}H_{V_{a}}x,$ using the generator property of $U_{V}$ [F3] and step 1.3; the limit exists exactly on $D(H_{V_{a}})$ because the limit for $U_{V}$ exists exactly on $D(H_{V})$ [F3]. Hence $W$ is a strongly continuous unitary group with generator $-\frac{i}{\hbar}H_{V_{a}}$; by [F3] the group $t\mapsto U_{V_{a}}(t)=\exp(-itH_{V_{a}}/\hbar)$ has the same generator, and uniqueness of the group with a given generator gives $T_{a}U_{V}(t)T_{a}^{-1}=U_{V_{a}}(t)$. If $V$ is invariant under translation by $a$ then $V_{a}=V$ almost everywhere and $T_{a}H_{V}T_{a}^{-1}=H_{V}$ with $T_{a}U_{V}(t)T_{a}^{-1}=U_{V}(t)$; the free case $V=0$ is translation invariant for every $a$. This proves (c). [step 1.3, F1, F3, F4, algebra]

3.1 [Frame reading and scope] Clause (d) records the model's convention for the passive spatial translation of P5: the parameter $a$ is the shift of the spatial origin and the representative transforms by the shift $T_{a}$, so steps 1.2, 2.1 and 2.2 are exactly the transformations of the law and of the bounded-potential dynamics under the frame change. Clause (e) records the hypotheses actually used: P2, P4, P5 and P6, the componentwise model, real bounded measurable $V$ and the cited mathematics; nothing was used about singular potentials, boundaries, massless or relativistic models, radiation, apparatus or measurements. [given, step 1.1, step 1.2, step 2.1, step 1.3, step 2.2] ∎

## Remarks

- **Sign of the shift.** The convention is that translating the preparation by
  $a$ moves the position law by $+a$: clause (b) says
  $\mu^{Q_{j}}_{T_{a}\psi}(B)=\mu^{Q_{j}}_{\psi}(B-a)$. Momentum laws are
  invariant because the translation commutes with $P_{k}$; this is the
  kinematic statement that translations are generated by momentum, and the
  generator identification itself is the mathematical content of
  [[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (d).
- **What is not claimed.** No covariance of the internal factor under spatial
  transformations, no rotation or boost statement (those are separate items of
  this page), and no general covariance for potentials outside the bounded
  measurable class. The frame reading of clause (d) is a convention of the
  model and gains content only through the covariance statements (b) and (c).
