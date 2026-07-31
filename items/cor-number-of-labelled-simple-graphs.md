---
id: cor-number-of-labelled-simple-graphs
kind: corollary
title: "There are $2^{\\binom{n}{2}}$ simple graphs on a fixed labelled $n$-element vertex set"
status: published
origin: session
deps: [def-finite-simple-graph, thm-two-element-subsets-count, cor-cardinality-of-the-power-set]
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

On a fixed labelled $n$-element vertex set $V$, there are exactly
$2^{\binom n2}$ finite simple graphs.

## Facts & Assumptions

**Given:** A fixed finite set $V$ with $|V|=n$.

[F1] A simple graph on $V$ is uniquely specified by choosing an edge set $E\subseteq[V]^2$ ([[def-finite-simple-graph]]).

[L1] The set $[V]^2$ has $\binom n2$ elements ([[thm-two-element-subsets-count]]).

[L2] A finite set with $m$ elements has a power set with $2^m$ elements ([[cor-cardinality-of-the-power-set]]).

## Proof

**Proof technique:** direct.

1.1 Sending a graph $(V,E)$ to its edge set is a bijection from the simple graphs on the fixed labelled set $V$ to the power set $\mathcal P([V]^2)$, by [F1]. [F1]

2.1 By [L1] and [L2], $|\mathcal P([V]^2)|=2^{|[V]^2|}=2^{\binom n2}$. Combining with step 1.1 gives the stated count. [step 1.1, L1, L2] ∎
