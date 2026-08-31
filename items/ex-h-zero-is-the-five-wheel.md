---
id: ex-h-zero-is-the-five-wheel
kind: example
title: "$H_0$ is the five-wheel"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-h-zero-through-h-five, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Figure 7"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Example

The graph $H_0$ is the five-wheel.

## Facts & Assumptions

**Given:** The graph $H_0$ on vertices $w,v_1,v_2,v_3,v_4,v_5$.

[L1] In $H_0$, the vertex $w$ is adjacent to each $v_i$, and
$v_1v_2v_3v_4v_5v_1$ is a five-cycle
([[def-h-zero-through-h-five]], [[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Verification

**Proof technique:** direct finite check.

1.1 By [L1], the rim vertices $v_1,\dots,v_5$ induce a $C_5$. [L1]

2.1 The same fact [L1] says that the remaining vertex $w$ is adjacent to every rim vertex and that no other edges are present. This is exactly the five-wheel. [step 1.1, L1] ∎
