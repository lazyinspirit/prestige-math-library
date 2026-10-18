---
id: def-finite-semisimple-module-category-over-fusion-category
kind: definition
title: Finite semisimple module category over a fusion category
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-fusion-and-multifusion-category
  - def-semisimple-object-and-semisimple-abelian-category
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, §1.4
      url: https://arxiv.org/pdf/1812.11933
    - title: Décoppet, Extension Theory and Fermionic Strongly Fusion 2-Categories, §2.2
      url: https://www.maths.tcd.ie/EMIS/journals/SIGMA/2024/092/sigma24-092.pdf
    - title: Décoppet and Yu, Fiber 2-Functors and Tambara-Yamagami Fusion 2-Categories, §2.2
      url: https://arxiv.org/pdf/2306.08117
---

## Definition

Let $\mathcal C$ be a fusion category over $k$. A **finite semisimple right $\mathcal C$-module category** consists of a $k$-linear abelian category $\mathcal M$, semisimple in the sense of [[def-semisimple-object-and-semisimple-abelian-category]], with finitely many isomorphism classes of simple objects and finite-dimensional $k$-vector spaces $\operatorname{Hom}_{\mathcal M}(m,n)$ for all $m,n\in\mathcal M$, together with a bilinear action functor $\odot:\mathcal M\times\mathcal C\to\mathcal M$ and natural isomorphisms
$$\alpha_{m,X,Y}:(m\odot X)\odot Y\longrightarrow m\odot(X\otimes Y),\qquad \rho_m:m\odot\mathbf1\longrightarrow m,$$
which satisfy the module pentagon and triangle equations obtained from the associator and unitors of $\mathcal C$. The left-action convention is defined by reversing the order of the action factors.

A **module functor** $F:\mathcal M\to\mathcal N$ is a linear functor with natural action comparisons $F(m\odot X)\cong F(m)\odot X$ satisfying the module associativity and unit equations. A **module-natural transformation** is a natural transformation commuting with those comparisons. These objects, functors, and transformations form a 2-category denoted $\operatorname{Mod}(\mathcal C)$ once its composition and monoidal product are specified.

This definition alone does not assert that there are finitely many equivalence classes of simple module categories, nor that $\operatorname{Mod}(\mathcal C)$ is a fusion 2-category.
