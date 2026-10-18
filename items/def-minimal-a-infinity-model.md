---
id: def-minimal-a-infinity-model
kind: definition
title: "Minimal A∞-model"
status: published
dependency_level: 3
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-a-infinity-algebra
  - def-a-infinity-morphism
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Bernhard Keller, Introduction to A-infinity algebras and modules, §3.3"
      url: "https://arxiv.org/pdf/math/9910179v2"
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §10.3"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Definition

Let $A$ be an uncurved A∞-algebra ([[def-a-infinity-algebra]]). A
**minimal A∞-model** for $A$ is an
uncurved A∞-algebra $H$ with $m_1^H=0$, together with an A∞
quasi-isomorphism $f:H\to A$. Here an A∞ quasi-isomorphism is as defined in
[[def-a-infinity-morphism]]. In an explicit model whose underlying graded
space is identified with $H^*(A,m_1^A)$, the binary product is ordinarily
checked against the product induced by $m_2^A$; this definition does not
assert an existence or transfer theorem.

This is a definition of the data required for a minimal model. It does not
assert that every A∞-algebra has one or that a transfer theorem has been
proved.
