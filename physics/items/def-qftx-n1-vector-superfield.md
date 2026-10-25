---
id: def-qftx-n1-vector-superfield
kind: definition
title: Four-dimensional $N=1$ non-Abelian vector superfield in connection normalization
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 4
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-n1-superspace-and-actions
axiom_base: "ZF + AC_omega inherited through the selected non-Abelian gauge-data supplier; this definition adds no choice principle."
deps:
  - def-qftx-physical-superspace-normalization
  - post-qftx-nonabelian-yang-mills-model
  - def-qftx-nonabelian-gauge-data
  - def-qftx-n1-chiral-superfield
  - lem-qftx-n1-chiral-superspace-identities
  - def-qftx-superspace-grassmann-algebra
dependency_roles:
  def-qftx-physical-superspace-normalization: formulation-prerequisite
  post-qftx-nonabelian-yang-mills-model: formulation-prerequisite
  def-qftx-nonabelian-gauge-data: formulation-prerequisite
  def-qftx-n1-chiral-superfield: mathematical-premise
  lem-qftx-n1-chiral-superspace-identities: mathematical-premise
  def-qftx-superspace-grassmann-algebra: mathematical-premise
physical_scope: "A local classical N=1 superspace prepotential and vector multiplet for the selected SU(2) gauge-bundle sector on flat four-dimensional Minkowski spacetime, in the connection normalization of the supplied pure Yang–Mills model. No quantum gauge theory or continuum construction is asserted."
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§§4.5 and 4.9, printed pp. 38–49: vector superfields, chiral field strengths, and non-Abelian gauge-covariant superspace actions."
    - title: "Adel Bilal, Introduction to Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0101055"
      locator: "§§4.4 and 5.1, printed pp. 23–29: real vector superfields, Wess–Zumino gauge, the non-Abelian field strength, and coupling rescaling."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Use the physical action brackets $[U]_D=-I_D(U)/4$ and $[Y]_F=I_F(Y)/2$ from Physical superspace action brackets and canonical chiral components, with raw mathematical coefficient integrals $I_D,I_F$ unchanged. Physical chiral components obey $\psi_{\mathrm{raw}}=\sqrt2\psi$ and $F_{\mathrm{raw}}=2F$. All physical action and coupling formulas below use these brackets and physical component names; adding Hermitian conjugation applies only to the F action and occurs once.

Use the selected smooth right-principal $SU(2)$ bundle $P\to M$ and its connection $A$ from the non-Abelian Yang–Mills model, with $M=\mathbb R^{1,3}$, $\eta=\operatorname{diag}(-1,1,1,1)$, $\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$, and positive dimensionless coupling $g_{\mathrm{YM}}$. For each matter representation, let $\mathcal H_R$ be a finite-dimensional complex Hermitian space and $R:SU(2)\to U(\mathcal H_R)$ a smooth unitary representation; write $\rho_{R*}$ for its Lie-algebra differential. In the fundamental representation set $T_a=-i\sigma_a/2\in\mathfrak{su}(2)$ and $t_a=iT_a=\sigma_a/2$, so $\operatorname{Tr}_2(t_at_b)=\tfrac12\delta_{ab}$. In representation $R$, set $t_{a,R}=i\rho_{R*}(T_a)$. In a local trivialization write $V=V^at_a$ and let $V_R=V^at_{a,R}$ be its represented matrix superfield in $\operatorname{End}_{\mathbb C}(\mathcal H_R)$, and set $A_\mu=-i g_{\mathrm{YM}}B_\mu$ when $B_\mu=B_\mu^at_a$ is its vector component. Thus the matter covariant derivative is $D_\mu=\partial_\mu+\rho_{R*}(A_\mu)=\partial_\mu-i g_{\mathrm{YM}}B_\mu^at_{a,R}$.

A **vector superfield prepotential** is a dimensionless smooth even real matrix-valued superfield $V$ in the finite Grassmann-valued superspace of the $N=1$ chiral-superfield convention. Under a global rigid supersymmetry variation it transforms as $\delta V=(\epsilon^\alpha Q_\alpha+\bar\epsilon^{\dot\alpha}\bar Q_{\dot\alpha})V$, with the supercharges defined in the chiral-superfield convention. Its local gauge transformations are $\Phi_R\mapsto e^{i\Lambda_R}\Phi_R$ and $e^{2g_{\mathrm{YM}}V_R}\mapsto e^{i\Lambda_R^\dagger}e^{2g_{\mathrm{YM}}V_R}e^{-i\Lambda_R}$, where $\Phi_R$ is chiral, $V_R=V^at_{a,R}$, and $\Lambda_R=\Lambda^at_{a,R}$ is a dimensionless chiral gauge-parameter superfield in the represented complexified Lie algebra $\mathfrak{su}(2)_{\mathbb C}=\mathfrak{su}(2)\otimes_{\mathbb R}\mathbb C$. The associated represented matrix curvature is defined by

$$\mathscr C_{\alpha,R}=-\tfrac14\bar D^{\dot\beta}\bar D_{\dot\beta}\!\left(e^{-2g_{\mathrm{YM}}V_R}D_\alpha e^{2g_{\mathrm{YM}}V_R}\right),$$

where $D_\alpha=\partial^L_{\theta^\alpha}+i\sigma^\mu_{\alpha\dot\beta}\bar\theta^{\dot\beta}\partial_\mu$ and $\bar D_{\dot\alpha}=-\partial^L_{\bar\theta^{\dot\alpha}}-i\theta^\beta\sigma^\mu_{\beta\dot\alpha}\partial_\mu$. Admissible vector-superfield data require $\bar D_{\dot\gamma}\mathscr C_{\alpha,R}=0$ and the adjoint transition law $\mathscr C_{\alpha,j}=\operatorname{Ad}_{g_{ij}^{-1}}\mathscr C_{\alpha,i}$ on each overlap with principal transition function $g_{ij}$.

Distinguish this represented curvature from the abstract connection-normalized Lie-algebra-valued curvature $\mathcal W_\alpha$. With canonical adjoint component field strength $W^a_{\mathrm{can},\alpha}$, the matrix convention is $\mathscr C_{\alpha,R}=2g_{\mathrm{YM}}t_{a,R}W^a_{\mathrm{can},\alpha}$, whereas $\mathcal W_\alpha=g_{\mathrm{YM}}T_aW^a_{\mathrm{can},\alpha}$. Since $t_{a,R}=i\rho_{R*}(T_a)$, their precise dictionary is

$$\rho_{R*}(\mathcal W_\alpha)=\frac{\mathscr C_{\alpha,R}}{2i}.$$

In the fundamental representation this gives $\kappa_{\mathbb C}(\mathcal W^\alpha,\mathcal W_\alpha)=\tfrac12\operatorname{Tr}_2(\mathscr C^\alpha\mathscr C_\alpha)$, where $\kappa_{\mathbb C}=-2\operatorname{Tr}_2$ is evaluated on the Lie-algebra matrices $\mathcal W$, not on the raw $\mathscr C$. Thus the chiral action coefficient $\kappa_{\mathbb C}(\mathcal W^\alpha,\mathcal W_\alpha)/(4g_{\mathrm{YM}}^2)$ equals $\operatorname{Tr}_2(\mathscr C^\alpha\mathscr C_\alpha)/(8g_{\mathrm{YM}}^2)$, before adding its Hermitian conjugate. This is a fixed real-coupling classical normalization identity; it is not a quantum-field rescaling or measure identity. Both curvatures are chiral and have the corresponding conjugation/transition law. The abstract $\mathcal W$ has the connection-normalized gaugino and auxiliary components specified below.

In a local Wess–Zumino-gauge representative, the canonical component fields in the prepotential are a Hermitian gauge potential $B_\mu$, an adjoint Grassmann-odd Weyl gaugino $\lambda_{B,\alpha}$, and a real adjoint auxiliary field $D_B$, with expansion $V_{\mathrm{WZ}}=\theta\sigma^\mu\bar\theta B_\mu+i\theta^2\bar\theta\bar\lambda_B-i\bar\theta^2\theta\lambda_B+\tfrac12\theta^2\bar\theta^2D_B$. Here $\theta^2=\theta^\alpha\theta_\alpha$ and $\bar\theta^2=\bar\theta_{\dot\alpha}\bar\theta^{\dot\alpha}$ use the fixed antisymmetric spinor tensors. Their dimensions are $[B_\mu]=1$, $[\lambda_B]=3/2$, and $[D_B]=2$. The connection-normalized fields are $A_\mu=-ig_{\mathrm{YM}}B_\mu$, $\lambda=g_{\mathrm{YM}}\lambda_B$, and $D=g_{\mathrm{YM}}D_B$; hence $[A_\mu]=1$, $[\lambda]=3/2$, and $[D]=2$. The full prepotential is used for supersymmetry transformations; Wess–Zumino gauge is only a component representative and need not be preserved by an uncompensated supersymmetry variation.

## Definition references

[Stephen P. Martin, *A Supersymmetry Primer*, §§4.5 and 4.9](https://arxiv.org/pdf/hep-ph/9709356v7).

[Adel Bilal, *Introduction to Supersymmetry*, §§4.4 and 5.1](https://arxiv.org/pdf/hep-th/0101055).

[[post-qftx-nonabelian-yang-mills-model]]

[[def-qftx-nonabelian-gauge-data]]

[[def-qftx-n1-chiral-superfield]]

[[lem-qftx-n1-chiral-superspace-identities]]

[[def-qftx-superspace-grassmann-algebra]]

[[def-qftx-physical-superspace-normalization]]

