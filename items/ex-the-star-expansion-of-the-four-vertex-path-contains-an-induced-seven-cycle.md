---
id: ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-seven-cycle
kind: example
title: "The star-expansion of the four-vertex path contains an induced seven-cycle"
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
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, sentence after Theorem 1.9"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Example

In the star-expansion of $P_4$, the vertices
$v,a_1,b_1,b_2,b_3,b_4,a_4$ induce a seven-cycle.

## Facts & Assumptions

**Given:** The star-expansion of $P_4$ with root $v$, teeth $a_1,a_4$, and path
vertices $b_1,b_2,b_3,b_4$.

[L1] The only edges using the new vertices are $va_i$ and $a_ib_i$
([[def-star-expansion-of-a-graph]]).

## Verification

**Proof technique:** direct finite check.

1.1 Among the chosen seven vertices, the edges are exactly $va_1,a_1b_1,b_1b_2,b_2b_3,b_3b_4,b_4a_4,a_4v$. [L1]

2.1 The path contributes no nonconsecutive edge, and the two teeth touch only the root and their matched path vertices. Hence the chosen vertices induce a seven-cycle. [step 1.1, L1] ∎
