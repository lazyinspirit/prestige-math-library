---
id: lem-qa-30-mmw-to-sdp-feasibility
kind: lemma
title: "Matrix-weights regret implies SDP approximate feasibility"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 26
deps:
  - def-qa-30-sdp-primal-dual-pair
  - thm-qa-30-sdp-weak-duality
  - thm-qa-30-mmw-regret-bound
  - thm-qa-30-sdp-matrix-expectation-cost
  - lem-qa-30-mmw-dual-output-feasibility
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

The proposed MMW-to-SDP feasibility reduction is retained with the source's normalization, width $w=r+1$, averaged dual weights, complementary primal density matrices, and trace-estimation tolerance as its intended interface. Its proof requires the exact Arora–Kale round invariant and the soundness implication for the feasibility oracle. Those supplier statements and a complete local derivation are not yet available in the assigned pair, so no feasibility consequence is asserted as proved here.

## Unresolved prerequisites

Owner escalation: supply and inspect the exact primal-dual game statement, the two oracle outcomes, the width and normalization conventions, and the complementary-certificate theorem; then prove every constraint and objective slack using the MMW bound and weak duality. A returned ORACLE_FAIL or capped statistical failure is not certified emptiness and cannot be interpreted as HIGHER.
