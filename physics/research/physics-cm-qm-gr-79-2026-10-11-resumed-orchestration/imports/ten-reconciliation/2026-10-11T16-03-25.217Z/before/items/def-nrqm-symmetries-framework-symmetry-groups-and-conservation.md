---
id: def-nrqm-symmetries-framework-symmetry-groups-and-conservation
aliases: [nrqm-symmetries-framework-symmetry-groups-and-conservation]
kind: definition
domain: physics
title: "Symmetries of the declared dynamics, unitary symmetry groups and conserved sharp observables"
status: draft
origin: session
dependency_level: 8
deps: [def-nrqm-autonomous-dynamics-framework-evolution, def-nrqm-framework-quantities-and-units,
       def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator,
       def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-framework-state-space,
       def-nrqm-state-geometry-pure-mixed-states-and-purity, def-strongly-continuous-one-parameter-unitary-group,
       lem-nrqm-kinematics-componentwise-position-and-momentum, lem-nrqm-symmetries-parity-action,
       lem-nrqm-symmetries-rotation-generators-on-schwartz-classes,
       lem-nrqm-symmetries-spatial-rotation-action, post-nrqm-framework-autonomous-dynamics,
       post-nrqm-framework-observable-and-probability, post-nrqm-framework-state-and-composition,
       thm-stone-one-parameter-unitary-groups]
dependency_roles:
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-strongly-continuous-one-parameter-unitary-group: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-symmetries-parity-action: mathematical-premise
  lem-nrqm-symmetries-rotation-generators-on-schwartz-classes: mathematical-premise
  lem-nrqm-symmetries-spatial-rotation-action: mathematical-premise
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  thm-stone-one-parameter-unitary-groups: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The symmetry and conservation vocabulary of the declared framework model: symmetries of the dynamics of a declared isolated system as unitaries preserving the energy domain and commuting with the energy operator, unitary symmetry groups and their strong continuity, one-parameter symmetry groups and their Stone generators, and the reading of a conserved sharp observable as one whose outcome law is time-independent in every preparation. The item fixes terminology and candidate actions of the model (translations, spatial rotations, parity, and the gauge multipliers defined on the gauge page); it asserts no symmetry of any concrete model potential or external coupling, no antiunitary or superselection structure, no apparatus realization and no empirical result."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 4.1-4.3, printed pages 58-70 (PDF pages 66-78): unitary transformation operators, generators of continuous transformations, symmetries and conservation laws"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', Sections 3.1-3.2, printed pages 18-22 (PDF pages 18-22): Heisenberg operators, conserved operators commuting with the Hamiltonian and their constant time dependence"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 4.2 printed pages 115-117 (PDF pages 127-129) and Theorem 8.1 printed page 174 (PDF page 186): commuting self-adjoint operators and the Noether-type conservation statement"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: n/a
---
## Definition

**(a) Adopted readings.** Adopt the state and composition postulate P1, the
observable and probability postulate P2 in the reading of
[[def-nrqm-observables-framework-observable-and-outcome-law]], and the
autonomous-dynamics postulate P4 in the reading of
[[def-nrqm-autonomous-dynamics-framework-evolution]] for a **declared isolated
system** with state space $H$ ([[def-nrqm-state-geometry-framework-state-space]])
and assigned energy observable $(H_{\mathrm{op}},u_H)$ with spectral
projection-valued measure $E_H$ and flow
$U(t)=\exp(-itH_{\mathrm{op}}/\hbar)$
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]]). Units are those of
[[def-nrqm-framework-quantities-and-units]].

**(b) Symmetry of the dynamics.** A **symmetry of the declared dynamics**, or
simply a **symmetry**, is a unitary operator $S\in\mathcal B(H)$ with
$$S\,D(H_{\mathrm{op}})=D(H_{\mathrm{op}}),\qquad S\,H_{\mathrm{op}}=H_{\mathrm{op}}\,S\ \text{ on }D(H_{\mathrm{op}}).$$
The reading is the model's: a symmetry is a unitary that preserves the assigned
energy domain and commutes with the assigned energy operator on that domain;
the equivalent formulation by commutation with the flow $U(t)$, and the
concomitant conservation statements, are proved results of this page and are
not part of this definition. Neither the energy operator nor its potential or
coupling terms are assumed to possess any symmetry here.

**(c) Unitary symmetry group.** A **unitary symmetry group** of the declared
system is a group $G$ together with a map $g\mapsto S_g$ from $G$ into the
unitary operators of $H$ such that $S_e=I$, $S_{gh}=S_gS_h$ and every $S_g$ is
a symmetry in the sense of (b). When $G$ carries a topology, the group is
**strongly continuous** when $g\mapsto S_g f$ is continuous for every
$f\in H$; for the one-parameter case the concrete condition is that of
[[def-strongly-continuous-one-parameter-unitary-group]]. The model's standard
examples of candidate symmetry groups, whose actual symmetry property for a
given dynamics is a theorem of this page, are:

1. the **spatial translations** $T_a$ of
   [[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (c),
   forming the group $\mathbb R^{3}$, with generator data supplied by
   [[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (d);
2. the **spatial rotations** $U(R)$ of
   [[lem-nrqm-symmetries-spatial-rotation-action]], forming the group $SO(3)$
   with its Euclidean topology, and their coordinate one-parameter subgroups,
   whose generators are the operators $L_{i}$ of
   [[lem-nrqm-symmetries-rotation-generators-on-schwartz-classes]];
3. the **spatial parity** action $\Pi$ of
   [[lem-nrqm-symmetries-parity-action]], forming the two-element group
   $\{I,\Pi\}$;
4. the **gauge multipliers** $G_{\chi}$ of the prescribed-coupling model of
   this page, whose definition and covariance statements are given on the
   gauge items of this page.

**(d) One-parameter symmetry group and generator.** A **one-parameter symmetry
group** is a strongly continuous one-parameter unitary group
$t\mapsto S_t=e^{-itA/\hbar}$ with every $S_t$ a symmetry in the sense of (b),
where $A$ is the self-adjoint **generator** furnished by Stone's theorem
([[thm-stone-one-parameter-unitary-groups]]); its declared unit is that of the
spectral coordinate of $A$. When $S_t=U(R_i(t))$ for a coordinate rotation
subgroup, $A$ is the operator $L_i$ above; when
$S_t=T_{te_j}$, $A$ is the momentum component $P_j$ in the reading of
[[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (d).

**(e) Conserved sharp observables.** Let $(A,u_A)$ be an assigned sharp
observable of the framework ([[def-nrqm-observables-framework-observable-and-outcome-law]]).
It is **conserved along the flow** when its outcome law is independent of time
in every preparation: for every preparation $\rho$
([[def-nrqm-state-geometry-pure-mixed-states-and-purity]]) and every Borel
$B\subseteq\mathbb R$,
$$\mu^{A}_{\rho(t)}(B)=\mu^{A}_{\rho(0)}(B),\qquad \rho(t)=U(t)\rho(0)U(t)^{*}.$$
The conserved object is thus the outcome law of the assigned observable — a
probability measure on the Borel sets — and, where the moments exist, its
moments; the definition does not say that a single numerical value is revealed
at each time, and it identifies no laboratory quantity with the pair $(A,u_A)$.

**(f) Status and scope.** Clauses (a)-(e) fix the vocabulary of this page within
P1, P2 and P4 and the cited readings. They assert no symmetry of any concrete
model: whether $T_a$, $U(R)$, $\Pi$ or $G_{\chi}$ is a symmetry of a given
bounded-potential or prescribed-coupling dynamics is a conditional theorem of
this page. Antiunitary symmetries, superselection sectors, symmetries of
preparations as opposed to dynamics, and any empirical claim about which
symmetries a laboratory system possesses are outside this definition. The
parameter $a$ of a translation has the unit of length $u_H$ of
[[def-nrqm-framework-quantities-and-units]]; the rotation group and parity
act on the spatial factor only, in the readings of
[[lem-nrqm-symmetries-spatial-rotation-action]] and
[[lem-nrqm-symmetries-parity-action]], and the prescribed-coupling reading is
that of [[def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator]].

## Remarks

- **Why the energy domain appears.** For an unbounded energy operator, the
  statement "$S$ commutes with $H_{\mathrm{op}}$" needs the domain equality
  $SD(H_{\mathrm{op}})=D(H_{\mathrm{op}})$ to make the operator identity
  meaningful; this is the same convention under which the covariance theorems
  of the kinematics page are stated.
- **Candidate actions are not symmetries by definition.** The translations,
  rotations, parity and gauge multipliers are defined as unitaries or unitary
  families; the definition records them as the model's candidate symmetry
  actions, and the theorems decide for which potentials or couplings each
  candidate is actually a symmetry.
