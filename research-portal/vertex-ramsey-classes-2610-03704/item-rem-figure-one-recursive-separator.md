---
title: "Figure 1: recursive construction and red witness"
status: draft
research_item: rem-figure-one-recursive-separator
dependency_level: 15
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 3, Figure 1 and caption; Section 3, recursive construction; PDF
        p. 4, first paragraph
      statement: Figure 1 depicts the construction of Ar and a red copy of H = H2. The
        accompanying argument extends a red induced copy of F in A by one red
        vertex from each corresponding attachment.
      hypotheses: The recursive construction uses the chosen independent set I,
        remainder F, and base graph A; the extension is in the case where every
        attachment uses all r colours.
      reading_limits: The frozen article text at the cited passages and the rendered
        third page were inspected. This reference attributes the figure and
        argument; the proof below uses the declared suppliers.
---

PDF p. 3: ` Figure 1, drawing and caption `

## Prerequisites

- [def-recursive-induced-separator-graphs](item-def-recursive-induced-separator-graphs)
- [lem-recursive-separator-all-colours-case](item-lem-recursive-separator-all-colours-case)
- [def-finite-labelled-neighbourhood-attachments](item-def-finite-labelled-neighbourhood-attachments)
- [lem-one-representative-per-neighbourhood-attachment](item-lem-one-representative-per-neighbourhood-attachment)


## Statement

In the recursive separator construction, let $k\geq2$ and $2\leq r\leq k$. The finite connected simple graphs $H_1,H_2$ are non-isomorphic, each has an edge, and they are ordered by decreasing largest block order, breaking ties by decreasing vertex order. Let $I$ be the construction's independent set in $H_2$, meaning that no two of its vertices are adjacent, and let $F=H_2-I$ be the subgraph induced by the remaining vertices. The base graph $A$ has a monochromatic induced copy of $F$ in every colouring with $k$ available colours. An induced copy retains exactly the host edges between its vertices; monochromatic means that all its vertices have the same colour.

Figure 1 schematically depicts $H=H_2$ decomposed into $F$ and $I$, the core $A$ with induced copies of $F$, and the graph $A_r$ formed by attaching copies of $A_{r-1}$ according to the neighbourhoods of vertices of $I$. For each induced-copy vertex set $S$ of $F$ in the core, the construction chooses an induced embedding $\varphi_S:F\to A$ with image $S$ and attaches one part for each $u\in I$. An induced embedding is an injection preserving both adjacency and nonadjacency. Every vertex of that part is joined exactly to the core vertices $\varphi_S(v)$ for which $v$ is adjacent to $u$ in $H_2$; distinct parts have no edges between them.

Suppose an $r$-colouring of $A_r$ uses every one of its $r$ colours in every part. Then the core has a monochromatic induced copy of $F$. If its colour is called red, choosing one red vertex in each part corresponding to that copy and to a vertex of $I$ gives, together with the core copy, a red induced copy of $H_2$, as illustrated by the highlighted vertices in Figure 1. A colouring is a function from vertices to the available colours; it need not be proper or use every colour on the whole graph.

## Statement references

[def-recursive-induced-separator-graphs](item-def-recursive-induced-separator-graphs)

[def-finite-labelled-neighbourhood-attachments](item-def-finite-labelled-neighbourhood-attachments)

[lem-recursive-separator-all-colours-case](item-lem-recursive-separator-all-colours-case)

[lem-one-representative-per-neighbourhood-attachment](item-lem-one-representative-per-neighbourhood-attachment)

## Facts & Assumptions

[F1] The recursive construction supplies the core, the chosen embedding for each induced-copy vertex set, and one disjoint part for each corresponding vertex of $I$. Its parts and their core adjacencies follow the labelled neighbourhood-attachment rules. [def-recursive-induced-separator-graphs](item-def-recursive-induced-separator-graphs) [def-finite-labelled-neighbourhood-attachments](item-def-finite-labelled-neighbourhood-attachments)

[F2] Under the stated all-colours hypothesis, the core has a monochromatic induced copy of $F$, and representatives of its colour in the corresponding parts extend it to a monochromatic induced copy of $H_2$. [lem-recursive-separator-all-colours-case](item-lem-recursive-separator-all-colours-case)

[F3] The representative lemma identifies the induced copy: its isomorphism sends each vertex of $F$ to its image in the core and each $u\in I$ to the representative in the part indexed by $u$. [lem-one-representative-per-neighbourhood-attachment](item-lem-one-representative-per-neighbourhood-attachment)

## Proof

**Given:** The recursive construction and an $r$-colouring in which every part uses all $r$ colours.

**Goal:** Explain the red induced copy depicted in Figure 1.

1.1 By F2, the core contains a monochromatic induced copy of $F$. Call its vertex set $S$ and its colour red. By F1, for the chosen embedding $\varphi_S$ there is a corresponding part for every $u\in I$; since each part uses every colour, select a red vertex from each such part. [given, F1, F2]

2.1 By F2, the selected vertices and $S$ induce a monochromatic copy of $H_2$. More explicitly, F3 identifies the vertices of $S$ with $F$ and the selected representatives with $I$; the attachment rules reproduce the edges between $F$ and $I$, and distinct parts have no edges between them. The selected vertices are all red, as required. [F1, F2, F3, step 1.1] ∎

## Extraction notes

The rendered drawing is schematic: it illustrates the construction and a red witness, and is not used to infer numerical vertex counts. The proof of the witness uses the declared suppliers rather than the figure as evidence.
