---
id: def-qa-37-fusion-input-encoding
kind: definition
title: "Fusion-tree task input encoding"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-qa-37-anyon-task-and-promise
  - def-qc-tqc-fusion-tree-basis
  - def-qc-tqc-fixed-charge-encoding
justified_by: []
axiom_use: "None; finite labels and fixed trees are used."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: "§§9.14–9.16; fusion-tree encodings, PDF pp. 53–60."
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§II.A, fusion trees and braid groups, PDF pp. 3–6."
---

## Definition

Fix $n\ge1$, ordered simple charges $a_1,\ldots,a_n$, a total charge $c$,
and one parenthesized binary tree. An **encoded fusion input** consists of the
finite tree shape, a simple-charge label on each internal edge, and a
multiplicity-basis index at each trivalent vertex. A label is **admissible**
exactly when every chosen vertex index belongs to the specified basis of its
multiplicity space $V_{xy}^z$; the allowed local vertex data and resulting
orthonormal fusion-tree vectors are those of
[[def-qc-tqc-fusion-tree-basis]]. The input encoding uses fixed self-delimiting
binary codes for charge labels and nonnegative multiplicity indices, with
out-of-range labels rejected as invalid encodings. It also records the total
charge and the chosen computational subspace isometry when one is supplied,
as in [[def-qc-tqc-fixed-charge-encoding]]. An encoded tree is finite classical
data; it does not itself prepare a quantum state or assert a preparation
cost.
