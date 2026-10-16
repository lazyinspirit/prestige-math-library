---
id: def-qc-clean-and-dirty-ancillas
kind: definition
title: "Clean and dirty ancillas"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - def-qc-elementary-circuit-resources
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
      locator: "§5.2.3, printed pp.20–22: copying an output and reversing the computation to clear saved work."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§2.3, printed p.16: computing a Boolean function into a target register and extending by linearity."
---

## Definition

Let $D$ be a finite ordered quantum register and let $A$ be an ordered register of $k\ge0$ ancilla qubits, with Hilbert spaces $\mathcal H_D$ and $\mathcal H_A$. Write $|0_A\rangle=|0^k\rangle$, including $|0_A\rangle=1$ when $k=0$. Let $U$ be a unitary on $\mathcal H_D\otimes\mathcal H_A$ and let $V$ be a unitary on $\mathcal H_D$.

The register $A$ is a **clean ancilla register for $U$ and $V$** when
$$
U(|\psi\rangle_D\otimes|0_A\rangle)=V|\psi\rangle_D\otimes|0_A\rangle
$$
for every vector $|\psi\rangle_D$. Thus the data operation is independent of the input vector and all clean wires return exactly to zero.

The register $A$ is a **dirty ancilla register for $U$ and $V$** when the operator identity $U=V\otimes I_A$ holds on $\mathcal H_D\otimes\mathcal H_A$. Equivalently, every product input $|\psi\rangle_D\otimes|\eta\rangle_A$ is mapped to $V|\psi\rangle_D\otimes|\eta\rangle_A$, with the same $V$ for every data and ancilla vector. This requires exact restoration of an arbitrary, initially unknown ancilla state and forbids residual data–ancilla correlation.

These are exact contracts for the complete subroutine. A temporary intermediate alteration of an ancilla is permitted if the full unitary satisfies the stated identity.

## Remarks

The reference-register and arbitrary-matrix consequences are proved in [[lem-qc-ancilla-identities-stable-under-reference-and-mixtures]].

