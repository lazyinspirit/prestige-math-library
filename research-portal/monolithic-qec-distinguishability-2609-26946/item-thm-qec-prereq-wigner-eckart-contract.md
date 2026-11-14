---
title: Wigner–Eckart with explicit magnetic-label contract
status: draft
research_item: thm-qec-prereq-wigner-eckart-contract
dependency_level: 1
sources:
  references:
    - title: The Wigner–Eckart Theorem, Physics 221A Notes 20
      url: https://bohr.physics.berkeley.edu/classes/221/notes/wigeck.pdf
      locator: Sections 6–7, equations (43)–(44) and the selection rules following
        equation (45)
      statement: Matrix elements of a rank-k irreducible tensor operator are a
        magnetic-label-independent reduced matrix element times the
        Clebsch–Gordan coefficient for coupling j and k to j-prime; the magnetic
        and triangle selection rules follow.
      hypotheses: Standard angular-momentum bases, fixed additional labels, and the
        irreducible tensor transformation law; coupling order and phase
        conventions must be matched.
      reading_limits: Read the cited transformation law, theorem statement and
        selection rules. The proof below is locally authored; no independent
        source-proof review or acceptance is claimed.
---

## Prerequisites

- [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)
- [physics:thm-nrqm-orbital-and-spin-tensor-spin-composition](https://alphabetamath.cc/physics/item/thm-nrqm-orbital-and-spin-tensor-spin-composition)
- [` The Wigner–Eckart Theorem, Physics 221A Notes 20 · Sections 6–7, equations (43)–(44) and the selection rules following equation (45) `](https://bohr.physics.berkeley.edu/classes/221/notes/wigeck.pdf)


## Statement

Let $H$ and $K$ be finite direct sums of specified spin blocks, and let $(T_q)_{q=-k}^{k}$ be a rank-$k$ spherical tensor family from $H$ to $K$, with integer $k\geq0$. Fix an input copy of $V_J$ and an output copy of $V_{J'}$. Write $A_{m',m,q}$ for the coefficient of $e_{J',m'}$ in the projection of $T_q e_{J,m}$ onto the chosen output copy. Here projection means the coordinate projection in the specified direct sum: it retains the chosen output coordinate and sets every other output coordinate to zero. Use the ordered coupling $V_J\otimes V_k$ and its chosen Clebsch–Gordan coefficients $C^{J',m'}_{J,m;k,q}$. If $J'$ is not among $|J-k|,|J-k|+1,\ldots,J+k$, set these coefficients to zero. There is a complex number $R$, depending on the two copies, $J,J',k$, the tensor family and the coupling convention but independent of $m,m',q$, such that $A_{m',m,q}=R C^{J',m'}_{J,m;k,q}$. This number is a reduced matrix element in this convention. In particular, $A_{m',m,q}=0$ unless $m'=m+q$ and $J'$ is in the displayed coupling list. No parity selection rule or nonvanishing of $R$ is asserted.

## Statement references

[def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions)

[physics:thm-nrqm-orbital-and-spin-tensor-spin-composition](https://alphabetamath.cc/physics/item/thm-nrqm-orbital-and-spin-tensor-spin-composition)

## Facts & Assumptions

[F1] Spin blocks, their ladder operators, the tensor-family equations, and the ordered coupled-basis coefficients are as defined in [def-qec-prereq-spin-tensor-cg-conventions](item-def-qec-prereq-spin-tensor-cg-conventions).

[F2] The ordered product $V_J\otimes V_k$ decomposes as one orthogonal spin-$j$ summand for each $j$ in the coupling list, with the normalized coupled ladder basis described in [physics:thm-nrqm-orbital-and-spin-tensor-spin-composition](https://alphabetamath.cc/physics/item/thm-nrqm-orbital-and-spin-tensor-spin-composition).

## Proof

**Given:** The specified block copies and rank-$k$ tensor family, with the conventions in F1.

**Goal:** Establish the stated factorization and selection rules.

1.1 Write $K=\bigoplus_{\beta\in B}V_{\ell_\beta}$ and let $\beta_0$ index the chosen output copy, so $\ell_{\beta_0}=J'$. Define $P:K\to K$ by $P(g_\beta)_{\beta\in B}=(h_\beta)_{\beta\in B}$, where $h_{\beta_0}=g_{\beta_0}$ and $h_\beta=0$ for $\beta\ne\beta_0$. This linear map satisfies $P^2=P$ and has the chosen output copy as its range. For $a=z,+,-$, both $PJ_a^K g$ and $J_a^K Pg$ have chosen coordinate $J_a^{(J')}g_{\beta_0}$ and every other coordinate zero, by the blockwise definition in F1. Hence $PJ_a^K=J_a^K P$. Identify the range of $P$ with $V_{J'}$ and embed each $e_{J,m}$ in the chosen input coordinate, with zeros elsewhere. Define the linear map $F:V_J\otimes V_k\to V_{J'}$ by $F(e_{J,m}\otimes e_{k,q})=P T_q e_{J,m}$ under this identification. Applying the tensor-family equations and the ladder formulas to each product-basis vector gives $J_a^{(J')}F=FJ_a^{\mathrm{tot}}$ for $a=z,+,-$. [F1, algebra, construct]

1.2 Suppose $J'$ is in the coupling list. The product-basis matrices of $J_z^{\mathrm{tot}}$ and $J_+^{\mathrm{tot}}$ are real. The highest-weight line of the $J'$ summand is therefore spanned by a real vector: the real and imaginary parts of any vector in that line satisfy the same real equations, and at least one is nonzero. Choose a normalized real highest-weight vector temporarily. Its coupled ladder vectors have real product-basis coefficients. The recorded highest-weight vector differs from this temporary choice by one unit scalar $\lambda$, so all recorded coefficients $C^{J',M}_{J,m;k,q}$ equal $\lambda$ times real coefficients and their complex conjugates equal $\lambda^{-2}C^{J',M}_{J,m;k,q}$. [F1, F2, algebra, choose]

2.1 For a coupled highest-weight vector $u_j$, the intertwining equations show that $F u_j$ has $J_z$ weight $j$ and is killed by $J_+$. In the output spin block the ladder formulas show that a nonzero vector killed by $J_+$ has weight $J'$; hence $F u_j=0$ if $j\ne J'$, while for $j=J'$ it is a scalar multiple $a e_{J',J'}$. Applying $J_-$ and the identical normalized ladder formulas gives $Fv_{J',M}=a e_{J',M}$ for every $M$, and $F$ vanishes on all other coupled summands. If $J'$ is absent from the coupling list, $F=0$. [F1, F2, step 1.1]

3.1 Expanding a product-basis vector in the orthonormal coupled basis and applying step 2.1 gives $A_{m',m,q}=a\overline{C^{J',m'}_{J,m;k,q}}=a\lambda^{-2}C^{J',m'}_{J,m;k,q}$. Set $R=a\lambda^{-2}$; if $J'$ is absent set $R=0$. The total $J_z$ eigenvalue of $v_{J',m'}$ is $m'$, whereas that of $e_{J,m}\otimes e_{k,q}$ is $m+q$, so its coefficient is zero unless these weights agree. The coupling list gives the other selection rule, and $R$ can be zero, for example for the zero tensor family. This proves the contract. [F1, F2, step 2.1, step 1.2, algebra] ∎
