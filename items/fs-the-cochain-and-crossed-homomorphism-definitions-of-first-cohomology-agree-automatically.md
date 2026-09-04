---
id: fs-the-cochain-and-crossed-homomorphism-definitions-of-first-cohomology-agree-automatically
kind: false-statement
title: "FALSE: the cochain and crossed-homomorphism definitions of first cohomology agree automatically"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-first-group-cohomology-via-inhomogeneous-one-cocycles, thm-the-inhomogeneous-one-cocycle-model-agrees-with-crossed-homomorphisms-in-degree-one]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Chaoli Li, Class field theory: proofs"
      url: "https://www.math.columbia.edu/~chaoli/docs/ClassFieldTheory2.html"
---

## Statement

The inhomogeneous cochain definition and the crossed-homomorphism definition of
first cohomology agree automatically, so no separate comparison is needed.

## Facts & Assumptions

**Given:** The two degree-one definitions of first cohomology.

[L1] The inhomogeneous model uses the explicit differential
$d^1(f)(g,h)=f(g)+g\cdot f(h)-f(gh)$
([[def-first-group-cohomology-via-inhomogeneous-one-cocycles]]).

[L2] Their agreement is a theorem proved by explicit identification
([[thm-the-inhomogeneous-one-cocycle-model-agrees-with-crossed-homomorphisms-in-degree-one]]).

## Refutation

**Proof technique:** direct.

1.1 Fact [L1] shows that the cochain model comes with a specific degree-one differential whose sign and action conventions matter. [given, L1]

2.1 Fact [L2] is therefore not vacuous: one must check that the cocycle equation and principal cocycles match the crossed-homomorphism formulas. So the claim that no comparison proof is needed is false. [L1, L2, step 1.1] ∎
