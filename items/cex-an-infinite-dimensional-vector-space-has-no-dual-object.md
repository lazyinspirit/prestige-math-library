---
id: cex-an-infinite-dimensional-vector-space-has-no-dual-object
kind: counterexample
title: "An infinite-dimensional vector space has no dual object"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cex-not-every-monoidal-category-is-rigid]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Infinite-Dimensional Dual Spaces"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/dualspaceinfinite.pdf"
---

## Statement refuted

An infinite-dimensional vector space can serve as a dualizable object in
$\mathbf{Vect}_k$.

## Facts & Assumptions

**Given:** The infinite-dimensional vector space $k[x]$.

[L1] The earlier counterexample already proves that this space has no dual
object ([[cex-not-every-monoidal-category-is-rigid]]).

## Counterexample

**Proof technique:** direct.

1.1 The argument in [[cex-not-every-monoidal-category-is-rigid]] already applies to the concrete infinite-dimensional space $k[x]$: any coevaluation $\operatorname{coev}(1)$ is a finite sum $\sum_i v_i\otimes f_i$. [given, L1]

2.1 The zig-zag identity would then force every polynomial to be a linear combination of the finitely many $v_i$, contradicting the infinite-dimensionality of $k[x]$. [step 1.1, L1]

3.1 Therefore $k[x]$ has no dual object in the categorical sense. [step 2.1] ∎
