---
id: def-real-and-complex-givens-transformations
kind: definition
title: "Real Givens rotations and complex Givens transformations"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-conjugate-real-imaginary-part-and-modulus, def-inner-product-norm]
aliases: []
verification:
  audited: 2026-08-30
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Section 3.4.2"
      url: "https://fncbook.com/house/"
    - title: "David Bindel, CS 4220: Numerical Analysis, Least squares and QR"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-23.html"
---

## Definition

Let $n\ge 2$ and let $0\le i<j\le n-1$.

A **real Givens rotation** in the $(i,j)$-plane is the identity matrix except on
rows and columns $i,j$, where it has the $2\times 2$ block

$$\begin{pmatrix}c&s\\-s&c\end{pmatrix}\qquad(c,s\in\mathbb R,\ c^2+s^2=1).$$A **complex Givens transformation** in the $(i,j)$-plane is the identity except on rows and columns $i,j$, where it has block$$\begin{pmatrix}c&s\\-\overline s&c\end{pmatrix},$$

with $c\in\mathbb R_{\ge 0}$, $s\in\mathbb C$, and $c^2+|s|^2=1$. The modulus
$|s|$ is the one from [[def-complex-conjugate-real-imaginary-part-and-modulus]].

Such transformations act only on the two chosen coordinates and are designed to
zero one targeted entry while preserving the Euclidean norm from
[[def-inner-product-norm]].
