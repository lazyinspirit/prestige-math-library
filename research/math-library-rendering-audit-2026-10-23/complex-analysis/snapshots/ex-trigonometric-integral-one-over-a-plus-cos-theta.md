---
id: ex-trigonometric-integral-one-over-a-plus-cos-theta
kind: example
title: "The integral of 1 / (a + cos theta) over [0, 2 pi]"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-trigonometric-integral-unit-circle-substitution]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Howell and J. Mathews, Complex Analysis, Ch. 8 §8.2"
      url: "https://complexanalysis.org/web/ch_residue.html"
pipeline_run: null
---

## Example

For a real parameter $a$ with $|a|>1$,
$\int_0^{2\pi}\frac{d\theta}{a+\cos\theta} =\frac{2\pi\,\operatorname{sgn}(a)}{\sqrt{a^2-1}}.$
In particular, for $a>1$ the value is $2\pi/\sqrt{a^2-1}$.

## Facts & Assumptions

**Given:** A real number $a$ with $|a|>1$.

[L1] The unit-circle substitution converts the trigonometric integral into a contour integral on $|z|=1$ ([[thm-trigonometric-integral-unit-circle-substitution]]).

## Verification

**Proof technique:** computation.

1.1 By [L1], $\int_0^{2\pi}\frac{d\theta}{a+\cos\theta} =\int_{|z|=1}\frac{2\,dz}{i(z^2+2az+1)}.$ The quadratic factors as $z^2+2az+1=(z-z_+)(z-z_-),\qquad z_\pm=-a\pm\sqrt{a^2-1}.$ [L1, algebra]

2.1 Since $z_+z_-=1$, exactly one root lies inside the unit circle. It is $z_+=-a+\operatorname{sgn}(a)\sqrt{a^2-1}$. The residue there is $\frac{2}{i(z_+-z_-)} =\frac{\operatorname{sgn}(a)}{i\sqrt{a^2-1}}.$ Therefore $\int_0^{2\pi}\frac{d\theta}{a+\cos\theta} =2\pi i\cdot \frac{\operatorname{sgn}(a)}{i\sqrt{a^2-1}} =\frac{2\pi\,\operatorname{sgn}(a)}{\sqrt{a^2-1}}.$ [step 1.1, algebra] ∎
