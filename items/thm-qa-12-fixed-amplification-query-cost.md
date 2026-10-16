---
id: thm-qa-12-fixed-amplification-query-cost
kind: theorem
title: "Fixed-round amplitude amplification query count"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - alg-qa-12-amplitude-amplification
  - def-qa-quantum-query-complexity
  - def-qc-circuit-cost-model
  - def-qc-inverse-unitary-access
  - def-qc-reflection
justified_by: []
proof_strategy: direct
axiom_use: "None; the counts are finite arithmetic in the supplied integer k."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

For a fixed $k$-iterate procedure, the displayed factorization of $Q$ uses $k+1$ forward calls to $A$, $k$ inverse calls to $A^\dagger$, $k$ good-subspace phase operations, and $k$ zero-input phase operations. It then uses one projective good/bad instrument. If classical output verification is requested, count its supplied verifier separately (one call when the task model assigns one query to verification). Controlled $A$, state-preparation synthesis, gates, and classical costs are separate access coordinates and are not inferred to be free.

## Facts & Assumptions

**Given:** The fixed-$k$ procedure and access contract.

[F1] [[alg-qa-12-amplitude-amplification]]: one initial preparation $A|0\rangle$, followed by exactly $k$ factors $Q=-A S_0 A^\dagger S_{\mathrm{good}}$, then one final measurement.

[F2] [[def-qa-quantum-query-complexity]]: query cost counts designated calls; gates and other cost coordinates are separate.

[F3] [[def-qc-circuit-cost-model]]: named oracle calls, gates, preparation, and classical computation are distinct coordinates, and no operation is silently assigned zero cost.

## Proof

1.1 The initial preparation in [F1] contributes one forward $A$ call. No inverse call occurs before the iterates. [given, F1, algebra]

1.2 Each of the $k$ displayed $Q$-factors contains exactly one $A$, one $A^\dagger$, one $S_0$, and one $S_{\mathrm{good}}$. Adding these to the initial preparation gives $k+1$ forward $A$ calls, $k$ inverse $A^\dagger$ calls, and $k$ of each phase operation. The final instrument is not an oracle call unless the chosen model explicitly assigns it one. [given, F1, F2, algebra]

2.1 By [F2]–[F3], any verifier, controlled access, gate synthesis, state-preparation construction, and classical postprocessing retains its own declared charge; none changes the factor counts in step 1.2. [F2, F3, step 1.2] ∎
