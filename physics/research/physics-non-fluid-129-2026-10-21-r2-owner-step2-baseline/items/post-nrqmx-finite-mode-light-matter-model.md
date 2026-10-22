---
id: post-nrqmx-finite-mode-light-matter-model
kind: postulate
title: Finite-mode dipole and detector assignment
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - post-nrqmx-finite-open-model
  - def-nrqmx-finite-mode-symplectic-data
  - lem-nrqmx-finite-mode-fock-schr-identification
  - thm-nrqmx-finite-mode-bogoliubov
  - def-nrqm-framework-quantities-and-units
  - def-nrqm-measurement-framework-declared-measurements-and-instruments
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  post-nrqmx-finite-open-model: formulation-prerequisite
  def-nrqmx-finite-mode-symplectic-data: mathematical-premise
  lem-nrqmx-finite-mode-fock-schr-identification: mathematical-premise
  thm-nrqmx-finite-mode-bogoliubov: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-measurement-framework-declared-measurements-and-instruments: operational-prerequisite
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: >-
  An adopted effective model assignment for finitely many bosonic oscillator
  modes coupled to a finite atomic Hilbert space, together with explicitly
  selected ideal photon-counting and homodyne outcome models. It asserts no
  laboratory mode content, detector realization, measured coupling, controlled
  truncation error, continuum spontaneous-emission law, QED photon localization,
  photon position or spin tensor decomposition, helicity, angular-momentum
  split, or paraxial limit. Long-wavelength, rotating-wave and Markov regimes
  are optional, separately stated approximations.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Carlos Navarrete-Benlloch, Introduction to Quantum Optics, full lecture notes, §§IV.1 and IV.2.1–2.2"
      url: "https://arxiv.org/pdf/2203.13206"
      locator: "The dipole interaction in §IV.1; single-mode, two-level and rotating-wave model in §IV.2.1; excitation sectors in §IV.2.2, Eqs. (267)–(271)."
    - title: "Christian Weedbrook et al., Gaussian Quantum Information, §§II.2.6, II.5.1, II.5.4 and V.2"
      url: "https://arxiv.org/pdf/1110.3234"
      locator: "Complete PDF sections: passive beam splitter, homodyne, ideal number measurement, and vacuum-environment pure-loss dilation."
    - title: "John Watrous, The Theory of Quantum Information, Chapter 2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf"
      locator: "§2.1.3, printed pp. 67–69, finite partial trace; §2.2.2, Theorem 2.22, printed pp. 82–84, finite Choi/Kraus/Stinespring forms. Used only for finite-dimensional detector-environment context, not for the infinite-dimensional oscillator channel."
verification:
  precheck: n/a
---

## Postulate

**(a) Finite oscillator-mode data.** Choose an integer $M\ge1$, the one-particle mode space $\mathfrak h=\mathbb C^M$ with a declared orthonormal mode basis $e_1,\ldots,e_M$, and the bosonic Fock space $\mathcal F_s(\mathfrak h)=\bigoplus_{n\ge0}\mathfrak h^{\otimes_s n}$ with vacuum $\Omega$. Here $\mathfrak h^{\otimes_s n}$ is the range of the orthogonal symmetrizer in the completed $n$-fold Hilbert tensor product, with the zero-particle sector $\mathbb C\Omega$. For $\mathbf n=(n_1,\ldots,n_M)\in\mathbb N_0^M$, let $|\mathbf n\rangle$ be the normalized occupation vector. The mode operators are dimensionless and on the finite-particle core satisfy $a_j|\mathbf n\rangle=\sqrt{n_j}|\mathbf n-\mathbf e_j\rangle$ and $a_j^*|\mathbf n\rangle=\sqrt{n_j+1}|\mathbf n+\mathbf e_j\rangle$, with the first expression zero if $n_j=0$. The Fock space is infinite-dimensional for each $M\ge1$; no particle-number cutoff or tensor factorization of an individual photon into position and spin is part of this assignment.

Assume the Axiom of Choice and countable choice wherever the finite-mode Fock, quadrature, and implementability suppliers require them. These are mathematical hypotheses of the assignment, not physical postulates.

**Mode-frequency data.** For each selected mode $j$, choose a positive angular frequency $\omega_j>0$ in seconds$^{-1}$; the assigned one-quantum energy scale is $\hbar\omega_j$ joules. These are parameters of the finite-mode model, not measured frequencies.

**(b) Finite atom and dipole data.** Choose $d\ge1$, an atomic Hilbert space $\mathcal H_A=\mathbb C^d$, a Hermitian atomic energy matrix $H_A$ in joules, Hermitian compressed dipole matrices $D_j$ in coulomb-metres, and real mode field scales $\mathcal E_j$ in volts per metre. The matrix elements of $G_j:=\mathcal E_jD_j/\hbar$ have units seconds$^{-1}$, where $\hbar>0$ is retained in joule-seconds. The finite matrices and scales are chosen model data. If they are obtained by compressing a larger atomic model, that compression's error is a separate model input and is not bounded here.

The assigned dipole interaction core expression is $V_{\mathrm{dip}}=-\sum_{j=1}^{M}\mathcal E_jD_j\otimes(a_j+a_j^*)$ in the ordered space $\mathcal H_A\otimes\mathcal F_s(\mathfrak h)$; each summand has units joules and acts on the finite-particle core. This clause assigns the finite matrix expression only. It does not assert that an arbitrary such sum has a self-adjoint realization or generate an evolution; any dynamical use must state and justify its operator domain. The Jaynes–Cummings supplier below gives one specific self-adjoint direct-sum realization.

**(c) Mode transformations.** A finite mode-coordinate change is assigned only when its finite Bogoliubov matrices satisfy the exact hypotheses of the finite-mode implementability statement: for $U,V\in M_M(\mathbb C)$, $UU^*-VV^*=I_M$ and $UV^T=VU^T$. The resulting unitary acts on this finite-mode Fock space. The statement assumes the Axiom of Choice; this is a mathematical assumption, not a physical law. No infinite-mode implementability follows.

**(d) Detector outcome models.** A detector's outcome space $(X,\Sigma)$ and POVM $E:\Sigma\to\mathcal B(\mathcal H_A\otimes\mathcal F_s(\mathfrak h))$ are declared model data: each $E(B)$ is bounded and positive, $E(X)=I$, and $E$ is countably additive in the weak operator topology. For a state $\rho$, the assigned probability is $\operatorname{tr}(\rho E(B))$ under the framework's stated measurement convention. An ideal number-resolving model on the field has outcomes $\mathbf n\in\mathbb N_0^M$ and effects $I_A\otimes|\mathbf n\rangle\langle\mathbf n|$. For ideal homodyne of mode $j$ at phase $\theta\in\mathbb R$, let $R_j(\theta)|\mathbf n\rangle=e^{i\theta n_j}|\mathbf n\rangle$ and $X_{j,\theta}:=\hbar^{-1/2}R_j(\theta)Q_jR_j(\theta)^*$, where $Q_j$ is the self-adjoint quadrature fixed by [[def-nrqmx-finite-mode-symplectic-data]]. Thus $X_{j,\theta}$ is self-adjoint by unitary conjugation and on the finite-particle core equals $(e^{-i\theta}a_j+e^{i\theta}a_j^*)/\sqrt2$. Its spectral PVM $B\mapsto I_A\otimes\mathbf1_B(X_{j,\theta})$ is the ideal homodyne POVM on the product space. These are ideal outcome assignments, not claims about a detector's optical local oscillator, efficiency, bandwidth, calibration or state update. If a state update or a finite detector environment is modeled, declare its instrument separately; the optional finite product-preparation/unitary/partial-trace assignment has the exact scope of the finite open-system postulate and implies no reservoir limit.

**(e) Optional approximation regimes.** A long-wavelength identification with a spatial electromagnetic mode requires a separately declared atomic extent $L$ and wave number $k_j$ and the scale regime $k_jL\ll1$; no error bound is supplied. A rotating-wave choice keeps only the excitation-exchange terms. For a two-level transition of frequency $\omega_0$ coupled to a mode of frequency $\omega$, its usual low-excitation regime is $|g|\sqrt{n+1}\ll\omega,\omega_0$ on the declared photon-number sectors; it is not uniform over the full Fock space. A Markov/GKSL approximation is another separate model choice and must state its rates, reservoir correlation time $\tau_B$, system time scale $\tau_S$, and regime $\tau_B\ll\tau_S$. None of these optional approximations is derived from this assignment or from the finite system-environment model.

## Postulate references

[[def-nrqmx-finite-mode-symplectic-data]]

[[lem-nrqmx-finite-mode-fock-schr-identification]]

[[thm-nrqmx-finite-mode-bogoliubov]]

[[def-nrqm-framework-quantities-and-units]]

[[def-nrqm-measurement-framework-declared-measurements-and-instruments]]

[[post-nrqmx-finite-open-model]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

## Remarks

The preceding radiation and cutoff finite-level emission models remain separate framework branches. This finite-mode assignment does not replace them or assert an identification between their continuum transverse modes and the selected finite oscillator modes. It makes no photon-position, photon-spin, helicity, gauge/canonical/kinetic angular-momentum, spin-orbital, or paraxial-limit claim. No observed counts, homodyne records, uncertainties or empirical support are asserted.


