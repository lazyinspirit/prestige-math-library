---
title: Nonvanishing downward coefficients for spin one and two
status: draft
research_item: lem-author-e8d79981fdee-low-spin-support
dependency_level: 2
---

## Prerequisites

- [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)
- [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)
- [lem-qec-prereq-dipole-strength-sum-contract](item-lem-qec-prereq-dipole-strength-sum-contract)


## Statement

In the ordered coupling $V_1\otimes V_J$, for $J=1,2$, $m=-J,\ldots,J$ and $q=-1,0,1$, let $c_{m,q}=C^{J-1,m+q}_{1,q;J,m}$ when $|m+q|\leq J-1$ and $c_{m,q}=0$ otherwise, and put $b_{J,m,q}=\sqrt{(2J+1)/(2J-1)}c_{m,q}$. The coefficient $b_{J,m,q}$ is nonzero exactly when $|m+q|\leq J-1$. For $J=1$ the three allowed squared magnitudes are one. For $J=2$, for $q=-1$ and $m=0,1,2$ the squared magnitudes are $1/6,1/2,1$; for $q=0$ and $m=-1,0,1$ they are $1/2,2/3,1/2$; the $q=1$ values are the reflected $q=-1$ values. In each block $\sum_{q=-1}^1 B_q^\dagger B_q=I_{V_J}$, where $B_q:V_J\to V_{J-1}$ is the linear map defined by $B_qe_{J,m}=b_{J,m,q}e_{J-1,m+q}$ when $|m+q|\leq J-1$ and $B_qe_{J,m}=0$ otherwise; adjoints are taken in the specified orthonormal bases.

## Statement references

[def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[lem-qec-prereq-dipole-strength-sum-contract](item-lem-qec-prereq-dipole-strength-sum-contract)

## Facts & Assumptions

[F1] The coupled vectors are normalized highest-weight vectors followed by normalized total lowering, with the displayed spin ladder matrices. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[F2] The sum of squared downward coefficients at fixed $m$ is $(2J-1)/(2J+1)$. [lem-qec-prereq-dipole-strength-sum-contract](item-lem-qec-prereq-dipole-strength-sum-contract)

[F3] In the specified orthonormal bases, the adjoint of a linear map between finite complex coordinate spaces is represented by its conjugate transpose, and operator products use matrix multiplication. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

## Proof

**Given:** The finite data and hypotheses in the Statement.

**Goal:** Establish the asserted dimension or support identity.

1.1 For $J=1$ the normalized total-spin-zero vector is $(e_{1,-1}\otimes e_{1,1}-e_{1,0}\otimes e_{1,0}+e_{1,1}\otimes e_{1,-1})/\sqrt3$: total raising and lowering annihilate it by the ladder formulas. Multiplication by $\sqrt3$ proves the three stated magnitudes. A permitted common phase has no effect. [F1, algebra]

2.1 For $J=2$ the total-spin-one highest vector, in ordered coordinates $(q,m)=(-1,2),(0,1),(1,0)$, has coefficients $(\sqrt{3/5},-\sqrt{3/10},\sqrt{1/10})$. Its norm is one and total raising kills it: the two resulting coordinates have coefficients $\sqrt2\sqrt{3/5}-2\sqrt{3/10}=0$ and $-\sqrt2\sqrt{3/10}+\sqrt6\sqrt{1/10}=0$. Total lowering divided by $\sqrt2$ gives at total magnetic label zero the coefficients $(\sqrt{3/10},-\sqrt{2/5},\sqrt{3/10})$ in coordinates $(-1,1),(0,0),(1,-1)$. A second normalized lowering gives the reflected highest-vector coefficients at total label minus one. Squaring and multiplying by $5/3$ proves the table and nonvanishing. Terms outside these three total labels vanish. For fixed $q$, nonzero columns of $B_q$ have distinct output basis vectors; by [F3], $B_q^\dagger B_q$ is diagonal with $m$th entry $|b_{J,m,q}|^2$, including zero for forbidden outputs. Scaling [F2] by $(2J+1)/(2J-1)$ gives their sum as the identity. [F1, F2, F3, step 1.1, algebra] ∎
