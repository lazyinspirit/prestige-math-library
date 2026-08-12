---
id: ex-turan-ramsey-colouring-witness
kind: example
title: "A Turán-partition colouring witnesses $R(4,3)\\ge7$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-turan-ramsey-lower-bound, def-ramsey-colouring-and-arrow-notation]
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

Partition the six vertices of $K_6$ into three pairs. Colour edges inside pairs blue and edges between pairs red. This colouring has no red $K_4$ and no blue $K_3$, so $R(4,3)\ge7$.

## Facts & Assumptions

**Given:** The general lower-bound construction [[cor-turan-ramsey-lower-bound]] and the colour orientation in [[def-ramsey-colouring-and-arrow-notation]].

## Verification

**Proof technique:** bound clique sizes in each colour.

1.1 A red clique contains at most one vertex from each of the three pairs, so it has size at most $3$. A blue clique lies within a single pair, so it has size at most $2$. [given]

2.1 Thus $K_6$ does not arrow $(K_4,K_3)$, and the Ramsey definition gives $R(4,3)>6$, hence $R(4,3)\ge7$. [step 1.1, given] ∎
