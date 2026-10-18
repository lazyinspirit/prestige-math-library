---
id: def-qa-37-anyon-task-and-promise
kind: definition
title: "Finite anyon task and promise interface"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - def-qa-task-and-promise-domain
  - def-qc-tqc-fusion-tree-basis
  - thm-qc-tqc-gauge-covariance
  - def-qc-tqc-fixed-charge-encoding
  - def-qc-tqc-physical-braid-interface
  - def-qc-circuit-cost-model
justified_by: []
axiom_use: "None; the interface consists of finite strings, matrices, and finite outcome sets."
provenance:
  statement: ai-altered
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

Work in a fixed unitary braided fusion category $\mathcal C$ with the
representative set $\operatorname{Irr}(\mathcal C)$ of
[[def-qc-tqc-fusion-tree-basis]]. Fix ordered inputs
$a_1,\ldots,a_n\in\operatorname{Irr}(\mathcal C)$, $n\ge1$, a
parenthesized fusion tree, and a total charge
$c\in\operatorname{Irr}(\mathcal C)$ for which the fusion space is nonzero. Simple charges, multiplicity bases, and
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
For distinct input charges, an adjacent exchange has the typed unitary
F/R action from the current ordered-list fusion space to the space for the
list with those charges exchanged; track that list after every generator.
These colored maps and their Artin relations are supplied by
[[thm-qc-tqc-gauge-covariance]]. If a single-space $B_n$ representation is
required for the physical-interface record
[[def-qc-tqc-physical-braid-interface]], use the finite orthogonal direct
sum of fusion spaces over all distinct orderings of the fixed input
multiset, with the same total $c$. Each generator maps each summand to its
exchanged-list summand by the typed unitary; its inverse reverses that
map. The colored Artin relations on each summand give the relations on
the direct sum, hence a unitary $B_n$ action. Record the occupied summand
and interpret measurements in its declared fusion-tree basis. Identical
charges give the usual single fixed-space action. The physical-interface
record specifies the mathematical action and separately states its
physical realization hypotheses. The
state-preparation field is an abstract task input and does not assert that a
physical device prepares the state or realizes the braid. Input length and
correctness-on-promises follow [[def-qa-task-and-promise-domain]].
