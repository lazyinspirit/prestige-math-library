---
id: cor-complete-graph-edge-count
kind: corollary
title: "The complete graph on an $n$-element vertex set has $\\binom{n}{2}$ edges"
status: published
origin: session
deps: [def-standard-complete-bipartite-path-and-cycle-graphs, thm-two-element-subsets-count]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, Chapter 1 preview"
      url: "https://diestel-graph-theory.com/basic.html"
pipeline_run: null
---

## Statement

If $V$ is an $n$-element set, then the complete graph $K_V$ has exactly
$\binom n2$ edges.

## Facts & Assumptions

**Given:** A finite set $V$ with $|V|=n$.

[F1] The edge set of $K_V$ is $[V]^2$, the set of all two-element subsets of $V$ ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L1] An $n$-element set has exactly $\binom n2$ two-element subsets ([[thm-two-element-subsets-count]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $E(K_V)=[V]^2$. [F1]

2.1 By [L1], $|[V]^2|=\binom n2$, so step 1.1 gives $|E(K_V)|=\binom n2$. [step 1.1, L1] ∎
