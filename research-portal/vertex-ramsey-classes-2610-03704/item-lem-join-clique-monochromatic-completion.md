---
title: Completion inside the join separator
status: draft
research_item: lem-join-clique-monochromatic-completion
dependency_level: 3
sources:
  references:
    - title: Maria Axenovich and Patrick Schmitteckert, Non-isomorphic graphs have
        distinct vertex-Ramsey classes, arXiv:2610.03704v1
      url: https://arxiv.org/abs/2610.03704
      locator: PDF page 2, Section 3, ordinary classes, red n-vertex set
      statement: For the join of H_2 with a clique of order (k-1)(n-1), the article
        uses n vertices of one colour to obtain a join of a subgraph of H_2 and
        a clique, and asserts that this join contains H_2 as a subgraph.
      hypotheses: H_2 has order n at least one and k is an integer at least two.
      reading_limits: The frozen article text was read at the cited passage. This
        reference attributes the formulation only and is not a premise of the
        proof.
---

PDF p. 2: ` Section 3, ordinary classes, red n-vertex set `

## Prerequisites

- [def-graph-join](item-def-graph-join)
- [def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence)
- [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)
- [def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)
- [lem-finite-palette-capacity](item-lem-finite-palette-capacity)
- [lem-universal-clique-completes-a-restricted-target](item-lem-universal-clique-completes-a-restricted-target)
- [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)
- [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)
- [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)
- [math:thm-sum-rule](https://alphabetamath.cc/item/thm-sum-rule)
- [math:def-nat-order](https://alphabetamath.cc/item/def-nat-order)
- [math:lem-nat-add-cancellative](https://alphabetamath.cc/item/lem-nat-add-cancellative)
- [math:lem-nat-add-commutative](https://alphabetamath.cc/item/lem-nat-add-commutative)


## Statement

Let $H_2$ be a finite simple graph of order $n\geq1$, and let $k\geq2$ be an integer. Form $G=H_2\vee K_{(k-1)(n-1)}$ from disjoint copies. Every $k$-colouring of $V(G)$ has at least $n$ vertices of one colour. Any set $S$ of $n$ vertices of that colour induces a graph $G[S]=G'\vee K_{n-\ell}$, up to the canonical identification of its parts, where $G'$ is the graph induced by the $\ell$ selected vertices in the $H_2$ part and $0\leq\ell\leq n$. This induced graph contains an ordinary copy of $H_2$, and that copy is monochromatic.

Here the order of a graph is the number of its vertices. A finite simple graph has a finite vertex set and edges that are two-element subsets of it. A $k$-colouring assigns each vertex one of $k$ colours, without requiring all colours to be used. An induced graph on a vertex set retains exactly the host edges with both endpoints in that set. The join retains the edges in its disjoint parts and adds all cross-edges; $K_m$ is the complete graph on $m$ vertices, with every two distinct vertices adjacent. For $m=0$, $K_0$ is the empty graph, and a join with an empty part has the edges of its other part. An ordinary copy is a subgraph isomorphic to the target, so extra host edges between its vertices are allowed.

## Facts & Assumptions

**Given:** $H_2$, $n$, $k$, and $G$ as in the statement, together with a $k$-colouring of $V(G)$.

**Goal:** Find $n$ vertices of one colour and prove the stated induced-join and ordinary-copy assertions for every such set.

[F1] The join has disjoint parts inducing the given graphs and all possible cross-edges. Its construction permits an empty part. Induced subgraphs retain exactly the edges whose endpoints are selected. See [def-graph-join](item-def-graph-join) and [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph).

[F2] Graph order is vertex-set cardinality; disjoint finite sets have union cardinality equal to the sum of their cardinalities. A subset of a finite set is finite and has cardinality at most that of the ambient set. See [def-graph-order-size-complement-independence](item-def-graph-order-size-complement-independence), [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality), [math:thm-sum-rule](https://alphabetamath.cc/item/thm-sum-rule), and [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set).

[F3] A $k$-colouring is a function into $\{1,\ldots,k\}$, and a set is monochromatic when all its vertices receive the same value. If a finite set has more than $k(n-1)$ elements, every such colouring has a colour class of at least $n$ elements. See [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map) and [lem-finite-palette-capacity](item-lem-finite-palette-capacity).

[F4] If $J$ has $n$ vertices, $W\subseteq V(J)$ has $\ell$ vertices, and $C$ is a disjoint set of $n-\ell$ vertices, the complete connection of $J[W]$ and the complete graph on $C$ contains an ordinary copy of $J$. This includes $\ell=0$ and $\ell=n$. An ordinary embedding gives a copy using its image edges. See [lem-universal-clique-completes-a-restricted-target](item-lem-universal-clique-completes-a-restricted-target) and [def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding).

[F5] For natural numbers $\ell\leq n$, write $n-\ell$ for the unique natural number $q$ with $\ell+q=n$. Existence follows from the additive definition of natural order. Addition is commutative, and $a+r=b+r$ implies $a=b$; hence $\ell+q=\ell+q'$ implies $q=q'$. See [math:def-nat-order](https://alphabetamath.cc/item/def-nat-order), [math:lem-nat-add-commutative](https://alphabetamath.cc/item/lem-nat-add-commutative), and [math:lem-nat-add-cancellative](https://alphabetamath.cc/item/lem-nat-add-cancellative).

## Proof

**Given:** The graph and colouring in the statement. **Goal:** Establish the colour-class, induced-join, and monochromatic-copy claims.

1.1 Let $A$ and $B$ be the vertex sets of the actual $H_2$ and clique parts of $G$, respectively, and put $J=G[A]$. The join provides a canonical bijection $\iota:V(H_2)\to A$ preserving and reflecting edges, so $J$ is a copy of $H_2$. Thus $|A|=n$ and $|B|=(k-1)(n-1)$. Their disjoint union has $n+(k-1)(n-1)=k(n-1)+1$ vertices. By colour-class capacity, some colour class has at least $n$ vertices; choose any $n$ of them and call the resulting set $S$. [given, F1, F2, F3]

2.1 Put $W=S\cap A$, $C=S\cap B$, and $\ell=|W|$. These are subsets of the actual vertex sets of the join: $W\subseteq V(J)=A$ and $C\subseteq B$, so $W\cap C=\varnothing$ and $W\cup C=S$. The subset bound and sum rule give $0\leq\ell\leq n$ and $\ell+|C|=n$. The unique-gap characterization in F5 therefore gives $|C|=n-\ell$. The edges induced on $W$ are exactly those of $J[W]$, those on $C$ form a complete graph, and all cross-edges are present. Thus $G[S]$ is the complete connection of $J[W]$ and the complete graph on $C$, giving the stated join with $G'=J[W]$ up to the canonical identification of its parts. This description also holds when either selected part is empty. [step 1.1, F1, F2, F5]

3.1 Apply the completion lemma to $J=G[A]$, $W$, and $C$. Step 2.1 verifies its set-disjointness and cardinality hypotheses, including at $\ell=0$ or $\ell=n$. It yields an ordinary embedding $f:V(J)\to S$ into $G[S]$. Define $h(v)=f(\iota(v))$ for $v\in V(H_2)$. If $h(u)=h(v)$, injectivity of $f$ and then of $\iota$ gives $u=v$; each edge of $H_2$ maps through $\iota$ to an edge of $J$ and then through $f$ to an edge of $G[S]$. Hence $h$ is an ordinary embedding of $H_2$ into $G[S]$ and yields an ordinary copy. Every vertex of that copy lies in $S$, whose vertices all have the same colour; hence the copy is monochromatic. Since $S$ was arbitrary among the $n$-vertex sets in a colour class, the conclusion holds for every such set. [step 1.1, step 2.1, F3, F4] ∎
