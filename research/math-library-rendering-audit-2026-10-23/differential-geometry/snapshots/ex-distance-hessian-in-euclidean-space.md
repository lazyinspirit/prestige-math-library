---
id: ex-distance-hessian-in-euclidean-space
kind: example
title: Distance hessian in euclidean space
status: published
origin: pipeline
deps:
  - cor-chord-length-is-at-most-arc-length
  - cor-piecewise-c1-paths-have-additive-speed-integral-length
  - cor-rn-is-polygonally-connected-and-locally-path-connected
  - def-bounded-set
  - def-countable-choice
  - def-cut-time-in-a-unit-tangent-direction
  - def-directional-and-partial-derivatives
  - def-domain-and-exponential-map-of-a-connection
  - def-euclidean-inner-product
  - def-geodesically-complete-riemannian-manifold
  - def-infimum
  - def-path-polygonal-length-and-rectifiability-in-rn
  - def-piecewise-c-one-curve-on-a-manifold
  - def-pointwise-norm-and-angle-from-a-riemannian-metric
  - def-riemannian-distance-on-a-connected-manifold
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-speed-and-length
  - def-velocity-derivation-of-a-smooth-curve
  - ex-euclidean-space-has-zero-curvature
  - ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds
  - ex-jacobi-fields-in-euclidean-space
  - ex-straight-lines-as-euclidean-geodesics
  - ex-the-euclidean-metric-and-its-musical-maps
  - lem-integral-elementary-bounds
  - prop-coordinate-criterion-for-a-riemannian-metric
  - prop-gradient-hessian-and-divergence-connection-formulas
  - prop-gradient-of-the-distance-is-the-outward-unit-radial-field-off-the-cut-locus
  - prop-hessian-of-distance-in-terms-of-radial-jacobi-fields
  - thm-coordinate-derivations-form-a-basis-of-the-tangent-space
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - thm-gradient-represents-directional-derivatives-and-steepest-ascent
  - thm-hopf-rinow
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, printed pp.173-190 (Jacobi fields, the differential of the exponential map, and the Hessian of the distance function outside the cut locus); Chapter 5, printed p.81 (straight lines as the geodesics of Euclidean space), used here through the library's Euclidean suppliers."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Section 23.2, printed pp.167-170 (unit radial gradient of the distance off the cut locus) and Section 23.3, printed pp.171-172 (regularity of the distance); neither source writes out the Euclidean specialization, which is computed here from the library's Euclidean, length and Hessian suppliers."
---

## Example

Let $n\ge2$ and let $g_{\mathrm E}$ be the standard Euclidean metric on $\mathbb R^n$. For $p\in\mathbb R^n$ let $r_p(x):=d_g(p,x)$ be the Riemannian distance from $p$ and let $\nabla^2r_p=\nabla(dr_p)$ be its Levi-Civita covariant Hessian. Then, off $p$,
$$\nabla^2r_p=\frac1{r_p}\bigl(g_{\mathrm E}-dr_p\otimes dr_p\bigr),$$
that is, for every $q\ne p$ and all $X,Y\in T_q\mathbb R^n$,
$$\bigl(\nabla^2r_p\bigr)_q(X,Y)=\frac1{r_p(q)}\bigl(g_{\mathrm E,q}(X,Y)-dr_p(X)\,dr_p(Y)\bigr),$$
where $(dr_p\otimes dr_p)(X,Y):=dr_p(X)\,dr_p(Y)$. The proof shows in addition that $c_p(u)=+\infty$ for every unit direction $u\in S_p\mathbb R^n$, so every straight ray from $p$ minimizes for all time.

## Facts & Assumptions

**Given:** An integer $n\ge2$, the Euclidean space $\mathbb R^n$ with its standard metric $g_{\mathrm E}$, a point $p\in\mathbb R^n$, and a point $q\in\mathbb R^n$ with $q\ne p$.

[A1] The Axiom of Countable Choice $\mathrm{AC}_\omega$ is the standing assumption ([[def-countable-choice]]).

[F1] For every $n$, $\mathbb R^n$ is a smooth $n$-manifold with the identity as global chart, without boundary; the standard Euclidean metric $g_{\mathrm E}=\sum_{i=1}^n dx^i\otimes dx^i$ has Cartesian metric matrix $(\delta_{ij})$, which is smooth, symmetric and positive definite, so $(\mathbb R^n,g_{\mathrm E})$ is a Riemannian manifold ([[ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]], [[ex-euclidean-space-has-zero-curvature]], [[prop-coordinate-criterion-for-a-riemannian-metric]], [[def-riemannian-metric-and-riemannian-manifold]]).

[F2] In the global Cartesian chart the metric matrix of $g_{\mathrm E}$ is $(\delta_{ij})$, so the coordinate derivations $\partial_1|_a,\dots,\partial_n|_a$ form a basis of $T_a\mathbb R^n$ and $g_{\mathrm E,a}(v,v)=\sum_i(v^i)^2$ for $v=\sum_iv^i\partial_i|_a$; hence $|v|_{g_{\mathrm E}}=\lVert(v^1,\dots,v^n)\rVert_2$ is the Euclidean norm of the coefficient vector. The curve $c(t)=a+tw$ has velocity $\dot c(t)=\sum_iw^i\partial_i|_{c(t)}$: the velocity derivation acts on a smooth germ $f$ by $(f\circ c)'(t)=D_wf(c(t))=\langle\nabla f(c(t)),w\rangle=\sum_iw^i\partial_if(c(t))$. Consequently the straight line $t\mapsto a+tw$ has the constant $g_{\mathrm E}$-speed $|\dot c|_{g_{\mathrm E}}=\lVert w\rVert_2$ ([[ex-the-euclidean-metric-and-its-musical-maps]], [[prop-coordinate-criterion-for-a-riemannian-metric]], [[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]], [[def-pointwise-norm-and-angle-from-a-riemannian-metric]], [[def-velocity-derivation-of-a-smooth-curve]], [[def-directional-and-partial-derivatives]], [[thm-gradient-represents-directional-derivatives-and-steepest-ascent]], [[def-euclidean-inner-product]]).

[F3] For the Euclidean inner product, $\langle z,z\rangle\ge0$ for every $z\in\mathbb R^n$, with equality exactly when $z=0$; hence the norm $\lVert z\rVert_2=\sqrt{\langle z,z\rangle}$ is nonnegative and vanishes exactly at $z=0$ ([[def-euclidean-inner-product]]).

[F4] On $\mathbb R^n$ with $g_{\mathrm E}$, a geodesic on an interval $I$ is exactly a curve of the form $\gamma(t)=x+tv$ with constant $x,v\in\mathbb R^n$, and every such curve is a geodesic with velocity $v$ ([[ex-straight-lines-as-euclidean-geodesics]]).

[F5] Under [A1], for every $(x,v)$ there is a unique maximal geodesic $\gamma_{x,v}$ with $\gamma_{x,v}(0)=x$ and $\gamma'_{x,v}(0)=v$, defined on an open interval containing $0$; the exponential map is $\exp_x(v)=\gamma_{x,v}(1)$ ([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]], [[def-domain-and-exponential-map-of-a-connection]]).

[F6] A boundaryless Riemannian manifold is geodesically complete when every maximal geodesic has domain $\mathbb R$; the zero initial vector is included ([[def-geodesically-complete-riemannian-manifold]]).

[F7] On a $C^1$ piece the Riemannian speed is $|\dot\gamma|_g$ and the length of a piecewise $C^1$ curve is $L_g(\gamma)=\sum_j\int|\dot\gamma|_g\,dt$, the empty sum and a constant curve giving zero; on a connected Riemannian manifold the distance is $d_g(p,x)=\inf\{L_g(\gamma):\gamma$ piecewise $C^1$ from $p$ to $x\}$, a finite nonnegative infimum, and no minimizing curve is part of the definition ([[def-riemannian-speed-and-length]], [[def-piecewise-c-one-curve-on-a-manifold]], [[def-riemannian-distance-on-a-connected-manifold]]).

[F8] For a piecewise $C^1$ path $c:[a,b]\to\mathbb R^n$ — under the identity global chart these are exactly the piecewise $C^1$ curves into the manifold $\mathbb R^n$, with the same speed — the polygonal arc length is $L(c)=\sum_j\int\lVert c'(t)\rVert_2\,dt$; moreover $\lVert c(v)-c(u)\rVert_2\le L(c|_{[u,v]})$ for $a\le u\le v\le b$ ([[cor-piecewise-c1-paths-have-additive-speed-integral-length]], [[def-path-polygonal-length-and-rectifiability-in-rn]], [[cor-chord-length-is-at-most-arc-length]]).

[F9] If $\ell$ is a real lower bound of a nonempty set $S\subseteq\mathbb R$ of lengths admitting a finite infimum, then $\ell\le\inf S$ ([[def-infimum]], [[def-bounded-set]]).

[F10] For $n\ge1$, $\mathbb R^n$ is polygonally connected and connected ([[cor-rn-is-polygonally-connected-and-locally-path-connected]]).

[F11] Every constant function with value $c$ on $[a,b]$ is Darboux integrable with $\int_a^bc\,dt=c(b-a)$; in particular $\int_0^s1\,dt=s$ for $s>0$ ([[lem-integral-elementary-bounds]]).

[F12] Under [A1], for a nonempty connected boundaryless Riemannian manifold, metric completeness of $(M,d_g)$, geodesic completeness, $\mathcal E_p=T_pM$ for every $p$, the same for one $p_0$, and compactness of every closed bounded subset are equivalent; when they hold every two points are joined by a minimizing geodesic ([[thm-hopf-rinow]]).

[F13] Under [A1], for a complete connected boundaryless Riemannian manifold $(M,g)$, $p\in M$ and a unit $v\in T_pM$, the cut time is $c_p(v)=\sup\{t>0:d_g(p,\exp_p(tv))=t\}\in(0,+\infty]$, and the value $+\infty$ is allowed when every positive radial segment minimizes ([[def-cut-time-in-a-unit-tangent-direction]]).

[F14] A smooth field $J$ along $\gamma(t)=x+tv$ is a Jacobi field if and only if $J(t)=A+tB$ with constant $A,B\in\mathbb R^n$, in which case $D_tJ=B$ ([[ex-jacobi-fields-in-euclidean-space]]).

[F15] Under [A1], let $(M,g)$ be complete, connected and boundaryless, let $p\in M$, let $v\in S_pM$ be unit, let $0<t<c_p(v)$, put $q=\exp_p(tv)$ and $T=\dot\gamma(t)$. Then: (i) for every $X\in T_qM$ with $g_q(X,T)=0$ there is exactly one Jacobi field $J_X$ along $\gamma$ with $J_X(0)=0$ and $J_X(t)=X$; (ii) $(\nabla^2r_p)_q(X,Y)=g_q(D_tJ_X(t),Y)$ for such $X$ and every $Y$; (iii) the endomorphism $S=\nabla\operatorname{grad}r_p$ satisfies $g_q(SZ,W)=(\nabla^2r_p)_q(Z,W)$ and $S(T)=0$, while $S(X)=D_tJ_X(t)$ for every $X\perp T$ ([[prop-hessian-of-distance-in-terms-of-radial-jacobi-fields]], [[prop-gradient-hessian-and-divergence-connection-formulas]]).

[F16] Under [A1], for complete connected boundaryless $(M,g)$, $p\in M$, unit $v\in S_pM$ and $0<t<c_p(v)$, with $q=\exp_p(tv)$: $\operatorname{grad}r_p(q)=\dot\gamma(t)=\gamma'(t)$ and $|\operatorname{grad}r_p(q)|_g=1$ ([[prop-gradient-of-the-distance-is-the-outward-unit-radial-field-off-the-cut-locus]]).

[F17] Here the Riemannian gradient means the unique vector field characterized by $g_x((\operatorname{grad}f)_x,Z)=df_x(Z)$ for every smooth real $f$, every $x$ and every $Z\in T_xM$; this is the defining identity used in the calculations below.

## Verification

**Proof technique:** direct: compute the Euclidean Riemannian distance and cut time, then read the Hessian off the radial Jacobi fields of the straight geodesic.

1.1 **The radial direction.** Put $\rho:=\lVert q-p\rVert_2$ and $u:=(q-p)/\rho$. By [F3] $\rho>0$, and $q=p+\rho u$ with $\lVert u\rVert_2=1$. Under the canonical identification of [F2], $u$ is a unit tangent vector at $p$, $|u|_{g_{\mathrm E}}=1$, and $\gamma(t):=p+tu$ is, by [F4], the geodesic with $\gamma(0)=p$ and $\dot\gamma(0)=u$; its velocity is the constant vector $u$, so $|\dot\gamma|_{g_{\mathrm E}}=1$ and $T:=\dot\gamma(\rho)=u$ has $g_{\mathrm E,q}(T,T)=1$. [F1, F2, F3, F4]

1.2 **The Euclidean Riemannian distance.** Let $x\in\mathbb R^n$. If $x=p$ both sides of $d_g(p,x)=\lVert x-p\rVert_2$ are $0$, because the constant curve has length $0$ [F7]. Let $x\ne p$, put $s:=\lVert x-p\rVert_2>0$ and $w:=(x-p)/s$, so $\lVert w\rVert_2=1$ and $x=p+sw$. The segment $c(t)=p+tw$, $t\in[0,s]$, is a piecewise $C^1$ curve from $p$ to $x$ of constant speed $|\dot c|_{g_{\mathrm E}}=\lVert w\rVert_2=1$ by [F2], so [F7] and [F11] give $L_g(c)=\int_0^s1\,dt=s$; hence $d_g(p,x)\le s$. Conversely, for an arbitrary piecewise $C^1$ curve $c$ from $p$ to $x$, [F2] and [F7] identify its Riemannian length with $\sum_j\int\lVert c'(t)\rVert_2\,dt$, which is the polygonal arc length $L(c)$ of [F8], and the chord bound of [F8] gives $L_g(c)=L(c)\ge\lVert x-p\rVert_2=s$. Thus $s$ is a real lower bound of the nonempty set of curve lengths whose infimum is $d_g(p,x)$ [F7], so [F9] gives $s\le d_g(p,x)$. Therefore $$d_g(p,x)=\lVert x-p\rVert_2\qquad(x\in\mathbb R^n).$$ [F2, F7, F8, F9, F11]

1.3 **Geodesic completeness and the exponential map.** By [F1] and [F10] the manifold $(\mathbb R^n,g_{\mathrm E})$ is a boundaryless connected Riemannian manifold. Let $\gamma_{x,v}$ be the maximal geodesic with $\gamma_{x,v}(0)=x$ and $\gamma'_{x,v}(0)=v$ on its open domain $I$ [F5]. On $I$, [F4] writes $\gamma_{x,v}(t)=a+tb$ with constant $a,b$, so $a=\gamma_{x,v}(0)=x$ and $b=\gamma'_{x,v}(0)=v$, that is $\gamma_{x,v}(t)=x+tv$. The curve $\ell(t)=x+tv$, $t\in\mathbb R$, is a geodesic by [F4] with the same initial data; since its domain cannot be enlarged to a longer interval, it is a maximal geodesic with these data, and the uniqueness in [F5] forces $\gamma_{x,v}=\ell$ and $I=\mathbb R$. Hence every maximal geodesic has domain $\mathbb R$ and $(\mathbb R^n,g_{\mathrm E})$ is geodesically complete [F6]; by the equivalence of [F12] it satisfies the completeness hypothesis used by the cut-time and distance-Hessian results, and in particular $$\exp_x(w)=\gamma_{x,w}(1)=x+w\qquad(w\in T_x\mathbb R^n\cong\mathbb R^n).$$ [F4, F5, F6, F10, F12]

2.1 **The cut time in every direction is infinite.** Fix the unit direction $u$ of 1.1. For every $t>0$, 1.3 gives $\exp_p(tu)=p+tu$, and 1.2 gives $d_g(p,\exp_p(tu))=\lVert tu\rVert_2=t$ (using $\lVert u\rVert_2=1$ from 1.1). Hence the set $\{t>0:d_g(p,\exp_p(tu))=t\}$ is all of $(0,\infty)$; since $(\mathbb R^n,g_{\mathrm E})$ is complete, connected and boundaryless by 1.3, the cut-time definition [F13] assigns $c_p(u)=+\infty$, the value allowed there when every positive radial segment minimizes. In particular $0<\rho<c_p(u)$ with $\rho>0$ from 1.1. [F12, F13, step 1.1, step 1.2, step 1.3]

3.1 **The radial Jacobi fields.** Let $X\in T_q\mathbb R^n$ satisfy $g_{\mathrm E,q}(X,T)=0$, with $T=u$ the unit vector of 1.1. By 1.1 and 2.1 the hypotheses of [F15] hold with $v=u$ and $t=\rho$, so there is exactly one Jacobi field $J_X$ along $\gamma$ with $J_X(0)=0$ and $J_X(\rho)=X$. The field $J(s):=(s/\rho)X$ — the vector $X$ being extended as a constant field in the Cartesian trivialization — has the affine form $A+sB$ with $A=0$ and $B=X/\rho$, so it is a Jacobi field by [F14] and satisfies $J(0)=0$, $J(\rho)=X$; by the uniqueness in [F15](i), $J_X=J$ and $$D_sJ_X(\rho)=X/\rho.$$ Consequently the endomorphism $S=\nabla\operatorname{grad}r_p$ of [F15](iii) satisfies $S(T)=0$ and $S(X)=X/\rho$ for every $X\perp T$. [F4, F14, F15, step 1.1, step 2.1]

3.2 **The gradient of the distance.** By [F16], applied with the unit direction $u$ and $0<\rho<c_p(u)$ from 2.1, $\operatorname{grad}r_p(q)=\dot\gamma(\rho)=T$ and $|\operatorname{grad}r_p(q)|_{g_{\mathrm E}}=1$. The gradient characterization [F17] therefore gives $$dr_p(Z)=g_{\mathrm E,q}\bigl(\operatorname{grad}r_p(q),Z\bigr)=g_{\mathrm E,q}(T,Z)\qquad(Z\in T_q\mathbb R^n),$$ and in particular $dr_p(T)=g_{\mathrm E,q}(T,T)=1$. [F16, F17, step 2.1]

4.1 **The Hessian identity.** Let $Z\in T_q\mathbb R^n$ and write $Z=Z^\perp+g_{\mathrm E,q}(Z,T)T$ with $Z^\perp:=Z-g_{\mathrm E,q}(Z,T)T$ orthogonal to $T$; this is the orthogonal decomposition because $g_{\mathrm E,q}(T,T)=1$. By linearity of $S$ and step 3.1, $S(Z)=S(Z^\perp)=Z^\perp/\rho$. Since $S$ represents the Hessian by [F15](iii), for every $W\in T_q\mathbb R^n$ one has $$(\nabla^2r_p)_q(Z,W)=g_{\mathrm E,q}(S(Z),W)=\frac1\rho g_{\mathrm E,q}(Z^\perp,W)=\frac1\rho\bigl(g_{\mathrm E,q}(Z,W)-g_{\mathrm E,q}(Z,T)g_{\mathrm E,q}(T,W)\bigr)=\frac1\rho\bigl(g_{\mathrm E,q}(Z,W)-dr_p(Z)dr_p(W)\bigr),$$ the third equality by bilinearity and the definition of $Z^\perp$, the fourth by step 3.2. Since $r_p(q)=d_g(p,q)=\lVert q-p\rVert_2=\rho$ by 1.2, this is the asserted identity at $q$; the point $q\ne p$ was arbitrary, so the identity holds at every point of $\mathbb R^n\setminus\{p\}$. [F15, step 1.2, step 3.1, step 3.2]

5.1 **Audit.** The hypothesis $n\ge2$ of the statement is respected; the argument uses only $n\ge1$ (for the connectedness supplied by [F10]) and no case outside the stated hypothesis is claimed. Since $q\ne p$, [F3] gives $\rho>0$, so the divisions by $\rho$ and by $r_p(q)=\rho$ are legitimate; the point $p$ itself is excluded and no differentiability or Hessian value at $p$ is asserted. The zero vector is harmless: $Z=0$ gives $S(0)=0$ and both sides of the identity vanish, while the radial vector $T$ is unit. There is no endpoint in the parameter range: $0<\rho<c_p(u)=+\infty$ by 2.1, so no cut point occurs along this ray and the formula is interior. All constructions are explicit: $u=(q-p)/\rho$ and $\gamma(t)=p+tu$ involve no selection, and [A1] is inherited exactly through the declared suppliers that carry it, namely the geodesic existence, uniqueness and smooth-dependence theorem [F5], the cut-time definition [F13], Hopf--Rinow [F12], and the Hessian and gradient results [F15, F16]. No biconditional is asserted: the conclusion is a tensor identity off $p$, the distance computation of 1.2 is proved by the two inequalities, and the Jacobi classification [F14] is used in the direction from the affine form to the Jacobi equation. [A1, F5, F10, F12, F13, F15, F16, step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, step 3.2, step 4.1, given, cases] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, printed pp.173-190, develops Jacobi fields, the identification of $d(\exp_p)_{tv}$ with the endpoint of a Jacobi field vanishing at $p$, and the Hessian of the distance function outside the cut locus; Chapter 5, printed p.81, records that the Euclidean geodesics are the straight lines. Datar, *Lectures on Riemannian Geometry*, Section 23.2, printed pp.167-170, states that $\operatorname{grad}r_p$ is the unit radial field off the cut locus, and Section 23.3, printed pp.171-172, treats the regularity of the distance. Neither source writes out the Euclidean specialization $(\nabla^2r_p)_q=(1/r_p(q))(g-dr_p\otimes dr_p)$; the computation above derives it from the library's Euclidean-geometry, length-and-distance and distance-Hessian suppliers, and no source text is quoted.
