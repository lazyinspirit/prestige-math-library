---
id: cex-distinct-subspaces-of-the-dual-can-have-the-same-preannihilator
kind: counterexample
title: 'In infinite dimension, distinct subspaces of $V^*$ can have the same preannihilator'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-annihilators-under-the-evaluation-pairing, thm-dual-family-does-not-span-in-infinite-dimension, lem-linear-functionals-separate-points-from-subspaces]
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

## Statement refuted

**Refuted claim:** Distinct subspaces of an algebraic dual always have distinct preannihilators.

## Facts & Assumptions

**Given:** The axiom of choice, an infinite-dimensional vector space $V$, an infinite Hamel basis $B$, and $\Phi=\operatorname{span}\{b^*:b\in B\}\le V^*$.

[L1] The preannihilator ${}^\circ S$ consists of vectors killed by every functional in $S$ ([[def-annihilators-under-the-evaluation-pairing]]).

[L2] For an infinite Hamel basis, the span $\Phi$ of its coordinate functionals is a proper subspace of $V^*$ ([[thm-dual-family-does-not-span-in-infinite-dimension]]).

[L3] Assuming choice, every nonzero vector is detected by some linear functional ([[lem-linear-functionals-separate-points-from-subspaces]], with the zero subspace).

## Counterexample

**Proof technique:** explicit subspaces.

1.1 If $v\ne0$, some coordinate of its finite basis expansion is nonzero, so the corresponding $b^*\in\Phi$ does not kill $v$. Hence [L1] gives ${}^\circ\Phi=\{0\}$. [L1, given, algebra]

1.2 By [L3], every nonzero $v$ is detected by some member of $V^*$, so ${}^\circ(V^*)=\{0\}$. [L1, L3]

2.1 Yet [L2] gives $\Phi\ne V^*$, while steps 1.1 and 1.2 give equal preannihilators. These are the required distinct subspaces. [step 1.1, step 1.2, L2] ∎
