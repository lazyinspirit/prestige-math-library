---
id: lem-gr-flat-model-connection-curvature-and-geodesics
kind: lemma
title: "The flat model: vanishing connection and curvature, translation Killing fields and straight geodesics"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-minkowski-model-and-inertial-chart, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-christoffel-symbols-of-an-affine-connection, lem-gr-connection-conditions-in-chart-components, thm-gr-curvature-tensoriality-and-coordinate-formula, def-gr-curvature-tensor-and-derived-tensors, prop-coordinate-geodesic-equation, def-geodesic-of-an-affine-connection, def-gr-killing-field, def-lie-derivative-of-a-tensor-field, def-local-and-global-flow, def-complete-vector-field, thm-fundamental-theorem-on-flows, def-smooth-vector-field-as-a-tangent-bundle-section, lem-gr-proper-time-reparametrization-and-four-velocity, def-gr-timelike-worldline-and-proper-time, lem-gr-parallel-transport-and-geodesic-speed, def-euclidean-inner-product]
dependency_roles:
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-gr-killing-field: mathematical-premise
  def-lie-derivative-of-a-tensor-field: mathematical-premise
  def-local-and-global-flow: mathematical-premise
  def-complete-vector-field: mathematical-premise
  thm-fundamental-theorem-on-flows: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the geodesic equation (3.47) and the statement that in flat space geodesics are straight lines in inertial coordinates, printed pp. 70-71 (PDF pp. 77-78)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 2.1: vanishing Christoffel symbols and curvature of the flat metric in Cartesian coordinates, printed pp. 25-27 (PDF pp. 26-28)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.3.1: the geodesic equation and the statement that constant-velocity straight lines are the geodesics of the flat metric, printed pp. 119-121 (PDF pp. 126-128)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be the flat model of
[[def-gr-minkowski-model-and-inertial-chart]] with its inertial chart $x$,
and let $\nabla$ be its metric-selected connection, whose existence and
uniqueness are supplied by
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]. Let $c>0$ be a
real parameter.

**(a) Vanishing connection.** In the inertial chart all Christoffel symbols
of $\nabla$ vanish identically:

$$\Gamma^a{}_{bc}\equiv0\qquad(a,b,c=0,1,2,3).$$

**(b) Vanishing curvature.** The curvature operator of $\nabla$ vanishes
identically, $R\equiv0$; consequently the curvature components, the Ricci
tensor, the scalar curvature and the Einstein tensor vanish identically,

$$R^a{}_{bcd}\equiv0,\qquad \operatorname{Ric}_{ab}\equiv0,\qquad S\equiv0,\qquad G_{ab}\equiv0 .$$

**(c) Translation Killing fields.** Each coordinate field $\partial_a$ is a
Killing field of $(M,g)$ ([[def-gr-killing-field]]); in particular the time
orientation field $N=\partial_0$ is a unit timelike Killing field.

**(d) Straight geodesics.** A smooth curve $\gamma:I\to M$ on an interval
$I\subseteq\mathbb R$ with nonempty interior
([[def-geodesic-of-an-affine-connection]]) is a geodesic of $\nabla$ if and
only if there are $x_0,v\in\mathbb R^4$ such that

$$x\bigl(\gamma(s)\bigr)=x_0+s\,v\qquad(s\in I).$$

For such a geodesic the speed is constant,
$g(\gamma',\gamma')=\eta(v,v)=-(v^0)^2+\sum_{i=1}^3(v^i)^2$; the maximal
geodesic with $x(\gamma(0))=x_0$ and $x(\gamma)'(0)=v$ has domain
$\mathbb R$. If $\eta(v,v)<0$ and $v^0>0$, the geodesic is a future timelike
worldline
([[def-gr-timelike-worldline-and-proper-time]]) and, for any $s_0\in I$,
the parameter
$\tau(s):=\sqrt{-\eta(v,v)}\,(s-s_0)/c$ is proper time up to an additive
constant, with $d\gamma/d\tau$ the physical four-velocity
$U$, $g(U,U)=-c^2$
([[lem-gr-proper-time-reparametrization-and-four-velocity]] clause 3).

**(e) Inertial-chart velocity reading.** Let $\gamma$ be a geodesic as in
(d) with $x(\gamma(s))=x_0+sv$, $\eta(v,v)<0$ and $v^0>0$. Define
$t(s):=x^0(\gamma(s))/c=(x_0^0+sv^0)/c$; this is strictly increasing, and
on $t(I)$ define
$\gamma_t(t):=\gamma((ct-x_0^0)/v^0)$. Then
$x(\gamma_t(t))=(ct,\mathbf q(t))$ for its spatial component $\mathbf q$,
and the coordinate velocity is the constant vector
$\mathbf w:=d\mathbf q/dt=(c/v^0)(v^1,v^2,v^3)$. With
$|\mathbf w|:=\|\mathbf w\|_2$ from the Euclidean inner product
([[def-euclidean-inner-product]]), timelikeness gives $|\mathbf w|<c$.

## Facts & Assumptions

**Given:** The flat model $(M,g,N)$ of [[def-gr-minkowski-model-and-inertial-chart]] with its metric-selected connection $\nabla$, the inertial chart $x$, a real parameter $c>0$, and a smooth curve $\gamma:I\to M$.

[L1] In a chart, the Christoffel symbols of the metric-selected connection are $\Gamma^a{}_{bc}=\tfrac12\sum_dg^{ad}\bigl(\partial_bg_{cd}+\partial_cg_{bd}-\partial_dg_{bc}\bigr)$; equivalently, metric compatibility and torsion freedom are the identities $\partial_ag_{bc}=\sum_d(\Gamma^d{}_{ab}g_{dc}+\Gamma^d{}_{ac}g_{bd})$ and $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$ ([[def-christoffel-symbols-of-an-affine-connection]], [[lem-gr-connection-conditions-in-chart-components]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L2] In a chart with Christoffel symbols $\Gamma^a{}_{bc}$, the curvature components are $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\sum_e(\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb})$, and $\operatorname{Ric}_{bd}=\sum_{a,c}g^{ac}R_{abcd}$, $S=\sum_{b,d}g^{bd}\operatorname{Ric}_{bd}$, $G_{ab}=\operatorname{Ric}_{ab}-\tfrac12Sg_{ab}$ ([[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (b), [[def-gr-curvature-tensor-and-derived-tensors]] clause (c)).

[L3] In coordinates, a smooth curve is a geodesic if and only if $\ddot z^k+\sum_{i,j}\Gamma^k{}_{ij}(z)\dot z^i\dot z^j=0$ on every parameter subinterval lying in the chart, where $z=x\circ\gamma$ ([[prop-coordinate-geodesic-equation]], [[def-geodesic-of-an-affine-connection]]).

[L4] A smooth vector field $X$ on $M$ has a unique maximal local flow $\Phi:\mathcal D\to M$, $(s,p)\mapsto\gamma_p(s)$, whose fibres are the maximal integral curves; if $\Phi_s$ is defined for all $s\in\mathbb R$ and all $p$ it is a global flow ([[thm-fundamental-theorem-on-flows]], [[def-local-and-global-flow]], [[def-complete-vector-field]]).

[L5] For a smooth vector field $\xi$, the Lie derivative of the metric is $\mathcal L_\xi g=\frac{d}{ds}\big|_{s=0}\Phi_s^*g$, where $\Phi$ is the flow of $\xi$; $\xi$ is a Killing field exactly when $\mathcal L_\xi g=0$ ([[def-gr-killing-field]], [[def-lie-derivative-of-a-tensor-field]]).

[L6] On a future-directed timelike geodesic with affine parameter $s$ and constant speed $g(\gamma',\gamma')=-\lambda^2<0$, the parameter $\tau=\lambda(s-s_0)/c$ is proper time, and $U=d\gamma/d\tau$ satisfies $g(U,U)=-c^2$ ([[lem-gr-proper-time-reparametrization-and-four-velocity]] clause 3, [[def-gr-timelike-worldline-and-proper-time]]).

[L7] In $\mathbb R^3$ the Euclidean norm satisfies $\|(w^1,w^2,w^3)\|_2^2=\sum_{i=1}^3(w^i)^2$ ([[def-euclidean-inner-product]]).

## Proof

**Proof technique:** direct; evaluate the chart formulas for a metric with constant components, then identify the flow and the geodesics.

1.1 (The connection vanishes.) In the inertial chart all metric components are the constants $\eta_{ab}$ by [[def-gr-minkowski-model-and-inertial-chart]] clause (a), so each partial derivative $\partial_ag_{bc}$ vanishes identically. The formula of [L1] gives $\Gamma^a{}_{bc}=\tfrac12\sum_d\eta^{ad}(0+0-0)=0$ at every point of $M$, proving (a). [L1, given, algebra]

1.2 (The coordinate fields are Killing.) Fix $a\in\{0,1,2,3\}$ and consider the map $\Psi_s(p):=p+s\,e_a$ in the identity chart, where $e_a$ is the $a$-th standard basis vector. The curve $s\mapsto\Psi_s(p)$ has coordinate derivative $e_a$ at every parameter, so it is an integral curve of $\partial_a$; it is defined for all $s\in\mathbb R$. By uniqueness of maximal integral curves in [L4], the maximal local flow of $\partial_a$ is this global flow $\Psi$. In the inertial chart the differential of $\Psi_s$ is the identity of the chart basis and the metric components are the constants $\eta_{ab}$, so the components of the pulled-back field are $(\Psi_s^*g)_{ab}(p)=g_{ab}(\Psi_s(p))=\eta_{ab}=g_{ab}(p)$ for all $p$; hence $\Psi_s^*g=g$ for every $s$. By [L5], $\mathcal L_{\partial_a}g=\frac{d}{ds}\big|_{0}\Psi_s^*g=0$, so $\partial_a$ is a Killing field. In particular $N=\partial_0$ is Killing, and $g(N,N)=-1$ by clause (c) of [[def-gr-minkowski-model-and-inertial-chart]], so it is unit timelike. This proves (c). [L4, L5, given, algebra]

2.1 (The curvature vanishes.) Substituting $\Gamma\equiv0$ into the coordinate formula of [L2] gives $R^a{}_{bcd}\equiv0$; since $\operatorname{Ric}$, $S$ and $G$ are obtained from $R^a{}_{bcd}$ and $g^{ab}$ by the contractions and products displayed in [L2], and $g^{ab}$ is the constant matrix $\operatorname{diag}(-1,1,1,1)$, all of them vanish identically. The curvature operator vanishes because its components in the chart vanish, and a smooth tensor field all of whose components in one chart vanish is the zero field. This proves (b). [step 1.1, L2, algebra]

2.2 (Geodesics are straight lines.) Let $z:=x\circ\gamma:I\to\mathbb R^4$ be the coordinate expression of a smooth curve. By [L3] and step 1.1, $\gamma$ is a geodesic if and only if $\ddot z^k=0$ for $k=0,1,2,3$ on every parameter subinterval, that is, if and only if $z(s)=x_0+sv$ for some $x_0,v\in\mathbb R^4$; then the maximal interval is all of $\mathbb R$, because the affine expression extends to $\mathbb R$ and is again a solution. The speed is constant for every geodesic by clause 3 of [[lem-gr-parallel-transport-and-geodesic-speed]], and inserting the affine expression gives the value $g(\gamma',\gamma')=\eta(v,v)$. This proves the first two claims of (d). [step 1.1, L3, algebra]

3.1 (Future timelike geodesics and proper time.) Suppose $\eta(v,v)=-\lambda^2<0$ with $v^0>0$. By clause (c) of [[def-gr-minkowski-model-and-inertial-chart]], $\gamma$ is a future timelike curve, and by [L6] the parameter $\tau(s)=\lambda(s-s_0)/c$ is proper time, with $g(U,U)=-c^2$ for $U=d\gamma/d\tau$. This proves the third claim of (d); for (e), write $t=x^0(\gamma(s))/c=\bigl(x_0^0+sv^0\bigr)/c$, so that $d\mathbf q/dt=(c/v^0)(v^1,v^2,v^3)$ is constant; from $\eta(v,v)<0$ and $v^0>0$ we have $\sum_i(v^i)^2<(v^0)^2$, hence [L7] gives $|\mathbf w|^2=c^2\sum_i(v^i)^2/(v^0)^2<c^2$. [step 2.2, L6, L7, given, algebra] ∎

## Remarks

- **Flatness is a computation, not a definition.** The model is *called* flat in [[def-gr-minkowski-model-and-inertial-chart]]; its curvature vanishing is proved here from the constant components, and no converse statement (that a flat Lorentzian manifold is isometric to this model) is asserted.
- **Maximality.** The geodesics of step 2.2 are complete as curves of the flat model; this completeness is special to the model and is not inherited by metrics only locally isometric to it.
- **Use.** Clause (b) supplies the curvature computation for the flat vacuum model on this page; clause (d) supplies the kinematic reading of that model and the kinetic input of the weak-field bridge.
