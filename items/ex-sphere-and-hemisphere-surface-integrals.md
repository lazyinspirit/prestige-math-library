---
id: ex-sphere-and-hemisphere-surface-integrals
kind: example
title: 'Surface area and flux on a sphere, with scalar integrals on a hemisphere'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-admissible-regular-parametrized-surface-patch, def-surface-area-and-scalar-surface-integral-of-a-patch, def-oriented-unit-normal-and-flux-of-a-surface-patch, thm-surface-area-density-is-cross-product-norm, def-cross-product-in-r3, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-quarter-turn-values-and-shift-formulas, thm-jordan-fubini-by-sections, thm-ftc-second-part]
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
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'University of Toronto MAT237 notes, Section 5.3, Example 1 and Basic Problem 3'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html'
    - title: 'M. E. Taylor, Introduction to Analysis in Several Variables, Section 3.2'
      url: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf'
pipeline_run: null
---

## Example

For $R>0$, the sphere of radius $R$ has area $4\pi R^2$. With outward orientation, the field $F(x)=x$ has flux $4\pi R^3$. On the northern hemisphere, the scalar integral of the height coordinate is $\pi R^3$.

## Facts & Assumptions

**Given:** The parametrization $\varphi(\phi,\theta)=R(\sin\phi\cos\theta,\sin\phi\sin\theta,\cos\phi)$ on $[0,\pi]\times[0,2\pi]$.

[L1] The sine and cosine derivative, sign, range, Pythagorean, and endpoint-value formulas hold ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]]).

[L2] Regular-patch area and scalar integrals are $\int_DJ_\varphi$ and $\int_D(q\circ\varphi)J_\varphi$, and flux in the orientation induced by $\varphi$ is $\int_D(F\circ\varphi)\cdot(\varphi_u\times\varphi_v)$ ([[def-admissible-regular-parametrized-surface-patch]], [[def-surface-area-and-scalar-surface-integral-of-a-patch]], [[def-oriented-unit-normal-and-flux-of-a-surface-patch]]); Jordan-Fubini and the fundamental theorem evaluate the rectangular integrals ([[thm-jordan-fubini-by-sections]], [[thm-ftc-second-part]]).

[L3] The area density satisfies $J_\varphi=\|\varphi_u\times\varphi_v\|_2$ at every parameter point, with the cross product given by the coordinate formula ([[thm-surface-area-density-is-cross-product-norm]], [[def-cross-product-in-r3]]).

## Verification

**Proof technique:** direct.

1.1 Direct differentiation using [L1] and the coordinate formula in [L3] gives $\varphi_\phi\times\varphi_\theta=R\sin\phi\,\varphi$, the outward area vector, whose norm is $R^2\sin\phi$; by [L3] this is the area density $J_\varphi$. It is nonzero in the parameter interior; the longitude seam and poles lie on the boundary, so [L2] gives a regular patch. [given, L1, L2, L3, algebra]

2.1 By [L2], the area is $\int_0^{2\pi}\int_0^\pi R^2\sin\phi\,d\phi\,d\theta=4\pi R^2$. [step 1.1, L2, algebra]

2.2 Since $F(\varphi)=\varphi$, its dot product with the outward area vector is $R^3\sin\phi$, whose integral is $4\pi R^3$. [step 1.1, L2, algebra]

2.3 On the northern hemisphere $0\le\phi\le\pi/2$, the height is $R\cos\phi$, so its scalar integral is $\int_0^{2\pi}\int_0^{\pi/2}R^3\sin\phi\cos\phi\,d\phi\,d\theta=\pi R^3$. [step 1.1, L1, L2, algebra]

3.1 Steps 2.1, 2.2, and 2.3 establish the area, outward flux, and hemisphere scalar integral with the orientation stated. [step 2.1, step 2.2, step 2.3] ∎
