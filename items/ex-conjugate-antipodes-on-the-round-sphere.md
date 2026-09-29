---
id: ex-conjugate-antipodes-on-the-round-sphere
kind: example
title: Conjugate antipodes on the round sphere
status: draft
origin: pipeline
deps:
  - cor-the-tangent-space-of-an-n-manifold-has-dimension-n
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - def-countable-choice
  - def-covariant-derivative-along-a-curve
  - def-cut-point-and-cut-locus-of-a-point
  - def-cut-time-in-a-unit-tangent-direction
  - def-domain-and-exponential-map-of-a-connection
  - def-geodesic-of-an-affine-connection
  - def-jacobi-field
  - def-kernel-and-image-of-a-linear-map
  - def-levi-civita-connection
  - def-metric-compatible-connection-on-a-riemannian-vector-bundle
  - def-parallel-section-along-a-curve
  - def-riemannian-metric-and-riemannian-manifold
  - ex-cut-locus-of-a-point-on-a-round-sphere
  - ex-jacobi-fields-in-constant-sectional-curvature
  - ex-the-round-sphere-has-positive-constant-sectional-curvature
  - prop-curvature-tensor-of-constant-sectional-curvature
  - prop-geodesics-have-constant-speed-for-a-metric-compatible-connection
  - prop-local-frame-formula-for-covariant-differentiation-along-a-curve
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - thm-existence-and-uniqueness-of-parallel-sections
  - thm-quarter-turn-values-and-shift-formulas
  - thm-rank-nullity
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, Lemma 10.8 and the discussion of conjugate points on the sphere, printed pp.179–183 / PDF labels P195–P199."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lecture 24, Proposition 24.1.1, printed pp.174–175 / PDF labels P181–182, and Lecture 22 §22.3 on conjugate points and multiplicity."
---

## Example

Assume exactly $\mathrm{AC}_\omega$ through the declared constant-curvature and
sphere interfaces. Let $R>0$, let $n\ge2$, and give
$$S_R^n=\{x\in\mathbb R^{n+1}:|x|=R\}$$
the round metric induced from Euclidean space. Let $p\in S_R^n$, let
$v\in T_pS_R^n$ be a unit vector, and let
$$\gamma(t)=\exp_p(tv),\qquad t\in[0,\pi R],$$
be the radial unit-speed geodesic. Then $\gamma(\pi R)=-p$, the antipode of
$p$, and the antipode is conjugate to $p$ along $\gamma$ with multiplicity
$$n-1.$$

## Facts & Assumptions

**Given:** The countable-choice axiom $\mathrm{AC}_\omega$; an integer $n\ge2$; a radius $R>0$; a point $p$ on the round sphere $S_R^n$; and a unit tangent vector $v\in T_pS_R^n$ with radial geodesic $\gamma(t)=\exp_p(tv)$ on $[0,\pi R]$.

[A1] The exact choice assumption is $\mathrm{AC}_\omega$ of [[def-countable-choice]]. It is inherited through the induced-sphere constant-curvature interface, the constant-curvature Jacobi classification, and the maximal-geodesic/parallel-extension interfaces; the rank and evaluation computations below make no selection, and no full Axiom of Choice is used.

[F1] On the radius-$R$ round sphere, for every point $p$ and every unit tangent vector $v$ the cut time is $c_p(v)=\pi R$ ([[ex-cut-locus-of-a-point-on-a-round-sphere]], Example).

[F2] The cut locus of every point of the radius-$R$ round sphere is the singleton containing the antipode: $\operatorname{Cut}(p)=\{-p\}$ ([[ex-cut-locus-of-a-point-on-a-round-sphere]], Example).

[F3] The cut time is the supremum of the positive radial minimizing times of the unit-speed geodesic through $v$, and the cut locus consists of the cut-time endpoints over all unit directions; the radial endpoint at time $c_p(v)$ is therefore a point of $\operatorname{Cut}(p)$ ([[def-cut-time-in-a-unit-tangent-direction]], [[def-cut-point-and-cut-locus-of-a-point]]).

[F4] Under $\mathrm{AC}_\omega$, the maximal geodesic with initial velocity $v$ is the curve $t\mapsto\exp_p(tv)$ on its interval of definition, so the supplied $\gamma$ is an affinely parametrized geodesic with $\gamma(0)=p$ and $\dot\gamma(0)=v$ ([[def-domain-and-exponential-map-of-a-connection]], [[def-geodesic-of-an-affine-connection]]).

[F5] A geodesic of a metric-compatible connection has constant speed; since $|\dot\gamma(0)|_g=|v|_g=1$, the supplied $\gamma$ has unit speed, so $T:=\dot\gamma$ satisfies $g(T,T)=1$ and $T(\pi R)\ne0$ ([[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]]).

[F6] For $n\ge2$ the round sphere $S_R^n$ with its induced metric has constant sectional curvature $1/R^2$ ([[ex-the-round-sphere-has-positive-constant-sectional-curvature]]).

[F7] On a Riemannian manifold of constant sectional curvature $K$, the curvature operator is $R(X,Y)Z=K\bigl(g(Y,Z)X-g(X,Z)Y\bigr)$ ([[prop-curvature-tensor-of-constant-sectional-curvature]]).

[F8] On a constant-curvature manifold of curvature $K>0$, along a unit-speed geodesic, the normal Jacobi fields $J$ with $J(0)=0$ are exactly $J(t)=s_K(t)E(t)$, where $s_K(t)=\sin(\sqrt K\,t)/\sqrt K$ and $E$ is a unique parallel normal field; the tangential Jacobi fields are exactly $J(t)=(at+b)\dot\gamma(t)$ with $a,b\in\mathbb R$ ([[ex-jacobi-fields-in-constant-sectional-curvature]]).

[F9] Metric compatibility of the Levi--Civita connection along a curve gives $(g(U,V))'=g(D_tU,V)+g(U,D_tV)$ for smooth fields $U,V$ along $\gamma$; a geodesic satisfies $D_t\dot\gamma=0$ ([[def-levi-civita-connection]], [[def-metric-compatible-connection-on-a-riemannian-vector-bundle]], [[prop-local-frame-formula-for-covariant-differentiation-along-a-curve]], [[def-covariant-derivative-along-a-curve]]).

[F10] The trigonometric special values include $\sin(\pi/2)=1$ and $\sin\pi=0$ ([[thm-quarter-turn-values-and-shift-formulas]]).

[F11] Every prescribed vector at a point has a unique parallel extension to the whole interval, and a field is parallel exactly when $D_tE=0$ ([[thm-existence-and-uniqueness-of-parallel-sections]], [[def-parallel-section-along-a-curve]]).

[F12] For every prescribed initial value and derivative at $0$ there is exactly one Jacobi field along the interval with that data; with $J(0)=0$ and $D_tJ(0)=w$ the field is unique ([[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]).

[F13] The tangent space $T_pM$ of a smooth $n$-manifold is an $n$-dimensional real vector space ([[cor-the-tangent-space-of-an-n-manifold-has-dimension-n]]).

[F14] The Riemannian metric is positive definite, and the map $w\mapsto g_p(v,w)$ is a linear functional whose kernel is exactly the orthogonal complement $v^\perp=\{w\in T_pM:g_p(v,w)=0\}$ ([[def-riemannian-metric-and-riemannian-manifold]], [[def-kernel-and-image-of-a-linear-map]]).

[F15] For a linear map of a finite-dimensional space, $\dim V=\dim\ker T+\dim\operatorname{im}T$ ([[thm-rank-nullity]]).

[F16] The endpoints $\gamma(0)$ and $\gamma(\pi R)$ are conjugate along $\gamma$ exactly when the space $\mathcal K_\gamma(0,\pi R)=\{J\in\mathcal J(\gamma):J(0)=0,\ J(\pi R)=0\}$ contains a nonzero Jacobi field, and then the multiplicity is $\dim_\mathbb R\mathcal K_\gamma(0,\pi R)$ ([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]).

[F17] A smooth field $J$ along a geodesic is Jacobi exactly when $D_t^2J+R(J,\dot\gamma)\dot\gamma=0$ ([[def-jacobi-field]]).

## Verification

**Proof technique:** locate the antipode as the cut-time endpoint, solve the scalar Jacobi equation in constant positive curvature, bound the endpoint-vanishing space by an initial-derivative injection into $v^\perp$, and match it with the $n-1$ normal zero modes.

1.1 By [F4] the supplied curve $\gamma(t)=\exp_p(tv)$ is the affinely parametrized geodesic with $\gamma(0)=p$ and $\dot\gamma(0)=v$, and by [F5] it is unit speed, so $T:=\dot\gamma$ satisfies $g(T,T)=1$, $T(\pi R)\ne0$, and $D_tT=0$ by the geodesic equation in [F9]. By [F1] the cut time of $v$ is $c_p(v)=\pi R$, so the radial endpoint $\gamma(\pi R)$ is the cut-time endpoint; by [F3] it belongs to $\operatorname{Cut}(p)$, and by [F2] $\operatorname{Cut}(p)=\{-p\}$. Hence $\gamma(\pi R)=-p$, the antipode of $p$. The interval $[0,\pi R]$ is nondegenerate because $R>0$. [F1, F2, F3, F4, F5, F9]

1.2 By [F6] and [F7] the curvature is $K=1/R^2$, so the constant-curvature scalar solution is $s_K(t)=R\sin(t/R)$. Hence $s_K(0)=0$, and by [F10], $s_K(\pi R)=R\sin\pi=0$ while $s_K(\pi R/2)=R\sin(\pi/2)=R\ne0$. [F6, F7, F8, F10]

2.1 Let $J$ be any Jacobi field along $\gamma$ and put $\varphi(t)=g(J(t),T(t))$. Since $D_tT=0$, two applications of the product rule [F9] give $$\varphi''=g(D_t^2J,T).$$ By the Jacobi equation [F17], $D_t^2J=-R(J,T)T$, and the constant-curvature formula [F7] gives $$R(J,T)T=K\bigl(g(T,T)J-g(J,T)T\bigr).$$ Pairing with $T$ and using $g(T,T)=1$ yields $g(R(J,T)T,T)=K(\varphi-\varphi)=0$, so $\varphi''=0$ and $\varphi(t)=at+b$ is affine. [F7, F9, F17, step 1.1]

2.2 Conversely, fix $w\in v^\perp$ and let $E$ be the unique parallel field along $\gamma$ with $E(0)=w$ [F11]. Since $(g(E,T))'=g(D_tE,T)+g(E,D_tT)=0$ by [F9] and $g(E(0),T(0))=g(w,v)=0$, the field $E$ is normal. The normal classification [F8] therefore makes $J_w(t)=s_K(t)E(t)$ a Jacobi field with $J_w(0)=0$, and step 1.2 gives $J_w(\pi R)=s_K(\pi R)E(\pi R)=0$, so $J_w\in\mathcal K_\gamma(0,\pi R)$. The assignment $w\mapsto J_w$ is linear and injective: if $J_w=0$, then evaluating at $\pi R/2$ gives $s_K(\pi R/2)E(\pi R/2)=0$, and since $s_K(\pi R/2)\ne0$, the parallel field $E$ vanishes at one point, hence $E=0$ by uniqueness in [F11] and $w=E(0)=0$. Therefore $\dim\mathcal K_\gamma(0,\pi R)\ge\dim v^\perp$ by [F15]. [F8, F9, F11, F15, step 1.2]

3.1 Suppose instead that $J\in\mathcal K_\gamma(0,\pi R)$. By step 2.1, $\varphi=g(J,T)$ is affine, and $\varphi(0)=g(0,T(0))=0$ while $\varphi(\pi R)=g(0,T(\pi R))=0$; since $\pi R>0$, an affine function with two distinct zeros vanishes identically, so $\varphi\equiv0$. In particular $g(D_tJ(0),T(0))=\varphi'(0)=0$, that is $W:=D_tJ(0)\in v^\perp$. By [F12], $J$ is the unique Jacobi field with $J(0)=0$ and $D_tJ(0)=W$, so the map $J\mapsto D_tJ(0)$ is an injective linear map from $\mathcal K_\gamma(0,\pi R)$ into $v^\perp$, and $\dim\mathcal K_\gamma(0,\pi R)\le\dim v^\perp$ by [F15]. [F12, F15, step 1.1, step 2.1]

4.1 The linear functional $w\mapsto g_p(v,w)$ on $T_pM$ has kernel $v^\perp$ by [F14] and is surjective because $g_p(v,v)>0$ gives $g_p(v,\lambda v)=\lambda g_p(v,v)$ for every $\lambda\in\mathbb R$. Since $\dim T_pM=n$ by [F13], rank--nullity [F15] gives $\dim v^\perp=n-1$. Combining the two bounds of steps 2.2 and 3.1 yields $\dim\mathcal K_\gamma(0,\pi R)=n-1$. By the conjugacy definition [F16], the antipode $\gamma(\pi R)=-p$ is conjugate to $p$ along $\gamma$, with multiplicity $n-1$. [F13, F14, F15, F16, step 2.2, step 3.1]

5.1 Boundary and choice audit. The sphere is nonempty and $p$ is supplied, so no empty case arises; $n\ge2$ excludes the zero- and one-dimensional spheres, where the constant-curvature normal classification [F8] would not apply with positive curvature; the parameter interval $[0,\pi R]$ is nondegenerate and $\gamma$ is a nonconstant unit-speed geodesic, so no constant-geodesic or degenerate-segment case occurs. The zero Jacobi field is excluded from witnessing conjugacy by [F16], and the endpoint-vanishing space is computed exactly, not merely bounded. Exactly the inherited $\mathrm{AC}_\omega$ of [A1] is assumed. This example asserts conjugacy at the antipode and its multiplicity; it makes no if-and-only-if claim about geodesics other than the exhibited radial one. [A1, F16, step 1.1, step 4.1]

$\square$

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, printed pp.179–183 / PDF labels P195–P199, Lemma 10.8 solves the constant-curvature normal Jacobi equation and the surrounding discussion records that antipodal points of the round sphere are conjugate. Datar, *Lectures on Riemannian Geometry*, Proposition 24.1.1, printed pp.174–175 / PDF labels P181–182, gives the same normal-field formula for space forms, and Lecture 22 §22.3 gives the endpoint-vanishing definition of multiplicity used here. The transport of the endpoint argument to the radius-$R$ sphere, the cut-time identification of the antipode, and the rank computation of the normal space are proved locally above from the declared interfaces.
