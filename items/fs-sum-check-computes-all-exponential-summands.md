---
id: fs-sum-check-computes-all-exponential-summands
kind: false-statement
title: "False: the sum-check verifier enumerates the cube"
status: draft
origin: pipeline
deps: [def-sum-check-instance-and-protocol, lem-sum-check-verifier-is-polynomial-time-given-point-evaluation]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct calculation
sources:
  references:
    - title: "Justin Thaler, Proofs, Arguments, and Zero-Knowledge (2023), \u00a74.1 pp.33\u201338"
      url: "https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf"
---

## Statement

**False assertion.** A sum-check verifier must evaluate its polynomial separately at all $2^n$ Boolean points in order to verify the claimed cube sum.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] The verifier evaluates the fixed polynomial g only at the final challenge vector ([[def-sum-check-instance-and-protocol]]).

[F2] Its field work is O(D) plus a single terminal point evaluation, with D=sum_i(d_i+1) ([[lem-sum-check-verifier-is-polynomial-time-given-point-evaluation]]).

## Refutation

1.1 The protocol performs coefficient checks and evaluations of the received univariate messages; its only trusted evaluation of $g$ is at the final challenge vector. The resource bound is $O(D)$ field operations plus that single evaluation, for a complete execution. [F1, F2]

2.1 For a concrete family take $g=\prod_{i=1}^nX_i$, $n\geq1$, and $d_i=1$. A trusted evaluator starts at one and multiplies the $n$ coordinates, so it costs at most $n$ multiplications. Since $D=2n$, verifier work is $O(n)$, with one evaluation of $g$, not separate evaluations at the $2^n>1$ vertices. The cube sum is one because only the all-one vertex contributes; this includes n=1 and fields of characteristic two. This refutes the asserted necessity. The prover and the trusted evaluator in other instances may have much larger costs. [step 1.1, algebra] ∎
