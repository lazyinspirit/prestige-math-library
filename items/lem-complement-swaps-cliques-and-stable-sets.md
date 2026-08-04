---
id: lem-complement-swaps-cliques-and-stable-sets
kind: lemma
title: "Complementation swaps cliques with stable sets, so $\\omega(\\overline G)=\\alpha(G)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-clique-stable-set-and-numbers, def-graph-isomorphism-and-complement]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Reinhard Diestel, Graph Theory, Preview Chapter 1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch1.pdf"
    - title: "Valerio Boncompagni, On hereditary graph classes defined by forbidding Truemper configurations (PhD thesis, 2018)"
      url: "https://etheses.whiterose.ac.uk/id/eprint/23386/1/main.pdf"
    - title: "ISGCI, Self-complementary classes"
      url: "https://www.graphclasses.org/classes/self_complementary.html"
pipeline_run: null
---

## Statement

For every finite graph $G$, a vertex set is a clique in $G$ if and only if it is a stable set in $\overline G$. Consequently,

$$\omega(\overline G)=\alpha(G),\qquad \alpha(\overline G)=\omega(G).$$

## Facts & Assumptions

**Given:** A finite graph $G$ and $X\subseteq V(G)$.

[F1] A clique has all possible edges among its vertices, while a stable set has none ([[def-clique-stable-set-and-numbers]]).

[F2] Distinct vertices are adjacent in $\overline G$ exactly when they are nonadjacent in $G$ ([[def-graph-isomorphism-and-complement]]).

## Proof

**Proof technique:** direct.

1.1 Every pair of distinct vertices in $X$ is adjacent in $G$ if and only if no such pair is adjacent in $\overline G$. [F2]

2.1 Thus $X$ is a clique in $G$ if and only if it is stable in $\overline G$, and symmetrically $X$ is stable in $G$ if and only if it is a clique in $\overline G$. [step 1.1, F1]

3.1 The same vertex sets occur in the paired maximizations and retain their cardinalities, so the two displayed equalities follow. [step 2.1, F1] ∎
