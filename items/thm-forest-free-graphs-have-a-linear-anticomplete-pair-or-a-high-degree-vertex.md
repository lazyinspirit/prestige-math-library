---
id: thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex
kind: theorem
title: "Every forest-free graph has a linear anticomplete pair or a linear-degree vertex"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-h-free-and-family-free-graph, def-tree-forest-and-leaf, def-graph-adjacency-incidence-neighbourhood-and-degree, def-edges-between-sets-and-pure-mixed-pairs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-31
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Pure pairs. I. Trees and linear anticomplete pairs, statement 1.4"
      url: "https://arxiv.org/pdf/1809.00919"
pipeline_run: null
---

## Statement

For every forest $H$, there exists a real constant $\epsilon_H>0$ such that
every finite $H$-free graph $G$ with $|V(G)|\ge 2$ satisfies at least one of
the following:

1. some vertex of $G$ has degree at least $\epsilon_H|V(G)|$;
2. there exist disjoint sets $A,B\subseteq V(G)$ with
   $$|A|\ge \epsilon_H|V(G)|,\qquad |B|\ge \epsilon_H|V(G)|,$$
   and $A$ anticomplete to $B$.

## Facts & Assumptions

**Given:** A forest $H$ and a finite $H$-free graph $G$ with $|V(G)|\ge 2$.

[F1] For every forest $H$, the source theorem supplies a real constant $\epsilon_H>0$ such that every finite $H$-free graph on at least two vertices has a vertex of degree at least $\epsilon_H|V(G)|$ or has two disjoint anticomplete sets $A,B$ with $$|A|\ge \epsilon_H|V(G)|,\qquad |B|\ge \epsilon_H|V(G)|.$$

## Proof

**Proof technique:** direct.

1.1 By [F1], choose the constant $\epsilon_H>0$ attached to the forest $H$. For the given graph $G$, the same source theorem gives at least one of the two alternatives in the Statement. [F1, choose]

2.1 Therefore $\epsilon_H$ has the required property for all finite $H$-free graphs with at least two vertices. [step 1.1] ∎
