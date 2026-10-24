---
id: def-cg-cat-zero-cat-one-and-local-geodesic
kind: definition
title: "Comparison triangles, the CAT(0) and CAT(1) inequalities, local CAT, local geodesics and round circles"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 8
deps: [def-cg-spherical-gram-simplex-and-angular-link, def-cg-euclidean-cone-and-spherical-join-metrics, lem-cg-spherical-simplex-existence-and-link-gram-formula, thm-cg-cone-join-metric-and-local-product-chart, def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric, lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity, def-metric-space, def-metric-ball, def-geodesic-and-geodesic-metric-space, def-euclidean-spheres-and-closed-balls, def-principal-inverse-sine-and-cosine, def-isometry-and-metric-embedding, lem-metrics-on-rn, def-upper-bound]
justified_by: [lem-cg-comparison-convexity-and-model-spaces]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "I.1.1–I.1.3 (metric and geodesic vocabulary, local geodesics, convexity), I.1.10 (comparison triangles in E²), I.2.1–I.2.3 (the round sphere Sⁿ), I.2.10–I.2.17 (model spaces M²_κ, comparison triangles, Alexandrov's lemma), I.3.1 (length spaces), II.1.1–II.1.2 (the CAT(κ) definition and local CAT), II.4.15 (isometrically embedded circles)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2, printed pp. 501–507 (the CAT(0) inequality, local geodesics, the truncated cone metric); Appendix I.3, printed pp. 507–510 (links, the CAT(1) circle of circumference 2π+δ)"
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Fix the following definitions and conventions for this page.

**(1) Models.** $\mathbb E^2$ is $\mathbb R^2$ with the Euclidean metric $d_2$ ([[lem-metrics-on-rn]]). The comparison sphere is $S^2\subset\mathbb R^3$ with the round metric $d_S(x,y):=\arccos(x\cdot y)$ ([[def-cg-spherical-gram-simplex-and-angular-link]], [[def-principal-inverse-sine-and-cosine]]); more generally $d_S(x,y):=\arccos(x\cdot y)$ is defined on every sphere $S^{n-1}$ ([[def-euclidean-spheres-and-closed-balls]]).

**(2) Geodesic triangles and comparison.** A geodesic triangle in a metric space $X$ consists of three points $p,q,r\in X$ and a choice of geodesic segments $[p,q]$, $[q,r]$, $[r,p]$ joining them ([[def-geodesic-and-geodesic-metric-space]]); its perimeter is $d(p,q)+d(q,r)+d(r,p)$. A comparison triangle for it in $\mathbb E^2$, or in $S^2$ when its perimeter is $<2\pi$, is a triangle $(\bar p,\bar q,\bar r)$ in that model with the same three side lengths; it is unique up to an isometry of the model ([[lem-cg-comparison-convexity-and-model-spaces]]). For an occurrence of a point $x$ on a specified chosen side, the comparison point $\bar x$ is the point of the corresponding side of the comparison triangle at the same distance from the corresponding vertex; a vertex corresponds to itself. If a point belongs to more than one side, each side occurrence has its own comparison point, and the CAT inequalities quantify over every pair of side occurrences.

**(3) The CAT inequalities.** A metric space $X$ is **CAT(0)** if it is geodesic and for every geodesic triangle in $X$ and all points $x,y$ of that triangle, $d(x,y)\le d_2(\bar x,\bar y)$. It is **CAT(1)** if every pair of points of $X$ at distance $<D_1:=\pi$ is joined by a geodesic segment in $X$, and every geodesic triangle in $X$ of perimeter $<2\pi$ satisfies $d(x,y)\le d_S(\bar x,\bar y)$ for all points $x,y$ of the triangle. Thus for CAT(1) only triangles of perimeter $<2\pi$ are tested, and geodesic segments are demanded only for pairs at distance $<\pi$; a triangle of perimeter $<2\pi$ has all sides $<\pi$, so its sides are available by hypothesis. A metric space is **locally CAT(0)**, equivalently of curvature $\le0$, if every point has a closed ball $\bar B(x,r)$, $r>0$, such that the induced metric on $\bar B(x,r)$ is CAT(0); **locally CAT(1)** is defined in the same way.

**(4) Truncated angular metrics on links.** Let $F$ be a face of an isometric polyhedral gluing with its chain metric ([[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]]) and let $L:=\operatorname{Lk}_X(F)$ be its angular link with the auxiliary extended componentwise path metric $d_{\mathrm{path}}$ and the finite angular metric $d_\pi:=\min\{\pi,d_{\mathrm{path}}\}$ ([[def-cg-euclidean-cone-and-spherical-join-metrics]], [[lem-cg-spherical-simplex-existence-and-link-gram-formula]]). Then every $d_\pi$-triangle of perimeter $<2\pi$ has all sides $<\pi$: if one side were $\pi$, the triangle inequality would make the perimeter at least $2\pi$. Thus its vertices lie in one intrinsic component of $L$, and its side lengths equal the untruncated intrinsic path distances. It also holds between any two side points: the shorter of the two boundary routes has length at most half the perimeter, hence $<\pi$, so their truncated distance is $<\pi$ and equals their intrinsic path distance. Hence the CAT(1) tests in $(L,d_\pi)$ of perimeter $<2\pi$ agree with componentwise intrinsic tests ([[thm-cg-cone-join-metric-and-local-product-chart]]). The empty metric space carries no triangles and satisfies the CAT(0) and CAT(1) tests vacuously; a one-point space is CAT(0) and CAT(1). With the conventions $C(\varnothing)=\{o\}$ and $L*\varnothing=L$ ([[def-cg-euclidean-cone-and-spherical-join-metrics]]), the empty link satisfies the CAT(1) tests vacuously and its cone is a point.

**(5) Local geodesics.** Let $I\subseteq\mathbb R$ be an interval. A map $c:I\to X$ is a **constant-speed local geodesic** if there is a fixed $\lambda\ge0$ such that for every $t\in I$ some $\varepsilon>0$ satisfies $d(c(t'),c(t''))=\lambda|t'-t''|$ whenever $t',t''\in(t-\varepsilon,t+\varepsilon)\cap I$. Here $\lambda$ is its speed; $\lambda=1$ is the unit-speed convention and $\lambda=0$ gives the constant paths. In this chapter “local geodesic” includes these linear reparametrizations. It is a **minimizing geodesic** precisely when the same distance equality holds for every pair $t',t''\in I$.

**(6) Length.** A continuous path $\gamma:[a,b]\to X$ has length $L(\gamma)\in[0,\infty]$, the supremum of its polygonal sums, and is rectifiable if $L(\gamma)<\infty$ ([[lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity]], [[def-upper-bound]]). $X$ is a **length space** if for all $x,y\in X$ and every $\varepsilon>0$ there is a path from $x$ to $y$ of length $<d(x,y)+\varepsilon$.

**(7) Round circles.** For $\ell>0$ let $S^1_\ell:=\mathbb R/\ell\mathbb Z$ be the circle of circumference $\ell$, with $d_\ell(x,y):=\min\{|x-y+k\ell|:k\in\mathbb Z\}$; for $\ell=2\pi$ this is the unit circle. An **isometrically embedded circle of length $\ell$** in a metric space $X$ is an isometric embedding $S^1_\ell\to X$ ([[def-isometry-and-metric-embedding]]); its image is a subset of $X$ isometric to $(S^1_\ell,d_\ell)$.

## Remarks

The definition asserts no property of the objects it names beyond the conventions recorded. The metric axioms for $d_S$ and $d_\ell$, the existence and uniqueness of comparison triangles under the stated perimeter restrictions, the description of geodesic segments in the models as minimal great arcs and round arcs, and the facts that $\mathbb E^2$ and $S^2$ are CAT(0), respectively CAT(1), are all proved in the recorded justifier [[lem-cg-comparison-convexity-and-model-spaces]], which depends on this definition; The agreement of the tests is derived in (4), and the local product chart is established by [[thm-cg-cone-join-metric-and-local-product-chart]], rather than by the comparison lemma.
