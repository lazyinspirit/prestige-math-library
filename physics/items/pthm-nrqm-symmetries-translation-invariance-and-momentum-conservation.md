---
id: pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation
aliases: [ nrqm-symmetries-translation-invariance-and-momentum-conservation ]
kind: physics-theorem
domain: physics
title: "Translation invariance of bounded potentials and conservation of momentum"
status: draft
origin: session
dependency_level: 11
deps:
  [
    def-axiom-of-choice,
    def-bounded-linear-operator,
    def-countable-choice,
    def-dependent-choice,
    def-hilbert-space,
    def-lebesgue-point-and-lebesgue-set,
    def-l-p-space-as-a-quotient-by-null-functions,
    def-mollifier-family-generated-by-a-unit-mass-smooth-bump,
    def-nrqm-autonomous-dynamics-framework-evolution,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-symmetries-framework-symmetry-groups-and-conservation,
    def-radial-mollifier-family-in-rn,
    def-weak-derivative-of-a-locally-integrable-function,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    lem-nrqm-kinematics-componentwise-position-and-momentum,
    lem-radial-majorized-kernels-recover-lebesgue-point-values,
    pthm-nrqm-kinematics-translation-covariance,
    pthm-nrqm-symmetries-generator-conservation,
    thm-almost-every-point-is-a-lebesgue-point,
    thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-state-and-composition,
    thm-dominated-convergence,
    thm-spectral-theorem-for-unbounded-self-adjoint-operators
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-lebesgue-point-and-lebesgue-set: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-mollifier-family-generated-by-a-unit-mass-smooth-bump: mathematical-premise
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-symmetries-framework-symmetry-groups-and-conservation: formulation-prerequisite
  def-radial-mollifier-family-in-rn: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-radial-majorized-kernels-recover-lebesgue-point-values: mathematical-premise
  pthm-nrqm-kinematics-translation-covariance: physical-result
  pthm-nrqm-symmetries-generator-conservation: physical-result
  thm-almost-every-point-is-a-lebesgue-point: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  thm-dominated-convergence: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional consequence of the framework postulates for the
  componentwise massive model with a real bounded measurable potential V: the
  translation T_a is a symmetry of the bounded-potential operator H_V exactly
  when V is invariant under translation by a, the full translation group is a
  symmetry group exactly when V is almost everywhere constant, and for such
  translation-invariant models the momentum components are conserved observables
  by the generator-conservation theorem. The statement concerns real bounded
  measurable potentials only; it asserts no momentum conservation for
  non-invariant potentials, no statement about singular or unbounded potentials,
  no lattice or discrete-group conservation claim beyond the fixed-translation criterion, no apparatus realization and no
  empirical result."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections
        4.1.1, 4.2 and 4.3, printed pages 59-69 (PDF pages 67-77): translating
        kets, the momentum as generator of translations, and translational
        invariance with conservation of momentum"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 8.1, printed pages 173-175 (PDF pages 185-187): the
        one-parameter unitary group of translations, its generator, and momentum
        conservation for the free motion; Theorem 8.1 printed page 174 (PDF page
        186)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', Section 3.2, printed pages 20-22 (PDF pages 20-22): conserved
        operators as those commuting with the Hamiltonian"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
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
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]]), and
assume the Axiom of Choice, the Axiom of Countable Choice and the Axiom of
Dependent Choice ([[def-axiom-of-choice]], [[def-countable-choice]],
[[def-dependent-choice]]). Let $H_{s}$ be the model's state space with
componentwise operators $Q_{j},P_{k}$ ([[lem-nrqm-kinematics-componentwise-position-and-momentum]]),
let $V:\mathbb R^{3}\to\mathbb R$ be real, bounded and measurable, and let
$$H_{V}:=\frac{1}{2m}\sum_{k=1}^{3}P_{k}^{2}+M_{V},\qquad D(H_{V})=W^{2,2}(\mathbb R^{3};\mathbb C^{2s+1}),\qquad V_{a}(x):=V(x-a),$$
be the model's bounded-potential energy operator with $M_{V}$ multiplication by
$V$ and $T_{a}:=T_{a}^{(2s+1)}$ the componentwise translations
([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clause (c), [[pthm-nrqm-kinematics-translation-covariance]]). Then:

(a) for every $a\in\mathbb R^{3}$:
$$T_{a}H_{V}T_{a}^{-1}=H_{V_{a}},$$
and $T_{a}$ is a symmetry of $H_{V}$ in the sense of
[[def-nrqm-symmetries-framework-symmetry-groups-and-conservation]] clause (b)
if and only if $V_{a}=V$ almost everywhere;

(b) if $T_{a}$ is a symmetry for every $a\in\mathbb R^{3}$, then $V$ is almost
everywhere constant; in that case $H_{V}=H_{0}+cI$ on $W^{2,2}$ for
$H_{0}=\frac{1}{2m}\sum_{k}P_{k}^{2}$ and $c$ the constant, and the translations
form a strongly continuous unitary group of symmetries;

(c) **Momentum conservation for translation-invariant models.** Let $V$ be
almost everywhere constant and let $c$ be that constant. Then for every
$k\in\{1,2,3\}$ the momentum component $P_{k}$ is a conserved observable of the
model with energy $H_{V}$: for every preparation $\rho$, every Borel
$B\subseteq\mathbb R$ and every $t$,
$$\mu^{P_{k}}_{\rho(t)}(B)=\mu^{P_{k}}_{\rho(0)}(B);$$
if $\psi(0)\in D(P_{k})$ is a unit vector, the mean and second moment of the
law of $P_{k}$ are conserved with time-zero values $\langle P_{k}\psi,\psi\rangle$
and $\|P_{k}\psi\|^{2}$; and the coordinate translations satisfy
$T_{te_{k}}=e^{-itP_{k}/\hbar}$ for all $t$, so the generators of the
one-parameter symmetry groups are the momentum components;

(d) **Scope.** The statement concerns the componentwise massive model with real
bounded measurable potentials. It asserts no momentum conservation for a
potential that is not translation invariant — the translation-covariance
theorem transports the position law and conjugates the dynamics, but does not
by itself conserve momentum — and it makes no claim about singular, unbounded,
boundary or relativistic models. Clause (a) includes bounded periodic potentials
and their fixed period translations; no additional discrete-group conservation
theorem, apparatus or empirical result is asserted.

## Facts & Assumptions

**Given:** The postulates P1, P2, P4, P5, P6 in the stated readings; the Axioms
of Choice, Countable Choice and Dependent Choice; the state space $H_{s}$; the
operators $Q_{j},P_{k}$ and translations $T_{a}$; a real bounded measurable $V$;
the operator $H_{V}$; a preparation $\rho$; a unit vector $\psi$; a Borel set
$B$; $a\in\mathbb R^{3}$; $k\in\{1,2,3\}$; $t\in\mathbb R$.

[F1] **Translations and the bounded-potential operator.** $T_{a}$ is unitary
with $T_{a}D(Q_{j})=D(Q_{j})$, $T_{a}Q_{j}T_{a}^{-1}=Q_{j}-a_{j}I$,
$T_{a}D(P_{k})=D(P_{k})$, $T_{a}P_{k}T_{a}^{-1}=P_{k}$, and
$T_{a}W^{2,2}=W^{2,2}$; $T_{a}H_{V}T_{a}^{-1}=H_{V_{a}}$; and
$T_{te_{k}}=e^{-itP_{k}/\hbar}$ with the generator identification of the
translation group ([[pthm-nrqm-kinematics-translation-covariance]] clause (c),
[[lem-nrqm-kinematics-componentwise-position-and-momentum]] clauses (c),(d)).

[F2] **Multipliers.** $M_{V}$ is the bounded self-adjoint multiplication
operator by the real bounded class $V$; for two real bounded measurable
functions $W_{1},W_{2}$ one has $M_{W_{1}}=M_{W_{2}}$ if and only if
$W_{1}=W_{2}$ almost everywhere; and $H_{V}=H_{0}+M_{V}$ is self-adjoint with
domain $W^{2,2}$ and generates a strongly continuous unitary group
([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clauses (a),(c), [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F3] **Mollifiers and Lebesgue points.** Let $\rho(x)=q(|x|)$ be the
unit-mass radial mollifier supported in $B_1(0)$ and
$\rho_\varepsilon(x)=\varepsilon^{-3}\rho(x/\varepsilon)$ its family
([[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]],
[[def-radial-mollifier-family-in-rn]]). Since $q$ is continuous with compact
support, $\Phi(r):=\sup_{u\ge r}|q(u)|$ is bounded, nonincreasing, vanishes
for $r\ge1$, and satisfies $|\rho(y)|\le\Phi(|y|)$ and
$\int_{\mathbb R^3}\Phi(|y|)\,dy<\infty$. The radial-majorant recovery lemma
therefore applies: for $f\in L^1(\mathbb R^3)$ and a Lebesgue point $x$ of
$f$, $(f*\rho_\varepsilon)(x)\to f(x)$ as $\varepsilon\downarrow0$
([[lem-radial-majorized-kernels-recover-lebesgue-point-values]],
[[def-lebesgue-point-and-lebesgue-set]]); almost every point is a Lebesgue
point of $f$ ([[thm-almost-every-point-is-a-lebesgue-point]]). For bounded
measurable $V$, each integral against $\rho_\varepsilon(x-\cdot)$ is
absolutely convergent because the kernel is bounded with compact support.

[F4] **Conservation theorem.** For a declared isolated system with energy
$H_{\mathrm{op}}$ and flow $U(t)$, an assigned sharp observable $(A,u_A)$ with
$e^{-isA/\hbar}U(t)=U(t)e^{-isA/\hbar}$ for all $s,t$ has a time-independent
outcome law, conserved moments for vectors in $D(A)$, and a unitary symmetry
$S$ of the dynamics satisfies $SU(t)=U(t)S$
([[pthm-nrqm-symmetries-generator-conservation]] clauses (a)-(c)).

[F5] **Outcome laws.** The outcome law of an assigned sharp observable is
$\mu^{A}_{\rho}(B)=\operatorname{tr}(\rho E_{A}(B))$, respectively
$\mu^{A}_{\psi}(B)=\|E_{A}(B)\psi\|^{2}$, with the spectral PVMs of the model's
self-adjoint operators ([[def-nrqm-observables-framework-observable-and-outcome-law]]
clauses (b),(e), [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]],
[[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a)).

## Proof

**Proof technique:** direct; read the symmetry criterion off the conjugation
identity for the bounded-potential operator, prove that a potential invariant
under every translation is almost everywhere constant by mollification and
Lebesgue-point convergence, and instantiate the conservation theorem for the
momentum components of an invariant model.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Symmetry criterion] The identity $T_{a}H_{V}T_{a}^{-1}=H_{V_{a}}$ is [F1], and $T_{a}$ is a symmetry exactly when $T_{a}H_{V}T_{a}^{-1}=H_{V}$ with $T_{a}D(H_{V})=D(H_{V})=W^{2,2}$, which by the identity holds exactly when $H_{V_{a}}=H_{V}$. Subtracting the common free part $H_{0}$ (self-adjoint with domain $W^{2,2}$ by [F2]) gives $M_{V_{a}}=M_{V}$ as bounded operators, and by [F2] this is equivalent to $V_{a}=V$ almost everywhere. This proves (a). [F1, F2, given, algebra]

1.2 [Invariance makes the mollifications constant] Assume $V_{a}=V$ almost everywhere for every $a\in\mathbb R^{3}$, fix $\varepsilon>0$ and $x,a\in\mathbb R^{3}$. By [F3] the defining integral is absolutely convergent, and the substitution $z=y+a$ gives $(V*\rho_{\varepsilon})(x-a)=\int V(y)\rho_{\varepsilon}(x-a-y)\,dy=\int V(z-a)\rho_{\varepsilon}(x-z)\,dz$. Since $V(z-a)=V(z)$ for almost every $z$ and the kernel is integrable with compact support, this equals $\int V(z)\rho_{\varepsilon}(x-z)\,dz=(V*\rho_{\varepsilon})(x)$. Thus $V*\rho_{\varepsilon}$ is translation invariant pointwise and therefore is constant, equal to some $c_{\varepsilon}$. [F3, given, algebra]

2.1 [Lebesgue points and constancy] For each positive integer $n$ put $B_n:=B(0,n)$ and $f_n:=V\mathbf 1_{B(0,n+1)}\in L^{1}(\mathbb R^{3})$. By [F3] almost every $x\in B_n$ is a Lebesgue point of $f_n$, so choose one such point $x_n\in B_n$; for $0<\varepsilon<1$ the support of $\rho_\varepsilon(x_n-\cdot)$ lies in $B(0,n+1)$, and the recovery lemma gives $c_\varepsilon=(V*\rho_\varepsilon)(x_n)=(f_n*\rho_\varepsilon)(x_n)\to f_n(x_n)=V(x_n)=:c_n$. For every Lebesgue point $x\in B_n$ of $f_n$, the same support argument and recovery lemma give $V(x)=\lim_{\varepsilon\downarrow0}c_\varepsilon=c_n$; hence $V=c_n$ almost everywhere on $B_n$. The balls $B_n$ are nested and each has positive measure, so their constants agree and $V$ is almost everywhere constant on $\mathbb R^3$. Calling that constant $c$, [F2] gives $H_V=H_0+cI$, and the translations are symmetries by (a) and form a strongly continuous unitary group by [F1]. This proves (b). [step 1.2, F1, F2, F3, given, algebra]

3.1 [Momentum conservation] Let $V=c$ almost everywhere, so $H_{V}=H_{0}+cI$ on $W^{2,2}$. For fixed $k$, the group $W(s):=e^{-isP_{k}/\hbar}=T_{se_{k}}$ of [F1] consists of unitaries $S$ with $SD(H_{V})=D(H_{V})$ and $SH_{V}S^{*}=H_{V}$: the identity for $P_{k}$ in [F1] gives $T_{se_{k}}P_{k}T_{se_{k}}^{-1}=P_{k}$ and hence the same for $P_{k}^{2}$ and for $H_{V}$ with its domain. By [F4] applied to the unitary symmetry $S=T_{se_{k}}$, $W(s)U(t)=U(t)W(s)$ for all $s,t$, where $U$ is the flow of $H_{V}$; hence the conservation conclusion of [F4] applies with $A:=P_{k}$, giving the displayed time-independence of the momentum law for every preparation and, for $\psi(0)\in D(P_{k})$, the conservation of the mean and second moment with the time-zero values of [F4] and [F5]. The generator statement is [F1]. This proves (c). [step 2.1, F1, F4, F5, given, algebra]

4.1 [Assembly and scope] Steps 1.1, 1.2, 2.1 and 3.1 prove (a)-(c); clause (d) records the bounded measurable class of potentials, the explicit exclusion of momentum conservation for non-invariant potentials, and the absence of discrete-symmetry, singular-potential, apparatus and empirical claims. [step 1.1, step 1.2, step 2.1, step 3.1] ∎

## Remarks

- **Where translation invariance fails.** If a bounded measurable potential
  is not almost everywhere constant, the contrapositive of clause (b) gives
  some nonzero translation $a$ for which $V_{a}$ and $V$ are not equal almost
  everywhere, and then $T_{a}$ is not a symmetry; the companion page exhibits
  such a potential. Covariance is not conservation.
- **The role of boundedness.** The proof of the constancy criterion uses only
  boundedness and measurability of $V$; no regularity, decay or periodicity is
  assumed, and no conclusion is drawn for potentials outside this class.
