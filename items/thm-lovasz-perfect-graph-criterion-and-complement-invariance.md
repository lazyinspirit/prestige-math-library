---
id: thm-lovasz-perfect-graph-criterion-and-complement-invariance
kind: theorem
title: "Lovasz's numerical criterion for perfect graphs and complement invariance"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-perfect-graph-for-the-bull-route, def-clique-stable-set-and-numbers, def-proper-vertex-colouring-and-chromatic-number, def-subgraph-induced-subgraph-and-spanning-subgraph, def-graph-isomorphism-and-complement, cor-independent-set-is-no-larger-than-a-finite-spanning-set, lem-standard-basis-of-f-n]
proof_strategy: contradiction
sources:
  references:
    - title: "Reinhard Diestel, Graph Theory, 5th ed., Theorems 5.5.4 and 5.5.6, pp. 142-145"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch5.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical new_item review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-08-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

For a finite graph $G$, the following are equivalent:

1. $G$ is perfect.
2. Every induced subgraph $H$ of $G$ satisfies
   $|V(H)|\le\alpha(H)\omega(H)$.

Consequently $G$ is perfect if and only if its complement $\overline G$ is
perfect.

## Facts & Assumptions

**Given:** A finite simple graph $G$.

[L1] Perfection means $\chi(H)=\omega(H)$ for every induced subgraph $H$.
An optimal coloring partitions $V(H)$ into $\chi(H)$ stable color classes,
and a clique meets any one color class in at most one vertex
([[def-perfect-graph-for-the-bull-route]],
[[def-proper-vertex-colouring-and-chromatic-number]],
[[def-clique-stable-set-and-numbers]]).

[L2] If $U$ is stable, an optimal coloring of $G-U$ can be extended by one
new color on $U$. Cliques and stable sets interchange under complementation,
and induced subgraphs commute with complementation
([[def-graph-isomorphism-and-complement]],
[[def-subgraph-induced-subgraph-and-spanning-subgraph]],
[[def-clique-stable-set-and-numbers]]).

[L3] Any $d>n$ vectors of $\mathbb R^n$ are linearly dependent, since the
$n$ standard coordinate vectors span $\mathbb R^n$
([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]],
[[lem-standard-basis-of-f-n]]).

## Proof

**Proof technique:** contradiction for the reverse implication; the forward implication and complement corollary are direct.

1.1 If $G$ is perfect, color each induced $H$ with $\omega(H)$ colors. Each color class is stable and has at most $\alpha(H)$ vertices, so $|V(H)|\le\alpha(H)\omega(H)$. This includes the empty graph, for which both sides are zero. [L1]

1.2 Conversely, assume the numerical inequality for every induced subgraph of $G$ and induct on $n=|V(G)|$. It passes to each proper induced subgraph, so those subgraphs are perfect by induction. The empty case is immediate. Suppose for contradiction that nonempty $G$ is not perfect. Put $a=\alpha(G)$, $w=\omega(G)$ and $d=aw+1$. Then $\chi(G)>w$, while the assumed inequality gives $n\le aw=d-1$. [L1, induction, assume-contra]

2.1 If $U\subseteq V(G)$ is a nonempty stable set, then $G-U$ is a proper perfect induced subgraph. It must have a $w$-clique: otherwise $\chi(G-U)=\omega(G-U)\le w-1$, and coloring $U$ with one new color would give $\chi(G)\le w$, contrary to step 1.2. This also covers $G-U$ empty. [L1, L2, step 1.2]

3.1 Fix a maximum stable set $A_0=\{u_1,\ldots,u_a\}$. For each $i$, choose an optimal $w$-coloring of $G-u_i$, possible by step 2.1 and perfection of that proper induced subgraph. Name its $w$ color classes $A_{(i-1)w+1},\ldots,A_{iw}$. Thus $A_0,A_1,\ldots,A_{aw}$ are $d=aw+1$ stable sets. By step 2.1, for each $j\in\{0,\ldots,aw\}$ fix a $w$-clique $K_j$ in $G-A_j$. All selections are from finite families. [L1, step 1.2, step 2.1, choose]

4.1 Let $K$ be any $w$-clique of $G$. If $K\cap A_0=\varnothing$, then for every $i$ it is a $w$-clique of $G-u_i$ and meets each of that graph's $w$ color classes exactly once. If $K\cap A_0=\{u_i\}$, then it meets $A_0$ once; in the $i$th coloring, its other $w-1$ vertices occupy exactly $w-1$ of the $w$ color classes, so it misses exactly one class in that block. For each other $u_h\in A_0$ it meets all $w$ classes of the $h$th coloring. A clique meets $A_0$ at most once. Therefore $K$ is disjoint from exactly one of $A_0,\ldots,A_{aw}$ and meets every other one in exactly one vertex. In particular, $|A_i\cap K_j|=0$ if $i=j$ and $1$ if $i\ne j$. [L1, step 3.1, algebra]

5.1 Enumerate $V(G)=\{v_1,\ldots,v_n\}$. Let $A$ be the real $d\times n$ matrix whose $i$th row is the incidence vector of $A_i$, and let $B$ be the real $n\times d$ matrix whose $j$th column is the incidence vector of $K_j$. By step 4.1, $AB=J_d-I_d$: its diagonal entries are $0$ and all off-diagonal entries are $1$. This $d\times d$ matrix has independent columns. Indeed, if $(J_d-I_d)z=0$, put $s=\sum_i z_i$. Each coordinate equation says $s-z_i=0$, so all $z_i=s$; then $s=ds$, and $d\ge2$ forces $s=0$ and $z=0$. Hence the $d$ columns of $B$ are independent: any linear relation among them would remain a relation after multiplying by $A$. But $d>n$ by step 1.2, contradicting [L3] for vectors of $\mathbb R^n$. [L3, step 1.2, step 4.1, algebra]

6.1 The contradiction discharges step 1.2, proving the numerical criterion. If $G$ is perfect, step 1.1 gives the inequality for every induced $H$. For each induced subgraph $\overline H$ of $\overline G$, [L2] gives $|V(\overline H)|=|V(H)|$, $\alpha(\overline H)=\omega(H)$, and $\omega(\overline H)=\alpha(H)$; so the same inequality holds in $\overline G$. The criterion makes $\overline G$ perfect. Applying that direction to $\overline G$ proves the converse, because $\overline{\overline G}=G$. [L2, step 1.1, step 5.1, discharge-contradiction] ∎
## Source notes

Diestel, Theorem 5.5.6, pp. 144-145, gives Gasparian's finite incidence
matrix proof of Lovasz's numerical criterion. Theorem 5.5.4, pp. 142-144,
states complement invariance. The full proof passages were read; the
coordinate-kernel argument for $J_d-I_d$ is written out here.
