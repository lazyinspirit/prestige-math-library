---
id: rem-qa-number-theoretic-extension-scope
kind: remark
title: Scope of number-field and elliptic-curve extensions
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps: []
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Proos and Christof Zalka, Shor’s Discrete Logarithm Quantum Algorithm for Elliptic Curve Groups"
      url: "https://arxiv.org/pdf/quant-ph/0301141"
---

## Scope

The required number-theoretic result on this page is finite cyclic discrete logarithm with an explicit element encoding and an explicit group-operation or coherent-function access profile. The page makes no generic polynomial-time claim for an abstract cyclic group. Each such claim needs a reversible encoding, operation circuits, and their gate and bit costs.

Elliptic-curve and number-field/Pell discussions are context only. They do not supply an elliptic-curve algorithm, a number-field algorithm, or a complexity bound here. Childs §7.1 gives the algebraic addition formulas and says an explicit check (for example, with Mathematica) can establish commutativity, closure, and associativity, but does not carry out that check. In Proos–Zalka §3, the authors state the elliptic-curve group result and refer to [14], J. Chahal's *Topics in Number Theory*, for a proof. Neither passage supplies a detailed local proof that this library can use as an established proof supplier. A future elliptic-curve branch needs local proofs of the nonsingular-cubic group law and associativity, explicit point and field encodings, reversible addition, subgroup-order hypotheses, and gate and bit costs. Number-field branches likewise need explicit representations, arithmetic, reduction, and classical output procedures.
