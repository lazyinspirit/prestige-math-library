---
id: thm-gr-point-normal-and-exponential-coordinate-charts
kind: theorem
title: "Point-normal and exponential coordinate charts of the metric-selected connection"
status: draft
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-local-geodesics-and-exponential-map, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-metric-selected-connection, def-gr-smooth-lorentzian-objects, def-christoffel-symbols-of-an-affine-connection, thm-christoffel-symbol-transformation-law, lem-gr-connection-conditions-in-chart-components, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space, lem-lorentz-form-has-orthonormal-basis, def-lorentz-form-and-inertia, def-geodesic-of-an-affine-connection, prop-coordinate-geodesic-equation, def-c-r-and-smooth-maps-between-smooth-manifolds, def-differential-of-a-smooth-map, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, def-smooth-manifold, def-interval]
dependency_roles:
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  thm-christoffel-symbol-transformation-law: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 3.4: normal coordinates, $\\Gamma^\\mu{}_{(\\nu\\rho)}(p)=0$, $g_{\\mu\\nu,\\rho}(p)=0$ and $g_{\\mu\\nu}(p)=\\eta_{\\mu\\nu}$, printed pp. 38-40 (PDF pp. 39-41)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 2 'Riemann normal coordinates', printed pp. 50-51 (PDF pp. 57-58) and Ch. 3 'geodesics', the exponential map (3.62)-(3.63), printed pp. 72-73 (PDF pp. 79-80)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.3.2: normal coordinates $g_{\\mu\\nu}(p)=\\eta_{\\mu\\nu}$, $g_{\\mu\\nu,\\rho}(p)=0$, the counting argument, and that second derivatives cannot generally be made to vanish, printed pp. 119-121 (PDF pp. 126-128)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), whose geodesics
and exponential map are those of [[thm-gr-local-geodesics-and-exponential-map]].

**(a) Point-normal charts.** For every $p\in M$ there is a smooth chart
$(U,x)$ around $p$ with $x(p)=0$ such that, in the components of this chart,

$$\Gamma^a{}_{bc}(p)=0,\qquad \partial_ag_{bc}(p)=0,\qquad g_{ab}(p)=\eta_{ab}=\operatorname{diag}(-1,1,1,1)_{ab}.$$

The construction starts from any chart around $p$ and is finite: no frame field
on $U$ and no global trivialization of $TM$ is used.

**(b) Exponential charts.** For every $p\in M$ and every $g_p$-orthonormal
basis $e_0,\dots,e_3$ of $T_pM$ there is a star-shaped open neighborhood
$W\subseteq T_pM$ of $0$ on which $\exp_p$ is a diffeomorphism onto an open
$U_p\ni p$, and the chart

$$u:=\psi\circ\exp_p^{-1}:U_p\longrightarrow\mathbb R^4,$$

where $\psi:T_pM\to\mathbb R^4$ is the coordinate isomorphism of the basis,
satisfies $u(p)=0$ and the same three normal-form identities at $p$ as in (a).
Moreover every geodesic through $p$ has, in the chart $u$, the form
$u(\gamma(t))=t\,k$ for a constant $k\in\mathbb R^4$, as long as it remains in
$U_p$; in particular the geodesics through $p$ are the coordinate lines
through the origin. No assertion is made about the second derivatives of the
metric at $p$: the construction is first order and does not make a neighborhood
of $p$ isometric to Minkowski space.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with metric-selected connection $\nabla$, and a point $p\in M$.

[L1] For the metric-selected connection, the Christoffel symbols transform under a coordinate change $x\leftrightarrow y$ by the inhomogeneous law $\widetilde\Gamma^c{}_{ab}=\frac{\partial y^c}{\partial x^k}\bigl(\frac{\partial x^i}{\partial y^a}\frac{\partial x^j}{\partial y^b}\Gamma^k{}_{ij}+\frac{\partial^2x^k}{\partial y^a\partial y^b}\bigr)$ ([[thm-christoffel-symbol-transformation-law]], [[def-christoffel-symbols-of-an-affine-connection]]).

[L2] Metric compatibility is equivalent in a chart to $\partial_ag_{bc}=\sum_d\bigl(\Gamma^d{}_{ab}g_{dc}+\Gamma^d{}_{ac}g_{bd}\bigr)$; the metric components in a chart are smooth ([[lem-gr-connection-conditions-in-chart-components]], [[def-gr-smooth-lorentzian-objects]]).

[L3] A $C^1$ map between Euclidean open sets with invertible derivative at a point is a local $C^1$ diffeomorphism there, and the inverse function relation $x(y(x))=x$ permits differentiation ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], [[thm-christoffel-symbol-transformation-law]]).

[L4] A Lorentz form on a real vector space has an orthonormal basis $e_0,\dots,e_3$ with $g_p(e_A,e_B)=\eta_{AB}$, and $g_p(e_A,e_B)$ is the matrix of $g_p$ in that basis ([[lem-lorentz-form-has-orthonormal-basis]], [[def-lorentz-form-and-inertia]]).

[L5] In the chart domain of the exponential map, the radial curves $t\mapsto\exp_p(tv)$ are geodesics with $\exp_p(tv)=\gamma_{p,v}(t)$, the differential of $\exp_p$ at $0$ is the identity under the canonical identification $T_0(T_pM)\cong T_pM$, and $\exp_p$ restricts to a diffeomorphism on a star-shaped neighborhood of $0$ ([[thm-gr-local-geodesics-and-exponential-map]]).

[L6] In coordinates, a curve is a geodesic if and only if $\ddot x^k+\sum_{i,j}\Gamma^k{}_{ij}(x)\dot x^i\dot x^j=0$; the coordinate derivations $\partial_a$ form a basis of each tangent space of the chart ([[prop-coordinate-geodesic-equation]], [[def-geodesic-of-an-affine-connection]], [[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]).

## Proof

**Proof technique:** direct.

1.1 (Point-normal chart.) Fix a smooth chart $(V,y)$ around $p$ with $y(p)=0$, and on a Euclidean ball around $0$ in $y(V)$ define $x^a:=y^a+\tfrac12\sum_{b,c}\Gamma^a{}_{bc}(p)\,y^by^c$. Its derivative at $0$ is the identity matrix, so by [L3] $x$ restricts to a diffeomorphism from a neighborhood of $0$ onto an open set: it is a chart around $p$ with $x(p)=0$. [L1, L3, given, construct]

1.2 (Exponential chart.) Fix a $g_p$-orthonormal basis $e_0,\dots,e_3$, let $\psi$ be its coordinate isomorphism, and let $W$ be a star-shaped neighborhood of $0$ on which $\exp_p$ is a diffeomorphism onto an open set $U_p$, as supplied by [L5]. Then $\exp_p(0)=p$, so $u:=\psi\circ\exp_p^{-1}$ is a smooth chart on $U_p$ with $u(p)=0$; it is the composition of the smooth maps $\exp_p^{-1}$ and the linear isomorphism $\psi$. [L5, construct]

2.1 (Christoffel symbols vanish at $p$.) Differentiating the inverse relation $x(y(x))=x$ twice at $x=0$ where the first derivatives are the identity gives $\partial^2y^a/\partial x^b\partial x^c(0)=-\partial^2x^a/\partial y^b\partial y^c(0)=-\Gamma^a{}_{bc}(p)$. Substituting this and the identity Jacobians into the transformation law of [L1], with $y$ as the old and $x$ as the new coordinates, gives $\Gamma^x{}^a{}_{bc}(0)=\Gamma^a{}_{bc}(p)-\Gamma^a{}_{bc}(p)=0$. [step 1.1, L1, L3, algebra]

2.2 (Straight coordinate lines.) Let $k\in\mathbb R^4$ and put $v:=\psi^{-1}(k)\in T_pM$; for $t$ in a neighborhood of $0$ with $tv\in W$, [L5] gives $u^{-1}(tk)=\exp_p(tv)=\gamma_{p,v}(t)$, which is a geodesic. Substituting $x(t)=tk$ into the coordinate geodesic equation of [L6] gives $\sum_{b,c}\Gamma^a{}_{bc}(tk)k^bk^c=0$ for all $a$ and all $t$ in an interval, hence at $t=0$: $\sum_{b,c}\Gamma^a{}_{bc}(0)k^bk^c=0$ for every $k\in\mathbb R^4$. Given $a$ and two indices $b\neq c$, apply this with $k=e_b+e_c$ and with $k=e_b-e_c$ and subtract to get $2\bigl(\Gamma^a{}_{bc}(0)+\Gamma^a{}_{cb}(0)\bigr)=0$, that is $\Gamma^a{}_{(bc)}(0)=0$; torsion freedom gives $\Gamma^a{}_{bc}(0)=\Gamma^a{}_{(bc)}(0)=0$. [step 1.2, L5, L6, algebra]

2.3 (All geodesics through $p$ are straight lines.) Let $\gamma$ be a geodesic with $\gamma(t_0)=p$ for some $t_0$ in its domain, and let $v_0:=\gamma'(t_0)$; by the affine freedom of the parameter (which allows translation and nonvanishing scaling) assume $t_0=0$. Then $\gamma$ and $t\mapsto\exp_p(tv_0)=\gamma_{p,v_0}(t)$ are geodesics with the same value and tangent at $0$, so they agree by the uniqueness of maximal geodesics of [L5]; in the chart $u$ this is $u(\gamma(t))=t\,\psi(v_0)$, a coordinate line through the origin. [step 1.2, L5, algebra]

3.1 (Metric first derivatives vanish, normal form.) Applying the compatibility identity of [L2] in the chart $x$ at the point $p$ gives $\partial_ag^x{}_{bc}(p)=\sum_d\bigl(\Gamma^x{}^d{}_{ab}(p)g^x{}_{dc}(p)+\Gamma^x{}^d{}_{ac}(p)g^x{}_{bd}(p)\bigr)=0$ by step 2.1. Let $A$ be the matrix whose columns are the components in the chart $x$ of an orthonormal basis of $(T_pM,g_p)$, supplied by [L4], and set $z:=A^{-1}x$ near $p$. Under this constant linear coordinate change the transformation law of [L1] has no second-derivative term and gives $\Gamma^z{}_{bc}(0)=0$; the metric components satisfy $g^z{}_{ab}(0)=g^x{}_{cd}(0)A^c{}_aA^d{}_b=\eta_{ab}$ by the choice of $A$; and $\partial g^z(0)=0$ because a constant linear change composes the derivative array with the fixed invertible Jacobians. This proves (a). [step 2.1, L2, L4, algebra]

3.2 (Metric normal form in the exponential chart.) With $\Gamma^u(0)=0$ from step 2.2, the compatibility identity of [L2] gives $\partial_ag^u{}_{bc}(0)=0$. The coordinate basis at $p$ is $\partial_{u^a}|_p=d(\exp_p)_0(e_a)\cdot$ in the identification of [L5], which equals $e_a$; hence $g^u{}_{ab}(0)=g_p(e_a,e_b)=\eta_{ab}$. [step 2.2, L2, L5, L4, algebra]

4.1 Claims (a) and (b) are steps 3.1 and 1.2-3.2 respectively; the final assertion about second derivatives is a scope statement, and the proof above never differentiates the metric twice, so it asserts nothing at second order. [step 3.1, step 3.2, step 2.3] ∎

## Remarks

- **No flatness and no global inertial frame.** The identities of this theorem hold at the single point $p$. A chart in which $\Gamma(p)=0$ and $\partial g(p)=0$ is not an isometry and does not make $U$ a piece of Minkowski space; the higher derivatives of the metric are not controlled by the construction. The physical reading of such a chart as a local inertial frame, and its limitations, are recorded in [[rem-gr-normal-coordinates-and-local-inertial-frames-scope]] and are not part of this mathematical statement.

- **Finite choices.** Part (a) selects one initial chart, one quadratic correction and one constant matrix from a supplied orthonormal basis; part (b) selects one supplied orthonormal basis and one star-shaped domain. All are finite data, and no additional choice principle is used beyond the inherited $\mathrm{AC}_\omega$ of the ambient smooth structure.
