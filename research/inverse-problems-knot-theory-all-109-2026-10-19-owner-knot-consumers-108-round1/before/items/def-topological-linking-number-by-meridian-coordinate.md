---
id: def-topological-linking-number-by-meridian-coordinate
kind: definition
title: "Topological linking number as a meridian coordinate"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-knot-exterior
  - lem-string-link-exterior-homology-and-meridian-maps
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Milnor, Link Groups"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf"
      locator: "§§1–2, PDF pp. 1–6, positive meridians and link-group conventions"
---

## Definition

Let $K$ and $J$ be disjoint oriented smooth embedded circles in the oriented
three-sphere. Choose a closed product tube $N(K)$ disjoint from $J$, let
$E_K=S^3\setminus\operatorname{int}N(K)$, and let $\mu_K$ be the positive
meridian. Since $H_1(E_K;\mathbb Z)=\mathbb Z[\mu_K]$, define the topological
linking number relative to this tube by the unique integer $a$ satisfying
$$[J]=a[\mu_K]\quad\text{in }H_1(E_K;\mathbb Z).$$
The chosen tube is part of the data for this definition.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Oriented embedded circles in the oriented three-sphere]]

[[def-knot-exterior|Chosen product tube and knot exterior]]

[[lem-string-link-exterior-homology-and-meridian-maps|Positive meridian basis of the one-component exterior homology]]
