---
id: lem-colouring-embeds-a-graph-in-a-balanced-blowup
kind: lemma
title: "Every finite graph $H$ with $\\chi(H)=r$ is an ordinary subgraph of $K_r[s]$ for some $s$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-proper-vertex-colouring-and-chromatic-number, def-extremal-number-turan-graph-and-blowup, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
pipeline_run: null
---

## Statement

If a finite graph $H$ has $\chi(H)=r$, then $H$ is an ordinary subgraph of $K_r[s]$ for some $s\ge1$. For the null graph, $r=0$ and the assertion uses the convention $K_0[1]$ is null.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] A proper $k$-vertex-colouring is a map $c:V\to k$ with $c(u)\ne c(v)$ for every edge $\{u,v\}$, its fibres are the colour classes, and $\chi(G)=\min\{k\in\mathbb N:G\text{ is }k\text{-colourable}\}$ ([[def-proper-vertex-colouring-and-chromatic-number]]).

[F2] The balanced blowup $H[s]$ replaces each vertex by an independent $s$-set and each edge by all cross edges between the corresponding parts ([[def-extremal-number-turan-graph-and-blowup]]).

[F3] Every finite set has a unique natural-number cardinality ([[def-finite-cardinality]]).

## Proof

**Proof technique:** place colour classes into blowup parts.

1.1 If $H$ is null, it embeds in $K_0[1]$. Otherwise choose a proper colouring with colours $1,\ldots,r$ and let $s\ge1$ be the largest colour-class size. Inject each colour class into the corresponding size-$s$ independent part of $K_r[s]$. [given, F1, F2, F3]

2.1 Every edge of $H$ joins vertices of different colours, and all cross-part edges occur in $K_r[s]$. The combined injection therefore preserves every edge and is an ordinary-subgraph embedding. [step 1.1, given, F1, F2] ∎
