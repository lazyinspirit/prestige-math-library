---
id: lem-gr-scalar-einstein-symmetric-hyperbolic-reduction
kind: lemma
title: "Symmetric hyperbolic reduction of the Einstein-scalar system and on-shell conservation"
status: draft
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-scalar-field-matter-model, prop-gr-scalar-field-stress-energy-conservation, lem-gr-reduced-einstein-principal-part, def-gr-harmonic-gauge-and-reduced-equations, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-inverse-metric-and-musical-isomorphisms, def-ck-and-multi-index-notation-in-several-variables, def-c-r-and-smooth-maps-between-smooth-manifolds, def-christoffel-symbols-of-an-affine-connection]
dependency_roles:
  def-gr-scalar-field-matter-model: mathematical-premise
  prop-gr-scalar-field-stress-energy-conservation: mathematical-premise
  lem-gr-reduced-einstein-principal-part: mathematical-premise
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 5.4 (Matter Models): the conditions defining a matter model and the treatment of scalar-field matter coupled to the Einstein equations"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the definition of a quasilinear symmetric hyperbolic system, the finite-dimensional mollifier approximation (3.1) solved by ODE theory, the energy and Moser product/composition estimates, the higher-order energy inequality, uniqueness, the Rellich/Ascoli compactness step and the passage to a classical solution, with Remarks 1-6 on smooth persistence, the continuation criterion, Cauchy stability and the non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Fix one scalar model with smooth potential $V$ and fixed stress normalization $K_\phi$ as in [[def-gr-scalar-field-matter-model]]. On a smooth time-oriented Lorentzian four-manifold its equations and stress are
$$\Box_g\varphi-V'(\varphi)=0,\qquad T_{ab}=K_\phi\left[\partial_a\varphi\partial_b\varphi-g_{ab}\left(\tfrac12g^{cd}\partial_c\varphi\partial_d\varphi+V(\varphi)\right)\right].$$
Fix a chart and a smooth background $\bar g$ for the reduced Einstein equation of [[def-gr-harmonic-gauge-and-reduced-equations]]. On the open state set where $g^{00}<0$ and $(g^{ij})$ is positive definite, the reduced Einstein equation coupled to this scalar equation has a smooth first-order symmetric hyperbolic reduction with variables
$$z=(g_{ab},p_{ab}=\partial_0g_{ab},q_{abi}=\partial_ig_{ab},\varphi,P=\partial_0\varphi,Q_i=\partial_i\varphi).$$
The time matrix is block diagonal with metric block $\operatorname{diag}(I,-g^{00}I,g^{ij}I)$ and scalar block $\operatorname{diag}(1,-g^{00},g^{ij})$. Matter and metric cross-coupling is zeroth order in derivatives of $z$. The partial-derivative metric variables and the background-covariant ones are related by an invertible smooth zeroth-order change of variables; either gives the reduction.

For complete initial scalar data $(\varphi_0,\pi_0)$ in an initially orthogonal chart with $\partial_0=n$, prescribe $(\varphi,P,Q_i)=(\varphi_0,\pi_0,\partial_i\varphi_0)$. The auxiliary constraints propagate, the reconstructed scalar solves its full equation on the reduced metric, and its stress is conserved there before imposing the unreduced Einstein equation. Conversely every smooth physical scalar solution extracts to the same system. No potential positivity or mass sign is required; local arguments do not require a global orientation.

## Facts & Assumptions

**Given:** the fixed scalar model, chart, background, admissible metric state, and complete compatible initial scalar data.

[L1] Metric wave reduction and positive symmetric metric block are [[lem-gr-reduced-einstein-principal-part]], with gauge and reduced equation as in [[def-gr-harmonic-gauge-and-reduced-equations]].

[L2] The scalar wave equation is $g^{ab}\partial_a\partial_b\varphi-g^{ab}\Gamma^c{}_{ab}\partial_c\varphi-V'(\varphi)=0$. The Christoffel symbols are smooth algebraic functions of $(g,p,q)$ by metric compatibility and the coordinate connection formula ([[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-christoffel-symbols-of-an-affine-connection]]).

[L3] The scalar stress formula is [[def-gr-scalar-field-matter-model]]; its local conservation identity is $\nabla^aT_{ab}=K_\phi(\Box_g\varphi-V'(\varphi))\partial_b\varphi$ ([[prop-gr-scalar-field-stress-energy-conservation]]). Only its forward implication is used.

## Proof

1.1 (Scalar symmetric system.) Write $D_0=P$ and $D_i=Q_i$. Use $\partial_0\varphi=P$, $\partial_0Q_i=\partial_iP$ and $$-g^{00}\partial_0P-2g^{0i}\partial_iP-g^{ij}\partial_iQ_j+g^{ab}\Gamma^c{}_{ab}D_c+V'(\varphi)=0.$$ Multiplying the $Q_i$ equations by $g^{ji}$ gives time block $\operatorname{diag}(1,-g^{00},g^{ij})$. For each spatial derivative $\partial_k$, its $P,P$ entry is $-2g^{0k}$, and its $P,Q_j$ and $Q_j,P$ entries are both $-g^{kj}$; all other scalar spatial entries vanish. Thus all spatial matrices are symmetric and the time matrix is positive definite on the stated open set. The lower terms are smooth functions of $z$ by [L2]. [given, L2, algebra]

2.1 (Compatibility and matter recovery.) The first and third scalar equations imply $\partial_0(Q_i-\partial_i\varphi)=\partial_iP-\partial_i\partial_0\varphi=0$. The prescribed complete data give zero initial residual, so $Q_i=\partial_i\varphi$ throughout the local solution, while $P=\partial_0\varphi$ by its first equation. Substitute these relations in the displayed $P$ equation: it is exactly the scalar wave equation of [L2], multiplied by $-1$. Every physical scalar solution satisfies these equations after extraction. This establishes matter recovery on the reduced metric without using its Einstein residual. [step 1.1, given, L2, algebra]

3.1 (Coupled reduction and initialization.) Append the metric block of [L1]. In partial variables use $\partial_0g=p$ and $\partial_0q_i=\partial_ip$, which give $\partial_0(q_i-\partial_i g)=0$ and recover the metric derivatives from compatible initial data; the scalar stress is a smooth algebraic function of $(g,\varphi,P,Q)$ by [L3]. Conversely the scalar connection terms use $(g,p,q)$ without derivatives of those first-order variables. The combined principal matrices are therefore the two symmetric diagonal blocks with no cross derivatives, and the positive time matrices persist on a sufficiently small open state neighborhood. Complete scalar data determine every matter variable as stated, not merely stress tensor jets. For a curved background the transformed compatibility equations include the prescribed background-curvature commutator terms; they are obtained from this partial system rather than assuming covariant derivatives commute. Smooth background Christoffel coefficients change $p,q$ to $\bar\nabla_0g,\bar\nabla_ig$ by adding expressions linear in $g$; this invertible zeroth-order change preserves the reduction, with a congruence of principal matrices when changing the equations. [step 1.1, step 2.1, L1, L3, algebra]

4.1 (Conservation on the reduced solution.) Step 2.1 has already recovered the full scalar equation. Applying [L3]'s local identity gives $\nabla^aT_{ab}=0$ on this reduced solution before Einstein recovery. The identity and reduction are local tensor equations, so using local orientations if needed imposes no global orientability restriction. This proves all stated conclusions without a converse from stress conservation to the scalar equation. [step 2.1, step 3.1, L3, algebra] ∎

## Remarks

The fixed potential and normalization must be the same in any comparison of developments. This supplier establishes the reduced PDE, complete matter initialization, auxiliary recovery and reduced-solution conservation independently of a geometric development theorem.
