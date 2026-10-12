---
id: ex-gr-metric-volume-density-and-flux-in-flat-coordinates
kind: example
title: "Metric density, volume form and current flux of the flat metric in the identity chart"
status: draft
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-metric-volume-form-and-current-flux, lem-gr-metric-volume-form-patching-and-face-normal, lem-gr-metric-divergence-and-density-formula, thm-gr-density-divergence-and-finite-chain-flux, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-oriented-smooth-manifold-and-oriented-chart, def-interior-product-of-a-form-by-a-vector-field, def-smooth-vector-field-as-a-tangent-bundle-section, def-wedge-product-of-differential-forms]
dependency_roles:
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  lem-gr-metric-volume-form-patching-and-face-normal: mathematical-premise
  lem-gr-metric-divergence-and-density-formula: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  def-interior-product-of-a-form-by-a-vector-field: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 8.6-8.7: the volume element and Stokes' theorem in a chart, printed pp. 108-110 (PDF pp. 109-111)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 2 'tensor densities' (2.44) and the integration measure sqrt|g|, printed pp. 52-54 (PDF pp. 59-61)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Example

Let $M=\mathbb R^4$ carry the identity chart $x=(x^0,x^1,x^2,x^3)$, the flat
Lorentzian metric $g=\operatorname{diag}(-1,1,1,1)$, the time orientation
$N=\partial_0$ and the orientation for which the identity chart is oriented
([[def-gr-smooth-lorentzian-objects]],
[[def-oriented-smooth-manifold-and-oriented-chart]]); let $\nabla$ be the
metric-selected connection of $g$ and $\mathrm{vol}_g$ the metric volume form
([[def-gr-metric-volume-form-and-current-flux]]). Then:

1. The metric density and the volume form are $w=1$ and
   $\mathrm{vol}_g=dx^0\wedge dx^1\wedge dx^2\wedge dx^3$ in the identity
   chart, and $\mathrm{vol}_g(\partial_0,\partial_1,\partial_2,\partial_3)=1$.
2. The connection is the coordinate connection, $\Gamma\equiv0$, so that
   $\nabla_aJ^a=\partial_aJ^a$ for every smooth vector field $J$ and the
   divergence formula $w^{-1}\partial_a(wJ^a)$ reduces to the coordinate
   divergence.
3. For $J=x^1\partial_1$ the divergence is $\nabla_aJ^a=1$, the current form is
   $\iota_J\mathrm{vol}_g=-x^1\,dx^0\wedge dx^2\wedge dx^3$, and
   $d(\iota_J\mathrm{vol}_g)=\mathrm{vol}_g$, in accordance with
   [[thm-gr-density-divergence-and-finite-chain-flux]] clause (a).
4. The flux of $J=\partial_1$ through the positively oriented $3$-simplex in
   the plane $x^1=0$ with $(\partial_1,\sigma_*\partial_1,\sigma_*\partial_2,
   \sigma_*\partial_3)$ positively oriented equals $-\operatorname{vol}_3$ of
   its parameter simplex; the flux of $J=\partial_1$ through the parallel face
   with normal $\partial_1$ is $+\operatorname{vol}_3$ of the corresponding
   parameter simplex: the two signs encode the two orientations of the normal.

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb{R}^4,g)$ with the identity chart $x$, $g=\operatorname{diag}(-1,1,1,1)$, the metric-selected connection $\nabla$ of [[def-gr-metric-selected-connection]], and the vector fields $J=x^1\partial_1$ and $J_0=\partial_1$ of [[def-smooth-vector-field-as-a-tangent-bundle-section]].

[L1] The metric density is $w=\sqrt{|\det(g_{ab})|}$ and the local volume form is $w\,dx^0\wedge dx^1\wedge dx^2\wedge dx^3$ in every oriented chart; for the flat metric both are constant ([[def-gr-metric-volume-form-and-current-flux]], [[lem-gr-metric-volume-form-patching-and-face-normal]]).

[L2] On the identity chart the Christoffel symbols vanish, so $\nabla$ is the coordinate connection and $\nabla_aJ^a=\partial_aJ^a$; this is the unique metric-selected connection ([[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[lem-gr-metric-divergence-and-density-formula]]).

[L3] The interior product inserts the vector in the first slot: $(\iota_J\omega)(X_1,\dots)=\omega(J,X_1,\dots)$; consequently $\iota_{\partial_a}(dx^0\wedge\cdots\wedge dx^3)=(-1)^adx^0\wedge\cdots\widehat{dx^a}\cdots\wedge dx^3$ ([[def-interior-product-of-a-form-by-a-vector-field]], [[def-wedge-product-of-differential-forms]]).

[L4] The exterior derivative of a $3$-form is computed in coordinates by the alternating sum of partial derivatives, and $d(\iota_J\mathrm{vol}_g)=(\nabla_aJ^a)\mathrm{vol}_g$ ([[thm-gr-density-divergence-and-finite-chain-flux]] clause (a)).

[L5] For a non-null $3$-face with adapted unit normal $\nu^{*}$ the pullback of $\iota_J\mathrm{vol}_g$ on the ordered velocity basis $(v_1,v_2,v_3)$ equals $\varepsilon g(J,\nu^{*})\sqrt{|\det(g(v_i,v_j))|}$ with $\varepsilon=g(\nu^{*},\nu^{*})$ ([[thm-gr-density-divergence-and-finite-chain-flux]] clause (c), [[lem-gr-metric-volume-form-patching-and-face-normal]]).

## Verification

**Proof technique:** direct; evaluate the definitions on the constant-coefficient flat data.

1.1 (Density and volume form.) Since $g_{ab}=\operatorname{diag}(-1,1,1,1)$ is constant, $w=\sqrt{|\det g|}=\sqrt{|-1|}=1$, and [L1] gives $\mathrm{vol}_g=dx^0\wedge dx^1\wedge dx^2\wedge dx^3$. Evaluating on the coordinate frame, $\mathrm{vol}_g(\partial_0,\partial_1,\partial_2,\partial_3)=w\det(\delta^a{}_b)=1$. [L1, algebra]

1.2 (Connection and divergence.) The Christoffel symbols of the constant metric vanish: $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})=0$. By [L2], $\nabla$ is the coordinate connection, so for $J=x^1\partial_1$ (components $J^0=0$, $J^1=x^1$, $J^2=J^3=0$) the divergence is $\nabla_aJ^a=\partial_0 0+\partial_1x^1+\partial_2 0+\partial_3 0=1$. [L2, algebra]

2.1 (Current form and its derivative.) By [L3], $\iota_J\mathrm{vol}_g=(-1)^1J^1dx^0\wedge dx^2\wedge dx^3=-x^1dx^0\wedge dx^2\wedge dx^3$. Differentiating by [L4], $d(\iota_J\mathrm{vol}_g)=-\partial_1x^1\,dx^1\wedge dx^0\wedge dx^2\wedge dx^3=dx^0\wedge dx^1\wedge dx^2\wedge dx^3=\mathrm{vol}_g$, which equals $(\nabla_aJ^a)\mathrm{vol}_g$ by step 1.2. [step 1.1, step 1.2, L3, L4, algebra]

3.1 (Two flux orientations.) Let $\sigma$ be a smooth singular $3$-simplex in the plane $x^1=0$ whose velocity vectors span that plane, with the adapted unit normal $\nu^{*}=-\partial_1$ for the ordered basis $(\sigma_*\partial_1,\sigma_*\partial_2,\sigma_*\partial_3)$; such a normal exists and is unique by the definition clause of [[def-gr-metric-volume-form-and-current-flux]]. For $J_0=\partial_1$, $\varepsilon=g(\nu^{*},\nu^{*})=1$ and $g(J_0,\nu^{*})=g(\partial_1,-\partial_1)=-1$, while $\sqrt{|\det(g(\sigma_*\partial_i,\sigma_*\partial_j))|}=1$ because $(\sigma_*\partial_i)$ spans the Euclidean coordinate plane; hence the pullback is the constant $-1$ and the flux is $-\operatorname{vol}_3$ of the parameter simplex. With the opposite normal $\nu^{*}=\partial_1$ (the orientation of the other parallel face) the same computation gives $\varepsilon=1$ and $g(J_0,\nu^{*})=1$, so the pullback is $+1$ and the flux is $+\operatorname{vol}_3$. This exhibits the normal-orientation sign in [L5] and completes the verification. [step 2.1, L5, algebra] ∎
