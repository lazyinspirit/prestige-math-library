---
id: lem-recursive-separator-forces-second-target
kind: lemma
title: Inductive Ramsey membership for H2
status: draft
origin: pipeline
domain: mathematics
deps:
  - def-recursive-induced-separator-graphs
  - def-induced-vertex-ramsey-class
  - def-unrestricted-finite-colouring-map
  - lem-recursive-separator-fewer-colours-case
  - lem-recursive-separator-all-colours-case
dependency_roles:
  def-recursive-induced-separator-graphs: mathematical-premise
  def-induced-vertex-ramsey-class: mathematical-premise
  def-unrestricted-finite-colouring-map: mathematical-premise
  lem-recursive-separator-fewer-colours-case: mathematical-premise
  lem-recursive-separator-all-colours-case: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 3, Section 3, final paragraph; PDF p. 4, Section 3, first
        paragraph
      statement: For 2 <= r <= k, the induction step obtains the induced r-colour
        Ramsey property of A_r for H_2 from the corresponding (r-1)-colour
        property of A_{r-1}, by considering whether an attachment omits a
        colour.
      hypotheses: The recursive separator construction and its stated choices of H_1,
        H_2, I, F and A are in force.
      reading_limits: The frozen article text at the cited passages was inspected.
        This citation attributes the article claim; the proof below uses the
        declared case lemmas.
dependency_level: 15
---

## Statement

Use the recursive separator construction: $k\geq2$; $H_1,H_2$ are non-isomorphic finite connected simple graphs, each with an edge, ordered by decreasing largest block order and then, in case of equality, by decreasing vertex order. A block is a maximal 2-connected subgraph or a bridge with its endpoints; its order is its number of vertices. The construction fixes an independent set $I$ of $H_2$, its induced remainder $F=H_2-I$, and a core graph $A$ such that every colouring of $V(A)$ with $k$ available colours has a monochromatic induced copy of $F$. It defines $A_1=H_2$ and, for $2\leq r\leq k$, forms $A_r$ from a copy of $A$ and a disjoint copy of $A_{r-1}$ for each chosen induced-copy vertex set of $F$ in $A$ and each $u\in I$, with the prescribed neighbourhood attachments.

For $2\leq r\leq k$, if $A_{r-1}\in\mathcal R^{r-1}_{\mathrm{ind}}(H_2)$, then $A_r\in\mathcal R^r_{\mathrm{ind}}(H_2)$. Here membership in $\mathcal R^s_{\mathrm{ind}}(H_2)$ means that every function from the graph's vertex set to $\{1,\ldots,s\}$ has a monochromatic induced copy of $H_2$: an injective image preserving adjacency and nonadjacency whose vertices all have one colour. Colours need not all be used.

## Statement references

[[def-recursive-induced-separator-graphs]]

[[def-induced-vertex-ramsey-class]]

[[def-unrestricted-finite-colouring-map]]

## Facts & Assumptions

[F1] Under the stated construction and $A_{r-1}\in\mathcal R^{r-1}_{\mathrm{ind}}(H_2)$, if an attachment uses at most $r-1$ colours under an $r$-colouring of $A_r$, it contains a monochromatic induced copy of $H_2$, which remains induced in $A_r$. [[lem-recursive-separator-fewer-colours-case]]

[F2] Under the stated construction, if every attachment uses all $r$ colours under an $r$-colouring of $A_r$, the core contains a monochromatic induced copy of $F$ and representatives of its colour from the corresponding attachments extend it to a monochromatic induced copy of $H_2$ in $A_r$. [[lem-recursive-separator-all-colours-case]]

[F3] An $r$-colouring is a function into $\{1,\ldots,r\}$; an attachment uses exactly the colours in the image of its vertex set under that function. The induced Ramsey-class condition quantifies over every such function. [[def-unrestricted-finite-colouring-map]] [[def-induced-vertex-ramsey-class]]

## Proof

**Given:** The recursive construction, $2\leq r\leq k$, and $A_{r-1}\in\mathcal R^{r-1}_{\mathrm{ind}}(H_2)$.

**Goal:** Show that $A_r\in\mathcal R^r_{\mathrm{ind}}(H_2)$.

1.1 Let $c:V(A_r)\to\{1,\ldots,r\}$ be arbitrary. If some attachment does not use every colour in this palette, its used palette has at most $r-1$ elements. By F1 it contains a monochromatic induced copy of $H_2$ that is also induced in $A_r$. [given, F1, F3, choose]

2.1 Otherwise every attachment uses all $r$ colours, including vacuously if there are no attachments. F2 then gives a monochromatic induced copy of $H_2$ in $A_r$. Thus in either case the arbitrary colouring $c$ has such a copy. By the definition of the induced Ramsey class, $A_r\in\mathcal R^r_{\mathrm{ind}}(H_2)$. [given, F2, F3, step 1.1] ∎
