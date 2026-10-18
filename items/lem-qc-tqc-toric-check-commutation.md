---
id: lem-qc-tqc-toric-check-commutation
kind: lemma
title: Toric checks commute and have two global relations
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-qc-tqc-periodic-square-cellulation
  - def-qc-tqc-toric-checks
  - def-qc-pauli-matrices
  - thm-qc-pauli-commutator-is-symplectic-pairing
justified_by: []
proof_strategy: direct
axiom_use: "None; the proof counts finite edge incidences modulo two."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Alexei Kitaev, Fault-tolerant quantum computation by anyons"
      url: https://arxiv.org/pdf/quant-ph/9707021
    - title: "Eric Dennis, Alexei Kitaev, Andrew Landahl, and John Preskill, Topological quantum memory"
      url: https://arxiv.org/pdf/quant-ph/0110143
---

## Statement

All star and plaquette checks of [[def-qc-tqc-toric-checks]] commute. The
product of all stars is the identity, and the product of all plaquettes is
the identity.

## Facts & Assumptions

**Given:** The periodic $L\times L$ torus with $L\ge3$ and its star and plaquette checks.

[F1] [[def-qc-tqc-toric-checks]]: $A_{i,j}$ is $X$ on the four edges incident to $q_{i,j}$, and $B_{i,j}$ is $Z$ on the four edges of $f_{i,j}$.

[F2] [[thm-qc-pauli-commutator-is-symplectic-pairing]]: two Pauli operators commute when the mod-two symplectic pairing of their binary supports is zero; for an $X$-support and a $Z$-support, this pairing is their overlap parity.

[F3] [[def-qc-tqc-periodic-square-cellulation]]: every edge has two distinct endpoints and borders two distinct faces, with all incidences read modulo $L$.

## Proof

1.1 For a fixed vertex $q_{i,j}$, the only faces sharing its incident edges are $f_{i,j}, f_{i-1,j}, f_{i,j-1}, f_{i-1,j-1}$. Their boundaries overlap the star support respectively in $\{h_{i,j},v_{i,j}\}$, $\{h_{i-1,j},v_{i,j}\}$, $\{h_{i,j},v_{i,j-1}\}$, and $\{h_{i-1,j},v_{i,j-1}\}$; every other face has empty overlap. Hence every star-plaquette overlap has even size. By [F2], each star commutes with each plaquette. Two stars commute because all their nonidentity factors are $X$; two plaquettes commute because all their nonidentity factors are $Z$. [given, F1, F2, algebra]

2.1 By [F3], every edge has exactly two endpoints, so in the product of all stars its $X$ factor occurs twice. Since $X^2=I$, the total product is $I$. Every edge borders exactly two faces, so the same argument with $Z^2=I$ gives $\prod_{i,j}B_{i,j}=I$. The first total product is also $\prod_{i,j}A_{i,j}=I$. [F1, F3, algebra] ∎

