---
id: def-transverse-linear-subspaces
kind: definition
title: "Transverse linear subspaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-subspace,
       thm-dimension-formula]
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
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Definition

Let $V$ be a finite-dimensional real vector space, and let $A,B\le V$ be linear
subspaces. They are **transverse**, written $A\pitchfork B$, when

$$A+B=V.$$

Equivalently,

$$\dim(A\cap B)=\dim A+\dim B-\dim V$$

by [[thm-dimension-formula]].
