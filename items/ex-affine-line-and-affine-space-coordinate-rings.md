---
id: ex-affine-line-and-affine-space-coordinate-rings
kind: example
title: "Affine space has zero vanishing ideal and polynomial coordinate ring"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-affine-algebraic-set
  - def-coordinate-ring-affine-algebraic-set
  - lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 2i"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, §1.1 and §1.5"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
---

## Example

Let $k$ be an algebraically closed field and let $n\ge1$. Since every
algebraically closed field is infinite, the lemma
[[lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring]]
shows that no nonzero polynomial in $k[x_1,\ldots,x_n]$ vanishes on all of
$k^n=\mathbf A_k^n$. Therefore
$$ I(\mathbf A_k^n)=0, $$
and the coordinate-ring definition gives
$$ k[\mathbf A_k^n]=k[x_1,\ldots,x_n]. $$

At the boundary case $n=0$, the affine space $\mathbf A_k^0$ is the one-point
set. Its ambient polynomial ring is just $k$, its vanishing ideal is again $0$,
and its coordinate ring is therefore $k$.
