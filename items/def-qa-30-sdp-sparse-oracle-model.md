---
id: def-qa-30-sdp-sparse-oracle-model
kind: definition
title: "Sparse SDP matrix access and computational model"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-30-sdp-primal-dual-pair
  - def-qc-coherent-function-oracle
  - def-qc-circuit-cost-model
  - def-qc-inverse-unitary-access
  - def-qc-controlled-unitary-access
  - def-qc-dirac-notation-conversion
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "https://arxiv.org/pdf/1705.01843v4"
      url: "https://arxiv.org/pdf/1705.01843v4"
    - title: "https://arxiv.org/pdf/1609.05537v5"
      url: "https://arxiv.org/pdf/1609.05537"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

For $d\times d$ matrices with at most $s$ nonzero entries in each row, fix a padded slot set $\{1,\ldots,s\}$ and an invalid-slot sentinel $\bot$. The index oracle is the basis permutation
$$O_I|k,\ell,z\rangle=|k,\ell,z\mathbin{\mathrm{XOR}}j_{k,\ell}\rangle,$$
where $j_{k,\ell}$ is the encoded column of the $\ell$th nonzero in row $k$, or $\bot$ for padding. The value oracle XORs the finite binary encoding of the real and imaginary parts of the matrix entry into a target register. Specify the completion on invalid row/slot encodings, arithmetic precision/rounding, and whether inverse/controlled calls and reverse-location queries are supplied. Sparse sums $\sum_j y_jA_j$ require a separate access implementation; entry oracles do not automatically supply it.

Record matrix sparsity and norms, classical input/preprocessing/output time, matrix-entry queries, sparse-sum and QRAM access, circuit gates, width, ancillas, state preparation, and coefficient-bit costs separately. If QRAM is used, state its unitary address/memory action and charge its construction, updates and queries. Query complexity is not standard-gate complexity without an implementation of each oracle.

## Facts & Assumptions

**Given:** A finite reversible basis encoding, XOR into a target register, and an explicitly supplied completion on every basis input.

[F1] [[def-qc-coherent-function-oracle]]: a reversible function oracle acts as a basis permutation by XORing its encoded function value.

[F2] [[def-qc-inverse-unitary-access]]: inverse access is separately declared and implemented by the adjoint circuit.

## Verification

**Proof technique:** direct.

1.1 For each fixed pair $(k,\ell)$, the padded value $j_{k,\ell}$ is a fixed encoded string. XOR by that same string is an involution, so applying $O_I$ twice restores every basis state, including a slot whose value is the sentinel. [given, F1, algebra]

2.1 The value oracle has the same basis-permutation form with the fixed encoded entry in its target XOR. It too is an involution on every valid or explicitly completed input basis state. Therefore both maps extend linearly to unitaries, and an inverse/controlled version is available only when supplied as in [F2]. [given, F1, F2, step 1.1, algebra] ∎
