---
id: ex-the-forest-theorem-specialized-to-the-four-vertex-path
kind: example
title: "The forest pure-pair theorem specialized to $P_4$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-forest-and-complement-free-graphs-have-the-strong-erdos-hajnal-property, def-tree-forest-and-leaf, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Every finite $P_4$-free graph with at least two vertices has a pure pair whose
two sides both have linear size.

## Facts & Assumptions

**Given:** The standard path $P_4$.

[L1] For every forest $H$, every graph with no induced $H$ and no induced $\overline H$ has a linear pure pair ([[thm-forest-and-complement-free-graphs-have-the-strong-erdos-hajnal-property]]).

## Verification

**Proof technique:** direct.

1.1 The graph $P_4$ is a tree, hence a forest. Its complement has edges $\{1,3\}$, $\{1,4\}$, and $\{2,4\}$, which form the path $3-1-4-2$. So $\overline{P_4}\cong P_4$. [given, algebra]

2.1 Applying [L1] with $H=P_4$ therefore gives a linear pure pair in every graph with no induced $P_4$ and no induced $\overline{P_4}$. By step 1.1, that is exactly the class of $P_4$-free graphs. [step 1.1, L1] ∎
