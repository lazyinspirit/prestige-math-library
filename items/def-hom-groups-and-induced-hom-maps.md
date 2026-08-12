---
id: def-hom-groups-and-induced-hom-maps
kind: definition
title: "The abelian group $\\operatorname{Hom}_R(M,N)$ and maps induced by pre- and postcomposition"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-module-homomorphism-kernel-image-and-cokernel, def-group]
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

For left $R$-modules $M,N$, the set $\operatorname{Hom}_R(M,N)$ of module homomorphisms is an abelian group under pointwise addition, with zero the zero homomorphism and inverse $(-f)(m)=-f(m)$ ([[def-module-homomorphism-kernel-image-and-cokernel]], [[def-group]]).

For a homomorphism $u:M\to N$ and any module $X$, **postcomposition** and **precomposition** give homomorphisms
$$u_*:\operatorname{Hom}_R(X,M)\to\operatorname{Hom}_R(X,N),\quad f\mapsto u\circ f,$$
$$u^*:\operatorname{Hom}_R(N,X)\to\operatorname{Hom}_R(M,X),\quad g\mapsto g\circ u.$$
Composition is associative, so $(v\circ u)_*=v_*\circ u_*$ and $(v\circ u)^*=u^*\circ v^*$; identity maps induce identity maps.
