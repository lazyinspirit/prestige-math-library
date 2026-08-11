---
id: def-similar-matrices
kind: definition
title: 'Similar matrices: $B=P^{-1}AP$ for an invertible $P$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-invertible-matrix-and-general-linear-group]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'S. Schiavone, MIT 18.700 Day 9, Definition 38'
      url: 'https://math.mit.edu/~sschiavo/18-700/Lectures/LessonPlan9.pdf'
pipeline_run: null
---

## Definition

Two matrices $A,B\in M_n(F)$ are **similar** when there is an invertible matrix
$P\in\operatorname{GL}_n(F)$ such that

$$B=P^{-1}AP.$$

The matrix $P$ is a **change-of-basis matrix** or **conjugating matrix** for
this similarity. Replacing $P$ by its inverse exchanges the roles of $A$ and
$B$.
