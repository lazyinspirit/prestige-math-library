---
id: lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs
kind: lemma
title: "An iterative sparsification step for sparse $\\overline{P_5}$-free graphs"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-an-x-sparse-blockade-iteration-yields-further-sparsification-or-a-pure-blockade,
       cor-rodl-every-h-free-graph-has-a-linear-restricted-set,
       lem-restrictedness-is-complement-invariant,
       def-c-sparse-and-c-restricted-vertex-set,
       def-blockade-length-and-width]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Lemma 5.4"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

Put $c:=2^{-8}$. Let $x\in(0,c^5)$, and let $G$ be a $c^{16}$-sparse
$\overline{P_5}$-free graph with $|V(G)|\ge x^{-7}$. Then at least one of the
following holds:

1. for some $k\in[c^{-1},x^{-1}]$, there is a pure
   $$(k,|V(G)|/k^{34})\text{-blockade}$$
   in $G$; or
2. for some $y\in[x,c^5]$, there is an $x$-sparse
   $$(y^{-1},y^7|V(G)|)\text{-blockade}$$
   in $G$.

## Facts & Assumptions

**Given:** The constant $c=2^{-8}$, a parameter $x\in(0,c^5)$, and a
$c^{16}$-sparse $\overline{P_5}$-free graph $G$ with
$|V(G)|\ge x^{-7}$.

[F1] Lemma 5.4 of Nguyen, Scott, and Seymour's cited paper gives the displayed
two outcomes with these constants and exponents. Its statement prints
$|G|\ge y^{-7}$ before $y$ is bound; the proof shows that the intended
hypothesis is $|G|\ge x^{-7}$ by using it to deduce
$cx|G|\ge x^2|G|\ge x^{-5}$.

[F2] The source proof chooses a minimal threshold $y\in[cx,c^5]$, applies its
preceding three-outcome sparse-blockade lemma, and rules out the
deeper-sparsification branch by minimality. The remaining branches give the
pure blockade in outcome 1 or the $x$-sparse blockade in outcome 2.

## Proof

**Proof technique:** translate the cited source lemma.

1.1 Apply the corrected, well-formed reading of the cited source lemma recorded in [F1]. Its two alternatives are exactly outcomes 1 and 2, and [F2] records the minimal-threshold argument establishing them. [F1, F2, given, cases]

2.1 Therefore the present statement follows. [step 1.1] ∎
