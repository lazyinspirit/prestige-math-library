---
id: def-qa-19-hamiltonian-access-cost-model
kind: definition
title: Continuous-time Hamiltonian access cost model
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qa-19-finite-matrix-dynamics
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-circuit-cost-model
  - def-qc-uniform-circuit-family
justified_by: []
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
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 17 §17.1
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Chapter 17 §17.1, PDF pp.81–82 (printed p.74 on PDF p.82): graph walks are finite matrix evolutions, distinct from their implementation."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.1"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 9 §9.1, printed pp.71–72/PDF pp.83–84: matrix evolution is defined mathematically before Hamiltonian-simulation costs are considered."
---

## Definition

Let $V$ be a finite-dimensional complex register and let $H=H^*$ be its
declared generator. The mathematical target at time $t\in\mathbb R$ is
$U_H(t)$ from [[def-qa-19-finite-matrix-dynamics]]. A **Hamiltonian-access
contract** records how this target and its input data are supplied; it does
not equate a matrix description with an implementation.

The contract declares one input representation:

1. **Explicit terms:** a finite ordered list of Hermitian matrices
   $H_1,\ldots,H_m$, real coefficients $c_1,\ldots,c_m$ with their exact or
   finite-precision binary encodings, and the identity $H=\sum_{j=1}^m c_jH_j$.
   If the implementation calls the individual operations
   $U_{c_jH_j}(t_j)$, the contract lists every operation, its order, and its
   charge. The equality of their composition with $U_H(t)$ must be proved or
   supplied as a separate simulation certificate; it does not follow from the
   term list alone.
2. **Row-sparse input:** an integer sparsity bound $d$, a row-location oracle,
   and an entry-value oracle returning each selected matrix entry to a declared
   coefficient precision. Each oracle's full unitary action on invalid
   encodings, and every forward, inverse, or controlled call actually used, are
   explicit parts of the contract.

The contract separately names an implementation of the requested evolution:

- an ideal continuous-time operation $U_H(t)$ with its declared evolution
  time and/or evolution-query charge; or
- a finite unitary circuit/simulator $V_{H,t,\epsilon}$ with a supplied
  certificate $\|V_{H,t,\epsilon}-U_H(t)\|_{\rm op}\le\epsilon$ and its gate,
  query, description-bit, coefficient-precision, and classical-construction
  costs.

Initial-state preparation and final measurement are separate supplied stages.
For each stage the contract records a triple $(q,g,b)$: $q$ is the number of
declared oracle or evolution calls, $g$ is the finite gate count in the chosen
gate model, and $b$ is the declared input, operation-description, coefficient,
and precision-bit charge. Circuit description length and gate count follow
[[def-qc-circuit-cost-model]]; they are distinct coordinates. Evolution time is
reported separately unless the chosen model explicitly includes it in a query
coordinate. Serial composition adds the declared stage coordinates. A
controlled or inverse operation is charged only if the model explicitly grants
that access or supplies a construction, as in
[[def-qc-controlled-unitary-access]] and
[[def-qc-inverse-unitary-access]].

A complexity claim for a family of such inputs must also specify a uniform
generator for the full circuit and access descriptions, as in
[[def-qc-uniform-circuit-family]], and state the costs as functions of the
input size. The matrix alone supplies no efficient $U_H(t)$, controlled call,
inverse call, or zero-cost operation. In particular, a Boolean marked-item
oracle does not by itself grant the continuous-time operation
$e^{-it|e_w\rangle\langle e_w|}$; any conversion or simulation and its
precision are separately specified and charged.
