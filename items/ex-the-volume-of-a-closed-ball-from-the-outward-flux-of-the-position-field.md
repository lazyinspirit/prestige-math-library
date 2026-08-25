---
id: ex-the-volume-of-a-closed-ball-from-the-outward-flux-of-the-position-field
kind: example
title: "The volume of a closed ball recovered from the outward flux of the position field"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation, cor-the-volume-of-a-glued-elementary-solid-from-its-outward-boundary-flux, thm-the-divergence-theorem-for-an-elementary-solid-region, def-divergence-and-curl-of-a-c1-vector-field, thm-jordan-fubini-by-sections, thm-ftc-second-part, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-finitely-patched-regular-surface-and-integrals, cor-volume-of-a-closed-three-ball, def-euclidean-inner-product, def-cross-product-in-r3]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Corral, Vector Calculus, Example 4.2"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
    - title: "G. Strang and E. Herman, Calculus Volume 3, section 6.8"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
pipeline_run: null
---

## Example

Let $X(x,y,z)=(x,y,z)$ be the position field on $\mathbb R^3$, and let $B_R$ be the closed ball of radius $R>0$ with the octant presentation of [[ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation]]. Then the outward flux of $X$ through $\partial B_R$ is $4\pi R^3$, so [[cor-the-volume-of-a-glued-elementary-solid-from-its-outward-boundary-flux]] gives
$$\operatorname{cont}(B_R)=\frac13\iint_{\partial B_R}\langle X,n\rangle=\frac43\pi R^3.$$

## Facts & Assumptions

**Given:** A radius $R>0$, the ball $B_R$, the spherical octant presentation of [[ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation]], one of its octant parametrizations $\varphi(\phi,\theta)=R(\sin\phi\cos\theta,\sin\phi\sin\theta,\cos\phi)$, and the position field $X(x,y,z)=(x,y,z)$.

[L1] For the spherical parametrization $\varphi(\phi,\theta)=R(\sin\phi\cos\theta,\sin\phi\sin\theta,\cos\phi)$, one has $\varphi_\phi\times\varphi_\theta=R\sin\phi\,\varphi(\phi,\theta)$ ([[def-cross-product-in-r3]], [[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L2] The content of a glued elementary solid is one third of the outward flux of the position field through its boundary ([[cor-the-volume-of-a-glued-elementary-solid-from-its-outward-boundary-flux]]).

[L3] For an elementary solid region $E$ and a $C^1$ field $F$, $\iiint_E\operatorname{div}F=\iint_{\partial E}\langle F,n\rangle$ ([[thm-the-divergence-theorem-for-an-elementary-solid-region]]).

[F1] The divergence of a field is the sum of its coordinate partial derivatives ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[L4] For a bounded Jordan set and an integrable function whose sections are integrable outside a content-zero exceptional set, Jordan Fubini computes the multiple integral by the corresponding iterated section integrals ([[thm-jordan-fubini-by-sections]]).

[L5] If $a<b$, $G$ is differentiable on $[a,b]$, and $G'=f$ is integrable there, then $\int_a^bf=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[L6] $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$ ([[thm-sine-and-cosine-derivatives]]).

[L7] $\sin^2t+\cos^2t=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[F2] The flux in the orientation induced by a patch $\varphi$ is $\int_D(F\circ\varphi)\cdot(\varphi_u\times\varphi_v)$ ([[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[F3] For a finite patch presentation, the total flux is the sum of the patch fluxes ([[def-finitely-patched-regular-surface-and-integrals]]).

[L8] The closed three-dimensional ball of radius $r$ has volume $4\pi r^3/3$ ([[cor-volume-of-a-closed-three-ball]]).

[F4] $\langle x,y\rangle=\sum_{k<n}x_ky_k$ ([[def-euclidean-inner-product]]).

## Verification

**Proof technique:** direct.

1.1 On each spherical octant patch, [L1], [F2], [F4], and [L7] give $\langle X(\varphi(\phi,\theta)),\varphi_\phi\times\varphi_\theta\rangle=\langle\varphi(\phi,\theta),R\sin\phi\,\varphi(\phi,\theta)\rangle=R^3\sin\phi$. [L1, F2, F4, L7, given]

2.1 On each of the four upper octant patches, step 1.1 gives the flux integrand $R^3\sin\phi$ on a parameter rectangle $[0,\pi/2]\times[\alpha,\alpha+\pi/2]$; for fixed $\phi$ the $\theta$-section is constant, and for fixed $\theta$ the $\phi$-section is $R^3\sin\phi$, so [L4], [L5], and [L6] give the flux value $R^3\int_\alpha^{\alpha+\pi/2}\int_0^{\pi/2}\sin\phi\,d\phi\,d\theta =R^3(\pi/2)$. On each of the four lower octant patches the same argument gives $R^3\int_\alpha^{\alpha+\pi/2}\int_{\pi/2}^{\pi}\sin\phi\,d\phi\,d\theta =R^3(\pi/2)$. Summing the eight patch fluxes by [F3] yields the total outward flux $8\cdot R^3(\pi/2)=4\pi R^3$. [step 1.1, L4, L5, L6, F3]

3.1 The field $X$ has divergence $3$ by [F1], so [L3] and [L2] both identify the content of $B_R$ with one third of the flux computed in step 2.1, namely $(4/3)\pi R^3$. [step 2.1, L2, L3, F1]

4.1 This agrees with the published volume formula [L8]. An inward presentation would reverse the sign of the flux, so the agreement is a check on the orientation convention as well as a computation of the volume. [step 3.1, L8, F2] ∎

## Remarks

- The flux is independent of how the sphere is cut into octants. The octant presentation matters here because it is the one proved on the A page to be adapted in all three directions.
