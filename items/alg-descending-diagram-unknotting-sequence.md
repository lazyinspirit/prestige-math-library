---
id: alg-descending-diagram-unknotting-sequence
kind: algorithm
title: Descending-diagram crossing-change sequence
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-knot-planar-code
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ozsváth, Stipsicz, and Szabó, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "§2.3, Exercise 2.3.8(a), printed p. 24"
    - title: "Danny Calegari, Introduction to Knot Theory"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§4.2, printed pp. 34–36, based diagram traversal conventions"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Input a valid finite planar code for one regular oriented knot diagram and a basepoint in the interior of an edge, away from every crossing and bend. Traverse the oriented code once starting at the basepoint. At each crossing, consider the first branch reached by this traversal. If that branch is under, record the crossing and exchange its over/under label; otherwise leave the crossing unchanged. Return the finite list of recorded crossing changes and the updated planar code. For a code with no crossings, return the empty list and the unchanged code. The input is the valid finite code defined for an oriented knot diagram; this procedure has no invalid-input branch.

## Definition references

[[def-knot-planar-code|Finite planar codes, oriented traversal, and crossing over/under data]]

[[def-regular-oriented-link-diagram|Regular oriented diagrams and their finite transverse crossings]]
