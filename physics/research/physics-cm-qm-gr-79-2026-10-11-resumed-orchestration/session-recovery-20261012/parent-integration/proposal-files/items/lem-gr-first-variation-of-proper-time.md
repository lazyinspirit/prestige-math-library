---
id: lem-gr-first-variation-of-proper-time
kind: lemma
title: "First variation of the length of a timelike curve: stationarity is the geodesic equation"
status: draft
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-nondegenerate-levi-civita-and-tensor-derivative, lem-gr-parallel-transport-and-geodesic-speed, thm-gr-local-geodesics-and-exponential-map, def-gr-timelike-worldline-and-proper-time, lem-gr-proper-time-reparametrization-and-four-velocity, def-gr-metric-selected-connection, def-gr-smooth-lorentzian-objects, def-covariant-derivative-along-a-curve, def-christoffel-symbols-of-an-affine-connection, lem-gr-connection-conditions-in-chart-components, def-gr-inverse-metric-and-musical-isomorphisms, thm-clairaut-schwarz-mixed-partials, thm-differentiation-under-the-integral-sign, thm-ftc-second-part, thm-monotonicity-of-the-integral, lem-smooth-bump-between-concentric-euclidean-balls, def-darboux-integral, def-interval, def-continuity-real]
dependency_roles:
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  def-darboux-integral: mathematical-premise
  def-interval: mathematical-premise
  def-continuity-real: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3 'geodesics': the variation of the proper-time functional (3.48)-(3.53) and the geodesic equation (3.47), printed pp. 69-71 (PDF pp. 76-78)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 2.4 and section 3.3: curves of extremal proper time are timelike geodesics, printed pp. 30-31 and 38 (PDF pp. 31-32 and 39)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 1.1.1-1.1.2: the particle action, its Euler-Lagrange equation (1.28)-(1.30) and the affine parameter discussion, printed pp. 24-29 (PDF pp. 31-36)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), let $a<b$, and
let $\gamma:[a,b]\to M$ be a $C^2$ future timelike curve whose image is
contained in the domain $U$ of one smooth chart $(U,x)$
([[def-gr-timelike-worldline-and-proper-time]]). Suppose $\gamma$ is
parametrized so that

$$g_{\gamma(t)}\bigl(\gamma'(t),\gamma'(t)\bigr)=-c^2 \qquad (t\in[a,b]),$$

that is, by proper time up to a choice of origin
([[lem-gr-proper-time-reparametrization-and-four-velocity]]). Let
$H:(-\varepsilon,\varepsilon)\times[a,b]\to U$ be a map that is $C^2$ in both
variables, with $H(0,t)=\gamma(t)$ for all $t$, with
$H(s,a)=\gamma(a)$ and $H(s,b)=\gamma(b)$ for all $s$, and such that each
curve $t\mapsto H(s,t)$ is future timelike; write
$T(s,t):=\partial_tH(s,t)$, $J(t):=\partial_sH(s,t)|_{s=0}$, so that
$J(a)=J(b)=0$, and

$$L(s):=\int_a^b\sqrt{-g_{H(s,t)}\bigl(T(s,t),T(s,t)\bigr)}\,dt .$$

Then:

1. $L$ is differentiable at $0$ and
   $$L'(0)=-\int_a^b\frac{g_{\gamma(t)}\bigl(D_tJ(t),\gamma'(t)\bigr)}{\sqrt{-g_{\gamma(t)}(\gamma'(t),\gamma'(t))}}\,dt =-\frac1c\int_a^bg_{\gamma(t)}\bigl(D_tJ(t),\gamma'(t)\bigr)\,dt .$$
2. Equivalently,
   $L'(0)=\frac1c\int_a^bg_{\gamma(t)}\bigl(J(t),D_t\gamma'(t)\bigr)\,dt$.
3. $L'(0)=0$ for **every** such variation $H$ if and only if
   $D_t\gamma'=0$ on $[a,b]$. Consequently, within this class, stationarity
   of the length functional is exactly the geodesic equation in the given
   proper-time parameter.

The chart hypothesis is used to realize variations of prescribed compactly
supported variation fields by coordinate displacement; the formula of claim 1
and the implication "geodesic $\Rightarrow$ stationary" are local and do not
require it beyond the smooth parametrization.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with metric-selected connection $\nabla$, an interval $[a,b]$ with $a<b$, a $C^2$ future timelike curve $\gamma$ in a chart domain $U$ with $g(\gamma',\gamma')=-c^2$, and a $C^2$ variation $H$ as in the statement.

[L1] The metric pairing identity along a curve holds: $\frac{d}{dt}g(V,W)=g(D_tV,W)+g(V,D_tW)$ for smooth sections along a smooth curve ([[lem-gr-parallel-transport-and-geodesic-speed]], clause 1).

[L2] In a chart, $D_tV^a=\partial_tV^a+\sum_{b,c}\Gamma^a{}_{bc}\dot\gamma^bV^c$ for a field $V$ along $\gamma$ with tangent $\dot\gamma$, and $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$ ([[def-covariant-derivative-along-a-curve]], [[def-christoffel-symbols-of-an-affine-connection]], [[def-gr-metric-selected-connection]], [[lem-gr-connection-conditions-in-chart-components]]).

[L3] For a $C^2$ two-parameter family the mixed derivatives commute as ordinary partial derivatives in a chart, so $D_sT=D_tJ$ ([[thm-clairaut-schwarz-mixed-partials]], [[def-covariant-derivative-along-a-curve]]).

[L4] If $f$ is continuous on $[a,b]\times(-\varepsilon,\varepsilon)$ in a suitable sense and $s\mapsto f(s,t)$ is differentiable with continuous partial derivative on the product, then $s\mapsto\int_a^bf(s,t)dt$ is differentiable with derivative $\int_a^b\partial_sf(s,t)dt$ ([[thm-differentiation-under-the-integral-sign]], [[def-darboux-integral]]).

[L5] If $G$ is $C^1$ on $[a,b]$, then $\int_a^bG'=G(b)-G(a)$ ([[thm-ftc-second-part]]). If a continuous function is strictly positive at a point of an open interval, then its integral over a sufficiently small closed subinterval is strictly positive ([[thm-monotonicity-of-the-integral]], [[def-continuity-real]], [[def-darboux-integral]]).

[L6] For $0<r<R$ in $\mathbb R$ there is a smooth $\rho:\mathbb R\to[0,1]$ with $\rho=1$ on $[t_0-r,t_0+r]$ and support in $(t_0-R,t_0+R)$ ([[lem-smooth-bump-between-concentric-euclidean-balls]]).

[L7] The musical isomorphism $\sharp$ and the inverse metric turn a smooth field along a curve into a smooth field along the curve: if $W$ is a smooth section of $\gamma^*T^*M$, then $g^{\#}W$ with components $\sum_bg^{ab}W_b$ is a smooth section of $\gamma^*TM$ ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-gr-smooth-lorentzian-objects]]).

## Proof

**Proof technique:** direct.

1.1 (Differentiability of $L$.) The integrand $\rho(s,t):=\sqrt{-g_{H(s,t)}(T(s,t),T(s,t))}$ is strictly positive and continuous on $(-\varepsilon,\varepsilon)\times[a,b]$ (indeed $C^1$): $H$ and $T=\partial_tH$ are $C^1$ in both variables, the metric components are smooth, and the square root is smooth on $(0,\infty)$. Hence [L4] applies and $L'(0)=\int_a^b\partial_s\rho(0,t)\,dt$. [L4, algebra]

2.1 (Derivative of the integrand.) By [L1] applied to $V=W=T$ with the derivative in the $s$-direction (the pairing identity holds for the two-parameter family by the same component computation as for one parameter), $\partial_s\rho(0,t)=-\frac{g(D_sT,T)}{\sqrt{-g(T,T)}}\bigl|_{s=0}$. [step 1.1, L1, algebra]

2.2 (Commutator.) On the chart $U$, writing $H^a=H^a(s,t)$ and using [L2], $D_sT^a-D_tJ^a=\sum_{b,c}\Gamma^a{}_{bc}(J^bT^c-T^bJ^c)=0$ since $\partial_s\partial_tH^a=\partial_t\partial_sH^a$ by [L3] and $\Gamma$ is symmetric in its lower indices. Hence $D_sT=D_tJ$ at $s=0$, where $J=\partial_sH$, and $T=\gamma'$. [step 1.1, L2, L3, algebra]

3.1 (First variation formula.) Substituting steps 2.1 and 2.2 into step 1.1, and using $g(\gamma',\gamma')=-c^2$, gives the formula of claim 1. [step 2.1, step 2.2, algebra]

4.1 (Integration by parts.) By [L1], $\frac{d}{dt}g(J,\gamma')=g(D_tJ,\gamma')+g(J,D_t\gamma')$ and both terms are continuous, so the derivative of the $C^1$ function $t\mapsto g(J,\gamma')$ is integrable; [L5] gives $\int_a^b\bigl(g(D_tJ,\gamma')+g(J,D_t\gamma')\bigr)dt=g(J,\gamma')|_a^b=0$ because $J(a)=J(b)=0$. Multiplying the first variation formula by $c$ and using this identity gives claim 2, $L'(0)=\frac1c\int_a^bg(J,D_t\gamma')dt$. [step 3.1, L1, L5, algebra]

5.1 ($\Rightarrow$ direction of claim 3.) If $D_t\gamma'=0$ on $[a,b]$, the integrand of claim 2 vanishes identically for the variation at hand, so $L'(0)=0$; since $H$ was arbitrary, every such variation is stationary. [step 4.1, algebra]

6.1 (Converse.) Suppose $D_t\gamma'(t_0)\neq0$ for some $t_0\in(a,b)$. Let $Z:=g^{\#}(D_t\gamma')$ be the smooth field along $\gamma$ of [L7]; then $g(Z,D_t\gamma')=g(D_t\gamma',D_t\gamma')>0$ at $t_0$ and hence, by continuity, on a neighborhood of $t_0$. Choose $t_0$ to lie in the interior of a closed interval $[u,v]\subseteq(a,b)$ on which the pairing is strictly positive, then choose $0<r<R$ with $[t_0-r,t_0+r]\subseteq[u,v]$ and $(t_0-R,t_0+R)\subseteq(a,b)$, and let $\varphi\ge0$ be the bump of [L6] equal to $1$ on $[t_0-r,t_0+r]$ with support in $(t_0-R,t_0+R)$. Put $J(t):=\varphi(t)Z(t)$, a smooth field along $\gamma$ with $J(a)=J(b)=0$, and define $H(s,t):=x^{-1}\bigl(x(\gamma(t))+s\,J^{\mathrm{ch}}(t)\bigr)$ on a sufficiently small $|s|$, where $J^{\mathrm{ch}}$ denotes the chart components of $J$. [step 5.1, L6, L7, construct]

7.1 (Admissibility of the constructed variation.) $H$ fixes the endpoints because $J(a)=J(b)=0$; it is $C^2$; and for all sufficiently small $|s|$ its fibers are future timelike and lie in $U$: the perturbation $sJ^{\mathrm{ch}}$ vanishes outside $[u,v]$, so on the compact set $[u,v]$ the image stays in a fixed compact subset of the chart domain for small $|s|$, and the family of velocities $T(s,t)$ depends continuously on $(s,t)$ with $T(0,t)=\gamma'(t)$ future timelike, so by compactness of $[a,b]$ the timelike condition persists for small $|s|$. [step 6.1, L1, algebra]

8.1 (Nonstationarity.) For this variation, claim 2 and the choice of $J$ give $L'(0)=\frac1c\int_a^b\varphi(t)\,g_{\gamma(t)}(Z(t),D_t\gamma'(t))\,dt=\frac1c\int_a^b\varphi(t)\,g_{\gamma(t)}(D_t\gamma'(t),D_t\gamma'(t))\,dt>0$, because the integrand is continuous, nonnegative, and strictly positive on the nondegenerate interval $[t_0-r,t_0+r]$; hence the integral is strictly positive by [L5]. Therefore a curve with $D_t\gamma'\neq0$ admits a variation with $L'(0)\neq0$, and stationarity for every variation forces $D_t\gamma'=0$, proving claim 3. [step 7.1, step 4.1, L5, algebra] ∎

## Remarks

- **Scope.** The variation class is restricted to curves and variations contained in one chart domain with fixed endpoints and timelike fibers; the result asserts nothing about null curves, about maximality (which is the content of [[thm-gr-lorentz-gauss-lemma-and-normal-maximum]]), or about second variations. The chart hypothesis only serves the realization of variations in step 4.2; the formula of claim 1 is local and holds for any $C^2$ variation of a timelike curve.

- **Physical reading.** The lemma is mathematics: it identifies the stationary curves of the length functional with geodesics. The physical statement that ideal clocks measure proper time and that freely falling bodies follow geodesics is adopted separately in [[post-gr-ideal-clocks-and-free-fall]] and is not asserted here.
