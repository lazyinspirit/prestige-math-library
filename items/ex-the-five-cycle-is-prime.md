---
id: ex-the-five-cycle-is-prime
kind: example
title: "The five-cycle is prime"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-prime-graph, def-module-of-a-graph, lem-a-proper-module-of-a-connected-graph-has-a-complete-neighbour, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, The Erdős–Hajnal Conjecture — A Survey, sec. 2"
      url: "https://arxiv.org/pdf/1606.08827"
pipeline_run: null
---

## Example

The cycle $C_5$ is prime.

## Facts & Assumptions

**Given:** The five-cycle $C_5$ with vertices $0,1,2,3,4$ in cyclic order.

[L1] A graph is prime when it has no nontrivial module ([[def-prime-graph]], [[def-module-of-a-graph]]).

[L2] In a connected graph, every nonempty proper module has some outside vertex complete to it ([[lem-a-proper-module-of-a-connected-graph-has-a-complete-neighbour]]).

[L3] In $C_5$, every vertex has exactly two neighbours, and those two neighbours are nonadjacent ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Verification

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $C_5$ has a nontrivial module $M$. Then [L2] gives a vertex $v\notin M$ complete to $M$. [assume-contra, L2]

2.1 By [L3], the set $M$ must be the two neighbours of $v$. [step 1.1, L3]

3.1 The two remaining vertices of the cycle each see exactly one of those neighbours, so they split $M$, contradicting that $M$ is a module. [step 2.1, given]

4.1 Therefore $C_5$ has no nontrivial module, and [L1] makes it prime. [step 3.1, L1, discharge-contradiction] ∎
