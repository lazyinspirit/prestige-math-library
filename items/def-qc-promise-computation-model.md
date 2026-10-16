---
id: def-qc-promise-computation-model
kind: definition
title: "Finite quantum promise-computation model"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-promise-problem
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - def-qc-tensor-register-and-permutation
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-elementary-circuit-resources
  - def-qc-clean-and-dirty-ancillas
  - def-deterministic-one-tape-turing-machine
  - def-partial-function-computed-by-a-machine
  - def-worst-case-time-and-space-complexity
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Watrous, Quantum Computational Complexity, Sections IV.1–IV.2"
      url: "https://arxiv.org/pdf/0804.3401"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 13, Section 13.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

Let $\Pi=(Y,N)$ be a promise problem: $Y,N\subseteq\{0,1\}^*$ are disjoint, and no answer is required outside $Y\cup N$ ([[def-promise-problem]]). For every input length $n\ge0$, let $a(n)\in\mathbb N$ be the number of auxiliary qubits. The $n$ input wires are ordered with the first wire most significant: for $x=(x_0,\ldots,x_{n-1})$, $|x\rangle$ is the computational-basis vector indexed by
$$\operatorname{enc}_n(x)=\sum_{k<n}x_k2^{n-1-k}$$
([[def-qc-register-and-computational-basis]], [[def-qc-ordered-bitstring-encoding]]). The auxiliary register has $a(n)$ wires and is initialized to $|0^{a(n)}\rangle$. When $n=0$ or $a(n)=0$, the corresponding zero-qubit register is the one-dimensional space $\mathbb C$, not the zero vector space.

For each $n$, a finite circuit $C_n$ acts on the ordered register of $n+a(n)$ wires and has the unitary denotation $U_{C_n}$ specified by [[def-qc-circuit-syntax-and-register-order]] and [[def-qc-circuit-denotational-semantics]]. The circuit syntax designates an ordered tuple of distinct output-wire indices; an acceptance specification uses that same tuple $O_n$, whose indices lie in $\{0,\ldots,n+a(n)-1\}$. It consists of this tuple and a total predicate $A_n(x,z)\in\{0,1\}$ for $x\in\{0,1\}^n$ and $z\in\{0,1\}^{|O_n|}$. The tuple may be empty; then its measured output set contains only the empty word. Auxiliary wires are initialized to zero, but this definition does not require them to return to zero after the computation; that stronger clean-ancilla condition is defined in [[def-qc-clean-and-dirty-ancillas]].

A **finite quantum promise computation** is the data $(\Pi,(C_n)_{n\ge0},a,O,A)$ with these registers and predicates. Its output is classical: measure only the named output wires in the computational basis and accept exactly when $A_n(x,z)=1$. No intermediate measurement is part of this base model. Unless a full-list uniformity condition is imposed separately, the family need not be generated uniformly. When uniformity or cost is claimed, $A$ is supplied by one fixed deterministic Turing machine with an explicit polynomial worst-case time bound in the encoded pair $(x,z)$ ([[def-deterministic-one-tape-turing-machine]], [[def-partial-function-computed-by-a-machine]], [[def-worst-case-time-and-space-complexity]]). This is a mathematical finite-circuit model and makes no assertion about physical realization.

