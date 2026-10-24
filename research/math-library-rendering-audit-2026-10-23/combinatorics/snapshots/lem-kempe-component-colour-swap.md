---
id: lem-kempe-component-colour-swap
kind: lemma
title: "Swapping the two colours on one Kempe component preserves a proper colouring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-kempe-chain, def-proper-vertex-colouring-and-chromatic-number, def-connected-graph-and-connected-component]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Proposition 5.1.2"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch5.pdf"
pipeline_run: null
---

## Statement

Let $c$ be a proper colouring, let $a\ne b$, and let $K$ be one $a$-$b$ Kempe component ([[def-kempe-chain]], [[def-connected-graph-and-connected-component]]). Interchanging $a$ and $b$ on $K$ and leaving all other colours fixed gives another proper colouring.

## Facts & Assumptions

**Given:** The colouring $c$, colours $a,b$, and Kempe component $K$.

[F1] Properness means $c(u)\ne c(v)$ whenever $\{u,v\}\in E$ ([[def-proper-vertex-colouring-and-chromatic-number]]).

[F2] A connected component is an induced subgraph on its maximal connected vertex set ([[def-connected-graph-and-connected-component]]).

## Proof

**Proof technique:** direct.

1.1 Define $c'$ by swapping $a$ and $b$ at vertices of $K$ and setting $c'=c$ elsewhere. [F1, F2]

2.1 An edge with both endpoints in $K$ still has opposite $a,b$ colours after the swap, and an edge with neither endpoint in $K$ is unchanged. If exactly one endpoint lies in $K$, the other endpoint cannot have colour $a$ or $b$, for then that edge would place it in the same induced connected component $K$. Its colour is therefore unaffected and differs from the swapped colour. Thus every edge remains proper. [step 1.1, F1, F2] ∎

