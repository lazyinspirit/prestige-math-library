---
id: def-fixed-point-sets-of-a-group-action
kind: definition
title: "The fixed-point sets $X^g$ and $X^G$ of a group action"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-action]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, 14.3"
      url: "https://twjudson.github.io/aata-files/aata-html/actions-section-burnsides-counting-theorem.html"
pipeline_run: null
---

## Definition

Let a group $G$ act on a set $X$ ([[def-group-action]]). For $g\in G$, the
**fixed-point set of $g$** is

$$X^g:=\{x\in X:g\cdot x=x\}.$$

The **global fixed-point set** is

$$X^G:=\{x\in X:g\cdot x=x\text{ for every }g\in G\}=\bigcap_{g\in G}X^g.$$
