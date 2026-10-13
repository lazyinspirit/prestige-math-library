---
id: ex-gr-flat-space-geodesics-and-proper-time
kind: example
title: "Geodesics, proper time and parallel transport of the flat model"
status: published
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, thm-gr-local-geodesics-and-exponential-map, lem-gr-parallel-transport-and-geodesic-speed, def-gr-timelike-worldline-and-proper-time, lem-gr-proper-time-reparametrization-and-four-velocity, def-geodesic-of-an-affine-connection, def-parallel-section-along-a-curve, thm-covariant-derivative-along-a-curve-is-independent-of-frame-and-extension, def-christoffel-symbols-of-an-affine-connection, prop-coordinate-geodesic-equation]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-parallel-section-along-a-curve: mathematical-premise
  thm-covariant-derivative-along-a-curve-is-independent-of-frame-and-extension: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 'worldlines', 'proper time' and 'four-velocity' (1.97)-(1.99), printed pp. 25-27 (PDF pp. 32-34); Ch. 3 geodesics (3.47), printed pp. 70-71 (PDF pp. 77-78)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 3.3: the geodesic equation and proper time as an affine parameter in flat spacetime, printed pp. 37-38 (PDF pp. 38-39)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Example

Let $M=\mathbb R^4$ carry the identity chart $x=(x^0,x^1,x^2,x^3)$, the flat
Lorentzian metric $g=\operatorname{diag}(-1,1,1,1)$ and the time orientation
$N=\partial_0$, so that $(M,g,N)$ is a time-oriented smooth Lorentzian
four-manifold ([[def-gr-smooth-lorentzian-objects]]). Then:

1. The coordinate connection $\nabla$ with $\Gamma^a{}_{bc}=0$ in the identity
   chart is the metric-selected connection of $g$, and its geodesics are
   exactly the affine lines $t\mapsto p+tv$.
2. For a future timelike geodesic with tangent $v$, the proper-time increment over
   $[t_0,t]$ is $\sqrt{-g(v,v)}\,(t-t_0)/c$; in particular the future timelike
   geodesic through $p$ with four-velocity $u$ is
   $\tau\mapsto p+\tau u$, and its four-velocity $u$ has $g(u,u)=-c^2$.
3. Parallel transport by $\nabla$ along any piecewise smooth curve preserves
   the components in the identity chart: $D_tV=0$ if and only if $V$ has
   constant components; hence transport is a $g$-isometry, and the transported
   vector depends only on the endpoints.
4. The exponential map is $\exp_p(v)=p+v$ on all of $T_pM$, with
   $d(\exp_p)_0=\operatorname{id}$, and the identity chart translated to $p$
   gives $g_{ab}(p)=\eta_{ab}$, $\partial_ag_{bc}(p)=0$ exactly (not merely at
   first order).

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb R^4,g)$ with identity chart $x$ and $g=\operatorname{diag}(-1,1,1,1)$, and the coordinate connection $\nabla$ with $\Gamma^a{}_{bc}=0$ in this chart.

[L1] The identity chart is global, its coordinate fields are $g$-orthonormal, and $g$ is symmetric nondegenerate with the given components; the time orientation is $N=\partial_0$ ([[def-gr-smooth-lorentzian-objects]]).

[L2] A connection that is torsion-free and $g$-compatible is the metric-selected connection, uniquely, and a torsion-free connection with $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$ plus the compatibility identity is metric-selected ([[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L3] In a chart, a geodesic satisfies $\ddot x^k+\sum_{i,j}\Gamma^k{}_{ij}\dot x^i\dot x^j=0$, and the covariant derivative along a curve has components $\partial_tV^a+\sum_{b,c}\Gamma^a{}_{bc}\dot\gamma^bV^c$ ([[prop-coordinate-geodesic-equation]], [[def-geodesic-of-an-affine-connection]], [[lem-gr-parallel-transport-and-geodesic-speed]], [[thm-covariant-derivative-along-a-curve-is-independent-of-frame-and-extension]]).

[L4] Proper time along a future timelike worldline has density $\sqrt{-g(\gamma',\gamma')}/c$, and the four-velocity is $U=c\gamma'/\sqrt{-g(\gamma',\gamma')}$ ([[def-gr-timelike-worldline-and-proper-time]], [[lem-gr-proper-time-reparametrization-and-four-velocity]]).

[L5] The geodesic initial-value problem has a unique maximal solution, and $\exp_p(v)=\gamma_{p,v}(1)$ with $d(\exp_p)_0=\operatorname{id}$ ([[thm-gr-local-geodesics-and-exponential-map]], [[def-christoffel-symbols-of-an-affine-connection]]).

## Verification

**Proof technique:** direct.

1.1 The connection $\nabla$ has $\Gamma\equiv0$, so it is torsion-free; and the compatibility identity $\partial_ag_{bc}=\sum_d(\Gamma^d{}_{ab}g_{dc}+\Gamma^d{}_{ac}g_{bd})$ holds because both sides are $0$ with constant metric components and vanishing coefficients. By [L2] it is the metric-selected connection of $g$. [L1, L2, algebra]

2.1 Substituting $\Gamma=0$ into [L3], the geodesic equation is $\ddot x^k=0$, whose solutions are exactly the affine lines $t\mapsto p+tv$ on parameter intervals; by [L5] the maximal geodesic through $(p,v)$ is this line extended to all of $\mathbb R$. [step 1.1, L3, L5, algebra]

2.2 If $V=\sum_aV^a\partial_a$ along a curve, then by [L3] $D_tV=0$ if and only if $\partial_tV^a=0$ for all $a$, that is, the components are constant; so parallel sections are exactly the constant-component fields along the curve and $P_\gamma$ is the identity identification of fibres in the identity chart. Hence transport preserves $g$ and is independent of the path (it depends only on the endpoints), by [L2] and the component computation. [step 1.1, L3, L2, algebra]

3.1 Let $\gamma(t)=p+tv$ with $g(v,v)<0$ and $g(v,\partial_0)<0$; then $\gamma$ is a future timelike worldline and its density is the constant $\sqrt{-g(v,v)}$. By [L4] the proper-time increment over $[t_0,t]$ is $\sqrt{-g(v,v)}(t-t_0)/c$, and the four-velocity is the constant vector $U=cv/\sqrt{-g(v,v)}$ with $g(U,U)=-c^2$. In particular, for the future timelike unit vector $u$ with $g(u,u)=-c^2$ the worldline $\tau\mapsto p+\tau u$ is parametrized by proper time up to its origin. [step 2.1, L4, algebra]

4.1 By step 2.1, the geodesic through $p$ with initial tangent $v$ is $t\mapsto p+tv$ on all of $\mathbb R$, so $1\in I_{p,v}$ for every $v$ and $\exp_p(v)=p+v$ on all of $T_pM$. Differentiating $v\mapsto p+v$ at $0$ gives the identity, and the chart $y:=x-x(p)$ centered at $p$ is the identity chart translated; in it $g_{ab}=\operatorname{diag}(-1,1,1,1)$ identically, so $g_{ab}(p)=\eta_{ab}$ and $\partial_ag_{bc}(p)=0$ hold exactly, not merely at first order. [step 2.1, L5, algebra] ∎
