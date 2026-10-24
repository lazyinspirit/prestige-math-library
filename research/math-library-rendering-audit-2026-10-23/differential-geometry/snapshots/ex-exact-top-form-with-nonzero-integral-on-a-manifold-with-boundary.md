---
id: ex-exact-top-form-with-nonzero-integral-on-a-manifold-with-boundary
title: "An exact top form with nonzero integral on a disk"
kind: example
status: published
origin: pipeline
deps: ["thm-general-stokes-theorem", "prop-integration-of-top-forms-by-finite-parametrizations"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
sources:
  references:
    - title: "Lee Theorem 16.11 and Corollary 16.14"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Example

Assume $\mathrm{AC}_\omega$. On the closed unit disk $D$ with its standard orientation $dx\wedge dy$,
$$dx\wedge dy=d(x\,dy),\qquad \int_Ddx\wedge dy=\pi=\int_{\partial D}x\,dy.$$
Thus an exact top form can have nonzero integral on a manifold with boundary. Its primitive $x\,dy$ is not itself an exact one-form.

## Facts & Assumptions

[F1] [[thm-general-stokes-theorem]]: Assume $\mathrm{AC}_\omega$. Let $M$ be an oriented smooth $n$-manifold with boundary, $n\geq1$, and let $\eta\in\Omega_c^{n-1}(M)$. With $j:\partial M\hookrightarrow M$ and the outward-normal-first orientation, $$\int_M d\eta=\int_{\partial M}j^*\eta.$$ An empty boundary contributes zero; in dimension one its integral is a finite signed sum of point values.

[F2] [[prop-integration-of-top-forms-by-finite-parametrizations]]: Let $n\geq1$, let $M^n$ be oriented, and let $\omega\in\Omega_c^n(M)$. For $1\leq i\leq m$ let $D_i\subset\mathbb R^n$ be bounded open Jordan domains and $F_i:\overline D_i\to M$ continuous and smooth up to the boundary in target coordinates: near each parameter point, a target coordinate representative extends smoothly to a Euclidean neighborhood. Suppose $F_i|_{D_i}$ is an orientation-preserving diffeomorphism onto an open $W_i\subset M$, the $W_i$ are pairwise disjoint, and $\operatorname{supp}\omega\subset\bigcup_i\overline W_i$. Then $$\int_M\omega=\sum_{i=1}^m\int_{D_i}F_i^*\omega.$$ An empty family is allowed when the support is empty. No nonsingularity of $DF_i$ on $\partial D_i$, and no $M$-valued extension across a genuine target boundary, is assumed.

## Verification

**Given:** The objects and hypotheses in the statement above.

1.1 Differentiation gives $d(xdy)=dx\wedge dy$. Polar parametrization evaluates its disk integral as $\int_0^{2\pi}\int_0^1r\,dr\,dt=\pi$. The coordinate extensions are smooth on the closed parameter rectangle, so the finite-parametrization formula applies. [F2, algebra]

2.1 The counterclockwise circle $c(t)=(\cos t,\sin t)$ pulls $xdy$ back to $\cos^2t\,dt$, with integral $\pi$. General Stokes equates these two integrals on compact D with outward-first orientation. [F1, F2, step 1.1]

3.1 If $xdy=dh$ on D for a smooth h, then in coordinates $h_x=0$ and $h_y=x$. Equality of smooth mixed partials would give $0=\partial_yh_x=\partial_xh_y=1$, impossible in the disk interior. Thus the primitive is not exact, even though its derivative is an exact top form. [step 1.1, algebra] ∎
