---
id: ex-the-planar-divergence-theorem-on-a-rectangle
kind: example
title: "The planar divergence theorem on a rectangle, checked against a direct boundary computation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-the-planar-divergence-theorem-flux-form-of-greens-theorem, cor-greens-theorem-in-circulation-form, def-type-i-type-ii-and-elementary-green-regions, def-positive-orientation-for-elementary-region-boundaries, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, def-divergence-and-curl-of-a-c1-vector-field, thm-jordan-fubini-by-sections, thm-ftc-second-part, def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus, Example 4.3.4"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Example

Let $D=[0,1]^2$ and let $F(x,y)=(x^2,xy)$. Then the flux form of Green's theorem gives
$$\int_{\partial D}(-F_y)\,dx+F_x\,dy=\iint_D(\partial_xF_x+\partial_yF_y)\,dA=\frac32,$$
and the boundary integral can be checked directly edge by edge. On the same field, the circulation form gives
$$\int_{\partial D}F\cdot d\mathbf r=\frac12.$$

## Facts & Assumptions

**Given:** The unit square $D=[0,1]^2$ with its positive boundary chain and the field $F(x,y)=(x^2,xy)$.

[L1] For a positively oriented finite elementary Green region and a $C^1$ planar field on an open neighbourhood of it, the flux form of Green's theorem is $\int_{\partial D}(-F_y)\,dx+F_x\,dy=\iint_D(\partial_xF_x+\partial_yF_y)\,dA$ ([[cor-the-planar-divergence-theorem-flux-form-of-greens-theorem]]).

[L2] The circulation form of Green's theorem identifies $\int_{\partial D}F\cdot d\mathbf r$ with the area integral of the third coordinate of the curl of the lifted field ([[cor-greens-theorem-in-circulation-form]]).

[F1] The unit square is an elementary Green region ([[def-type-i-type-ii-and-elementary-green-regions]]).

[F2] Its positive boundary traverses the lower edge left to right, the right edge upward, the upper edge right to left, and the left edge downward ([[def-positive-orientation-for-elementary-region-boundaries]]).

[F3] Vector line integrals are computed from $\langle F(\gamma(t)),\gamma'(t)\rangle$ ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[F4] The planar divergence is $\partial_xF_x+\partial_yF_y$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[L3] Jordan Fubini computes a multiple integral by iterated section integrals ([[thm-jordan-fubini-by-sections]]).

[L4] If $a<b$, $G$ is differentiable on $[a,b]$, and $G'=f$ is integrable there, then $\int_a^bf=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[F5] $\langle x,y\rangle=\sum_{k<n}x_ky_k$ ([[def-euclidean-inner-product]]).

## Verification

**Proof technique:** direct.

1.1 The square $D$ is an elementary Green region by [F1], [F2] fixes the four directed edges of its positive boundary chain, and the polynomial field $F$ is $C^1$ on the open neighbourhood $\mathbb R^2$ of $D$. [F1, F2, given]

2.1 Here $\partial_xF_x=2x$ and $\partial_yF_y=x$, so [F4], [L3], and [L4] give $\iint_D(\partial_xF_x+\partial_yF_y)\,dA=\int_0^1\int_0^13x\,dy\,dx=3/2$. [step 1.1, F4, L3, L4]

2.2 On the bottom edge $\gamma_1(t)=(t,0)$, $0\le t\le1$, one has $dx=dt$, $dy=0$, and $-F_y(\gamma_1(t))=0$, so the flux-form integrand vanishes and this edge contributes $0$. [step 1.1, F2, F3, F5]

2.3 On the right edge $\gamma_2(t)=(1,t)$, $0\le t\le1$, one has $dx=0$, $dy=dt$, and $F_x(\gamma_2(t))=1$, so the contribution is $1$. [step 1.1, F2, F3, F5]

2.4 On the top edge $\gamma_3(t)=(1-t,1)$, $0\le t\le1$, one has $dx=-dt$, $dy=0$, and $-F_y(\gamma_3(t))=-(1-t)$, so the contribution is $\int_0^1(1-t)\,dt=1/2$ by [L4]. [step 1.1, F2, F3, F5, L4]

2.5 On the left edge $\gamma_4(t)=(0,1-t)$, $0\le t\le1$, one has $dx=0$, $dy=-dt$, and $F_x(\gamma_4(t))=0$, so the contribution is $0$. [step 1.1, F2, F3, F5]

2.6 For the circulation form, $\int_{\partial D}F\cdot d\mathbf r$ has edge contributions $1/3$, $1/2$, $-1/3$, and $0$, so it equals $1/2$; the lifted field has curl third coordinate $y$, and [L3], [L4], and [L2] give $\iint_Dy\,dA=1/2$ as well. [step 1.1, L2, F3, L3, L4]

3.1 Steps 2.1, 2.2, 2.3, 2.4, and 2.5 give $0+1+1/2+0=3/2$, agreeing with [L1]. [step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, L1]

4.1 On each directed edge, rotating the unit tangent clockwise gives the outward unit normal of the square, by the positive-orientation convention of [F2]. [step 3.1, F2, F5] ∎

## Remarks

- The two zero edge contributions in steps 2.2 and 2.5 are computed, not inferred from symmetry. They vanish for two different reasons: $F_y=0$ on the bottom edge and $F_x=0$ on the left edge.
