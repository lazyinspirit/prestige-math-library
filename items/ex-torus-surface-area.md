---
id: ex-torus-surface-area
kind: example
title: 'The surface area of a torus is $4\pi^2ab$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-admissible-regular-parametrized-surface-patch, def-surface-area-and-scalar-surface-integral-of-a-patch, thm-surface-area-density-is-cross-product-norm, def-cross-product-in-r3, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-quarter-turn-values-and-shift-formulas, thm-jordan-fubini-by-sections, thm-ftc-second-part]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'M. E. Taylor, Introduction to Analysis in Several Variables, Exercise 15'
      url: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf'
pipeline_run: null
---

## Example

Let $a>b>0$. The torus obtained by revolving the circle of radius $b$ whose centre is distance $a$ from the axis has surface area $4\pi^2ab$.

## Facts & Assumptions

**Given:** The parametrization $\varphi(\theta,\phi)=((a+b\cos\phi)\cos\theta,(a+b\cos\phi)\sin\theta,b\sin\phi)$ on $[0,2\pi]^2$.

[L1] The standard trigonometric derivative, Pythagorean, range, and full-period endpoint formulas hold ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]]).

[L2] A regular patch has area $\int_DJ_\varphi$; Jordan-Fubini and the fundamental theorem evaluate the rectangle integral ([[def-admissible-regular-parametrized-surface-patch]], [[def-surface-area-and-scalar-surface-integral-of-a-patch]], [[thm-jordan-fubini-by-sections]], [[thm-ftc-second-part]]).

[L3] The area density satisfies $J_\varphi=\|\varphi_u\times\varphi_v\|_2$ at every parameter point, with the cross product given by the coordinate formula ([[thm-surface-area-density-is-cross-product-norm]], [[def-cross-product-in-r3]]).

## Verification

**Proof technique:** direct.

1.1 Differentiating with [L1] and using the coordinate formula in [L3] gives $\|\varphi_\theta\times\varphi_\phi\|_2=b(a+b\cos\phi)$, which by [L3] is the area density $J_\varphi$. Since $a>b>0$ it is positive; the only repeated parameter values occur on the rectangle boundary seams, so [L2] gives a regular patch. [given, L1, L2, L3, algebra]

2.1 By [L2] and step 1.1, the area is $\int_0^{2\pi}\int_0^{2\pi}b(a+b\cos\phi)\,d\phi\,d\theta$. [step 1.1, L2, L3]

3.1 The full-period integral of cosine is zero, so the inner integral is $2\pi ab$ and the outer integral gives $4\pi^2ab$. [step 2.1, L1, L2, algebra]

4.1 This is the asserted torus area, with positivity of $a-b$ having discharged the possible degeneracy. [step 1.1, step 3.1] ∎
