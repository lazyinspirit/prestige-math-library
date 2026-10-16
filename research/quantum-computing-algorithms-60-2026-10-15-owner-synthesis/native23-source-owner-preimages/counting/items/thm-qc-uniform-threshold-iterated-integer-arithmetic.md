---
id: thm-qc-uniform-threshold-iterated-integer-arithmetic
kind: theorem
title: "Uniform threshold iterated integer arithmetic"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-effective-binary-encoding-and-decoder
  - cor-prime-number-theorem
  - lem-qc-logspace-uniform-iterated-multiplication-tc0
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Eric Allender et al., Time-Space Tradeoffs in the Counting Hierarchy"
      url: https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf
    - title: "Hesse, Allender, and Barrington, Uniform Threshold Circuits for Division"
      url: https://www.cs.rutgers.edu/~allender/papers/division.pdf
proof_strategy: direct
---

## Statement

For $m\ge1$ explicitly listed nonnegative binary integers of at most $w$ bits, iterated sum and product have constant-depth polynomial-size uniform threshold-circuit families over AND/OR/NOT/MAJ. Their exact binary outputs need at most $w+\lceil\log_2m\rceil$ and $mw$ bits, respectively; the claimed uniformity uses the source's logspace-uniform multiplication and DLOGTIME-uniform addition conventions.

## Facts & Assumptions

**Given:** the explicit list encoding, $m\ge1$, and $w\ge1$.

[F1] [[def-effective-binary-encoding-and-decoder]] fixes the total binary code for the integer list and its output words.

[A1] [[lem-qc-logspace-uniform-iterated-multiplication-tc0]] is the intended supplier for the product circuit. Its CRT conversion and discrete-log uniformity proof remain unresolved.

[A2] The iterated-addition circuit requires the DLOGTIME-uniform supplier proposed as `lem-qc-logspace-uniform-iterated-addition-tc0`. That carrier is absent; the current informal carry description is not a proof of its gate family or uniformity.

## Proof

1.1 Each summand is at most $2^w-1$, so the sum is at most $m(2^w-1)<m2^w\le2^{w+\lceil\log_2m\rceil}$. Each factor is at most $2^w-1$, so the product is less than $2^{mw}$. Thus the stated output widths suffice, including zero inputs and leading-zero padding. [F1, given, algebra]

1.2 The product-circuit claim would follow from [A1] with output padded to $mw$ bits. The iterated-addition clause is not established by the output-length bound: it needs a constant-depth threshold construction for all carry interactions and a proof that each gate address is computable in the declared DLOGTIME-uniformity model. The cited Allender treatment invokes a separate DLOGTIME-uniform iterated-addition result; that result has not been authored locally. [A1, A2, step 1.1]

1.3 Consequently, steps 1.1–1.2 prove the output-length claims and identify the exact missing arithmetic suppliers, but do not prove either circuit-existence clause from local arguments. This theorem remains escalated pending complete proofs of [A1] and [A2]; neither result is marked ready. [A1, A2, step 1.1, step 1.2] ∎
