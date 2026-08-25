---
id: cex-directional-sparsity-is-not-symmetric
kind: counterexample
title: "$X$ can be $c$-sparse to $Y$ while $Y$ is not $c$-sparse to $X$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-directional-and-weak-sparsity-between-vertex-sets, lem-weak-sparsity-is-a-bound-on-the-edge-density, def-edges-between-sets-and-pure-mixed-pairs]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

If $X$ is $c$-sparse to $Y$, then $Y$ is $c$-sparse to $X$.

## Facts & Assumptions

**Given:** A real $c=\tfrac12$, a singleton $X=\{x\}$, a set $Y=\{y_0,y_1,y_2\}$, and the graph with the unique edge $xy_0$.

[L1] The directional definition says that $X$ is $c$-sparse to $Y$ when every member of $X$ has at most $c|Y|$ neighbours in $Y$, and similarly with the roles reversed ([[def-directional-and-weak-sparsity-between-vertex-sets]]).

## Counterexample

**Proof technique:** constructive.

1.1 The vertex $x$ has exactly one neighbour in $Y$, and $1\le\tfrac12|Y|=\tfrac32$, so [L1] makes $X$ $\tfrac12$-sparse to $Y$. [L1, given, construct]

2.1 The vertex $y_0$ has one neighbour in $X$, but $\tfrac12|X|=\tfrac12$, so [L1] shows that $Y$ is not $\tfrac12$-sparse to $X$. [step 1.1, L1]

3.1 Thus directional sparsity is not symmetric. [step 2.1, discharge-construct] ∎
