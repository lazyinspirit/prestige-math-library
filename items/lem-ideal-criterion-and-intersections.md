---
id: lem-ideal-criterion-and-intersections
kind: lemma
title: 'Ideal criteria and intersections of ideals'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-right-and-two-sided-ideal, lem-subgroup-criterion, def-ring]
justified_by: []
aliases: []
landmark: true
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

Ideal criteria and intersections of ideals.

A nonempty subset $I\subseteq R$ is a two-sided ideal exactly when it is closed
under $x-y$ and under $rx,xr$ for all $r\in R$, $x,y\in I$.  Any intersection
of two-sided ideals is a two-sided ideal, with the empty intersection equal to
$R$.

## Facts & Assumptions

**Given:** A ring $R$ and a subset $I\subseteq R$.

[L1] A two-sided ideal is an additive subgroup closed under left and right multiplication by ring elements ([[def-left-right-and-two-sided-ideal]]).

[L2] A nonempty subset closed under $xy^{-1}$ is a subgroup ([[lem-subgroup-criterion]]).

[L3] A ring has additive inverses and distributive multiplication ([[def-ring]]).

## Proof

**Proof technique:** direct.

1.1 Closure under $x-y$ is exactly the additive subgroup criterion, and the two absorption conditions then give the ideal criterion. [L1, L2, L3, given, algebra]

2.1 An intersection has subtraction closure and both absorption properties because each member ideal has them; for the empty family the intersection is $R$. [step 1.1, L1, L2, L3, given, algebra]

3.1 The criterion and intersection assertion follow. [step 2.1] ∎
