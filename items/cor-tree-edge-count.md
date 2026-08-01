---
id: cor-tree-edge-count
kind: corollary
title: "A tree on $n\\ge1$ vertices has $n-1$ edges"
status: published
origin: session
deps: [thm-forest-edge-component-count, def-tree-forest-and-leaf, def-connected-graph-and-connected-component]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Reinhard Diestel, Graph Theory, Preview Chapter 1"
      url: "https://diestel-graph-theory.com/basic.html?level=1"
pipeline_run: null
---

## Statement

A tree with $n\ge1$ vertices has exactly $n-1$ edges.

## Facts & Assumptions

**Given:** A tree $T$ with $|V(T)|=n$.

[L1] Every forest satisfies $|V|=|E|+c$ ([[thm-forest-edge-component-count]]).

[F1] A tree is connected and acyclic, so it is a forest with exactly one connected component ([[def-tree-forest-and-leaf]], [[def-connected-graph-and-connected-component]]).

## Proof

**Proof technique:** direct.

1.1 Apply the forest identity to $T$: $n=|E(T)|+1$. [L1, F1]

2.1 Therefore $|E(T)|=n-1$. [step 1.1] ∎
