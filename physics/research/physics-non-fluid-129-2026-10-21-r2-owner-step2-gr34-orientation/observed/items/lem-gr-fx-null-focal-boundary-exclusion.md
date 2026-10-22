---
id: lem-gr-fx-null-focal-boundary-exclusion
kind: lemma
title: "Null focal points exclude later horismos generators"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
physical_scope: "Local causal-geometric deduction; no completeness, curvature singularity, or empirical statement is asserted."
deps:
  - def-gr-fx-null-screen-geometry
  - lem-gr-fx-null-screen-index-form
  - def-gr-causal-curves-and-reachability
  - def-countable-choice
  - def-dependent-choice
  - thm-gr-jacobi-equation-and-geodesic-deviation
  - thm-gr-local-geodesics-and-exponential-map
  - thm-gr-convex-normal-neighborhoods
  - thm-gr-normal-neighborhood-causal-cone
  - thm-smooth-dependence-of-ode-solutions-on-parameters
  - lem-gr-push-up-rule
dependency_roles:
  def-gr-fx-null-screen-geometry: mathematical-premise
  lem-gr-fx-null-screen-index-form: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  thm-gr-jacobi-equation-and-geodesic-deviation: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "E. Gourgoulhon and J. L. Jaramillo, A 3+1 perspective on null hypersurfaces and isolated horizons, Physics Reports 423 (2006), arXiv:gr-qc/0503113v2: §§2.6-2.7 and 5.5-5.8"
      url: "https://arxiv.org/pdf/gr-qc/0503113"
    - title: "Edward Witten, Light Rays, Singularities, and All That, Clay Mathematics Institute lecture notes, full 106-page PDF: §§8.2 and 8.4-8.5"
      url: "https://www.claymath.org/wp-content/uploads/2022/03/WittenLectures.pdf"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and Dependent Choice, as required by the supplied
causal-curve and push-up results. Let $(M,g,N)$ be a smooth time-oriented
Lorentzian four-manifold, and let $S$ be a smooth spacelike embedded
two-surface. Put $I^+(S):=\bigcup_{p\in S}I^+(p)$,
$J^+(S):=\bigcup_{p\in S}J^+(p)$, and
$E^+(S):=J^+(S)\setminus I^+(S)$, using the causal-reachability conventions
of [[def-gr-causal-curves-and-reachability]]. Let
$\gamma:[0,L_1]\to M$ be a future affinely parametrized null geodesic
orthogonal to $S$ at $p=\gamma(0)$, with initial tangent $\ell$ and null
second fundamental form $\chi_\ell$ as in
[[def-gr-fx-null-screen-geometry]]. A **focal instant** $\lambda_0>0$ is an
instant at which a nonzero screen Jacobi field arising from variation of the
initial point in $S$, with initial screen derivative determined by
$q^{-1}\chi_\ell$, has zero screen value.

If $\lambda_0$ is a focal instant, there is $\varepsilon>0$ such that
$$\gamma(\lambda)\in I^+(S)\qquad (\lambda_0<\lambda<\lambda_0+\varepsilon).$$
Consequently, no point on this portion of the generator belongs to
$E^+(S)$. The conclusion is local along the generator and does not assert
geodesic incompleteness or curvature blow-up. In an SI interpretation take
$x^0=ct$ and $\lambda$ in metres; the proof itself is independent of units.

## Statement references

[[def-gr-fx-null-screen-geometry]]

[[lem-gr-fx-null-screen-index-form]]

[[def-gr-causal-curves-and-reachability]]

[[thm-gr-jacobi-equation-and-geodesic-deviation]]

[[thm-gr-convex-normal-neighborhoods]]

[[thm-gr-normal-neighborhood-causal-cone]]

[[lem-gr-push-up-rule]]

[[def-countable-choice]]

[[def-dependent-choice]]

## Facts & Assumptions

**Given:** The spacelike initial surface, future null geodesic normal to it,
the focal screen Jacobi field, and Countable Choice and Dependent Choice.

[F1] On the positive screen $\ell^\perp/\mathbb R\ell$, the null second
fundamental form is symmetric and its endomorphism is
$B_0=q^{-1}\chi_\ell$ ([[def-gr-fx-null-screen-geometry]]).

[F2] A geodesic variation field satisfies the Jacobi equation
$D_\ell^2J=R(\ell,J)\ell$; its initial value and derivative determine it
uniquely ([[thm-gr-jacobi-equation-and-geodesic-deviation]]).

[F3] The symmetric screen index form with the $+\chi_\ell$ initial boundary
term equals the energy second variation for variations starting on $S$ and
ending at $\gamma(L)$; every admissible screen field is realized by such a
variation ([[lem-gr-fx-null-screen-index-form]]).

[F4] Every point has arbitrarily small strictly convex normal neighborhoods;
in one such neighborhood, causal and timelike reachability are characterized
by future causal and future timelike position vectors, respectively
([[thm-gr-convex-normal-neighborhoods]],
[[thm-gr-normal-neighborhood-causal-cone]]).

[F5] A future causal curve containing a future timelike subcurve has
chronologically related endpoints, under Countable Choice and Dependent
Choice ([[lem-gr-push-up-rule]] clause (c),
[[def-countable-choice]], [[def-dependent-choice]]).

[F6] $q\in I^+(p)$ means a future timelike curve joins $p$ to $q$;
$I^+(S)$, $J^+(S)$ and $E^+(S)$ have the unions and set difference in the
Statement ([[def-gr-causal-curves-and-reachability]]).

[F7] The exponential map is smooth on a neighborhood of the zero section,
and its differential there is invertible, giving the local exponential
charts used to realize and adjust variations
([[thm-gr-local-geodesics-and-exponential-map]]).

[F8] Solutions of a smooth local ordinary differential equation exist on a
common short interval and depend continuously on the initial data and
parameters ([[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

[A1] The focal field is nonzero in the screen quotient and vanishes there at
$\lambda_0$; all geodesic and variation data exist on a slightly longer
interval. This is the local interval asserted in the conclusion.

## Proof

**Given:** [F1]–[F8] and [A1].

1.1 Choose a parallel orthonormal frame of the positive screen along the
geodesic segment and write $\mathcal R[X]:=[R(X,\ell)\ell]$. The focal field
$J$ satisfies $J''+\mathcal RJ=0$ in this frame. Its screen derivative
$J'(\lambda_0)$ is nonzero: otherwise its zero value and derivative at
$\lambda_0$ would force $J$ to vanish identically by [F2], contrary to [A1].
The screen initial data are $J(0)=X\in T_pS$ and $J'(0)=B_0X$, so
$\langle J'(0),X\rangle=\chi_\ell(X,X)$. [F1, F2, F3, A1, construct]

2.1 Fix $L>\lambda_0$ sufficiently close to $\lambda_0$. On $[0,L]$ let
$Y=J$ up to $\lambda_0$ and $Y=0$ after $\lambda_0$. This continuous
piecewise-smooth screen field has $Y(0)=X$ and $Y(L)=0$. Let $I$ be the
screen index form supplied by [F3]. Its displayed formula extends
continuously to piecewise-smooth $H^1$ fields: in a parallel frame the
curvature coefficients are bounded on $[0,L]$, the integral terms are
continuous in $H^1$, and the endpoint trace is continuous because
$$|V(0)|\le L^{-1/2}\|V\|_{L^2}+L^{1/2}\|D_\ell V\|_{L^2},$$
obtained by integrating $V(0)=V(t)-\int_0^tD_\ell V\,d\lambda$ over
$0\le t\le L$. Thus $I(Y,Y)$ is defined. Integrating the Jacobi equation on
$[0,\lambda_0]$ gives
$$I(Y,Y)=\langle J'(\lambda_0),J(\lambda_0)\rangle- \langle J'(0),X\rangle+\chi_\ell(X,X)=0,$$
since the screen value at $\lambda_0$ is zero and
$\langle J'(0),X\rangle=\chi_\ell(X,X)$. [F1, F2, F3, step 1.1, algebra]

3.1 Choose a smooth screen field $W$ supported in a small interval about
$\lambda_0$, zero at both endpoints, and with
$W(\lambda_0)=-J'(\lambda_0)$. Integration by parts on each side of
$\lambda_0$ yields
$$I(Y,W)=\langle J'(\lambda_0),W(\lambda_0)\rangle =-|J'(\lambda_0)|^2<0.$$
Therefore $I(Y+\delta W,Y+\delta W)<0$ for sufficiently small $\delta>0$.
In the parallel frame, smooth the single derivative corner of $Y$ on
$[\lambda_0-\epsilon,\lambda_0+\epsilon]$ by a cubic interpolant matching
the values and first derivatives at the two endpoints, leaving the field
unchanged near $0$ and $L$. Since $Y$ is continuous and piecewise smooth,
the interpolant and its derivative stay bounded as $\epsilon\downarrow0$;
the $H^1$ error tends to zero because its support has length $2\epsilon$.
Adding $\delta W$ preserves smoothness, so continuity of $I$ gives a smooth
field $V$ with $V(0)\in T_pS$, $V(L)=0$ and $I(V,V)<0$. [F1, F2, F3,
step 1.1, step 2.1, algebra]

4.1 By [F3], this smooth field is realized by a curve variation $F_s$ with
$F_s(0)\in S$, $F_s(L)=\gamma(L)$, and screen variational field $V$; its
energy satisfies $E''(0)=I(V,V)<0$. The first-variation formula gives
$E'(0)=[g(V,\ell)]_0^L=0$, since the final point is fixed and the initial
field is tangent to $S$ and orthogonal to $\ell$. Also $E(0)=0$ because
$\gamma$ is null. The pointwise first derivative of
$g(\partial_\lambda F_s,\partial_\lambda F_s)$ vanishes because
$D_\lambda\ell=0$ and $V$ is a screen field. Hence, uniformly on the compact
interval,
$$g(\partial_\lambda F_s,\partial_\lambda F_s) =s^2h(\lambda)+O(s^3),\qquad \int_0^Lh(\lambda)\,d\lambda=I(V,V)<0.$$
[F1, F3, step 3.1, algebra]

5.1 Here is the longitudinal correction that turns this negative index into
a causal curve with a timelike subcurve. Choose a parallel null field $n$
along $\gamma$ with $g(\ell,n)=-1$, and extend $n$ smoothly to the nearby
curves in the local exponential charts; write $n_s(\lambda)$ for the
extension, with $n_0(\lambda)=n(\lambda)$. Use the exponential maps along a
finite subdivision of the compact geodesic segment to define the corrected
variation
$$\widetilde F_s(\lambda):= \exp_{F_s(\lambda)}\!\bigl(s^2a_s(\lambda)n_s(\lambda)\bigr),$$
where $F_s$ is the endpoint-fixed variation from step 4.1.
Choose
a smooth function $w\ge0$, supported in the short interval about
$\lambda_0$ contained in one convex normal neighborhood, positive on a
smaller interval, and normalized by $\int_0^Lw=-I(V,V)$. Add the displacement
$s^2a_s(\lambda)n(\lambda)$, with $a_s(0)=0$, and choose its derivative so
the corrected squared velocity of $\widetilde F_s$ is exactly
$-s^2c w(\lambda)$ for a scalar $c>0$. Divide the squared-velocity equation
by $s^2$; its derivative with respect to $a_s'$ at $s=0$ is
$2g(\ell,n)=-2$, so it remains nonzero for small $s$ and determines
$a_s'$ smoothly. At second order the equation is
$a_s'=(h+cw)/2+O(s)$, and hence
$$a_s(L)=\frac12\left(I(V,V)+c\int_0^Lw\right)+O(s).$$
At $c=1$ the leading term vanishes; for fixed small $\eta>0$, $a_s(L)$ has
opposite signs at $c=1-\eta$ and $c=1+\eta$ for all sufficiently small
$s$. Continuity therefore gives some
$c_s\in(1-\eta,1+\eta)$ with $a_s(L)=0$. The correction fixes both
endpoints; its initial displacement is zero, so the initial point still
lies on $S$. The corrected curve is future causal because its velocity is
close to $\ell$, and it is strictly timelike where $w>0$. [F1, F3, F7, F8,
step 4.1, construct, algebra]

6.1 The timelike subcurve in step 5.1 lies in a convex normal neighborhood.
By [F4], its endpoints have a future timelike position vector, so it can be
replaced by the corresponding future timelike radial geodesic. The rest of
the corrected path is future causal. The push-up rule [F5] then gives
$\gamma(L)\in I^+(S)$ by [F6]. The field $Y$ remains zero after
$\lambda_0$, and step 3.1 yields a negative index field for every
sufficiently close $L>\lambda_0$; thus the argument applies to every such
$L$. [F4, F5, F6, step 3.1, step 5.1]

7.1 Taking $\varepsilon>0$ small enough that all the preceding constructions
hold for $L\in(\lambda_0,\lambda_0+\varepsilon)$ proves the claimed
chronological membership. By the definition $E^+(S)=J^+(S)\setminus I^+(S)$,
no such point can lie in $E^+(S)$. This is a causal-boundary conclusion and
contains no completeness or curvature-divergence assertion. [F6, A1,
step 6.1] ∎

## Remarks

The screen index form has a positive boundary contribution $+\chi_\ell$ for
the convention $\chi_\ell(X,Y)=g(\nabla_X\ell,Y)$. Reversing that sign would
invalidate the Jacobi boundary cancellation in step 2.1. The proof is local
and uses only a short interval after the focal instant.
