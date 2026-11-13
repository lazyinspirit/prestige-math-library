---
id: def-finite-labelled-neighbourhood-attachments
kind: definition
title: Neighbourhood attachments indexed by induced embeddings
status: draft
origin: pipeline
domain: mathematics
deps:
  - math:def-finite-simple-graph
  - math:def-induced-embedding-and-induced-copy
  - math:def-subgraph-induced-subgraph-and-spanning-subgraph
  - math:def-clique-and-independence-numbers
  - def-tagged-finite-graph-family
  - math:def-cartesian-product
  - math:thm-product-rule
  - math:thm-subset-of-a-finite-set
  - math:def-set-difference-and-symmetric-difference
dependency_roles:
  math:def-finite-simple-graph: mathematical-premise
  math:def-induced-embedding-and-induced-copy: mathematical-premise
  math:def-subgraph-induced-subgraph-and-spanning-subgraph: mathematical-premise
  math:def-clique-and-independence-numbers: mathematical-premise
  def-tagged-finite-graph-family: mathematical-premise
  math:def-cartesian-product: mathematical-premise
  math:thm-product-rule: mathematical-premise
  math:thm-subset-of-a-finite-set: mathematical-premise
  math:def-set-difference-and-symmetric-difference: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 1
---

## Definition

Let $J,A,L$ be finite simple graphs and let $I\subseteq V(J)$ be independent, meaning that no two distinct vertices of $I$ are adjacent. Put $F=J[V(J)\setminus I]$, the subgraph induced by the vertices outside $I$. Let $\Phi$ be the set of induced embeddings $\varphi:F\to A$: these are injections on vertices preserving both adjacency and nonadjacency. Put $T=\Phi\times I$.

The **labelled neighbourhood-attachment graph** has a tagged core $C=\{0\}\times V(A)$ and, for every $(\varphi,u)\in T$, a tagged part $P_{\varphi,u}=\{1\}\times\{(\varphi,u)\}\times V(L)$, with ordered products associated to the right. Its vertices are the union of the core and these parts. Inside the core retain exactly the edges of $A$, and inside each part retain exactly the edges of $L$. A vertex $(0,a)$ of the core is adjacent to a vertex $(1,((\varphi,u),x))$ of $P_{\varphi,u}$ exactly when there is $v\in V(F)$ with $a=\varphi(v)$ and $\{u,v\}\in E(J)$. There are no edges between distinct parts. These rules specify the entire edge set. Thus different embeddings with the same image still receive distinct parts.

For comparison with indexing by induced images, let $\mathcal S=\{\varphi(V(F)):\varphi\in\Phi\}$. For each $S\in\mathcal S$, choose one $\varphi_S\in\Phi$ with image $S$; it is an isomorphism from $F$ onto $A[S]$. The induced subgraph on the core and the parts $P_{\varphi_S,u}$ for $S\in\mathcal S$ and $u\in I$ is the corresponding one-embedding-per-image attachment. Other embeddings with the same image and their parts remain present in the full labelled construction.

## Definition references

[[math:def-finite-simple-graph]]

[[math:def-induced-embedding-and-induced-copy]]

[[math:def-subgraph-induced-subgraph-and-spanning-subgraph]]

[[math:def-clique-and-independence-numbers]]

[[def-tagged-finite-graph-family]]

[[math:def-cartesian-product]]

[[math:def-set-difference-and-symmetric-difference]]

## Justification

The vertex set of $F$ is finite as a subset of $V(J)$. Enumerating that finite domain identifies the set of all maps from $V(F)$ to $V(A)$ with a finite product of copies of $V(A)$, including the singleton empty product when $V(F)$ is empty. The product rule makes that set finite, and the induced embeddings form a subset; hence $\Phi$ and then $T=\Phi\times I$ are finite. The tagged-family construction applied to one copy of $A$ and the copies of $L$ indexed by $T$ gives a finite vertex set with disjoint core and parts.

Every specified internal edge has distinct endpoints, and every specified attachment edge joins the disjoint core and a part. Consequently the specified edge set consists of two-element subsets of the finite vertex set and determines a finite simple graph. The edge rules exhaust the possibilities, so they introduce no other core-to-part edges or edges between parts. Each $\varphi\in\Phi$ is an isomorphism onto its induced image; the finite set of images permits one such embedding to be chosen for each image. If $I$ or $\Phi$ is empty, there are no attachment parts; if $V(F)$ is empty, the unique empty embedding is included and its parts have no core neighbours.

[[math:thm-product-rule]]

[[math:thm-subset-of-a-finite-set]]

[[def-tagged-finite-graph-family]]
