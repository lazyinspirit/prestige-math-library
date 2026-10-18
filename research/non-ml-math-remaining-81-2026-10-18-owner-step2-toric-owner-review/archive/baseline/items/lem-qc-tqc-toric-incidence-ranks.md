---
id: lem-qc-tqc-toric-incidence-ranks
kind: lemma
title: Toric incidence maps have exactly one relation each
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-qc-tqc-periodic-square-cellulation
  - thm-rank-nullity
justified_by: []
proof_strategy: direct
axiom_use: "None; all support spaces are finite binary vector spaces."
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

For $L\ge3$, the $L^2$ star-support vectors in $\mathbb F_2^E$ have span
dimension $L^2-1$, and their only relation is their total sum. The $L^2$
face-boundary vectors have the same span dimension and their only relation
is their total sum. The dual-face incidence statement has the same rank.

## Facts & Assumptions

**Given:** The periodic square cellulation with vertices $q_{i,j}$, edges $h_{i,j},v_{i,j}$, and faces $f_{i,j}$.

[F1] [[def-qc-tqc-periodic-square-cellulation]]: the vertex-edge graph and the face-adjacency graph are connected; every edge has two distinct endpoints and separates two distinct adjacent faces.

[F2] [[thm-rank-nullity]]: for a linear map with finite-dimensional domain, the dimension of its image equals the dimension of its domain minus the dimension of its kernel.

## Proof

1.1 Define $S:\mathbb F_2^V\to\mathbb F_2^E$ by sending a coordinate vector at a vertex to its star-support vector and extending linearly. The coefficient of an edge joining vertices $q,q'$ in $S(a)$ is $a_q+a_{q'}$. Thus $\ker S$ consists exactly of assignments constant along every edge. By [F1] the vertex graph is connected, so $\ker S$ is the one-dimensional space of constant assignments. Since $\dim\mathbb F_2^V=L^2$, [F2] gives $\dim\operatorname{im}S=L^2-1$. The all-vertex sum is zero because each edge has two endpoints, so this is the only star relation. [given, F1, F2, algebra]

2.1 Define $T:\mathbb F_2^F\to\mathbb F_2^E$ by sending a face coordinate vector to that face's boundary and extending linearly. An edge separating faces $f,f'$ has coefficient $b_f+b_{f'}$ in $T(b)$. Thus $\ker T$ consists exactly of assignments constant along adjacent faces. By [F1] the face-adjacency graph is connected, so $\ker T$ is the one-dimensional space of constant assignments. Since $\dim\mathbb F_2^F=L^2$, [F2] gives $\dim\operatorname{im}T=L^2-1$. The all-face sum is zero because each edge borders two faces, so this is the only face-boundary relation. The dual face-adjacency graph has the same square-grid incidence, proving its incidence rank is also $L^2-1$. [given, F1, F2, algebra] ∎

