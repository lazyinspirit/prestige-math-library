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
deps: [def-gr-scalar-field-matter-model, prop-gr-scalar-field-stress-energy-conservation, lem-gr-reduced-einstein-principal-part, def-gr-harmonic-gauge-and-reduced-equations, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-inverse-metric-and-musical-isomorphisms, def-ck-and-multi-index-notation-in-several-variables, def-c-r-and-smooth-maps-between-smooth-manifolds]
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

Let $(M,g,N)$ be an oriented time-oriented smooth Lorentzian four-manifold and
let $(\varphi,V,K)$ be the scalar-field matter model with scalar equation
$\Box_g\varphi-V'(\varphi)=0$ and candidate stress-energy tensor
$T_{ab}=K[\partial_a\varphi\,\partial_b\varphi-g_{ab}(\tfrac12\partial^c\varphi\,\partial_c\varphi+V(\varphi))]$
([[def-gr-scalar-field-matter-model]]). Fix a chart and the background
$\bar g,\bar\nabla$ of [[def-gr-harmonic-gauge-and-reduced-equations]]. Then
the system consisting of the reduced Einstein equation with this $T$ and the
scalar equation, together with the definition of the auxiliary variables
$$u:=\bigl(g_{ab},\bar\nabla_0g_{ab},\bar\nabla_ig_{ab},\ \varphi,\ \varphi_0:=\bar\nabla_0\varphi,\ \varphi_i:=\bar\nabla_i\varphi\bigr)$$
is, on every region where the metric is Lorentzian and the chart is initially
orthogonal, a first-order quasilinear symmetric hyperbolic system whose time
matrix is block diagonal with positive definite blocks: the metric block
$\operatorname{diag}(I,-g^{00}I,g^{ij}I)$ of
[[lem-gr-reduced-einstein-principal-part]] clause (b) and, for the scalar
variables, a positive definite block built from $1$ and $-g^{00}$; the coupling
between the metric and scalar blocks is only through zeroth-order terms in the
first derivatives of $g$. Moreover the stress-energy tensor is on-shell
divergence-free: $\nabla^aT_{ab}=0$ whenever $\Box_g\varphi-V'(\varphi)=0$
([[prop-gr-scalar-field-stress-energy-conservation]]).

## Facts & Assumptions

**Given:** the oriented Lorentzian manifold, the scalar model $(\varphi,V,K)$ with smooth $V$, the chart and background, and the auxiliary variables.

[L1] Scalar wave equation in coordinates: $\Box_g\varphi-V'(\varphi)=g^{\mu\nu}\bar\nabla_\mu\bar\nabla_\nu\varphi+\text{first-order}-V'(\varphi)=0$; solved for the second time derivative, $-g^{00}\bar\nabla_0\bar\nabla_0\varphi=2g^{0i}\bar\nabla_0\bar\nabla_i\varphi+g^{ij}\bar\nabla_i\bar\nabla_j\varphi+\text{lower order}$, using that $g^{00}<0$ on an initially orthogonal chart ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-gr-metric-selected-connection]]).

[L2] Metric block: the reduced Einstein operator is equivalent to the first-order system with positive time matrix $\operatorname{diag}(I,-g^{00}I,g^{ij}I)$ and symmetric spatial coefficients, coupled at zeroth order to any matter whose stress tensor depends on the matter fields and the metric without derivatives of the metric ([[lem-gr-reduced-einstein-principal-part]] clause (b), [[def-gr-harmonic-gauge-and-reduced-equations]]).

[L3] The scalar stress tensor involves $\varphi$ and its first derivatives only, and is a smooth function of the variables of the statement ([[def-gr-scalar-field-matter-model]]).

[L4] On-shell conservation of the scalar stress-energy tensor ([[prop-gr-scalar-field-stress-energy-conservation]]).

## Proof

**Proof technique:** direct.

1.1 (Scalar block.) Introduce $(\varphi,\varphi_0,\varphi_i)$ with the relations $\bar\nabla_0\varphi=\varphi_0$, $\bar\nabla_0\varphi_i=\bar\nabla_i\varphi_0$. By [L1] the scalar equation is equivalent to $\bar\nabla_0\varphi_0=-(g^{00})^{-1}[2g^{0i}\bar\nabla_i\varphi_0+g^{ij}\bar\nabla_i\varphi_j+\text{lower-order}]$, i.e., a first-order system with time matrix $\operatorname{diag}(1,-g^{00},g^{ij})$ on the slots $(\varphi,\varphi_0,\varphi_i)$: symmetric and positive definite exactly when $g^{00}<0$ and $(g^{ij})>0$. [L1, algebra]

2.1 (Coupling and total symbol.) The metric equation of [L2] contains the matter stress tensor $T$; by [L3] $T$ is a smooth function of $(g,\varphi)$ and the first derivatives $\varphi_0,\varphi_i$ only, so its contribution to the first-order system for $u$ is a zeroth-order (in derivatives of $u$) source, and it couples to the metric block only through $g$ itself. The combined time matrix is block diagonal with the two positive blocks of steps 1.1 and [L2], hence positive definite; the spatial coefficient matrices are symmetric because each block is and the coupling carries no spatial derivatives mixing the blocks. [step 1.1, L2, L3, algebra]

3.1 (Conservation.) On-shell conservation of $T$ is [L4]; hence the matter sector satisfies the hypothesis of [[thm-gr-local-geometric-development]]. [L4] ∎



- **Role.** This is the reduction verified for the scalar branch; the no-mass-sign, no-potential-sign scope of the local theorem is inherited from this item.
