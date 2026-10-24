---
id: lem-leaf-extension-copy-or-sparse-pair
kind: lemma
title: "A sparse host has many leaf extensions, few smaller copies, or a sparse pair"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-induced-copy-number, def-directional-and-weak-sparsity-between-vertex-sets, def-tree-forest-and-leaf]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Nguyen, Scott and Seymour, Induced subgraph density IV, Lemma 5.1"
      url: "https://arxiv.org/pdf/2307.06455"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical new_item review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-07-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $H$ be an ordinary finite graph with $h=|V(H)|\ge3$ and leaf $v$, and
put $H'=H-v$. Let $a\ge2$ and $0<x\le y\le(2h)^{-1}$. If the maximum degree
of a finite graph $G$ on $n\ge1$ vertices is at most $yn$, then at least one
of the following holds:

1. $\operatorname{ind}_H(G)>x^{2a+h}n^h$;
2. some $S\subseteq V(G)$ has $|S|\ge yn$ and
   $\operatorname{ind}_{H'}(G[S])\le y^{a-2}|S|^{h-1}$;
3. there are disjoint $A,B\subseteq V(G)$ with $|A|\ge y^a n$,
   $|B|\ge(1-hy)n$, and $B$ is $x$-sparse to $A$.

## Facts & Assumptions

**Given:** The graph, leaf and parameters in the statement. Induced-copy counts count labelled induced embeddings.

[F1] An induced embedding of $H'$ is an induced embedding of $J:=H-\{u,v\}$, where $u$ is the unique neighbor of $v$, plus one image for $u$. Once the image of $J$ and a candidate image for $u$ are fixed, a vertex outside their image extends the embedding to $H$ exactly when it is adjacent to the image of $u$ and nonadjacent to the image of $J$. This uses only the adjacency of the leaf, so no ordering of either graph is needed.

## Proof

**Proof technique:** counting and contradiction.

1.1 Suppose outcomes 2 and 3 fail. If $yn\le1$, choose a singleton $S$; because $|H'|\ge2$, it has no copy of $H'$, giving outcome 2. If $y^a n\le1\le yn$, take any vertex as $A$ and all its nonneighbors outside $A$ as $B$. Then $|A|\ge y^a n$ and $|B|\ge n-1-yn\ge(1-hy)n$, since $(h-1)yn\ge1$; moreover $B$ is $x$-sparse to $A$. Thus failure of both outcomes implies $y^a n>1$ and $yn>1$. In particular $y^2n\ge y^a n>1$, so $yn>2$. [given, F1]

1.2 Choose any set $S$ of $\lceil yn\rceil$ vertices. For each induced embedding $\phi:J\hookrightarrow G[S]$, let $I_\phi$ be the embeddings of $H'$ into $G[S]$ restricting to $\phi$; the image of $u$ distinguishes their members. Let $T$ be the $\phi$ for which $|I_\phi|\ge y^a n$. Failure of outcome 2 gives $$\operatorname{ind}_{H'}(G[S])>y^{a-2}|S|^{h-1}.$$ There are at most $|S|^{h-2}$ maps $J\to S$, while each $\phi\notin T$ has fewer than $y^a n\le y^{a-1}|S|$ extensions. As $y\le1/2$, the embeddings over $T$ therefore number more than $(y^{a-2}-y^{a-1})|S|^{h-1}\ge y^{a-1}|S|^{h-1}$. Each $\phi$ has at most $|S|$ extensions, so $$|T|>y^{a-1}|S|^{h-2}.\tag{1}$$ [given, algebra]

2.1 Fix $\phi\in T$ and let $P=\phi(V(J))$. Let $A'$ be the images of $u$ in $I_\phi$, so $|A'|\ge y^a n$, and choose $A\subseteq A'$ of size $\lceil y^a n\rceil$. Let $B$ consist of vertices outside $S$ with no neighbor in $P$. At most $(h-2)yn$ vertices are excluded by adjacency to $P$, whence $$|B|\ge n-\lceil yn\rceil-(h-2)yn \ge(1-(h-1)y)n-1.\tag{2}$$ Because outcome 3 fails, fewer than $(1-hy)n$ vertices of $B$ have at most $x|A|$ neighbors in $A$; otherwise those vertices, with $A$, would give that outcome. By (2), more than $yn-1\ge y^2n$ vertices of $B$ have more than $x|A|$ neighbors in $A$. The last inequality follows from $y^2n>1$ and $y\le1/2$. Hence there are more than $$xy^2n|A|\ge xy^{a+2}n^2\ge x^{a+3}n^2\tag{3}$$ edges from $B$ to $A$. [step 1.1, F1, algebra]

3.1 Every edge in (3), together with $\phi$, yields a distinct induced embedding of $H$: its endpoint in $A$ supplies $u$, its endpoint in $B$ supplies $v$, and the latter has no neighbor in $P$. Different $\phi$ give different embeddings because restriction to $J$ recovers $\phi$. Using (1), (3), $|S|\ge yn$, and $x\le y$, we get $$\operatorname{ind}_H(G) >y^{a-1}|S|^{h-2}x^{a+3}n^2 \ge x^{a+3}y^{a+h-3}n^h \ge x^{2a+h}n^h.$$ This is outcome 1. [step 1.2, step 2.1, F1, algebra] ∎
