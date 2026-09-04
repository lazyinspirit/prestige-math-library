---
id: ex-empty-affine-algebraic-set-unit-ideal
kind: example
title: "The empty affine algebraic set corresponds to the unit ideal and the zero coordinate ring"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - def-affine-algebraic-set
  - def-coordinate-ring-affine-algebraic-set
  - def-vanishing-ideal-affine-set
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 2a and 2i"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, algebraic-set conventions in Chapter 1"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
---

## Example

By definition,
$$ V(1)=\varnothing. $$
Conversely, every polynomial vanishes on the empty set, so
$$ I(\varnothing)=k[x_1,\ldots,x_n]. $$
Therefore the coordinate ring of the empty affine algebraic set is
$$ k[\varnothing]=k[x_1,\ldots,x_n]/k[x_1,\ldots,x_n]=0. $$

This is the exact boundary case promised by the affine-set convention: the
empty algebraic set matches the unit ideal and the zero ring.
