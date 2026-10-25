---
id: ex-qftx-susy-round-s4-localization-data
kind: example
title: The round S4 supercharge square and its finite geometric Cartan data
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-backgrounds-examples
deps:
  - def-qftx-susy-background-data
  - post-qftx-rigid-supersymmetric-background
  - post-qftx-n4-super-yang-mills-model
  - def-torus-equivariant-cohomology-cartan-model
dependency_roles:
  def-qftx-susy-background-data: formulation-prerequisite
  post-qftx-rigid-supersymmetric-background: physical-assumption
  post-qftx-n4-super-yang-mills-model: physical-assumption
  def-torus-equivariant-cohomology-cartan-model: mathematical-premise
dependency_level: 9
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Vasily Pestun, Localization of Gauge Theory on a Four-Sphere and Supersymmetric Wilson Loops"
      url: "https://arxiv.org/pdf/0712.2824"
      locator: "§2, equations (2.5)–(2.14), (2.26)–(2.30); §4.1–§4.3, equations (4.1)–(4.15); Appendix C, equations (C.1)–(C.17)."
    - title: "Wolfger Peelaers (lectures), Bruno Le Floch (notes), 4d N=2 Localization"
      url: "https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf"
      locator: "§1.1–§1.2, equations (19)–(26), PDF pp. 3–4; the notes state measure and off-shell assumptions rather than proving the continuum localization step."
physical_scope: "Conditional illustration of the source's N=4 localization supercharge on the round Euclidean S4 and the separate finite-dimensional circle action on its base; it asserts no continuum field-space measure or localization theorem."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Take the adopted massless $\mathcal N=4$ model on the round $S^4_r$ with its specified conformal Killing spinors, the trivial rank-seven Euclidean auxiliary bundle $E_{\mathrm{aux}}=S^4_r\times\mathbb R^7$ with fixed global orthonormal basis $e_i$, and combined gauge-fixed differential $Q=s+\delta$. Use the spinor/R associated bundle $S_\epsilon$ from the adopted round-$S^4$ postulate: its fibre is $W_\epsilon=(\Delta_+\oplus\Delta_-)\otimes(V_R\oplus V_0)$, where $\Delta_\pm=\mathbb C^2$ are the defining $\operatorname{Spin}(4)$ factor modules, $V_R=\mathbb C^2$ carries the defining $SU(2)_R$ representation, and $V_0=\mathbb C^2$ carries the trivial representation; the product action is $\rho_\epsilon(s,k)=(\pi_+(s)\oplus\pi_-(s))\otimes(\tau(k)\oplus I_{V_0})$, with quotient convention $[(p h,z)]=[p,\rho_\epsilon(h)z]$. The auxiliary field is $K\in\Gamma(\operatorname{ad}P\otimes E_{\mathrm{aux}})$ with components $K=\sum_iK_i e_i$; the source's smooth spinor sections $\nu_i$ satisfy $\sum_i\nu_i\otimes e^i\in\Gamma(S_\epsilon\otimes E_{\mathrm{aux}}^*)$, $\epsilon\Gamma_M\nu_i=0$, $\tfrac12(\epsilon\Gamma^N\epsilon)\widetilde\Gamma_{N,\alpha\beta}=\sum_i\nu_{i,\alpha}\nu_{i,\beta}+\epsilon_\alpha\epsilon_\beta$, and $\nu_i\Gamma_M\nu_j=\delta_{ij}\epsilon\Gamma_M\epsilon$. For every homogeneous adjoint-valued doublet coordinate $X$ and its opposite-parity partner $X'$, the source algebra gives $sX=X'$, $sX'=\delta_{\mathrm{gauge}}(\phi)X+\delta_{U(1)}(\omega)X$, $\delta X=-[c,X]$, and $\delta X'=-[c,X']$, with $\delta^2X=\delta_{\mathrm{gauge}}(a_0)X$ and $\{s,\delta\}X=-\delta_{\mathrm{gauge}}(\phi)X$. Here $\delta_{\mathrm{gauge}}(u)X=[u,X]$ on adjoint fields and $D_\mu X=\nabla_\mu^{\mathrm{LC}}X+[A_\mu,X]$ on adjoint tensor components. For the connection, $sA=\psi$, its superpartner transforms by $s\psi=\delta_{\mathrm{gauge}}(\phi)A+\delta_{U(1)}(\omega)A$, and the Faddeev--Popov rule is $\delta A_\mu=D_\mu c=-\delta_{\mathrm{gauge}}(c)A_\mu$, with $\delta_{\mathrm{gauge}}(u)A_\mu=-D_\mu u$. The generator $\omega$ is fixed by $v^\mu=\epsilon\Gamma^\mu\epsilon$ without further rescaling. If $\widehat\alpha_\theta$ is the chosen lift of this flow to a field bundle, its geometric generator is $\mathcal L_v^{\mathrm{lift}}\xi=\left.\frac{d}{d\theta}\right|_{0}\widehat\alpha_\theta^*\xi$. On physical and auxiliary fields, $\delta_{U(1)}(\omega)=-\mathcal L_v^{\mathrm{lift}}-\delta_R$: $\delta_R$ uses the source-ordered $R^Q_{AB}=2\epsilon\widetilde\Gamma_{AB}\widetilde\epsilon$, acting on scalars by $R^Q_{AB}\Phi^B$ and on fermions by $\tfrac14R^Q_{AB}\Gamma^{AB}$, while the auxiliary-index part of $\mathcal L_v^{\mathrm{lift}}$ on $K_i$ is $v^\mu\partial_\mu K_i+[\beta_{v,P},K_i]+\Xi_{ij}K_j$, where $\beta_{v,P}$ is the fixed lift's local vertical coefficient and $\Xi_{ij}=\nu_{[i}\Gamma^\mu\nabla_\mu\nu_{j]}=\tfrac12(\nu_i\Gamma^\mu\nabla_\mu\nu_j-\nu_j\Gamma^\mu\nabla_\mu\nu_i)$. On the entire adjoint ghost and multiplier complex, including zero modes, $\rho_{\mathrm{gh}}(\omega)=-\mathcal L_v^{\mathrm{lift}}$; the chosen lift fixes the zero-mode algebra. The global cohomological parameter is $\phi=-\kappa_v$, with $\kappa_v=v^\mu A_\mu-\beta_{v,P}+v^A\Phi_A$, so the source gauge-covariant Lie derivative is $\mathcal L_v^{\mathrm{lift}}+\delta_{\mathrm{gauge}}(\kappa_v)$. The affine ghost rule is $\delta\phi=-[c,\phi]+\rho_{\mathrm{gh}}(\omega)c$, with $sc=\phi$ and $s\phi=0$. Thus the combined square is $Q^2=\delta_{\mathrm{gauge}}(a_0)+\delta_{U(1)}(\omega)$: a gauge transformation by the zero-mode section $a_0$ and the selected combined spacetime/R action. In nontrivial gauge-bundle sectors $a_0\in\ker D_{A_*}$ is a parallel background zero mode, and the background-gauge functional $Q\Psi_{\mathrm{gf}}$, ghost domains, and zero-mode complex are the sectorwise formal inputs specified for this model; no global gauge slice is asserted. The $U(1)$ base factor acts smoothly on the finite-dimensional manifold $S^4_r$; its ordinary Cartan complex is the invariant polynomial-valued differential-form complex for that base action. This finite Cartan complex concerns forms on $S^4_r$, not the infinite-dimensional field configuration space. The measure and noncommutative regulator extension remain formal assumptions of the adopted model.
## Example references

[Adopted rigid S4 background postulate] [[post-qftx-rigid-supersymmetric-background]]

[Flat-space $N=4$ model interface] [[post-qftx-n4-super-yang-mills-model]]

[Pestun, §§2 and 4.1–4.3, Appendix C](https://arxiv.org/pdf/0712.2824)

[Peelaers, §1](https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf)

## Facts & Assumptions

**Given:** The round Euclidean $S^4_r$, the selected off-shell supercharge, its BRST gauge-fixing complex, and its smooth $U(1)$ isometry as stated above.

[A1] [[post-qftx-rigid-supersymmetric-background]] adopts $Q=s+\delta$ and the supersymmetry rules $sX=X'$, $sX'=\delta_{\mathrm{gauge}}(\phi)X+\delta_{U(1)}(\omega)X$, and, for the connection, $sA=\psi$, $s\psi=\delta_{\mathrm{gauge}}(\phi)A+\delta_{U(1)}(\omega)A$.

[A2] [[post-qftx-rigid-supersymmetric-background]] states $\delta X=-[c,X]$ and $\delta X'=-[c,X']$ on adjoint tensor fields, and $\delta A_\mu=D_\mu c=-\delta_{\mathrm{gauge}}(c)A_\mu$ on the connection.

[A3] [[post-qftx-rigid-supersymmetric-background]] uses the affine rule $\delta\phi=-[c,\phi]+\rho_{\mathrm{gh}}(\omega)c$ and states $\delta^2X=\delta_{\mathrm{gauge}}(a_0)X$, $\{s,\delta\}X=-\delta_{\mathrm{gauge}}(\phi)X$ on tensor fields, the same graded algebra on the connection, and, on ghosts, $\{s,\delta\}=\delta_{U(1)}(\omega)$ and $s^2=0$, while $\delta^2=\delta_{\mathrm{gauge}}(a_0)$ follows from their displayed transformations.

[A4] [[post-qftx-rigid-supersymmetric-background]] states that its S4 noncommutative regulator extension is assumed but not constructed, and that the regulated measure and contour remain formal inputs.

[A5] [[post-qftx-n4-super-yang-mills-model]]: the current model postulate fixes global group $SU(2)$, $T_a=-i\sigma_a/2$, $\kappa=-2\operatorname{Tr}_2$, positive dimensionless coupling $g$, and connection-normalized chiral fields with canonical fields $\Phi_{i,\mathrm{can}}=\Phi_i/g$.

[A6] [[post-qftx-n4-super-yang-mills-model]]: its on-shell component content is one gauge connection, six real adjoint scalars, and four adjoint Weyl fermions, equivalently one vector and three adjoint chiral multiplets; its extended invariance is adopted as a physical postulate, not proved.

[A7] [[post-qftx-n4-super-yang-mills-model]]: in its $N=1$ decomposition, the carrier specifies one adjoint vector prepotential and three adjoint chiral superfields $\Phi_1,\Phi_2,\Phi_3$, with the scalar fields connection-normalized before the stated canonical rescaling.

[F1] [[def-qftx-susy-background-data]]: off-shell closure means that $Q^2$ is an explicitly stated combination of lifted isometries and internal transformations on every field; this is separate from existence of a measure or a continuum localization theorem.

[F2] [[def-torus-equivariant-cohomology-cartan-model]]: for a compact torus acting smoothly on a finite-dimensional smooth manifold, the Cartan complex is $(\operatorname{Sym}(\mathfrak t^*)\otimes\Omega(M))^T$ with the stated contraction deformation of $d$; this definition does not extend its claim to the infinite-dimensional field configuration space.

## Verification

1.1 The actual $N=4$ supplier interface in [A5], [A6], and [A7] matches this example's stated flat-space input: the global group, invariant trace form, dimensionless coupling, scalar normalization, and vector/chiral component content agree. This check does not prove the supplier's adopted $N=4$ invariance or identify its flat Minkowski action with the separate curved S4 action. [A5, A6, A7, given, algebra]

1.2 For an adjoint-valued tensor field $X$, expand $(s+\delta)^2X=s^2X+\{s,\delta\}X+\delta^2X$. By [A1], $s^2X=sX'=\delta_{\mathrm{gauge}}(\phi)X+\delta_{U(1)}(\omega)X$. By [A3], the gauge term cancels with its negative in $\{s,\delta\}X$, leaving $\delta_{\mathrm{gauge}}(a_0)X+\delta_{U(1)}(\omega)X$. [A1, A3, given, algebra]

2.1 For the connection, the same square expansion applies to $A$ and $\psi$. By [A1], $s^2A=s\psi=\delta_{\mathrm{gauge}}(\phi)A+\delta_{U(1)}(\omega)A$; by [A2] and [A3], its BRST rule is $\delta A_\mu=D_\mu c=-\delta_{\mathrm{gauge}}(c)A_\mu$, its mixed term cancels the $\phi$ action, and its BRST square is $\delta_{\mathrm{gauge}}(a_0)A$. Thus $Q^2A=\delta_{\mathrm{gauge}}(a_0)A+\delta_{U(1)}(\omega)A$, using the declared connection gauge action $-D_\mu u$. [A1, A2, A3, step 1.2, algebra]

3.1 On the ghost $c$, the actual rules in [A3] give $s\delta c=-[\phi,c]$ and $\delta sc=-[c,\phi]+\rho_{\mathrm{gh}}(\omega)c$, so the $\phi$ commutators cancel and $\{s,\delta\}c=\rho_{\mathrm{gh}}(\omega)c$. On the other gauge-fixing ghosts [A3] gives $s^2=0$, BRST square $\delta_{\mathrm{gauge}}(a_0)$, and mixed square $\delta_{U(1)}(\omega)$. Adding the three terms yields the same zero-mode-gauge plus combined circle/R symmetry. [A3, step 1.2, step 2.1, algebra]

4.1 The element $a_0\in\mathfrak h_P$ is a parallel background zero-mode section, constant in the trivial background frame; $\omega$ generates the selected combined lifted spacetime/R action. Thus the square is the declared gauge transformation plus that combined action on fields and ghosts. The induced circle action on $S^4_r$ satisfies the compact-group and smooth-action hypotheses in [F2], so its ordinary geometric Cartan complex is defined. This use is only on $S^4_r$ and does not transfer the finite-dimensional definition to the field configuration space. [A1, A2, A3, F1, F2, step 1.2, step 2.1, step 3.1]

5.1 The adopted contour, measure, and S4 regulator extension are explicit formal inputs in [A4]; the verification above neither constructs them nor proves a regulator-removal or $t\to\infty$ limit. [A4, step 4.1] ∎
