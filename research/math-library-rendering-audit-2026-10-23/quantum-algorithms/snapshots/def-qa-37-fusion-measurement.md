---
id: def-qa-37-fusion-measurement
kind: definition
title: "Fusion-channel measurement access"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
deps:
  - def-qa-37-fusion-input-encoding
  - def-qc-projective-measurement
  - def-qc-tqc-f-symbol
  - thm-qc-tqc-f-symbol-unitary
justified_by: []
axiom_use: "None; finite-dimensional orthogonal projections are choice-free."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: "§§9.14–9.15, fusion channels and measurements, PDF pp. 53–59."
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§IV.B.c, Fibonacci fusion and braid matrices, PDF pp. 53–57."
---

## Definition

Let $H$ be a fixed finite fusion space with an orthonormal fusion-tree basis
in the category and simple-representative domain of
[[def-qa-37-fusion-input-encoding]]. For a colored task, $H$ is the
currently occupied ordered-list summand tracked by the task record.
For an adjacent pair of leaves or a declared adjacent pair of subtrees, recouple
the tree by its specified unitary $F$-moves so that the pair fuses first. For
each allowed simple total charge $a$ of that pair, let $P_a$ be the orthogonal
projection onto the span of basis vectors whose pair label is $a$, transported
back by the inverse recoupling unitary. Distinct channel subspaces are
orthogonal and their direct sum is $H$, so $(P_a)_a$ is a finite projective
measurement in the sense of [[def-qc-projective-measurement]]. Its outcome is
$a$, its unnormalized branch vector on input $\psi$ is $P_a\psi$, and the
recoupling follows the inverse-precomposition F convention of
[[def-qc-tqc-f-symbol]], whose unitarity is proved in
[[thm-qc-tqc-f-symbol-unitary]]. The branch vector is unnormalized until its probability is checked.
