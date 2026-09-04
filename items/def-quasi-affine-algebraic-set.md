---
id: def-quasi-affine-algebraic-set
kind: definition
title: "A quasi-affine algebraic set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-affine-algebraic-set
  - thm-zariski-closed-sets-affine-space
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 3e"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, affine-open terminology in Chapter 1"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
---

## Definition

Let $k$ be an algebraically closed field. A **quasi-affine algebraic set** over
$k$ is an open subset of an affine algebraic set in the Zariski topology.

Thus every affine algebraic set is quasi-affine, but a quasi-affine algebraic
set need not be closed in any ambient affine space.
