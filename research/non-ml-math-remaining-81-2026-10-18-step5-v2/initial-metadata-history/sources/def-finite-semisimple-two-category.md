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

Let $\mathcal B$ be a weak linear $2$-category. A **monad on $A$ in $\mathcal B$** is a $1$-morphism $T:A\to A$ with $2$-morphisms $\eta:1_A\Rightarrow T$ and $\mu:T\circ T\Rightarrow T$ satisfying
$$\mu\cdot(\mu\ast1_T)=\mu\cdot(1_T\ast\mu),\qquad \mu\cdot(\eta\ast1_T)=1_T=\mu\cdot(1_T\ast\eta),$$
where $\cdot$ is vertical composition, $\ast$ is horizontal composition, and the associator and unitors of $\mathcal B$ are inserted. Equivalently it is an algebra object in the monoidal endomorphism category $\mathcal B(A,A)$. This extends the ordinary-category definition in [[def-monad]]. It is **separable** if there is a $2$-morphism $\sigma:T\Rightarrow T\circ T$ with
$$\mu\cdot\sigma=1_T,\qquad \sigma\cdot\mu=(\mu\ast1_T)\cdot(1_T\ast\sigma)=(1_T\ast\mu)\cdot(\sigma\ast1_T),$$
again with coherent associators. The last two equalities say that $\sigma$ is a map of regular $T$-bimodules.

An **adjunction** $L\dashv U$ in $\mathcal B$, for $L:A\to B$ and $U:B\to A$, consists of $2$-morphisms $\eta:1_A\Rightarrow UL$ and $\varepsilon:LU\Rightarrow1_B$ with
$$(\varepsilon\ast1_L)\cdot(1_L\ast\eta)=1_L,\qquad(1_U\ast\varepsilon)\cdot(\eta\ast1_U)=1_U,$$
with associators and unitors inserted. These are the same triangle equations as in [[def-adjunction-by-unit-counit-and-triangle-identities]], now for $1$- and $2$-morphisms of $\mathcal B$. Its induced monad is $(UL,\eta,1_U\ast\varepsilon\ast1_L)$.

A **finite semisimple linear 2-category** is a weak linear 2-category in which:

- every hom category is a finite semisimple $k$-linear category (it has finitely many simple isomorphism classes, finite-dimensional hom spaces, and every object is a finite direct sum of simples);
- there is a zero object, and each pair $A,B$ has a biproduct $A\oplus B$ with inclusions and projections $\iota_A,\iota_B,\pi_A,\pi_B$ satisfying $\pi_i\circ\iota_j\cong0$ for $i\ne j$, $\pi_i\circ\iota_i\cong1$, and $\iota_A\circ\pi_A\oplus\iota_B\circ\pi_B\cong1_{A\oplus B}$; finite biproducts are preserved by composition;
- every 1-morphism has both a left and a right adjoint ([[def-adjunction-by-unit-counit-and-triangle-identities]]), with unit and counit 2-morphisms satisfying the two triangle identities;
- every separable monad has a separable splitting: a separable monad $T:A\to A$ is represented by an object $A_T$ and an adjunction $L\dashv U$, where $L:A\to A_T$ and $U:A_T\to A$, in the sense of [[def-adjunction-by-unit-counit-and-triangle-identities]]. Its induced monad $UL$ is isomorphic to $T$ as a monad, and its counit $\varepsilon:LU\Rightarrow 1_{A_T}$ has a section $s:1_{A_T}\Rightarrow LU$ as a 2-morphism in $\mathcal B(A_T,A_T)$, with $\varepsilon\circ s=1_{1_{A_T}}$ (in a bimodule presentation this section is a bimodule map);
- there are finitely many equivalence classes of simple objects, where an object $A$ is **simple** when its identity 1-morphism is simple in $\mathcal B(A,A)$.

The splitting condition concerns monads in the 2-category; it is stronger than the existence of finite direct sums in each hom category. A choice of separable splitting is not part of the property.
