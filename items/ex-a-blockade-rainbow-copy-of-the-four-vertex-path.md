---
id: ex-a-blockade-rainbow-copy-of-the-four-vertex-path
kind: example
title: "A four-block blockade-rainbow copy of P_4"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-blockade-rainbow-induced-copy,
       def-blockade-length-and-width,
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
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdos-Hajnal for graphs with no 5-hole, Section 6"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Example

The path $P_4$ has a blockade-rainbow copy with four singleton blocks.

## Facts & Assumptions

**Given:** The path $P_4$ on vertices $0,1,2,3$, with blocks
$B_1:=\{0\}$, $B_2:=\{1\}$, $B_3:=\{2\}$, and $B_4:=\{3\}$.

[L1] An induced subgraph is $\mathcal B$-rainbow when it lies in the support of
the blockade and meets each block in at most one vertex
([[def-blockade-rainbow-induced-copy]]).

[L2] The graph $P_4$ has edges exactly $01,12,23$
([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L3] The support of the blockade $(B_1,B_2,B_3,B_4)$ is the union of those four
singleton blocks ([[def-blockade-length-and-width]]).

## Verification

**Proof technique:** direct construction.

1.1 The support of the blockade is $\{0,1,2,3\}$ by [L3], so the whole graph $P_4$ already lies inside that support. [L3, given]

2.1 Each block $B_i$ contains exactly one vertex of $P_4$, so the induced copy of $P_4$ given by the whole graph meets each block in at most one vertex. By [L1], it is therefore blockade-rainbow. [step 1.1, L1, L2]

3.1 Hence the path $P_4$ has a four-block blockade-rainbow copy. [step 2.1] ∎
