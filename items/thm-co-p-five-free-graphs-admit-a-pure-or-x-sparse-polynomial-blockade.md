---
id: thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade
kind: theorem
title: "$\\overline{P_5}$-free graphs admit a pure or $x$-sparse polynomial blockade"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-standard-complete-bipartite-path-and-cycle-graphs,
       def-h-free-and-family-free-graph,
       def-graph-isomorphism-and-complement,
       def-blockade-length-and-width,
       def-complete-anticomplete-pure-and-x-sparse-blockades]
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
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Lemma 5.5"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

There exists $d\ge 40$ such that for every $x\in(0,2^{-d})$ and every
$\overline{P_5}$-free graph $G$ with $|V(G)|\ge x^{-d}$, there exists
an integer $k\in[2,x^{-1}]$ and either

1. a pure $(k,|V(G)|/k^d)$-blockade in $G$; or
2. an $x$-sparse $(k,|V(G)|/k^d)$-blockade in $G$.

## Facts & Assumptions

**Given:** After the exponent $d$ is chosen below, a parameter
$x\in(0,2^{-d})$ and a $\overline{P_5}$-free graph $G$ with
$|V(G)|\ge x^{-d}$.

[L1] Lemma 5.5 of the cited source supplies an exponent
$D\ge40$ such that, under its convention allowing a real blockade-length
threshold, there is some $r\in[2,x^{-1}]$ and a pure or $x$-sparse
$(r,|V(G)|/r^D)$-blockade whenever $x\in(0,2^{-D})$ and
$|V(G)|\ge x^{-D}$.

[F2] In this library, the first parameter $\ell$ of an $(\ell,w)$-blockade
may be any real number at least $1$; its integral actual length must be at
least $\ell$ (equivalently, at least $\lceil\ell\rceil$)
([[def-blockade-length-and-width]]).

## Proof

**Proof technique:** translate the cited source theorem.

1.1 Let $D\ge40$ be supplied by [L1], and set $d:=2D$. Fix $x$ and $G$ as in the Statement. Since $d\ge D$, one has $x<2^{-D}$ and $|V(G)|\ge x^{-D}$. Thus [L1] gives a real $r\in[2,x^{-1}]$ and a pure or $x$-sparse blockade whose actual length is at least $r$ and whose width is at least $|V(G)|/r^D$. [L1, given, algebra]

2.1 Put $k:=\lfloor r\rfloor$. Then $k$ is an integer and $2\le k\le r\le x^{-1}$. The blockade's integral actual length, being at least $r$, is in particular at least $k$, so [F2] makes it a $(k,|V(G)|/r^D)$-blockade. [step 1.1, F2, algebra]

3.1 Since $k\ge2$ and $k\le r<k+1$, one has $r^D<(k+1)^D\le(3k/2)^D\le k^{2D}=k^d$. Consequently $|V(G)|/r^D\ge |V(G)|/k^d$. The blockade from step 1.1 is therefore a pure or $x$-sparse $(k,|V(G)|/k^d)$-blockade in the library's sense. [step 1.1, step 2.1, algebra]

4.1 The chosen $d=2D$ satisfies $d\ge40$, and steps 1.1--3.1 prove the stated conclusion for every admissible $x$ and $G$. [step 1.1, step 3.1] ∎
