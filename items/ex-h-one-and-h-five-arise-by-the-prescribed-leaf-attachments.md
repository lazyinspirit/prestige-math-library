---
id: ex-h-one-and-h-five-arise-by-the-prescribed-leaf-attachments
kind: example
title: "$H_1$ and $H_5$ arise by the stated labelled leaf attachments"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-h-zero-through-h-five]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Figure 7"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Example

The recursive definition of $H_0,\dots,H_5$ produces the intermediate graph
$H_1$ and the final graph $H_5$ exactly by the labelled leaf attachments.

## Facts & Assumptions

**Given:** The recursive family $H_0,H_1,\dots,H_5$.

[L1] The graph $H_1$ is obtained from $H_0$ by adjoining a leaf $v_1'$ at
$v_1$, and for each $i=1,\dots,5$, the graph $H_i$ is obtained from $H_{i-1}$
by adjoining a leaf $v_i'$ at $v_i$ ([[def-h-zero-through-h-five]]).

## Verification

**Proof technique:** direct finite check.

1.1 By [L1], $H_1$ keeps all edges of $H_0$ and adds exactly one new edge $v_1v_1'$. So $H_1$ is precisely the five-wheel with one pendant leaf at $v_1$. [L1]

2.1 Repeating the same operation for $i=2,3,4,5$ adds the leaves $v_2',v_3',v_4',v_5'$ one at a time and changes no earlier adjacencies. Hence $H_5$ is the graph obtained from $H_0$ by attaching one leaf to each rim vertex $v_i$. [step 1.1, L1] ∎
