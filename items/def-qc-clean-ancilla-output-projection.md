---
id: def-qc-clean-ancilla-output-projection
kind: definition
title: QC24 Clean Ancilla Output Projection
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - def-qc-elementary-circuit-resources
  - def-qc-circuit-denotational-semantics
  - def-qc-tensor-register-and-permutation
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 1
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits
      url: https://arxiv.org/pdf/quant-ph/0406176
---

## Definition

Let $n,a\ge0$ be integers and $D=2^n$. Let the data and workspace registers have ordered computational spaces $\mathbb C^D$ and $\mathbb C^{2^a}$, with the ordered tensor factors and product basis of [[def-qc-tensor-register-and-permutation]]. For a circuit unitary $U$ on their tensor product, its all-zero-workspace projection on a fixed input $|0^n\rangle|0^a\rangle$ is

$$v=(I_D\otimes\langle0^a|)U(|0^n\rangle\otimes|0^a\rangle)\in\mathbb C^D.$$

The projected joint vector is $v\otimes|0^a\rangle$. An exact clean-workspace output on this input means that the full, unconditional output equals $\lambda|\psi\rangle\otimes|0^a\rangle$ for a unit data vector $\psi$ and a unit scalar $\lambda$; then $v=\lambda\psi$. A merely nonzero $v$ defines only the zero-workspace projection branch and does not assert that the workspace is deterministically clean.
