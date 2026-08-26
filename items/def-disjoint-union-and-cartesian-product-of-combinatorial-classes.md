---
id: def-disjoint-union-and-cartesian-product-of-combinatorial-classes
kind: definition
title: "Disjoint unions and Cartesian products of combinatorial classes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-combinatorial-class-and-ordinary-generating-function]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 5: Combinatorial Constructions"
      url: "https://enumeration.ca/toolbox/combinatorial-constructions/"
pipeline_run: null
---

## Definition

Let $\mathcal{A}$ and $\mathcal{B}$ be combinatorial classes.

Their **disjoint union** $\mathcal{A} + \mathcal{B}$ is the tagged union

$$\mathcal{A} + \mathcal{B} := (\{0\} \times \mathcal{A}) \cup (\{1\} \times \mathcal{B}),$$

with size $|(0,a)| := |a|$ and $|(1,b)| := |b|$. The tags are part of the data:
they keep the two copies disjoint even when $\mathcal{A}$ and $\mathcal{B}$ have
common underlying objects.

Their **Cartesian product** $\mathcal{A} \times \mathcal{B}$ is the set of
ordered pairs $(a,b)$ with $a \in \mathcal{A}$ and $b \in \mathcal{B}$, equipped
with the size map

$$|(a,b)| := |a| + |b|.$$

Here the ordered pair itself records both components. This uniqueness of the
factorisation is part of the construction: later counterexamples show that
dropping it breaks the product rule.

For later shorthand, $m\mathcal{A}$ means the disjoint union of $m$ tagged copies
of $\mathcal{A}$.
