---
id: def-cycle-construction-of-a-combinatorial-class
kind: definition
title: "The cycle construction $\\operatorname{CYC}(\\mathcal{A})$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-combinatorial-class-and-ordinary-generating-function, def-group-action, def-orbit-and-stabilizer]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
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

Let $\mathcal{A}$ be a combinatorial class. For each $m \ge 1$, let
$C_m = \mathbb{Z}/m$ act on the set of $m$-tuples

$$\mathcal{A}^m = \{(a_0,\dots,a_{m-1}) : a_i \in \mathcal{A}\}$$

by cyclic rotation:

$$[r]_m \cdot (a_0,\dots,a_{m-1}) := (a_r,a_{r+1},\dots,a_{m-1},a_0,\dots,a_{r-1}).$$

The **cycle construction** $\operatorname{CYC}(\mathcal{A})$ is the disjoint
union, over all $m \ge 1$, of the orbit sets of these actions. An object of
$\operatorname{CYC}(\mathcal{A})$ is therefore a cyclic arrangement of finitely
many $\mathcal{A}$-objects, and its size is

$$|(a_0,\dots,a_{m-1})| := |a_0| + \cdots + |a_{m-1}|,$$

which is constant on each orbit.

If $\mathcal{A}$ has a size-zero object, then arbitrarily long cycles may have
the same total size. The generating-function theorem for $\operatorname{CYC}$
therefore assumes that $\mathcal{A}$ has no size-zero objects.
