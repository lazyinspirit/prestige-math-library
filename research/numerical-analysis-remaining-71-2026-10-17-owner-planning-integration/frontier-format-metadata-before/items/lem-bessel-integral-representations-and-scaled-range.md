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
deps: [def-integer-order-bessel-series, lem-integer-order-bessel-series-tail]
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

[F2] [[lem-integer-order-bessel-series-tail]]: the series converge uniformly
on compact sets, so their generating series may be integrated termwise on a
fixed circle.

## Proof
1.1 Multiplying the two exponential series gives, uniformly for $|t|=1$, $$e^{(z/2)(t-t^{-1})} =\left(\sum_{p\ge0}\frac{(z/2)^pt^p}{p!}\right) \left(\sum_{q\ge0}\frac{(-z/2)^qt^{-q}}{q!}\right).$$ The coefficient of $t^n$ for $n\ge0$ is $\sum_{q\ge0}(-1)^q(z/2)^{2q+n}/((q+n)!q!)=J_n(z)$. [F1, F2, algebra]

1.2 Similarly, the coefficient of $t^n$ in $e^{(z/2)(t+t^{-1})}$ is $\sum_{q\ge0}(z/2)^{2q+n}/((q+n)!q!)=I_n(z)$. Coefficients are recovered by integrating the uniformly absolutely convergent Laurent series against $e^{-in\theta}$ on $t=e^{i\theta}$. [F1, F2, algebra]

2.1 With $z=x\in\mathbb R$ and $t=e^{i\theta}$, the first generating function is $e^{ix\sin\theta}$; pairing $\theta$ and $-\theta$ gives the real cosine integral for $J_n$. The second is $e^{x\cos\theta}$; its sine Fourier component vanishes by symmetry, giving the displayed $I_n$ integral. [step 1.1, step 1.2, algebra]

3.1 For $x\ge0$, every term in the series for $I_n(x)$ is nonnegative, so $I_n(x)\ge0$. The integral gives $e^{-x}I_n(x)\le\pi^{-1}\int_0^\pi e^{-x(1-\cos\theta)}d\theta\le1$, since $1-\cos\theta\ge0$. [F1, step 1.2, algebra] ∎