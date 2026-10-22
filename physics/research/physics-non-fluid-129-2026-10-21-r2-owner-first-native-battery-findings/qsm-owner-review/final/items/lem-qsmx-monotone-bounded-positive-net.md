---
id: lem-qsmx-monotone-bounded-positive-net
kind: lemma
title: Bounded increasing positive nets have strong suprema
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
  - thm-riesz-representation-for-hilbert-space
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-axiom-of-choice
dependency_roles:
  def-qsmx-von-neumann-algebra: mathematical-premise
  def-von-neumann-algebra-and-commutant: mathematical-premise
  def-strong-and-weak-operator-topologies: mathematical-premise
  thm-riesz-representation-for-hilbert-space: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "Part I, §I.3.2.5, PDF p. 16"
    - title: "F. Hiai, Concise lectures on selected topics of von Neumann algebras"
      url: "https://arxiv.org/pdf/2004.02383"
      locator: "§1.1, PDF p. 3, bounded increasing positive nets"
---

## Statement

Assume the Axiom of Choice. Let $H$ be a complex Hilbert space and
$M\subseteq\mathcal B(H)$ a concrete von Neumann algebra. Let $I$ be a
nonempty directed set, and let $(x_i)_{i\in I}$ be a net in $M$ such that each
$x_i$ is positive, $x_i\le x_j$ whenever $i\le j$, and
$\|x_i\|\le C$ for some finite $C\ge0$. Here $A\le B$ means that $A,B$ are
self-adjoint and $\langle A\xi,\xi\rangle\le\langle B\xi,\xi\rangle$ for every
$\xi\in H$. Then the net has a least upper bound $x=\sup_i x_i$ in $M_+$, and
$x_i\to x$ in the strong operator topology.

## Statement references

[[def-qsmx-von-neumann-algebra]]

[[def-strong-and-weak-operator-topologies]]

## Facts & Assumptions

**Given:** [A1], a complex Hilbert space $H$, a concrete von Neumann algebra
$M\subseteq\mathcal B(H)$, a nonempty directed set $I$, and the increasing
positive net of the Statement.

[A1] Assume Choice, the hypothesis for the weak-closure/double-commutant
interface in [[def-qsmx-von-neumann-algebra]] and
[[def-axiom-of-choice]].

[F1] $M=M''$ and commutants are weak-operator closed, so $M$ is
weak-operator closed
([[def-qsmx-von-neumann-algebra]],
[[def-von-neumann-algebra-and-commutant]]).

[F2] Weak-operator convergence is convergence of every matrix coefficient
([[def-strong-and-weak-operator-topologies]]).

[F3] A bounded sesquilinear form on $H$ is represented by a unique bounded
operator, by applying Riesz representation to one argument
([[thm-riesz-representation-for-hilbert-space]]).

[F4] The complex inner product is linear in the first argument, and
Cauchy–Schwarz bounds it by the product of norms
([[def-real-and-complex-inner-product-space]],
[[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

**Proof technique:** direct.

**Given:** [A1], [F1]–[F4] and the net in the Statement.

1.1 For $\xi\in H$, the real numbers
$q_i(\xi):=\langle x_i\xi,\xi\rangle$ increase and satisfy
$0\le q_i(\xi)\le C\|\xi\|^2$. Define
$q(\xi):=\sup_{i\in I}q_i(\xi)$. For each $i$, the complex polarization
identity gives
$$\langle x_i\xi,\eta\rangle =\frac14\sum_{k=0}^{3}i^k q_i(\xi+i^k\eta).$$
Each term on the right converges as $i$ increases, so the left-hand side
converges for every $\xi,\eta$. Let $b(\xi,\eta)$ be its limit. The forms
$\langle x_i\xi,\eta\rangle$ are sesquilinear and uniformly bounded by
$C\|\xi\|\|\eta\|$, so their pointwise limit $b$ is sesquilinear with the
same bound. For fixed $\xi$, Riesz representation applied to
$\eta\mapsto\overline{b(\xi,\eta)}$ gives a unique vector $x\xi$ with
$b(\xi,\eta)=\langle x\xi,\eta\rangle$. Sesquilinearity and uniqueness
make $\xi\mapsto x\xi$ linear, and the bound gives $\|x\xi\|\le C\|\xi\|$;
thus $x\in\mathcal B(H)$ and $\|x\|\le C$. Since each $x_i$ is self-adjoint,
$b(\xi,\eta)=\overline{b(\eta,\xi)}$, hence
$\langle x\xi,\eta\rangle=\langle\xi,x\eta\rangle$ and $x=x^*$. Also
$\langle x\xi,\xi\rangle=q(\xi)\ge0$, so $x$ is positive. By [F2],
$x_i\to x$ weakly. Since $M$ is weakly closed by [F1], $x\in M$.
[A1, F1, F2, F3, F4, given, construct]

2.1 For every $\xi$, $q_i(\xi)\le q(\xi)=\langle x\xi,\xi\rangle$, so
$x_i\le x$. If $y\in M_+$ is any other upper bound, then
$q_i(\xi)\le\langle y\xi,\xi\rangle$ for every $i,\xi$; taking the supremum
over $i$ gives $\langle x\xi,\xi\rangle\le\langle y\xi,\xi\rangle$ for every
$\xi$, hence $x\le y$. Thus $x=\sup_i x_i$ in $M_+$. [step 1.1, given]

3.1 Fix $\xi\in H$ and put $D_i=x-x_i$. Then $0\le D_i\le x\le CI$ and
$\langle D_i\xi,\xi\rangle=q(\xi)-q_i(\xi)\to0$. Positivity gives the
Cauchy–Schwarz inequality for the form
$(\alpha,\beta)\mapsto\langle D_i\alpha,\beta\rangle$: applying positivity to
$\xi+z\eta$ for arbitrary $z\in\mathbb C$ yields the nonnegative quantity
$$u+2\operatorname{Re}(\overline z a)+|z|^2v,$$
where $u=\langle D_i\xi,\xi\rangle$, $a=\langle D_i\xi,\eta\rangle$,
and $v=\langle D_i\eta,\eta\rangle$. If $v>0$, taking $z=-a/v$ gives
$$|a|^2\le uv.$$
If $v=0$ and $a\ne0$, taking $z=-t a$ for sufficiently large real $t>0$
makes the quantity negative; hence $a=0$ and the same inequality holds.
Therefore
$$|\langle D_i\xi,\eta\rangle|^2 \le\langle D_i\xi,\xi\rangle\langle D_i\eta,\eta\rangle \le C\|\eta\|^2\langle D_i\xi,\xi\rangle.$$
Taking the supremum over unit $\eta$ gives
$\|D_i\xi\|^2\le C\langle D_i\xi,\xi\rangle\to0$. Therefore
$\|(x_i-x)\xi\|\to0$ for every $\xi$, which is strong-operator convergence.
[F4, step 1.1, step 2.1, algebra] ∎
