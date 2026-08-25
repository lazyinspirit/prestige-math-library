---
id: fs-stokes-needs-the-surface-to-be-a-graph
kind: false-statement
title: "FALSE: Stokes' theorem requires the surface to be a graph over a coordinate plane"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-classical-stokes-theorem-for-a-c2-surface-patch, def-the-induced-boundary-chain-of-a-c2-surface-patch, def-admissible-regular-parametrized-surface-patch, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-divergence-and-curl-of-a-c1-vector-field, def-cross-product-in-r3, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-jordan-fubini-by-sections, thm-ftc-second-part, thm-line-integrals-under-reversal-and-concatenation, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, def-type-i-type-ii-and-elementary-green-regions, def-positive-orientation-for-elementary-region-boundaries, def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus, Example 4.4.6"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
    - title: "G. Strang and E. Herman, Calculus Volume 3, Example 6.75"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
pipeline_run: null
---

## Statement

**False claim:** Stokes' theorem applies only when the surface is a graph of a function over one of the coordinate planes.

The actual hypothesis on the A page is about the parameter region and the smoothness of the parametrization. The image need not be a graph.

## Facts & Assumptions

**Given:** The lateral cylinder patch $\sigma(\theta,z)=(\cos\theta,\sin\theta,z)$ on $[0,2\pi]\times[0,1]$, and the field $F(x,y,z)=(-yz,xz,0)$.

[L1] Stokes' theorem identifies circulation around the induced boundary chain with the curl flux in the induced orientation ([[thm-the-classical-stokes-theorem-for-a-c2-surface-patch]]).

[F1] The induced boundary chain is obtained from the positive boundary chain of the parameter region ([[def-the-induced-boundary-chain-of-a-c2-surface-patch]]).

[F2] A regular patch has no interior parameter point sharing its image with a distinct point of the parameter region ([[def-admissible-regular-parametrized-surface-patch]]).

[F3] Flux is computed against the oriented area vector ([[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[F4] The curl is that of [[def-divergence-and-curl-of-a-c1-vector-field]].

[F5] The cross product is that of [[def-cross-product-in-r3]].

[L2] $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$ ([[thm-sine-and-cosine-derivatives]]).

[L3] $\sin^2t+\cos^2t=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L4] Jordan Fubini computes a multiple integral by iterated section integrals ([[thm-jordan-fubini-by-sections]]).

[L5] If $G'=f$ on $[a,b]$, then $\int_a^bf=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[L6] Line integrals negate under path reversal ([[thm-line-integrals-under-reversal-and-concatenation]]).

[F6] Rectangles are elementary Green regions ([[def-type-i-type-ii-and-elementary-green-regions]]).

[F7] The positive boundary of a rectangle runs along the bottom, right, top, and left edges in that order ([[def-positive-orientation-for-elementary-region-boundaries]]).

[F8] Vector line integrals are computed from $\langle F(\gamma(t)),\gamma'(t)\rangle$ ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[F9] $\langle x,y\rangle=\sum_{k<n}x_ky_k$ ([[def-euclidean-inner-product]]).

## Refutation

**Proof technique:** direct.

1.1 The cylinder patch is $C^2$ and regular over a rectangle, and [F5], [L2], and [L3] give $\sigma_\theta\times\sigma_z=(\cos\theta,\sin\theta,0)$. [F2, F5, F6, L2, L3, given]

2.1 This surface is not a graph over any coordinate plane: over the $xy$ plane the same point $(x,y)$ on the unit circle carries all heights $z\in[0,1]$, while over the $xz$ or $yz$ plane the missing horizontal coordinate is two-valued. [step 1.1, L3]

2.2 By [F1], [F7], [L6], and [F8], the two seam edges of the parameter rectangle cancel in the induced boundary chain, leaving the bottom circle traversed counterclockwise and the top circle traversed clockwise. [step 1.1, F1, F7, L6, F8]

2.3 Direct differentiation in [F4] gives $\operatorname{curl}F=(-x,-y,2z)$, and step 1.1 gives $\langle\operatorname{curl}F(\sigma(\theta,z)),\sigma_\theta\times\sigma_z\rangle=-1$, so the curl flux is $\int_0^1\int_0^{2\pi}(-1)\,d\theta\,dz=-2\pi$ by [L4] and [L5]. [step 1.1, F3, F4, F9, L4, L5]

3.1 On the bottom circle the field vanishes, so that contribution is $0$; on the top circle, traversed clockwise, the circulation is $-2\pi$. Thus the total circulation is $-2\pi$, agreeing with step 2.3 and [L1]. [step 2.2, step 2.3, F8, F9, L2, L3, L5, L1]

4.1 Stokes' theorem therefore holds on this surface even though step 2.1 shows it is not a graph over any coordinate plane, so the claim is false. [step 2.1, step 3.1, L1]

5.1 What the theorem actually uses is that the parameter region is a finite elementary Green region and the parametrization is $C^2$; the image being a graph is irrelevant. [step 4.1, L1, F6] ∎

## Remarks

- The seam cancellation in step 2.1 is the same mechanism as in the hemisphere example, but here the image is genuinely cylindrical rather than a graph in disguise.
