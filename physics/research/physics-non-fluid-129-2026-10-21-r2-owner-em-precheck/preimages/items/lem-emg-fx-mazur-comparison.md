---
id: lem-emg-fx-mazur-comparison
kind: lemma
title: "Positive-matrix comparison identity"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-emg-fx-matrix-harmonic-problem
  - lem-qsm-matrix-state-calculus
  - thm-determinant-multiplicative
  - thm-am-gm
  - def-matrix-product-and-identity-matrix
  - thm-algebra-of-derivatives
  - def-directional-and-partial-derivatives
  - thm-heine-borel-rn
  - thm-extreme-value-metric
dependency_roles:
  def-emg-fx-matrix-harmonic-problem: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  thm-am-gm: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
proof_strategy: direct
reference: research/plan-einstein-maxwell-models-frontier-expansion-track.md#reduced-stationary-uniqueness-and-explicit-research-boundaries
sources:
  references:
    - title: "P. T. Chruściel, J. Lopes Costa and M. Heusler, Stationary Black Holes: Uniqueness and Beyond, Living Reviews in Relativity 15 (2012), article 7, arXiv:1205.6112v1"
      url: https://arxiv.org/pdf/1205.6112
      locator: "Section 7.1, PDF pp. 36–37, equations (7.1)–(7.3). The source's curved-base sigma-model identity motivates the formula; the bounded Euclidean theorem here is derived locally."
    - title: "Markus Heusler, Black Hole Uniqueness Theorems, Cambridge Lecture Notes in Physics 6, Cambridge University Press (1996)"
      url: https://ru.djvu.online/file/ooXRsSuiVzYAO
      locator: "Chapter 10, §10.2, Proposition 10.3 and equations (10.10)–(10.12), printed pp. 171–172; independent matrix-identity derivation, with the spacetime specialization kept separate."
    - title: "Pawel O. Mazur, Black Hole Uniqueness Theorems, arXiv:hep-th/0101012v1 (2000; based on the 1986 GR11 plenary lecture)"
      url: https://arxiv.org/pdf/hep-th/0101012
      locator: "Section V, PDF pp. 18–21, equations (35)–(38): the global divergence identity for symmetric-space sigma models and its electrovac application; this is contextual support, not a proof supplier."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
---

## Statement

Let $d,n\ge1$ and let $\Omega\subseteq\mathbb R^d$ be the nonempty bounded connected smooth domain of [[def-emg-fx-matrix-harmonic-problem]]. Let $\Phi_0,\Phi_1\in C^\infty(\overline\Omega,\mathcal P_n)$ satisfy $\operatorname{div}J_i=0$, where $J_i:=\Phi_i^{-1}d\Phi_i=\sum_{a=1}^dJ_{i,a}\,dx^a$ and $\operatorname{div}J_i:=\sum_a\partial_aJ_{i,a}$. Define

$$\Psi:=\Phi_1\Phi_0^{-1}-I_n,\qquad \Delta J_a:=J_{1,a}-J_{0,a}.$$

Then, pointwise on $\Omega$,

$$\Delta\operatorname{tr}\Psi=\sum_{a=1}^d\operatorname{tr}\!\left((\Delta J_a)^\dagger\Phi_1\Delta J_a\Phi_0^{-1}\right)\ge0,$$

where $\Delta=\sum_a\partial_a^2$ is the Euclidean Laplacian. If $\Phi_1=\Phi_0$ on the entire boundary $\partial\Omega$, then $\Phi_1=\Phi_0$ on $\overline\Omega$. This is an abstract bounded-domain uniqueness result for the stated positive matrix equation.

## Statement references

[[def-emg-fx-matrix-harmonic-problem]]

## Facts & Assumptions

**Given:** The domain, matrix fields, regularity, determinant and positivity conditions, and matrix equations in the Statement.

[F1] [[def-emg-fx-matrix-harmonic-problem]]: $\mathcal P_n$ consists of positive definite Hermitian complex $n\times n$ matrices with determinant one; $J=\Phi^{-1}d\Phi$ is differentiated entrywise and its Euclidean divergence is $\sum_a\partial_aJ_a$.

[F2] [[lem-qsm-matrix-state-calculus]]: every Hermitian matrix on a finite-dimensional complex inner-product space has an orthonormal eigenbasis with real eigenvalues; positive matrices have positive square roots; and the finite trace is basis-independent and cyclic.

[F3] [[thm-determinant-multiplicative]]: for square matrices over a commutative field, $\det(AB)=\det(A)\det(B)$.

[F4] [[thm-am-gm]]: for $n\ge1$ nonnegative reals $\lambda_0,\ldots,\lambda_{n-1}$, $\prod_j\lambda_j\le(\frac1n\sum_j\lambda_j)^n$, with equality exactly when all entries are equal.

[F5] [[def-matrix-product-and-identity-matrix]] and [[thm-algebra-of-derivatives]]: matrix products are computed by finite entry sums, and derivatives of their entries obey the ordinary product rule. [[def-directional-and-partial-derivatives]] identifies $\partial_a$ with differentiation along the $a$th coordinate line.

[F6] [[thm-heine-borel-rn]] and [[thm-extreme-value-metric]]: the closed bounded set $\overline\Omega\subset\mathbb R^d$ is compact, and every continuous real-valued function on it attains a maximum.

## Proof

1.1 Put $u:=\operatorname{tr}\Psi$. The inverse formula in [F1] makes each $\Phi_i^{-1}$ smooth on $\overline\Omega$, so $u$ is smooth there. Differentiating $\Phi_i\Phi_i^{-1}=I_n$ entrywise and using the product rule gives $\partial_a\Phi_i^{-1}=-\Phi_i^{-1}(\partial_a\Phi_i)\Phi_i^{-1}=-J_{i,a}\Phi_i^{-1}$. Since $\partial_a\Phi_i=\Phi_iJ_{i,a}$, it follows that $\partial_a\Psi=\Phi_1\Delta J_a\Phi_0^{-1}$. The two divergence equations imply $\sum_a\partial_a\Delta J_a=0$. [given, F1, F5, algebra]

1.2 By [F2], each positive definite Hermitian $\Phi_i$ has a positive Hermitian square root $\Phi_i^{1/2}$. Its eigenvalues are the positive square roots of the positive eigenvalues of $\Phi_i$, so $\Phi_i^{1/2}$ is invertible; define $\Phi_i^{-1/2}:=(\Phi_i^{1/2})^{-1}$. Differentiate the identity in step 1.1, sum over $a$, take traces, and discard the term $\operatorname{tr}(\Phi_1(\sum_a\partial_a\Delta J_a)\Phi_0^{-1})=0$. This gives $\Delta u=\sum_a\operatorname{tr}\bigl(\Phi_1(J_{1,a}\Delta J_a-\Delta J_aJ_{0,a})\Phi_0^{-1}\bigr)$. Because $\Phi_i$ and $\partial_a\Phi_i$ are Hermitian, $J_{i,a}^\dagger=\Phi_iJ_{i,a}\Phi_i^{-1}$. Substituting this relation and cyclically permuting factors inside the trace rewrites each summand as $\operatorname{tr}((\Delta J_a)^\dagger\Phi_1\Delta J_a\Phi_0^{-1})$. With $M_a:=\Phi_1^{1/2}\Delta J_a\Phi_0^{-1/2}$, this trace equals $\operatorname{tr}(M_a^\dagger M_a)=\sum_{i,j}|(M_a)_{ij}|^2\ge0$. Hence $\Delta u\ge0$. [given, F1, F2, F5, step 1.1, algebra]

1.3 The Hermitian matrix $C:=\Phi_0^{-1/2}\Phi_1\Phi_0^{-1/2}$ is positive definite: for $v\ne0$, $v^\dagger Cv=(\Phi_0^{-1/2}v)^\dagger\Phi_1(\Phi_0^{-1/2}v)>0$. Let $\mu_0,\ldots,\mu_{n-1}>0$ be the eigenvalues of $\Phi_0$. In an orthonormal eigenbasis, determinant multiplicativity and $\det(U^\dagger U)=\det I_n=1$ for the unitary change-of-basis matrix $U$ give $\det\Phi_0=\prod_j\mu_j=1$; hence $\det(\Phi_0^{-1/2})=\prod_j\mu_j^{-1/2}=1$. Therefore determinant multiplicativity gives $\det C=\det(\Phi_0^{-1/2})^2\det\Phi_1=1$. For the positive eigenvalues $\lambda_0,\ldots,\lambda_{n-1}$ of $C$, orthonormal diagonalization gives $\det C=\prod_j\lambda_j$ and $\operatorname{tr}C=\sum_j\lambda_j$. Cyclicity of trace gives $\operatorname{tr}C=\operatorname{tr}(\Phi_1\Phi_0^{-1})$, and [F4] gives $1=(\prod_j\lambda_j)^{1/n}\le\frac1n\sum_j\lambda_j=\operatorname{tr}C/n$, so $u=\operatorname{tr}C-n\ge0$. Equality $u=0$ forces equality in AM-GM, hence all $\lambda_j=1$ and $C=I_n$; multiplying by $\Phi_0^{1/2}$ on both sides gives $\Phi_1=\Phi_0$. Therefore $u=0$ holds exactly when $\Phi_1=\Phi_0$. [given, F1, F2, F3, F4, algebra]

2.1 Suppose $\Phi_1=\Phi_0$ on $\partial\Omega$, so $u=0$ there. Since $\Omega$ is nonempty and bounded, $\overline\Omega$ is nonempty, closed and bounded, hence compact by [F6]; choose $R>0$ with $\overline\Omega\subseteq\{x:|x|\le R\}$. For each $\epsilon>0$, the continuous function $u_\epsilon(x):=u(x)+\epsilon|x|^2$ attains a maximum on $\overline\Omega$ by [F6]. Since $\Delta u_\epsilon=\Delta u+2d\epsilon>0$, this maximum cannot occur at an interior point: at any interior local maximum $x$, each symmetric second difference $[u_\epsilon(x+he_a)+u_\epsilon(x-he_a)-2u_\epsilon(x)]/h^2$ is nonpositive for sufficiently small $h$, so taking $h\to0$ gives $\partial_a^2u_\epsilon(x)\le0$ for every $a$ and hence $\Delta u_\epsilon(x)\le0$, a contradiction. The maximum is therefore on the boundary, where $u_\epsilon\le\epsilon R^2$. Thus $u(x)\le\epsilon R^2$ for every $x\in\Omega$; letting $\epsilon\downarrow0$ gives $u\le0$. [given, F6, step 1.2, algebra]

2.2 Step 1.3 gives $u\ge0$, whereas step 2.1 gives $u\le0$. Hence $u=0$ on $\Omega$ and, by continuity, on $\overline\Omega$. The equality case in step 1.3 then yields $\Phi_1=\Phi_0$ throughout $\overline\Omega$. [step 1.3, step 2.1, algebra] ∎
