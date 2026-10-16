---
id: thm-qa-30-quantum-sdp-solver-cost
kind: theorem
title: "Quantum SDP query bound and QRAM cost boundary"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 30
deps:
  - alg-qa-30-quantum-sdp-solver
  - thm-qa-30-quantum-sdp-solver-guarantee
  - def-qa-30-sdp-sparse-oracle-model
  - def-qc-dirac-notation-conversion
  - def-qa-30-sdp-reference-state-access
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

The source reports $\widetilde O(\sqrt{nm}s^2(Rr/\varepsilon)^8)$ queries to matrix input oracles and the same order of gates in its stated computational model, with exponent $5$ for diagonal LPs. The general construction uses a unit-cost QRAM primitive in the sparse-sum implementation. Any standard-circuit claim must add or prove the QRAM construction/update costs, reference-state preparation $C_\Phi$, Gibbs/QSVT preparation, matrix-expectation access, state preparation, output bits, and classical preprocessing. The source gate bound applies only if those explicit costs fit the stated model and tilde bound.

## Unresolved prerequisites

Escalated: trace each sparse-sum query through finite address/value circuits and prove the source exponent under the chosen access profile. For arbitrary $d$, retain $C_\Phi$ additively unless a finite preparation and cost proof is supplied. The LP exponent $5$ is restricted to diagonal instances.
