---
title: QEC matrix as an error-vector Gram operator
status: draft
research_item: lem-qec-prereq-qec-gram-factorization
dependency_level: 1
---

## Prerequisites

- [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)
- [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)
- [math:def-gram-matrix-and-gram-determinant](https://alphabetamath.cc/item/def-gram-matrix-and-gram-determinant)
- [math:def-qc-first-factor-partial-trace](https://alphabetamath.cc/item/def-qc-first-factor-partial-trace)
- [math:def-linear-isometry-and-orthogonal-or-unitary-operator](https://alphabetamath.cc/item/def-linear-isometry-and-orthogonal-or-unitary-operator)


## Statement

Let $H_L,H_P,H_O$ be nonzero finite-dimensional complex coordinate spaces with their specified orthonormal bases, and let $V:H_L\to H_P$ be an isometry. Write $|\bar\mu\rangle=V|\mu\rangle$ for the images of the logical basis vectors. Let $E_l:H_P\to H_O$ be a finite nonempty family of linear maps, and let $H_E$ be a coordinate space with orthonormal basis $|l\rangle$ indexed by that family. Define the linear map $A:H_L\otimes H_E\to H_O$ by $A|\mu,l\rangle=E_l|\bar\mu\rangle$, where $|\mu,l\rangle=|\mu\rangle\otimes|l\rangle$. Then $M=A^\dagger A$ has entries $M_{[\mu,l],[\nu,k]}=\langle\bar\mu|E_l^\dagger E_k|\bar\nu\rangle$ and is positive semidefinite, meaning $x^\dagger Mx\geq 0$ for every $x\in H_L\otimes H_E$.

For $v_{\mu,l}=E_l|\bar\mu\rangle$, the library's linear-first Gram matrix satisfies $G_{[\mu,l],[\nu,k]}=M_{[\nu,k],[\mu,l]}$. The partial trace over the first, logical factor satisfies $(\operatorname{Tr}_L M)_{l,k}=\sum_\mu M_{[\mu,l],[\mu,k]}$, retaining the error indices.

## Facts & Assumptions

[F1] The specified coordinate conventions identify adjoints with conjugate transposes, define $\langle u|B|v\rangle=u^\dagger Bv$, and use the linear-first inner product $\langle x,y\rangle_{\rm root}=y^\dagger x$. Ordered tensor registers use the product basis in the displayed factor order. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F2] An isometric code is specified by a linear isometry $V$ from the logical space into the physical space. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel) A linear isometry is a linear map $V$ satisfying $\|Vx\|=\|x\|$ for every vector $x$, with the induced inner-product norms. [math:def-linear-isometry-and-orthogonal-or-unitary-operator](https://alphabetamath.cc/item/def-linear-isometry-and-orthogonal-or-unitary-operator)

[F3] For an ordered finite list of vectors, the library Gram matrix has entries $G_{ij}=\langle v_i,v_j\rangle_{\rm root}$. [math:def-gram-matrix-and-gram-determinant](https://alphabetamath.cc/item/def-gram-matrix-and-gram-determinant)

[F4] In ordered orthonormal product bases, the partial trace over the first factor has entries $(\operatorname{Tr}_L X)_{l,k}=\sum_\mu X_{[\mu,l],[\mu,k]}$. [math:def-qc-first-factor-partial-trace](https://alphabetamath.cc/item/def-qc-first-factor-partial-trace)

## Proof

**Given:** The spaces, isometry, maps, product basis and $A$ in the statement.

**Goal:** Establish the entries and positivity of $M$, its orientation relative to $G$, and the displayed partial-trace formula.

1.1 The prescribed values of $A$ on the product basis determine a linear map. Using conjugate transpose and matrix multiplication, its $([\mu,l],[\nu,k])$ entry in $A^\dagger A$ is $(E_l|\bar\mu\rangle)^\dagger(E_k|\bar\nu\rangle)=\langle\bar\mu|E_l^\dagger E_k|\bar\nu\rangle$. For every $x$, $x^\dagger Mx=(Ax)^\dagger(Ax)=\sum_j |(Ax)_j|^2\geq 0$. Thus $M$ has the claimed entries and is positive semidefinite. [given, F1, F2, algebra]

2.1 By the linear-first convention, $G_{[\mu,l],[\nu,k]}=\langle v_{\mu,l},v_{\nu,k}\rangle_{\rm root}=v_{\nu,k}^\dagger v_{\mu,l}=M_{[\nu,k],[\mu,l]}$. Applying the first-factor partial-trace definition to $M$ gives $(\operatorname{Tr}_L M)_{l,k}=\sum_\mu M_{[\mu,l],[\mu,k]}$. These are the stated Gram orientation and contraction. [F1, F3, F4, step 1.1] ∎
