---
id: def-qa-promise-query-instance
kind: definition
title: "Promise query instance and oracle family"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-task-and-promise-domain
  - def-qa-input-encoding-and-size
  - def-qc-coherent-function-oracle
  - thm-qc-reversible-xor-oracle-unitary
  - def-qc-ordered-bitstring-encoding
  - def-qc-dirac-notation-conversion
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-circuit-cost-model
  - def-qc-elementary-circuit-resources
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Definition

For each encoded promised instance $z\in P_n$ of length $n$ (with $P_n$ as in [[def-qa-input-encoding-and-size]] and its task promise as in [[def-qa-task-and-promise-domain]]), a **query instance** specifies nonnegative integer widths $a(n),b(n)$ and a total function
$$
f_z:\{0,1\}^{a(n)}\to\{0,1\}^{b(n)}.
$$
The promise restricts which $z$ are legal; it does not restrict the address domain of $f_z$. Bit strings label the big-endian computational basis: for a word $x=(x_0,\ldots,x_{r-1})$, its slot is $\sum_{k<r}x_k2^{r-1-k}$, with the empty word in slot $0$ ([[def-qc-ordered-bitstring-encoding]]). Ket and bra notation uses the root convention $\langle x|y\rangle_D=\langle y,x\rangle_{\rm root}$ ([[def-qc-dirac-notation-conversion]]). Its standard quantum query is the coherent XOR oracle from [[def-qc-coherent-function-oracle]], acting on those ordered register bases:
$$
U_{f_z}|x\rangle|y\rangle=|x\rangle|y\oplus f_z(x)\rangle,
$$
where $\oplus$ is coordinatewise addition modulo two, $x$ is an $a(n)$-bit address, and $y$ is a $b(n)$-bit target. One invocation is one query, regardless of the output width. A supplied matrix or a classical description of $f_z$ does not itself supply a circuit decomposition, state preparation, or controlled access at zero cost.

The access contract must specify whether controlled calls are supplied: a controlled call is the explicitly granted block operation $\operatorname{diag}(I,U)$ ([[def-qc-controlled-unitary-access]]) and does not follow from an ordinary black-box call. For this standard XOR oracle, $U_{f_z}^{\dagger}=U_{f_z}$ by [[thm-qc-reversible-xor-oracle-unitary]], so an inverse query is the same operation as one ordinary query. Inverse access to any other unitary operation has its own explicitly declared availability and charge ([[def-qc-inverse-unitary-access]]). An explicit matrix or classical description supplies no free circuit implementation, preparation, or data loading; those costs are recorded under the declared circuit and gate resource coordinates ([[def-qc-circuit-cost-model]], [[def-qc-elementary-circuit-resources]]).
