---
id: ex-reference-network-changes-complexity-not-predictions
kind: example
title: "Changing the reference matrix changes complexity, not the network"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-spectral-network-complexity
  - def-multiclass-margin-ramp-loss
  - thm-spectral-margin-bound-for-multiclass-networks
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Bartlett, Foster, and Telgarsky, Spectrally-normalized margin bounds for neural networks, Definition (1.2)"
      url: "https://arxiv.org/pdf/1706.08498"
---

## Example

Use the one-layer network with identity activation, $A_1=(1,-1)^\top$, and input $x=1$. Its scores are $(1,-1)$ for either choice of reference matrix. With reference $M_1=A_1$, its spectral network complexity is $R_A=0$; with reference $M_1=0$, it is $R_A=2$. The layer operator norm and every prediction stay fixed, while the reference-dependent complexity changes.

## Example references

[[def-spectral-network-complexity]]: defines the network score map, reference-dependent complexity, and induced operator norm.

[[def-multiclass-margin-ramp-loss]]: defines predictions by score maximization and the multiclass margin.

[[thm-spectral-margin-bound-for-multiclass-networks]]: uses reference matrices in its explicit complexity terms.

## Facts & Assumptions

**Given:** The one-layer identity-activation network, its matrix, input, and the two stated reference matrices.

[F1] The score map depends on the layer matrix and activation; the reference matrix enters $R_A$ through the transpose-difference mixed norm. [[def-spectral-network-complexity]]

[F2] The predicted label maximizes the score coordinates, and the margin compares the true-label score with the maximum competing score. [[def-multiclass-margin-ramp-loss]]

[F3] The theorem's layer terms depend on both the layer matrix norms and their distances from the chosen reference matrices. [[thm-spectral-margin-bound-for-multiclass-networks]]

## Verification

**Proof technique:** direct.

1.1 Since the matrix and activation are identical in both cases, the network computes $A_1x=(1,-1)$ for either reference. Its operator norm is $\sqrt2$, so the predicted class is class $1$ and the margin for label $1$ is $2$. [F1, F2, given, algebra]

2.1 If $M_1=A_1$, the transpose-difference norm is zero and the defining formula gives $R_A=0$. If $M_1=0$, that norm is $2$ by summing the two scalar column norms of $(1,-1)$; hence $R_A=\sqrt2(2/\sqrt2)=2$. The calculations change the complexity input only; [F3] does not assert that the floored explicit theorem term vanishes when $R_A=0$. [F1, F3, step 1.1, algebra] ∎
