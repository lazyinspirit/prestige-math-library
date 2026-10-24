---
id: thm-qkd-composable-secrecy-sum-bound
kind: theorem
title: QKD composable secrecy is bounded by correctness plus secrecy
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-qkd-finite-authenticated-protocol
  - def-qkd-abort-aware-composable-security
  - lem-qkd-classical-key-copy-map-is-channel
  - lem-qkd-trace-norm-adds-over-classical-blocks
  - lem-qkd-copy-replacement-distance-is-correctness-error
  - lem-qkd-abort-aware-ideal-output-is-state
  - def-qc-trace-distance
  - thm-qc-trace-norm-duality-and-norm-properties
justified_by: []
proof_strategy: direct
axiom_use: None; all registers and block sums are finite, and no choice principle is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christopher Portmann and Renato Renner, Cryptographic Security of Quantum Key Distribution (2014), Theorem 4.1
      url: https://arxiv.org/pdf/1409.3525
    - title: Joseph M. Renes, Quantum Information Theory, ETH Zürich lecture notes (HS2014; revised 4 February 2015), §8.3, Proposition 8.3.1
      url: https://edu.itp.phys.ethz.ch/hs15/QIT/renes_lecture_notes14.pdf
    - title: John Watrous, The Theory of Quantum Information (2018), Chapter 1, §1.1.3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
---

## Statement

For every finite authenticated key-distribution protocol and each fixed allowed adversarial strategy, let $\delta_{\rm id}$, $\varepsilon_{\rm cor}$, and $\varepsilon_{\rm sec}$ be as in [[def-qkd-abort-aware-composable-security]]. Then

$$\delta_{\rm id}\le\varepsilon_{\rm cor}+\varepsilon_{\rm sec}.$$

Consequently, if correctness and secrecy errors are bounded uniformly over all allowed adversarial strategies by $\varepsilon_{\rm cor}$ and $\varepsilon_{\rm sec}$, respectively, then the real-ideal trace distance is uniformly at most their sum.

## Facts & Assumptions

**Given:** A finite protocol, one allowed adversarial strategy, and its output state and error quantities from the Definition.

[F1] [[def-qkd-abort-aware-composable-security]]: the ideal output has the same abort blocks as the real output, and on acceptance is the uniform shared key tensored with the actual transcript-adversary marginal; $\varepsilon_{\rm sec}$ and $\varepsilon_{\rm cor}$ include the acceptance weighting.

[F2] [[lem-qkd-abort-aware-ideal-output-is-state]]: the normalized real and ideal full outputs and all normalized accepted marginals in the trace distances are density operators; the zero-acceptance case gives identical outputs.

[F3] [[lem-qkd-classical-key-copy-map-is-channel]]: $\mathcal C$ copies each classical Alice-key block into the shared $(A,B)$ key block and leaves transcript and adversary factors unchanged.

[F4] [[lem-qkd-copy-replacement-distance-is-correctness-error]]: for the accepted state, copying Alice's key changes it by trace distance exactly $\Pr[K_A\ne K_B\mid\mathrm{accept}]$.

[F5] [[lem-qkd-trace-norm-adds-over-classical-blocks]]: block-diagonal trace norms add over finite classical labels.

[F6] [[def-qc-trace-distance]] and [[thm-qc-trace-norm-duality-and-norm-properties]]: state trace distance is half the trace norm and the trace norm satisfies the triangle inequality and scalar homogeneity.

## Proof

1.1 If $p_{\rm acc}=0$, [F2] gives $\rho_{ABTE}^{\rm real}=\rho_{ABTE}^{\rm ideal}$; both errors are zero by [F1], so the claim holds. Suppose $p_{\rm acc}>0$, and write $\rho_{ABTE}^{\top}$ for the normalized accepted real state and $\sigma_{ABTE}^{\top}:=\tau_{AB}\otimes\rho_{TE}^{\top}$ for the normalized accepted ideal state. The abort blocks cancel in the real-ideal difference. By [F5] the remaining block is the accepted block scaled by $p_{\rm acc}$, so [F6] gives $\delta_{\rm id}=p_{\rm acc}D(\rho_{ABTE}^{\top},\sigma_{ABTE}^{\top})$. [given, F1, F2, F5, F6, algebra]

1.2 Define $\gamma_{ABTE}:=\mathcal C(\rho_{ATE}^{\top})$. The state $\rho_{ATE}^{\top}$ is classical in $A$ and $T$, and the copy formula [F3] gives $\gamma$ by replacing Bob's accepted key with Alice's. Thus [F4] gives $D(\rho_{ABTE}^{\top},\gamma_{ABTE})=q$, where $q:=\Pr[K_A\ne K_B\mid\mathrm{accept}]$. [given, F2, F3, F4]

1.3 The uniform product input $\tau_A\otimes\rho_{TE}^{\top}$ is classical in $A,T$, and [F3] gives $\mathcal C(\tau_A\otimes\rho_{TE}^{\top})=\sigma_{ABTE}^{\top}$. The difference $\rho_{ATE}^{\top}-\tau_A\otimes\rho_{TE}^{\top}$ has one self-adjoint $TE$ block for each $(a,t)$; after copying, exactly those blocks occupy slots $(a,a,t)$ and every other $ABT$ slot is zero. The block trace-norm identity [F5] therefore gives $D(\gamma_{ABTE},\sigma_{ABTE}^{\top})=D(\rho_{ATE}^{\top},\tau_A\otimes\rho_{TE}^{\top})$. [given, F3, F5, F6, algebra]

2.1 By the triangle inequality from [F6], steps 1.2–1.3 yield $D(\rho_{ABTE}^{\top},\sigma_{ABTE}^{\top})\le q+D(\rho_{ATE}^{\top},\tau_A\otimes\rho_{TE}^{\top})$. Multiply by $p_{\rm acc}$ and use [F1]: $p_{\rm acc}q=\varepsilon_{\rm cor}$ because mismatch occurs only on acceptance, and $p_{\rm acc}D(\rho_{ATE}^{\top},\tau_A\otimes\rho_{TE}^{\top})=\varepsilon_{\rm sec}$. Step 1.1 now gives $\delta_{\rm id}\le\varepsilon_{\rm cor}+\varepsilon_{\rm sec}$. Since the strategy was arbitrary, the uniform statement follows by applying the same inequality to each strategy. [given, F1, F6, step 1.1, step 1.2, step 1.3, algebra] ∎
