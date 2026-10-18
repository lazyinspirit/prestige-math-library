---
id: lem-standard-real-and-normalized-complex-gaussian-density-normalization-and-moments
kind: lemma
title: Gaussian scalar and finite-product densities have unit mass and unit second moments under Countable Choice
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-countable-choice
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - lem-gaussian-density-integrals-for-supplied-length-measures
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-integrable-real-and-complex-functions-and-their-integrals
proof_strategy: direct
axiom_use: Countable Choice supplies the canonical Lebesgue measures, box volumes and change-of-variables interface; no full Axiom of Choice is used.
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Assume Countable Choice. With canonical Lebesgue measures on the real coordinate spaces, put
$$\varphi_R(t)=(2\pi)^{-1/2}e^{-t^2/2},\qquad \varphi_C(a+ib)=\pi^{-1}e^{-(a^2+b^2)}.$$
Both are nonnegative probability densities, and
$$\int_{\mathbb R}t\varphi_R(t)\,dt=0,\qquad \int_{\mathbb R}t^2\varphi_R(t)\,dt=1,$$
$$\int_{\mathbb C}z\varphi_C(z)\,d\lambda_2(z)=0,\qquad \int_{\mathbb C}|z|^2\varphi_C(z)\,d\lambda_2(z)=1.$$
The first moments are absolutely integrable. If independent real coordinates $X,Y$ have density $\varphi_R$, then $(X+iY)/\sqrt2$ has density $\varphi_C$. For either field $F$ and any finite number $N\ge1$ of scalar coordinates, the density $\prod_{j=1}^N\varphi_F(z_j)$ on its real coordinate space has mass one, and its coordinate projections are independent with the indicated scalar law and second moment one. For $N=0$, the empty coordinate tuple has its unit point-mass law and empty product density one; no undefined zero-dimensional Lebesgue integral is needed.

## Facts & Assumptions

**Given:** Countable Choice, the displayed scalar functions and a finite coordinate count.

[A1] Countable Choice is [[def-countable-choice]]. No family of arbitrary witnesses is selected below.

[F1] Under Countable Choice the canonical Lebesgue measure is a complete measure, its Borel restriction is countably additive, and its half-open boxes have their usual volumes ([[thm-lebesgue-measure-is-a-complete-measure]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F2] For any supplied countably additive Borel length measure with the half-open interval length formula, $g_{m,v}(t)=(2\pi v)^{-1/2}e^{-(t-m)^2/(2v)}$ has mass one, mean $m$ with absolutely integrable first moment, and centered second moment $v$ ([[lem-gaussian-density-integrals-for-supplied-length-measures]]). This supplier assumes no choice beyond the supplied measure: its proof3.1 uses the Gaussian improper integral with explicit compact Riemann/measure comparison; proof4.1 uses proper integration by parts and monotone cutoffs for the second moment, and proof5.1 handles the signed first moment by dominated cutoffs.

[F3] Integrating a nonnegative measurable density over measurable sets defines a measure ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]).

[F4] Under Countable Choice a $C^1$ diffeomorphism between open subsets of the same Euclidean space satisfies the change-of-variables formula for nonnegative Lebesgue measurable functions ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F5] The product of finite-dimensional Euclidean Borel sigma-algebras is the Euclidean Borel sigma-algebra, and under Countable Choice the product of Lebesgue measures agrees with Euclidean Lebesgue measure on Borel sets ([[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]).

[F6] Tonelli applies to nonnegative product-measurable functions on sigma-finite measure spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]). Integrable signed and complex functions integrate linearly ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F7] The nonnegative integral is monotone ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]); finiteness of the absolute-value integral defines real or complex integrability ([[def-integrable-real-and-complex-functions-and-their-integrals]]).

## Proof

1.1 Restrict the complete measure of [F1] to its Borel sets. For dimension one this is exactly the supplied countably additive Borel length measure required by [F2]; its interval volumes follow from [F1]. Apply [F2] with $m=0,v=1$. It gives mass one, zero mean, absolutely integrable first moment and second moment one for $\varphi_R$. These are also the integrals for the full Lebesgue measure, since the integrands and their nonnegative simple approximations are Borel and the measure is the same on all Borel sets. Thus [F3] makes $\varphi_R\,d\lambda_1$ a probability measure under the stated Countable Choice. [A1, F1, F2, F3]

2.1 The real pair density is $g(x,y)=\varphi_R(x)\varphi_R(y)=(2\pi)^{-1}e^{-(x^2+y^2)/2}$. Its integral is one by [F5], [F6] and step 1.1; Lebesgue factors are sigma-finite because the explicit bounded cubes exhaust them with finite volumes by [F1]. Its rectangle probabilities factor by the same Tonelli calculation, so the two real coordinates are independent with the stated scalar laws. The linear map $T(x,y)=(x/\sqrt2,y/\sqrt2)$ is a diffeomorphism of $\mathbb R^2$ onto itself with $|\det DT|=1/2$. Direct substitution gives $\varphi_C(T(x,y))|\det DT|=g(x,y)$. For every nonnegative Borel $h$, [F4] therefore gives
$$\int_{\mathbb R^2}h(z)\varphi_C(z)\,d\lambda_2(z)=\int_{\mathbb R^2}h(T(x,y))g(x,y)\,d\lambda_2(x,y).$$
Taking $h=1$ proves complex mass one; taking indicators proves precisely the asserted pushforward density. The same density defines a probability measure on the Lebesgue sigma-algebra by [F3]. [A1, F1, F3, F4, F5, F6, step 1.1, algebra]

3.1 In step 2.1 take $h(z)=|z|^2$. Since $|T(x,y)|^2=(x^2+y^2)/2$, Tonelli and the two real moments give
$$\int |z|^2\varphi_C(z)\,d\lambda_2(z)=\tfrac12\left(\int x^2\varphi_R(x)\,dx\int\varphi_R(y)\,dy+\int\varphi_R(x)\,dx\int y^2\varphi_R(y)\,dy\right)=1.$$
The inequality $|z|\le1+|z|^2$, unit mass and [F7] give $\int |z|\varphi_C\,d\lambda_2\le2$, so the complex first moment is absolutely integrable. Likewise $|x|g$ and $|y|g$ are integrable by Tonelli and step 1.1. Apply step 2.1 to positive and negative parts of each coordinate, then use [F6]: the real and imaginary means are respectively $\int xg/\sqrt2=0$ and $\int yg/\sqrt2=0$. Thus the complex mean is zero, without a signed change-of-variables assertion outside [F4]'s nonnegative interface. [F4, F5, F6, F7, step 1.1, step 2.1, algebra]

4.1 Fix a positive finite $N$ and use $N$ copies of $\mathbb R$ for the real field or $\mathbb R^2$ for the complex field. The product density is continuous, nonnegative and Borel; [F5] identifies the relevant product Borel sigma-algebra and Lebesgue integrals with the ambient Euclidean ones. Repeated Tonelli gives total integral $\prod_{j=1}^N1=1$. By [F3] it defines a probability measure. For Borel coordinate sets $E_1,\ldots,E_N$, apply the same calculation to $\prod_j\mathbf1_{E_j}\varphi_F$: the joint rectangle probability is $\prod_j\int_{E_j}\varphi_F$. This proves independence and each scalar marginal. Integrating a coordinate squared modulus against the full product leaves its scalar second moment times the other unit masses, hence one. For $N=0$ define the unique empty tuple to have probability one; countable additivity is immediate on its two-set sigma-algebra and the empty product is one. This covers empty matrices without constructing any additional measure by choice. [A1, F1, F3, F5, F6, step 1.1, step 2.1, step 3.1, construct, algebra] ∎
