---
title: Finite GKSL evolution and the QEC channel interface
status: published
research_item: def-qec-prereq-finite-gksl-channel-interface
dependency_level: 0
---

## Prerequisites

- [physics:def-qsm-dt-gksl-definition](https://alphabetamath.cc/physics/item/def-qsm-dt-gksl-definition)
- [physics:def-qsm-dt-channel-definition](https://alphabetamath.cc/physics/item/def-qsm-dt-channel-definition)
- [physics:thm-qsm-dt-gksl-sufficient](https://alphabetamath.cc/physics/item/thm-qsm-dt-gksl-sufficient)
- [physics:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/physics/item/cor-finite-dimensional-normed-spaces-are-banach)
- [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)


## Definition

Let $d\geq1$ be an integer and $M_d(\mathbb C)$ the complex $d\times d$ matrices. Fix a Hermitian matrix $H=H^\dagger$ and a finite family $L_1,\ldots,L_m$ in $M_d(\mathbb C)$, allowing $m=0$. Here $A^\dagger$ denotes conjugate transpose, $[A,B]=AB-BA$, and $\{A,B\}=AB+BA$. In units with $\hbar=1$, define the linear map $\mathcal L$ by $\mathcal L(X)=-i[H,X]+\sum_{a=1}^m(L_aXL_a^\dagger-\{L_a^\dagger L_a,X\}/2)$, with the empty sum equal to zero. The units of $H$ and $L_a$ are chosen so that every term has inverse-time units.

For $t\geq0$, define the noise channel $\mathcal N_t:M_d(\mathbb C)\to M_d(\mathbb C)$ by $\mathcal N_t=e^{t\mathcal L}:=\sum_{n=0}^\infty t^n\mathcal L^n/n!$, with $\mathcal L^0$ the identity map and convergence in operator norm. A channel here means a complex-linear, completely positive and trace-preserving map: complete positivity means positivity after tensoring with the identity on every finite matrix ancilla, and trace preservation means $\operatorname{Tr}(\mathcal N_t(X))=\operatorname{Tr}(X)$ for every $X$. A matrix is positive when it is Hermitian and has nonnegative quadratic form on every vector.

This is a mathematical construction. Assigning it to a physical emitter requires a separate physical assumption; no negative-time channel is asserted.

## Facts & Assumptions

[F1] The displayed formula is the finite GKSL generator under the stated finite-dimensional, Hermiticity and unit conventions, with $\hbar=1$. [physics:def-qsm-dt-gksl-definition](https://alphabetamath.cc/physics/item/def-qsm-dt-gksl-definition)

[F2] A finite channel is exactly a completely positive, trace-preserving complex-linear map, with complete positivity tested on every finite ancilla. [physics:def-qsm-dt-channel-definition](https://alphabetamath.cc/physics/item/def-qsm-dt-channel-definition)

[F3] For a finite GKSL generator, $e^{t\mathcal L}$ is a finite channel for every $t\geq0$; the family has identity at zero, is norm-continuous, and obeys $e^{(t+s)\mathcal L}=e^{t\mathcal L}e^{s\mathcal L}$ for $s,t\geq0$. [physics:thm-qsm-dt-gksl-sufficient](https://alphabetamath.cc/physics/item/thm-qsm-dt-gksl-sufficient)

[F4] Every finite-dimensional complex normed space is complete. [physics:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/physics/item/cor-finite-dimensional-normed-spaces-are-banach)

[F5] The exponential series of a bounded operator on a complex Banach space converges in operator norm for every real time. [math:lem-exponential-series-of-a-bounded-operator](https://alphabetamath.cc/item/lem-exponential-series-of-a-bounded-operator)

## Justification

**Given:** The finite matrices, finite family and nonnegative time in the definition, with compatible units and $\hbar=1$.

**Goal:** Establish that the displayed series defines a unique finite channel with the stated domain and codomain.

1.1 For $1\leq i,j\leq d$, let $E_{ij}$ be the matrix whose entry in row $i$, column $j$ is $1$ and whose other entries are $0$. Every matrix $X$ has the expansion $X=\sum_{i,j=1}^d X_{ij}E_{ij}$; comparing entries makes its coefficients unique, so these matrices, ordered lexicographically by $(i,j)$, form a finite ordered complex basis. Define $\|X\|_{\mathrm{ent},1}=\sum_{i,j=1}^d|X_{ij}|$. This function is nonnegative, and it vanishes exactly when every entry is zero, hence exactly when $X=0$. For every complex scalar $\alpha$, $\|\alpha X\|_{\mathrm{ent},1}=|\alpha|\|X\|_{\mathrm{ent},1}$; summing $|X_{ij}+Y_{ij}|\leq|X_{ij}|+|Y_{ij}|$ gives $\|X+Y\|_{\mathrm{ent},1}\leq\|X\|_{\mathrm{ent},1}+\|Y\|_{\mathrm{ent},1}$. Thus this is a complex norm on a space with a finite ordered basis, and [F4] makes this normed matrix space Banach. [given, F4, construct, algebra]

2.1 The displayed GKSL formula is complex-linear. Let $C=\max_{1\leq i,j\leq d}\|\mathcal L(E_{ij})\|_{\mathrm{ent},1}$, which is finite because $d\geq1$ and all matrices and the jump family are finite. Linearity and the norm axioms give $\|\mathcal L(X)\|_{\mathrm{ent},1}\leq\sum_{i,j=1}^d|X_{ij}|\|\mathcal L(E_{ij})\|_{\mathrm{ent},1}\leq C\|X\|_{\mathrm{ent},1}$, so $\mathcal L$ is bounded. Applying [F5] on the Banach space from step 1.1, with the induced operator norm, gives a unique operator-norm limit for the exponential series. [given, F1, F5, step 1.1, algebra]

3.1 The hypotheses of the finite GKSL channel theorem are exactly those in the definition, including the finite family and Hermitian $H$. By [F3] the resulting exponential is a finite channel for $t\geq0$; [F2] gives the stated meaning of that term. Hence the construction has the claimed type and is well-defined. [given, F1, F2, F3, step 2.1] ∎
