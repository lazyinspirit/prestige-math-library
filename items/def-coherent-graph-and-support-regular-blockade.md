---
id: def-coherent-graph-and-support-regular-blockade
kind: definition
title: "Coherent graphs and support-regular blockades"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-blockade-length-and-width, def-tree-forest-and-leaf]
aliases: []
landmark: false
sources:
  scraped: []
  references:
    - title: "Chudnovsky, Scott, Seymour and Spirkl, Pure pairs I, Sections 1 and 3"
      url: "https://arxiv.org/pdf/1809.00919"
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

## Definition

A finite graph $G$ is **$\epsilon$-coherent** if $|G|>1$, every vertex has degree less than $\epsilon |G|$, and there are no disjoint anticomplete $A,B\subseteq V(G)$ with $|A|,|B|\ge\epsilon |G|$.

Let $\mathcal B=(B_1,\ldots,B_K)$ be a blockade. A **minor** of $\mathcal B$ is obtained by retaining some blocks in their original order and replacing each retained block by a nonempty subset. It is **equicardinal** when all its blocks have the same size. A copy of an ordered graph $J$ is **$\mathcal B$-rainbow** when its vertices lie in distinct blocks, in the prescribed order. Its **support** is the set of block indices it uses; the **trace** of $J$ is the family of all such supports.

For an integer $\tau\ge1$, $\mathcal B$ is **$\tau$-support-uniform** if for every ordered tree $J$ of at most $\tau$ vertices its trace is either empty or contains every $|J|$-element set of block indices. For $0<\kappa\le1$, it is **$(\kappa,\tau)$-support-invariant** if every contraction of width at least $\kappa$ times its width has exactly the same trace for every such $J$.

Suppose the blocks have common size $W$. A set $X$ outside $B_i$ **$\lambda$-covers** $B_i$ if at least $\lambda W$ vertices of $B_i$ have a neighbor in $X$, and **$\lambda$-misses** $B_i$ if at least $\lambda W$ vertices of $B_i$ have none. The blockade is **$\lambda$-concave** if no $i<j<k$ and $X\subseteq V(\mathcal B)\setminus(B_i\cup B_j\cup B_k)$ exist such that $X$ $\lambda$-covers $B_j$ and $\lambda$-misses both $B_i$ and $B_k$.

For integers $\delta\ge2$, $\eta\ge0$, let $T(\delta,\eta)$ be the rooted complete $\delta$-ary tree of height $\eta$. A rainbow rooted tree is **left-rainbow** if its root is in its leftmost used block; **right-rainbow** is defined symmetrically.
