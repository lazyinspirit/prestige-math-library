---
id: def-qa-37-fusion-input-encoding
kind: definition
title: "Fusion-tree task input encoding"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps:
  - def-qa-37-anyon-task-and-promise
  - def-qc-tqc-fusion-tree-basis
  - def-qc-tqc-fixed-charge-encoding
justified_by: []
axiom_use: "None; finite labels and fixed trees are used."
provenance:
  statement: ai-altered
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

In the unitary braided fusion category $\mathcal C$ fixed by
[[def-qa-37-anyon-task-and-promise]], use its fixed representative set
$\operatorname{Irr}(\mathcal C)$. Fix $n\ge1$, ordered inputs
$a_1,\ldots,a_n\in\operatorname{Irr}(\mathcal C)$, a total charge
$c\in\operatorname{Irr}(\mathcal C)$ with nonzero fusion space, and
one parenthesized binary tree. Every charge label below belongs to this
same representative set. An **encoded fusion input** consists of the
finite tree shape, a simple-charge label on each internal edge, and a
multiplicity-basis index at each trivalent vertex. A label is **admissible**
exactly when every chosen vertex index belongs to the specified basis of its
multiplicity space $V_{xy}^z$; the allowed local vertex data and resulting
orthonormal fusion-tree vectors are those of
[[def-qc-tqc-fusion-tree-basis]]. The input encoding uses fixed self-delimiting
binary codes for charge labels and nonnegative multiplicity indices, with
out-of-range labels rejected as invalid encodings. It also records the total
charge and an identifier for the selected computational subspace isometry required by
[[def-qa-37-anyon-task-and-promise]], as in
[[def-qc-tqc-fixed-charge-encoding]]. For a fixed task family, a declared
codebook assigns each such finite identifier a computational dimension and
a particular isometry into the specified fusion space. The codebook and its
isometries are fixed background model data; unknown identifiers are invalid.
If isometries instead vary as part of the classical input, the task must
declare a finite description language and its exact interpretation as
isometries, and charge the full descriptions as input bits. This does not
claim that every arbitrary complex isometry has such a finite description;
an arbitrary abstract isometry may remain background model data only.
The tree labels and isometry identifiers are finite classical data; they do not themselves specify or prepare the initial encoded
quantum state, which is the separate state/preparation field in the task
record.
