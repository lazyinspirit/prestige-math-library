---
id: ex-nrqm-symmetries-parity-selection-rule
aliases: [ nrqm-symmetries-parity-selection-rule ]
kind: example
domain: physics
title: "Definite parity of nondegenerate eigenstates and the
  position-matrix-element selection rule"
status: draft
origin: session
dependency_level: 12
deps:
  [
    def-adjoint-of-a-densely-defined-unbounded-operator,
    def-axiom-of-choice,
    def-complex-lp-and-euclidean-test-function-conventions,
    def-countable-choice,
    def-hilbert-space,
    def-nrqm-autonomous-dynamics-framework-evolution,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-symmetries-framework-symmetry-groups-and-conservation,
    lem-nrqm-kinematics-componentwise-position-and-momentum,
    lem-nrqm-symmetries-parity-action,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-identical-particles-and-spin,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-state-and-composition,
    pthm-nrqm-symmetries-rotational-and-parity-invariance,
    def-symmetric-self-adjoint-and-essentially-self-adjoint,
    thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators,
    thm-spectral-theorem-for-unbounded-self-adjoint-operators
  ]
dependency_roles:
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-symmetries-framework-symmetry-groups-and-conservation: formulation-prerequisite
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-symmetries-parity-action: mathematical-premise
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  pthm-nrqm-symmetries-rotational-and-parity-invariance: physical-result
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A model computation for the massive spin-s model with an even
  real bounded measurable potential: the parity invariance of every energy
  eigenspace, the definite parity of nondegenerate eigenstates, and the
  vanishing of the position matrix element between two states of the same
  parity. The item is a conditional identity about the model's operators and
  assigned position observables; it computes no transition rate, models no
  measurement and records no empirical result."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections
        4.1.4 and 4.2, printed pages 62-67 (PDF pages 70-75): the parity
        operator and its eigenvalues, the commutation of parity with the
        Hamiltonian for an even potential (equation (4.43)) and the vanishing of
        matrix elements of a vector operator between states of equal definite
        parity (equation (4.42), printed page 67); PDF page = printed page + 8"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections
        2.2-2.3.1, printed pages 39-47 (PDF pages 42-50): parity of energy
        eigenfunctions for even potentials (printed page 39) and the even and
        odd bound-state solutions of the finite potential well; PDF page =
        printed page + 3"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
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
$Q_{j},P_{k}$ and the parity action $\Pi$
([[lem-nrqm-symmetries-parity-action]]); assume the Axiom of Countable Choice
and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Let $V:\mathbb R^{3}\to\mathbb R$ be real, bounded
and measurable with
$$V(-x)=V(x)\qquad\text{for almost every }x\in\mathbb R^{3},$$
let
$$H_{V}=\frac{1}{2m}\sum_{k=1}^{3}P_{k}^{2}+M_{V},\qquad D(H_{V})=W^{2,2}(\mathbb R^{3};\mathbb C^{r}),$$
and put $V_{P}(x):=V(-x)$. Then:

(a) if $\psi\in D(H_{V})$ is an eigenvector of $H_{V}$ with eigenvalue
$E\in\mathbb R$, $H_{V}\psi=E\psi$ and $\psi\ne0$, then $\Pi\psi$ is again an
eigenvector of $H_{V}$ with the same eigenvalue $E$; consequently every
eigenspace of $H_{V}$ is invariant under $\Pi$;

(b) if the eigenspace of $E$ is one-dimensional, then $\Pi\psi=\lambda\psi$
with $\lambda\in\{-1,1\}$: the state has definite parity;

(c) if $\psi,\psi'\in H_{s}$ are unit vectors with $\Pi\psi=\sigma\psi$ and
$\Pi\psi'=\tau\psi'$ for signs $\sigma,\tau\in\{-1,1\}$ and $\psi\in D(Q_{j})$,
then
$$\sigma=\tau\quad\Longrightarrow\quad\langle Q_{j}\psi,\psi'\rangle=0;$$
the position matrix element of two states of equal parity vanishes, while no
nonvanishing statement is made for opposite parities;

(d) **Scope.** The example is conditional on the postulates and the cited
mathematics; the matrix element of (c) is an identity about the model's
assigned position observables. No transition rate, no spectral intensity, no
time-dependent coupling, no measurement model and no empirical consequence is
computed; the hypothesis that the relevant eigenvalue is nondegenerate is
essential for (b).

## Facts & Assumptions

**Given:** The postulates P1, P2, P4, P5, P6 in the stated readings; the
Axioms of Countable Choice and of Choice; the state space $H_{s}$; the
operators $Q_{j},P_{k}$; the parity action $\Pi$; a real bounded measurable
$V$ with $V_{P}=V$ almost everywhere; the operator $H_{V}$ on $W^{2,2}$; an
eigenvector $\psi$ with eigenvalue $E$; unit vectors $\psi,\psi'$ with
parities $\sigma,\tau$; a coordinate $j$.

[F1] **Model and evenness.** $H_{V}$ is self-adjoint with domain
$W^{2,2}(\mathbb R^{3};\mathbb C^{r})$
([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clause (c), [[lem-nrqm-kinematics-componentwise-position-and-momentum]]
clause (a)); under the hypothesis $V_{P}=V$ almost everywhere the parity
theorem gives $\Pi H_{V}\Pi=H_{V}$ on $W^{2,2}$ and
$\Pi W^{2,2}(\mathbb R^{3};\mathbb C^{r})=W^{2,2}(\mathbb R^{3};\mathbb C^{r})$
([[pthm-nrqm-symmetries-rotational-and-parity-invariance]] clause (c),
[[def-nrqm-symmetries-framework-symmetry-groups-and-conservation]]).

[F2] **Parity action.** $\Pi$ is unitary, $\Pi^{2}=\mathrm{id}$ and
$\Pi^{*}=\Pi$; and $\Pi D(Q_{j})=D(Q_{j})$ with $\Pi Q_{j}\Pi=-Q_{j}$ as an
identity of operators with domain $D(Q_{j})$
([[lem-nrqm-symmetries-parity-action]] clauses (a),(b)).

[F3] **Bounded parity-adjoint identity.** The operator $\Pi$ is bounded and
self-adjoint, so $\langle\Pi u,v\rangle=\langle u,\Pi v\rangle$ for all
$u,v\in H_s$ ([[lem-nrqm-symmetries-parity-action]] clause (a)).

## Verification

**Proof technique:** direct; conjugate the eigenvalue equation by the
involution $\Pi$, use one-dimensionality for definite parity, and evaluate
the position matrix element through the operator identity $\Pi Q_{j}\Pi=-Q_{j}$
and the self-adjointness of $\Pi$.

**Given:** The data of the example and [F1]-[F3].

1.1 [Eigenspaces are parity invariant] By [F1] one has $\Pi H_{V}\Pi=H_{V}$ on $W^{2,2}$; multiplying this identity on the left by $\Pi=\Pi^{-1}$ gives $H_{V}\Pi=\Pi H_{V}$ on $W^{2,2}$, again using $\Pi^{2}=\mathrm{id}$ of [F2]. For an eigenvector $\psi\in D(H_{V})$ the vector $\Pi\psi$ lies in $D(H_{V})$ because $\Pi W^{2,2}=W^{2,2}$, and $H_{V}(\Pi\psi)=\Pi H_{V}\psi=\Pi(E\psi)=E\,\Pi\psi$; since $\Pi$ is injective, $\Pi\psi\ne0$ whenever $\psi\ne0$. Hence $\Pi$ maps every eigenspace into itself, which is (a). [F1, F2, given, algebra]

2.1 [Definite parity in the nondegenerate case] If the eigenspace of $E$ is one-dimensional and $\psi\ne0$ is an eigenvector, then $\Pi\psi$ belongs to that eigenspace by step 1.1, so $\Pi\psi=\lambda\psi$ for some $\lambda\in\mathbb C$. Applying $\Pi$ again and using $\Pi^{2}=\mathrm{id}$ gives $\psi=\Pi^{2}\psi=\lambda\,\Pi\psi=\lambda^{2}\psi$; since $\psi\ne0$, $\lambda^{2}=1$ and hence $\lambda\in\{-1,1\}$. This proves (b). [step 1.1, F2, given, algebra]

3.1 [Selection rule] By [F2] the identity $\Pi Q_{j}\Pi=-Q_{j}$ holds with domain $D(Q_{j})$ preserved; multiplying on the left and on the right by $\Pi$ gives $Q_{j}=-\Pi Q_{j}\Pi$ as an identity with domain $D(Q_{j})$. Let $\psi\in D(Q_{j})$. Then $\Pi\psi\in D(Q_{j})$ by [F2], so $\Pi Q_{j}\Pi\psi$ is defined, and by the operator identity and $\Pi\psi=\sigma\psi$ one has $Q_{j}\psi=-\Pi Q_{j}\Pi\psi=-\sigma\,\Pi Q_{j}\psi$. Since $\Pi^{*}=\Pi$ by [F2] and $\Pi\psi'=\tau\psi'$, taking the pairing with $\psi'$ gives $\langle Q_{j}\psi,\psi'\rangle=-\sigma\langle\Pi Q_{j}\psi,\psi'\rangle=-\sigma\langle Q_{j}\psi,\Pi\psi'\rangle=-\sigma\tau\langle Q_{j}\psi,\psi'\rangle$ by [F3]. Hence $(1+\sigma\tau)\langle Q_{j}\psi,\psi'\rangle=0$, and if $\sigma=\tau$ then $\sigma\tau=1$ and the matrix element vanishes. This proves (c). [step 2.1, F2, F3, given, algebra]

4.1 [Conclusion and scope] Steps 1.1 and 2.1 prove (a) and (b), and step 3.1 proves (c); clause (d) records that only the model's operators and its even-potential hypothesis are used, that the nondegeneracy hypothesis is essential in (b), and that no transition rate, measurement model or empirical claim is made. [step 1.1, step 2.1, step 3.1, given] ∎

## Remarks

- **Why the same-parity case vanishes.** The parity action conjugates the
  position operator to its negative, so a matrix element between two states of
  equal parity equals its own negative; the argument uses the involution
  structure and self-adjointness of $\Pi$, not the details of the potential
  beyond its evenness.
- **What a selection rule is not.** The vanishing statement is an identity for
  the model's assigned position observables in the declared even-potential
  model. Turning it into a statement about observed transition intensities
  requires a time-dependent coupling model, the corresponding transition-rate
  analysis, a detection model and a sampling model, none of which is supplied
  here.
