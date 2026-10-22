---
id: lem-qsmx-bicommutant-and-commutant-cyclicity
kind: lemma
title: Strong closure and cyclic-separating duality
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
physical_scope: null
deps:
  - def-qsmx-von-neumann-algebra
  - def-von-neumann-algebra-and-commutant
  - def-strong-and-weak-operator-topologies
  - thm-double-commutant-theorem-for-concrete-von-neumann-algebras
  - def-hilbert-direct-sum-of-unitary-representations
  - def-space-of-bounded-linear-operators
  - def-bounded-linear-operator
  - def-operator-norm
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - def-hilbert-orthogonal-projection
  - thm-hilbert-adjoint-properties
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-countable-choice
dependency_roles:
  def-qsmx-von-neumann-algebra: mathematical-premise
  def-von-neumann-algebra-and-commutant: mathematical-premise
  def-strong-and-weak-operator-topologies: mathematical-premise
  thm-double-commutant-theorem-for-concrete-von-neumann-algebras: mathematical-premise
  def-hilbert-direct-sum-of-unitary-representations: mathematical-premise
  def-space-of-bounded-linear-operators: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  thm-orthogonal-decomposition-by-a-closed-subspace: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  thm-hilbert-adjoint-properties: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  def-countable-choice: mathematical-premise
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
      locator: "§1.2, PDF p. 3, closure and bicommutant equivalence; §2.1, PDF pp. 10–11, cyclic and separating vectors"
    - title: "Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "Part I, §§I.2.5.3–I.2.5.4 and I.9.1.1–I.9.1.2, PDF pp. 17 and 56–57"
---

## Statement

Assume the Axiom of Choice. Let $H$ be a complex Hilbert space and let
$R\subseteq\mathcal B(H)$ be a unital star subalgebra. Its strong-operator
closure is $R''$. If $M\subseteq\mathcal B(H)$ is a concrete von Neumann
algebra and $\Omega\in H$, then $\Omega$ is cyclic for $M$ exactly when it is
separating for $M'$.

## Statement references

[[def-qsmx-von-neumann-algebra]]

[[thm-double-commutant-theorem-for-concrete-von-neumann-algebras]]

[[def-strong-and-weak-operator-topologies]]

## Facts & Assumptions

**Given:** Choice, a complex Hilbert space $H$, a unital star subalgebra
$R\subseteq\mathcal B(H)$, and a concrete von Neumann algebra
$M\subseteq\mathcal B(H)$.

[A1] Choice implies Countable Choice, the hypothesis used for Hilbert
orthogonal projections ([[def-axiom-of-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]],
[[def-countable-choice]]).

[F1] For $S\subseteq\mathcal B(H)$, $S'$ consists of the bounded operators
commuting with every element of $S$, and $S''=(S')'$. Each commutant is
weak-operator closed ([[def-von-neumann-algebra-and-commutant]]).

[F2] Strong convergence means pointwise norm convergence on $H$; weak
convergence means convergence of every matrix coefficient. The weak operator
topology is coarser than the strong operator topology
([[def-strong-and-weak-operator-topologies]]).

[F3] The finite Hilbert direct sum $H^{\oplus n}$ has coordinate inclusions
and projections. A diagonal amplification $r^{\oplus n}$ of a bounded
operator is bounded ([[def-hilbert-direct-sum-of-unitary-representations]],
[[def-space-of-bounded-linear-operators]], [[def-bounded-linear-operator]],
[[def-operator-norm]]).

[F4] A closed subspace $C$ of a Hilbert space has an orthogonal projection
$P_C$ with range $C$ and kernel $C^\perp$
([[thm-orthogonal-decomposition-by-a-closed-subspace]],
[[def-hilbert-orthogonal-projection]]).

[F5] The adjoint satisfies
$\langle A\xi,\eta\rangle=\langle\xi,A^*\eta\rangle$
([[thm-hilbert-adjoint-properties]]).

[F6] In the chosen representation, $\Omega$ is cyclic for $M$ exactly when
$\overline{M\Omega}=H$, and separating for $M$ exactly when
$x\Omega=0$ for $x\in M$ implies $x=0$
([[def-qsmx-von-neumann-algebra]]).

[F7] If $R$ is a unital star subalgebra and $W=W^*(R)$ its weak-operator
closure, then $W''=W$ under Choice
([[def-von-neumann-algebra-and-commutant]],
[[thm-double-commutant-theorem-for-concrete-von-neumann-algebras]]).

## Proof

**Proof technique:** direct finite-amplification argument.

**Given:** [A1], [F1]–[F7], the Hilbert space and algebras in the Statement.

1.1 Fix $T\in R''$, an integer $n\ge1$, and a tuple $\xi=(\xi_1,\ldots,\xi_n)\in H^{\oplus n}$, and define $D_r=r^{\oplus n}$ for $r\in R$. Let $C=\overline{\{D_r\xi:r\in R\}}$. This is a closed linear subspace because $R$ is linear and $r\mapsto D_r\xi$ is linear. For each $r\in R$, $D_rC\subseteq C$: it holds on the orbit because $D_rD_s\xi=D_{rs}\xi$, and extends to its closure because $D_r$ is bounded. Applying this to $r^*\in R$ gives $D_r^*C\subseteq C$. If $\eta\in C^\perp$ and $\zeta\in C$, then [F5] gives $\langle D_r\eta,\zeta\rangle= \langle\eta,D_r^*\zeta\rangle=0$, so $D_rC^\perp\subseteq C^\perp$. The orthogonal projection $P_C$ from [F4] therefore commutes with every $D_r$. [A1, F3, F4, F5, given, construct]

1.2 Suppose $\Omega$ is cyclic for $M$, and let $y\in M'$ satisfy $y\Omega=0$. For every $x\in M$, commutation gives $yx\Omega=xy\Omega=0$. Thus $y$ vanishes on the dense subspace $M\Omega$ and, being bounded, is zero on $H$. This proves that $\Omega$ is separating for $M'$. [F1, F6, given]

1.3 Suppose $\Omega$ is separating for $M'$. Let $C=\overline{M\Omega}$ and let $P_C$ be its orthogonal projection from [F4]. For $a\in M$, both $a$ and $a^*$ preserve $C$, because $M$ is an algebra closed under adjoints. If $\eta\in C^\perp$ and $\xi\in C$, then [F5] gives $\langle a\eta,\xi\rangle=\langle\eta,a^*\xi\rangle=0$; hence $a$ also preserves $C^\perp$. Thus $aP_C=P_Ca$ for all $a\in M$, so $P_C\in M'$ by [F1]. Since $I\in M$, $\Omega\in C$ and $(I-P_C)\Omega=0$. Separatingness for $M'$ forces $I-P_C=0$, whence $C=H$ and $\Omega$ is cyclic for $M$. [F1, F4, F5, F6, algebra]

2.1 Write $P_C=(P_{ij})_{i,j=1}^n$ in coordinate blocks. The identity $P_CD_r=D_rP_C$ says $P_{ij}r=rP_{ij}$ for all $r\in R$, so $P_{ij}\in R'$ by [F1]. For $T\in R''$, it follows that $T$ commutes with every $P_{ij}$; thus $D_TP_C=P_CD_T$. Since $I\in R$, $\xi=D_I\xi\in C$ and $P_C\xi=\xi$. Consequently $D_T\xi=P_CD_T\xi\in C$. [F1, F3, step 1.1, given, algebra]

3.1 By the definition of $C$, for every $\varepsilon>0$ there is $r\in R$ with $\|D_T\xi-D_r\xi\|_{H^{\oplus n}}<\varepsilon$. The direct-sum norm is the square root of the sum of the squared coordinate norms, so $\|T\xi_j-r\xi_j\|<\varepsilon$ for each $j$. These are exactly the finite strong-operator neighborhood tests. The empty tuple imposes no conditions. Therefore $T\in\overline R^{\,\mathrm{SOT}}$. [F2, F3, step 2.1]

4.1 Let $W=W^*(R)=\overline R^{\,\mathrm{WOT}}$. For each $x\in R'$, the set of operators commuting with $x$ is weak-operator closed and contains $R$; therefore it contains $W$. This proves $R'\subseteq W'$, while $R\subseteq W$ gives $W'\subseteq R'$. Hence $R''=W''=W$ by [F7]. Strong convergence implies weak convergence, so $\overline R^{\,\mathrm{SOT}}\subseteq W=R''$. Step 3.1 gives the reverse inclusion, proving the strong-closure identity. [A1, F1, F2, F7, step 3.1]

5.1 Steps 1.2 and 1.3 prove both directions of cyclic-separating duality, and step 4.1 proves the strong-closure identity. [step 4.1, step 1.2, step 1.3] ∎
