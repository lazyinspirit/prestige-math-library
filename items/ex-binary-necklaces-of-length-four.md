---
id: ex-binary-necklaces-of-length-four
kind: example
title: "There are six binary necklaces of length four up to rotation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cauchy-frobenius-orbit-counting, def-group-action, thm-integers-modulo-n-basic-algebra, thm-standard-representatives-modulo-n, thm-cardinality-of-a-set-of-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, 14.3"
      url: "https://twjudson.github.io/aata-files/aata-html/actions-section-burnsides-counting-theorem.html"
pipeline_run: null
---

## Example

Binary words of length four, considered up to cyclic rotation, form six
orbits. Equivalently, there are six binary necklaces of length four.

## Facts & Assumptions

**Given:** The additive group $R=\mathbb Z/4$ acting by rotation on the binary words $C=\{0,1\}^{\mathbb Z/4}$.

[L1] Orbit counting gives $|R|\,|C/R|=\sum_{g\in R}|C^g|$ ([[thm-cauchy-frobenius-orbit-counting]]).

[L2] A left action satisfies the identity and product laws ([[def-group-action]]).

[L3] The residue classes modulo $4$ form an additive group ([[thm-integers-modulo-n-basic-algebra]]).

[L4] The four classes are represented by $0,1,2,3$ ([[thm-standard-representatives-modulo-n]]).

[L5] The set of binary functions on a four-element set has $2^4=16$ elements ([[thm-cardinality-of-a-set-of-functions]]).

## Verification

**Proof technique:** direct.

1.1 Let $(a\cdot c)(i)=c(i-a)$. Addition in [L3] verifies the action laws [L2], and [L4] and [L5] give four rotations acting on $16$ words. [L2, L3, L4, L5]

2.1 Rotation by $0$ fixes all $16$ words; rotations by $1$ and $3$ each force all positions equal and fix $2$ words; rotation by $2$ permits one colour on each opposite pair and fixes $4$ words. [step 1.1, L4, algebra]

3.1 The fixed-point sum is $16+2+4+2=24$, so [L1] gives $24=4|C/R|$ and hence $|C/R|=6$. [step 2.1, L1, algebra] ∎
