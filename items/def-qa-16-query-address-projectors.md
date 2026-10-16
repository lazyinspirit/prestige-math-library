---
id: def-qa-16-query-address-projectors
kind: definition
title: Query-address projectors for bit-oracle algorithms
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - def-qa-16-boolean-query-domain
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
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

## Definition


Let an N-address bit-query algorithm act on
$$\mathcal H=\mathbb C^N\otimes\mathcal H_{\rm response}\otimes\mathcal H_{\rm work},$$
where the first factor has computational basis $\{|i\rangle:i\in[N]\}$. The query-address projector is
$$\Pi_i=|i\rangle\langle i|\otimes I_{\rm response}\otimes I_{\rm work}.$$
It projects onto every state whose query address is i, regardless of response or work state.

## Facts & Assumptions

**Given:** An N-address algorithm with the declared address, response and work tensor factors.



[F1] [[def-qa-16-boolean-query-domain]]: the address set is [N]={1,…,N}.

[F2] [[def-qc-register-and-computational-basis]]: the address register has orthonormal basis {|i⟩:i∈[N]} and all other registers are finite tensor factors.

[F3] [[thm-qc-computational-basis-orthonormal]]: distinct address basis states are orthogonal.

## Proof

1.1 On H=C^N⊗H_response⊗H_work define Π_i=|i⟩⟨i|⊗I_response⊗I_work. Since ⟨i|j⟩=δ_{ij}, Π_iΠ_j=0 for i≠j and Π_i²=Π_i=Π_i*. [given, F2, F3, algebra]

2.1 The ordered address basis resolves identity: Σ_i|i⟩⟨i|=I_{C^N}. Tensoring with the two identity factors gives Σ_iΠ_i=I_H. This includes every response and work state and proves the asserted resolution. [given, F1, F2, step 1.1, algebra] ∎
