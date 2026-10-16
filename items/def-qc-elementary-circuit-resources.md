---
id: def-qc-elementary-circuit-resources
kind: definition
title: "Finite circuit resource accounting"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-circuit-syntax-and-register-order
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
justified_by: []
dependency_level: 8
proof_strategy: direct
axiom_use: "None; each resource count is a finite count of declared occurrences."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

Fix a finite gate alphabet $G$ with maximum arity $k:=\max(\{r(g):g\in G\}\cup\{0\})$ and a circuit from [[def-qc-circuit-syntax-and-register-order]]. The declared **size** is the number of gate occurrences, equivalently $\sum_{t=1}^d|L_t|$; the declared **depth** is the number $d$ of explicit layers, not a minimum over alternate layerings; the **width** is the number $n$ of all wires, including workspace wires. The operation model may also assign weighted gate costs, classical bit costs, and query costs; these are separate coordinates and are summed over the calls actually made.

A workspace wire is an ancilla. A **clean-ancilla promise** specifies computational-basis zero states for the ancillas and requires their exact return for every allowed data input: if $U$ is the implemented unitary, $V_D$ is the declared data unitary, and $|0_A\rangle$ is the specified joint zero vector, then $U(x\otimes|0_A\rangle)=V_Dx\otimes|0_A\rangle$ for every allowed data vector $x$. A **dirty-ancilla promise** permits an arbitrary ancilla state independent of the data input; it may be correlated with an untouched reference. Exact dirty-ancilla restoration means the implemented unitary on data and ancillas is $V_D\otimes I_A$ on the entire joint space, where $V_D$ is the declared unitary on data. The same operator equality then holds after tensoring with the identity on any finite untouched reference. Consequently, product input between the data and the combined ancilla/reference system remains product after the operation. No uncorrelated-output claim is made for an initially data-correlated ancilla.

A controlled or inverse operation is counted only when the operation model explicitly grants that access or supplies a construction; its charge is recorded separately from an ordinary call. Inverse availability and query or gate charges are also recorded separately from controlled forward access. In particular, the matrix of $U$ alone supplies neither a controlled call nor an inverse query, in accordance with [[def-qc-controlled-unitary-access]] and [[def-qc-inverse-unitary-access]].

## Facts & Assumptions

**Given:** A finite layered circuit, its declared gate alphabet, workspace labels, and operation-cost model.

[F1] [[def-qc-circuit-syntax-and-register-order]]: a circuit is a finite ordered list of explicit layers, each a finite list of gate occurrences.

[F2] [[def-qc-controlled-unitary-access]]: controlled access is an explicitly granted capability.

[F3] [[def-qc-inverse-unitary-access]]: inverse access is explicitly granted and charged separately from forward access.

## Proof

1.1 Flattening the layer lists gives a finite list containing each gate occurrence exactly once by the circuit syntax. Its length is $\sum_t|L_t|$, so the size definition counts exactly the occurrences in the circuit. [given, F1, algebra]

2.1 Reordering gates within a disjoint layer changes neither that layer's finite cardinality nor the sum of the layer cardinalities. Thus the declared size is unchanged by within-layer ordering; the separately declared depth remains the number of layers. [step 1.1, F1, algebra]

3.1 The access coordinates are assigned only to calls named by the operation model. By [F2]–[F3], controlled and inverse calls require their own explicit declarations, so no query or gate cost is inferred from a matrix description alone. [given, F2, F3] ∎
