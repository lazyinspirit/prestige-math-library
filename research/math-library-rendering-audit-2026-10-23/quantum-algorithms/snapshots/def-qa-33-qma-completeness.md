---
id: def-qa-33-qma-completeness
kind: definition
title: QMA completeness under promise-preserving reductions
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-33-qma-promise-class
  - def-promise-preserving-reduction
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Watrous, Quantum Computational Complexity"
      url: https://arxiv.org/pdf/0804.3401
      locator: §V.1, QMA and promise problems, PDF pp. 18–19
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: Chapter 14, §14.1, PDF pp. 115–116
---

## Definition

A promise problem is **QMA-hard** if every problem in QMA reduces to it by a deterministic polynomial-time many-one promise-preserving reduction. It is **QMA-complete** if it is QMA-hard and itself belongs to QMA. “Promise-preserving reduction” has the meaning of [[def-promise-preserving-reduction]]; no behavior is required off the source promise.
