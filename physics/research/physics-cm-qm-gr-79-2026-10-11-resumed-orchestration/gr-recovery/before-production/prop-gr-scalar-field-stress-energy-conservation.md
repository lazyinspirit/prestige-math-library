---
id: prop-gr-scalar-field-stress-energy-conservation
kind: proposition
title: "First variation, Hilbert tensor and conservation of the scalar-field model"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-scalar-field-matter-model, def-gr-hilbert-stress-energy-tensor, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-smooth-covariant-two-tensor-field, def-gr-metric-volume-form-and-current-flux, lem-gr-metric-divergence-and-density-formula, thm-gr-compact-metric-and-timelike-curve-variation, lem-gr-hilbert-tensor-uniqueness, thm-gr-density-divergence-and-finite-chain-flux, lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes, thm-differentiation-under-the-integral-sign, def-darboux-integral, def-c-r-and-smooth-maps-between-smooth-manifolds, def-oriented-smooth-manifold-and-oriented-chart]
dependency_roles:
  def-gr-scalar-field-matter-model: mathematical-premise
  def-gr-hilbert-stress-energy-tensor: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  lem-gr-metric-divergence-and-density-formula: mathematical-premise
  thm-gr-compact-metric-and-timelike-curve-variation: mathematical-premise
  lem-gr-hilbert-tensor-uniqueness: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  def-darboux-integral: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 9.1-9.3: the scalar field equation (9.3)-(9.6), its energy-momentum tensor (9.31)-(9.32) and the divergence argument (9.35)-(9.41), printed pp. 111-118 (PDF pp. 112-119)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 4.5.1 and 4.5.3: the scalar field equation of motion and its energy-momentum tensor (4.51), printed pp. 180-185 (PDF pp. 187-192)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 (1.112)-(1.113) and Ch. 4: the energy-momentum tensor of a scalar field and the conservation argument, printed pp. 30 and 117-118 (PDF pp. 37 and 124-125)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be an oriented time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$ and let $(\varphi,V,K)$ be a scalar-field
matter model on $M$ with action differences $\Delta S$, scalar equation
$\Box_g\varphi-V'(\varphi)=0$ and candidate stress-energy tensor $T$
([[def-gr-scalar-field-matter-model]],
[[def-gr-smooth-lorentzian-objects]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

**(a) Matter first variation.** Let $u\mapsto\varphi_u$, $|u|<u_0$, be a family
of smooth functions such that $(\varphi_u-\varphi)$ is supported in a fixed
compact set for all $u$ and the functions $(u,p)\mapsto\varphi_u(p)$ are
smooth. Then $u\mapsto\Delta S(\varphi_u,g)$ is differentiable at $0$ and

$$\frac{d}{du}\Big|_{u=0}\Delta S(\varphi_u,g)=\frac{K}{c}\int_M\bigl(\Box_g\varphi-V'(\varphi)\bigr)\,\delta\varphi\,\mathrm{vol}_g,\qquad \delta\varphi:=\partial_u\varphi_u|_{u=0}.$$

In particular the family is stationary in this direction, for every such
family, exactly when $\Box_g\varphi=V'(\varphi)$.

**(b) Metric variation and Hilbert tensor.** Let $s\mapsto g_s$, $|s|<s_0$, be
a smooth metric family at $g$ with compactly supported variation, and let
$q^{ab}=\partial_sg_s^{ab}|_{s=0}$. Then

$$\frac{d}{ds}\Big|_{s=0}\Delta S(\varphi,g_s)=-\frac{1}{2c}\int_M T_{ab}\,q^{ab}\,\mathrm{vol}_g .$$

Consequently $T$ is the Hilbert stress-energy tensor of the scalar-field model
at $(g,\varphi)$ with respect to $c$
([[def-gr-hilbert-stress-energy-tensor]]), and by
[[lem-gr-hilbert-tensor-uniqueness]] it is the only one.

**(c) Conservation identity.** On $M$,

$$\nabla^aT_{ab}=K\bigl(\Box_g\varphi-V'(\varphi)\bigr)\partial_b\varphi .$$

Consequently $T$ is divergence-free, $\nabla^aT_{ab}=0$, exactly on the
solutions of the scalar equation of motion.

## Facts & Assumptions

**Given:** The oriented time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with metric-selected connection $\nabla$, and a scalar-field matter model $(\varphi,V,K)$.

[L1] $\nabla$ is torsion-free and $g$-compatible, $\nabla g=0$, $\nabla g^{-1}=0$, and for a smooth scalar $f$ the field $\nabla_af=\partial_af$ is a covector; $\nabla_a\nabla_bf=\nabla_b\nabla_af$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-gr-metric-selected-connection]]).

[L2] The metric volume form satisfies $\delta\mathrm{vol}_g=-\tfrac12g_{ab}q^{ab}\mathrm{vol}_g$ along a metric family with inverse-metric variation $q$, and $\nabla_aJ^a\mathrm{vol}_g=d(\iota_J\mathrm{vol}_g)$; the integral of a compactly supported divergence vanishes ([[lem-gr-metric-divergence-and-density-formula]], [[def-gr-metric-volume-form-and-current-flux]], [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]], [[thm-gr-density-divergence-and-finite-chain-flux]] clause (a) — the flux identity is used only through the vanishing of the compactly supported divergence integral).

[L3] Along the metric family, $q^{ab}=\partial_sg_s^{ab}|_0$ and the inverse-metric variation identity of [[thm-gr-compact-metric-and-timelike-curve-variation]] clause (a) holds ([[thm-gr-compact-metric-and-timelike-curve-variation]]).

[L4] The action difference of [[def-gr-scalar-field-matter-model]] clause (b) is a chart integral of a compactly supported smooth function; differentiating in the parameter is differentiation under the integral sign ([[thm-differentiation-under-the-integral-sign]], [[def-darboux-integral]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

## Proof

**Proof technique:** direct; vary the Lagrangian density in the field and in the metric, integrate by parts using the vanishing of compactly supported divergence integrals, and differentiate the stress-energy formula.

1.1 (Field variation of the density.) Write $\Phi(u):=\tfrac12g^{ab}\partial_a\varphi_u\partial_b\varphi_u+V(\varphi_u)$, so that $\Delta S(\varphi_u,g)=-\frac{K}{c}\int_M\Phi(u)\mathrm{vol}_g$. Differentiating the integrand at $u=0$, $\partial_u\Phi=(g^{ab}\partial_a\varphi)\partial_b\delta\varphi+V'(\varphi)\delta\varphi$, and by [L4] the derivative of the integral is the integral of the derivative. [L4, algebra]

2.1 (Integration by parts.) Consider the smooth compactly supported vector field $J^b:=\delta\varphi\,g^{ab}\partial_a\varphi$; by [L1], $\nabla_bJ^b=(\partial_b\delta\varphi)g^{ab}\partial_a\varphi+\delta\varphi\,\Box_g\varphi$, and $\int_M\nabla_bJ^b\mathrm{vol}_g=0$ by [L2]. Hence $\int_M(g^{ab}\partial_a\varphi)\partial_b\delta\varphi\,\mathrm{vol}_g=-\int_M\delta\varphi\,\Box_g\varphi\,\mathrm{vol}_g$, and step 1.1 gives $\frac{d}{du}\Delta S=\frac{K}{c}\int_M(\Box_g\varphi-V'(\varphi))\delta\varphi\,\mathrm{vol}_g$, which is (a). [step 1.1, L1, L2, algebra]

2.2 (Metric variation.) With $\Psi:=\tfrac12g^{ab}\partial_a\varphi\partial_b\varphi+V(\varphi)$ so that $\Delta S=-\frac{K}{c}\int_M\Psi\mathrm{vol}_g$ along the metric family, differentiate at $s=0$: $\partial_s\Psi=\tfrac12\partial_a\varphi\partial_b\varphi\,q^{ab}$, and by [L2] $\partial_s\mathrm{vol}_g=-\tfrac12g_{ab}q^{ab}\mathrm{vol}_g$. Therefore $$\partial_s\bigl(\Psi\mathrm{vol}_g\bigr)\big|_0=\tfrac12\Bigl[\partial_a\varphi\partial_b\varphi-g_{ab}\Psi\Bigr]q^{ab}\mathrm{vol}_g=\tfrac{1}{2K}T_{ab}q^{ab}\mathrm{vol}_g$$ by the definition of $T$ in [[def-gr-scalar-field-matter-model]] clause (c). Differentiating under the integral by [L4] and multiplying by $-K/c$ gives (b). [step 1.1, L2, L3, L4, algebra]

3.1 (Conservation identity.) By [L1], $\nabla^aT_{ab}=K\bigl[\nabla^a(\partial_a\varphi\partial_b\varphi)-\nabla_b\bigl(\tfrac12\partial^c\varphi\partial_c\varphi+V(\varphi)\bigr)\bigr]$. The first term is $K[(\nabla^a\partial_a\varphi)\partial_b\varphi+\partial_a\varphi\nabla^a\partial_b\varphi]=K[\Box_g\varphi\,\partial_b\varphi+\partial_a\varphi\nabla_b\partial^a\varphi]$ by torsion freedom, and the second is $K[\partial_a\varphi\nabla_b\partial^a\varphi+V'(\varphi)\partial_b\varphi]$. Subtracting gives $\nabla^aT_{ab}=K(\Box_g\varphi-V'(\varphi))\partial_b\varphi$, which is (c); this completes the proof. [step 2.2, L1, algebra] ∎

## Remarks

- **Existence is not claimed.** The proposition identifies the equation satisfied by stationary configurations of the action difference; it asserts neither that $\Box_g\varphi=V'(\varphi)$ has solutions on a given $(M,g)$ nor any well-posedness property.

- **Dependence on the sign convention.** Changing the overall sign of $\ell$ reverses the sign of $\Delta S$ and of the Hilbert tensor, and correspondingly the field equation; the proposition is stated for the convention fixed in [[def-gr-scalar-field-matter-model]].
