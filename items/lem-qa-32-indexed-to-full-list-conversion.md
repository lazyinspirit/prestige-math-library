---
id: lem-qa-32-indexed-to-full-list-conversion
kind: lemma
title: Indexed uniform circuits convert to polynomial-time full lists
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: quantum-complexity-classes-and-oracle-separations
dependency_level: 0
deps:
  - def-logspace-uniform-circuit-family
justified_by: []
proof_strategy: direct
axiom_use: "None; the proof counts configurations of one deterministic transducer and uses finite output lists."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 13, Section 13.2"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "John Watrous, Quantum Computational Complexity, Section IV.1"
      url: "https://arxiv.org/pdf/0804.3401"
---

## Statement

Let $(C_n)_{n\ge0}$ be a polynomial-size Boolean circuit family generated in the indexed-gate, logspace sense of [[def-logspace-uniform-circuit-family]]. Assume a fixed polynomial $q$ bounds the number of non-input nodes of $C_n$ by $q(n)$. There is one deterministic polynomial-time machine which, on unary input $1^n$, writes a complete self-delimiting topological gate list for $C_n$, including its input count, all node records and its designated output. The resulting list describes the same circuit and therefore computes the same Boolean function.

## Facts & Assumptions

**Given:** A fixed logspace indexed-gate transducer for the family, a fixed polynomial size bound $q$, and the Boolean gate basis of [[def-logspace-uniform-circuit-family]].

[F1] [[def-logspace-uniform-circuit-family]]: On input $1^n$ and a binary gate index of length $O(\log(n+2))$, one deterministic read-only-input logspace transducer halts and returns the circuit size, gate types (including input labels and constant values), predecessor indices, and designated output of the topologically numbered circuit.

## Proof

1.1 Fix one valid query to the indexed transducer. Its read-only input and query tapes have polynomially many head positions in $n$, its work tapes use $O(\log(n+2))$ cells over a fixed alphabet, and its finite control has finitely many states. Thus it has at most $(n+2)^c$ internal configurations for some fixed $c$. A halting deterministic computation cannot repeat an internal configuration: because the input tapes are read-only and the output tape is write-only, a repetition would repeat the same future transitions forever. Hence each size, type, predecessor, or output query takes polynomial time and writes polynomially many bits. [given, F1, algebra]

2.1 Query the total node count $N_n\le n+q(n)$ once. For every index $1,\ldots,N_n$, query its type, recording its input label or constant value when applicable, and query every predecessor required by that type; also query the designated output. This includes all $n$ input nodes wherever they occur in the topological order. There are polynomially many queries, each of polynomial time by step 1.1. Every node index is at most $n+q(n)$, so each self-delimiting index has $O(\log(n+q(n)+2))$ bits. Writing the input-count header and all records therefore takes polynomial time and produces a polynomial-length full list. [given, F1, step 1.1, construct]

3.1 Each record is the exact gate type, input label or constant value, and predecessor data returned for that same topological node, and the final output field is the exact designated node. The full-list decoder consequently evaluates the same ordered DAG on every input, including the case $n=0$ when the input list is empty. [F1, step 2.1, algebra] ∎
