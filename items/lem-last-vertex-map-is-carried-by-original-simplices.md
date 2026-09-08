---
id: lem-last-vertex-map-is-carried-by-original-simplices
kind: lemma
title: "Last vertex map is carried by original simplices"
status: draft
origin: pipeline
deps: ["def-barycentric-subdivision-of-an-abstract-simplicial-complex", "def-simplicial-map-and-its-geometric-realization", "lem-induced-simplicial-chain-maps-commute-with-boundaries"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "C. R. F. Maunder, Algebraic Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/maunder.pdf"
---

## Statement

Given a specified total order on $V(K)$, the **last-vertex map** $\lambda:\operatorname{sd}K\to K$ sends each nonempty face to its greatest vertex. It is simplicial; every simplex over an original face $\sigma$ maps into $\sigma$. Its induced oriented chain map is augmentation-preserving.

## Source locators

2.5.13, p.52, vertex-selection approximation.


## Facts & Assumptions

[F1] Subdivision simplices are nested chains of nonempty faces. [[def-barycentric-subdivision-of-an-abstract-simplicial-complex]].

[F2] A vertex function is simplicial when it takes faces to faces. [[def-simplicial-map-and-its-geometric-realization]].

[F3] Simplicial maps induce chain maps. [[lem-induced-simplicial-chain-maps-commute-with-boundaries]].


## Proof

**Given:** A simplicial complex whose vertices have a specified total order.

1.1 Each nonempty face is finite, so it has a unique greatest vertex. If $\sigma_0\subsetneq\cdots\subsetneq\sigma_q$ is a chain, every $\max\sigma_i$ lies in $\sigma_q$. Their set is therefore a face of $K$, proving simpliciality. If the entire chain lies over a face $\sigma$, all these vertices belong to $\sigma$, proving the carrier assertion. Repeated selected vertices are permitted for a simplicial map. [F1, F2]

2.1 The induced chain map sends an oriented chain to its ordered list of selected vertices if distinct, and to zero otherwise. It commutes with the ordinary boundary by the induced-chain-map lemma. In degree zero each vertex is sent to a vertex, so both augmentations equal $1$; extending by the identity in degree $-1$ gives an augmented chain map. The empty complex gives the empty vertex map and identity only in degree $-1$. No existence of a total order on an arbitrary set is inferred: the order is supplied data. [F3, step 1.1] ∎

