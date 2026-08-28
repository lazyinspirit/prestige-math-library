---
id: prop-bull-free-graphs-are-complement-invariant
kind: proposition
title: "A graph is bull-free if and only if its complement is bull-free"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bull-free-graph, def-graph-isomorphism-and-complement, def-bull-graph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Section 1"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
    - title: "Maria Chudnovsky, The structure of bull-free graphs III: global structure, Section 2.1"
      url: "https://web.math.princeton.edu/~mchudnov/bulls3.pdf"
---

## Statement

A finite simple graph $G$ is bull-free if and only if its complement
$\overline G$ is bull-free.

## Facts & Assumptions

**Given:** A finite simple graph $G$.

[F1] The bull has vertices $\{x_1,x_2,x_3,y,z\}$ and edges $x_1x_2$, $x_2x_3$, $x_1x_3$, $x_1y$, and $x_2z$ ([[def-bull-graph]]).

[F2] In the complement graph, two distinct vertices are adjacent exactly when they are nonadjacent in the original graph ([[def-graph-isomorphism-and-complement]]).

[F3] A graph is bull-free exactly when it has no induced bull ([[def-bull-free-graph]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F2], the complement of the bull is again a bull: the bijection $x_1\mapsto y$, $x_2\mapsto z$, $x_3\mapsto x_3$, $y\mapsto x_2$, $z\mapsto x_1$ sends nonedges of the bull to edges of the bull. [F1, F2, algebra]

2.1 If $G$ contains an induced bull on a vertex set $S$, then $\overline G[S]$ is the complement of that bull, hence another bull by step 1.1. The same argument with $G$ and $\overline G$ interchanged proves the converse implication. [step 1.1, F2]

3.1 Therefore $G$ has an induced bull exactly when $\overline G$ does, so [F3] gives the equivalence of bull-freeness. [step 2.1, F3] ∎
