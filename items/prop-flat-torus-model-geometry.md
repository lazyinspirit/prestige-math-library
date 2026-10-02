---
id: prop-flat-torus-model-geometry
kind: proposition
title: Flat torus model geometry
status: published
origin: pipeline
deps:
  - def-countable-choice
  - def-quotient-topology
  - def-topological-manifold-without-boundary
  - def-smooth-atlas
  - def-smooth-manifold
  - prop-coordinate-criterion-for-a-riemannian-metric
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-isometry-and-local-isometry
  - ex-straight-lines-as-euclidean-geodesics
  - lem-local-isometries-send-geodesics-to-geodesics
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - thm-hopf-rinow
  - prop-christoffel-formula-for-the-levi-civita-connection
  - prop-coordinate-formula-for-the-curvature-tensor
  - def-riemann-curvature-four-tensor
  - def-sectional-curvature
  - cor-rn-is-polygonally-connected-and-locally-path-connected
  - thm-path-connected-implies-connected
  - thm-continuous-image-of-a-connected-space
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§20.1 and 24.3, pp.147–149 and 178–179: the flat torus as the complete non-simply-connected flat model"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§5, pp.17–19: completeness and the exponential map of a flat quotient"
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: "Proposition 21.4 and Theorem 21.10, printed pp.543–547: quotient manifolds of free proper actions; Example 21.14, the torus"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$n\ge1$, let $\mathbb Z^n\subseteq\mathbb R^n$ be the integer lattice acting
on $\mathbb R^n$ by translations, and let $T^n=\mathbb R^n/\mathbb Z^n$ carry
the quotient topology with quotient map $q:\mathbb R^n\to T^n$. Then:

1. there is a Riemannian metric $g$ on $T^n$, unique, with
   $q^*g=\sum_{i=1}^n dx^i\otimes dx^i$; with this metric $T^n$ is a
   connected boundaryless smooth $n$-manifold and $q$ is a surjective local
   isometry;
2. $(T^n,g)$ is geodesically and metrically complete, and for $n\ge2$ it has
   vanishing sectional curvature: $K=0$ on every tangent two-plane;
3. the quotient charts of the proof identify $T_{[x]}T^n$ with $\mathbb R^n$,
   and under that identification the maximal geodesic with initial datum
   $v\in\mathbb R^n$ is
   $$t\mapsto[x+tv],\qquad t\in\mathbb R,$$
   so that the exponential map is defined on all of $T_{[x]}T^n$ and
   $\exp_{[x]}(v)=[x+v]$; in particular $\exp_{[x]}$ is not injective, since
   $\exp_{[x]}(0)=\exp_{[x]}(e_1)=[x]$ for the nonzero lattice vector
   $e_1\in\mathbb Z^n$.

## Facts & Assumptions

**Given:** The integer $n\ge1$, the integer lattice $\mathbb Z^n$ acting on
$\mathbb R^n$ by translations, the quotient $T^n=\mathbb R^n/\mathbb Z^n$ with
quotient map $q$, and the inherited $\mathrm{AC}_\omega$ of [A1].

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$
([[def-countable-choice]]), used through the maximal-geodesic
existence-and-uniqueness theorem [F3] and the Hopf–Rinow equivalence [F4]; the
lattice, the charts and the geodesics below are explicit and no family is
selected.

[F1] Quotient topology and smooth manifolds
([[def-quotient-topology]], [[def-topological-manifold-without-boundary]],
[[def-smooth-atlas]], [[def-smooth-manifold]]): the quotient topology on
$T^n$ is the finest topology making $q$ continuous, so a set $W\subseteq T^n$
is open exactly when $q^{-1}(W)$ is open; a topological $n$-manifold is a
Hausdorff second-countable space locally homeomorphic to $\mathbb R^n$; a
smooth atlas on it is a covering family of pairwise smoothly compatible
charts, and a smooth $n$-manifold is a topological $n$-manifold together with
a maximal smooth atlas.

[F2] Riemannian metrics, local isometries and chart changes
([[prop-coordinate-criterion-for-a-riemannian-metric]],
[[def-riemannian-metric-and-riemannian-manifold]],
[[def-riemannian-isometry-and-local-isometry]]): a smooth symmetric
positive-definite $(0,2)$-tensor field is a Riemannian metric, and in
coordinates a metric is presented by a smooth symmetric positive-definite
matrix transforming by $G_\xi=J^{\mathsf T}G_xJ$; a local isometry is a smooth
local diffeomorphism whose differential is a linear isometry at each point.

[F3] Euclidean geodesics and local isometries
([[ex-straight-lines-as-euclidean-geodesics]],
[[lem-local-isometries-send-geodesics-to-geodesics]],
[[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]): the maximal
geodesics of Euclidean $\mathbb R^n$ are the straight lines
$t\mapsto x+tv$, defined on all of $\mathbb R$; a local isometry sends
geodesics to geodesics; and for every initial datum on a Riemannian manifold
there is a unique maximal geodesic.

[F4] Hopf–Rinow ([[thm-hopf-rinow]]): for a nonempty connected boundaryless
Riemannian manifold, geodesic completeness and metric completeness are
equivalent.

[F5] Curvature in a constant-coefficient chart
([[prop-christoffel-formula-for-the-levi-civita-connection]],
[[prop-coordinate-formula-for-the-curvature-tensor]],
[[def-riemann-curvature-four-tensor]], [[def-sectional-curvature]]): if a
chart has constant metric matrix, its Christoffel symbols vanish, the
coordinate curvature formula gives vanishing curvature there, and then
$\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$ vanishes, so every sectional
curvature, being a quotient of $\operatorname{Rm}$ by the positive Gram
determinant, vanishes too.

[F6] Connectedness ([[cor-rn-is-polygonally-connected-and-locally-path-connected]],
[[thm-path-connected-implies-connected]],
[[thm-continuous-image-of-a-connected-space]]): $\mathbb R^n$ is path
connected, hence connected, and a continuous image of a connected space is
connected.



## Proof

1.1 The quotient charts make $T^n$ a smooth $n$-manifold.
For $u\in\mathbb R^n$ put $B_u:=u+(-1/2,1/2)^n$. The map $q$ is open: for open
$W\subseteq\mathbb R^n$ one has
$q^{-1}(q(W))=\bigcup_{m\in\mathbb Z^n}(W+m)$, which is open, so $q(W)$ is
open by [F1]. The restriction $q|_{B_u}$ is injective: if $q(x)=q(y)$ with
$x,y\in B_u$, then $x-y\in\mathbb Z^n$, while $|x^i-y^i|<1$ for every $i$, so
$x=y$. An injective continuous open map is a homeomorphism onto its image,
so $q(B_u)$ is an open set homeomorphic to the box $B_u$.
If $x\in B_u$ and $y\in B_v$ satisfy $q(x)=q(y)$, then $x-y\in\mathbb Z^n$.
For a fixed point of an overlap, write its two unique chart lifts as
$x_0\in B_u$ and $y_0\in B_v$, and put $m=y_0-x_0\in\mathbb Z^n$. In the
coordinates of $B_u$, the chart transition is $z\mapsto\varphi_v(q(z))$;
the difference $\varphi_v(q(z))-z$ is a continuous function on the overlap
with values in the discrete set $\mathbb Z^n$. It is therefore constant on a
neighbourhood of $x_0$, where it equals $m$. Thus the transition is locally
the translation $z\mapsto z+m$ at every overlap point, hence is smooth; the
translation may differ on different connected pieces of the overlap. The
charts $q(B_u)$ for all $u\in\mathbb R^n$ cover $T^n$, since every class
$[x]$ has the representative $x\in B_x$, and any two of them are smoothly
compatible. They therefore form a smooth atlas. Their domains are
homeomorphic to open boxes, so every point has a Euclidean neighbourhood.
[F1, given]

2.1 $T^n$ is a topological manifold, connected, and $q$ is a surjection.
The map $q$ is surjective by definition of the quotient. It is Hausdorff: if
$[x]\ne[y]$, only finitely many $m\in\mathbb Z^n$ satisfy
$|x-y-m|\le|x-y|+1$, and none of them satisfies $x-y-m=0$, so
$$\delta:=\min\{|x-y-m|:m\in\mathbb Z^n\}>0$$
(the minimum over the finitely many small displacements is attained, and the
remaining displacements are larger than $|x-y|+1$); the open sets $q(U)$ and
$q(V)$ of step 1.1 for the balls $U,V$ of radius $\delta/3$ about $x$ and $y$
are disjoint, because a common point would give $u\in U$, $w\in V$ with
$u-w\in\mathbb Z^n$ and hence $|x-y-(u-w)|\le 2\delta/3<\delta$. It is second
countable: the images under $q$ of the boxes with rational corners form a
countable family of open sets, and for open $W\subseteq T^n$ and $[x]\in W$
there is such a box $B$ with $x\in B\subseteq q^{-1}(W)$, so
$[x]\in q(B)\subseteq W$. Together with step 1.1 this makes $T^n$ a
topological $n$-manifold by [F1].
Finally $\mathbb R^n$ is path connected, hence connected, by [F6], and $q$ is
continuous and surjective, so $T^n$ is connected by [F6].
[F1, F6, step 1.1]

2.2 The flat metric descends, and $q$ is a local isometry. [F1, F2, step 1.1]
Define a symmetric $(0,2)$-tensor field $g$ on $T^n$ chartwise: on the chart
$q(B_u)$ with inverse chart $\varphi=(q|_{B_u})^{-1}$, set
$$g_y(\xi,\eta):=g_{\mathrm E}\bigl(d\varphi_y(\xi),d\varphi_y(\eta)\bigr),\qquad y\in q(B_u),\ \xi,\eta\in T_yT^n .$$
On an overlap $q(B_u)\cap q(B_v)$ the two inverses differ by the integer
translation of step 1.1, whose differential is the identity of $\mathbb R^n$
and which preserves the Euclidean metric; hence the two definitions agree on
the overlap and glue to a well-defined smooth tensor field. In every chart
the matrix of $g$ is the identity, so $g$ is symmetric and positive definite
and is a Riemannian metric by [F2]. Since each inverse chart is a local
inverse of $q$ composed with a translation, the differential of $q$ is a
linear isometry from $(\mathbb R^n,g_{\mathrm E})$ onto $(T_{[x]}T^n,g_{[x]})$
at every point. The quotient charts also make $q$ a local diffeomorphism,
so $q$ is a local isometry and $q^*g=\sum_i dx^i\otimes dx^i$.
Any metric $g'$ with $q^*g'=g_{\mathrm E}$ equals $g$ because $dq_x$ is
surjective for every $x\in\mathbb R^n$ and the equality
$g'_{[x]}(dq_xu,dq_xw)=g_{\mathrm E}(u,w)=g_{[x]}(dq_xu,dq_xw)$ determines
$g'$ on all pairs of tangent vectors. [F1, F2, step 1.1]

3.1 Completeness and geodesics. [F3, F4, step 2.2]
Let $[x]\in T^n$ and $v\in T_{[x]}T^n$. Since $dq_x$ is surjective, choose
$v_0\in\mathbb R^n$ with $dq_x(v_0)=v$. By [F3] the straight line
$\sigma(t):=x+tv_0$ is the maximal geodesic of $\mathbb R^n$ with
$\sigma(0)=x$, $\sigma'(0)=v_0$, and it is defined on all of $\mathbb R$. A
local isometry sends geodesics to geodesics by [F3], so
$\gamma(t):=q(\sigma(t))=[x+tv_0]$ is a geodesic of $(T^n,g)$ defined on all
of $\mathbb R$, with $\gamma(0)=[x]$ and $\gamma'(0)=dq_x(v_0)=v$. By the
uniqueness clause of [F3] it is the maximal geodesic of $(T^n,g)$ with initial
datum $([x],v)$. Hence every maximal geodesic of $T^n$ is defined on all of
$\mathbb R$, so $(T^n,g)$ is geodesically complete, and by Hopf–Rinow [F4] it
is a complete metric space. [F3, F4, step 2.2]

3.2 The torus is flat. [F5, step 2.2]
In every quotient chart of step 1.1 the matrix of $g$ is the constant identity
matrix. Its first derivatives vanish, so the Christoffel symbols of the chart
vanish by [F5], and the coordinate curvature formula of [F5] gives
$R=0$ at every point of the chart. The charts cover $T^n$, so the Riemann
curvature four-tensor vanishes identically; by [F5] every sectional curvature
$K$, being $\operatorname{Rm}(u,v,v,u)$ divided by the positive Gram
determinant of an independent pair, vanishes. In dimension $n=1$ there is no
tangent two-plane and the curvature assertion is vacuous, as it must be.
[F5, step 2.2]

4.1 The exponential map, its formula and its failure of injectivity. [F3, step 3.1]
The quotient chart $\varphi=(q|_{B_u})^{-1}$ identifies $T_{[x]}T^n$ with
$\mathbb R^n$ by its differential $d\varphi_{[x]}$; under this identification
the vector $v\in T_{[x]}T^n$ corresponds to
$v_0:=d\varphi_{[x]}(v)\in\mathbb R^n$, and $dq_x(v_0)=v$. Step 3.1 shows that
the maximal geodesic with initial datum $([x],v)$ is
$t\mapsto q(x+tv_0)=[x+tv_0]$, defined on all of $\mathbb R$; evaluating at
$t=1$ gives
$$\exp_{[x]}(v)=\gamma_v(1)=[x+v_0],$$
which in the coordinates of the chart is the formula $\exp_{[x]}(v)=[x+v]$
recorded in the Statement. In particular the domain of $\exp_{[x]}$ is all of
$T_{[x]}T^n$. Noninjectivity: $e_1\in\mathbb Z^n$ is nonzero because $n\ge1$,
and $q(0)=[0]$ while $q(e_1)=[e_1]=[0]$, so
$$\exp_{[x]}(0)=[x]=\exp_{[x]}(e_1)$$
with $0\ne e_1$; hence the exponential map of the flat torus is not injective
at any point. [F3, step 3.1]

5.1 Boundary cases and choice. [A1, F1, step 2.1, step 4.1]
The case $n=1$ is the circle $\mathbb R/\mathbb Z$: the quotient charts are
intervals, and for every initial vector $v\in T_{[x]}T^1\cong\mathbb R$ the
geodesic is the constant-speed winding $t\mapsto[x+tv]$ on a circle of
circumference one, with speed $|v|$; the paths $t\mapsto[x\pm t]$ are the
unit-speed cases. The failure of injectivity is again produced by the nonzero
lattice vector $e_1$. The degenerate velocity $v=0$ gives the constant
geodesic through $[x]$ by step 3.1, and it is excluded as a witness of
noninjectivity because $e_1\ne0$; the zero divisor in the metric is absent
because the Euclidean metric is positive definite. The lattice $\mathbb Z^n$
and its cosets are explicit, and no accumulation or limiting argument occurs;
the only choice is the inherited $\mathrm{AC}_\omega$ of [A1], used through
the maximal-geodesic theorem [F3] and Hopf–Rinow [F4] in step 3.1. [A1, F1,
step 2.1, step 4.1] ∎
