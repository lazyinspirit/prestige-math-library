---
id: pthm-nrqm-symmetries-generator-conservation
aliases: [ nrqm-symmetries-generator-conservation ]
kind: physics-theorem
domain: physics
title: "Conservation of a symmetry generator: commuting flows, energy
  compatibility and conserved outcome laws"
status: published
origin: session
dependency_level: 10
deps:
  [
    def-axiom-of-choice,
    def-bounded-linear-operator,
    def-countable-choice,
    def-dependent-choice,
    def-hilbert-space,
    def-nrqm-autonomous-dynamics-framework-evolution,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    def-nrqm-symmetries-framework-symmetry-groups-and-conservation,
    def-projection-valued-measure,
    def-self-adjoint-positive-unitary-and-normal-operator,
    def-strongly-continuous-one-parameter-unitary-group,
    def-symmetric-self-adjoint-and-essentially-self-adjoint,
    def-trace-class-operator,
    def-unbounded-integral-against-a-pvm,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    lem-nrqm-composites-nuclear-bounded-cyclicity,
    lem-nrqm-observables-moments-and-variance,
    lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus,
    lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-state-and-composition,
    pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow,
    thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws,
    thm-spectral-theorem-for-unbounded-self-adjoint-operators,
    thm-stone-one-parameter-unitary-groups
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-nrqm-symmetries-framework-symmetry-groups-and-conservation: formulation-prerequisite
  def-projection-valued-measure: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-strongly-continuous-one-parameter-unitary-group: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-unbounded-integral-against-a-pvm: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  lem-nrqm-observables-moments-and-variance: mathematical-premise
  lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow: physical-result
  thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-stone-one-parameter-unitary-groups: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional consequence of the state, observable and
  autonomous-dynamics postulates P1, P2 and P4 for a declared isolated system:
  for a self-adjoint assigned sharp observable A whose one-parameter unitary
  group commutes with the flow, the three formulations (commuting flows, strong
  commutation of the spectral measures, and invariance of the domain of A under
  the flow with U(t)*AU(t)=A) are equivalent, the outcome law of A is
  time-independent in every preparation, its mean and second moment are
  conserved whenever they exist, and a unitary symmetry of the dynamics commutes
  with the flow and, when self-adjoint and assigned as a sharp observable with
  dimensionless unit, has a time-independent outcome law. The statement asserts no symmetry of any concrete model, no
  definite value of a conserved observable, no apparatus realization, no
  equilibration statement and no empirical result, and uses the
  strong-commutation hypothesis rather than a formal commutator on a small
  domain."
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 4.2, printed pages 115-117 (PDF pages 127-129): commuting
        self-adjoint operators, Lemma 4.5 and the equivalence with commutation
        of the one-parameter groups; Theorem 8.1, printed page 174 (PDF page
        186): invariant domain and conserved expectations"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', Section 3.2, printed pages 20-22 (PDF pages 20-22): the
        Heisenberg equation, operators commuting with the Hamiltonian and
        constant Heisenberg representatives"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections
        4.3-4.4, printed pages 68-71 (PDF pages 76-79): commuting observables,
        invariance under displacements, conserved quantities and the Heisenberg
        picture"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the state and composition postulate P1, the observable and probability
postulate P2 in the reading of
[[def-nrqm-observables-framework-observable-and-outcome-law]], and the
autonomous-dynamics postulate P4 in the reading of
[[def-nrqm-autonomous-dynamics-framework-evolution]] for a declared isolated
system with state space $H$, assigned energy observable $(H_{\mathrm{op}},u_H)$
and flow $U(t)=\exp(-itH_{\mathrm{op}}/\hbar)$
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]]); use the symmetry vocabulary of
[[def-nrqm-symmetries-framework-symmetry-groups-and-conservation]]. Assume the
Axiom of Choice, the Axiom of Countable Choice and the Axiom of Dependent
Choice ([[def-axiom-of-choice]], [[def-countable-choice]],
[[def-dependent-choice]]). Let $(A,u_A)$ be an assigned sharp observable of the
system with spectral projection-valued measure $E_A$ and put
$W(s):=e^{-isA/\hbar}$. Then the following are equivalent:

(i) $W(s)U(t)=U(t)W(s)$ for all $s,t\in\mathbb R$;

(ii) $E_A(B)E_H(C)=E_H(C)E_A(B)$ for all Borel sets $B,C\subseteq\mathbb R$;

(iii) $U(t)D(A)=D(A)$ and $U(t)AU(t)^{*}=A$ for all $t\in\mathbb R$.

When they hold:

(a) **Conserved law.** The outcome law of $(A,u_A)$ is time-independent: for
every preparation $\rho$, every Borel $B\subseteq\mathbb R$ and every $t$,
$$\mu^{A}_{\rho(t)}(B)=\mu^{A}_{\rho(0)}(B),\qquad \mu^{A}_{\psi(t)}(B)=\mu^{A}_{\psi(0)}(B)\ \text{for a unit }\psi\ \text{with }\psi(t)=U(t)\psi(0).$$

(b) **Conserved moments.** If $\psi\in D(A)$ is a unit vector, then the mean and
the second moment of the law of $A$ in the pure preparation $[\psi(t)]$ are
finite and independent of $t$, with time-zero values
$\langle A\psi,\psi\rangle$ and $\|A\psi\|^{2}$; if a moment is infinite at
$t=0$, no equality of finite quantities is claimed.

(c) **Unitary symmetries of the dynamics.** If a unitary operator $S$ is a
symmetry in the sense of clause (b) of
[[def-nrqm-symmetries-framework-symmetry-groups-and-conservation]], that is
$S\,D(H_{\mathrm{op}})=D(H_{\mathrm{op}})$ and
$S\,H_{\mathrm{op}}=H_{\mathrm{op}}\,S$, then $S\,U(t)=U(t)\,S$ for every $t$;
if in addition $S$ is self-adjoint and $(S,u_S)$ is assigned as a sharp
observable of the system with declared dimensionless unit $u_S=1$, then its
outcome law is time-independent in every preparation.

(d) **Status and exclusions.** The statement is conditional on P1, P2 and P4
and the cited mathematics. Its symmetry hypothesis is the strong commutation of
the flows or, equivalently, of the spectral measures, not a formal commutator
identity on a small domain; no definite value of a conserved observable is
asserted; no converse from the constancy of laws to the commutation conditions
is claimed for unbounded $A$; and no concrete model potential, apparatus,
measurement record or empirical result is introduced.

## Facts & Assumptions

**Given:** The postulates P1, P2, P4 in the stated readings; the Axioms of
Choice, Countable Choice and Dependent Choice; the assigned energy observable
$(H_{\mathrm{op}},u_H)$, its PVM $E_H$ and flow $U(t)$; an assigned sharp
observable $(A,u_A)$ with PVM $E_A$ and group $W(s)$; a unitary symmetry $S$ in clause (c), and for its outcome-law assertion
a self-adjoint $S$ assigned as $(S,1)$; a preparation $\rho$; a unit vector
$\psi$; a Borel set $B$; real $s,t$.

[F1] **Model readings.** $H_{\mathrm{op}}$ and $A$ are densely defined
self-adjoint operators with regular spectral PVMs $E_H,E_A$ and flows
$U(t)=e^{-itH_{\mathrm{op}}/\hbar}$, $W(s)=e^{-isA/\hbar}$; $\rho(t)=U(t)\rho U(t)^{*}$
and $\psi(t)=U(t)\psi$ are the preparation evolutions of P4
([[def-nrqm-autonomous-dynamics-framework-evolution]] clauses (a)-(c),
[[pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow]] clauses (a),(d),
[[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b),
[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]],
[[def-strongly-continuous-one-parameter-unitary-group]],
[[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]]).

[F2] **Conjugation and commutation calculus.** For self-adjoint $K,A$ with
flows $U_K,U_A$ the conditions (i), (ii), (iii) of
[[lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus]] clause (b)
are equivalent; under them $E_A(B)U_K(t)=U_K(t)E_A(B)$ for all $B,t$ (clause
(d)); and for a unitary $W$ one has $E_{WKW^{*}}(B)=WE_K(B)W^{*}$ and
$e^{-itWKW^{*}/\hbar}=We^{-itK/\hbar}W^{*}$ (clause (a)).

[F3] **Conserved spectral laws.** If a PVM $F$ commutes with $E_H$ in the
strong spectral sense, then $\operatorname{tr}(U(t)\rho U(t)^{*}F(S))=\operatorname{tr}(\rho F(S))$
for every density operator $\rho$ and every $S$, and
$\|F(S)U(t)\psi\|^{2}=\|F(S)\psi\|^{2}$ for every unit $\psi$
([[thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws]]
clause (b)).

[F4] **Outcome laws and moments.** $\mu^{A}_{\rho}(B)=\operatorname{tr}(\rho E_A(B))$
and $\mu^{A}_{\psi}(B)=\|E_A(B)\psi\|^{2}$; for a unit $\psi\in D(A)$ the mean
and second moment of the law exist and equal $\langle A\psi,\psi\rangle$ and
$\|A\psi\|^{2}$
([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (b),(e),
[[lem-nrqm-observables-moments-and-variance]],
[[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a),
[[def-trace-class-operator]]).

[F5] **Energies and unitaries.** A self-adjoint unitary $S$ has spectral PVM
supported on $\{-1,1\}$ and its own flow $e^{-isS/\hbar}$
([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]],
[[def-unbounded-integral-against-a-pvm]],
[[def-self-adjoint-positive-unitary-and-normal-operator]]).

## Proof

**Proof technique:** direct; translate the model data into the mathematical
conjugation calculus, transfer the conservation theorem for commuting spectral
families, and handle the discrete unitary symmetry by the generator comparison.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Translation of the model data] By [F1] the operators $H_{\mathrm{op}}$ and $A$ are self-adjoint on the Hilbert space $H$ of the declared system, with flows $U$ and $W$ exactly as in [F2]; hence the equivalence of (i), (ii) and (iii) below is the equivalence stated in [F2] for the pair $K:=H_{\mathrm{op}}$, $A$: condition (i) is the commutation of the two flows, condition (ii) the strong commutation of $E_H$ and $E_A$, and condition (iii) the domain invariance and conjugation identity for $A$ under $U$. This proves the equivalence. [F1, F2, given]

2.1 [Conserved law] Assume (ii), so that $F:=E_A$ commutes with $E_H$ in the strong spectral sense. Applying [F3] with $S:=B$ to the preparation $\rho$ gives $\operatorname{tr}(U(t)\rho U(t)^{*}E_A(B))=\operatorname{tr}(\rho E_A(B))$, and by [F4] this is $\mu^{A}_{\rho(t)}(B)=\mu^{A}_{\rho(0)}(B)$. The pure form follows from the second display of [F3] with the unit vector $\psi(0)$ and [F4]. This proves (a). [step 1.1, F3, F4, given, algebra]

2.2 [Unitary symmetries commute with the flow] Let $S$ be unitary with $S\,D(H_{\mathrm{op}})=D(H_{\mathrm{op}})$ and $S\,H_{\mathrm{op}}=H_{\mathrm{op}}\,S$, that is $SH_{\mathrm{op}}S^{*}=H_{\mathrm{op}}$ with domain $SD(H_{\mathrm{op}})=D(H_{\mathrm{op}})$. By [F2] applied with $W:=S$ and $K:=H_{\mathrm{op}}$ one has $e^{-itSH_{\mathrm{op}}S^{*}/\hbar}=Se^{-itH_{\mathrm{op}}/\hbar}S^{*}$ for every $t$; the left-hand operator is $e^{-itH_{\mathrm{op}}/\hbar}=U(t)$ and the right-hand one is $SU(t)S^{*}$, so $SU(t)S^{*}=U(t)$ and, multiplying on the right by $S$, $SU(t)=U(t)S$. [step 1.1, F2, given, algebra]

3.1 [Conserved moments] Let $\psi\in D(A)$ be a unit vector. By [F4] the mean and second moment of the law of $A$ in $[\psi(0)]$ exist and equal $\langle A\psi,\psi\rangle$ and $\|A\psi\|^{2}$; since by step 2.1 the law itself is the same measure at every time, its moments are the same extended real numbers at every time, hence finite and time-independent with the displayed values. If the second moment is infinite at $t=0$, [F4] does not apply and no equality is claimed. This proves (b). [step 2.1, F4, given, algebra]

3.2 [Self-adjoint symmetries have conserved laws] Let $S$ be unitary and self-adjoint with $SH_{\mathrm{op}}S^{*}=H_{\mathrm{op}}$ and assigned sharp observable $(S,1)$. By step 2.2, $SU(t)=U(t)S$; multiplying on the left by $U(t)^{*}$ gives $U(t)^{*}SU(t)=S$, and conjugating this identity by the unitary $U(t)$ gives $U(t)SU(t)^{*}=S$ as well. Apply the flow identity of [F2] with $W:=U(t)^{*}$ and $K:=S$, at time parameter $s$: $e^{-isU(t)^{*}SU(t)/\hbar}=U(t)^{*}e^{-isS/\hbar}U(t)$; since $U(t)^{*}SU(t)=S$, the left side is $e^{-isS/\hbar}$, so $U(t)$ commutes with $e^{-isS/\hbar}$ for every $s$. Writing $W_{S}(s):=e^{-isS/\hbar}$, this says $W_{S}(s)U(t)=U(t)W_{S}(s)$ for all $s,t$, which is condition (i) for the pair $(S,H_{\mathrm{op}})$; by the equivalence of step 1.1 condition (ii) holds for that pair, and applying step 2.1 to the self-adjoint operator $S$ gives the time-independence of the law of $(S,u_S)$ in every preparation. This proves (c). [step 2.2, step 1.1, step 2.1, F2, F5, given, algebra]

4.1 [Assembly and scope] Step 1.1 proves the equivalence, steps 2.1 and 3.1 prove (a) and (b), step 2.2 proves the first part of (c) and step 3.2 its second part; clause (d) records the hypotheses actually used (P1, P2, P4, strong commutation of flows or spectral measures) and the exclusions (no definite value, no unbounded converse, no concrete model or empirical claim). [step 1.1, step 2.1, step 3.1, step 2.2, step 3.2] ∎

## Remarks

- **Energy conservation is the special case $A=H_{\mathrm{op}}$.** With $A=H_{\mathrm{op}}$ the conditions (i)-(iii) hold trivially, and clause (a) reproduces the conservation of the energy law proved on the autonomous-dynamics page; the content here is the transfer to any other generator.
- **Commutation on a small domain is excluded.** The equivalence proved is between the flow commutation (i) and the strong spectral commutation (ii); a formal identity $[A,H_{\mathrm{op}}]\psi=0$ on a small domain is neither a hypothesis nor a conclusion.
