---
id: def-qc-finite-positive-effect-family
kind: definition
title: Finite positive effect family
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps: [def-non-negative-and-positive-operator, def-real-and-complex-inner-product-space, def-dimension]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapters 1–3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §15.1"
      url: https://arxiv.org/pdf/1907.09415
---

## Definition

Let $H$ be a nonzero finite-dimensional complex inner-product space, and let $I_H:H\to H$ denote the identity map $x\mapsto x$. An **effect** on $H$ is an endomorphism $E$ such that both $E$ and $I_H-E$ are non-negative in the sense of [[def-non-negative-and-positive-operator]]. A **finite complete positive family** is a nonempty finite list $(E_1,\ldots,E_n)$ of non-negative endomorphisms with $\sum_{a=1}^n E_a=I_H$. The next lemma proves that every member of such a family is an effect, so the family is a finite complete effect family. This is algebraic data only; it does not assert a measurement law.
