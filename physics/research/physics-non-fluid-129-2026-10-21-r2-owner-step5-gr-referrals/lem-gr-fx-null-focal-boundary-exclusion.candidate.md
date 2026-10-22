---
id: lem-gr-fx-null-focal-boundary-exclusion
kind: lemma
title: "Null focal points exclude later horismos generators"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
physical_scope: "Local causal-geometric deduction; no completeness, curvature
  singularity, or empirical statement is asserted."
deps:
  - def-gr-fx-null-screen-geometry
  - lem-gr-fx-null-screen-index-form
  - def-gr-smooth-lorentzian-objects
  - def-embedded-submanifold-and-slice-chart
  - def-gr-curvature-tensor-and-derived-tensors
  - def-covariant-derivative-along-a-curve
  - def-gr-causal-curves-and-reachability
  - def-countable-choice
  - def-dependent-choice
  - thm-gr-jacobi-equation-and-geodesic-deviation
  - thm-gr-local-geodesics-and-exponential-map
  - thm-gr-convex-normal-neighborhoods
  - thm-gr-normal-neighborhood-causal-cone
  - thm-smooth-dependence-of-ode-solutions-on-parameters
  - thm-smooth-inverse-function-theorem-on-manifolds
  - thm-intermediate-value
  - lem-gr-push-up-rule
  - def-the-standard-smooth-step-function
dependency_roles:
  def-gr-fx-null-screen-geometry: mathematical-premise
  lem-gr-fx-null-screen-index-form: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  thm-gr-jacobi-equation-and-geodesic-deviation: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  thm-intermediate-value: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  def-the-standard-smooth-step-function: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "E. Gourgoulhon and J. L. Jaramillo, A 3+1 perspective on null
        hypersurfaces and isolated horizons, Physics Reports 423 (2006),
        arXiv:gr-qc/0503113v2: §§2.6-2.7 and 5.5-5.8"
      url: "https://arxiv.org/pdf/gr-qc/0503113"
    - title: "Edward Witten, Light Rays, Singularities, and All That, Clay Mathematics
        Institute lecture notes, full 106-page PDF: §§8.2 and 8.4-8.5"
      url: "https://www.claymath.org/wp-content/uploads/2022/03/WittenLectures.pdf"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and Dependent Choice, as required by the supplied
causal-curve and push-up results. Let $(M,g,N)$ be a smooth time-oriented
Lorentzian four-manifold. Let $S$ be a smooth embedded two-manifold without
boundary whose induced metric $q:=g|_{TS}$ is positive definite, and let
$p\in S$. Choose an open neighborhood $U\subseteq S$ of $p$ and a smooth
future null normal field $\ell$ along $U$, so
$g(\ell_q,Y)=0$ for every $q\in U$ and $Y\in T_qS$.
Let $\gamma:[0,L_1]\to M$ be smooth up to its endpoints, with
$$\gamma(0)=p,\qquad \dot\gamma(0)=\ell_p,\qquad g(\dot\gamma,\dot\gamma)=0,\qquad g(\dot\gamma,N)<0,\qquad D_\lambda\dot\gamma=0.$$
Here $D_\lambda$ is covariant differentiation along the curve. Put
$\chi_\ell(X,Y):=g(\nabla_X\ell,Y)$ as in
[[def-gr-fx-null-screen-geometry]], and set $B_0:T_pS\to T_pS$ by
$q(B_0X,Y)=\chi_\ell(X,Y)$ for all $X,Y\in T_pS$.
The screen along $\gamma$ is
$$\mathscr S_\lambda:=\dot\gamma(\lambda)^\perp/\mathbb R\dot\gamma(\lambda),$$
with its positive metric and screen derivative $\mathcal D_\lambda$ from
[[def-gr-fx-null-screen-geometry]]. Define
$$\mathcal R_\lambda[X]:=[R(X,\dot\gamma)\dot\gamma].$$
A **normal screen Jacobi field** is a smooth section $J$ of $\mathscr S$ that
satisfies $\mathcal D_\lambda^2J+\mathcal R_\lambda J=0$ and the initial
conditions $J(0)=[X]$, $\mathcal D_\lambda J(0)=B_0X$ for some
$X\in T_pS$. A **focal instant** $\lambda_0\in(0,L_1]$ is a parameter at
which such a field with $X\ne0$ has $J(\lambda_0)=0$.

Put $I^+(S):=\bigcup_{p\in S}I^+(p)$,
$J^+(S):=\bigcup_{p\in S}J^+(p)$, and
$E^+(S):=J^+(S)\setminus I^+(S)$, using the causal-reachability conventions
of [[def-gr-causal-curves-and-reachability]].

If $\lambda_0$ is a focal instant, let $\widetilde\gamma:I\to M$ be the
unique maximal affine geodesic extension of $\gamma$, where $I$ is an open
interval containing $[0,L_1]$ and
$\widetilde\gamma|_{[0,L_1]}=\gamma$. There is $\varepsilon>0$ with
$[0,\lambda_0+\varepsilon]\subset I$ such that
$$\widetilde\gamma(\lambda)\in I^+(S)\qquad (\lambda_0<\lambda<\lambda_0+\varepsilon).$$
Consequently, no point on this portion of the generator belongs to
$E^+(S)$. The conclusion is local along the generator and does not assert
geodesic incompleteness or curvature blow-up. In an SI interpretation take
$x^0=ct$ and $\lambda$ in metres; the proof itself is independent of units.

## Statement references

[[def-gr-fx-null-screen-geometry]]

[[lem-gr-fx-null-screen-index-form]]

[[def-gr-smooth-lorentzian-objects]]

[[def-embedded-submanifold-and-slice-chart]]

[[def-gr-curvature-tensor-and-derived-tensors]]

[[def-covariant-derivative-along-a-curve]]

[[def-gr-causal-curves-and-reachability]]

[[thm-gr-jacobi-equation-and-geodesic-deviation]]

[[thm-gr-convex-normal-neighborhoods]]

[[thm-gr-normal-neighborhood-causal-cone]]

[[lem-gr-push-up-rule]]

[[def-countable-choice]]

[[def-dependent-choice]]

## Facts & Assumptions

**Given:** The spacelike initial surface, future null geodesic normal to it, the focal screen Jacobi field, and Countable Choice and Dependent Choice.

[F1] On the positive screen $\ell^\perp/\mathbb R\ell$, the null second fundamental form is symmetric and its endomorphism is $B_0=q^{-1}\chi_\ell$ ([[def-gr-fx-null-screen-geometry]]).

[F2] A geodesic variation field satisfies the Jacobi equation $D_\ell^2J=R(\ell,J)\ell$; its initial value and derivative determine it uniquely ([[thm-gr-jacobi-equation-and-geodesic-deviation]]).

[F3] The symmetric screen index form with the $+\chi_\ell$ initial boundary term equals the energy second variation for variations starting on $S$ and ending at $\gamma(L)$. The proof realizes a smooth lift $V$ orthogonal to $\dot\gamma$, with $V(0)\in T_pS$ and $V(L)=0$, by a family with actual variation field $\partial_sF_s|_{s=0}=V$ ([[lem-gr-fx-null-screen-index-form]], proof step 3.1).

[F4] Every point has arbitrarily small strictly convex normal neighborhoods; in one such neighborhood, causal and timelike reachability are characterized by future causal and future timelike position vectors, respectively ([[thm-gr-convex-normal-neighborhoods]], [[thm-gr-normal-neighborhood-causal-cone]]).

[F5] A future causal curve containing a future timelike subcurve has chronologically related endpoints, under Countable Choice and Dependent Choice ([[lem-gr-push-up-rule]] clause (c), [[def-countable-choice]], [[def-dependent-choice]]).

[F6] $q\in I^+(p)$ means a future timelike curve joins $p$ to $q$; $I^+(S)$, $J^+(S)$ and $E^+(S)$ have the unions and set difference in the Statement ([[def-gr-causal-curves-and-reachability]]).

[F7] The exponential map is smooth on a neighborhood of the zero section, and its differential there is invertible, giving the local exponential charts used to realize and adjust variations ([[thm-gr-local-geodesics-and-exponential-map]]).

[F8] Solutions of a smooth local ordinary differential equation exist on a common short interval and depend smoothly on the initial data and parameters ([[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

[F9] A smooth geodesic on an interval with an included finite endpoint extends to an open interval about that endpoint by the local geodesic initial-value theorem; its proof extends the endpoint position-velocity data using the geodesic ODE and uniqueness. The geodesic evaluation depends smoothly on initial data, so a smooth normal field on a neighborhood of $p$ generates a smooth geodesic variation on a common interval about any compact segment ([[thm-gr-local-geodesics-and-exponential-map]], clauses (a)-(b)). The Jacobi initial-value theorem gives uniqueness and continuation of the screen Jacobi field along this extension ([[thm-gr-jacobi-equation-and-geodesic-deviation]], clause (c)).

[F10] A smooth map with invertible differential has a smooth local inverse ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

[F11] A continuous real-valued function on a closed bounded interval takes every value between its endpoint values ([[thm-intermediate-value]]).

[F12] The standard smooth step $\sigma:\mathbb R\to[0,1]$ is smooth, equals zero on $(-\infty,0]$, and equals one on $[1,\infty)$. In particular its derivative is bounded on $[0,1]$ and it is constant on both exterior half-lines. [[def-the-standard-smooth-step-function]]

## Proof

**Given:** [F1]–[F12] and the hypotheses in the Statement.

1.1 By [F9], the unique maximal geodesic extension $\widetilde\gamma$ in the Statement exists on an open interval containing $[0,L_1]$. In the proof, continue to write $\gamma$ for this extension. Choose a smooth curve $\eta(s)\subset U$ with $\eta(0)=p$ and $\eta'(0)=X$. The geodesics with initial data $(\eta(s),\ell(\eta(s)))$ form a smooth variation on a common interval containing $[0,\lambda_0]$. Its variation field $Z$ satisfies $Z(0)=X$ and $D_\lambda Z(0)=D_X\ell$ by torsion-freeness. For each $Y\in T_pS$, $\bar q([D_X\ell],[Y])=g(D_X\ell,Y)=\chi_\ell(X,Y)=q(B_0X,Y)$, so its screen initial derivative is $B_0X$. Uniqueness in [F2] identifies its screen field with the focal field in the Statement, so that field extends as well. Choose a parallel orthonormal frame of the positive screen along this extended geodesic segment and write $\mathcal R[X]:=[R(X,\dot\gamma)\dot\gamma]$. In this frame the focal field satisfies $J''+\mathcal RJ=0$. In the parallel frame the pair $(J,J')$ solves a first-order linear system with continuous coefficient matrix. On the compact interval the matrix norm is bounded by some $M$. Choose adjacent subintervals of length $h$ with $hM<1$ (any $h>0$ if $M=0$). For zero initial data at one endpoint, the integral equation bounds the solution's supremum on such a subinterval by $hM$ times the same supremum, so the solution vanishes there. A finite subdivision in each direction proves uniqueness on $[0,\lambda_0]$. Thus zero value and screen derivative at $\lambda_0$ would force $J$ to vanish identically, contrary to $J(0)=[X]\ne0$; hence $J'(\lambda_0)\ne0$. Since $J(0)=[X]$ and $J'(0)=B_0X$, $\langle J'(0),X\rangle=\chi_\ell(X,X)$. [F1, F2, F3, F9, construct, algebra]

2.1 Fix any $L\in(\lambda_0,\lambda_0+\delta)$, where $\delta>0$ is small enough that the extension in step 1.1 is defined through $\lambda_0+\delta$. On $[0,L]$ let $Y=J$ up to $\lambda_0$ and $Y=0$ after $\lambda_0$. This continuous piecewise-smooth screen field has $Y(0)=X$ and $Y(L)=0$. Let $I$ be the screen index form supplied by [F3]. Its displayed formula extends continuously to piecewise-smooth $H^1$ fields: in a parallel frame the curvature coefficients are bounded on $[0,L]$, the integral terms are continuous in $H^1$, and the endpoint trace is continuous because $$|V(0)|\le L^{-1/2}\|V\|_{L^2}+L^{1/2}\|D_\ell V\|_{L^2},$$ obtained by integrating $V(0)=V(t)-\int_0^tD_\ell V\,d\lambda$ over $0\le t\le L$. Thus $I(Y,Y)$ is defined. Integrating the Jacobi equation on $[0,\lambda_0]$ gives $$I(Y,Y)=\langle J'(\lambda_0),J(\lambda_0)\rangle- \langle J'(0),X\rangle+\chi_\ell(X,X)=0,$$ since the screen value at $\lambda_0$ is zero and $\langle J'(0),X\rangle=\chi_\ell(X,X)$. [F1, F2, F3, step 1.1, algebra]

3.1 Choose a smooth screen field $W$ supported in a small interval about $\lambda_0$ contained in $(0,L)$, zero at both endpoints, and with $W(\lambda_0)=-J'(\lambda_0)$. Integration by parts on each side of $\lambda_0$ yields $$I(Y,W)=\langle J'(\lambda_0),W(\lambda_0)\rangle =-|J'(\lambda_0)|^2<0.$$ Therefore $I(Y+\delta W,Y+\delta W)<0$ for sufficiently small $\delta>0$. Fix this $\delta$ before varying the smoothing scale. Let $\sigma$ be the smooth step in [F12] and choose $0<\epsilon<\min\{\lambda_0,L-\lambda_0\}$ small enough that the extended smooth Jacobi field from step 1.1 is defined on $[\lambda_0-\epsilon,\lambda_0+\epsilon]$. In the same parallel frame set $$\chi_\epsilon(\lambda)=1-\sigma\!\left(\frac{\lambda-\lambda_0+\epsilon}{2\epsilon}\right),\qquad Y_\epsilon(\lambda)=\chi_\epsilon(\lambda)J(\lambda).$$ Here $J$ is its smooth extension through $\lambda_0$. The cutoff is exactly one for $\lambda\le\lambda_0-\epsilon$ and zero for $\lambda\ge\lambda_0+\epsilon$, so $Y_\epsilon$ is smooth, equals $Y$ off that interval, and agrees with $Y$ near both $0$ and $L$. Put $D=\max_{[0,1]}|\sigma'|<\infty$, and bound $|J'|\le C$ on one fixed neighborhood of $\lambda_0$. Since $J(\lambda_0)=0$, integration gives $|J(\lambda)|\le C\epsilon$ on the smoothing interval. Consequently, with the weak derivative of the continuous piecewise-smooth $Y$ from step 2.1, $$\|Y_\epsilon-Y\|_{L^2}^2\le2C^2\epsilon^3,\qquad \|\mathcal D_\lambda(Y_\epsilon-Y)\|_{L^2}^2\le2C^2(1+D/2)^2\epsilon.$$ Indeed the difference is supported in an interval of length $2\epsilon$; its derivative there, away from the single corner of measure zero, is $(\chi_\epsilon-\mathbf1_{\{\lambda<\lambda_0\}})J'+\chi_\epsilon'J$, whose norm is at most $C+DC/2$. Thus $Y_\epsilon\to Y$ in $H^1$. All these fields take values in the positive screen, and their orthogonal lifts remain orthogonal to $\dot\gamma$. With $\delta$ fixed as above, continuity of $I$ from step 2.1 yields $$I(Y_\epsilon+\delta W,Y_\epsilon+\delta W)\longrightarrow I(Y+\delta W,Y+\delta W)<0.$$ For sufficiently small $\epsilon$, the field $V:=Y_\epsilon+\delta W$ is therefore genuinely smooth, has $V(0)=X\in T_pS$, $V(L)=0$, and satisfies $I(V,V)<0$. [F1, F2, F3, F12, step 1.1, step 2.1, algebra, construct]

4.1 Choose the smooth lift of the screen field $V$ constructed in [F3], with $g(V,\dot\gamma)=0$, actual initial value $X\in T_pS$, and $V(L)=0$. Write $V$ for this lift. By [F3], realize it by a smooth curve variation $F_s$ with $F_s(0)\in S$, $F_s(L)=\gamma(L)$ and $\partial_sF_s|_{s=0}=V$; the construction in the proof of [F3] preserves this first variation when it corrects the initial endpoint. Its energy $E(s):=\frac12\int_0^L g(\partial_\lambda F_s,\partial_\lambda F_s)\,d\lambda$ satisfies $E''(0)=I(V,V)<0$. The first-variation formula gives $E'(0)=0$, and $E(0)=0$ because $\gamma$ is null. Pointwise, $$\left.\partial_s g(\partial_\lambda F_s,\partial_\lambda F_s)\right|_{s=0}=2g(D_\lambda V,\dot\gamma)=0,$$ since $V$ is orthogonal to $\dot\gamma$, $D_\lambda\dot\gamma=0$, and the connection is metric-compatible. Smoothness on the compact interval now gives a uniform Taylor expansion $$g(\partial_\lambda F_s,\partial_\lambda F_s)=s^2h(\lambda)+O(s^3),\qquad \int_0^L h(\lambda)\,d\lambda=I(V,V)<0,$$ where $h(\lambda):=\frac12\left.\partial_s^2g(\partial_\lambda F_s,\partial_\lambda F_s)\right|_{s=0}$. [F1, F3, step 3.1, algebra]

5.1 Choose a convex normal neighborhood $C$ of $\gamma(\lambda_0)$ and $0<\rho<\lambda_0$ small enough that $\gamma((\lambda_0-\rho,\lambda_0+\rho))\subset C$. For the fixed $L$, choose $w\in C_c^\infty((0,L))$ with $w\ge0$, support in $(\lambda_0-\rho,\lambda_0+\rho)\cap(0,L)$, $w>0$ on an interval about $\lambda_0$, and $\int_0^Lw=-I(V,V)$. This is possible since $I(V,V)<0$. Along $\gamma$, put $T=N/\sqrt{-g(N,N)}$, $\alpha=-g(\dot\gamma,T)>0$, and $$n:=\frac{1}{\alpha}T-\frac{1}{2\alpha^2}\dot\gamma.$$ Then $n$ is smooth, future null, and $g(\dot\gamma,n)=-1$. Since this pairing is constant and $D_\lambda\dot\gamma=0$, metric compatibility gives $g(\dot\gamma,D_\lambda n)=0$. Extend $n$ smoothly to a field $n_s(\lambda)$ along the variation $F_s$, with $n_0=n$, using local trivializations over a finite cover of the compact parameter interval. The explicit exponential-chart construction in the proof of [F3] extends $F_s$ smoothly a little past both endpoints (the endpoint constraints are imposed only at $0$ and $L$); together with [F9], this lets the speed equation below be posed on an open parameter neighborhood of $[0,L]$. For small $s$ and bounded $u$, define in the local exponential charts $$\Psi(s,\lambda,u):=\exp_{F_s(\lambda)}\!\bigl(s^2u n_s(\lambda)\bigr).$$ The maps are defined on all of $[0,L]$ for sufficiently small $s$, by [F7] and compactness. For $v\in\mathbb R$, set $$Q(s,\lambda,u,v):=g_{\Psi(s,\lambda,u)}\bigl(\partial_\lambda\Psi+v\partial_u\Psi,\partial_\lambda\Psi+v\partial_u\Psi\bigr),$$ where $\partial_\lambda\Psi$ holds $u$ fixed. If $a$ is a differentiable function of $\lambda$, the squared speed of $\Psi(s,\lambda,a(\lambda))$ is $Q(s,\lambda,a,a')$. By step 4.1, $Q(0,\lambda,u,v)=0$ and $\partial_sQ(0,\lambda,u,v)=0$. Thus $\widehat Q:=Q/s^2$ for $s\ne0$ extends smoothly to $s=0$ by Taylor's integral remainder. The term in $Q$ independent of $u,v$ is $s^2h+O(s^3)$ by step 4.1. The exponential differential at its zero vector is the identity [F7], so $\partial_u\Psi=s^2n+O(s^3)$; the $u$-dependent second-order cross term is $2s^2u\,g(\dot\gamma,D_\lambda n)=0$, while the $v$-dependent one is $2s^2v\,g(\dot\gamma,n)=-2s^2v$. Therefore $$\widehat Q(0,\lambda,u,v)=h(\lambda)-2v,\qquad \partial_v\widehat Q(0,\lambda,u,v)=-2.$$ For a scalar parameter $\zeta>0$, apply [F10] to the smooth map $$\mathcal G(s,\lambda,u,\zeta,v):=(s,\lambda,u,\zeta,\widehat Q(s,\lambda,u,v)+\zeta w(\lambda)).$$ At every $s=0$ solution point $v=(h(\lambda)+\zeta w(\lambda))/2$, its differential is block triangular with last diagonal entry $-2$, hence invertible. The local inverse supplied by [F10] therefore gives a smooth local root function $v=\Phi(s,\lambda,u,\zeta)$. At $s=0$, $$\Phi(0,\lambda,u,\zeta)=\frac{h(\lambda)+\zeta w(\lambda)}2.$$ Fix $0<\eta<1$. For each $\zeta\in[1-\eta,1+\eta]$, the scalar initial-value problem $$a_{s,\zeta}'(\lambda)=\Phi(s,\lambda,a_{s,\zeta}(\lambda),\zeta),\qquad a_{s,\zeta}(0)=0$$ has, for $s$ sufficiently small, a solution on $[0,L]$ depending continuously on $(s,\zeta)$. Indeed at $s=0$ its explicit solution is $$a_{0,\zeta}(\lambda)=\frac12\int_0^\lambda(h(t)+\zeta w(t))\,dt;$$ its graphs for $\zeta\in[1-\eta,1+\eta]$ form a compact set. The local root functions above agree near this graph by their local uniqueness and therefore patch to one smooth $\Phi$ on a neighborhood of it. The local ODE existence and smooth-dependence theorem [F8] applies on a finite subdivision covering that set; compactness gives one common small $|s|$ for all $\zeta\in[1-\eta,1+\eta]$, with continuous dependence of $a_{s,\zeta}(L)$ on $(s,\zeta)$. At the endpoint, $$a_{0,\zeta}(L)=\frac12\left(I(V,V)+\zeta\int_0^Lw\right)=\frac{I(V,V)}2(1-\zeta).$$ Because $I(V,V)<0$, these endpoint values have opposite signs at $\zeta=1-\eta$ and $\zeta=1+\eta$. Continuity in $s$ preserves those signs for all sufficiently small positive $s$. For each such $s$, the continuous function $\zeta\mapsto a_{s,\zeta}(L)$ therefore has a zero $\zeta_s\in(1-\eta,1+\eta)$ by [F11]. Set $\widetilde F_s(\lambda):=\Psi(s,\lambda,a_{s,\zeta_s}(\lambda))$. The defining equation gives its squared speed exactly $$g(\partial_\lambda\widetilde F_s,\partial_\lambda\widetilde F_s)=-s^2\zeta_s w(\lambda).$$ Also $a_{s,\zeta_s}(0)=a_{s,\zeta_s}(L)=0$, so $\widetilde F_s(0)=F_s(0)\in S$ and $\widetilde F_s(L)=F_s(L)=\gamma(L)$. The solutions and their first derivatives stay bounded on $[0,L]$ as $s\to0$, so $\widetilde F_s$ converges in $C^1$ to $\gamma$. On the compact interval, $g(\dot\gamma,N)<0$ has a uniform negative bound, so the corrected velocity remains future-directed and nonzero for small $s$; the displayed norm makes the whole curve future causal and makes it strictly timelike where $w>0$. On a closed subinterval where $w>0$, its image lies in $C$ for small $s$. The local cone result [F4] identifies the endpoints of that subcurve as chronologically related (and supplies the radial timelike replacement). Thus the endpoint-fixed path from $S$ to $\gamma(L)$ is future causal with a timelike subcurve. [F1, F3, F4, F7, F8, F9, F10, F11, step 3.1, step 4.1, construct, algebra]

6.1 The push-up rule [F5] applied to the corrected path in step 5.1 gives $F_s(0)\ll\gamma(L)$. Since $F_s(0)\in S$, this means $\gamma(L)\in I^+(S)$ by [F6]. [F5, F6, step 5.1]

7.1 By [F9], the geodesic and its normal variation extend through some $\lambda_0+\delta_0$, with $\delta_0>0$. Choose $C$ and $\rho$ as in step 5.1 and put $\varepsilon:=\min\{\delta_0,\rho\}$. For every $L\in(\lambda_0,\lambda_0+\varepsilon)$ the construction applies, with its bump and variation allowed to depend on $L$. Hence $\gamma(\lambda)\in I^+(S)$ for every $\lambda\in(\lambda_0,\lambda_0+\varepsilon)$. Since $E^+(S)=J^+(S)\setminus I^+(S)$, no such point lies in $E^+(S)$. This is a causal-boundary conclusion and contains no completeness or curvature-divergence assertion. [F6, F9, step 6.1] ∎

## Remarks

The screen index form has a positive boundary contribution $+\chi_\ell$ for the convention $\chi_\ell(X,Y)=g(\nabla_X\ell,Y)$. Reversing that sign would invalidate the Jacobi boundary cancellation in step 2.1. The proof is local and uses only a short interval after the focal instant.
