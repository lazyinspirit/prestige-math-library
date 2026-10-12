---
id: cex-gr-divergence-free-does-not-force-zero-flux
kind: counterexample
title: "A divergence-free current with nonzero flux through a spacelike 3-simplex"
status: draft
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-metric-volume-form-and-current-flux, lem-gr-metric-volume-form-patching-and-face-normal, thm-gr-density-divergence-and-finite-chain-flux, lem-gr-metric-divergence-and-density-formula, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-oriented-smooth-manifold-and-oriented-chart, def-integral-of-a-form-over-a-smooth-singular-simplex, def-smooth-vector-field-as-a-tangent-bundle-section, def-darboux-integral, thm-ftc-second-part]
dependency_roles:
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  lem-gr-metric-volume-form-patching-and-face-normal: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  lem-gr-metric-divergence-and-density-formula: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  def-integral-of-a-form-over-a-smooth-singular-simplex: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-darboux-integral: mathematical-premise
  thm-ftc-second-part: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 8.7: Stokes' theorem in the form flux equality up to the side boundary, printed pp. 109-110 (PDF pp. 110-111)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.5: the charge through a spatial slice and the role of the boundary flux, printed pp. 187-189 (PDF pp. 194-196)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement refuted

Statement refuted: "Let $M=\mathbb R^4$ carry the flat metric
$g=\operatorname{diag}(-1,1,1,1)$, the identity chart and the chart
orientation, and let $J$ be a smooth vector field on $M$ with
$\nabla_aJ^a=0$ on $M$ ([[def-gr-metric-volume-form-and-current-flux]],
[[def-smooth-vector-field-as-a-tangent-bundle-section]]). Then the flux
$\Phi_J(\sigma)$ of $J$ through every smooth singular $3$-simplex $\sigma$ of
$M$ vanishes."

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb R^4,g)$ with identity chart, $g=\operatorname{diag}(-1,1,1,1)$, chart orientation, metric-selected connection $\nabla$ and metric volume form $\mathrm{vol}_g$; the vector field $J=\partial_1$; and the affine smooth singular $3$-simplex $\sigma$ of the standard $3$-simplex $\Delta^3=\{(t_1,t_2,t_3):t_i\ge0,\ \sum_it_i\le1\}$ into the plane $x^1=0$, $$\sigma(t_1,t_2,t_3):=(t_1,0,t_2,t_3).$$

[L1] On the identity chart $\Gamma\equiv0$, so $\nabla$ is the coordinate connection and $\nabla_aJ^a=\partial_aJ^a$; $\mathrm{vol}_g=dx^0\wedge dx^1\wedge dx^2\wedge dx^3$ ([[def-gr-metric-volume-form-and-current-flux]], [[lem-gr-metric-divergence-and-density-formula]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L2] The flux of $J$ through a smooth singular $3$-simplex $\sigma$ — the affine map of the Facts, a special case of the simplex convention restated in [[def-gr-metric-volume-form-and-current-flux]] clause (b) (library definition `def-smooth-singular-simplex`) — is $\Phi_J(\sigma)=\int_\sigma\iota_J\mathrm{vol}_g=\int_{\Delta^3}\sigma^*(\iota_J\mathrm{vol}_g)$, and the integral is the ordinary multiple integral of the pullback coefficient ([[def-gr-metric-volume-form-and-current-flux]] clause (b), [[def-integral-of-a-form-over-a-smooth-singular-simplex]]).

[L3] For a non-null face with velocity basis $(v_1,v_2,v_3)$ and adapted unit normal $\nu^{*}$ (so that $(\nu^{*},v_1,v_2,v_3)$ is positively oriented, $g(\nu^{*},\nu^{*})=\varepsilon$ and $\nu^{*}\perp\operatorname{span}(v_1,v_2,v_3)$), the pullback of $\iota_J\mathrm{vol}_g$ on $(v_1,v_2,v_3)$ equals $\varepsilon g(J,\nu^{*})\sqrt{|\det(g(v_i,v_j))|}$ ([[thm-gr-density-divergence-and-finite-chain-flux]] clause (c), [[lem-gr-metric-volume-form-patching-and-face-normal]]).

[L4] The standard $3$-simplex $\Delta^3$ has volume $1/6$: the iterated integral $\int_0^1\!\int_0^{1-t_1}\!\int_0^{1-t_1-t_2}dt_3\,dt_2\,dt_1=\int_0^1\tfrac{(1-t_1)^2}{2}dt_1=\tfrac16$ evaluates by the fundamental theorem of calculus; hence the integral of a constant $c$ over $\Delta^3$ is $c/6$ ([[def-darboux-integral]], [[thm-ftc-second-part]], [[def-integral-of-a-form-over-a-smooth-singular-simplex]]).

## Counterexample

Let $J:=\partial_1$ on $M=\mathbb R^4$ and let $\sigma$ be the affine simplex of the Facts.

1.1 (The current is divergence-free.) By [L1], $\nabla_aJ^a=\partial_aJ^a=\partial_1(1)=0$: $J$ satisfies the hypothesis of the refuted statement. [L1, algebra]

1.2 (The adapted normal.) The velocity vectors of $\sigma$ are $v_1=\partial_0$, $v_2=\partial_2$, $v_3=\partial_3$, spanning the hyperplane $H=\{v^1=0\}$, which is nondegenerate (it is the $g$-orthogonal complement of the spacelike vector $\partial_1$). The vector $\nu^{*}:=-\partial_1$ lies in $H^{\perp}$, has $g(\nu^{*},\nu^{*})=1$, and the ordered basis $(-\partial_1,\partial_0,\partial_2,\partial_3)$ has determinant $-\det(\partial_1,\partial_0,\partial_2,\partial_3)=+1$ in the identity chart, so $(\nu^{*},v_1,v_2,v_3)$ is positively oriented: $\nu^{*}$ is the adapted unit normal. [L1, algebra]

2.1 (The flux.) By [L3] with $\varepsilon=g(\nu^{*},\nu^{*})=1$, $g(J,\nu^{*})=g(\partial_1,-\partial_1)=-1$ and $\det(g(v_i,v_j))=\det\operatorname{diag}(-1,1,1)=-1$, so $\sqrt{|\det(g(v_i,v_j))|}=1$ and the pullback $\sigma^*(\iota_J\mathrm{vol}_g)$ is the constant $1$-form coefficient $\varepsilon g(J,\nu^{*})\cdot1=-1$ times $dt_1\wedge dt_2\wedge dt_3$. By [L2] and [L4], $$\Phi_J(\sigma)=\int_{\Delta^3}(-1)\,dt_1dt_2dt_3=-\tfrac16\neq0 .$$ [step 1.1, step 1.2, L2, L3, L4, algebra]

3.1 (Conclusion.) The field $J=\partial_1$ is divergence-free on $M$, yet its flux through the smooth singular $3$-simplex $\sigma$ is $-1/6$, not zero. Hence the displayed statement is refuted: divergence-freedom is a differential condition on $J$, while the flux through a single face depends on the face and its orientation. [step 2.1, algebra] ∎

## Remarks

- **Consistency with the flux theorem.** The counterexample does not contradict the balance identity of [[thm-gr-density-divergence-and-finite-chain-flux]]: for a $4$-chain whose boundary contains $\sigma$ and an opposite face, the two fluxes differ by the side flux, and the identity is a statement about that difference, not about the vanishing of each term.

- **Choice of orientation.** Had the simplex been oriented with the opposite normal, the flux would be $+1/6$; the nonzero value is independent of this sign convention.
