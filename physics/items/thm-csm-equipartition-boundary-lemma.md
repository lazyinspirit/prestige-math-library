---
id: thm-csm-equipartition-boundary-lemma
kind: theorem
title: "Equipartition identity with explicit integrated boundary terms"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps:
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-dominated-convergence
dependency_roles:
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-dominated-convergence: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted Cambridge lecture notes, §§1.3.2 and 2.2.1"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete 635-page course text, §§4.4.6 and 4.7.2"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Statement

Let $(Y,\mathcal G,\nu)$ be a sigma-finite measure space, $\beta>0$, and
$H:\mathbb R\times Y\to\mathbb R$ a product-measurable function whose map
$z\mapsto H(z,y)$ is $C^1$ for $\nu$-almost every $y$. Set
$$Z:=\int_{\mathbb R\times Y}e^{-\beta H(z,y)}\,d(z,y)\in(0,\infty),$$
where $d(z,y)$ is Lebesgue measure on $\mathbb R$ times $\nu$. Assume
$$\int_{\mathbb R\times Y}|z\partial_zH(z,y)|e^{-\beta H(z,y)}\,d(z,y)<\infty.$$
For $R>0$ let
$$B_R:=\int_Y\bigl(R e^{-\beta H(R,y)}+R e^{-\beta H(-R,y)}\bigr)\,d\nu(y),$$
and assume $B_R\to0$ as $R\to\infty$. Define
$$\langle F\rangle_\beta:=Z^{-1}\int F(z,y)e^{-\beta H(z,y)}\,d(z,y)$$
whenever the integral is absolutely convergent. Then
$$\langle z\partial_zH\rangle_\beta=\beta^{-1}.$$
For finite endpoints $a<b$, assume the endpoint integral below is finite and
put $Z_{[a,b]}:=\int_{[a,b]\times Y}e^{-\beta H}\,d(z,y)$. If
$0<Z_{[a,b]}<\infty$, define
$\langle F\rangle_{[a,b]}:=Z_{[a,b]}^{-1}\int_{[a,b]\times Y}F e^{-\beta H}\,d(z,y)$.
Then the exact boundary identity is
$$\langle z\partial_zH\rangle_{[a,b]}=\beta^{-1}\left(1-Z_{[a,b]}^{-1}\int_Y\bigl(b e^{-\beta H(b,y)}-a e^{-\beta H(a,y)}\bigr)\,d\nu(y)\right),$$

## Facts & Assumptions

**Given:** The product measure space, $\beta$, $H$, the finite positive
normalization $Z$, the integrable moment, and the vanishing integrated
boundary term $B_R$.

[A1] The measure factors are sigma-finite, $H$ is measurable and sectionwise
$C^1$, and $Z$ and $\int |zH_z|e^{-\beta H}$ are finite with $Z>0$.

[A2] The two integrated endpoint contributions tend to zero, equivalently
$B_R\to0$.

[A3] For the finite-interval clause, $0<Z_{[a,b]}<\infty$ and the stated
integrated endpoint expression is finite.

[F1] Tonelli's theorem permits section integration for nonnegative
product-measurable functions on sigma-finite factors
([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F2] Dominated convergence passes limits through an integral under one common
integrable majorant ([[thm-dominated-convergence]]).

## Proof

**Given:** [A1]–[A3] and the Tonelli and dominated-convergence interfaces
[F1]–[F2].

1.1 For almost every $y$, differentiate the product in the $z$ coordinate: $$\partial_z\bigl(z e^{-\beta H(z,y)}\bigr)=e^{-\beta H(z,y)}-\beta z\partial_zH(z,y)e^{-\beta H(z,y)}.$$ The absolute value of the right side is bounded by $(1+\beta|z\partial_zH|)e^{-\beta H}$, which is integrable by [A1]. [A1, algebra]

2.1 Integrate this identity on $[-R,R]\times Y$. Absolute integrability and [F1] justify integrating first in $z$ and then in $y$, so $$\int_{[-R,R]\times Y}e^{-\beta H}\,d(z,y)-\beta\int_{[-R,R]\times Y}z\partial_zH e^{-\beta H}\,d(z,y)=\int_Y\bigl(R e^{-\beta H(R,y)}+R e^{-\beta H(-R,y)}\bigr)\,d\nu(y)=B_R.$$ [A1, F1, step 1.1]

3.1 The integrand in the first term is nonnegative and integrable, while the second integrand is absolutely integrable by [A1]. Their restrictions to $[-R,R]\times Y$ converge pointwise almost everywhere to the full integrands and are dominated by those integrable functions. Applying [F2] to both terms and using [A2] gives $Z-\beta\int z\partial_zH e^{-\beta H}\,d(z,y)=0$. Divide by $\beta Z>0$ to obtain the stated identity. [A1, A2, F2, step 2.1]

4.1 For finite $a<b$, integrate the same derivative over $[a,b]\times Y$. The boundary evaluation is $$\int_Y\bigl(b e^{-\beta H(b,y)}-a e^{-\beta H(a,y)}\bigr)\,d\nu(y)=Z_{[a,b]}-\beta\int_{[a,b]\times Y}z\partial_zH e^{-\beta H}\,d(z,y).$$ Dividing by $\beta Z_{[a,b]}$ and rearranging yields the displayed finite-endpoint formula. [A1, A3, F1, step 1.1, algebra] ∎

