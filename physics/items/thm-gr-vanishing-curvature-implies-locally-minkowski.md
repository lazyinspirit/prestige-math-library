---
id: thm-gr-vanishing-curvature-implies-locally-minkowski
kind: theorem
title: "Vanishing curvature on a normal neighborhood is a local isometry to Minkowski space"
status: draft
origin: session
domain: mathematics
dependency_level: 14
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-point-normal-and-exponential-coordinate-charts, thm-gr-local-geodesics-and-exponential-map, lem-gr-conjugacy-via-the-exponential-map, thm-gr-jacobi-equation-and-geodesic-deviation, def-gr-jacobi-field-and-conjugate-instant, lem-gr-parallel-transport-and-geodesic-speed, def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-tensoriality-and-coordinate-formula, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-smooth-lorentzian-objects, lem-lorentz-form-has-orthonormal-basis, def-gr-inverse-metric-and-musical-isomorphisms, def-christoffel-symbols-of-an-affine-connection, def-differential-of-a-smooth-map, def-geodesic-of-an-affine-connection, def-covariant-derivative-along-a-curve, def-interval]
dependency_roles:
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-gr-conjugacy-via-the-exponential-map: mathematical-premise
  thm-gr-jacobi-equation-and-geodesic-deviation: mathematical-premise
  def-gr-jacobi-field-and-conjugate-instant: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 2-3: Riemann normal coordinates and the statement that vanishing curvature implies a locally constant metric in suitable coordinates, printed pp. 50-51 (PDF pp. 57-58) and pp. 77-78 (PDF pp. 84-85)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 3.4: normal coordinates g_{mu nu}(p)=eta_{mu nu}, partial g(p)=0 and the curvature obstruction to flatness, printed pp. 38-40 (PDF pp. 39-41)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.3.2: normal coordinates and the statement that flat space is locally isometric to Minkowski space, printed pp. 119-121 (PDF pp. 126-128)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$ and curvature $R$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]],
[[def-gr-curvature-tensor-and-derived-tensors]]). Let $p\in M$, let
$\mathcal E_p\subseteq T_pM$ be the exponential domain of
[[thm-gr-local-geodesics-and-exponential-map]], let $W\subseteq\mathcal E_p$
be a star-shaped open neighborhood of $0$ on which $\exp_p$ is a
diffeomorphism onto the open set $U:=\exp_p(W)$, and suppose

$$R\equiv0\quad\text{on }U .$$

Let $(e_0,e_1,e_2,e_3)$ be a $g_p$-orthonormal basis of $T_pM$ and
$\psi:T_pM\to\mathbb R^4$ its coordinate isomorphism, and write
$\eta_{ab}:=g_p(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$
([[lem-lorentz-form-has-orthonormal-basis]]).

**(a) The differential of the exponential map is an isometry.** For every
$v\in W$ the differential
$d(\exp_p)_v:\bigl(T_pM,g_p\bigr)\to\bigl(T_{\exp_p(v)}M,g_{\exp_p(v)}\bigr)$
is a linear isometry ([[def-differential-of-a-smooth-map]]).

**(b) Local isometry.** The map $\exp_p:(W,g_p)\to(U,g)$ is an isometry of
the open subset $W$ of the flat vector space $(T_pM,g_p)$ onto $(U,g)$;
equivalently $\exp_p^*g=g_p$ on $W$.

**(c) Constant metric components.** In the exponential chart
$u:=\psi\circ\exp_p^{-1}:U\to\mathbb R^4$, the components of $g$ are the
constants $g_{ab}=\eta_{ab}$; hence the identity map of $u(U)$ with the
standard Minkowski form is an isometry of $U$ onto an open subset of
Minkowski space.

**(d) Open flat sets.** If $R\equiv0$ on an open set $O\subseteq M$ and
$p\in O$, then there is a star-shaped open $W_0\subseteq\mathcal E_p$ with
$\exp_p(W_0)\subseteq O$ for which (a)-(c) hold; in particular every point of
$O$ has a neighborhood isometric to an open subset of Minkowski space.

**(e) Converse direction.** Conversely, if an open set $V\subseteq M$ admits
a smooth chart in which $g_{ab}=\eta_{ab}$ are constant, then $R\equiv0$ on
$V$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold with metric-selected connection, a point $p$, a star-shaped open $W\subseteq\mathcal E_p$ with $\exp_p$ a diffeomorphism onto $U=\exp_p(W)$, an orthonormal basis $(e_a)$ of $T_pM$, and the assumption $R\equiv0$ on $U$.

[L1] $\exp_p$ is smooth, $\exp_p(0)=p$, $d(\exp_p)_0=\operatorname{id}$ under the canonical identification $T_0(T_pM)\cong T_pM$, and $\exp_p|_W$ is a diffeomorphism onto $U$ for star-shaped $W$; for $v\in W$ and $t\in[0,1]$ the curve $t\mapsto\exp_p(tv)$ is the geodesic with initial velocity $v$ ([[thm-gr-local-geodesics-and-exponential-map]] clauses (c)-(d), [[def-geodesic-of-an-affine-connection]]).

[L2] For $v\in W$ and $X\in T_pM$, let $J_X$ be the unique Jacobi field along $\gamma_v(t)=\exp_p(tv)$ with $J_X(0)=0$, $D_tJ_X(0)=X$. Then $d(\exp_p)_{tv}(tX)=J_X(t)$ for $0\le t\le1$; in particular $d(\exp_p)_v(X)=J_X(1)$ ([[lem-gr-conjugacy-via-the-exponential-map]] clause (a), [[thm-gr-jacobi-equation-and-geodesic-deviation]] clause (c), [[def-gr-jacobi-field-and-conjugate-instant]] clause (b)).

[L3] Jacobi fields satisfy $D_t^2J=R(\gamma',J)\gamma'$ and are determined by $(J,D_tJ)$ at one parameter ([L2] references, [[def-covariant-derivative-along-a-curve]]). Parallel transport along a curve exists, is unique, linear and bijective, and preserves the metric: $g_{\gamma(b)}(P_\gamma v,P_\gamma w)=g_{\gamma(a)}(v,w)$; a field $V$ with $D_tV=0$ and $V(0)=X$ is exactly $t\mapsto P_tX$ ([[lem-gr-parallel-transport-and-geodesic-speed]] clause 2).

[L4] In a chart with vanishing metric derivatives, $\Gamma^a{}_{bc}=\tfrac12\sum_dg^{ad}(\partial_bg_{cd}+\partial_cg_{bd}-\partial_dg_{bc})=0$, and then $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\sum_e(\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb})=0$ ([[def-christoffel-symbols-of-an-affine-connection]], [[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (b), [[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L5] The components of a metric of a diffeomorphism $F$ and the pulled-back metric are related by $(F^*g)_q(X,Y)=g_{F(q)}(dF_qX,dF_qY)$; if $F$ is a diffeomorphism and $dF_q$ is a linear isometry for every $q$, then $F$ is an isometry ([[def-differential-of-a-smooth-map]], [[def-gr-smooth-lorentzian-objects]]).

## Proof

**Proof technique:** direct; with the curvature vanishing along the geodesics from $p$, the Jacobi fields are linear in the parallel transport, so the exponential map is metrically rigid at every radius.

1.1 (Jacobi fields are linear in the parallel transport.) Fix $v\in W$ and let $P_t:T_pM\to T_{\gamma_v(t)}M$ be the parallel transport along $\gamma_v$ from $0$ to $t$ for $t\in[0,1]$; by [L3], $P_t$ is a linear isometry and $t\mapsto P_tX$ is the unique parallel field along $\gamma_v$ with value $X$ at $t=0$. Since $\gamma_v([0,1])\subseteq\exp_p(W)=U$ by star-shapedness, $R(\gamma_v'(t),\cdot)\gamma_v'(t)=0$ for every $t$, so $D_t^2J=0$ is the Jacobi equation of [L3]. The field $J(t):=tP_tX$ satisfies $J(0)=0$, $D_tJ=P_tX$ (because $D_t(P_tX)=0$ and $D_t(tP_tX)=P_tX$), hence $D_t^2J=0$ and $D_tJ(0)=X$. By uniqueness of Jacobi fields with prescribed initial data, $J_X(t)=tP_tX$. [L1, L2, L3, given, algebra]

1.2 (Converse direction.) Suppose a chart $(V,y)$ has constant components $g_{ab}=\eta_{ab}$. Then all $\partial_cg_{ab}$ vanish, and [L4] gives $\Gamma^a{}_{bc}=0$ and $R^a{}_{bcd}=0$ on $V$; since the curvature is a tensor and its components vanish in one chart, $R\equiv0$ on $V$. This proves (e). [L4, given, algebra]

2.1 (The differential of the exponential map is an isometry.) Fix $v\in W$ and $X,Y\in T_pM$. By [L2] and step 1.1, $d(\exp_p)_v(X)=J_X(1)=P_1X$ and likewise $d(\exp_p)_v(Y)=P_1Y$. The map $d(\exp_p)_v$ is linear because it is a differential, and by the isometry property of $P_1$ in [L3], $$g_{\exp_p(v)}\bigl(d(\exp_p)_vX,d(\exp_p)_vY\bigr)=g_{\exp_p(v)}(P_1X,P_1Y)=g_p(X,Y).$$ Hence $d(\exp_p)_v$ is a linear isometry. This proves (a). [step 1.1, L2, L3, algebra]

3.1 (The exponential map is a local isometry.) By [L1] the map $\exp_p|_W:W\to U$ is a diffeomorphism onto $U$, and by step 2.1 its differential at every $v\in W$ is a linear isometry; by [L5] this means $(\exp_p)^*g=g_p$ on $W$, that is, $\exp_p$ is an isometry of $(W,g_p)$ onto $(U,g)$. This proves (b). [step 2.1, L1, L5, algebra]

4.1 (Constant components in the exponential chart.) Let $u=\psi\circ\exp_p^{-1}$ be the exponential chart and $\partial_a^u$ the corresponding coordinate fields; by [L5] applied to the diffeomorphism $\exp_p$ and the definition $e_a=\psi^{-1}$-image of the standard basis, $$g_{ab}(q)=(\exp_p^*g)_{\exp_p^{-1}(q)}\bigl(e_a,e_b\bigr)=g_p(e_a,e_b)=\eta_{ab}\qquad(q\in U).$$ Thus all components of $g$ in the chart $u$ equal the constants $\eta_{ab}$, proving (c) and the displayed formula of the statement; in particular the chart $u$ is an isometry of $U$ onto the open set $u(U)\subseteq\mathbb R^4$ carrying the Minkowski form. [step 3.1, L5, given, algebra]

5.1 (Open flat sets and conclusion.) Let $p\in O$ with $R\equiv0$ on the open set $O$. Since $\exp_p$ is continuous with $\exp_p(0)=p$ and $O$ is open, there is $\delta>0$ with $\exp_p(B_\delta(0)\cap\mathcal E_p)\subseteq O$; the set $W_0:=B_\delta(0)\cap\mathcal E_p$ is open and star-shaped about $0$ (an intersection of star-shaped sets), and after shrinking $\delta$ so that $\exp_p$ is a diffeomorphism on $W_0$ the hypotheses of the theorem hold with $W_0$ in place of $W$, so conclusions (a)-(c) hold for $W_0$; this proves (d) for the point $p$, and applying the same construction at each $q\in O$ gives each point of $O$ a neighborhood isometric to an open subset of Minkowski space. Together with step 1.2 this proves (d) and (e), and steps 2.1, 3.1 and 4.1 prove (a), (b) and (c) under the stated hypothesis. [step 1.2, step 2.1, step 3.1, step 4.1, L1, given] ∎

## Remarks

- **Local, not global.** The theorem is a local statement: it identifies a normal neighborhood of a point at which the curvature vanishes with an open subset of Minkowski space. It does not assert that a flat Lorentzian manifold is globally isometric to Minkowski space; global topology, holonomy and causal pathologies are not controlled by the local hypothesis; the companion examples page exhibits a flat Lorentzian quotient that is not globally Minkowski.
- **Vanishing on the whole chart.** The hypothesis $R\equiv0$ on $U$ is used only along the geodesics from $p$ that remain in $U$; it is satisfied in particular when the whole manifold is flat, but no global classification is claimed.
- **First-order normal coordinates are weaker.** Every Lorentzian metric has point-normal coordinates with $g(p)=\eta$ and $\partial g(p)=0$ ([[thm-gr-point-normal-and-exponential-coordinate-charts]]); the present theorem is the statement that if the curvature actually vanishes, the normal chart is globally flat to all orders.
