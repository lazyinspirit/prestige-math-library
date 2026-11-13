---
id: lem-one-representative-per-neighbourhood-attachment
kind: lemma
title: One representative from each matching attachment reconstructs the target
status: published
origin: pipeline
domain: mathematics
deps:
  - def-finite-labelled-neighbourhood-attachments
  - def-unrestricted-finite-colouring-map
  - math:def-finite-simple-graph
  - math:def-subgraph-induced-subgraph-and-spanning-subgraph
  - math:def-graph-isomorphism-and-complement
  - math:def-induced-embedding-and-induced-copy
  - math:def-clique-and-independence-numbers
  - math:def-function
  - math:def-injection-surjection-bijection
dependency_roles:
  def-finite-labelled-neighbourhood-attachments: mathematical-premise
  def-unrestricted-finite-colouring-map: mathematical-premise
  math:def-finite-simple-graph: mathematical-premise
  math:def-subgraph-induced-subgraph-and-spanning-subgraph: mathematical-premise
  math:def-graph-isomorphism-and-complement: mathematical-premise
  math:def-induced-embedding-and-induced-copy: mathematical-premise
  math:def-clique-and-independence-numbers: mathematical-premise
  math:def-function: mathematical-premise
  math:def-injection-surjection-bijection: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
---

## Statement

Let $J,A,L$ be finite simple graphs, let $I\subseteq V(J)$ be independent, and put $F=J[V(J)\setminus I]$. In the labelled neighbourhood-attachment graph constructed from these data, fix an induced embedding $\varphi:F\to A$ and, for each $u\in I$, choose a vertex $x_u$ in the part $P_{\varphi,u}$. Then the subgraph induced by the core vertices $(0,\varphi(v))$ for $v\in V(F)$ together with the vertices $x_u$ for $u\in I$ is isomorphic to $J$. If these vertices all have one common colour in a vertex colouring, this is a monochromatic induced copy of $J$.

## Statement references

[[def-finite-labelled-neighbourhood-attachments]]

[[def-unrestricted-finite-colouring-map]]

[[math:def-finite-simple-graph]]

[[math:def-subgraph-induced-subgraph-and-spanning-subgraph]]

[[math:def-graph-isomorphism-and-complement]]

[[math:def-induced-embedding-and-induced-copy]]

[[math:def-clique-and-independence-numbers]]

## Facts & Assumptions

[F1] In the labelled attachment construction, the core is a tagged copy of $A$, each $P_{\varphi,u}$ is disjoint from the core and the other parts, distinct parts have no edges between them, and $x\in P_{\varphi,u}$ is adjacent to $(0,a)$ exactly when $a=\varphi(v)$ for some $v\in V(F)$ adjacent to $u$ in $J$. See [[def-finite-labelled-neighbourhood-attachments]].

[F2] An induced embedding is an injection preserving and reflecting adjacency; an induced subgraph retains exactly the ambient edges between its vertices. A graph isomorphism is a vertex bijection preserving and reflecting adjacency. See [[math:def-induced-embedding-and-induced-copy]], [[math:def-subgraph-induced-subgraph-and-spanning-subgraph]], and [[math:def-graph-isomorphism-and-complement]].

[F3] An independent set has no edge joining two distinct members. A monochromatic vertex set has one common colour on its vertices. See [[math:def-clique-and-independence-numbers]] and [[def-unrestricted-finite-colouring-map]].

[F4] A function $f:X\to Y$ assigns exactly one value in $Y$ to each element of $X$. It is injective when $f(x)=f(y)$ implies $x=y$, surjective when every element of $Y$ is a value of $f$, and bijective when both conditions hold. See [[math:def-function]] and [[math:def-injection-surjection-bijection]].

## Proof

**Given:** The graphs, independent set, embedding and representatives in the statement.

**Goal:** Construct the stated induced isomorphism and establish the colour conclusion.

1.1 Define $f:V(J)\to V(H)$, where $H$ is the displayed induced subgraph, by $f(v)=(0,\varphi(v))$ for $v\in V(F)=V(J)\setminus I$ and $f(u)=x_u$ for $u\in I$. The core vertices are distinct because $\varphi$ is injective; the representatives are distinct because their indexed parts are disjoint, and none lies in the core. Thus $f$ is injective, and it is surjective onto $V(H)$ by the definition of $H$. This also covers an empty $I$ or empty $V(F)$. [given, F1, F2, F4]

2.1 For distinct vertices of $F$, their images are adjacent exactly when their images under $\varphi$ are adjacent in $A$, equivalently when the original vertices are adjacent in $J$, since $F$ is induced. For $v\in V(F)$ and $u\in I$, the attachment rule says $f(v)$ and $f(u)$ are adjacent exactly when some $w\in V(F)$ satisfies $\varphi(w)=\varphi(v)$ and $uw\in E(J)$; injectivity forces $w=v$. For distinct $u,u'\in I$, their images lie in distinct parts and are nonadjacent, as are $u,u'$ because $I$ is independent. These cases exhaust distinct pairs, so $f$ preserves and reflects adjacency and is an isomorphism from $J$ onto $H$. If all vertices of $H$ have one common colour, its induced copy is monochromatic. [F1, F2, F3, F4, step 1.1] ∎
