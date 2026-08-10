---
id: def-conjugacy-class-and-centralizer
kind: definition
title: 'The conjugacy class $\operatorname{Cl}_G(x)$ and centralizer $C_G(x)$ of an element'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group]
justified_by: [lem-centralizers-and-normalizers-are-subgroups]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, 14.2"
      url: "https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html"
pipeline_run: null
---

## Definition

Let $G$ be a group and $x\in G$ ([[def-group]]). The **conjugacy class** of
$x$ is

$$\operatorname{Cl}_G(x):=\{gxg^{-1}:g\in G\}.$$

The **centralizer** of $x$ is

$$C_G(x):=\{g\in G:gx=xg\}=\{g\in G:gxg^{-1}=x\}.$$

The subgroup property implicit in the notation is proved in
[[lem-centralizers-and-normalizers-are-subgroups]].
