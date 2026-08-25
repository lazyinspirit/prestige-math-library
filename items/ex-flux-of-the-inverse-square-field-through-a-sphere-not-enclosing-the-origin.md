---
id: ex-flux-of-the-inverse-square-field-through-a-sphere-not-enclosing-the-origin
kind: example
title: "The inverse-square field is divergence free, and its flux through the sphere bounding the translated unit ball vanishes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-a-divergence-free-field-has-zero-outward-flux-through-a-glued-elementary-solid, ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation, def-divergence-and-curl-of-a-c1-vector-field, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-real-power-continuity-and-derivatives, lem-algebra-of-continuous-real-maps-on-a-space, thm-continuity-characterisations-top, def-vector-valued-functions-limits-and-continuity, thm-metric-regularity-hierarchy, def-jacobian-matrix-and-gradient, def-euclidean-inner-product, thm-the-divergence-theorem-for-an-elementary-solid-region, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-metric-topology, def-metric-ball, lem-metrics-on-rn]
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
    - title: "G. Strang and E. Herman, Calculus Volume 3, Examples 6.78-6.80"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus, Example 4.4.8"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Example

On $U=\mathbb R^3\setminus\{0\}$ let
$$F(x,y,z)=\frac{(x,y,z)}{(x^2+y^2+z^2)^{3/2}}.$$
Then $\operatorname{div}F=0$ on $U$. Consequently the outward flux of $F$
through the sphere bounding the translated unit ball
$B=\{(x,y,z):(x^2+y^2+(z-2)^2)\le1\}$ is $0$.

## Facts & Assumptions

**Given:** The field $F$ on $U=\mathbb R^3\setminus\{0\}$, and the translated closed unit ball $B=\{(x,y,z):(x^2+y^2+(z-2)^2)\le1\}$.

[L1] For a finite gluing of elementary solid regions, a $C^1$ field on an open set containing the union whose divergence vanishes there has zero outward boundary flux ([[cor-a-divergence-free-field-has-zero-outward-flux-through-a-glued-elementary-solid]]).

[L2] The closed ball admits the octant presentation adapted in all three coordinate directions ([[ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation]]).

[F1] The divergence of a field is the sum of its coordinate partial derivatives ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[L3] Products differentiate by the product rule ([[thm-algebra-of-derivatives]]).

[L4] Composites differentiate by the chain rule ([[thm-chain-rule-for-total-derivatives]]).

[L6] For every real $\alpha$, the function $s\mapsto s^\alpha$ is continuous and differentiable on $(0,\infty)$, with derivative $\alpha s^{\alpha-1}$ ([[thm-real-power-continuity-and-derivatives]]).

[F2] The Jacobian matrix records the coordinate partial derivatives ([[def-jacobian-matrix-and-gradient]]).

[F3] $\|x\|_2=\sqrt{\langle x,x\rangle}$ ([[def-euclidean-inner-product]]).

[L5] The divergence theorem is the identity $\iiint_E\operatorname{div}F=\iint_{\partial E}\langle F,n\rangle$ ([[thm-the-divergence-theorem-for-an-elementary-solid-region]]).

[F4] Flux is computed against the oriented area vector of a patch ([[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[F5] A subset of a metric space is open when every one of its points contains an open metric ball lying in the subset; the Euclidean metric on $\mathbb R^3$ is induced by $\|\cdot\|_2$ ([[def-metric-topology]], [[def-metric-ball]], [[lem-metrics-on-rn]]).

[L7] Each coordinate projection on Euclidean space is $1$-Lipschitz and therefore continuous; finite sums and products of continuous real-valued maps are continuous, as are their composites ([[def-vector-valued-functions-limits-and-continuity]], [[thm-metric-regularity-hierarchy]], [[lem-algebra-of-continuous-real-maps-on-a-space]], [[thm-continuity-characterisations-top]]).

## Verification

**Proof technique:** direct.

1.1 Put $s(x,y,z)=x^2+y^2+z^2$, which is positive and continuous on $U$ by [L7]. The $i$th component of $F$ is $F_i=x_i s^{-3/2}$. By the product and chain rules [L3, L4], the positive-base power rule [L6], and the coordinate interpretation of partial derivatives [F2], every coordinate partial derivative is
$$\partial_jF_i=\begin{cases}s^{-3/2}-3x_i^2s^{-5/2},&j=i,\\-3x_ix_js^{-5/2},&j\ne i.\end{cases}$$
The coordinate projections are continuous by [L7], so $s$ is continuous; because $s>0$ on $U$, [L6] and [L7] make every function in the displayed formulas continuous there. Hence $F$ is $C^1$ on $U$. [L3, L4, L6, L7, F2, F3, given]

1.2 Translating the octant presentation of the unit ball by $(0,0,2)$ gives an elementary solid region presentation of $B$, because translation adds a constant to each patch and changes no derivative. [L2, F4, given]

2.1 Summing the three diagonal formulas of step 1.1 gives $\operatorname{div}F=3s^{-3/2}-3s\,s^{-5/2}=0$ on $U$ by [F1]. [step 1.1, F1]

2.2 Every point of $B$ has distance at least $1$ from the origin, so $B\subseteq U$. The set $U$ is open: if $p\in U$, then $\|p\|_2>0$ and the ball $B(p,\|p\|_2/2)$ cannot contain the deleted origin, whose distance from $p$ is $\|p\|_2$. Step 1.1 proves that $F$ and all nine coordinate partial derivatives are continuous throughout this open set, so $F$ is $C^1$ on an open set containing $B$. [step 1.1, step 1.2, F3, F5, given]

3.1 Step 2.1 gives vanishing divergence and step 2.2 gives the required open neighbourhood hypothesis, so [L1] and [L5] give zero outward flux through $\partial B$. [step 2.1, step 2.2, L1, L5] ∎

## Remarks

- The translation in step 1.2 is not cosmetic. The origin is the singular point of the field, so moving the ball off it is exactly what makes the divergence theorem applicable.
