---
id: ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation
kind: example
title: "The closed ball is an elementary solid region, presented by the eight spherical octants"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-elementary-solid-region, def-simple-solid-region-in-a-coordinate-direction, def-adapted-outward-boundary-presentation-of-a-simple-solid-region, def-admissible-regular-parametrized-surface-patch, def-finitely-patched-regular-surface-and-integrals, def-cross-product-in-r3, lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-signs-monotonicity-and-ranges, thm-sine-and-cosine-parametrize-the-unit-circle, thm-quarter-turn-values-and-shift-formulas, def-riemann-integral-over-a-jordan-set, thm-jordan-boundary-criterion, def-oriented-unit-normal-and-flux-of-a-surface-patch, cor-disc-jordan-content-is-pi-r-squared, def-null-and-content-zero-in-rn, thm-graphs-of-continuous-functions-have-content-zero]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

Fix $R>0$ and let
$$B_R:=\{(x,y,z)\in\mathbb R^3:x^2+y^2+z^2\le R^2\}.$$
Let
$$\varphi(\phi,\theta)=R(\sin\phi\cos\theta,\sin\phi\sin\theta,\cos\phi)$$
on $[0,\pi]\times[0,2\pi]$, and cut the parameter rectangle at $\phi=\pi/2$ and at $\theta=\pi/2,\pi,3\pi/2$. The eight restrictions of $\varphi$ to the resulting closed rectangles form one outward finite patch presentation of $\partial B_R$ adapted in all three coordinate directions, so $B_R$ is an elementary solid region.

## Facts & Assumptions

**Given:** A real radius $R>0$; the spherical parametrization $\varphi(\phi,\theta)=R(\sin\phi\cos\theta,\sin\phi\sin\theta,\cos\phi)$; the intervals $I_+= [0,\pi/2]$, $I_-=[\pi/2,\pi]$, and $J_0=[0,\pi/2]$, $J_1=[\pi/2,\pi]$, $J_2=[\pi,3\pi/2]$, $J_3=[3\pi/2,2\pi]$; and the eight restricted patches $\varphi_{\pm,j}:=\varphi|_{I_\pm\times J_j}$.

[F1] An elementary solid region is a compact solid equipped with one compatible finite patch presentation of its boundary that is adapted to a simple description in each coordinate direction ([[def-elementary-solid-region]]).

[F2] A simple description in the direction $k$ has the form $E=\{p\in\mathbb R^3:\pi_k(p)\in D,\ \gamma_1(\pi_k(p))\le p_k\le\gamma_2(\pi_k(p))\}$ ([[def-simple-solid-region-in-a-coordinate-direction]]).

[F3] In an adapted outward boundary presentation, the projected images of the upper sublist are pairwise disjoint and fill the base up to content zero ([[def-adapted-outward-boundary-presentation-of-a-simple-solid-region]]).

[F4] A regular patch has no interior parameter point with the same image as a distinct point of the parameter region ([[def-admissible-regular-parametrized-surface-patch]]).

[F5] In a compatible finite patch presentation, distinct patches meet only with content-zero overlap in each parameter region ([[def-finitely-patched-regular-surface-and-integrals]]).

[F6] The cross product in $\mathbb R^3$ is $u\times v=(u_yv_z-u_zv_y,\ u_zv_x-u_xv_z,\ u_xv_y-u_yv_x)$ ([[def-cross-product-in-r3]]).

[L1] For a $C^1$ patch $\psi$ of two variables, $(\psi_u\times\psi_v)_k=\det D(\pi_k\circ\psi)$ in each coordinate direction ([[lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians]]).

[L2] $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$ ([[thm-sine-and-cosine-derivatives]]).

[L3] $\sin^2t+\cos^2t=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L4] Sine is positive on $(0,\pi)$ and negative on $(\pi,2\pi)$; cosine is positive on $(0,\pi/2)\cup(3\pi/2,2\pi)$, negative on $(\pi/2,3\pi/2)$, and strictly decreasing on $[0,\pi]$; and both functions take values in $[-1,1]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]]).

[L5] $\sin(\pi/2)=1$, $\cos(\pi/2)=0$, $\sin\pi=0$, and $\cos\pi=-1$ ([[thm-quarter-turn-values-and-shift-formulas]]).

[F7] Integration over a Jordan set is that of its zero extension ([[def-riemann-integral-over-a-jordan-set]]).

[L6] A bounded set is Jordan measurable exactly when its boundary has content zero ([[thm-jordan-boundary-criterion]]).

[F8] Choosing $N_\varphi$ rather than $-N_\varphi$ is an orientation ([[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[L7] A closed disc of radius $r\ge0$ has Jordan content $\pi r^2$ ([[cor-disc-jordan-content-is-pi-r-squared]]).

[F9] A set has content zero when it can be covered by finitely many cubes of arbitrarily small total volume, and content zero passes to subsets ([[def-null-and-content-zero-in-rn]]).

[L8] A continuous graph over a compact nondegenerate rectangle has content zero ([[thm-graphs-of-continuous-functions-have-content-zero]]).

[L9] The map $\theta\mapsto(\cos\theta,\sin\theta)$ is injective on $[0,2\pi)$ ([[thm-sine-and-cosine-parametrize-the-unit-circle]]).

## Verification

**Proof technique:** direct.

1.1 The eight parameter rectangles are $I_\pm\times J_j$, obtained by cutting the spherical parameter rectangle at the quarter turns named in [L5]. [given, L5]

2.1 Differentiating gives $\varphi_\phi=R(\cos\phi\cos\theta,\cos\phi\sin\theta,-\sin\phi)$ and $\varphi_\theta=R(-\sin\phi\sin\theta,\sin\phi\cos\theta,0)$, and [F6], [L2], and [L3] give $\varphi_\phi\times\varphi_\theta=R\sin\phi\,\varphi(\phi,\theta)$. [step 1.1, F6, L2, L3]

3.1 On the interior of each rectangle one has $\sin\phi>0$ by [L4], so step 2.1 gives a nonzero oriented area vector. If two interior parameter points have the same image, their third coordinates give the same $\cos\phi$; strict monotonicity of cosine on $(0,\pi)$ gives the same $\phi$, and the first two coordinates then give the same point of the unit circle, so [L9] gives the same $\theta$. Thus each restriction is injective on its interior. Two distinct octants meet only along boundary arcs whose preimages have content zero and contain no point that is interior for both patches. Hence the eight restrictions are regular and compatible in the senses of [F4] and [F5]. [step 1.1, step 2.1, F4, F5, F7, L4, L6, L9]

3.2 In the $z$ direction the base is the closed disc $D_z=\{(x,y):x^2+y^2\le R^2\}$ and the two boundary functions are $\gamma_1^z(x,y)=-\sqrt{R^2-x^2-y^2}$ and $\gamma_2^z(x,y)=\sqrt{R^2-x^2-y^2}$, so [F2] describes $B_R$; the third coordinate of the oriented area vector is $R^2\sin\phi\cos\phi$, so by [L4] the four patches with $\phi\in(0,\pi/2)$ form the upper sublist and the four with $\phi\in(\pi/2,\pi)$ form the lower sublist, with no lateral patch because the vanishing set $\sin\phi=0$ or $\cos\phi=0$ lies on parameter boundaries. [step 2.1, F2, F3, L1, L4]

3.3 In the $x$ direction the base is the closed disc $D_x=\{(y,z):y^2+z^2\le R^2\}$ and the boundary functions are $\gamma_1^x(y,z)=-\sqrt{R^2-y^2-z^2}$ and $\gamma_2^x(y,z)=\sqrt{R^2-y^2-z^2}$, so [F2] again describes $B_R$. The first coordinate of the oriented area vector is $R^2\sin^2\phi\cos\theta$, so by [L4] the four octants with $\theta\in(0,\pi/2)\cup(3\pi/2,2\pi)$ form the upper sublist and the other four the lower sublist; the vanishing set $\sin\phi=0$ or $\cos\theta=0$ lies on parameter boundaries, so there is no lateral patch. [step 2.1, F2, F3, L1, L4, L5]

3.4 In the $y$ direction the base is the closed disc $D_y=\{(z,x):z^2+x^2\le R^2\}$ and the boundary functions are $\gamma_1^y(z,x)=-\sqrt{R^2-z^2-x^2}$ and $\gamma_2^y(z,x)=\sqrt{R^2-z^2-x^2}$, so [F2] describes $B_R$ a third time. The second coordinate of the oriented area vector is $R^2\sin^2\phi\sin\theta$, so the split is by $\theta\in(0,\pi)$ against $\theta\in(\pi,2\pi)$; again the vanishing set lies on parameter boundaries, so there is no lateral patch. [step 2.1, F2, F3, L1, L4, L5]

4.1 The projections of the interiors of the four upper octants onto the $xy$ plane are the four open quarter discs, pairwise disjoint, and the same is true for the four lower octants; each union misses only the two coordinate diameters and the boundary circle of $D_z$. The circle has content zero because the closed disc is Jordan measurable by [L6] and [L7], so its boundary has content zero; each diameter is a continuous graph over a compact interval and has content zero by [L8]; and the finite union of those three sets has content zero by [F9]. Thus both graph sublists satisfy the coverage clause in the $z$ direction. [step 3.2, F3, F9, L6, L7, L8]

5.1 In the $x$ direction the projections onto the $yz$ plane of the four upper octants are the four open quarter discs of $D_x$, pairwise disjoint: $J_0$ gives the half with $y>0$ and $J_3$ the half with $y<0$, and in each half the two choices $\phi\in(0,\pi/2)$ and $\phi\in(\pi/2,\pi)$ split by the sign of $z$. The four lower octants have the same projected images, now coming from $J_1$ and $J_2$. In each case the omitted set is the union of the two coordinate diameters and the boundary circle of $D_x$, which has content zero by the same argument as in step 4.1. Thus both graph sublists satisfy the coverage clause in the $x$ direction. [step 3.3, F3, F9, L6, L7, L8]

5.2 In the $y$ direction the projections onto the $zx$ plane of the four upper octants are the four open quarter discs of $D_y$, pairwise disjoint: $\theta\in(0,\pi)$ gives the half with $x>0$ or $x<0$ according to whether $\theta\in(0,\pi/2)$ or $(\pi/2,\pi)$, and the two halves are split again by the sign of $z$. The four lower octants have the same projected images. The omitted set is the union of the two coordinate diameters and the boundary circle of $D_y$, hence has content zero by the same argument as in step 4.1. So both graph sublists satisfy the coverage clause in the $y$ direction. [step 3.4, F3, F9, L6, L7, L8]

6.1 Steps 3.1, 3.2, 4.1, 3.3, 5.1, 3.4, and 5.2 show that the same eight patches are compatible and adapted in all three coordinate directions, and step 2.1 gives them the outward orientation. Therefore [F1] makes $B_R$ with this presentation an elementary solid region. [step 3.1, step 3.2, step 4.1, step 3.3, step 5.1, step 3.4, step 5.2, F1, F8, step 2.1] ∎

## Remarks

- The cuts at both $\phi=\pi/2$ and the four azimuth quadrants are load-bearing. Without the azimuth cuts, the $x$ and $y$ coordinates of the oriented area vector would change sign inside one parameter interior.

- The poles are harmless: step 3.1 uses that they lie on parameter boundaries, so their vanishing oriented area vector does not violate regularity.
