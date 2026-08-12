---
id: thm-canonical-map-to-double-dual-is-injective
kind: theorem
title: 'Assuming choice, the canonical map $J_V:V\to V^{**}$ is linear and injective'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-canonical-map-to-the-double-dual, lem-linear-functionals-separate-points-from-subspaces, thm-linear-kernel-image-and-injectivity]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'K. Conrad, Infinite-Dimensional Dual Spaces'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/dualspaceinfinite.pdf'
pipeline_run: null
---

## Statement

Assume the axiom of choice. For every vector space $V$, the canonical map $J_V:V\to V^{**}$ is linear and injective.

## Facts & Assumptions

**Given:** The axiom of choice and an $F$-vector space $V$.

[L1] The canonical map is defined by $J_V(v)(f)=f(v)$ for $v\in V$ and $f\in V^*$ ([[def-canonical-map-to-the-double-dual]]).

[L2] If $v\notin U\le V$, some functional vanishes on $U$ and takes value $1$ at $v$ ([[lem-linear-functionals-separate-points-from-subspaces]]).

[L3] A linear map is injective if and only if its kernel is trivial ([[thm-linear-kernel-image-and-injectivity]]).

## Proof

**Proof technique:** direct.

1.1 For $a,b\in F$, $u,v\in V$, and $f\in V^*$, [L1] gives $J_V(au+bv)(f)=f(au+bv)=aJ_V(u)(f)+bJ_V(v)(f)$. Equality at every $f$ proves that $J_V$ is linear. [L1, algebra]

1.2 If $v\ne0$, apply [L2] to $U=\{0\}$ to obtain $f$ with $f(v)=1$. Then $J_V(v)(f)=1$, so $J_V(v)\ne0$. Hence $\ker J_V=\{0\}$. [L1, L2, given]

2.1 By [L3], step 1.2 makes $J_V$ injective; step 1.1 supplies linearity. The zero space is included, since its unique map has trivial kernel. [step 1.1, step 1.2, L3] ∎
