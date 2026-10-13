---
id: cex-gr-point-normal-chart-does-not-make-second-derivatives-vanish
kind: counterexample
title: "A chart with the point-normal first-order form whose second metric derivatives do not vanish"
status: published
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-point-normal-and-exponential-coordinate-charts, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-christoffel-symbols-of-an-affine-connection, def-gr-metric-selected-connection, lem-gr-connection-conditions-in-chart-components, def-gr-inverse-metric-and-musical-isomorphisms]
dependency_roles:
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.3.2: it is not generally possible to make the second derivatives of the metric vanish in normal coordinates, with the parameter-counting argument, printed pp. 119-121 (PDF pp. 126-128)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 3.4: normal coordinates give $g_{\\mu\\nu,\\rho}(p)=0$ at one point only, and derivatives away from p need not vanish, printed pp. 38-40 (PDF pp. 39-41)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement refuted

Statement refuted: "If a smooth chart $(U,x)$ of a smooth Lorentzian
four-manifold satisfies the point-normal first-order identities
$g_{ab}(p)=\eta_{ab}$, $\partial_ag_{bc}(p)=0$ and $\Gamma^a{}_{bc}(p)=0$ at a
point $p\in U$, then in addition $\partial_a\partial_bg_{cd}(p)=0$"
([[thm-gr-point-normal-and-exponential-coordinate-charts]],
[[def-gr-metric-selected-connection]]).

## Facts & Assumptions

**Given:** The open set $U=\mathbb R^4$ with the identity chart $x$ and the smooth covariant $2$-tensor field $g_{ab}=\eta_{ab}+(x^0)^2\delta^1{}_a\delta^1{}_b$, that is $g_{11}=1+(x^0)^2$ and $g_{ab}=\eta_{ab}$ for all other index pairs.

[L1] A smooth symmetric covariant $2$-tensor field on $U$ is a Lorentzian metric when its matrix of components is symmetric and nondegenerate with inertia $(3,1,0)$ at every point ([[def-gr-smooth-covariant-two-tensor-field]], [[def-gr-smooth-lorentzian-objects]]).

[L2] The Christoffel symbols of the metric-selected connection are $\Gamma^a{}_{bc}=\tfrac12\sum_dg^{ad}\bigl(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc}\bigr)$ in a chart, and the inverse-metric components are the inverse matrix ([[def-christoffel-symbols-of-an-affine-connection]], [[thm-gr-point-normal-and-exponential-coordinate-charts]], [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L3] The point-normal identities at $p$ are $g_{ab}(p)=\eta_{ab}$, $\partial_ag_{bc}(p)=0$ and $\Gamma^a{}_{bc}(p)=0$ ([[thm-gr-point-normal-and-exponential-coordinate-charts]]).

## Counterexample

1.1 The components $g_{ab}$ are smooth functions on $\mathbb R^4$; at every point the matrix of components is $\operatorname{diag}\bigl(-1,\,1+(x^0)^2,\,1,\,1\bigr)$, which is symmetric with one negative and three positive eigenvalues. Hence $g$ is a smooth Lorentzian metric on $U$ with the same time orientation $N=\partial_0$ as the flat model. [given, L1, algebra]

2.1 At the point $p=(0,0,0,0)$ the matrix is $\operatorname{diag}(-1,1,1,1)$, so $g_{ab}(p)=\eta_{ab}$. The only component depending on the coordinates is $g_{11}=1+(x^0)^2$, and $\partial_cg_{11}=2x^0\delta^0{}_c$ vanishes at $p$; all other components are constant. Hence $\partial_ag_{bc}(p)=0$, and by the Christoffel formula of [L2] also $\Gamma^a{}_{bc}(p)=0$: the identity chart satisfies the point-normal identities of [L3] at $p$. [step 1.1, L2, L3, algebra]

3.1 The second derivative in the direction of $x^0$ of the $(1,1)$ component is $\partial_0\partial_0g_{11}(0)=\partial_0(2x^0)|_{0}=2\neq0$. Therefore $\partial_a\partial_bg_{cd}(p)$ does not vanish for all index choices, namely not for $(a,b,c,d)=(0,0,1,1)$, and the displayed statement is refuted. [step 2.1, algebra]

4.1 The statement refuted concerns only second-order vanishing in a chart with the point-normal first-order identities; the example asserts nothing about the curvature of $g$ at $p$, and no such claim is used. In particular this item does not refute any claim of [[thm-gr-point-normal-and-exponential-coordinate-charts]], which is explicitly silent at second order. [step 3.1, L3, algebra] ∎

## Remarks

The computation exhibits the exact sense in which normal coordinates are a
first-order statement: the metric can always be put in the form
$\eta_{ab}+O(|x|^2)$ at a point, but the coefficient of the second-order term
is not removable by a coordinate change in general, as the counting argument
in the cited source records. The physical reading of this limitation is
recorded in [[rem-gr-normal-coordinates-and-local-inertial-frames-scope]].
