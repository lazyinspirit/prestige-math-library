---
id: def-free-module-on-a-set-and-standard-basis
kind: definition
title: "The free module on a set and its standard basis"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-direct-sum-of-a-family-of-modules, def-generated-cyclic-finitely-generated-and-free-modules]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
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

For a unital ring $R$ and a set $X$, the **free left $R$-module on $X$** is
$$R^{(X)}:=\bigoplus_{x\in X}R.$$
For $x\in X$, the **standard basis vector** $e_x$ has coordinate $1_R$ at $x$ and zero elsewhere. Every element has a unique expression
$$\sum_{x\in F}r_xe_x$$
with $F\subseteq X$ finite. The map $x\mapsto e_x$ is the standard basis inclusion.

More generally, a family $(b_x)_{x\in X}$ is a **basis** of a module $M$ when every element of $M$ is uniquely a finite $R$-linear combination of the $b_x$ ([[def-generated-cyclic-finitely-generated-and-free-modules]]). For $X=\varnothing$, $R^{(X)}=0$ and its empty family is a basis.
