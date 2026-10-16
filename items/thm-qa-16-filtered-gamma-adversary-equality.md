---
id: thm-qa-16-filtered-gamma-adversary-equality
kind: theorem
title: Boolean-output filtered γ₂ equals the general adversary value
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
deps:
  - def-qa-16-filtered-gamma2
  - lem-qa-16-filtered-gamma2-well-defined
  - def-qa-16-general-adversary-bound
  - lem-qa-16-schur-product-psd
  - lem-qa-16-finite-sdp-strong-duality
  - thm-qa-16-dual-vector-characterization
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


For every finite nonconstant partial Boolean function,
$$\gamma_2(J-F\mid\Delta)=\operatorname{Adv}^{\pm}(f).$$
Here F is the same-output mask, J is all ones, and Δ is the family of input-mismatch masks. The equality is exact for Boolean outputs; no larger-alphabet factor is asserted.

## Facts & Assumptions

**Given:** A finite nonconstant partial Boolean function and its output and mismatch masks.



[F1] [[def-qa-16-filtered-gamma2]]: γ₂(J−F|Δ) is the minimum factorization cost for the all-pairs constraints with target J−F.

[F2] [[lem-qa-16-filtered-gamma2-well-defined]]: this finite factorization program is feasible and attained when its target has zero diagonal.

[F3] [[def-qa-16-general-adversary-bound]]: Adv± uses real symmetric matrices supported on opposite-output pairs.

[F4] [[thm-qa-16-dual-vector-characterization]]: Adv± equals the attained minimum vector-certificate cost with right side J−F.

[F5] [[lem-qa-16-schur-product-psd]]: entrywise products of finite PSD Gram matrices remain PSD.

## Proof

1.1 For A=J−F, the defining factorization equations for γ₂(A|Δ) are exactly Σ_{i:x_i≠y_i}⟨u_{x,i}|v_{y,i}⟩=1 for opposite outputs and 0 for equal outputs. The target has zero diagonal, so [F2] gives a finite attained value. [given, F1, F2, F3, algebra]

2.1 The dual-vector theorem [F4] gives the minimum of precisely these equations and the same maximum row/column squared-norm cost. Its single-family form has cost max{C_0,C_1}. Assigning u_{x,i}=w_{x,i} and v_{y,i}=w_{y,i} for every input gives a factorization of identical cost, while the dual-vector proof constructs the single family by taking the row family on D_0 and the column family on D_1, then applying the Boolean output-label code. Therefore the two minima coincide and equal Adv±(f). [given, F1, F4, step 1.1]

3.1 In the equivalent cross-output-only formulation, tensoring by the two-code label yields equal-output zeros while preserving cross-output constraints. The associated label Gram matrix is PSD, and [F5] confirms its entrywise product with each original Gram matrix is PSD; thus this equivalent realization remains a valid finite Gram factorization with unchanged vector norms. The Boolean output alphabet makes the label inner product exactly 1 on required cross-output mismatches and 0 on same-output mismatches, so there is no output-size loss factor. [given, F4, F5, step 2.1] ∎
