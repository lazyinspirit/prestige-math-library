---
id: thm-qa-30-quantum-membership-separation-cost
kind: theorem
title: "Quantum weak-separation query bound"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - alg-qa-30-quantum-membership-to-separation
  - def-qa-30-quantum-membership-separation-model
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "https://arxiv.org/pdf/1809.00643v4"
      url: "https://arxiv.org/pdf/1809.00643"
verification:
  precheck: n/a
---

## Statement

Under the preceding radius, precision and failure assumptions, Theorem 23 gives O(log(n/ρ)·log((n/ρ)(R/η)(R/r))) quantum queries to MEM_{ε,0}(K) and its inverse to implement SEP_{η,ρ}(K). Composing with the cited classical optimization-from-separation reduction yields Õ(n) membership queries under its own interior-radius and weak-oracle hypotheses; output/gate/bit costs are additional.

## Unresolved prerequisites

Escalated: the complete proof is not supplied. The exact missing argument and supplier interfaces are recorded in the manifest unresolved obligations and batch notes. No partial proof or source citation is treated as acceptance.
