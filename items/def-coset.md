---
id: def-coset
kind: definition
title: "Left and right cosets $gH$ and $Hg$ of a subgroup"
status: published
origin: session
deps: [def-group, def-subgroup]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Cosets and Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
pipeline_run: null
---

## Definition

Let $G$ be a group and let $H\le G$ be a subgroup ([[def-group]],
[[def-subgroup]]). For $g\in G$, the **left coset** and **right coset** of $H$
represented by $g$ are

$$gH:=\{gh:h\in H\},\qquad Hg:=\{hg:h\in H\}.$$

The element $g$ is a **representative** of these cosets. The notation denotes
subsets of $G$; it does not assert that either subset is a subgroup.

## Remarks

- Because the identity $e$ belongs to $H$, every representative belongs to its
  two cosets: $g=ge=eg\in gH\cap Hg$.
- The identity cosets are $eH=H=He$. Left and right cosets can differ in a
  nonabelian group.
