---
id: thm-gr-killing-and-on-shell-matter-identities
kind: theorem
title: "Killing fields and conserved currents, and on-shell conservation of the Hilbert stress-energy tensor"
status: draft
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-killing-field, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, lem-gr-connection-conditions-in-chart-components, def-lie-derivative-of-a-tensor-field, prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-tensor-fields-and-components, def-gr-smooth-covariant-two-tensor-field, def-covariant-derivative-along-a-curve, def-geodesic-of-an-affine-connection, lem-gr-parallel-transport-and-geodesic-speed, def-gr-metric-volume-form-and-current-flux, thm-gr-density-divergence-and-finite-chain-flux, lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes, def-gr-hilbert-stress-energy-tensor, lem-gr-compact-variation-coefficient-vanishing, lem-gr-lorentzian-perturbations-remain-lorentzian, thm-compactly-supported-vector-fields-are-complete, def-complete-vector-field, def-local-and-global-flow, def-countable-choice, def-smooth-vector-field-as-a-tangent-bundle-section, thm-chain-rule-for-total-derivatives, def-oriented-smooth-manifold-and-oriented-chart, def-interval]
dependency_roles:
  def-gr-killing-field: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  def-lie-derivative-of-a-tensor-field: mathematical-premise
  prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
  def-gr-hilbert-stress-energy-tensor: mathematical-premise
  lem-gr-compact-variation-coefficient-vanishing: mathematical-premise
  lem-gr-lorentzian-perturbations-remain-lorentzian: mathematical-premise
  thm-compactly-supported-vector-fields-are-complete: mathematical-premise
  def-complete-vector-field: mathematical-premise
  def-local-and-global-flow: mathematical-premise
  def-countable-choice: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 5: Killing vectors, L_X g_{mu nu}=0 and nabla_mu X_nu + nabla_nu X_mu = 0, (5.39)-(5.42), printed pp. 140-142 (PDF pp. 147-149); Ch. 4: conservation of the energy-momentum tensor from diffeomorphism invariance, printed pp. 117-118 (PDF pp. 124-125)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 5.3: Killing vectors and conserved quantities along geodesics, printed pp. 53-56 (PDF pp. 54-57); section 9.3: conservation of T^{ab} from diffeomorphism invariance of the matter action, (9.35)-(9.41), printed pp. 117-118 (PDF pp. 118-119)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 4.3 and 4.5.3: Killing vectors and the conservation of the energy-momentum tensor from diffeomorphism invariance, printed pp. 159-162 and 183-185 (PDF pp. 166-169 and 190-192)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be an oriented time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]],
[[def-oriented-smooth-manifold-and-oriented-chart]]).

**(a) Characterization of Killing fields.** For every smooth vector field
$\xi$ ([[def-smooth-vector-field-as-a-tangent-bundle-section]]), with
$\xi_b=g_{bc}\xi^c$ the lowered field,

$$\mathcal L_\xi g=0\quad\Longleftrightarrow\quad\nabla_a\xi_b+\nabla_b\xi_a=0 .$$

**(b) Contraction along geodesics.** If $\xi$ is a Killing field and
$\gamma:I\to M$ is a geodesic with $D_t\gamma'=0$ in its affine parameter
([[def-geodesic-of-an-affine-connection]],
[[def-covariant-derivative-along-a-curve]]), then $t\mapsto
g_{\gamma(t)}(\xi_{\gamma(t)},\gamma'(t))$ is constant on $I$.

**(c) Conserved current.** Let $U\subseteq M$ be open, let $T$ be a smooth
symmetric covariant $2$-tensor field on $U$
([[def-gr-smooth-covariant-two-tensor-field]]) with
$\nabla^aT_{ab}=0$ on $U$, and let $\xi$ be a Killing field on $U$. Then
$J^{a}:=T^{ab}\xi_b$ is a smooth vector field on $U$ with
$\nabla_aJ^a=0$; consequently the flux balance of
[[thm-gr-density-divergence-and-finite-chain-flux]] clause (b) applies to $J$
on every smooth singular $4$-chain contained in $U$.

**(d) On-shell conservation of the Hilbert tensor.** Let $c>0$, let
$S:\mathcal D\to\mathbb R$ be a model action with Hilbert stress-energy tensor
$T$ at $(g,\varphi)$ with respect to $c$
([[def-gr-hilbert-stress-energy-tensor]]), and let $\xi$ be a smooth vector
field with compact support whose flow $\Phi_v$ is a global flow
([[def-complete-vector-field]], [[def-local-and-global-flow]]); this holds for
every compactly supported smooth field, using the axiom
$\mathrm{AC}_\omega$ of [[def-countable-choice]] through
[[thm-compactly-supported-vector-fields-are-complete]]. Write
$G(u,v):=S(\Phi_v^*g,\Phi_u^*\varphi)$ for the simultaneous pullback by the
flow (this presupposes that the pairs lie in $\mathcal D$, which is part of the
hypotheses below). Suppose:

- **(H1)** the map $G$ is defined on a neighborhood of $(0,0)$ in
  $\mathbb R^2$ and is differentiable at $(0,0)$;
- **(H2)** $\partial_uG(0,0)=0$ (the matter configuration $\varphi$ satisfies
  its model equations in this direction);
- **(H3)** $\partial_vG(0,0)=-\frac{1}{2c}\int_MT_{ab}q^{ab}\mathrm{vol}_g$,
  where $q^{ab}:=\partial_v(\Phi_v^*g)^{ab}|_{v=0}$ (the metric variation is
  represented by the Hilbert tensor);
- **(H4)** $G(u,v)=S(g,\varphi)$ for all $(u,v)$ in that neighborhood
  (invariance of the action under simultaneous pullback by the flow).

Then $\nabla^aT_{ab}=0$ on $M$.

## Facts & Assumptions

**Given:** The oriented time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with metric-selected connection $\nabla$; in (c) an open $U$, a smooth symmetric $T$ with $\nabla^aT_{ab}=0$ and a Killing field $\xi$ on $U$; in (d) the action $S$, the Hilbert tensor $T$, and a compactly supported smooth vector field $\xi$ with global flow $\Phi_v$ and the hypotheses (H1)-(H4).

[L1] The coordinate formula $(\mathcal L_\xi g)_{ab}=\xi^c\partial_cg_{ab}+g_{cb}\partial_a\xi^c+g_{ac}\partial_b\xi^c$ holds for the Lie derivative of a covariant tensor ([[prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor]], [[def-lie-derivative-of-a-tensor-field]]).

[L2] $\nabla$ is torsion-free and $g$-compatible, with $g_{ab;c}=0$ and Christoffel symbols $\Gamma^{a}{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$; the compatibility identity $\partial_dg_{ab}=g_{bc}\Gamma^{c}{}_{ad}+g_{ac}\Gamma^{c}{}_{bd}$ holds in every chart; the extension of $\nabla$ to tensor fields satisfies the product rule and $\nabla g^{-1}=0$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[lem-gr-connection-conditions-in-chart-components]], [[def-gr-metric-selected-connection]]).

[L3] For smooth fields $V,W$ along a smooth curve, $\frac{d}{dt}g(V,W)=g(D_tV,W)+g(V,D_tW)$; the covariant derivative along the curve of the restriction of an ambient vector field is the ambient derivative restricted to the curve ([[lem-gr-parallel-transport-and-geodesic-speed]], [[def-covariant-derivative-along-a-curve]]).

[L4] The integral of the exterior derivative of a compactly supported smooth $3$-form on the oriented four-manifold $M$ vanishes; in particular $\int_M\nabla_aJ^a\,\mathrm{vol}_g=0$ for every smooth compactly supported vector field $J$, since $\nabla_aJ^a\mathrm{vol}_g=d(\iota_J\mathrm{vol}_g)$ and $\iota_J\mathrm{vol}_g$ has compact support ([[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]], [[thm-gr-density-divergence-and-finite-chain-flux]] clause (a), [[def-gr-metric-volume-form-and-current-flux]]).

[L5] If a continuous covector field $W$ on a chart domain satisfies $\int_UW_aq^aw\,d^4x=0$ for every smooth compactly supported vector field $q$ supported in the chart, then $W=0$; and the chart integral of a compactly supported divergence is zero ([[lem-gr-compact-variation-coefficient-vanishing]], [[def-gr-metric-volume-form-and-current-flux]]).

[L7] For a global flow $\Phi_v$ of $\xi$, the derivative $\partial_v(\Phi_v^*K)|_{v=0}$ is the Lie derivative $\mathcal L_\xi K$ of the tensor field $K$; moreover $(\Phi_v^*g)^{-1}=\Phi_v^*(g^{-1})$ for every $v$ ([[def-lie-derivative-of-a-tensor-field]], [[def-local-and-global-flow]]).

[L8] If a map $F:\mathbb R^2\to\mathbb R$ is differentiable at $(0,0)$, then $s\mapsto F(s,s)$ is differentiable at $0$ with derivative $\partial_1F(0,0)+\partial_2F(0,0)$ ([[thm-chain-rule-for-total-derivatives]], [[def-interval]]).

## Proof

**Proof technique:** direct; convert the Lie derivative of the metric into the symmetrized covariant derivative, differentiate the pairing along geodesics, then differentiate the invariance identity of the pullback family and integrate by parts.

1.1 (Characterization.) Fix smooth vector fields $X,Y$. Evaluating the coordinate formula of [L1] on $X,Y$, $(\mathcal L_\xi g)(X,Y)=\xi^c\partial_cg_{ab}X^aY^b+g_{cb}\partial_a\xi^cX^aY^b+g_{ac}\partial_b\xi^cX^aY^b$. On the other hand, by [L2], $\nabla_a\xi_b+\nabla_b\xi_a=g_{bc}(\partial_a\xi^c+\Gamma^{c}{}_{ad}\xi^d)+g_{ac}(\partial_b\xi^c+\Gamma^{c}{}_{bd}\xi^d)=\partial_a\xi_b+\partial_b\xi_a+\xi^d(g_{bc}\Gamma^{c}{}_{ad}+g_{ac}\Gamma^{c}{}_{bd})$; metric compatibility in the form $\partial_dg_{ab}=g_{bc}\Gamma^{c}{}_{ad}+g_{ac}\Gamma^{c}{}_{bd}$ (which is the Christoffel formula of [L2]) makes the last term $\xi^d\partial_dg_{ab}$. Hence $(\nabla_a\xi_b+\nabla_b\xi_a)X^aY^b=(\mathcal L_\xi g)(X,Y)$ for all $X,Y$, and since $X,Y$ are arbitrary, $\mathcal L_\xi g$ vanishes exactly when the symmetrized derivative vanishes. This proves (a). [L1, L2, algebra]

1.2 (The invariance identity.) Let $\xi$ be compactly supported with global flow $\Phi_v$ and let $G$ be as in (d). By [L8], $s\mapsto G(s,s)$ is differentiable at $0$ with derivative $\partial_uG(0,0)+\partial_vG(0,0)$; by (H4), $G(s,s)=S(g,\varphi)$ is constant in $s$, so this derivative vanishes. Substituting (H2) and (H3), $$0=0-\frac{1}{2c}\int_MT_{ab}q^{ab}\mathrm{vol}_g,\qquad q^{ab}=\partial_v(\Phi_v^*g)^{ab}\big|_{v=0}.$$ [L8, given, algebra]

2.1 (Contraction along geodesics.) Let $\gamma$ be a geodesic with $D_t\gamma'=0$ and $\xi$ Killing. By [L3], $\frac{d}{dt}g(\xi,\gamma')=g(D_t\xi,\gamma')+g(\xi,D_t\gamma')=g(D_t\xi,\gamma')$, and $D_t\xi$ is the restriction to $\gamma$ of $\nabla_{\gamma'}\xi$. By (a), $g(\nabla_{\gamma'}\xi,\gamma')=\tfrac12(\nabla_a\xi_b+\nabla_b\xi_a)\gamma'^a\gamma'^b=0$. Hence the derivative vanishes identically and the function is constant on $I$; this proves (b). [step 1.1, L3, algebra]

2.2 (Conserved current.) On $U$ put $J^a=T^{ab}\xi_b$. By [L2] and $\nabla g^{-1}=0$, $\nabla_aJ^a=(\nabla_aT^{ab})\xi_b+T^{ab}\nabla_a\xi_b$. The first term vanishes by hypothesis, and the second is $\tfrac12T^{ab}(\nabla_a\xi_b+\nabla_b\xi_a)=0$ because $T$ is symmetric and $\xi$ Killing, using (a). Hence $\nabla_aJ^a=0$; the flux-balance assertion is clause (b) of [[thm-gr-density-divergence-and-finite-chain-flux]] applied to this $J$. [step 1.1, L2, algebra]

2.3 (The inverse-metric variation.) By [L7], $(\Phi_v^*g)^{-1}=\Phi_v^*(g^{-1})$, so $q^{ab}=\partial_v(\Phi_v^*(g^{-1}))^{ab}|_{v=0}=(\mathcal L_\xi g^{-1})^{ab}$. Differentiating $g^{ac}(v)g_{cb}(v)=\delta^a{}_b$ for the family $g(v):=\Phi_v^*g$ with $\partial_vg_{cb}|_{v=0}=(\mathcal L_\xi g)_{cb}=\nabla_c\xi_b+\nabla_b\xi_c$ (step 1.1) gives $(\mathcal L_\xi g^{-1})^{ab}=-g^{ac}g^{bd}(\mathcal L_\xi g)_{cd}=-(\nabla^a\xi^b+\nabla^b\xi^a)$, where indices are raised with $g^{-1}$ by [L2]. [step 1.1, L2, L7, algebra]

3.1 (Conclusion of (d).) Substituting step 2.3 into step 1.2, $0=\frac{1}{2c}\int_MT_{ab}(\nabla^a\xi^b+\nabla^b\xi^a)\mathrm{vol}_g=\frac1c\int_MT_{ab}\nabla^a\xi^b\mathrm{vol}_g$, by symmetry of $T$. By the product rule [L2], $T_{ab}\nabla^a\xi^b=\nabla^a(T_{ab}\xi^b)-(\nabla^aT_{ab})\xi^b$; the vector field $J^a:=T^{ab}\xi_b$ is smooth and compactly supported (since $\xi$ is), so by [L4] $\int_M\nabla_aJ^a\mathrm{vol}_g=0$ and therefore $0=\int_MT_{ab}\nabla^a\xi^b\mathrm{vol}_g=-\int_M(\nabla^aT_{ab})\xi^b\mathrm{vol}_g$. [step 1.2, step 2.3, L2, L4, algebra]

4.1 (Vanishing of the divergence.) Fix a chart $(U,x)$ and restrict to compactly supported smooth $\xi$ supported in $U$. Writing the last integral in the chart and putting $W_b:=\nabla^aT_{ab}$, a smooth covector field on $U$, step 3.1 gives $\int_UW_b\xi^bw\,d^4x=0$ for every such $\xi$, so $W=0$ on $U$ by [L5]; the integral-of-a-divergence identity in [L5] was already used through [L4]. Since every point lies in a chart, $\nabla^aT_{ab}=0$ on $M$, which proves (d). [step 3.1, L5, algebra] ∎

## Remarks

- **Choice convention.** Clause (d) uses the completeness of the flow of a compactly supported smooth vector field, which is proved from the axiom $\mathrm{AC}_\omega$ of [[def-countable-choice]] in [[thm-compactly-supported-vector-fields-are-complete]]; this is the only choice principle used in the item, and it is inherited by consumers of clause (d). Clauses (a)-(c) use no choice principle.

- **On-shell means matter equations plus Hilbert representation.** The hypothesis (H2) is the model's matter equation at the configuration $\varphi$ in the flow direction; (H3) is the Hilbert representation of the metric variation. Neither is implied by the other, and no conservation is asserted off shell or for a tensor prescribed without a functional.

- **Global versus local Killing fields.** The current in (c) is defined on the open set where both $T$ obeys the divergence condition and $\xi$ is Killing; the flux balance of (c) concerns chains contained in that set and carries the side-flux hypotheses of the flux theorem.
