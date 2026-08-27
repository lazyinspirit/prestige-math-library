---
id: lem-maximal-pattern-pure-blockades-force-many-blocks
kind: lemma
title: "A maximal pure blockade with large total $a$-mass must already have at least $\\epsilon^{-2}$ blocks"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pattern-graph-of-a-pure-blockade, def-complete-anticomplete-pure-and-x-sparse-blockades]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Theorem 7.4 and Claim 7.4.1"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

Let $\epsilon\in(0,\tfrac12)$, let $a\geq1$, and let $G$ be a graph with the
property that every induced subgraph $F$ of $G$ with
$|F|\geq\epsilon^{2a}|G|$ contains a complete or anticomplete
$(k,|F|/k^a)$-blockade for some $k\in[2,\epsilon^{-1}]$.

Suppose $q$ is maximal subject to the existence of a pure blockade
$(A_1,\dots,A_q)$ in $G$ whose pattern graph is $P_4$-free, such that
$|A_i|\geq\epsilon^{3a}|G|$ for every $i$ and

$$\sum_{i=1}^{q}|A_i|^{1/a}\geq |G|^{1/a}.$$

Then $q\geq\epsilon^{-2}$.

## Facts & Assumptions

**Given:** The hypotheses of the statement and a maximal blockade
$(A_1,\dots,A_q)$.

## Proof

**Proof technique:** direct.

1.1 Suppose for contradiction that $q<\epsilon^{-2}$. Reorder the blocks so that $|A_1|=\max_i|A_i|$. Then $$q|A_1|^{1/a}\geq \sum_{i=1}^{q}|A_i|^{1/a}\geq |G|^{1/a},$$ so $|A_1|\geq |G|/q^a\geq\epsilon^{2a}|G|$. By the hypothesis on $G$, the induced subgraph $G[A_1]$ contains a complete or anticomplete $(k,|A_1|/k^a)$-blockade $(B_1,\dots,B_k)$ for some $k\in[2,\epsilon^{-1}]$. [assume-contra, given]

2.1 Replace the block $A_1$ by $B_1,\dots,B_k$, and keep the other blocks $A_2,\dots,A_q$. Because $(A_1,\dots,A_q)$ was pure, every outside block is either complete or anticomplete to $A_1$, hence to each $B_j\subseteq A_1$. The new blockade is still pure, its pattern graph is obtained by substituting a complete or edgeless graph for the vertex corresponding to $A_1$, and so it is still $P_4$-free. [step 1.1, given]

3.1 Every new block satisfies $|B_j|\geq |A_1|/k^a\geq \epsilon^a|A_1|\geq\epsilon^{3a}|G|$, while $$\sum_{j=1}^{k}|B_j|^{1/a}\geq k\left(\frac{|A_1|}{k^a}\right)^{1/a}=|A_1|^{1/a}.$$ So the new blockade still satisfies the lower bound on every block and on the total $a$-mass, but it has $q-1+k>q$ blocks. This contradicts the maximality of $q$. [step 2.1, algebra]

4.1 Therefore $q\geq\epsilon^{-2}$. [discharge-contradiction, step 3.1] ∎
