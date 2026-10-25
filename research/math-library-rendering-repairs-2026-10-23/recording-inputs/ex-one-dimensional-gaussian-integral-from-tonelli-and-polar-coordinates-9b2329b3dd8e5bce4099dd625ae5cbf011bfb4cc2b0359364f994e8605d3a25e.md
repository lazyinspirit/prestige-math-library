---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-one-dimensional-gaussian-integral-from-tonelli-and-polar-coordinates.json
  precheck: pass
id: ex-one-dimensional-gaussian-integral-from-tonelli-and-polar-coordinates
kind: example
title: Tonelli and the plane polar formula give $\int_{\mathbb R} e^{-x^2}\,dx = \sqrt{\pi}$
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-plane-gaussian-integral-in-polar-coordinates
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
  - thm-monotone-convergence-for-the-integral
  - thm-nonnegative-improper-multiple-integral-by-exhaustion
  - thm-of-square-roots
proof_strategy: direct
sources:
  references:
    - title: Gerald B. Folland, Real Analysis, 2nd ed., Proposition 2.53
      url: https://djvu.online/file/NPF4BEtSuqdFA
forward_refs:
  - lem-gaussian-density-integrals-for-supplied-length-measures
---

## Example

Let
$$I:=\int_{\mathbb R} e^{-x^2}\,dx.$$
Then $I=\sqrt{\pi}$.

## Facts & Assumptions

**Given:** The nonnegative function $x \mapsto e^{-x^2}$ and the supplied reference length measure $\lambda_1$, whose Borel restriction is countably additive and agrees with half-open interval lengths. The plane measure used below is its product; no construction of Lebesgue length measure or its completion is used.

[L1] Tonelli applies to nonnegative product-measurable functions on sigma-finite measure spaces. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[L2] The nonnegative improper plane Gaussian integral equals $\pi$. ([[lem-plane-gaussian-integral-in-polar-coordinates]])

[L3] Sigma-finite factors have a product measure with the rectangle formula. Measures agreeing on a generating pi-system with a common finite-mass exhaustion agree everywhere; rational half-open boxes generate the Euclidean Borel sigma-algebra. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]], [[thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn]])

[L4] $\mathcal B(\mathbb R)\otimes\mathcal B(\mathbb R)=\mathcal B(\mathbb R^2)$. Continuous real functions are Borel measurable by the inverse-image sigma-algebra argument. ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]])

[L5] Under the supplied box-volume measure contract, compact bounded Borel Riemann integrals equal the corresponding measure integrals, without a choice premise. ([[lem-gaussian-density-integrals-for-supplied-length-measures]])

[L6] Continuous functions on compact Jordan sets are Riemann integrable. ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]])

[L7] Monotone convergence computes the nonnegative Lebesgue integral from increasing cutoffs, and every compact Jordan exhaustion computes the nonnegative improper multiple integral. ([[thm-monotone-convergence-for-the-integral]], [[thm-nonnegative-improper-multiple-integral-by-exhaustion]])

[L8] Nonnegative square roots are unique. ([[thm-of-square-roots]])

## Verification

**Proof technique:** direct.

1.1 Put $h(x)=e^{-x^2}$ and $H(x,y)=h(x)h(y)$. These continuous nonnegative functions are Borel and product-measurable by [L4]. The supplied $\lambda_1$ has the explicit finite-mass exhaustion $(-n,n]$, of measure $2n$. By [L3] its product measure exists; by [L4] it is a Borel measure on $\mathbb R^2$. Denote it $\lambda_2$; its half-open box volumes are the usual areas by the rectangle formula. Tonelli [L1] therefore gives, in the nonnegative extended sense, $$I^2=\int_{\mathbb R}\int_{\mathbb R}H(x,y)\,dy\,dx=\int_{\mathbb R^2}H\,d\lambda_2.$$ The plane measure is thus supplied by the generic product theorem from the given length measure. [given, L1, L3, L4, construct]

2.1 Let $Q_n=[-n,n]^2$, $n\ge1$. The continuous $H$ is bounded and Riemann integrable on each compact Jordan box by [L6], and its box supplied-measure integral equals its box Riemann integral by [L5]. The nonnegative measurable cutoffs $H\mathbf1_{Q_n}$ increase to $H$. By [L7], the plane Lebesgue integral is the limit of these box integrals. The same $Q_n$ form a compact Jordan exhaustion of $\mathbb R^2$, so [L7] identifies that limit with the nonnegative improper plane integral. This is $\pi$ by [L2]. [step 1.1, L2, L4, L5, L6, L7, construct]

3.1 Steps 1.1 and 2.1 give $I^2=\pi<\infty$, so $I$ is finite. Since $I\ge0$, uniqueness of the nonnegative square root in [L8] yields $I=\sqrt\pi$. This proves the Lebesgue identity; step 2.1 explicitly supplies the bridge from the polar supplier's improper integral. [step 1.1, step 2.1, L8] ∎
