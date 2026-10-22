---
id: def-smooth-knot-concordance
kind: definition
title: "Smooth knot concordance"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-oriented-link-in-s-three-and-ambient-isotopy
dependency_level: 1
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
    - title: "Charles Livingston, A Survey of Classical Knot Concordance, Handbook of Knot Theory, Chapter 7"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.1, Definition 2.1, printed p.322"
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§3.1, Definition 3.1, printed pp.10–11"
---

## Definition

Let $K_0,K_1$ be smooth oriented knots in the standard oriented three-sphere $S^3$, and let $I=[0,1]$. A smooth concordance from $K_0$ to $K_1$ is the image of a smooth proper embedding $f:S^1\times I\to S^3\times I$ whose lower and upper boundary circles are $K_0\times\{0\}$ and $K_1\times\{1\}$. The embedding has product collars at both ends: in a neighborhood of each boundary circle it is the corresponding knot embedding crossed with the interval coordinate. Orient the annulus so that its boundary, with the boundary-orientation convention, is $-K_0\times\{0\}\sqcup K_1\times\{1\}$. The knots are smoothly concordant when such an annulus exists.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Smooth oriented knots and their orientations]]

[[def-locally-flat-proper-surface-and-concordance-collars|Properness, local boundary charts, and product collars]]

