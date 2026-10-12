---
id: thm-gr-lorentz-gauss-lemma-and-normal-maximum
kind: theorem
title: "The Lorentzian Gauss lemma and the radial maximum of proper time"
status: draft
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-point-normal-and-exponential-coordinate-charts, thm-gr-local-geodesics-and-exponential-map, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, lem-gr-parallel-transport-and-geodesic-speed, lem-gr-proper-time-reparametrization-and-four-velocity, def-gr-timelike-worldline-and-proper-time, def-gr-metric-selected-connection, def-gr-smooth-lorentzian-objects, lem-gr-observer-pairing-with-future-causal-vectors, def-gr-observer-and-rest-space, lem-timelike-cone-has-two-convex-components, def-causal-classification-of-lorentz-vectors, def-covariant-derivative-along-a-curve, def-christoffel-symbols-of-an-affine-connection, lem-gr-connection-conditions-in-chart-components, def-differential-of-a-smooth-map, thm-clairaut-schwarz-mixed-partials, thm-ftc-second-part, thm-continuous-implies-integrable, def-darboux-integral, def-rational-power, thm-real-power-continuity-and-derivatives, def-interval]
dependency_roles:
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-darboux-integral: mathematical-premise
  def-rational-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: geodesics as curves that extremize proper time and the discussion of the exponential map (3.59)-(3.63), printed pp. 69-73 (PDF pp. 76-80)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), discussion of the Gauss lemma around section 3.4 and the statement that timelike curves of extremal proper time are timelike geodesics, printed pp. 30 and 38 (PDF pp. 31 and 39)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.3.1-3.3.2 on geodesic normal coordinates and the exponential map, printed pp. 119-122 (PDF pp. 126-129)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), and let $p\in M$.
Let $W_p\subseteq T_pM$ be a star-shaped open neighborhood of $0$ on which
$\exp_p$ is a diffeomorphism onto an open set $U_p:=\exp_p(W_p)$, as supplied
by [[thm-gr-local-geodesics-and-exponential-map]] and
[[thm-gr-point-normal-and-exponential-coordinate-charts]]; identify
$T_v(T_pM)$ with $T_pM$ for every $v$.

**(a) Gauss lemma.** For every $v\in W_p$ and every $w\in T_pM$,

$$g_{\exp_pv}\bigl(d(\exp_p)_v(v),\,d(\exp_p)_v(w)\bigr)=g_p(v,w).$$

**(b) Radial maximum.** Let $\alpha:[0,1]\to U_p$ be a piecewise-$C^1$ future
timelike curve with $\alpha(0)=p$, with nonzero future timelike one-sided
tangents, set $q:=\alpha(1)$ and $v_q:=\exp_p^{-1}(q)$. Then

$$L_g(\alpha)\le\sqrt{-g_p(v_q,v_q)},$$

and equality holds if and only if there are $v_0\in W_p$ and a piecewise-$C^1$
strictly increasing surjection $\rho:[0,1]\to[0,\rho(1)]$ with
$v_q=\rho(1)v_0$ and $\alpha(t)=\exp_p(\rho(t)v_0)$ for all $t$; that is,
$\alpha$ is a monotone reparametrization of the radial geodesic segment from
$p$ to $q$. Dividing by $c$, the proper-time increment of $\alpha$ is at most
$\frac1c\sqrt{-g_p(v_q,v_q)}$, which is the proper-time increment of that
radial geodesic.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with metric-selected connection $\nabla$, a point $p$, a star-shaped domain $W_p$ on which $\exp_p$ is a diffeomorphism, and the curves and vectors named in the claims.

[L1] For $v\in W_p$ the curve $t\mapsto\exp_p(tv)$ is the geodesic $\gamma_{p,v}$ on some open interval containing $[0,1]$, and its tangent has constant norm $g_p(v,v)$; radial geodesics are defined by the initial-value problem of [[thm-gr-local-geodesics-and-exponential-map]] ([[thm-gr-local-geodesics-and-exponential-map]], [[lem-gr-parallel-transport-and-geodesic-speed]], clauses 1 and 3).

[L2] If $V,W$ are smooth sections of $\gamma^*TM$ along a smooth curve, then $\frac{d}{dt}g(V,W)=g(D_tV,W)+g(V,D_tW)$; and for a $C^2$ two-parameter family $\Phi(s,r)$ one has $D_s\partial_r\Phi=D_r\partial_s\Phi$, because in a chart both sides equal $\partial_s\partial_r\Phi^a$ plus the same symmetric $\Gamma$-contraction ([[lem-gr-parallel-transport-and-geodesic-speed]], clause 1, [[def-covariant-derivative-along-a-curve]], [[def-christoffel-symbols-of-an-affine-connection]], [[def-gr-metric-selected-connection]], [[thm-clairaut-schwarz-mixed-partials]]).

[L3] If $n$ is an observer and $w$ nonzero future causal at the same point, then $-g(n,w)>0$; if both $n$ and $w$ are future timelike, then $-g(n,w)\ge\sqrt{-g(w,w)}$ with equality exactly when $w$ is a positive multiple of $n$ ([[lem-gr-observer-pairing-with-future-causal-vectors]], claims 1 and 2, [[def-gr-observer-and-rest-space]]).

[L4] The timelike set at a point has exactly two connected components, so a continuous curve of timelike vectors that starts future-directed and never becomes null stays future-directed; the closure of the future timelike component is the future causal cone, and a nonzero limit of future timelike vectors is future causal ([[lem-timelike-cone-has-two-convex-components]], [[def-gr-smooth-lorentzian-objects]], [[def-causal-classification-of-lorentz-vectors]]).

[L5] $R(t)=\sqrt{-g_p(v(t),v(t))}$ has derivative $R'=-g_p(v,v')/R$ on intervals where $R>0$, since the square root is differentiable on $(0,\infty)$; the fundamental theorem of calculus applies to $C^1$ functions on closed intervals ([[def-rational-power]], [[thm-real-power-continuity-and-derivatives]], [[thm-ftc-second-part]]).

[L6] A $C^1$ curve in $U_p$ lifted by $\exp_p^{-1}$ is piecewise $C^1$, $\alpha=\exp_p\circ v$, and $\alpha'=d(\exp_p)_v(v')$; for the inverse map $d(\exp_p^{-1})_p=\operatorname{id}$ under the canonical identification, so for the lift of a curve starting at $p$ one has $v(t)=t\alpha'(0)+o(t)$ as $t\downarrow0$ ([[thm-gr-local-geodesics-and-exponential-map]], [[def-differential-of-a-smooth-map]], [[thm-gr-point-normal-and-exponential-coordinate-charts]]).

## Proof

**Proof technique:** direct.

1.1 (Two-parameter family.) Let $r\mapsto v(r)$ be a smooth curve in $W_p$ and put $F(s,r):=\exp_p(sv(r))$ for $s\in[0,1]$, so that $F(0,r)=p$ and $F(1,r)=\exp_p(v(r))$. Set $T:=\partial_sF$, $J:=\partial_rF$. For each fixed $r$, $s\mapsto F(s,r)$ is the radial geodesic with tangent $v(r)$ at $s=0$; hence $D_sT=0$ and $g(T,T)=g_p(v(r),v(r))$ for all $s$ by [L1]. By [L2], $D_sJ=D_rT$. [L1, L2, given]

1.2 (The lift of a curve.) Let $\alpha$ be as in (b) and define $v(t):=\exp_p^{-1}(\alpha(t))$ for $t\in(0,1]$, $v(0):=0$; by [L6], $v$ is piecewise $C^1$ with $\alpha=\exp_p\circ v$ and $\alpha'=d(\exp_p)_v(v')$, and $v(t)=t\alpha'(0)+o(t)$. Write $Q(t):=g_p(v(t),v(t))$ and $R(t):=\sqrt{-Q(t)}$ on $\{Q<0\}$. [L5, L6, construct]

1.3 (The lift is future timelike.) Let $T^*:=\sup\{t\in[0,1]:v(s)\text{ is future timelike for every }s\in(0,t]\}$; this is positive by [L6] and continuity, because $v(t)=t\alpha'(0)+o(t)$ and $\alpha'(0)$ is future timelike. Suppose $T^*<1$. On $(0,T^*)$ the vector $v$ is future timelike, so $Q<0$ there and $v(T^*)$ is a nonzero future causal limit with $Q(T^*)\ge0$; hence either $Q(T^*)=0$ and $v(T^*)$ is future null (case A), or $v(T^*)=0$ (case B). [L4, L6, algebra]

2.1 (Gauss computation.) By [L2] and step 1.1, $$\partial_sg(T,J)=g(D_sT,J)+g(T,D_sJ)=g(T,D_rT)=\tfrac12\partial_rg(T,T)=g_p(v(r),v'(r)),$$ using symmetry of $g$ in the middle term and step 1.1 in the last. Since $J(0,r)=\partial_r\exp_p(0)=0$, integrating the constant-in-$s$ right-hand side from $s=0$ to $s=1$ gives $g_{\exp_p(v(r))}\bigl(d(\exp_p)_{v(r)}(v(r)),d(\exp_p)_{v(r)}(v'(r))\bigr)=g_p(v(r),v'(r))$. Every pair $(v,w)$ with $v\in W_p$ is of the form $(v(0),v'(0))$ for the smooth family $r\mapsto v+rw$, so the identity holds for all such pairs; this proves (a). [step 1.1, L2, algebra]

3.1 (Case A is impossible.) In case A, $Q<0$ on $(0,T^*)$ and $Q(T^*)=0$, so the one-sided left derivative satisfies $Q'(T^{*-})\ge0$; if $T^*$ is a corner of the piecewise curve, use the left tangent and the left derivative throughout. On the smooth pieces the Gauss lemma of step 2.1 gives $Q'(t)=2g_p(v,v')=2g_{\alpha(t)}(T(t),\alpha'(t))$, where $T(t)=d(\exp_p)_{v(t)}(v(t))$ is the radial tangent. Since $v(t)$ tends to the future null vector $v(T^*)$, continuity gives $T(T^*)=\lim T(t)$, a nonzero future null vector; and $\alpha'(T^{*-})$ is future timelike, so by the strict part of [L3], $Q'(T^{*-})=2g(T,\alpha')<0$, contradicting $Q'(T^{*-})\ge0$. [step 1.3, step 2.1, L1, L3, algebra]

3.2 (Case B is impossible.) In case B, $v(t)$ is future timelike for $t<T^*$ and $v(T^*)=0$, so $R>0$ on $(0,T^*)$ and $R(t)\to0$ as $t\uparrow T^*$. On each smooth piece, by [L5] and the Gauss lemma, $R'=-g_p(v,v')/R=-g_{\alpha}(N,\alpha')$ where $N:=T/R$ is future unit timelike by [L1] and the future-directedness of $v$; the reverse Cauchy–Schwarz part of [L3] gives $-g(N,\alpha')\ge\sqrt{-g(\alpha',\alpha')}>0$. Hence $R'$ is strictly positive on $(0,T^*)$, and by [L5] applied piecewise, $R(T^*)-R(\delta)=\int_\delta^{T^*}R'>0$ for every $0<\delta<T^*$, contradicting $R(T^*)=0$ and $R(\delta)>0$. [step 1.3, step 2.1, L1, L3, L5, algebra]

4.1 (Length inequality.) By steps 1.2, 1.3, 3.1 and 3.2, $v(t)$ is future timelike for every $t\in(0,1]$, so $R>0$ on $(0,1]$ and the computation of step 3.2 applies on the whole half-open interval: on each smooth piece $R'\ge\sqrt{-g(\alpha',\alpha')}>0$. Integrating over the smooth pieces from $\delta$ to $1$ and adding, $R(1)-R(\delta)\ge\int_\delta^1\sqrt{-g(\alpha',\alpha')}\,dt$; letting $\delta\downarrow0$, $R(\delta)\to0$ by continuity of $v$, and the integral over $(0,\delta)$ tends to $0$ because the integrand is bounded on $[0,1]$ (continuous on the pieces with finite one-sided limits), so $L_g(\alpha)\le R(1)=\sqrt{-g_p(v_q,v_q)}$. Dividing by $c$ and using [[lem-gr-proper-time-reparametrization-and-four-velocity]] gives the proper-time statement. [step 3.2, L5, algebra]

5.1 (Equality case.) If equality holds in step 4.1, then the continuous nonnegative function $R'-\sqrt{-g(\alpha',\alpha')}$ on each open piece has zero integral over $(0,1)$, hence vanishes identically there; by the equality case of the reverse Cauchy–Schwarz in [L3], $\alpha'(t)$ is then a positive multiple of $N(t)$ at every smooth parameter value, so $v'(t)$ is a positive multiple of $v(t)$ (as $d(\exp_p)_v$ is injective). Therefore $v(t)=\rho(t)v_0$ with $\rho>0$ piecewise $C^1$ and $v_0:=v(1)/\rho(1)\in W_p$ (the ray from $v(1)$ to $0$ lies in the star-shaped $W_p$), and $\rho$ is strictly increasing because $\rho'v_0\parallel\alpha'$ and $\alpha'$ is future timelike. Then $v_q=v(1)=\rho(1)v_0$ and $\alpha(t)=\exp_p(\rho(t)v_0)$, a monotone reparametrization of the radial geodesic. Conversely, for such an $\alpha$ with $\rho$ strictly increasing and piecewise $C^1$, $\alpha'=\rho'\,d(\exp_p)_{\rho v_0}(v_0)$ has norm $|\rho'|\sqrt{-g_p(v_0,v_0)}$, so $L_g(\alpha)=\bigl(\int_0^1\rho'\bigr)\sqrt{-g_p(v_0,v_0)}=\rho(1)\sqrt{-g_p(v_0,v_0)}=\sqrt{-g_p(v_q,v_q)}$, with equality; this proves (b) and completes the proof. [step 4.1, L3, L5, algebra] ∎

## Remarks

- **Scope.** The maximum is asserted only for curves remaining in the star-shaped exponential domain $U_p$ and does not assert global maximality after leaving it, maximality before every conjugate or cut point, or any statement about null curves. The equality analysis uses that $d(\exp_p)_v$ is invertible along the radial segment; for $v\in W_p$ this holds by the choice of $W_p$.

- **Auxiliary metric but Lorentzian claims.** The proof uses only the nondegenerate Lorentzian metric and the metric-selected connection; no positive-definite Riemannian Gauss lemma or index lemma is consumed. The final comparison is between two proper times of the same future timelike type, and the inequality reverses sign for spacelike or null curves, which are not treated here.
