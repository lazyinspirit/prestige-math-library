---
id: def-smooth-foliated-concordance
kind: definition
title: "Smooth foliated concordance of codimension-one foliations"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-a-foliation-transverse-to-the-boundary-restricts-to-the-boundary, def-transversely-oriented-codimension-one-foliation, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, def-smooth-manifold, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
dependency_level: 2
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Steven Hurder and Remi Langevin, Dynamics and the Godbillon-Vey Class of C1 Foliations (complete author-hosted PDF)"
      url: "https://homepages.math.uic.edu/~hurder/papers/59manuscript-rev2016.pdf"
      locator: "\u00a73.1, printed p. 10 (GV is an invariant of the foliated concordance class, after Thurston and Lawson)"
---

## Definition

Assume Countable Choice $\mathrm{AC}_\omega$. Let $M$ be a closed smooth manifold and
let $F_0,F_1$ be transversely oriented codimension-one foliations of $M$ with defining
forms $\omega_0,\omega_1$. A **smooth foliated concordance** from $F_0$ to $F_1$ is a
codimension-one regular foliation $G$ of $W:=M\times[0,1]$, transverse to the two
boundary slices $M\times\{0\}$ and $M\times\{1\}$, together with a nowhere-vanishing
defining $1$-form $\omega$ for $G$ such that for $j=0,1$ the pullback $i_j^{*}\omega$
along $i_j(x):=(x,j)$ is a positive smooth multiple of $\omega_j$, and hence a defining form for $F_j$ with its prescribed coorientation. By [[lem-a-foliation-transverse-to-the-boundary-restricts-to-the-boundary]] each slice $M\times\{j\}$ carries the
codimension-one foliation $G|_{M\times\{j\}}$ with defining form $i_j^{*}\omega$, so the
requirement is exactly that these boundary foliations be $F_j$ with the prescribed co-
orientations.


The smooth structure on $M\times[0,1]$ is given explicitly by product charts: near $s=0$ use $(x,s)$ and near $s=1$ use $(x,1-s)$, with x a smooth chart of M. These are half-space charts with smooth product transitions, as required by [[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]].
