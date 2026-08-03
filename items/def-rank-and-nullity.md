---
id: def-rank-and-nullity
kind: definition
title: "Rank and nullity of a linear map with finite-dimensional domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-kernel-and-image-of-a-linear-map, thm-linear-kernel-image-and-injectivity,
       lem-kernel-basis-extension-gives-image-basis, def-dimension,
       thm-dimension-of-a-linear-subspace]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "UCLA Algebra Notes, rank and nullity"
      url: "https://www.math.ucla.edu/~mattkowalski/documents/Algebra_Notes.pdf"
    - title: "Axler, Linear Algebra Done Right, 4th ed., Chapter 3"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

Let $T:V\to W$ be a linear map whose domain $V$ is finite-dimensional over
$F$. Its **nullity** and **rank** are

$$\operatorname{nullity}T:=\dim_F(\ker T),\qquad \operatorname{rank}T:=\dim_F(\operatorname{im}T).$$

Both dimensions are defined. The kernel is a linear subspace of the
finite-dimensional space $V$, so it is finite-dimensional by
[[thm-linear-kernel-image-and-injectivity]] and
[[thm-dimension-of-a-linear-subspace]]. The image is finite-dimensional because
[[lem-kernel-basis-extension-gives-image-basis]] constructs a finite basis of
it from a basis of $V$. Thus rank and nullity are natural numbers, including
when $V$ is the zero space.
