---
id: ex-the-self-density-of-a-clique
kind: example
title: "A clique of size $s$ has self-density $1-1/s$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-edge-density-between-vertex-sets, lem-a-sparse-set-has-small-self-density, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
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

## Example

If $X$ is a clique of size $s\ge1$, then $d_G(X,X)=1-1/s$.

## Facts & Assumptions

**Given:** A clique $X$ of size $s$ in a finite simple graph $G$.

[L1] The self-density is $d_G(X,X)=e_G(X,X)/s^2$ ([[def-edge-density-between-vertex-sets]]).

## Verification

**Proof technique:** direct.

1.1 Every ordered pair of distinct vertices of $X$ is an edge, and the diagonal contributes nothing, so $e_G(X,X)=s(s-1)$. [given]

2.1 Dividing by $s^2$ as in [L1] gives $d_G(X,X)=s(s-1)/s^2=1-1/s$. [step 1.1, L1, algebra]

3.1 In particular the self-density is always strictly less than $1$, which is the reciprocal-size slack appearing in the dense half of [[lem-a-sparse-set-has-small-self-density]]. [step 2.1] ∎
