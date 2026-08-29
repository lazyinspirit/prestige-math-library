---
id: def-oriented-unit-volume-form
kind: definition
title: "The oriented unit volume form"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-orientation-of-a-finite-dimensional-real-vector-space, thm-gram-inner-product-on-exterior-powers-is-positive-definite, cor-dimension-of-the-kth-exterior-power, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-finite-dimensional-isometry-characterisations, cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus, cor-the-top-exterior-power-acts-by-the-determinant]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Reyer Sjamaar, Manifolds and Differential Forms, §8.3"
      url: "https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf"
---

## Definition

Let $V$ be an oriented finite-dimensional real inner product space with $\dim V=n\ge1$ ([[def-orientation-of-a-finite-dimensional-real-vector-space]]). Choose a positively oriented orthonormal basis $(b_1,\ldots,b_n)$, which exists by [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]], and define the **oriented unit volume form**

$$\omega:=b_1\wedge\cdots\wedge b_n\in\Lambda^nV.$$

**This is independent of the choice.** Any other positively oriented orthonormal basis $(b'_1,\ldots,b'_n)$ is obtained from $(b_1,\ldots,b_n)$ by a linear map $Q$ that carries one orthonormal basis to another, hence is an orthogonal operator by [[thm-finite-dimensional-isometry-characterisations]]; over the reals its determinant is therefore $\pm1$ by [[cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus]]. Positivity of the change of basis forces $\det Q=1$, and by [[cor-the-top-exterior-power-acts-by-the-determinant]],

$$b'_1\wedge\cdots\wedge b'_n=\Lambda^nQ(b_1\wedge\cdots\wedge b_n)=\det Q\cdot(b_1\wedge\cdots\wedge b_n)=\omega.$$

**The form is a unit.** By the Gram pairing of [[thm-gram-inner-product-on-exterior-powers-is-positive-definite]], $\langle\omega,\omega\rangle=\det(\langle b_i,b_j\rangle)=\det I_n=1$. For $n=0$, set $\omega:=1\in\Lambda^0V=\mathbb R$.

## Remarks

Reversing the orientation replaces $\omega$ by $-\omega$; the oriented unit volume form is where the orientation enters the Hodge-star data.
