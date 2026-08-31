---
id: ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-six-cycle
kind: example
title: "The star-expansion of the four-vertex path contains an induced six-cycle"
status: published
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
  audited: 2026-08-31
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

In the star-expansion of $P_4$, the vertices $v,a_1,b_1,b_2,b_3,a_3$ induce a
six-cycle.

## Facts & Assumptions

**Given:** The star-expansion of $P_4$ with root $v$, teeth $a_1,a_3$, and path
vertices $b_1,b_2,b_3$.

[L1] The only edges using the new vertices are $va_i$ and $a_ib_i$
([[def-star-expansion-of-a-graph]]).

## Verification

**Proof technique:** direct finite check.

1.1 Among the chosen six vertices, the edges are exactly $va_1,a_1b_1,b_1b_2,b_2b_3,b_3a_3,a_3v$. [L1]

2.1 The teeth create no further chord, and the path contributes no edge $b_1b_3$. Hence those six vertices induce a six-cycle. [step 1.1, L1] ∎
