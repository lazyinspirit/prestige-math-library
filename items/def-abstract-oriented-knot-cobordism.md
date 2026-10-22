---
id: def-abstract-oriented-knot-cobordism
kind: definition
title: "Abstract oriented cobordism of knot circles"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
dependency_level: 0
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
      locator: "§2.1, Definition 2.1, printed p.322"
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§3, Definition 3.1, printed pp.9–10"
---

## Definition

An oriented circle is a smooth one-dimensional manifold diffeomorphic to the standard oriented circle. An abstract oriented cobordism from an oriented circle $C_0$ to an oriented circle $C_1$ is a compact oriented smooth surface $F$ together with orientation-preserving identifications of its incoming and outgoing boundary components such that $\partial F=-C_0\sqcup C_1$. Here $-C_0$ denotes the same circle with its orientation reversed. The cobordism is abstract: no embedding of $F$, $C_0$, or $C_1$ into a common three- or four-manifold is included in the data.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Oriented knot circles in the standard three-sphere]]

