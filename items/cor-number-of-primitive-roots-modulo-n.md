---
id: cor-number-of-primitive-roots-modulo-n
kind: corollary
title: "A modulus with primitive roots has exactly $\\varphi(\\varphi(n))$ primitive roots"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-primitive-root-iff-unit-group-generator, cor-generators-of-a-finite-cyclic-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory, Proposition 2.5.12"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

If $n\ge1$ admits a primitive root, then it has exactly $\varphi(\varphi(n))$ primitive roots.

## Facts & Assumptions

**Given:** A positive modulus $n$ admitting a primitive root.

[L1] Primitive roots are exactly generators of the unit group ([[prop-primitive-root-iff-unit-group-generator]]).

[L2] A cyclic group of order $m$ has $\varphi(m)$ generators ([[cor-generators-of-a-finite-cyclic-group]]).

## Proof

**Proof technique:** direct.

1.1 By the Given and [L1], the unit group is cyclic of order $\varphi(n)$, and its generators are exactly the primitive roots. [given, L1]

2.1 Applying [L2] with $m=\varphi(n)$ yields $\varphi(\varphi(n))$ primitive roots. At $n=1$ this is $\varphi(1)=1$, counting the unique class. [step 1.1, L2] ∎
