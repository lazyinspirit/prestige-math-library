---
id: def-blockade-length-and-width
kind: definition
title: "Blockades, their length, their width, and their support"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
aliases: []
landmark: false
verification:
  audited: 2026-08-27
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "T. H. Nguyen, Notes on Recent Work on the Erdős–Hajnal Conjecture"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Definition

Let $G$ be a finite graph, and let $\ell,w$ be real with $\ell\ge 1$ and
$w>0$. An **$(\ell,w)$-blockade** in $G$ is a sequence

$$\mathcal{B}=(B_1,\dots,B_t)$$

of pairwise disjoint nonempty subsets of $V(G)$ such that $t\geq \ell$ and
$|B_i|\geq w$ for every $i\in[t]$.

Since the actual length $t$ is an integer, a real lower bound $t\geq\ell$ is
equivalent to $t\geq\lceil\ell\rceil$. Thus this notation includes the usual
integer length parameters while also allowing the real thresholds, such as
$\epsilon^{-1}$, used in blockade estimates.

Each $B_i$ is a **block**. The **length** of $\mathcal{B}$ is $t$, its
**width** is

$$\min\{|B_1|,\dots,|B_t|\},$$

and its **support** is

$$V(\mathcal{B})=B_1\cup\cdots\cup B_t.$$
