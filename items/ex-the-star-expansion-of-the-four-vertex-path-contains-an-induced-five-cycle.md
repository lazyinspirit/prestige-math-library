---
id: ex-the-star-expansion-of-the-four-vertex-path-contains-an-induced-five-cycle
kind: example
title: "The star-expansion of the four-vertex path contains an induced five-cycle"
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
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Figure 3 discussion"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Example

In the star-expansion of $P_4$, the vertices $v,a_1,b_1,b_2,a_2$ induce a
five-cycle.

## Facts & Assumptions

**Given:** The star-expansion of $P_4$ with root $v$, teeth $a_1,a_2$, and path
vertices $b_1,b_2$.

[L1] The only edges using the new vertices are $va_i$ and $a_ib_i$
([[def-star-expansion-of-a-graph]]).

## Verification

**Proof technique:** direct finite check.

1.1 Among the chosen five vertices, the edges are exactly $va_1,a_1b_1,b_1b_2,b_2a_2,a_2v$. [L1]

2.1 No chord is present: $a_1$ and $a_2$ are nonadjacent, neither tooth is adjacent to the wrong path vertex, and the root is not adjacent to $b_1$ or $b_2$. Hence the chosen vertices induce a five-cycle. [step 1.1, L1] ∎
