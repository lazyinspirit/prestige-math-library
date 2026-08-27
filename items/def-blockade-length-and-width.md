---
id: def-blockade-length-and-width
kind: definition
title: "Blockades, their length, their width, and their support"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
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

Let $G$ be a finite graph, let $\ell\in\mathbb N$ with $\ell\ge 1$, and let
$w>0$ be real. An **$(\ell,w)$-blockade** in $G$ is a sequence

$$\mathcal{B}=(B_1,\dots,B_t)$$

of pairwise disjoint nonempty subsets of $V(G)$ such that $t\geq \ell$ and
$|B_i|\geq w$ for every $i\in[t]$.

Each $B_i$ is a **block**. The **length** of $\mathcal{B}$ is $t$, its
**width** is

$$\min\{|B_1|,\dots,|B_t|\},$$

and its **support** is

$$V(\mathcal{B})=B_1\cup\cdots\cup B_t.$$
