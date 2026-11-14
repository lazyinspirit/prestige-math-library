---
title: Low-rank tensor families are spin polynomials
status: draft
research_item: lem-author-179395ddbb85-low-rank-spin-polynomials
dependency_level: 2
---

## Prerequisites

- [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)
- [thm-qec-prereq-wigner-eckart-contract](item-thm-qec-prereq-wigner-eckart-contract)
- [physics:thm-nrqm-orbital-and-spin-finite-spin-block-decomposition](https://alphabetamath.cc/physics/item/thm-nrqm-orbital-and-spin-finite-spin-block-decomposition)
- [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract)


## Statement

Fix $J\in\{4,5\}$. Let $\mathcal P_d$ denote the complex span of $I$ and all products of at most $d$ members of $\{J_x,J_y,J_z\}$ on $V_J$. For $r=0,1,2,3$, the nonzero highest component $H_r=J_+^r$ extends by normalized lowering commutators to a rank-$r$ spherical tensor family, all of whose components lie in $\mathcal P_r$. Every rank-$r$ family from $V_J$ to itself is a scalar multiple of this family. In particular all rank-zero, rank-one and rank-two tensor components lie in $\mathcal P_2$.

For any finite set $S$ of spin labels containing $J$ and satisfying $|J'-J|\leq1$ for every $J'\in S$, let $H=\bigoplus_{J'\in S}V_{J'}$, with one labelled copy of each block. Let $\iota_J:V_J\to H$ be the input-block inclusion, let $\pi_J:H\to V_J$ be its orthogonal coordinate projection, and let $\mathcal E_S\subseteq\mathcal L(H)$ be the selected order-one absorption–emission tensor error span. Then $\iota_JJ_a\pi_J\in\mathcal E_S$ for $a=x,y,z$.

## Facts & Assumptions

**Given:** The finite objects, measure conventions and explicit hypotheses in the Statement.

[F1] Finite spin generators, their adjoints, commutators and tensor-family equations are fixed. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[F2] For fixed input and output blocks, every rank-r tensor family has one common reduced scalar multiplying the same coupled coefficients. [thm-qec-prereq-wigner-eckart-contract](item-thm-qec-prereq-wigner-eckart-contract)

[F3] Finite self-adjoint angular-momentum triples decompose into spin blocks with the stated normalized highest-weight ladders. [physics:thm-nrqm-orbital-and-spin-finite-spin-block-decomposition](https://alphabetamath.cc/physics/item/thm-nrqm-orbital-and-spin-finite-spin-block-decomposition)

[F4] For the selected blocks specified in the Statement, $\mathcal E_S$ is a complex linear span in $\mathcal L(H)$ containing $I_H$ and every embedded component $\iota_JT_q\pi_J$ of every rank-one tensor family from $V_J$ to itself. [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract)

## Proof

**Given:** The finite objects, measure conventions and explicit hypotheses in the Statement.

**Goal:** Establish the stated formula, convergence and qualifications.

1.1 On the matrix space $\operatorname{End}(V_J)$ use the coordinate inner product $\langle A,B\rangle=\sum_{m,n}A_{mn}\overline{B_{mn}}$. For a self-adjoint matrix $J_a$, the commutator map $K_aA=[J_a,A]$ is self-adjoint for this inner product: expansion of the two finite matrix sums moves left multiplication and right multiplication to their corresponding adjoints. The identity $[K_x,K_y]A=[\,[J_x,J_y],A]=iK_zA$ and its cyclic versions follow by expansion. Hence [F3] applies to this finite-dimensional matrix space. [F1, F3, algebra]

2.1 For $0\leq r\leq3$, $J_+^r$ is nonzero since $r\leq2J$. It has $K_z$ weight $r$ and is killed by $K_+$. In the spin-block decomposition of step 1.1, a weight-r vector killed by the raising map has components only in blocks with highest weight r. Its cyclic ladder span is therefore one copy of spin r, even if the full matrix space has other copies: on each contributing block the same normalized lowering coefficients apply. Consequently $H_q=(\operatorname{ad}J_-)^{r-q}J_+^r/\sqrt{(r-q)!(2r)(2r-1)\cdots(r+q+1)}$ is a tensor family, using the empty product at $q=r$. The commutator derivation rule and the generator commutators show each component belongs to $\mathcal P_r$. [F1, F3, step 1.1, algebra]

3.1 By [F2], all rank-r families between the fixed spin-J copies are common scalars times one fixed coefficient family. The constructed nonzero family therefore spans every such family, proving the claimed polynomial inclusion. For $r=1$ its three components are $H_1=J_+$, $H_0=-\sqrt2J_z$, $H_{-1}=-J_-$. Since $J\in S$, [F4] puts $G_q=\iota_JH_q\pi_J$ in $\mathcal E_S$ for $q=1,0,-1$. The identities $\iota_JJ_x\pi_J=(G_1-G_{-1})/2$, $\iota_JJ_y\pi_J=(G_1+G_{-1})/(2i)$ and $\iota_JJ_z\pi_J=-G_0/\sqrt2$ then give the three asserted memberships by linearity. [F1, F2, F4, step 2.1, algebra] ∎
