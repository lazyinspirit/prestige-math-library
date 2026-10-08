---
id: def-cg-comparison-angle-and-alexandrov-angle
kind: definition
title: "Comparison angles of hinges, model triangle angles, and the Alexandrov upper angle"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 9
deps: [def-cg-cat-zero-cat-one-and-local-geodesic, def-metric-space, def-geodesic-and-geodesic-metric-space, def-principal-inverse-sine-and-cosine, thm-cauchy-schwarz-in-an-inner-product-space, lem-metrics-on-rn, def-euclidean-spheres-and-closed-balls, def-real-and-complex-inner-product-space, cor-inner-product-induces-a-norm, cor-pi-is-the-first-positive-sine-zero, def-sine-and-cosine-by-power-series]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "I.1.12–I.1.13 (the upper angle between geodesics, comparison angles, the law of cosines in E²), I.2.13–I.2.16 (law of cosines in the model spaces M²_κ and Alexandrov's Lemma), I.1.4–I.1.5 (geodesic segments)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2, printed pp. 501–505 (spherical and Euclidean comparison geometry, Alexandrov's lemma I.2.16)"
verification:
  precheck: n/a
---

## Definition

**(1) Comparison angle of a length triple.** Let $b,c>0$ and $a\ge0$ be reals with $|b-c|\le a\le b+c$. Then $-2bc\le b^2+c^2-a^2\le2bc$ — the right inequality is $(b-c)^2\ge0$ rearranged and the left is $a^2\le(b+c)^2$ — so the number
$$\cos\theta_E:=\frac{b^2+c^2-a^2}{2bc}$$
lies in $[-1,1]$; the **Euclidean comparison angle** of the triple $(a;b,c)$ is the unique $\theta_E\in[0,\pi]$ with that cosine ([[def-principal-inverse-sine-and-cosine]], [[lem-metrics-on-rn]]). Let now $b,c\in(0,\pi)$ and $a\ge0$ and suppose that
$$\cos\theta_S:=\frac{\cos a-\cos b\cos c}{\sin b\sin c}$$
lies in $[-1,1]$, where $\sin b,\sin c>0$ by [[cor-pi-is-the-first-positive-sine-zero]]; the **spherical comparison angle** of $(a;b,c)$ is the unique $\theta_S\in[0,\pi]$ with that cosine. The definition asserts nothing when the spherical cosine falls outside $[-1,1]$.

**(2) Hinge angle at a point of a metric space.** Let $X$ be a metric space ([[def-metric-space]]) and $p,x,y\in X$ with $x\ne p\ne y$. The **comparison angle** $\tilde\angle_p(x,y)$ of the hinge $(x,p,y)$ is the Euclidean comparison angle of the triple $\bigl(d(x,y);d(p,x),d(p,y)\bigr)$ from (1); this is well defined by the triangle inequality (M3) of [[def-metric-space]], which is exactly the hypothesis of (1).

**(3) The Alexandrov upper angle.** Let $c:[0,L]\to X$ and $c':[0,L']\to X$ be geodesic segments ([[def-geodesic-and-geodesic-metric-space]]) with $c(0)=c'(0)=:p$ and $L,L'>0$. For $0<s\le L$ and $0<t\le L'$ put $\tilde\alpha(s,t):=\tilde\angle_p\bigl(c(s),c'(t)\bigr)$; the set of values is contained in $[0,\pi]$, so the following infimum exists in $\mathbb R$:
$$\angle(c,c'):=\inf_{\varepsilon>0}\ \sup\bigl\{\tilde\alpha(s,t):0<s\le\min(\varepsilon,L),\ 0<t\le\min(\varepsilon,L')\bigr\}\in[0,\pi].$$
It is the **Alexandrov upper angle** between $c$ and $c'$. The definition asserts no limit property, no monotonicity in $(s,t)$, no invariance under reparametrisation and no relation to the CAT inequalities.

**(4) Angles of geodesic triangles.** Let $\Delta$ be a geodesic triangle in $X$ with distinct vertices and sides chosen ([[def-cg-cat-zero-cat-one-and-local-geodesic]]); the **angle of $\Delta$ at a vertex** is the Alexandrov upper angle (3) between the two sides through that vertex. For a triangle in the model $\mathbb M^2_\kappa$ of [[def-cg-cat-zero-cat-one-and-local-geodesic]] — with distinct vertices, all side lengths in $(0,\pi)$ when $\kappa=1$, and with the validity condition of (1) — the **angle at a vertex** is *defined* to be the comparison angle (1) of its three side lengths. This convention is fixed for this page: model angles are compared by the law of cosines, and the identification with the geometric angle between the sides is not used.

## Remarks

The comparison angle of (2) is the angle in a Euclidean comparison triangle of the hinge $(x,p,y)$; the upper angle of (3) is Bridson–Haefliger's upper angle I.1.12, and the infimum-supremum form used here makes its well-definedness immediate (a bounded set of reals has an infimum, [[def-upper-bound]]). Part (4) makes the angle of a model triangle a function of its side lengths, which is the form in which Alexandrov's Lemma and the gluing lemma consume angles; nothing is asserted here about angles of triangles that fail the validity conditions of (1).
