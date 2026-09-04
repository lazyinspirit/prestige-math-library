---
id: fs-every-monoidal-category-is-rigid
kind: false-statement
title: "FALSE: every monoidal category is rigid"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-not-every-monoidal-category-is-rigid]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Example 2.10.12"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

Every monoidal category is rigid.

## Facts & Assumptions

**Given:** The monoidal category of all vector spaces over a field.

[L1] That category is a counterexample to universal rigidity
([[cex-not-every-monoidal-category-is-rigid]]).

## Refutation

**Proof technique:** direct.

1.1 The counterexample [[cex-not-every-monoidal-category-is-rigid]] exhibits the monoidal category of all vector spaces over a field and an infinite-dimensional object with no dual object. [given, L1]

2.1 Therefore that monoidal category is not rigid. [step 1.1, L1]

3.1 So the universal statement is false. [step 2.1] ∎
