---
id: def-strong-erdos-hajnal-property-for-a-hereditary-class
kind: definition
title: "The strong Erdős–Hajnal property for a hereditary graph class"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-hereditary-graph-class, def-edges-between-sets-and-pure-mixed-pairs]
justified_by: []
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
    - title: "Nicolas Bousquet, Aurélie Lagoutte, and Stéphan Thomassé, The Erdős-Hajnal Conjecture for Paths and Antipaths"
      url: "https://arxiv.org/html/1303.5205v3"
pipeline_run: null
---

## Definition

Let $\mathcal C$ be a hereditary class of finite graphs. We say that
$\mathcal C$ has the **strong Erdős–Hajnal property** if there exists a real
constant $\epsilon>0$ such that every graph $G\in\mathcal C$ with
$|V(G)|\ge 2$ contains disjoint vertex sets $A,B\subseteq V(G)$ satisfying

$$|A|\ge \epsilon|V(G)|,\qquad |B|\ge \epsilon|V(G)|,$$

and such that $(A,B)$ is a pure pair in the sense of
[[def-edges-between-sets-and-pure-mixed-pairs]].

Equivalently, every nontrivial graph in the class contains a complete or
anticomplete pair whose two sides both have linear size.
