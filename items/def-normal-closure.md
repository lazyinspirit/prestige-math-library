---
id: def-normal-closure
kind: definition
title: "The normal closure of a subset of a group"
status: draft
origin: session
authorship: literature-derived
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-intersection-of-normal-subgroups, def-normal-subgroup]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, HNN-extension"
      url: "https://encyclopediaofmath.org/wiki/HNN-extension"
pipeline_run: null
---

## Definition

Let $G$ be a group and let $S\subseteq G$. The family

$$\mathcal N_S:=\{N:N\mathrel{\trianglelefteq}G\text{ and }S\subseteq N\}$$

is nonempty because $G\mathrel{\trianglelefteq}G$ by
[[def-normal-subgroup]]. Its intersection is normal by
[[lem-intersection-of-normal-subgroups]]. The **normal closure of $S$ in $G$**
is

$$\langle\!\langle S\rangle\!\rangle_G:=\bigcap_{N\in\mathcal N_S}N.$$

It contains $S$ and is contained in every normal subgroup of $G$ that contains
$S$. Thus it is the smallest normal subgroup of $G$ containing $S$.
