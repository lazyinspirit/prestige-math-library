---
id: def-local-fixed-point-index
kind: definition
title: "Isolated fixed point and local fixed point index"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-c-r-and-smooth-maps-between-smooth-manifolds, def-smooth-manifold, def-manifold-chart-coordinate-domain-and-coordinate-functions, def-degree-of-a-map-between-oriented-closed-manifolds, thm-degree-is-invariant-under-proper-smooth-homotopy, def-reduced-degree-into-the-zero-sphere, lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative, thm-compactness-under-continuous-maps]
justified_by: [lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Peter Wong, Lectures on Fixed Point Theory, Mini-Course XV Encontro Brasileiro de Topologia, Rio Claro 2006 (complete notes)"
      url: "https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf"
      locator: "Lecture II §6, printed p. 13 (I(f,x0) is the topological degree of id-f near an isolated fixed point)"
    - title: "Eleny Ionel, notes by Andrew Lin, Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: "https://web.stanford.edu/~lindrew/math215B.pdf"
      locator: "Lecture 17, printed p. 54 (the index of an isolated fixed point as the appropriate map between spheres)"
dependency_level: 0
---

## Definition

Let $M$ be a smooth $n$-manifold without boundary, $n\ge1$
([[def-smooth-manifold]]), let $f:M\to M$ be a smooth map
([[def-c-r-and-smooth-maps-between-smooth-manifolds]]) and let $x$ be an
**isolated** fixed point of $f$, i.e. some neighbourhood of $x$ contains no
other fixed point. Choose a smooth chart $(\varphi,U)$ from the smooth atlas of $M$
([[def-smooth-manifold]]) with $x\in U$ and
$\varphi(x)=0$
([[def-manifold-chart-coordinate-domain-and-coordinate-functions]]) and
$\varepsilon>0$ such that the closed ball $\overline{B_\varepsilon(0)}$ lies
in $\varphi(U\cap f^{-1}(U))$ and
$\widehat f(u):=\varphi(f(\varphi^{-1}(u)))\neq u$ for $0<|u|\le\varepsilon$, and
set $g(u):=u-\widehat f(u)$. The **local fixed point index** of $f$ at $x$ is
the degree

$$\operatorname{ind}_x(f):=\deg\Bigl(S^{n-1}\to S^{n-1},\ v\mapsto\frac{g(\varepsilon v)}{|g(\varepsilon v)|}\Bigr)\in\mathbb Z$$

of [[def-degree-of-a-map-between-oriented-closed-manifolds]] for $n\ge2$,
both spheres carrying their boundary orientations. For $n=1$ use the reduced
degree of [[def-reduced-degree-into-the-zero-sphere]]: if $h(v)=g(\varepsilon v)/|g(\varepsilon v)|$,
then $\operatorname{ind}_x(f)=(h(+1)-h(-1))/2$. Radius independence follows by
radial interpolation in the zero-free punctured ball, using
[[thm-degree-is-invariant-under-proper-smooth-homotopy]] for $n\ge2$ and
[[lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative]] for $n=1$ and of the chart, the
ball and the neighbourhood by
[[lem-local-fixed-point-index-is-coordinate-and-neighbourhood-independent]]; it
uses no orientation of $M$, because a chart change multiplies source and target
orientations by the same sign. The empty sum over a fixed-point-free map is $0$
by convention, and this local-index definition is restricted to $n\ge1$.

## Remarks

- **Why a radius can be chosen.** Since $x$ is isolated and $\varphi$ is a
  homeomorphism with $\varphi(x)=0$, the representative $\widehat f$ is defined on the open neighbourhood
  $\varphi(U\cap f^{-1}(U))$ of $0$. Isolation excludes other zeros there. For
  $\varepsilon$ small enough that $\{|u|\le\varepsilon\}$ lies in that
  neighbourhood and in the representative domain, the continuous function $g$ is nonzero on
  the compact sphere $\{|u|=\varepsilon\}$, so $|g|$ attains a positive minimum
  there ([[thm-compactness-under-continuous-maps]], clause 2) and $g(\varepsilon v)\neq0$ on $S^{n-1}$; the displayed map is then
  defined and smooth. Neither the chart nor $\varepsilon$ is part of the value,
  by the two independence statements cited above.
- **Convention $I-Df$, not $Df-I$.** The displacement is
  $g(u)=u-\widehat f(u)$, i.e. $I-Df$ linearized at a fixed point. With the
  opposite ordering $\widehat f(u)-u$ the value is multiplied by $(-1)^n$, the
  degree of the antipodal map of $S^{n-1}$; Guillemin and Pollack use
  $df_x-I$, so their local numbers differ from the ones on this page by
  $(-1)^n$. All items on this page use the $I-Df$ convention.
- **No orientation of $M$ is used.** The two spheres in the displayed map are
  the source and target of a single Euclidean chart expression, both oriented by
  the standard orientation of $\mathbb R^n$; an orientation of $M$ never enters
  the definition, and none is required for it.
