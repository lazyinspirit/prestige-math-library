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

For this item, let $H$ be a complex Hilbert space and let
$S:D(S)\subseteq H\to H$ be an antilinear operator. Set
$$\Gamma(S):=\{(x,Sx):x\in D(S)\}\subseteq H\oplus H,$$
where $H\oplus H$ has its direct-sum Hilbert norm. Use the conjugate space
$\overline H$, canonical conjugate-linear surjective isometry $c_H:H\to\overline H$,
and linearization $\widetilde S:D(\widetilde S)\subseteq\overline H\to H$ from the earlier
conjugate-Hilbert-space and antilinear-adjoint definition. The map
$c_H\oplus I_H:H\oplus H\to\overline H\oplus H$ given by
$(x,y)\mapsto(c_Hx,y)$, with $I_H$ the identity on $H$, is a real-linear
isometric bijection and sends
$\Gamma(S)$ onto $\Gamma(\widetilde S)$. Call $S$ **closed** or
**closable** when $\widetilde S$ is closed or closable, respectively, in the
complex-linear sense already defined for densely defined operators.
For closable $S$, $\overline S$ denotes the antilinear operator whose graph is
the norm closure of $\Gamma(S)$; the proof verifies that this closure is a
graph and equivalently that $\widetilde{\overline S}$ is the graph closure
of $\widetilde S$. An **antiunitary** on $H$ means a conjugate-linear,
surjective isometry $H\to H$.

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

[[def-unbounded-linear-operator-domain-and-graph]]

[[def-densely-defined-closed-and-closable-operator]]

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
$A=UB$, where $B=(A^*A)^{1/2}$ is positive self-adjoint with $D(B)=D(A)$,
and $U$ has the stated initial and final spaces; when $A$ is injective with
dense range, $U$ is unitary
([[lem-qsmx-linear-closed-polar-decomposition]]).

[F3] For a concrete von Neumann algebra, a vector is cyclic for $M'$ exactly
when it is separating for $M''=M$
([[lem-qsmx-bicommutant-and-commutant-cyclicity]],
[[def-qsmx-von-neumann-algebra]]).

[F4] A densely defined operator is closable exactly when its graph closure
is the graph of a closed operator. Here this criterion is applied to the
complex-linear operator $\widetilde S$: by the linear definition, closability
means that $\widetilde S$ has a closed linear extension. The closure of its
graph is then contained in the graph of every such extension, so its vertical
fiber is zero and the closed graph itself defines the smallest closed
extension. Conversely, if that graph closure is a graph, it is a closed
extension. The isometry $c_H\oplus I_H$ transfers this criterion to
$\Gamma(S)$; its inverse sends a graph of a complex-linear operator to the
graph of an antilinear operator. Thus it also defines $\overline S$ and
identifies its graph with $\overline{\Gamma(S)}$
([[def-unbounded-linear-operator-domain-and-graph]],
[[def-densely-defined-closed-and-closable-operator]]).

[F5] If $T$ is a closed densely defined antilinear operator and
$A=\widetilde T$, then $T^*=c_H^{-1}A^*$ and, with the operator-composition
domains,
$$T^*T=c_H^{-1}(A^*A)c_H.$$
Conjugation by $c_H$ carries positive self-adjoint operators and their
positive square roots to positive self-adjoint operators on $H$; this follows
by transporting the spectral projections in the unbounded spectral calculus
([[lem-qsmx-linear-closed-polar-decomposition]]).

## Proof

**Proof technique:** direct.

**Given:** [A1], [F1]–[F4], the operator $S$, and the cyclic-separating data for
$S_0$.

1.1 Put $C=c_H$ and $T=\overline S$. The definition of graph closure above makes $A:=\widetilde T$ a closed densely defined complex-linear operator $\overline H\to H$. By [F2], write $A=U B$, where $B=(A^*A)^{1/2}$ is positive self-adjoint with $D(B)=D(A)$ and $U$ is a partial isometry with initial space $\overline{\operatorname{ran}B}=(\ker A)^\perp$, final space $\overline{\operatorname{ran}A}$, and kernel $\ker A$. Set $J:=UC$ and $P:=C^{-1}BC$, with domain $D(P)=C^{-1}D(B)$. The composition $P$ is linear. If $E$ is the spectral measure of $B$, then $F(\Lambda):=C^{-1}E(\Lambda)C$ is a spectral measure of orthogonal projections on $H$, and its spectral integral is $P$; hence $P$ is positive self-adjoint. More explicitly, $D(T^*T)=\{x:Cx\in D(A),\ ACx\in D(A^*)\}=C^{-1}D(A^*A)$, and the adjoint convention [F1] gives $T^*T=C^{-1}A^*AC$ there. Also $D(P^2)=C^{-1}D(B^2)$ and $P^2=C^{-1}B^2C=C^{-1}A^*AC=T^*T$ on that domain; uniqueness of the positive self-adjoint square root gives $P=(T^*T)^{1/2}$. For $x\in D(T)$, $JPx=UCC^{-1}BCx=UBCx=ACx=Tx$, so $T=JP$. The operator $J$ is antilinear, vanishes on $\ker T$, and is isometric on $(\ker T)^\perp$, since $C$ maps $\ker T$ onto $\ker A$ and preserves orthogonality. Its final space is $\overline{\operatorname{ran}T}$. If $T$ is injective and has dense range, then $A$ is injective with dense range, so $U$ is unitary by [F2] and $J=UC$ is antiunitary. [A1, F1, F2, F5, construct, algebra]

1.2 For $x,y\in M$, if $x\Omega=y\Omega$, then $(x-y)\Omega=0$; separatingness of $\Omega$ for $M$ forces $x=y$. Thus the rule $S_0(x\Omega)=x^*\Omega$ is well defined. It is antilinear because $(a x+b y)^*=\overline a\,x^* +\overline b\,y^*$, and its domain is dense because $\Omega$ is cyclic for $M$. [given, F3, algebra]

2.1 Let $u_n\in D(\widetilde S_0)$ satisfy $u_n\to0$ in $\overline H$ and $\widetilde S_0u_n\to\eta$ in $H$. Write $u_n=C(x_n\Omega)$ with $x_n\in M$; then $x_n\Omega\to0$ and $x_n^*\Omega=S_0(x_n\Omega)=\widetilde S_0u_n\to\eta$. For every $y'\in M'$, the linear-first adjoint identity and commutation give $$\langle\eta,y'\Omega\rangle =\lim_n\langle x_n^*\Omega,y'\Omega\rangle =\lim_n\langle y'^*\Omega,x_n\Omega\rangle=0.$$ Since $\Omega$ is separating for $M$, [F3] makes it cyclic for $M'$, so $M'\Omega$ is dense and $\eta=0$. Thus the graph closure of the linear operator $\widetilde S_0$ has zero vertical fiber: because $\overline H\oplus H$ is a metric space, every point of that closure is the limit of a sequence of graph points, and the argument just given excludes a nonzero limit over $0$. This closed linear subspace is therefore the graph of a closed linear extension of $\widetilde S_0$. By [F4], $\widetilde S_0$ is closable, and the local convention above proves that $S_0$ is closable with graph closure defined there. [given, F3, F4, step 1.2, algebra]

3.1 Step 1.1 proves the polar decomposition for the closure of every densely-defined closable antilinear operator, and steps 1.2–2.1 prove the Tomita operator clause with its stated cyclic-separating hypotheses. The Choice assumption is inherited through the spectral theorem used in [F2]. [step 1.1, step 1.2, step 2.1] ∎
