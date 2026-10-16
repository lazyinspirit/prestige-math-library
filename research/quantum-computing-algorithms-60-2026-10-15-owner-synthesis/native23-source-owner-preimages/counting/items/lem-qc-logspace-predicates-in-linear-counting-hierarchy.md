---
id: lem-qc-logspace-predicates-in-linear-counting-hierarchy
kind: lemma
title: "Logspace predicates in a fixed linear counting hierarchy level"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-qc-unbounded-error-time-space-counting-model
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Allender et al., Time-Space Tradeoffs in the Counting Hierarchy, proof of Lemma 5, step 2"
      url: https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf
proof_strategy: direct
---

## Statement

For every language decidable by a deterministic O(log n)-space machine on strings of length n, there is a fixed integer k such that the language lies in LCH_k under the declared sequential or random-access convention. The level may depend on the machine and its uniformity encoding.


## Facts & Assumptions

**Given:** a fixed deterministic logspace machine and one of the declared read-only input conventions.

[F1] [[def-qc-unbounded-error-time-space-counting-model]] fixes the oracle and input-access conventions for each LCH level.

## Proof

1.1 Allender et al. use the Nepomnjaščii theorem to place a logspace-uniform gate-connectivity predicate in some fixed level of their linear counting hierarchy; that is exactly the interface required by the large threshold-circuit evaluation in [[lem-qc-counting-time-space-to-linear-hierarchy]]. [F1, given]

1.2 The local derivation from logspace configurations to a constant number of linear-time majority-oracle levels, including the exact uniformity encoding, is not reproduced here. The cited result alone does not fill this proof gap, so the claim remains escalated and must not be used as an accepted supplier. [step 1.1, F1]
