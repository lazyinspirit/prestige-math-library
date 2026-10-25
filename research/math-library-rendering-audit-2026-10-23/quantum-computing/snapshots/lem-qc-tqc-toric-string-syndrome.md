---
id: lem-qc-tqc-toric-string-syndrome
kind: lemma
title: Open toric strings have endpoint syndromes
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-qc-tqc-toric-checks
  - def-qc-tqc-toric-excitations
  - def-qc-pauli-matrices
justified_by: []
proof_strategy: direct
axiom_use: "None; the proof is parity counting on a finite path."
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

Let $P$ be a primal edge trail with no repeated edge and distinct endpoints
$q_0,q_1$. The Pauli string $Z(P)$ has commutation syndrome $1$ at exactly
the two endpoint stars and $0$ at every other star or plaquette. Let $Q$ be
a dual edge trail with no repeated edge and distinct endpoint faces
$f_0,f_1$. The string $X(Q)$ has commutation syndrome $1$ at exactly those
two endpoint plaquettes and $0$ at every other plaquette or star.

If either kind of edge-simple trail is closed, its corresponding string has
zero syndrome at every check.

## Facts & Assumptions

**Given:** The toric checks, an edge-simple primal or dual trail, and the finite check-eigenvalue convention for syndromes.

[F1] [[def-qc-tqc-toric-checks]]: stars are $X$ on incident primal edges, and plaquettes are $Z$ on boundary edges.

[F2] [[def-qc-tqc-toric-excitations]]: an e or m defect is a check with eigenvalue $-1$; the corresponding commutation sign specifies whether a string creates that defect when applied to a common $+1$ check eigenvector.

[F3] [[def-qc-pauli-matrices]]: on one qubit, $XZ=-ZX$, while $X$ commutes with $X$ and $Z$ commutes with $Z$.

## Proof

1.1 In the mod-two support of a primal trail, each internal visit to a vertex contributes one incoming and one outgoing edge, hence even incidence. After pairing arrivals and departures at every visit, the distinct endpoints have odd incidence and every other vertex has even incidence. By [F3], a $Z$ string anticommutes with a star exactly when the number of shared edges is odd. Thus it anticommutes with exactly $A_{q_0}$ and $A_{q_1}$. It commutes with every plaquette because both use only $Z$ factors. [given, F1, F3, algebra]

1.2 In the dual graph, the same incidence count gives odd overlap exactly at the two endpoint faces. A dual edge crosses the primal edge carrying the same qubit, so [F3] makes the $X$ string anticommute with exactly the two endpoint plaquettes. It commutes with all stars because both use only $X$ factors. By [F2], these signs are precisely the stated e and m endpoint syndromes. [given, F1, F2, F3, algebra]

2.1 For a closed edge-simple primal trail, every vertex has even degree in its mod-two edge support: arrivals and departures pair at every visit, including the common initial and final vertex. Thus every star overlap is even, and every plaquette overlap is even because both strings use only $Z$. For a closed dual trail, the same incidence count gives even overlap with every plaquette, and its X string commutes with all stars. Hence both closed strings have zero syndrome. [F1, F3, construct, algebra] ∎

