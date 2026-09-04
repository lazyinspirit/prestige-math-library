---
id: ex-the-e-graph-sits-inside-a-one-subdivided-star-and-deletes-to-the-five-vertex-path
kind: example
title: "The $E$-graph sits inside a one-subdivided star and deletes to the five-vertex path"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-e-graph-and-co-e-graph, def-standard-complete-bipartite-path-and-cycle-graphs]
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
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 2.2"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Example

The $E$-graph occurs as an induced subgraph of the $1$-subdivision of
$K_{1,3}$, and deleting the remaining pendant leaf recovers the five-vertex
path.

## Facts & Assumptions

**Given:** The $1$-subdivision of $K_{1,3}$ with center $c$, subdivision
vertices $s_1,s_2,s_3$, and leaves $t_1,t_2,t_3$.

[L1] The $E$-graph has edge set
$$ \{p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q\} $$
([[def-e-graph-and-co-e-graph]]).

[L2] The path $P_5$ has five vertices in one chain and no other edges
([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Verification

**Proof technique:** direct finite check.

1.1 On the six-vertex subset $\{t_1,s_1,c,s_2,t_2,s_3\}$, the induced edges are $t_1s_1$, $s_1c$, $cs_2$, $s_2t_2$, and $cs_3$. Relabelling $p_1=t_1$, $p_2=s_1$, $p_3=c$, $p_4=s_2$, $p_5=t_2$, and $q=s_3$ turns this induced subgraph into the edge set from [L1]. Hence the selected subset is an induced copy of the $E$-graph. [L1, given, construct]

2.1 Deleting the vertex $q=s_3$ from that induced copy leaves the five vertices $p_1,p_2,p_3,p_4,p_5$ with exactly the four path edges $p_1p_2,p_2p_3,p_3p_4,p_4p_5$. By [L2], this is $P_5$. [step 1.1, L2] ∎
