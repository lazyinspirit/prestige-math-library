---
id: thm-the-five-vertex-path-has-the-polynomial-rodl-property
kind: theorem
title: "The five-vertex path has the polynomial Rödl property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-co-p-five-free-graphs-yield-a-polynomial-restricted-set-or-a-complete-or-anticomplete-blockade,
       thm-complete-or-anticomplete-blockade-hypotheses-force-restricted-induced-subgraphs,
       def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Theorem 1.5"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

The graph $P_5$ has the polynomial Rödl property.

## Facts & Assumptions

**Given:** The graph $P_5$.

[L1] There exists $a\ge 1$ such that every $\overline{P_5}$-free graph either
has an $x$-restricted induced subgraph of size at least $x^a|V(G)|$ or has a
complete or anticomplete $(k,|V(G)|/k^a)$-blockade for some $k\in[2,x^{-1}]$
([[thm-co-p-five-free-graphs-yield-a-polynomial-restricted-set-or-a-complete-or-anticomplete-blockade]]).

[L2] The blockade alternative alone already forces an $x$-restricted induced
subgraph of size at least $x^{3a}|V(G)|$
([[thm-complete-or-anticomplete-blockade-hypotheses-force-restricted-induced-subgraphs]]).

## Proof

**Proof technique:** direct.

1.1 Let $a$ be as in [L1]. Fix $x\in(0,\tfrac12)$ and a $P_5$-free graph $G$. Then $\overline G$ is $\overline{P_5}$-free. Apply [L1] to every induced subgraph $F$ of $\overline G$ with $|V(F)|\ge x^{2a}|V(G)|$. If any such $F$ has an $x$-restricted set of size at least $x^a|V(F)|$, that set has size at least $x^{3a}|V(G)|$ and is also $x$-restricted in $G$. [L1, given, cases, algebra]

2.1 Otherwise every such $F$ has the complete-or-anticomplete blockade supplied by [L1], so the hypothesis of [L2] holds for $\overline G$. Applying [L2] yields an $x$-restricted induced subgraph on at least $x^{3a}|V(G)|$ vertices; the same vertex set is $x$-restricted in $G$. [step 1.1, L2, cases]

3.1 Therefore $P_5$ has the polynomial Rödl property. [step 2.1] ∎
