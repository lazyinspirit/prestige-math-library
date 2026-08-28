---
id: rem-the-perfect-induced-subgraph-formulation-of-the-erdos-hajnal-conjecture
kind: remark
title: "The perfect-induced-subgraph formulation of the Erdos-Hajnal conjecture"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-perfect-graph,
       def-h-free-and-family-free-graph,
       def-erdos-hajnal-property-and-constant,
       def-subgraph-induced-subgraph-and-spanning-subgraph]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdos-Hajnal Conjecture - A Survey, Conjecture 1.2 and the surrounding discussion"
      url: "https://arxiv.org/pdf/1606.08827"
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdos-Hajnal for graphs with no 5-hole, Introduction"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

The survey literature repeatedly reformulates the Erdos-Hajnal conjecture as a
claim about large perfect induced subgraphs. Concretely, for a family
$\mathcal H$ of finite graphs one may ask whether every nonempty
$\mathcal H$-free graph contains an induced subgraph that is perfect and whose
order is bounded below by a positive power of the ambient order
([[def-perfect-graph]], [[def-h-free-and-family-free-graph]],
[[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

The next theorem proves that this perfect-graph formulation is equivalent to
the usual homogeneous-set formulation from
[[def-erdos-hajnal-property-and-constant]], and also to the cograph and
$\kappa(G)$ formulations used in the later blockade arguments.
