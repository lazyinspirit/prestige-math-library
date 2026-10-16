---
id: lem-qa-16-effective-spectral-gap
kind: lemma
title: Effective spectral gap for a product of two reflections
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qc-reflection
  - def-inner-product-space
  - def-qc-dirac-notation-conversion
  - thm-qc-reflection-unitary-involution
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement


Let H be a finite-dimensional complex inner-product space, Π and Δ orthogonal projections on H, R_Π=2Π-I and R_Δ=2Δ-I, and U=R_ΠR_Δ. For 0≤ω≤π, let E_ω be the spectral projection of U onto eigenvalues e^{iφ} whose principal arguments satisfy |φ|≤ω. If Δw=0, then
$$\|E_\omega\Pi w\|\le \frac{\omega}{2}\|w\|.$$

## Facts & Assumptions

**Given:** The finite-dimensional projections and vector w in the Statement, with Δw=0.



[F1] [[def-qc-reflection]]: for an orthogonal projection P, the plus-on-range reflection is R_P=2P-I.

[F2] [[thm-qc-reflection-unitary-involution]]: each such reflection is a unitary involution.

[F3] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional unitary has an orthonormal eigenbasis; its eigenvalues have modulus one.

## Proof

1.1 Put R_P=2P-I and R_D=2D-I. Since D w=0, R_D w=-w; hence U w=R_P R_Dw=-R_Pw and therefore P w=(w+R_Pw)/2=(I-U)w/2. [given, F1, algebra]

2.1 Let E_ω be the orthogonal spectral projection of U onto eigenvectors with eigenvalue e^{iφ} for a principal phase φ∈[-π,π] satisfying |φ|≤ω. By [F2], both reflections are unitary, so U is unitary. By [F3], E_ω commutes with U and has an orthonormal eigenbasis. Thus E_ω P w=(I-U)E_ωw/2, and on each selected eigenvector |1-e^{iφ}|≤|φ|≤ω. The squared norm in that basis is at most (ω/2)^2||E_ωw||²≤(ω/2)^2||w||². [given, F2, F3, step 1.1, algebra]

3.1 Taking square roots proves ||E_ωP w||≤ω||w||/2, including zero- and full-rank projections because step 1.1 used only the projection identities. [given, F1, step 1.1, step 2.1] ∎
