---
id: ex-mantel-balanced-complete-bipartite
kind: example
title: "$K_{3,4}$ realises $\\operatorname{ex}(7,K_3)=12$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-mantel-exact-and-unique, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
pipeline_run: null
---

## Example

The complete bipartite graph $K_{3,4}$ is triangle-free and has $3\cdot4=12$ edges. Hence it realizes

$$\operatorname{ex}(7,K_3)=\left\lfloor\frac{49}{4}\right\rfloor=12.$$

## Facts & Assumptions

**Given:** Complete bipartite graphs from [[def-standard-complete-bipartite-path-and-cycle-graphs]] and Mantel's theorem [[thm-mantel-exact-and-unique]].

## Verification

**Proof technique:** count cross edges and apply Mantel.

1.1 Every edge of $K_{3,4}$ crosses its bipartition, so a three-vertex cycle is impossible, and there are exactly $3\cdot4=12$ possible cross edges. [given]

2.1 Mantel's theorem gives the matching upper bound $\lfloor7^2/4\rfloor=12$, so the graph is extremal. [step 1.1, given] ∎
