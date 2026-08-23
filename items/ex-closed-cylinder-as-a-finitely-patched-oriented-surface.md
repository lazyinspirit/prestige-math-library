---
id: ex-closed-cylinder-as-a-finitely-patched-oriented-surface
kind: example
title: 'A closed cylinder as a finitely patched oriented surface'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finitely-patched-regular-surface-and-integrals, lem-parameter-boundary-exceptions-do-not-affect-surface-integrals, def-surface-area-and-scalar-surface-integral-of-a-patch, def-oriented-unit-normal-and-flux-of-a-surface-patch, thm-surface-area-density-is-cross-product-norm, def-cross-product-in-r3, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-quarter-turn-values-and-shift-formulas, thm-jordan-fubini-by-sections, thm-ftc-second-part]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'University of Toronto MAT237 notes, Section 5.3, Example 2'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html'
pipeline_run: null
---

## Example

For $R,H>0$, the boundary of the cylinder $x^2+y^2\le R^2$, $0\le z\le H$, has a compatible outward-oriented presentation by its side and two caps. Its area is $2\pi RH+2\pi R^2$. For $F(x,y,z)=(x,y,0)$, its outward flux is $2\pi R^2H$.

## Facts & Assumptions

**Given:** The lateral parametrization $\sigma(\theta,z)=(R\cos\theta,R\sin\theta,z)$ and the two polar cap parametrizations, with outward orientations.

[L1] Cross products are computed by the coordinate formula, and the standard trigonometric derivative and Pythagorean identities hold ([[def-cross-product-in-r3]], [[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-quarter-turn-values-and-shift-formulas]]).

[L2] A compatible finite presentation sums patch integrals, and content-zero boundary overlaps do not change them ([[def-finitely-patched-regular-surface-and-integrals]], [[lem-parameter-boundary-exceptions-do-not-affect-surface-integrals]]); Jordan-Fubini and the fundamental theorem evaluate the rectangle and disc parameter integrals ([[thm-jordan-fubini-by-sections]], [[thm-ftc-second-part]]).

[L3] The area of a regular patch is $\int_DJ_\varphi$ with $J_\varphi=\|\varphi_u\times\varphi_v\|_2$, and the flux of a continuous field $F$ in the orientation induced by $\varphi$ is $\int_D(F\circ\varphi)\cdot(\varphi_u\times\varphi_v)$ ([[def-surface-area-and-scalar-surface-integral-of-a-patch]], [[thm-surface-area-density-is-cross-product-norm]], [[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

## Verification

**Proof technique:** direct.

1.1 Using [L1], $\sigma_\theta\times\sigma_z=(R\cos\theta,R\sin\theta,0)$ is the outward side area vector, whose norm is the density $R$ of [L3]. The cap area vectors are vertical with density $\rho$ in polar parameters, directed down at $z=0$ and up at $z=H$. [given, L1, L3, algebra]

1.2 The patch intersections are boundary circles, whose preimages lie in parameter boundaries and have content zero. Thus [L2] makes these patches a compatible presentation. [given, L2]

2.1 By [L3] the patch areas are the integrals of those densities, giving side area $2\pi RH$ and cap area $\pi R^2$ each; [L2] sums them to the total area $2\pi RH+2\pi R^2$. [step 1.1, step 1.2, L2, L3, algebra]

2.2 By [L3] each patch flux is the integral of $F$ dotted with that patch's area vector. The field $F$ has zero dot product with both vertical cap area vectors, while on the side its dot product with the outward area vector is $R^2$; integration and [L2] give total flux $2\pi R^2H$. [step 1.1, step 1.2, L2, L3, algebra]

3.1 Summing the compatible patch values proves both formulas. [step 2.1, step 2.2] ∎
