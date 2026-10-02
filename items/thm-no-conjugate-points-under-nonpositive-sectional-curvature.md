---
id: thm-no-conjugate-points-under-nonpositive-sectional-curvature
kind: theorem
title: No conjugate points under nonpositive sectional curvature
status: published
origin: pipeline
deps:
  - def-countable-choice
  - def-jacobi-field
  - def-sectional-curvature
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - def-riemann-curvature-four-tensor
  - thm-algebraic-symmetries-of-the-riemann-tensor
  - lem-curvature-is-c-infinity-linear-in-all-three-vector-fields
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - cor-second-derivative-characterises-convexity
  - prop-geodesics-have-constant-speed-for-a-metric-compatible-connection
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
      locator: "§§20.1 and 24.3, pp.147–149, 178–179: convexity argument for K<=0 and the absence of conjugate points"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§5, pp.17–19: the Cartan–Hadamard route, where the convexity of |J|^2 under K<=0 is used"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let $(M,g)$ be a Riemannian manifold, let $I\subseteq\mathbb R$ be an interval
with nonempty interior and $0\in I$, and let $\gamma:I\to M$ be a unit-speed
geodesic of the Levi-Civita connection. Suppose that the sectional curvature is
nonpositive: $K(\sigma)\le 0$ for every two-dimensional subspace $\sigma$ of
every tangent space $T_pM$. Let $J$ be a Jacobi field along $\gamma$ with
$J(0)=0$. If $J(t_1)=0$ for some $t_1\in I$ with $t_1>0$, then $J\equiv 0$ on
$I$.

Consequently, a nonzero Jacobi field along a unit-speed geodesic with
$J(0)=0$ has no positive zero: $J(t)\neq0$ for every $t\in I$ with $t>0$. More
generally, no two distinct points of $I$ are conjugate along $\gamma$, so a
unit-speed geodesic in a manifold of nonpositive sectional curvature has no
conjugate points. Replacing $\gamma$ by the reversed geodesic gives the same
statement for negative times. In dimensions $n=0$ and $n=1$ the curvature
hypothesis is vacuous and the conclusion is the classical statement that a
tangential Jacobi field vanishing twice is zero.

## Facts & Assumptions

**Given:** The Riemannian manifold $(M,g)$, the interval $I$ with $0\in I$, the
unit-speed geodesic $\gamma:I\to M$, the Jacobi field $J$ with $J(0)=0$,
and the inherited $\mathrm{AC}_\omega$.

[A1] The inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]) is used
through the sectional-curvature and full curvature-symmetry interfaces
[F2] and [F5]; the convexity and uniqueness argument makes no additional
choice.

[F1] Put $T:=\dot\gamma$. A smooth field $J$ along $\gamma$ is a Jacobi field
exactly when $D_t^2J+R(J,T)T=0$, with the curvature convention
$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ and the one-sided
interpretation of derivatives at included endpoints
([[def-jacobi-field]]).

[F2] The sectional curvature of the plane spanned by independent $X,Y$ is
$K(\sigma)=\operatorname{Rm}(X,Y,Y,X)/(g(X,X)g(Y,Y)-g(X,Y)^2)$, and
$\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$ ([[def-sectional-curvature]],
[[def-riemann-curvature-four-tensor]]). In particular, if $T$ is unit and
$X\perp T$ is nonzero, then $g(R(X,T)T,X)=K(\sigma)|X|^2$ for
$\sigma=\operatorname{span}(X,T)$.

[F3] For $a<b$ in $I$, the parameter values $a$ and $b$ are conjugate along
$\gamma$ when some nonzero Jacobi field along $\gamma$ vanishes at both $a$ and
$b$; if $\gamma$ is constant there are no conjugate pairs
([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]).

[F4] For every $a\in I$ and every $v,w\in T_{\gamma(a)}M$ there is exactly one
Jacobi field along $\gamma$ on all of $I$ with $J(a)=v$ and $D_tJ(a)=w$
([[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]); in
particular a Jacobi field with $J(a)=0$ and $D_tJ(a)=0$ vanishes identically on
$I$.

[F5] Curvature is $C^\infty$-linear in each slot and satisfies
$\operatorname{Rm}(X,Y,Z,W)=-\operatorname{Rm}(Y,X,Z,W)$ and
$\operatorname{Rm}(X,Y,Z,W)=-\operatorname{Rm}(X,Y,W,Z)$; hence
$R(T,T)T=0$ and $g(R(X,Y)Z,Z)=0$ for all $X,Y,Z$
([[thm-algebraic-symmetries-of-the-riemann-tensor]],
[[lem-curvature-is-c-infinity-linear-in-all-three-vector-fields]]).

[F6] A unit-speed geodesic has constant unit speed: $g(T,T)=1$ throughout $I$
([[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]]).

[F7] A $C^2$ function on an interval with nonnegative second derivative is
convex; on a closed subinterval its values lie below the chord
([[cor-second-derivative-characterises-convexity]]).

## Proof

1.1 The energy identity. [F1, F6, given]
Put $\varphi(t):=g_{\gamma(t)}(J(t),J(t))=|J(t)|^2$, a smooth nonnegative
function on $I$. Differentiating twice along $\gamma$ and using [F1] gives
$$\varphi'=2g(D_tJ,J),\qquad \varphi''=2g(D_t^2J,J)+2|D_tJ|^2=2|D_tJ|^2-2g(R(J,T)T,J).$$
At an included endpoint the identity is read with one-sided derivatives, which
is exactly the convention fixed by [F1]. [F1, F6, given]

2.1 The curvature term is nonpositive. [A1, F2, F5, F6, step 1.1]
Write $f:=g(J,T)$ and split $J=fT+J^\perp$ with $g(J^\perp,T)=0$; this is an
orthogonal decomposition of the tangent space at each point because $|T|=1$ by
[F6]. Linearity of $R$ in its first slot and [F5] give
$R(J,T)T=R(J^\perp,T)T+fR(T,T)T=R(J^\perp,T)T$. Moreover [F5] gives
$g(R(J^\perp,T)T,T)=0$, so
$$g(R(J,T)T,J)=g(R(J^\perp,T)T,J^\perp)+f\,g(R(J^\perp,T)T,T)=g(R(J^\perp,T)T,J^\perp).$$
At a time $t$ with $J^\perp(t)=0$ both sides vanish. At a time with
$J^\perp(t)\neq0$, the vectors $J^\perp(t)$ and $T(t)$ are orthogonal and
nonzero, so $\sigma_t:=\operatorname{span}(J^\perp(t),T(t))$ is a tangent
two-plane, and [F2] applied with $X=J^\perp(t)$ gives
$$g(R(J^\perp,T)T,J^\perp)=\operatorname{Rm}(J^\perp,T,T,J^\perp)=K(\sigma_t)\,|J^\perp(t)|^2\le0.$$
Thus $g(R(J,T)T,J)\le0$ at every $t\in I$, and step 1.1 yields
$\varphi''\ge2|D_tJ|^2\ge0$. [A1, F2, F5, F6, step 1.1]

3.1 $\varphi$ is convex. [F7, step 2.1]
By step 2.1 the second derivative of the $C^2$ function $\varphi$ is
nonnegative on the interior of $I$; at included endpoints the one-sided
second derivatives exist and are nonnegative as well. Hence by [F7] the
function $\varphi$ is convex on $I$: for $s<t<u$ in $I$,
$$\varphi(t)\le\frac{u-t}{u-s}\,\varphi(s)+\frac{t-s}{u-s}\,\varphi(u).$$
[F7, step 2.1]

4.1 Vanishing at two times forces $J\equiv0$. [F4, F7, step 3.1, given]
Assume $J(0)=0$ and $J(t_1)=0$ with $t_1>0$. Then
$\varphi(0)=\varphi(t_1)=0$, and $\varphi\ge0$ because it is a squared norm.
Applying the convexity inequality of step 3.1 with $s=0$, $u=t_1$ gives
$\varphi(t)\le0$, hence $\varphi(t)=0$ and $J(t)=0$, for every $t\in[0,t_1]$;
so $J$ vanishes identically on $[0,t_1]$. Choose $t_0\in(0,t_1)$. Then
$J(t_0)=0$, and since $J$ is identically zero on an interval around $t_0$, also
$D_tJ(t_0)=0$. By the uniqueness statement of [F4] the zero field is the only
Jacobi field with these initial data, so $J\equiv0$ on all of $I$. [F4, F7, step 3.1, given]

5.1 Consequences and boundary cases. [F3, F4, step 4.1]
A nonzero Jacobi field with $J(0)=0$ therefore has no positive zero in $I$.
For a general conjugate pair $t_1<t_2$ in $I$, the shifted curve
$\tilde\gamma(s):=\gamma(t_1+s)$ is again a unit-speed geodesic, the shifted
field $\tilde J(s):=J(t_1+s)$ is again Jacobi, and $\tilde J(0)=0$; if a
nonzero Jacobi field vanished at both $t_1$ and $t_2$ then step 4.1 would force
it to vanish identically, contradicting [F3]. So no two distinct points of $I$
are conjugate along $\gamma$, and by the same shift argument with $\gamma$
reversed the conclusion is symmetric in the two endpoints. If $\gamma$ is
constant, [F3] already gives the conclusion and $J$ is affine in the fixed tangent space, so
the claim holds. If $M$ has dimension $0$ the only field is $0$. If $M$ has
dimension $1$, then $J^\perp\equiv0$ and step 2.1 reduces to
$\varphi''=2|D_tJ|^2\ge0$, so the same convexity argument applies without any
two-plane. If $0$ or $t_1$ is an included endpoint of $I$, the second
derivative in step 1.1 is one-sided and is nonnegative by step 2.1, and the
convexity inequality of [F7] is applied on the closed interval $[0,t_1]$;
nothing changes. [F3, F4, step 4.1] ∎
