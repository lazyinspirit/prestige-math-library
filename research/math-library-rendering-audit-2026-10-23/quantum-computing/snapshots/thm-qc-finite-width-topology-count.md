---
id: thm-qc-finite-width-topology-count
kind: theorem
title: QC24 Finite Width Topology Count
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qc-state-preparation-cost-model
  - def-qc-elementary-circuit-resources
  - def-qc-circuit-denotational-semantics
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John Preskill, Quantum Computation, Chapter 5, Classical and Quantum Circuits
      url: https://www.preskill.caltech.edu/ph219/chap5_15.pdf
    - title: Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits
      url: https://arxiv.org/pdf/quant-ph/0406176
---

## Statement

Fix integers $W\ge1$, $A\ge1$, $k\ge1$, and $g\ge0$, and an ordered-wire circuit model with a finite gate alphabet of size $A$ and maximum arity $k$. A serial length-$g$ description is an ordered list of $g$ gate labels and ordered tuples of at most $k$ distinct wire positions; its denotation is the ordered product of the corresponding local gate embeddings. Each parallel layer consists of pairwise wire-disjoint occurrences and denotes their product. With $C_k=k+1$, the number of length-$g$ serial descriptions is at most $(C_k A W^k)^g$. Any parallel circuit with $g$ total occurrences has a serial ordering with the same gate count and denotation.

## Facts & Assumptions

**Given:** The finite alphabet, maximum arity, ordered wire positions and width specified in the Statement.

[F1] [[def-qc-tensor-register-and-permutation]] fixes the ordered tensor factors, product basis and wire permutations.

[F2] A tensor map acts factorwise on elementary tensors, so an operator embedded on selected factors and an operator on disjoint factors commute ([[def-qc-tensor-map]]).

[F3] A circuit layer denotes the ordered product of its local gate embeddings; its layers are applied chronologically ([[def-qc-circuit-denotational-semantics]]).

## Proof

**Given:** As in Facts & Assumptions.

1.1 A gate of arity $r\le k$ has at most $W^r$ ordered wire tuples. Summing over possible arities $0\le r\le k$ gives at most $\sum_{r=0}^kW^r\le(k+1)W^k$ tuples because $W\ge1$; including its label gives at most $C_k A W^k$ choices for one occurrence. [given, algebra]

2.1 A length-$g$ serial description is an ordered list of $g$ such choices, so there are at most $(C_k A W^k)^g$ descriptions. For two gates on disjoint supports, reorder the tensor factors as the first support, the second support, and the remaining wires. Their embeddings are then $G\otimes I\otimes I$ and $I\otimes H\otimes I$. By [F2], both compositions act as $Gx\otimes Hy\otimes z$ on elementary tensors, which span the register; thus they commute. By [F3], serially listing each layer therefore preserves its operator; listing the layers in circuit order preserves the full denotation and adds no occurrence. [given, F1, F2, F3, step 1.1, algebra] ∎
