---
id: rem-mean-curvature-and-minimal-submanifolds
kind: remark
title: Mean curvature and minimal submanifolds
status: draft
origin: pipeline
deps: ["def-countable-choice", "def-mean-curvature-vector", "prop-first-variation-of-volume-for-a-normal-variation", "def-totally-geodesic-submanifold", "def-shape-operator", "thm-weingarten-equation-and-adjointness-of-the-shape-operator", "def-riemannian-volume-density", "prop-christoffel-formula-for-the-levi-civita-connection", "prop-connection-laws-in-directional-form", "thm-the-induced-connection-is-levi-civita"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Danny Calegari, Minimal Surfaces
      url: https://web.archive.org/web/20190618171523if_/http://math.uchicago.edu/~dannyc/courses/minimal_surfaces_2014/minimal_surfaces_notes.pdf
      locator: Chapter 3, Section 2.2, Proposition 2.1 through Definition 2.2, Example 2.3, and Warning 2.4, printed pages 12–13
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 8, Gaussian and Mean Curvatures and the minimal-hypersurface discussion, printed pages 142–143
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Remark

Assume $\mathrm{AC}_\omega$. A positive-dimensional Riemannian immersion
$f:M^m\rightarrow\overline M$ is called **minimal** when its averaged mean
curvature vector vanishes identically:

$$\mathbf H_f\equiv0.$$

For boundaryless $M$, the general compact-support clause of
[[prop-first-variation-of-volume-for-a-normal-variation]] then makes the first
variation of volume zero for every compactly supported variation. If a
boundary is allowed, the proposition still gives this stationarity for the
normal variations covered there; no boundary-moving assertion is implicit.

Minimality is weaker than total geodesicity. A concrete witness is the
Clifford torus in the unit round three-sphere,

$$f(u,v)=2^{-1/2}(\cos u,\sin u,\cos v,\sin v)\in S^3\subset\mathbb R^4.$$

With
$e_1=(-\sin u,\cos u,0,0)$,
$e_2=(0,0,-\sin v,\cos v)$, and

$$\nu=2^{-1/2}(\cos u,\sin u,-\cos v,-\sin v),$$

the four vectors $f,e_1,e_2,\nu$ are orthonormal. Differentiation in the unit
directions gives $D_{e_1}\nu=e_1$ and $D_{e_2}\nu=-e_2$. In Cartesian
coordinates the Euclidean metric coefficients are constant, so
[[prop-christoffel-formula-for-the-levi-civita-connection]] and
[[prop-connection-laws-in-directional-form]] identify $D$ with the Euclidean
Levi–Civita connection. These two derivatives are tangent to $S^3$, and
[[thm-the-induced-connection-is-levi-civita]] therefore makes them the
corresponding round-sphere covariant derivatives. Hence the shape operator satisfies

$$S_\nu e_1=-e_1,\qquad S_\nu e_2=e_2.$$

Its averaged trace, and therefore $\mathbf H_f$, is zero, but $S_\nu$ and
$\mathrm{II}_f$ are not zero. Thus this minimal immersion is not totally
geodesic.

Stationarity is only a first-order condition and need not mean local volume
minimization. For $m\geq1$, the equator
$S^m\times\{0\}\subset S^{m+1}$ has constant unit normal in its last
coordinate, so its shape operator and mean-curvature vector vanish. But the
normal latitude variation

$$F_t(x)=(\cos t\,x,\sin t)$$

has pullback metric $g_t=\cos^2t\,g_0$ and volume density
$\mu_{g_t}=\lvert\cos t\rvert^m\mu_{g_0}$. Consequently, for
$0<\lvert t\rvert<\pi/2$,

$$\operatorname{Vol}(F_t(S^m))=(\cos t)^m\operatorname{Vol}(S^m)<\operatorname{Vol}(S^m).$$

The equator is therefore stationary but not a local minimizer among nearby
immersions. Calegari's Example 2.3 and warning make precisely this distinction;
Lee likewise identifies zero mean curvature with the variational equation.

These statements are Euler–Lagrange facts only. Regularity, existence,
stability, second variation, singular minimal varieties, and the wider theory
of minimal surfaces are outside this page. The assumption
$\mathrm{AC}_\omega$ is inherited through the mean-curvature and
first-variation constructions; both displayed finite calculations add no
choice. The empty positive-dimensional immersion is vacuously minimal,
dimension one is included, dimension zero is excluded by the averaged
convention, and degenerate induced metrics are excluded by immersivity.
