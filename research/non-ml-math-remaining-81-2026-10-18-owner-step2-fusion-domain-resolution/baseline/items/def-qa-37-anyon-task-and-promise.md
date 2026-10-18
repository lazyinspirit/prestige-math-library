---
id: def-qa-37-anyon-task-and-promise
kind: definition
title: "Finite anyon task and promise interface"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-qa-task-and-promise-domain
  - def-qc-tqc-fusion-tree-basis
  - def-qc-tqc-physical-braid-interface
  - def-qc-circuit-cost-model
justified_by: []
axiom_use: "None; the interface consists of finite strings, matrices, and finite outcome sets."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: "§9.5 and §9.17; braid and measurement conventions, PDF pp. 13–16, 61–62."
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§II.A and §IV.B.c; fusion-tree and Fibonacci models, PDF pp. 3–6, 53–57."
---

## Definition

Work in a fixed unitary braided fusion category and fix an ordered finite list
of simple charge labels, a parenthesized fusion tree, and a total charge for
which the fusion space is nonzero. Simple charges, multiplicity bases, and
admissible fusion-tree vectors have the conventions of
[[def-qc-tqc-fusion-tree-basis]]. A **finite anyon decision task** is a
promise pair $(Y,N)$ of disjoint sets of binary strings with domain
$D=Y\cup N$, together with a finite encoding of admissible fusion-tree input
labels; a solver must answer yes on $Y$ and no on $N$, with no obligation
outside $D$. A **finite anyon search task** is a domain $D$ and a finite-string
witness relation, with a valid witness required only for encoded inputs in
$D$. The input record states the number and order of strands, the exact Artin
word over positive and inverse generators available to the solver, and the
finite set of adjacent fusion-measurement locations. Braid action is the
mathematical unitary action specified by the fixed physical-interface record
[[def-qc-tqc-physical-braid-interface]]; a measurement location is interpreted
in the declared fusion-tree basis. This is a finite access model, not a claim
that a physical device prepares the input or realizes the braid. Input length
and correctness-on-promises follow [[def-qa-task-and-promise-domain]].
