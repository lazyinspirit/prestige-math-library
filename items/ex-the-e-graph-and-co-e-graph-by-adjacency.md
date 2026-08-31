---
id: ex-the-e-graph-and-co-e-graph-by-adjacency
kind: example
title: "The $E$-graph and co-$E$ by finite adjacency data"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-e-graph-and-co-e-graph, def-graph-isomorphism-and-complement, def-standard-complete-bipartite-path-and-cycle-graphs]
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
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Figure 4"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Example

The $E$-graph is a five-vertex path with a pendant edge at the middle vertex,
and co-$E$ is its complement.

## Facts & Assumptions

**Given:** The labelled graph with path vertices $p_1,p_2,p_3,p_4,p_5$ and an
extra vertex $q$.

[L1] The $E$-graph has edge set
$\{p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q\}$, and co-$E$ is its complement
([[def-e-graph-and-co-e-graph]], [[def-graph-isomorphism-and-complement]]).

[L2] The standard path $P_5$ has consecutive edges and no others
([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Verification

**Proof technique:** direct finite check.

1.1 By [L1] and [L2], the vertices $p_1,p_2,p_3,p_4,p_5$ induce a $P_5$, and the extra vertex $q$ is adjacent only to the middle vertex $p_3$. So the labelled graph is exactly the $E$-graph. [L1, L2]

2.1 Taking the complement toggles each nonedge to an edge and each edge to a nonedge on the same six vertices. By [L1], that complement is co-$E$. [step 1.1, L1] ∎
