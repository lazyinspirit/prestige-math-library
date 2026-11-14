---
title: Tensor-family components equal coherent Clebsch–Gordan transition maps
status: draft
research_item: lem-author-11a9fe6cf386-tensor-cg-identification
dependency_level: 1
---

## Prerequisites

- [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)
- [physics:thm-nrqm-orbital-and-spin-tensor-spin-composition](https://alphabetamath.cc/physics/item/thm-nrqm-orbital-and-spin-tensor-spin-composition)


## Statement

For $J=4$, $k\in\{0,1\}$ and $J'\in\{3,4,5\}$, let $T_q:V_4\to V_{J'}$ be a rank-$k$ spherical tensor family. Write $S_0=\{4\}$ and $S_1=\{3,4,5\}$ for the permitted spins in $V_4\otimes V_k$. If $J'\notin S_k$, then $T_q=0$ for every $q$.

If $J'\in S_k$, define linear maps $A_q:V_4\to V_{J'}$ on every input basis vector, for $m=-4,-3,\ldots,4$ and $q=-k,-k+1,\ldots,k$, by

$$A_qe_{4,m}=\begin{cases}C^{J',m+q}_{4,m;k,q}e_{J',m+q},& |m+q|\le J',\\0,& |m+q|>J'.\end{cases}$$

The coefficient in the first branch uses the ordered coupled-basis convention; the second branch is the zero vector of $V_{J'}$ and uses no out-of-range coefficient or basis vector. There is a single scalar $\lambda\in\mathbb C$ such that $T_q=\lambda A_q$ for all $q$. Replacing the chosen highest-weight vector of the $J'$ summand by $e^{i\theta}$ times itself multiplies every $A_q$ by $e^{i\theta}$ and replaces $\lambda$ by $e^{-i\theta}\lambda$.

## Facts & Assumptions

[F1] Finite spin matrices, ordered coupled bases and tensor-family equations are fixed. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[F2] The ordered product splits into one copy of each permitted spin, with the normalized ladder bases. [physics:thm-nrqm-orbital-and-spin-tensor-spin-composition](https://alphabetamath.cc/physics/item/thm-nrqm-orbital-and-spin-tensor-spin-composition)

## Proof

**Given:** The finite objects and conventions in the Statement.

**Goal:** Establish the stated identities and implications.

1.1 Define a linear map $\Phi:V_4\otimes V_k\to V_{J'}$ by $\Phi(x\otimes e_{k,q})=T_qx$. The tensor-family equations say exactly that $J_a^{(J')}\Phi=\Phi J_a^{\rm tot}$ for $a=z,+,-$: the second tensor-factor ladder coefficient is the coefficient appearing in the tensor-family equation. Thus $\Phi$ also intertwines the Casimir, the sum of squares of the three Cartesian generators. [F1, algebra]

2.1 On the spin-$j$ summand from [F2], Casimir intertwining gives $(J'(J'+1)-j(j+1))\Phi=0$. Distinct nonnegative spin labels have distinct Casimir values, so only the $j=J'$ summand can survive. On that summand, weight intertwining maps its unit top vector to $c e_{J',J'}$; intertwining the lowering operator and using equal ladder normalization maps every coupled basis vector to $c e_{J',M}$. This proves uniqueness up to $c$, and zero when the summand is absent. [F1, F2, step 1.1, algebra]

3.1 Suppose $J'\in S_k$ and $M=m+q$ lies in $[-J',J']$. In the orthonormal coupled basis, the coordinate of $e_{4,m}\otimes e_{k,q}$ along $v_{J',M}$ is $\overline{C^{J',M}_{4,m;k,q}}$. Other weights have zero coordinate by weight orthogonality. The highest-weight equations at weight $J'$ have real matrices and a one-dimensional complex solution space by [F2], so they admit a real unit solution: the real or imaginary part of any nonzero solution is a nonzero real solution and can be normalized. The lowering matrices and their normalization factors are real. Hence one phase choice gives real coefficients at every weight, and every other allowed choice multiplies all these coefficients by one common phase. Their conjugates are therefore one common scalar times the coefficients themselves. Applying step 2.1 gives $T_qe_{4,m}=\lambda C^{J',M}_{4,m;k,q}e_{J',M}$ with a single $\lambda$ for all in-range pairs $(m,q)$. [F1, F2, step 2.1, algebra]

4.1 For $|m+q|>J'$, step 1.1 gives $J_z^{(J')}T_qe_{4,m}=(m+q)T_qe_{4,m}$. Since the diagonal matrix $J_z^{(J')}$ has only the weights $-J',-J'+1,\ldots,J'$, this forces $T_qe_{4,m}=0$, exactly the second branch defining $A_q$. For $J'\notin S_k$, step 2.1 already gives $T_q=0$ without using a Clebsch–Gordan coefficient. Together with step 3.1 this proves every asserted component identity. The phase law for the coefficients in [F1] multiplies all the maps $A_q$ by $e^{i\theta}$, so their common multiplier changes to $e^{-i\theta}\lambda$. [F1, step 1.1, step 2.1, step 3.1, algebra] ∎
