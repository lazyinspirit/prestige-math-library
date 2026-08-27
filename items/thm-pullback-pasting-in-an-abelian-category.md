---
id: thm-pullback-pasting-in-an-abelian-category
kind: theorem
title: "Pullback pasting in an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-pullback-and-pushout-pasting]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Exercise 3.1.vi"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-21
---

## Statement

Pullback pasting and pullback cancellation hold in every abelian category.

## Facts & Assumptions

**Given:** A diagram of two adjacent commutative squares in an abelian
category.

[L1] Pullback and pushout pasting hold in every category in which the relevant
squares exist ([[thm-pullback-and-pushout-pasting]]).

## Proof

**Proof technique:** direct.

1.1 An abelian category is still a category, and the statement only concerns pullback squares that already exist in that ambient category. [L1]

2.1 Therefore the general theorem [L1] applies verbatim to the abelian setting. [L1, step 1.1] ∎
