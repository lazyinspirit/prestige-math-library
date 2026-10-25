---
id: def-aqft-susy-wilsonian-action
kind: definition
title: Supersymmetric Wilsonian EFT action and threshold data
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: aqft-susy-effective-theories
dependency_level: 6
deps:
  - def-qftx-physical-superspace-normalization
  - def-qftx-wilsonian-n1-action-data
  - def-aqft-threshold-matching-map
  - def-aqft-operator-basis-physical-data
  - thm-aqft-field-redefinition-observable-equivalence-at-fixed-order
  - def-axiom-of-choice
dependency_roles:
  def-qftx-physical-superspace-normalization: formulation-prerequisite
  def-qftx-wilsonian-n1-action-data: formulation-prerequisite
  def-aqft-threshold-matching-map: formulation-prerequisite
  def-aqft-operator-basis-physical-data: formulation-prerequisite
  thm-aqft-field-redefinition-observable-equivalence-at-fixed-order: mathematical-premise
  def-axiom-of-choice: mathematical-premise
axiom_base: "ZF + full Axiom of Choice adopted as a sufficient ambient assumption, covering the countable-choice premises of the gauge suppliers; the finite local data and supplied regulated equivalence record require no additional choice."
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Finite-order, local, rigid four-dimensional N=1 Wilsonian effective-action data across one declared heavy-field threshold. The definition asserts no generic interacting continuum theory, complete operator classification, arbitrary off-shell equivalence, or empirical realization."
sources:
  references:
    - title: "Steven Weinberg, Non-Renormalization Theorems in Non-Renormalizable Theories"
      url: "https://arxiv.org/pdf/hep-th/9803099v1"
      locator: "Equations (1)–(3), printed pp. 2–3: local rigid N=1 superspace action, holomorphic chiral integrand, real D-term, and Wilsonian cutoff."
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§§4.7 and 4.10, printed pp. 41 and 49–50: chiral superspace actions, nonrenormalizable supersymmetric EFT terms, and their holomorphic/real data."
    - title: "Aneesh V. Manohar, Introduction to Effective Field Theories"
      url: "https://arxiv.org/pdf/1804.05863"
      locator: "Chapter 5, §§5.5–5.7 and Chapter 7, §§7.1–7.2: finite-order matching, low-energy expansion, and distinct threshold/RG data."
    - title: "C. P. Burgess, Introduction to Effective Field Theory"
      url: "https://arxiv.org/pdf/hep-th/0701053"
      locator: "§§2.2.1–2.2.2 and §4.1.4: Wilson-action mode split, scale cancellation, and decoupling-subtraction threshold matching."
    - title: "Juan Carlos Criado and Manuel Pérez-Victoria, Field redefinitions in effective theories at higher orders"
      url: "https://arxiv.org/pdf/1811.09413"
      locator: "§2, equations (2.2)–(2.8), and Appendix B: regulated changes of variables, transformed sources, and LSZ-equivalence hypotheses."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Use natural units $c=\hbar=1$, flat spacetime $\mathcal M=\mathbb R^{1,3}$, coordinates $x^0=ct$, and metric $\eta=\operatorname{diag}(-1,1,1,1)$. In these units $[x^\mu]=-1$, $[\partial_\mu]=1$, $[\theta^\alpha]=[\bar\theta^{\dot\alpha}]=-1/2$, $[d^2\theta]=1$, and $[d^4\theta]=2$. A local rigid four-dimensional $\mathcal N=1$ supersymmetric Wilsonian action datum uses finitely many smooth classical chiral superfields $\Phi_i$ and, when a gauge sector is selected, a compact closed matrix subgroup $G\subset U(N)$ with its inherited embedded Lie-group structure, smooth finite-dimensional unitary representations $\rho_i:G\to U(\mathcal H_i)$, and its specified vector-superfield data. Write $\mathfrak g=T_I G$ with the matrix commutator and $\rho_{i*}^{\mathbb C}:\mathfrak g_{\mathbb C}\to\operatorname{End}_{\mathbb C}(\mathcal H_i)$ for the complex-linear extension of the differential of $\rho_i$. The dimensionless even Hermitian vector prepotential $V$ takes values in $i\mathfrak g$, and its represented value is $V_i=\rho_{i*}^{\mathbb C}(V)$. The represented chiral gauge curvature is $W_\alpha=-\tfrac14\bar D^{\dot\beta}\bar D_{\dot\beta}(e^V D_\alpha e^{-V})$ in the selected faithful matrix representation, where $D_\alpha$ and $\bar D_{\dot\alpha}$ are the covariant derivatives in the supplied chiral-superfield convention; $\operatorname{Tr}_{\mathrm h}$ is the supplied quadratic trace functional with fixed normalization and sign, invariant under $\operatorname{Ad}_k$ for every $k\in G$, including disconnected components. For multiple kinetic coefficients the displayed $\tau_\lambda\operatorname{Tr}_{\mathrm h}$ is shorthand for the full invariant quadratic polynomial $\sum_a\tau_{a,\lambda}Q_a$ specified by the supplied action data; coefficients on simple ideals permuted by disconnected components satisfy that invariance, and allowed Abelian mixing is included. A chiral field obeys $\bar D_{\dot\alpha}\Phi_i=0$; when $[\Phi_i]=1$, its physical scalar, Weyl-spinor, and auxiliary components have mass dimensions $1$, $3/2$, and $2$, respectively, while $[W_\alpha]=3/2$. If no gauge sector is selected, omit the gauge terms. The action has the superspace form

$$\mathcal L_\lambda=[\sum_i\Phi_i^\dagger e^{-V_i}\Phi_i+G_\lambda]_D+2\operatorname{Re}[\frac{\tau_\lambda}{8\pi i}\operatorname{Tr}_{\mathrm h}(W^\alpha W_\alpha)+F_\lambda(\Phi,W)]_F,$$

where the physical action brackets are $[U]_D=-I_D(U)/4$, $[Y]_F=I_F(Y)/2$ from Physical superspace action brackets and canonical chiral components, with physical chiral components $\psi_{\mathrm{raw}}=\sqrt2\psi$ and $F_{\mathrm{raw}}=2F$. The real local D-term integrand $G_\lambda$ has mass dimension two, and its integrated action is gauge invariant under the declared boundary conditions; it may have the local derivative dependence allowed for the D sector by the supplied action data. The holomorphic gauge-invariant F-term integrand $F_\lambda$ has mass dimension three and contains no superspace or spacetime derivatives, while $[\tau_\lambda]=0$. Thus $[\mathcal L_\lambda]=4$. The chiral and real terms are respectively called the Wilsonian F-term and D-term. The formal mode scales $\lambda$ and $\Lambda_0$ have mass dimension one and satisfy $0<\lambda<\Lambda_0$; the cutoff prescription supplies a coefficientwise local derivative expansion and asserts neither convergence nor a continuum functional measure. A connected perturbative graph is one-particle-irreducible if deleting any one internal propagator edge leaves it connected; the sum of such graphs is 1PI vertex data, separate from the Wilsonian action.

A finite supersymmetric EFT operator datum selects finitely many field species over $\mathbb C$, their coefficient spaces and Grassmann parities, their gauge and flavor actions, and a maximum spacetime-jet order $r$. A field jet is a component of a field or one of its spacetime derivatives $\partial_I\Phi_i$ for a multi-index $I\in\mathbb N_0^4$ with $|I|\le r$, where $\partial_I=\partial_0^{I_0}\partial_1^{I_1}\partial_2^{I_2}\partial_3^{I_3}$. It also selects a coefficient field, spurions, maximum engineering weight $D_{\max}$, field-degree cutoff $q$, loop cutoff $L_{\max}$, and a finite ordered basis $\mathcal O_\alpha$ for the declared quotient $\mathcal Q_D=V_D/R_D$ from the supplied finite-order invariant operator-basis definition: $V_D$ is the invariant scalar subspace of finite local polynomials of engineering weight $D$, and $R_D$ is the supplied relation subspace restricted to $V_D$. Each $\mathcal O_\alpha$ is a Lorentz-scalar representative built from finitely many such jets and has the declared gauge/flavor transformation law and engineering weight $\Delta_\alpha$. Each retained coefficient $C_{\alpha,\ell}$ is dimensionless in the convention

$$\mathcal L_{\mathrm{tr}}=\sum_{\Delta_\alpha\le D_{\max}}\sum_{\ell=0}^{L_{\max}}\zeta^\ell C_{\alpha,\ell}(\mu_W)\frac{\mathcal O_\alpha}{\Lambda_{\mathrm{op}}^{\Delta_\alpha-4}},$$

where $\zeta$ is a dimensionless formal loop-bookkeeping variable, $\Delta_\alpha$ is the engineering weight of $\mathcal O_\alpha$, and $\Lambda_{\mathrm{op}}>0$ is its coefficient-suppression scale. The declared relations may include polynomial or Fierz identities, superspace integration by parts under stated compact-support or boundary conditions, gauge identities, and leading-superfield-equation relations. Every equation-of-motion or field-redefinition relation records its base action, parity-preserving local identity-leading map, inverse through the retained order, and all induced terms. This quotient records only the supplied relations and does not assert that it is a complete physical basis.

An optional on-shell amplitude-equivalence record for such a relation includes a local, parity-preserving formal field map with identity leading term and inverse through the retained order, an invariant action for the declared complex reductive symmetry, the exact finite-regulator change-of-variables density and its Jacobian, the correspondingly transformed source, and a common regulator limit with stable positive-mass simple poles, nonzero residues, and the stated LSZ pole factorization. Adopt full Axiom of Choice as a sufficient ambient assumption: every set-indexed family of nonempty sets has a choice function. The fixed-order equivalence theorem applies to the supplied record under its exact hypotheses; it requires no additional full-Choice premise. The quotient alone does not identify off-shell Green functions or prove that a regulator, its Jacobian, or an LSZ limit exists.

For one declared threshold, the high-energy and low-energy descriptions share their specified light fields and differ by a nonempty declared heavy-multiplet sector of threshold mass $M>0$. A finite matching record is a complete instance of the finite-order threshold-matching contract. It supplies the high- and low-energy coefficient spaces and bases, selected renormalized amplitudes or Green functions, their common infrared regulator, external states and kinematics, matching map, and retained loop, operator, and mass-expansion orders. In particular, separately supply the admitted external-kinematic domain and the range of validity assigned to the selected local expansion; every selected amplitude or Green-function comparison must lie in both. If the record is interpreted as an ordinary local heavy-particle expansion, supply an external-energy bound $0\le E_{\mathrm{ext}}<M$ and restrict the selected kinematics accordingly. Other supplied finite-order expansion regimes must declare their own validity conditions; naming coefficient coordinates or an external-energy scale alone establishes no domain of physical applicability. These are conditions on using a matching record, not an existence or convergence assertion for an arbitrary expansion. For each sign $\sigma\in\{+,-\}$, let $\mathcal A_\sigma$ be the declared set of retained Wilsonian coefficient records and $a_\sigma(\mu_W)\in\mathcal A_\sigma$ the record extracted from that theory's displayed action at $\lambda=\mu_W$ by physical component extraction, the declared quotient representatives, and the retained truncation. The matching record must supply coordinate identifications $\iota_\sigma(\mu_W,\mu):\mathcal A_\sigma\to U_\sigma\subseteq\mathbb C^{N_\sigma}$, bijective onto the declared scheme-coordinate domains at the scales used. These identifications specify the operator normalizations, suppression scales, field coordinates, and finite-order scheme conversion; they are additional input, not an equality of the two scales. With $t=\log(\mu/\mu_0)$ for the matching record's reference scale $\mu_0>0$, its scheme vector is $c_\sigma=\iota_\sigma(\mu_W,\mu)(a_\sigma(\mu_W))$. A supplied scheme matching map $M_t$ describes these actions only when $c_-=M_t(c_+)$, equivalently $a_- =\iota_-^{-1}\circ M_t\circ\iota_+(a_+)$ at the fixed scale pair, and the selected amplitude conditions hold. Any claimed holomorphic component additionally specifies how these identifications act on the retained F-term coordinates; no preservation of that sector is inferred from arbitrary scheme coordinates. The Wilsonian scale $\mu_W$, renormalization scale $\mu$, heavy threshold mass $M$, external-energy bound $E_{\mathrm{ext}}$, regulator cutoff $\Lambda_{\mathrm{reg}}$, and operator-suppression scale $\Lambda_{\mathrm{op}}$ all have mass dimension one and are distinct unless additional model data identify them. Matching equality concerns only the selected amplitudes and stated truncation; it supplies no discarded-term error bound and is not an equality of arbitrary one-particle-irreducible functionals.

## Definition references

[[def-qftx-wilsonian-n1-action-data|Local rigid $N=1$ Wilsonian action and its formal cutoff data]]

[[def-aqft-threshold-matching-map|Finite coefficient spaces, matching map, common infrared regulator, and separate scales]]

[[def-aqft-operator-basis-physical-data|Finite field, jet, symmetry, and operator-basis data]]

[[thm-aqft-field-redefinition-observable-equivalence-at-fixed-order|Conditional on-shell equivalence under an exact regulated local change of variables]]

[[def-axiom-of-choice|Full Axiom of Choice adopted as a sufficient ambient assumption]]

[Weinberg, equations (1)–(3)](https://arxiv.org/pdf/hep-th/9803099v1)

[Martin, §§4.7 and 4.10](https://arxiv.org/pdf/hep-ph/9709356v7)

[Manohar, §§5.5–5.7 and 7.1–7.2](https://arxiv.org/pdf/1804.05863)

[Burgess, §§2.2.1–2.2.2 and 4.1.4](https://arxiv.org/pdf/hep-th/0701053)

[Criado–Pérez-Victoria, §2 and Appendix B](https://arxiv.org/pdf/1811.09413)

[[def-qftx-physical-superspace-normalization]]

