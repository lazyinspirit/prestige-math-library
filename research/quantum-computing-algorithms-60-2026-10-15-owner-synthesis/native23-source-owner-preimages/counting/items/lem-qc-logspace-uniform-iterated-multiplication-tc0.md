---
id: lem-qc-logspace-uniform-iterated-multiplication-tc0
kind: lemma
title: "Logspace uniform iterated multiplication threshold circuits"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-effective-binary-encoding-and-decoder
  - cor-prime-number-theorem
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Hesse, Allender, and Barrington, Uniform Threshold Circuits for Division"
      url: https://www.cs.rutgers.edu/~allender/papers/division.pdf
    - title: "Eric Allender et al., Time-Space Tradeoffs in the Counting Hierarchy"
      url: https://people.cs.rutgers.edu/~allender/papers/tradeoff.pdf
proof_strategy: direct
---

## Statement

This is the local supplier interface for the iterated-product part of constant-depth threshold arithmetic. The input lists m≥1 nonnegative w-bit integers in the explicit binary encoding. The output is their exact product, zero-padded to mw bits. The claimed circuit family has polynomial size in the total input length and constant depth; its circuit description and gate-predecessor predicates are computable in logarithmic space in the input length. This item does not assert a DLOGTIME-uniform multiplication circuit.

## Facts & Assumptions

**Given:** m,w≥1 and the stated explicit list encoding.

[F1] The prime number theorem gives π(x)∼x/log x; hence for every fixed c>0 and all sufficiently large x there are more than c x/log x primes at most x ([[cor-prime-number-theorem]]).

## Proof

1.1 The source route chooses polynomially many distinct primes of O(log N) bits, where N=mw, so their product has more than N bits by [F1]. Binary integers can then be represented by their residues modulo these primes; componentwise multiplication computes the residue vector of the product. [F1, given, construct]

1.2 To conclude the statement one must prove the uniform constant-depth conversion from the residue vector back to binary and the logspace-uniform discrete-log multiplication subcircuits (or supply an independently proved logspace-uniform iterated-multiplication construction). Those are the essential TC⁰ arithmetic steps, not consequences of [F1]. The full Hesse–Allender–Barrington route was inspected, but this carrier does not yet reproduce its conversion and uniformity proof. Thus no completed inference to the statement is asserted here; owner review must resolve the named construction before this item or its consumers can be ready. [step 1.1, F1, given]
