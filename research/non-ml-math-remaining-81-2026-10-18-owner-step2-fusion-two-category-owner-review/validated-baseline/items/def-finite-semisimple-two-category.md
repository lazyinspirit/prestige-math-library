---
id: def-finite-semisimple-two-category
kind: definition
title: Finite semisimple 2-category
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-weak-linear-two-category
  - def-semisimple-object-and-semisimple-abelian-category
  - def-monad
  - def-adjunction-by-unit-counit-and-triangle-identities
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, §§1.4.1-1.4.3
      url: https://arxiv.org/pdf/1812.11933
---

## Definition

A **finite semisimple linear 2-category** is a weak linear 2-category in which:

- every hom category is a finite semisimple $k$-linear category (it has finitely many simple isomorphism classes, finite-dimensional hom spaces, and every object is a finite direct sum of simples);
- there is a zero object, and each pair $A,B$ has a biproduct $A\oplus B$ with inclusions and projections $\iota_A,\iota_B,\pi_A,\pi_B$ satisfying $\pi_i\circ\iota_j\cong0$ for $i\ne j$, $\pi_i\circ\iota_i\cong1$, and $\iota_A\circ\pi_A\oplus\iota_B\circ\pi_B\cong1_{A\oplus B}$; finite biproducts are preserved by composition;
- every 1-morphism has both a left and a right adjoint ([[def-adjunction-by-unit-counit-and-triangle-identities]]), with unit and counit 2-morphisms satisfying the two triangle identities;
- every separable monad ([[def-monad]]) has a separable splitting: a monad $T:A\to A$ whose multiplication $\mu:T^2\Rightarrow T$ has a section $\sigma:T\Rightarrow T^2$ that is a map of regular $T$-bimodules is represented by an object $A_T$ and an adjunction $A\rightleftarrows A_T$ in the sense of [[def-adjunction-by-unit-counit-and-triangle-identities]] whose induced monad is $T$;
- there are finitely many equivalence classes of simple objects, where an object $A$ is **simple** when its identity 1-morphism is simple in $\mathcal B(A,A)$.

The splitting condition concerns monads in the 2-category; it is stronger than the existence of finite direct sums in each hom category. A choice of separable splitting is not part of the property.
