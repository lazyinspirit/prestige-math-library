---
id: ex-nrqm-symmetries-central-potential-rotation-invariance
aliases: [ nrqm-symmetries-central-potential-rotation-invariance ]
kind: example
domain: physics
title: "A radial bounded potential: rotational and parity symmetry and
  conservation of the rotation generators"
status: draft
origin: session
dependency_level: 12
deps:
  [
    def-axiom-of-choice,
    def-cm-special-orthogonal-group,
    def-countable-choice,
    def-dependent-choice,
    def-euclidean-inner-product,
    def-measure-null-set-and-almost-everywhere,
    def-nrqm-autonomous-dynamics-framework-evolution,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-symmetries-framework-symmetry-groups-and-conservation,
    lem-cm-so3-is-a-matrix-group,
    lem-nrqm-kinematics-componentwise-position-and-momentum,
    lem-nrqm-symmetries-rotation-generators-on-schwartz-classes,
    lem-nrqm-symmetries-spatial-rotation-action,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-identical-particles-and-spin,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-state-and-composition,
    pthm-nrqm-symmetries-rotational-and-parity-invariance,
    thm-lebesgue-measure-is-a-complete-measure,
    thm-linear-change-of-variables-for-lebesgue-measure,
    thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-measure-null-set-and-almost-everywhere: mathematical-premise
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-symmetries-framework-symmetry-groups-and-conservation: formulation-prerequisite
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-symmetries-rotation-generators-on-schwartz-classes: mathematical-premise
  lem-nrqm-symmetries-spatial-rotation-action: mathematical-premise
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  pthm-nrqm-symmetries-rotational-and-parity-invariance: physical-result
  thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  thm-linear-change-of-variables-for-lebesgue-measure: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A model example for the massive spin-s model with a bounded
  measurable potential that is radial almost everywhere: every spatial rotation
  is a symmetry, the rotation action is a strongly continuous unitary symmetry
  group, the coordinate-rotation generators are conserved sharp observables in J
  s, and the parity action is a symmetry with a conserved parity law. The item
  is conditional on the bounded radial class; it asserts no eigenvalue,
  bound-state or degeneracy claim, no Coulomb or other unbounded radial model,
  and no empirical result."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections
        4.1.3-4.3, printed pages 62-70 (PDF pages 70-78): the rotation operator
        and its generators, the commutator [J_i, S]=0 for scalar operators and
        the conservation laws of symmetric Hamiltonians; PDF page = printed page
        + 8"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 4.1.1,
        printed pages 96-99 (PDF pages 99-102): the angular momentum commutation
        relations, with the angular momentum operators as the generators of
        rotations"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 'Angular
        Momentum', Section 1.3, printed pages 9-11 (PDF pages 9-11): central
        potentials and the commutativity of the angular momentum operators with
        the Hamiltonian (equation (1.70))"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2f\
        d50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
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
$Q_{j},P_{k}$, rotation action $U(R)$ and coordinate-rotation generators
$L_{i}$ ([[lem-nrqm-symmetries-spatial-rotation-action]],
[[lem-nrqm-symmetries-rotation-generators-on-schwartz-classes]]); assume the
Axiom of Choice, the Axiom of Countable Choice and the Axiom of Dependent
Choice ([[def-axiom-of-choice]], [[def-countable-choice]],
[[def-dependent-choice]]). Let $v:[0,\infty)\to\mathbb R$ be bounded and
measurable, and let $V:\mathbb R^{3}\to\mathbb R$ be real, bounded and
measurable with
$$V(x)=v(|x|)\qquad\text{for almost every }x\in\mathbb R^{3},$$
a **radial potential almost everywhere** (if $V$ is the composition
$x\mapsto v(|x|)$ everywhere, this holds with empty exceptional set). Let
$$H_{V}=\frac{1}{2m}\sum_{k=1}^{3}P_{k}^{2}+M_{V},\qquad D(H_{V})=W^{2,2}(\mathbb R^{3};\mathbb C^{r}),$$
be the bounded-potential energy operator. Then:

(a) for every $R\in SO(3)$ one has $V(R^{-1}x)=V(x)$ for almost every $x$, and
$V(-x)=V(x)$ for almost every $x$;

(b) every $U(R)$ is a symmetry of $H_{V}$, the map $R\mapsto U(R)$ is a
strongly continuous unitary symmetry group of the declared dynamics, and each
generator $L_{i}$ is a conserved observable: for every preparation $\rho$,
Borel $B\subseteq\mathbb R$ and $t$,
$$\mu^{L_{i}}_{\rho(t)}(B)=\mu^{L_{i}}_{\rho(0)}(B),$$
with conserved mean and second moment for unit vectors in $D(L_{i})$ and
time-zero values $\langle L_{i}\psi,\psi\rangle$, $\|L_{i}\psi\|^{2}$, in the
unit $\mathrm{J\,s}$ of the model's action
([[def-nrqm-framework-quantities-and-units]]);

(c) the parity action $\Pi$ is a symmetry of $H_{V}$, and its outcome law in
every preparation is time-independent;

(d) **Scope.** The example is conditional on the postulates and the bounded
radial class; it computes no eigenvalue, no bound state, no degeneracy and no
radial solution, and the boundedness of $v$ excludes the Coulomb potential and
other unbounded radial models, which require their own self-adjointness and
spectral analysis. No claim is made that any particular physical potential is
radial, and no empirical result is recorded.

## Facts & Assumptions

**Given:** The postulates P1, P2, P4, P5, P6 in the stated readings; the
Axioms of Choice, Countable Choice and Dependent Choice; the state space
$H_{s}$; the operators $Q_{j},P_{k}$; the rotation action $U$ and generators
$L_{i}$; a bounded measurable $v$ and a real bounded measurable $V$ with
$V=v(|\cdot|)$ almost everywhere; the operator $H_{V}$; a preparation $\rho$;
a unit vector $\psi$; a Borel set $B$; $R\in SO(3)$; $i\in\{1,2,3\}$ and
$t\in\mathbb R$.

[F1] **Model reading.** $H_{V}$ is self-adjoint with domain
$W^{2,2}(\mathbb R^{3};\mathbb C^{r})$; the rotation action $U(R)$ is unitary
with $U(R)W^{2,2}=W^{2,2}$ and strongly continuous in $R$; the coordinate
subgroups $U_{i}(t)=U(R_{i}(t))$ have self-adjoint Stone generators $L_{i}$
([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clause (c), [[lem-nrqm-symmetries-spatial-rotation-action]] clauses (a),(b),
[[lem-nrqm-symmetries-rotation-generators-on-schwartz-classes]] clauses
(a),(b), [[def-nrqm-symmetries-framework-symmetry-groups-and-conservation]]).

[F2] **Orthogonality.** For $R\in SO(3)$ one has $R^{\mathsf T}R=I$ and
$R^{\mathsf T}=R^{-1}$
([[def-cm-special-orthogonal-group]], [[lem-cm-so3-is-a-matrix-group]]); the
Euclidean inner product satisfies
$\langle Rx,Rx\rangle=\langle x,R^{\mathsf T}Rx\rangle=\langle x,x\rangle$ and
$|x|^{2}=\langle x,x\rangle$
([[def-euclidean-inner-product]]).

[F3] **Almost everywhere and orthogonal images.** A property holds almost
everywhere when its exceptional set is contained in a measurable null set
([[def-measure-null-set-and-almost-everywhere]]); finite unions of null sets
are null, since Lebesgue measure is a measure
([[thm-lebesgue-measure-is-a-complete-measure]]). For an invertible linear
$T$ and measurable $E$ the image $T[E]$ is measurable with
$\lambda(T[E])=|\det T|\,\lambda(E)$; in particular for $R\in SO(3)$ one has
$\det R=1$ and $\lambda(R[E])=\lambda(E)$, so orthogonal images of null sets
are null ([[thm-linear-change-of-variables-for-lebesgue-measure]] clause 1,
[[def-cm-special-orthogonal-group]]).

[F4] **Invariance theorem.** If $V_{R}=V$ almost everywhere for every
$R\in SO(3)$, then every $U(R)$ is a symmetry, $R\mapsto U(R)$ is a strongly
continuous unitary symmetry group, and each $L_{i}$ is conserved with the law
and moment statements displayed in (b); if additionally $V_{P}=V$ almost
everywhere, then $\Pi$ is a symmetry and its outcome law is time-independent
([[pthm-nrqm-symmetries-rotational-and-parity-invariance]] clauses (a)-(c)).

[F5] **Outcome laws.** For an assigned sharp observable $A$ one has
$\mu^{A}_{\rho}(B)=\operatorname{tr}(\rho E_{A}(B))$
([[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b),
[[def-nrqm-state-geometry-framework-state-space]]).

## Verification

**Proof technique:** direct; verify the almost-everywhere rotational and
parity invariance of the radial class from orthogonality of the rotation
matrices, and instantiate the rotational-and-parity invariance theorem.

**Given:** The data of the example and [F1]-[F5].

1.1 [Almost-everywhere rotational invariance] Let $N$ be a measurable null set with $V(x)=v(|x|)$ for every $x\notin N$. Fix $R\in SO(3)$ and let $x\notin N\cup R[N]$. By [F2], $|R^{-1}x|^{2}=\langle R^{-1}x,R^{-1}x\rangle=\langle x,(R^{-1})^{\mathsf T}R^{-1}x\rangle=\langle x,x\rangle=|x|^{2}$, using $(R^{-1})^{\mathsf T}=(R^{\mathsf T})^{-1}=R$, so $|R^{-1}x|=|x|$ and $R^{-1}x\notin N$; hence $V(R^{-1}x)=v(|R^{-1}x|)=v(|x|)=V(x)$. By [F3] the set $R[N]$ is null, so the exceptional set of the identity $V(R^{-1}x)=V(x)$ is null; therefore $V(R^{-1}x)=V(x)$ almost everywhere. For parity, let $x\notin N\cup(-N)$; then $-x\notin N$ and $V(-x)=v(|-x|)=v(|x|)=V(x)$ because $|-x|=|x|$, and $N\cup(-N)$ is null by [F3], so $V(-x)=V(x)$ almost everywhere. This proves (a). [F2, F3, given, algebra]

2.1 [Instantiation] By step 1.1 the hypotheses $V_{R}=V$ almost everywhere for every $R\in SO(3)$ and $V_{P}=V$ almost everywhere of [F4] hold; applying [F4] gives that every $U(R)$ is a symmetry, that $R\mapsto U(R)$ is a strongly continuous unitary symmetry group, that each $L_{i}$ is conserved with the displayed law and moment statements read through [F5], and that $\Pi$ is a symmetry with a time-independent outcome law. This proves (b) and (c). [step 1.1, F4, F5, given]

3.1 [Assembly and scope] Steps 1.1 and 2.1 prove (a)-(c) from the model reading [F1]; clause (d) records the bounded radial class, the exclusion of Coulomb and other unbounded radial models and the absence of eigenvalue, bound-state, apparatus and empirical claims. [step 1.1, step 2.1, F1, given] ∎

## Remarks

- **What makes the example work.** Only two ingredients are used: the radial
  identity $V(x)=v(|x|)$ almost everywhere and the orthogonality of rotations
  through $|R^{-1}x|=|x|$; the boundedness of $v$ keeps the model inside the
  bounded-potential class of the page, whose self-adjointness and conservation
  results are already established.
- **What an angular-momentum conservation law is here.** The conserved object
  is the outcome law of the assigned generator observable $L_{i}$ (with its
  moments where they exist); no classical angular-momentum vector, no definite
  value and no measured spectral line is asserted.
