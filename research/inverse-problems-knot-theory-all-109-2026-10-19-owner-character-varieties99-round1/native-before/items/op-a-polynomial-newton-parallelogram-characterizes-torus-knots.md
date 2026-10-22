---
id: op-a-polynomial-newton-parallelogram-characterizes-torus-knots
kind: open-problem
title: "A-polynomial Newton parallelogram characterization"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-knot-a-polynomial
  - def-enhanced-a-polynomial
  - def-coprime-torus-knot
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - thm-knot-exterior-homology-and-longitude
justified_by: []
axiom_use: "No axiom branch is asserted; the question is about knots in the classical 3-sphere."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John A. Baldwin and Steven Sivek, Torus knots, the A-polynomial, and SL(2,C), Question 1.6"
      url: "https://arxiv.org/html/2405.19197v2"
---

## Open problem

For a Laurent polynomial $f(M,L)=\sum_{i,j}c_{ij}M^iL^j$, its Newton polygon is the convex hull of the exponent support $\{(i,j):c_{ij}\ne0\}$. For a nontrivial knot $K\subset S^3$, is $K$ a torus knot if and only if the Newton polygon of its ordinary A-polynomial is a parallelogram with nonzero area?

## Open problem references

[Baldwin and Sivek, Question 1.6](https://arxiv.org/html/2405.19197v2)

## Status

Open. Baldwin–Sivek pose this as Question 1.6 in their 2025 paper. A web search on 2026-10-19 found no later resolution; no proof is asserted here.
