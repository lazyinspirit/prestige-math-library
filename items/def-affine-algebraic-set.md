---
id: def-affine-algebraic-set
kind: definition
title: "An affine algebraic set in affine space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 2a"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, §1.1"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
---

## Definition

Let $k$ be an algebraically closed field and let
$S\subseteq k[x_1,\ldots,x_n]$. The **affine algebraic set** cut out by $S$ is
$$ V(S):=\{a=(a_1,\ldots,a_n)\in k^n : f(a)=0\text{ for every }f\in S\}. $$
We also write $\mathbf A_k^n:=k^n$.

By convention,
$$ V(\varnothing)=\mathbf A_k^n \qquad\text{and}\qquad V(1)=\varnothing, $$
because every point vacuously annihilates every polynomial in the empty set,
while no point annihilates the constant polynomial $1$.
