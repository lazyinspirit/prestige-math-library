---
id: cex-a-complete-graph-has-no-large-sparse-set
kind: counterexample
title: "The dense alternative in Rödl's theorem cannot be dropped"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-c-sparse-and-c-restricted-vertex-set, cor-rodl-every-h-free-graph-has-a-linear-restricted-set, def-h-free-and-family-free-graph, def-standard-complete-bipartite-path-and-cycle-graphs]
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

The dense alternative in Rödl's theorem is unnecessary.

## Facts & Assumptions

**Given:** A real $0\le\epsilon<1/2$ and the complete graph $K_n$ with $n\ge2$.

[L1] A set is $\epsilon$-sparse when each of its vertices has at most $\epsilon|X|$ neighbours inside it ([[def-c-sparse-and-c-restricted-vertex-set]]).

[L2] A graph is $P_3$-free when it has no induced three-vertex path ([[def-h-free-and-family-free-graph]], [[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Counterexample

**Proof technique:** constructive.

1.1 Every nonempty subset $X$ of $K_n$ with $|X|\ge2$ has each vertex adjacent to all $|X|-1$ other vertices of $X$. [given, construct]

2.1 If such an $X$ were $\epsilon$-sparse, then [L1] would force $(1-\epsilon)|X|\le1$. Hence every $\epsilon$-sparse subset of $K_n$ has size at most $1/(1-\epsilon)$, a bound independent of $n$. [step 1.1, L1, algebra]

3.1 The graph $K_n$ is $P_3$-free, since every three vertices induce a triangle rather than a path. For any proposed positive linear constant $\delta$, choosing $n>1/(\delta(1-\epsilon))$ makes every $\epsilon$-sparse set smaller than $\delta n$ by step 2.1. Thus a linear restricted set in this $P_3$-free family must use the dense alternative, which cannot be discarded. [step 2.1, L2, discharge-construct] ∎
