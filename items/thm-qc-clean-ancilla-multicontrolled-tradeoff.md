---
id: thm-qc-clean-ancilla-multicontrolled-tradeoff
kind: theorem
title: "Clean Ancilla Multicontrolled Tradeoff"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - thm-qc-multicontrolled-ancilla-resource-tradeoff
  - def-qc-elementary-circuit-resources
  - def-qc-clean-and-dirty-ancillas
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Barenco et al., Elementary gates for quantum computation"
      url: https://arxiv.org/pdf/quant-ph/9503016
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
proof_strategy: direct
---

## Statement

For $m\ge1$ controls, reuse the exact no-workspace $O(m^2)$ and one-clean-bit $O(m)$ constructions from QC11, with total widths $m+1$ and $m+2$ and exact return of the clean bit. These compare construction upper bounds rather than optimal complexities.

## Facts & Assumptions

**Given:** a controlled operation with $m$ controls and one target, exact elementary gates, and the stated clean-workspace convention.

[A1] [[thm-qc-multicontrolled-ancilla-resource-tradeoff]] proves the no-workspace $O(m^2)$ and one-clean-bit $O(m)$ construction bounds; its current proof body and exact borrowed-wire return argument were inspected.

[F1] [[def-qc-clean-and-dirty-ancillas]] defines a clean ancilla as initialized to $|0\rangle$ and returned exactly to $|0\rangle$ by the complete block for every data input.

[F2] [[def-qc-elementary-circuit-resources]] defines width as the number of wires and size as the number of gate occurrences in the declared circuit.

## Proof


1.1 The no-workspace construction in [A1] uses the $m$ controls and one target, so its width is $m+1$ by [F2]. Its $O(m^2)$ one-qubit and CNOT gates are $O(m^2)$ gate occurrences under the declared circuit-size coordinate [F2]. [A1, F2, given, algebra]

1.2 The one-clean-bit construction in [A1] adds one work bit, so its width is $m+2$ by [F2]. Its $O(m)$ one-qubit and CNOT gates are $O(m)$ gate occurrences [F2]. The compute/apply/uncompute sequence returns the bit to zero on every computational-basis input; because the overall operation is linear, the same identity holds on every superposition. By [F1] this is exactly the clean-ancilla return condition. [A1, F1, F2, given, algebra]

2.1 The two upper bounds use different widths and have no matching lower bounds in this item. They therefore establish construction bounds, not an optimality tradeoff. [A1, step 1.1, step 1.2, given] ∎

