---
id: ex-flux-of-the-inverse-square-field-through-a-sphere-centred-at-the-origin
kind: example
title: "The outward flux of the inverse-square field through a sphere centred at the origin is $4\\pi$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-oriented-unit-normal-and-flux-of-a-surface-patch, def-admissible-regular-parametrized-surface-patch, def-finitely-patched-regular-surface-and-integrals, def-cross-product-in-r3, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-and-cosine-parametrize-the-unit-circle, thm-jordan-fubini-by-sections, thm-ftc-second-part, def-euclidean-inner-product, thm-the-divergence-theorem-for-an-elementary-solid-region, thm-quarter-turn-values-and-shift-formulas]
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
    - title: "G. Strang and E. Herman, Calculus Volume 3, Theorem 6.21"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus, Example 4.4.8"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Example

Let
$$F(x,y,z)=\frac{(x,y,z)}{(x^2+y^2+z^2)^{3/2}}$$
on $\mathbb R^3\setminus\{0\}$, and let $S_R=\{(x,y,z):x^2+y^2+z^2=R^2\}$ with $R>0$. Then the outward flux of $F$ through $S_R$ is $4\pi$, independent of $R$.

## Facts & Assumptions

**Given:** A radius $R>0$, the spherical parametrization $\varphi(\phi,\theta)=R(\sin\phi\cos\theta,\sin\phi\sin\theta,\cos\phi)$ on $[0,\pi]\times[0,2\pi]$, and the inverse-square field $F$ on $\mathbb R^3\setminus\{0\}$.

[F1] For a regular parametrized surface patch, the flux in the orientation induced by $\varphi$ is $\int_D(F\circ\varphi)\cdot(\varphi_u\times\varphi_v)$ ([[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[F2] A regular patch may degenerate on its parameter boundary, but on the parameter interior its cross product is nonzero and no interior parameter point shares its image with a distinct parameter point ([[def-admissible-regular-parametrized-surface-patch]]).

[F3] For a finite patch presentation, the total flux is the sum of the patch fluxes ([[def-finitely-patched-regular-surface-and-integrals]]).

[F4] The cross product is that of [[def-cross-product-in-r3]].

[L1] $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$ ([[thm-sine-and-cosine-derivatives]]).

[L2] $\sin^2t+\cos^2t=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L5] Sine is positive on $(0,\pi)$, cosine is strictly decreasing on $[0,\pi]$, $\cos0=1$, $\cos\pi=-1$, and $\theta\mapsto(\cos\theta,\sin\theta)$ is injective on $[0,2\pi)$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-and-cosine-parametrize-the-unit-circle]]).

[L3] Jordan Fubini computes a multiple integral by iterated section integrals ([[thm-jordan-fubini-by-sections]]).

[L4] If $a<b$, $G$ is differentiable on $[a,b]$, and $G'=f$ is integrable there, then $\int_a^bf=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[F5] $\|x\|_2=\sqrt{\langle x,x\rangle}$ ([[def-euclidean-inner-product]]).

[F6] The divergence theorem for an elementary solid region assumes a $C^1$ field on an open set containing the solid ([[thm-the-divergence-theorem-for-an-elementary-solid-region]]).

## Verification

**Proof technique:** direct.

1.1 On the parameter interior $0<\phi<\pi$ and $0<\theta<2\pi$, equality of two spherical images first forces equality of $\phi$ because cosine is strictly decreasing on $[0,\pi]$, and then equality of $\theta$ by the injectivity of the unit-circle parametrization in [L5]. The cross product is nonzero there because $\sin\phi>0$ by [L5]; any degeneracy or repeated image occurs only on the parameter boundary. Thus [F2] makes it a regular patch. Differentiating $\varphi$ and using [F4], [L1], [L2], and [F5] gives $\varphi_\phi\times\varphi_\theta=R\sin\phi\,\varphi(\phi,\theta)$, while $F(\varphi(\phi,\theta))=\varphi(\phi,\theta)/R^3$, so the flux integrand is $(F\circ\varphi)\cdot(\varphi_\phi\times\varphi_\theta)=\sin\phi$. [F1, F2, F4, L1, L2, L5, F5, given]

2.1 By [L3], [L4], [L5], and the identity $(\cos\phi)'=-\sin\phi$ from [L1], the flux is $\int_0^{2\pi}\int_0^\pi\sin\phi\,d\phi\,d\theta=\int_0^{2\pi}2\,d\theta=4\pi$, independent of $R$. [step 1.1, L1, L3, L4, L5, F3]

3.1 The divergence theorem is not being applied here: the field is undefined at the origin, so it is not $C^1$ on any open set containing the closed ball bounded by $S_R$, and [F6] names exactly that missing hypothesis. [step 2.1, F6, F5] ∎

## Remarks

- The independence of $R$ is the point-source phenomenon behind the later false statement: moving the sphere without enclosing the origin changes the answer to $0$, but changing only the radius does not.
