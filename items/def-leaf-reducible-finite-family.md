---
id: def-leaf-reducible-finite-family
kind: definition
title: "Leaf-reducible finite graph families"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-erdos-hajnal-property-and-constant, def-tree-forest-and-leaf, def-h-free-and-family-free-graph]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Section 2.2"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Definition

Let $\mathcal F$ be a finite family of finite graphs. We say that $\mathcal F$
is **leaf-reducible** if there exist a graph $H\in\mathcal F$ and a leaf
$v\in V(H)$ such that the modified family

$$\mathcal F':=\{H\setminus\{v\}\}\cup(\mathcal F\setminus\{H\})$$

has the Erdős-Hajnal property in the family sense
([[def-erdos-hajnal-property-and-constant]], [[def-h-free-and-family-free-graph]]).

Thus a leaf-reducible family is one for which deleting one leaf from one member
produces a new forbidden family already known to have the Erdős-Hajnal
property.
