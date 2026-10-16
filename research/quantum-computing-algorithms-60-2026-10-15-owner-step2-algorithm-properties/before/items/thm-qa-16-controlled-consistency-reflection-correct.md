---
id: thm-qa-16-controlled-consistency-reflection-correct
kind: theorem
title: The controlled input-consistency circuit realizes the exact reflection
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - alg-qa-16-controlled-consistency-reflection
  - def-qc-reflection
  - thm-qc-reflection-unitary-involution
  - def-qa-standard-bit-query
  - def-qa-16-query-address-projectors
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


For every promised input x, the circuit of [[alg-qa-16-controlled-consistency-reflection]] realizes the control-first block operator
$$\operatorname{diag}(I_{\mathcal H},R_{\Pi_x}),\qquad R_{\Pi_x}=2\Pi_x-I,$$
where $\Pi_x$ projects onto the start vector and all query states whose response equals x_i. The controlled operation uses the plus-on-range sign, including on the distinguished start state.

## Facts & Assumptions

**Given:** The finite controlled consistency-reflection circuit and its projection Π_x.



[F1] [[alg-qa-16-controlled-consistency-reflection]]: compute x_i into a clean scratch bit, phase-flip exactly controlled inconsistent query states, then uncompute; the induced map is controlled R_{Π_x}.

[F2] [[def-qc-reflection]]: R_Π=2Π-I is the plus-on-range reflection.

[F3] [[thm-qc-reflection-unitary-involution]]: this sign is unitary and acts +1 on ran Π and −1 on ker Π.

[F4] [[def-qa-standard-bit-query]]: the XOR query is self-inverse.

[F5] [[def-qa-16-query-address-projectors]]: Π_i resolve identity on all query addresses and other registers.

## Proof

1.1 The algorithm in [F1] applies its phase +1 on the start state and precisely on query basis states with response z=x_i, and −1 on the other query states when c=1. Since these are exactly the orthogonal summands of ran Π_x and ker Π_x, its data-register action is 2Π_x−I=R_{Π_x}. [given, F1, F2, F5, algebra]

2.1 When c=0 the phase test is disabled, so the operation on all data states is I. The two calls are unconditional standard XOR queries, and the second restores the scratch bit because O_x²=I by [F4]. By [F3] the resulting controlled block has exactly the specified reflection sign and is unitary. [given, F1, F3, F4, step 1.1] ∎
