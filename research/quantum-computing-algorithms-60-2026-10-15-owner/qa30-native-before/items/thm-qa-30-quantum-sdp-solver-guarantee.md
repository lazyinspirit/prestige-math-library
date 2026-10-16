---
id: thm-qa-30-quantum-sdp-solver-guarantee
kind: theorem
title: "Quantum SDP additive-optimality guarantee"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 29
deps:
  - alg-qa-30-quantum-sdp-solver
  - thm-qa-30-sdp-weak-duality
  - thm-qa-30-mmw-regret-bound
  - def-qa-30-sdp-sparse-oracle-model
  - def-qc-dirac-notation-conversion
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "https://arxiv.org/pdf/1705.01843v4"
      url: "https://arxiv.org/pdf/1705.01843v4"
verification:
  precheck: n/a
---

## Statement

For the normalized sparse SDP promises specified by QA30—$\|A_j\|,\|C\|\le1$, $A_1=I$, $b_1=R$, primal optimal trace at most $R$, attained dual optimum with an optimal vector of $\ell_1$ norm at most $r\ge1$, and maximum matrix sparsity $s$—the proposed sparse-oracle solver is intended to return with probability at least $2/3$ a feasible dual vector of objective at most $\mathrm{OPT}+\varepsilon$. It outputs a classical sparse dual list; it does not output a dense primal matrix or optimize arbitrary objectives.

## Unresolved prerequisites

Escalated: the full Arora–Kale reduction, finite Gibbs/trace and sparse-sum access proofs, binary-search certificate invariant, complete error allocation, and review of the draft Golden–Thompson supplier remain outstanding. The statement records the sourced target, not an accepted theorem.
