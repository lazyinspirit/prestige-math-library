---
id: cex-unit-group-modulo-fifteen-is-not-cyclic
kind: counterexample
title: "$(\\mathbb Z/15\\mathbb Z)^\\times$ has order $8$ but is not cyclic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-structure-of-the-unit-group-modulo-n, lem-order-characterisation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory, §2.5"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement refuted

The order of a unit group need not be the order of one of its elements: $(\mathbb Z/15)^\times$ has order $8$ but is not cyclic.

## Facts & Assumptions

**Given:** The modulus $15=3\cdot5$.

[L1] The unit-group structure theorem gives the product of the prime-power factors ([[thm-structure-of-the-unit-group-modulo-n]]).

[L2] An element of finite order $r$ has its $t$th power equal to the identity exactly when $r\mid t$ ([[lem-order-characterisation]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], $(\mathbb Z/15)^\times\cong C_2\times C_4$, which has $8$ elements. [L1, algebra]

2.1 For every pair $(x,y)\in C_2\times C_4$, [L2] gives $x^4=1$ and $y^4=1$, so $(x,y)^4=(1,1)$. Another application of [L2] shows its order divides $4$. Thus no element has order $8$ and the group is not cyclic. [step 1.1, L2, algebra] ∎
