---
id: ex-two-large-anticonnected-components-give-a-complete-two-blockade
kind: example
title: "Two large anticonnected components give a complete two-blockade"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-anticonnected-graph-and-anticonnected-component,
       lem-components-are-anticomplete-and-anticomponents-complete,
       def-blockade-length-and-width]
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
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Lemma 4.1 pattern"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Example

If $G$ has two distinct anticonnected components $A$ and $B$, each of size at
least $w$, then $(A,B)$ is a complete $(2,w)$-blockade.

## Facts & Assumptions

**Given:** Two distinct anticonnected components $A,B$ of a graph $G$ with
$|A|,|B|\ge w>0$.

[L1] Distinct anticonnected components are complete to one another
([[lem-components-are-anticomplete-and-anticomponents-complete]]).

## Verification

**Proof technique:** direct.

1.1 The sets $A$ and $B$ are disjoint and nonempty because they are distinct components, and each has size at least $w$ by hypothesis. [given]

2.1 By [L1], the pair $(A,B)$ is complete. Therefore $(A,B)$ is a complete $(2,w)$-blockade. [step 1.1, L1] ∎
