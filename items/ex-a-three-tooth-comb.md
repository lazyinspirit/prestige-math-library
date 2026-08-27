---
id: ex-a-three-tooth-comb
kind: example
title: "A three-tooth comb"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [def-comb-in-a-graph]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Example

Let $G$ be a graph with six pairwise distinct vertices
$a_1,a_2,a_3,b_1,b_2,b_3$. Put

$$B_1=\{b_1\},\qquad B_2=\{b_2\},\qquad B_3=\{b_3\}.$$

If $a_i$ is adjacent to
$b_i$ and to no other $b_j$, then

$$((a_1,B_1),(a_2,B_2),(a_3,B_3))$$

is a $(3,1)$-comb.
