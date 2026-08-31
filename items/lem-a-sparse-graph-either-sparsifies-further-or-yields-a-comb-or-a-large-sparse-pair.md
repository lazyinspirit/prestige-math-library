---
id: lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair
kind: lemma
title: "A sparse graph either sparsifies further or yields a comb or a large sparse pair"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair, lem-a-dense-bipartite-side-has-a-small-hitting-set, thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side, def-comb-in-a-graph, def-c-sparse-and-c-restricted-vertex-set, def-directional-and-weak-sparsity-between-vertex-sets, def-graph-adjacency-incidence-neighbourhood-and-degree]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 2.10"
      url: "https://arxiv.org/pdf/2606.06258v2"
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Lemma 5.2"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

Let $0<x\le y\le 2^{-8}$, and let $G$ be a $y^3$-sparse graph with
$|V(G)|\ge y^{-4}$. Then at least one of the following holds:

1. there are disjoint sets $X,Y\subseteq V(G)$ such that
$$|X|\ge y^4|V(G)|,\qquad |Y|\ge (1-4y)|V(G)|,$$
and $Y$ is $x$-sparse to $X$;
2. $G$ is $2y^4$-sparse; or
3. for some integer $\ell\in[y^{-1},\lceil x^{-2}\rceil]$, there is an
$(\ell,y^4|V(G)|/\ell^2)$-comb $((a_i,B_i):i\in[\ell])$ in $G$, and there is a
vertex $v\in V(G)\setminus(\{a_i:i\in[\ell]\}\cup\bigcup_{i=1}^{\ell}B_i)$ that
is complete to $\bigcup_{i=1}^{\ell}B_i$ and anticomplete to
$\{a_i:i\in[\ell]\}$.

## Facts & Assumptions

**Given:** Parameters $x,y$ and a graph $G$ satisfying the displayed hypotheses.

[L1] If outcomes 1 and 2 fail, then there exist a vertex $v\in V(G)$ and disjoint sets $A,B\subseteq V(G)\setminus\{v\}$ with $A\subseteq V(G)\setminus N_G[v]$, $B\subseteq N_G(v)$, $|A|\ge (1-3y)|V(G)|$, $|B|\ge y^4|V(G)|$, $A$ $y^2$-sparse to $B$, and every vertex of $B$ having at least $x^2|A|$ neighbours in $A$ ([[lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair]]).

[L2] If every vertex of a nonempty set $B$ has at least $\xi|A|$ neighbours in a nonempty set $A$, then some set $S\subseteq A$ with $|S|\le \lceil 1/\xi\rceil$ meets the neighbourhood in $A$ of at least half of the vertices of $B$ ([[lem-a-dense-bipartite-side-has-a-small-hitting-set]]).

[L3] In a bipartite graph $(A,B)$ where every vertex of $B$ has a neighbour in $A$ and every vertex of $A$ has at most $\Delta$ neighbours in $B$, either there is a $(t,\Gamma t^{-2})$-comb for some integer $t\ge 1$, or $$|B|\le \frac{3^{3/2}}{3/2-\sqrt{3/2}}\Gamma^{1/2}\Delta^{1/2}$$ ([[thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side]]).

[L4] An $(\ell,w)$-comb in a graph is a sequence of distinct teeth $a_i$ and pairwise disjoint blocks $B_i$ such that $a_i$ is complete to $B_i$ and anticomplete to every other block ([[def-comb-in-a-graph]]).

## Proof

**Proof technique:** cases.

1.1 [assume-case pair] If outcome 1 already holds, there is nothing to prove. [given, cases]

1.2 [assume-case sparser] If outcome 2 already holds, there is nothing to prove. [given, cases]

1.3 [assume-case comb] Assume now that outcomes 1 and 2 both fail. Then [L1] gives a vertex $v\in V(G)$ and disjoint sets $A,B\subseteq V(G)\setminus\{v\}$ with $A\subseteq V(G)\setminus N_G[v]$, $B\subseteq N_G(v)$, and the displayed nearly covered sparse pair properties. In particular $A$ and $B$ are nonempty. [L1, given]

2.1 Apply [L2] with $\xi=x^2$ to the sets $A,B$. We obtain a set $S\subseteq A$ with $|S|\le \lceil x^{-2}\rceil$ such that at least half of the vertices of $B$ have a neighbour in $S$. Let $B'\subseteq B$ be the set of vertices with a neighbour in $S$; then $|B'|\ge |B|/2\ge \tfrac12 y^4|V(G)|$. [step 1.3, L2, choose, algebra]

3.1 Consider the bipartite graph between $S$ and $B'$. Every vertex of $B'$ has a neighbour in $S$ by definition. Since $A$ is $y^2$-sparse to $B$ and $S\subseteq A$, every vertex of $S$ has at most $y^2|B|$ neighbours in $B'$. Apply [L3] with $d:=1/2$, $\Delta:=y^2|B|$, and $\Gamma:=|B|$. [step 1.3, step 2.1, L3, algebra]

4.1 The second alternative of [L3] is impossible for these parameters, because it would give $|B'|\le \frac{3^{3/2}}{3/2-\sqrt{3/2}}\,|B|^{1/2}(y^2|B|)^{1/2}=\frac{3^{3/2}}{3/2-\sqrt{3/2}}\,y|B|$. The constant in front of $y|B|$ is less than $20$, while $|B'|\ge |B|/2>20y|B|$ since $y\le 2^{-8}<1/40$. Hence [L3] yields a $(\ell,|B|/\ell^2)$-comb $((a_i,B_i):i\in[\ell])$ with each $a_i\in S$ and each $B_i\subseteq B'$. [step 2.1, step 3.1, L3, algebra]

5.1 Because the teeth $a_i$ are distinct members of $S$, we have $\ell\le |S|\le \lceil x^{-2}\rceil$. Also [L4] gives $|B_i|\ge |B|/\ell^2$ for each tooth block, while every $a_i\in S\subseteq A$ has at most $y^2|B|$ neighbours in $B$. Since $a_i$ is complete to $B_i$ by [L4], this forces $|B|/\ell^2\le |B_i|\le y^2|B|$, and therefore $\ell\ge y^{-1}$. Finally $|B|\ge y^4|V(G)|$ from step 1.3, so each block has size at least $y^4|V(G)|/\ell^2$. [step 1.3, step 2.1, step 4.1, L4, algebra]

6.1 By step 1.3, we already have a vertex $v$ with $B\subseteq N_G(v)$ and $A\subseteq V(G)\setminus N_G[v]$. Since each $a_i\in A$ and each $B_i\subseteq B$, the vertex $v$ is complete to $\bigcup_i B_i$ and anticomplete to $\{a_i:i\in[\ell]\}$. Together with step 5.1, this is exactly outcome 3. [step 1.3, step 5.1]

7.1 The three cases 1.1, 1.2, and 1.3 exhaust the possibilities, so one of the stated outcomes always holds. [step 1.1, step 1.2, step 6.1, cases-exhaustive] ∎
