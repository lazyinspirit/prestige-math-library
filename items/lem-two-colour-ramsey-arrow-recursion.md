---
id: lem-two-colour-ramsey-arrow-recursion
kind: lemma
title: "If $m\\to(s-1,t)^2$ and $n\\to(s,t-1)^2$, then $m+n\\to(s,t)^2$ for $s,t\\ge2$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ramsey-colouring-and-arrow-notation, thm-sum-rule, def-finite-cardinality, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "J. Fox et al., Graph Ramsey Theory, Section 2.1"
      url: "https://math.mit.edu/~fox/paper-graphramsey.pdf"
    - title: "R. Diestel, Graph Theory, 6th ed., Chapter 9, Section 9.1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch9.pdf"
pipeline_run: null
---

## Statement

Let $s,t\ge2$. If $m\to(s-1,t)^2$ and $n\to(s,t-1)^2$, then $m+n\to(s,t)^2$ in the notation of [[def-ramsey-colouring-and-arrow-notation]]. Finite sums and cardinalities use [[thm-sum-rule]] and [[def-finite-cardinality]], and complete graphs use [[def-standard-complete-bipartite-path-and-cycle-graphs]].

## Facts & Assumptions

**Given:** Naturals $m,n$ and $s,t\ge2$ satisfying the two displayed arrow hypotheses, and an arbitrary red-blue colouring of the pairs of an $(m+n)$-element vertex set.

[F1] A red-blue colouring witnesses $N\to(s,t)^2$ when it contains a red $s$-set or a blue $t$-set ([[def-ramsey-colouring-and-arrow-notation]]).

## Proof

**Proof technique:** direct.

1.1 Fix a vertex $v$. Partition the other $m+n-1$ vertices into the red neighbours $A$ of $v$ and the blue neighbours $B$ of $v$. If $|A|\ge m$, restrict to an $m$-element subset of $A$ and apply $m\to(s-1,t)^2$; if $|A|<m$, then $|B|\ge n$ by the finite sum rule, so restrict to an $n$-element subset of $B$ and apply $n\to(s,t-1)^2$. [given, F1]

2.1 In the first case, a red $(s-1)$-set in $A$ becomes a red $s$-set after adjoining $v$, while a blue $t$-set already works. In the second case, a blue $(t-1)$-set in $B$ becomes a blue $t$-set after adjoining $v$, while a red $s$-set already works. Hence every colouring has one of the alternatives in [F1], so $m+n\to(s,t)^2$. [step 1.1, F1] ∎

