---
id: def-qc-projective-space-atlas
kind: definition
title: QC24 Complex Projective Space and Its Standard Patches
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-qc-pure-state-and-ray
justified_by:
  - thm-qc-projective-chart-dimension
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
    - title: John Watrous, The Theory of Quantum Information, Chapter 1
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: John Preskill, Quantum Computation, Chapter 5, Classical and Quantum Circuits
      url: https://www.preskill.caltech.edu/ph219/chap5_15.pdf
---

## Definition

For an integer $D\ge1$, let $\mathbb{CP}^{D-1}$ be the quotient of $\mathbb C^D\setminus\{0\}$ by $z\sim w$ when $w=\lambda z$ for a nonzero complex scalar $\lambda$. Give $\mathbb C^D\setminus\{0\}$ its usual Euclidean topology and the quotient the topology in which a subset is open exactly when its inverse image is open. Every nonzero ray has a unit representative, and two unit representatives of one ray differ by a unit scalar, so this is the pure-state ray space of [[def-qc-pure-state-and-ray]].

For $j\in\{0,\ldots,D-1\}$ define the standard patch $U_j=\{[z]\in\mathbb{CP}^{D-1}:z_j\ne0\}$ and the candidate coordinate map $\phi_j([z])=(z_i/z_j)_{i\ne j}$, with the coordinates kept in increasing original index order. Its candidate inverse sends $w\in\mathbb C^{D-1}$ to the ray of the vector with $j$th coordinate $1$ and other coordinates given by $w$ in that same order. [[thm-qc-projective-chart-dimension]] proves these are smooth charts, computes their real dimension, and notes that a single standard patch omits part of projective space when $D\ge2$.
