---
id: ex-stokes-on-two-patches-spanning-the-same-circle
kind: example
title: "Stokes' theorem on a flat disc and on a hemisphere with the same induced boundary circle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-classical-stokes-theorem-for-a-c2-surface-patch, def-the-induced-boundary-chain-of-a-c2-surface-patch, def-divergence-and-curl-of-a-c1-vector-field, def-admissible-regular-parametrized-surface-patch, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-cross-product-in-r3, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-and-cosine-parametrize-the-unit-circle, thm-quarter-turn-values-and-shift-formulas, thm-jordan-fubini-by-sections, thm-ftc-second-part, def-type-i-type-ii-and-elementary-green-regions, def-positive-orientation-for-elementary-region-boundaries, thm-line-integrals-under-reversal-and-concatenation, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus, Examples 4.4.2-4.4.4"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
    - title: "M. Corral, Vector Calculus, Examples 4.5.3 and 4.5.4"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
    - title: "G. Strang and E. Herman, Calculus Volume 3, Examples 6.73 and 6.74"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
pipeline_run: null
---

## Example

Let $F(x,y,z)=(-y,x,0)$. Then $\operatorname{curl}F=(0,0,2)$. Stokes' theorem gives the same value $2\pi$ on two different $C^2$ patches with the same induced boundary circle: the flat unit disc in the plane $z=0$, and the upper unit hemisphere.

## Facts & Assumptions

**Given:** The field $F(x,y,z)=(-y,x,0)$, the polar disc patch $\psi(r,\theta)=(r\cos\theta,r\sin\theta,0)$ on $[0,1]\times[0,2\pi]$, and the hemisphere patch $\varphi(\phi,\theta)=(\sin\phi\cos\theta,\sin\phi\sin\theta,\cos\phi)$ on $[0,\pi/2]\times[0,2\pi]$.

[L1] Stokes' theorem identifies circulation around the induced boundary chain with the curl flux in the induced orientation ([[thm-the-classical-stokes-theorem-for-a-c2-surface-patch]]).

[F1] The induced boundary chain is obtained by composing the positive boundary chain of the parameter region with the parametrization ([[def-the-induced-boundary-chain-of-a-c2-surface-patch]]).

[F2] The curl is $(\partial_yF_z-\partial_zF_y,\ \partial_zF_x-\partial_xF_z,\ \partial_xF_y-\partial_yF_x)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F3] A regular patch has no interior parameter point sharing its image with a distinct point of the parameter region ([[def-admissible-regular-parametrized-surface-patch]]).

[F4] Flux is computed as $\int_D(F\circ\varphi)\cdot(\varphi_u\times\varphi_v)$ ([[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[F5] The cross product is that of [[def-cross-product-in-r3]].

[L2] $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$ ([[thm-sine-and-cosine-derivatives]]).

[L3] $\sin^2t+\cos^2t=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L4] Sine is positive on $(0,\pi)$ and cosine is strictly decreasing on $[0,\pi]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[L8] The map $\theta\mapsto(\cos\theta,\sin\theta)$ is injective on $[0,2\pi)$ ([[thm-sine-and-cosine-parametrize-the-unit-circle]]).

[L5] Jordan Fubini computes a multiple integral by iterated section integrals ([[thm-jordan-fubini-by-sections]]).

[L6] If $a<b$, $G$ is differentiable on $[a,b]$, and $G'=f$ is integrable there, then $\int_a^bf=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[F6] A rectangle is an elementary Green region ([[def-type-i-type-ii-and-elementary-green-regions]]).

[F7] The positive boundary of a rectangle runs along its four sides in the usual counterclockwise order ([[def-positive-orientation-for-elementary-region-boundaries]]).

[L7] Line integrals negate under path reversal ([[thm-line-integrals-under-reversal-and-concatenation]]).

[F8] Vector line integrals are computed from $\langle F(\gamma(t)),\gamma'(t)\rangle$ ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[F9] $\langle x,y\rangle=\sum_{k<n}x_ky_k$ ([[def-euclidean-inner-product]]).

## Verification

**Proof technique:** direct.

1.1 Direct differentiation in [F2] gives $\operatorname{curl}F=(0,0,2)$. [F2, given]

1.2 The disc patch $\psi$ is $C^2$ on a neighbourhood of its parameter rectangle. On the parameter interior one has $r>0$, and [F5], [L2], and [L3] give $\psi_r\times\psi_\theta=(0,0,r)\ne0$ there. Equality of two images forces equality of the positive radii by [L3] and then equality of their angles by [L8], so no interior parameter point shares its image with a distinct one. Thus [F3] makes $\psi$ a regular patch over a rectangle. [F3, F5, F6, L2, L3, L8]

1.3 The hemisphere patch $\varphi$ is $C^2$ on a neighbourhood of its parameter rectangle, and [F5], [L2], and [L3] give $\varphi_\phi\times\varphi_\theta=\sin\phi\,\varphi(\phi,\theta)$. On the parameter interior one has $0<\phi<\pi/2$, hence $\sin\phi>0$ by [L4], so this cross product is nonzero there; and the third coordinate $\cos\phi$ fixes $\phi$ because [L4] makes cosine injective on $[0,\pi]$, while the first two then fix $\theta$ by [L8]. Thus [F3] makes $\varphi$ a regular patch over a rectangle. [F3, F5, F6, L2, L3, L4, L8]

2.1 By [F1], [F7], [L7], and [F8], the two radial edges of the rectangle cancel in the induced boundary chain, the edge at $r=0$ is constant, and what remains is the unit circle $\theta\mapsto(\cos\theta,\sin\theta,0)$ traversed once counterclockwise. [step 1.2, F1, F7, L7, F8]

3.1 The curl flux on the disc is $\int_0^{2\pi}\int_0^12r\,dr\,d\theta=2\pi$ by [F4], [F9], [L5], and [L6], and the circulation around the surviving boundary circle is $\int_0^{2\pi}1\,d\theta=2\pi$, so [L1] is verified on the disc. [step 1.1, step 1.2, step 2.1, F4, F9, L5, L6, L1]

3.2 By [F1], [F7], [L7], and [F8], the two meridian edges cancel in the induced boundary chain, the edge at $\phi=0$ is constant, and the remaining edge at $\phi=\pi/2$ is the same counterclockwise unit circle as in step 2.1. [step 1.3, F1, F7, L7, F8]

4.1 The curl flux on the hemisphere is $\int_0^{2\pi}\int_0^{\pi/2}2\sin\phi\cos\phi\,d\phi\,d\theta=2\pi$ by [F4], [F9], [L5], and [L6], so [L1] gives the same circulation value there. [step 1.1, step 1.3, step 3.2, F4, F9, L5, L6, L1]

5.1 Steps 2.1 and 3.2 give the same induced boundary circle, and steps 3.1 and 4.1 give the same value $2\pi$, so the two surfaces agree exactly as Stokes' theorem predicts. [step 2.1, step 3.1, step 3.2, step 4.1, L1] ∎

## Remarks

- The shared boundary is written out, not inferred from the informal phrase "the same spanning curve". The cancellations on the parameter boundary are part of the computation.
