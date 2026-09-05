---
id: thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible
kind: theorem
title: "CLIQUE, INDEPENDENT SET, and VERTEX COVER are polynomially interreducible"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-clique-independent-set-and-vertex-cover-problems, def-polynomial-time-many-one-reduction, def-graph-isomorphism-and-complement, def-finite-cardinality]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Fabrizio Iozzi and Luca Trevisan, Handout NP3"
      url: "https://lucatrevisan.github.io/30540/notes-np3.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Each of the languages CLIQUE, INDEPENDENT SET, and VERTEX COVER
polynomial-time many-one reduces to each of the other two.

## Facts & Assumptions

**Given:** A finite simple graph $G=(V,E)$ and a natural number $k$.

[L1] The complement $\overline G$ has the same vertex set as $G$, and distinct vertices are adjacent in $\overline G$ exactly when they are nonadjacent in $G$, by [[def-graph-isomorphism-and-complement]].

[L2] A finite vertex set has a cardinality $|V|$ in $\mathbb{N}$, by [[def-finite-cardinality]].

[F1] CLIQUE, INDEPENDENT SET, and VERTEX COVER are the graph problems defined on $G$ by pairwise adjacency, absence of adjacency, and edge coverage respectively, by [[def-clique-independent-set-and-vertex-cover-problems]].

## Proof

**Proof technique:** direct.

1.1 For any subset $S\subseteq V$, [L1] implies that the vertices of $S$ are pairwise adjacent in $G$ if and only if they are pairwise nonadjacent in $\overline G$. Thus $S$ is a clique in $G$ if and only if it is an independent set in $\overline G$. Therefore $(G,k)\mapsto(\overline G,k)$ is a polynomial-time many-one reduction from CLIQUE to INDEPENDENT SET, and the same map is also a reduction in the reverse direction. [L1, F1, given, construct]

1.2 For any subset $I\subseteq V$, the complement $V\setminus I$ is a vertex cover if and only if $I$ is an independent set. Indeed, if $I$ is independent, every edge has at least one endpoint outside $I$, so it is covered by $V\setminus I$. Conversely, if $V\setminus I$ is a vertex cover and two vertices of $I$ were adjacent, that edge would have no endpoint in $V\setminus I$, a contradiction. Hence, whenever $k\le |V|$, the graph $G$ has an independent set of size at least $k$ if and only if it has a vertex cover of size at most $|V|-k$. [L2, F1, given]

2.1 Use step 1.2 to define total reductions. For INDEPENDENT SET to VERTEX COVER, map $(G,k)$ to $(G,|V|-k)$ when $k\le |V|$, and map it to the fixed no-instance $(K_2,0)$ when $k>|V|$. For VERTEX COVER to INDEPENDENT SET, map $(G,k)$ to $(G,|V|-k)$ when $k\le |V|$, and map it to the fixed yes-instance $(K_1,1)$ when $k>|V|$. The exceptional branches are correct because no graph has an independent set larger than its vertex set, while every graph has a vertex cover of size at most $|V|$. Both maps are clearly polynomial-time. [L2, F1, step 1.2, construct]

3.1 Step 1.1 gives reductions between CLIQUE and INDEPENDENT SET, and step 2.1 gives reductions between INDEPENDENT SET and VERTEX COVER. Composing these reductions yields reductions in every direction among the three problems. [step 1.1, step 2.1] ∎
