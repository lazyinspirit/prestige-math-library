---
id: thm-a-cycle-and-a-forest-complement-have-the-erdos-hajnal-property
kind: theorem
title: "A cycle of length at least five and a forest complement have the Erdős-Hajnal property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property,
       lem-the-star-expansion-of-a-forest-containing-a-long-path-contains-the-corresponding-cycle,
       prop-erdos-hajnal-property-passes-to-hereditary-subclasses,
       def-h-free-and-family-free-graph,
       def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, Theorem 1.9"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

Let $C$ be a cycle of length at least $5$ and let $F$ be a forest. Then the pair
$\{C,\overline F\}$ has the Erdős-Hajnal property.

## Facts & Assumptions

**Given:** A cycle $C$ of length $\ell\ge 5$ and a forest $F$.

[L1] For every forest $H$, the pair $\{\overline H,H^\star\}$ has the Erdős-Hajnal property ([[thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property]]).

[L2] If a forest contains a path of length $\ell-4$, then its star-expansion contains an induced $\ell$-cycle ([[lem-the-star-expansion-of-a-forest-containing-a-long-path-contains-the-corresponding-cycle]]).

[L3] The Erdős-Hajnal property passes to hereditary subclasses ([[prop-erdos-hajnal-property-passes-to-hereditary-subclasses]]).

## Proof

**Proof technique:** direct.

1.1 Choose a forest $H$ that contains $F$ as an induced subgraph and also contains an induced path on $\ell-3$ vertices. For instance, take the disjoint union of $F$ with a path long enough to realize that length. By [L2], the star-expansion $H^\star$ contains an induced copy of $C$. [L2, choose]

2.1 If a graph $G$ is $C$-free and $\overline F$-free, then it is also $H^\star$-free and $\overline H$-free. Indeed, an induced copy of $H^\star$ would contain the induced cycle $C$ from step 1.1, and an induced copy of $\overline H$ would contain $\overline F$ because $F$ is an induced subgraph of $H$. Thus the class forbidding $\{C,\overline F\}$ is a hereditary subclass of the class forbidding $\{H^\star,\overline H\}$. [step 1.1, given]

3.1 By [L1], the larger class from step 2.1 has the Erdős-Hajnal property, so [L3] passes that property to the subclass forbidding $\{C,\overline F\}$. [step 2.1, L1, L3] ∎
