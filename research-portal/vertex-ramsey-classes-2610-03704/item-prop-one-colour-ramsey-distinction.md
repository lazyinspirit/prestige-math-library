---
title: The $k=1$ case
status: published
research_item: prop-one-colour-ramsey-distinction
dependency_level: 3
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 2, Section 3, opening paragraph and repeated ordinary case
      statement: "For two non-isomorphic graphs $H_1,H_2$, their one-colour classes
        are distinct in both senses: $\\mathcal R^1(H_1)\\ne\\mathcal R^1(H_2)$
        and $\\mathcal R^1_{\\mathrm{ind}}(H_1)\\ne\\mathcal
        R^1_{\\mathrm{ind}}(H_2)$. The article notes $H_i\\in\\mathcal
        R^1_{\\mathrm{ind}}(H_i)$ and $H_i\\in\\mathcal R^1(H_i)$ for
        $i\\in\\{1,2\\}$."
      hypotheses: The article assumes that all graphs considered have at least one vertex.
      reading_limits: The frozen article text was read at the cited passages. This
        citation attributes the formulation; it is not used as a proof premise.
---

PDF p. 2: ` Section 3, opening paragraph and repeated ordinary case `

## Prerequisites

- [def-article-graph-conventions](item-def-article-graph-conventions)
- [def-vertex-ramsey-class](item-def-vertex-ramsey-class)
- [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)
- [def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)
- [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)
- [lem-finite-mutual-embedding-rigidity](item-lem-finite-mutual-embedding-rigidity)


## Statement

Let $H_1,H_2$ be non-isomorphic finite simple graphs, each with at least one vertex. Their ordinary one-colour vertex-Ramsey classes are distinct, $\mathcal R^1(H_1)\ne\mathcal R^1(H_2)$, and their induced one-colour vertex-Ramsey classes are distinct, $\mathcal R^1_{\mathrm{ind}}(H_1)\ne\mathcal R^1_{\mathrm{ind}}(H_2)$. Moreover, for each $i\in\{1,2\}$, $H_i\in\mathcal R^1(H_i)$ and $H_i\in\mathcal R^1_{\mathrm{ind}}(H_i)$.

Here an ordinary copy of a graph is a subgraph isomorphic to it, while an induced copy includes all host edges between its vertices. A one-colour vertex-Ramsey class consists of the nonempty finite simple graphs in which every function from the vertex set to $\{1\}$ has a monochromatic copy of the specified kind. Non-isomorphic means that no vertex bijection preserves and reflects adjacency.

## Statement references

[def-article-graph-conventions](item-def-article-graph-conventions)

[def-vertex-ramsey-class](item-def-vertex-ramsey-class)

[def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)

## Facts & Assumptions

[F1] An ordinary embedding is an injective vertex map preserving edges and exists exactly when the host contains an ordinary copy. An induced embedding is an injective vertex map preserving and reflecting adjacency, and its image is an induced copy. Hence every induced embedding is an ordinary embedding ([def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding), [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)).

[F2] For nonempty finite simple graphs $H,G$, membership of $G$ in $\mathcal R^1(H)$, respectively $\mathcal R^1_{\mathrm{ind}}(H)$, means that every function $V(G)\to\{1\}$ has a monochromatic ordinary, respectively induced, copy of $H$ ([def-vertex-ramsey-class](item-def-vertex-ramsey-class), [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)).

[F3] If two finite simple graphs admit ordinary embeddings in both directions, they are isomorphic ([lem-finite-mutual-embedding-rigidity](item-lem-finite-mutual-embedding-rigidity)).

## Proof

**Given:** Non-isomorphic finite simple graphs $H_1,H_2$, each with at least one vertex.

**Goal:** Prove both class inequalities and the two self-memberships for each graph.

1.1 For any nonempty finite simple graph $G$, there is exactly one function $V(G)\to\{1\}$, and it is constant. Consequently every copy in $G$ is monochromatic for that function. By the membership definitions, $G\in\mathcal R^1(H)$ exactly when $G$ contains an ordinary copy of $H$, and $G\in\mathcal R^1_{\mathrm{ind}}(H)$ exactly when $G$ contains an induced copy of $H$. In particular, the identity vertex map gives both an ordinary and an induced copy of $H_i$ in itself, proving both self-memberships for each $i$. [given, F1, F2]

2.1 By finite mutual-embedding rigidity and non-isomorphism, at least one of the ordinary embeddings $H_1\to H_2$ and $H_2\to H_1$ does not exist. Choose indices $a,b$ with $\{a,b\}=\{1,2\}$ such that $H_a$ has no ordinary embedding into $H_b$. Then $H_b$ contains neither an ordinary nor an induced copy of $H_a$: an induced embedding would also be an ordinary embedding. Thus $H_b$ belongs to both one-colour classes of $H_b$ but to neither corresponding class of $H_a$. The same graph therefore distinguishes each pair of classes, establishing both inequalities. [given, F1, F3, step 1.1, choose] ∎
