---
id: lem-replicating-a-vertex-of-a-perfect-graph-preserves-perfection
kind: lemma
title: "Replicating a vertex of a perfect graph preserves perfection"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-perfect-graph-for-the-bull-route, def-clique-stable-set-and-numbers, def-proper-vertex-colouring-and-chromatic-number, def-subgraph-induced-subgraph-and-spanning-subgraph]
proof_strategy: direct
sources:
  references:
    - title: "Reinhard Diestel, Graph Theory, 5th ed., Lemma 5.5.5, pp. 142-143"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch5.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical new_item review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-08-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $G$ be a finite perfect graph and let $x\in V(G)$. Form $G'$ by adding a
new vertex $x'$ adjacent exactly to $x$ and every neighbor of $x$. Then $G'$
is perfect. In particular, replacing $x$ by any nonempty finite clique of
true twins preserves perfection, by repeated replication.

## Facts & Assumptions

**Given:** A finite perfect graph $G$, a vertex $x\in V(G)$, and its replication
$G'$ as in the Statement.

[L1] A graph is perfect when every induced subgraph $H$ has
$\chi(H)=\omega(H)$ ([[def-perfect-graph-for-the-bull-route]]).

[L2] A proper coloring partitions the vertices into stable color classes, and
a clique meets each color class in at most one vertex
([[def-proper-vertex-colouring-and-chromatic-number]],
[[def-clique-stable-set-and-numbers]]).

[L3] Deleting vertices gives an induced subgraph, so every induced subgraph of
a perfect graph is perfect ([[def-subgraph-induced-subgraph-and-spanning-subgraph]],
[[def-perfect-graph-for-the-bull-route]]).

## Proof

**Proof technique:** direct.

1.1 Induct on $|V(G)|$. For $G=K_1$, its replication is $K_2$, whose induced subgraphs have equal chromatic and clique numbers. Assume the assertion for smaller perfect graphs. Every proper induced subgraph of $G'$ either contains at most one of $x,x'$ and is isomorphic to an induced subgraph of $G$, or contains both and is the replication of $x$ in a proper induced subgraph of $G$. It is perfect by [L3] or by the induction hypothesis, respectively. Thus it remains to show $\chi(G')=\omega(G')$. [L1, L3, induction]

2.1 Put $w=\omega(G)=\chi(G)$. Every clique of $G'$ contains at most the one additional vertex $x'$, so $\omega(G')$ is $w$ or $w+1$. If it is $w+1$, color $G$ with $w$ colors and give $x'$ a new color. Then $\chi(G')\le w+1=\omega(G')$, and the reverse inequality holds in every graph. [L1, L2, step 1.1]

3.1 Suppose $\omega(G')=w$. No $w$-clique of $G$ contains $x$, since its union with $x'$ would be a $(w+1)$-clique of $G'$. Fix a proper $w$-coloring of $G$, and let $X$ be the color class of $x$. Every $w$-clique of $G$ meets $X$ exactly once by [L2], and that meeting vertex is not $x$. Hence the induced graph $H=G-(X\setminus\{x\})$ has no $w$-clique and $\omega(H)\le w-1$. Since $H$ is perfect by [L3], it admits a coloring with at most $w-1$ colors. [L1, L2, L3, step 2.1, choose]

4.1 The remaining set $(X\setminus\{x\})\cup\{x'\}$ is stable in $G'$: $X$ was a color class, and $x'$ is adjacent outside $x$ only to neighbors of $x$, none of which lies in $X$. Give that set one new color, extending the coloring of $H$ to a $w$-coloring of $G'$. Thus $\chi(G')\le w=\omega(G')$; the opposite inequality is universal. With step 2.1, this proves $G'$ perfect by step 1.1. To replace $x$ by a clique of $k\ge1$ true twins, replicate $x$ successively $k-1$ times; each step starts from a perfect graph and creates one further twin. [step 1.1, step 2.1, step 3.1, L1, L2, induction] ∎
## Source notes

Diestel, Lemma 5.5.5, pp. 142-143, gives the same induction and the key
color-class argument. The PDF was read in full for this lemma. The finite
clique-of-twins conclusion is the explicit iteration needed below.
