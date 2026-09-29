---
id: prop-hessian-of-distance-in-terms-of-radial-jacobi-fields
kind: proposition
title: Hessian of distance in terms of radial jacobi fields
status: draft
origin: pipeline
deps:
  - cor-the-differential-of-a-diffeomorphism-is-an-isomorphism
  - cor-zero-derivative-implies-constant
  - def-christoffel-symbols-of-an-affine-connection
  - def-codimension-and-hypersurface
  - def-countable-choice
  - def-covariant-derivative-along-a-curve
  - def-cut-point-and-cut-locus-of-a-point
  - def-cut-time-in-a-unit-tangent-direction
  - def-geodesic-of-an-affine-connection
  - def-induced-connection-and-second-fundamental-form
  - def-jacobi-field
  - def-levi-civita-connection
  - def-metric-compatible-connection-on-a-riemannian-vector-bundle
  - def-regular-and-critical-points-and-values
  - def-riemann-curvature-four-tensor
  - def-riemannian-metric-and-riemannian-manifold
  - def-shape-operator
  - def-tangential-and-normal-projections-along-a-riemannian-submanifold
  - lem-curvature-is-c-infinity-linear-in-all-three-vector-fields
  - lem-the-differential-sends-derivations-to-derivations-and-is-linear
  - lem-wronskian-of-two-jacobi-fields-is-constant
  - prop-affine-reparametrization-of-a-geodesic-is-a-geodesic
  - prop-connection-laws-in-directional-form
  - prop-exponential-map-scales-geodesic-time
  - prop-geodesics-have-constant-speed-for-a-metric-compatible-connection
  - prop-gradient-hessian-and-divergence-connection-formulas
  - prop-gradient-of-the-distance-is-the-outward-unit-radial-field-off-the-cut-locus
  - prop-tangent-space-of-a-regular-level-set-is-the-kernel
  - prop-torsion-free-is-equivalent-to-symmetric-christoffel-symbols-in-coordinate-frames
  - thm-a-regular-level-set-is-an-embedded-submanifold
  - thm-algebraic-symmetries-of-the-riemann-tensor
  - thm-covariant-derivative-along-a-curve-is-independent-of-frame-and-extension
  - thm-differential-of-the-exponential-map-in-terms-of-jacobi-fields
  - thm-distance-from-p-is-smooth-off-p-and-the-cut-locus
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p
  - thm-gauss-lemma
  - thm-hopf-rinow
  - thm-pullback-connection-is-well-defined-and-functorial
  - thm-the-differential-sends-curve-velocities-to-composite-curve-velocities
  - thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth
  - thm-weingarten-equation-and-adjointness-of-the-shape-operator
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
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "Section 2, printed pp.6-9 (PDF labels P7-P9): for a unit gradient field $V=\\nabla f$ the operator $A=DV=D\\nabla f$ is the Hessian of $f$ and its restriction to a level hypersurface is that hypersurface's shape operator, while Jacobi fields in the equidistant family satisfy $J'=AJ$; Section 5, Lemma 5.3 and display (5.11), printed p.19 (PDF label P19): $d(\\exp_p)_{tv}e_i=J_i(t)/t$; Section 6, printed p.21 (PDF label P21): for the distance function $\\rho$ the radial field $V=\\nabla\\rho$ is unit and $D\\nabla\\rho$ vanishes on $\\mathbb R V$."
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997), Chapter 10"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, printed pp.173-190 (PDF labels P189-P206): Jacobi fields, the differential of the exponential map as the endpoint value of a Jacobi field vanishing at $p$ (printed p.184), and the index-form material."
    - title: Ved Datar, Lectures on Riemannian Geometry (2025)
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lecture 23, section 23.2, printed pp.167-169 (PDF labels P174-P176): the cut locus, regularity of the distance and $\\nabla\\rho_p$ as the unit radial field; Lectures 21-22, printed pp.153-166: Jacobi fields and the differential of the exponential map."
---

## Statement

Assume exactly the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$.
Let $(M,g)$ be a complete, connected, boundaryless, finite-dimensional
Riemannian manifold, let $p\in M$, let $v\in S_pM$ be a unit tangent vector
with cut time $c_p(v)$, let $\gamma=\gamma_{p,v}$ be the unit-speed geodesic
$\gamma(t)=\exp_p(tv)$, let $0<t<c_p(v)$, and put $q:=\gamma(t)$ and
$T:=\dot\gamma(t)$. Let $r_p:M\to\mathbb R$, $r_p(x):=d_g(p,x)$, be the
distance from $p$, which is smooth near $q$, and let $\nabla^2r_p=\nabla(dr_p)$
be its Levi-Civita covariant Hessian.

**(a) Radial Jacobi fields extend tangent directions.** For every
$X\in T_qM$ with $g_q(X,T)=0$ there is exactly one Jacobi field $J_X$ along
$\gamma$ with
$$J_X(0)=0,\qquad J_X(t)=X.$$
This field is normal, $g(J_X,\dot\gamma)\equiv0$, and its terminal derivative
is orthogonal to $T$: $g_q(D_tJ_X(t),T)=0$. Equivalently, the radial endpoint
map
$$J(t):\{v\}^{\perp}\longrightarrow T^{\perp},\qquad W\longmapsto J_W(t)=d(\exp_p)_{tv}(tW),$$
where $J_W$ is the Jacobi field with $J_W(0)=0$ and $D_\sigma J_W(0)=W$, is a
linear isomorphism onto $T^{\perp}$, the tangent space of the distance sphere
at $q$.

**(b) Hessian formula.** For every such $X$ and every $Y\in T_qM$,
$$\bigl(\nabla^2r_p\bigr)_q(X,Y)=g_q\bigl(D_tJ_X(t),Y\bigr).$$
In particular $\bigl(\nabla^2r_p\bigr)_q(T,\cdot)=0$.

**(c) Normal shape operator.** The endomorphism $S:=\nabla\operatorname{grad}r_p$,
characterized by $g_q(SX,Y)=(\nabla^2r_p)_q(X,Y)$, satisfies
$$S(T)=0,\qquad S(X)=D_tJ_X(t)\quad\text{for every }X\perp T,$$
so on $T^{\perp}$ it is $D_tJ(t)\circ J(t)^{-1}$ and it is $g$-self-adjoint
there. In the sign convention of [[def-shape-operator]], the shape operator of
the distance sphere $\Sigma_t=\{x\in M\setminus(\{p\}\cup\operatorname{Cut}(p)):r_p(x)=t\}$
with outward unit normal $\nu=\operatorname{grad}r_p$ is
$-D_tJ(t)\circ J(t)^{-1}$, and its second fundamental form is
$$\mathrm{II}(X,Y)=-g_q\bigl(D_tJ_X(t),Y\bigr)\nu.$$

In dimension zero $S_pM=\varnothing$ and the assertion is vacuous; no
compactness of $M$ is assumed.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice; a complete, connected, boundaryless, finite-dimensional Riemannian manifold $(M,g)$; a point $p\in M$; a unit vector $v\in S_pM$; the cut time $c_p(v)$; a time $0<t<c_p(v)$; the unit-speed geodesic $\gamma=\gamma_{p,v}$ with $\gamma(0)=p$, $\dot\gamma(0)=v$; the points $q=\gamma(t)=\exp_p(tv)$ and $T=\dot\gamma(t)$; the tangent cut domain $D_p=\{su:u\in S_pM,\ 0<s<c_p(u)\}$; the open set $U:=M\setminus(\{p\}\cup\operatorname{Cut}(p))$; the distance function $r_p(x)=d_g(p,x)$; its covariant Hessian $\nabla^2r_p$ on $U$; and the endomorphism $S=\nabla\operatorname{grad}r_p$ of $TU$ with $g(SX,Y)=(\nabla^2r_p)(X,Y)$.

[A1] The Axiom of Countable Choice $\mathrm{AC}_\omega$ is the standing assumption ([[def-countable-choice]]).

[F1] Under [A1], a complete connected boundaryless Riemannian manifold is geodesically complete: the fibre exponential domain is $\mathcal E_p=T_pM$ at every $p$ ([[thm-hopf-rinow]]).

[F2] Under [A1], $\mathcal E_p$ is open in $T_pM$ and $\exp_p:\mathcal E_p\to M$ is smooth ([[thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth]]).

[F3] Under [A1], $D_p$ is open in $T_pM$, the set $U$ is an open submanifold of $M$, and $\exp_p|_{D_p}$ is a diffeomorphism of $D_p$ onto $U$ ([[thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p]]).

[F4] The differential of a diffeomorphism at every point is a linear isomorphism ([[cor-the-differential-of-a-diffeomorphism-is-an-isomorphism]]).

[F5] $S_pM=\{v\in T_pM:|v|_g=1\}$, $c_p(v)$ is the cut time of the direction $v$, $\operatorname{Cut}(p)=\{\exp_p(c_p(v)v):v\in S_pM,\ c_p(v)<\infty\}$, and if $c_p(v)$ is finite then every $0\le s<c_p(v)$ is minimizing ([[def-cut-point-and-cut-locus-of-a-point]]).

[F6] Under [A1], $r_p$ is smooth on $U$ and $r_p(\exp_p(w))=|w|_g$ for every $w\in D_p$ ([[thm-distance-from-p-is-smooth-off-p-and-the-cut-locus]]).

[F7] Under [A1], for every unit $u\in S_pM$ and $0<\sigma<c_p(u)$ one has $\operatorname{grad}r_p(\exp_p(\sigma u))=d(\exp_p)_{\sigma u}(u)=\dot\gamma_{p,u}(\sigma)$, and $|\operatorname{grad}r_p(x)|_g=1$ for every $x\in U$ ([[prop-gradient-of-the-distance-is-the-outward-unit-radial-field-off-the-cut-locus]]).

[F8] The Riemannian gradient is characterized by $g_x((\operatorname{grad}f)_x,Y)=df_x(Y)$ for every smooth real function $f$, every $x$ and every $Y\in T_xM$; this is the defining identity for the gradient used here.

[F9] Under [A1], Gauss's lemma holds: for $v\in\mathcal E_p$ and $X\in T_pM$, $g_{\exp_p(v)}\bigl(d(\exp_p)_v(v),d(\exp_p)_v(X)\bigr)=g_p(v,X)$ ([[thm-gauss-lemma]]).

[F10] $dF_x:T_xM\to T_{F(x)}N$ is linear for every smooth $F:M\to N$ ([[lem-the-differential-sends-derivations-to-derivations-and-is-linear]]).

[F11] The Levi-Civita connection of $g$ is metric compatible and torsion free: $Xg(Y,Z)=g(\nabla_XY,Z)+g(Y,\nabla_XZ)$ and $\nabla_XY-\nabla_YX=[X,Y]$ for all smooth fields ([[def-levi-civita-connection]]).

[F12] A metric-compatible connection satisfies $\frac{d}{dt}g(V,W)=g(D_tV,W)+g(V,D_tW)$ for sections of the pulled-back tangent bundle along a curve ([[def-metric-compatible-connection-on-a-riemannian-vector-bundle]]).

[F13] $D_t$ is the covariant derivative along a curve; it is real-linear in the field and satisfies $D_t(fV)=f'V+fD_tV$ for functions of the parameter, with one-sided values at included endpoints ([[def-covariant-derivative-along-a-curve]]).

[F14] An affine connection is torsion free if and only if in every coordinate chart $\Gamma^k{}_{ij}=\Gamma^k{}_{ji}$ for all indices ([[prop-torsion-free-is-equivalent-to-symmetric-christoffel-symbols-in-coordinate-frames]]).

[F15] If $V=s\circ\gamma$ near a parameter value for an ambient local section $s$, then $D_tV=(\nabla s)_{\gamma(t)}(\dot\gamma(t))$ ([[thm-covariant-derivative-along-a-curve-is-independent-of-frame-and-extension]]).

[F16] An affinely parametrized geodesic satisfies $D_t\dot\gamma=0$ ([[def-geodesic-of-an-affine-connection]]), and for a metric-compatible connection its speed $|\dot\gamma|_g$ is constant ([[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]]).

[F17] A smooth field $J$ along a geodesic is a Jacobi field exactly when $D_t^2J+R(J,\dot\gamma)\dot\gamma=0$ on its interval ([[def-jacobi-field]]).

[F18] For every prescribed initial data $(J(a),D_tJ(a))$ on an interval with nonempty interior there is exactly one smooth Jacobi field along the geodesic with that data ([[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]).

[F19] Under [A1], for $v\in\mathcal E_p$ and $w\in T_pM$ the unique Jacobi field $J$ along $t\mapsto\exp_p(tv)$ with $J(0)=0$ and $D_tJ(0)=w$ satisfies $J(t)=d(\exp_p)_{tv}(tw)$ for every $t\in[0,1]$ ([[thm-differential-of-the-exponential-map-in-terms-of-jacobi-fields]]).

[F20] Pullbacks of connections are functorial and satisfy $(f^*\nabla)_X(f^*s)(q)=(\nabla s)_{f(q)}(df_qX_q)$ for local sections ([[thm-pullback-connection-is-well-defined-and-functorial]]).

[F21] If $\gamma$ is an affinely parametrized geodesic and $\ell(t)=at+b$ maps an interval with nonempty interior into the interval of $\gamma$, then $\gamma\circ\ell$ is a geodesic, and its speed is $|a|$ times the speed of $\gamma$ ([[prop-affine-reparametrization-of-a-geodesic-is-a-geodesic]]).

[F22] The curvature of an affine connection is $C^\infty$-linear in each of its three slots: $R(fX,Y)Z=fR(X,Y)Z$, $R(X,fY)Z=fR(X,Y)Z$ and $R(X,Y)(fZ)=fR(X,Y)Z$ ([[lem-curvature-is-c-infinity-linear-in-all-three-vector-fields]]).

[F23] The Riemann curvature four-tensor is $\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$ ([[def-riemann-curvature-four-tensor]]).

[F24] The Riemann tensor satisfies the symmetry $\operatorname{Rm}(X,Y,Z,W)=-\operatorname{Rm}(X,Y,W,Z)$ ([[thm-algebraic-symmetries-of-the-riemann-tensor]]).

[F25] The Wronskian $W(t)=g(D_tJ(t),K(t))-g(J(t),D_tK(t))$ of two Jacobi fields along a geodesic is constant ([[lem-wronskian-of-two-jacobi-fields-is-constant]]).

[F26] A continuous real function on an interval whose derivative vanishes at every interior point is constant ([[cor-zero-derivative-implies-constant]]).

[F27] For a smooth real function $f$ the covariant Hessian $\nabla^2f=\nabla(df)$ satisfies $(\nabla^2f)(X,Y)=X(Yf)-(\nabla_XY)f=g(\nabla_X\operatorname{grad}f,Y)$ and is a smooth covariant two-tensor ([[prop-gradient-hessian-and-divergence-connection-formulas]]).

[F28] A connection obeys the laws $\nabla_{fX+gY}s=f\nabla_Xs+g\nabla_Ys$, $\nabla_X(as+bt)=a\nabla_Xs+b\nabla_Xt$ and $\nabla_X(fs)=X(f)s+f\nabla_Xs$ ([[prop-connection-laws-in-directional-form]]).

[F29] If $F:M^m\to N^n$ is smooth and $q\in N$ is a regular value with nonempty fibre, then $F^{-1}(q)$ is an embedded submanifold of codimension $n$ ([[thm-a-regular-level-set-is-an-embedded-submanifold]]); a point is a regular value when every point of its fibre is a regular point, that is, a submersion ([[def-regular-and-critical-points-and-values]]).

[F30] The tangent space of a regular level set is the kernel of the differential: $T_x(F^{-1}(q))=\ker dF_x$ for $x\in F^{-1}(q)$ ([[prop-tangent-space-of-a-regular-level-set-is-the-kernel]]); an embedded submanifold of codimension one is a hypersurface ([[def-codimension-and-hypersurface]]).

[F31] For a normal field $\nu$ along an embedded Riemannian submanifold, the shape operator is $S_\nu X=-(\overline\nabla_X\nu)^\top$, its value at a point depends only on $X_p$ and $\nu_p$, and the components are the orthogonal projections $\nu=V^\top+V^\perp$ ([[def-shape-operator]], [[def-tangential-and-normal-projections-along-a-riemannian-submanifold]]).

[F32] The second fundamental form of an embedded Riemannian submanifold is $\mathrm{II}(X,Y)=(\overline\nabla_XY)^\perp$ ([[def-induced-connection-and-second-fundamental-form]]), and it satisfies $g(S_\nu X,Y)=\overline g(\mathrm{II}(X,Y),\nu)$ ([[thm-weingarten-equation-and-adjointness-of-the-shape-operator]]).

[F33] If $c$ is a smooth curve with $c(0)=x$ and $F$ is smooth, then $dF_x(\dot c(0))$ is the velocity of $F\circ c$ at $0$ ([[thm-the-differential-sends-curve-velocities-to-composite-curve-velocities]]).

[F34] Under [A1], for $v\in T_pM$ and $s\in\mathbb R$ one has $s\in I_{p,v}\Leftrightarrow sv\in\mathcal E_p$, and then $\exp_p(sv)=\gamma_{p,v}(s)$ ([[prop-exponential-map-scales-geodesic-time]]).

[F35] $g$ is a symmetric positive definite bilinear form on each tangent space ([[def-riemannian-metric-and-riemannian-manifold]]).

[F36] In a coordinate frame the Christoffel symbols of an affine connection are the unique smooth functions with $\nabla_{\partial_i}\partial_j=\sum_k\Gamma^k{}_{ij}\partial_k$ ([[def-christoffel-symbols-of-an-affine-connection]]).

## Proof

**Proof technique:** direct. Tangent directions to the distance sphere are extended by radial Jacobi fields through the differential of the exponential map; the variation of the normalized radial family is differentiated using the symmetry of the torsion-free connection; and the resulting endomorphism is identified with $J'(t)J(t)^{-1}$ and with the shape operator of the distance sphere.

1.1 Setting and the distance sphere. By [F1] and [F2], $\mathcal E_p=T_pM$ and $\exp_p$ is smooth on all of $T_pM$; by [F3], $D_p$ is open, $U$ is an open submanifold of $M$, and $\exp_p|_{D_p}$ is a diffeomorphism onto $U$. Since $|v|_g=1$ and $0<t<c_p(v)$ by [F5], the vector $tv$ lies in $D_p$, hence $q=\exp_p(tv)\in U$ and $d(\exp_p)_{tv}:T_pM\to T_qM$ is a linear isomorphism by [F3] and [F4]. By [F6], $r_p$ is smooth on $U$ and $r_p(\exp_p(w))=|w|_g$ on $D_p$; by [F7], $\operatorname{grad}r_p(q)=T=\dot\gamma(t)$ and $|\operatorname{grad}r_p(x)|_g=1$ for all $x\in U$, so $dr_p$ never vanishes on $U$, because $dr_p(Y)=g_q(\operatorname{grad}r_p,Y)$ [F8] and $g_q$ is positive definite [F35]. Put $S_X:=\nabla_X\operatorname{grad}r_p$; by [F27] and [F35], $$g_q(S_X,Y)=(\nabla^2r_p)_q(X,Y)=X(Yr_p)-(\nabla_XY)r_p$$ for vector fields $X,Y$, and [F28] gives $S_{fX}=fS_X$ for smooth functions $f$, so $X\mapsto S_X$ is a smooth endomorphism field on $U$. Since $|v|_g=1$ and $\gamma$ is the unit-speed geodesic with $\dot\gamma(0)=v$, [F16] gives $|T|_g=1$. Finally, $t$ is a regular value of the smooth function $r_p|_U:U\to\mathbb R$ by [F29], because every $x\in(r_p|_U)^{-1}(t)$ has $dr_p(x)\ne0$; the fibre is nonempty since it contains $q$, so $$\Sigma_t:=\{x\in U:r_p(x)=t\}$$ is an embedded hypersurface of $U$ by [F29] and [F30], and $$T_q\Sigma_t=\ker d(r_p)_q=\{Z\in T_qM:g_q(T,Z)=0\}=T^\perp$$ by [F30] and [F8]. Moreover $\nu:=\operatorname{grad}r_p|_{\Sigma_t}$ is a unit normal field along $\Sigma_t$: it is unit by [F7], and at every point it is orthogonal to the tangent space of the level set by [F8]. The sign convention of [F31] is the one used below. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F16, F27, F28, F29, F30, F31, F35]

1.2 The radial pairing identity. We claim that $$g_q\bigl(T,d(\exp_p)_{tv}(Z)\bigr)=g_p(v,Z)\qquad\text{for every }Z\in T_pM.$$ Indeed $tv\in\mathcal E_p=T_pM$, so Gauss's lemma [F9] applied at the base vector $tv$ and the vector $Z$ gives $g_q\bigl(d(\exp_p)_{tv}(tv),d(\exp_p)_{tv}(Z)\bigr)=g_p(tv,Z)$. By [F10], $d(\exp_p)_{tv}(tv)=t\,d(\exp_p)_{tv}(v)$, and $d(\exp_p)_{tv}(v)=\operatorname{grad}r_p(q)=T$ by [F7]; bilinearity [F35] gives $g_q(d(\exp_p)_{tv}(tv),d(\exp_p)_{tv}(Z))=t\,g_q(T,d(\exp_p)_{tv}(Z))$ and $g_p(tv,Z)=t\,g_p(v,Z)$. Since $t>0$, division by $t$ proves the claim. [F7, F9, F10, F35]

1.3 The radial direction. For $0<\sigma\le t$ the point $\gamma(\sigma)=\exp_p(\sigma v)$ has $\operatorname{grad}r_p(\gamma(\sigma))=\dot\gamma(\sigma)$ by [F7], since $0<\sigma<c_p(v)$. Hence the section $(\operatorname{grad}r_p)\circ\gamma$ agrees on $(0,t]$ with $\dot\gamma$, and [F15] with [F16] gives $$S(T)=\nabla_T\operatorname{grad}r_p=D_\sigma\bigl((\operatorname{grad}r_p)\circ\gamma\bigr)\Big|_{\sigma=t}=D_t\dot\gamma(t)=0,$$ the first equality by [F28] (function-linearity in the direction slot). [F7, F15, F16, F28]

2.1 Radial Jacobi fields and the endpoint map. First record the reparametrization rules used below. If $c$ is a smooth curve, $\ell(\tau)=a\tau+b$ with $a\ne0$, and $V$ a smooth section along $c$, then the pullback functoriality [F20] applied to the two pullbacks of $\nabla$ along $c$ and along $c\circ\ell$, together with the direction-linearity [F28] and the definition of $D$ [F13], gives $$D^{c\circ\ell}_\tau(V\circ\ell)(\tau)=a\,(D^c_tV)\bigl(\ell(\tau)\bigr),\qquad D^{c\circ\ell}_\tau{}^2(V\circ\ell)(\tau)=a^2\,(D^c_t{}^2V)\bigl(\ell(\tau)\bigr).$$ If in addition $V$ is a Jacobi field along a geodesic $c$ and $c\circ\ell$ is the geodesic of [F21], then [F17] and the $C^\infty$-linearity of the curvature in its second and third slots [F22] give $$D^2_\tau(V\circ\ell)+R(V\circ\ell,(c\circ\ell)')(c\circ\ell)'=a^2\bigl(D^2_tV+R(V,\dot c)\dot c\bigr)\circ\ell=0,$$ so $V\circ\ell$ is again a Jacobi field. Now fix $W\in T_pM$ and consider the geodesic $\theta(\tau)=\exp_p(\tau\,tv)=\gamma(t\tau)$ on $[0,1]$, a reparametrization of $\gamma$ by the affine map $\sigma\mapsto t\sigma$ which is a geodesic by [F21] and [F34]; here $tv\in\mathcal E_p=T_pM$ by [F1]. By [F18] and [F19], the Jacobi field $K_W$ along $\theta$ with $K_W(0)=0$ and $D_\tau K_W(0)=tW$ satisfies $$K_W(\tau)=d(\exp_p)_{\tau tv}(\tau tW)\qquad(\tau\in[0,1]).$$ Put $J_W(\sigma):=K_W(\sigma/t)$ for $\sigma\in[0,t]$. By the reparametrization rule just proved, $J_W$ is a Jacobi field along $\gamma$ with $$J_W(0)=0,\qquad D_\sigma J_W(0)=\tfrac1t\,D_\tau K_W(0)=W,$$ and evaluating at $\sigma=t$ gives $$J_W(t)=K_W(1)=d(\exp_p)_{tv}(tW),$$ while for general $\sigma\in[0,t]$, $J_W(\sigma)=d(\exp_p)_{\sigma v}(\sigma W)$. In particular the endpoint map $$\Phi:\{v\}^\perp\longrightarrow T^\perp,\qquad W\longmapsto J_W(t)=d(\exp_p)_{tv}(tW)$$ is $\mathbb R$-linear by [F10], injective by [F4] and the invertibility of $d(\exp_p)_{tv}$, and its image lies in $T^\perp$ by step 1.2, since $g_q(T,d(\exp_p)_{tv}(tW))=t\,g_p(v,W)=0$ for $W\perp v$; conversely, if $X\in T^\perp$ and $Z\in T_pM$ is the unique vector with $d(\exp_p)_{tv}(Z)=X$, then step 1.2 gives $g_p(v,Z)=g_q(T,X)=0$, so $Z\perp v$ and $X=\Phi(Z/t)$ lies in the image. Hence $\Phi$ is a linear isomorphism onto $T^\perp$. Finally let $X\in T^\perp$ and put $W:=\tfrac1t\,d(\exp_p)_{tv}^{-1}(X)$, so that $J_W(t)=X$ by [F10]; then $W\perp v$ and $J_W$ is a Jacobi field along $\gamma$ with $J_W(0)=0$ and $J_W(t)=X$, and we write $J_X:=J_W$. It is unique with these properties: if $J$ is any Jacobi field along $\gamma$ with $J(0)=0$ and $J(t)=X$, then $\widetilde J(\tau):=J(t\tau)$ is a Jacobi field along $\theta$ with $\widetilde J(0)=0$ by the reparametrization rule above, so [F19] gives $$X=J(t)=\widetilde J(1)=d(\exp_p)_{tv}\bigl(D_\tau\widetilde J(0)\bigr)=d(\exp_p)_{tv}\bigl(t\,D_\sigma J(0)\bigr),$$ and injectivity of $d(\exp_p)_{tv}$ by [F4] gives $D_\sigma J(0)=W$, so $J=J_W=J_X$ by the initial-data uniqueness [F18]. [F1, F4, F10, F13, F17, F18, F19, F20, F21, F22, F28, F34, step 1.2]

3.1 Normality of the radial Jacobi fields. Let $X\in T^\perp$ and $J=J_X$ as in step 2.1. Put $\varphi(\sigma):=g_{\gamma(\sigma)}(J(\sigma),\dot\gamma(\sigma))$. By [F12], $$\varphi''=g(D^2_\sigma J,\dot\gamma)+2\,g(D_\sigma J,D_\sigma\dot\gamma)+g(J,D^2_\sigma\dot\gamma).$$ The second summand vanishes and $D^2_\sigma\dot\gamma=0$ by [F16] and [F13], while $D^2_\sigma J=-R(J,\dot\gamma)\dot\gamma$ by [F17]. Hence $$\varphi''=-g\bigl(R(J,\dot\gamma)\dot\gamma,\dot\gamma\bigr)=-\operatorname{Rm}(J,\dot\gamma,\dot\gamma,\dot\gamma)=0$$ by [F23] and the skew symmetry in the last two slots [F24]. Moreover $\varphi(0)=g(J(0),\dot\gamma(0))=0$ and, since $D_\sigma J(0)=W$ and $D_\sigma\dot\gamma(0)=0$ by [F16], $$\varphi'(0)=g(W,v)=0,$$ because $W\perp v$. By [F26] applied to $\varphi'$ and then to $\varphi$, $\varphi$ is affine; with vanishing value and slope at $0$ it vanishes identically. Thus $g(J_X,\dot\gamma)\equiv0$, and evaluating the derivative of $\varphi\equiv0$ at $\sigma=t$ gives $g(D_tJ_X(t),T)=0$. [F12, F13, F16, F17, F23, F24, F26, F35, step 2.1]

3.2 The variation of the radial family. Fix $X\in T^\perp$ and let $W:=\tfrac1t\,d(\exp_p)_{tv}^{-1}(X)\in T_pM$, so that $W\perp v$ and $J_X=J_W$ with $J_W(t)=X$ by step 2.1. Define $$v(s):=\frac{v+sW}{|v+sW|_g}\qquad(|s|<\varepsilon).$$ Since $g_p(v,W)=0$, the identity $|v+sW|_g^2=1+s^2|W|_g^2\ge1$ holds by [F35], so $v(s)$ is defined, smooth in $s$, lies in $S_pM$, and $v(0)=v$; differentiating the quotient at $s=0$ gives $$v'(0)=W-\bigl(\partial_s|v+sW|_g\bigr)(0)\,v=W-g_p(v,W)v=W.$$ Define $F(s,\tau):=\exp_p(\tau t\,v(s))$ for $|s|<\varepsilon$ and $\tau\in[0,1]$. This is smooth by [F2] and [F1]; for each fixed $s$ the curve $\tau\mapsto F(s,\tau)=\gamma_{p,v(s)}(\tau t)$ is a geodesic on $[0,t]$ by [F34], and since $\exp_p(tv(s))=\gamma_{p,v(s)}(t)$, the map $s\mapsto F(s,1)$ is the endpoint curve. For fixed $\tau$ the curve $s\mapsto\tau t\,v(s)$ has velocity $\tau tW$ at $s=0$, so [F33] and [F10] give $$\partial_sF(0,\tau)=d(\exp_p)_{\tau tv}(\tau tW)=J_W(\tau t),$$ the last equality being the formula of step 2.1; at $\tau=1$ this is $\partial_sF(0,1)=J_W(t)=X$. Since $D_p$ is open by [F3] and $tv\in D_p$, there is $\delta>0$ such that $tv(s)\in D_p$ for $|s|<\delta$; by the definition of $D_p$ this means $t<c_p(v(s))$, so [F7] gives $$\operatorname{grad}r_p(F(s,1))=d(\exp_p)_{tv(s)}(v(s))=\frac1t\,\partial_\tau F(s,1),$$ where the second equality uses [F10] and $\partial_\tau F(s,1)=d(\exp_p)_{tv(s)}(t\,v(s))$. Let $\alpha(s):=F(s,1)$, so that $\alpha'(0)=X$. By [F15], $$\nabla_X\operatorname{grad}r_p=D_s\bigl((\operatorname{grad}r_p)\circ\alpha\bigr)\Big|_{s=0}=\frac1t\,D_s\partial_\tau F(0,1),$$ the scalar $\tfrac1t$ being constant in $s$ and [F13] justifying the differentiation of the product with the constant function. It remains to commute the two covariant derivatives. In a chart on the target about $q$ write $\partial_\tau F=\sum_k(\partial_\tau F^k)(\partial_k\circ F)$ and $\partial_sF=\sum_j(\partial_sF^j)(\partial_j\circ F)$, with $F^i:=x^i\circ F$. By the real-linearity and coefficient rule of $D$ [F13], the pullback evaluation [F20] on the local sections $\partial_k$ with the direction-linearity [F28], and the Christoffel-symbol identity $\nabla_{\partial_j}\partial_k=\sum_i\Gamma^i{}_{jk}\partial_i$ [F36], one has $$(D_s\partial_\tau F)^i=\partial_s\partial_\tau F^i+\Gamma^i{}_{jk}(F)\,\partial_sF^j\,\partial_\tau F^k,$$ and the same argument with $s,\tau$ exchanged gives $(D_\tau\partial_sF)^i=\partial_\tau\partial_sF^i+\Gamma^i{}_{jk}(F)\,\partial_\tau F^j\,\partial_sF^k$. The mixed partials of $F$ commute and the Levi-Civita connection is torsion free [F11], so its Christoffel symbols are symmetric, $\Gamma^i{}_{jk}=\Gamma^i{}_{kj}$, by [F14]; hence both component formulas agree and $$D_s\partial_\tau F=D_\tau\partial_sF$$ on the parameter rectangle, the displayed identity being intrinsic and the local computation independent of the chart. Therefore $$\nabla_X\operatorname{grad}r_p=\frac1t\,D_\tau\partial_sF(0,1)=\frac1t\,D_\tau\bigl[J_W(\tau t)\bigr]\Big|_{\tau=1}=\frac1t\cdot t\cdot D_\sigma J_W(t)=D_tJ_X(t),$$ where the third equality is the reparametrization rule of step 2.1 applied to the section $J_W$ and the affine map $\tau\mapsto t\tau$, and where $J_W(\tau t)=\partial_sF(0,\tau)$ for every $\tau\in[0,1]$. [A1, F1, F2, F3, F7, F10, F11, F13, F14, F15, F20, F28, F33, F34, F35, F36, step 2.1]

4.1 The Hessian formula. For $X\in T^\perp$ and arbitrary $Y\in T_qM$, [F27] with the endomorphism $S_X=\nabla_X\operatorname{grad}r_p$ of step 1.1 gives $(\nabla^2r_p)_q(X,Y)=g_q(S_X,Y)$, and step 3.2 identifies $S_X=D_tJ_X(t)$; hence $$(\nabla^2r_p)_q(X,Y)=g_q\bigl(D_tJ_X(t),Y\bigr),$$ which is assertion (b). Taking $Y=T$ gives zero by step 3.1, and replacing $X$ by $T$ gives $(\nabla^2r_p)_q(T,Y)=g_q(S_T,Y)=0$ for every $Y$ by step 1.3. In particular $\nabla^2r_p$ is determined by the normal radial Jacobi fields $J_X$, and its radial direction is annihilated. [F27, step 1.1, step 1.3, step 3.1, step 3.2]

5.1 The normal shape operator and the second fundamental form. By step 3.2, $S(X)=D_tJ_X(t)$ for every $X\in T^\perp$, and by step 1.3, $S(T)=0$; these two prescriptions determine $S$ on all of $T_qM$. Given $X\in T^\perp$ write $X=J(t)W$ with $W\perp v$ as in step 2.1; then $J_X=J_W$ and $$S(X)=D_tJ_W(t)=\bigl(D_tJ(t)\bigr)(W)=\bigl(D_tJ(t)\circ J(t)^{-1}\bigr)(X),$$ so on $T^\perp$ the endomorphism $S$ is $D_tJ(t)\circ J(t)^{-1}$. It is $g$-self-adjoint on $T^\perp$: for $X=J(t)W$ and $X'=J(t)W'$ with $W,W'\perp v$, the Wronskian [F25] of the Jacobi fields $J_W,J_{W'}$ is constant, and at $\sigma=0$ it equals $g(D_\sigma J_W(0),J_{W'}(0))-g(J_W(0),D_\sigma J_{W'}(0))=g(W,0)-g(0,W')=0$; hence $$g_q(SX,X')=g_q\bigl(D_tJ_W(t),J_{W'}(t)\bigr)=g_q\bigl(J_W(t),D_tJ_{W'}(t)\bigr)=g_q(X,SX'),$$ since $SX'=D_tJ_{W'}(t)$, the symmetry of $g$ being [F35]. Finally, $\Sigma_t$ is an embedded hypersurface of the open Riemannian manifold $U$ with unit normal field $\nu=\operatorname{grad}r_p|_{\Sigma_t}$ by step 1.1; this field is orthogonal to $\Sigma_t$ by [F8] and unit by [F7], and it is the outward normal because $dr_p(\nu)=g_q(\nu,\nu)=1>0$ along the increasing direction of $r_p$. For $X\in T_q\Sigma_t=T^\perp$ and $Y\in T_q\Sigma_t$, the shape operator of [F31] is $$S_\nu X=-\bigl(\nabla_X\nu\bigr)^\top=-\bigl(\nabla_X\operatorname{grad}r_p\bigr)^\top=-S(X)=-D_tJ_X(t),$$ because $\nabla_X\operatorname{grad}r_p=S(X)$ is orthogonal to $T$ by step 3.2 and step 3.1 and $T_q\Sigma_t=T^\perp$; and the value at $q$ depends only on $X_q$ and $\nu_q$ by [F31]. By [F32] and $|\nu|_g=1$, the second fundamental form is the normal vector $$\mathrm{II}(X,Y)=g_q(S_\nu X,Y)\,\nu=-g_q\bigl(D_tJ_X(t),Y\bigr)\,\nu,$$ which is assertion (c). Here $T_q\Sigma_t=T^\perp$ by step 1.1 and $|\nu|_g=1$ by [F7]. [F7, F8, F25, F31, F32, F35, step 1.1, step 1.3, step 2.1, step 3.1, step 3.2, step 4.1]

6.1 Boundary, endpoint and choice audit. In dimension zero $T_pM=\{0_p\}$, so $S_pM=\varnothing$ by [F5], there is no unit direction $v$, and the assertion is vacuous; the empty manifold carries no base point $p$, and the statement also covers every $n\ge1$. The parameter range $0<t<c_p(v)$ is open and both endpoints are genuinely excluded: at $t=0$ one has $q=p$, while the regularity theorem [F6] gives the smoothness of $r_p$ only on the open set $U=M\setminus(\{p\}\cup\operatorname{Cut}(p))$, which does not contain $p$, so no Hessian at $p$ is asserted; for finite $t=c_p(v)$ the point $q$ lies in $\operatorname{Cut}(p)$ by [F5], hence outside $U$, and again no Hessian is asserted there; the case $c_p(v)=+\infty$ is allowed and then every $t>0$ is covered. The zero vector is never used: $v$ is unit, so $tv\ne0$ and $J_X$ is defined for every $X$, including the degenerate direction $X=0$, for which $W=0$, $J_X=0$ and both sides of (b) vanish, while (a) asserts existence and uniqueness of the zero field. The construction selects nothing arbitrary: $W$ is the value of a linear inverse at $X$ by [F4], $v(s)$ is an explicit normalized curve, and the inverse $J(t)^{-1}$ is the inverse of the linear isomorphism of step 2.1; the choice assumption [A1] is inherited exactly through the completeness, exponential, cut-time, Gauss and level-set suppliers [F3, F4, F9, F29, F34], and no further countable selection is made. The statement contains no biconditional: (a) is an existence and uniqueness assertion with the normal and endpoint properties, (b) and (c) are identities, and the equivalence used in step 2.1, namely $g_q(T,X)=t\,g_p(v,W)$ for the single pair at hand, comes from the cited Gauss lemma [F9]. Assertion (b) uses only unit directions $v$; the metric and its positive definiteness [F35] are used at the displayed pairings, and no compactness or positive injectivity radius is assumed. [A1, F3, F4, F5, F6, F9, F29, F34, F35, step 1.1, step 5.1] ∎

## Source locator

Eschenburg, *Comparison Theorems in Riemannian Geometry*, Section 2, printed pp.6-9, computes for a unit gradient field $V=\nabla f$ the operator $A=DV=D\nabla f$ as the Hessian of $f$, notes that $A$ restricted to a level hypersurface is that hypersurface's shape operator, and records $J'=AJ$ for the Jacobi fields of the equidistant family; Section 5, Lemma 5.3 and display (5.11), printed p.19, give $d(\exp_p)_{tv}e_i=J_i(t)/t$ for an orthonormal basis of $v^\perp$; Section 6, printed p.21, states for the distance function $\rho$ that $V=\nabla\rho$ is unit outside the cut locus, that $D\nabla\rho$ vanishes on $\mathbb R V$ and that its restriction to $V^\perp$ is the shape operator. Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, printed pp.173-190, treats Jacobi fields and the identification $J_W(1)=(d\exp_p)_{tv}(W)$; Datar, *Lectures on Riemannian Geometry*, Lecture 23, section 23.2, printed pp.167-169, records the regularity of the distance and its unit radial gradient outside the cut locus. The proof above derives the statements from the library's Jacobi-field, Gauss-lemma, level-set and shape-operator suppliers; no source text is quoted.
