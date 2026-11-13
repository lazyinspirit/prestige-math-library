---
title: Hypergraph girth and graph blocks
description: Connect Berge girth and incidence forests with block decomposition
  and vertex deletion, supplying induced graph realisations, forbidden-block
  control and the induction remainder.
status: draft
dependency_level: 1
---

**Purpose:** Connect Berge girth and incidence forests with block decomposition and vertex deletion, supplying induced graph realisations, forbidden-block control and the induction remainder.

## Published prerequisite

[math:def-union-of-a-set-and-binary-union](https://alphabetamath.cc/item/def-union-of-a-set-and-binary-union)

## Published prerequisite

[math:def-cartesian-product](https://alphabetamath.cc/item/def-cartesian-product)

## Published prerequisite

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

## Published prerequisite

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

## Published prerequisite

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

## Published prerequisite

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

## Published prerequisite

[math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

## Published prerequisite

[math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)

## Published prerequisite

[math:def-uniform-hypergraph-and-complete-partite-hypergraph](https://alphabetamath.cc/item/def-uniform-hypergraph-and-complete-partite-hypergraph)

## Published prerequisite

[math:def-cycles-trees-and-forests-in-a-simple-graph](https://alphabetamath.cc/item/def-cycles-trees-and-forests-in-a-simple-graph)

## Published prerequisite

[math:def-graph-deletion-contraction-minor-and-subdivision](https://alphabetamath.cc/item/def-graph-deletion-contraction-minor-and-subdivision)

## Published prerequisite

[math:def-bridge-in-a-graph](https://alphabetamath.cc/item/def-bridge-in-a-graph)

## Published prerequisite

[math:thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path](https://alphabetamath.cc/item/thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path)

## Unrestricted finite colourings and used palettes

[Open item](item-def-unrestricted-finite-colouring-map) · level 0


### Definition

Let $X$ be a finite set, meaning a set in bijection with a natural number, and let $k$ be a nonzero natural number. Write $[k]=\{1,\ldots,k\}=\{i\in\sigma(k):i\ne0\}$, where $\sigma(k)=k\cup\{k\}$ is the successor of $k$. A **$k$-colouring** of $X$ is any function $c:X\to[k]$: it assigns exactly one member of $[k]$ to each element of $X$.

The **used palette** is $c[X]=\{i\in[k]:\exists x\in X\;c(x)=i\}$. For $i\in[k]$, its **colour class**, or fibre, is $c^{-1}(\{i\})=\{x\in X:c(x)=i\}$. A subset $Y\subseteq X$ is **monochromatic** if $c(x)=c(y)$ for every $x,y\in Y$; in particular, the empty subset is monochromatic. Colours need not all be used. When $X$ is a graph's vertex set, this definition imposes no restriction on the colours of adjacent vertices.

### Justification

The natural-number supplier gives $\sigma(k)$ as a set. Separation applied within it gives $[k]$; applied within $[k]$ and $X$, respectively, it also gives the displayed used palette and each colour class. Extensionality makes each of these sets unique by its stated members. The function definition supplies the unique value $c(x)$ for every $x\in X$, so the equality conditions are unambiguous. The monochromatic condition is a definite predicate, including when $Y$ is empty.

### Definition references

[math:def-function](https://alphabetamath.cc/item/def-function)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

[math:def-natural-numbers](https://alphabetamath.cc/item/def-natural-numbers)

[math:def-axiom-schema-of-separation](https://alphabetamath.cc/item/def-axiom-schema-of-separation)

[math:def-axiom-of-extensionality](https://alphabetamath.cc/item/def-axiom-of-extensionality)

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)


## Ordinary embeddings as injections preserving edges

[Open item](item-def-ordinary-edge-preserving-embedding) · level 0


### Definition

Let $J$ and $G$ be finite simple graphs: each has a finite vertex set and a set of edges, each edge being a two-element subset of its vertex set. An **ordinary embedding** of $J$ in $G$ is a function $f:V(J)\to V(G)$ that is injective, meaning $f(x)=f(y)$ implies $x=y$, and preserves edges: if $\{x,y\}\in E(J)$, then $\{f(x),f(y)\}\in E(G)$.

An ordinary **copy** of $J$ in $G$ is a subgraph of $G$ isomorphic to $J$: its vertex and edge sets are subsets of those of $G$, and an isomorphism is a bijection of vertex sets preserving and reflecting edges. An ordinary embedding gives a copy on its image vertices using exactly its image edges; extra edges of $G$ between those vertices need not belong to the copy. Conversely, an isomorphism from $J$ to a subgraph of $G$ is an ordinary embedding into $G$.

An **induced embedding** additionally reflects edges: for distinct $x,y\in V(J)$, $\{f(x),f(y)\}\in E(G)$ implies $\{x,y\}\in E(J)$.

### Justification

The edge condition and injectivity ensure that every image edge is a two-element edge of $G$ on image vertices, so these vertices and edges form a subgraph. Regarded as a map from $V(J)$ onto its image, $f$ is bijective. It preserves edges by construction, and it reflects edges of this subgraph because each such edge is the image of an edge of $J$ and injectivity identifies its two preimages. Hence it is an isomorphism onto that subgraph. Conversely, the vertex bijection of an isomorphism onto a subgraph is injective into $V(G)$ and preserves edges in $G$, since every edge of the subgraph is an edge of $G$. Thus the definition agrees with the copy formulation. The additional reverse implication is precisely the edge-reflection condition in the definition of an induced embedding.


## Berge cycles, incidence graphs and girth

[Open item](item-def-berge-cycles-and-incidence-graph) · level 0


### Definition

A finite hypergraph is a pair $\mathcal H=(V,\mathcal E)$ where $V$ is a finite set and $\mathcal E$ is a set of subsets of $V$; its members are hyperedges. Its incidence graph is the finite simple graph whose vertex set is $(V\times\{0\})\cup(\mathcal E\times\{1\})$ and whose edges are exactly the pairs $\{(v,0),(e,1)\}$ for which $v\in e$. Its two displayed vertex sets are the parts of the graph: every graph edge joins one part to the other.

A Berge cycle of length $s\geq2$ consists of distinct hyperedges $e_0,\ldots,e_{s-1}$ and distinct vertices $x_0,\ldots,x_{s-1}$ such that $x_i\in e_i\cap e_{i+1}$ for every $i$, with indices modulo $s$. The Berge girth is the least length of a Berge cycle, or $\infty$ if no Berge cycle exists; $\infty$ is greater than every integer. The hypergraph is linear if any two distinct hyperedges have at most one common vertex.

### Definition references

[math:def-uniform-hypergraph-and-complete-partite-hypergraph](https://alphabetamath.cc/item/def-uniform-hypergraph-and-complete-partite-hypergraph)

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-cartesian-product](https://alphabetamath.cc/item/def-cartesian-product)

### Justification

The tags $0$ and $1$ distinguish the two kinds of node even when a vertex is itself a hyperedge. The two parts and the incidence-edge set are finite; each incidence edge has two distinct endpoints and is an unordered pair, so this construction is a finite simple graph. An $r$-uniform hypergraph in the cited definition is a special case of the finite hypergraphs defined here. The possible cycle lengths lie between $2$ and both $|V|$ and $|\mathcal E|$, so a nonempty set of possible lengths has a least element; the separate $\infty$ convention covers the empty case. Linearity is a definite condition on pairs of hyperedges.


## Graph realisations with possibly different hyperedge pieces

[Open item](item-def-hyperedge-indexed-graph-realisation) · level 0


### Definition

A finite hypergraph here is a pair $(V,\mathcal E)$ where $V$ is a finite set and $\mathcal E$ is a set of subsets of $V$; its members are called hyperedges. For each $e\in\mathcal E$, let $J_e=(e,E_e)$ be a finite simple graph with vertex set exactly $e$. The hyperedge-indexed graph realisation of these specified pieces is the finite simple graph $R=(V,E_R)$, where $E_R=\bigcup_{e\in\mathcal E}E_e$. Each $J_e$ is called the piece indexed by $e$.

If a piece is specified by a template graph $T_e=(W_e,F_e)$ and a bijection $f_e:W_e\to e$, its transported edge set is $E_e=\{\{f_e(x),f_e(y)\}:\{x,y\}\in F_e\}$. The specified bijection is part of this construction. The induced graph $R[e]$ has vertex set $e$ and consists of all edges of $R$ with both endpoints in $e$; the definition does not assert that $R[e]=J_e$.

### Definition references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

[math:def-union-of-a-set-and-binary-union](https://alphabetamath.cc/item/def-union-of-a-set-and-binary-union)

[math:def-indexed-family](https://alphabetamath.cc/item/def-indexed-family)

[math:def-indexed-union-and-intersection](https://alphabetamath.cc/item/def-indexed-union-and-intersection)

### Justification

Each edge in $E_e$ is a two-element subset of $e$, hence of $V$. The union therefore contains only two-element subsets of $V$, and so defines a finite simple graph on $V$; if $\mathcal E$ is empty, the union is empty. For a transported piece, injectivity of $f_e$ preserves the distinctness of the endpoints and its codomain places them in $e$. The formula uniquely specifies its edge set, and the union uniquely specifies $E_R$. Edges contributed by other pieces may have both endpoints in $e$, so equality with the induced graph is a separate assertion.


## Cutvertices, 2-connected pieces and nontrivial blocks

[Open item](item-def-cutvertex-and-nontrivial-block-system) · level 0


### Definition

All graphs here are finite and simple. A cutvertex of a graph is a vertex whose deletion increases the number of connected components. A graph is 2-connected if it has at least three vertices, is connected, and remains connected after deletion of any one vertex. A maximal 2-connected subgraph is a 2-connected subgraph not properly contained, as a subgraph, in another 2-connected subgraph of the same graph.

The nontrivial blocks of a graph are its maximal 2-connected subgraphs and the two-vertex, one-edge subgraphs consisting of its bridges and their endpoints. The order of a graph is its number of vertices. For a nonempty graph $J$ with an edge, $b(J)$ is the largest order of a nontrivial block of $J$; if $J$ has no edges, set $b(J)=1$. Isolated vertices are not nontrivial blocks.

### Definition references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[math:def-graph-deletion-contraction-minor-and-subdivision](https://alphabetamath.cc/item/def-graph-deletion-contraction-minor-and-subdivision)

[math:def-bridge-in-a-graph](https://alphabetamath.cc/item/def-bridge-in-a-graph)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

### Facts & Assumptions

[F1] A finite simple graph has a finite vertex set $V$ and an edge set $E$ consisting of two-element subsets of $V$; a subgraph is specified by a vertex subset and an edge subset with both endpoints of each retained edge retained. [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph) [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[F2] Components partition the vertices, and two vertices are in the same component precisely when a path joins them. A path has distinct vertices, with consecutive vertices joined by edges. [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component) [math:cor-connected-components-partition-the-vertex-set](https://alphabetamath.cc/item/cor-connected-components-partition-the-vertex-set) [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)

[F3] Deleting a vertex removes it and its incident edges; deleting an edge removes only that edge. A bridge is an edge whose deletion increases the component count. [math:def-graph-deletion-contraction-minor-and-subdivision](https://alphabetamath.cc/item/def-graph-deletion-contraction-minor-and-subdivision) [math:def-bridge-in-a-graph](https://alphabetamath.cc/item/def-bridge-in-a-graph)

[F4] The order of a finite graph is the finite cardinality of its vertex set. A finite set of cardinality $n$ admits a listing without repetition indexed by $0,\ldots,n-1$, and a bijection transports finiteness and cardinality. [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

[F5] Write $\mathcal P(A)$ for the set of subsets of $A$ and $A\times B$ for the set of ordered pairs with coordinates in $A$ and $B$. The power set of a finite set is finite. A subset of a finite set is finite and has no larger cardinality, with equality precisely when it is the whole set. The Cartesian product of two finite sets is finite. [math:cor-cardinality-of-the-power-set](https://alphabetamath.cc/item/cor-cardinality-of-the-power-set) [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set) [math:thm-product-rule](https://alphabetamath.cc/item/thm-product-rule)

[F6] A property holding at $0$ and inherited by successors holds at every natural number. The natural-number order is reflexive, antisymmetric, transitive and total. [math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle) [math:thm-nat-linear-order](https://alphabetamath.cc/item/thm-nat-linear-order)

### Justification

**Given:** A nonempty finite simple graph $J=(V,E)$.

**Goal:** The stated constructions are unambiguous and $b(J)$ is defined in both cases.

1.1 The component partition, deletions, connectivity and subgraph containment determine the cutvertex, 2-connected and maximality predicates. A bridge has two distinct endpoints, so its endpoint subgraph is uniquely specified. Component vertex sets form a subfamily of $\mathcal P(V)$, which is finite, so their number is a finite cardinality. [F1, F2, F3, F4, F5]

1.2 Since $E\subseteq\mathcal P(V)$, the edge set is finite. Hence $\mathcal P(V)$ and $\mathcal P(E)$ are finite, and so is their Cartesian product. The family of subgraphs of $J$, identified with their vertex-set and edge-set pairs, is a subset of this product and is therefore finite. Every subfamily, including the nontrivial blocks and the 2-connected subgraphs containing any fixed subgraph, is finite. Their vertex and edge sets are finite subsets of $V$ and $E$, so their orders and edge counts are defined natural numbers. [F1, F4, F5]

1.3 A nonempty finite family with a natural-number score has a member of largest score. To prove this, use a finite listing from F4 and induction from F6 on its length: the assertion that the list is empty or has a largest-scoring entry holds for length zero. On adjoining one entry to an empty list, that entry is largest. On adjoining an entry of score $x$ to a list whose largest score is $m$, retain the old entry if $x\le m$ and otherwise retain the new entry; totality and transitivity ensure that the retained score dominates all entries. Thus induction proves the assertion for every finite list, and a nonempty family's listing yields the desired member. [F4, F6]

2.1 Suppose $J$ has an edge $e=uv$. If $e$ is a bridge, its endpoint subgraph is a nontrivial block. Otherwise $u$ and $v$ lie in the same component of $J-e$: if they did not, every path in $J$ between vertices in different components of $J-e$ would have to use $e$, and adding that edge could merge its two endpoint components but no others, increasing the component count upon deletion. Choose a path from $u$ to $v$ in $J-e$. Its length is at least two, since $J$ is simple and $e$ has been removed, so together with $e$ it forms a simple cycle of at least three vertices. That cycle is connected and, after any one vertex is removed, its remaining vertices are joined along the remaining path; it is therefore a 2-connected subgraph. [F1, F2, F3, step 1.1]

3.1 In the nonbridge case, the family of 2-connected subgraphs containing the cycle from step 2.1 is nonempty and finite. By step 1.3 choose among them a subgraph with largest vertex count, and among the subgraphs attaining that vertex count choose $K$ with largest edge count. These subfamilies are finite by F5. If $K$ were a proper subgraph of a 2-connected subgraph $L$ of $J$, then $L$ would still contain the cycle. Vertex containment and F5 force either a larger vertex count for $L$, contradicting the first choice, or equal vertex sets; in the latter case proper containment forces a proper edge-set inclusion and a larger edge count by F5, contradicting the second choice. Thus $K$ is maximal under subgraph containment and is a nontrivial block. [F1, F4, F5, step 1.2, step 1.3, step 2.1]

4.1 Consequently the nontrivial block family is nonempty whenever $J$ has an edge. It is finite by step 1.2, so step 1.3 applied to vertex order gives a largest block order. Any two largest orders coincide by antisymmetry from F6, defining $b(J)$ uniquely. When $J$ has no edges, the separately specified value $1$ is unambiguous. [F4, F6, step 1.2, step 1.3, step 2.1, step 3.1] ∎


## Weak hypergraph colourings with singleton boundary

[Open item](item-def-weak-hypergraph-colouring-palette) · level 1


### Definition

A finite hypergraph here is a pair $\mathcal H=(V,E)$ in which $V$ is a finite set and $E$ is a set of subsets of $V$; members of $V$ are vertices and members of $E$ are hyperedges. For a positive integer $k$, a **weak $k$-colouring** is a function $c:V\to[k]=\{1,\ldots,k\}$ such that no hyperedge is monochromatic: for every $e\in E$ there are $x,y\in e$ with $c(x)\ne c(y)$. Colours need not all be used.

If a weak $k$-colouring exists for some positive integer $k$, the **weak chromatic number** $\chi_w(\mathcal H)$ is the least such $k$. Otherwise no finite weak chromatic number is assigned. In particular, this convention assigns $1$ to the hypergraph with empty vertex set and no edges.

For an $r$-uniform hypergraph, every hyperedge has exactly $r$ vertices. If $r\geq2$, its weak chromatic number is defined. If it has a singleton hyperedge, it has no weak $k$-colouring for any positive integer $k$. An empty hyperedge likewise prevents every weak colouring.

### Justification

The given finite-colouring definition supplies the palette, functions and monochromatic subsets, including the convention that the empty set is monochromatic. Thus the displayed condition is exactly the absence of monochromatic hyperedges, and a singleton or empty hyperedge cannot satisfy it.

The admissible positive integers form a subset of the natural numbers by separation. If this subset is nonempty, the well-ordering principle gives a least element; that element is unique. For an $r$-uniform hypergraph with $r\geq2$ and nonempty $V$, let $n=|V|$. The finite-cardinality supplier gives $n\ne0$ and a bijection $b:V\to n$, where $n=\{0,\ldots,n-1\}$. Define $s_n(m)=\sigma(m)$ for $m\in n$.

For natural numbers $u,v$, the membership-order supplier gives $u\in v$ if and only if $u<v$, and $u\in\sigma(v)$ if and only if $u\leq v$; discreteness gives $u<v$ if and only if $\sigma(u)\leq v$. If $m\in n$, then $m<n$, hence $\sigma(m)\leq n$ and $\sigma(m)\in\sigma(n)$. Also $\sigma(m)\ne0$ by the Peano-system supplier. Thus $s_n(m)\in[n]=\{i\in\sigma(n):i\ne0\}$. Conversely, if $i\in[n]$, then $i$ is a nonzero natural number and $i\leq n$. The nonzero-successor supplier gives $i=\sigma(m)$ for a natural number $m$. Discreteness now gives $m<n$, so $m\in n$ and $s_n(m)=i$. This proves surjectivity onto $[n]$. Successor injectivity from the Peano-system supplier proves that $s_n$ is injective, so $s_n:n\to[n]$ is a bijection.

Define $c(v)=s_n(b(v))$ for $v\in V$. If $c(v)=c(w)$, injectivity of $s_n$ gives $b(v)=b(w)$, and injectivity of $b$ gives $v=w$. For any $i\in[n]$, surjectivity of $s_n$ gives $m\in n$ with $s_n(m)=i$, and surjectivity of $b$ gives $v\in V$ with $b(v)=m$, so $c(v)=i$. Thus $c:V\to[n]$ is a bijection. It assigns different colours to different vertices, so each hyperedge contains two differently coloured vertices. If $V$ is empty, there are no $r$-element hyperedges and the empty function is a weak $1$-colouring. Hence the admissible set is nonempty in both cases. For the explicitly edgeless empty-vertex hypergraph, $1$ is the least positive integer, so its weak chromatic number is $1$.

### Definition references

[math:def-uniform-hypergraph-and-complete-partite-hypergraph](https://alphabetamath.cc/item/def-uniform-hypergraph-and-complete-partite-hypergraph)

[def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

[math:def-natural-numbers](https://alphabetamath.cc/item/def-natural-numbers)

[math:def-axiom-schema-of-separation](https://alphabetamath.cc/item/def-axiom-schema-of-separation)

[math:thm-well-ordering-principle](https://alphabetamath.cc/item/thm-well-ordering-principle)

[math:thm-omega-is-peano-system](https://alphabetamath.cc/item/thm-omega-is-peano-system)

[math:lem-nat-nonzero-is-successor](https://alphabetamath.cc/item/lem-nat-nonzero-is-successor)

[math:lem-nat-order-is-membership](https://alphabetamath.cc/item/lem-nat-order-is-membership)

[math:lem-nat-discrete](https://alphabetamath.cc/item/lem-nat-discrete)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)


## Linear realisations preserve induced pieces

[Open item](item-lem-linear-realisation-preserves-each-induced-piece) · level 1


### Statement

Let $\mathcal H=(V,\mathcal E)$ be a finite linear hypergraph, let $J_e=(e,E_e)$ be a finite simple graph for each $e\in\mathcal E$, and let $R=(V,\bigcup_{e\in\mathcal E}E_e)$ be their hyperedge-indexed graph realisation. Then $R[e]=J_e$ for every $e\in\mathcal E$.

In particular, let $T=(W,F)$ be a finite simple graph and, for each $e\in\mathcal E$, choose a bijection $f_e:W\to e$ and put $E_e=\{\{f_e(x),f_e(y)\}:\{x,y\}\in F\}$. Then each $f_e$ is an induced embedding of $T$ in $R$, and $R[e]$ is an induced copy of $T$.

### Statement references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[def-hyperedge-indexed-graph-realisation](item-def-hyperedge-indexed-graph-realisation)

[def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

### Facts & Assumptions

[F1] In the [def-hyperedge-indexed-graph-realisation](item-def-hyperedge-indexed-graph-realisation), each $E_e$ consists of two-element subsets of $e$, and the edge set of $R$ is the union of the $E_e$.

[F2] By [def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph), linearity means that distinct hyperedges have at most one common vertex.

[F3] By [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph), $R[e]$ has vertex set $e$ and exactly the edges of $R$ whose endpoints lie in $e$.

[F4] A bijection is injective and surjective by [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection). An induced embedding preserves and reflects adjacency on distinct vertices, and its image induces a copy, by [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy).

[F5] By [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph), every edge of a finite simple graph is a two-element subset of its vertex set, so its endpoints are distinct.

### Proof

**Given:** The hypergraph, pieces and realisation in the statement.

**Goal:** Prove $R[e]=J_e$ for every hyperedge and establish the stated template consequence.

1.1 Fix $e\in\mathcal E$. Every edge of $J_e$ belongs to $E(R)$ and has both endpoints in $e$; hence $E_e\subseteq E(R[e])$. [given, F1, F3, F5]

2.1 Conversely, let $\{u,v\}\in E(R[e])$. The endpoints are distinct and lie in $e$, and the union defining $E(R)$ supplies some $h\in\mathcal E$ with $\{u,v\}\in E_h$. Both vertices also lie in $h$. If $h\ne e$, then $e\cap h$ contains the two distinct vertices $u,v$, contrary to linearity. Thus $h=e$ and $\{u,v\}\in E_e$. The two graphs have the same vertex set $e$, so $R[e]=J_e$. [given, F1, F2, F3, F5, step 1.1]

3.1 In the template construction, fix $e$ and distinct $x,y\in W$. The transport formula gives the forward implication from $\{x,y\}\in F$ to $\{f_e(x),f_e(y)\}\in E_e$. Conversely, if the image pair belongs to $E_e$, the formula supplies an edge $\{a,b\}\in F$ with the same image pair; injectivity of $f_e$ gives $\{a,b\}=\{x,y\}$, so $\{x,y\}\in F$. Since $f_e$ is injective, its image pairs have distinct endpoints; by the equality just proved, this equivalence is also adjacency equivalence in $R$. Surjectivity gives $f_e(W)=e$, so $f_e$ is an induced embedding and $R[e]$ is its induced copy of $T$. [given, F1, F4, F5, step 2.1] ∎


## Berge girth at least three forces linearity

[Open item](item-lem-berge-girth-three-implies-linear) · level 1


### Statement

If a finite hypergraph has Berge girth at least three, then it is linear: any two distinct hyperedges have at most one common vertex.

### Statement references

[def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph)

### Facts & Assumptions

[F1] By [def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph), a Berge cycle of length two consists of two distinct hyperedges $e_0,e_1$ and two distinct vertices $x_0,x_1$, each belonging to both hyperedges. Berge girth is the least cycle length, or $\infty$ if there is no cycle, and linearity means that any two distinct hyperedges have at most one common vertex.

### Proof

**Given:** A finite hypergraph of Berge girth at least three.

**Goal:** The hypergraph is linear.

1.1 If two distinct hyperedges had two distinct common vertices, those edges and vertices would form a Berge cycle of length two: each vertex lies in the intersection of the two edges, as required for both cyclic indices. [F1]

2.1 Such a cycle would make the Berge girth at most two, contrary to the given lower bound. Hence no two distinct hyperedges have two distinct common vertices, so the hypergraph is linear. [given, F1, step 1.1] ∎



## Small edge supports in a high-girth hypergraph

[Open item](item-lem-small-hyperedge-support-has-incidence-forest) · level 1


### Statement

Let $q$ be a positive integer and let $\mathcal H=(V,\mathcal E)$ be a finite hypergraph of Berge girth at least $q$. For any $\mathcal F\subseteq\mathcal E$ with $|\mathcal F|<q$, the subgraph of the incidence graph induced by the hyperedge nodes belonging to $\mathcal F$ and all vertices incident with those hyperedges is a forest.

More precisely, for every integer $s\geq2$, Berge cycles of length $s$ using hyperedges in $\mathcal F$ correspond to incidence-graph cycles of length $2s$ in this induced subgraph, up to the choice of starting point and direction.

### Statement references

[def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph)

[math:def-cycles-trees-and-forests-in-a-simple-graph](https://alphabetamath.cc/item/def-cycles-trees-and-forests-in-a-simple-graph)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

### Facts & Assumptions

[F1] In [def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph), the incidence graph has tagged vertex nodes $(v,0)$ and hyperedge nodes $(e,1)$, with an edge exactly when $v\in e$. A Berge cycle of length $s\geq2$ has distinct hyperedges $e_i$ and distinct vertices $x_i$ satisfying $x_i\in e_i\cap e_{i+1}$ cyclically. Berge girth is the least such length, or infinity if there is no such cycle.

[F2] By [math:def-cycles-trees-and-forests-in-a-simple-graph](https://alphabetamath.cc/item/def-cycles-trees-and-forests-in-a-simple-graph), a cycle is a closed walk of length at least three with no repeated vertex except its endpoint, and a forest is a graph without cycles. An induced subgraph retains exactly the edges of the ambient graph between its selected vertices, as in [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph).

[F3] The cardinality of a finite set counts its distinct members, as in [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality).

### Proof

**Given:** A finite hypergraph $\mathcal H$ of Berge girth at least $q$ and a family $\mathcal F$ of fewer than $q$ hyperedges. Let $I_{\mathcal F}$ be the induced subgraph specified in the statement.

**Goal:** Establish the cycle correspondence and prove that $I_{\mathcal F}$ is a forest.

1.1 Let $e_0,\ldots,e_{s-1}$ and $x_0,\ldots,x_{s-1}$ form a Berge cycle with all $e_i\in\mathcal F$. The alternating sequence $(e_0,1),(x_0,0),(e_1,1),(x_1,0),\ldots,(e_{s-1},1),(x_{s-1},0),(e_0,1)$ is a closed walk in $I_{\mathcal F}$: each consecutive pair is incident, and every displayed node belongs to the selected vertex set. The hyperedge nodes are distinct, the vertex nodes are distinct, and the tags separate the two kinds. Thus it is a graph cycle of length $2s$. This includes $s=2$, where the four tagged nodes are distinct. [F1, F2, construct]

2.1 Conversely, every edge of $I_{\mathcal F}$ joins a vertex node to a hyperedge node. A cycle in it therefore alternates between the two kinds. Its length is even and at least four, say $2s$ with $s\geq2$. Starting at a hyperedge node and choosing a direction gives the sequence in step 1.1; distinctness of the graph-cycle nodes makes the $e_i$ distinct and the $x_i$ distinct, while its edges give $x_i\in e_i\cap e_{i+1}$ cyclically. All $e_i$ lie in $\mathcal F$, so these data form a Berge cycle of length $s$. The two constructions recover the same cyclic sequence, apart from starting point and direction. [F1, F2, step 1.1]

3.1 If $I_{\mathcal F}$ had a cycle, step 2.1 would give a Berge cycle of length $s$ with $s$ distinct hyperedges in $\mathcal F$. Hence $s\leq|\mathcal F|<q$, contradicting the assumed Berge girth. Thus $I_{\mathcal F}$ has no cycle and is a forest; isolated selected vertices cannot create a cycle. [given, F1, F2, F3, step 2.1] ∎



## Two-connected subgraphs stay in one incidence-forest piece

[Open item](item-lem-two-connected-subgraphs-in-incidence-forest-realisations) · level 1


### Statement

If the incidence graph of a finite hypergraph is a forest, every 2-connected subgraph of a graph realised on its hyperedges is contained, as an ordinary subgraph, in one hyperedge piece. Every single edge of the realisation lies in some hyperedge piece.

### Statement references

[def-hyperedge-indexed-graph-realisation](item-def-hyperedge-indexed-graph-realisation)

[def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph)

[def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

[math:def-cycles-trees-and-forests-in-a-simple-graph](https://alphabetamath.cc/item/def-cycles-trees-and-forests-in-a-simple-graph)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

### Facts & Assumptions

[F1] For a finite hypergraph $(V,\mathcal E)$, the incidence graph has a vertex node for each member of $V$, a hyperedge node for each member of $\mathcal E$, and an edge between them exactly when the vertex belongs to the hyperedge. In a realisation $R$, each piece $J_e$ has vertex set $e$, and the edge set of $R$ is the union of the edge sets of the pieces. [def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph) [def-hyperedge-indexed-graph-realisation](item-def-hyperedge-indexed-graph-realisation)

[F2] A forest has no cycle. A path has distinct vertices; a cycle is a closed walk of length at least three with no repeated vertex except its endpoints. Every walk contains a path with the same endpoints. Connectedness means that every pair of vertices is joined by a path. [math:def-cycles-trees-and-forests-in-a-simple-graph](https://alphabetamath.cc/item/def-cycles-trees-and-forests-in-a-simple-graph) [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle) [math:lem-every-graph-walk-contains-a-path-between-its-endpoints](https://alphabetamath.cc/item/lem-every-graph-walk-contains-a-path-between-its-endpoints) [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

[F3] A 2-connected graph has at least three vertices, is connected, and remains connected after deletion of any vertex. An ordinary subgraph has both its vertex set and edge set contained in those of the ambient graph. [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system) [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

### Proof

**Given:** A finite hypergraph whose incidence graph is a forest, a realisation $R$ with pieces $J_e$, and a 2-connected subgraph $H$ of $R$.

**Goal:** Show that $H$ is a subgraph of one piece and that every edge of $R$ belongs to a piece.

1.1 Every edge of $R$ belongs to a piece by the union defining $R$. Distinct hyperedges have at most one common vertex: two common vertices and the two hyperedge nodes would form a four-edge cycle in the incidence forest. In a forest there is at most one path between any two nodes: otherwise, after following two distinct paths from one endpoint to their first divergence and then to their first subsequent meeting, the two resulting internally disjoint path segments form a cycle. [F1, F2]

2.1 The connected graph $H$ has an edge $xy$; choose a hyperedge $e$ whose piece contains it. Suppose that $H$ has a vertex $z$ outside $e$. A path in $H$ from $x$ to $z$ expands to an incidence walk by replacing each graph edge $ab$ with $a,f,b$, where a piece indexed by $f$ contains $ab$. Thus the node of $z$ is connected to the node of $e$. Let $P$ be their unique incidence path. Its first node after the node of $e$ is a vertex node $v$ with $v\in e$. At least one of $x,y$, say $w$, differs from $v$. The path from $w$ to the node of $e$ is the single incidence edge $w,e$, so uniqueness forces the path from $w$ to $z$ to pass through $v$. Consequently no incidence walk from $w$ to $z$ avoids $v$: such a walk would contain a path avoiding $v$, contrary to uniqueness. [F1, F2, F3, step 1.1]

3.1 Since $H-v$ is connected and contains $w$ and $z$, it has a $w$–$z$ path. Expanding its edges into incidence walks as above gives a walk avoiding the vertex node $v$, a contradiction. Hence every vertex of $H$ lies in $e$. Each edge $ab$ of $H$ belongs to some piece $J_f$; since $a$ and $b$ are distinct members of both $e$ and $f$, step 1.1 gives $f=e$. Thus both the vertex and edge sets of $H$ are contained in those of $J_e$. The final assertion was established in step 1.1. [F1, F2, F3, step 1.1, step 2.1] ∎



## Block containment and monotonicity under subgraphs

[Open item](item-lem-block-containment-under-subgraph-embeddings) · level 1


### Statement

Every 2-connected subgraph of a finite simple graph is contained in a maximal 2-connected subgraph. If nonempty finite simple graphs $J$ and $L$ admit an ordinary embedding of $J$ in $L$, then $b(J)\leq b(L)$. In particular, a 2-connected graph with more than $b(L)$ vertices cannot occur as a subgraph of $L$.

Here 2-connected means having at least three vertices, being connected, and remaining connected after deletion of any one vertex. Maximality is with respect to subgraph containment. The nontrivial blocks of a graph are its maximal 2-connected subgraphs and its bridge-edge subgraphs; a bridge is an edge whose deletion increases the number of connected components. For a nonempty graph with an edge, $b$ is the largest order, meaning number of vertices, of a nontrivial block; for an edgeless nonempty graph it is $1$. An ordinary embedding is an injective vertex map that preserves edges, with extra edges allowed in the target.

### Statement references

[def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

[def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[math:def-bridge-in-a-graph](https://alphabetamath.cc/item/def-bridge-in-a-graph)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

### Facts & Assumptions

[F1] A finite simple graph has finitely many subgraphs; its edges have two distinct endpoints. A subgraph has subsets of the ambient graph's vertices and edges. [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph) [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

[F2] An ordinary embedding is an isomorphism onto the subgraph formed by its image vertices and image edges. [def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)

[F3] Vertices lie in the same component exactly when a path joins them. A simple cycle has at least three distinct vertices and deleting any vertex leaves a connected path on the remaining vertices. Deleting an edge removes that edge, while deleting a vertex also removes its incident edges. [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component) [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle) [math:def-graph-deletion-contraction-minor-and-subdivision](https://alphabetamath.cc/item/def-graph-deletion-contraction-minor-and-subdivision)

[F4] A bridge is an edge whose deletion increases the component count. The nontrivial blocks and the parameter $b$ have the meanings stated above; their finite maximum exists when there is an edge. [math:def-bridge-in-a-graph](https://alphabetamath.cc/item/def-bridge-in-a-graph) [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system) [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

### Proof

**Given:** A finite simple graph $L$, and, for the monotonicity claim, a nonempty finite simple graph $J$ with an ordinary embedding $f$ into nonempty $L$.

**Goal:** Establish maximal containment and the stated inequalities.

1.1 Let $C$ be a 2-connected subgraph of $L$. The finite, nonempty family of 2-connected subgraphs of $L$ containing $C$ has a member $M$ maximal under subgraph containment: otherwise a strictly increasing chain could be extended indefinitely within that finite family. Any 2-connected subgraph properly containing $M$ would also contain $C$, so $M$ is maximal among all 2-connected subgraphs of $L$. [F1, F4]

2.1 Every edge $e=uv$ of $L$ lies in a nontrivial block. If $e$ is a bridge, its endpoint subgraph is such a block. Otherwise $u$ and $v$ remain in the same component of $L-e$: if they were in different components, adding $e$ back would merge exactly their two components and deletion of $e$ would increase the component count. A path from $u$ to $v$ in $L-e$, together with $e$, forms a simple cycle. This cycle is 2-connected, so step 1.1 puts it, and hence $e$, in a maximal 2-connected subgraph of $L$. [F1, F3, F4, step 1.1]

3.1 If $J$ is edgeless, then $b(J)=1\leq b(L)$: the right side is $1$ when $L$ is edgeless and at least $2$ otherwise, by step 2.1. Suppose instead that $J$ has an edge, and choose a nontrivial block $B$ of order $b(J)$. If $B$ is 2-connected, its image under $f$ is a 2-connected subgraph of $L$: the isomorphism preserves paths and vertex deletion, so connectivity and connectivity after each vertex deletion are preserved. By step 1.1 its image lies in a nontrivial block of $L$. If $B$ is a bridge-edge subgraph of $J$, its image edge lies in a nontrivial block of $L$ by step 2.1, whether or not that image edge is a bridge in $L$. In either case injectivity gives $|V(B)|\leq b(L)$, proving $b(J)\leq b(L)$. [F2, F3, F4, step 1.1, step 2.1]

4.1 If a 2-connected graph occurs as a subgraph of $L$, step 1.1 contains it in a maximal 2-connected subgraph of $L$. Its order is therefore at most $b(L)$, proving the final assertion. [F4, step 1.1] ∎



## Nonempty remainder after deleting an independent set

[Open item](item-lem-independent-deletion-leaves-a-vertex) · level 1


### Statement

If a finite simple graph $J$ has an edge and $I\subseteq V(J)$ is independent, then $V(J)\setminus I$ is nonempty. Its induced graph is finite. If this remainder has an edge, its maximum nontrivial block order is at least two.

An independent set contains no edge with both endpoints in it. The induced graph on $V(J)\setminus I$, also written $J-I$, has that vertex set and precisely the edges of $J$ with both endpoints in it. A nontrivial block is either a maximal 2-connected subgraph or a bridge together with its two endpoints; 2-connected graphs have at least three vertices. The order of a graph is its number of vertices.

### Facts & Assumptions

[F1] Every edge of a simple graph has two distinct endpoints. An independent set contains no edge with both endpoints in it. [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph) [math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)

[F2] A subset of a finite set is finite. Vertex deletion produces the induced graph on the remaining vertices, whose edges are those of the original graph with both endpoints remaining. [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set) [math:def-graph-deletion-contraction-minor-and-subdivision](https://alphabetamath.cc/item/def-graph-deletion-contraction-minor-and-subdivision) [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[F3] A nonempty finite graph with an edge has at least one nontrivial block, and its maximum block order exists. Each nontrivial block is either 2-connected with at least three vertices or a bridge-edge subgraph with two vertices. Graph order is the finite cardinality of the vertex set. [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system) [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

### Proof

**Given:** A finite simple graph $J$ with an edge and an independent set $I\subseteq V(J)$.

**Goal:** Prove that $J-I$ is nonempty and finite, and that its maximum nontrivial block order is at least two if it has an edge.

1.1 Choose an edge $uv$ of $J$. Its endpoints are distinct and cannot both belong to $I$, so at least one belongs to $V(J)\setminus I$. This set is a subset of the finite set $V(J)$ and is therefore finite. Consequently $J-I$, the induced graph on it, is a nonempty finite simple graph. [F1, F2, given]

2.1 If $J-I$ has an edge, its nontrivial block family is nonempty and has a maximum order. Every member has at least two vertices, whether it is 2-connected or a bridge-edge subgraph. Therefore the maximum order is at least two. This proves all the assertions. [F3, step 1.1] ∎



## Cycles are 2-connected

[Open item](item-lem-author-3d61151c342f-cycle-two-connectivity) · level 1


### Statement

The subgraph consisting of a simple cycle in a finite simple graph is 2-connected.

### Statement references

[def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

[math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

### Facts & Assumptions

[F1] A simple cycle has at least three vertices, all distinct except for the repeated endpoint; its consecutive vertices are adjacent. [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)

[F2] A graph is 2-connected when it has at least three vertices, is connected, and remains connected after deleting any vertex. [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

[F3] A graph is connected when its vertex set is nonempty and every two vertices are joined by a path. [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

### Proof

**Given:** The graphs and hypotheses in the Statement.

**Goal:** The asserted conclusion.

1.1 Write the cycle in its cyclic vertex order. Following that order joins any two cycle vertices, so the cycle subgraph is connected and has at least three vertices. [F1, F3]

2.1 After any vertex is deleted, the remaining vertices in cyclic order starting just after that vertex form a path containing all remaining vertices. Thus the remaining graph is connected, proving 2-connectivity. [F1, F2, F3, step 1.1] ∎


## Union closure for overlapping 2-connected subgraphs

[Open item](item-lem-author-3d61151c342f-overlapping-two-connected-union) · level 1


### Statement

If two 2-connected subgraphs $A$ and $B$ of a finite simple graph have at least two common vertices, their union is 2-connected.

Here the graph union is defined by $A\cup B:=(V(A)\cup V(B),E(A)\cup E(B))$, using binary set union for both coordinates.

### Facts & Assumptions

[F1] A graph is 2-connected if it has at least three vertices, is connected, and remains connected after deletion of any one vertex. [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

[F2] A finite simple graph has a finite vertex set and edges that are two-element subsets of that set. A subgraph has a subset of the ambient vertex set and a subset of the ambient edges, with both endpoints of every edge in its vertex set. Every subset of a finite set is finite. [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph) [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph) [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)

[F3] Binary set union is defined for any two sets; an element belongs to $S\cup T$ exactly when it belongs to $S$ or to $T$. [math:def-union-of-a-set-and-binary-union](https://alphabetamath.cc/item/def-union-of-a-set-and-binary-union) [math:lem-unions-and-intersections-of-small-families](https://alphabetamath.cc/item/lem-unions-and-intersections-of-small-families)

[F4] A graph is connected when it is nonempty and every two vertices are joined by a path. A walk is a finite vertex list whose consecutive vertices are adjacent; a path has no repeated vertex, and a one-vertex list is a path of length zero. Every walk contains a path between its endpoints. [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component) [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle) [math:lem-every-graph-walk-contains-a-path-between-its-endpoints](https://alphabetamath.cc/item/lem-every-graph-walk-contains-a-path-between-its-endpoints)

[F5] Deleting a vertex removes that vertex and precisely the edges incident with it, leaving the induced subgraph on the remaining vertices. [math:def-graph-deletion-contraction-minor-and-subdivision](https://alphabetamath.cc/item/def-graph-deletion-contraction-minor-and-subdivision)

### Proof

**Given:** The graphs and overlap hypothesis in the Statement.

**Goal:** The graph union defined there is 2-connected.

1.1 Write $G$ for the finite simple ambient graph and $U=A\cup B$ for the graph specified in the Statement. Every vertex of $U$ lies in $G$, so its vertex set is finite. Each edge of $U$ is an edge of $A$ or $B$, hence is an edge of $G$ with two distinct endpoints in $V(U)$. Thus $U$ is a finite simple subgraph of $G$ containing both $A$ and $B$. In particular, it has at least three vertices. [given, F1, F2, F3]

2.1 Choose a common vertex $z$ of $A$ and $B$. For arbitrary $u,v\in V(U)$, choose one of $A,B$ containing $u$ and one containing $v$. Both chosen subgraphs also contain $z$ and are connected, so they supply a path from $u$ to $z$ and a path from $z$ to $v$. Concatenate their vertex lists, listing the joint vertex $z$ only once. Consecutive vertices are adjacent in $U$, so the result is a walk, even if other vertices repeat. The walk-to-path result yields a path from $u$ to $v$ in $U$. Therefore $U$ is connected. [given, F1, F3, F4, step 1.1]

2.2 Fix any $x\in V(U)$. For $C=A$ or $C=B$, let $C_x=C-x$ if $x\in V(C)$, and let $C_x=C$ otherwise. The vertices of $A_x\cup B_x$ are exactly the vertices of $U$ other than $x$. An edge belongs to $A_x\cup B_x$ exactly when it belongs to at least one of $A,B$ and is not incident with $x$; these are exactly the edges of $U-x$. Hence $U-x=A_x\cup B_x$. [given, F3, F5, step 1.1]

3.1 Each of $A_x,B_x$ is connected: when $x$ belongs to the original subgraph this follows from 2-connectivity, and otherwise that connected subgraph is unchanged. Of the at least two common vertices of $A$ and $B$, at least one is different from $x$ and remains in both $A_x$ and $B_x$. The path-concatenation and walk-to-path argument of step 2.1, through this surviving common vertex, therefore connects every pair of vertices of $A_x\cup B_x$. By step 2.2 this says that $U-x$ is connected. Since $x$ was arbitrary and $U$ is connected with at least three vertices, $U$ is 2-connected. [given, F1, F4, step 1.1, step 2.1, step 2.2] ∎


## Finite maximal extension of a 2-connected subgraph

[Open item](item-lem-author-3d61151c342f-finite-maximal-extension) · level 1


### Statement

Every 2-connected subgraph of a finite simple graph is contained in a maximal 2-connected subgraph, hence in a nontrivial block.

### Facts & Assumptions

[F1] A finite simple graph has finite vertex and edge sets, and its subgraphs are specified by subsets of these sets. [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph) [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[F2] A maximal 2-connected subgraph is a nontrivial block; maximality is with respect to subgraph containment. [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

### Proof

**Given:** The graphs and hypotheses in the Statement.

**Goal:** The asserted conclusion.

1.1 Let $H$ be the given 2-connected subgraph. There are finitely many subgraphs of the ambient graph, so the nonempty family of 2-connected subgraphs containing $H$ is finite. Choose one maximizing the sum of its vertex and edge counts. [F1]

2.1 A proper supergraph in that family would strictly increase that sum. There is therefore no larger 2-connected subgraph containing the chosen one, and it is a nontrivial block containing $H$. [F1, F2, step 1.1] ∎



## A Berge cycle bounds the union of its hyperedges

[Open item](item-lem-author-2501feae0519-cycle-union-bound) · level 1


### Statement

Let $r\geq2$ and let $e_0,\ldots,e_{t-1}$ be the distinct edges of a Berge cycle of length $t\geq2$ in a finite $r$-uniform hypergraph. Then $|\bigcup_{i<t}e_i|\leq(r-1)t$.

### Statement references

[def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph)

[math:def-uniform-hypergraph-and-complete-partite-hypergraph](https://alphabetamath.cc/item/def-uniform-hypergraph-and-complete-partite-hypergraph)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

### Facts & Assumptions

[F1] [def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph) defines a Berge cycle using distinct vertices $x_i\in e_i\cap e_{i+1}$, cyclically. [math:def-uniform-hypergraph-and-complete-partite-hypergraph](https://alphabetamath.cc/item/def-uniform-hypergraph-and-complete-partite-hypergraph) gives $|e_i|=r$, and [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality) interprets the finite cardinalities.

[F2] [math:thm-double-counting](https://alphabetamath.cc/item/thm-double-counting) states that for finite sets $X,Y$ and a relation $R\subseteq X\times Y$, the sum of the row-fibre cardinalities and the sum of the column-fibre cardinalities both equal $|R|$. [math:def-sum-over-a-finite-index-set](https://alphabetamath.cc/item/def-sum-over-a-finite-index-set) defines these natural-valued sums independently of enumeration, with reindexing and constant-summand clauses.

[F3] Clauses 1--4 of [math:lem-nat-finite-sum-laws-and-the-canonical-embedding](https://alphabetamath.cc/item/lem-nat-finite-sum-laws-and-the-canonical-embedding) give additivity, constant sums, splitting and monotonicity for finite sums of natural numbers. Applying them to an enumeration as in [math:def-sum-over-a-finite-index-set](https://alphabetamath.cc/item/def-sum-over-a-finite-index-set) gives the corresponding laws for a finite index set; a finite list may be extended by zeros to a sequence on $\mathbb N$.

### Proof

**Given:** The hypotheses of the statement.

**Goal:** Its asserted conclusion.

1.1 Put $U=\bigcup_{i<t}e_i$ and $I=\{0,\ldots,t-1\}$. These are finite, with $|I|=t$. Define $R=\{(v,i)\in U\times I:v\in e_i\}$ and $m(v)=|\{i\in I:v\in e_i\}|$ for $v\in U$. The row fibre at $v$ has size $m(v)$ and the column fibre at $i$ is $e_i$, of size $r$. Double counting therefore gives $\sum_{v\in U}m(v)=|R|=\sum_{i\in I}r=rt$. [F1, F2]

2.1 Every $v\in U$ lies in at least one displayed edge, so $m(v)\geq1$ and $d(v)=m(v)-1$ is a natural number satisfying $m(v)=1+d(v)$. Additivity and the constant-summand law yield $rt=\sum_{v\in U}(1+d(v))=|U|+\sum_{v\in U}d(v)$. [step 1.1, F2, F3, algebra]

3.1 Each cycle vertex $x_i$ belongs to the two distinct edges $e_i,e_{i+1}$, so $d(x_i)\geq1$, also when $t=2$. Enumerate $U$ with the $t$ distinct cycle vertices first. By splitting the sum after these vertices, monotonicity and the constant-summand law give $\sum_{v\in U}d(v)\geq t$, since the remaining terms are nonnegative. Thus $|U|+t\leq rt=(r-1)t+t$, and cancellation gives $|U|\leq(r-1)t$. [F1, F2, F3, step 2.1, algebra] ∎


## Small 2-connected subgraphs localise in high-girth pieces

[Open item](item-lem-small-two-connected-subgraphs-in-high-girth-realisations) · level 2


### Statement

Let $R$ be a graph realisation over a finite hypergraph of Berge girth at least an integer $q\geq3$. If a 2-connected graph $B$ with $m$ edges and $m<q$ occurs as an ordinary subgraph of $R$, then that occurrence is contained in one hyperedge piece. Every occurrence of $K_2$ is likewise contained in a piece. Consequently, if every piece excludes $B$ as an ordinary subgraph, then so does $R$, whenever $B$ is 2-connected with fewer than $q$ edges or $B=K_2$.

Here an occurrence of a graph $B$ in a graph $X$ means an ordinary subgraph $H$ of $X$ that is isomorphic to $B$. Excluding $B$ means having no such occurrence. Containment of an occurrence in a piece means containment of both its vertex set and its edge set in that piece.

### Facts & Assumptions

[F1] A finite hypergraph is a finite vertex set $V$ with a set $\mathcal E$ of subsets called hyperedges. Its realisation has vertex set $V$ and edge set $\bigcup_{e\in\mathcal E}E(J_e)$, where the piece $J_e$ has vertex set $e$. An ordinary subgraph has vertex and edge sets contained in those of its ambient graph. [def-hyperedge-indexed-graph-realisation](item-def-hyperedge-indexed-graph-realisation) [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[F2] A 2-connected graph has at least three vertices, is connected, and remains connected after deletion of any one vertex. $K_2$ is the graph consisting of two vertices and their single edge. [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system) [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[F3] Berge girth is the least length of a Berge cycle, or infinity if no such cycle exists. For fewer than $q$ selected hyperedges of a finite hypergraph of Berge girth at least $q$, the incidence graph induced by their hyperedge nodes and their incident vertex nodes is a forest. A forest is a graph without cycles. [def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph) [lem-small-hyperedge-support-has-incidence-forest](item-lem-small-hyperedge-support-has-incidence-forest) [math:def-cycles-trees-and-forests-in-a-simple-graph](https://alphabetamath.cc/item/def-cycles-trees-and-forests-in-a-simple-graph)

[F4] In a realisation of a finite hypergraph whose incidence graph is a forest, every 2-connected subgraph is contained in one piece. Finite cardinality counts distinct members of a finite set. [lem-two-connected-subgraphs-in-incidence-forest-realisations](item-lem-two-connected-subgraphs-in-incidence-forest-realisations) [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

[F5] A graph isomorphism $f:B\to H$ is a bijection of vertex sets preserving and reflecting adjacency between distinct vertices. [math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)

[F6] A path is a finite vertex list with distinct vertices and adjacent consecutive vertices. A graph is connected when its vertex set is nonempty and every two vertices are joined by a path. [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle) [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

[F7] A finite set of cardinality $m$ admits a listing without repetition $a_0,\ldots,a_{m-1}$, and a bijection transports finiteness and cardinality. A subset of a finite set is finite and has no larger cardinality. Every nonempty subset of $\mathbb N$ has a least element. A map is injective when equal images force equal arguments, surjective when every member of its codomain is an image, and bijective when both conditions hold. [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality) [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set) [math:thm-well-ordering-principle](https://alphabetamath.cc/item/thm-well-ordering-principle) [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

### Proof

**Given:** A realisation $R$ of a finite hypergraph of Berge girth at least $q\geq3$, and an occurrence $H$ in $R$ of a 2-connected graph $B$ having $m<q$ edges.

**Goal:** Place $H$ in one piece, establish the corresponding assertion for $K_2$, and deduce the exclusion statement.

1.1 By the occurrence convention, choose an isomorphism $f:B\to H$. The map $\{u,v\}\mapsto\{f(u),f(v)\}$ is a bijection from $E(B)$ to $E(H)$: adjacency preservation makes it well-defined, injectivity of $f$ makes it injective on unordered pairs, and adjacency reflection and surjectivity of $f$ make it surjective. Thus $H$ has $m$ edges, and the vertex bijection gives it at least three vertices. Applying $f$ to a path preserves distinctness of its vertices and adjacency of consecutive vertices. Paths in the connected graph $B$ therefore show that $H$ is connected. For any vertex $h=f(v)$ of $H$, paths between any two other preimages in $B$ after deletion of $v$ map to paths between the corresponding vertices of $H$ avoiding $h$. Thus $H$ remains connected after deletion of any one vertex, so $H$ is 2-connected. [given, F2, F4, F5, F6, choose]

2.1 For each of the finitely many edges of $H$, choose one hyperedge whose piece supplies that edge; such a hyperedge exists by the union defining $R$. Denote the chosen hyperedge for an edge $a$ by $c(a)$, and let $\mathcal F=\{c(a):a\in E(H)\}$. Choose a listing without repetition $a_0,\ldots,a_{m-1}$ of $E(H)$, which exists by its cardinality $m$. [F1, F7, step 1.1, choose]

3.1 For each $e\in\mathcal F$, the set of indices $i$ with $0\leq i<m$ and $c(a_i)=e$ is a nonempty subset of $\mathbb N$. Let $i(e)$ be its least element, supplied by F7, and set $D=\{a_{i(e)}:e\in\mathcal F\}\subseteq E(H)$. The map $e\mapsto a_{i(e)}$ is surjective onto $D$ by its definition. It is injective because $a_{i(e)}=a_{i(e')}$ implies $e=c(a_{i(e)})=c(a_{i(e')})=e'$. Thus its inverse, which sends $a\in D$ to $c(a)$, is a bijection from $D$ to $\mathcal F$. The finite-subset bound makes $D$ finite with $|D|\leq|E(H)|=m$. Cardinality transport along this bijection makes $\mathcal F$ finite with $|\mathcal F|=|D|\leq m<q$. [given, F7, step 1.1, step 2.1, construct]

4.1 Form the restricted hypergraph $(V,\mathcal F)$ and realise it using the same pieces indexed by $\mathcal F$. Its realisation has vertex set $V$ and contains every edge of $H$ by the choice of $c$, so $H$ is its ordinary subgraph. [F1, step 2.1, step 3.1, construct]

5.1 By the support-forest result, the incidence graph on the selected hyperedge nodes and their incident vertex nodes is a forest. The incidence graph of $(V,\mathcal F)$ adds only isolated vertex nodes, which cannot belong to a cycle, and is therefore also a forest. The forest-realisation result now puts the 2-connected subgraph $H$ inside one selected piece. That piece is also a piece of $R$. [given, F1, F3, F4, step 1.1, step 3.1, step 4.1]

6.1 An occurrence of $K_2$ consists of one edge and its endpoints, since its isomorphism with $K_2$ is a vertex bijection preserving and reflecting adjacency. The edge belongs to some piece by the defining union, and that piece contains its endpoints; hence the occurrence is contained in that piece. If $B$ is as in the final assertion and an occurrence existed in $R$, step 5.1 or this argument would put it in a piece, contrary to the assumed exclusion. [F1, F2, F5, step 5.1] ∎


## Block-hitting deletion lowers maximum block order

[Open item](item-lem-block-hitting-vertex-deletion-lowers-block-order) · level 2


### Statement

Let $J$ be a finite connected simple graph with an edge, and let $S\subseteq V(J)$ meet the vertex set of every nontrivial block. If $J-S$ is nonempty, then $b(J-S)<b(J)$. Independence of $S$ is not required.

A graph is 2-connected if it has at least three vertices, is connected, and remains connected after deletion of any one vertex. A nontrivial block is either a maximal 2-connected subgraph or the two-vertex subgraph consisting of a bridge and its endpoints; a bridge is an edge whose deletion increases the number of connected components. For a nonempty graph with an edge, $b$ is the largest number of vertices in a nontrivial block; for an edgeless nonempty graph, $b=1$. The graph $J-S$ is obtained by deleting the vertices in $S$ and their incident edges.

### Statement references

[def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

[math:def-graph-deletion-contraction-minor-and-subdivision](https://alphabetamath.cc/item/def-graph-deletion-contraction-minor-and-subdivision)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

[math:def-bridge-in-a-graph](https://alphabetamath.cc/item/def-bridge-in-a-graph)

[math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)

### Facts & Assumptions

[F1] Every 2-connected subgraph of a finite simple graph is contained in a maximal 2-connected subgraph. [lem-block-containment-under-subgraph-embeddings](item-lem-block-containment-under-subgraph-embeddings)

[F2] The block and $b$ conventions are those in the statement; in particular the maximum exists for a finite nonempty graph with an edge. [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system) [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

[F3] Vertex deletion leaves a subgraph on the undeleted vertices. Edge deletion removes only the specified edge. Vertices in the same component are joined by a path, and a path has distinct vertices. [math:def-graph-deletion-contraction-minor-and-subdivision](https://alphabetamath.cc/item/def-graph-deletion-contraction-minor-and-subdivision) [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component) [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)

[F4] A bridge is an edge whose deletion increases the number of components. [math:def-bridge-in-a-graph](https://alphabetamath.cc/item/def-bridge-in-a-graph)

[F5] If $A$ is finite and $B$ is a proper subset of $A$, then $B$ is finite and $|B|<|A|$: the subset inequality holds and equality would force $B=A$. [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)

[F6] A vertex set is independent when no two of its distinct vertices are adjacent. [math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)

### Proof

**Given:** A finite connected simple graph $J$ with an edge, a set $S$ meeting every nontrivial block of $J$, and nonempty $H=J-S$.

**Goal:** Prove $b(H)<b(J)$.

1.1 Since $J$ has an edge, it has a nontrivial block and $b(J)\geq 2$. If $H$ is edgeless, then $b(H)=1<b(J)$, so assume that $H$ has an edge. Let $B$ be a nontrivial block of $H$ with $|V(B)|=b(H)$. [F2]

2.1 If $B$ is 2-connected, it is a 2-connected subgraph of $J$, hence lies in a maximal 2-connected subgraph $C$ of $J$. The set $S$ meets $V(C)$, while $V(B)$ is disjoint from $S$. Thus $V(B)$ is a proper subset of the finite set $V(C)$, and $b(H)=|V(B)|<|V(C)|\leq b(J)$. [F1, F2, F3, F5, step 1.1]

2.2 Otherwise $B$ consists of a bridge edge $e=uv$ of $H$ and its endpoints. The edge $e$ is not a bridge of $J$: if it were, its endpoint subgraph would be a nontrivial block of $J$ met by $S$, contrary to both endpoints surviving in $H$. Consequently $u$ and $v$ are connected in $J-e$; otherwise adding $e$ to $J-e$ would merge their distinct components, so deleting $e$ would increase the component count. A path from $u$ to $v$ in $J-e$, together with $e$, forms a simple cycle with at least three vertices. This cycle is 2-connected, since deleting any vertex leaves a connected path. By [F1] it lies in a maximal 2-connected subgraph $C$ of $J$. Therefore $b(H)=2<|V(C)|\leq b(J)$. [F1, F2, F3, F4, step 1.1]

3.1 The edgeless case and the two possible types of $B$ cover all cases, so $b(J-S)=b(H)<b(J)$. No step used independence of $S$. [F6, step 1.1, step 2.1, step 2.2] ∎


## Nonbridge edges lie on 2-connected cycles

[Open item](item-lem-author-3d61151c342f-nonbridge-cycle) · level 2


### Statement

If an edge $uv$ of a finite connected simple graph $J$ is not a bridge, it lies on a simple cycle, and that cycle subgraph is 2-connected.

### Facts & Assumptions

[F1] Deleting an edge removes just that edge; a bridge is an edge whose deletion increases the number of connected components. [math:def-graph-deletion-contraction-minor-and-subdivision](https://alphabetamath.cc/item/def-graph-deletion-contraction-minor-and-subdivision) [math:def-bridge-in-a-graph](https://alphabetamath.cc/item/def-bridge-in-a-graph)

[F2] In a connected graph any two vertices can be joined by a path, whose vertices are distinct; a cycle closes such a path with one additional edge and has length at least three. [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component) [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)

[F3] The subgraph consisting of a simple cycle is 2-connected, with 2-connectivity understood in the nontrivial block convention. [lem-author-3d61151c342f-cycle-two-connectivity](item-lem-author-3d61151c342f-cycle-two-connectivity) [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

[F4] Every edge of a finite simple graph has two distinct endpoints, and each unordered pair of vertices occurs as at most one edge. [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[F5] A subgraph is specified by a subset of the vertices and a subset of the edges whose endpoints lie in that vertex subset. [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

### Proof

**Given:** The graphs and hypotheses in the Statement.

**Goal:** The asserted conclusion.

1.1 Since $J$ is connected and $uv$ is not a bridge, $J-uv$ still has one connected component. Choose a $u$ to $v$ path in $J-uv$. Its length is at least two, because the graph is simple and the edge $uv$ was deleted. [F1, F2, F4]

2.1 Closing this path with $uv$ gives a simple cycle containing that edge. The cycle subgraph is 2-connected by the cycle lemma. [F2, F3, F5, step 1.1] ∎


## Finite edge-union sparsity excludes short Berge cycles

[Open item](item-lem-author-2501feae0519-sparsity-forces-berge-girth) · level 2


### Statement

Let $r\geq2$ and $q\geq3$ be integers. Suppose a finite $r$-uniform hypergraph has $|\bigcup\mathcal A|\geq1+(r-1)t$ whenever $\mathcal A$ is a family of $t$ distinct hyperedges with $1\leq t\leq q-1$. Then its Berge girth is at least $q$.

### Statement references

[def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph)

[math:def-uniform-hypergraph-and-complete-partite-hypergraph](https://alphabetamath.cc/item/def-uniform-hypergraph-and-complete-partite-hypergraph)

[lem-author-2501feae0519-cycle-union-bound](item-lem-author-2501feae0519-cycle-union-bound)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

### Facts & Assumptions

[F1] [def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph) defines Berge girth, [math:def-uniform-hypergraph-and-complete-partite-hypergraph](https://alphabetamath.cc/item/def-uniform-hypergraph-and-complete-partite-hypergraph) defines uniformity, and [lem-author-2501feae0519-cycle-union-bound](item-lem-author-2501feae0519-cycle-union-bound) bounds the union of the edges of any Berge cycle. [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality) defines the finite cardinalities used in both union-size bounds.

### Proof

**Given:** The hypotheses of the statement.

**Goal:** Its asserted conclusion.

1.1 If a Berge cycle had length $t<q$, its integer length and the integrality of $q$ would give $2\leq t\leq q-1$. Its distinct edge family would have union of size at most $(r-1)t$ by the cycle-union bound. [F1, given]

2.1 The assumed sparsity inequality applied to that family gives union size at least $1+(r-1)t$, a contradiction. Thus no such cycle exists, which is exactly the asserted girth bound, including the acyclic case. [given, F1, step 1.1] ∎


## Small independent sets obstruct weak colourings

[Open item](item-lem-author-2501feae0519-independent-class-colouring-bound) · level 2


### Statement

Let $\mathcal H=(V,E)$ be a finite hypergraph with $|V|=n>0$, and let $k$ be a positive integer. Call $I\subseteq V$ independent if it contains no hyperedge. If every independent set has size at most a real number $a$ and $ka<n$, then $\mathcal H$ has no weak $k$-colouring. In comparisons and arithmetic with reals, natural numbers denote their canonical images in $\mathbb R$.

### Statement references

[def-weak-hypergraph-colouring-palette](item-def-weak-hypergraph-colouring-palette)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

[math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)

[math:thm-sum-rule](https://alphabetamath.cc/item/thm-sum-rule)

[math:thm-reals-ordered-field](https://alphabetamath.cc/item/thm-reals-ordered-field)

[math:lem-nat-finite-sum-laws-and-the-canonical-embedding](https://alphabetamath.cc/item/lem-nat-finite-sum-laws-and-the-canonical-embedding)

[math:lem-finite-sum-laws](https://alphabetamath.cc/item/lem-finite-sum-laws)

### Facts & Assumptions

[F1] [def-weak-hypergraph-colouring-palette](item-def-weak-hypergraph-colouring-palette) defines weak colourings as maps to $[k]=\{1,\ldots,k\}$ with no monochromatic hyperedge; unused colours are allowed.

[F2] [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality) defines finite cardinality. By [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set), every subset of finite $V$ is finite. Clause 2 of [math:thm-sum-rule](https://alphabetamath.cc/item/thm-sum-rule) gives the cardinality of a finite pairwise disjoint union as the sum of its members' cardinalities.

[F3] [math:thm-reals-ordered-field](https://alphabetamath.cc/item/thm-reals-ordered-field) supplies the ordered real field. Clauses 6 and 7 of [math:lem-nat-finite-sum-laws-and-the-canonical-embedding](https://alphabetamath.cc/item/lem-nat-finite-sum-laws-and-the-canonical-embedding) identify a finite natural sum with the real sum of its canonical images and preserve natural order under this embedding.

[F4] Clauses 2 and 4 of [math:lem-finite-sum-laws](https://alphabetamath.cc/item/lem-finite-sum-laws) give $\sum_{j<k}a=ka$ for a constant real list and monotonicity of real finite sums under termwise inequalities.

### Proof

**Given:** The hypotheses of the statement.

**Goal:** No weak $k$-colouring exists.

1.1 If $c:V\to[k]$ were a weak $k$-colouring, put $C_j=\{v\in V:c(v)=j+1\}$ for $0\leq j<k$. These sets are pairwise disjoint, cover $V$, and are finite subsets of $V$. Each $C_j$ is independent, since a hyperedge contained in it would be monochromatic. Hence $|C_j|\leq a$ for every $j<k$, including unused colours. [given, F1, F2]

2.1 The finite partition formula gives $n=\sum^{\mathbb N}_{j<k}|C_j|$. Passing to canonical real images and applying the real finite-sum laws gives $n=\sum^{\mathbb R}_{j<k}|C_j|\leq\sum^{\mathbb R}_{j<k}a=ka<n$. This contradicts the real order, so no weak $k$-colouring exists. [given, F2, F3, F4, step 1.1, algebra] ∎


## The finite graph boundary gives two-uniform witnesses

[Open item](item-lem-author-2501feae0519-finite-graph-boundary-transfer) · level 2


### Statement

For integers $q\geq3$ and $k\geq1$ there is a finite $2$-uniform hypergraph of Berge girth at least $q$ with no weak $k$-colouring.

### Statement references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph)

[def-weak-hypergraph-colouring-palette](item-def-weak-hypergraph-colouring-palette)

[math:def-uniform-hypergraph-and-complete-partite-hypergraph](https://alphabetamath.cc/item/def-uniform-hypergraph-and-complete-partite-hypergraph)

### Facts & Assumptions

[F1] [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph) defines finite simple graphs, [math:def-uniform-hypergraph-and-complete-partite-hypergraph](https://alphabetamath.cc/item/def-uniform-hypergraph-and-complete-partite-hypergraph) defines $2$-uniform hypergraphs, and [def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph) and [def-weak-hypergraph-colouring-palette](item-def-weak-hypergraph-colouring-palette) define Berge cycles and weak colourings.

[F2] Erdős, Graph theory and probability, p.35, supplies a finite simple graph with no circuit shorter than $q$ and chromatic number greater than $k$; see External input.

[F3] [math:def-proper-vertex-colouring-and-chromatic-number](https://alphabetamath.cc/item/def-proper-vertex-colouring-and-chromatic-number) defines proper graph colourings and $\chi(G)$ using the natural-number palette $k=\{0,\ldots,k-1\}$. Relabelling colours by a bijection preserves properness.

[F4] [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle) defines an ordinary graph cycle as a closed walk of length at least three with distinct vertices apart from its coinciding endpoints. These are the closed circuits in the imported result: Erdős, p.36, displays the cyclic edge sequence and counts ordered choices of distinct circuit vertices.

### Proof

**Given:** The hypotheses of the statement.

**Goal:** Its asserted conclusion.

1.1 Apply F2 to obtain a finite graph $G$ and regard its edge set as a set of two-element hyperedges on $V(G)$. On such an edge the weak-colouring condition is exactly that its two endpoints have different colours. The bijection $j\mapsto j-1$ from $[k]=\{1,\ldots,k\}$ to $\{0,\ldots,k-1\}$ converts a weak $k$-colouring into a proper graph $k$-colouring in F3; its inverse $j\mapsto j+1$ gives the converse. Thus such a weak colouring would imply $\chi(G)\leq k$, contrary to F2. [F1, F2, F3, construct]

2.1 A Berge cycle of length two would require two distinct two-element edges containing the same two distinct vertices, impossible in a simple graph. In a Berge cycle of length $t\geq3$, edge $e_i$ contains the two distinct vertices $x_{i-1},x_i$ and therefore equals their pair, with indices modulo $t$. Hence $(x_0,x_1,\ldots,x_{t-1},x_0)$ is an ordinary graph cycle of length $t$ in F4: its consecutive edges are $e_1,\ldots,e_{t-1},e_0$, and the Berge vertices are distinct. F2 excludes every such cycle with $t<q$, proving the Berge girth assertion for the hypergraph in step 1.1. [F1, F2, F4, step 1.1] ∎

### External input

The following established result is used as an external premise, rather than claimed as a locally reconstructed proof: For each prescribed integer $q\geq3$ there exist finite graphs with arbitrarily large chromatic number and no closed circuit with fewer than $q$ edges. More precisely, the p.35 paragraph asserts an $n$-vertex graph of chromatic number greater than $n^c$ for a positive constant $c$ (with $q$ fixed) and with no closed circuit of fewer than $q$ edges.

### Source notes

Read the full five-page original PDF text and inspected rendered printed pp.35–36: p.35 gives the finite n-vertex high-chromatic assertion and its strict circuit threshold; p.36 writes a circuit as cyclic edges on distinct ordered vertices. The definition of h(k,l), equation (4) and its proof were read in the PDF text. Only the finite high-girth/high-chromatic existence consequence and this circuit convention are used; the probabilistic estimates were not independently audited.


## Every edge belongs to exactly one nontrivial block

[Open item](item-lem-author-3d61151c342f-unique-edge-block) · level 3


### Statement

In a finite connected simple graph with an edge, every edge belongs to exactly one nontrivial block.

### Facts & Assumptions

[F1] Nontrivial blocks are maximal 2-connected subgraphs and bridge endpoint subgraphs. In a 2-connected graph deletion of any vertex leaves a connected graph with at least two vertices. [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

[F2] Paths join vertices in a connected graph, deletion removes the specified vertices or edges, and a bridge is an edge whose deletion disconnects its component. [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle) [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component) [math:def-graph-deletion-contraction-minor-and-subdivision](https://alphabetamath.cc/item/def-graph-deletion-contraction-minor-and-subdivision) [math:def-bridge-in-a-graph](https://alphabetamath.cc/item/def-bridge-in-a-graph)

[F3] Two 2-connected subgraphs sharing two vertices have 2-connected union, and every 2-connected subgraph has a maximal 2-connected extension in a finite graph. [lem-author-3d61151c342f-overlapping-two-connected-union](item-lem-author-3d61151c342f-overlapping-two-connected-union) [lem-author-3d61151c342f-finite-maximal-extension](item-lem-author-3d61151c342f-finite-maximal-extension)

[F4] Every nonbridge edge of a finite connected simple graph lies on a 2-connected cycle. [lem-author-3d61151c342f-nonbridge-cycle](item-lem-author-3d61151c342f-nonbridge-cycle)

[F5] A finite simple graph has a finite vertex set and an edge set of two-element subsets of it, so each edge has two distinct endpoints. A subgraph has a subset of the ambient vertices and a subset of the ambient edges, with both endpoints of every retained edge retained. [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph) [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

### Proof

**Given:** The graphs and hypotheses in the Statement.

**Goal:** The asserted conclusion.

1.1 No edge $uv$ of a 2-connected subgraph $H$ can be a bridge of the ambient graph. Indeed $u$ has a neighbor $w$ in $H$ distinct from $v$: otherwise deleting $v$ isolates $u$ from a third vertex. A path from $w$ to $v$ in $H-u$, preceded by $uw$, is a path from $u$ to $v$ avoiding $uv$. Any path using $uv$ can replace it by this alternative walk; erasing portions between repeated vertices gives a path. Deleting $uv$ therefore cannot disconnect any pair formerly joined. [F1, F2, F5]

2.1 If an edge is a bridge, its endpoint subgraph is a nontrivial block and step 1.1 excludes every 2-connected block containing it; no other bridge endpoint subgraph contains that edge. If it is not a bridge, the cycle lemma and maximal-extension lemma place it in a maximal 2-connected block. Two such blocks containing it share both endpoints; their 2-connected union forces them to coincide by maximality. Thus each edge belongs to exactly one block. [F1, F3, F4, F5, step 1.1] ∎


## Finite sparse uniform hypergraphs obstruct a prescribed palette

[Open item](item-lem-author-2501feae0519-finite-uniform-sparse-obstruction) · level 3


### Statement

For integers $r\geq3$, $s\geq1$ and $k\geq1$ there is a finite $r$-uniform hypergraph with no weak $k$-colouring such that every family of $t$ distinct edges, $1\leq t\leq s$, has union of size at least $1+(r-1)t$.

### Statement references

[math:def-uniform-hypergraph-and-complete-partite-hypergraph](https://alphabetamath.cc/item/def-uniform-hypergraph-and-complete-partite-hypergraph)

[def-weak-hypergraph-colouring-palette](item-def-weak-hypergraph-colouring-palette)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

[lem-author-2501feae0519-independent-class-colouring-bound](item-lem-author-2501feae0519-independent-class-colouring-bound)

### Facts & Assumptions

[F1] [math:def-uniform-hypergraph-and-complete-partite-hypergraph](https://alphabetamath.cc/item/def-uniform-hypergraph-and-complete-partite-hypergraph) and [def-weak-hypergraph-colouring-palette](item-def-weak-hypergraph-colouring-palette) fix uniformity and weak colourings; [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality) fixes finite size. [lem-author-2501feae0519-independent-class-colouring-bound](item-lem-author-2501feae0519-independent-class-colouring-bound) converts an independent-set bound to absence of a weak colouring.

[F2] Erdős–Hajnal Theorem 13.3, with Definition 13.2, supplies the finite sparse set-systems and the independent-set bound stated in External input.

[F3] [math:thm-reals-ordered-field](https://alphabetamath.cc/item/thm-reals-ordered-field) supplies ordered-real arithmetic. Clause 7 of [math:lem-nat-finite-sum-laws-and-the-canonical-embedding](https://alphabetamath.cc/item/lem-nat-finite-sum-laws-and-the-canonical-embedding) preserves and reflects natural-number order in the canonical real embedding. In real expressions, natural numbers denote these images.

[F4] [math:def-real-power](https://alphabetamath.cc/item/def-real-power) defines $x^u=\exp(u\log x)$ for $x>0$ and real $u$. [math:thm-real-power-laws](https://alphabetamath.cc/item/thm-real-power-laws) supplies $x^{u+v}=x^ux^v$. [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm) supplies $\log(\exp u)=u$ and $\exp(\log x)=x$ on their stated domains.

[F5] [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws) makes $\log$ strictly increasing on $(0,\infty)$, and [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing) makes $\exp$ strictly increasing on $\mathbb R$. [math:cor-exponential-reciprocal-and-positivity](https://alphabetamath.cc/item/cor-exponential-reciprocal-and-positivity) gives $\exp(u)>0$ for all real $u$.

[F6] [math:lem-cauchy-reals-archimedean](https://alphabetamath.cc/item/lem-cauchy-reals-archimedean) gives a canonical natural number larger than any prescribed real number.

### Proof

**Given:** The hypotheses of the statement.

**Goal:** Its asserted conclusion.

1.1 Fix $r,s,k$ as given, and take $\varepsilon>0$ and the integer $n_0$ from F2. By cofinality in F6, applied successively to the three real bounds, choose a natural number $n$ with $n>n_0$, $n>1$ and $n>\exp((\log k)/\varepsilon)$. Here $\log k$ is defined since $k\geq1$, and division by $\varepsilon$ is defined since $\varepsilon>0$. The order convention in F3 identifies this $n$ with a positive integer exceeding the imported threshold. [given, F2, F3, F4, F5, F6, choose]

2.1 Applying the increasing logarithm to the positive quantities in the last inequality gives $\log n>\log(\exp((\log k)/\varepsilon))=(\log k)/\varepsilon$. Multiplying by $\varepsilon>0$ and applying the increasing exponential therefore gives $n^\varepsilon=\exp(\varepsilon\log n)>\exp(\log k)=k$. [F3, F4, F5, step 1.1, algebra]

3.1 Apply F2 at this integer $n$. The resulting finite $r$-uniform hypergraph has the stated edge-union inequalities, and every independent set has size at most $a=n^{1-\varepsilon}$. This is a positive real by F4 and F5. The power definition and inverse identity give $n^1=n$, so the power law gives $a n^\varepsilon=n^{1-\varepsilon}n^\varepsilon=n$. Since $a>0$ and $n^\varepsilon>k$, ordered-field multiplication yields $ka<a n^\varepsilon=n$. [F2, F3, F4, F5, step 1.1, step 2.1, algebra]

4.1 The independent-set bound, $n>0$ and $ka<n$ satisfy the hypotheses of the colouring-bound lemma in F1, so this hypergraph has no weak $k$-colouring. Its edge-union inequalities from step 3.1 are unchanged, proving the statement. [given, F1, step 1.1, step 3.1] ∎

### External input

The following established result is used as an external premise, rather than claimed as a locally reconstructed proof: For each integer $r\geq3$ and positive integer $s$ there are $\varepsilon>0$ and $n_0$ such that for every integer $n>n_0$ there is an $r$-uniform set-system on $n$ vertices which is $s$-circuitless and has no independent subset of more than $n^{1-\varepsilon}$ vertices. Here $s$-circuitless means that every $t$-edge subfamily, $1\leq t\leq s$, has union of size at least $1+(r-1)t$.

### Source notes

For this repair, read the cached full-text PDF introduction on PDF p.1 and Definition 13.2 and Theorem 13.3 on printed pp.94–95 (PDF pp.34–35); visually checked both printed pages, including the inequalities. The theorem is imported as stated, not proved locally. Only the beginning of its published proof on p.95 was read in this repair; no audit of the complete proof or reading of the whole paper is claimed. The finite $r=2$ case and Corollary 13.4 are not used here.


## Finite high-girth hypergraphs with no weak k-colouring

[Open item](item-thm-external-finite-high-girth-weak-chromatic-hypergraphs) · level 4


### Statement

For integers $r\geq2$, $q\geq3$ and $k\geq1$, there exists a finite $r$-uniform hypergraph of Berge girth at least $q$ that has no weak $k$-colouring, equivalently with weak chromatic number at least $k+1$.

### Statement references

[def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph)

[def-weak-hypergraph-colouring-palette](item-def-weak-hypergraph-colouring-palette)

[math:def-uniform-hypergraph-and-complete-partite-hypergraph](https://alphabetamath.cc/item/def-uniform-hypergraph-and-complete-partite-hypergraph)

[lem-author-2501feae0519-sparsity-forces-berge-girth](item-lem-author-2501feae0519-sparsity-forces-berge-girth)

[lem-author-2501feae0519-finite-uniform-sparse-obstruction](item-lem-author-2501feae0519-finite-uniform-sparse-obstruction)

[lem-author-2501feae0519-finite-graph-boundary-transfer](item-lem-author-2501feae0519-finite-graph-boundary-transfer)

### Facts & Assumptions

[F1] [def-berge-cycles-and-incidence-graph](item-def-berge-cycles-and-incidence-graph), [def-weak-hypergraph-colouring-palette](item-def-weak-hypergraph-colouring-palette) and [math:def-uniform-hypergraph-and-complete-partite-hypergraph](https://alphabetamath.cc/item/def-uniform-hypergraph-and-complete-partite-hypergraph) fix the girth, palette and uniformity conventions. [lem-author-2501feae0519-sparsity-forces-berge-girth](item-lem-author-2501feae0519-sparsity-forces-berge-girth) converts edge-union sparsity to Berge girth.

[F2] [lem-author-2501feae0519-finite-uniform-sparse-obstruction](item-lem-author-2501feae0519-finite-uniform-sparse-obstruction) supplies finite sparse witnesses for $r\geq3$. [lem-author-2501feae0519-finite-graph-boundary-transfer](item-lem-author-2501feae0519-finite-graph-boundary-transfer) supplies the finite $r=2$ boundary.

### Proof

**Given:** The hypotheses of the statement.

**Goal:** Its asserted conclusion.

1.1 If $r\geq3$, apply F2 with $s=q-1$. Its finite witness has no weak $k$-colouring and satisfies the sparsity hypothesis in F1, so F1 gives Berge girth at least $q$. If $r=2$, use the finite boundary witness in F2 directly. This proves existence throughout the stated range. [given, F1, F2, construct]

2.1 Because $r\geq2$, the weak chromatic number exists by F1. Absence of a weak $k$-colouring is equivalent to its least admissible positive palette size being greater than $k$: every colouring into a smaller palette also maps into $[k]$. For integers this is exactly the lower bound $k+1$. [F1, step 1.1, algebra] ∎


## Block incidence tree and containment contract

[Open item](item-thm-external-block-incidence-decomposition) · level 4


### Statement

In a finite connected graph with an edge, distinct nontrivial blocks meet in at most one vertex; any common vertex is a cutvertex. Every edge belongs to one block. The bipartite incidence graph of blocks and cutvertices is a tree. Any 2-connected subgraph is contained in a block.

### Statement references

[def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

[math:def-cycles-trees-and-forests-in-a-simple-graph](https://alphabetamath.cc/item/def-cycles-trees-and-forests-in-a-simple-graph)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[math:def-bipartite-graph](https://alphabetamath.cc/item/def-bipartite-graph)

### External input

Diestel defines a block as a maximal connected subgraph without a cutvertex, and explicitly identifies its three possibilities: a maximal 2-connected subgraph, a bridge with its endpoints, or an isolated vertex (printed p. 64). A connected graph with an edge has no isolated vertex, so his blocks are exactly the nontrivial blocks in [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system). The same paragraph states that distinct blocks overlap in at most one vertex, which is then a cutvertex of the ambient graph, and that every edge lies in a unique block.

The block graph is defined on printed p. 65 using disjoint vertex classes consisting of the blocks and cutvertices, with adjacency precisely when the cutvertex belongs to the block. Lemma 3.1.4 on printed p. 66 states that this graph is a tree for a connected graph. Here a tree means a connected acyclic simple graph, as in [math:def-cycles-trees-and-forests-in-a-simple-graph](https://alphabetamath.cc/item/def-cycles-trees-and-forests-in-a-simple-graph). Block nodes are formal labels distinct from vertex nodes, so the incidence graph is bipartite even if graph vertices themselves are sets.

The containment clause is independently established by [lem-author-3d61151c342f-finite-maximal-extension](item-lem-author-3d61151c342f-finite-maximal-extension), using finiteness and subgraph containment as in [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph). The edge-partition clause is independently established by [lem-author-3d61151c342f-unique-edge-block](item-lem-author-3d61151c342f-unique-edge-block), through its cycle, union and nonbridge prerequisites. These local proofs supplement the source; the overlap/cutvertex and incidence-tree assertions remain explicitly imported. No local proof or independent audit of those residual assertions is claimed.


## Rooted block exposure and attachment separation

[Open item](item-lem-rooted-block-exposure-separation) · level 5


### Statement

Let $G$ be a finite connected simple graph with an edge. Its blocks are its maximal 2-connected subgraphs and its bridge edges with their endpoints; a cutvertex is a vertex whose deletion increases the number of connected components. Form the bipartite incidence tree whose nodes are the blocks and cutvertices, with a block adjacent to each cutvertex it contains. Choose a block as root, and process the block nodes in nondecreasing distance from it, breaking ties arbitrarily. The exposed vertices before a block is processed are the union of the vertex sets of the earlier blocks.

Each nonroot block $B$ has a unique adjacent cutvertex on the path from $B$ to the root, called its attachment vertex $a$. Every vertex of $B$ other than $a$ is unexposed before $B$ is processed and has no neighbour among the previously exposed vertices except possibly $a$.

### Statement references

[def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system)

[thm-external-block-incidence-decomposition](item-thm-external-block-incidence-decomposition)

[math:thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path](https://alphabetamath.cc/item/thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

### Facts & Assumptions

[F1] For the stated graph, distinct blocks meet in at most one vertex, every common vertex is a cutvertex, every edge belongs to a block, and the block-cutvertex incidence graph is a tree. [thm-external-block-incidence-decomposition](item-thm-external-block-incidence-decomposition)

[F2] In a tree there is a unique path between any two nodes. Rooting it at a node gives each other node a unique predecessor on its path to the root; distance is the number of edges on that path. [math:thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path](https://alphabetamath.cc/item/thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path)

[F3] Blocks and cutvertices have the meanings stated above, and a block is a subgraph: its edges have endpoints in its vertex set. [def-cutvertex-and-nontrivial-block-system](item-def-cutvertex-and-nontrivial-block-system) [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

### Proof

**Given:** The graph, rooted incidence tree, and processing order in the statement; a nonroot block $B$ with attachment vertex $a$.

**Goal:** Show that each $x$ in $V(B)$ other than $a$ is new and has no earlier exposed neighbour other than possibly $a$.

1.1 The predecessor of $B$ is a cutvertex node because the incidence tree is bipartite; it is unique by the unique-path property. If a cutvertex $x$ in $B$ differs from $a$, its node is a child of $B$: its path to the root starts through $B$. Every other block containing $x$ is then a child of $x$, so its distance from the root is two more than that of $B$. Indeed, any other direction would give a second path to the root. Thus a block other than $B$ containing $x$ is processed strictly later. If $x$ is not a cutvertex, no other block contains it. Consequently no $x$ in $V(B)$ other than $a$ is exposed earlier, including by a block on another branch. [F1, F2, F3, given]

2.1 Let $x$ be such a vertex and suppose $xy$ is an edge with $y$ in an earlier block $D$. Choose a block $C$ containing $xy$. If $C=B$, then $y$ belongs to both $B$ and $D$; since $D$ is earlier, step 1.1 forces $y=a$. If $C$ differs from $B$, then $x$ is a cutvertex and $C$ is a child block of $x$, hence lies farther from the root than $B$. As $x$ and $y$ are distinct, the cutvertex node $y$, if it occurs in the incidence tree, cannot be the predecessor $x$ of $C$. If $D=C$, then $D$ is later than $B$, a contradiction. Otherwise $y$ is a cutvertex shared by $C$ and $D$; it is a child of $C$, and $D$ is a child of $y$. Thus $D$ is still farther from the root than $C$, contradicting its being earlier than $B$. The only possible earlier exposed neighbour is therefore $a$, as required. [F1, F2, F3, step 1.1] ∎
