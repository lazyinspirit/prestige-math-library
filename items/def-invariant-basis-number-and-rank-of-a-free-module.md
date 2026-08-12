---
id: def-invariant-basis-number-and-rank-of-a-free-module
kind: definition
title: "Invariant basis number and the rank of a free module"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-free-module-on-a-set-and-standard-basis, def-module-homomorphism-kernel-image-and-cokernel]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Definition

A unital ring $R$ has **invariant basis number for finite bases** if
$$R^m\cong R^n\quad\Longrightarrow\quad m=n$$
for all $m,n\in\mathbb N$, as left $R$-modules ([[def-free-module-on-a-set-and-standard-basis]], [[def-module-homomorphism-kernel-image-and-cokernel]]).

When $R$ has this property and a free module $F$ has a finite basis of $n$ elements, its **rank** is $\operatorname{rank}_R(F)=n$. This definition makes no assertion about equality of arbitrary infinite bases.
