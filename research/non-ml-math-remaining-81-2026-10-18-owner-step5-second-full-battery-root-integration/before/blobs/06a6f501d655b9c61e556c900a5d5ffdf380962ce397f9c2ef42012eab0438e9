---
id: cex-qc-tqc-planar-is-not-toric
kind: counterexample
title: Planar and periodic surface-code distances differ
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-qc-square-planar-surface-code
  - thm-qc-square-planar-surface-code-distance-and-path-count
  - thm-qc-tqc-toric-distance
  - def-qc-tqc-toric-logical-loops
  - thm-qc-tqc-toric-code-dimension
justified_by: []
proof_strategy: direct
axiom_use: "None; the comparison applies two finite distance theorems at size three."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Eric Dennis, Alexei Kitaev, Andrew Landahl, and John Preskill, Topological quantum memory"
      url: https://arxiv.org/pdf/quant-ph/0110143
---

## Statement

At linear size three, the square planar surface code has asymmetric Z and X
distances $3$ and $4$, whereas the periodic $3\times3$ toric code has
distance $3$ for both logical species and encodes two qubits. Thus the planar
surface-code calculation cannot be used as the periodic torus calculation.

## Facts & Assumptions

**Given:** The relative square-patch convention and the periodic toric-code convention, both with linear size three.

[F1] [[def-qc-square-planar-surface-code]]: the planar patch has left and right rough boundaries; its physical qubits and checks use relative boundary maps, not periodic incidence.

[F2] [[thm-qc-square-planar-surface-code-distance-and-path-count]]: for a $d\times d$ planar patch, the code encodes one qubit, has Z distance $d$, and has X distance $d+1$.

[F3] [[thm-qc-tqc-toric-distance]]: the periodic $L\times L$ toric code has distance $L$ for both primal and dual nontrivial cycles.

[F4] [[thm-qc-tqc-toric-code-dimension]]: the periodic toric code encodes two qubits.

[F5] [[def-qc-tqc-toric-logical-loops]]: the periodic code has nontrivial primal Z and dual X loop representatives, each supported on $L$ edges.

## Counterexample

1.1 Set $d=L=3$. By [F2], the planar code has Z distance $3$ and X distance $4$, and encodes one qubit. For the toric code, [F3] gives the lower bound $3$ for every nontrivial logical Pauli, while [F5] supplies a nontrivial three-edge representative of each pure species. Thus both species have distance $3$; [F4] gives code dimension four. The distance profiles and code dimensions differ at the same linear size. [given, F2, F3, F4, F5, algebra]

2.1 The reason is already present in the hypotheses: [F1] uses relative boundary maps and rough edges, while [F3] uses periodic incidence on a closed torus. Therefore planar boundary paths and their asymmetric distance theorem do not establish torus winding classes, check relations, or toric distance. The distinction is a finite combinatorial one and does not require a physical interpretation. [F1, F2, F3, algebra] ∎
