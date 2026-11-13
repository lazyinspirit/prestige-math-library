---
id: lem-recursive-separator-all-colours-case
kind: lemma
title: A monochromatic F extends through all-colour attachments
status: published
origin: pipeline
domain: mathematics
deps:
  - def-recursive-induced-separator-graphs
  - def-independent-remainder-for-induction
  - def-finite-labelled-neighbourhood-attachments
  - def-induced-vertex-ramsey-class
  - lem-induced-ramsey-colour-monotonicity
  - lem-one-representative-per-neighbourhood-attachment
  - def-unrestricted-finite-colouring-map
  - math:def-induced-embedding-and-induced-copy
dependency_roles:
  def-recursive-induced-separator-graphs: mathematical-premise
  def-independent-remainder-for-induction: mathematical-premise
  def-finite-labelled-neighbourhood-attachments: mathematical-premise
  def-induced-vertex-ramsey-class: mathematical-premise
  lem-induced-ramsey-colour-monotonicity: mathematical-premise
  lem-one-representative-per-neighbourhood-attachment: mathematical-premise
  def-unrestricted-finite-colouring-map: mathematical-premise
  math:def-induced-embedding-and-induced-copy: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 3, Section 3, final paragraph; PDF p. 4, Section 3, first
        paragraph
      statement: When every attachment uses all r colours, a monochromatic induced
        copy of F in the core and one vertex of its colour from each
        corresponding attachment induce a monochromatic copy of H2.
      hypotheses: The construction uses the previously chosen independent set I,
        remainder F, base graph A and recursive graph Ar, with 2 <= r <= k.
      reading_limits: The frozen extracted article text was read at the cited
        passages. This reference attributes the article claim; the proof below
        uses the declared suppliers.
dependency_level: 14
---

## Statement

Use the recursive separator construction with $k\geq2$, non-isomorphic finite connected simple graphs $H_1,H_2$ each having an edge and ordered by decreasing largest block order, breaking ties by decreasing vertex order. Let $I$ be its chosen independent set of $H_2$, let $F=H_2-I$ be the induced graph on the remaining vertices, and let $A$ be its core graph: every colouring of $V(A)$ with $k$ available colours has a monochromatic induced copy of $F$. For $2\leq r\leq k$, form $A_r$ with a core copy of $A$ and a part $H_{\varphi_S,u,r-1}$ for each induced-copy vertex set $S$ of $F$ in $A$ and each $u\in I$, indexed by the construction's chosen induced embedding $\varphi_S:F\to A$ with image $S$.

Suppose $c:V(A_r)\to\{1,\ldots,r\}$ is a colouring in which every part uses all $r$ colours. Then the core contains a monochromatic induced copy of $F$. For any such vertex set $S$, write its colour as $a$ and choose, for each $u\in I$, a vertex of colour $a$ from $H_{\varphi_S,u,r-1}$. These vertices together with the core copy of $S$ induce a monochromatic copy of $H_2$ in $A_r$.

An independent set has no edge between two of its vertices. An induced embedding is an injective vertex map preserving and reflecting adjacency; an induced copy has exactly the host edges between its vertices. A colouring is an unrestricted function into the specified palette, and a vertex set is monochromatic when all its vertices receive the same colour.

## Statement references

[[def-recursive-induced-separator-graphs]]

[[def-independent-remainder-for-induction]]

[[def-finite-labelled-neighbourhood-attachments]]

[[def-induced-vertex-ramsey-class]]

[[lem-induced-ramsey-colour-monotonicity]]

[[lem-one-representative-per-neighbourhood-attachment]]

[[def-unrestricted-finite-colouring-map]]

[[math:def-induced-embedding-and-induced-copy]]

## Facts & Assumptions

[F1] The recursive construction supplies the stated core $A$, the independent set $I$, the induced remainder $F$, and, for each induced-copy vertex set $S$ and each $u\in I$, a part indexed by the chosen embedding $\varphi_S$. Its graph is obtained, up to the construction's vertex relabelling, by retaining the core and these chosen parts as an induced subgraph of the full labelled neighbourhood-attachment graph. [[def-recursive-induced-separator-graphs]] [[def-independent-remainder-for-induction]] [[def-finite-labelled-neighbourhood-attachments]]

[F2] The base graph has the induced $k$-colour Ramsey property for $F$; colour monotonicity gives the induced $r$-colour Ramsey property when $1\leq r\leq k$. This means every function from its vertices to the $r$-colour palette has a monochromatic induced copy of $F$. [[def-recursive-induced-separator-graphs]] [[lem-induced-ramsey-colour-monotonicity]] [[def-induced-vertex-ramsey-class]]

[F3] In the full labelled neighbourhood-attachment graph, one vertex chosen from each part indexed by a fixed induced embedding and a vertex of the independent set, together with the image of the remainder in the core, induces a copy of the target. If all selected vertices have a common colour, the copy is monochromatic. [[lem-one-representative-per-neighbourhood-attachment]] [[math:def-induced-embedding-and-induced-copy]]

[F4] A colouring is a function into its palette; a part uses a colour exactly when some vertex of that part has that value. Restricting the function to the core retains its values. [[def-unrestricted-finite-colouring-map]]

## Proof

**Given:** The construction and colouring in the statement, with $2\leq r\leq k$ and every part using all $r$ colours.

**Goal:** Find a monochromatic induced copy of $F$ in the core and show that the specified representatives extend any such copy to a monochromatic induced copy of $H_2$.

1.1 Restrict $c$ to the core and transport it along the core copy of $A$ to an $r$-colouring of $A$. By F2, there is an induced-copy vertex set $S$ of $F$ on which this colouring is constant, say with value $a\in\{1,\ldots,r\}$. The same conclusion applies to any monochromatic induced-copy vertex set $S$ in the core. [given, F1, F2, F4]

2.1 Fix such an $S$. By F1, the construction has chosen an induced embedding $\varphi_S$ with image $S$ and retains the corresponding part for every $u\in I$. Each such part uses $a$ by the given hypothesis, so choose a vertex of colour $a$ in it; if $I$ is empty no choices are needed. Apply F3 to $H_2$, $I$, $F$, $A$ and $\varphi_S$ in the full labelled attachment graph. The core image and chosen vertices induce a copy of $H_2$ there. All these vertices lie in the retained induced subgraph, so their mutual adjacencies are unchanged in $A_r$ after relabelling. They all have colour $a$, giving the required monochromatic induced copy. [given, F1, F3, F4, step 1.1] ∎
