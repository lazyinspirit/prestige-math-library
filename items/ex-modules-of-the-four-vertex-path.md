---
id: ex-modules-of-the-four-vertex-path
kind: example
title: "The four-vertex path has only trivial modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-module-of-a-graph, def-prime-graph, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Habib and C. Paul, A Survey on Algorithmic Aspects of Modular Decomposition, sec. 2.4"
      url: "https://arxiv.org/pdf/0912.1457"
pipeline_run: null
---

## Example

Write the four-vertex path as $0$-$1$-$2$-$3$. Then every module of $P_4$ is
trivial, so $P_4$ is prime.

## Facts & Assumptions

**Given:** The path $P_4$ with vertices $0,1,2,3$ and edges $01,12,23$.

[L1] A vertex set is a module when every outside vertex is adjacent to all of it or to none of it ([[def-module-of-a-graph]]).

[L2] A graph is prime when its only modules are the trivial ones ([[def-prime-graph]]).

## Verification

**Proof technique:** direct.

1.1 Each two-element subset is split by an outside vertex: $2$ splits $\{0,1\}$, $3$ splits $\{0,2\}$, $1$ splits $\{0,3\}$, $3$ splits $\{1,2\}$, $0$ splits $\{1,3\}$, and $1$ splits $\{2,3\}$. So no two-element subset is a module by [L1]. [L1, given]

1.2 Each three-element subset is split by its remaining vertex: $3$ splits $\{0,1,2\}$, $2$ splits $\{0,1,3\}$, $1$ splits $\{0,2,3\}$, and $0$ splits $\{1,2,3\}$. So no three-element subset is a module. [L1, given]

2.1 The only modules left are $\varnothing$, the singletons, and the whole vertex set, so [L2] makes $P_4$ prime. [step 1.1, step 1.2, L2] ∎
