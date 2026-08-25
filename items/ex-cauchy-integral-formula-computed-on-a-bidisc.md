---
id: ex-cauchy-integral-formula-computed-on-a-bidisc
kind: example
title: "The iterated Cauchy formula computed for $z_0z_1$ on a bidisc"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-cauchy-integral-formula-on-a-polydisc, thm-cauchy-integral-formula-circle, def-balls-and-polydiscs-in-complex-euclidean-space, def-complex-line-integral-over-a-rectifiable-path, ex-power-series-expansion-of-the-coordinate-product-on-a-bidisc]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, v4.4, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Example

Let $f(z)=z_0z_1$ on the unit bidisc, let $C(t)=\tfrac12\exp(it)$ on
$[0,2\pi]$, and let $z=(z_0,z_1)$ satisfy $|z_0|<1/2$ and $|z_1|<1/2$. Then

$$\frac1{(2\pi i)^2}\int_C\!\int_C \frac{\zeta_0\zeta_1}{(\zeta_0-z_0)(\zeta_1-z_1)}\,d\zeta_1\,d\zeta_0=z_0z_1.$$

The computation is done in the stated order: the inner integral is taken in
$\zeta_1$ first, with $\zeta_0$ held fixed, and only then is the outer integral
taken in $\zeta_0$.

## Facts & Assumptions

**Given:** The function $f(z)=z_0z_1$, the circle $C(t)=\tfrac12\exp(it)$, and a point $z$ with $|z_0|<1/2$ and $|z_1|<1/2$.

[L1] The iterated Cauchy formula on a polydisc represents a continuous separately holomorphic function by successive one-variable contour integrals ([[thm-cauchy-integral-formula-on-a-polydisc]]).

[L2] The one-variable Cauchy integral formula on a circle gives $h(w)=(2\pi i)^{-1}\int_\gamma h(\zeta)(\zeta-w)^{-1}\,d\zeta$ for $|w|$ strictly inside the circle ([[thm-cauchy-integral-formula-circle]]).

## Verification

**Proof technique:** direct.

1.1 Fix $\zeta_0$ on the circle $C$. As a function of $\zeta_1$, the integrand is $\zeta_0\zeta_1/((\zeta_0-z_0)(\zeta_1-z_1))=\zeta_0(\zeta_0-z_0)^{-1}\cdot \zeta_1(\zeta_1-z_1)^{-1}$, where the scalar factor in front is constant in $\zeta_1$. [given, algebra]

2.1 Apply [L2] to the holomorphic function $\zeta_1\mapsto\zeta_1$ on the disc $|\zeta_1|<1$: then $(2\pi i)^{-1}\int_C \zeta_1(\zeta_1-z_1)^{-1}\,d\zeta_1=z_1$, so the inner integral equals $2\pi i\cdot \zeta_0 z_1/(\zeta_0-z_0)$. [step 1.1, L2]

3.1 Substituting step 2.1 into the outer integral gives $\frac1{2\pi i}\int_C \zeta_0 z_1(\zeta_0-z_0)^{-1}\,d\zeta_0 = z_1\cdot\frac1{2\pi i}\int_C \zeta_0(\zeta_0-z_0)^{-1}\,d\zeta_0$, and [L2] applied again yields the value $z_1 z_0$. [step 2.1, L2]

4.1 This matches the value $f(z)=z_0z_1$, exactly as [L1] predicts. [step 3.1, L1] ∎
