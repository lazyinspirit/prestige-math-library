---
id: prop-qa-16-general-versus-nonnegative-adversary
kind: proposition
title: Signed weights extend the nonnegative adversary certificate
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
deps:
  - def-qa-16-general-adversary-bound
  - def-qa-16-nonnegative-adversary-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement


For every finite Boolean query problem, $\operatorname{Adv}^{\pm}(f)\ge\operatorname{Adv}(f)$ under the same mismatch masks and normalization.

## Facts & Assumptions

**Given:** The two adversary optimizations under the common Boolean mismatch convention.



[F1] [[def-qa-16-general-adversary-bound]]: Adv± optimizes over all real symmetric admissible matrices, including those with nonnegative entries.

[F2] [[def-qa-16-nonnegative-adversary-bound]]: Adv uses the same ratio and masks but restricts all entries to be nonnegative.

## Proof

1.1 Every nonzero nonnegative admissible matrix for Adv is also an admissible matrix for Adv±, with the identical numerator and denominator because both use the same masks. [given, F1, F2]

2.1 Taking the maximum over the larger signed feasible set cannot decrease the value, so Adv±(f)≥Adv(f). This proves only monotonicity; no strict separation is claimed here. [given, step 1.1] ∎
