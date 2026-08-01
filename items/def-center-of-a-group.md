---
id: def-center-of-a-group
kind: definition
title: "The center $Z(G)$ of a group"
status: published
origin: session
authorship: literature-derived
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Characteristic subgroup"
      url: "https://encyclopediaofmath.org/wiki/Characteristic_subgroup"
pipeline_run: null
---

## Definition

Let $G$ be a group ([[def-group]]). The **center of $G$** is

$$Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}.$$

Thus $Z(G)$ consists of the elements that commute with every element of $G$.
Its subgroup and normality properties are proved in [[lem-center-is-normal]].
