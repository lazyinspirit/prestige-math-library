---
id: ex-gr-flux-balance-for-a-divergence-free-current
kind: example
title: "A divergence-free current with nonzero face-flux density: J=x^1∂_2 in flat space"
status: draft
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-metric-volume-form-and-current-flux, lem-gr-metric-volume-form-patching-and-face-normal, thm-gr-density-divergence-and-finite-chain-flux, lem-gr-metric-divergence-and-density-formula, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-oriented-smooth-manifold-and-oriented-chart, def-interior-product-of-a-form-by-a-vector-field, def-wedge-product-of-differential-forms, def-smooth-vector-field-as-a-tangent-bundle-section]
dependency_roles:
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  lem-gr-metric-volume-form-patching-and-face-normal: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  lem-gr-metric-divergence-and-density-formula: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  def-interior-product-of-a-form-by-a-vector-field: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.5 with figures 40-41: the charge balance with the timelike boundary B and the requirement of vanishing flux through B, printed pp. 187-189 (PDF pp. 194-196)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 8.7: Stokes' theorem with the side boundary, printed pp. 109-110 (PDF pp. 110-111)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Example

Let $M=\mathbb R^4$ carry the identity chart, the flat metric
$g=\operatorname{diag}(-1,1,1,1)$, the time orientation $N=\partial_0$ and the
chart orientation, with metric-selected connection $\nabla$ and volume form
$\mathrm{vol}_g$ ([[def-gr-smooth-lorentzian-objects]],
[[def-oriented-smooth-manifold-and-oriented-chart]],
[[def-gr-metric-volume-form-and-current-flux]]). Let

$$J:=x^1\partial_2$$

be the smooth vector field of [[def-smooth-vector-field-as-a-tangent-bundle-section]].
Then:

1. $\nabla_aJ^a=\partial_2x^1=0$: the current is divergence-free.
2. The current $3$-form is
   $\iota_J\mathrm{vol}_g=x^1\,dx^0\wedge dx^1\wedge dx^3$, and
   $d(\iota_J\mathrm{vol}_g)=0$ identically, consistently with clause (a) of
   [[thm-gr-density-divergence-and-finite-chain-flux]].
3. The pointwise flux density of $J$ through a non-null face with adapted unit
   normal $\nu^{*}$ is $\varepsilon g(J,\nu^{*})\sqrt{|\det(g(v_i,v_j))|}$; for
   the coordinate directions this is
   $$0\ \text{for }\nu^{*}=\pm\partial_0,\pm\partial_1,\qquad x^1\ \text{for }\nu^{*}=\partial_2,\qquad -x^1\ \text{for }\nu^{*}=-\partial_2 .$$
   Thus the divergence-free current has nonzero flux density through the faces
   normal to $\partial_2$: vanishing divergence does not mean vanishing flux
   through every face, and the flux balance
   $\Phi_J(\Sigma_2)-\Phi_J(\Sigma_1)=-\Phi_J(B)$ of clause (b) of
   [[thm-gr-density-divergence-and-finite-chain-flux]] controls the side
   boundary genuinely.

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb R^4,g)$ with identity chart, $g=\operatorname{diag}(-1,1,1,1)$, metric-selected connection $\nabla$, volume form $\mathrm{vol}_g$ and the vector field $J=x^1\partial_2$.

[L1] $\mathrm{vol}_g=dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, $w=1$, and $\Gamma\equiv0$ on the identity chart ([[def-gr-metric-volume-form-and-current-flux]], [[lem-gr-metric-divergence-and-density-formula]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L2] $\iota_{\partial_2}\mathrm{vol}_g=(-1)^2dx^0\wedge dx^1\wedge dx^3$ and $\iota_J\mathrm{vol}_g$ is obtained by multiplying the $\partial_2$-insertion by the component $J^2=x^1$ ([[def-interior-product-of-a-form-by-a-vector-field]], [[def-wedge-product-of-differential-forms]]).

[L3] $d(\iota_J\mathrm{vol}_g)=(\nabla_aJ^a)\mathrm{vol}_g$ ([[thm-gr-density-divergence-and-finite-chain-flux]] clause (a)).

[L4] On a non-null face with velocity basis $(v_1,v_2,v_3)$ and adapted unit normal $\nu^{*}$, $\varepsilon=g(\nu^{*},\nu^{*})$ and the pullback of $\iota_J\mathrm{vol}_g$ on $(v_1,v_2,v_3)$ is $\varepsilon g(J,\nu^{*})\sqrt{|\det(g(v_i,v_j))|}$ ([[thm-gr-density-divergence-and-finite-chain-flux]] clause (c), [[lem-gr-metric-volume-form-patching-and-face-normal]]).

## Verification

**Proof technique:** direct; compute the divergence, the current form and its derivative, then evaluate the flux densities on the coordinate normals.

1.1 (Divergence.) By [L1], $\nabla_aJ^a=\partial_aJ^a=\partial_0 0+\partial_1 0+\partial_2x^1+\partial_3 0=0$. [L1, algebra]

2.1 (Current form.) By [L2] and $J^2=x^1$, $\iota_J\mathrm{vol}_g=x^1dx^0\wedge dx^1\wedge dx^3$. Its exterior derivative is $\partial_1x^1\,dx^1\wedge dx^0\wedge dx^1\wedge dx^3=0$, because $dx^1$ occurs twice; consistently, [L3] and step 1.1 give $d(\iota_J\mathrm{vol}_g)=0$. [step 1.1, L2, L3, algebra]

3.1 (Flux densities.) At a point of a face with adapted unit normal $\nu^{*}=\partial_2$ (so $\varepsilon=g(\partial_2,\partial_2)=1$ and $\sqrt{|\det(g(v_i,v_j))|}=1$ for a coordinate face), [L4] gives the flux density $g(J,\partial_2)=g(x^1\partial_2,\partial_2)=x^1$; for $\nu^{*}=-\partial_2$ it is $-x^1$. For $\nu^{*}=\pm\partial_1$, $g(J,\pm\partial_1)=0$; for $\nu^{*}=\pm\partial_0$, $g(J,\pm\partial_0)=0$. This is the displayed list of values. Since $x^1\neq0$ on the open set $\{x^1\neq0\}$, the flux density through the faces normal to $\partial_2$ is nonzero there although the divergence of $J$ vanishes identically, which completes the verification. [step 2.1, L4, algebra] ∎

## Remarks

- **Reading.** The example isolates the pointwise flux density: a divergence-free current can have nonzero density through faces normal to $\partial_2$. The flux-balance theorem concerns integrals over oriented chains and states exactly how the slice fluxes differ by the side flux; whether a whole side-chain flux vanishes depends on that chain and its orientation.
