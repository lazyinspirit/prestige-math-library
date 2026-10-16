---
id: lem-qc-logspace-uniform-cook-formula-encoding
kind: lemma
title: "Logspace uniform near-linear Cook formula encoding"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-effective-binary-encoding-and-decoder
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Stephen A. Cook, Short Propositional Formulas Represent Nondeterministic Computations"
      url: https://www.ccs.neu.edu/home/viola/classes/papers/Cook1988.pdf
    - title: "Pippenger and Fischer, Relations among Complexity Measures"
      url: https://www.khoury.northeastern.edu/~viola/classes/papers/PippengerF-Oblivious.pdf
proof_strategy: direct
---

## Statement

For each fixed deterministic multitape computation of worst-case time T on an input pair (x,y), there is a Boolean formula F(x,y,z) of size O(T log^O(1) T), with each output bit computable in log^O(1) T time and O(log T) space. For fixed x,y, F has a satisfying assignment to z exactly when the computation accepts, and that satisfying z is unique. All variable blocks and the encoding of malformed strings are fixed with the machine.

## Facts & Assumptions

**Given:** a fixed deterministic machine, an all-input time bound T, and its finite transition table.

[F1] [[def-effective-binary-encoding-and-decoder]] supplies the fixed total binary encoding convention; this item adds no advice or nonuniform machine-dependent data beyond the fixed transition table.

## Proof

1.1 Given a bounded-fan-in Boolean circuit with S gates for the deterministic acceptance predicate, introduce one variable for each gate output, write the constant-size truth-table clauses for each gate, and add a unit clause requiring the output bit to be 1. In topological order, each input assignment determines exactly one assignment to all gate variables; that assignment satisfies the clauses exactly when the output is 1. The formula has O(S) clauses and variables, and the gate-index formula generator yields logarithmic-space bit access. [F1, given, construct]

1.2 The required S=O(T log^O(1)T) logspace-uniform circuit family for every T-time multitape computation is the Pippenger–Fischer oblivious simulation step, followed by Cook's formula encoding. The full sources were inspected, including the phase/subphase invariant and the Cook construction, but the local proof of that simulation and its exact bit-uniformity is not yet supplied in this carrier. The formula claim therefore remains a named, unresolved local prerequisite; 1.1 proves only the circuit-to-formula implication. [step 1.1, given]
