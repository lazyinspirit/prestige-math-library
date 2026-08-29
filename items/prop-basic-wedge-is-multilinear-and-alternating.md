---
id: prop-basic-wedge-is-multilinear-and-alternating
kind: proposition
title: "The basic wedge map $(v_1,\\dots,v_k)\\mapsto v_1\\wedge\\cdots\\wedge v_k$ is multilinear and alternating"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-decomposable-k-vector-and-basic-wedge-product, thm-universal-property-and-uniqueness-of-exterior-powers, def-kth-exterior-power-by-quotient, def-alternating-k-linear-map]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Exterior Powers"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf"
---

## Statement

For every $k\ge0$, the map

$$(v_1,\ldots,v_k)\longmapsto v_1\wedge\cdots\wedge v_k$$

from $V^k$ to $\Lambda^kV$ is $k$-linear and alternating, in the sense of [[def-alternating-k-linear-map]].

## Facts & Assumptions

**Given:** A vector space $V$ over a field $F$ and $k\ge0$.

[L1] The exterior power is the quotient $\Lambda^kV=V^{\otimes k}/W_k$, and the basic wedge map is the universal multilinear map composed with the quotient projection ([[def-kth-exterior-power-by-quotient]]).

[L2] The wedge map represents alternating $k$-linear maps and is itself $k$-linear and alternating ([[thm-universal-property-and-uniqueness-of-exterior-powers]]).

## Proof

**Proof technique:** direct.


1.1 By [L1], the wedge of [[def-decomposable-k-vector-and-basic-wedge-product]] is obtained from the universal multilinear map by a linear quotient map, so it is linear in each of its $k$ arguments. [L1]

1.2 By [L1], the quotient projection sends every pure tensor with a repeated pair to zero, so the wedge vanishes whenever two arguments are equal. [L1]

2.1 Steps 1.1 and 1.2 are exactly multilinearity and alternation; they match the structure map described in [L2], whose universal property supplies the same statements. [step 1.1, step 1.2, L2] ∎
