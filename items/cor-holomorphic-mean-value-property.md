---
id: cor-holomorphic-mean-value-property
kind: corollary
title: "A holomorphic function equals its average on every circle inside a larger concentric holomorphy disc"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cauchy-integral-formula-circle, thm-riemann-stieltjes-and-parametric-contour-integrals-agree, cor-complex-differentiability-implies-continuity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Matthias Weber, Complex Analysis, Corollary 2.2.1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Let $f$ be holomorphic on $D(a,R)$ and let $0<r<R$. Then

$$f(a)=\frac{1}{2\pi}\int_0^{2\pi}f\bigl(a+r\exp(i\theta)\bigr)\,d\theta.$$

Thus a holomorphic function equals its average on every positive-radius circle lying with a larger concentric disc inside its holomorphy domain.

## Facts & Assumptions

**Given:** A function $f$ holomorphic on $D(a,R)$ and a radius $0<r<R$.

[L1] Under these hypotheses, Cauchy's circle formula gives $f(z)=(2\pi i)^{-1}\int_\gamma f(\zeta)/(\zeta-z)\,d\zeta$ for $|z-a|<r$, where $\gamma(\theta)=a+r\exp(i\theta)$ is positively oriented ([[thm-cauchy-integral-formula-circle]]).

[L2] For a piecewise-$C^1$ contour and an integrand continuous on its trace, the complex contour integral equals the parameter integral of the pulled-back integrand multiplied by the contour derivative ([[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]).

[L3] Every holomorphic function is continuous ([[cor-complex-differentiability-implies-continuity]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] at the centre $z=a$ to obtain $f(a)=(2\pi i)^{-1}\int_\gamma f(\zeta)/(\zeta-a)\,d\zeta$. [L1]

2.1 By [L3], $f$ is continuous; on the circle the denominator $\zeta-a$ is nonzero because its modulus is $r>0$, so elementary complex division makes $\zeta\mapsto f(\zeta)/(\zeta-a)$ continuous on the trace. With $\zeta=\gamma(\theta)=a+r\exp(i\theta)$, [L2] gives $d\zeta=ir\exp(i\theta)\,d\theta$ while $\zeta-a=r\exp(i\theta)$, so step 1.1 becomes $f(a)=(2\pi i)^{-1}\int_0^{2\pi}f(a+r\exp(i\theta))\,i\,d\theta$. [step 1.1, L2, L3, algebra]

3.1 Cancelling the nonzero factor $i$ in step 2.1 yields the stated circular average; the calculation requires $r>0$ and also covers every constant or zero function. [step 2.1, algebra] ∎
