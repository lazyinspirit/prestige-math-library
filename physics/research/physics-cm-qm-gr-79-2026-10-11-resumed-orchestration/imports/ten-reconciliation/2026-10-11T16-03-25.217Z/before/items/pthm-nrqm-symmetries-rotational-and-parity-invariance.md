---
id: pthm-nrqm-symmetries-rotational-and-parity-invariance
aliases: [nrqm-symmetries-rotational-and-parity-invariance]
kind: physics-theorem
domain: physics
title: "Rotational and parity invariance of bounded-potential models: symmetries and conservation of angular momentum and parity laws"
status: draft
origin: session
dependency_level: 10
deps: [def-axiom-of-choice, def-cm-special-orthogonal-group, def-countable-choice,
       def-dependent-choice, def-infinitesimal-generator-of-a-unitary-group,
       def-l-p-space-as-a-quotient-by-null-functions,
       def-nrqm-autonomous-dynamics-framework-evolution,
       def-nrqm-framework-quantities-and-units,
       def-nrqm-kinematics-framework-massive-spin-s-model,
       def-nrqm-observables-framework-observable-and-outcome-law,
       def-nrqm-state-geometry-framework-state-space,
       def-nrqm-state-geometry-pure-mixed-states-and-purity,
       def-nrqm-symmetries-framework-symmetry-groups-and-conservation,
       def-strongly-continuous-one-parameter-unitary-group, def-trace-class-operator,
       lem-cm-so3-is-a-matrix-group, lem-nrqm-composites-density-and-scalar-spectral-probability,
       lem-nrqm-kinematics-componentwise-position-and-momentum,
       lem-nrqm-observables-moments-and-variance,
       lem-nrqm-symmetries-parity-action, lem-nrqm-symmetries-rotation-generators-on-schwartz-classes,
       lem-nrqm-symmetries-spatial-rotation-action,
       lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group,
       post-nrqm-framework-autonomous-dynamics,
       post-nrqm-framework-identical-particles-and-spin,
       post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
       post-nrqm-framework-observable-and-probability,
       post-nrqm-framework-state-and-composition,
       pthm-nrqm-symmetries-generator-conservation,
       thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators,
       thm-spectral-theorem-for-unbounded-self-adjoint-operators,
       thm-stone-one-parameter-unitary-groups]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-infinitesimal-generator-of-a-unitary-group: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-nrqm-symmetries-framework-symmetry-groups-and-conservation: formulation-prerequisite
  def-strongly-continuous-one-parameter-unitary-group: mathematical-premise
  def-trace-class-operator: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-observables-moments-and-variance: mathematical-premise
  lem-nrqm-symmetries-parity-action: mathematical-premise
  lem-nrqm-symmetries-rotation-generators-on-schwartz-classes: mathematical-premise
  lem-nrqm-symmetries-spatial-rotation-action: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  pthm-nrqm-symmetries-generator-conservation: physical-result
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-stone-one-parameter-unitary-groups: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional symmetry and conservation statements for the massive spin-s model with a real bounded measurable potential: spatial rotations conjugate the bounded-potential energy operator to the rotated potential, rotational invariance makes every rotation a symmetry and the coordinate-rotation generators conserved sharp observables, and parity invariance makes the parity action a symmetry with a time-independent parity outcome law. The item asserts no symmetry of any concrete potential outside the stated invariance hypotheses, no spinorial or internal rotation action, no SU(2) lift, no apparatus and no empirical result."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 4.1.3-4.3, printed pages 62-70 (PDF pages 70-78): the rotation operator and its generators, parity and vector operators, symmetry of the Hamiltonian and conservation laws; PDF page = printed page + 8"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', Section 3.2, printed pages 20-22 (PDF pages 20-22): conserved operators as those commuting with the Hamiltonian and their constant Heisenberg representatives"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 'Angular Momentum', Sections 1.2-1.3, printed pages 6-11 (PDF pages 6-11): the angular momentum operators and their commutation relations, and the commutativity of the angular momentum operators with any central-potential Hamiltonian (equation (1.70))"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2fd50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 8.1, printed pages 173-175 (PDF pages 185-187) and Theorem 8.1 printed page 174 (PDF page 186): conserved quantities and commuting self-adjoint operators"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the postulates P1, P2, P4, P5 and P6 in the readings of
[[def-nrqm-kinematics-framework-massive-spin-s-model]],
[[def-nrqm-observables-framework-observable-and-outcome-law]],
[[def-nrqm-autonomous-dynamics-framework-evolution]] and
[[def-nrqm-symmetries-framework-symmetry-groups-and-conservation]] for a
declared particle of mass parameter $m>0$ and spin label $s$
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]]), and assume the Axiom of
Choice, the Axiom of Countable Choice and the Axiom of Dependent Choice
([[def-axiom-of-choice]], [[def-countable-choice]],
[[def-dependent-choice]]). Let $H_{s}=L^{2}(\mathbb R^{3};\mathbb C^{r})$,
$r=2s+1$, be the model's state space with componentwise operators $Q_{j},P_{k}$,
let $U(R)$ be the spatial rotation action and $\Pi$ the spatial parity action
([[lem-nrqm-symmetries-spatial-rotation-action]],
[[lem-nrqm-symmetries-parity-action]]), let $U_{i}(t)=U(R_{i}(t))$ be the
coordinate rotation subgroups with Stone generators $L_{i}$ on the Schwartz
classes ([[lem-nrqm-symmetries-rotation-generators-on-schwartz-classes]]), let
$V:\mathbb R^{3}\to\mathbb R$ be real, bounded and measurable, and let
$$H_{V}:=\frac{1}{2m}\sum_{k=1}^{3}P_{k}^{2}+M_{V},\qquad D(H_{V})=W^{2,2}(\mathbb R^{3};\mathbb C^{r}),\qquad V_{R}(x):=V(R^{-1}x),\quad V_{P}(x):=V(-x),$$
be the model's bounded-potential energy operator with flow
$U(t)=\exp(-itH_{V}/\hbar)$ in the reading of
[[def-nrqm-autonomous-dynamics-framework-evolution]] clause (b)
([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clause (c) applied componentwise,
[[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (a)).
Then:

(a) for every $R\in SO(3)$ one has $U(R)H_{V}U(R)^{-1}=H_{V_{R}}$, and $U(R)$
is a symmetry of $H_{V}$ in the sense of
[[def-nrqm-symmetries-framework-symmetry-groups-and-conservation]] clause (b)
if and only if $V_{R}=V$ almost everywhere;

(b) if $V_{R}=V$ almost everywhere for every $R\in SO(3)$, then every $U(R)$
is a symmetry, the map $R\mapsto U(R)$ is a strongly continuous unitary
symmetry group of the declared dynamics, and each generator $L_{i}$ is a
conserved observable of the model with energy $H_{V}$ in the unit
$\mathrm{J\,s}$ of the model's action
([[def-nrqm-framework-quantities-and-units]]): for every preparation $\rho$,
every Borel $B\subseteq\mathbb R$ and every $t$,
$$\mu^{L_{i}}_{\rho(t)}(B)=\mu^{L_{i}}_{\rho(0)}(B),$$
and for a unit vector $\psi(0)\in D(L_{i})$ the mean and second moment of the
law of $L_{i}$ are finite and independent of $t$, with time-zero values
$\langle L_{i}\psi,\psi\rangle$ and $\|L_{i}\psi\|^{2}$;

(c) if $V(-x)=V(x)$ for almost every $x$, then $\Pi H_{V}\Pi=H_{V}$ on
$W^{2,2}$, so $\Pi$ is a symmetry of $H_{V}$, and $\Pi$ is a symmetry if and
only if $V_{P}=V$ almost everywhere; moreover, reading the self-adjoint
unitary $\Pi$ as an assigned sharp observable with its spectral coordinate in
the dimensionless unit of its eigenvalues $\pm1$, the outcome law of $\Pi$ is
time-independent in every preparation:
$$\mu^{\Pi}_{\rho(t)}(B)=\mu^{\Pi}_{\rho(0)}(B)\qquad(B\subseteq\mathbb R\ \text{Borel},\ t\in\mathbb R);$$

(d) **Scope.** The statement is conditional on P1, P2, P4, P5 and P6 and the
cited mathematics, and it concerns the componentwise massive model with real
bounded measurable potentials. Rotations and parity act on the spatial factor
only: no SU(2) lift, no rotation of the internal factor and no spin angular
momentum are introduced. The rotational and parity invariance hypotheses are
exactly the displayed almost-everywhere identities; no concrete potential,
apparatus, measured spectrum or empirical result is asserted, and no
characterization of the invariant potentials beyond these identities is
claimed.

## Facts & Assumptions

**Given:** The postulates P1, P2, P4, P5, P6 in the stated readings; the
Axioms of Choice, Countable Choice and Dependent Choice; the state space
$H_{s}$; the operators $Q_{j},P_{k}$; the rotation action $U$ and its
coordinate subgroups $U_{i}$ with generators $L_{i}$; the parity action
$\Pi$; a real bounded measurable $V$; the operator $H_{V}$ with flow $U(t)$;
a preparation $\rho$; a unit vector $\psi$; a Borel set $B$; $R\in SO(3)$;
$i\in\{1,2,3\}$ and $t,s\in\mathbb R$.

[F1] **Model.** $H_{V}$ is self-adjoint with domain
$D(H_{V})=W^{2,2}(\mathbb R^{3};\mathbb C^{r})$ and generates the strongly
continuous unitary group $U(t)=e^{-itH_{V}/\hbar}$
([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clause (c), [[lem-nrqm-kinematics-componentwise-position-and-momentum]]
clause (a), [[def-nrqm-kinematics-framework-massive-spin-s-model]],
[[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]]).
A symmetry of the declared dynamics with energy $H_{V}$ is a unitary $S$ with
$S\,D(H_{V})=D(H_{V})$ and $S\,H_{V}=H_{V}\,S$ on $D(H_{V})$; a unitary
symmetry group is a group of such symmetries; a one-parameter symmetry group
has all its members symmetries and its generator is furnished by Stone's
theorem
([[def-nrqm-symmetries-framework-symmetry-groups-and-conservation]] clauses
(b)-(d), [[thm-stone-one-parameter-unitary-groups]],
[[def-strongly-continuous-one-parameter-unitary-group]]).

[F2] **Rotation action.** $U(R)$ is unitary, $U(I)=\mathrm{id}$,
$U(RS)=U(R)U(S)$, $R\mapsto U(R)f$ is continuous for every $f$, and
$U(R)\mathcal S^{(r)}=\mathcal S^{(r)}$,
$U(R)W^{2,2}(\mathbb R^{3};\mathbb C^{r})=W^{2,2}(\mathbb R^{3};\mathbb C^{r})$;
moreover $U(R)H_{0}U(R)^{-1}=H_{0}$ for the free operator
$H_{0}=\frac{1}{2m}\sum_{k}P_{k}^{2}$ and
$U(R)M_{V}U(R)^{-1}=M_{V_{R}}$, hence
$U(R)H_{V}U(R)^{-1}=H_{V_{R}}$
([[lem-nrqm-symmetries-spatial-rotation-action]] clauses (a)-(c),
[[def-cm-special-orthogonal-group]], [[lem-cm-so3-is-a-matrix-group]]).

[F3] **Multiplier equality.** For real bounded measurable functions
$V_{1},V_{2}$ one has $M_{V_{1}}=M_{V_{2}}$ if and only if
$V_{1}=V_{2}$ almost everywhere
([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clause (a), [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F4] **Parity action.** $\Pi$ is unitary, $\Pi^{2}=\mathrm{id}$ and
$\Pi^{*}=\Pi$; $\Pi W^{2,2}(\mathbb R^{3};\mathbb C^{r})=W^{2,2}(\mathbb R^{3};\mathbb C^{r})$;
$\Pi H_{0}\Pi=H_{0}$ and $\Pi M_{V}\Pi=M_{V_{P}}$, hence
$\Pi H_{V}\Pi=H_{V_{P}}$
([[lem-nrqm-symmetries-parity-action]] clauses (a),(d)).

[F5] **Rotation generators.** For each $i$, $t\mapsto U_{i}(t)$ is a strongly
continuous one-parameter unitary group with $U_{i}(t)=e^{-itL_{i}/\hbar}$ for
a self-adjoint generator $L_{i}$, and
$L_{i}\psi=-i\hbar\sum_{j}(e_{i}\times x)_{j}D_{j}\psi$ on
$\psi\in\mathcal S^{(r)}$
([[lem-nrqm-symmetries-rotation-generators-on-schwartz-classes]] clauses
(a),(b), [[def-infinitesimal-generator-of-a-unitary-group]]).

[F6] **Conservation theorem.** For a declared isolated system with energy
$H_{\mathrm{op}}$ and flow $U(t)$, the following are equivalent: commutation of
the flows $W(s)U(t)=U(t)W(s)$ of a self-adjoint $A$ with $W(s)=e^{-isA/\hbar}$,
strong spectral commutation of the PVMs, and domain preservation with
$U(t)AU(t)^{*}=A$; when they hold the outcome law of $A$ is time-independent
in every preparation and the mean and second moment are conserved for unit
vectors in $D(A)$; a unitary symmetry $S$ satisfies $SU(t)=U(t)S$ for every
$t$; and a self-adjoint unitary symmetry has a time-independent outcome law
([[pthm-nrqm-symmetries-generator-conservation]] clauses (a)-(c)).

[F7] **Outcome laws and moments.** For an assigned sharp observable $A$ one has
$\mu^{A}_{\rho}(B)=\operatorname{tr}(\rho E_{A}(B))$ and
$\mu^{A}_{\psi}(B)=\|E_{A}(B)\psi\|^{2}$, and for a unit vector
$\psi\in D(A)$ the mean and second moment of the law exist and equal
$\langle A\psi,\psi\rangle$ and $\|A\psi\|^{2}$
([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (b),(e),
[[lem-nrqm-observables-moments-and-variance]],
[[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a),
[[def-trace-class-operator]],
[[def-nrqm-state-geometry-framework-state-space]],
[[def-nrqm-state-geometry-pure-mixed-states-and-purity]],
[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

## Proof

**Proof technique:** direct; read the rotation covariance off the rotation
action, convert the symmetry definition into the operator identity and apply
the multiplier criterion, transfer the conservation theorem to the coordinate
rotation generators, and handle parity as the discrete self-adjoint unitary
symmetry.

**Given:** The data of the statement and [F1]-[F7].

1.1 [Rotation covariance and symmetry criterion] By [F2] one has $U(R)H_{V}U(R)^{-1}=H_{V_{R}}$ and $U(R)D(H_{V})=D(H_{V})$; by [F1] the unitary $U(R)$ is a symmetry exactly when also $U(R)H_{V}U(R)^{-1}=H_{V}$ as operators on $W^{2,2}$, that is exactly when $H_{V_{R}}=H_{V}$. Both sides are self-adjoint with the same domain $W^{2,2}$, so subtracting the common free part $H_{0}$ of [F2] gives the equivalent condition $M_{V_{R}}=M_{V}$, which by [F3] is equivalent to $V_{R}=V$ almost everywhere. This proves (a). [F1, F2, F3, given, algebra]

2.1 [Invariance gives a unitary symmetry group] Assume $V_{R}=V$ almost everywhere for every $R\in SO(3)$. By step 1.1 each $U(R)$ is a symmetry; by [F2] the map $R\mapsto U(R)$ satisfies $U(I)=\mathrm{id}$, $U(RS)=U(R)U(S)$ and strong continuity, so it is a strongly continuous unitary symmetry group in the sense of [F1]. [step 1.1, F2, given]

2.2 [Parity symmetry and conserved parity law] Assume $V_{P}=V$ almost everywhere. By [F4] $\Pi H_{V}\Pi=H_{V_{P}}=H_{V}$ on $W^{2,2}$ and $\Pi W^{2,2}=W^{2,2}$, $\Pi$ being unitary and self-adjoint; hence by [F1] $\Pi$ is a symmetry. Conversely, if $\Pi$ is a symmetry, then $H_{V_{P}}=\Pi H_{V}\Pi=H_{V}$, and subtracting the common free part gives $M_{V_{P}}=M_{V}$, so $V_{P}=V$ almost everywhere by [F3]. Reading $\Pi$ as a self-adjoint unitary assigned sharp observable, applying [F6] clause (c) to the unitary symmetry $S:=\Pi$ gives $\Pi U(t)=U(t)\Pi$ for every $t$ and the time-independence of the outcome law of the assigned sharp observable $(\Pi,u)$ in every preparation, which by [F7] is the displayed identity $\mu^{\Pi}_{\rho(t)}(B)=\mu^{\Pi}_{\rho(0)}(B)$; the spectral coordinate of $\Pi$ takes the eigenvalues $\pm1$ in the dimensionless unit. This proves (c). [step 1.1, F1, F3, F4, F6, F7, given, algebra]

3.1 [Conservation of the rotation generators] Fix $i$ and $s\in\mathbb R$. Since $R_{i}(s)\in SO(3)$, step 2.1 makes $U_{i}(s)=U(R_{i}(s))$ a symmetry, so by [F6] the first part of clause (c) gives $U_{i}(s)U(t)=U(t)U_{i}(s)$ for every $t\in\mathbb R$. By [F5], $W(s):=e^{-isL_{i}/\hbar}=U_{i}(s)$; hence the flow-commutation condition (i) of [F6] holds for the self-adjoint generator $L_{i}$ and the flow $U$ of $H_{V}$. Applying [F6] clauses (a),(b) to that pair and reading the laws through [F7] gives the time-independence of $\mu^{L_{i}}_{\rho(t)}(B)$ in every preparation and the conservation of the mean and second moment for $\psi(0)\in D(L_{i})$ with the time-zero values $\langle L_{i}\psi,\psi\rangle$ and $\|L_{i}\psi\|^{2}$; the unit $\mathrm{J\,s}$ is the unit of the spectral coordinate of $L_{i}$ in the model's units of [F5] and [[def-nrqm-framework-quantities-and-units]]. This proves (b). [step 2.1, F5, F6, F7, given, algebra]

4.1 [Assembly and scope] Step 1.1 proves (a); step 2.1 proves the symmetry-group assertion and step 3.1 the conservation assertions of (b); step 2.2 proves (c); clause (d) records the spatial-factor-only reading of the actions, the exact almost-everywhere form of the invariance hypotheses and the exclusion of any concrete-potential, spinorial, apparatus or empirical claim. [step 1.1, step 2.1, step 3.1, step 2.2] ∎

## Remarks

- **Invariance is the hypothesis, not a universal property.** A generic bounded
  measurable potential satisfies neither $V_{R}=V$ nor $V_{P}=V$; the
  companion page exhibits a smooth bounded nonconstant potential with no
  translation symmetry, and the same mechanism obstructs generic rotational
  and parity invariance.
- **Discrete parity has no generator.** $\Pi$ is an involution, so its
  conservation is read directly from the commutation with the flow through the
  self-adjoint unitary clause of the conservation theorem; no one-parameter
  group and no Stone generator is attached to it.
