---
id: thm-graph-removal-lemma
kind: theorem
title: "Graph removal lemma for a fixed ordinary subgraph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-szemeredi-regularity-lemma-with-tower-bound, thm-counting-lemma-for-a-fixed-graph, def-finite-simple-graph]
aliases: []
landmark: true
proof_strategy: contraposition
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Theorem 2.6.5"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
    - title: "D. Conlon and J. Fox, Graph removal lemmas, Theorem 1.1"
      url: "https://arxiv.org/pdf/1211.3487"
pipeline_run: null
---

## Statement

For every finite simple graph $H$ and every $\epsilon>0$ there are $\delta>0$ and $n_0$ such that the following holds. If a graph $G$ of order $n\ge n_0$ has fewer than $\delta n^{|V(H)|}$ injective edge-preserving maps from $H$ to $G$, then one can delete fewer than $\epsilon n^2$ edges from $G$ and obtain an $H$-free graph.

## Facts & Assumptions

**Given:** A fixed graph $H$, a parameter $\epsilon>0$, and a sufficiently large graph $G$.

[L1] For every $0<\gamma<1$ and every prescribed $m_0\ge1$ there is $M=M(\gamma,m_0)$ such that every graph of order $n\ge M$ has an equitable $\gamma$-regular vertex partition into $k$ parts with $m_0\le k\le M$ ([[thm-szemeredi-regularity-lemma-with-tower-bound]]).

[L2] For fixed $H$, regular pairs of density bounded below contain a positive product-proportion of injective part-respecting copies of $H$ ([[thm-counting-lemma-for-a-fixed-graph]]).

[L3] A finite simple graph has no loops or multiple edges, so deleting an edge changes one unordered vertex pair ([[def-finite-simple-graph]]).

## Proof

**Proof technique:** contraposition.

1.1 We prove the contrapositive. Put $h=|V(H)|$, choose $0<\eta<1$ with $\eta\ll\epsilon$, then choose a regularity parameter $0<\gamma<\eta$ small enough for [L2], so $0<\gamma<1$ as [L1] requires. Set $m_0=\lceil8/\epsilon\rceil$ and require $n_0\ge\max(M(\gamma,m_0),8/\epsilon)$. Apply [L1] at $\gamma$ with minimum part count $m_0$, obtaining an equitable $\gamma$-regular partition into $k$ parts with $m_0\le k\le M$. [contrapositive-reduce, given, L1, L2, choose]

2.1 From $G$ delete every edge inside a partition part, every edge across a $\gamma$-irregular pair, and every edge across a regular pair of density below $\eta$. Call the resulting graph $G'$. [step 1.1, choose]

3.1 Equitability bounds the within-part deletions by $\sum_i|V_i|^2\le n\max_i|V_i|\le n(n/k+1)=n^2/k+n$, and $k\ge m_0\ge8/\epsilon$ together with $n\ge n_0\ge8/\epsilon$ make this at most $\epsilon n^2/4$ by [L1]; $\gamma$-regularity bounds the irregular-pair deletions by $\gamma n^2$; and the low-density pairs contribute at most $\eta n^2$. Choose $\gamma,\eta$ so that $\gamma+\eta<\epsilon/2$. Hence fewer than $\epsilon n^2$ edges were deleted, each changing one unordered vertex pair by [L3]. [step 1.1, step 2.1, L1, L3, algebra]

4.1 Assume that fewer than $\epsilon n^2$ deletions cannot make $G$ $H$-free. Then $G'$ contains a copy of $H$. Assign to each vertex of $H$ the partition part containing its image. Every edge of $H$ lies across a $\gamma$-regular pair of density at least $\eta$. [assume-hyp, step 2.1, step 3.1]

5.1 Apply [L2] to those assigned parts. Since each has size at least $n/(2M)$ for the fixed regularity bound $M$, the original graph contains at least $c\prod_{i=1}^h|W_i|\ge c(2M)^{-h}n^h$ injective copies of $H$. Put $\delta=c(2M)^{-h}$. [step 4.1, L2, algebra]

6.1 Thus every graph requiring at least $\epsilon n^2$ edge deletions contains at least $\delta n^h$ copies of $H$, which is the contrapositive of the Statement. [step 1.1, step 5.1, discharge-contrapositive] ∎
