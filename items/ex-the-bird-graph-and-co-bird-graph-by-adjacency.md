---
id: ex-the-bird-graph-and-co-bird-graph-by-adjacency
kind: example
title: "The Bird graph and co-Bird by finite adjacency data"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bird-graph-and-co-bird-graph, def-graph-isomorphism-and-complement, def-bull-graph]
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
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Figure 5"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Example

The Bird graph is obtained from the bull by attaching one more pendant vertex
to a horn, and co-Bird is its complement.

## Facts & Assumptions

**Given:** The labelled vertices $x_1,x_2,x_3,y,z,w$.

[L1] The Bird graph consists of the bull on
$\{x_1,x_2,x_3,y,z\}$ together with the extra edge $yw$, and co-Bird is its
complement
([[def-bird-graph-and-co-bird-graph]], [[def-graph-isomorphism-and-complement]]).

[L2] In the bull, the triangle is $x_1x_2x_3$, the horn vertices are $y,z$, and
$y$ is adjacent only to $x_1$ while $z$ is adjacent only to $x_2$
([[def-bull-graph]]).

## Verification

**Proof technique:** direct finite check.

1.1 By [L1] and [L2], the vertices $\{x_1,x_2,x_3,y,z\}$ span the bull, and the new vertex $w$ is adjacent only to the horn vertex $y$. Therefore the labelled graph is exactly the Bird graph. [L1, L2]

2.1 By [L1], co-Bird is obtained by complementing that six-vertex graph on the same label set. [step 1.1, L1] ∎
