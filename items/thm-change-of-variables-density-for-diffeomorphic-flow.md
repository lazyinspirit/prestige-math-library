---
id: thm-change-of-variables-density-for-diffeomorphic-flow
kind: theorem
title: "A diffeomorphic flow has the inverse-Jacobian density"
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-normalizing-flow
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-countable-choice
  - def-measure-with-density
  - def-jacobian-determinant-of-a-c-one-map
  - def-jacobian-matrix-and-gradient
  - def-determinant-of-a-square-matrix
  - cor-determinant-is-a-polynomial-in-the-matrix-entries
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-borel-sets-are-lebesgue-measurable
  - lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets
  - thm-chain-rule-for-total-derivatives
  - thm-determinant-multiplicative
aliases: []
sources:
  references:
    - title: "George Papamakarios, Eric Nalisnick, Danilo Jimenez Rezende, Shakir Mohamed, and Balaji Lakshminarayanan, Normalizing Flows for Probabilistic Modeling and Inference, arXiv:1912.02762v1"
      url: "https://arxiv.org/pdf/1912.02762v1"
    - title: "Dan Sheldon, COMPSCI 688: Probabilistic Graphical Models, Lecture 23: Normalizing Flows (annotated course notes)"
      url: "https://people.cs.umass.edu/~sheldon/teaching/cs688/lec/lec23-annotated.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $d\ge1$, let $U,V\subseteq\mathbb R^d$ be nonempty open sets, and let $T:U\to V$ be a bijection such that $T$ and $T^{-1}$ are both $C^1$. Let $p_U:U\to[0,\infty]$ be Lebesgue measurable with $\int_U p_U\,d\lambda_d=1$, and define $\mu_U(A)=\int_Ap_U\,d\lambda_d$ for Lebesgue-measurable $A\subseteq U$ and $\mu_X(B)=\mu_U(T^{-1}(B))$ for Borel $B\subseteq V$. Then

$$q(x)=p_U(T^{-1}(x))\,|\det D(T^{-1})(x)|$$

is Lebesgue measurable and satisfies $\mu_X(B)=\int_Bq\,d\lambda_d$ for every Borel $B\subseteq V$. Thus $q$ is a version of the density of the transformed measure.

Let $K\ge1$, let $U_0,\ldots,U_K$ be nonempty open subsets of $\mathbb R^d$, and let $T_j:U_{j-1}\to U_j$ be a $C^1$ diffeomorphism for $j=1,\ldots,K$. For $T=T_K\circ\cdots\circ T_1$, $u\in U_0$, and $z_0=u$, $z_j=T_j(z_{j-1})$, the log-Jacobian terms add:

$$\log|\det DT(u)|=\sum_{j=1}^K\log|\det DT_j(z_{j-1})|.$$

Equivalently, for $z_K=x\in U_K$ and $z_{j-1}=T_j^{-1}(z_j)$,

$$\log|\det DT^{-1}(x)|=\sum_{j=1}^K\log|\det DT_j^{-1}(z_j)|.$$

## Statement references

[[def-countable-choice]] — Countable Choice is the axiom used by the measurable change-of-variables supplier.

[Papamakarios et al., §2.1, PDF pp. 2–4; §2.2, PDF pp. 4–5](https://arxiv.org/pdf/1912.02762v1)

[Sheldon, COMPSCI 688 Lecture 23, PDF pp. 2–5](https://people.cs.umass.edu/~sheldon/teaching/cs688/lec/lec23-annotated.pdf)

## Facts & Assumptions

**Given:** Countable Choice, a flow $T:U\to V$, and a Lebesgue probability density $p_U$ as in the Statement.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$, asserts that every sequence of nonempty sets has a choice function. [[def-countable-choice]]

[F1] A normalizing flow is a finite composition of bijections between open equal-dimensional Euclidean domains whose maps and inverses are $C^1$; a base density $p_U$ defines $\mu_U(A)=\int_Ap_U\,d\lambda_d$, and the transformed measure is $\mu_X(B)=\mu_U(T^{-1}(B))$. [[def-normalizing-flow]]

[F2] For a nonnegative measurable function $f$, the measure with density $f$ relative to $\lambda_d$ assigns $A$ the value $\int_Af\,d\lambda_d$. [[def-measure-with-density]]

[F3] If $S:U_0\to V_0$ is a $C^1$ diffeomorphism and $f:V_0\to[0,\infty]$ is Lebesgue measurable, then under Countable Choice $\int_{V_0}f(y)\,d\lambda_d(y)=\int_{U_0}f(S(x))|\det DS(x)|\,d\lambda_d(x)$. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

[F4] Under Countable Choice, Borel sets are Lebesgue measurable, and a $C^1$ diffeomorphism maps every Lebesgue-measurable subset of its domain to a Lebesgue-measurable subset of its range. [[thm-borel-sets-are-lebesgue-measurable]], [[lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets]]

[F5] For totally differentiable maps, $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$. [[thm-chain-rule-for-total-derivatives]]

[F6] For same-sized square matrices over a commutative ring, $\det(AB)=\det(A)\det(B)$. [[thm-determinant-multiplicative]]

[F7] The Jacobian matrix is the matrix of the total derivative in standard bases, and its Jacobian determinant is the determinant of that matrix. [[def-jacobian-matrix-and-gradient]], [[def-jacobian-determinant-of-a-c-one-map]]

[F8] The determinant is the finite Leibniz polynomial in the entries of a real square matrix; in particular, $\det(I_d)=1$. [[def-determinant-of-a-square-matrix]], [[cor-determinant-is-a-polynomial-in-the-matrix-entries]]

[F9] Products of extended-real measurable functions are measurable whenever defined, including the nonnegative density and determinant factors here. [[thm-arithmetic-and-lattice-operations-preserve-measurability]]

## Proof

**Proof technique:** direct.

1.1 For every $a\in\mathbb R$, the superlevel set $E_a=\{u\in U:p_U(u)>a\}$ is Lebesgue measurable, and $\{x\in V:p_U(T^{-1}(x))>a\}=T(E_a)$ is Lebesgue measurable by [F4]. Thus $p_U\circ T^{-1}$ is measurable. The entries of $D(T^{-1})$ are continuous by the $C^1$ hypothesis, and [F8] makes its determinant continuous. Thus [F9] shows that $q$ is nonnegative measurable. [A1, F1, F4, F7, F8, F9]

1.2 For $z_0=u$ and $z_j=T_j(z_{j-1})$, repeated use of [F5] gives $DT(u)=DT_K(z_{K-1})\cdots DT_1(z_0)$. For $x=z_K$, applying the chain rule to $T^{-1}=T_1^{-1}\circ\cdots\circ T_K^{-1}$ gives $D(T^{-1})(x)=DT_1^{-1}(z_1)\cdots DT_K^{-1}(z_K)$. [given, F1, F5, F7]

2.1 Fix a Borel set $B\subseteq V$ and put $E=T^{-1}(B)$. By [F4], $E$ is Lebesgue measurable. The function $h(u)=p_U(u)\mathbf1_E(u)$ is nonnegative measurable by [F9]. Apply [F3] to $S=T^{-1}:V\to U$ and $h$ to obtain $$\mu_X(B)=\int_Ep_U(u)\,d\lambda_d(u)=\int_Vp_U(T^{-1}(x))\mathbf1_B(x)|\det D(T^{-1})(x)|\,d\lambda_d(x)=\int_Bq(x)\,d\lambda_d(x).$$ Therefore $q$ is a density version of $\mu_X$. [A1, F1, F2, F3, F4, F9, step 1.1]

3.1 By [F6], determinants of each derivative composition are the products of the stage determinants. Each factor is nonzero: differentiating $T_j^{-1}\circ T_j=\operatorname{id}$ by [F5] gives a product equal to the identity matrix, whose determinant is $1$ by [F8]. Taking absolute values and then real logarithms yields both displayed additive formulas. [F5, F6, F8, step 1.2, algebra] ∎
