---
id: cex-sparsity-does-not-pass-to-subsets
kind: counterexample
title: "A subset of a $c$-sparse set that is not $c$-sparse"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-c-sparse-and-c-restricted-vertex-set, lem-sparsity-transfers-to-a-large-subset]
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

Every subset of a $c$-sparse set is again $c$-sparse.

## Facts & Assumptions

**Given:** An even integer $2m\ge4$, a perfect matching on $2m$ vertices, its whole vertex set $X$, and one matched edge $\{u,v\}\subseteq X$.

[L1] A set is $c$-sparse when every vertex has at most $c|X|$ neighbours inside it ([[def-c-sparse-and-c-restricted-vertex-set]]).

## Counterexample

**Proof technique:** constructive.

1.1 Every vertex of the matching has exactly one neighbour, so the whole set $X$ is $(1/(2m))$-sparse by [L1]. [L1, given, construct]

2.1 The subset $\{u,v\}$ has size $2$, and each of its vertices still has one neighbour inside it. So it is not $(1/(2m))$-sparse whenever $m\ge2$. [step 1.1, L1, algebra]

3.1 Therefore sparsity does not pass to arbitrary subsets, which is exactly why [[lem-sparsity-transfers-to-a-large-subset]] pays a factor of $1/\lambda$. [step 2.1, discharge-construct] ∎
