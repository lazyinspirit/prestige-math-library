---
id: def-regular-function-projective-variety
kind: definition
title: "regular function projective variety"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-projective-variety-classical, def-function-field-variety, def-regular-function-classical-variety, def-homogeneous-coordinate-ring]
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  audited: 2026-09-06
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Definition

For a classical projective variety $X$, the homogeneous coordinate ring
$S(X)$ is a graded domain. Its field of rational functions is the degree-zero
subfield
$$k(X)=\left\{\frac GH\in\operatorname{Frac}(S(X)):G,H\text{ are homogeneous of the same degree and }H\ne0\right\}.$$
A rational function $f\in k(X)$ is regular at $p\in X$ if
$f=G/H$ for such homogeneous $G,H$ with $H(p)\ne0$. It is regular on
$U\subseteq X$ if it is regular at every point of $U$; write
$\mathcal O_X(U)$ for these functions.
