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
  - lem-qa-13-pi-rational-bounds
  - thm-qa-16-dual-vector-characterization
  - def-qc-controlled-unitary-access
  - def-qc-reflection
  - thm-qa-phase-estimation-access-cost
  - thm-qc-standalone-global-phase-invariance
  - thm-qc-controlled-global-phase-is-relative-phase
  - def-qc-dirac-notation-conversion
  - def-qa-16-boolean-query-domain
  - alg-qa-16-controlled-consistency-reflection
  - thm-qa-16-controlled-consistency-reflection-correct
  - alg-qa-quantum-phase-estimation
  - def-qa-quantum-query-algorithm
  - lem-qa-16-nonconstant-adversary-at-least-one
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

For every supplied finite certificate with class costs at most $A\ge1$ and a unit distinguished vector $|start\rangle$ as required by [[alg-qa-16-dual-adversary-reflection-evaluator]], the witness vectors are normalized, both specified projections and their exact plus-on-range reflections are well-defined, and the stated ordered controlled product and finite QPE circuit define the evaluator. The input-independent witness-span reflection and other nonoracle gates carry no asserted efficient gate implementation.

## Facts & Assumptions

**Given:** The evaluator of [[alg-qa-16-dual-adversary-reflection-evaluator]] with M≥512A.



[F1] [[alg-qa-16-dual-adversary-reflection-evaluator]]: the evaluator uses normalized ψ_x, U_x=R_{Π_x}R_Δ, M≥512A phase estimation, and accepts iff y=0.

[F2] [[lem-qa-16-effective-spectral-gap]]: if Δφ=0, then ||E_ωΠφ||≤ω||φ||/2 for the |phase|≤ω spectral projection.

[F3] [[thm-qa-phase-estimation-success-and-tail]]: for M-grid QPE, the tail probability beyond distance η is at most 1/(2(K−1)) when K=floor(Mη)≥2; an exact grid phase is output exactly.

[F4] [[thm-qc-reflection-unitary-involution]]: R_Π=2Π−I acts +1 on ran Π and −1 on its orthogonal complement.

[F21] [[thm-qa-16-dual-vector-characterization]]: a nonconstant Boolean function has an attained certificate {v_{x,i}} with class costs C_0,C_1.

[F22] [[lem-qa-16-nonconstant-adversary-at-least-one]]: Adv±(f)≥1 for nonconstant f.

[F23] [[alg-qa-16-controlled-consistency-reflection]]: controlled R_{Π_x} is implemented with two unconditional XOR queries and the stated plus-on-range sign.

[F24] [[def-qc-reflection]]: the plus-on-range reflection is R_Π=2Π-I.

[F25] [[thm-qc-reflection-unitary-involution]]: projector reflections are exact unitary involutions.

[F26] [[def-qc-controlled-unitary-access]]: controlled U has control-first block action diag(I,U).

[F27] [[thm-qc-standalone-global-phase-invariance]]: unit vectors differing by a scalar of modulus one give the same standalone POVM outcome probabilities; this does not identify their eigenphases in a controlled-unitary experiment.

[F28] [[thm-qc-controlled-global-phase-is-relative-phase]]: a scalar phase becomes a relative phase in a controlled block and cannot be discarded there.

[F29] [[alg-qa-quantum-phase-estimation]]: the finite phase-estimation circuit uses controlled powers U^{2^j} and outputs a grid label.

[F30] [[thm-qa-phase-estimation-access-cost]]: implementing those powers by repetition uses Σ_{j=0}^{m−1}2^j=M−1 controlled-U calls.

[F31] The rational bound $\pi<22/7$ is supplied by [[lem-qa-13-pi-rational-bounds]].

## Proof


1.1 Use the supplied finite dual certificate from [F21] and its bound A≥max{C_0,C_1,1}; the domain condition A≥1 agrees with [F22]. The algorithm input specifies |start⟩ to be a unit vector orthogonal to the query summand. In the finite space H=span{|start⟩}⊕(C^N⊗V⊗C^2), define ν_x=1+(1/(2A))Σ_i||v_{x,i}||², |ψ_x⟩=ν_x^{-1/2}(|start⟩+(1/√(2A))Σ_i|i⟩|v_{x,i}⟩|x_i⟩). The start mode and distinct addresses are orthogonal, so ||ψ_x||²=ν_x^{-1}ν_x=1. [given, F1, F21, F22, F24, construct]

2.1 Let Δ be the orthogonal projection onto span{|ψ_y⟩:f(y)=1}, and let Π_x be the consistency projection onto |start⟩ and query states with response x_i. Set R_Δ=2Δ−I, R_{Π_x}=2Π_x−I, and U_x=R_{Π_x}R_Δ in exactly this order. [F25] makes both reflections unitary involutions. Controlled U_x is implemented by first applying controlled R_Δ and then controlled R_{Π_x} using [F26]; the first is input-independent, and the second is supplied by [F23]. Preserve the exact signs: the standalone state-phase invariance in [F27] does not permit changing the controlled powers, and [F28] makes a scalar phase on their target unitary a relative control phase. [given, F23, F24, F25, F26, F27, F28, step 1.1, algebra]

3.1 Choose M=2^m to be the least power of two with M≥512A. Run the circuit [F29] on U_x with input |start⟩, implementing each controlled U_x^{2^j} by 2^j repetitions of the controlled U_x circuit, as in [F30]. Measure its phase label y∈{0,…,M−1}; output 1 exactly when y=0, and output 0 otherwise. The Δ reflection, witness-space construction, state-preparation description and all other nonoracle gates are not asserted to have an efficient gate implementation. [given, F26, F29, F30, step 2.1, construct]

3.2 Suppose f(x)=1. Then ψ_x lies in ran Δ by the definition of Δ, and lies in ran Π_x because every response register in it equals x_i. Thus U_xψ_x=ψ_x, so ψ_x is a phase-zero eigenvector. The zero-label probability from |start⟩ is at least its squared projection onto that eigenspace: |⟨ψ_x|start⟩|²=1/ν_x≥2/3, since Σ_i||v_{x,i}||²≤C_1≤A gives ν_x≤3/2. The exact reflection signs in [F4] ensure both range eigenvalues are +1. [given, F1, F4, step 2.1, algebra]

4.1 Suppose f(x)=0 and define |φ_x⟩=μ_x^{-1/2}(|start⟩−√(2A)Σ_i|i⟩|v_{x,i}⟩|1−x_i⟩), μ_x=1+2AΣ_i||v_{x,i}||²≤1+2A². Its displayed terms are orthogonal, so it is unit. For each y with f(y)=1, the certificate constraints give ⟨ψ_y|φ_x⟩=ν_y^{-1/2}μ_x^{-1/2}(1−Σ_{i:x_i≠y_i}⟨v_{y,i}|v_{x,i}⟩)=0. Therefore Δφ_x=0. The response |1−x_i⟩ is orthogonal to |x_i⟩, so Π_xφ_x=|start⟩/√μ_x. [given, F1, F4, step 3.2, algebra]

5.1 Set ω=1/(4A)≤1/4 and let E_ω project onto eigenphases |φ|≤ω of U_x. Applying [F2] to the unit vector φ_x and using step 4.1 gives ||E_ω|start⟩||²≤μ_xω²/4≤(1+2A²)/(64A²)≤3/64. [given, F1, F2, step 4.1, algebra]

6.1 For an eigenphase outside this interval, the QPE event y=0 is contained in the event that the measured grid point is at circular phase distance at least η=ω/(2π) from the true phase. Since Mω/(2π)≥64/π>224/11>20 by [F31], K=floor(Mη)≥20, and [F3] bounds this conditional probability by 1/38. Spectral components are orthogonal, so the total false-positive probability is at most 3/64+1/38<1/3. Thus the output is correct with probability at least 2/3 on 0-inputs; step 3.2 gives the same guarantee on 1-inputs. [given, F1, F3, F31, step 3.2, step 5.1, algebra] ∎

