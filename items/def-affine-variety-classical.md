---
id: def-affine-variety-classical
kind: definition
title: "A classical affine variety"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-affine-algebraic-set]
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 3e"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, §1.5"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
---

## Definition

Let $k$ be an algebraically closed field. A **classical affine variety** over
$k$ is a nonempty affine algebraic set $X\subseteq \mathbf A_k^n$ that is
irreducible in the Zariski topology, meaning that whenever
$X=Y\cup Z$ with $Y$ and $Z$ closed in $X$, one has $X=Y$ or $X=Z$.

This retains the pre-scheme convention that the empty algebraic set is allowed
as an algebraic set but is not called a variety.
