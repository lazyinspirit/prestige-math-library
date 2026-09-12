---
id: cex-using-multiplicity-one-for-imaginary-roots-gives-the-wrong-affine-denominator
kind: counterexample
title: Using multiplicity one for imaginary roots gives the wrong affine denominator
deps: ["def-kac-moody-denominator-product-with-root-multiplicities", "prop-roots-of-an-untwisted-affine-lie-algebra"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Sections 6.1-6.3 and 10.3
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Sections 4.2 and 12.3
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement refuted

Replacing every imaginary-root multiplicity by one preserves the affine denominator.

A counterexample is untwisted affine type $A_2$, where the true normalized product has a different coefficient at $e^{-\delta}$ from the modified product.

## Facts & Assumptions

**Given:** Affine $A_2$, with $\delta=\alpha_0+\alpha_1+\alpha_2$.

[F1] [[def-kac-moody-denominator-product-with-root-multiplicities]] defines the normalized formal product using actual multiplicities.

[F2] [[prop-roots-of-an-untwisted-affine-lie-algebra]] gives, in untwisted affine $A_2$ from loop $\mathfrak{sl}_3$, each nonzero $n\delta$ as imaginary with root space $\mathfrak h_0\otimes t^n$ of dimension two; all other roots have nonzero finite-root part and are real of multiplicity one.

## Counterexample

1.1 By F2 the factor for $\delta$ in F1 is $(1-e^{-\delta})^2=1-2e^{-\delta}+e^{-2\delta}$; the proposed replacement is $1-e^{-\delta}$. A positive root below $\delta$ that is imaginary must equal $\delta$: in F2's computed loop list the other positive roots have nonzero finite-root part and squared length two, hence are real, while positive imaginary roots are $n\delta$. Terms from $n\ge2$ cannot contribute at degree $\delta$ because their simple coordinates exceed those of $\delta$. [F1, F2, algebra]

2.1 Let $R$ be the common product of all factors relevant at or below $\delta$ other than the $\delta$ factor. Its constant coefficient is one by F1. If $r$ is its coefficient at $e^{-\delta}$, the true product has coefficient $r-2$ and the modified product has coefficient $r-1$. Cross products with the nonconstant part of the $\delta$ factor require the zero coefficient of $R$, already one; no other terms can reach this degree. Thus the modified coefficient exceeds the true one by exactly one, refuting the claim. The zero-degree coefficients agree, so that agreement cannot detect the error. Rank-one imaginary multiplicity one would give no such witness; the rank-two diagonal space in F2 is essential. The calculation is finite and choice-free. [F1, F2, step 1.1, algebra] ∎
