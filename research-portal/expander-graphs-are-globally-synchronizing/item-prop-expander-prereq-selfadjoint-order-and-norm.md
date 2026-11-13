---
title: Self-adjoint order, norm bounds and diagonal tests
status: draft
research_item: prop-expander-prereq-selfadjoint-order-and-norm
dependency_level: 1
---

## Prerequisites

- [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)
- [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)
- [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)
- [math:def-orthogonal-projection](https://alphabetamath.cc/item/def-orthogonal-projection)


## Statement

Let $V$ be a finite set and let matrices act on $\mathbb C^V$ with the vertex inner product and induced norm of [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space). A matrix $B$ is Hermitian, or self-adjoint, when $B=B^*$, where $B^*$ is its conjugate transpose. A Hermitian matrix $B$ is positive semidefinite if $\langle f,Bf\rangle=f^*Bf\ge0$ for every $f\in\mathbb C^V$. For Hermitian matrices of the same size, write $B\preceq C$ when $C-B$ is positive semidefinite. Let $I$ be the identity matrix and let $\|B\|$ denote the induced operator norm.

For every real symmetric matrix $B$ and real $b\ge0$, $\|B\|\le b$ if and only if $-bI\preceq B\preceq bI$. If $B$ is Hermitian and $aI\preceq B\preceq bI$ for real $a,b$, then $a\le B_{xx}\le b$ for every $x\in V$. Order inequalities can be added: $B\preceq C$ and $D\preceq E$ imply $B+D\preceq C+E$. They can also be restricted to a subspace $W\subseteq\mathbb C^V$: $B\preceq C$ implies $\langle w,Bw\rangle\le\langle w,Cw\rangle$ for every $w\in W$. Equivalently, their compressions to $W$ are ordered, where the compression of $B$ is the map $w\mapsto P_WBw$ and $P_W$ is orthogonal projection onto $W$. None of these statements requires a graph to be regular.

## Facts & Assumptions

[F1] The vertex space has inner product $\langle f,g\rangle=\sum_{x\in V}\overline{f(x)}g(x)$, and conjugate transpose represents the adjoint. A self-adjoint matrix has real quadratic values in this convention ([def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)).

[F2] A normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis ([math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)).

[F3] The operator norm is zero on the zero space and otherwise is the maximum of $\|Bf\|_2$ over unit vectors $f$ ([math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)).

[F4] For a subspace $W$ of a finite-dimensional inner product space, every $z$ has a unique decomposition $z=P_Wz+r$ with $P_Wz\in W$ and $r$ orthogonal to every vector of $W$; this defines orthogonal projection ([math:def-orthogonal-projection](https://alphabetamath.cc/item/def-orthogonal-projection)). Orthogonality is unchanged by the convention transfer in [F1].

## Proof

**Given:** A finite set $V$, Hermitian matrices of the indicated sizes, and real bounds as in the statement.

**Goal:** Prove the norm-order equivalence, diagonal bounds, addition and restriction rules.

1.1 A Hermitian matrix $B$ is normal because $BB^*=B^*B$. By [F2] and the convention transfer in [F1], it has an orthonormal eigenbasis $u_1,\ldots,u_n$. Each eigenvalue $\lambda_j$ is real: $\lambda_j=\langle u_j,Bu_j\rangle$ is real by [F1]. For $f=\sum_j c_j u_j$, orthonormality gives $\langle f,Bf\rangle=\sum_j\lambda_j|c_j|^2$ and $\|Bf\|_2^2=\sum_j\lambda_j^2|c_j|^2$. Thus, when $n>0$, [F3] gives $\|B\|=\max_j|\lambda_j|$: the upper bound follows from the latter sum for unit $f$, and an eigenvector attaining the maximum gives equality. [F1, F2, F3, algebra]

1.2 For each $x\in V$, let $e_x$ be the function equal to $1$ at $x$ and $0$ elsewhere. By [F1], $\langle e_x,e_x\rangle=1$ and $\langle e_x,Be_x\rangle=B_{xx}$. Testing $B-aI$ and $bI-B$ at $e_x$ proves $a\le B_{xx}\le b$. [F1, algebra]

1.3 If $B\preceq C$ and $D\preceq E$, their defining quadratic forms are nonnegative, and their sum is the quadratic form of $(C+E)-(B+D)$; this proves addition. Restriction follows by testing the original inequality only on vectors $w\in W$. [F1, algebra]

1.4 The vertex space is finite-dimensional by [F1], so [F4] applies to every subspace $W$, with the same orthogonality in the article convention. For $z,t\in\mathbb C^V$ and scalars $\alpha,\beta$, the vector $\alpha P_Wz+\beta P_Wt$ belongs to $W$, and its difference from $\alpha z+\beta t$ is orthogonal to $W$: pairing with any $w\in W$ gives a linear combination of two zero pairings. Uniqueness in [F4] therefore gives $P_W(\alpha z+\beta t)=\alpha P_Wz+\beta P_Wt$, so $P_W$ is linear. For $w\in W$, the orthogonality of $z-P_Wz$ gives $\langle w,P_Wz\rangle=\langle w,z\rangle$. [F1, F4, algebra]

2.1 For real symmetric $B$, [F1] makes $B$ Hermitian. By step 1.1, $\|B\|\le b$ is equivalent, for $n>0$, to $-b\le\lambda_j\le b$ for all $j$. The displayed quadratic-form formula in step 1.1 shows that these inequalities imply $\langle f,(B+bI)f\rangle\ge0$ and $\langle f,(bI-B)f\rangle\ge0$ for every $f$. Conversely, testing those two forms at each $u_j$ gives $-b\le\lambda_j\le b$. Hence the two matrix-order inequalities are equivalent to the norm bound. If $V$ is empty, the norm is zero by [F3] and both quadratic-form inequalities hold on the zero space, so the equivalence also holds. [F1, F3, step 1.1, algebra]

3.1 For Hermitian $B$ and $u,v\in W$, step 1.4 and conjugate symmetry give $\langle u,P_WBv\rangle=\langle u,Bv\rangle=\langle Bu,v\rangle=\langle P_WBu,v\rangle$. Thus the linear compression $w\mapsto P_WBw$ is self-adjoint on $W$. Therefore $\langle w,P_WBw\rangle=\langle w,Bw\rangle$, and the same holds for $C$. The order of the compressions is consequently equivalent to the restricted quadratic-form inequality in step 1.3, including $W=\{0\}$. These arguments involve only matrices and the stated inner product, so no graph regularity assumption is used. This proves all assertions. [F1, step 1.3, step 1.4, algebra] ∎
