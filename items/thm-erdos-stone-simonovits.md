---
id: thm-erdos-stone-simonovits
kind: theorem
title: "Erdős–Stone–Simonovits: $\\operatorname{ex}(n,H)=(1-1/(\\chi(H)-1)+o(1))\\binom n2$ for every graph with an edge"
status: draft
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

**Given:** The embedding lemma [[lem-colouring-embeds-a-graph-in-a-balanced-blowup]], balanced-blowup Erdős–Stone [[thm-erdos-stone-for-balanced-blowups]], exact Turán theorem [[thm-turan-exact-and-unique]], and chromatic number from [[def-proper-vertex-colouring-and-chromatic-number]].

## Proof

**Proof technique:** sandwich $H$ between a Turán graph and a balanced blowup.

1.1 Every $(r-1)$-partite graph is $H$-free, since every subgraph of it is $(r-1)$-colourable while $\chi(H)=r$. Therefore $T_{n,r-1}$ gives $\liminf_{n\to\infty}\operatorname{ex}(n,H)/\binom n2\ge1-1/(r-1)$. [given]

1.2 The embedding lemma gives an $s\ge1$ with $H\subseteq K_r[s]$. Hence every $H$-free graph is $K_r[s]$-free, and balanced-blowup Erdős–Stone gives $\limsup_{n\to\infty}\operatorname{ex}(n,H)/\binom n2\le1-1/(r-1)$. [given]

2.1 The two bounds agree, proving the limit and the $o(1)$ formulation. When $r=2$, the expression is $0$ and the same proof uses $T_{n,1}$ for the lower bound and $K_2[s]$ for the upper bound, so the bipartite boundary is included. [step 1.1, step 1.2, given] ∎
