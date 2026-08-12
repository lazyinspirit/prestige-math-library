---
id: thm-canonical-map-to-double-dual-is-surjective-iff-finite-dimensional
kind: theorem
title: 'Assuming choice, $J_V:V\to V^{**}$ is surjective if and only if $V$ is finite-dimensional'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-canonical-map-to-double-dual-is-injective, thm-dual-family-is-a-basis-in-finite-dimension, thm-dual-family-does-not-span-in-infinite-dimension, lem-linear-functionals-separate-points-from-subspaces]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'K. Conrad, Infinite-Dimensional Dual Spaces, Corollary 2'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/dualspaceinfinite.pdf'
pipeline_run: null
---

## Statement

Assume the axiom of choice. The canonical map $J_V:V\to V^{**}$ is surjective if and only if $V$ is finite-dimensional.

## Facts & Assumptions

**Given:** The axiom of choice and an $F$-vector space $V$.

[L1] The canonical map is linear and injective ([[thm-canonical-map-to-double-dual-is-injective]]).

[L2] For a finite basis $(b_i)$, its dual family $(b_i^*)$ is a basis of $V^*$ ([[thm-dual-family-is-a-basis-in-finite-dimension]]).

[L3] For an infinite Hamel basis $B$, its coordinate functionals span a proper subspace of $V^*$ ([[thm-dual-family-does-not-span-in-infinite-dimension]]).

[L4] Assuming choice, a vector outside a subspace is separated from it by a linear functional ([[lem-linear-functionals-separate-points-from-subspaces]]).

## Proof

**Proof technique:** direct, proving both implications.

1.1 Suppose $V$ has finite basis $(b_1,\ldots,b_n)$ and let $L\in V^{**}$. Put $v=\sum_iL(b_i^*)b_i$. By [L2], every $f\in V^*$ is $\sum_i f(b_i)b_i^*$, so $L(f)=\sum_i f(b_i)L(b_i^*)=f(v)=J_V(v)(f)$. Thus $L=J_V(v)$ and $J_V$ is surjective. [L2, algebra]

1.2 Conversely, suppose $V$ is infinite-dimensional. Choice supplies an infinite Hamel basis $B$. Let $\Phi=\operatorname{span}\{b^*:b\in B\}$; [L3] makes $\Phi$ proper, so choose $\phi\in V^*\setminus\Phi$. By [L4] applied inside $V^*$, choose $L\in V^{**}$ with $L|_\Phi=0$ and $L(\phi)=1$. [L3, L4, given, choose]

2.1 If $L=J_V(v)$, then $b^*(v)=J_V(v)(b^*)=L(b^*)=0$ for every $b\in B$. All basis coordinates of $v$ vanish, so $v=0$; then $L=J_V(0)=0$, contradicting $L(\phi)=1$. Hence $L$ is not in the image and $J_V$ is not surjective. [step 1.2, algebra]

3.1 Step 1.1 proves the forward finite-dimensional case and steps 1.2–2.1 prove its contrapositive. Therefore surjectivity is equivalent to finite dimensionality; [L1] additionally shows the finite-dimensional map is an isomorphism. [step 1.1, step 2.1, L1] ∎
