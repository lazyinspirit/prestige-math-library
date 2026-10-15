---
id: ex-one-dimensional-gaussian-integral-from-tonelli-and-polar-coordinates
kind: example
title: "Tonelli and the plane polar formula give int_R e^{-x^2} dx = sqrt(pi)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-countable-choice, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-borel-sets-are-lebesgue-measurable, thm-borel-products-of-euclidean-spaces-are-euclidean-borel, thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets, cor-continuous-functions-are-borel-measurable, thm-continuous-functions-on-compact-jordan-sets-are-integrable, lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals, thm-monotone-convergence-for-the-integral, thm-nonnegative-improper-multiple-integral-by-exhaustion, thm-of-square-roots, thm-tonelli-theorem-for-sigma-finite-product-spaces, lem-plane-gaussian-integral-in-polar-coordinates]
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Proposition 2.53"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Example

Assume Countable Choice. Let
$$I:=\int_{\mathbb R} e^{-x^2}\,dx.$$
Then $I=\sqrt{\pi}$.

## Facts & Assumptions

**Given:** Countable Choice and the nonnegative function $x \mapsto e^{-x^2}$ on $\mathbb R$.

[L1] Tonelli applies to nonnegative product-measurable functions on sigma-finite measure spaces. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[L2] The nonnegative improper plane Gaussian integral equals $\pi$. ([[lem-plane-gaussian-integral-in-polar-coordinates]])

[L3] Under Countable Choice, Lebesgue measure is sigma-finite with the finite-mass exhaustion $(-k,k]$, $k\ge1$. ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]])

[L4] Continuous Euclidean functions are Borel measurable under Countable Choice, Borel sets are Lebesgue measurable, and $\mathcal B(\mathbb R)\otimes\mathcal B(\mathbb R)=\mathcal B(\mathbb R^2)$. ([[cor-continuous-functions-are-borel-measurable]], [[thm-borel-sets-are-lebesgue-measurable]], [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]])

[L5] Under Countable Choice, product Lebesgue measure agrees with plane Lebesgue measure on Borel sets, hence on nonnegative Borel integrals by simple approximation. ([[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]])

[L6] Continuous functions on compact Jordan sets are Riemann integrable. Under Countable Choice a bounded Borel Riemann integrand on a compact box has the same Lebesgue integral. ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]], [[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]])

[L7] Monotone convergence computes the nonnegative Lebesgue integral from increasing cutoffs, and every compact Jordan exhaustion computes the nonnegative improper multiple integral. ([[thm-monotone-convergence-for-the-integral]], [[thm-nonnegative-improper-multiple-integral-by-exhaustion]])

[L8] Nonnegative square roots are unique. ([[thm-of-square-roots]])

## Verification

**Proof technique:** direct.

1.1 Put $h(x)=e^{-x^2}$ and $H(x,y)=h(x)h(y)$. These functions are continuous and nonnegative, so [L4] supplies Borel, product-Borel and Lebesgue measurability. The two one-dimensional Lebesgue factors are sigma-finite by the fixed exhaustion in [L3]. Thus [L1] applies and gives, in the nonnegative extended sense,
$$I^2=\int_{\mathbb R}\int_{\mathbb R}H(x,y)\,dy\,dx=\int_{\mathbb R^2}H\,d(\lambda_1\otimes\lambda_1).$$
The nonnegative Borel integrals agree with the plane Lebesgue integral by [L5]. [given, L1, L3, L4, L5, construct]

1.2 Let $Q_n=[-n,n]^2$, $n\ge1$. The continuous $H$ is bounded and Riemann integrable on each compact Jordan box by [L6], and its box Lebesgue integral equals its box Riemann integral. The nonnegative measurable cutoffs $H\mathbf1_{Q_n}$ increase to $H$. By [L7], the plane Lebesgue integral is the limit of these box integrals. The same $Q_n$ form a compact Jordan exhaustion of $\mathbb R^2$, so [L7] identifies that limit with the nonnegative improper plane integral. This is $\pi$ by [L2]. [step 1.1, L2, L4, L6, L7, construct]

2.1 Steps 1.1–1.2 give $I^2=\pi<\infty$, so $I$ is finite. Since $I\ge0$, uniqueness of the nonnegative square root in [L8] yields $I=\sqrt\pi$. This proves the Lebesgue identity; step 1.2 explicitly supplies the bridge from the polar supplier's improper integral. [step 1.1, step 1.2, L8] ∎
