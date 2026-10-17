---
id: thm-orthogonal-projection-is-the-unique-nearest-point
kind: theorem
title: "The orthogonal projection is the unique nearest point in the subspace"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-orthogonal-projection, prop-pythagorean-parallelogram-and-polarisation-identities]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., result 6.61'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Sergei Treil, Linear Algebra Done Wrong, Theorem 5.3.2'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Statement

Let $W$ be a subspace of a finite-dimensional inner product space $V$. For every $v\in V$, the vector $P_Wv$ is the unique point of $W$ nearest to $v$: for every $w\in W$,

$$\lVert v-P_Wv\rVert\le\lVert v-w\rVert,$$

with equality if and only if $w=P_Wv$.

## Facts & Assumptions

**Given:** A subspace $W$, a vector $v\in V$, and $w\in W$.

[L1] The residual $v-P_Wv$ lies in $W^\perp$, while $P_Wv$ lies in $W$ ([[def-orthogonal-projection]]).

[L2] Orthogonal vectors $x,y$ satisfy $\lVert x+y\rVert^2=\lVert x\rVert^2+\lVert y\rVert^2$ ([[prop-pythagorean-parallelogram-and-polarisation-identities]]).

## Proof

**Proof technique:** direct.

1.1 Decompose $v-w=(v-P_Wv)+(P_Wv-w)$. The first term lies in $W^\perp$ and the second in $W$, so they are orthogonal by [L1]. [L1, algebra]

2.1 By [L2], $\lVert v-w\rVert^2=\lVert v-P_Wv\rVert^2+\lVert P_Wv-w\rVert^2\ge\lVert v-P_Wv\rVert^2$. Nonnegativity gives the asserted inequality. [step 1.1, L2]

3.1 Equality holds exactly when $\lVert P_Wv-w\rVert^2=0$, which by positive definiteness is exactly $w=P_Wv$. [step 2.1] ∎
