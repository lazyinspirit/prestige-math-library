---
title: Transverse-polarization completeness and angular average
status: draft
research_item: lem-qec-distinguishability-polarization-identity
dependency_level: 1
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 12, Eq. (S3.12) and following text
      statement: For two orthonormal transverse polarizations perpendicular to a unit
        wave vector, their component sum is the transverse projector; its
        isotropic angular integral is 8π/3 on the diagonal and zero off the
        diagonal.
      hypotheses: Two orthonormal transverse polarizations and isotropic angular
        integration, as stated in the frozen article formulation.
      reading_limits: Article-origin attribution from the frozen formulation and
        supplied extracted article text; this citation is not used as proof of
        the result.
---

PDF p. 12: ` Eq. (S3.12) and following text `

## Prerequisites

- [lem-qec-prereq-transverse-angular-average](item-lem-qec-prereq-transverse-angular-average)
- [math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space)
- [math:def-orthogonal-vectors-sets-and-orthonormal-bases](https://alphabetamath.cc/item/def-orthogonal-vectors-sets-and-orthonormal-bases)
- [math:def-polar-surface-measure-on-the-unit-sphere](https://alphabetamath.cc/item/def-polar-surface-measure-on-the-unit-sphere)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Statement

Assume the Axiom of Countable Choice. Let $S^2=\{n\in\mathbb R^3:|n|=1\}$ have polar surface measure $\sigma$, and let $e_1,e_2,e_3$ be the standard real coordinate basis. For each $n\in S^2$, let $\varepsilon_1,\varepsilon_2$ be an orthonormal basis of the transverse subspace $n^\perp=\{v\in\mathbb C^3:\sum_{r=1}^3v_r n_r=0\}$, with respect to $\langle u,v\rangle=\sum_{r=1}^3u_r\overline{v_r}$. Thus transverse means perpendicular to $n$, and orthonormal means $\langle\varepsilon_a,\varepsilon_b\rangle=\delta_{ab}$. For $i,j\in\{1,2,3\}$, $$\sum_{a=1}^2(e_i\cdot\varepsilon_a)\overline{(e_j\cdot\varepsilon_a)}=\delta_{ij}-n_i n_j,\qquad \int_{S^2}(\delta_{ij}-n_i n_j)\,d\sigma(n)=\frac{8\pi}{3}\delta_{ij}.$$ Here $e_i\cdot v=v_i$ and $\delta_{ij}$ is one when $i=j$ and zero otherwise. In particular, the angular integral is $8\pi/3$ on the diagonal and zero off the diagonal.

## Statement references

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space)

[math:def-orthogonal-vectors-sets-and-orthonormal-bases](https://alphabetamath.cc/item/def-orthogonal-vectors-sets-and-orthonormal-bases)

[math:def-polar-surface-measure-on-the-unit-sphere](https://alphabetamath.cc/item/def-polar-surface-measure-on-the-unit-sphere)

[lem-qec-prereq-transverse-angular-average](item-lem-qec-prereq-transverse-angular-average)

## Facts & Assumptions

**Given:** Countable Choice, the sphere, measure, transverse bases and indices as in the statement.

**Goal:** Prove the component completeness identity and the stated angular integral.

[F1] Countable Choice says that every sequence of nonempty sets has a choice function. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F2] The displayed inner product uses the linear-first convention, and $\sigma$ is the polar surface measure on the unit sphere. [math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space) [math:def-polar-surface-measure-on-the-unit-sphere](https://alphabetamath.cc/item/def-polar-surface-measure-on-the-unit-sphere)

[F3] Under Countable Choice, for an orthonormal complex basis of $n^\perp$, the transverse-angular-average lemma gives $\sum_a\varepsilon_{a,i}\overline{\varepsilon_{a,j}}=\delta_{ij}-n_i n_j$ and $\int_{S^2}(\delta_{ij}-n_i n_j)\,d\sigma(n)=8\pi\delta_{ij}/3$. [lem-qec-prereq-transverse-angular-average](item-lem-qec-prereq-transverse-angular-average)

## Proof

1.1 For each fixed $n$, the given basis satisfies the hypotheses of [F3]. Since $e_i\cdot\varepsilon_a=\varepsilon_{a,i}$, its first identity is exactly the displayed completeness identity. [given, F1, F2, F3]

2.1 The second identity of [F3] gives the integral of the right-hand side of step 1.1. Substituting $\delta_{ij}=1$ for $i=j$ and $\delta_{ij}=0$ otherwise gives the two stated values. The integrand is the pointwise projector expression, so no measurable choice of transverse basis is needed. [F3, step 1.1, algebra] ∎
