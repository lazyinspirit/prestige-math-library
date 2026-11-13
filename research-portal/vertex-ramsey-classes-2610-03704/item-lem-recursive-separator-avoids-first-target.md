---
title: Inductive colouring avoiding H1
status: published
research_item: lem-recursive-separator-avoids-first-target
dependency_level: 14
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 3, Section 3, paragraph beginning We have that
      statement: Colour the base A red and the added copies of A_{r-1} with the other
        r-1 colours, avoiding a monochromatic induced H1 in each; the resulting
        colouring avoids a monochromatic induced H1 in A_r.
      hypotheses: The construction is made under the preceding Section 3 hypotheses,
        with 2 <= r <= k and the inductive avoidance hypothesis for A_{r-1}.
      reading_limits: The frozen extracted article text at the construction and cited
        paragraph was read. This reference attributes the article claim; the
        proof uses the declared suppliers.
---

PDF p. 3: ` Section 3, paragraph beginning We have that `

## Prerequisites

- [def-recursive-induced-separator-graphs](item-def-recursive-induced-separator-graphs)
- [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)
- [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)
- [lem-avoiding-connected-targets-in-separate-palette-parts](item-lem-avoiding-connected-targets-in-separate-palette-parts)
- [lem-finite-colouring-transport-and-restriction](item-lem-finite-colouring-transport-and-restriction)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)
- [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)
- [math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)
- [lem-independent-deletion-leaves-a-vertex](item-lem-independent-deletion-leaves-a-vertex)


## Statement

Use the recursive graphs $A_1,\ldots,A_k$ and their base graph $A$ from [def-recursive-induced-separator-graphs](item-def-recursive-induced-separator-graphs). In particular, $k\geq2$, $H_1$ is a finite connected simple graph with an edge, $A$ contains no induced copy of $H_1$, and for $2\leq r\leq k$ the graph $A_r$ consists of a core isomorphic to $A$ and pairwise disjoint attachment parts, each inducing a copy of $A_{r-1}$, with no edges between distinct parts. An induced copy is the image of an injective vertex map preserving and reflecting adjacency.

If $2\leq r\leq k$ and $A_{r-1}\notin\mathcal R^{r-1}_{\mathrm{ind}}(H_1)$, then $A_r\notin\mathcal R^r_{\mathrm{ind}}(H_1)$. More precisely, colour the core with colour $1$ and each attachment with colours $2,\ldots,r$ so that it has no monochromatic induced copy of $H_1$; the resulting $r$-colouring has no monochromatic induced copy of $H_1$.

Here an $s$-colouring is a function from the vertex set to $\{1,\ldots,s\}$; it need not use every colour. A set is monochromatic when all its vertices have the same colour. The induced $s$-colour vertex-Ramsey class of $H_1$ consists of the nonempty finite simple graphs for which every $s$-colouring contains a monochromatic induced copy of $H_1$.

## Facts & Assumptions

[F1] The recursive construction gives a finite graph $A_r$ whose core induces a copy of $A$, whose attachment parts induce copies of $A_{r-1}$, and which has no edges between distinct attachment parts. The base $A$ has no induced copy of $H_1$, and $H_1$ is nonempty and connected. [def-recursive-induced-separator-graphs](item-def-recursive-induced-separator-graphs) [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

[F2] Nonmembership of a nonempty finite graph in $\mathcal R^s_{\mathrm{ind}}(H_1)$ means that some $s$-colouring has no monochromatic induced copy of $H_1$. Colours are labels and need not all occur. [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class) [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)

[F3] An induced embedding preserves and reflects adjacency. A graph isomorphism is a bijection of vertex sets preserving and reflecting adjacency; its inverse has the same property. Transport along an isomorphism and injective relabelling of colours preserve monochromatic induced copies. [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy) [math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement) [lem-finite-colouring-transport-and-restriction](item-lem-finite-colouring-transport-and-restriction)

[F4] If a graph is partitioned into a base and pairwise anticomplete attachment parts, the base has a fixed colour unused on the attachments, the base contains no induced copy of a nonempty connected target, and every attachment avoids monochromatic induced copies of that target, then the whole colouring avoids them. [lem-avoiding-connected-targets-in-separate-palette-parts](item-lem-avoiding-connected-targets-in-separate-palette-parts)

[F5] In the recursive setup, $H_2$ has an edge, $I$ is independent in $H_2$, $F=H_2-I$, and every $k$-colouring of $A$ contains a monochromatic induced copy of $F$. Also $A_1=H_2$, and every $A_j$ with $2\leq j\leq k$ contains a core isomorphic to $A$. [def-recursive-induced-separator-graphs](item-def-recursive-induced-separator-graphs)

[F6] Deleting an independent set from a finite simple graph with an edge leaves a nonempty finite induced graph. [lem-independent-deletion-leaves-a-vertex](item-lem-independent-deletion-leaves-a-vertex)

## Proof

**Given:** The recursive construction, $2\leq r\leq k$, and $A_{r-1}\notin\mathcal R^{r-1}_{\mathrm{ind}}(H_1)$.

**Goal:** Construct the stated $r$-colouring of $A_r$ and show that it avoids a monochromatic induced $H_1$.

1.1 Applying F6 to $H_2$ and $I$ shows that $F$ is nonempty. The constant assignment $c(v)=1$ on $V(A)$ is a $k$-colouring, even if $V(A)$ were empty, since $k\geq2$ and colours need not all occur. By the property of $A$ in F5 this colouring contains an induced copy of $F$. Its embedding maps a vertex of $F$ to a vertex of $A$, so $A$ is nonempty. Now $A_1=H_2$ is nonempty because it has an edge, and for every $2\leq j\leq k$ the core in $A_j$ is nonempty because its vertex set is in bijection with $V(A)$. Thus all $A_j$, in particular $A_{r-1}$ and $A_r$, are nonempty finite graphs. [given, F1, F2, F3, F5, F6]

2.1 By step 1.1, $A_{r-1}$ is nonempty, so by nonmembership choose an $(r-1)$-colouring of $A_{r-1}$ with no monochromatic induced copy of $H_1$. For each attachment, transport this colouring through an isomorphism from $A_{r-1}$ onto that part and relabel each colour $i$ as $i+1$. The relabelling is injective and takes values in $\{2,\ldots,r\}$. A monochromatic induced $H_1$ in a transported part would pull back through the inverse isomorphism to one in $A_{r-1}$, and injective relabelling cannot create monochromaticity. Thus every attachment avoids such a copy. [given, F1, F2, F3, step 1.1]

3.1 Give every core vertex colour $1$. The core and attachment parts are disjoint and cover $V(A_r)$, so these assignments form an $r$-colouring. The core has no induced $H_1$, since it is isomorphic to $A$; distinct attachments have no edges between them, and colour $1$ is absent from every attachment. Applying the connected-target avoidance fact to this partition and the colourings from step 2.1 shows that $A_r$ has no monochromatic induced copy of $H_1$. Since $A_r$ is nonempty by step 1.1, the definition of the induced Ramsey class therefore gives $A_r\notin\mathcal R^r_{\mathrm{ind}}(H_1)$. [F1, F2, F3, F4, step 1.1, step 2.1] ∎
