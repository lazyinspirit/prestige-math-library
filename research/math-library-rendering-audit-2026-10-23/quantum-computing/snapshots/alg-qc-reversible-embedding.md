---
id: alg-qc-reversible-embedding
kind: algorithm
title: "Reversible embedding of a Boolean circuit"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qc-ordered-bitstring-encoding
  - thm-qc-bitstring-index-is-bijection
  - def-qc-circuit-denotational-semantics
  - def-qc-elementary-circuit-resources
  - def-qc-toffoli-and-fredkin
  - lem-qc-x-cnot-toffoli-and-fredkin-are-involutions
  - def-qc-clean-and-dirty-ancillas
  - def-qc-cnot-and-control-target-order
  - def-qc-pauli-matrices
  - def-boolean-circuit-size-depth-fanin-and-basis
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - thm-qc-computational-basis-orthonormal
  - lem-qc-tensor-product-basis-and-dimension
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
      locator: "§5.2.2–§5.2.3, printed pp.14–22: Toffoli, Boolean computation, and compute-copy-reverse."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§2.1.2–§2.3, printed pp.14–16: reversible Toffoli computation and coherent extension."
---

## Definition

Inputs are integers $n,m\ge0$, $n$ distinct ordered Boolean input wires, an $m$-bit target register $y$ disjoint from the input wires, and a finite Boolean DAG with an explicit topological order and an ordered list of exactly $m$ output ports. Every vertex has a unique identifier; each non-input node is a constant $0$ or $1$, a NOT node of fan-in one, or an AND or OR node of fan-in two. Each source reference must name an input vertex or an earlier node in the supplied order. Each output port may name any input or non-input node, and repeated output ports are allowed. The Boolean graph uses the NOT/AND/OR basis with constants from [[def-boolean-circuit-size-depth-fanin-and-basis]], extended here to multiple ordered output ports sharing one graph.

Return INVALID if the input wires or graph vertices do not have distinct identifiers, a target wire overlaps an input or graph vertex, an unsupported gate or incorrect fan-in occurs, a source reference is unavailable at that position, the supplied order is invalid, or an output port names no available vertex. Otherwise:

1. Allocate one fresh clean value bit $w_v$ for each non-input node $v$.
2. Process nodes in the supplied order. Leave a constant-$0$ bit untouched; apply $X$ to a constant-$1$ bit. For a NOT node with input wire $u$, apply $X(w_v)$ then $\operatorname{CNOT}_{u\to w_v}$. For an AND node with inputs $u,v$, apply $T(u,v,w_v)$. For an OR node, apply $\operatorname{CNOT}_{u\to w_v}$, then $\operatorname{CNOT}_{v\to w_v}$, then $T(u,v,w_v)$. If a two-port node uses the same source identifier twice, first allocate a fresh clean scratch bit $s$, copy the source into $s$ by CNOT, use the distinct physical wires as the gate inputs, and uncopy $s$ immediately after writing $w_v$.
3. For each output port $j$, apply CNOT from its named input or value wire to target bit $y_j$.
4. Append the inverse of the entire node-evaluation list in reverse chronological order, including the temporary source-copy and uncopy instructions. Return the resulting finite gate list, with the input register unchanged and the target changed only by the stated XOR into $y$.

The inverse-list operation is defined instruction by instruction: $X$, CNOT, and Toffoli are each replaced by themselves, in reverse order. The Boolean graph is an explicit finite input; this procedure makes no uniform-generation, oracle, or Turing-time claim.

