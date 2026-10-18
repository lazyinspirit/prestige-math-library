---
id: ex-qkd-abort-weighted-secrecy-distance
kind: example
title: Acceptance probability weights an otherwise imperfect one-bit key
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-qkd-finite-authenticated-protocol
  - def-qkd-abort-aware-composable-security
  - thm-qkd-composable-secrecy-sum-bound
  - def-qc-trace-distance
  - thm-qc-trace-norm-spectral-formula
  - thm-qc-trace-norm-unitary-invariance-and-positive-formula
  - def-qc-density-operator
  - def-qc-register-and-computational-basis
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Christopher Portmann and Renato Renner, Cryptographic Security of Quantum Key Distribution (2014), §4.3
      url: https://arxiv.org/pdf/1409.3525
    - title: Joseph M. Renes, Quantum Information Theory, ETH Zürich lecture notes (HS2014; revised 4 February 2015), §8.3
      url: https://edu.itp.phys.ethz.ch/hs15/QIT/renes_lecture_notes14.pdf
---

## Example

Take $\mathsf K=\{0,1\}$, a one-element transcript alphabet $\mathsf T=\{t\}$, and a one-dimensional adversary system $H_E=\mathbb C$. A finite protocol aborts with probability $1/4$ and, on acceptance, both parties always output key $0$. Then the correctness error is $0$, the secrecy error is $3/8$, and the abort-aware real-ideal trace distance is exactly $3/8$.

## Facts & Assumptions

**Given:** The key alphabet, transcript, adversary space, and output law in the Example.

[F1] [[def-qkd-finite-authenticated-protocol]]: the output has a normalized classical state on keys, transcript and adversary; the abort flag is shared.

[F2] [[def-qkd-abort-aware-composable-security]]: the ideal accepted key is uniform and shared; the secrecy error is the acceptance probability times the normalized accepted secrecy distance.

[F3] [[def-qc-trace-distance]]: for density operators, $D(\rho,\sigma)=\tfrac12\|\rho-\sigma\|_1$.

[F4] [[thm-qc-trace-norm-spectral-formula]] and [[thm-qc-trace-norm-unitary-invariance-and-positive-formula]]: for a self-adjoint diagonal matrix, the trace norm is the sum of the absolute diagonal entries.

[F5] [[thm-qkd-composable-secrecy-sum-bound]]: the real-ideal trace-distance error is bounded by the sum of correctness and secrecy errors.

## Verification

**Given:** $\rho^{\rm real}=\tfrac14|\bot,\bot,t\rangle\langle\bot,\bot,t|+\tfrac34|0,0,t\rangle\langle0,0,t|$, with the one-dimensional Eve factor suppressed.

1.1 The ideal state keeps the abort block and replaces the accepted block by $\tfrac34\tau_{AB}$, so $\rho^{\rm ideal}=\tfrac14|\bot,\bot,t\rangle\langle\bot,\bot,t|+\tfrac38|0,0,t\rangle\langle0,0,t|+\tfrac38|1,1,t\rangle\langle1,1,t|$. [given, F1, F2, construct]

1.2 Their difference is $\tfrac38|0,0,t\rangle\langle0,0,t|-\tfrac38|1,1,t\rangle\langle1,1,t|$. The two basis vectors are orthogonal by [F1], so its nonzero eigenvalues are $3/8$ and $-3/8$; [F3]–[F4] give $\delta_{\rm id}=\tfrac12(3/8+3/8)=3/8$. [given, F1, F3, F4, algebra]

2.1 The accepted keys always agree, so $\varepsilon_{\rm cor}=0$. The accepted Alice state is $|0\rangle\langle0|$, whose difference from $\tau_A=\tfrac12(|0\rangle\langle0|+|1\rangle\langle1|)$ has nonzero diagonal entries $1/2,-1/2$ and trace distance $1/2$. Thus $\varepsilon_{\rm sec}=(3/4)(1/2)=3/8$. The theorem's sum bound [F5] holds with equality. [given, F2, F3, F4, F5, step 1.2, algebra] ∎
