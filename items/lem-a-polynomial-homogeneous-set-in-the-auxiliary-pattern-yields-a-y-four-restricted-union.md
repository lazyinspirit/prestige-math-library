---
id: lem-a-polynomial-homogeneous-set-in-the-auxiliary-pattern-yields-a-y-four-restricted-union
kind: lemma
title: "A polynomial homogeneous set in the auxiliary pattern yields a $y^4$-restricted union"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-c-sparse-and-c-restricted-vertex-set, def-directional-and-weak-sparsity-between-vertex-sets, def-edges-between-sets-and-pure-mixed-pairs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, end of the proof of Lemma 2.1"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $y\in(0,\tfrac12)$, let $c\in(0,1)$, and let $a\ge 5/c+1$. Let
$\mathcal B=(B_1,\dots,B_\ell)$ be a blockade in a finite graph $G$ such that:

1. $\ell\ge y^{-a}$;
2. all blocks have the same size;
3. for every distinct $i,j\in[\ell]$, either $B_i$ is complete to $B_j$, or
   both $B_i$ is $y^a$-sparse to $B_j$ and $B_j$ is $y^a$-sparse to $B_i$.

Let $I\subseteq[\ell]$ satisfy $|I|\ge y\ell$, and let $J$ be the graph on $I$
defined by

$$ij\in E(J)\quad\Longleftrightarrow\quad B_i\text{ is complete to }B_j.$$

If $J$ has a clique or stable set $R\subseteq I$ with $|R|=r\ge |I|^c$, then
the induced subgraph on

$$S:=\bigcup_{i\in R} B_i$$

is $y^4$-restricted and has at least the common block size of the selected
blocks.

## Facts & Assumptions

**Given:** The graph $G$, the blockade $\mathcal B$, the subset $I$, the
auxiliary graph $J$, and the homogeneous set $R\subseteq I$ from the Statement.

[L1] A set is $y^4$-restricted exactly when it is $y^4$-sparse or
$y^4$-dense
([[def-c-sparse-and-c-restricted-vertex-set]]).

[L2] If $B_i$ is $y^a$-sparse to $B_j$, then each vertex of $B_i$ has at most
$y^a|B_j|$ neighbours in $B_j$
([[def-directional-and-weak-sparsity-between-vertex-sets]]).

[L3] If $B_i$ is complete to $B_j$, then every vertex of $B_i$ is adjacent to
every vertex of $B_j$
([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Proof

**Proof technique:** estimate the internal and external neighbour counts in the
union of the selected equal-size blocks.

1.1 Let $m$ be the common block size. Since $|I|\ge y\ell$, $\ell\ge y^{-a}$, and $r\ge |I|^c$, we have $r^{-1}\le |I|^{-c}\le (y\ell)^{-c}\le y^{c(a-1)}\le y^5$. [given, algebra]

1.2 Now suppose that $R$ is a stable set in $J$. For any $x\in B_i\subseteq S$, the neighbours of $x$ inside its own block contribute fewer than $m=r^{-1}|S|$ vertices. If $j\in R\setminus\{i\}$, then $ij\notin E(J)$, so the pairs $(B_i,B_j)$ are mutually $y^a$-sparse and [L2] gives at most $y^a|B_j|$ neighbours of $x$ in $B_j$. Summing over all other selected blocks, $x$ has at most $r^{-1}|S|+y^a\sum_{j\in R\setminus\{i\}} |B_j|\le (r^{-1}+y^a)|S|$ neighbours in $S$. [L2, given, algebra]

2.1 First suppose that $R$ is a clique in $J$. Then [L3] makes every two distinct selected blocks complete. For any $x\in B_i\subseteq S$, the only possible nonneighbours of $x$ inside $S$ lie in $B_i$, so $x$ has fewer than $m=r^{-1}|S|$ nonneighbours in $S$. Step 1.1 gives $r^{-1}|S|\le y^5|S|\le y^4|S|$, so $S$ is $y^4$-dense and hence $y^4$-restricted by [L1]. [step 1.1, L1, L3]

2.2 Since $a\ge 5/c+1$ and $y<\tfrac12$, step 1.1 yields $r^{-1}+y^a\le y^5+y^a\le y^5+y^5\le y^4$. Hence every vertex of $S$ has at most $y^4|S|$ neighbours inside $S$, so $S$ is $y^4$-sparse and therefore $y^4$-restricted by [L1]. [step 1.1, step 1.2, L1, algebra]

3.1 Steps 2.1 and 2.2 show that whether $R$ is a clique or a stable set, the union $S$ is $y^4$-restricted. Also $|S|=rm\ge m$, so $S$ has at least the common block size. [step 2.1, step 2.2] ∎
