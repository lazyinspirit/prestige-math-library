---
id: def-qsmx-von-neumann-algebra
kind: definition
title: Concrete von Neumann algebra and faithful vector
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
physical_scope: null
deps:
  - lem-qsm-state-gns-construction
  - def-space-of-bounded-linear-operators
  - thm-hilbert-adjoint-properties
  - def-von-neumann-algebra-and-commutant
  - def-strong-and-weak-operator-topologies
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-double-commutant-theorem-for-concrete-von-neumann-algebras
  - def-countable-choice
dependency_roles:
  lem-qsm-state-gns-construction: mathematical-premise
  def-space-of-bounded-linear-operators: mathematical-premise
  thm-hilbert-adjoint-properties: mathematical-premise
  def-von-neumann-algebra-and-commutant: mathematical-premise
  def-strong-and-weak-operator-topologies: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  thm-double-commutant-theorem-for-concrete-von-neumann-algebras: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "F. Hiai, Concise lectures on selected topics of von Neumann algebras"
      url: "https://arxiv.org/pdf/2004.02383"
      locator: "§1.1–1.3, PDF pp. 3–4; §2.1, PDF pp. 10–11"
    - title: "Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "Part I, §§I.2.5 and I.3.1–I.3.2, printed pp. 9–17 and 14–16"
    - title: "Edward Witten, Notes on Some Entanglement Properties of Quantum Field Theory"
      url: "https://arxiv.org/pdf/1803.04993"
      locator: "§3.1, printed pp. 18–19 (PDF pp. 19–20), equations (3.1)–(3.9) and footnote 15"
proof_strategy: direct
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Assume the Axiom of Choice. Let $H$ be a complex Hilbert space and
$\mathcal B(H)$ the space of bounded linear operators on $H$
([[def-space-of-bounded-linear-operators]]). For a set
$\mathcal S\subseteq\mathcal B(H)$, write

$$\mathcal S':=\{T\in\mathcal B(H):Ts=sT\text{ for every }s\in\mathcal S\}, \qquad \mathcal S'':=(\mathcal S')'.$$

A **directed preorder** is a nonempty set $I$ with a reflexive, transitive
relation $\le$ such that every pair $i,j\in I$ has a common upper bound in
$I$. A **net** in a set $X$ is a function from a directed preorder into $X$;
its values are written $(x_i)_{i\in I}$.

The strong operator topology on $\mathcal B(H)$ is the topology of pointwise
norm convergence: $T_\alpha\to T$ strongly exactly when
$\|(T_\alpha-T)\xi\|\to0$ for every $\xi\in H$. The weak operator topology is
the topology of pointwise matrix-coefficient convergence: $T_\alpha\to T$
weakly exactly when $\langle T_\alpha\xi,\eta\rangle\to\langle T\xi,\eta\rangle$
for every $\xi,\eta\in H$. Use the linear-first inner-product convention.

A **concrete von Neumann algebra** on $H$ is a unital star subalgebra
$M\subseteq\mathcal B(H)$ satisfying $M=M''$. Under Choice, the double
commutant theorem makes this equivalent to being closed in the weak operator
topology.

An operator $a\in\mathcal B(H)$ is **positive** when $a=a^*$ and
$\langle a\xi,\xi\rangle\ge0$ for every $\xi\in H$, using the bounded
adjoint convention of [[thm-hilbert-adjoint-properties]]. Write $M_+$ for the
positive operators in $M$ and $a\le b$ when $b-a$ is positive.

A vector $\Omega\in H$ is **cyclic** for $M$ when
$\overline{M\Omega}=H$, and is **separating** for $M$ when
$x\Omega=0$ for $x\in M$ implies $x=0$. For a unit vector $\Omega$, define its
vector functional by $\omega_\Omega(x)=\langle x\Omega,\Omega\rangle$.
It is **faithful** when $\omega_\Omega(x^*x)=0$ implies $x=0$; this is
equivalent to $\Omega$ being separating because
$\omega_\Omega(x^*x)=\|x\Omega\|^2$.

For a bounded linear functional $\varphi:M\to\mathbb C$, **positive** means
$\varphi(a)\in[0,+\infty)$ for every $a\in M_+$; in particular, each such
value is real. A positive functional is **normal**
when $\varphi(\sup_i x_i)=\sup_i\varphi(x_i)$ for each bounded increasing
net $(x_i)_{i\in I}$ in $M_+$ whose supremum is taken in $M$.

## Definition references

[[def-von-neumann-algebra-and-commutant]]

[[def-space-of-bounded-linear-operators]]

[[thm-hilbert-adjoint-properties]]

[[def-strong-and-weak-operator-topologies]]

[[def-axiom-of-choice]]

[[thm-choice-implies-dependent-implies-countable-choice]]

## Remarks

For a quasi-local state arising from a consistent family of finite local
density matrices, assume Countable Choice together with the GNS supplier's
C*-algebra completion and finite-matrix positive-square-root interfaces,
exactly as stated in that supplier's Statement. Under these hypotheses it
gives a cyclic representation. That construction does not assert that the cyclic vector is
separating for the represented algebra, and it does not supply a separating
vector for every state.

[[lem-qsm-state-gns-construction]]

The definition $M=M''$ is the chosen concrete representation interface. The
canonical imported definition starts with weak-operator closure; the cited
double-commutant theorem proves the equivalence under the stated Choice
hypothesis.

## Facts & Assumptions

**Given:** Choice, a complex Hilbert space $H$, a unital star subalgebra $M\subseteq\mathcal B(H)$, and a unit vector $\Omega\in H$.

[A1] The Axiom of Choice implies Countable Choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F1] The canonical interface defines concrete von Neumann algebras by weak operator closure and defines commutants in $\mathcal B(H)$ ([[def-von-neumann-algebra-and-commutant]]).

[F2] Weak-operator convergence is pointwise convergence of matrix coefficients ([[def-strong-and-weak-operator-topologies]]).

[F3] Under Choice, a unital star subalgebra is weak-operator closed exactly when it equals its double commutant ([[thm-double-commutant-theorem-for-concrete-von-neumann-algebras]]).

[F4] Bounded adjoints satisfy $\langle A\xi,\eta\rangle= \langle\xi,A^*\eta\rangle$ and $(A^*)^*=A$ ([[thm-hilbert-adjoint-properties]]).

[F5] Under Countable Choice, the C*-algebra completion interface and the finite-matrix positive-square-root interface specified in its Statement, the quasi-local-state GNS supplier constructs a cyclic representation of the extended algebraic state of its consistent finite-density family ([[lem-qsm-state-gns-construction]]).

## Proof

**Proof technique:** direct verification of the representation interface.

**Given:** [A1], [F1]–[F5], and the objects in the Definition.

1.1 For $x\in M$, [F4] gives $$\omega_\Omega(x^*x)=\langle x^*x\Omega,\Omega\rangle =\langle x\Omega,x\Omega\rangle=\|x\Omega\|^2.$$ Thus $\omega_\Omega(x^*x)=0$ exactly when $x\Omega=0$; requiring this to force $x=0$ is exactly separatingness. [F4, given, algebra]

1.2 By [F3], under the declared Choice hypothesis the weak-operator-closed definition of a concrete von Neumann algebra is equivalent to $M=M''$. Therefore the double-commutant convention in the Definition matches the canonical weak-operator-closure convention. [A1, F1, F2, F3]

2.1 For the consistent finite-density family and extended state in [F5], assume its C*-algebra completion and finite-matrix positive-square-root interfaces. Together with Countable Choice from [A1], these are the hypotheses of the cited GNS construction, which supplies a cyclic representing vector. Its statement gives no separating-vector conclusion; separatingness remains the separate representation property defined above. [A1, F5] ∎
