---
id: ex-qsmx-nonfaithful-gns-vector
kind: example
title: Defining and Hilbert–Schmidt representations of M_n
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
physical_scope: null
deps:
  - def-qsmx-von-neumann-algebra
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-space-of-bounded-linear-operators
  - def-bounded-linear-operator
  - def-operator-norm
  - def-hilbert-schmidt-operator
  - lem-qsm-matrix-state-calculus
  - def-trace-of-an-endomorphism
  - thm-hilbert-adjoint-properties
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-axiom-of-choice
dependency_roles:
  def-qsmx-von-neumann-algebra: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-space-of-bounded-linear-operators: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-schmidt-operator: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
  thm-hilbert-adjoint-properties: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Edward Witten, Notes on Some Entanglement Properties of Quantum Field Theory"
      url: "https://arxiv.org/pdf/1803.04993"
      locator: "§3.1, printed pp. 18–20 (PDF pp. 19–21), and §4.1, printed pp. 32–34 (PDF pp. 32–34), cyclic-separating and finite-dimensional modular setup"
    - title: "F. Hiai, Concise lectures on selected topics of von Neumann algebras"
      url: "https://arxiv.org/pdf/2004.02383"
      locator: "§1.1–1.3 and §2.1, PDF pp. 3–4 and 10–11, cyclic-separating and predual conventions; §1 overview standard-form paragraph, PDF p. 9, left multiplication on L2(M,τ)"
---

## Statement

Assume the Axiom of Choice. Let $n>1$, let $H=\mathbb C^n$ with its standard
inner product linear in the first argument, and let $M=\mathcal B(H)=M_n(\mathbb
C)$ act on $H$ in its defining representation. Every nonzero vector in $H$ is
cyclic for $M$, but no vector in $H$ is separating for $M$.

Now let $\rho\in M$ be a faithful density matrix, meaning $\rho=\rho^*$,
$\langle\rho v,v\rangle>0$ for every nonzero $v\in H$, and
$\operatorname{Tr}(\rho)=1$. Let $K=M_n(\mathbb C)$ with the
Hilbert–Schmidt inner product
$$\langle X,Y\rangle_2:=\operatorname{Tr}(Y^*X),$$
and represent $M$ on $K$ by left multiplication $L_aX:=aX$. Then
$\{L_a:a\in M\}$ is a concrete von Neumann algebra on $K$, and
$\Omega:=\rho^{1/2}$ is a unit cyclic and separating vector for this
representation. Its vector functional is
$$\langle L_a\Omega,\Omega\rangle_2=\operatorname{Tr}(\rho a)\qquad(a\in M).$$

## Statement references

[[def-qsmx-von-neumann-algebra]]

[[lem-qsm-matrix-state-calculus]]

[[def-hilbert-schmidt-operator]]

## Facts & Assumptions

**Given:** Choice, $n>1$, $H=\mathbb C^n$, $M=M_n(\mathbb C)$, a faithful
density matrix $\rho$, and the finite matrix and Hilbert-space conventions.

[A1] The Axiom of Choice is the declared hypothesis for the concrete
von Neumann algebra interface
([[def-axiom-of-choice]], [[def-qsmx-von-neumann-algebra]]).

[F1] The inner product is linear in its first argument, and Hilbert adjoints
satisfy $\langle A\xi,\eta\rangle=\langle\xi,A^*\eta\rangle$
([[def-real-and-complex-inner-product-space]],
[[thm-hilbert-adjoint-properties]]).

[F2] Finite Hermitian matrices have orthonormal eigenbases; positive square
roots and their inverses exist for positive-definite matrices, and finite
matrix trace is basis-independent and cyclic
([[lem-qsm-matrix-state-calculus]],
[[def-trace-of-an-endomorphism]]).

[F3] Relative to the standard orthonormal basis of $\mathbb C^n$, every
$n\times n$ matrix is Hilbert–Schmidt, with squared Hilbert–Schmidt norm
$\sum_j\|Xe_j\|^2=\operatorname{Tr}(X^*X)$
([[def-hilbert-schmidt-operator]], [[def-hilbert-space]]).

[F4] A concrete von Neumann algebra is a unital star subalgebra equal to its
double commutant; cyclic means dense orbit and separating means trivial
operator kernel on the vector
([[def-qsmx-von-neumann-algebra]]).

[F5] $\mathcal B(H)$ denotes bounded linear operators with the operator norm
([[def-space-of-bounded-linear-operators]], [[def-bounded-linear-operator]],
[[def-operator-norm]]).

[F6] Finite scalar sums satisfy Cauchy–Schwarz
([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

**Proof technique:** direct finite-dimensional construction.

**Given:** [A1], [F1]–[F6], and the matrices in the Statement.

1.1 Let $(e_j)_{j=1}^n$ be the standard orthonormal basis. If $T\in M'$, then commuting with each coordinate projection $P_j$ forces $Te_j=\lambda_j e_j$. Commuting with each matrix unit $E_{ij}$ gives $\lambda_i=\lambda_j$, hence $T=\lambda I$. Conversely scalar matrices commute with every element of $M$. Thus $M'=\mathbb C I$ and $M''=(\mathbb C I)'=\mathcal B(H)=M$, so $M$ is concrete. [A1, F4, F5, given, algebra]

1.2 Fix $\xi\ne0$. For any $\eta\in H$, define $a_\eta z:=\langle z,\xi\rangle\eta/\|\xi\|^2$. This is a linear matrix operator and $a_\eta\xi=\eta$, so $M\xi=H$ and $\xi$ is cyclic. If $\xi\ne0$, the orthogonal projection onto $\xi^\perp$ is nonzero since $n>1$, and it annihilates $\xi$. If $\xi=0$, the identity is nonzero and annihilates $\xi$. Hence no vector is separating for $M$. [F1, F4, given, construct]

1.3 Direct matrix-unit calculation gives $\langle E_{ij},E_{kl}\rangle_2=\delta_{ik}\delta_{jl}$, so the units are an orthonormal basis of $K$. For $X=(x_{ij})$, $\|X\|_2^2=\sum_{i,j}|x_{ij}|^2$, proving positive definiteness. If $(X_m)$ is Cauchy, then each entry is Cauchy because $|x_{ij}^{(m)}-x_{ij}^{(k)}|\le\|X_m-X_k\|_2$. Their finitely many limits form a matrix $X$, and the finite sum formula gives $\|X_m-X\|_2\to0$. Thus $K$ is complete and hence a Hilbert space; [F3] makes every matrix Hilbert–Schmidt. [F2, F3, given, construct]

2.1 For $a,b\in M$, the coordinate formulas are $(aX)_{ij}=\sum_k a_{ik}x_{kj}$ and $(Xb)_{ij}=\sum_k x_{ik}b_{kj}$. Finite Cauchy–Schwarz, summed over $i,j$, gives $\|aX\|_2^2\le\bigl(\sum_{i,k}|a_{ik}|^2\bigr)\|X\|_2^2$ and $\|Xb\|_2^2\le\|X\|_2^2\bigl(\sum_{k,j}|b_{kj}|^2\bigr)$. Thus $L_a,R_b\in\mathcal B(K)$ by [F5] and [F6]. Also $L_aL_b=L_{ab}$, $L_I=I_K$, and $\langle L_aX,Y\rangle_2=\operatorname{Tr}(Y^*aX)=\langle X,L_{a^*}Y\rangle_2$, so $L_a^*=L_{a^*}$. Since $L_aI=a$, the map $a\mapsto L_a$ is injective. If $S\in\{L_a:a\in M\}'$ and $b=S(I)$, then every $X=L_X(I)$ satisfies $S(X)=S(L_XI)=L_XS(I)=Xb$; hence $S=R_b$. Conversely every right multiplication commutes with every left multiplication. If $T\in\{R_b:b\in M\}'$ and $a=T(I)$, then every $X=R_X(I)$ satisfies $T(X)=R_XT(I)=aX$, so $T=L_a$; the converse commutation also holds. Therefore $\{L_a:a\in M\}''=\{L_a:a\in M\}$, proving that the left representation is concrete. [A1, F1, F4, F5, F6, step 1.3, given, algebra]

3.1 By [F2], $\rho^{1/2}$ is invertible and $\|\Omega\|_2^2=\operatorname{Tr}(\rho)=1$. For every $X\in K$, $a=X\rho^{-1/2}$ satisfies $L_a\Omega=X$, so $M\Omega=K$ and $\Omega$ is cyclic. If $L_a\Omega=0$, then $a\rho^{1/2}=0$; right multiplication by $\rho^{-1/2}$ gives $a=0$, so $\Omega$ is separating. Finally, $\langle L_a\Omega,\Omega\rangle_2=\operatorname{Tr}(\rho^{1/2}a\rho^{1/2})=\operatorname{Tr}(\rho a)$ by cyclicity of finite matrix trace [F2]. [F2, F4, step 1.3, step 2.1, algebra]

4.1 Steps 1.1–1.2 establish the defining-representation assertions; steps 1.3, 2.1, and 3.1 construct the Hilbert–Schmidt left representation and verify its faithful cyclic-separating vector. The two representations act on different Hilbert spaces. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1] ∎
