---
id: def-qc-graph-state
kind: definition
title: "Graph state of an ordered finite simple graph"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-finite-simple-graph, def-qc-register-and-computational-basis, def-qc-ordered-bitstring-encoding, def-qc-tensor-register-and-permutation, def-qc-one-qubit-gate-alphabet-and-rotations, def-qc-controlled-phase-rotation, lem-qc-local-gate-wire-embedding]
justified_by: []
dependency_level: 8
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
    - title: "M. Hein et al., Entanglement in graph states and its applications, arXiv:quant-ph/0602096, Definition Graph States I, p. 14"
      url: https://arxiv.org/pdf/quant-ph/0602096
    - title: "Robert Raussendorf, Daniel E. Browne, and Hans J. Briegel, Measurement-based quantum computation on cluster states, arXiv:quant-ph/0301052, pp. 3–5"
      url: https://arxiv.org/pdf/quant-ph/0301052
---

## Definition

Let $G=(V,E)$ be a finite simple graph with a fixed vertex order. Let
$\mathcal H_V=\bigotimes_{v\in V}\mathbb C^2$ use that order and its ordered
computational basis, as in [[def-qc-register-and-computational-basis]],
[[def-qc-ordered-bitstring-encoding]], and
[[def-qc-tensor-register-and-permutation]]. For each edge $\{u,v\}$ let
$CZ_{uv}$ be the unique full-register local embedding from
[[lem-qc-local-gate-wire-embedding]] of the controlled phase gate with angle
$\pi$ from [[def-qc-controlled-phase-rotation]]. Order the endpoints so that
$u$ precedes $v$ in the fixed vertex order; the embedded two-qubit matrix is
$\operatorname{diag}(1,1,1,-1)$ in the ordered pair basis
$|00\rangle,|01\rangle,|10\rangle,|11\rangle$, and every other tensor factor
acts as the identity. Thus the two local factors have the same order as the
edge endpoints, within the full register ordered by $V$. Order the finite edge
set lexicographically by its ordered endpoint indices and define

$$ |G\rangle:=\left(\prod_{\{u,v\}\in E}^{\mathrm{lex}}CZ_{uv}\right)|+\rangle^{\otimes V},\qquad |+\rangle=2^{-1/2}(|0\rangle+|1\rangle). $$

The lexicographic order makes the product a specified finite composition.
If $V=\varnothing$, the tensor product and empty product act on the
one-dimensional trivial register and $|G\rangle$ is its unit vector.

## Remarks

The separate result [[lem-qc-graph-state-edge-gates-commute]] proves that this
vector is independent of edge order.
