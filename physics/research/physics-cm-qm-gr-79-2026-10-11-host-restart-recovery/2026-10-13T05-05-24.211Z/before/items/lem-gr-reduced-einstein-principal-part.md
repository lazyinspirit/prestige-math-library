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
deps: [def-gr-harmonic-gauge-and-reduced-equations, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-curvature-tensor-and-derived-tensors, def-gr-tensor-fields-and-components, def-gr-inverse-metric-and-musical-isomorphisms, lem-gr-contracted-commutator-identity, def-christoffel-symbols-of-an-affine-connection, def-ck-and-multi-index-notation-in-several-variables]
dependency_roles:
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
$\bar\nabla$-derivatives with coefficients built from $\hat g,\hat g^{-1},\bar g$
and the background curvature. In particular the principal symbol is
$-\tfrac12\hat g^{cd}\xi_c\xi_d$ times the identity on the metric slot at every
covector $\xi$.

**(b) [first-order reduction]** Fix a chart $(x^0,x^1,x^2,x^3)$ with
$x^0=t$. Introduce the metric variables
$$u:=\bigl(g_{ab},\ p_{ab}:=\bar\nabla_0g_{ab},\ q_{abi}:=\bar\nabla_ig_{ab}\bigr)$$
(symmetry in $a,b$ understood) and the relation variables $\bar\nabla_0g_{ab}-p_{ab}=0$ and $\bar\nabla_0q_{abi}-\bar\nabla_ip_{ab}=\mathcal C_{abi}$, where $\mathcal C_{abi}=-\bar R^c{}_{a0i}g_{cb}-\bar R^c{}_{b0i}g_{ac}$. Second covariant derivatives include their derivative-slot connection. These known background-curvature terms are zeroth order in the first-order state and vanish for the flat coordinate background. Then the reduced Einstein equation can be solved for the second time derivatives in the form
$$\bar\nabla_0p_{ab}=-(g^{00})^{-1}\Bigl[2g^{0i}\bar\nabla_ip_{ab}+g^{ij}\bar\nabla_iq_{abj}+R_{ab}(u;\bar g)\Bigr],$$
and the resulting first-order system for $u$ is symmetric hyperbolic on every
region where $g^{00}<0$ and the spatial block $(g^{ij})$ is positive definite:
the coefficient of $\bar\nabla_0u$ is the block diagonal
$\operatorname{diag}(I,-g^{00}I,g^{ij}I)$ (on the three slots
$g,p,q$), which is positive definite there, and the coefficients of the spatial
derivatives are symmetric.

## Facts & Assumptions
**Given:** the manifold, metrics and gauge vector of the statement, and in (a) the metric $\hat g$ and direction $h$.

[L1] Difference of connections: for $h=g-\bar g$, $\Delta^a{}_{bc}:=\Gamma^a{}_{bc}-\bar\Gamma^a{}_{bc}=\tfrac12g^{ad}(\bar\nabla_bh_{dc}+\bar\nabla_ch_{bd}-\bar\nabla_dh_{bc})$ ([[def-christoffel-symbols-of-an-affine-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-gr-tensor-fields-and-components]]).

[L2] First-variation formula for the Ricci tensor: if $h_s$ is a smooth family of symmetric $2$-tensors, then at $s=0$
$$\frac{d}{ds}\operatorname{Ric}_{ab}[\hat g+sh]=\tfrac12\hat g^{cd}\bigl(\bar\nabla_c\bar\nabla_ah_{db}+\bar\nabla_c\bar\nabla_bh_{da}-\bar\nabla_c\bar\nabla_dh_{ab}-\bar\nabla_a\bar\nabla_bh_{cd}\bigr)+\text{curvature terms in }h,$$
where the curvature terms contain no second derivatives of $h$; this is the standard first variation of the Ricci tensor ([[def-gr-curvature-tensor-and-derived-tensors]], [[lem-gr-contracted-commutator-identity]]).

[L3] First variation of the gauge vector: since $H_a=g_{ac}g^{bc'}\Delta^c{}_{bc'}$ is linear in $\Delta$ plus lower-order dependence through $g$, its derivative at $\hat g$ has second-order part $h$-independent of order two: $\frac{d}{ds}H_a=\bar\nabla^bh_{ab}-\tfrac12\bar\nabla_ah+O(\bar\nabla h,h)$ with $h=\hat g^{ab}h_{ab}$, and $\frac{d}{ds}\bar\nabla_{(a}H_{b)}=\tfrac12(\bar\nabla_a\bar\nabla_ch^c{}_b+\bar\nabla_b\bar\nabla_ch^c{}_a-\bar\nabla_a\bar\nabla_bh)+O(\bar\nabla h,h)$. [L1, algebra]

[L4] Commutator identity: for a smooth $1$-form $\omega$ on a Lorentzian manifold with Levi--Civita connection $\nabla$ and curvature tensor $R$, $\nabla^a\nabla_b\omega_a-\nabla_b\nabla^a\omega_a=R_{ba}\,\omega^a$; this is the contracted commutator identity of [[lem-gr-contracted-commutator-identity]] in the sign convention of the framework.

[L5] The metric and its inverse give symmetric bilinear forms; $g^{00}<0$ on a chart adapted to a spacelike slice with normal time coordinate, and $(g^{ij})$ is then positive definite ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-gr-harmonic-gauge-and-reduced-equations]]).



## Proof

**Proof technique:** direct.

1.1 (The difference formula.) Write $h=g-\bar g$ and $\Delta^a{}_{bc}=\Gamma^a{}_{bc}-\bar\Gamma^a{}_{bc}$. Subtracting the two Christoffel formulas and using $\bar\nabla_kh_{ab}=\partial_kh_{ab}-\bar\Gamma^c{}_{ka}h_{cb}-\bar\Gamma^c{}_{kb}h_{ac}$ gives [L1] directly: the algebraic identity $\Gamma^a{}_{bc}=\bar\Gamma^a{}_{bc}+\tfrac12g^{ad}(\bar\nabla_bh_{dc}+\bar\nabla_ch_{bd}-\bar\nabla_dh_{bc})$ is equivalent to the Christoffel formula for $g$ after insertion of $\partial_kh_{ab}$. [L1, algebra]

2.1 (The cancellation of the second derivatives.) Differentiate the identity $\operatorname{Ric}[g]-\bar\nabla H[g]=\bigl(\operatorname{Ric}[g]-\operatorname{Ric}[\bar g]\bigr)-\bar\nabla H[g]+\operatorname{Ric}[\bar g]$ at $\hat g$ in the direction $h$ and insert [L2] and [L3]. The second-derivative terms of [L2] are $\tfrac12\hat g^{cd}(\bar\nabla_c\bar\nabla_ah_{db}+\bar\nabla_c\bar\nabla_bh_{da}-\bar\nabla_c\bar\nabla_dh_{ab}-\bar\nabla_a\bar\nabla_bh_{cd})$ and those of $-\bar\nabla_{(a}H_{b)}$ are $-\tfrac12(\bar\nabla_a\bar\nabla_ch^c{}_b+\bar\nabla_b\bar\nabla_ch^c{}_a-\bar\nabla_a\bar\nabla_bh)$. Since $\bar\nabla_ch^c{}_b=\hat g^{cd}\bar\nabla_ch_{db}+O(\bar\nabla h)$, the first two terms of the Ricci derivative cancel against the gauge terms up to curvature terms produced by commuting the contracted derivative (each such commutator lowers the derivative order by two and is linear in $h$ and its first derivatives, [L4]). The two remaining second-derivative terms $-\tfrac12\hat g^{cd}\bar\nabla_c\bar\nabla_dh_{ab}$ and $-\tfrac12\bar\nabla_a\bar\nabla_bh_{cd}\hat g^{cd}+\tfrac12\bar\nabla_a\bar\nabla_bh$ cancel because $h=\hat g^{cd}h_{cd}$: $-\tfrac12\bar\nabla_a\bar\nabla_bh+\tfrac12\bar\nabla_a\bar\nabla_bh=0$, leaving $-\tfrac12\hat g^{cd}\bar\nabla_c\bar\nabla_dh_{ab}$. This proves (a). [step 1.1, L2, L3, L4, algebra]

3.1 (The first-order reduction (b).) In the chart the reduced equation is a second-order quasilinear system whose principal part is $-\tfrac12g^{cd}\bar\nabla_c\bar\nabla_dg_{ab}$ by (a) applied at the solution itself (the derivative formula at $\hat g=g$ is the exact principal part). Solving for $\bar\nabla_0\bar\nabla_0g_{ab}$ uses $(g^{00})^{-1}$, available where $g^{00}<0$; the other second derivatives are $\bar\nabla_0\bar\nabla_ig_{ab}=\bar\nabla_ip_{ab}+\mathcal C_{abi}$ and $\bar\nabla_i\bar\nabla_jg_{ab}=\bar\nabla_iq_{abj}$, up to the displayed known background-curvature commutator terms, which are zeroth order in $u$. Substituting gives the displayed system for $(g,p,q)$. [step 2.1, L5, algebra]

4.1 (Symmetry and positivity.) In the system of step 3.1, the coefficient matrix multiplying $\bar\nabla_0u$ is block diagonal with blocks $I$ on the slot $g$, $-g^{00}I$ on $p$ and $g^{ij}I$ on the slot $q$ (the slot $q_{abi}$ carries the spatial inverse metric in its pair of internal indices), hence is symmetric and positive definite exactly when $g^{00}<0$ and $(g^{ij})$ is positive definite [L5]. The coefficients of the spatial derivatives $\bar\nabla_i$ are block matrices built from $I$, $g^{0i}$, $g^{ij}$ and their transposes in the symmetric internal slots, hence are symmetric; all remaining terms are zeroth order in $u$ or smooth functions of the background. Therefore the system is symmetric hyperbolic. [step 3.1, L5, algebra] ∎



## Remarks

- **Role.** Clause (a) is the statement that the harmonic-gauge reduction has the same principal part as the wave operator and hence is a hyperbolic (not elliptic) system; clause (b) is the form in which the local well-posedness theorem [[thm-gr-local-symmetric-hyperbolic-well-posedness]] is applied in [[thm-gr-reduced-einstein-local-existence]].
- **Scope.** The reduction is local and uses an initially orthogonal chart; no global chart or global hyperbolicity is asserted.
