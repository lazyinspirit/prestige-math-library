---
id: cor-few-induced-copies-force-a-linearly-large-induced-subgraph-with-bounded-maximum-degree
kind: corollary
title: "Few induced copies force a linearly large induced subgraph with bounded maximum degree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-nikiforov-few-induced-copies-force-a-linear-restricted-set,
       lem-a-sparse-graph-has-a-prescribed-size-induced-subgraph-of-bounded-maximum-degree,
       def-induced-embedding-and-induced-copy,
       def-graph-isomorphism-and-complement,
       def-edge-density-between-vertex-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, Theorem 6.5"
      url: "https://arxiv.org/html/2102.04994v1"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Theorem 1.2"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $H$ be a finite graph and let $\epsilon\in(0,\tfrac12)$. Then there exists
$\delta>0$ such that every nonempty finite graph $G$ with

$$\operatorname{ind}_H(G)<(\delta |V(G)|)^{|V(H)|}$$

has a set $X\subseteq V(G)$ with $|X|\geq \delta |V(G)|$ for which one of
$G[X]$ or $\overline G[X]$ has maximum degree at most $\epsilon |X|$.

## Facts & Assumptions

**Given:** A finite graph $H$, a real $\epsilon\in(0,\tfrac12)$, and a
nonempty finite graph $G$ with
$\operatorname{ind}_H(G)<(\delta |V(G)|)^{|V(H)|}$.

[L1] Nikiforov's theorem yields $\delta_0>0$ such that the induced-copy bound
forces an $\epsilon/4$-restricted set of size at least $\delta_0|V(G)|$
([[thm-nikiforov-few-induced-copies-force-a-linear-restricted-set]]).

[L2] In a sparse graph, any prescribed size up to half the order can be chosen
so that the induced subgraph has proportionally bounded maximum degree
([[lem-a-sparse-graph-has-a-prescribed-size-induced-subgraph-of-bounded-maximum-degree]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] with parameter $\epsilon/4$ and let $\delta:=\delta_0/2$. Then there is a set $Z\subseteq V(G)$ with $|Z|\geq 2\delta|V(G)|$ such that either $G[Z]$ or $\overline G[Z]$ is $(\epsilon/4)$-sparse. [L1, choose, given]

2.1 Let $m:=\lceil \delta |V(G)|\rceil$. Since $|Z|\geq 2\delta|V(G)|$, we have $m\leq (|Z|+1)/2$. Applying [L2] inside the sparse side on $Z$ gives $X\subseteq Z$ with $|X|=m\geq \delta|V(G)|$ such that the same side has maximum degree at most $4(\epsilon/4)(m-1)\leq \epsilon|X|$. [step 1.1, L2, algebra]

3.1 Thus one of $G[X]$ or $\overline G[X]$ has maximum degree at most $\epsilon|X|$, as required. [step 2.1] ∎
