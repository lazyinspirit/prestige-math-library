---
id: ex-nrqm-symmetries-free-translation-and-momentum
aliases: [ nrqm-symmetries-free-translation-and-momentum ]
kind: example
domain: physics
title: "The free model: translation symmetries and conserved momentum in the
  momentum representation"
status: draft
origin: session
dependency_level: 12
deps:
  [
    def-axiom-of-choice,
    def-countable-choice,
    def-dependent-choice,
    def-hilbert-space,
    def-l-p-space-as-a-quotient-by-null-functions,
    def-nrqm-autonomous-dynamics-framework-evolution,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-symmetries-framework-symmetry-groups-and-conservation,
    lem-nrqm-kinematics-componentwise-position-and-momentum,
    lem-nrqm-kinematics-momentum-representation,
    lem-nrqm-symmetries-free-flow-multiplier-form,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-identical-particles-and-spin,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-state-and-composition,
    pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation,
    thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-symmetries-framework-symmetry-groups-and-conservation: formulation-prerequisite
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-kinematics-momentum-representation: mathematical-premise
  lem-nrqm-symmetries-free-flow-multiplier-form: mathematical-premise
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation: physical-result
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A model computation for the free massive spin-s model, V
  identically zero: the translations are symmetries and commute with the free
  flow, the momentum components are conserved sharp observables with conserved
  law and moments, and the free flow acts in the momentum representation as a
  unimodular multiplier leaving the modulus of the momentum representative
  fixed. The item asserts nothing for nonconstant potentials, no trajectory, no
  measured distribution, and no apparatus model."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections
        4.1.1-4.1.2 and 4.3, printed pages 59-62 and 68-70 (PDF pages 67-70 and
        76-78): translating kets, momentum as the generator of translations and
        translational invariance with conservation of momentum; PDF page =
        printed page + 8"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 8.1, printed pages 173-175 (PDF pages 185-187): the free
        evolution as a Fourier multiplier and momentum conservation"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', Section 3.2, printed pages 20-22 (PDF pages 20-22): constant
        Heisenberg operators for observables commuting with the Hamiltonian"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
verification:
  precheck: pass
---

## Example

Adopt the postulates P1, P2, P4, P5 and P6 in the readings of
[[def-nrqm-kinematics-framework-massive-spin-s-model]],
[[def-nrqm-observables-framework-observable-and-outcome-law]],
[[def-nrqm-autonomous-dynamics-framework-evolution]] and
[[def-nrqm-symmetries-framework-symmetry-groups-and-conservation]] for a
declared particle of mass parameter $m>0$ and spin label $s$, with state space
$H_{s}=L^{2}(\mathbb R^{3};\mathbb C^{r})$, $r=2s+1$, componentwise operators
$Q_{j},P_{k}$ and translations $T_{a}$
([[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (c));
assume the Axiom of Choice, the Axiom of Countable Choice and the Axiom of
Dependent Choice ([[def-axiom-of-choice]], [[def-countable-choice]],
[[def-dependent-choice]]). Consider the **free model**, the bounded-potential
model with $V\equiv0$:
$$H_{0}:=\frac{1}{2m}\sum_{k=1}^{3}P_{k}^{2},\qquad D(H_{0})=W^{2,2}(\mathbb R^{3};\mathbb C^{r}),$$
with flow $U(t)=\exp(-itH_{0}/\hbar)$, momentum unitary $U^{(r)}$
([[lem-nrqm-kinematics-momentum-representation]]) and
$f_{t}(p):=e^{-it|p|^{2}/(2m\hbar)}$. Then:

(a) for every $a\in\mathbb R^{3}$ the translation $T_{a}$ is a symmetry of
$H_{0}$ in the sense of
[[def-nrqm-symmetries-framework-symmetry-groups-and-conservation]] clause (b),
and
$$T_{a}\,e^{-itH_{0}/\hbar}\,T_{a}^{-1}=e^{-itH_{0}/\hbar}\qquad(a\in\mathbb R^{3},\ t\in\mathbb R);$$

(b) in the momentum representation the two actions are the multipliers
$$U^{(r)}T_{a}U^{(r)-1}=M_{e^{-ia\cdot p/\hbar}},\qquad U^{(r)}e^{-itH_{0}/\hbar}U^{(r)-1}=M_{f_{t}},$$
which commute; consequently $T_{a}U(t)=U(t)T_{a}$ for all $a,t$;

(c) **Momentum conservation.** For every $k$ the momentum component $P_{k}$ is
a conserved observable of the free model: for every preparation $\rho$, Borel
$B\subseteq\mathbb R$ and $t$,
$$\mu^{P_{k}}_{\rho(t)}(B)=\mu^{P_{k}}_{\rho(0)}(B),$$
and for a unit vector $\psi(0)\in D(P_{k})$ the mean and second moment of the
law of $P_{k}$ are finite and independent of $t$, with time-zero values
$\langle P_{k}\psi,\psi\rangle$ and $\|P_{k}\psi\|^{2}$; the coordinate
translations satisfy $T_{te_{k}}=e^{-itP_{k}/\hbar}$, so the momentum
components are the generators of the translational symmetry groups;

(d) the modulus of the momentum representative is invariant in time:
$$\bigl|\bigl(U^{(r)}e^{-itH_{0}/\hbar}\psi\bigr)(p)\bigr|=\bigl|\bigl(U^{(r)}\psi\bigr)(p)\bigr|\qquad\text{for almost every }p\ \text{and every }\psi\in H_{s};$$
consequently the squared modulus of the momentum representative is the same
almost-everywhere function of $p$ at every time;

(e) **Scope.** The statement concerns the free model $V\equiv0$ only. For a
nonconstant bounded potential the translations need not be symmetries and
momentum need not be conserved; that failure is exhibited on this page. No
trajectory in space, no classical limit, no measurement model and no empirical
result is asserted.

## Facts & Assumptions

**Given:** The postulates P1, P2, P4, P5, P6 in the stated readings; the
Axioms of Choice, Countable Choice and Dependent Choice; the state space
$H_{s}$; the operators $Q_{j},P_{k}$ and translations $T_{a}$; the free
operator $H_{0}$ with flow $U(t)$; the momentum unitary $U^{(r)}$; a
preparation $\rho$; a unit vector $\psi$; a Borel set $B$; $a\in\mathbb R^{3}$,
$k\in\{1,2,3\}$, $t\in\mathbb R$.

[F1] **Free operator.** $H_{0}=\frac{1}{2m}\sum_{k}P_{k}^{2}$ with domain
$W^{2,2}(\mathbb R^{3};\mathbb C^{r})$ is self-adjoint and generates the
strongly continuous unitary group $U(t)=e^{-itH_{0}/\hbar}$
([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clauses (b),(c), [[lem-nrqm-kinematics-componentwise-position-and-momentum]]
clause (a), [[def-nrqm-kinematics-framework-massive-spin-s-model]]).

[F2] **Translations.** $T_{a}$ is unitary, $T_{a}D(Q_{j})=D(Q_{j})$,
$T_{a}Q_{j}T_{a}^{-1}=Q_{j}-a_{j}I$, $T_{a}D(P_{k})=D(P_{k})$,
$T_{a}P_{k}T_{a}^{-1}=P_{k}$, $T_{a}W^{2,2}=W^{2,2}$, and
$T_{te_{k}}=e^{-itP_{k}/\hbar}$
([[lem-nrqm-kinematics-componentwise-position-and-momentum]] clauses (c),(d)).
For a real bounded measurable $V$ with $V_{a}(x)=V(x-a)$ one has
$T_{a}H_{V}T_{a}^{-1}=H_{V_{a}}$, and $T_{a}$ is a symmetry of $H_{V}$ if and
only if $V_{a}=V$ almost everywhere; if $V$ is almost everywhere constant,
the momentum components are conserved with the law and moment statements of
(c) ([[pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation]]
clauses (a)-(c)).

[F3] **Momentum representation.** $U^{(r)}$ is unitary, maps
$\mathcal S^{(r)}$ onto itself, satisfies $U^{(r)}P_{k}=M_{p_{k}}U^{(r)}$ on
the momentum domains, and conjugates the translations to multipliers:
$U^{(r)}T_{a}^{(r)}U^{(r)-1}=M_{e^{-ia\cdot p/\hbar}}$
([[lem-nrqm-kinematics-momentum-representation]] clauses (b),(d)).

[F4] **Free flow as a multiplier.** $U^{(r)}e^{-itH_{0}/\hbar}U^{(r)-1}=M_{f_{t}}$
with $f_{t}(p)=e^{-it|p|^{2}/(2m\hbar)}$ and
$|(U^{(r)}e^{-itH_{0}/\hbar}\psi)(p)|=|(U^{(r)}\psi)(p)|$ for almost every $p$
([[lem-nrqm-symmetries-free-flow-multiplier-form]] clauses (b),(c)).

[F5] **Bounded multipliers commute.** For bounded measurable $g,h$ on
$\mathbb R^{3}$ the pointwise multiplication operators on
$L^{2}(\mathbb R^{3},dp;\mathbb C^{r})$ satisfy $M_{g}M_{h}=M_{gh}$ and
$\|M_{g}\|\le\sup|g|$, and the real case is the multiplication convention of
[[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clause (a); the complex case follows from the same pointwise definition
([[def-l-p-space-as-a-quotient-by-null-functions]],
[[def-hilbert-space]]). In particular the unimodular multipliers
$M_{e^{-ia\cdot p/\hbar}}$ and $M_{f_{t}}$ are unitary and commute with each
other, since $e^{-ia\cdot p/\hbar}f_{t}(p)=f_{t}(p)e^{-ia\cdot p/\hbar}$ for
every $p$.

[F6] **Laws.** The outcome law of an assigned sharp observable $A$ is
$\mu^{A}_{\rho}(B)=\operatorname{tr}(\rho E_{A}(B))$, respectively
$\mu^{A}_{\psi}(B)=\|E_{A}(B)\psi\|^{2}$
([[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b),
[[def-nrqm-state-geometry-framework-state-space]]).

## Verification

**Proof technique:** direct; apply the translation-invariance theorem at the
constant potential $V\equiv0$, express both the translations and the free flow
as bounded multipliers in the momentum representation, and read the modulus
invariance off the free-flow multiplier.

**Given:** The data of the example and [F1]-[F6].

1.1 [Free symmetries] Apply [F2] with $V\equiv0$, which is real, bounded, measurable and constant almost everywhere: $T_{a}H_{0}T_{a}^{-1}=H_{0}$ because $V_{a}\equiv0=V$, so every $T_{a}$ is a symmetry of $H_{0}$, and the momentum components are conserved with the law and moment statements displayed in (c). This proves the symmetry assertion of (a) and the conservation clause (c). [F1, F2, F6, given, algebra]

1.2 [Multiplier commutation and explicit conjugation] By [F3] and [F4], conjugating $T_{a}e^{-itH_{0}/\hbar}T_{a}^{-1}$ by the unitary $U^{(r)}$ gives $M_{e^{-ia\cdot p/\hbar}}M_{f_{t}}M_{e^{ia\cdot p/\hbar}}$; by [F5] the multipliers commute and are unitary, with $M_{e^{ia\cdot p/\hbar}}=M_{e^{-ia\cdot p/\hbar}}^{-1}$, so this product equals $M_{f_{t}}$, which is $U^{(r)}e^{-itH_{0}/\hbar}U^{(r)-1}$. Hence $T_{a}e^{-itH_{0}/\hbar}T_{a}^{-1}=e^{-itH_{0}/\hbar}$, which is the second display of (a) and, equivalently, $T_{a}U(t)=U(t)T_{a}$ for all $a,t$: the first display of (b). [F3, F4, F5, given, algebra]

1.3 [Momentum density invariance] The modulus identity of (d) is [F4], and squaring it gives the almost-everywhere invariance of $|(U^{(r)}\psi)(p)|^{2}$ in time; this is the consequence asserted in (d). [F4, given, algebra]

2.1 [Assembly and scope] Steps 1.1, 1.2 and 1.3 prove (a), (b), (c) and (d); clause (e) records that the free potential $V\equiv0$ is the only potential used, that no trajectory or measurement model is introduced, and that the failure of translation symmetry for nonconstant potentials is treated separately. [step 1.1, step 1.2, step 1.3, given] ∎

## Remarks

- **Momentum conservation is translation invariance.** The conservation of
  $P_{k}$ in (c) is the special case $V\equiv0$ of the translation-invariance
  theorem; the point of the example is the explicit multiplier form: both the
  translations and the free flow act in the momentum representation by
  unimodular multipliers, and multipliers of the same variable commute.
- **No trajectory.** The invariance of $|U^{(r)}\psi|$ in the momentum
  variable is a statement about the momentum representative's class, not a
  statement that the particle moves along a classical straight line; no
  position-space trajectory is asserted.
