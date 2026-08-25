---
id: cex-a-union-of-two-disjoint-modules-need-not-be-a-module
kind: counterexample
title: "Two disjoint modules whose union is not a module"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-module-of-a-graph, ex-modules-of-the-four-vertex-path, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

If $M$ and $N$ are disjoint modules of a graph, then $M\cup N$ is a module.

## Facts & Assumptions

**Given:** The path $P_4$ with vertices $0,1,2,3$ in order, together with the two sets $M=\{0\}$ and $N=\{2\}$.

[L1] Singletons are trivial modules ([[def-module-of-a-graph]]).

[L2] In the path $P_4$, the vertices are adjacent exactly along the edges $01$, $12$, and $23$ ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Counterexample

**Proof technique:** constructive.

1.1 The sets $M=\{0\}$ and $N=\{2\}$ are disjoint. [given, construct]

1.2 By [L1], both $M$ and $N$ are modules of $P_4$. [L1]

2.1 The vertex $3$ lies outside $M\cup N$, is adjacent to $2$, and is not adjacent to $0$ by [L2], so it splits $M\cup N$. Hence $M\cup N$ is not a module. [step 1.1, L2]

3.1 Thus $P_4$ with $M$ and $N$ is a counterexample to the claim. [step 1.2, step 2.1, discharge-construct] ∎
