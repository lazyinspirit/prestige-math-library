---
id: lem-qkd-abort-aware-ideal-output-is-state
kind: lemma
title: The abort-aware ideal output and conditional marginals are states
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-qkd-finite-authenticated-protocol
  - def-qkd-abort-aware-composable-security
  - def-qc-density-operator
  - def-trace-of-an-endomorphism
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - thm-non-negative-operator-characterisations
justified_by: []
proof_strategy: direct
axiom_use: None; the proof uses finite sums of nonnegative classical blocks.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christopher Portmann and Renato Renner, Cryptographic Security of Quantum Key Distribution (2014), §4.2
      url: https://arxiv.org/pdf/1409.3525
    - title: Joseph M. Renes, Quantum Information Theory, ETH Zürich lecture notes (HS2014; revised 4 February 2015), §8.3
      url: https://edu.itp.phys.ethz.ch/hs15/QIT/renes_lecture_notes14.pdf
---

## Statement

For a protocol output and fixed adversarial strategy as in [[def-qkd-abort-aware-composable-security]], the real full output is a density operator. If $p_{\rm acc}>0$, the normalized accepted state $\rho_{ABTE}^{\top}$ and the block-defined marginals $\rho_{ATE}^{\top},\rho_{TE}^{\top}$ are density operators; so are $\tau_A$, $\tau_{AB}$, $\tau_A\otimes\rho_{TE}^{\top}$ and the ideal full output $\rho_{ABTE}^{\rm ideal}$. If $p_{\rm acc}=0$, the ideal full output equals the real abort-only state.

## Facts & Assumptions

**Given:** The finite protocol output blocks, their nonnegativity and total trace one, and $p_{\rm acc}$ as in the Definition.

[F1] [[def-qkd-finite-authenticated-protocol]]: the output is block diagonal in $A,B,T$ with nonnegative adversary blocks, the abort block is shared by both parties, and the sum of all block traces is one.

[F2] [[def-qkd-abort-aware-composable-security]]: $p_{\rm acc}$ is the trace sum of accepted blocks, and the conditional marginals and ideal state are the displayed finite block sums.

[F3] [[def-qc-density-operator]]: a density operator is nonnegative with trace one on a nonzero finite-dimensional space.

[F4] [[def-qc-register-and-computational-basis]] and [[def-qc-tensor-register-and-permutation]]: the stated key/transcript product vectors are orthonormal and retain their displayed factor order.

[F5] [[def-trace-of-an-endomorphism]]: in an ordered basis the trace is the finite sum of diagonal entries, so traces add over the displayed classical blocks.

[F6] [[thm-non-negative-operator-characterisations]]: a nonnegative finite-dimensional operator has an orthonormal eigenbasis with nonnegative real eigenvalues.

## Proof

1.1 The real state is nonnegative because its orthogonal classical blocks are nonnegative by [F1]. Its trace is the sum of their traces by [F5], which is one by [F1], so it is a density operator by [F3]. If $p_{\rm acc}>0$, dividing each accepted block by $p_{\rm acc}$ preserves nonnegativity and makes the trace sum equal to one; hence $\rho_{ABTE}^{\top}$ is a density operator. [given, F1, F2, F3, F4, F5, algebra]

2.1 In the explicit sums of [F2], each $ATE$ block is $p_{\rm acc}^{-1}\sum_b\omega_E^{a,b,t}$ and each $TE$ block is $p_{\rm acc}^{-1}\sum_{a,b}\omega_E^{a,b,t}$. These are nonnegative finite sums. By [F5], their traces sum to $p_{\rm acc}^{-1}p_{\rm acc}=1$, so both marginals are density operators by [F3]. The states $\tau_A$ and $\tau_{AB}$ are diagonal with $m$ entries equal to $1/m$ and all other entries zero, so each is nonnegative with trace one. In the product register, $\tau_A\otimes\rho_{TE}^{\top}$ has one block $m^{-1}\rho_{TE}^{\top}$ per key, hence is nonnegative and has trace $m(m^{-1})=1$. [given, F2, F3, F4, F5, step 1.1, algebra]

3.1 The ideal accepted blocks occur only at key pairs $(a,a)$ and equal $m^{-1}\sum_{b,c}\omega_E^{b,c,t}$ for each $a,t$; they are nonnegative and their total trace is $p_{\rm acc}$ by [F5]. Its abort blocks are the original nonnegative blocks with total trace $1-p_{\rm acc}$ by [F1]–[F2]. These lie in mutually orthogonal classical slots, so the full ideal state is nonnegative and has trace $p_{\rm acc}+1-p_{\rm acc}=1$, hence is a density operator by [F3]. If $p_{\rm acc}=0$, nonnegativity makes each accepted block's trace nonnegative; their sum is zero, so each trace is zero. By [F6], each such block has only nonnegative eigenvalues summing to zero and is therefore zero. The accepted ideal block is also zero, so the ideal output equals the real abort-only state. [given, F1, F2, F3, F4, F5, F6, algebra] ∎
