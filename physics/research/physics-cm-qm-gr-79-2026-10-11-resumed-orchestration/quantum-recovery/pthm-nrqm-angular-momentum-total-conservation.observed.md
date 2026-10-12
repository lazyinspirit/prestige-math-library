---
id: pthm-nrqm-angular-momentum-total-conservation
aliases: [nrqm-angular-momentum-total-conservation]
kind: physics-theorem
domain: physics
title: "Conservation of total angular momentum for a spin-independent rotation-invariant bounded-potential dynamics"
status: draft
origin: session
dependency_level: 11
deps: [def-axiom-of-choice, def-bounded-linear-operator, def-countable-choice, def-dependent-choice, def-nrqm-angular-momentum-framework-angular-momentum-observables, def-nrqm-autonomous-dynamics-framework-evolution, def-nrqm-framework-quantities-and-units, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-nrqm-symmetries-framework-symmetry-groups-and-conservation, def-strongly-continuous-one-parameter-unitary-group, def-trace-class-operator, lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action, lem-nrqm-kinematics-componentwise-position-and-momentum, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-observables-moments-and-variance, lem-nrqm-symmetries-rotation-generators-on-schwartz-classes, lem-nrqm-symmetries-spatial-rotation-action, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-identical-particles-and-spin, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-observable-and-probability, post-nrqm-framework-state-and-composition, pthm-nrqm-symmetries-generator-conservation, pthm-nrqm-symmetries-rotational-and-parity-invariance, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-nrqm-angular-momentum-framework-angular-momentum-observables: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-nrqm-symmetries-framework-symmetry-groups-and-conservation: formulation-prerequisite
  def-strongly-continuous-one-parameter-unitary-group: mathematical-premise
  def-trace-class-operator: mathematical-premise
  lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-observables-moments-and-variance: mathematical-premise
  lem-nrqm-symmetries-rotation-generators-on-schwartz-classes: mathematical-premise
  lem-nrqm-symmetries-spatial-rotation-action: mathematical-premise
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  pthm-nrqm-symmetries-generator-conservation: physical-result
  pthm-nrqm-symmetries-rotational-and-parity-invariance: physical-result
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional consequence of the postulates P1, P2, P4, P5 and P6 for the declared isolated massive spin-s model with a real bounded measurable spin-independent potential invariant under every spatial rotation: the lifted coordinate rotation subgroups are one-parameter symmetry groups, and each total angular momentum component is a conserved assigned sharp observable whose outcome law is time-independent in every preparation, with conserved mean and second moment on D(L_i). The item asserts no symmetry of any concrete system, no spin-dependent or singular potential, no measurement procedure and no empirical result."
empirical_premises: []
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 4.3, printed pages 68-70 (PDF pages 76-78): symmetries imply conservation, including the conservation of angular momentum for rotation-invariant Hamiltonians; Section 7.4, printed pages 161-164 (spin in a rotation-invariant model)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Theorem 8.1 printed page 174 (PDF page 186) and Section 8.2 printed pages 175-178 (PDF pages 187-190): conserved quantities for rotation-invariant Schrodinger operators and the invariance of the domain of a conserved observable"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the state and composition postulate P1, the observable and probability
postulate P2, the autonomous-dynamics postulate P4, the kinematics and
massive-particle model postulate P5 and the internal-factor assignment of the
spin postulate P6, read for the massive spin-$s$ model of
[[def-nrqm-kinematics-framework-massive-spin-s-model]] with mass parameter
$m>0$ and spin label $s$, together with the angular momentum readings of
[[def-nrqm-angular-momentum-framework-angular-momentum-observables]], and
assume the Axiom of Choice, the Axiom of Countable Choice and the Axiom of
Dependent Choice ([[def-axiom-of-choice]], [[def-countable-choice]],
[[def-dependent-choice]]) and the readings of
[[def-nrqm-autonomous-dynamics-framework-evolution]] and
[[def-nrqm-symmetries-framework-symmetry-groups-and-conservation]]
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]]). Let $V:\mathbb
R^{3}\to\mathbb R$ be real, bounded and measurable with
$V\circ R^{-1}=V$ almost everywhere for every $R\in SO(3)$, let
$$H_{V}:=\frac{1}{2m}\sum_{k=1}^{3}P_{k}^{2}+M_{V},\qquad D(H_{V})=W^{2,2}(\mathbb R^{3};\mathbb C^{r}),$$
be the model's spin-independent bounded-potential energy operator on
$H_{s}=L^{2}(\mathbb R^{3};\mathbb C^{r})$ with flow
$U(t)=e^{-itH_{V}/\hbar}$ in the reading of P4, and let
$J_{i}^{\mathrm{tot}}=L_{i}+S_{i}$ be the total angular momenta of
[[def-nrqm-angular-momentum-framework-angular-momentum-observables]] clause
(d). Then:

(a) for each $i$ the lifted coordinate rotation family
$t\mapsto U_{s}(A_{i}(t))=e^{-itJ_{i}^{\mathrm{tot}}/\hbar}$ of
[[lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action]] clause (c) is a
strongly continuous one-parameter unitary group of symmetries of the declared
dynamics: $U_{s}(A_{i}(t))\,U(u)=U(u)\,U_{s}(A_{i}(t))$ for all $t,u$ and
$U_{s}(A_{i}(t))D(H_{V})=D(H_{V})$;

(b) each $J_{i}^{\mathrm{tot}}$ is a conserved assigned sharp observable of
the model with energy $H_{V}$: for every preparation $\rho$, every Borel
$B\subseteq\mathbb R$ and every $t\in\mathbb R$,
$$\mu^{J_{i}^{\mathrm{tot}}}_{\rho(t)}(B)=\mu^{J_{i}^{\mathrm{tot}}}_{\rho(0)}(B),\qquad \rho(t)=U(t)\rho(0)U(t)^{*},$$
and for a unit vector $\psi\in D(L_{i})=D(J_{i}^{\mathrm{tot}})$ the mean and
the second moment of the law of $J_{i}^{\mathrm{tot}}$ in the pure
preparation $[\psi(t)]$ are finite and independent of $t$, with time-zero
values $\langle J_{i}^{\mathrm{tot}}\psi,\psi\rangle$ and
$\|J_{i}^{\mathrm{tot}}\psi\|^{2}$;

(c) in the same situation each spin component $S_{i}$ and each orbital
generator $L_{i}$ is a conserved assigned sharp observable in the same sense,
the laws of $S_{i}$ and $L_{i}$ being time-independent in every preparation;

(d) **Scope.** The statement is conditional on P1, P2, P4, P5, P6 and the
cited results, and concerns the declared isolated model with a real bounded
measurable potential invariant under every spatial rotation. It asserts no
symmetry of any concrete external field or apparatus, excludes spin-dependent,
singular and unbounded potentials (which require their own domain and symmetry
arguments), introduces no measurement, detector or empirical record, and
makes no claim that a definite numerical value of $J_{i}^{\mathrm{tot}}$ is
revealed at each time: the conserved object is the outcome law.

## Facts & Assumptions

**Given:** The postulates P1, P2, P4, P5 and P6 in the stated readings; the
three choice principles; the model parameters $m>0$, $s$, $r=2s+1$; the
rotationally invariant real bounded measurable potential $V$; the energy
operator $H_{V}$ and its flow $U$; the angular momentum operators $L_{i}$,
$S_{i}$, $J_{i}^{\mathrm{tot}}$; a preparation $\rho$; a Borel set $B$;
times $t,u$; a unit vector $\psi$.

[F1] **The bounded-potential operator.** $H_{V}$ is self-adjoint on
$D(H_{V})=W^{2,2}(\mathbb R^{3};\mathbb C^{r})$ as the componentwise sum of
the free operator and the bounded multiplier $M_{V}$, its domain is invariant
under the flow $U(t)=e^{-itH_{V}/\hbar}$, which is a strongly continuous
one-parameter unitary group, and $P_{k},M_{V}$ act componentwise
([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clauses (b),(c) applied to each component,
[[lem-nrqm-kinematics-componentwise-position-and-momentum]],
[[def-nrqm-autonomous-dynamics-framework-evolution]] clause (b)).

[F2] **Rotation invariance of the model.** For every $R\in SO(3)$ one has
$U(R)H_{V}U(R)^{-1}=H_{V_{R}}$ with $V_{R}(x)=V(R^{-1}x)$; since $V_{R}=V$
almost everywhere by hypothesis, every $U(R)$ is a symmetry of $H_{V}$ in the
sense of [[def-nrqm-symmetries-framework-symmetry-groups-and-conservation]]
clause (b), the map $R\mapsto U(R)$ is a strongly continuous unitary symmetry
group, and each $L_{i}$ is conserved with time-independent law and moments in
the sense of that page
([[pthm-nrqm-symmetries-rotational-and-parity-invariance]] clauses (a),(b)).

[F3] **Lifted coordinate group.** For every $i$,
$t\mapsto U_{s}(A_{i}(t))=U(R_{i}(t))M_{s}(A_{i}(t))=e^{-itJ_{i}^{\mathrm{tot}}/\hbar}$
is a strongly continuous one-parameter unitary group with
$J_{i}^{\mathrm{tot}}=L_{i}+S_{i}$ self-adjoint on $D(L_{i})$
([[lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action]] clauses
(b),(c)).

[F4] **Componentwise commutation with internal matrices.** The fibrewise
matrix action $M$ of any fixed matrix commutes with the componentwise
operators $P_{k}$ and $M_{V}$ and preserves their common domain
$W^{2,2}(\mathbb R^{3};\mathbb C^{r})$; hence it commutes with $H_{V}$ on
$D(H_{V})$. If a bounded self-adjoint $S$ satisfies $SK\subseteq KS$ for a
self-adjoint $K$, then $Se^{-itK/\hbar}=e^{-itK/\hbar}S$ for every $t$
([[lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action]] clause (d),
[[thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws]]
clause (a')).

[F5] **Conservation from a symmetry group.** Let $(A,u_{A})$ be an assigned
sharp observable with $W(s):=e^{-isA/\hbar}$ for a self-adjoint $A$. If
$W(s)U(t)=U(t)W(s)$ for all $s,t$, then the outcome law of $(A,u_{A})$ is
time-independent in every preparation, and if $\psi\in D(A)$ is a unit vector
the mean and second moment of the law in $[\psi(t)]$ are finite and
independent of $t$ with time-zero values $\langle A\psi,\psi\rangle$ and
$\|A\psi\|^{2}$
([[pthm-nrqm-symmetries-generator-conservation]] clauses (a),(b),
[[lem-nrqm-observables-moments-and-variance]],
[[lem-nrqm-composites-density-and-scalar-spectral-probability]],
[[def-trace-class-operator]],
[[def-nrqm-state-geometry-pure-mixed-states-and-purity]]).

## Proof

**Proof technique:** direct; combine the rotational invariance of the bounded
potential with the componentwise commutation of the internal matrices, verify
the symmetry property of the lifted coordinate groups, and read the
conservation statement from the generator-conservation theorem.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Internal factors commute with the dynamics] Let $M$ be the fibrewise matrix action of a fixed matrix; by [F4] $M$ commutes with $P_{k}$ and with $M_{V}$ and preserves $W^{2,2}$, hence $MD(H_{V})\subseteq D(H_{V})$, $M(H_{V}\psi)=H_{V}(M\psi)$ for $\psi\in D(H_{V})$, and $MU(t)=U(t)M$ for every $t$ by the second part of [F4]; in particular this applies to $M=M_{s}(A_{i}(t))$, to $M=S_{i}$ and to every bounded matrix action. [F1, F4, algebra]

1.2 [Spatial rotations are symmetries] By the hypothesis $V\circ R^{-1}=V$ almost everywhere and [F2], every $U(R)$ is a symmetry of $H_{V}$, so $U(R)U(t)=U(t)U(R)$ for all $R,t$ and $U(R)D(H_{V})=D(H_{V})$; in particular this holds for the coordinate rotations $U(R_{i}(t))$. [F2, algebra]

2.1 [Lifted coordinate groups are symmetries] Fix $i$ and $t$; by [F3], $U_{s}(A_{i}(t))=U(R_{i}(t))M_{s}(A_{i}(t))$; by step 1.2 the first factor commutes with $U(u)$ and preserves $D(H_{V})$, and by step 1.1 the second factor does the same, so the product commutes with $U(u)$ for every $u$ and preserves $D(H_{V})$; combined with the group property and strong continuity of [F3], the family $t\mapsto U_{s}(A_{i}(t))$ is a strongly continuous one-parameter unitary group of symmetries, which is (a). [step 1.1, step 1.2, F3, algebra]

2.2 [Spin and orbital components] By step 1.1 applied to $M=S_{i}$, the bounded self-adjoint $S_{i}$ satisfies $S_{i}H_{V}\subseteq H_{V}S_{i}$, so [F4] gives $S_{i}U(t)=U(t)S_{i}$ for every $t$; applying [F5] with $A:=S_{i}$ (bounded, so $W(s)=e^{-isS_{i}/\hbar}$ commutes with $U$) gives the time-independence of the law of $S_{i}$ in every preparation, and by [F2] the law and moments of each $L_{i}$ are time-independent as well, which is (c). [step 1.1, F2, F4, F5, algebra]

3.1 [Total angular momentum conservation] By step 2.1 and [F3], the group $W(s):=e^{-isJ_{i}^{\mathrm{tot}}/\hbar}=U_{s}(A_{i}(s))$ satisfies $W(s)U(t)=U(t)W(s)$ for all $s,t$ and preserves $D(H_{V})$; applying [F5] to the assigned sharp observable $(J_{i}^{\mathrm{tot}},\mathrm{J\,s})$ of [[def-nrqm-angular-momentum-framework-angular-momentum-observables]] clause (d) gives the time-independence of its outcome law in every preparation and, for a unit $\psi\in D(L_{i})=D(J_{i}^{\mathrm{tot}})$, the conservation of the mean and second moment with the stated time-zero values, which is (b). [step 2.1, F3, F5, algebra]

4.1 [Assembly and scope] Step 2.1 proves (a), step 3.1 proves (b) and step 2.2 proves (c); only the bounded-potential domain, the almost-everywhere rotational invariance and the lifted coordinate groups were used, no spin-dependent or singular potential, apparatus or empirical input entered, and the conserved object is the outcome law, which is the scope statement (d). [step 2.1, step 2.2, step 3.1, F1, F5] ∎

## Remarks

- **Where the spin-independence enters.** Step 1.1 uses only that the
  dynamics is componentwise in the internal factor. A spin-dependent
  potential (for instance a term $S_{z}B(Q_{x})$ as on the Zeeman page) does
  not commute with arbitrary internal matrices, and the conservation of
  $J_{i}^{\mathrm{tot}}$ for such a dynamics requires its own analysis; the
  Zeeman page proves the weaker conservation of $S_{z}$ for a field along the
  third axis.
- **Orbital conservation is inherited.** Clause (c) records the orbital
  statement of the symmetries page in the vocabulary of this page; the new
  content of the theorem is the lifted group of (a) and the total angular
  momentum of (b).
