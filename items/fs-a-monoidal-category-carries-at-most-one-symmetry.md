---
id: fs-a-monoidal-category-carries-at-most-one-symmetry
kind: false-statement
title: "FALSE: a monoidal category carries at most one symmetry"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-symmetric-monoidal-category]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Section 1.4"
      url: "https://www.scribd.com/document/891660167/tr10"
---

## Statement

A monoidal category carries at most one symmetry.

## Facts & Assumptions

**Given:** The monoidal category of $\mathbb Z/2$-graded vector spaces over a field of characteristic different from $2$.

[L1] A symmetry is a braiding $c_{X,Y}$ with $c_{Y,X}c_{X,Y}=1$ ([[def-symmetric-monoidal-category]]).

## Refutation

**Proof technique:** direct.

1.1 On $\mathbb Z/2$-graded vector spaces, the ordinary swap $x\otimes y\mapsto y\otimes x$ and the Koszul swap $x\otimes y\mapsto(-1)^{|x||y|}y\otimes x$ are two natural symmetries of the same tensor product. Because the characteristic is not $2$, these two maps differ on odd-degree simple tensors. [L1, given]

2.1 Since these two symmetries differ on odd-degree simple tensors, the monoidal category has more than one symmetry. Therefore the statement is false. [step 1.1] ∎
