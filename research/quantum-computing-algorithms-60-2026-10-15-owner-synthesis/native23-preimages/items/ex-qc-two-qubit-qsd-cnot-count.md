---
id: ex-qc-two-qubit-qsd-cnot-count
kind: example
title: "Two-qubit QSD CNOT upper-bound instance"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - thm-qc-qsd-cnot-upper-bound
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Shende, Bullock, and Markov, Synthesis of Quantum Logic Circuits"
      url: https://arxiv.org/pdf/quant-ph/0406176
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
proof_strategy: direct
---

## Statement

Substituting n=2 into the stated no-ancilla QSD count gives (23/48)·16−(3/2)·4+4/3=3 CNOTs, with one-qubit gates counted separately.


## Facts & Assumptions

**Given:** the no-ancilla QSD CNOT bound for n=2.

[A1] [[thm-qc-qsd-cnot-upper-bound]] states the $n\ge2$ count. Its carrier is present, but the recursive controlled-Z absorption proof needed for the $23/48$ coefficient remains unresolved, so this arithmetic example is conditional on that result.

## Proof

1.1 Substitute $n=2$ in [A1]. The bound is $(23/48)\cdot16-(3/2)\cdot4+4/3=23/3-6+4/3=9-6=3$ CNOTs. [A1, algebra]

1.2 The conclusion counts CNOTs only. One-qubit gates and classical compile time are separate resources, so this substitution supplies neither a total gate count nor a compilation-time estimate. [step 1.1, given] ∎
