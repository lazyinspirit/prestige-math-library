---
id: def-vanishing-ideal-affine-set
kind: definition
title: "The vanishing ideal of a subset of affine space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-affine-algebraic-set]
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 2d-e"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, §1.3 and §1.6"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
---

## Definition

Let $k$ be an algebraically closed field and let $X\subseteq k^n$. The
**vanishing ideal** of $X$ is
$$ I(X):=\{f\in k[x_1,\ldots,x_n]:f(a)=0\text{ for every }a\in X\}. $$

Thus $I(X)$ records the polynomial equations satisfied by every point of $X$.
At the two boundary cases,
$$ I(\varnothing)=k[x_1,\ldots,x_n] \qquad\text{and}\qquad I(k^n)=\{f:f(a)=0\text{ for every }a\in k^n\}. $$
