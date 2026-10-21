---
id: def-locally-flat-pl-knot-concordance
kind: definition
title: "Locally flat PL knot concordance"
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
    - title: "Dale Rolfsen, Knots and Links"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
      locator: "Chapter F, PL-category concordance and its tubular-neighborhood convention, printed p.227"
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§3.1, smooth and locally flat topological concordance categories, printed pp.10–11"
---

## Definition

Use the standard PL three-sphere given by the boundary of a fixed PL four-simplex and the product PL structure on $S^3\times I$. A PL map is a map that is affine on every simplex after finite subdivisions of triangulated domain and target. An oriented PL knot is the image of a PL embedding of an oriented triangulated circle into this PL three-sphere. Two such knots are PL concordant when a PL embedding of a triangulated annulus into $S^3\times I$ has them as its lower and upper boundary circles with boundary orientation $-K_0\times\{0\}\sqcup K_1\times\{1\}$, and the embedding is proper, locally flat in the PL category, and has PL product collars at the two boundary circles. PL local-flatness means that each interior pair chart is PL-homeomorphic to $(\mathbb R^4,\mathbb R^2)$ and each boundary pair chart is PL-homeomorphic to $(\mathbb R^4_+,\mathbb R^2_+)$. Annuli with cone singularities or other non-locally-flat points are excluded. This definition makes no assertion identifying PL concordance with smooth or locally flat topological concordance.

## Definition references

[[def-locally-flat-proper-surface-and-concordance-collars|Properness and the standard pair-chart convention]]

[[def-oriented-link-in-s-three-and-ambient-isotopy|The standard three-sphere and oriented smooth knot model]]

