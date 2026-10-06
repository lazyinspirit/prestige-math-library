---
id: def-isolated-zero-and-local-index-of-a-vector-field
kind: definition
title: "Isolated zero and local index of a vector field"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-vector-field-as-a-tangent-bundle-section, def-smooth-manifold, def-manifold-chart-coordinate-domain-and-coordinate-functions, def-induced-tangent-bundle-chart, def-degree-of-a-map-between-oriented-closed-manifolds, def-reduced-degree-into-the-zero-sphere, thm-degree-is-invariant-under-proper-smooth-homotopy, def-countable-choice]
justified_by: [lem-vector-field-index-is-independent-of-chart-ball-and-trivialization]
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, printed pp. 32-33 (definition of the index of an isolated zero by the degree of the normalized field on a small sphere)"
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §5, printed pp. 132-134 (the index via local parametrizations, with the Jacobian sign)"
    - title: "Joel W. Robbin and Dietmar A. Salamon, Introduction to Differential Topology (web draft 2018, complete PDF)"
      url: "https://umutvg.github.io/difftop.pdf"
      locator: "Definition 2.2.2, printed p. 31 (index of an isolated zero)"
dependency_level: 1
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the canonical smooth tangent-bundle structure.

Let $M$ be a smooth $n$-manifold without boundary, $n\ge1$, and let $X$ be a
smooth vector field on $M$
([[def-smooth-vector-field-as-a-tangent-bundle-section]], [[def-smooth-manifold]]).
A point $p\in M$ is an **isolated zero** of $X$ when $X(p)=0$ and some chart
around $p$ contains no other zero of $X$; equivalently, the set of zeros of $X$
has $p$ as an isolated point in a chart around $p$
([[def-manifold-chart-coordinate-domain-and-coordinate-functions]]).

For an isolated zero choose a smooth chart $(\varphi,U)$ of the smooth
structure of $M$ with $\varphi(p)=0$ and write
$$X_\varphi(u):=(d\varphi_{\varphi^{-1}(u)})X(\varphi^{-1}(u))\in\mathbb R^n$$
for the chart representative of $X$
([[def-induced-tangent-bundle-chart]]). Since $p$ is an isolated zero there is
$\varepsilon>0$ with $X_\varphi\ne0$ on
$\overline B_\varepsilon(0)\setminus\{0\}\subseteq\varphi(U)$, so the normalized field
$v\mapsto X_\varphi(\varepsilon v)/|X_\varphi(\varepsilon v)|$ is a continuous
map $S^{n-1}\to S^{n-1}$. The **local index of $X$ at $p$** is
$$\operatorname{ind}_pX:=\deg\Bigl(S^{n-1}\to S^{n-1},\ v\mapsto \frac{X_\varphi(\varepsilon v)}{|X_\varphi(\varepsilon v)|}\Bigr),$$
the degree of
[[def-degree-of-a-map-between-oriented-closed-manifolds]] computed with the
standard orientations of the two copies of $S^{n-1}$, for $n\ge2$.

For $n=1$ the same formula is read in dimension zero: the sphere
$S^{0}=\{\pm1\}$ parametrizes $\partial[-\varepsilon,\varepsilon]$ by
$v\mapsto\varepsilon v$,
and the displayed map is a map $S^0\to S^0$ whose **reduced degree** in the
sense of [[def-reduced-degree-into-the-zero-sphere]] is declared to be the
index,
$$\operatorname{ind}_pX=\frac{f(+1)-f(-1)}{2}\in\{-1,0,+1\},\qquad f(v)=\frac{X_\varphi(\varepsilon v)}{|X_\varphi(\varepsilon v)|}.$$
This case is well posed for every $0<\varepsilon'<\varepsilon$: the two signs
of $X_\varphi$ on $(0,\varepsilon)$ and on $(-\varepsilon,0)$ are each constant,
because $X_\varphi$ is continuous and nowhere zero on either half-interval, so
the two values $f(\pm1)$ do not depend on $\varepsilon'$; for $n\ge2$ the value
is independent of $\varepsilon$ by the homotopy $v\mapsto X_\varphi(((1-t)\varepsilon+t\varepsilon')v)/|\cdot|$ on the zero-free annulus
([[thm-degree-is-invariant-under-proper-smooth-homotopy]]). The value is also
independent of the smooth chart and admissible radius, and of trivializations whose
fibre orientation matches the chosen base orientation
([[lem-vector-field-index-is-independent-of-chart-ball-and-trivialization]]);
in particular no orientation of $M$ is required, because a chart change
multiplies both the source and the target orientation by the same sign, and the
$n=1$ case is the same statement read on the $0$-sphere.
Every statement on this page assumes $n\ge1$; the index is a signed integer,
$\operatorname{ind}_pX\in\mathbb Z$.
