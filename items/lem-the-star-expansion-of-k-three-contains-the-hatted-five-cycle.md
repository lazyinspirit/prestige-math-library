---
id: lem-the-star-expansion-of-k-three-contains-the-hatted-five-cycle
kind: lemma
title: "The star-expansion of $K_3$ contains the hatted five-cycle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-star-expansion-of-a-graph,
       def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, proof of Theorem 8.1"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

The star-expansion of $K_3$ contains an induced hatted five-cycle.

## Facts & Assumptions

**Given:** The star-expansion of $K_3$ with triangle vertices
$b_1,b_2,b_3$, teeth $a_1,a_2,a_3$, and root $v$.

[L1] In the star-expansion, the only new edges are $va_i$ and $a_ib_i$
([[def-star-expansion-of-a-graph]]).

## Proof

**Proof technique:** direct finite check.

1.1 The five vertices $v,a_1,b_1,b_2,a_2$ induce the cycle $v-a_1-b_1-b_2-a_2-v$. Indeed, [L1] supplies the four new edges and the edge $b_1b_2$ comes from the triangle. No other edge among these five vertices is present. [L1]

2.1 The remaining triangle vertex $b_3$ is adjacent to $b_1$ and $b_2$ but to neither $v,a_1,a_2$ in the chosen five-vertex set. Thus adjoining $b_3$ to the cycle from step 1.1 yields a hat vertex adjacent to two adjacent cycle vertices. [step 1.1, L1]

3.1 Therefore the star-expansion of $K_3$ contains an induced hatted five-cycle. [step 2.1] ∎
