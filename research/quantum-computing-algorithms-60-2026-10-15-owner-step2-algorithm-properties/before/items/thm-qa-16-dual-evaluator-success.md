---
id: thm-qa-16-dual-evaluator-success
kind: theorem
title: Dual reflection evaluator has bounded-error correctness
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 25
deps:
  - alg-qa-16-dual-adversary-reflection-evaluator
  - lem-qa-16-effective-spectral-gap
  - thm-qa-phase-estimation-success-and-tail
  - thm-qc-reflection-unitary-involution
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


For every x∈D, the dual reflection evaluator outputs f(x) with probability at least 2/3. On 1-inputs its exact common witness vector has zero phase and squared overlap with |start⟩ at least 2/3. On 0-inputs its false-positive probability is at most $3/64+1/38<1/3$.

## Facts & Assumptions

**Given:** The evaluator of [[alg-qa-16-dual-adversary-reflection-evaluator]] with M≥512A.



[F1] [[alg-qa-16-dual-adversary-reflection-evaluator]]: the evaluator uses normalized ψ_x, U_x=R_{Π_x}R_Δ, M≥512A phase estimation, and accepts iff y=0.

[F2] [[lem-qa-16-effective-spectral-gap]]: if Δφ=0, then ||E_ωΠφ||≤ω||φ||/2 for the |phase|≤ω spectral projection.

[F3] [[thm-qa-phase-estimation-success-and-tail]]: for M-grid QPE, the tail probability beyond distance η is at most 1/(2(K−1)) when K=floor(Mη)≥2; an exact grid phase is output exactly.

[F4] [[thm-qc-reflection-unitary-involution]]: R_Π=2Π−I acts +1 on ran Π and −1 on its orthogonal complement.

## Proof

1.1 Suppose f(x)=1. Then ψ_x lies in ran Δ by the definition of Δ, and lies in ran Π_x because every response register in it equals x_i. Thus U_xψ_x=ψ_x, so ψ_x is a phase-zero eigenvector. The zero-label probability from |start⟩ is at least its squared projection onto that eigenspace: |⟨ψ_x|start⟩|²=1/ν_x≥2/3, since Σ_i||v_{x,i}||²≤C_1≤A gives ν_x≤3/2. The exact reflection signs in [F4] ensure both range eigenvalues are +1. [given, F1, F4, algebra]

2.1 Suppose f(x)=0 and define |φ_x⟩=μ_x^{-1/2}(|start⟩−√(2A)Σ_i|i⟩|v_{x,i}⟩|1−x_i⟩), μ_x=1+2AΣ_i||v_{x,i}||²≤1+2A². Its displayed terms are orthogonal, so it is unit. For each y with f(y)=1, the certificate constraints give ⟨ψ_y|φ_x⟩=ν_y^{-1/2}μ_x^{-1/2}(1−Σ_{i:x_i≠y_i}⟨v_{y,i}|v_{x,i}⟩)=0. Therefore Δφ_x=0. The response |1−x_i⟩ is orthogonal to |x_i⟩, so Π_xφ_x=|start⟩/√μ_x. [given, F1, F4, step 1.1, algebra]

3.1 Set ω=1/(4A)≤1/4 and let E_ω project onto eigenphases |φ|≤ω of U_x. Applying [F2] to the unit vector φ_x and using step 2.1 gives ||E_ω|start⟩||²≤μ_xω²/4≤(1+2A²)/(64A²)≤3/64. [given, F1, F2, step 2.1, algebra]

4.1 For an eigenphase outside this interval, the QPE event y=0 is contained in the event that the measured grid point is at circular phase distance at least η=ω/(2π) from the true phase. Since Mω/(2π)≥64/π>20, K=floor(Mη)≥20, and [F3] bounds this conditional probability by 1/38. Spectral components are orthogonal, so the total false-positive probability is at most 3/64+1/38<1/3. Thus the output is correct with probability at least 2/3 on 0-inputs; step 1.1 gives the same guarantee on 1-inputs. [given, F1, F3, step 1.1, step 3.1, algebra] ∎
