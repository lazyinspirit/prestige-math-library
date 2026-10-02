---
id: fs-cartan-hadamard-says-exp-p-is-injective-without-simple-connectedness
kind: false-statement
title: Cartan hadamard says exp p is injective without simple connectedness
status: published
origin: pipeline
deps:
  - thm-cartan-hadamard
  - thm-a-complete-local-isometry-is-a-covering-map
  - def-countable-choice
  - prop-flat-torus-model-geometry
  - cor-fundamental-group-of-two-dimensional-torus
  - prop-christoffel-formula-for-the-levi-civita-connection
  - prop-coordinate-formula-for-the-curvature-tensor
  - def-sectional-curvature
  - def-riemann-curvature-four-tensor
  - thm-hopf-rinow
  - def-two-dimensional-torus
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§20.1 and 24.3, pp.147–149, 178–179: complete local isometries, covering maps and Cartan–Hadamard"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§5, pp.17–19: Cartan–Hadamard and the covering character of the exponential"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. **False
claim:** if $(M,g)$ is a complete, connected, boundaryless Riemannian manifold
with $K\le0$, then for every $p\in M$ the exponential map
$\exp_p:T_pM\to M$ is globally injective.

The claim omits exactly one hypothesis of the Cartan–Hadamard theorem, namely
simple connectedness. It fails as soon as $M$ carries a closed geodesic
without being simply connected; the flat two-torus below is the standard
witness.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1], the flat two-torus
$T^2=(\mathbb R/\mathbb Z)^2$ with its descended Euclidean metric, and the
cartesian exponential maps of its tangent spaces.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$
([[def-countable-choice]]), carried by the Hopf–Rinow and covering-map
suppliers used below; the quotient constructions and the chosen lattice
vectors are explicit.

[F1] The flat torus metric: with $q:\mathbb R^n\to\mathbb R^n/\mathbb Z^n$
the quotient map, the torus carries a Riemannian metric $g$, unique with
$q^*g=\sum_i dx^i\otimes dx^i$, whose charts are boxes with
integer-translation transitions; $(T^n,g)$ is a connected boundaryless smooth
manifold on which $q$ is a surjective local isometry, it is geodesically and
metrically complete, and for $n\ge2$ it has vanishing sectional curvature
([[prop-flat-torus-model-geometry]], [[def-two-dimensional-torus]]).

[F2] For the lattice quotient $\mathbb R^n/\mathbb Z^n$ with the descended
flat metric, identifying $T_{[x]}T^n$ with $\mathbb R^n$ by a quotient chart,
every fibrewise exponential map has domain all of $T_{[x]}T^n$ and satisfies
$\exp_{[x]}(v)=[x+v]$; it is not injective, since $0\ne e_1\in\mathbb Z^n$
gives two distinct vectors $0$ and $e_1$ with the same image
([[prop-flat-torus-model-geometry]]).

[F3] Hopf–Rinow: for a nonempty connected boundaryless Riemannian manifold,
metric completeness, geodesic completeness and the global definition of
$\exp_p$ on all of $T_pM$ for one point are equivalent
([[thm-hopf-rinow]]).

[F4] Curvature of a locally Euclidean metric: in a chart whose metric matrix
has constant entries the Christoffel symbols vanish
([[prop-christoffel-formula-for-the-levi-civita-connection]]), so the
coordinate formula for the curvature tensor gives $R=0$
([[prop-coordinate-formula-for-the-curvature-tensor]]); since
$\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$ and $K(\sigma)$ is the quotient by
the positive Gram determinant, every sectional curvature vanishes
([[def-riemann-curvature-four-tensor]], [[def-sectional-curvature]]).

[F5] Cartan–Hadamard ([[thm-cartan-hadamard]]): for a complete connected
boundaryless manifold with $K\le0$, the metric $\exp_p^*g$ on $T_pM$ is
complete and $\exp_p$ is a smooth universal covering map. If $M$ is also
simply connected, $\exp_p$ is a diffeomorphism. The source completeness is
proved there before the covering conclusion; it is not inferred from a
lemma which already assumes a covering.

[F6] The torus is not simply connected: $\pi_1(T^2,([0],[0]))\cong
(\mathbb Z,+)\times(\mathbb Z,+)$ ([[cor-fundamental-group-of-two-dimensional-torus]]).

## Refutation

1.1 The flat two-torus is complete with $K\le0$. [F1, F2]
By [F1] with $n=2$ the torus $(T^2,g_{\mathrm{flat}})$ is a connected
boundaryless Riemannian surface with $q^*g=dx^2+dy^2$, and it is geodesically
and metrically complete with vanishing sectional curvature: $K(\sigma)=0$ for
every tangent two-plane, in particular $K\le0$. By [F2] with $n=2$ the
exponential of $T^2$ at every point has domain all of the tangent space. The flatness also follows directly from the constant-coefficient charts by
[F4], and metric completeness from geodesic completeness by [F3]. Thus
$(T^2,g_{\mathrm{flat}})$ is a complete, connected, boundaryless Riemannian
surface with $K\le0$. [F1, F2, F3, F4]

1.2 Its exponential is not injective. [F1, F2]
Identify $T_{([0],[0])}T^2$ with $\mathbb R^2$. By [F2] with
$\Lambda=\mathbb Z^2$,
$$\exp_{([0],[0])}(v)=[v]\qquad\text{for every }v\in\mathbb R^2.$$
The vectors $v=0$ and $w=(1,0)$ are distinct, but
$[w]=[(1,0)]=[(0,0)]$ because $(1,0)\in\mathbb Z^2$ acts trivially on the
quotient, so $\exp_{([0],[0])}(v)=\exp_{([0],[0])}(w)$. Hence the exponential
is not injective. [F1, F2]

2.1 The false claim fails, and simple connectedness is the missing hypothesis. [F5, F6, step 1.1, step 1.2]
Steps 1.1 and 1.2 exhibit a complete, connected, boundaryless Riemannian
manifold with $K\le0$ whose exponential is not injective, so the claim of the
Statement is false. The general conclusion of [F5] is that
$\exp_p:(T_pM,\exp_p^*g)\to(M,g)$ is a universal covering map with complete
source. The diffeomorphism conclusion additionally assumes simple
connectedness of $M$. Consistently,
$T^2$ is not simply connected by [F6], and $\exp_{([0],[0])}$ is the
nontrivial covering $\mathbb R^2\to T^2$ rather than a diffeomorphism. The
flat torus therefore refutes the claim while remaining fully consistent with
Cartan–Hadamard, which correctly asserts a diffeomorphism only in the simply
connected case. [F5, F6, step 1.1, step 1.2]

3.1 Dimension and degeneracy conventions. [step 2.1]
The witness is two-dimensional; the same computation applies to
$\mathbb R^n/\mathbb Z^n$ for every $n\ge2$, where the noninjectivity is
produced by any nonzero lattice vector. In dimension one the circle
$\mathbb R/\mathbb Z$ is likewise complete and flat with noninjective
exponential, but it is not needed here. The zero-dimensional case has
$T_pM=\{0\}$ and plays no role. The claim was asserted for all complete
$K\le0$ manifolds, so one counterexample suffices, and no choice beyond the
inherited [A1] enters the explicit construction. [step 2.1] ∎
