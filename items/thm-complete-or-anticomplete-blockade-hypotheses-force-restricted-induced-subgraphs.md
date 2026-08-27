---
id: thm-complete-or-anticomplete-blockade-hypotheses-force-restricted-induced-subgraphs
kind: theorem
title: "Complete or anticomplete blockade hypotheses force an $\\epsilon$-restricted induced subgraph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-c-sparse-and-c-restricted-vertex-set, def-complete-anticomplete-pure-and-x-sparse-blockades, lem-maximal-pattern-pure-blockades-force-many-blocks, lem-pure-blockades-with-p-four-free-patterns-contain-large-homogeneous-subblockades]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Theorem 7.4"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

Let $\epsilon\in(0,\tfrac12)$ and $a\geq1$. Let $G$ be a graph such that for
every induced subgraph $F$ of $G$ with $|F|\geq\epsilon^{2a}|G|$, there exists
$k\in[2,\epsilon^{-1}]$ and a complete or anticomplete $(k,|F|/k^a)$-blockade
in $F$. Then $G$ has an $\epsilon$-restricted induced subgraph with at least
$\epsilon^{3a}|G|$ vertices.

## Facts & Assumptions

**Given:** The hypotheses of the statement.

## Proof

**Proof technique:** direct.

1.1 Let $q$ be maximal subject to the existence of a pure blockade $(A_1,\dots,A_q)$ whose pattern graph is $P_4$-free, every block has size at least $\epsilon^{3a}|G|$, and $\sum_{i=1}^{q}|A_i|^{1/a}\geq |G|^{1/a}$. By [[lem-maximal-pattern-pure-blockades-force-many-blocks]], one has $q\geq\epsilon^{-2}$. [given, choose]

2.1 By [[lem-pure-blockades-with-p-four-free-patterns-contain-large-homogeneous-subblockades]], this blockade has a complete or anticomplete subblockade indexed by a set $I\subseteq[q]$ with $|I|\geq\sqrt q\geq \epsilon^{-1}$. For each $i\in I$, choose $S_i\subseteq A_i$ with $|S_i|=\lceil\epsilon^{3a}|G|\rceil$, and put $S:=\bigcup_{i\in I}S_i$. Then $|S|=|I|\lceil\epsilon^{3a}|G|\rceil\geq\epsilon^{3a}|G|$. [step 1.1, choose]

3.1 If the chosen subblockade is anticomplete, then every vertex of $S_i$ has neighbors in $S$ only inside $S_i$, so its degree in $G[S]$ is at most $|S_i|-1\leq |S|/|I|\leq \epsilon|S|$. Hence $S$ is $\epsilon$-sparse, and therefore $\epsilon$-restricted. [step 2.1, given]

3.2 If the chosen subblockade is complete, then in the complement $\overline{G}[S]$ every vertex of $S_i$ has neighbors only inside $S_i$, so the same estimate shows that $\overline{G}[S]$ is $\epsilon$-sparse. Therefore $G[S]$ is $\epsilon$-dense, and again $\epsilon$-restricted. [step 2.1, given]

4.1 In either case $G$ has an $\epsilon$-restricted induced subgraph on at least $\epsilon^{3a}|G|$ vertices, namely $G[S]$. [step 3.1, step 3.2] ∎
