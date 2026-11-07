---
dependency_level: 1
id: thm-bls-rational-transcript-core-terminates-and-encloses
kind: theorem
title: The exact rational transcript core terminates and encloses
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- alg-bls-exact-rational-interval-transcript-core
- def-complete-ordered-real-field
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Local bounded reconstruction of the BLS/BS07/Kim method
    url: https://arxiv.org/pdf/1803.06016v2
    locator: Section5 interval method; complete proof for the local exact syntax
---

## Statement

On every finite input in its stated encoding, including malformed encodings, the exact rational interval transcript core halts with a rejection or its stated output. For a nonrejected input, assign one real number to each leaf, contained in its supplied interval. Interpret constants and arithmetic nodes exactly over the reals. Every exact node value is defined and belongs to its computed interval; hence the root interval encloses its exact value. This is conditional on the supplied leaf enclosures, not on a backend whose correctness has been silently assumed.

## Facts & Assumptions

**Given:** A finite encoded input and, for soundness, one admissible real leaf assignment.

[F1] The exact syntax, backward-index requirement, rejection rules and endpoint operations are those of the core. [[alg-bls-exact-rational-interval-transcript-core]]

[F2] Real arithmetic is an ordered field containing the rational numbers. [[def-complete-ordered-real-field]]

## Proof

1.1 Every string, list and node is finite. Parsing digits and checking the finite list of allowed tags and indices uses finite scans. Rational addition, multiplication, reciprocal of a nonzero rational and comparison reduce to finitely many integer additions, multiplications and sign comparisons; a representation need not be reduced to lowest terms. Thus each node check and each endpoint operation is finite. There are $L$ nodes and no backward-index cycle or external backend invocation. Rejecting at a failed check halts; otherwise the finite scan returns the designated root. [given, F1, algebra]

1.2 If $x\in[a,b]$ and $y\in[c,d]$, the ordered-field laws [F2] give the displayed addition/subtraction bounds. For multiplication, fixing either variable makes the product affine, so every value lies between the minimum and maximum of the four endpoint products. If $0\notin[c,d]$, reciprocal is decreasing on that interval and lies in $[1/d,1/c]$; in particular the exact divisor cannot be zero. Squaring decreases on the negative half-line, increases on the positive half-line, and has its minimum zero when the interval crosses zero. These observations prove enclosure for each stated rule, without any dyadic rounding assumption. [given, F1, F2, algebra]

2.1 Induct on the listed node index. Input and constant nodes satisfy enclosure by hypothesis or exact encoding. Every predecessor of an operation node has a smaller index; if its exact values are enclosed, step 1.2 proves that the operation is defined and enclosed whenever the checker has not rejected. Shared nodes reuse the same value, so dependence between operands causes no problem. The finite induction reaches the root. A zero-containing divisor causes rejection and asserts no quotient enclosure; malformed inputs are covered only by step 1.1. [given, F1, step 1.2, induction, algebra] ∎
