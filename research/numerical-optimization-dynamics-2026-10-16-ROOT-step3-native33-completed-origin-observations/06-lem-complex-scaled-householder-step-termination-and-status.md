---
id: lem-complex-scaled-householder-step-termination-and-status
kind: lemma
title: "The scaled complex Householder wrapper terminates with a unitary representative"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [alg-complex-scaled-householder-reflector-step, alg-scaled-complex-householder-and-givens-updates, lem-scaled-complex-householder-and-givens-local-backward-error]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "James Demmel, Math 221 Lecture 16: Hessenberg QR iteration"
      url: https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_16.html
    - title: "David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration"
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
---

## Statement

For every admitted finite input of [[alg-complex-scaled-householder-reflector-step]], the wrapper terminates with its specified success, identity, breakdown or range-failure return. On a zero input column it uses the identity and copies the separate block exactly, with zero target and separate-block errors and without evaluating $P(0)$. On a successful nonzero input it has $v\ne0$, and $P(v)=I-2vv^*/(v^*v)$ is unitary. Under the hypotheses of [[lem-scaled-complex-householder-and-givens-local-backward-error]], the corresponding target-overwrite or separate-block error bounds apply to the actual application. No unconditional range success is asserted.

## Facts & Assumptions

**Given:** The finite stored input dimensions and canonical operationwise arithmetic realization.

[F1] [[alg-scaled-complex-householder-and-givens-updates]] fixes every scaled norm, phase, update and failure operation.

[F2] [[lem-scaled-complex-householder-and-givens-local-backward-error]] supplies the exact unitary representative and local error coefficients for successful calls.

## Proof

1.1 Every loop in [F1] is over a finite input dimension. Its zero branch returns immediately; its nonzero branch either terminates at its first range/invalid operation or completes the finite sequence. The wrapper preserves these results with the stated breakdown label. [given, F1, choose]

2.1 In the nonzero-input formation branch, success requires positive stored-vector squared norm. If $v=0$, its squares and sum are exactly zero, contradicting success in that branch. Thus $v\ne0$. Put $K=vv^*/(v^*v)$; then $K^*=K$ and $K^2=K$, so $(I-2K)^*(I-2K)=I$. Under its stated hypotheses, [F2] supplies the corresponding target/separate-block error bounds. In the zero-input branch the representative is $I$, the block is copied exactly, and both target and separate-block errors are zero; no expression $P(0)$ is evaluated. [F1, F2, step 1.1, algebra] ∎
