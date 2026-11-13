---
title: Colourings, embeddings and graph attachments
description: Develop finite colouring capacity, copy transport, graph operations
  and labelled attachments for ordinary Ramsey separation, repetition and the
  recursive induced separator.
status: published
dependency_level: 0
---

**Purpose:** Develop finite colouring capacity, copy transport, graph operations and labelled attachments for ordinary Ramsey separation, repetition and the recursive induced separator.

## Published prerequisite

[math:def-union-of-a-set-and-binary-union](https://alphabetamath.cc/item/def-union-of-a-set-and-binary-union)

## Published prerequisite

[math:def-power-set](https://alphabetamath.cc/item/def-power-set)

## Published prerequisite

[math:def-cartesian-product](https://alphabetamath.cc/item/def-cartesian-product)

## Published prerequisite

[math:def-function](https://alphabetamath.cc/item/def-function)

## Published prerequisite

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

## Published prerequisite

[math:def-natural-numbers](https://alphabetamath.cc/item/def-natural-numbers)

## Published prerequisite

[math:thm-recursion](https://alphabetamath.cc/item/thm-recursion)

## Published prerequisite

[math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle)

## Published prerequisite

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

## Published prerequisite

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

## Published prerequisite

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

## Published prerequisite

[math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)

## Published prerequisite

[math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)

## Published prerequisite

[math:thm-sum-rule](https://alphabetamath.cc/item/thm-sum-rule)

## Published prerequisite

[math:thm-the-strong-pigeonhole-principle](https://alphabetamath.cc/item/thm-the-strong-pigeonhole-principle)

## Published prerequisite

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

## Published prerequisite

[math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

## Published prerequisite

[math:cor-connected-components-partition-the-vertex-set](https://alphabetamath.cc/item/cor-connected-components-partition-the-vertex-set)

## Published prerequisite

[math:def-complete-connection-of-two-disjoint-graphs](https://alphabetamath.cc/item/def-complete-connection-of-two-disjoint-graphs)

## Published prerequisite

[math:thm-product-rule](https://alphabetamath.cc/item/thm-product-rule)

## Published prerequisite

[math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)

## Published prerequisite

[math:lem-complement-commutes-with-induced-subgraphs](https://alphabetamath.cc/item/lem-complement-commutes-with-induced-subgraphs)

## Published prerequisite

[math:def-standard-complete-bipartite-path-and-cycle-graphs](https://alphabetamath.cc/item/def-standard-complete-bipartite-path-and-cycle-graphs)

## Published prerequisite

[math:def-set-difference-and-symmetric-difference](https://alphabetamath.cc/item/def-set-difference-and-symmetric-difference)

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


## Tagged graph families with anticomplete parts

[Open item](item-def-tagged-finite-graph-family) · level 0


### Definition

Let $T$ be a finite set and let $J_t=(V(J_t),E(J_t))$ be a finite simple graph for each $t\in T$. The **disjoint graph family** of the $J_t$ is the finite simple graph $D=(V(D),E(D))$ with vertex set $V(D)=\bigcup_{t\in T}(\{t\}\times V(J_t))$ and edge set $E(D)=\{\{(t,v),(t,w)\}:t\in T,\ \{v,w\}\in E(J_t)\}$. The set $\{t\}\times V(J_t)$ is the **tagged part** for $t$. Distinct tagged parts are **anticomplete**: no edge of $D$ has one endpoint in each. The construction permits an empty index set or empty parts.

### Definition references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-cartesian-product](https://alphabetamath.cc/item/def-cartesian-product)

[math:def-indexed-family](https://alphabetamath.cc/item/def-indexed-family)

### Justification

For each $t\in T$, the singleton $\{t\}$ is finite because $\{t\}\subseteq T$ and a subset of a finite set is finite. Each tagged part is therefore finite by the finite product rule. Distinct tagged parts are disjoint because equality of ordered pairs implies equality of their first coordinates. The finite sum rule therefore makes their union $V(D)$ finite. Each specified edge is a two-element subset of $V(D)$: its endpoints are distinct because $\{v,w\}$ is an edge of the simple graph $J_t$. Thus $D$ is a finite simple graph. Its edge set is specified uniquely, has no edges between distinct parts, and within the part tagged $t$ the map $v\mapsto(t,v)$ preserves and reflects adjacency. If $T$ is empty, both vertex and edge sets are empty.

[math:thm-product-rule](https://alphabetamath.cc/item/thm-product-rule)

[math:thm-sum-rule](https://alphabetamath.cc/item/thm-sum-rule)

[math:thm-the-characterising-property-of-ordered-pairs](https://alphabetamath.cc/item/thm-the-characterising-property-of-ordered-pairs)

[math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)

[math:def-graph-adjacency-incidence-neighbourhood-and-degree](https://alphabetamath.cc/item/def-graph-adjacency-incidence-neighbourhood-and-degree)


## Independence is monotone under induced embeddings

[Open item](item-lem-independence-monotone-under-embeddings) · level 0


### Statement

Let $J$ and $G$ be finite simple graphs. If $J$ has an induced embedding into $G$, then $\alpha(J)\leq\alpha(G)$. In particular, $\alpha(G)<\alpha(J)$ excludes an induced copy of $J$ in $G$.

### Statement references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

[math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)

### Facts & Assumptions

[F1] An induced embedding is an injection on vertices that preserves adjacency and nonadjacency between distinct vertices; an induced copy arises from such an embedding. See [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy).

[F2] An independent set has no adjacent distinct vertices. For a finite simple graph, its independence number is the maximum cardinality of an independent vertex set, and this maximum is attained. See [math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers).

[F3] A bijection from a finite set to another set makes their cardinalities equal. See [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality).

[F4] An injection satisfies $f(x)=f(y)\Rightarrow x=y$; a surjection takes every value in its codomain; a bijection has both properties. The image $f(S)$ consists of the values $f(s)$ for $s\in S$. See [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection).

### Proof

**Given:** Finite simple graphs $J$ and $G$ and an induced embedding $f:V(J)\to V(G)$.

**Goal:** Show $\alpha(J)\leq\alpha(G)$ and the stated exclusion of an induced copy.

1.1 Choose an independent set $S\subseteq V(J)$ with $|S|=\alpha(J)$. If two distinct vertices of $f(S)$ were adjacent, their distinct preimages in $S$ would be adjacent by the defining equivalence for an induced embedding, contrary to independence. Thus $f(S)$ is independent in $G$. [F1, F2, F4, choose]

2.1 The restriction $f:S\to f(S)$ is injective because $f$ is injective, and it is surjective by the definition of $f(S)$. Hence it is a bijection, so $|f(S)|=|S|=\alpha(J)$. By maximality of $\alpha(G)$, $\alpha(J)\leq\alpha(G)$. Consequently, if $\alpha(G)<\alpha(J)$, no induced embedding, and hence no induced copy of $J$ in $G$, can exist. [F1, F2, F3, F4, step 1.1] ∎


## Clique and independence duality under complementation

[Open item](item-lem-clique-independence-complement-duality) · level 0


### Statement

For every finite simple graph $G$, a vertex subset is independent in $G$ if and only if it is a clique in $\overline G$. Thus $\alpha(G)=\omega(\overline G)$ and $\omega(G)=\alpha(\overline G)$.

### Statement references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-graph-adjacency-incidence-neighbourhood-and-degree](https://alphabetamath.cc/item/def-graph-adjacency-incidence-neighbourhood-and-degree)

[math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)

[math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)

### Facts & Assumptions

[F1] A finite simple graph $G=(V,E)$ has finite vertex set $V$ and edge set $E\subseteq[V]^2$, the set of unordered pairs of distinct vertices. Its complement is $\overline G=(V,[V]^2\setminus E)$, and $\overline{\overline G}=G$. [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph) [math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)

[F2] Distinct vertices $u,v$ are adjacent in $G=(V,E)$ exactly when $\{u,v\}\in E$. A vertex subset is independent when no two of its distinct vertices are adjacent, and is a clique when every two of its distinct vertices are adjacent. The independence number $\alpha$ and clique number $\omega$ are the respective maxima of the cardinalities of these subsets; both maxima exist for finite graphs, including the empty graph. [math:def-graph-adjacency-incidence-neighbourhood-and-degree](https://alphabetamath.cc/item/def-graph-adjacency-incidence-neighbourhood-and-degree) [math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)

### Proof

**Given:** A finite simple graph $G=(V,E)$.

**Goal:** Prove the stated subset equivalence and both equalities of numbers.

1.1 Let $S\subseteq V$. Each pair of distinct vertices of $S$ is a nonedge of $G$ exactly when it is an edge of $\overline G$. Therefore the condition that every such pair is a nonedge of $G$ is equivalent to the condition that every such pair is an edge of $\overline G$; this includes subsets with fewer than two vertices. Hence $S$ is independent in $G$ if and only if it is a clique in $\overline G$. [F1, F2]

2.1 The independent subsets of $G$ and the cliques of $\overline G$ are consequently the same subsets of the same vertex set, so their sets of cardinalities and their maxima coincide: $\alpha(G)=\omega(\overline G)$. Applying the same equivalence to $\overline G$ and using $\overline{\overline G}=G$ gives $\alpha(\overline G)=\omega(G)$. [F1, F2, step 1.1] ∎


## Recursion for deterministic finite graph updates

[Open item](item-lem-finite-graph-update-recursion) · level 0


### Statement

Let $X$ be the set of finite simple graphs whose vertex sets are finite ordinals, represented by their vertex and edge sets. Given $J_1\in X$ and a total function $T:X\to X$, there is a unique sequence $(J_r)_{r\geq1}$ in $X$ with first term $J_1$ and successive terms $J_{r+1}=T(J_r)$. Every term is finite. Any property of elements of $X$ that holds at $J_1$ and is preserved by $T$ holds at every stage.

### Facts & Assumptions

**Given:** $J_1\in X$ and a total function $T:X\to X$. A finite simple graph is a pair $(V,E)$ with finite vertex set $V$ and edge set $E$ consisting of two-element subsets of $V$ ([math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)). The finite ordinals are the natural numbers, with $0=\varnothing$ and successor $\sigma(n)=n\cup\{n\}$ ([math:def-natural-numbers](https://alphabetamath.cc/item/def-natural-numbers)).

[F1] Power sets and Cartesian products of sets exist, and Separation selects the elements satisfying a specified condition from a set ([math:def-power-set](https://alphabetamath.cc/item/def-power-set), [math:def-cartesian-product](https://alphabetamath.cc/item/def-cartesian-product), [math:def-axiom-schema-of-separation](https://alphabetamath.cc/item/def-axiom-schema-of-separation)).

[F2] The natural numbers form a Peano system; recursion on that system gives a unique function into a set with a prescribed initial value and total self-map ([math:thm-omega-is-peano-system](https://alphabetamath.cc/item/thm-omega-is-peano-system), [math:thm-recursion](https://alphabetamath.cc/item/thm-recursion)).

[F3] A property holding at $0$ and passing from each natural number to its successor holds for every natural number ([math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle)).

[F4] A function $f:A\to B$ has domain exactly $A$ and assigns each element of $A$ a unique value in $B$; thus it is total on $A$. Here a sequence $(J_r)_{r\geq1}$ in $X$ means a function from the positive natural numbers to $X$, with value $J_r$ at $r$ ([math:def-function](https://alphabetamath.cc/item/def-function)).

[F5] Each natural number $n$, regarded as a von Neumann ordinal, is a finite set and has cardinality $n$ ([math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality), consequence (a)).

### Proof

**Given:** The graph $J_1$ and update $T$ above.

**Goal:** Construct the unique sequence and prove the preservation assertion.

1.1 By F5 every $n\in\mathbb N$ is finite. Every finite ordinal $n$ is a subset of $\mathbb N$, and every edge of a simple graph on $n$ is a subset of $\mathbb N$. Thus each such graph $(n,E)$ belongs to $\mathbb N\times\mathcal P(\mathcal P(\mathbb N))$. By Separation, the members of this product for which $E$ consists of two-element subsets of $n$ form a set $X$; these are exactly the stated graphs, since every selected vertex set $n$ is finite. [F1, F5, given, construct]

2.1 Apply recursion to the set $X$, initial value $J_1$, and self-map $T$. It yields a unique $g:\mathbb N\to X$ with $g(0)=J_1$ and $g(\sigma(n))=T(g(n))$. Define $J_{\sigma(n)}=g(n)$ for every $n\in\mathbb N$. The relation $\{(\sigma(n),g(n)):n\in\mathbb N\}$ exists by Separation inside $\mathbb N\times X$. Every positive natural number has a unique predecessor in the Peano system, so this relation is a function on precisely the positive indices in the sense of F4; its first term is $J_1$ and $J_{r+1}=T(J_r)$. [F1, F2, F4, step 1.1, given, construct]

3.1 Conversely, shifting any sequence satisfying those initial and update equations back by one index gives a function satisfying the recursion equations for $g$; uniqueness in recursion therefore makes the sequence unique. Every term is in $X$, so every term is a finite simple graph. [F2, F4, step 2.1]

4.1 Let $P$ be a property of elements of $X$ holding at $J_1$ and preserved by $T$. The property $P(g(n))$ holds at $0$ and, by the recursion equation and preservation, passes from $n$ to $\sigma(n)$. Induction gives $P(g(n))$ for every $n$, hence $P(J_r)$ for every positive stage $r$. This proves the assertions. [F3, step 2.1, given] ∎

### Remarks

An operation described only up to isomorphism must be made into an actual total function $T$ on the stated labelled graphs before this lemma applies; the lemma does not itself choose representatives or establish a graph invariant.


## Finite colour-class capacity and prescribed partitions

[Open item](item-lem-finite-palette-capacity) · level 1


### Statement

Let $X$ be a finite set and let $k,n\geq1$ be integers. A $k$-colouring is a function from $X$ to $[k]=\{1,\ldots,k\}$, and its colour class for $i$ is the fibre over $i$.

If $|X|>k(n-1)$, every $k$-colouring of $X$ has a colour class with at least $n$ elements. If $|X|\leq kn$, there is a $k$-colouring of $X$ in which every colour class has at most $n$ elements. If $|X|=k(n-1)+1$, there is a $k$-colouring whose first class has size $n$ and whose other $k-1$ classes each have size $n-1$. Empty classes are permitted.

### Statement references

[def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

### Facts & Assumptions

**Given:** A finite set $X$ and integers $k,n\geq1$.

[F1] A $k$-colouring is a function into $[k]$, and its colour classes are its fibres; colours may be unused ([def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)).

[F2] A finite set of cardinality $m$ admits a bijection to $\{0,\ldots,m-1\}$; finite cardinality is preserved by bijection, and $|[k]|=k$ ([math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)).

[F3] For finite sets $A,B$, a function $f:A\to B$, and a natural number $t$, if $|A|>t|B|$ then some fibre has more than $t$ elements ([math:thm-the-strong-pigeonhole-principle](https://alphabetamath.cc/item/thm-the-strong-pigeonhole-principle)).

[F4] For an integer $j$ and a positive integer $n$, there are unique integers $q,r$ with $j=qn+r$ and $0\leq r<n$ ([math:cor-division-algorithm-nonzero-divisor](https://alphabetamath.cc/item/cor-division-algorithm-nonzero-divisor)).

[F5] A subset of a finite set is finite and has cardinality at most that of the ambient set ([math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)).

[F6] A map is injective if equal outputs imply equal inputs, surjective if every codomain element is attained, and bijective if both conditions hold; its image is the set of attained values ([math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)).

### Proof

**Given:** $X$ is finite and $k,n$ are positive integers. **Goal:** Prove the three capacity and partition assertions.

1.1 Let $c:X\to[k]$ be a $k$-colouring and suppose $|X|>k(n-1)$. Applying the counting form of the pigeonhole principle to $c$ with $t=n-1$ gives a fibre of size greater than $n-1$, hence at least $n$. [given, F1, F2, F3]

1.2 Put $m=|X|$ and choose a bijection $e:X\to\{0,\ldots,m-1\}$. If $m\leq kn$, divide each $e(x)$ uniquely as $qn+r$ with $0\leq r<n$. Since $0\leq e(x)<kn$, necessarily $0\leq q<k$; define $c(x)=q+1$. This is a $k$-colouring, including the empty function when $m=0$. [given, F1, F2, F4, construct]

1.3 Suppose $m=k(n-1)+1$. In the enumeration given by $e$, assign indices $0,\ldots,n-1$ colour $1$ and, for each $i=2,\ldots,k$, assign the next block of $n-1$ consecutive indices colour $i$. These disjoint blocks cover exactly $n+(k-1)(n-1)=m$ indices, and their sizes are $n,n-1,\ldots,n-1$. Pulling them back along $e$ gives the stated colour classes. For $n=1$ the later blocks are empty; for $k=1$ there are no later blocks. [given, F1, F2, construct]

2.1 For each $i\in[k]$, the map sending $x$ in the $i$th fibre to its remainder $r$ is injective: equal remainders and the common quotient $i-1$ give equal $e(x)$, hence equal $x$. By definition this map is surjective onto its image and hence is a bijection from the fibre to that image. Its image is a subset of $\{0,\ldots,n-1\}$, so the fibre has at most $n$ elements by cardinality transport and the finite-subset bound. [step 1.2, F2, F5, F6]

3.1 Steps 1.1, 2.1 and 1.3 establish the three assertions. [step 1.1, step 2.1, step 1.3] ∎


## Rigidity of mutual ordinary embeddings

[Open item](item-lem-finite-mutual-embedding-rigidity) · level 1


### Statement

If finite simple graphs $J$ and $L$ admit ordinary embeddings in both directions, then $J\cong L$. Consequently, for two non-isomorphic finite simple graphs at least one direction of ordinary embedding fails. For induced embeddings, equal vertex orders and an induced embedding already imply isomorphism.

Here an ordinary embedding is an injective vertex map preserving edges; an induced embedding also reflects edges. The order of a graph is the cardinality of its vertex set, and an isomorphism is a bijection of vertex sets that preserves and reflects edges.

### Statement references

[def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

[math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

### Facts & Assumptions

[F1] A finite simple graph has a finite vertex set $V$, and its edge set satisfies $E\subseteq[V]^2$, where $[V]^2$ is the set of two-element subsets of $V$ ([math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)). For finite $V$, $[V]^2$ is finite ([math:thm-two-element-subsets-count](https://alphabetamath.cc/item/thm-two-element-subsets-count), first assertion), so its subset $E$ is finite ([math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set), clause 1). An ordinary embedding is an injective vertex map taking edges to edges, and an induced embedding also reflects edges ([def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding), [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)).

[F2] An injection is a bijection onto its image. A bijection is both injective and surjective; its inverse is a bijection ([math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)).

[F3] Every injection from a finite set to itself is bijective. A subset of a finite set having the same cardinality as the whole set is the whole set ([math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)). A bijection transports finite cardinality ([math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)).

[F4] A graph isomorphism is a vertex bijection preserving and reflecting edges ([math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)).

### Proof

**Given:** Finite simple graphs $J,L$. For the first assertion suppose $f:V(J)\to V(L)$ and $g:V(L)\to V(J)$ are ordinary embeddings. For the last assertion suppose instead that $h:V(J)\to V(L)$ is an induced embedding and $|V(J)|=|V(L)|$.

**Goal:** Prove the stated isomorphism assertions and their non-isomorphic consequence.

1.1 The composite $f\circ g$ is an injection of the finite set $V(L)$ into itself, hence is surjective. Its image is contained in the image of $f$, so $f$ is surjective; it is injective by hypothesis and therefore bijective. [given, F1, F2, F3]

1.2 For each $G\in\{J,L\}$, finiteness of $V(G)$ gives finiteness of $[V(G)]^2$ and hence of its subset $E(G)$. Define $f_E:E(J)\to E(L)$ by $f_E(\{x,y\})=\{f(x),f(y)\}$, and define $g_E$ analogously. Edge preservation makes these maps well defined. Each is injective: equality of two image pairs and injectivity of the vertex map force equality of the two original pairs. Thus $f_E\circ g_E$ is an injection of the finite set $E(L)$ into itself and is surjective. Its image lies in the image of $f_E$, so $f_E$ is surjective. [given, F1, F3, construct]

2.1 If distinct $x,y\in V(J)$ have $\{f(x),f(y)\}\in E(L)$, surjectivity of $f_E$ supplies an edge $\{u,v\}\in E(J)$ with $\{f(u),f(v)\}=\{f(x),f(y)\}$. Injectivity of $f$ gives $\{u,v\}=\{x,y\}$, so $f$ reflects edges. It also preserves edges and is bijective; hence it is an isomorphism. Therefore non-isomorphic finite simple graphs cannot have ordinary embeddings in both directions. [step 1.1, step 1.2, F1, F4]

3.1 For the induced embedding $h$, its image is a subset of $V(L)$, and $h$ is a bijection onto that image. Cardinality transport gives $|h[V(J)]|=|V(J)|=|V(L)|$; finite-subset rigidity therefore gives $h[V(J)]=V(L)$. Thus $h$ is bijective, and its preservation and reflection of edges make it an isomorphism. This proves the remaining assertion. [given, F1, F2, F3, F4] ∎


## Transport, restriction and relabelling of finite colourings

[Open item](item-lem-finite-colouring-transport-and-restriction) · level 1


### Statement

Let $H,J,G$ be finite simple graphs, $f:J\to G$ an ordinary embedding of their vertex sets, and $c:V(G)\to[k]$ a $k$-colouring, where $k$ is a positive natural number and $[k]=\{1,\ldots,k\}$. If $h:H\to J$ is an ordinary embedding whose image vertices are monochromatic under $c\circ f$, then $f\circ h$ is an ordinary embedding with monochromatic image vertices under $c$. If both $f$ and $h$ are induced embeddings, their composite is induced.

For $S\subseteq V(G)$, the restriction $c|_S$ is a $k$-colouring of $S$; a subset of $S$ is monochromatic for this restriction exactly when it is monochromatic for $c$. If $P=c[V(G)]$ is the used palette and $r:P\to Q$ is injective, then $r\circ c:V(G)\to Q$ has exactly the same monochromatic vertex subsets as $c$.

More generally, let $d:X\to Q$ be a function on a finite set with finite used palette $P=d[X]$. If $|P|\le i$ for a positive natural number $i$, then there is an injection $r:P\to[i]$, so $r\circ d$ is an $i$-colouring with exactly the same monochromatic subsets. No palette label is required to occur; in particular, the assertion includes the empty used palette.

### Statement references

[def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)

[def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

### Facts & Assumptions

[F1] A finite colouring has a finite domain and is a function into its stated palette; a subset is monochromatic when all its pairs of elements have equal colours. Colours need not all be used ([def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)).

[F2] An ordinary embedding is an injective vertex map preserving edges; it determines an ordinary copy on its image vertices and image edges. An induced embedding also reflects edges between distinct vertices ([def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding), [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)).

[F3] An injection identifies equal inputs whenever their images are equal. A finite set $P$ of cardinality $m$ has a bijection onto the von Neumann natural number $m$ ([math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection), [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)).

[F4] For von Neumann naturals, $m\le i$ implies $m\subseteq i$; successor $\sigma(t)=t\cup\{t\}$ is injective and never zero, and $[i]=\sigma(i)\setminus\{0\}$ ([math:lem-nat-order-is-membership](https://alphabetamath.cc/item/lem-nat-order-is-membership), [math:thm-omega-is-peano-system](https://alphabetamath.cc/item/thm-omega-is-peano-system), [math:def-natural-numbers](https://alphabetamath.cc/item/def-natural-numbers), [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)).

[F5] Composites and restrictions of the relevant functions are sets; their values are given by the usual composition and restriction rules ([math:lem-inverse-relations-composites-and-restrictions-are-sets](https://alphabetamath.cc/item/lem-inverse-relations-composites-and-restrictions-are-sets)).

[F6] Every subset of a finite set is finite ([math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set), Statement, clause 1).

### Proof

**Given:** The graphs, embeddings, colourings, subsets and finite palettes in the statement.

**Goal:** Establish transport, restriction and injective relabelling of monochromatic copies, and construct the stated $i$-colouring.

1.1 The composite $f\circ h$ is injective: equality of two composite values first gives equality of their $h$-values by injectivity of $f$, then equality of their inputs by injectivity of $h$. An edge of $H$ maps to an edge of $J$ under $h$ and then to an edge of $G$ under $f$. Thus the composite is an ordinary embedding. If its two vertices are images of vertices $x,y$ of $H$, their $c$-colours are $(c\circ f)(h(x))$ and $(c\circ f)(h(y))$, which agree by the given monochromaticity. Its image edges therefore form a monochromatic ordinary copy in $G$. [F1, F2, F3, F5, given]

1.2 Since $V(G)$ is finite and $S\subseteq V(G)$, F6 gives that $S$ is finite. Restriction gives a function $S\to[k]$ with the same value as $c$ at each vertex of $S$. Thus $c|_S$ is a $k$-colouring of $S$, and all pairwise colour equalities on a subset of $S$ are unchanged. For $x,y\in V(G)$, equality $c(x)=c(y)$ implies $r(c(x))=r(c(y))$, and the converse follows from injectivity of $r$ because both values lie in $P$. Thus injective relabelling preserves and reflects monochromaticity, including for the empty subset. Applied to image vertex sets, these equivalences preserve monochromatic ordinary and induced copies whenever the relevant copy is contained in the restricted set. [F1, F2, F3, F5, F6, given]

2.1 If $f$ and $h$ are induced, an edge between the composite images of distinct vertices of $H$ reflects through $f$ to an edge between their $h$-images, and then through $h$ to an edge of $H$. The $h$-images are distinct by injectivity. Together with edge preservation from step 1.1, this makes the composite induced; its induced image is monochromatic by step 1.1. [F2, F3, step 1.1, given]

3.1 Put $m=|P|$ and choose a bijection $b:P\to m$. Since $m\le i$, each $b(p)$ belongs to $i$; its successor belongs to $\sigma(i)$ and is nonzero. Hence $r(p)=\sigma(b(p))$ lies in $[i]$. Both $b$ and successor are injective, so $r$ is injective. If $P$ is empty this is the empty injection. Consequently $r\circ d$ is a function $X\to[i]$, and step 1.2's same equality argument shows that it has exactly the monochromatic subsets of $d$. No surjectivity onto $[i]$ is used. [F1, F3, F4, F5, step 1.2, given, construct] ∎


## Connected subgraphs cannot cross anticomplete parts

[Open item](item-lem-connected-subgraphs-in-anticomplete-parts) · level 1


### Statement

Let $G$ be a finite simple graph whose vertex set is partitioned into parts such that no edge joins vertices in distinct parts. Every connected subgraph of $G$ has all its vertices in one part. In particular, the image of a connected graph under an ordinary or induced embedding into a disjoint graph family lies in one tagged part.

### Facts & Assumptions

[F1] A finite simple graph has a finite vertex set and edges that are two-element subsets of it. A subgraph has a subset of the vertices and a subset of the edges of its ambient graph. [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph) [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[F2] A connected graph is nonempty and every two of its vertices are joined by a path. A path is a finite list of distinct vertices whose consecutive pairs are edges; a one-vertex list is allowed. [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component) [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)

[F3] The disjoint graph family has pairwise disjoint tagged parts covering its vertices, and no edge joins distinct tagged parts. [def-tagged-finite-graph-family](item-def-tagged-finite-graph-family)

[F4] An ordinary embedding is an injective vertex map preserving edges; its image vertices and image edges form a subgraph. An induced embedding is an ordinary embedding that also reflects edges. [def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding) [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

[F5] A set partition of a set is a family of nonempty, pairwise disjoint subsets whose union is that set. Thus each element belongs to exactly one block; the empty family partitions the empty set. [math:def-set-partition-and-block](https://alphabetamath.cc/item/def-set-partition-and-block)

### Proof

**Given:** A graph $G$ with the stated partition and a connected subgraph $H$ of $G$.

**Goal:** Show that $V(H)$ lies in one part, and establish the embedding consequence.

1.1 Choose $u\in V(H)$ and let $P$ be the unique part containing $u$. For any $v\in V(H)$, connectivity gives a path $u=v_0,v_1,\ldots,v_m=v$ in $H$. Each consecutive pair is an edge of $G$. Starting with $v_0\in P$, each successive vertex must also belong to $P$: otherwise its edge from the preceding vertex would join distinct parts. Thus $v\in P$, including when $m=0$. Consequently $V(H)\subseteq P$. [given, F1, F2, F5]

2.1 For an ordinary embedding $f$ of a connected graph $J$ into a disjoint graph family, take the subgraph formed by its image vertices and image edges. It is connected: the image of a path in $J$ is a path in that subgraph, since $f$ is injective and preserves edges. The nonempty tagged parts are pairwise disjoint and still cover the vertex set of the disjoint graph family, so they form a set partition; deleting empty parts changes neither coverage nor the no-crossing-edge property. The image is nonempty because $J$ is connected. Applying step 1.1 to this partition puts $f(V(J))$ in one nonempty tagged part. An induced embedding is also an ordinary embedding, giving the same conclusion. [F2, F3, F4, F5, step 1.1] ∎


## Independence numbers of disjoint families and complete joins

[Open item](item-lem-independence-of-disjoint-families-and-joins) · level 1


### Statement

Let $J_1,\ldots,J_t$ be nonempty finite simple graphs, where $t\geq 1$. Let $D$ be their disjoint union, formed using tagged copies, and let $Q$ be their iterated complete join: it has the same tagged parts, retains the edges within each part, and has every possible edge between distinct parts. An independent set is a vertex set containing no adjacent pair, and $\alpha(J)$ is the maximum size of such a set in $J$. Then $\alpha(D)=\sum_{j=1}^t\alpha(J_j)$ and $\alpha(Q)=\max_{1\leq j\leq t}\alpha(J_j)$. If $t\geq 2$, this maximum is strictly less than the sum.

### Statement references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[def-tagged-finite-graph-family](item-def-tagged-finite-graph-family)

[math:def-complete-connection-of-two-disjoint-graphs](https://alphabetamath.cc/item/def-complete-connection-of-two-disjoint-graphs)

[math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)

### Facts & Assumptions

[F1] In the tagged disjoint family, the parts are pairwise disjoint, each part is a copy of its graph, and no edges join distinct parts. [def-tagged-finite-graph-family](item-def-tagged-finite-graph-family)

[F2] The complete connection of two disjoint graphs retains their internal edges and adds every edge between their vertex sets. [math:def-complete-connection-of-two-disjoint-graphs](https://alphabetamath.cc/item/def-complete-connection-of-two-disjoint-graphs)

[F3] For a finite simple graph, an independent set contains no two adjacent vertices, and its independence number is the attained maximum of the sizes of its independent sets. A nonempty graph has independence number at least one. [math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)

[F4] The cardinality of a finite union of pairwise disjoint finite sets is the sum of their cardinalities; a finite sum splits over a partition of its index set. [math:thm-sum-rule](https://alphabetamath.cc/item/thm-sum-rule)

### Proof

**Given:** The graphs and constructions in the statement.

**Goal:** Prove the two formulas and the strict inequality when $t\geq 2$.

1.1 Let $S$ be independent in $D$. Its intersection with the $j$th tagged part corresponds to an independent set of $J_j$, so it has at most $\alpha(J_j)$ vertices. The intersections partition $S$; the finite sum rule gives $|S|\leq\sum_{j=1}^t\alpha(J_j)$. Conversely, choose an independent set of size $\alpha(J_j)$ in each $J_j$. Their tagged copies have no edges between them, so their union is independent in $D$ and has size $\sum_{j=1}^t\alpha(J_j)$. Therefore $\alpha(D)$ equals that sum. [F1, F3, F4]

1.2 By the complete-connection definition, successive joins retain all internal edges and make every two distinct tagged parts completely adjacent. Thus an independent set of $Q$ meets at most one part, and its size is at most $\max_j\alpha(J_j)$; this also holds for the empty set. Choose an index attaining that finite maximum and a maximum independent set in its part. It remains independent in $Q$, so $\alpha(Q)=\max_j\alpha(J_j)$. [F1, F2, F3]

2.1 If $t\geq 2$, choose an index $r$ attaining the maximum. Every $J_j$ is nonempty, so every $\alpha(J_j)\geq1$; in particular the sum over indices other than $r$ is positive. Splitting the sum at $r$ gives $\sum_j\alpha(J_j)>\alpha(J_r)=\max_j\alpha(J_j)$. Together with the preceding steps this proves all assertions. [step 1.1, step 1.2, F3, F4] ∎


## Complementation transports induced copies on fixed vertices

[Open item](item-lem-complement-transports-induced-embeddings) · level 1


### Statement

Let $J$ and $G$ be finite simple graphs. An injection $f:V(J)\to V(G)$ is an induced embedding of $J$ into $G$ if and only if it is an induced embedding of $\overline J$ into $\overline G$. For any fixed finite vertex-colouring of $G$, the same map and vertex set transport monochromatic induced copies in either direction between these two pairs of graphs. Complementation is an involution on finite simple graphs.

### Statement references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

[math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)

[def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

### Facts & Assumptions

**Given:** Finite simple graphs $J$ and $G$, an injection $f:V(J)\to V(G)$, and a finite vertex-colouring $c$ of $G$.

**Goal:** Prove the embedding equivalence, the monochromatic-copy correspondence, and the complementation involution.

[F1] An induced embedding is an injection preserving and reflecting adjacency for every pair of distinct vertices; its image induces a copy of the domain graph ([math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)).

[F2] The complement has the same vertices, and a pair of distinct vertices is an edge of the complement exactly when it is not an edge of the original graph ([math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)).

[F3] A vertex-colouring is a function on the vertex set; a subset is monochromatic exactly when all its vertices have the same colour ([def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)).

[F4] For every vertex subset $W$ of $G$, $\overline{G[W]}=\overline G[W]$ ([math:lem-complement-commutes-with-induced-subgraphs](https://alphabetamath.cc/item/lem-complement-commutes-with-induced-subgraphs)).

[F5] A finite simple graph is determined by its vertex set and its set of edges, each of which is an unordered pair of distinct vertices ([math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)).

[F6] An injection $f:A\to B$ satisfies $f(x)=f(y)\Rightarrow x=y$ for $x,y\in A$; its image is $f[A]=\{f(x):x\in A\}$ ([math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)).

[F7] For $W\subseteq V(G)$, the induced subgraph is $G[W]=(W,E(G)\cap[W]^2)$, where $[W]^2$ is the set of unordered pairs of distinct vertices of $W$ ([math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)).

### Proof

**Proof technique:** direct.

1.1 Complementation leaves vertices fixed. For each distinct $x,y\in V(J)$, injectivity makes $f(x)$ and $f(y)$ distinct. If $f$ is induced from $J$ to $G$, then $xy\in E(\overline J)$ if and only if $xy\notin E(J)$, if and only if $f(x)f(y)\notin E(G)$, if and only if $f(x)f(y)\in E(\overline G)$. Thus $f$ is induced from $\overline J$ to $\overline G$. [given, F1, F2, F6]

2.1 For any finite simple graph, complementing twice leaves its vertex set fixed and restores membership of every pair of distinct vertices in its edge set. These are all possible edges, so the twice-complemented graph equals the original. Applying step 1.1 to $\overline J$ and $\overline G$ gives the converse embedding implication. [F2, F5, step 1.1]

3.1 Put $W=f(V(J))$. The equivalence above uses the same injection and image $W$ in both ambient graphs; moreover, $\overline{G[W]}=\overline G[W]$. The colouring $c$ has the same domain in $G$ and $\overline G$, so $W$ is monochromatic in one exactly when it is monochromatic in the other. Hence the corresponding induced copies are monochromatic together, completing all claims. [F1, F2, F3, F4, F6, F7, step 1.1, step 2.1] ∎


## Completing a restricted target with universal clique vertices

[Open item](item-lem-universal-clique-completes-a-restricted-target) · level 1


### Statement

Let $J$ be a finite simple graph with $n$ vertices, and let $W\subseteq V(J)$ have $\ell$ vertices. Let $C$ be a set of $n-\ell$ vertices disjoint from $W$. Form the complete connection of $J[W]$ and the complete graph on $C$. It contains an ordinary copy of $J$: an embedding fixes every vertex of $W$ and maps $V(J)\setminus W$ bijectively onto $C$. This includes $\ell=0$ and $\ell=n$.

Here a finite simple graph has a finite vertex set and edges that are two-element subsets of it. The induced graph $J[W]$ has vertex set $W$ and precisely the edges of $J$ with both endpoints in $W$. The complete graph on $C$ has every two-element subset of $C$ as an edge. The complete connection retains the edges of both graphs and adds every edge with one endpoint on each side. An ordinary embedding is an injective vertex map preserving edges; an ordinary copy is a subgraph isomorphic to $J$, so extra edges between image vertices are allowed.

### Facts & Assumptions

**Given:** $J$, $W$, $n$, $\ell$, and $C$ as in the statement. Write $U=V(J)\setminus W$ and $G$ for the stated complete connection.

**Goal:** Construct an ordinary embedding $J\to G$ fixing $W$ and mapping $U$ bijectively onto $C$.

[F1] A subset of a finite set is finite and has cardinality at most that of the set. The cardinality of a disjoint union of two finite sets is the sum of their cardinalities. Equal finite cardinalities give a bijection. See [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set), [math:thm-sum-rule](https://alphabetamath.cc/item/thm-sum-rule), [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality), and [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection).

[F2] For naturals $\ell\le n$, $n-\ell$ denotes the unique natural $q$ with $\ell+q=n$. Existence is the definition of $\ell\le n$. For uniqueness, if $\ell+q=\ell+q'$, commutativity gives $q+\ell=q'+\ell$, and right cancellation gives $q=q'$. See [math:def-nat-order](https://alphabetamath.cc/item/def-nat-order), [math:lem-nat-add-commutative](https://alphabetamath.cc/item/lem-nat-add-commutative), and [math:lem-nat-add-cancellative](https://alphabetamath.cc/item/lem-nat-add-cancellative).

[F3] Induced edges, complete graphs and complete connections have the edge sets described in the statement. An injective edge-preserving map yields an ordinary copy on its image vertices. See [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph), [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph), [math:def-standard-complete-bipartite-path-and-cycle-graphs](https://alphabetamath.cc/item/def-standard-complete-bipartite-path-and-cycle-graphs), [math:def-complete-connection-of-two-disjoint-graphs](https://alphabetamath.cc/item/def-complete-connection-of-two-disjoint-graphs), and [def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding).

[F4] A function $f:A\to B$ assigns each element of $A$ exactly one value in $B$. See [math:def-function](https://alphabetamath.cc/item/def-function).

### Proof

**Proof technique:** direct construction.

1.1 The sets $W$ and $U$ are disjoint finite subsets of $V(J)$ with union $V(J)$. Thus $\ell\le n$ and $n=\ell+|U|$. By the characterization of $n-\ell$, $|U|=n-\ell=|C|$. Choose a bijection $b:U\to C$. This also applies if either set is empty. [given, F1, F2]

2.1 Define $f(v)=v$ for $v\in W$ and $f(v)=b(v)$ for $v\in U$. The two domains partition $V(J)$, so each vertex receives exactly one value in $W\cup C=V(G)$; thus this defines a function $f:V(J)\to V(G)$. The two image sets $W$ and $C$ are disjoint. Since the identity on $W$ and $b$ are injective, $f$ is injective; it fixes $W$ and maps $U$ bijectively onto $C$. [step 1.1, given, F1, F3, F4]

3.1 Let $\{x,y\}$ be an edge of $J$. If both endpoints lie in $W$, it is an edge of $J[W]$ and hence of $G$. If both lie in $U$, their distinct images lie in $C$ and are adjacent in the complete graph on $C$. If one lies in each part, their images are adjacent by the complete connection. Therefore $f$ preserves every edge of $J$. [step 2.1, F3]

4.1 The map $f$ is consequently an ordinary embedding, and its image vertices and image edges form an ordinary copy of $J$ in $G$. The construction and checks remain valid when $W$ or $U$ is empty, giving the two stated boundary cases. [step 1.1, step 2.1, step 3.1, F3] ∎


## Neighbourhood attachments indexed by induced embeddings

[Open item](item-def-finite-labelled-neighbourhood-attachments) · level 1


### Definition

Let $J,A,L$ be finite simple graphs and let $I\subseteq V(J)$ be independent, meaning that no two distinct vertices of $I$ are adjacent. Put $F=J[V(J)\setminus I]$, the subgraph induced by the vertices outside $I$. Let $\Phi$ be the set of induced embeddings $\varphi:F\to A$: these are injections on vertices preserving both adjacency and nonadjacency. Put $T=\Phi\times I$.

The **labelled neighbourhood-attachment graph** has a tagged core $C=\{0\}\times V(A)$ and, for every $(\varphi,u)\in T$, a tagged part $P_{\varphi,u}=\{1\}\times\{(\varphi,u)\}\times V(L)$, with ordered products associated to the right. Its vertices are the union of the core and these parts. Inside the core retain exactly the edges of $A$, and inside each part retain exactly the edges of $L$. A vertex $(0,a)$ of the core is adjacent to a vertex $(1,((\varphi,u),x))$ of $P_{\varphi,u}$ exactly when there is $v\in V(F)$ with $a=\varphi(v)$ and $\{u,v\}\in E(J)$. There are no edges between distinct parts. These rules specify the entire edge set. Thus different embeddings with the same image still receive distinct parts.

For comparison with indexing by induced images, let $\mathcal S=\{\varphi(V(F)):\varphi\in\Phi\}$. For each $S\in\mathcal S$, choose one $\varphi_S\in\Phi$ with image $S$; it is an isomorphism from $F$ onto $A[S]$. The induced subgraph on the core and the parts $P_{\varphi_S,u}$ for $S\in\mathcal S$ and $u\in I$ is the corresponding one-embedding-per-image attachment. Other embeddings with the same image and their parts remain present in the full labelled construction.

### Definition references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)

[def-tagged-finite-graph-family](item-def-tagged-finite-graph-family)

[math:def-cartesian-product](https://alphabetamath.cc/item/def-cartesian-product)

[math:def-set-difference-and-symmetric-difference](https://alphabetamath.cc/item/def-set-difference-and-symmetric-difference)

### Justification

The vertex set of $F$ is finite as a subset of $V(J)$. Enumerating that finite domain identifies the set of all maps from $V(F)$ to $V(A)$ with a finite product of copies of $V(A)$, including the singleton empty product when $V(F)$ is empty. The product rule makes that set finite, and the induced embeddings form a subset; hence $\Phi$ and then $T=\Phi\times I$ are finite. The tagged-family construction applied to one copy of $A$ and the copies of $L$ indexed by $T$ gives a finite vertex set with disjoint core and parts.

Every specified internal edge has distinct endpoints, and every specified attachment edge joins the disjoint core and a part. Consequently the specified edge set consists of two-element subsets of the finite vertex set and determines a finite simple graph. The edge rules exhaust the possibilities, so they introduce no other core-to-part edges or edges between parts. Each $\varphi\in\Phi$ is an isomorphism onto its induced image; the finite set of images permits one such embedding to be chosen for each image. If $I$ or $\Phi$ is empty, there are no attachment parts; if $V(F)$ is empty, the unique empty embedding is included and its parts have no core neighbours.

[math:thm-product-rule](https://alphabetamath.cc/item/thm-product-rule)

[math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)

[def-tagged-finite-graph-family](item-def-tagged-finite-graph-family)


## One representative from each matching attachment reconstructs the target

[Open item](item-lem-one-representative-per-neighbourhood-attachment) · level 2


### Statement

Let $J,A,L$ be finite simple graphs, let $I\subseteq V(J)$ be independent, and put $F=J[V(J)\setminus I]$. In the labelled neighbourhood-attachment graph constructed from these data, fix an induced embedding $\varphi:F\to A$ and, for each $u\in I$, choose a vertex $x_u$ in the part $P_{\varphi,u}$. Then the subgraph induced by the core vertices $(0,\varphi(v))$ for $v\in V(F)$ together with the vertices $x_u$ for $u\in I$ is isomorphic to $J$. If these vertices all have one common colour in a vertex colouring, this is a monochromatic induced copy of $J$.

### Statement references

[def-finite-labelled-neighbourhood-attachments](item-def-finite-labelled-neighbourhood-attachments)

[def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement)

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

[math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers)

### Facts & Assumptions

[F1] In the labelled attachment construction, the core is a tagged copy of $A$, each $P_{\varphi,u}$ is disjoint from the core and the other parts, distinct parts have no edges between them, and $x\in P_{\varphi,u}$ is adjacent to $(0,a)$ exactly when $a=\varphi(v)$ for some $v\in V(F)$ adjacent to $u$ in $J$. See [def-finite-labelled-neighbourhood-attachments](item-def-finite-labelled-neighbourhood-attachments).

[F2] An induced embedding is an injection preserving and reflecting adjacency; an induced subgraph retains exactly the ambient edges between its vertices. A graph isomorphism is a vertex bijection preserving and reflecting adjacency. See [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy), [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph), and [math:def-graph-isomorphism-and-complement](https://alphabetamath.cc/item/def-graph-isomorphism-and-complement).

[F3] An independent set has no edge joining two distinct members. A monochromatic vertex set has one common colour on its vertices. See [math:def-clique-and-independence-numbers](https://alphabetamath.cc/item/def-clique-and-independence-numbers) and [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map).

[F4] A function $f:X\to Y$ assigns exactly one value in $Y$ to each element of $X$. It is injective when $f(x)=f(y)$ implies $x=y$, surjective when every element of $Y$ is a value of $f$, and bijective when both conditions hold. See [math:def-function](https://alphabetamath.cc/item/def-function) and [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection).

### Proof

**Given:** The graphs, independent set, embedding and representatives in the statement.

**Goal:** Construct the stated induced isomorphism and establish the colour conclusion.

1.1 Define $f:V(J)\to V(H)$, where $H$ is the displayed induced subgraph, by $f(v)=(0,\varphi(v))$ for $v\in V(F)=V(J)\setminus I$ and $f(u)=x_u$ for $u\in I$. The core vertices are distinct because $\varphi$ is injective; the representatives are distinct because their indexed parts are disjoint, and none lies in the core. Thus $f$ is injective, and it is surjective onto $V(H)$ by the definition of $H$. This also covers an empty $I$ or empty $V(F)$. [given, F1, F2, F4]

2.1 For distinct vertices of $F$, their images are adjacent exactly when their images under $\varphi$ are adjacent in $A$, equivalently when the original vertices are adjacent in $J$, since $F$ is induced. For $v\in V(F)$ and $u\in I$, the attachment rule says $f(v)$ and $f(u)$ are adjacent exactly when some $w\in V(F)$ satisfies $\varphi(w)=\varphi(v)$ and $uw\in E(J)$; injectivity forces $w=v$. For distinct $u,u'\in I$, their images lie in distinct parts and are nonadjacent, as are $u,u'$ because $I$ is independent. These cases exhaust distinct pairs, so $f$ preserves and reflects adjacency and is an isomorphism from $J$ onto $H$. If all vertices of $H$ have one common colour, its induced copy is monochromatic. [F1, F2, F3, F4, step 1.1] ∎


## Avoidance using separated palettes and anticomplete attachments

[Open item](item-lem-avoiding-connected-targets-in-separate-palette-parts) · level 2


### Statement

Let $G$ and $J$ be finite simple graphs, with $J$ nonempty and connected. Suppose $V(G)$ is the disjoint union of a base set $B$ and attachment sets $P_t$, and no edge of $G$ joins distinct attachment sets. Let $c$ be a finite vertex colouring such that every vertex of $B$ has one fixed colour and every vertex in an attachment set has a different colour from that fixed colour. If $G[B]$ contains no induced copy of $J$ and each coloured $G[P_t]$ contains no monochromatic induced copy of $J$, then the coloured graph $G$ contains no monochromatic induced copy of $J$. Edges between $B$ and the attachment sets are unrestricted.

### Statement references

[math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)

[math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

[math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy)

[def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)

### Facts & Assumptions

[F1] A finite simple graph has a finite vertex set and edges that are two-element subsets of it. For a vertex subset $S$, the induced subgraph $G[S]$ has vertex set $S$ and precisely the edges of $G$ with both endpoints in $S$. [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph) [math:def-subgraph-induced-subgraph-and-spanning-subgraph](https://alphabetamath.cc/item/def-subgraph-induced-subgraph-and-spanning-subgraph)

[F2] A connected graph is nonempty and any two of its vertices are joined by a path, a finite list of distinct vertices with consecutive vertices adjacent. [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component) [math:def-graph-walk-trail-path-and-cycle](https://alphabetamath.cc/item/def-graph-walk-trail-path-and-cycle)

[F3] An induced embedding is an injective vertex map preserving and reflecting adjacency; its image induces a copy of the source graph. An edge-preserving injective map also gives a subgraph on its image vertices and image edges. [math:def-induced-embedding-and-induced-copy](https://alphabetamath.cc/item/def-induced-embedding-and-induced-copy) [def-ordinary-edge-preserving-embedding](item-def-ordinary-edge-preserving-embedding)

[F4] A finite colouring assigns one colour to each vertex. A vertex set is monochromatic when all its vertices receive the same colour. [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)

[F5] If a graph's vertices are partitioned into parts with no edges between distinct parts, every connected subgraph has all its vertices in one part. [lem-connected-subgraphs-in-anticomplete-parts](item-lem-connected-subgraphs-in-anticomplete-parts)

### Proof

**Given:** The graphs, partition, colouring and avoidance hypotheses in the statement.

**Goal:** Show that $G$ has no monochromatic induced copy of $J$.

1.1 Suppose that an induced embedding $f$ of $J$ into $G$ has monochromatic image $X$. Since $J$ is nonempty, choose a vertex of $X$. If its colour is the fixed base colour, every vertex of $X$ has that colour and therefore lies in $B$. The same map is then an induced embedding into $G[B]$, because $G[B]$ retains exactly the ambient edges between vertices of $B$. This contradicts the assumed absence of an induced $J$ in $G[B]$. [given, F1, F3, F4]

2.1 Otherwise the common colour differs from the base colour, so $X$ is contained in the union $A$ of the attachment sets. The image vertices and image edges of $J$ form a connected subgraph of $G[A]$: images of paths in $J$ are paths because $f$ is injective and preserves edges. The nonempty attachment sets partition $A$, and no edge of $G[A]$ joins distinct parts. By the locality fact, $X$ lies in one $P_t$. The map $f$ is then an induced embedding into $G[P_t]$, and its image is monochromatic, contrary to the avoidance hypothesis for that attachment. Both possible colours lead to contradictions, so no such copy exists. [given, F1, F2, F3, F4, F5, step 1.1] ∎
