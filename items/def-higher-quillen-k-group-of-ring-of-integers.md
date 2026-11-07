---
id: def-higher-quillen-k-group-of-ring-of-integers
kind: definition
title: "Higher Quillen K-Groups of a Ring of Integers"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-ring-of-integers-of-a-number-field
  - def-projective-module
  - def-universal-principal-bundle-and-classifying-space
  - def-higher-homotopy-group-by-based-cubes
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Charles A. Weibel, The K-book: An Introduction to Algebraic K-Theory, Chapter IV §§1 and 6"
      url: "https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf"
      locator: "Chapter IV, §1 for the Q-construction and §6, especially §6.3.2, for Quillen K-groups."
verification: {}
---

## Definition

Let $R$ be a commutative unital ring. Let $\mathcal P(R)$ be the category of finitely generated projective $R$-modules, with the split short exact sequences as its exact sequences. Its Quillen category $Q\mathcal P(R)$ has the same objects; a morphism $P\to Q$ is an isomorphism class of spans $P\leftarrow P'\to Q$ whose map to $P$ is a split surjection and whose map to $Q$ is a split injection. Composition is by pullback. For $n\ge0$, define

$$K_n(R):=\pi_{n+1}\!\left(BQ\mathcal P(R),0\right),$$

where $BQ\mathcal P(R)$ is the geometric realization of the nerve of $Q\mathcal P(R)$, based at its zero object. For a number field $K$, the groups $K_n(\mathcal O_K)$ for $n\ge2$ are called the higher algebraic K-groups of its ring of integers.

## Definition references

[Charles A. Weibel, *The K-book*, Chapter IV §§1 and 6](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf)

## Facts & Assumptions

**Given:** A commutative unital ring $R$; when $R=\mathcal O_K$, a number field $K$.

[F1] [[def-projective-module]]: a finitely generated projective module is a direct summand of a finite free module; split kernels, split images, and finite direct sums remain finitely generated projective.

[F2] [[def-universal-principal-bundle-and-classifying-space]]: the classifying space $B\mathcal C$ of a small category $\mathcal C$ is the geometric realization of its nerve.

[F3] [[def-higher-homotopy-group-by-based-cubes]]: $\pi_j(X,x_0)$ is the group of based homotopy classes of maps from the $j$-cube boundary to $(X,x_0)$.

## Proof

**Proof technique:** direct.

1.1 Split short exact sequences of objects in $\mathcal P(R)$ have projective middle term: a split sequence identifies that term with a direct sum of its two end terms. Pullbacks of split surjections along split injections are direct summands of finite direct sums, hence again objects of $\mathcal P(R)$ by [F1]. This makes the stated pullback composition available inside $\mathcal P(R)$. [F1, given, algebra]

2.1 The universal property of pullbacks identifies the two iterated pullbacks of any three composable spans, and identifies the spans with identity legs as identity morphisms. Thus isomorphism classes of the stated spans with this composition form the Quillen category $Q\mathcal P(R)$. [F1, step 1.1, construct]

3.1 Its zero module is an object, so it determines a basepoint of the classifying space in [F2]. Applying [F3] to that based space defines the displayed homotopy group for every $n\ge0$; the restriction $R=\mathcal O_K$ gives the claimed higher groups. [F2, F3, given] ∎

