---
id: def-locally-flat-topological-knot-concordance
kind: definition
title: "Locally flat topological knot concordance"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-smooth-knot-concordance
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance, Handbook of Knot Theory, Chapter 7"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.1, Definition 2.1 and discussion of locally flat concordance, printed p.322"
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§1.1, Definition 1.9, and §3.1, Definition 3.1, printed pp.2–3 and 10–11"
---

## Definition

Let $K_0,K_1$ be smooth oriented knots in the standard oriented three-sphere $S^3$, and let $I=[0,1]$. They are locally flat topologically concordant if there is a topological proper embedding $f:S^1\times I\to S^3\times I$ whose image is a locally flat annulus, whose boundary circles are $K_0\times\{0\}$ and $K_1\times\{1\}$, and whose annulus orientation induces the boundary $-K_0\times\{0\}\sqcup K_1\times\{1\}$. The annulus must have product collars at both ends. No differentiability of the annulus is assumed.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Smooth oriented endpoint knots]]

[[def-smooth-knot-concordance|The same endpoint and orientation convention in the smooth category]]

[[def-locally-flat-proper-surface-and-concordance-collars|Properness, local-flatness charts, and collars]]

