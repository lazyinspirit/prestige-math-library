---
id: def-qc-adaptive-pauli-circuit-tree
kind: definition
title: Finite adaptive Pauli-measurement circuit tree
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-pauli-measurement-branch-semantics
  - lem-qc-pauli-measurement-projectors
justified_by: []
dependency_level: 10
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.3"
      url: https://arxiv.org/pdf/1907.09415
    - title: "John Watrous, Understanding Quantum Information and Computation, Lesson 14 §14.1"
      url: https://jhwatrous.github.io/UQIC.pdf
---

## Definition

Fix an ordered $n$-qubit register and a finite gate alphabet as in
[[def-qc-circuit-syntax-and-register-order]]. A **finite adaptive
Pauli-measurement circuit tree** is a finite rooted tree whose leaves are
terminal and whose nonterminal nodes are of one of these two types:

1. A gate node is labelled by a gate occurrence on the ordered register and
   has one successor. Its state update is conjugation by the global unitary
   assigned to that occurrence by
   [[def-qc-circuit-denotational-semantics]].
2. A measurement node is labelled by a Hermitian Pauli observable $M$ and has
   two outgoing edges labelled $b=0,1$. On input density operator $\rho$,
   edge $b$ has weight $p_b=\operatorname{Tr}(\rho P_b)$ and unnormalized
   output $P_b\rho P_b$, where $P_b=(I+(-1)^bM)/2$ as in
   [[def-qc-pauli-measurement-branch-semantics]]. Its child state is
   $P_b\rho P_b/p_b$ only if $p_b>0$; an edge of weight zero is impossible
   and has no conditional state.

The observed measurement transcript is the ordered list of measurement-edge
labels on a root-to-leaf path. The tree itself specifies every later
instruction from that observed history, so its classical control is
deterministic. A path whose edges all have positive weights has probability
equal to their product. A path passing through a zero-weight edge has
probability zero, and its descendants are not evaluated because no
conditional state is assigned. A leaf outputs its terminal state; a ray is
assigned only on a positive-probability path whose input and gate/measurement
updates remain pure.

The complementary-projector and total-probability facts for each measurement
node are supplied by [[lem-qc-pauli-measurement-projectors]]. This definition
does not identify an instrument with a POVM or require uniqueness of such a
POVM.

## Sources

De Wolf §20.3, PDF pp. 187–188, defines measurement-controlled Clifford
circuits with feed-forward from earlier outcomes. Watrous Lesson 14 §14.1,
printed pp. 405–407 (PDF pp. 411–413), defines the two Pauli measurement
branches. The local tree fixes the finite branch and zero-probability
conventions used here.
