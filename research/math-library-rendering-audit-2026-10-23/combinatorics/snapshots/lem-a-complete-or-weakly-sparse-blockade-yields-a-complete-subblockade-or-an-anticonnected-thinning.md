---
id: lem-a-complete-or-weakly-sparse-blockade-yields-a-complete-subblockade-or-an-anticonnected-thinning
kind: lemma
title: "A complete-or-weakly-sparse blockade yields a complete subblockade or an anticonnected thinning"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-a-complete-or-weakly-sparse-blockade-can-be-thinned-to-equal-subblocks-with-directional-sparsity, def-anticonnected-graph-and-anticonnected-component, def-blockade-length-and-width, def-directional-and-weak-sparsity-between-vertex-sets, lem-components-are-anticomplete-and-anticomponents-complete]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Claim 7.1.1"
      url: "https://arxiv.org/html/2312.15333v2"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdos-Hajnal beyond the five-vertex path, proof of Lemma 3.1"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $\epsilon\in(0,\tfrac14]$, let $\ell=\lceil\epsilon^{-1}\rceil$, and let

$$ \mathcal D=(D_1,\ldots,D_\ell) $$

be a blockade in a graph $G$ such that all blocks have the same size $q>1$ and
every distinct pair $(D_i,D_j)$ is either complete or mutually $\eta$-sparse.
Then one of the following holds:

1. $G$ contains a complete $(\ell,q/\ell^2)$-blockade; or
2. there exist anticonnected subsets $B_i\subseteq D_i$ with
   $|B_i|=\lceil q/\ell\rceil$ for all $i\in[\ell]$ such that every distinct
   pair $(B_i,B_j)$ is either complete or mutually $(\eta\ell)$-sparse.

## Facts & Assumptions

**Given:** The blockade $\mathcal D=(D_1,\ldots,D_\ell)$ of common block size $q>1$ and the complete or mutually $\eta$-sparse hypothesis on each distinct pair.

[L1] Distinct anticonnected components are complete to one another ([[lem-components-are-anticomplete-and-anticomponents-complete]]).

[L2] An anticonnected component is, by definition, an inclusion-maximal anticonnected induced subgraph ([[def-anticonnected-graph-and-anticonnected-component]]).

## Proof

**Proof technique:** inspect each block's anticonnected components.

1.1 Suppose some block $D_i$ has no anticonnected component of size at least $q/\ell$. Partition the anticonnected components of $G[D_i]$ into a minimum number of nonempty unions $S_0,\ldots,S_r$, each of size less than $q/\ell$, ordered so that $|S_0|\le \cdots \le |S_r|$. Since the unions cover $D_i$ and each has size less than $q/\ell$, one has $r+1>\ell$. Minimality implies $|S_{t-1}|+|S_t|\ge q/\ell$ for every $t\ge 1$, for otherwise those two unions could be merged. Hence $|S_t|\ge q/(2\ell)\ge q/\ell^2$ for every $t\ge 1$, because $\ell\ge 2$. Distinct anticonnected components are complete to one another by [L1], so distinct unions of them are also complete to one another. Therefore $S_1,\ldots,S_\ell$ form a complete $(\ell,q/\ell^2)$-blockade, proving outcome 1. [given, choose, L1, algebra]

2.1 We may therefore assume that every $D_i$ has an anticonnected component $C_i$ of size at least $q/\ell$. By [L2], the complement $\overline{G[C_i]}$ is connected. Choose a spanning tree of $\overline{G[C_i]}$, and repeatedly delete leaves until exactly $\lceil q/\ell\rceil$ vertices remain. The remaining tree is connected, so the induced subgraph of $\overline{G[C_i]}$ on those vertices is connected as well. Calling that vertex set $B_i$, we have $B_i\subseteq C_i$, $|B_i|=\lceil q/\ell\rceil$, and $G[B_i]$ anticonnected. [step 1.1, choose, L2]

3.1 If $(D_i,D_j)$ is complete, then $(B_i,B_j)$ is complete because $B_i\subseteq D_i$ and $B_j\subseteq D_j$. If $(D_i,D_j)$ is mutually $\eta$-sparse, every vertex of $B_i$ has at most $\eta|D_j|=\eta q$ neighbours in $D_j$, hence at most $\eta q\le \eta\ell|B_j|$ neighbours in $B_j$ because $|B_j|\ge q/\ell$; the same argument with $i$ and $j$ exchanged gives the reverse direction. Thus every noncomplete pair is mutually $(\eta\ell)$-sparse. [step 2.1, algebra]

4.1 Step 1.1 yields outcome 1, while steps 2.1 and 3.1 yield outcome 2. Therefore one of the two stated outcomes holds. [step 1.1, step 2.1, step 3.1] ∎
