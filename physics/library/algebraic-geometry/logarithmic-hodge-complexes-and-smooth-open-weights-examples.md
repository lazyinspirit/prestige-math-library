---
page: logarithmic-hodge-complexes-and-smooth-open-weights-examples
title: "Logarithmic Hodge Complexes And Smooth Open Weights: Examples"
status: published
requires:
  - logarithmic-hodge-complexes-and-smooth-open-weights
  - relative-homology-excision-and-mayer-vietoris
  - singular-cohomology-and-coefficient-theorems
items: []
examples:
  - ex-the-logarithmic-class-of-the-punctured-line-has-weight-two
---

This companion to [[logarithmic-hodge-complexes-and-smooth-open-weights]] runs
the smallest noncompact example of the logarithmic construction.
[[ex-the-logarithmic-class-of-the-punctured-line-has-weight-two]] takes
$U=\mathbb C^\times\subset\mathbb P^1$ with boundary the two points $0$ and
$\infty$: the weight spectral sequence of the logarithmic complex has only the
column $a=0$ with $H^0$ and $H^2$ of $\mathbb P^1$ and the column $a=1$ with
$H^0(\{0,\infty\};\mathbb Q)(-1)=\mathbb Q(-1)^2$, the single nonzero
differential sends a pair of residues to their sum, and its kernel is the line
spanned by $(1,-1)$, so $\operatorname{Gr}^W_2H^1(U;\mathbb Q)=\mathbb Q(-1)$
while all other weight-graded pieces of $H^1$ vanish. The class
$(2\pi i)^{-1}dz/z$, whose normalized rational residue coordinates at $0$
and $\infty$ are $1$ and $-1$, is
the rational generator. The example therefore exhibits a cohomology class
whose weight $2$ is strictly larger than its cohomological degree $1$, with
Hodge type $(1,1)$; it is a leaf on which nothing else depends. Its verification
uses the full logarithmic theorem, including the rational comparison and the
Hodge-compatible identification of the weight-graded cohomology.
