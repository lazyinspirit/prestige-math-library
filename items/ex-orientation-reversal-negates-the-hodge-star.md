---
id: ex-orientation-reversal-negates-the-hodge-star
kind: example
title: "Reversing orientation negates the Hodge star while keeping the metric fixed"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-determinant-sign-detects-orientation-change, cor-hodge-star-is-an-isometry-and-squares-to-a-sign, thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula, def-oriented-unit-volume-form]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Reyer Sjamaar, Manifolds and Differential Forms, §2.4"
      url: "https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf"
---

## Example

Fix the standard inner product on $\mathbb R^3$ and compare the two orientations: the standard one, represented by the ordered basis $(e_1,e_2,e_3)$, and the reversed one, represented by $(e_2,e_1,e_3)$. For the standard orientation the Hodge star satisfies $\star_+(e_1\wedge e_2)=e_3$; for the reversed orientation the unit volume form is $e_2\wedge e_1\wedge e_3=-e_1\wedge e_2\wedge e_3$, and the Hodge star satisfies $\star_-(e_1\wedge e_2)=-e_3$. The metric is the same in both computations; only the orientation changed, and the star changed sign.

## Facts & Assumptions

**Given:** The standard inner product on $\mathbb R^3$ and the two ordered bases $(e_1,e_2,e_3)$ and $(e_2,e_1,e_3)$.

[L1] Two ordered bases lie in the same orientation class exactly when their change-of-basis isomorphism has positive determinant ([[thm-determinant-sign-detects-orientation-change]]).

[L2] The Hodge star is characterized by $\alpha\wedge\star\beta=\langle\alpha,\beta\rangle\omega$ with the unit volume form $\omega$, and in a positively oriented orthonormal basis $\star e_I=\varepsilon_Ie_{I^c}$ ([[thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula]]).

[L3] The Hodge star is an isometry for the Gram pairing ([[cor-hodge-star-is-an-isometry-and-squares-to-a-sign]]).

[L4] The oriented unit volume form is $\omega=b_1\wedge\cdots\wedge b_n$ for a positively oriented orthonormal basis ([[def-oriented-unit-volume-form]]).

## Verification

**Proof technique:** direct.


1.1 The change of basis from $(e_1,e_2,e_3)$ to $(e_2,e_1,e_3)$ is a transposition with determinant $-1$, so by [L1] the two bases represent the two opposite orientation classes. [L1, algebra]

1.2 By [L4], the unit volume forms are $\omega_+=e_1\wedge e_2\wedge e_3$ and $\omega_-=e_2\wedge e_1\wedge e_3=-\omega_+$. [L4, algebra]

2.1 By the characterizing relation of [L2] and its uniqueness clause, $\alpha\wedge\star_-\beta=\langle\alpha,\beta\rangle\omega_-=-\langle\alpha,\beta\rangle\omega_+=\alpha\wedge(-\star_+\beta)$ for all $\alpha$, so $\star_-=-\star_+$ on every degree. [L2, step 1.2]

3.1 In particular $\star_+(e_1\wedge e_2)=e_3$ by [L2], and step 2.1 gives $\star_-(e_1\wedge e_2)=-e_3$; the metric used in both computations is the same standard inner product, and [L3] records that each star is an isometry for it. [L2, L3, step 2.1]

4.1 Steps 1.1 through 3.1 show that reversing the orientation negates the Hodge star while the metric stays fixed. [step 1.1, step 2.1, step 3.1] ∎
