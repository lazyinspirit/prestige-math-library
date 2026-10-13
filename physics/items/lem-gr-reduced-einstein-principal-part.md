---
id: lem-gr-reduced-einstein-principal-part
kind: lemma
title: "Principal part of the reduced Einstein operator and its first-order symmetric hyperbolic reduction"
status: draft
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-harmonic-gauge-and-reduced-equations, thm-gr-curvature-tensoriality-and-coordinate-formula, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-curvature-tensor-and-derived-tensors, def-gr-tensor-fields-and-components, def-gr-inverse-metric-and-musical-isomorphisms, lem-gr-contracted-commutator-identity, def-christoffel-symbols-of-an-affine-connection, def-ck-and-multi-index-notation-in-several-variables]
dependency_roles:
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  lem-gr-contracted-commutator-identity: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 2.4 (The Evolution Equations): the splitting of the field equations into evolution and constraint parts, gauge source functions and the harmonically reduced field equations (2.39), and the subsidiary system obtained from their divergence"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the definition of a quasilinear symmetric hyperbolic system, the finite-dimensional mollifier approximation (3.1) solved by ODE theory, the energy and Moser product/composition estimates, the higher-order energy inequality, uniqueness, the Rellich/Ascoli compactness step and the passage to a classical solution, with Remarks 1-6 on smooth persistence, the continuation criterion, Cauchy stability and the non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, let $\bar g$
be a smooth background metric with Levi-Civita connection $\bar\nabla$, and let
$H^a=g^{bc}(\Gamma^a{}_{bc}-\bar\Gamma^a{}_{bc})$ be the harmonic-gauge vector
of [[def-gr-harmonic-gauge-and-reduced-equations]]. Then:

**(a) [principal part]** Let $\hat g$ be a smooth Lorentzian metric on an open
set $U\subseteq M$ and let $h$ be a smooth symmetric covariant $2$-tensor on
$U$. The derivative at $\hat g$ in the direction $h$ of the operator
$g\mapsto\operatorname{Ric}_{ab}[g]-\bar\nabla_{(a}H_{b)}[g]$ equals
$$-\tfrac12\hat g^{cd}\,\bar\nabla_c\bar\nabla_d h_{ab}+L_{ab}(h,\bar\nabla h;\hat g,\bar g),$$
where $L$ is a smooth expression linear in $h$ and its first
$\bar\nabla$-derivatives with coefficients built from $\hat g,\hat g^{-1}$, its first and second
$\bar\nabla$-derivatives, $\bar g$ and the background curvature. Thus the
coefficients depend on the full second jet of the linearization metric. In particular the principal symbol is
$-\tfrac12\hat g^{cd}\xi_c\xi_d$ times the identity on the metric slot at every
covector $\xi$.

**(b) [first-order reduction]** Fix constants $\kappa>0$, $\Lambda\in\mathbb R$ and a prescribed smooth symmetric covariant $2$-tensor field $T$ on the chart domain. Fix a chart $(x^0,x^1,x^2,x^3)$ with
$x^0=t$. Introduce the metric variables
$$u:=\bigl(g_{ab},\ p_{ab}:=\bar\nabla_0g_{ab},\ q_{abi}:=\bar\nabla_ig_{ab}\bigr)$$
(symmetry in $a,b$ understood) and the relation variables $\bar\nabla_0g_{ab}-p_{ab}=0$ and $\bar\nabla_0q_{abi}-\bar\nabla_ip_{ab}=\mathcal C_{abi}$, where $\mathcal C_{abi}=-\bar R^c{}_{a0i}g_{cb}-\bar R^c{}_{b0i}g_{ac}$. Second covariant derivatives include their derivative-slot connection. These known background-curvature terms are zeroth order in the first-order state and vanish for the flat coordinate background. Then the reduced Einstein equation can be solved for the second time derivatives in the form
$$\bar\nabla_0p_{ab}=-(g^{00})^{-1}\Bigl[2g^{0i}\bar\nabla_ip_{ab}+g^{ij}\bar\nabla_iq_{abj}+R_{ab}(x,u,T;\kappa,\Lambda,\bar g)\Bigr],$$
where the source is smooth in the first-order metric state and the prescribed matter data, with no derivatives of $T$, and includes $2\kappa(T_{ab}-\tfrac12(g^{cd}T_{cd})g_{ab})+2\Lambda g_{ab}$. The resulting first-order system for $u$ is symmetric hyperbolic on every
region where $g^{00}<0$ and the spatial block $(g^{ij})$ is positive definite:
the coefficient of $\bar\nabla_0u$ is the block diagonal
$\operatorname{diag}(I,-g^{00}I,g^{ij}I)$ (on the three slots
$g,p,q$), which is positive definite there, and the coefficients of the spatial
derivatives are symmetric. More generally, in a coupled reduction one may substitute a specified smooth algebraic stress map $T_{ab}=\mathcal T_{ab}(x,u,z)$, symmetric in $a,b$, where $z$ is a specified additional first-order matter state ranging in an open Euclidean set. This keeps the same metric principal matrices; symmetric hyperbolicity of the combined metric-matter system requires a separate check of the matter equations.

## Facts & Assumptions
**Given:** the manifold, metrics and gauge vector of the statement, and in (a) the metric $\hat g$ and direction $h$; in (b) the fixed matter tensor or stated algebraic stress map and constants $\kappa,\Lambda$.

[L1] Difference of connections: for $h=g-\bar g$, $\Delta^a{}_{bc}:=\Gamma^a{}_{bc}-\bar\Gamma^a{}_{bc}=\tfrac12g^{ad}(\bar\nabla_bh_{dc}+\bar\nabla_ch_{bd}-\bar\nabla_dh_{bc})$ ([[def-christoffel-symbols-of-an-affine-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-gr-tensor-fields-and-components]]).

[L2] Substituting $\Gamma=\bar\Gamma+\Delta$ into the coordinate curvature formula and contracting gives
$$\operatorname{Ric}_{ab}[g]=\operatorname{Ric}_{ab}[\bar g]+\bar\nabla_c\Delta^c{}_{ab}-\bar\nabla_b\Delta^c{}_{ac}+\Delta^c{}_{cd}\Delta^d{}_{ab}-\Delta^c{}_{bd}\Delta^d{}_{ac}.$$
This identity uses the curvature convention of [[thm-gr-curvature-tensoriality-and-coordinate-formula]] and [[def-gr-curvature-tensor-and-derived-tensors]]; the background covariant derivatives collect the terms linear in $\bar\Gamma$.

[L3] Lowering the gauge vector in [L1] gives the exact identity $H_b=g^{cd}(\bar\nabla_cg_{bd}-\tfrac12\bar\nabla_bg_{cd})$. Differentiating $g^{ce}g_{ed}=\delta^c_d$ in a metric direction $h$ gives $\delta g^{cd}=-g^{ce}h_{ef}g^{fd}$; the spatial derivative version is $\bar\nabla_kg^{cd}=-g^{ce}(\bar\nabla_kg_{ef})g^{fd}$.

[L4] The commutator on a covariant two-tensor is $[\bar\nabla_0,\bar\nabla_i]g_{ab}=-\bar R^c{}_{a0i}g_{cb}-\bar R^c{}_{b0i}g_{ac}$. It follows by applying the vector commutator in [[lem-gr-contracted-commutator-identity]] (a) to each slot of the scalar pairing, using the tensor derivative rule in [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]; commutators in any two directions have the same slot formula.

[L5] The metric and its inverse give symmetric bilinear forms; $g^{00}<0$ on a chart adapted to a spacelike slice with normal time coordinate, and $(g^{ij})$ is then positive definite ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-gr-harmonic-gauge-and-reduced-equations]]).



[L6] The exact reduced equation is $\operatorname{Ric}_{ab}-\nabla_{(a}H_{b)}=\kappa(T_{ab}-\tfrac12(g^{cd}T_{cd})g_{ab})+\Lambda g_{ab}$ ([[def-gr-harmonic-gauge-and-reduced-equations]] clause (b)); its right side is algebraic in the metric and stress tensor.

## Proof

**Proof technique:** direct.

1.1 (The difference formula.) Write $h=g-\bar g$ and $\Delta^a{}_{bc}=\Gamma^a{}_{bc}-\bar\Gamma^a{}_{bc}$. Subtracting the two Christoffel formulas and using $\bar\nabla_kh_{ab}=\partial_kh_{ab}-\bar\Gamma^c{}_{ka}h_{cb}-\bar\Gamma^c{}_{kb}h_{ac}$ gives [L1] directly: the algebraic identity $\Gamma^a{}_{bc}=\bar\Gamma^a{}_{bc}+\tfrac12g^{ad}(\bar\nabla_bh_{dc}+\bar\nabla_ch_{bd}-\bar\nabla_dh_{bc})$ is equivalent to the Christoffel formula for $g$ after insertion of $\partial_kh_{ab}$. [L1, algebra]

2.1 (Exact quasilinear principal part.) Insert [L1] into [L2]. Terms in which a derivative hits $g^{-1}$ and the $\Delta\Delta$ terms depend smoothly only on $g,g^{-1},\bar\nabla g$. The second-derivative terms are $\tfrac12g^{cd}(\bar\nabla_c\bar\nabla_ag_{db}+\bar\nabla_c\bar\nabla_bg_{da}-\bar\nabla_c\bar\nabla_dg_{ab}-\bar\nabla_b\bar\nabla_ag_{cd})$. By [L3] the second-derivative terms of $\bar\nabla_{(a}H_{b)}$ are $\tfrac12g^{cd}(\bar\nabla_a\bar\nabla_cg_{bd}+\bar\nabla_b\bar\nabla_cg_{ad}-\bar\nabla_a\bar\nabla_bg_{cd})$. Subtraction cancels the first, second and fourth Ricci terms after commuting derivatives. By [L4] the commutators contain only background curvature times $g$. Consequently $\operatorname{Ric}_{ab}[g]-\bar\nabla_{(a}H_{b)}[g]=-\tfrac12g^{cd}\bar\nabla_c\bar\nabla_dg_{ab}+Q_{ab}(g,g^{-1},\bar\nabla g;\bar g,\bar R)$, with $Q$ smooth and containing no second derivatives of $g$. The actual reduced operator using $\nabla_{(a}H_{b)}$ differs by $\Delta^c{}_{ab}H_c$, another smooth first-jet term. [step 1.1, L1, L2, L3, L4, algebra]

3.1 (Linearization and its lower-order coefficients.) Differentiate step 2.1 at $\hat g$. Variation of the wave term is $-\tfrac12\hat g^{cd}\bar\nabla_c\bar\nabla_dh_{ab}+\tfrac12\hat g^{ce}h_{ef}\hat g^{fd}\bar\nabla_c\bar\nabla_d\hat g_{ab}$. Variation of $Q$ is linear in $h,\bar\nabla h$, with coefficients depending smoothly on $\hat g,\hat g^{-1},\bar\nabla\hat g$ and the background. This proves precisely (a), including the second-jet dependence. Replacing $\bar\nabla_c\bar\nabla_dh$ by $\xi_c\xi_dh$ defines the stated principal-symbol convention. [step 2.1, L3, algebra]

3.2 (First-order reduction.) By step 2.1 the exact reduced metric equation has the form $g^{cd}\bar\nabla_c\bar\nabla_dg_{ab}+2S_{ab}-2\widetilde Q_{ab}=0$, where $S_{ab}=\kappa(T_{ab}-\tfrac12(g^{cd}T_{cd})g_{ab})+\Lambda g_{ab}$ by [L6] and $\widetilde Q=Q+\Delta^c{}_{ab}H_c$ is the actual first-jet remainder from step 2.1. With $p=\bar\nabla_0g$, $q_i=\bar\nabla_i g$, its mixed derivatives are $\bar\nabla_0q_i=\bar\nabla_i p+\mathcal C_i$ by [L4], and its spatial derivatives are $\bar\nabla_iq_j$, including the prescribed derivative-slot connection terms. Where $g^{00}<0$, solving for $\bar\nabla_0p$ gives the displayed equation, with background commutator and connection terms included in the smooth geometric remainder $R^{\rm geom}_{ab}(x,u;\bar g)$ and $R_{ab}=R^{\rm geom}_{ab}+2\kappa(T_{ab}-\tfrac12(g^{cd}T_{cd})g_{ab})+2\Lambda g_{ab}$. Append $\bar\nabla_0g=p$ and the three commutator relations. This is a first-order system on the metric jet variables with no second metric derivatives or derivatives of $T$ left in its sources. A smooth algebraic stress substitution $\mathcal T(x,u,z)$ has the same property for the enlarged state, without asserting any property of its as yet unspecified matter equations. [step 2.1, L4, L5, L6, algebra]

4.1 (Explicit symmetric matrices.) Move the equation in step 3.2 to the form $-g^{00}\partial_tp-2g^{0k}\partial_kp-g^{ij}\partial_iq_j=$ lower-order terms, and multiply the relation $\partial_tq_i-\partial_ip=$ lower-order terms by $g^{ji}$. In the state ordering $(g,p,q_i)$, suppressing the identity on symmetric metric components, the time matrix is $A^0=\operatorname{diag}(1,-g^{00},(g^{ij}))$. For each $k$, the only nonzero entries of $A^k$ are $(A^k)_{pp}=-2g^{0k}$, $(A^k)_{p q_j}=-g^{kj}$ and $(A^k)_{q_i p}=-g^{ik}$. Thus every $A^k$ is symmetric, even when $g^{0k}\ne0$, and $A^0$ is positive definite under exactly the two stated block inequalities. Passing from background-covariant to component derivatives changes only smooth zeroth-order state terms. No initially orthogonal chart hypothesis is needed. [step 3.2, L5, algebra] ∎

## Remarks

- **Role.** Clause (a) is the statement that the harmonic-gauge reduction has the same principal part as the wave operator and hence is a hyperbolic (not elliptic) system; clause (b) is the form in which the local well-posedness theorem [[thm-gr-local-symmetric-hyperbolic-well-posedness]] is applied in [[thm-gr-reduced-einstein-local-existence]].
- **Scope.** The reduction is local and uses any chart satisfying the two stated block inequalities; no global chart or global hyperbolicity is asserted.
