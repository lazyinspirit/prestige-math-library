---
title: Existence of the base graph A
status: published
research_item: prop-base-graph-for-induced-separation
dependency_level: 12
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF p. 3, Section 3, paragraph beginning First
      statement: The article constructs a graph A in Forb(H1) and the induced k-colour
        vertex-Ramsey class of F, using an edgeless graph when F is edgeless and
        G(F, ||B||+2, k) otherwise.
      hypotheses: H1 and H2 are non-isomorphic connected graphs with edges, ordered by
        largest block order and then order; I is an independent set of H2 with
        beta(H2-I) less than beta(H2), and F=H2-I.
      reading_limits: The frozen article text at the cited passage and its surrounding
        setup were read. This citation attributes the construction; the proof
        below uses the declared suppliers.
---

PDF p. 3: ` Section 3, paragraph beginning First `

## Prerequisites

- [def-article-graph-conventions](item-def-article-graph-conventions)
- [def-independent-remainder-for-induction](item-def-independent-remainder-for-induction)
- [def-block-and-largest-block-order](item-def-block-and-largest-block-order)
- [def-hypergraph-copy-construction](item-def-hypergraph-copy-construction)
- [def-induced-forbidden-class](item-def-induced-forbidden-class)
- [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)
- [ex-edgeless-base-graph-for-induction](item-ex-edgeless-base-graph-for-induction)
- [lem-high-girth-construction-forbids-target-block](item-lem-high-girth-construction-forbids-target-block)
- [prop-construction-induced-ramsey-property](item-prop-construction-induced-ramsey-property)
- [lem-independent-deletion-leaves-a-vertex](item-lem-independent-deletion-leaves-a-vertex)


## Statement

Let $H_1,H_2$ be non-isomorphic finite connected simple graphs, each with an edge, ordered so that $\beta(H_1)\geq\beta(H_2)$ and, when equality holds, $|H_1|\geq|H_2|$. Let $I$ be an independent set of $H_2$ such that $F=H_2-I$ satisfies $\beta(F)<\beta(H_2)$, and let $k\geq1$ be an integer. Then there is a graph $A\in\operatorname{Forb}(H_1)\cap\mathcal R^k_{\mathrm{ind}}(F)$.

Here $H_2-I$ is the induced graph on the vertices outside $I$, and independent means that no edge has both endpoints in $I$. A block is a maximal 2-connected subgraph or a bridge with its endpoints; a 2-connected graph has at least three vertices, is connected, and remains connected after deletion of any one vertex. A bridge is an edge whose deletion increases the number of connected components. For a graph with an edge, $\beta$ is the largest block order; for an edgeless nonempty graph it is $1$. Graph order is the number of vertices, and $\|B\|$ denotes the number of edges of $B$.

The class $\operatorname{Forb}(H_1)$ consists of nonempty finite simple graphs containing no induced copy of $H_1$. The class $\mathcal R^k_{\mathrm{ind}}(F)$ consists of such graphs in which every assignment of $k$ available colours to the vertices has a monochromatic induced copy of $F$. An induced copy preserves both adjacency and nonadjacency.

If $F$ is edgeless, one may take $A$ edgeless on $k(|F|-1)+1$ vertices. Otherwise, choose a block $B$ of $H_1$ of order $\beta(H_1)$ and take any graph $A=G(F,\|B\|+2,k)$ supplied by Construction 1. This construction places copies of $F$ on the hyperedges of a suitable finite uniform hypergraph of the specified girth and chromatic property; its choices are as in [def-hypergraph-copy-construction](item-def-hypergraph-copy-construction).

## Facts & Assumptions

[F1] Deleting an independent set from a finite simple graph with an edge leaves a nonempty finite induced graph. Thus $F$ is nonempty. [lem-independent-deletion-leaves-a-vertex](item-lem-independent-deletion-leaves-a-vertex) [def-independent-remainder-for-induction](item-def-independent-remainder-for-induction)

[F2] Under the stated induction hypotheses, if $F$ is edgeless, the edgeless graph on $k(|F|-1)+1$ vertices belongs to both required classes. [ex-edgeless-base-graph-for-induction](item-ex-edgeless-base-graph-for-induction)

[F3] If $F$ has an edge, a largest block $B$ of $H_1$ has $\beta(H_1)\geq3$ vertices. For every graph $G(F,\|B\|+2,k)$ obtained by Construction 1, the block-exclusion result gives membership in $\operatorname{Forb}(H_1)$. [def-block-and-largest-block-order](item-def-block-and-largest-block-order) [lem-high-girth-construction-forbids-target-block](item-lem-high-girth-construction-forbids-target-block)

[F4] For nonempty finite simple $F$, integers $q\geq3$ and $k\geq1$, construction choices exist, and every graph $G(F,q,k)$ obtained from them belongs to $\mathcal R^k_{\mathrm{ind}}(F)$. [def-hypergraph-copy-construction](item-def-hypergraph-copy-construction) [prop-construction-induced-ramsey-property](item-prop-construction-induced-ramsey-property) [def-induced-vertex-ramsey-class](item-def-induced-vertex-ramsey-class)

## Proof

**Given:** Graphs $H_1,H_2$, an independent set $I$, its remainder $F$, and an integer $k$ satisfying the statement.

**Goal:** Construct a graph in both stated classes, with the stated choice in each case.

1.1 By F1, $F$ is nonempty. If $F$ is edgeless, take the edgeless graph on $k(|F|-1)+1$ vertices. The hypotheses of F2 hold, so this graph belongs to $\operatorname{Forb}(H_1)\cap\mathcal R^k_{\mathrm{ind}}(F)$. [given, F1, F2, assume-case]

1.2 Suppose instead that $F$ has an edge. Choose a largest block $B$ of $H_1$ and put $q=\|B\|+2$. By F3, $B$ has at least three vertices and is a block with an edge, so $q\geq3$. By F4, the required construction choices exist; choose any resulting graph $A=G(F,q,k)$. F3 gives $A\in\operatorname{Forb}(H_1)$, while F4 gives $A\in\mathcal R^k_{\mathrm{ind}}(F)$. [given, F1, F3, F4, choose, assume-case]

2.1 The two cases exhaust the possibilities for $F$. In each case the displayed choice of $A$ lies in the required intersection. [step 1.1, step 1.2, cases-exhaustive] ∎
