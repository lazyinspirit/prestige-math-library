---
id: def-free-module-on-a-set-and-standard-basis
kind: definition
title: "The free module on a set and its standard basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-direct-sum-of-a-family-of-modules, def-generated-cyclic-finitely-generated-and-free-modules]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  repair: research/frontier-42-coxeter-32-codex-step6-a-external-definitions/def-free-module-on-a-set-and-standard-basis.receipt.json
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
For $x\in X$, the **standard basis vector** $e_x$ has coordinate $1_R$ at $x$ and zero elsewhere. Every element is represented by a unique finitely supported coefficient family $(r_x)_{x\in X}$, and is written
$$\sum_{x\in X}r_xe_x.$$
The **standard basis map** $X\to R^{(X)}$ sends $x$ to $e_x$. It is injective exactly when $1_R\ne0$ or $X$ has at most one element; in these cases it is the standard basis inclusion. Indeed, for distinct $x,y$ the $x$-coordinates of $e_x$ and $e_y$ are $1_R$ and $0$. For the zero ring every $e_x$ is zero, but the indexed family $(e_x)_{x\in X}$ still has unique finitely supported coefficients.

More generally, a family $(b_x)_{x\in X}$ is a **basis** of a module $M$ when every element of $M$ is uniquely a finite $R$-linear combination of the $b_x$ ([[def-generated-cyclic-finitely-generated-and-free-modules]]). For $X=\varnothing$, $R^{(X)}=0$ and its empty family is a basis.
