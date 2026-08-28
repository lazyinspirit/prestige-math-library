---
id: ex-a-pure-blockade-with-perfect-but-not-cograph-pattern
kind: example
title: "A pure blockade can have a perfect pattern that is not a cograph"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-pure-blockades-with-perfect-patterns-contain-large-homogeneous-subblockades,
       ex-the-five-vertex-path-is-perfect-but-not-a-cograph,
       def-pattern-graph-of-a-pure-blockade,
       def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdos-Hajnal Conjecture - A Survey, Introduction"
      url: "https://arxiv.org/pdf/1606.08827"
pipeline_run: null
---

## Example

A pure blockade may have a perfect pattern graph without having a cograph
pattern graph.

## Facts & Assumptions

**Given:** The path $P_5$ on vertices $0,1,2,3,4$, and the singleton blocks
$B_i:=\{i-1\}$ for $1\leq i\leq 5$.

[L1] The preceding example shows that $P_5$ is perfect but not a cograph
([[ex-the-five-vertex-path-is-perfect-but-not-a-cograph]]).

[L2] In the pattern graph of a pure blockade, two indices are adjacent exactly
when the corresponding two blocks are complete
([[def-pattern-graph-of-a-pure-blockade]]).

[L3] The graph $P_5$ has edges exactly $01,12,23,34$
([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Verification

**Proof technique:** direct construction.

1.1 Because each block $B_i$ is a singleton, every pair $(B_i,B_j)$ is either complete or anticomplete according to whether its two vertices are adjacent. Hence $(B_1,\dots,B_5)$ is a pure blockade in the graph $P_5$. [L3, given]

2.1 By [L2], the pattern graph has an edge $ij$ exactly when the vertices $i-1$ and $j-1$ are adjacent in $P_5$. Therefore the pattern graph of $(B_1,\dots,B_5)$ is itself $P_5$. [step 1.1, L2, L3]

3.1 Step 2.1 and [L1] show that this pure blockade has a perfect pattern that is not a cograph. [step 2.1, L1] ∎
