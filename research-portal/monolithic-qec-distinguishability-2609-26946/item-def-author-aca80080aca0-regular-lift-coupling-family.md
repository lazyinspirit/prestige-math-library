---
title: An affine family of lifts and couplings
status: published
research_item: def-author-aca80080aca0-regular-lift-coupling-family
dependency_level: 2
---

## Prerequisites

- [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)
- [def-qec-prereq-diagonal-lift-phase-data](item-def-qec-prereq-diagonal-lift-phase-data)
- [math:cor-inner-product-induces-a-norm](https://alphabetamath.cc/item/cor-inner-product-induces-a-norm)
- [math:cor-linear-maps-with-finite-dimensional-domain-are-bounded](https://alphabetamath.cc/item/cor-linear-maps-with-finite-dimensional-domain-are-bounded)
- [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)
- [math:lem-operator-norm-is-a-norm](https://alphabetamath.cc/item/lem-operator-norm-is-a-norm)


## Definition

Fix a finite-dimensional complex inner-product space with a specified orthonormal basis, a real number $s_0>0$, and finitely many indices $a$. Let $H_0$ and $D$ be Hermitian matrices diagonal in that basis, and let $X_{a,0},Y_a,A_a,B_a$ be arbitrary matrices of the same size. For $s\in[-s_0,s_0]$, define $H(s)=H_0+sD$, $X_a(s)=X_{a,0}+sY_a$, and $L_a(s)=A_a+sB_a$. Call this an affine lift, coupling, and jump-operator family. Here the $X_a$ are candidate system coupling matrices and the $L_a$ are candidate jump matrices; the definition does not assert a microscopic relation between them or that either family describes a physical device.

For a matrix $M$, write $\|M\|$ for its operator norm. This family is regularity-controlled in the explicit sense that $\|X_a(s)-X_a(t)\|\leq |s-t|\|Y_a\|$ and $\|L_a(s)-L_a(t)\|\leq |s-t|\|B_a\|$ throughout the interval. Its directed transition energy from basis state $x$ to basis state $y$ is the source eigenvalue of $H(s)$ minus the destination eigenvalue.

## Facts & Assumptions

[F1] The finite operator conventions specify matrices, adjoints and orthonormal bases on a finite-dimensional complex inner-product space. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F2] For a diagonal lift, the change in directed transition energy is the lift eigenvalue at the source minus that at the destination. [def-qec-prereq-diagonal-lift-phase-data](item-def-qec-prereq-diagonal-lift-phase-data)

[F3] The inner-product length $\|v\|=\sqrt{\langle v,v\rangle}$ is a norm on a real or complex inner-product space. [math:cor-inner-product-induces-a-norm](https://alphabetamath.cc/item/cor-inner-product-induces-a-norm)

[F4] Every linear map from a normed space with a specified finite ordered basis to a normed space over the same scalar field is bounded. [math:cor-linear-maps-with-finite-dimensional-domain-are-bounded](https://alphabetamath.cc/item/cor-linear-maps-with-finite-dimensional-domain-are-bounded)

[F5] For a bounded linear map $M$ between normed spaces, its operator norm is the finite number $\|M\|=\sup\{\|Mv\|:\|v\|\leq1\}$. On the space of bounded linear maps it is a norm, so $\|\lambda M\|=|\lambda|\|M\|$. Here the vector norm is the inner-product norm of [F3]. [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm) [math:lem-operator-norm-is-a-norm](https://alphabetamath.cc/item/lem-operator-norm-is-a-norm)

## Justification

**Given:** The matrices and interval in the definition.

**Goal:** Establish that the family and its stated regularity and transition energies are well defined.

1.1 Each displayed family is a finite matrix sum for every real $s$. Since $H_0$ and $D$ are Hermitian and diagonal in the same basis, $H(s)$ is Hermitian and diagonal there. By [F1], every matrix here represents a linear map on the specified finite-dimensional complex inner-product space with its specified finite ordered orthonormal basis. By [F3] this is a normed space, so [F4] applies to each such map with this space as both domain and codomain. Thus every fixed matrix and every displayed family member is bounded and has finite operator norm by [F5]. [F1, F3, F4, F5, algebra]

2.1 Subtraction gives $X_a(s)-X_a(t)=(s-t)Y_a$ and $L_a(s)-L_a(t)=(s-t)B_a$. Homogeneity of the operator norm in [F5] yields both displayed bounds. If $D$ has diagonal entries $d_x$, [F2] gives the transition-energy change $s(d_x-d_y)$ relative to $H_0$. Thus all stated data and bounds are well defined; no relation between the two matrix families has been inferred. [F2, F5, step 1.1, algebra] ∎
