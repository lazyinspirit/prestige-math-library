---
id: def-cg-comparison-angle-and-alexandrov-angle
kind: definition
title: "Comparison angles of hinges, model triangle angles, and the Alexandrov upper angle"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 9
deps: [def-cg-cat-zero-cat-one-and-local-geodesic, def-metric-space, def-geodesic-and-geodesic-metric-space, def-principal-inverse-sine-and-cosine, cor-pi-is-the-first-positive-sine-zero, def-upper-bound, cor-cauchy-reals-lub-complete]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "I.1.12–I.1.13, printed p. 9 (comparison angles and the Alexandrov upper angle); I.2.13–I.2.15, printed pp. 24–25 (model cosine laws and spherical comparison angles)"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

**(1) Comparison angle of a length triple.** For real lengths $b,c>0$ and $a\ge0$ satisfying $|b-c|\le a\le b+c$, define
$$\theta_E(a;b,c):=\arccos\!\left(\frac{b^2+c^2-a^2}{2bc}\right).$$
This is a number in $[0,\pi]$ ([[def-principal-inverse-sine-and-cosine]]): the two assumed length inequalities give $(b-c)^2\le a^2\le(b+c)^2$, hence $-2bc\le b^2+c^2-a^2\le2bc$. For spherical adjacent lengths $b,c\in(0,\pi)$ and an opposite length $a\ge0$, put
$$z_S(a;b,c):=\frac{\cos a-\cos b\cos c}{\sin b\sin c}.$$
The denominator is positive ([[cor-pi-is-the-first-positive-sine-zero]]). Whenever $z_S(a;b,c)\in[-1,1]$, define the **spherical comparison angle** by $\theta_S(a;b,c):=\arccos z_S(a;b,c)\in[0,\pi]$. No spherical angle is assigned by this definition when that validity condition fails. In either model the notation chooses the unique angle in $[0,\pi]$ having the indicated cosine.

**(2) Comparison angle of a metric hinge.** In a metric space $(X,d)$ ([[def-metric-space]]), let $p,x,y\in X$ with $x\ne p$ and $y\ne p$; $x=y$ is allowed. The **Euclidean comparison angle** at $p$ is
$$\widetilde\angle_p(x,y):=\theta_E\bigl(d(x,y);d(p,x),d(p,y)\bigr).$$
Its length triple meets (1): the metric triangle inequality gives $d(x,y)\le d(p,x)+d(p,y)$ and, applied with each of $x,y$ as the middle point, $|d(p,x)-d(p,y)|\le d(x,y)$.

**(3) Alexandrov upper angle.** Let $c:[0,L]\to X$ and $c':[0,L']\to X$ be unit-speed geodesic segments with $L,L'>0$ and $c(0)=c'(0)$ ([[def-geodesic-and-geodesic-metric-space]]). For $\varepsilon>0$ set
$$H(\varepsilon):=\sup\bigl\{\widetilde\angle_{c(0)}(c(s),c'(t)):0<s\le\min(\varepsilon,L),\ 0<t\le\min(\varepsilon,L')\bigr\},$$
and define their **Alexandrov upper angle** by
$$\angle(c,c'):=\inf_{\varepsilon>0}H(\varepsilon).$$
Each set in the supremum is nonempty and contained in $[0,\pi]$, so its supremum exists and also lies in $[0,\pi]$ ([[def-upper-bound]], [[cor-cauchy-reals-lub-complete]]). The set of these suprema is likewise nonempty and bounded; its infimum exists by applying the same least-upper-bound property to its negatives. Thus $\angle(c,c')\in[0,\pi]$ is well defined. This is the two-variable upper-limit convention, without asserting existence of an ordinary limit, monotonicity of the comparison angles in $s,t$, invariance under reparametrization, or a CAT inequality.

**(4) Triangle-angle conventions.** In a geodesic triangle with distinct vertices and chosen sides ([[def-cg-cat-zero-cat-one-and-local-geodesic]]), the angle at a vertex means (3) for the unit-speed parametrizations of the two sides starting there. For a model triangle in $\mathbb M^2_\kappa$, $\kappa\in\{0,1\}$, with distinct vertices, the model angle at a vertex is defined by (1) from its two adjacent side lengths and opposite side length. In the spherical case the side lengths must be in $(0,\pi)$ and the validity condition in (1) must hold. Model angles are therefore side-length comparison angles; the identification with geometric angles, and any further relations among upper angles, require their own arguments.

## Remarks

A comparison angle in (2) is a quantity determined by the three metric distances, while (3) uses arbitrarily short initial portions of the two geodesics. The definition supplies these quantities and their domains; it does not by itself prove the upper-angle triangle inequality or the angle comparison consequences of curvature bounds.
