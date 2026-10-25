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
  - def-qftx-unitary-super-poincare-representation
  - def-trace-class-operator
  - def-trace-of-a-trace-class-operator
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-n2-coulomb-branch-data: formulation-prerequisite
  post-qftx-n2-seiberg-witten-effective-solution: physical-assumption
  def-qftx-bps-state-and-saturation: formulation-prerequisite
  def-qftx-unitary-super-poincare-representation: formulation-prerequisite
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
proof_strategy: not-applicable
physical_scope: Conditional data definition for electric and magnetic charge labels, second-helicity BPS indices, and marginal-stability walls and chambers relative to a supplied wall family in an already specified pure four-dimensional rigid N=2 SU(2) quantum or regulated one-particle model on regular Seiberg–Witten patches; it asserts no state existence, continuum QFT construction, or physical realization of Hall counts.
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
      locator: "Section 1 equation (1.1), Section 2.1 equation (2.10) and its following paragraph, and Section 2.2 equations (2.11)–(2.18): the second-helicity supertrace on complete massive short multiplets, support condition, sign refinement, and ordered KS factors; their physical derivation has its own stated assumptions and does not identify finite-field Hall groupoids."
    - title: Frederik Denef, Quantum Quivers and Hall/Hole Halos
      url: https://arxiv.org/pdf/hep-th/0206072
      locator: "Printed pages 20 and 29: the directed-intersection convention assigns positive intersection to arrows from the first vertex to the second, equivalently forward-arrow count minus reverse-arrow count. Section 5.3, printed pages 35–36: the pure SU(2) monopole/dyon two-arrow quiver, DSZ pairing magnitude 2, and model-specific stability discussion."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Use natural units $c=\hbar=1$ and the selected pure four-dimensional rigid $\mathcal N=2$ Yang–Mills model with global gauge group $SU(2)$ and no microscopic matter hypermultiplets. Let $U$ be a simply connected regular patch of its source-proposed Seiberg–Witten Coulomb branch on which the local periods $a,a_D:U\to\mathbb C$ are holomorphic and $\operatorname{Im}(\partial a_D/\partial a)>0$. The earlier Coulomb-branch data define the formal charge-label lattice $\Gamma_{\mathrm{SW}}=\mathbb Z^2$, with labels $\gamma=(n_e,n_m)$ and period pairing $\mathcal Z_{\mathrm{SW},u}(\gamma)=n_ea(u)+n_ma_D(u)$. The source-proposed model convention fixes the scalar central charge to be $z_u(\gamma)=\sqrt2\,\mathcal Z_{\mathrm{SW},u}(\gamma)$; $a,a_D,\mathcal Z_{\mathrm{SW},u},z_u$ have mass dimension one, $u$ has mass dimension two, and charge labels and the DSZ pairing are dimensionless.

For the model-specific physical charge data used here, equip $\Gamma_{\mathrm{SW}}$ with the integral antisymmetric Dirac pairing

$$\langle(n_e,n_m),(n'_e,n'_m)\rangle_{\mathrm{DSZ}}=2(n_m n'_e-n_e n'_m).$$

In particular the source-designated monopole label $\gamma_m=(0,1)$ and dyon label $\gamma_d=(1,-1)$ satisfy $\langle\gamma_m,\gamma_d\rangle_{\mathrm{DSZ}}=2$, the convention matched by a two-arrow Kronecker quiver with both arrows directed from the dyon vertex to the monopole vertex. The lattice records formal charge labels only: it does not assert that every label is an allowed line operator or a realized particle.

For the local Hall convention, order the quiver vertices as $(m,d)$ and let $x=(x_m,x_d),y=(y_m,y_d)\in\mathbb Z^2$. With two arrows $d\to m$, define the Euler form and its antisymmetrization by

$$\chi_Q(x,y)=x_my_m+x_dy_d-2x_dy_m,\qquad \langle x,y\rangle_Q=\chi_Q(x,y)-\chi_Q(y,x)=2(x_my_d-x_dy_m).$$

Thus $\chi_Q(e_m,e_d)=0$, $\chi_Q(e_d,e_m)=-2$, and $\langle e_m,e_d\rangle_Q=+2$, where $e_m=(1,0)$ and $e_d=(0,1)$. The map $\rho(x)=x_m\gamma_m+x_d\gamma_d$ therefore satisfies $\langle\rho(x),\rho(y)\rangle_{\mathrm{DSZ}}=\langle x,y\rangle_Q$. Denef's directed-intersection convention assigns the number of arrows from the first vertex to the second minus the reverse number; on this same directed quiver its bilinear extension is $I_D(x,y)=2(x_dy_m-x_my_d)=-\langle x,y\rangle_Q$. Denef is cited here for the two-arrow magnitude and pure-$SU(2)$ model discussion. The signed Hall identification used here is the explicitly defined $\mathrm{DSZ}=\chi_Q-\chi_Q^{\mathsf T}$ convention.

For each $u\in U$, the selected model supplies a stable support $\Gamma^{\mathrm{st}}_u\subseteq\Gamma_{\mathrm{SW}}\setminus\{0\}$. For each $\gamma\in\Gamma^{\mathrm{st}}_u$, supply a selected unitary four-dimensional super-Poincaré representation in the precise earlier sense and its representation-theoretic one-particle massive rest-fiber Hilbert sector $\mathcal H^1_{u,\gamma}$ with positive inner product linear in its first variable, a bounded self-adjoint grading involution, a positive rest mass $M_{u,\gamma}$, and the conserved label $\gamma$. On a supplied common dense graded invariant domain $\mathcal D_{u,\gamma}$, supply the $\mathcal N=2$ supertranslation representation of the earlier BPS-state definition: $P^0=M_{u,\gamma}I$, $P^j=0$, $Z^{12}=z_u(\gamma)I$, $Z^{21}=-z_u(\gamma)I$, and closed odd supercharges $Q^I_\alpha$ with their actual Hilbert adjoints, with every product in the bracket table defined there. Use metric $\eta=\operatorname{diag}(-1,1,1,1)$, so $P_0=-M_{u,\gamma}I$. The rest-fiber identification with that selected representation is supplied model data; it does not mean a normalizable fixed-momentum subspace of the full representation.

The spin-cover Lorentz action on vectors is characterized by $\Phi(\Lambda_gx)=g\Phi(x)g^\dagger$ for $g\in\mathrm{SL}(2,\mathbb C)$ and $\Phi(x)=-\sigma^\mu x_\mu$, as in the unitary representation definition. For the rest vector $P_{u,\gamma}=(M_{u,\gamma},0,0,0)$ define its stabilizer
$$G_{P_{u,\gamma}}:=\{g\in\mathrm{SL}(2,\mathbb C):\Lambda_gP_{u,\gamma}=P_{u,\gamma}\}=\mathrm{SU}(2).$$
Indeed $\Phi(P_{u,\gamma})=M_{u,\gamma}I_2$, so the stabilizer condition is $gg^\dagger=I_2$. As part of the rest-fiber identification, supply the selected full representation's little-group action as a grading-preserving unitary representation $\pi_{u,\gamma}:\mathrm{SU}(2)\to\mathcal U(\mathcal H^1_{u,\gamma})$, meaning $\pi(gh)=\pi(g)\pi(h)$, $\pi(I)=I$, and $\pi(g)^*\pi(g)=I=\pi(g)\pi(g)^*$. Require strong continuity: $g\mapsto\pi(g)\psi$ is norm-continuous for every $\psi$. Require $\pi(g)\mathcal D_{u,\gamma}=\mathcal D_{u,\gamma}$ and, on that domain,
$$\pi(g)Q^I_\alpha\pi(g)^{-1}=\sum_\beta g^\beta{}_{\alpha}Q^I_\beta,\qquad \pi(g)(Q^I_\alpha)^*\pi(g)^{-1}=\sum_\beta\overline{g^\beta{}_{\alpha}}(Q^I_\beta)^*,$$
where $g^\beta{}_{\alpha}$ is row $\beta$, column $\alpha$; scalar momenta and central charges are unchanged. Require this $\pi$ to be the little-group action induced by the supplied representation-theoretic rest-fiber identification, with the displayed supercharge covariance. It is not an independently chosen unrelated action or a restriction to a normalizable sharp-momentum subspace of the full-space operator $U(g,0)$. Choose the spin axis $3$ and the one-parameter rotation subgroup
$$r_3(\theta)=\begin{pmatrix}e^{-i\theta/2}&0\\0&e^{i\theta/2}\end{pmatrix},\qquad \theta\in\mathbb R/(4\pi\mathbb Z).$$
Supply a nonzero closed Hilbert subspace $\mathcal H^{1,\mathrm{BPS}}_{u,\gamma}\subseteq\mathcal H^1_{u,\gamma}$ invariant under this supplied $\mathrm{SU}(2)$ action and identified as the selected BPS sector. Its vectors lie in $\mathcal D_{u,\gamma}$. Require the grading involution to preserve this subspace and, for every $I,\alpha$, require $Q^I_\alpha\mathcal H^{1,\mathrm{BPS}}_{u,\gamma}\subseteq\mathcal H^{1,\mathrm{BPS}}_{u,\gamma}$ and $(Q^I_\alpha)^*\mathcal H^{1,\mathrm{BPS}}_{u,\gamma}\subseteq\mathcal H^{1,\mathrm{BPS}}_{u,\gamma}$; thus the selected sector includes every supercharge partner of each of its states. Every nonzero vector is BPS-saturated in the exact sense of the earlier BPS-state definition: $M_{u,\gamma}=|z_u(\gamma)|$, and the two $\mathcal N=2$ annihilating supercharge combinations in that definition vanish on them. To make stability an exact condition, the model also supplies a same-charge rest-energy Hilbert space $\mathscr K_{u,\gamma}$ and a nonnegative self-adjoint Hamiltonian $H_{u,\gamma}$. Supply an isometric embedding $\iota:\mathcal H^{1,\mathrm{BPS}}_{u,\gamma}\to\mathscr K_{u,\gamma}$ whose closed image reduces $H_{u,\gamma}$ and on which $H_{u,\gamma}\iota\psi=M_{u,\gamma}\iota\psi$. Supply an orthogonal reducing subspace $\mathscr K^{\mathrm{mp}}_{u,\gamma}$ representing the multiparticle channels at this same total conserved charge and zero total spatial momentum, with self-adjoint restriction $H^{\mathrm{mp}}_{u,\gamma}$. For a self-adjoint operator $T$, write $\sigma(T)$ for its real spectrum, namely the real numbers $e$ for which $T-eI$ has no bounded everywhere-defined inverse. Define the multiparticle threshold $E^{\mathrm{mp}}_{u,\gamma}=\inf\sigma(H^{\mathrm{mp}}_{u,\gamma})$, with $\inf\varnothing=+\infty$ if the supplied channel space is zero. In a continuum model these supplied channels include its multiparticle continuous spectrum; in a discrete regulator they are the model's designated multiparticle channel subspace. Require $M_{u,\gamma}$ to be isolated in $\sigma(H_{u,\gamma})$: for some $\varepsilon>0$, $\sigma(H_{u,\gamma})\cap(M_{u,\gamma}-\varepsilon,M_{u,\gamma}+\varepsilon)=\{M_{u,\gamma}\}$. Require also a supplied real $g_{u,\gamma}>0$ with $M_{u,\gamma}+g_{u,\gamma}\le E^{\mathrm{mp}}_{u,\gamma}$. These isolation and threshold conditions define stability here; they make precise the positive gap below the multiparticle continuum without asserting finite degeneracy. The stable support consists of the charges selected by the model with these data; no completeness of that selection or existence of these data is proved. On $\mathcal H^{1,\mathrm{BPS}}_{u,\gamma}$, supply a self-adjoint operator $J_3$ with $2J_3$-integer spectrum such that the restricted action of $r_3(\theta)$ is $e^{-i\theta J_3}$ for every $\theta\in\mathbb R$. Require its spectral calculus to define a bounded trace-class operator $B_{u,\gamma}=(-1)^{2J_3}(2J_3)^2$, and supply a Hilbert basis $E_{u,\gamma}$ of $\mathcal H^{1,\mathrm{BPS}}_{u,\gamma}$.

Define the four-dimensional $\mathcal N=2$ second-helicity supertrace, also called the $B_2$ index here, by

$$\Omega_u(\gamma)=-\frac12\operatorname{tr}_{E_{u,\gamma}}(B_{u,\gamma}),$$

Here $\operatorname{tr}_{E_{u,\gamma}}$ is the absolutely convergent supplied-basis trace of a trace-class operator; basis independence is not needed here. Set $\Omega_u(\gamma)=0$ for $\gamma\notin\Gamma^{\mathrm{st}}_u$. The trace convention uses only $\mathrm{AC}_\omega$ through the stated mathematical suppliers, not full Choice. No existence or local constancy of this support is asserted.

Let $\mathcal C\subseteq\Gamma_{\mathrm{SW}}\setminus\{0\}$ be any chosen set of charges, and fix $\alpha\in\mathbb R$. At each $u\in U$ for which $e^{-i\alpha}z_u(\gamma)\in\mathbb H:=\{z\in\mathbb C:\operatorname{Im}z>0\}$ for every $\gamma\in\mathcal C$, define $\phi_u(\gamma)=\arg(e^{-i\alpha}z_u(\gamma))/\pi\in(0,1)$ for $\gamma\in\mathcal C$. For two charges $\gamma,\delta$ with nonzero central charges, define their marginal-stability wall by

$$W_{\gamma,\delta}:=\{u\in U:z_u(\gamma)/z_u(\delta)\in\mathbb R_{>0}\}.$$

Given a specified family $\mathscr W$ of such wall subsets of $U$, a chamber relative to $\mathscr W$ is a connected component of $U\setminus\bigcup_{W\in\mathscr W}W$. A formal positive cone $\Gamma_+\subseteq\Gamma_{\mathrm{SW}}$ used for ordered products contains $0$, is closed under addition, and is pointed ($\Gamma_+\cap(-\Gamma_+)=\{0\}$). It is supplied with an additive degree $\ell:\Gamma_+\to\mathbb N$ that is positive on nonzero charges and has finite sublevel sets, meaning $\{\gamma\in\Gamma_+:\ell(\gamma)\le N\}$ is finite for every $N\in\mathbb N$. The definition is conditional on the existence of the Hilbert sectors, trace data, cone, and degree; it constructs no continuum theory and makes no Hall-index identification.

## Definition references

Pure $N=2$ SU(2) Coulomb-branch and period data: [[def-qftx-n2-coulomb-branch-data]].

Source-proposed pure SU(2) Seiberg–Witten effective data and scalar central-charge normalization: [[post-qftx-n2-seiberg-witten-effective-solution]].

Massive-fiber BPS saturation: [[def-qftx-bps-state-and-saturation]].

Spin-cover Lorentz action and its $\mathrm{SL}(2,\mathbb C)$ representation: [[def-qftx-unitary-super-poincare-representation]].

Trace-class operators: [[def-trace-class-operator]].

The supplied-basis trace: [[def-trace-of-a-trace-class-operator]].

Countable Choice: [[def-countable-choice]].

[Seiberg and Witten, Sections 1, 4, and 6](https://arxiv.org/pdf/hep-th/9407087v1).

[Tong, Section 2.4.2](https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy.pdf).

[Gaiotto, Moore, and Neitzke, Sections 1, 2.1, and 2.2](https://arxiv.org/pdf/0807.4723).

[Denef, printed pages 20 and 29 for the directed-intersection convention, and Section 5.3 for the pure-SU(2) two-arrow magnitude and model](https://arxiv.org/pdf/hep-th/0206072).
