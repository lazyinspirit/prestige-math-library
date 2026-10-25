---
id: prop-orthogonal-projection-formula-and-linearity
kind: proposition
title: "Orthogonal projection is linear, and an orthonormal basis $(e_i)$ of $W$ gives $P_Wv=\\sum_i\\langle v,e_i\\rangle e_i$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-orthogonal-projection, thm-bessel-inequality-and-finite-parseval-identity, def-inner-product-space]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., result 6.57'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Sergei Treil, Linear Algebra Done Wrong, Proposition 5.3.3 and Remark 5.3.4'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Statement

Let $(e_0,\ldots,e_{r-1})$ be an orthonormal basis of a subspace $W$ of a finite-dimensional inner product space $V$. Then

$$P_Wv=\sum_{i<r}\langle v,e_i\rangle e_i.$$

The map $P_W$ is linear, with image $W$, kernel $W^\perp$, and $P_W^2=P_W$. Moreover, regarding both projections as endomorphisms of $V$,

$$I-P_W=P_{W^\perp}.$$

## Facts & Assumptions

**Given:** A subspace $W$, an orthonormal basis $(e_i)_{i<r}$ of $W$, and $v\in V$.

[L1] The orthogonal projection $P_Wv$ is the unique $w\in W$ for which $v-w\in W^\perp$ ([[def-orthogonal-projection]]).

[L2] In an orthonormal basis, the coefficient of a vector is its inner product with the corresponding basis vector ([[thm-bessel-inequality-and-finite-parseval-identity]]).

[L3] The inner product is linear in its first argument ([[def-inner-product-space]]).

## Proof

**Proof technique:** direct.

1.1 Put $p=\sum_{i<r}\langle v,e_i\rangle e_i$. Then $p\in W$, and for every basis vector $e_j$, [L3] and orthonormality give $\langle v-p,e_j\rangle=0$. By [L2], this makes $v-p$ orthogonal to all of $W$. [L2, L3, algebra]

1.2 The defining decomposition shows $P_Ww=w$ for $w\in W$ and $P_Wz=0$ for $z\in W^\perp$. Hence $\operatorname{im}P_W=W$, $\ker P_W=W^\perp$, and $P_W^2=P_W$. [L1]

2.1 The uniqueness clause in [L1] gives $P_Wv=p$, proving the formula. Linearity follows immediately from [L3] and the formula. [step 1.1, L1, L3]

3.1 For the decomposition $v=P_Wv+(v-P_Wv)$, the second summand lies in $W^\perp$. Its projection onto $W^\perp$ is itself, so $P_{W^\perp}v=v-P_Wv$. [L1, step 1.2] ∎
