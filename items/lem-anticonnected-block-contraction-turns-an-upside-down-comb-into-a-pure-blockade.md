---
id: lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade
kind: lemma
title: "Anticonnected block contraction turns an upside-down comb into a pure blockade"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-components-are-anticomplete-and-anticomponents-complete,
       def-anticonnected-graph-and-anticonnected-component,
       def-comb-in-a-graph,
       def-complete-anticomplete-pure-and-x-sparse-blockades,
       def-graph-isomorphism-and-complement,
       def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Claim 5.2.2"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

Let $G$ be a $\overline{P_5}$-free graph, let $k\ge4$ be an integer, and let
$B\subseteq V(G)$. Suppose

$$
((a_i,B_i):i\in[k])
$$

is a $(k,|B|/k^8)$-comb in $G$ with $B_i\subseteq B$ and $a_i\notin B$ for
every $i\in[k]$.
Suppose also that there is a vertex

$$
v\in V(G)\setminus\bigl(B\cup\{a_1,\ldots,a_k\}\bigr)
$$

that is complete to $B$ and anticomplete to $\{a_1,\ldots,a_k\}$. Then
$G[B]$ contains a pure $(k,|B|/k^{10})$-blockade.

## Facts & Assumptions

**Given:** The graph $G$, the integer $k$, the set $B$, the displayed comb,
and the vertex $v$ satisfying the hypotheses above.

[F1] In the displayed comb, $a_i$ is complete to $B_i$ and anticomplete to
$B_j$ for $i\ne j$, while the blocks are pairwise disjoint and satisfy
$|B_i|\ge |B|/k^8$ ([[def-comb-in-a-graph]]).

[F2] A set $D$ is an anticonnected component of $G[X]$ precisely when it is
the vertex set of a connected component of $\overline{G[X]}$
([[def-anticonnected-graph-and-anticonnected-component]]).

[L1] Distinct anticonnected components of a graph are complete to one another
([[lem-components-are-anticomplete-and-anticomponents-complete]]).

[F3] A blockade is pure when every pair of distinct blocks is either complete
or anticomplete ([[def-complete-anticomplete-pure-and-x-sparse-blockades]]).

[F4] The graph $P_5$ has five vertices and four consecutive edges
([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F5] Complementation exchanges edges and nonedges
([[def-graph-isomorphism-and-complement]]).

## Proof

**Proof technique:** contract each comb block to a large anticomponent.

1.1 Fix $i\in[k]$ and put $n_i:=|B_i|$. Suppose first that every anticonnected component of $G[B_i]$ has size less than $n_i/k$. Partition the anticonnected components into a minimum number of unions $S_0,\ldots,S_r$, each of size less than $n_i/k$, and order them by nondecreasing size. Since the parts cover $B_i$, one has $r+1>k$. Minimality gives $|S_{j-1}|+|S_j|\ge n_i/k$ for $j\ge1$, and hence $|S_j|\ge n_i/(2k)\ge n_i/k^2$ because $k\ge4$. By [L1], the sets $S_1,\ldots,S_k$ are pairwise complete. They therefore form a complete, hence pure, $(k,n_i/k^2)$-blockade in $G[B]$. By [F1], $n_i/k^2\ge |B|/k^{10}$, which proves the result in this case. [F1, L1, F3, given, choose, algebra]

2.1 We may consequently assume that, for every $i\in[k]$, the graph $G[B_i]$ has an anticonnected component $D_i$ with $|D_i|\ge |B_i|/k$. Choose one such $D_i$. Then $|D_i|\ge |B_i|/k\ge |B|/k^9\ge |B|/k^{10}$, giving the required width bound for every chosen component. [F1, F2, step 1.1, choose, algebra]

3.1 Let $i\ne j$, and suppose that some $u\in D_j$ is mixed on $D_i$. The sets of neighbours and nonneighbours of $u$ in $D_i$ are both nonempty. Since $\overline{G[D_i]}$ is connected, some edge of that complement crosses these two sets. Thus there are $w,z\in D_i$ such that $uw\in E(G)$, $uz\notin E(G)$, and $wz\notin E(G)$. [F2, step 2.1, given]

4.1 Among the five vertices $v,a_i,u,z,w$, the nonedges are exactly $va_i,a_i u,uz,zw$. Indeed, the hypotheses on $v$ determine its four incidences; [F1] determines the incidences from $a_i$ to $D_i\subseteq B_i$ and to $u\in D_j\subseteq B_j$; and step 3.1 determines the three remaining incidences. Hence those four nonedges form the path $v-a_i-u-z-w$, so these vertices induce $\overline{P_5}$ by [F4] and [F5], contrary to the hypothesis on $G$. Therefore no vertex of $D_j$ is mixed on $D_i$. [F1, F4, F5, step 3.1, given]

5.1 Applying step 4.1 with both orders of $i,j$ shows that no vertex of either set is mixed on the other. If the pair $(D_i,D_j)$ had both an edge and a nonedge, then the vertices of $D_j$ would include one complete to $D_i$ and one anticomplete to $D_i$; every endpoint in $D_i$ of the cross-edge would then be mixed on $D_j$, a contradiction. Thus $(D_i,D_j)$ is pure. [step 4.1, cases]

6.1 The sets $D_1,\ldots,D_k$ are pairwise disjoint subsets of $B$, have size at least $|B|/k^{10}$ by step 2.1, and every cross-pair is pure by step 5.1. Hence they form the required pure $(k,|B|/k^{10})$-blockade in $G[B]$. [F1, F3, step 2.1, step 5.1] ∎
