---
title: Pair-product correction detects quadratic spin errors
status: draft
research_item: lem-author-179395ddbb85-kl-detects-quadratic-spin-errors
dependency_level: 3
---

## Prerequisites

- [lem-author-179395ddbb85-low-rank-spin-polynomials](item-lem-author-179395ddbb85-low-rank-spin-polynomials)
- [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract)
- [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)


## Statement

Fix $J\in\{4,5\}$, with spin block $V_J$ and Cartesian generators $J_x,J_y,J_z$ in the finite-spin convention. Let $S$ be a finite set of spin labels containing $J$ with $|J'-J|\leq1$ for every $J'\in S$. On the orthogonal direct sum $H=\bigoplus_{J'\in S}V_{J'}$, let $\iota_J:V_J\to H$ and $\pi_J:H\to V_J$ be the input-block inclusion and coordinate projection. Let $\mathcal E_S\subseteq\mathcal L(H)$ be the complete selected order-one absorption–emission tensor error span. Let $\mathcal P_2\subseteq\mathcal L(V_J)$ be the complex span of $I_{V_J}$ and all products of at most two Cartesian generators.

Let $V:\mathbb C^2\to V_J$ be an isometry and put $W=\iota_JV$. Suppose $W^*E^*FW=c_{E,F}I_2$ for every $E,F\in\mathcal E_S$. Then $V^*AV$ is scalar for every $A\in\mathcal P_2$. In particular the code detects every component of every rank-zero, rank-one or rank-two spherical tensor family from $V_J$ to itself. Detection here means scalar compression of a single operator; it is distinct from correcting an arbitrary channel.

## Facts & Assumptions

[F1] The finite-spin convention fixes the magnetic basis, ladder matrices, Cartesian generators, tensor-family equations and the sum inner product on finite direct sums. [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[F2] For the selected blocks, $G_a=\iota_JJ_a\pi_J$ belongs to $\mathcal E_S$ for $a=x,y,z$. Every within-block tensor component of rank at most two belongs to $\mathcal P_2$. [lem-author-179395ddbb85-low-rank-spin-polynomials](item-lem-author-179395ddbb85-low-rank-spin-polynomials)

[F3] The selected order-one span contains $I_H$; its pair-product correction condition is scalar compression of $E^*F$ for every pair of errors in that span. [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract)

## Proof

**Given:** The spin blocks, selected set $S$, maps $\iota_J,\pi_J,V,W$, spans $\mathcal E_S,\mathcal P_2$, and pair-product hypothesis in the Statement.

**Goal:** Prove scalar compression of every quadratic spin polynomial and every within-block tensor component of rank at most two.

1.1 In the magnetic basis, $J_z$ is real diagonal and the coefficient of $e_{J,m+1}$ in $J_+e_{J,m}$ equals the real coefficient of $e_{J,m}$ in $J_-e_{J,m+1}$. Thus $J_z^*=J_z$ and $J_+^*=J_-$, including the zero endpoints. The definitions of $J_x$ and $J_y$ give $J_a^*=J_a$ for $a=x,y,z$. The sum inner product gives $\iota_J^*=\pi_J$ and $\pi_J\iota_J=I_{V_J}$. Hence $G_a^*=G_a$ and $G_a^*G_b=\iota_JJ_aJ_b\pi_J$. Each $G_a$ is an allowed error by [F2]. [F1, F2, algebra]

2.1 Applying the assumed pair-product condition to $(E,F)=(I_H,I_H)$, $(I_H,G_a)$ and $(G_a,G_b)$ is legitimate by [F2] and [F3]. With $W=\iota_JV$, the resulting compressions are respectively $I_2$, $V^*J_aV$ and $V^*J_aJ_bV$, using $\pi_J\iota_J=I_{V_J}$ and the product identity from step 1.1. All these matrices are scalar. [F2, F3, given, step 1.1, algebra]

3.1 Every $A\in\mathcal P_2$ is a finite complex linear combination of $I_{V_J}$, the $J_a$ and the $J_aJ_b$. By step 2.1 and linearity, $V^*AV$ is therefore scalar. Fact [F2] places every within-block tensor component of rank at most two in this space, proving all the stated detection identities. This argument concerns single-operator compression and makes no assertion of correction for an arbitrary channel. [F2, step 2.1, algebra] ∎
