---
id: prop-perfect-graphs-are-one-narrow
kind: proposition
title: "Every perfect graph is 1-narrow"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-alpha-narrow-graph, def-perfect-graph-for-the-bull-route, def-good-function-on-a-graph]
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
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Section 2.1"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Statement

Every perfect finite graph is one-narrow.

## Facts & Assumptions

**Given:** A perfect finite graph $G$.

[F1] A graph is one-narrow when every good function on it has total weight at most $1$ ([[def-alpha-narrow-graph]]).

[F2] A good function has weight at most $1$ on every perfect induced subgraph ([[def-alpha-narrow-graph]], [[def-good-function-on-a-graph]]).

[F3] A perfect graph is one of its own perfect induced subgraphs ([[def-perfect-graph-for-the-bull-route]]).

## Proof

**Proof technique:** direct.

1.1 Let $g$ be a good function on $G$. By [F3], the graph $G$ itself is a perfect induced subgraph of $G$, so [F2] gives $\sum_{v\in V(G)} g(v)\le1$. [F2, F3]

2.1 Since every good function has total weight at most $1$, [F1] shows that $G$ is one-narrow. [step 1.1, F1] ∎
