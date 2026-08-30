---
id: cor-the-five-cycle-has-the-erdos-hajnal-property
kind: corollary
title: "The five-cycle has the Erdős-Hajnal property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-c-five-free-graphs-satisfy-a-polynomial-kappa-bound,
       thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations,
       def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, Theorem 1.4"
      url: "https://arxiv.org/html/2102.04994v1"
    - title: "Tung H. Nguyen, Notes on Recent Work on the Erdős-Hajnal Conjecture, solved five-vertex graph list"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
pipeline_run: null
---

## Statement

The graph $C_5$ has the Erdős-Hajnal property.

## Facts & Assumptions

**Given:** The graph $C_5$.

[L1] There exists $\tau>0$ such that every nonempty $C_5$-free graph $G$
satisfies $\kappa(G)\geq |V(G)|^\tau$
([[thm-c-five-free-graphs-satisfy-a-polynomial-kappa-bound]]).

[L2] For a finite family of graphs, the existence of a positive-power
$\kappa$-bound is equivalent to the Erdős-Hajnal property
([[thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the family consisting only of $C_5$ satisfies the $\kappa$-formulation of the Erdős-Hajnal property. [L1]

2.1 Applying the implication from clause 4 to clause 1 in [L2], we conclude that $C_5$ has the Erdős-Hajnal property. [step 1.1, L2] ∎
