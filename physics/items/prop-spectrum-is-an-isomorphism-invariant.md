---
id: prop-spectrum-is-an-isomorphism-invariant
kind: proposition
title: "The adjacency spectrum is an isomorphism invariant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjacency-matrix-of-a-finite-simple-graph, def-graph-isomorphism-and-complement, def-graph-spectrum-spectral-radius-and-cospectrality, def-characteristic-polynomial-of-a-matrix]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "O. Pikhurko, Algebraic Methods in Combinatorics, Chapter 14"
      url: "https://opikhurko.warwick.ac.uk/AlgMet.pdf"
---

## Statement

If finite simple graphs $G$ and $H$ are isomorphic, then they have the same
adjacency spectrum. In particular, cospectrality is an isomorphism invariant.

## Facts & Assumptions

**Given:** Finite simple graphs $G$ and $H$ and an isomorphism $\varphi:G\to H$.

[F1] A graph isomorphism is a bijection on vertices that preserves and reflects adjacency ([[def-graph-isomorphism-and-complement]]).

[F2] The adjacency matrix records adjacency in the chosen vertex order ([[def-adjacency-matrix-of-a-finite-simple-graph]]).

[F3] The adjacency spectrum is the multiset of roots of the adjacency characteristic polynomial, listed in weakly decreasing order ([[def-graph-spectrum-spectral-radius-and-cospectrality]], [[def-characteristic-polynomial-of-a-matrix]]).

## Proof

**Proof technique:** direct.

1.1 Order the vertices of $G$ as $v_1,\dots,v_n$ and the vertices of $H$ as $\varphi(v_1),\dots,\varphi(v_n)$. In these orders the adjacency matrices $A(G)$ and $A(H)$ have the same entries, because [F1] and [F2] say that the $(i,j)$ entry is $1$ in either matrix exactly when $v_i$ and $v_j$ are adjacent in $G$. [F1, F2, choose]

2.1 Since the two matrices are equal after a relabelling of the basis, they have the same characteristic polynomial and therefore the same spectrum by [F3]. This is exactly the claimed invariance. [step 1.1, F3] ∎
