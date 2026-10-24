---
id: ex-the-modular-decomposition-of-a-blown-up-five-cycle
kind: example
title: "The modular decomposition of a five-cycle with each vertex blown up into an edgeless graph"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-modular-partition-and-quotient-graph, cor-the-modular-partition-with-a-prime-quotient-is-unique, def-substitution-of-a-graph-for-a-vertex, ex-the-five-cycle-is-prime, def-standard-complete-bipartite-path-and-cycle-graphs, def-module-of-a-graph]
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

Let $G$ be obtained from the five-cycle $C_5$ by substituting an edgeless graph
$\overline{K_t}$, with $t\ge2$, for each of its five vertices. Then the five
blown-up parts are exactly the maximal proper modules of $G$, and the quotient
graph is $C_5$.

## Facts & Assumptions

**Given:** An integer $t\ge2$, the five-cycle $C_5$, and the graph $G$ obtained by replacing each vertex of $C_5$ by a copy of $\overline{K_t}$.

[L1] A vertex set $M$ is a module when every vertex outside $M$ is complete or anticomplete to it ([[def-module-of-a-graph]]).

[L2] The five-cycle is prime ([[ex-the-five-cycle-is-prime]]).

[L3] In a connected and anticonnected finite simple graph with at least two vertices, every modular partition with at least two parts and prime quotient consists of the maximal proper modules ([[cor-the-modular-partition-with-a-prime-quotient-is-unique]]).

## Verification

**Proof technique:** direct.

1.1 Each blown-up copy of $\overline{K_t}$ is a module of $G$: every vertex outside one part lies in another part, and that whole outside part is either complete or anticomplete to the chosen part according to the corresponding adjacency in the five-cycle. Hence every outside vertex is complete or anticomplete to the chosen part, so [L1] applies. [L1, given]

1.2 The graph $G$ is connected: paths between blown-up parts lift from paths in $C_5$, and two vertices in one edgeless part have a common neighbour in either adjacent part. Its complement is connected by the same argument, because complementation turns the quotient into $\overline{C_5}\cong C_5$ and each blown-up part into a clique. Thus $G$ is connected and anticonnected. [given]

2.1 The quotient obtained by collapsing those five modules is the original five-cycle, so [L2] shows that this quotient is prime. [step 1.1, L2]

3.1 The five blown-up parts form a modular partition with at least two parts and prime quotient $C_5$ by steps 1.1 and 2.1. Hence [L3] and step 1.2 show that they are exactly the maximal proper modules, and the quotient graph is $C_5$. [step 1.1, step 2.1, step 1.2, L3] ∎
