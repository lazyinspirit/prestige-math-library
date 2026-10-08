---
id: def-cg-euclidean-cone-and-spherical-join-metrics
kind: definition
title: "The angular path metric, the Euclidean cone and spherical joins"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cg-spherical-gram-simplex-and-angular-link, lem-cg-spherical-simplex-existence-and-link-gram-formula, def-metric-space, def-geodesic-and-geodesic-metric-space, def-sine-and-cosine-by-power-series, def-principal-inverse-sine-and-cosine, cor-pi-is-the-first-positive-sine-zero, thm-sine-cosine-signs-monotonicity-and-ranges, def-euclidean-spheres-and-closed-balls]
justified_by: [thm-cg-cone-join-metric-and-local-product-chart]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  scraped: []
  references:
    - title: "Martin R. Bridson and Andre Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "I.5.6-5.10, printed pp. 59-62 (the K-cone, its metric formula and the geodesic characterisation); I.5.13-5.16, printed pp. 63-64 (the spherical join and the product-cone isometry)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2, printed pp. 505-507 (the cone on a CAT(1)-space, the truncation theta=min{pi,d}, Lemma I.2.18, Lemma I.2.19 and the spherical join); Appendix A.4, printed pp. 412-414 (the join of polytopes and of abstract simplicial complexes)"
dependency_level: 6
---

## Definition

**(1) Angular path metric.** Let $L$ be a set with an **extended metric** $d_{\mathrm{path}}:L\times L\to[0,\infty]$, symmetric, vanishing exactly on the diagonal and satisfying the triangle inequality in the extended reals. For the angular link $\operatorname{Lk}_X(F)$ of a face of a finite spherical complex ([[def-cg-spherical-gram-simplex-and-angular-link]], [[lem-cg-spherical-simplex-existence-and-link-gram-formula]]) the metric $d_{\mathrm{path}}$ is the componentwise intrinsic path distance: the infimum of lengths of finite chains of directions inside a common cell, with $d_{\mathrm{path}}(x,y)=+\infty$ for $x,y$ in different components. The value $+\infty$ is **auxiliary notation only** and is never passed to the published definition of a metric space ([[def-metric-space]]).

**(2) Truncated angular metric.** With the convention $\min\{\pi,\infty\}:=\pi$, put $d_\pi(x,y):=\min\{\pi,d_{\mathrm{path}}(x,y)\}$. This finite-valued function on $L\times L$ is the **angular metric**; it has values in $[0,\pi]$ and its metric axioms are proved in [[thm-cg-cone-join-metric-and-local-product-chart]] ([[def-sine-and-cosine-by-power-series]], [[cor-pi-is-the-first-positive-sine-zero]], [[def-principal-inverse-sine-and-cosine]]).

**(3) The Euclidean cone.** The **Euclidean cone** on the angular link $L$ is the set
$$C(L):=\{o\}\sqcup((0,\infty)\times L),$$
where $o$ is the **apex**, with
$$d_C(o,o):=0,\qquad d_C(o,(r,x)):=r,\qquad d_C\bigl((r,x),(s,y)\bigr)^2:=r^2+s^2-2rs\cos d_\pi(x,y).$$
In particular $C(\emptyset)=\{o\}$ is a one-point space, not the empty space; and if $d_\pi(x,y)=\pi$ — which happens in particular when $x,y$ lie in different components of $L$ — then $d_C\bigl((r,x),(s,y)\bigr)=r+s$, the length of the path through the apex. The infinite value of $d_{\mathrm{path}}$ is never an ordinary metric value, and the cone receives only $d_\pi$.

**(4) Angular CAT(1) convention.** A link $L$ is **$D_\pi$-geodesic** if every pair of points at distance $<\pi$ is joined by a minimizing segment. Angular CAT(1) statements about a link concern only triangles of perimeter $<2\pi$ and their comparison in the unit sphere $S^2$ ([[def-euclidean-spheres-and-closed-balls]]); every such test lies in one intrinsic component and agrees with the componentwise intrinsic test of $d_{\mathrm{path}}$ whenever no side equals $\pi$, while a side of length $\pi$ is realised in the model sphere by an antipodal pair; this is proved in [[thm-cg-cone-join-metric-and-local-product-chart]].

**(5) Spherical join.** Let $L_1,L_2$ be angular links with metrics $d^1_\pi,d^2_\pi$. The **spherical join** $L_1*L_2$ is the quotient of $L_1\times L_2\times[0,\pi/2]$ by the identifications $(x,y,0)\sim(x,y',0)$ and $(x,y,\pi/2)\sim(x',y,\pi/2)$; write $(\cos\theta)x+(\sin\theta)y$ for the class of $(x,y,\theta)$. The distance of $x=(\cos\theta)x_1+(\sin\theta)x_2$ and $x'=(\cos\theta')x_1'+(\sin\theta')x_2'$ is the unique number in $[0,\pi]$ with
$$\cos d(x,x')=\cos\theta\cos\theta'\cos d^1_\pi(x_1,x_1')+\sin\theta\sin\theta'\cos d^2_\pi(x_2,x_2').$$
Conventions: $L*\emptyset:=L$, $\emptyset*L:=L$ and $\emptyset*\emptyset:=\emptyset$; these are consistent with the product-cone isometry $C(L_1)\times C(L_2)\cong C(L_1*L_2)$, under which $L_1*L_2$ is the unit link of the product cone. Quotient descent to the identified endpoints, the triangle inequality, associativity, the face metrics and the isometry with the unit link are conclusions of [[thm-cg-cone-join-metric-and-local-product-chart]]; this item asserts only the construction, the formula and the conventions.

## Remarks

- **What is construction and what is theorem.** Clauses (1)–(5) fix notation and conventions only: the truncated metric, the cone with its apex and the join with its empty conventions are defined here, while the metric axioms of $d_\pi$, the cone metric and its geodesics, the quotient descent and triangle inequality of the join, associativity and the product-cone isometry are all proved in [[thm-cg-cone-join-metric-and-local-product-chart]]. This item is the justification target of that theorem and asserts none of its conclusions.
- **Why the truncation.** The Euclidean cone formula requires a finite angular distance bounded by $\pi$: the value $+\infty$ of $d_{\mathrm{path}}$ across distinct components of a link is replaced by $\pi$, and the geodesics between the corresponding rays then pass through the apex. The link of a finite spherical complex is the case in which $d_{\mathrm{path}}$ is the componentwise intrinsic path distance of [[lem-cg-spherical-simplex-existence-and-link-gram-formula]](vi).
- **The square-sum convention.** By the product-cone isometry, $C(L_1)\times C(L_2)$ carries the square-sum product metric $d^2=d_1^2+d_2^2$ and $L_1*L_2$ is its unit link; the displayed cosine formula is the law of cosines of that cone, not an independent claim of the definition.
