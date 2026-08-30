---
id: lem-a-bipartite-layer-is-small-unless-a-large-comb-already-appears
kind: lemma
title: "A bipartite layer is small unless a large comb already appears"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-comb-in-a-graph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, proof of Theorem 2.1"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

Let $G$ be a finite graph with a bipartition $(A,B)$, let $\Gamma,\Delta>0$,
let $d\in(0,1)$, and let $s\geq 1$ be an integer. Suppose that
$D\subseteq B$ and distinct vertices $a_1,\dots,a_k\in A$ satisfy:

1. every vertex of $A$ has at most $(2/3)^{s-1}\Delta$ neighbours in $D$; and
2. for each $i\in\{1,\dots,k\}$, at least $(2/3)^s\Delta$ vertices of $D$ are
   adjacent to $a_i$ and to none of $a_1,\dots,a_{i-1}$.

Let $C\subseteq D$ be the set of vertices adjacent to at least one of
$a_1,\dots,a_k$. Then at least one of the following holds:

1. for some integer $t\geq 1$, there is a $(t,\Gamma t^{-1/d})$-comb in
   $(A,B)$ whose teeth lie in $\{a_1,\dots,a_k\}$ and whose blocks lie in $C$;
2. $$|C|\leq 2^{d+1}(2/3)^{s-sd-1}\Gamma^d\Delta^{1-d}.$$

## Facts & Assumptions

**Given:** A bipartite graph $(A,B)$, parameters $\Gamma,\Delta>0$ and $d\in(0,1)$, an integer $s\geq 1$, a set $D\subseteq B$, distinct vertices $a_1,\dots,a_k\in A$, and the two hypotheses in the Statement.

[L1] A $(t,w)$-comb in $(A,B)$ consists of distinct teeth in $A$ and pairwise disjoint blocks in $B$, each tooth complete to its own block and anticomplete to all other blocks ([[def-comb-in-a-graph]]).

## Proof

**Proof technique:** direct.

1.1 For each $i$, let $P_i$ be the set of vertices in $D$ adjacent to $a_i$ and to none of $a_1,\dots,a_{i-1}$. By the second hypothesis, $|P_i|\geq (2/3)^s\Delta$, and the sets $P_1,\dots,P_k$ are pairwise disjoint. Let $Q_i$ be the set of vertices in $D\setminus P_i$ adjacent to $a_i$. Since every vertex of $A$ has at most $(2/3)^{s-1}\Delta$ neighbours in $D$, we have $|Q_i|\leq (2/3)^{s-1}\Delta-(2/3)^s\Delta=(2/3)^s\Delta/2$. [given, algebra]

2.1 Declare the vertices $a_k,a_{k-1},\dots,a_1$ good backwards as follows: $a_i$ is good when at most $|P_i|/2$ vertices of $P_i$ are adjacent to a good vertex among $a_{i+1},\dots,a_k$. Let $I$ be the set of good indices, and let $Q:=\bigcup_{i\in I}Q_i$. For every bad index $i\notin I$, at least $|P_i|/2\geq (2/3)^s\Delta/2$ vertices of $P_i$ lie in $Q$. Since the $P_i$ are disjoint and each $Q_i$ has size at most $(2/3)^s\Delta/2$, it follows that $(k-|I|)(2/3)^s\Delta/2\leq |Q|\leq |I|(2/3)^s\Delta/2$, so $|I|\geq k/2$. [step 1.1, algebra]

3.1 If $I\neq\varnothing$, then for each $i\in I$ let $B_i:=P_i\setminus Q$. We have $|B_i|\geq |P_i|/2\geq (2/3)^s\Delta/2$. If $i<j$ are both in $I$, then $B_i$ is disjoint from $P_j$ and every vertex of $B_i$ avoids $Q_j$, so no vertex of $B_i$ is adjacent to $a_j$; similarly no vertex of $B_j$ is adjacent to $a_i$. Therefore $((a_i,B_i):i\in I)$ is a $(|I|,(2/3)^s\Delta/2)$-comb in $(A,B)$ by [L1]. [step 1.1, step 2.1, L1, construct]

4.1 If $I\neq\varnothing$ and $(2/3)^s\Delta/2\geq \Gamma |I|^{-1/d}$, then step 3.1 already gives the first alternative. Hence we may assume either $I=\varnothing$ or $(2/3)^s\Delta/2<\Gamma |I|^{-1/d}$. In the second case, $|I|<(2\Gamma(3/2)^s/\Delta)^d$. When $I=\varnothing$, step 2.1 gives $k=0$, so then $C=\varnothing$. In either remaining case, $k\leq 2(2\Gamma(3/2)^s/\Delta)^d$. [step 3.1, step 2.1, algebra, cases]

5.1 Since every $a_i$ has at most $(2/3)^{s-1}\Delta$ neighbours in $D$, the set $C$ of all vertices of $D$ adjacent to one of the $a_i$ satisfies $|C|\leq k(2/3)^{s-1}\Delta\leq 2(2\Gamma(3/2)^s/\Delta)^d(2/3)^{s-1}\Delta=2^{d+1}(2/3)^{s-sd-1}\Gamma^d\Delta^{1-d}$. This is the second alternative. [step 4.1, given, algebra] ∎
