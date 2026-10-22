---
id: lem-qsmx-closed-antilinear-polar-calculus
kind: lemma
title: Closed antilinear polar calculus and Tomita-operator closability
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
physical_scope: null
deps:
  - def-qsmx-von-neumann-algebra
  - def-qsmx-conjugate-hilbert-space-and-antilinear-adjoint
  - lem-qsmx-linear-closed-polar-decomposition
  - lem-qsmx-bicommutant-and-commutant-cyclicity
  - def-unbounded-linear-operator-domain-and-graph
  - def-densely-defined-closed-and-closable-operator
  - def-axiom-of-choice
dependency_roles:
  def-qsmx-von-neumann-algebra: mathematical-premise
  def-qsmx-conjugate-hilbert-space-and-antilinear-adjoint: mathematical-premise
  lem-qsmx-linear-closed-polar-decomposition: mathematical-premise
  lem-qsmx-bicommutant-and-commutant-cyclicity: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "F. Hiai, Concise lectures on selected topics of von Neumann algebras"
      url: "https://arxiv.org/pdf/2004.02383"
      locator: "§2.1, PDF p. 10, definitions and closability of the Tomita operators"
    - title: "Edward Witten, Notes on Some Entanglement Properties of Quantum Field Theory"
      url: "https://arxiv.org/pdf/1803.04993"
      locator: "§3.1, printed pp. 18–20 (PDF pp. 19–21), equations (3.1)–(3.10) and footnote 15"
---

## Statement

Assume the Axiom of Choice. Let $H$ be a complex Hilbert space and let
$S:D(S)\subseteq H\to H$ be a densely defined closable antilinear operator.
Its graph closure $\overline S$ is closed and has the polar decomposition
$$\overline S=J|\overline S|,\qquad |\overline S|=(\overline S^{\,*}\overline S)^{1/2}.$$
Here $J$ is antilinear, vanishes on $\ker\overline S$, and is isometric on
$(\ker\overline S)^\perp$; if $\overline S$ is injective and has dense range,
$J$ is antiunitary.

For a concrete von Neumann algebra $M\subseteq\mathcal B(H)$ and a vector
$\Omega$ cyclic and separating for $M$, define
$D(S_0)=M\Omega$ and $S_0(x\Omega)=x^*\Omega$ for $x\in M$. Then $S_0$ is
well defined, densely defined, antilinear, and closable.

## Statement references

[[def-qsmx-von-neumann-algebra]]

[[def-qsmx-conjugate-hilbert-space-and-antilinear-adjoint]]

[[lem-qsmx-linear-closed-polar-decomposition]]

[[lem-qsmx-bicommutant-and-commutant-cyclicity]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** [A1], a complex Hilbert space $H$, a densely defined closable
antilinear $S$, and, for the Tomita clause, a concrete von Neumann algebra
$M$ with a cyclic and separating vector $\Omega$.

[A1] Assume the Axiom of Choice, used by the local closed-operator polar
lemma ([[def-axiom-of-choice]]).

[F1] The conjugate space $\overline H$, canonical conjugate-linear isometry
$c_H$, linearization $\widetilde S$, and antilinear adjoint $S^*$ are defined
by [[def-qsmx-conjugate-hilbert-space-and-antilinear-adjoint]]. In particular,
$S^*=c_H^{-1}\widetilde S^*$.

[F2] A closed densely defined linear operator $A$ has polar decomposition
$A=U(A^*A)^{1/2}$, with the stated initial and final spaces; when $A$ is
injective with dense range, $U$ is unitary
([[lem-qsmx-linear-closed-polar-decomposition]]).

[F3] For a concrete von Neumann algebra, a vector is cyclic for $M'$ exactly
when it is separating for $M''=M$
([[lem-qsmx-bicommutant-and-commutant-cyclicity]],
[[def-qsmx-von-neumann-algebra]]).

[F4] A densely defined operator is closable exactly when its graph closure
is the graph of a closed operator
([[def-unbounded-linear-operator-domain-and-graph]],
[[def-densely-defined-closed-and-closable-operator]]).

## Proof

**Proof technique:** direct.

**Given:** [A1], [F1]–[F4], the operator $S$, and the cyclic-separating data for
$S_0$.

1.1 Let $C=c_H$ and set $A:=\widetilde{\overline S}$ on $C(D(\overline S))$. Since $C$ is a conjugate-linear isometry and $\overline S$ is closed and densely defined, $A$ is a closed densely defined linear operator from $\overline H$ to $H$. Apply [F2] to write $A=U|A|$. Define $J:=UC$ and $P:=C^{-1}|A|C$. Then $J$ is antilinear, $P$ is positive self-adjoint, and $J P=U C C^{-1}|A|C=U|A|C=A C=\overline S$. By [F1], $\overline S^{\,*}\overline S=C^{-1}A^*A C$, so the positive square root $P$ is exactly $(\overline S^{\,*}\overline S)^{1/2}$. The initial and final spaces and the antiunitary condition follow from [F2] under the same conjugate-linear isometry. [A1, F1, F2, construct, algebra]

1.2 For $x,y\in M$, if $x\Omega=y\Omega$, then $(x-y)\Omega=0$; separatingness of $\Omega$ for $M$ forces $x=y$. Thus the rule $S_0(x\Omega)=x^*\Omega$ is well defined. It is antilinear because $(a x+b y)^*=\overline a\,x^* +\overline b\,y^*$, and its domain is dense because $\Omega$ is cyclic for $M$. [given, F3, algebra]

2.1 Let $x_n\in M$ with $x_n\Omega\to0$ and $x_n^*\Omega\to\eta$. For every $y'\in M'$, the linear-first adjoint identity and commutation give $$\langle\eta,y'\Omega\rangle =\lim_n\langle x_n^*\Omega,y'\Omega\rangle =\lim_n\langle y'^*\Omega,x_n\Omega\rangle=0.$$ Since $\Omega$ is separating for $M$, [F3] makes it cyclic for $M'$, so $M'\Omega$ is dense. Therefore $\eta=0$. The graph criterion [F4] now proves that $S_0$ is closable. [given, F3, F4, step 1.2, algebra]

3.1 Step 1.1 proves the polar decomposition for the closure of every densely-defined closable antilinear operator, and steps 1.2–2.1 prove the Tomita operator clause with its stated cyclic-separating hypotheses. The Choice assumption is inherited through the spectral theorem used in [F2]. [step 1.1, step 1.2, step 2.1] ∎
