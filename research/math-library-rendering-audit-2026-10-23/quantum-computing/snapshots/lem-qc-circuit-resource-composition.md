---
id: lem-qc-circuit-resource-composition
kind: lemma
title: "Circuit Resource Composition"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-elementary-circuit-resources
  - def-qc-clean-and-dirty-ancillas
  - def-qc-tensor-map
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
proof_strategy: direct
---

## Statement

For circuits placed on a declared common physical register, sequential composition adds gate counts and explicit depths; its width is the declared common-register width. Reusing workspace can make that width the maximum of the component widths only when the alignment and ancilla contracts permit reuse; otherwise all required wires remain allocated. Parallel composition on disjoint registers adds gate counts and widths and has depth equal to the maximum component depth. A clean ancilla is counted as clean only when the complete composed block returns it exactly to zero for every allowed data input.


## Facts & Assumptions

**Given:** two circuits A and B embedded in one explicitly aligned physical wire register, and the intended QC09 conventions for syntax, matrix denotation and elementary resources.

[A1] [[def-qc-circuit-syntax-and-register-order]] defines a finite ordered wire set, ordered gate supports, and finite chronological layers, with the first layer applied first. The current Definition body was inspected.

[A2] [[def-qc-circuit-denotational-semantics]] defines each layer's embedded-gate product and the chronological circuit product. The current Definition and its local proof were inspected.

[A3] [[def-qc-elementary-circuit-resources]] counts gate occurrences, explicit layers, and all wires including workspace. The current Definition body was inspected; width below means that declared wire count.

[A4] [[def-qc-tensor-map]] defines tensor maps by their action on elementary tensors. This is the exact interface used for the parallel tensor block.

[F1] A clean ancilla register starts in $|0\rangle$ and is returned exactly to $|0\rangle$ by the complete block on every data input ([[def-qc-clean-and-dirty-ancillas]]).

## Proof


1.1 Write $g(A),d(A),w(A)$ for gate count, explicit depth and declared width. Once both blocks are embedded in the declared common physical register, concatenating their schedules uses each gate occurrence and each layer exactly once and in order, so $g(A;B)=g(A)+g(B)$ and $d(A;B)=d(A)+d(B)$. The composite width is the common register's width. It equals $\max(w(A),w(B))$ only when the declared alignment reuses workspace; any wires that must remain allocated are included before taking that maximum. [A1, A2, A3, given, algebra]

2.1 In the parallel block on disjoint registers, the gate lists and wire sets are disjoint unions, so gate count and width add. Pairing the first layers, then the second layers, and so on, with empty layers on the shorter schedule, gives depth $\max(d(A),d(B))$. On elementary product vectors, the combined circuit acts by the tensor map specified in [A4]; the circuit denotation follows from [A2]. Thus this schedule realizes the stated tensor product without adding operations. [A1, A2, A3, A4, step 1.1, algebra]

3.1 By [F1], a wire is a clean ancilla of the composite block only if the complete composition returns it to zero for every allowed data input. Returning it after $A$ alone does not suffice when $B$ later changes it. Thus an internal wire may be counted clean only after the full block's return condition is checked. [F1, step 1.1, step 2.1] ∎
