---
id: ex-the-star-expansion-of-the-four-vertex-path
kind: example
title: "The star-expansion of the four-vertex path"
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
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Figure 3"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Example

Let $P_4$ have vertices $b_1,b_2,b_3,b_4$ in path order. Its star-expansion has
additional vertices $a_1,a_2,a_3,a_4,v$ and edge set
$$\{b_1b_2,b_2b_3,b_3b_4\}\cup\{a_ib_i:1\le i\le 4\}\cup\{va_i:1\le i\le 4\}.$$

## Facts & Assumptions

**Given:** The path $P_4=b_1-b_2-b_3-b_4$.

[L1] The star-expansion adds a tooth $a_i$ adjacent to its matched vertex $b_i$
and to the root $v$, with no other edges incident with $a_i$; the root is
adjacent only to the teeth
([[def-star-expansion-of-a-graph]]).

## Verification

**Proof technique:** direct finite check.

1.1 Applying [L1] to the four path vertices gives the eight new edges $a_ib_i$ and $va_i$ for $1\le i\le 4$, together with no others incident to the new vertices. [L1]

2.1 Keeping the original path edges $b_1b_2,b_2b_3,b_3b_4$ and adding exactly the edges from step 1.1 yields the displayed graph. [step 1.1] ∎
