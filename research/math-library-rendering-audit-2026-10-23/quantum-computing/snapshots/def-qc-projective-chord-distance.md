---
id: def-qc-projective-chord-distance
kind: definition
title: QC24 Projective Chord Distance
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-qc-pure-state-and-ray
  - def-real-and-complex-inner-product-space
justified_by:
  - lem-qc-projective-chord-distance-formula
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
    - title: John Preskill, Quantum Computation, Chapter 5, Classical and Quantum Circuits
      url: https://www.preskill.caltech.edu/ph219/chap5_15.pdf
    - title: John Watrous, The Theory of Quantum Information
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
---

## Definition

For an integer $D\ge1$ and unit vectors $u,v\in\mathbb C^D$, write $[u]$ and $[v]$ for their pure-state rays and define the projective chord distance by

$$d_{\mathrm{ch}}([u],[v])=\inf_{|\lambda|=1}\|u-\lambda v\|_2.$$

Here $\|\cdot\|_2$ is the norm induced by the root inner product, which is linear in its first argument. The infimum is over unit complex scalars, so it removes only the common phase of a state vector. The companion lemma [[lem-qc-projective-chord-distance-formula]] evaluates this infimum, proves it is attained, gives the closed formula, and proves independence from the chosen unit representatives.
