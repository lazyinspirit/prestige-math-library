---
id: cex-a-difference-of-nested-modules-need-not-be-a-module
kind: counterexample
title: "A difference of two nested modules that is not a module"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-module-of-a-graph, lem-differences-of-overlapping-modules-are-modules, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

If $N\subseteq M$ are modules of a graph, then $M\setminus N$ is a module.

## Facts & Assumptions

**Given:** The graph on vertices $a,b,c,d$ with exactly the two edges $ca$ and $cb$, together with $N=\{a,b\}$ and $M=\{a,b,c,d\}$.

[L1] A set is a module when every outside vertex is complete or anticomplete to it ([[def-module-of-a-graph]]).

[L2] The difference lemma requires overlapping modules, not merely nested ones ([[lem-differences-of-overlapping-modules-are-modules]]).

## Counterexample

**Proof technique:** constructive.

1.1 The set $N=\{a,b\}$ is a module: the only outside vertices are $c$ and $d$, and $c$ is complete to $N$ while $d$ is anticomplete to $N$. [L1, given, construct]

1.2 The set $M$ is the whole vertex set, so it is a module vacuously. [L1, given]

2.1 The difference $M\setminus N=\{c,d\}$ is not a module, because the vertex $a$ is adjacent to $c$ and not to $d$. [step 1.1, given]

3.1 Here $N\subseteq M$, so the two modules do not overlap. Thus the overlap hypothesis in [L2] cannot be weakened to inclusion. [step 1.2, step 2.1, L2, discharge-construct] ∎
