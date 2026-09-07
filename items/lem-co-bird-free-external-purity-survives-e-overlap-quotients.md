---
id: lem-co-bird-free-external-purity-survives-e-overlap-quotients
title: "External purity survives every E overlap quotient"
kind: lemma
status: published
origin: pipeline
deps: ["lem-co-bird-free-complete-nonedge-pairs-are-pure-to-induced-e-graphs", "lem-purity-on-every-e-propagates-along-an-overlap-class", "def-e-overlap-blockade-and-iterated-mixed-quotients", "lem-e-overlap-quotient-iteration-terminates-at-a-pure-blockade", "lem-co-bird-free-separated-anticonnected-blocks-forbid-forward-mixing", "lem-a-vertex-mixed-on-a-quotient-block-yields-opposite-adjacency-on-two-member-blocks", "lem-a-quotient-mixed-block-witness-descends-to-two-member-blocks", "def-comb-in-a-graph"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: induction
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Huang–Ju–Zhou, Erdős–Hajnal beyond the five-vertex path, §6.2, Claim 6.5.3, full descent"
      url: https://arxiv.org/html/2606.06258v2
---

## Statement

Let $((a_k,B_k):k\in[\ell])$ be an $(\ell,w)$-comb in a finite simple co-Bird-free graph $G$, and let $v$ be outside all teeth and blocks, complete to every $B_k$ and anticomplete to every tooth. Fix $i$ with nonempty $E$ overlap support. For every $s\geq1$, every block $L$ of $\mathcal L^s$ and every vertex $u\in\bigcup_{k\ne i}B_k$, the vertex $u$ is pure to $L$.

## Facts & Assumptions

[F1] [[lem-co-bird-free-complete-nonedge-pairs-are-pure-to-induced-e-graphs]] supplies the following statement: Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. Let $S=\{p_1,p_2,p_3,p_4,p_5,q\}$ induce $E$, with edges exactly $p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q$. Then $u$ is pure to $S$. In particular, in an $(\ell,w)$-comb with an outside vertex $v$ complete to all blocks and anticomplete to all teeth, each $u\in B_k$, $k\ne i$, is pure to every induced $E$ in $B_i$.

[F2] [[lem-purity-on-every-e-propagates-along-an-overlap-class]] supplies the following statement: Fix a comb block $B_i$ and an $E$ overlap class $A$. If $u\notin A$ is pure to every induced $E$ contained in $A$, then $u$ is pure to $A$. In particular, any $u\notin B_i$ pure to every induced $E$ in $B_i$ is pure to every overlap class.

[F3] [[def-e-overlap-blockade-and-iterated-mixed-quotients]] supplies the following definition: Fix a comb block $B_i$ with nonempty $E$ overlap support $X_i$. By lem-e-overlap-classes-form-an-anticonnected-partition, its overlap classes are nonempty anticonnected sets partitioning $X_i$. Fix an enumeration of the finite set $B_i$, and order the classes by their least enumerated vertex to obtain $\mathcal L^1$. Define recursively $\mathcal L^{s+1}=\mathcal L^s/\mathcal M$ for $s\geq1$, using def-quotient-blockade-by-mixed-block-reachability and its least-member ordering. Thus one replaces each mixed-reachability class of blocks by its union. This construction is used only when $X_i\ne\varnothing$.

[F4] [[lem-e-overlap-quotient-iteration-terminates-at-a-pure-blockade]] supplies the following statement: For nonempty overlap support, put $n=|\mathcal L^1|$. Every stage $\mathcal L^s$ partitions the same support into nonempty anticonnected blocks and coarsens $\mathcal L^1$. There is a least $q\geq1$ for which $\mathcal L^q$ is pure, with $q\leq n$. At most $n-1$ strict transitions occur, and all stages from $q$ onward are identical.

[F5] [[lem-co-bird-free-separated-anticonnected-blocks-forbid-forward-mixing]] supplies the following statement: Let $G$ be finite simple and co-Bird-free. Let $D_1,D_2$ be disjoint nonempty vertex sets, with $D_2$ anticonnected. Suppose distinct $x,y,z\notin D_1\cup D_2$ satisfy $xy\notin E(G)$, both $x,y$ are complete to $D_1\cup D_2$, $zx\in E(G)$, $zy\notin E(G)$, and $z$ is complete to $D_1$ and anticomplete to $D_2$. Then no vertex of $D_1$ is mixed on $D_2$.

[F6] [[lem-a-vertex-mixed-on-a-quotient-block-yields-opposite-adjacency-on-two-member-blocks]] supplies the following statement: Let $D$ be a block of the quotient blockade $\mathcal L/\mathcal M$, and let $u\notin D$ be a vertex. Suppose that $u$ is mixed on $D$ but is pure to every original block of $\mathcal L$ contained in $D$. Then there are two original blocks $A_1,A_2$ of $\mathcal L$, both contained in $D$, such that 1. $A_1$ and $A_2$ are mixed; and 2. $u$ is complete to $A_1$ and anticomplete to $A_2$.

[F7] [[lem-a-quotient-mixed-block-witness-descends-to-two-member-blocks]] supplies the following statement: Let $\mathcal L$ be a blockade in a graph $G$, and suppose that every block of $\mathcal L$ is connected or every block is anticonnected. Let $D_1,D_2$ be distinct mixed blocks of the quotient blockade $\mathcal L/\mathcal M$. Assume there are vertices $x,y,u\notin D_1\cup D_2$ such that: 1. $x$ and $y$ are nonadjacent and both are complete to $D_1\cup D_2$; 2. $u\in N(x)\setminus N(y)$, with $u$ complete to $D_1$ and anticomplete to $D_2$; and 3. no vertex of $D_1$ is mixed on $D_2$. Then there are mixed original blocks $A_1,A_2$ of $\mathcal L$, both contained in $D_1$, and vertices $x',y',u'\notin A_1\cup A_2$ such that: 1. $x'$ and $y'$ are nonadjacent and both are complete to $A_1\cup A_2$; and 2. $u'\in N(x')\setminus N(y')$, with $u'$ complete to $A_1$ and anticomplete to $A_2$.

[F8] [[def-comb-in-a-graph]] supplies the following definition: Let $\ell\in\mathbb N$ with $\ell\geq1$, and let $w>0$. An **$(\ell,w)$-comb** in a graph $G$ is a sequence of pairs $((a_i,B_i):i\in[\ell])$ satisfying the conditions below. Here a vertex $a$ is **complete to** (respectively, **anticomplete to**) a set $B$ when the pair $(\{a\},B)$ is complete (respectively, anticomplete) in the sense of def-edges-between-sets-and-pure-mixed-pairs. 1. $(B_1,\dots,B_\ell)$ is an $(\ell,w)$-blockade; 2. the vertices $a_1,\dots,a_\ell$ are distinct; 3. the set $\{a_1,\dots,a_\ell\}$ is disjoint from every block $B_i$; and 4. for every $i\in[\ell]$, the vertex $a_i$ is complete to $B_i$; and 5. for all distinct $i,j\in[\ell]$, the vertex $a_i$ is anticomplete to $B_j$. The vertices $a_i$ are the **teeth** of the comb.

## Proof

**Given:** The graph, vertices, sets and hypotheses in the statement.

1.1 All stages consist of nonempty anticonnected subsets of $B_i$ and are successive mixed quotients. Fix $u$ in another comb block. The comb and special vertex give $uv\in E(G)$, $ua_i\notin E(G)$, $va_i\notin E(G)$, with $v,a_i$ complete to $B_i$. [F3, F4, F8]

1.2 At stage one, the induced-$E$ purity lemma makes $u$ pure to every $E$ in $B_i$, and overlap propagation makes it pure to every class. If there is no vertex in another block the whole assertion is vacuous. [F1, F2, base]

1.3 Assume purity through stage $s-1$, where $s\geq2$, and suppose $u$ mixes on a block $L$ of stage $s$. It is pure to all member blocks by the induction assumption. The opposite-member-block witness gives mixed blocks $D_1,D_2$ of stage $s-1$ inside $L$, with $u$ complete to $D_1$ and anticomplete to $D_2$. Together with $(x,y,z)=(v,a_i,u)$ these form a separated witness: distinct outside vertices, $xy$ absent, $x,y$ complete to both blocks, $zx$ present and $zy$ absent, and opposite $z$ adjacency to the blocks. [F6, ih]

1.4 Consider such a separated witness on any level $r\geq2$. Its second block is anticonnected, so the no-forward-mixing lemma says that no vertex of $D_1$ mixes on $D_2$. Apply the descending-witness lemma to $\mathcal L^{r-1}$: every original block is anticonnected, the two blocks are mixed blocks of its quotient, and all outside adjacency hypotheses hold. It gives mixed blocks of level $r-1$ and new outside vertices satisfying exactly the same separated-witness conditions. The outside vertices are distinct: $x^{\prime}\ne y^{\prime}$ also follows from their completeness to a nonempty set and the relation $z^{\prime}\in N(x^{\prime})\setminus N(y^{\prime})$; $z^{\prime}\ne x^{\prime}$ follows from adjacency, and $z^{\prime}\ne y^{\prime}$ from their opposite adjacency on the nonempty second block. [F4, F5, F7]

1.5 Repeat this descent finitely until level one (or do nothing if $s-1=1$). Write the resulting blocks as $A_1,A_2$ and vertices as $x^{\prime},y^{\prime},z^{\prime}$. Again no vertex of $A_1$ mixes on $A_2$. Each such vertex is therefore complete or anticomplete to $A_2$. Since the pair is mixed, both types occur; otherwise the pair itself would be pure. Choose any $u_2\in A_2$. It sees every vertex of the first type and none of the second, so it mixes on $A_1$. [F5, given]

1.6 Now $y^{\prime},z^{\prime}$ are nonadjacent outside vertices both complete to $A_1$, while $u_2$ sees $y^{\prime}$ and misses $z^{\prime}$. For every induced $E$ contained in $A_1$, apply induced-$E$ purity with $(x,y,u)=(y^{\prime},z^{\prime},u_2)$. Thus $u_2$ is pure to every such copy. Every copy meeting the initial overlap class $A_1$ lies wholly in it, and every defining chain between its vertices stays in it. The overlap propagation proof therefore applies within $A_1$, and makes $u_2$ pure to $A_1$, a contradiction. [F1, F2, F3]

2.1 The assumed mixing at stage $s$ is impossible. Starting from stage one and repeating this implication proves the assertion for every positive integer stage, including the fixed terminal stages. [step 1.3, F4, discharge-induction] ∎
