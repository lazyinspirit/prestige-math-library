---
id: def-coordinate-ring-affine-algebraic-set
kind: definition
title: "The coordinate ring of an affine algebraic set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-quotient-ring
  - def-vanishing-ideal-affine-set
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 2i"
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

Let $k$ be an algebraically closed field and let $X\subseteq \mathbf A_k^n$ be
an affine algebraic set. Its **coordinate ring** is
$$ k[X]:=k[x_1,\ldots,x_n]/I(X). $$

The image of $x_i$ in $k[X]$ is the $i$th **coordinate function** on $X$. Thus
elements of $k[X]$ are polynomial expressions modulo the relations that vanish
everywhere on $X$.
