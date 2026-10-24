---
id: ex-greens-theorem-on-a-planar-disk
title: "Green circulation and flux on a disk"
kind: example
status: published
origin: pipeline
deps: ["cor-greens-theorem-from-general-stokes", "prop-integration-of-top-forms-by-finite-parametrizations"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Theorem 16.17 and Example 16.16, p.415"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Example

On the unit disk with orientation $dx\wedge dy$, let $\alpha=(-y\,dx+x\,dy)/2$ and $F=(x/2,y/2)$. Then $d\alpha=dx\wedge dy$ and the boundary circulation and outward flux both equal $\pi$.

## Facts & Assumptions

[F1] [[cor-greens-theorem-from-general-stokes]]: For a compact smooth planar region $D$ oriented by $dx\wedge dy$ and smooth $P,Q$ on a neighborhood, general Stokes gives $$\int_{\partial D}(P\,dx+Q\,dy)=\int_D(Q_x-P_y)\,dx\,dy,$$ $$\int_{\partial D}(P\,dy-Q\,dx)=\int_D(P_x+Q_y)\,dx\,dy.$$ When $D$ also has the supplied finite elementary Green decomposition required by the classical results, these are exactly their circulation and outward-flux formulas. Outer boundary curves run counterclockwise and holes clockwise.

[F2] [[prop-integration-of-top-forms-by-finite-parametrizations]]: Let $n\geq1$, let $M^n$ be oriented, and let $\omega\in\Omega_c^n(M)$. For $1\leq i\leq m$ let $D_i\subset\mathbb R^n$ be bounded open Jordan domains and $F_i:\overline D_i\to M$ continuous and smooth up to the boundary in target coordinates: near each parameter point, a target coordinate representative extends smoothly to a Euclidean neighborhood. Suppose $F_i|_{D_i}$ is an orientation-preserving diffeomorphism onto an open $W_i\subset M$, the $W_i$ are pairwise disjoint, and $\operatorname{supp}\omega\subset\bigcup_i\overline W_i$. Then $$\int_M\omega=\sum_{i=1}^m\int_{D_i}F_i^*\omega.$$ An empty family is allowed when the support is empty. No nonsingularity of $DF_i$ on $\partial D_i$, and no $M$-valued extension across a genuine target boundary, is assumed.

## Verification

**Given:** The objects and hypotheses in the statement above.

1.1 Differentiation gives $d\alpha=dx\wedge dy$; also $F_xdy-F_ydx=\alpha$ and $\operatorname{div}F=1$. The Green agreement identifies these as the circulation and flux integrands. [F1, algebra]

1.2 The polar parametrization $(r,\theta)\mapsto(r\cos\theta,r\sin\theta)$ on $(0,1)\times(0,2\pi)$ has positive determinant r, extends smoothly in coordinates from its closure, and covers the disk except its cut, center, and boundary. Hence the area integral is $\int_0^{2\pi}\int_0^1r\,dr\,d\theta=\pi$. Singularities at r=0 are permitted at parameter boundary. [F2]

2.1 For the counterclockwise boundary $c(\theta)=(\cos\theta,\sin\theta)$, $c^*\alpha=\tfrac12d\theta$, so the boundary integral is $\pi$ by the interval parametrization with its cut point. The outward-first boundary orientation is increasing angle since the ordered pair of radial outward normal and this tangent has positive determinant. [F2, step 1.1, step 1.2] ∎
