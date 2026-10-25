---
id: def-daha-a1-symmetric-macdonald-operator
kind: definition
title: "The symmetric Macdonald difference operator of type A1"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-daha-a1-polynomial-representation, def-daha-a1-root-datum-and-parameter-conventions]
justified_by: [lem-daha-a1-macdonald-operator-preserves-orbit-sums]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Alexander A. Kirillov Jr., Lectures on the affine Hecke algebras and Macdonald conjectures"
      url: "https://arxiv.org/pdf/math/9501219"
      locator: "Lecture 4, type-A1 formulas, PDF p. 23; Lecture 5, comparison with Macdonald's difference operator, PDF pp. 24–25."
    - title: "I. G. Macdonald, Affine Hecke algebras and orthogonal polynomials"
      url: "https://numdam.org/item/SB_1994-1995__37__189_0.pdf"
      locator: "§§1–2 and §6, PDF pp. 2–6 and 12–14: the rank-one orbit-sum normalization and Macdonald eigenfunction route."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $V=\{f\in K[z,z^{-1}]:f(z)=f(z^{-1})\}$ be the Weyl-invariant Laurent polynomials. Define the type-A1 symmetric Macdonald difference operator on $V$ by

$$
(\mathcal D f)(z)=\frac{tz^2-t^{-1}}{z^2-1}f(qz)+\frac{t^{-1}z^2-t}{z^2-1}f(q^{-1}z).
$$

The formula is interpreted as the sum of the two rational terms; [[lem-daha-a1-macdonald-operator-preserves-orbit-sums]] proves that for every $f\in V$ the sum is a Weyl-invariant Laurent polynomial.

## Remarks

[[lem-daha-a1-y-sum-restricts-to-macdonald-operator]] identifies this operator as the restriction of the symmetric DAHA translation operator.
