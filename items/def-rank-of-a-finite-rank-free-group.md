---
id: def-rank-of-a-finite-rank-free-group
kind: definition
title: "The rank of a free group admitting a finite basis"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-free-basis, thm-finite-free-bases-have-the-same-cardinality]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Free group"
      url: "https://encyclopediaofmath.org/wiki/Free_group"
pipeline_run: null
---

## Definition

A free group $F$ has **finite rank** if it admits a finite free basis. In that
case its **rank** is

$$\operatorname{rank}(F):=|B|,$$

where $B$ is any finite free basis of $F$. This is well-defined by
[[thm-finite-free-bases-have-the-same-cardinality]].

This definition is deliberately restricted to free groups that admit a finite
free basis. It neither defines rank for a free group whose bases are infinite
nor asserts that arbitrary infinite free bases have the same cardinality.

