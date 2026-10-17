---
id: alg-complex-scaled-householder-reflector-step
kind: algorithm
title: "Scaled complex Householder reflector step with explicit range status"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [alg-scaled-complex-householder-and-givens-updates, lem-scaled-complex-householder-and-givens-local-backward-error]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "James Demmel, Math 221 Lecture 16: Hessenberg QR iteration"
      url: https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_16.html
    - title: "David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration"
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
---

## Definition

For a stored complex column $x\in\mathbb C^m$, $m\ge1$, and block $B\in\mathbb C^{m\times q}$, $q\ge0$, call the Householder branch of [[alg-scaled-complex-householder-and-givens-updates]] on $[x\;B]$. This is the canonical scaled real-component norm and separately scaled phase-modulus realization, with fixed sequential dots, real-coefficient multiplication, complex product and subtraction order. It includes the exact target-column overwrite. Return its $(v,\widehat\tau,\widehat\alpha,\widehat x,\widehat B)$ on success; a zero column returns identity, zero column and copied $B$. Report an invalid/nonpositive stored-vector norm as `breakdown`; every other invalid/out-of-range operation returns `range-failure` with its operation index and partial values.

The exact representative is $P(v)=I-2vv^*/(v^*v)$ for nonzero stored $v$. Store this product representation rather than identifying the rounded rank-one action with an exactly unitary dense matrix. For polynomial-vector initialization, form the reflector from that external vector and use its separate-block application on the entire active row panel; do not overwrite an unrelated matrix column. The proof-backed target and separate-block coefficients are supplied by [[lem-scaled-complex-householder-and-givens-local-backward-error]].

## Facts & Assumptions

**Given:** The finite stored input dimensions and canonical operationwise arithmetic realization.

[F1] [[alg-scaled-complex-householder-and-givens-updates]] fixes every scaled norm, phase, update and failure operation.

[F2] [[lem-scaled-complex-householder-and-givens-local-backward-error]] supplies the exact unitary representative and local error coefficients for successful calls.

## Proof

1.1 Every loop in [F1] is over a finite input dimension. Its zero branch returns immediately; its nonzero branch either terminates at its first range/invalid operation or completes the finite sequence. The wrapper preserves these results with the stated breakdown label. [given, F1, choose]

1.2 Success requires positive stored-vector squared norm. If $v=0$, its squares and sum are exactly zero, contradicting success. Thus $v\ne0$, and [F2] makes the representative unitary with its explicit target/separate-block error bounds. [F1, F2, step 1.1, algebra] ∎
