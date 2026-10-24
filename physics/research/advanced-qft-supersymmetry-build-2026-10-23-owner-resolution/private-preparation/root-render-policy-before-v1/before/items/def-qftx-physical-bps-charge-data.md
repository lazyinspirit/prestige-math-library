---
id: def-qftx-physical-bps-charge-data
kind: definition
title: Pure SU(2) physical BPS charge and index data
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 9
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-physical-hall-bps-wall-crossing
axiom_base: ZF + AC_omega, inherited through the supplied BPS-state, trace-class, and trace definitions.
deps:
  - def-countable-choice
  - def-qftx-n2-coulomb-branch-data
  - post-qftx-n2-seiberg-witten-effective-solution
  - def-qftx-bps-state-and-saturation
  - def-trace-class-operator
  - def-trace-of-a-trace-class-operator
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-n2-coulomb-branch-data: formulation-prerequisite
  post-qftx-n2-seiberg-witten-effective-solution: physical-assumption
  def-qftx-bps-state-and-saturation: formulation-prerequisite
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
proof_strategy: not-applicable
physical_scope: Conditional data definition for electric and magnetic charge labels, second-helicity BPS indices, and marginal-stability chambers in an already specified pure four-dimensional rigid N=2 SU(2) quantum or regulated one-particle model on regular Seiberg–Witten patches; it asserts no state existence, continuum QFT construction, or physical realization of Hall counts.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: N. Seiberg and E. Witten, Electric-Magnetic Duality, Monopole Condensation, and Confinement in N=2 Supersymmetric Yang-Mills Theory
      url: https://arxiv.org/pdf/hep-th/9407087v1
      locator: "Section 1 equations (1.1)–(1.2), Section 4 equations (4.3)–(4.9), and Section 6 equations (6.19)–(6.28): the source charge-period normalization, BPS mass normalization, local periods, and marginal-stability discussion."
    - title: David Tong, Supersymmetric Field Theory
      url: https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy.pdf
      locator: "Section 2.4.2, printed pages 40–41: central-charge bounds and shortened massive representations; Tong uses a different central-charge normalization, so the item retains the exact Seiberg–Witten convention."
    - title: Davide Gaiotto, Gregory W. Moore, and Andrew Neitzke, Four-dimensional wall-crossing via three-dimensional field theory
      url: https://arxiv.org/pdf/0807.4723
      locator: "Section 1 equation (1.1) and Section 2.2 equations (2.10)–(2.18): the second-helicity supertrace, support condition, sign refinement, and ordered KS factors; their physical derivation has its own stated assumptions and does not identify finite-field Hall groupoids."
    - title: Frederik Denef, Quantum Quivers and Hall/Hole Halos
      url: https://arxiv.org/pdf/hep-th/0206072
      locator: "Section 5.3, printed pages 35–36: the pure SU(2) monopole/dyon two-arrow quiver, DSZ pairing magnitude 2, and model-specific stability discussion."
verification:
  precheck: n/a
---

## Definition

Use natural units $c=\hbar=1$ and the selected pure four-dimensional rigid $\mathcal N=2$ Yang–Mills model with global gauge group $SU(2)$ and no microscopic matter hypermultiplets. Let $U$ be a simply connected regular patch of its source-proposed Seiberg–Witten Coulomb branch on which the local periods $a,a_D:U\to\mathbb C$ are holomorphic and $\operatorname{Im}(\partial a_D/\partial a)>0$. The earlier Coulomb-branch data define the formal charge-label lattice $\Gamma_{\mathrm{SW}}=\mathbb Z^2$, with labels $\gamma=(n_e,n_m)$ and period pairing $\mathcal Z_{\mathrm{SW},u}(\gamma)=n_ea(u)+n_ma_D(u)$. The source-proposed model convention fixes the scalar central charge to be $z_u(\gamma)=\sqrt2\,\mathcal Z_{\mathrm{SW},u}(\gamma)$; $a,a_D,z_u$ have mass dimension one, $u$ has mass dimension two, and charge labels and pairings are dimensionless.

For the model-specific physical charge data used here, equip $\Gamma_{\mathrm{SW}}$ with the integral antisymmetric Dirac pairing

$$\langle(n_e,n_m),(n'_e,n'_m)\rangle_{\mathrm{DSZ}}=2(n_m n'_e-n_e n'_m).$$

In particular the source-designated monopole label $\gamma_m=(0,1)$ and dyon label $\gamma_d=(1,-1)$ satisfy $\langle\gamma_m,\gamma_d\rangle_{\mathrm{DSZ}}=2$, the convention matched by a two-arrow Kronecker quiver with both arrows directed from the dyon vertex to the monopole vertex. The lattice records formal charge labels only: it does not assert that every label is an allowed line operator or a realized particle.

For each $u\in U$, the selected model supplies a stable support $\Gamma^{\mathrm{st}}_u\subseteq\Gamma_{\mathrm{SW}}\setminus\{0\}$. For each $\gamma\in\Gamma^{\mathrm{st}}_u$, supply a one-particle massive rest-fiber Hilbert sector $\mathcal H^1_{u,\gamma}$ carrying the selected unitary four-dimensional rigid $\mathcal N=2$ super-Poincaré representation at rest momentum $P^\mu=(M_{u,\gamma},0,0,0)$ in metric $\eta=\operatorname{diag}(-1,1,1,1)$, with conserved charge $\gamma$, positive scalar rest mass $M_{u,\gamma}$, and scalar central-charge block $Z^{12}=z_u(\gamma)$, $Z^{21}=-z_u(\gamma)$. Supply a nonzero closed Hilbert subspace $\mathcal H^{1,\mathrm{BPS}}_{u,\gamma}\subseteq\mathcal H^1_{u,\gamma}$ invariant under the chosen massive little-group rotations and identified as the selected BPS sector. Its vectors lie in the common supercharge domain, and every nonzero vector is BPS-saturated in the exact sense of the earlier BPS-state definition: $M_{u,\gamma}=|z_u(\gamma)|$, and the two N=2 annihilating supercharge combinations in that definition vanish on them. Stability is supplied model data: this sector is discrete and separated by a positive spectral gap from the multiparticle continuum at the same conserved charge. The sector and gap are inputs, not conclusions here. On this sector let $J_3$ be the self-adjoint generator of rotations about a fixed spatial axis in the restricted unitary representation of the massive little group, normalized so that $2J_3$ has integer spectrum. Require its spectral calculus to define a bounded trace-class operator $B_{u,\gamma}=(-1)^{2J_3}(2J_3)^2$, and supply a Hilbert basis $E_{u,\gamma}$ of $\mathcal H^{1,\mathrm{BPS}}_{u,\gamma}$.

Define the four-dimensional $\mathcal N=2$ second-helicity supertrace, also called the $B_2$ index here, by

$$\Omega_u(\gamma)=-\frac12\operatorname{tr}_{E_{u,\gamma}}(B_{u,\gamma}),$$

Here $\operatorname{tr}_{E_{u,\gamma}}$ is the absolutely convergent supplied-basis trace of a trace-class operator; basis independence is not needed here. Set $\Omega_u(\gamma)=0$ for $\gamma\notin\Gamma^{\mathrm{st}}_u$. The trace convention uses only $\mathrm{AC}_\omega$ through the stated mathematical suppliers, not full Choice. No existence or local constancy of this support is asserted.

For a chosen locally finite set of nonzero charges whose central charges lie, after one fixed rotation by a real phase $\alpha$, in the open upper half-plane, define $\phi_u(\gamma)=\arg(e^{-i\alpha}z_u(\gamma))/\pi\in(0,1)$. For two charges with nonzero central charges, their marginal-stability wall is the locus in $U$ where $z_u(\gamma)/z_u(\delta)\in\mathbb R_{>0}$; a chamber is a connected component of the regular patch after removing the specified wall loci. A formal positive cone $\Gamma_+\subseteq\Gamma_{\mathrm{SW}}$ used for ordered products contains $0$, is closed under addition, and is pointed ($\Gamma_+\cap(-\Gamma_+)=\{0\}$). It is supplied with an additive degree $\ell:\Gamma_+\to\mathbb N$ that is positive on nonzero charges and has finite sublevel sets, meaning $\{\gamma\in\Gamma_+:\ell(\gamma)\le N\}$ is finite for every $N\in\mathbb N$. The definition is conditional on the existence of the Hilbert sectors, trace data, cone, and degree; it constructs no continuum theory and makes no Hall-index identification.

## Definition references

Pure N=2 SU(2) Coulomb-branch and period data: [[def-qftx-n2-coulomb-branch-data]].

Source-proposed pure SU(2) Seiberg–Witten effective data and scalar central-charge normalization: [[post-qftx-n2-seiberg-witten-effective-solution]].

Massive-fiber BPS saturation: [[def-qftx-bps-state-and-saturation]].

Trace-class operators: [[def-trace-class-operator]].

The supplied-basis trace: [[def-trace-of-a-trace-class-operator]].

Countable Choice: [[def-countable-choice]].

[Seiberg and Witten, Sections 1, 4, and 6](https://arxiv.org/pdf/hep-th/9407087v1).

[Tong, Section 2.4.2](https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy.pdf).

[Gaiotto, Moore, and Neitzke, Sections 1 and 2.2](https://arxiv.org/pdf/0807.4723).

[Denef, Section 5.3](https://arxiv.org/pdf/hep-th/0206072).
