---
id: ex-the-right-circular-cylinder-is-an-elementary-solid-region
kind: example
title: "A right circular cylinder is an elementary solid region, presented by two caps and four side quarters"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-elementary-solid-region, def-simple-solid-region-in-a-coordinate-direction, def-adapted-outward-boundary-presentation-of-a-simple-solid-region, def-admissible-regular-parametrized-surface-patch, def-finitely-patched-regular-surface-and-integrals, def-cross-product-in-r3, lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-and-cosine-parametrize-the-unit-circle, thm-quarter-turn-values-and-shift-formulas, def-riemann-integral-over-a-jordan-set, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-null-and-content-zero-in-rn, thm-graphs-of-continuous-functions-have-content-zero, thm-jordan-boundary-criterion]
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
    - title: "G. Strang and E. Herman, Calculus Volume 3, section 6.8"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus, chapter 4"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Example

Fix $R>0$ and $H>0$, and let
$$C_{R,H}:=\{(x,y,z)\in\mathbb R^3:x^2+y^2\le R^2,\ 0\le z\le H\}.$$
Its boundary can be presented by two polar cap patches and four quarter-cylinder side patches. That six-patch presentation is compatible and adapted in all three coordinate directions, so $C_{R,H}$ is an elementary solid region.

## Facts & Assumptions

**Given:** A radius $R>0$, a height $H>0$, the top and bottom cap parametrizations $\kappa_+(r,\theta)=(r\cos\theta,r\sin\theta,H)$ and $\kappa_-(r,\theta)=(r\sin\theta,r\cos\theta,0)$ on $[0,R]\times[0,2\pi]$, and the four side patches $\sigma_j(\theta,z)=(R\cos\theta,R\sin\theta,z)$ on $J_j\times[0,H]$ for $J_0=[0,\pi/2]$, $J_1=[\pi/2,\pi]$, $J_2=[\pi,3\pi/2]$, and $J_3=[3\pi/2,2\pi]$.

[F1] An elementary solid region has one compatible finite patch presentation of its boundary that is adapted to a simple description in each coordinate direction ([[def-elementary-solid-region]]).

[F2] A simple description in direction $k$ has the form stated in [[def-simple-solid-region-in-a-coordinate-direction]].

[F3] An adapted outward presentation requires the projected images of the upper sublist to be pairwise disjoint and to fill the base up to content zero ([[def-adapted-outward-boundary-presentation-of-a-simple-solid-region]]).

[F5] Distinct patches in a compatible finite patch presentation have only content-zero overlap in each parameter region ([[def-finitely-patched-regular-surface-and-integrals]]).

[F6] The cross product is that of [[def-cross-product-in-r3]].

[L1] The coordinate of $\psi_u\times\psi_v$ in direction $k$ is the projected Jacobian determinant of $\pi_k\circ\psi$ ([[lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians]]).

[L2] $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$ ([[thm-sine-and-cosine-derivatives]]).

[L3] $\sin^2t+\cos^2t=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L4] Sine is positive on $(0,\pi)$ and negative on $(\pi,2\pi)$; cosine is positive on $(0,\pi/2)\cup(3\pi/2,2\pi)$ and negative on $(\pi/2,3\pi/2)$; and both functions take values in $[-1,1]$. This follows from the monotonicity intervals together with the quarter-turn values ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]]).

[L5] $\sin(\pi/2)=1$, $\cos(\pi/2)=0$, $\sin\pi=0$, and $\cos\pi=-1$ ([[thm-quarter-turn-values-and-shift-formulas]]).

[L6] The map $\theta\mapsto(\cos\theta,\sin\theta)$ is injective on $[0,2\pi)$ ([[thm-sine-and-cosine-parametrize-the-unit-circle]]).

[F8] Choosing $N_\varphi$ rather than $-N_\varphi$ is an orientation ([[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[F9] A set has content zero when it can be covered by finitely many cubes of arbitrarily small total volume, and content zero passes to subsets ([[def-null-and-content-zero-in-rn]]).

[L7] A continuous graph over a compact nondegenerate rectangle has content zero ([[thm-graphs-of-continuous-functions-have-content-zero]]).

[L8] The boundary of a compact Jordan rectangle has content zero ([[thm-jordan-boundary-criterion]]).

## Verification

**Proof technique:** direct.

1.1 The two caps and four quarter-cylinder side patches are the six displayed parametrizations, with the quarter-turn cuts in the azimuth chosen as in [L5]. [given, L5]

2.1 Differentiating gives $\kappa_{+,r}\times\kappa_{+,\theta}=(0,0,r)$, $\kappa_{-,r}\times\kappa_{-,\theta}=(0,0,-r)$, and $\sigma_{j,\theta}\times\sigma_{j,z}=R(\cos\theta,\sin\theta,0)$, so the caps have oriented area vectors $\pm re_z$ and each side quarter has outward horizontal area vector $R(\cos\theta,\sin\theta,0)$ by [F6], [L2], and [L3]. [step 1.1, F6, L2, L3, F8]

3.1 The two caps are regular patches: by step 2.1 their oriented area vectors are $\pm re_z$, nonzero on the parameter interiors $0<r<R$ and $0<\theta<2\pi$; equality of two cap images gives equality of their radii by [L3] and then equality of their angles by [L6]. Each side quarter is regular too: step 2.1 gives the nonzero area vector $R(\cos\theta,\sin\theta,0)$ on the parameter interior, the third coordinate recovers $z$, and [L6] recovers $\theta$ from the first two coordinates. The six images are exactly the top disc, the bottom disc, and the four quarter-cylinders of the lateral surface, so they cover $\partial C_{R,H}$. The caps meet the sides only along the top and bottom circles, and distinct side quarters meet only along vertical seam segments. In every patch, the preimage of such an overlap lies in the boundary of its compact rectangular parameter region, hence has content zero by [L8]. No overlap point is the image of interior points of two distinct patches. Therefore the six patches are compatible in the sense of [F5]. [step 1.1, step 2.1, F5, L3, L6, L8]

3.2 In the $z$ direction the base is the closed disc $D_z=\{(x,y):x^2+y^2\le R^2\}$, the boundary functions are $\gamma_1(x,y)=0$ and $\gamma_2(x,y)=H$, the top cap is the upper sublist, the bottom cap is the lower sublist, and the four side quarters are lateral because their third area-vector coordinate is zero. [step 2.1, F2, F3, L1]

3.3 In the $x$ direction the base is the rectangle $D_x=[-R,R]\times[0,H]$ in the coordinates $(y,z)$, the boundary functions are $\gamma_1^x(y,z)=-\sqrt{R^2-y^2}$ and $\gamma_2^x(y,z)=\sqrt{R^2-y^2}$, the two side quarters with $\cos\theta>0$ form the upper sublist, the two with $\cos\theta<0$ form the lower sublist, and both caps are lateral because their first area-vector coordinate is zero. [step 2.1, F2, F3, L1, L4]

3.4 In the $y$ direction the base is the rectangle $D_y=[0,H]\times[-R,R]$ in the coordinates $(z,x)$, the boundary functions are $\gamma_1^y(z,x)=-\sqrt{R^2-x^2}$ and $\gamma_2^y(z,x)=\sqrt{R^2-x^2}$, the two side quarters with $\sin\theta>0$ form the upper sublist, the two with $\sin\theta<0$ form the lower sublist, and both caps are lateral because their second area-vector coordinate is zero. [step 2.1, F2, F3, L1, L4]

4.1 The projected interior of the top cap is the open disc with the positive $x$-axis removed, while that of the bottom cap is the open disc with the positive $y$-axis removed: the polar parameter interior has $0<r<R$ and $0<\theta<2\pi$, so it misses the centre and the seam $\theta=0=2\pi$, and the two cap parametrizations place that seam on those two different radii. Thus each graph sublist in the $z$ direction fills the base up to the boundary circle together with one radius. The circle is the union of two continuous semicircle graphs, and each missing radius is itself a continuous graph over a compact interval, so the omitted set has content zero by [L7] and [F9]. [step 3.2, F3, F9, L7]

4.2 In the $x$ direction the projected interiors of the two upper side quarters are the two open half-rectangles $\{(y,z):0<y<R,\ 0<z<H\}$ and $\{(y,z):-R<y<0,\ 0<z<H\}$, disjoint and filling $D_x$ up to the segment $y=0$ and the boundary edges. The two lower side quarters have the same projected images. Each omitted segment is a continuous graph over a compact interval and has content zero by [L7]; their finite union therefore has content zero by [F9]. Thus both graph sublists satisfy the coverage clause in the $x$ direction. [step 3.3, F3, F9, L7]

4.3 In the $y$ direction the projected interiors of the two upper side quarters are the two open half-rectangles $\{(z,x):0<z<H,\ 0<x<R\}$ and $\{(z,x):0<z<H,\ -R<x<0\}$, disjoint and filling $D_y$ up to the segment $x=0$ and the boundary edges. The two lower side quarters have the same projected images. The omitted set is again a finite union of continuous graphs over compact intervals, so it has content zero by [L7] and [F9]. Thus both graph sublists satisfy the coverage clause in the $y$ direction. [step 3.4, F3, F9, L7]

5.1 Steps 3.1, 3.2, 4.1, 3.3, 4.2, 3.4, and 4.3 show that this one six-patch presentation is compatible and adapted in all three coordinate directions, and step 2.1 orients it outward. Therefore [F1] makes $C_{R,H}$ an elementary solid region. [step 3.1, step 3.2, step 4.1, step 3.3, step 4.2, step 3.4, step 4.3, F1, F8, step 2.1] ∎

## Remarks

- The side must be cut into four quarters. A single side patch would have first and second area-vector coordinates changing sign inside one parameter interior, so it could not be assigned consistently to upper or lower sublists in the $x$ and $y$ directions.
