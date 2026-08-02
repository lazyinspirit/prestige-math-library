---
id: thm-sum-and-product-of-ideals-are-ideals
kind: theorem
title: 'The sum and product of two-sided ideals are two-sided ideals'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sum-and-product-of-ideals, lem-ideal-criterion-and-intersections, lem-ring-elementary-consequences]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Janssen and Lindsey, Rings with Inquiry, Ideals"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Rings_with_Inquiry_%28Janssen_and_Lindsey%29/04%3A_Ideals_and_Homomorphisms_and_test/4.01%3A_Ideals_in_general"
pipeline_run: null
---

## Statement

The sum and product of two-sided ideals are two-sided ideals.

## Facts & Assumptions

**Given:** Two-sided ideals $I,J\mathrel{\trianglelefteq}R$.

[L1] $I+J$ and $IJ$ are the indicated elementwise and finite-sum sets ([[def-sum-and-product-of-ideals]]).

[L2] The ideal criterion is subtraction closure plus two-sided absorption ([[lem-ideal-criterion-and-intersections]]).

[L3] Ring multiplication distributes over finite sums ([[lem-ring-elementary-consequences]]).

## Proof

**Proof technique:** direct.

1.1 Subtraction closure of $I+J$ and of $IJ$ follows by subtracting representatives and concatenating finite sums. [L1, L2, L3, given, algebra]

2.1 Multiplying a representative on either side keeps it in $I+J$, and distributivity keeps each summand of a product in $IJ$. [step 1.1, L1, L2, L3, given, algebra]

3.1 The closure established in step 2.1 proves both claims. [step 2.1] ∎
