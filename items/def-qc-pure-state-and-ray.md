---
id: def-qc-pure-state-and-ray
kind: definition
title: Pure state and ray
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps: [def-real-and-complex-inner-product-space, def-dimension, def-qc-dirac-notation-conversion]
justified_by: [thm-qc-ray-projector-well-defined-and-bijective]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §2.1.2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles"
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §15.1"
      url: https://arxiv.org/pdf/1907.09415
---

## Definition

Let $H$ be a nonzero finite-dimensional complex inner-product space. Two nonzero vectors $x,y\in H$ represent the same **ray** when $y=\alpha x$ for some nonzero $\alpha\in\mathbb C$. A **pure state** is such a ray. If $u$ is a unit representative, its associated operator is $P_u=|u\rangle\langle u|$, with the bra, ket and outer-product convention of [[def-qc-dirac-notation-conversion]]. The theorem [[thm-qc-ray-projector-well-defined-and-bijective]] proves that this operator is a rank-one orthogonal projection independent of the chosen unit representative, so it is the operator representative of the pure state.
