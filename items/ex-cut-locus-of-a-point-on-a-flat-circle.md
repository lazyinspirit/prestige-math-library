---
id: ex-cut-locus-of-a-point-on-a-flat-circle
kind: example
title: Cut locus of a point on a flat circle
status: draft
origin: pipeline
deps:
  - cor-vector-valued-ftc-and-lipschitz-bound
  - def-circle-as-real-line-mod-integers
  - def-countable-choice
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-cut-point-and-cut-locus-of-a-point
  - def-cut-time-in-a-unit-tangent-direction
  - def-geodesically-complete-riemannian-manifold
  - def-pointwise-norm-and-angle-from-a-riemannian-metric
  - def-riemannian-distance-on-a-connected-manifold
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-speed-and-length
  - ex-hopf-rinow-on-a-flat-cylinder
  - lem-integer-part
  - lem-open-quotient-arcs-in-real-line-mod-integers
  - prop-christoffel-formula-for-the-levi-civita-connection
  - prop-coordinate-geodesic-equation
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - thm-hopf-rinow
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-path-lifting-for-covering-maps
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, printed p.190 (PDF P206), lines 7559-7571: cut-time definition and flat-cylinder example; the circle distance and cut-time calculation are proved locally here."
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Example

Assume $\mathrm{AC}_\omega$. For $L>0$, let
$C_L=\mathbb R/(L\mathbb Z)$ have the flat metric whose period-coordinate
charts carry $dx^2$, so its circumference is $L$. For every $p=[x]\in C_L$,
the two unit tangent directions are $v_+=\partial_x$ and
$v_-=-\partial_x$. Both have cut time
$$c_p(v_+)=c_p(v_-)=\frac L2,$$
and
$$\operatorname{Cut}(p)=\{[x+L/2]\},$$
the antipode of $p$. At the cut point the two opposite semicircles are distinct
minimizing geodesics.

## Facts & Assumptions

**Given:** A positive circumference $L$, the quotient circle $C_L$, its flat metric, and a base point $p=[x]$.

[A1] $\mathrm{AC}_\omega$ means every countable family of nonempty sets has a choice function ([[def-countable-choice]]). It is assumed only through the geodesic maximality, Hopf--Rinow, and cut-time/cut-locus interfaces below.

[F1] The library uses the quotient circle $\mathbb R/\mathbb Z$ as the flat circle factor with local metric $d\theta^2$ ([[ex-hopf-rinow-on-a-flat-cylinder]]). Rescaling by $x=L\theta$ gives $C_L=\mathbb R/(L\mathbb Z)$; its period-coordinate transitions are $x\mapsto x+kL$, so $dx^2$ is a well-defined smooth positive metric. These charts make $C_L$ a one-dimensional manifold without boundary. The class $[0]$ makes it nonempty, and projected straight segments connect any two classes.

[F2] In the quotient model, $[r]=[s]$ exactly when their difference is an integer period ([[def-circle-as-real-line-mod-integers]] after rescaling).

[F3] The metric coefficient in a period chart is $1$, so $|u\partial_x|=|u|$ ([[def-riemannian-metric-and-riemannian-manifold]], [[def-pointwise-norm-and-angle-from-a-riemannian-metric]]). Riemannian speed is the norm of velocity and length is its integral over the smooth pieces ([[def-riemannian-speed-and-length]]); distance on this connected manifold is the infimum of lengths ([[def-riemannian-distance-on-a-connected-manifold]]).

[F4] Every interval shorter than one period embeds as an open quotient arc ([[lem-open-quotient-arcs-in-real-line-mod-integers]]). Thus the quotient projection is a covering: these arcs are homeomorphic to their interval lifts and have disjoint period translates as full preimage ([[def-covering-map-and-evenly-covered-neighbourhoods]]). Every path has a unique lift from a specified starting point ([[thm-path-lifting-for-covering-maps]]). The local inverse charts make a lift of a piecewise $C^1$ path piecewise $C^1$ and preserve its coordinate speed.

[F5] On each closed smooth piece, the vector-valued fundamental theorem gives $f(b)-f(a)=\int_a^b f'$, and the norm of an integral is at most the integral of the norm ([[cor-vector-valued-ftc-and-lipschitz-bound]], [[thm-norm-inequality-for-the-vector-valued-integral]]).

[F6] For every real $z$ there is an integer $n$ with $n\le z<n+1$ ([[lem-integer-part]]).

[F7] In coordinates, constant metric coefficients give zero Christoffel symbols, and a geodesic satisfies $\ddot x^k+\Gamma^k{}_{ij}\dot x^i\dot x^j=0$ ([[prop-christoffel-formula-for-the-levi-civita-connection]], [[prop-coordinate-geodesic-equation]]). Under $\mathrm{AC}_\omega$, initial data determine a unique maximal geodesic ([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]); geodesic completeness means that every such maximal domain is $\mathbb R$ ([[def-geodesically-complete-riemannian-manifold]]).

[F8] Under $\mathrm{AC}_\omega$, Hopf--Rinow says a nonempty connected boundaryless Riemannian manifold is metrically complete exactly when it is geodesically complete ([[thm-hopf-rinow]]).

[F9] Cut time is the supremum of the positive times $t$ for which the radial distance equals $t$, and the cut locus consists of the finite cut-time endpoints over all unit directions; both definitions assume completeness, connectedness, no boundary, and $\mathrm{AC}_\omega$ ([[def-cut-time-in-a-unit-tangent-direction]], [[def-cut-point-and-cut-locus-of-a-point]]).

## Proof

**Proof technique:** quotient lift and nearest-period calculation.

1.1 Write $q_L(x)=[x]$. In every period chart the metric coefficient is $1$, and chart changes are translations by $kL$, so the metric is well-defined. The explicit curve $t\mapsto[x+t(y-x)]$ connects any two classes, and $[0]$ shows the circle is nonempty. These facts and [F1]-[F2] establish the quotient metric model; [F3] gives its tangent norms. Thus $C_L$ is nonempty, connected, one-dimensional, and boundaryless. [F1, F2, F3, given]

1.2 Fix $p=[x]$ and $q=[y]$. Let $\alpha:[0,1]\to C_L$ be any piecewise $C^1$ path from $p$ to $q$, and lift it from $x$ using [F4]. Its endpoint is $y+kL$ for some $k\in\mathbb Z$, by the quotient equivalence in [F2]. Choose a finite subdivision $0=a_0<\cdots<a_m=1$ on which $\alpha$ is $C^1$ on each piece; the local inverse charts for the covering make $\widetilde\alpha$ $C^1$ on those same pieces. Put $\Delta_i=\widetilde\alpha(a_{i+1})-\widetilde\alpha(a_i)$. On each piece the lift has the same speed as $\alpha$, and [F5] gives $\Delta_i=\int_{a_i}^{a_{i+1}}\widetilde\alpha'(t)\,dt$ and $|\Delta_i|\le\int_{a_i}^{a_{i+1}}|\widetilde\alpha'(t)|\,dt$. Hence the triangle inequality and the length definition give
$$|y+kL-x|=|\widetilde\alpha(1)-\widetilde\alpha(0)|=\Bigl|\sum_{i=0}^{m-1}\Delta_i\Bigr|\le\sum_{i=0}^{m-1}|\Delta_i|\le\sum_{i=0}^{m-1}\int_{a_i}^{a_{i+1}}|\widetilde\alpha'(t)|\,dt=L_g(\alpha).$$
Thus $L_g(\alpha)\ge |y+kL-x|\ge\inf_{j\in\mathbb Z}|y+jL-x|$. Taking the infimum over $\alpha$ gives $d_g(p,q)\ge\inf_j|y+jL-x|$. [F2, F3, F4, F5]

2.1 For any point $[x]$ and any tangent vector $u\partial_x$, define $\gamma(t)=[x+ut]$ for all $t\in\mathbb R$. In each period chart its coordinate is affine, the metric coefficients are constant, and [F7] gives $\Gamma=0$ and the geodesic equation. Thus this is a global geodesic with the prescribed initial data. Uniqueness of the maximal geodesic in [F7] implies that every maximal geodesic is defined on all of $\mathbb R$. Hence $C_L$ is geodesically complete. [A1, F7, step 1.1]

2.2 Put $z=(y-x)/L$ and choose $n=\lfloor z+1/2\rfloor$ by [F6]. Then $-1/2\le z-n<1/2$. For every integer $j$, this makes $n$ a nearest integer to $z$: if $j\ge n+1$ then $j-z>1/2$, and if $j\le n-1$ then $z-j\ge1/2$. Therefore the infimum in step 1.2 is attained and $$\inf_{j\in\mathbb Z}|y+jL-x|=|y-nL-x|\le L/2.$$ For each integer $j$, the projected straight segment $\sigma_j(t)=[x+t(y+jL-x)]$, $0\le t\le1$, joins $p$ to $q$ and has constant speed $|y+jL-x|$. Choosing $j=-n$ attains the lower bound in step 1.2, so $$d_g([x],[y])=\min_{j\in\mathbb Z}|y+jL-x|.$$ This also proves $d_g([x],[y])\le L/2$ for all $p,q$. [F2, F3, F6, step 1.2]

3.1 The nonempty, connected, boundaryless hypotheses were checked in step 1.1, and step 2.1 gives geodesic completeness. Hopf--Rinow [F8] therefore makes $(C_L,d_g)$ complete, as required by [F9]. [A1, F8, F9, step 1.1, step 2.1]

3.2 By [F3], the unit tangent vectors at $p$ are exactly $v_+=\partial_x$ and $v_-=-\partial_x$. Their radial geodesics are $\gamma_\pm(t)=[x\pm t]$ by step 2.1. For $0<t<L/2$, step 2.2 gives $d_g(p,\gamma_\pm(t))=t$. At $t=L/2$, both adjacent period representatives have absolute displacement $L/2$, so the same equality holds and there are two distinct minimizing semicircle segments: $s\mapsto[x+sL/2]$ and $s\mapsto[x-sL/2]$, $0\le s\le1$. They have the same length $L/2$ and different interior points. If $t>L/2$, step 2.2 gives $d_g(p,\gamma_\pm(t))\le L/2<t$. Thus the positive minimizing-time set in each direction is exactly $(0,L/2]$, and [F9] gives $c_p(v_+)=c_p(v_-)=L/2$. [A1, F3, F9, step 2.1, step 2.2]

4.1 The two finite cut endpoints coincide: $\gamma_+(L/2)=[x+L/2]=[x-L/2]=\gamma_-(L/2)$. The quotient relation makes this point independent of the representative $x$; it is the antipode. Since [F3] gives exactly the two unit directions and [F9] defines the cut locus as their finite cut endpoints, $\operatorname{Cut}(p)=\{[x+L/2]\}$. The computation holds for every $p$. The circle is nonempty and one-dimensional, so the empty- and zero-dimensional cases are not instances; in dimension one both unit directions were handled. The degenerate value $t=0$ is excluded from the cut-time supremum, the included endpoint $L/2$ still minimizes, and every later time fails strictly. The only choice assumption is the declared $\mathrm{AC}_\omega$ used through [F7]-[F9]; the quotient lifts are unique from the specified start and the nearest period is fixed by [F6], with no appeal to full AC. There is no iff claim. [A1, F2, F3, F6, F7, F9, step 1.1, step 3.1, step 3.2] ∎

## Source locator

Lee, *Riemannian Manifolds*, Chapter 10, printed p.190 / PDF P206, lines 7559–7571, defines cut points and cut loci and notes that on the flat cylinder geodesics wrapping more than halfway are not minimizing. That passage does not give the circle quotient-distance calculation; steps 1.1–4.1 prove it here.
