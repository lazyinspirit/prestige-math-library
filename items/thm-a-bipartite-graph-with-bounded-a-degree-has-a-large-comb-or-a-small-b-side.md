---
id: thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side
kind: theorem
title: "A bipartite graph with bounded A-degree has a large comb or a small B-side"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-a-bipartite-layer-is-small-unless-a-large-comb-already-appears,
       def-comb-in-a-graph,
       thm-geometric-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, Theorem 2.1"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

Let $G$ be a finite graph with a bipartition $(A,B)$ such that every vertex of
$B$ has a neighbour in $A$. Let $\Gamma,\Delta>0$ and let $d\in(0,1)$. Suppose
every vertex of $A$ has at most $\Delta$ neighbours in $B$. Then at least one
of the following holds:

1. for some integer $t\geq 1$, there is a $(t,\Gamma t^{-1/d})$-comb in
   $(A,B)$;
2. $$|B|\leq \frac{3^{d+1}}{3/2-(3/2)^d}\Gamma^d\Delta^{1-d}.$$

## Facts & Assumptions

**Given:** A bipartite graph $(A,B)$, parameters $\Gamma,\Delta>0$ and
$d\in(0,1)$, every vertex of $B$ has a neighbour in $A$, and every vertex of
$A$ has at most $\Delta$ neighbours in $B$.

[L1] Under the layer hypotheses of the previous lemma, either a
$(t,\Gamma t^{-1/d})$-comb already appears or the current layer $C$ has size at
most $2^{d+1}(2/3)^{s-sd-1}\Gamma^d\Delta^{1-d}$
([[lem-a-bipartite-layer-is-small-unless-a-large-comb-already-appears]]).

[L2] If $|r|<1$, then $\sum_{n\geq 0} r^n=1/(1-r)$
([[thm-geometric-series]]).

## Proof

**Proof technique:** direct.

1.1 Define pairwise disjoint sets $C_1,C_2,\dots$ inductively. Set $D_1:=B$, and after defining $C_1,\dots,C_{s-1}$ let $D_s:=B\setminus(C_1\cup\cdots\cup C_{s-1})$. Choose distinct vertices $a_1,\dots,a_k\in A$ with $k$ maximal such that for each $i$ there are at least $(2/3)^s\Delta$ vertices of $D_s$ adjacent to $a_i$ and to none of $a_1,\dots,a_{i-1}$. Let $C_s$ be the set of vertices of $D_s$ adjacent to one of $a_1,\dots,a_k$. By maximality of $k$, every vertex of $A$ has at most $(2/3)^s\Delta$ neighbours in $D_s\setminus C_s$. Inducting on $s$ shows that every vertex of $A$ has at most $(2/3)^{s-1}\Delta$ neighbours in $D_s$. [given, choose]

2.1 Every vertex of $B$ belongs to some layer $C_s$. Indeed, if some $b\in B$ survived in every $D_s$, choose a neighbour $a\in A$ of $b$. Then $a$ has at least one neighbour in each $D_s$, contradicting step 1.1 for all large $s$ because $(2/3)^{s-1}\Delta<1$ eventually. Thus $B=C_1\sqcup C_2\sqcup\cdots$. [step 1.1, given, algebra]

2.2 Fix $s\geq 1$. The data $D_s$ and the chosen vertices $a_1,\dots,a_k$ satisfy the hypotheses of [L1]. Therefore either [L1] already yields a $(t,\Gamma t^{-1/d})$-comb in $(A,B)$, or $|C_s|\leq 2^{d+1}(2/3)^{s-sd-1}\Gamma^d\Delta^{1-d}$. So if the first alternative never occurs, the displayed bound holds for every $s$. [step 1.1, L1, cases]

3.1 Put $q:=(2/3)^{1-d}$. Since $d\in(0,1)$, we have $0<q<1$, and $(2/3)^{s-sd-1}=(3/2)^d q^{s-1}$. Hence [L2] gives $\sum_{s\geq 1}(2/3)^{s-sd-1}=(3/2)^d\sum_{n\geq 0}q^n=(3/2)^d/(1-(2/3)^{1-d})$. Using the disjoint union from step 2.1 and the layer bound from step 2.2, we obtain $|B|=\sum_{s\geq 1}|C_s|\leq 2^{d+1}\Gamma^d\Delta^{1-d}\sum_{s\geq 1}(2/3)^{s-sd-1}=\frac{2^{d+1}(3/2)^d}{1-(2/3)^{1-d}}\Gamma^d\Delta^{1-d}=\frac{3^{d+1}}{3/2-(3/2)^d}\Gamma^d\Delta^{1-d}$. [step 2.1, step 2.2, L2, algebra]

4.1 Therefore either the comb alternative occurs at some stage, or the displayed bound on $|B|$ holds. This is exactly the Statement. [step 2.2, step 3.1, cases-exhaustive] ∎
