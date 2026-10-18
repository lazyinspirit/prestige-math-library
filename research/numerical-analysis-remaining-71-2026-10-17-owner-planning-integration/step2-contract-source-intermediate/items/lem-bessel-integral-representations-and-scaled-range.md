---
id: lem-bessel-integral-representations-and-scaled-range
kind: lemma
title: Integral representations and a range bound for integer Bessel functions
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-order-bessel-series, lem-integer-order-bessel-series-tail, def-complex-exponential, lem-complex-exponential-series-converges-everywhere, lem-cauchy-product-of-absolutely-convergent-complex-series, thm-absolute-convergence-of-complex-series, thm-complex-exponential-addition-and-real-extension, thm-eulers-formula, lem-trigonometric-identities-machin-and-range-reduction, thm-sine-and-cosine-derivatives, thm-ftc-second-part, thm-continuous-implies-integrable, thm-uniform-limit-interchanges-riemann-integration, thm-substitution-for-improper-integrals]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §10.32(i), integral representations for modified Bessel functions
      url: https://dlmf.nist.gov/10.32
    - title: DLMF, §10.25(ii), modified Bessel functions
      url: https://dlmf.nist.gov/10.25
    - title: DLMF, §§10.9, 10.25, and 10.32(ii)
      url: https://dlmf.nist.gov/10.9
    - title: DLMF, §10.74(iii)
      url: https://dlmf.nist.gov/10.74
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 4
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 2
---

## Statement

For integer $n\ge0$ and real $x$, the series in
[[def-integer-order-bessel-series]] satisfy

$$J_n(x)=\frac1\pi\int_0^\pi\cos(n\theta-x\sin\theta)\,d\theta, \qquad I_n(x)=\frac1\pi\int_0^\pi e^{x\cos\theta}\cos(n\theta)\,d\theta.$$

Consequently, for $x\ge0$,
$0\le e^{-x}I_n(x)\le1$.

## Facts & Assumptions

**Given:** Integer $n\ge0$, real $x$, and the series definitions of
[[def-integer-order-bessel-series]].

[F1] [[def-integer-order-bessel-series]]: $J_n$ and $I_n$ are the absolutely
convergent power series with the displayed factorial coefficients.

[F2] [[lem-integer-order-bessel-series-tail]]: the defining $J_n$ and $I_n$
series converge absolutely and locally uniformly; their coefficients are the
factorial coefficients used in the generating-function calculation below.

[F3] [[def-complex-exponential]] and
[[lem-complex-exponential-series-converges-everywhere]]:
the exponential is its absolutely convergent factorial power series for every
complex argument.

[F4] [[lem-cauchy-product-of-absolutely-convergent-complex-series]]:
the Cauchy product of two absolutely convergent complex series converges to
the product of their sums. [[thm-absolute-convergence-of-complex-series]]
permits regrouping the resulting absolutely convergent terms by their Laurent
exponent.

[F5] [[thm-complex-exponential-addition-and-real-extension]],
[[thm-eulers-formula]], and
[[lem-trigonometric-identities-machin-and-range-reduction]]:
the exponential addition law, Euler's formula, and the trigonometric
periodicity and reflection identities hold.

[F6] [[thm-uniform-limit-interchanges-riemann-integration]]:
a uniform limit of integrable real functions on a compact interval may be
integrated by taking limits; apply separately to real and imaginary parts.
[[thm-ftc-second-part]] and [[thm-continuous-implies-integrable]] give the
usual integral and endpoint rules for the continuous functions below.

[F7] [[thm-substitution-for-improper-integrals]]:
the proper affine substitution $\theta\mapsto2\pi-\theta$ preserves the
integral after reversing the endpoints.

## Proof
1.1 For fixed $z$ and $|t|=1$, both exponential series in $\exp\!\left(\frac z2(t-t^{-1})\right)= \left(\sum_{p\ge0}\frac{(z/2)^pt^p}{p!}\right) \left(\sum_{q\ge0}\frac{(-z/2)^qt^{-q}}{q!}\right)$ have absolute tails bounded independently of $t$, by [F3]. Their product therefore has an absolutely and uniformly convergent double series on the unit circle; grouping its terms by the Laurent exponent $p-q$ is legitimate by [F4] and the absolute bound. For $n\ge0$, the coefficient of $t^n$ is $\sum_{q\ge0}\frac{(-1)^q(z/2)^{2q+n}}{(q+n)!q!}=J_n(z)$ by [F1]. Replacing the minus sign in the first exponential by a plus sign gives the coefficient $\sum_{q\ge0}\frac{(z/2)^{2q+n}}{(q+n)!q!}=I_n(z).$ [F1, F3, F4, algebra, F2]


2.1 For every integer $m$, direct integration of the real and imaginary parts gives $$\int_0^{2\pi}e^{im\theta}\,d\theta= \begin{cases}2\pi,&m=0,\\0,&m\ne0.\end{cases}$$ For $m\ne0$, the sine and cosine antiderivatives and their $2\pi$-periodicity from [F5] give zero. Integrating each finite Laurent partial sum against $e^{-in\theta}$ therefore extracts exactly its $t^n$ coefficient. The uniform convergence in step 1.1 permits passage to the full integral by [F6], applied componentwise. Consequently each coefficient is $$\frac1{2\pi}\int_0^{2\pi}G(e^{i\theta})e^{-in\theta}\,d\theta,$$ where $G$ is the corresponding generating function. [F5, F6, step 1.1, algebra]


3.1 For real $x$, Euler's formula in [F5] gives $G_J(e^{i\theta})=\exp(ix\sin\theta)$ and $G_I(e^{i\theta})=\exp(x\cos\theta)$. In the first coefficient integral, the real part is $\cos(x\sin\theta-n\theta)$; the substitution $\theta\mapsto2\pi-\theta$ on $[\pi,2\pi]$, justified by [F7], shows that the imaginary parts cancel and the real parts on the two half intervals agree. Thus the coefficient is $\pi^{-1}\int_0^\pi\cos(n\theta-x\sin\theta)\,d\theta$. For the second integral, $\cos(2\pi-\theta)=\cos\theta$ and the sine Fourier terms cancel under the same substitution, giving $\pi^{-1}\int_0^\pi e^{x\cos\theta}\cos(n\theta)\,d\theta$. This proves both representations. [F5, F7, step 2.1, algebra]


4.1 For $x\ge0$, every term in the series for $I_n(x)$ is nonnegative, so $I_n(x)\ge0$. The integral gives $e^{-x}I_n(x)\le\pi^{-1}\int_0^\pi e^{-x(1-\cos\theta)}d\theta\le1$, since $1-\cos\theta\ge0$. [F1, step 3.1, algebra] ∎

