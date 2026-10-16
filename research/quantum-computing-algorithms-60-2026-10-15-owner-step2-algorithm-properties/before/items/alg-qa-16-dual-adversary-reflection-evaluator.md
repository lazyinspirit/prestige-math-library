---
id: alg-qa-16-dual-adversary-reflection-evaluator
kind: algorithm
title: Bounded-error evaluation from a dual adversary certificate
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
deps:
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


Given a finite nonconstant Boolean function f and an attained dual-vector certificate with C_0,C_1≤A, take A≥1. On the finite work space
$$\mathcal H=\operatorname{span}\{|start\rangle\}\oplus(\mathbb C^N\otimes V\otimes\mathbb C^2)$$prepare no input-dependent state; define the witness family$$\nu_x=1+\frac1{2A}\sum_i\|v_{x,i}\|^2,\qquad |\psi_x\rangle=\nu_x^{-1/2}\left(|start\rangle+\frac1{\sqrt{2A}}\sum_i|i\rangle|v_{x,i}\rangle|x_i\rangle\right).$$Let Δ project onto span of all |ψ_y⟩ with f(y)=1, and let Π_x project onto |start⟩ plus query states whose response is x_i. Form the exact product$$U_x=(2\Pi_x-I)(2\Delta-I).$$
Run M-point phase estimation on U_x from |start⟩, where M is the least power of two with M≥512A, and output 1 exactly for phase label y=0. Each controlled input-dependent reflection is implemented by the two-query consistency-reflection circuit. No gate-complexity bound is asserted for the input-independent reflection about the full witness span.

## Facts & Assumptions

**Given:** A finite nonconstant Boolean function and a finite dual-vector certificate with C_0,C_1≤A.



[F1] [[thm-qa-16-dual-vector-characterization]]: a nonconstant Boolean function has an attained certificate {v_{x,i}} with class costs C_0,C_1.

[F2] [[lem-qa-16-nonconstant-adversary-at-least-one]]: Adv±(f)≥1 for nonconstant f.

[F3] [[alg-qa-16-controlled-consistency-reflection]]: controlled R_{Π_x} is implemented with two unconditional XOR queries and the stated plus-on-range sign.

[F4] [[def-qc-reflection]]: the plus-on-range reflection is R_Π=2Π-I.

[F5] [[thm-qc-reflection-unitary-involution]]: projector reflections are exact unitary involutions.

[F6] [[def-qc-controlled-unitary-access]]: controlled U has control-first block action diag(I,U).

[F7] [[thm-qc-standalone-global-phase-invariance]]: unit vectors differing by a scalar of modulus one give the same standalone POVM outcome probabilities; this does not identify their eigenphases in a controlled-unitary experiment.

[F8] [[thm-qc-controlled-global-phase-is-relative-phase]]: a scalar phase becomes a relative phase in a controlled block and cannot be discarded there.

[F9] [[alg-qa-quantum-phase-estimation]]: the finite phase-estimation circuit uses controlled powers U^{2^j} and outputs a grid label.

[F10] [[thm-qa-phase-estimation-access-cost]]: implementing those powers by repetition uses Σ_{j=0}^{m−1}2^j=M−1 controlled-U calls.

## Proof

1.1 Take an attained dual certificate from [F1] and set A=max{C_0,C_1}; balance the two classes by reciprocal scaling if needed. For nonconstant f, [F2] permits A≥1. In the finite space H=span{|start⟩}⊕(C^N⊗V⊗C^2), define ν_x=1+(1/(2A))Σ_i||v_{x,i}||², |ψ_x⟩=ν_x^{-1/2}(|start⟩+(1/√(2A))Σ_i|i⟩|v_{x,i}⟩|x_i⟩). The start mode and distinct addresses are orthogonal, so ||ψ_x||²=ν_x^{-1}ν_x=1. [given, F1, F2, F4, construct]

2.1 Let Δ be the orthogonal projection onto span{|ψ_y⟩:f(y)=1}, and let Π_x be the consistency projection onto |start⟩ and query states with response x_i. Set R_Δ=2Δ−I, R_{Π_x}=2Π_x−I, and U_x=R_{Π_x}R_Δ in exactly this order. [F5] makes both reflections unitary involutions. Controlled U_x is implemented by first applying controlled R_Δ and then controlled R_{Π_x} using [F6]; the first is input-independent, and the second is supplied by [F3]. Preserve the exact signs: the standalone state-phase invariance in [F7] does not permit changing the controlled powers, and [F8] makes a scalar phase on their target unitary a relative control phase. [given, F3, F4, F5, F6, F7, F8, step 1.1, algebra]

3.1 Choose M=2^m to be the least power of two with M≥512A. Run the circuit [F9] on U_x with input |start⟩, implementing each controlled U_x^{2^j} by 2^j repetitions of the controlled U_x circuit, as in [F10]. Measure its phase label y∈{0,…,M−1}; output 1 exactly when y=0, and output 0 otherwise. The Δ reflection, witness-space construction, state-preparation description and all other nonoracle gates are not asserted to have an efficient gate implementation. [given, F6, F9, F10, step 2.1, construct] ∎
