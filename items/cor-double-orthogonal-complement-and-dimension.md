---
id: cor-double-orthogonal-complement-and-dimension
kind: corollary
title: "In finite dimension, $W^{\\perp\\perp}=W$ and $\\dim W+\\dim W^\\perp=\\dim V$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-finite-dimensional-orthogonal-decomposition, cor-dimension-of-a-direct-sum, thm-dimension-of-a-linear-subspace]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., results 6.51 and 6.52'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Sergei Treil, Linear Algebra Done Wrong, Proposition 5.3.6'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Statement

For every subspace $W$ of a finite-dimensional inner product space $V$,

$$W^{\perp\perp}=W,\qquad \dim W+\dim W^\perp=\dim V.$$

These formulas include $W=0$ and $W=V$.

## Facts & Assumptions

**Given:** A subspace $W$ of a finite-dimensional inner product space $V$.

[L1] Orthogonal decomposition gives $V=W\oplus W^\perp$ ([[thm-finite-dimensional-orthogonal-decomposition]]).

[L2] Dimensions add across an internal direct sum of finite-dimensional subspaces ([[cor-dimension-of-a-direct-sum]]).

[L3] If one finite-dimensional subspace is contained in another and their dimensions agree, the two subspaces are equal ([[thm-dimension-of-a-linear-subspace]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to [L1] to obtain $\dim V=\dim W+\dim W^\perp$. [L1, L2]

2.1 Conjugate symmetry shows $W\subseteq W^{\perp\perp}$. Apply step 1.1 first to $W$ and then to $W^\perp$ to get $\dim W^{\perp\perp}=\dim V-\dim W^\perp=\dim W$. [step 1.1, algebra]

3.1 The inclusion and equal dimensions in step 2.1 imply $W^{\perp\perp}=W$ by [L3]. The same reasoning covers both endpoint subspaces. [step 2.1, L3] ∎
