---
id: lem-author-9ab3274efad8-finite-product-roots
kind: lemma
title: Roots in a finite product of groups
status: published
domain: mathematics
deps: []
dependency_roles: {}
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
Let A₁, …, Aᵣ be finitely many abelian groups, with r ≥ 0, and n a positive integer. If multiplication by n is surjective on each Aᵢ, then it is surjective on their product. The empty product is the zero group.

## Facts & Assumptions

**Given:** The groups and n as stated.

**Goal:** Prove surjectivity on the product.

## Proof

1.1 Given an element $(a_i)$ of the product, choose for each of the finitely many indices an element $x_i$ with $nx_i=a_i$; this uses only finite choice. If $r=0$, take the unique element of the empty product. [given, choose]

2.1 Addition in the product is coordinatewise, so $n(x_i)=(nx_i)=(a_i)$. Hence every product element has a preimage. [step 1.1, algebra] ∎
