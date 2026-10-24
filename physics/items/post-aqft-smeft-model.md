---
id: post-aqft-smeft-model
kind: postulate
title: Linearly realized Standard Model EFT field and scale data
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 4
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
deps:
  - def-countable-choice
  - def-aqft-operator-basis-physical-data
  - def-qftx-nonabelian-gauge-data
  - def-qftx-associated-covariant-derivative
  - lem-qftx-principal-curvature-cartan-bianchi
dependency_roles:
  def-countable-choice: mathematical-premise
  def-aqft-operator-basis-physical-data: formulation-prerequisite
  def-qftx-nonabelian-gauge-data: formulation-prerequisite
  def-qftx-associated-covariant-derivative: formulation-prerequisite
  lem-qftx-principal-curvature-cartan-bianchi: formulation-prerequisite
axiom_base: "ZF + AC_omega, inherited from the supplied right-principal gauge and associated-bundle definitions."
physical_scope: "An adopted, formal, linearly realized Standard Model effective-operator model on the trivial four-dimensional Minkowski bundle, through canonical dimension six. It supplies no functional measure, continuum construction, ultraviolet completion, measured coefficient, or claim that the postulate describes nature."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "B. Grzadkowski, M. Iskrzynski, M. Misiak and J. Rosiek, Dimension-Six Terms in the Standard Model Lagrangian"
      url: "https://arxiv.org/pdf/1008.4884"
      locator: "§§1–3, printed pp. 1–5: the SM gauge group, field representations, natural field dimensions, canonical-dimension expansion and dimension-six coefficient convention."
    - title: "Adam Falkowski, Lectures on SMEFT"
      url: "https://scoap3-prod-backend.s3.cern.ch/media/files/79196/10.1140/epjc/s10052-023-11821-3_a.pdf"
      locator: "§2 and Table 1, printed pp. 5–8: assumptions behind SMEFT and the SM field representations; §§3.1–3.4, printed pp. 7–14: canonical-dimension power counting and dimension-six operators."
verification:
  precheck: n/a
---
## Postulate

Adopt four-dimensional affine Minkowski spacetime $M=\mathbb R^{1,3}$ with coordinates $x^0=ct$ and metric $\eta=\operatorname{diag}(-1,1,1,1)$. Use natural units $c=\hbar=1$ for engineering dimensions, so $\partial_\mu$ has mass dimension one, a scalar field has dimension one, a spinor field has dimension $3/2$, and a gauge field strength has dimension two.

The gauge group is the direct product $G_{\mathrm{SM}}=SU(3)_c\times SU(2)_L\times U(1)_Y$, with this global form and not a quotient by a subgroup of its center. Write an element of $U(1)_Y$ as $z\in U(1)$ and normalize its integer charge as $y=6Y$, so its representation acts by $z^y$. The three-family matter fields and scalar are smooth fields in the representations
$$q_L:(3,2)_1,\qquad u_R:(3,1)_4,\qquad d_R:(3,1)_{-2},\qquad \ell_L:(1,2)_{-3},\qquad e_R:(1,1)_{-6},\qquad H:(1,2)_3.$$
There are no right-handed neutrino fields. Fermion components are Grassmann odd; $H$ is a Grassmann-even complex doublet. The global charges are $B(q_L)=B(u_R)=B(d_R)=1/3$, $L(\ell_L)=L(e_R)=1$, and zero for $H$ and the gauge fields; the corresponding $U(1)_B$ and $U(1)_L$ transformations multiply each field by the phase determined by its charge. Impose these as exact selection rules on the retained formal local interactions; no anomaly-free quantum-current claim is made. There is no flavor symmetry beyond the displayed gauge action: Yukawa and Wilson coefficients may carry unrestricted three-family indices subject to the stated reality and Hermitian-conjugation conditions.

Choose a reference symmetry-breaking radius $v>0$ of mass dimension one. If it is interpreted as a vacuum radius, the supplied scalar-potential coefficients are assumed to make $H^\dagger H=v^2/2$ a local minimum; this postulate does not derive that parameter constraint. Define $\widetilde H=i\sigma^2H^*$, where $\sigma^2$ is the second Pauli matrix.

Choose the trivial smooth right principal bundle $P=M\times G_{\mathrm{SM}}$ and only this bundle sector. A connection is a smooth right-principal connection with the convention $\omega(Z_P)=Z$ and $R_g^*\omega=\operatorname{Ad}_{g^{-1}}\omega$. In a local section, a field in representation $\rho$ has covariant derivative $D_\mu=\partial_\mu+\rho_*(A_\mu)$, and the gauge curvature is $F_A=dA+\tfrac12[A\wedge A]$ with the graded-bracket convention of the supplied gauge-geometry data. The ordinary component hypercharges are $Y=y/6$; in particular $Y(H)=1/2$. The formal local interaction set imposes the exact $U(1)_B$ and $U(1)_L$ selection rules stated above; no anomaly-free quantum-current claim is made. Yukawa matrices are otherwise arbitrary.

The adopted object is a formal local Lagrangian density made from finitely many fields, covariant derivatives, and field strengths at one spacetime point, contracted to Lorentz scalars and invariant under the stated gauge and global actions. The renormalizable part has the gauge kinetic terms $-\tfrac14G^A_{\mu\nu}G^{A\mu\nu}-\tfrac14W^I_{\mu\nu}W^{I\mu\nu}-\tfrac14B_{\mu\nu}B^{\mu\nu}$, fermion kinetic terms $i\sum_\psi\bar\psi\gamma^\mu D_\mu\psi$, Higgs kinetic term $-(D_\mu H)^\dagger D^\mu H$, the real gauge-invariant Higgs potential
$$V_4(H)=V_0-\mu_H^2H^\dagger H+\lambda(H^\dagger H)^2,\qquad V_0,\mu_H^2,\lambda\in\mathbb R,$$
and Yukawa terms
$$-\left(\bar q_LY_dHd_R+\bar q_LY_u\widetilde H u_R+\bar\ell_LY_eHe_R+\mathrm{h.c.}\right),$$
where each $Y_f$ is a complex $3\times3$ family matrix and h.c. is the Hermitian conjugate. Set the gauge theta terms to zero in this selected model. Add finite sets $I_d$ of local gauge-invariant, $B$- and $L$-neutral polynomial operators $\mathcal O_{d,i}$ at each retained dimension $d\leq6$. Retain derivative-jet order at most two, maximum polynomial field degree six, and loop order zero. Use $C_{d,i}\mathcal O_{d,i}/\Lambda_{\mathrm{op}}^{d-4}$, where $\Lambda_{\mathrm{op}}>0$ has mass dimension one and each $C_{d,i}$ is dimensionless. The dimension-five set is empty under the adopted exact lepton-number symmetry. The dimension-six set is fixed by the separate Warsaw coefficient contract. Wilson coefficients are supplied parameters, not calculated or fitted here.

This is an operator-level model on smooth fields and compactly supported variations; total divergences are therefore zero in the associated action comparison. Its low-energy use is restricted to external momenta small compared with $\Lambda_{\mathrm{op}}$, with the finite dimension-six truncation understood formally and without a numerical remainder bound. No regulator or functional measure is adopted, and no finite graph cutoff is identified with $\Lambda_{\mathrm{op}}$. The postulate asserts no path integral, continuum limit, ultraviolet completion, or empirical realization.

## Postulate references

[[def-countable-choice|Countable-choice assumption inherited by the gauge construction]]

[[def-aqft-operator-basis-physical-data|Finite-jet physical EFT operator and scale convention]]

[[def-qftx-nonabelian-gauge-data|Right-principal gauge group, global form, bundle and representation data]]

[[def-qftx-associated-covariant-derivative|Associated-bundle covariant derivative]]

[[lem-qftx-principal-curvature-cartan-bianchi|Curvature and local field-strength convention]]

[Grzadkowski et al., full dimension-six operator article](https://arxiv.org/pdf/1008.4884)

[Falkowski, full Lectures on SMEFT](https://scoap3-prod-backend.s3.cern.ch/media/files/79196/10.1140/epjc/s10052-023-11821-3_a.pdf)
