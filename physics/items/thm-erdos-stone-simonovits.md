---
id: thm-erdos-stone-simonovits
kind: theorem
title: "Erdős–Stone–Simonovits: $\\operatorname{ex}(n,H)=(1-1/(\\chi(H)-1)+o(1))\\binom n2$ for every graph with an edge"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-colouring-embeds-a-graph-in-a-balanced-blowup, thm-erdos-stone-for-balanced-blowups, thm-turan-exact-and-unique, def-proper-vertex-colouring-and-chromatic-number]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
    - title: "Reinhard Diestel, Graph Theory, Chapter 7"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch7.pdf"
pipeline_run: null
---

## Statement

Let $H$ be a finite graph with at least one edge and put $r=\chi(H)\ge2$. Then

$$\operatorname{ex}(n,H)=\left(1-\frac1{r-1}+o(1)\right)\binom n2.$$

Equivalently,

$$\lim_{n\to\infty}\frac{\operatorname{ex}(n,H)}{\binom n2}=1-\frac1{\chi(H)-1}.$$

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] A proper $k$-vertex-colouring is a map $c:V\to k$ with $c(u)\ne c(v)$ for every edge $\{u,v\}$, its fibres are the colour classes, and $\chi(G)=\min\{k\in\mathbb N:G\text{ is }k\text{-colourable}\}$ ([[def-proper-vertex-colouring-and-chromatic-number]]).

[F2] For $n\in\mathbb N$ and $r\ge1$, Turán's theorem gives $\operatorname{ex}(n,K_{r+1})=e(T_{n,r})$, and an $n$-vertex $K_{r+1}$-free graph attains equality exactly when it is isomorphic to $T_{n,r}$ ([[thm-turan-exact-and-unique]]).

[F3] Every finite graph of chromatic number $r$ embeds as an ordinary subgraph of $K_r[s]$ for some $s\ge1$ ([[lem-colouring-embeds-a-graph-in-a-balanced-blowup]]).

[F4] For $r\ge2$ and $s\ge1$, $\pi(K_r[s])=1-1/(r-1)$ ([[thm-erdos-stone-for-balanced-blowups]]).

## Proof

**Proof technique:** sandwich $H$ between a Turán graph and a balanced blowup.

1.1 Every $(r-1)$-partite graph is $H$-free, since every subgraph of it is $(r-1)$-colourable while $\chi(H)=r$. Therefore $T_{n,r-1}$ gives $\liminf_{n\to\infty}\operatorname{ex}(n,H)/\binom n2\ge1-1/(r-1)$. [given, F1, F2]

1.2 The embedding lemma gives an $s\ge1$ with $H\subseteq K_r[s]$. Hence every $H$-free graph is $K_r[s]$-free, and balanced-blowup Erdős–Stone gives $\limsup_{n\to\infty}\operatorname{ex}(n,H)/\binom n2\le1-1/(r-1)$. [given, F3, F4]

2.1 The two bounds agree, proving the limit and the $o(1)$ formulation. When $r=2$, the expression is $0$ and the same proof uses $T_{n,1}$ for the lower bound and $K_2[s]$ for the upper bound, so the bipartite boundary is included. [step 1.1, step 1.2, given, F4] ∎
