---
id: ex-gr-metric-volume-density-and-flux-in-flat-coordinates
kind: example
title: "Metric density, volume form and current flux of the flat metric in the identity chart"
status: published
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-metric-volume-form-and-current-flux, lem-gr-metric-volume-form-patching-and-face-normal, lem-gr-metric-divergence-and-density-formula, thm-gr-density-divergence-and-finite-chain-flux, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-oriented-smooth-manifold-and-oriented-chart, def-interior-product-of-a-form-by-a-vector-field, def-smooth-vector-field-as-a-tangent-bundle-section, def-wedge-product-of-differential-forms, thm-riemann-fubini-on-product-rectangles, thm-ftc-second-part, def-integral-of-a-form-over-a-smooth-singular-simplex]
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
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-integral-of-a-form-over-a-smooth-singular-simplex: mathematical-premise
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
4. Let $\Delta^3=\{(t_1,t_2,t_3):t_i\ge0,\ t_1+t_2+t_3\le1\}$ with its
   coordinate orientation and coordinate volume $1/6$. The affine simplex
   $\sigma_-(t)=(t_1,0,t_2,t_3)$ has adapted normal $-\partial_1$, so the flux
   of $J=\partial_1$ through it is $-1/6$. The affine simplex
   $\sigma_+(t)=(t_2,a,t_1,t_3)$ on the parallel plane $x^1=a$ has adapted
   normal $+\partial_1$, so its flux is $+1/6$. Both induced metric densities
   on the parameter simplex equal $1$; the signs follow from the stated
   parameter orientations and the ambient chart orientation.

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb{R}^4,g)$ with the identity chart $x$, $g=\operatorname{diag}(-1,1,1,1)$, the metric-selected connection $\nabla$ of [[def-gr-metric-selected-connection]], the vector fields $J=x^1\partial_1$ and $J_0=\partial_1$ of [[def-smooth-vector-field-as-a-tangent-bundle-section]], and the affine simplices $\sigma_-(t)=(t_1,0,t_2,t_3)$ and $\sigma_+(t)=(t_2,a,t_1,t_3)$ on $\Delta^3=\{t_i\ge0,\ t_1+t_2+t_3\le1\}$.

[L1] The metric density is $w=\sqrt{|\det(g_{ab})|}$ and the local volume form is $w\,dx^0\wedge dx^1\wedge dx^2\wedge dx^3$ in every oriented chart; for the flat metric both are constant ([[def-gr-metric-volume-form-and-current-flux]], [[lem-gr-metric-volume-form-patching-and-face-normal]]).

[L2] On the identity chart the Christoffel symbols vanish, so $\nabla$ is the coordinate connection and $\nabla_aJ^a=\partial_aJ^a$; this is the unique metric-selected connection ([[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[lem-gr-metric-divergence-and-density-formula]]).

[L3] The interior product inserts the vector in the first slot: $(\iota_J\omega)(X_1,\dots)=\omega(J,X_1,\dots)$; consequently $\iota_{\partial_a}(dx^0\wedge\cdots\wedge dx^3)=(-1)^adx^0\wedge\cdots\widehat{dx^a}\cdots\wedge dx^3$ ([[def-interior-product-of-a-form-by-a-vector-field]], [[def-wedge-product-of-differential-forms]]).

[L4] The exterior derivative of a $3$-form is computed in coordinates by the alternating sum of partial derivatives, and $d(\iota_J\mathrm{vol}_g)=(\nabla_aJ^a)\mathrm{vol}_g$ ([[thm-gr-density-divergence-and-finite-chain-flux]] clause (a)).

[L5] For a non-null $3$-face with adapted unit normal $\nu^{*}$ the pullback of $\iota_J\mathrm{vol}_g$ on the ordered velocity basis $(v_1,v_2,v_3)$ equals $\varepsilon g(J,\nu^{*})\sqrt{|\det(g(v_i,v_j))|}$ with $\varepsilon=g(\nu^{*},\nu^{*})$ ([[thm-gr-density-divergence-and-finite-chain-flux]] clause (c), [[lem-gr-metric-volume-form-patching-and-face-normal]]).

[L6] The simplex coefficient integral uses zero extension to $[0,1]^3$. Each successive indicator section is an integrable interval indicator, so [[thm-riemann-fubini-on-product-rectangles]] reduces its volume to $\int_0^1\int_0^{1-t_1}\int_0^{1-t_1-t_2}1\,dt_3\,dt_2\,dt_1=\int_0^1(1-t_1)^2/2\,dt_1=1/6$ by [[thm-ftc-second-part]] and the simplex-integral convention of [[def-integral-of-a-form-over-a-smooth-singular-simplex]].

## Verification

**Proof technique:** direct; evaluate the definitions on the constant-coefficient flat data.

1.1 (Density and volume form.) Since $g_{ab}=\operatorname{diag}(-1,1,1,1)$ is constant, $w=\sqrt{|\det g|}=\sqrt{|-1|}=1$, and [L1] gives $\mathrm{vol}_g=dx^0\wedge dx^1\wedge dx^2\wedge dx^3$. Evaluating on the coordinate frame, $\mathrm{vol}_g(\partial_0,\partial_1,\partial_2,\partial_3)=w\det(\delta^a{}_b)=1$. [L1, algebra]

1.2 (Connection and divergence.) The Christoffel symbols of the constant metric vanish: $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})=0$. By [L2], $\nabla$ is the coordinate connection, so for $J=x^1\partial_1$ (components $J^0=0$, $J^1=x^1$, $J^2=J^3=0$) the divergence is $\nabla_aJ^a=\partial_0 0+\partial_1x^1+\partial_2 0+\partial_3 0=1$. [L2, algebra]

2.1 (Current form and its derivative.) By [L3], $\iota_J\mathrm{vol}_g=(-1)^1J^1dx^0\wedge dx^2\wedge dx^3=-x^1dx^0\wedge dx^2\wedge dx^3$. Differentiating by [L4], $d(\iota_J\mathrm{vol}_g)=-\partial_1x^1\,dx^1\wedge dx^0\wedge dx^2\wedge dx^3=dx^0\wedge dx^1\wedge dx^2\wedge dx^3=\mathrm{vol}_g$, which equals $(\nabla_aJ^a)\mathrm{vol}_g$ by step 1.2. [step 1.1, step 1.2, L3, L4, algebra]

3.1 (Two flux orientations.) On the affine simplex $\sigma_-$, the ordered velocities are $(v_1,v_2,v_3)=(\partial_0,\partial_2,\partial_3)$ and their Gram matrix is $\operatorname{diag}(-1,1,1)$, so its determinant is $-1$ and the induced density is $1$. The ambient ordered basis $(\partial_1,\partial_0,\partial_2,\partial_3)$ is negatively oriented; therefore the adapted normal is $\nu_-^{*}=-\partial_1$. The face is non-null, $\varepsilon=1$, and $\varepsilon g(J_0,\nu_-^{*})=-1$. Hence $\sigma_-^*(\iota_{J_0}\mathrm{vol}_g)=-dt_1\wedge dt_2\wedge dt_3$ and $\Phi_{J_0}(\sigma_-)=-1/6$. On $\sigma_+$, the ordered velocities are $(\partial_2,\partial_0,\partial_3)$ with the same Gram determinant $-1$ and density $1$; now $(\partial_1,\partial_2,\partial_0,\partial_3)$ is positively oriented, so $\nu_+^{*}=+\partial_1$ and $\varepsilon g(J_0,\nu_+^{*})=1$. Thus $\sigma_+^*(\iota_{J_0}\mathrm{vol}_g)=dt_1\wedge dt_2\wedge dt_3$ and $\Phi_{J_0}(\sigma_+)=1/6$, since the coordinate volume of $\Delta^3$ is $1/6$. This verifies clause 4 with consistent orientations and the induced area densities. [step 2.1, L5, L6, algebra] ∎
