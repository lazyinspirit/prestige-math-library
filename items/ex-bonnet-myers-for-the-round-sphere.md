---
id: ex-bonnet-myers-for-the-round-sphere
kind: example
title: Bonnet-Myers for the round sphere
status: published
origin: pipeline
deps:
  - thm-bonnet-myers
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - prop-curvature-tensor-of-constant-sectional-curvature
  - def-countable-choice
  - def-constant-sectional-curvature-and-space-form
  - def-ricci-curvature
  - lem-ricci-curvature-is-symmetric-and-basis-independent
  - def-sectional-curvature
  - def-riemann-curvature-four-tensor
  - ex-the-round-sphere-has-positive-constant-sectional-curvature
  - prop-round-sphere-model-geometry
  - ex-great-circles-as-round-sphere-geodesics
  - def-cut-time-in-a-unit-tangent-direction
  - def-metric-bounded-diameter
  - cor-compact-riemannian-manifolds-are-geodesically-complete
  - def-riemannian-distance-on-a-connected-manifold
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
      locator: "§§27.1 and 28.2, pp.199–200, 210–212: Myers' theorem and its equality case on the sphere"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§12, pp.59–62: the round sphere attains the diameter bound"
---

## Example

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$k>0$, let $R=1/\sqrt k$, let $n\ge2$, and let
$$S_R^n=\{x\in\mathbb R^{n+1}:|x|=R\}$$
carry the Riemannian metric induced from Euclidean $\mathbb R^{n+1}$. Then:

1. $S_R^n$ has constant sectional curvature $K=1/R^2=k$, hence Ricci
   curvature $\operatorname{Ric}=(n-1)k\,g$;
2. $S_R^n$ is complete and has diameter
   $$\operatorname{diam}(S_R^n,g)=\pi R=\frac{\pi}{\sqrt k};$$
3. it therefore attains the equality case of the Bonnet–Myers bound
   $\operatorname{diam}\le\pi/\sqrt k$: both the Ric lower bound
   $\operatorname{Ric}\ge(n-1)k\,g$ and the diameter bound are equalities.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1], a real number $k>0$, the
radius $R=1/\sqrt k$, an integer $n\ge2$, the round sphere $S_R^n$ with its
induced Riemannian metric $g$, and the metric diameter
$\operatorname{diam}(S_R^n,g)=\sup_{p,q}d_g(p,q)$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$
([[def-countable-choice]]), carried by the sectional-curvature, cut-locus and
Hopf–Rinow interfaces cited below; every point and curve below is explicit.

[F1] The round sphere $S_R^n$ with the induced metric has constant sectional
curvature $1/R^2$ for $n\ge2$
([[ex-the-round-sphere-has-positive-constant-sectional-curvature]]); this is
the constant-curvature predicate of
[[def-constant-sectional-curvature-and-space-form]].

[F2] Constant curvature: a manifold of constant sectional curvature $k$ has
curvature tensor $R(X,Y)Z=k(g(Y,Z)X-g(X,Z)Y)$
([[prop-curvature-tensor-of-constant-sectional-curvature]]); the Ricci tensor
is $\operatorname{Ric}(X,Y)=\operatorname{tr}(Z\mapsto R(Z,X)Y)$
([[def-ricci-curvature]]) and equals
$\sum_i\operatorname{Rm}(e_i,X,Y,e_i)$ in an orthonormal basis
([[lem-ricci-curvature-is-symmetric-and-basis-independent]]), with
$\operatorname{Rm}(A,B,C,D)=g(R(A,B)C,D)$ and
$K=\operatorname{Rm}(u,v,v,u)$ for an orthonormal pair
([[def-riemann-curvature-four-tensor]], [[def-sectional-curvature]]).

[F3] Cut locus of the round sphere: for every $p\in S_R^n$ and every unit
$v\in T_pS_R^n$ the cut time is $c_p(v)=\pi R$ and the cut locus is the
antipodal singleton $\operatorname{Cut}(p)=\{-p\}$
([[prop-round-sphere-model-geometry]]); the radial geodesics are the
great circles of [[ex-great-circles-as-round-sphere-geodesics]], and for
$0<t<c_p(v)$ the radial geodesic is minimizing,
$d_g(p,\exp_p(tv))=t$, by the definition of the cut time
([[def-cut-time-in-a-unit-tangent-direction]]).

[F4] A compact boundaryless Riemannian manifold is geodesically complete,
and each connected component is metrically complete
([[cor-compact-riemannian-manifolds-are-geodesically-complete]]), and
geodesic completeness gives metric completeness by Hopf–Rinow; the Riemannian
distance makes a connected Riemannian manifold a metric space
([[def-riemannian-distance-on-a-connected-manifold]]).

[F5] Bonnet–Myers: a nonempty, complete, connected, boundaryless Riemannian manifold of
dimension $n\ge2$ with $\operatorname{Ric}\ge(n-1)k\,g$, $k>0$, has
$\operatorname{diam}\le\pi/\sqrt k$ ([[thm-bonnet-myers]],
[[def-metric-bounded-diameter]]).

## Verification

**Proof technique:** direct: the round sphere has constant curvature $k$, its
Ricci tensor is traced from the constant-curvature tensor identity, and the
diameter is read off from the cut locus, where the antipode lies at distance
$\pi R$.

1.1 The round sphere has $K=k$. [F1, given]
By [F1] the sectional curvature is everywhere $1/R^2$, and $R=1/\sqrt k$ gives
$1/R^2=k$; in particular $K=k>0$ and the space is a space form in the sense of
[F1]. [F1, given]

2.1 The Ricci curvature is $\operatorname{Ric}=(n-1)k\,g$. [F2, step 1.1]
Let $p\in S_R^n$ and let $(e_1,\dots,e_n)$ be an orthonormal basis of $T_pS_R^n$.
By step 1.1 the manifold has constant sectional curvature $k$, so [F2] gives
$R(A,B)C=k(g(B,C)A-g(A,C)B)$ for all tangent vectors. Substituting into the
orthonormal-basis formula of [F2],
$$\operatorname{Ric}(X,Y)=\sum_{i=1}^n\operatorname{Rm}(e_i,X,Y,e_i) =\sum_{i=1}^n k\bigl(g(X,Y)g(e_i,e_i)-g(e_i,Y)g(X,e_i)\bigr) =k\bigl(n\,g(X,Y)-g(X,Y)\bigr)=(n-1)k\,g(X,Y).$$
Hence $\operatorname{Ric}=(n-1)k\,g$, and in particular the Bonnet–Myers
lower bound holds with equality at every point and every tangent vector.
[F2, step 1.1]

3.1 The sphere is complete and its diameter is $\pi/\sqrt k$. [F3, F4, given, step 2.1]
The sphere $S_R^n$ is a closed and bounded subset of $\mathbb R^{n+1}$, hence
compact. It is connected and boundaryless by the round-sphere geometry of [F3],
so [F4] makes it complete. Diameter: fix $p\in S_R^n$. Every point
$q\in S_R^n$ either is the antipode $q=-p$ or lies outside the cut locus
$\{-p\}$ of [F3]. In the second case the distance formula of
[[prop-round-sphere-model-geometry]] gives $d_g(p,q)<\pi R$, including
$q=p$ with distance zero; in the first case the radial geodesic in
the direction of $v$ with $\exp_p(\pi R\,v)=-p$ has length $\pi R$ and is
minimizing, because the cut time is exactly $\pi R$, so $d_g(p,-p)=\pi R$.
Therefore $\sup_qd_g(p,q)=\pi R$, and since $p$ was arbitrary,
$$\operatorname{diam}(S_R^n,g)=\pi R=\frac{\pi}{\sqrt k}$$
by the definition of the diameter in [F5]. [F3, F4, given, step 2.1]

4.1 Equality in Bonnet–Myers, and the boundary cases. [F5, step 2.1, step 3.1]
By step 2.1 the sphere satisfies $\operatorname{Ric}\ge(n-1)k\,g$ with
equality everywhere, and it is complete, connected, boundaryless and of
dimension $n\ge2$; [F5] gives $\operatorname{diam}\le\pi/\sqrt k$, and step 3.1
gives $\operatorname{diam}=\pi/\sqrt k$: the diameter bound is attained, so the
example is an equality case of Bonnet–Myers. The case $n=2$ is included and is
the minimal dimension for which the statement and Bonnet–Myers are formulated;
the parameter $k>0$ is essential, since for $k=0$ the Euclidean space has
unbounded pairwise distances and Ricci curvature $0$; its diameter is
undefined under [[def-metric-bounded-diameter]]. The radius is normalized to
$R=1/\sqrt k$ so that the curvature is exactly $k$; for a general radius $r$
the same computation gives $K=1/r^2$ and diameter $\pi r$. No choice beyond the
inherited [A1] is used: the sphere, its antipodal point and the great circles
are explicit. [F5, step 2.1, step 3.1] ∎

## Source locator

Datar §27.1 and §28.2, pp.199–200 and 210–212, and Eschenburg §12, pp.59–62,
present the round sphere of curvature $k$ as the equality case of Myers'
diameter bound. The curvature and cut-locus computations are those of the
published round-sphere items cited in [F1]–[F3].
