---
id: lem-characteristic-function-of-a-normal-law
kind: lemma
title: Characteristic function of a normal law
deps: ["def-standard-normal-and-normal-laws", "lem-normal-density-has-total-mass-one", "thm-derivative-of-exponential", "thm-chain-rule", "thm-algebra-of-derivatives", "thm-continuous-implies-integrable", "thm-ftc-second-part", "thm-integration-by-parts", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "thm-monotone-convergence-for-the-integral", "thm-integration-against-a-density", "def-integrable-real-and-complex-functions-and-their-integrals", "lem-moments-give-derivatives-of-the-characteristic-function", "thm-dominated-convergence", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "thm-sine-and-cosine-derivatives", "cor-zero-derivative-implies-constant", "lem-characteristic-functions-under-affine-maps-and-independent-sums", "thm-complex-exponential-addition-and-real-extension", "def-real-exponential-function-and-e", "thm-linearity-of-the-lebesgue-integral-on-l-one", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'Durrett, Probability: Theory and Examples, Example 3.3.5'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Norris, Probability and Measure, Section 8
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
verification:
  audited: 2026-09-13
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC. If $X$ has law $N(m,\sigma^2)$ with $\sigma\ge0$, then $\varphi_X(t)=\exp(imt-\sigma^2t^2/2)$ for every real $t$. Moreover $\mathbb EX=m$ and $\operatorname{Var}(X)=\sigma^2$, including $\sigma=0$.

## Facts & Assumptions

[F1] Under AC the normal laws are the affine images of the standard density law. [[def-standard-normal-and-normal-laws]].

[F2] The positive Borel density g has total integral one. [[lem-normal-density-has-total-mass-one]].

[F3] The real exponential is smooth with derivative itself. [[thm-derivative-of-exponential]].

[F4] The chain rule differentiates the quadratic composition. [[thm-chain-rule]].

[F5] The product and linearity rules apply to real components. [[thm-algebra-of-derivatives]].

[F6] Continuous real integrands are Riemann integrable on compact intervals. [[thm-continuous-implies-integrable]].

[F7] Integrable derivatives integrate to their endpoint differences. [[thm-ftc-second-part]].

[F8] Integration by parts holds for continuously differentiable real functions on compact intervals. [[thm-integration-by-parts]].

[F9] Under countable choice the compact Riemann and Lebesgue integrals agree. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F10] Increasing nonnegative truncations converge in integral. [[thm-monotone-convergence-for-the-integral]].

[F11] Integration against a density agrees with integration of the product for nonnegative measurable integrands. [[thm-integration-against-a-density]].

[F12] Finite first absolute moment permits differentiation of the characteristic function. [[lem-moments-give-derivatives-of-the-characteristic-function]].

[F13] An integrable absolute majorant permits complex integral limits. [[thm-dominated-convergence]].

[F14] Euler form has unit modulus on imaginary arguments. [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]].

[F15] The sine and cosine derivatives justify real-component integration by parts. [[thm-sine-and-cosine-derivatives]].

[F16] A real function with zero derivative on an interval is constant. [[cor-zero-derivative-implies-constant]].

[F17] Affine changes give the stated characteristic-function transformation. [[lem-characteristic-functions-under-affine-maps-and-independent-sums]].

[F18] The exponential addition law holds, and the complex exponential extends the real exponential. [[thm-complex-exponential-addition-and-real-extension]].

[F19] Real integrals are defined through positive and negative parts, and complex integrals through real and imaginary parts. [[def-integrable-real-and-complex-functions-and-their-integrals]].

[F20] The real exponential is defined by the everywhere convergent series $e^x=\sum_{j=0}^{\infty}x^j/j!$. [[def-real-exponential-function-and-e]].

## Proof

**Given:** Assume AC. If $X$ has law $N(m,\sigma^2)$ with $\sigma\ge0$, then $\varphi_X(t)=\exp(imt-\sigma^2t^2/2)$ for every real $t$. Moreover $\mathbb EX=m$ and $\operatorname{Var}(X)=\sigma^2$, including $\sigma=0$.

1.1 Write $g(x)=e^{-x^2/2}/\sqrt{2\pi}$ and let $Z$ be the coordinate under its probability law. By [F1]–[F2], this is a probability law with density $g$. For any measurable complex $h$ with $\int |h|g<\infty$, apply [F11] to the positive and negative parts of $\operatorname{Re}h$ and $\operatorname{Im}h$. The definitions in [F19] then give $\mathbb E h(Z)=\int h(x)g(x)\,dx$; in particular, every density-integral identity used below is covered. The derivative rules give $g\prime(x)=-xg(x)$. All compact-interval functions below are continuously differentiable, so [F6]–[F9] apply also to each real and imaginary component. AC is used through the normal-law construction and the countable-choice Riemann/Lebesgue bridge; no sequence of arbitrary witnesses is selected. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F11, F19]

2.1 For $R\ge1$, the series in [F20] has nonnegative terms at $R^2/2$, so $e^{R^2/2}\ge(R^2/2)^2/2=R^4/8$. By [F18], $e^{-R^2/2}=1/e^{R^2/2}$; hence $0<g(R)\le8/(\sqrt{2\pi}R^4)$ and both $g(R)$ and $Rg(R)$ tend to zero. For each positive integer $R$, FTC on each half interval gives $\int_{-R}^R|x|g(x)\,dx=2[g(0)-g(R)]$. Thus MCT proves $\mathbb E|Z|=2g(0)<\infty$. Also $\int_{-R}^R xg(x)\,dx=g(-R)-g(R)=0$; DCT with majorant $|x|g(x)$ proves $\mathbb EZ=0$. Integration by parts with $u=x,v=g$ gives $\int_{-R}^R x^2g(x)\,dx=\int_{-R}^R g(x)\,dx-2Rg(R)$. MCT and [F2] now give $\mathbb EZ^2=1$. All truncations here use the explicit integers R. [step 1.1, F7, F8, F10, F13, F18, F20, F2]

3.1 By the finite first moment and [F12], $\varphi_Z\prime(t)=i\int x e^{itx}g(x)\,dx$. On $[-R,R]$, componentwise integration by parts, using [F14]–[F15], gives $\int x e^{itx}g(x)\,dx=-[e^{itx}g(x)]_{-R}^R+it\int e^{itx}g(x)\,dx$. The boundary has modulus at most $2g(R)\to0$. The two integrands are dominated respectively by $|x|g(x)$ and $g(x)$, already integrable. DCT therefore gives $\varphi_Z\prime(t)=-t\varphi_Z(t)$ for every t, with no improper differentiation left unjustified. [step 1.1, step 2.1, F8, F12, F13, F14, F15]

4.1 By the real-component product and chain rules, $H(t)=e^{t^2/2}\varphi_Z(t)$ has derivative zero. Apply [F16] to its real and imaginary parts on every real interval. Since $H(0)=\int g=1$, $H(t)=1$ for all t, hence $\varphi_Z(t)=e^{-t^2/2}$. For $X=m+\sigma Z$ in law, [F17] yields $e^{imt}\varphi_Z(\sigma t)$, and [F18] combines the exponents. Its moments follow by expanding the finite integrable expressions: $\mathbb EX=m+\sigma\mathbb EZ=m$ and $\mathbb E(X-m)^2=\sigma^2\mathbb EZ^2=\sigma^2$. For $\sigma=0$ the variable equals m almost surely and both formulas give the Dirac law directly. [step 2.1, step 3.1, F3, F4, F5, F16, F17, F18] ∎
