---
id: def-qc-toffoli-and-fredkin
kind: definition
title: "Toffoli and Fredkin gates"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - def-qc-elementary-circuit-resources
  - def-qc-ordered-bitstring-encoding
  - thm-qc-bitstring-index-is-bijection
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - thm-qc-computational-basis-orthonormal
  - lem-qc-tensor-product-basis-and-dimension
  - def-qc-cnot-and-control-target-order
  - def-qc-pauli-matrices
justified_by:
  - lem-qc-x-cnot-toffoli-and-fredkin-are-involutions
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
      locator: "§5.2.2, printed pp.14–19: CNOT and the three-bit Toffoli gate. Fredkin is defined and checked locally."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§2.1.2, printed pp.14–15: CNOT and Toffoli as fixed-arity quantum gates. Fredkin is defined and checked locally."
---

## Definition

All bits are in $\mathbb F_2=\{0,1\}$, with addition denoted by $\oplus$ and multiplication by juxtaposition. On three distinct ordered computational-basis wires, define the Toffoli gate $T$ and Fredkin gate $F$ by
$$
T|a,b,t\rangle=|a,b,t\oplus ab\rangle,
$$
and
$$
F|0,a,b\rangle=|0,a,b\rangle,\qquad F|1,a,b\rangle=|1,b,a\rangle.
$$
These basis actions extend linearly. Wire order is exactly the order displayed; the first two wires of $T$ are controls and the third is its target, while the first wire of $F$ is its control and the other two are conditionally swapped. Negative-control variants mean conjugating the chosen positive control by $X$ before and after the gate. These are fixed arity-three labels in the declared finite gate alphabet, not implicit access to arbitrary multicontrol gates. Their reversibility is established in [[lem-qc-x-cnot-toffoli-and-fredkin-are-involutions]].


