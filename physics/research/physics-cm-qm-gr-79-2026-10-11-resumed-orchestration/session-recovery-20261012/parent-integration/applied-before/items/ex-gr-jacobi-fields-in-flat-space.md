---
id: ex-gr-jacobi-fields-in-flat-space
kind: example
title: "Jacobi fields in flat space are affine, and no geodesic has conjugate instants"
status: draft
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, lem-gr-connection-conditions-in-chart-components, prop-coordinate-geodesic-equation, thm-gr-local-geodesics-and-exponential-map, def-geodesic-of-an-affine-connection, def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-tensoriality-and-coordinate-formula, def-gr-jacobi-field-and-conjugate-instant, thm-gr-jacobi-equation-and-geodesic-deviation, lem-gr-conjugacy-via-the-exponential-map, def-covariant-derivative-along-a-curve]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  def-gr-jacobi-field-and-conjugate-instant: mathematical-premise
  thm-gr-jacobi-equation-and-geodesic-deviation: mathematical-premise
  lem-gr-conjugacy-via-the-exponential-map: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the geodesic deviation equation (3.113) and its flat-space reading, printed pp. 86-88 (PDF pp. 93-95)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.5: the geodesic deviation equation (4.22)-(4.24) and the flatness criterion, printed pp. 46-48 (PDF pp. 47-49)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Example

Let $M=\mathbb R^4$ carry the identity chart $x=(x^0,x^1,x^2,x^3)$, the flat
Lorentzian metric $g=\operatorname{diag}(-1,1,1,1)$ and the time orientation
$N=\partial_0$; let $\nabla$ be its metric-selected connection and $R$ its
curvature ([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]]). Then:

1. In the identity chart $\nabla$ is the coordinate connection, $\Gamma\equiv0$,
   and its geodesics are exactly the affine lines $t\mapsto p+tv$; moreover
   $\exp_p(v)=p+v$ and $d(\exp_p)_u=\operatorname{id}$ for every $u\in T_pM$.
2. $R=0$: every curvature component vanishes, although the identity chart is
   global.
3. Along the geodesic $\gamma(t)=p+tv$ the covariant derivative is the
   componentwise derivative in the identity chart, and the Jacobi fields along
   $\gamma$ are exactly the affine fields
   $$J(t)=J_0+tJ_1,\qquad J_0,J_1\in\mathbb R^4 ,$$
   with $D_tJ(0)=J_1$; the space of Jacobi fields along $\gamma$ is thus the
   image of the initial-value isomorphism of
   [[thm-gr-jacobi-equation-and-geodesic-deviation]] clause (c).
4. No geodesic of this model has a conjugate instant: if
   $J(t_0)=J(t_1)=0$ for $t_0<t_1$, then $J=0$. Consistently
   $d(\exp_p)_u=\operatorname{id}$ is invertible for every $u\in T_pM$,
   because $\exp_p(v)=p+v$ is a translation.
5. For the flat congruence $F(t,r):=p+tv+rw$ with $p,v,w\in\mathbb R^4$,
   $v\neq0$, the variation field is the constant field $J=w$ and
   $D_t^2J=0=R(T,J)T$: the deviation equation holds with no curvature term,
   and the relative acceleration of the congruence vanishes identically.

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb R^4,g)$ with identity chart $x$, $g=\operatorname{diag}(-1,1,1,1)$, and the geodesics $t\mapsto p+tv$.

[L1] The constant components $g_{ab}=\operatorname{diag}(-1,1,1,1)$ in the global identity chart define a smooth Lorentzian metric of signature $(-,+,+,+)$ with time orientation $N=\partial_0$, since $g(\partial_0,\partial_0)=-1$ ([[def-gr-smooth-lorentzian-objects]]).

[L2] An affine connection is $g$-compatible if and only if $\partial_ag_{bc}=\sum_d(\Gamma^d{}_{ab}g_{dc}+\Gamma^d{}_{ac}g_{bd})$ in every chart, and torsion-free if and only if $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$; the metric-selected connection exists, is unique, and is exactly the torsion-free $g$-compatible connection ([[lem-gr-connection-conditions-in-chart-components]] clauses 1-2, [[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] clause (a)).

[L3] In a chart, a geodesic with affine parameter satisfies $\ddot x^k+\sum_{i,j}\Gamma^k{}_{ij}\dot x^i\dot x^j=0$; the geodesic initial-value problem has a unique maximal solution $\gamma_{p,v}$, and $\exp_p(v)=\gamma_{p,v}(1)$ ([[prop-coordinate-geodesic-equation]], [[def-geodesic-of-an-affine-connection]], [[thm-gr-local-geodesics-and-exponential-map]]).

[L4] The curvature components in a chart are $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\sum_e(\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb})$, and $R$ is a smooth tensor field ([[thm-gr-curvature-tensoriality-and-coordinate-formula]] clauses (a)-(b), [[def-gr-curvature-tensor-and-derived-tensors]]).

[L5] Along a curve the covariant derivative has, in a chart, the component expression $D_tV^a=\partial_tV^a+\sum_{b,c}\Gamma^a{}_{bc}\dot\gamma^bV^c$ for a field $V=\sum_aV^a\partial_a$ ([[def-covariant-derivative-along-a-curve]]).

[L6] A Jacobi field along a geodesic $\gamma$ is a smooth field with $D_t^2J=R(\gamma',J)\gamma'$; for a smooth family of affinely parametrized geodesics the variation field satisfies the same equation ([[def-gr-jacobi-field-and-conjugate-instant]] clauses (b)-(c), [[thm-gr-jacobi-equation-and-geodesic-deviation]] clause (b)).

[L7] For a geodesic $\gamma(t)=\exp_p(tv)$ with $v\in T_pM$ and $s_1>0$ with $s_1v$ in the exponential domain, $d(\exp_p)_{s_1v}$ is injective if and only if no nonzero Jacobi field along $\gamma$ vanishes at $t=0$ and at $t=s_1$ ([[lem-gr-conjugacy-via-the-exponential-map]] clause (b)).

## Verification

**Proof technique:** direct.

1.1 (The metric-selected connection and its geodesics.) For the coordinate connection with $\Gamma\equiv0$ the symmetry $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$ is immediate and the compatibility identity of [L2] reads $\partial_ag_{bc}=0$, which holds because the metric components are constant; hence by [L2] this connection is the metric-selected connection and unique. By [L3] its geodesic equation is $\ddot x^k=0$, whose solutions are the affine lines, so the maximal geodesic with initial data $(p,v)$ is $t\mapsto p+tv$ defined on all of $\mathbb R$; therefore $\exp_p(v)=p+v$, and differentiating the chart expression of this translation gives $d(\exp_p)_u=\operatorname{id}$ for every $u$. [L1, L2, L3, algebra]

1.2 (Vanishing curvature and the componentwise derivative.) With $\Gamma\equiv0$ every term of the coordinate formula [L4] contains a Christoffel symbol or a derivative of one, so $R^a{}_{bcd}=0$ for all $a,b,c,d$ and $R=0$. By [L5], for a field $V=\sum_aV^a\partial_a$ along a curve, $D_tV=\sum_a(\partial_tV^a)\partial_a$: the identity frame is parallel along every curve, and $D_t$ is the componentwise derivative. [L4, L5, algebra]

2.1 (Jacobi fields are affine.) Let $J=\sum_aJ^a\partial_a$ be a smooth field along the geodesic $\gamma(t)=p+tv$; by step 1.1 $\gamma'=v$ has constant components. By step 1.2, $D_t^2J=\sum_a(J^a)''\partial_a$ and $R(\gamma',J)\gamma'=0$, so the Jacobi equation of [L6] is equivalent to $(J^a)''=0$ for $a=0,1,2,3$, whose solutions are exactly the affine functions $J^a(t)=J^a_0+tJ^a_1$. Hence the Jacobi fields are exactly the fields $J(t)=J_0+tJ_1$ with $J_0,J_1\in\mathbb R^4$, and $D_tJ(0)=J_1$ by step 1.2. [step 1.1, step 1.2, L6, algebra]

3.1 (No conjugate instants.) Let $t_0<t_1$ and let $J(t)=J_0+tJ_1$ be a Jacobi field as in step 2.1. If $J(t_0)=J(t_1)=0$, then subtracting the two equations gives $(t_1-t_0)J_1=0$, so $J_1=0$, and then $J_0=J(t_0)=0$: the only Jacobi field vanishing at two instants is the zero field. By [L7] applied to the geodesic $\gamma(t)=\exp_p(tv)$, whose exponential data lie in the domain $T_pM$ by step 1.1, $d(\exp_p)_{s_1v}$ is injective for every $s_1>0$ and every $v$: no geodesic of the flat model has a conjugate instant relative to any of its points. [step 2.1, step 1.1, L7, algebra]

4.1 (The flat congruence.) Let $F(t,r):=p+tv+rw$ and $T=\partial_tF=v$, $J=\partial_rF=w$, both with constant components. By step 1.2, $D_t^2J=0$ and $R(T,J)T=0$, so $D_t^2J=R(T,J)T$ holds, in accordance with the deviation equation of [L6]; the variation field is parallel and the relative acceleration of the family vanishes everywhere. [step 1.2, step 1.1, L6, algebra] ∎

## Remarks

- **Flat versus curved.** In the flat model the deviation of nearby geodesics is
  governed by affine initial data alone, and no conjugate instants occur. The
  contrast with the sphere-factor metric of
  [[ex-gr-curvature-of-a-product-with-a-round-sphere]], where a Jacobi field
  vanishes again at parameter distance $\pi$, is computed in
  [[ex-gr-conjugate-instant-on-a-round-sphere-factor]].
- **Scope.** The statements are about the flat Lorentzian four-manifold with
  its metric-selected connection; no maximality of geodesics, completeness or
  causal claim beyond the displayed computations is made.
