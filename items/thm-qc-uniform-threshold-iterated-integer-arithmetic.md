---
id: thm-qc-uniform-threshold-iterated-integer-arithmetic
kind: theorem
title: "Uniform threshold iterated integer arithmetic"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - lem-qc-logspace-uniform-iterated-addition-tc0
  - lem-qc-logspace-uniform-iterated-multiplication-tc0
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Eric Allender et al., Time-Space Tradeoffs in the Counting Hierarchy"
      url: https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf
    - title: "Hesse, Allender, and Barrington, Uniform Constant-Depth Threshold Circuits for Division and Iterated Multiplication"
      url: https://www.cs.rutgers.edu/~allender/papers/division.pdf
proof_strategy: direct
---

## Statement

For $m,w\ge1$ explicitly listed nonnegative $w$-bit integers, iterated sum and product have constant-depth polynomial-size uniform threshold-circuit families over AND, OR, NOT and MAJ. Their exact binary outputs need at most $w+\lceil\log_2m\rceil$ and $mw$ bits, respectively. Addition is DLOGTIME-uniform and multiplication is logspace-uniform, each in the total input length, under the explicit bit-array convention: input bit $x_{i,j}$ has tuple address $(i,j)$, dimensions are supplied to the uniformity machine, and power-of-two padding uses zero entries. Circuit gate addresses have a fixed number of binary coordinate fields. The claim concerns this explicit representation, rather than arbitrary effectively decodable encodings.

## Facts & Assumptions

**Given:** $m,w\ge1$ and the explicit input array and uniformity conventions in the Statement.

[F1] [[lem-qc-logspace-uniform-iterated-addition-tc0]] constructs exact iterated addition with DLOGTIME-uniform constant-depth polynomial-size threshold circuits in this array convention.

[F2] [[lem-qc-logspace-uniform-iterated-multiplication-tc0]] constructs exact iterated multiplication with logspace-uniform constant-depth polynomial-size threshold circuits in this array convention.

## Proof



1.1 Each summand is at most $2^w-1$, so their sum is at most $m(2^w-1)<m2^w\le2^{w+\lceil\log_2m\rceil}$. Each factor is less than $2^w$, so their product is less than $2^{mw}$. Thus the stated widths suffice, including zero inputs and leading-zero padding. [given, algebra]

2.1 Apply [F1] to the input bit array to obtain the sum circuit, with precisely the permitted sum output width and the declared DLOGTIME uniformity. Its construction permits arbitrary $m,w$; in particular the uniformity bound is logarithmic in the explicit array length even when the number of summands is large. Apply [F2] to the same array to obtain the product circuit, padded to $mw$ bits, with the declared logspace uniformity. These suppliers use exactly the gate basis and representation required here. Together with step 1.1, they establish all the circuit and output claims. [F1, F2, step 1.1, construct] ∎
