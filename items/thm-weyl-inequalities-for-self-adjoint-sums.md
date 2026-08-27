---
id: thm-weyl-inequalities-for-self-adjoint-sums
kind: theorem
title: "Weyl inequalities bound the eigenvalues of a sum of self-adjoint endomorphisms"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-courant-fischer-min-max-principle, thm-dimension-formula]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Christoph Helmberg et al., An interlacing property of the signless Laplacian of threshold graphs"
      url: "https://arxiv.org/pdf/2308.12654"
---

## Statement

Let $A,B$ be self-adjoint endomorphisms of an $n$-dimensional real inner
product space. Order the eigenvalues of $A$, $B$, and $A+B$ by

$$\alpha_1\ge\cdots\ge\alpha_n,\qquad \beta_1\ge\cdots\ge\beta_n,\qquad \gamma_1\ge\cdots\ge\gamma_n.$$

Then, for integers $1\le i,j\le n$:

1. If $i+j-1\le n$, then $\gamma_{i+j-1}\le \alpha_i+\beta_j$.
2. If $i+j-n\ge1$, then $\gamma_{i+j-n}\ge \alpha_i+\beta_j$.

## Facts & Assumptions

**Given:** Self-adjoint endomorphisms $A$ and $B$ of an $n$-dimensional real inner product space.

[L1] Courant-Fischer characterises ordered eigenvalues by min-max formulas ([[thm-courant-fischer-min-max-principle]]).

[L2] For finite-dimensional subspaces $U$ and $W$, one has $\dim(U+W)+\dim(U\cap W)=\dim U+\dim W$ ([[thm-dimension-formula]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] separately to $A$ and $B$. There are subspaces $U_i^- ,V_j^-$ of dimensions $n-i+1,n-j+1$ such that every nonzero vector in $U_i^-$ has Rayleigh quotient for $A$ at most $\alpha_i$ and every nonzero vector in $V_j^-$ has Rayleigh quotient for $B$ at most $\beta_j$; likewise there are subspaces $U_i^+,V_j^+$ of dimensions $i,j$ such that every nonzero vector in them has Rayleigh quotient at least $\alpha_i,\beta_j$ respectively. [L1]

1.2 If $i+j-1\le n$, then [L2] gives $\dim(U_i^-\cap V_j^-)\ge (n-i+1)+(n-j+1)-n=n-i-j+2=n-(i+j-1)+1$. Every nonzero $x$ in that intersection satisfies $R_A(x)\le\alpha_i$ and $R_B(x)\le\beta_j$, hence $R_{A+B}(x)=R_A(x)+R_B(x)\le\alpha_i+\beta_j$. Therefore $\gamma_{i+j-1}\le\alpha_i+\beta_j$ by the min-over-subspaces form of [L1] for $A+B$. [L1, L2, algebra]

2.1 If $i+j-n\ge1$, then [L2] gives $\dim(U_i^+\cap V_j^+)\ge i+j-n$. Every nonzero $x$ in that intersection satisfies $R_A(x)\ge\alpha_i$ and $R_B(x)\ge\beta_j$, hence $R_{A+B}(x)=R_A(x)+R_B(x)\ge\alpha_i+\beta_j$. Therefore $\gamma_{i+j-n}\ge\alpha_i+\beta_j$ by the max-over-subspaces form of [L1] for $A+B$. [L1, L2, algebra] ∎
