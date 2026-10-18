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
  - def-qc-tqc-fixed-charge-encoding
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
of $n\ge1$ simple charge labels, a parenthesized fusion tree, and a total charge for
which the fusion space is nonzero. Simple charges, multiplicity bases, and
admissible fusion-tree vectors have the conventions of
[[def-qc-tqc-fusion-tree-basis]]. An encoded input subspace is specified by a
fixed-charge isometry as in [[def-qc-tqc-fixed-charge-encoding]]. Each task
instance supplies either an initial unit vector in that subspace as an abstract
quantum input, or a finite state-preparation procedure whose specified output
is that vector and whose preparation operations and ancillas are recorded.
The instance also gives a nonnegative rational error threshold and specifies
the correctness relation and metric to which it applies.

A **finite anyon decision task** is a promise pair $(Y,N)$ of disjoint sets of
binary strings with domain $D=Y\cup N$, together with a finite encoding of
admissible fusion-tree input labels; a solver must answer yes on $Y$ and no on
$N$, with no obligation outside $D$. A **finite anyon search task** is a domain
$D$ and a finite-string witness relation, with a valid witness required only
for encoded inputs in $D$. The input record states the number and order of
strands, the finite alphabet of positive and inverse Artin generators
available to the solver, any prescribed finite braid word, and the finite set
of adjacent fusion-measurement locations.
Braid action is the mathematical unitary action specified by the fixed
physical-interface record [[def-qc-tqc-physical-braid-interface]]; a
measurement location is interpreted in the declared fusion-tree basis. The
state-preparation field is an abstract task input and does not assert that a
physical device prepares the state or realizes the braid. Input length and
correctness-on-promises follow [[def-qa-task-and-promise-domain]].
