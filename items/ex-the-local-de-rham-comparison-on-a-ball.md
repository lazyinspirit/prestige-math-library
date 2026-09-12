---
id: "ex-the-local-de-rham-comparison-on-a-ball"
kind: "example"
title: "The local de Rham comparison on a ball"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-the-de-rham-map-is-an-isomorphism-on-convex-coordinate-domains"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem, local step in Theorem 3.3, PDF pp.6–7
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Example

Let $B=B(c,r)\subset\mathbb R^n$ be a nonempty open ball. The de Rham comparison is the identity $\mathbb R\to\mathbb R$ in degree zero, under evaluation at $c$, and both its source and target vanish in every positive degree.

## Facts & Assumptions

**Given:** The ball $B$ and its centre $c$.

[F1] [[lem-the-de-rham-map-is-an-isomorphism-on-convex-coordinate-domains]] proves the local comparison using the radial form homotopy and a smooth singular prism, retaining unnormalized degenerate simplices.

## Verification

1.1 The radial homotopy is $H(x,t)=c+t(x-c)$. For a $k$-form $\omega$ with $k\ge1$, its homotopy operator is explicitly $$ (L_H\omega)_x(v_1,\ldots,v_{k-1})=\int_0^1 t^{k-1}\omega_{c+t(x-c)}(x-c,v_1,\ldots,v_{k-1})\,dt.$$ The homotopy identity in [F1] gives $dL_H\omega+L_Hd\omega=\omega-H_0^*\omega$; since the constant-map pullback $H_0^*\omega$ is zero in positive degree, every closed positive-degree form is exact. A closed zero-form satisfies $f(x)=f(c)$, so evaluation at $c$ identifies $H^0_{\mathrm{dR}}(B)$ with $\mathbb R$. [F1, given]

2.1 On a smooth singular $q$-simplex $\sigma$, triangulate $\Delta^q\times[0,1]$ by the $q+1$ affine prism simplices $\kappa_i$ with ordered vertices $$(v_0,0),\ldots,(v_i,0),(v_i,1),\ldots,(v_q,1),$$ and put $P\sigma=\sum_{i=0}^q(-1)^iH(\sigma\times\operatorname{id})\kappa_i$. The cancellations of paired interior faces leave $$\partial P+P\partial=\operatorname{id}_\#-(c)_\#.$$ Dualizing gives $\operatorname{id}-c^*=\delta D+D\delta$, not a contraction of the unnormalized complex by itself: positive-dimensional constant simplices remain nonzero. The point complex is the alternating complex with one generator in every degree, whose positive cohomology vanishes, and [F1] uses this calculation together with the displayed homotopy to prove that inclusion of the centre and constant projection induce inverse cohomology maps. Hence $H_\infty^0(B;\mathbb R)=\mathbb R$ and the positive groups vanish. [F1, step 1.1]

3.1 Integration sends a constant function $a$ to the zero-cochain taking value $a$ at every vertex. Hence it is the identity under the two degree-zero evaluations, and in positive degrees it is the unique map $0\to0$. If $n=0$, the ball is a point and the unnormalized constant simplices still contract as in [F1]. Zero forms, constant simplices, and both homotopy endpoints are included above. One centre and explicit finite prism sums are used, so no choice principle enters. [F1, step 1.1, step 2.1] ∎
