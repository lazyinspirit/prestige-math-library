---
id: lem-co-e-free-external-purity-survives-h-five-overlap-quotients
kind: lemma
title: "In a special-vertex comb of a co-$E$-free graph, vertices in other comb blocks remain pure to every $H_5$-overlap quotient block"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours, lem-co-e-free-complete-nonedge-pairs-are-pure-to-induced-h-five-graphs, lem-h-five-overlap-classes-are-connected, lem-purity-on-every-h-five-propagates-along-an-overlap-class, def-h-five-overlap-blockade-and-iterated-mixed-quotients, lem-h-five-overlap-quotient-iteration-terminates-at-a-pure-blockade, lem-a-vertex-mixed-on-a-connected-set-mixes-on-an-edge, lem-quotient-blocks-preserve-connectedness-and-anticonnectedness, lem-a-quotient-mixed-block-witness-descends-to-two-member-blocks, def-comb-in-a-graph, def-e-graph-and-co-e-graph, def-h-zero-through-h-five, def-edges-between-sets-and-pure-mixed-pairs]
proof_strategy: induction
verification:
  precheck: pass
sources:
  references:
    - title: "Huang, Ju, and Zhou, Erdős-Hajnal beyond the five-vertex path, Claim 6.4.3"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

Let $G$ be co-$E$-free and let $((a_k,B_k):k\in[\ell])$ be a comb with an outside vertex $v$ complete to all $B_k$ and anticomplete to all $a_k$. Fix $i$, form the nonempty $H_5$-overlap blockade in $B_i$, and form its iterated mixed quotients. Every vertex of $\bigcup_{k\ne i}B_k$ is pure to every block of every iterate.

## Facts & Assumptions
**Given:** The special-vertex comb, an index $i$, and its iterated overlap quotients.

[F1] Relative to any nonadjacent pair complete to an induced $H_5$ in a co-$E$-free graph, every one-sided vertex is pure to that $H_5$; in particular, with $(x,y)=(v,a_i)$, every external comb-block vertex is pure to every induced $H_5$ in $B_i$ ([[lem-co-e-free-complete-nonedge-pairs-are-pure-to-induced-h-five-graphs]]).

[F2] Purity on every $H_5$ propagates to its overlap class ([[lem-purity-on-every-h-five-propagates-along-an-overlap-class]]).

[F3] For a blockade of connected blocks, suppose distinct mixed quotient blocks $D_1,D_2$ have outside vertices $x,y,z$ with $xy$ a nonedge, $x,y$ complete to $D_1\cup D_2$, and $z\in N(x)\setminus N(y)$ complete to $D_1$ and anticomplete to $D_2$. If no vertex of $D_1$ is mixed on $D_2$, there are mixed member blocks inside $D_1$ with an outside triple satisfying the same adjacency conditions ([[lem-a-quotient-mixed-block-witness-descends-to-two-member-blocks]]).

[F4] If an outside vertex is mixed on a connected set, it has opposite adjacency to the endpoints of some edge of that set ([[lem-a-vertex-mixed-on-a-connected-set-mixes-on-an-edge]]).

[F5] In a co-$E$-free graph, if nonadjacent outside vertices $x,y$ are complete to an induced path $P$, a vertex $z\in N(x)\setminus N(y)$ mixed on $P$ cannot have two consecutive nonneighbours on $P$ ([[lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours]]).

[F6] Initial overlap classes are connected, and taking a mixed quotient preserves connectedness of blocks ([[lem-h-five-overlap-classes-are-connected]], [[lem-quotient-blocks-preserve-connectedness-and-anticonnectedness]]).

[F7] Each next iterate replaces mixed-reachability classes of blocks by their unions ([[def-h-five-overlap-blockade-and-iterated-mixed-quotients]]).

## Proof

**Proof technique:** induction.

1.1 Write $\mathcal L^r$ for iterate $r\geq1$. For any external comb-block vertex $u$, the comb and special-vertex hypotheses give $u\in N(v)\setminus N(a_i)$, with $v,a_i$ nonadjacent and complete to $B_i$. Thus [F1] makes $u$ pure to every induced $H_5$ in $B_i$, and [F2] makes it pure to each block of $\mathcal L^1$. [given, F1, F2, base]

1.2 All blocks of every $\mathcal L^r$ are connected: start with the initial classes and repeatedly apply connectedness preservation in [F6]. [F6]

1.3 Fix $s\geq2$ and assume the assertion for $s-1$. Suppose an external vertex $u$ is mixed on a block $L$ of $\mathcal L^s$. By the induction hypothesis, each member block of $\mathcal L^{s-1}$ inside $L$ is complete or anticomplete to $u$, and both labels occur. By [F7], a mixed chain inside $L$ joins blocks of opposite labels; at a change of label, consecutive mixed blocks $D_1,D_2$ have $u$ complete to $D_1$ and anticomplete to $D_2$. [F7, ih]

2.1 Consider any mixed blocks $D_1,D_2$ at level $r\geq1$ with an outside triple $x,y,z$ satisfying: $xy$ is a nonedge, $x,y$ are complete to $D_1\cup D_2$, and $z\in N(x)\setminus N(y)$ is complete to $D_1$ and anticomplete to $D_2$. No vertex $b\in D_1$ is mixed on $D_2$. Indeed, if one were, connectedness and [F4] give an edge $cc'$ in $D_2$ with $bc$ an edge and $bc'$ a nonedge. Then $b-c-c'$ is induced, $x,y$ are outside and complete to it, and $z$ is mixed on it with consecutive nonneighbours $c,c'$, contrary to [F5]. [step 1.2, F4, F5]

3.1 The pair in step 1.3 has the required triple $(x,y,z)=(v,a_i,u)$ at level $s-1$. Whenever its current level $r$ exceeds one, apply [F3] to $\mathcal L^{r-1}$: step 1.2 supplies connected member blocks and step 2.1 supplies the directional no-mixed-vertex hypothesis. The resulting mixed blocks at level $r-1$ have an outside triple with all the same adjacency conditions. Repeating this finite descent reaches mixed initial classes $A_1,A_2$ and an outside triple $x',y',u'$ with $x'y'$ a nonedge, $x',y'$ complete to $A_1\cup A_2$, and $u'\in N(x')\setminus N(y')$ complete to $A_1$ and anticomplete to $A_2$. If $s=2$, the initial pair already has these properties. [given, step 1.3, step 2.1, step 1.2, F3]

4.1 Apply step 2.1 to $A_1,A_2,x',y',u'$. Every vertex of $A_1$ is pure to $A_2$. Since the pair $(A_1,A_2)$ is mixed, some vertex $p\in A_1$ is complete to $A_2$ and some vertex $q\in A_1$ is anticomplete to $A_2$; otherwise all vertices have the same label and the pair is pure. Therefore any $u_2\in A_2$ is adjacent to $p$ and nonadjacent to $q$, and is mixed on $A_1$. Such a vertex exists because a blockade block is nonempty. [step 2.1, step 3.1]

5.1 The vertices $y',u'$ are outside $A_1$, nonadjacent, and both complete to $A_1$. Also $u_2\in N(y')\setminus N(u')$. Apply [F1] with $(x,y,u)=(y',u',u_2)$ to every induced $H_5$ contained in $A_1$, then [F2] to the overlap class $A_1$. It follows that $u_2$ is pure to $A_1$, contradicting step 4.1. Thus no external vertex is mixed on any block at level $s$. Together with the base case this proves the assertion for every iterate. [step 3.1, step 4.1, F1, F2, discharge-induction] ∎
