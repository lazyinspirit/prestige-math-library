---
id: def-commutator-and-commutator-subgroup
kind: definition
title: "Commutators $[g,h]=ghg^{-1}h^{-1}$ and the commutator subgroup $[G,G]$"
status: draft
origin: session
authorship: literature-derived
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-generated-subgroup, lem-group-inverse-laws]
justified_by: []
aliases: [def-derived-subgroup]
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Commutator subgroup"
      url: "https://encyclopediaofmath.org/wiki/Commutator_subgroup"
pipeline_run: null
---

## Definition

Let $G$ be a group. For $g,h\in G$, their **commutator** is

$$[g,h]:=ghg^{-1}h^{-1}.$$

This convention is fixed throughout; some sources use its inverse. By the
inverse laws of [[lem-group-inverse-laws]], one has
$[g,h]^{-1}=hgh^{-1}g^{-1}=[h,g]$.

The **commutator subgroup**, or **derived subgroup**, is the subgroup generated
by all commutators:

$$[G,G]:=\langle\{[g,h]:g,h\in G\}\rangle.$$

The generated subgroup notation is that of [[def-generated-subgroup]].
