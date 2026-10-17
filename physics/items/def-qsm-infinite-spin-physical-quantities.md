---
id: def-qsm-infinite-spin-physical-quantities
kind: definition
title: Infinite quantum spin physical quantities
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
physical_scope: >-
  Finite-dimensional on-site quantum spins on Gamma=Z^d, d>=1, with a specified
  uniformly bounded finite-range interaction and positive temperature. Pressure
  and entropy densities are restricted to the translation-invariant hypotheses
  stated below; no empirical material identification is made.
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-qsm-bounded-finite-range-interaction
  - def-qsm-infinite-algebraic-state
  - def-qsm-kms-state
  - def-qsm-local-spin-algebras
  - def-qsm-quasilocal-spin-algebra
  - def-qsm-translation-invariant-spin-interaction
  - lem-qsm-stationary-spin-entropy-density
  - thm-qsm-finite-range-spin-dynamics
  - thm-qsm-quantum-lattice-pressure
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qsm-bounded-finite-range-interaction: mathematical-premise
  def-qsm-infinite-algebraic-state: mathematical-premise
  def-qsm-kms-state: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  def-qsm-translation-invariant-spin-interaction: mathematical-premise
  lem-qsm-stationary-spin-entropy-density: mathematical-premise
  thm-qsm-finite-range-spin-dynamics: mathematical-premise
  thm-qsm-quantum-lattice-pressure: mathematical-premise
dependency_level: 10
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §§3.2–3.4, especially Definition 3.4.4 and Definitions/Propositions 3.4.12–3.4.15, printed pp. 55–57 and 74–80
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §7 and Chapter 2 §6, printed pp. 13–14 and 24–25
      url: https://arxiv.org/pdf/math-ph/0107009
    - title: Oscar E. Lanford III and Derek W. Robinson, Statistical Mechanics of Quantum Spin Systems III, Theorem 3.1 and preceding setup, printed pp. 331–334
      url: https://people.math.harvard.edu/~knill/history/lanford/papers/LanfordRobinsonStatsMechanics.pdf
---

## Definition

Fix an integer dimension $d\ge1$, the lattice $\Gamma=\mathbb Z^d$, a finite on-site dimension $q\ge1$, a lattice spacing $a>0$ metres, and finite-region Hilbert spaces $\mathcal H_\Lambda$ and matrix algebras $\mathcal A_\Lambda$ as in [[def-qsm-local-spin-algebras]]. The observable algebra is the norm completion $\mathcal A$ of the directed union of the local algebras, as in [[def-qsm-quasilocal-spin-algebra]]. An **infinite spin state** is a bounded positive normalized functional $\omega:\mathcal A\to\mathbb C$ with local density matrices $\rho_\Lambda$ specified by $\omega(A)=\operatorname{Tr}_\Lambda(\rho_\Lambda A)$ for $A\in\mathcal A_\Lambda$, as in [[def-qsm-infinite-algebraic-state]]. A bounded local observable is an element of some $\mathcal A_\Lambda$; a measurement observable is self-adjoint. Its model expectation is $\omega(A)$, real for self-adjoint $A$. For ordered bounded local observables $A_1,\ldots,A_n$, define the ordered correlation $C_\omega(A_1,\ldots,A_n):=\omega(A_1\cdots A_n)$. It may be complex when the product is not self-adjoint, depends on the order when observables do not commute, and has the product of their assigned units. The state functional is dimensionless on dimensionless operators; if $A$ has an assigned unit, $\omega(A)$ has that same unit.

Within this formulation, primitive model inputs are the dimensionless integers $d,q$, the lattice spacing $a$, the positive constants $\hbar,k_B$, the temperature $T$, and the interaction coefficients $\Phi$ (or $J_{ij},h_i$ in the diagonal Ising submodel). The inverse temperature, finite Hamiltonians, partition functions, pressure/free-energy/entropy/energy densities, and state correlations are derived constructions under their stated hypotheses. The Born probability interpretation and the identification of KMS states with physical equilibrium are adopted separately; neither follows from this mathematical definition.

In SI bookkeeping, $a$ is measured in metres, $\hbar>0$ in joule-seconds, $k_B>0$ in joules per kelvin, and $T>0$ in kelvins. The finite-range interaction coefficients are specified inputs; a term $\Phi(Z)$ has units joules when interpreted as energy. The dimensionless local spin matrices (including the Pauli matrices in the spin-$\tfrac12$ submodel) do not by themselves identify a magnetic moment or an applied field. In a term $-h_i Z_i$, $h_i$ is an energy coefficient in joules; any identification with a laboratory field or magnetic moment requires a separate coupling and calibration model. No numerical parameter value is specified here.

The inverse-temperature parameter is the derived quantity $\beta:=(k_BT)^{-1}>0$, in joules$^{-1}$. For finite $\Lambda$, the free-boundary Hamiltonian $H_\Lambda=\sum_{\varnothing\ne Z\subseteq\Lambda}\Phi(Z)$ and the finite partition function $Z_\Lambda(\beta):=\operatorname{Tr}_\Lambda(e^{-\beta H_\Lambda})$ are defined by [[def-qsm-bounded-finite-range-interaction]] and [[def-qsm-local-spin-algebras]]. When $\Phi$ is an energy interaction, $H_\Lambda$ is in joules, $\beta H_\Lambda$ is dimensionless, and $Z_\Lambda$ is positive and dimensionless. The finite-volume Gibbs density $\rho_{\Lambda,\beta}=e^{-\beta H_\Lambda}/Z_\Lambda$ is a finite-region density matrix; it is not an asserted density matrix on an infinite tensor-product Hilbert space.

For $t$ in seconds, the finite-volume Heisenberg evolution is $\alpha_t^\Lambda(A)=e^{itH_\Lambda/\hbar}Ae^{-itH_\Lambda/\hbar}$. The thermodynamic dynamics $\alpha_t$ exists under the exact hypotheses of [[thm-qsm-finite-range-spin-dynamics]]. The $\beta$-KMS criterion for this dynamics uses a bounded continuous strip function with lower edge $\omega(A\alpha_t(B))$, upper edge $\omega(\alpha_t(B)A)$, and imaginary-time width $\beta\hbar$ seconds, exactly as in [[def-qsm-kms-state]]. This is a mathematical state criterion; no global infinite-volume Gibbs trace is part of the definition.

For $x,y\in\mathbb Z^d$, write $d_\infty(x,y):=\max_{1\le j\le d}|x_j-y_j|$. For a finite region $\Lambda\subseteq\mathbb Z^d$ and $x\in\Lambda$, define $\operatorname{dist}_\infty(x,\mathbb Z^d\setminus\Lambda):=\min_{y\in\mathbb Z^d\setminus\Lambda}d_\infty(x,y)$, using the convention of [[thm-qsm-quantum-lattice-pressure]]. The minimum exists because the complement is nonempty and its distances from $x$ are positive integers. For a translation-invariant interaction $\Phi$ of [[def-qsm-translation-invariant-spin-interaction]] and finite nonempty $\Lambda$, define the finite-volume dimensionless log-partition per site by $p_\Lambda(\beta):=|\Lambda|^{-1}\log Z_\Lambda(\beta)$. A sequence $(\Lambda_n)$ is van Hove here when $|\Lambda_n|\to\infty$ and for each fixed integer $r\ge0$, the inner boundary $\partial_r\Lambda_n=\{x\in\Lambda_n:\operatorname{dist}_\infty(x,\mathbb Z^d\setminus\Lambda_n)\le r\}$ satisfies $|\partial_r\Lambda_n|/|\Lambda_n|\to0$. Under the precise finite-range and translation-invariance assumptions of [[thm-qsm-quantum-lattice-pressure]], the common finite limit is $p_\Phi(\beta):=\lim_n p_{\Lambda_n}(\beta)$. It is dimensionless per lattice site, not a pressure in pascals. Define the finite-volume free energy per site $f_\Lambda(\beta):=-\beta^{-1}p_\Lambda(\beta)$ and the thermodynamic free energy per site $f_\Phi(\beta):=-\beta^{-1}p_\Phi(\beta)=-k_BT\,p_\Phi(\beta)$, in joules per site. Dividing by the model cell volume $a^d$ gives a free-energy density in joules per cubic metre when $d=3$; this fixed-lattice quantity does not by itself define a mechanical equation of state or pressure in pascals.

A state is **spatially translation invariant** when $\omega(\tau_x(A))=\omega(A)$ for every $x\in\mathbb Z^d$ and local $A$, with $\tau_x$ as defined in [[def-qsm-translation-invariant-spin-interaction]]. For such a state, let $Q_L=\{0,\ldots,L-1\}^d$ and define the dimensionless cube entropy per site
$$s(\omega):=\lim_{L\to\infty}\frac{-\operatorname{Tr}_{Q_L}(\rho_{Q_L}\log\rho_{Q_L})}{L^d},\qquad 0\log0:=0.$$
Under Countable Choice and the full Axiom of Choice [[def-countable-choice]], [[def-axiom-of-choice]], the exact entropy-density supplier [[lem-qsm-stationary-spin-entropy-density]] establishes that this limit exists for every such state and equals the infimum over positive integer cube sides. The corresponding physical entropy density is $k_Bs(\omega)/a^d$, in joules per kelvin per cubic metre for $d=3$. For the translation-invariant finite-range energy interaction, the same supplier defines the energy density per site $u_\Phi(\omega)=\sum_{S\in\mathscr S_\Phi}\omega(\Phi(S))$; it is in joules per site when $\Phi$ is an energy interaction, and $u_\Phi(\omega)/a^d$ is the energy density per physical volume in $d=3$. These thermodynamic limits are restricted to the supplier's stated assumptions and do not assert that a prepared physical material realizes a translation-invariant state.

