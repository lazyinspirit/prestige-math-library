---
id: def-free-group-action
kind: definition
title: "A free group action has no nonidentity element fixing a point"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-action]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, 14.1"
      url: "https://twjudson.github.io/aata-files/aata-html/actions-section-groups-acting-on-sets.html"
pipeline_run: null
---

## Definition

A left action of a group $G$ on a set $X$ ([[def-group-action]]) is **free**
when

$$g\cdot x=x\quad\Longrightarrow\quad g=e$$

for every $g\in G$ and $x\in X$. Equivalently, no nonidentity element of $G$
fixes any point of $X$.
