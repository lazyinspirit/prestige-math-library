---
id: ex-nrqmx-jc-vacuum-rabi
kind: example
title: Vacuum Rabi oscillation
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps:
  - pthm-nrqmx-jaynes-cummings-blocks
  - post-nrqm-framework-autonomous-dynamics
  - def-nrqm-autonomous-dynamics-framework-evolution
  - def-nrqm-measurement-framework-declared-measurements-and-instruments
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  pthm-nrqmx-jaynes-cummings-blocks: physical-result
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-measurement-framework-declared-measurements-and-instruments: operational-prerequisite
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: >-
  A conditional single-excitation calculation in the ideal closed
  Jaynes–Cummings two-level, one-mode rotating-wave model. It predicts periodic
  excitation transfer and revival within that model, not irreversible decay or
  continuum spontaneous emission. No measured oscillation or apparatus record
  is asserted.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Carlos Navarrete-Benlloch, Introduction to Quantum Optics, full lecture notes, §IV.2.2"
      url: "https://arxiv.org/pdf/2203.13206"
      locator: "Jaynes–Cummings invariant excitation sectors and dressed-state blocks, Eqs. (268)–(271); the local example computes the vacuum block independently."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Example

In the resonant Jaynes–Cummings model ($\omega_0=\omega$), prepare the atom and field in $|e,0\rangle$ and let the ideal model evolve for time $\tau\ge0$. The assigned excited-state PVM then gives excitation probability $\cos^2(g\tau)$. If $g\ne0$, the population returns to one at $\tau=k\pi/|g|$, $k\in\mathbb N_0$; if $g=0$, it remains one. This is a periodic model prediction, not irreversible spontaneous decay or a reported observation.

## Example references

[[pthm-nrqmx-jaynes-cummings-blocks]]

[[post-nrqm-framework-autonomous-dynamics]]

[[def-nrqm-autonomous-dynamics-framework-evolution]]

[[def-nrqm-measurement-framework-declared-measurements-and-instruments]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Resonance $\omega_0=\omega>0$, real $g$, $\hbar>0$, time $\tau\ge0$, initial state $|e,0\rangle$, and the closed Jaynes–Cummings model.

[A1] The adopted single-mode, two-level rotating-wave model and its AC/CC assumptions are those of [[pthm-nrqmx-jaynes-cummings-blocks]]; no continuum bath or experiment is included.

[A2] Assume AC and $\mathrm{AC}_\omega$ as mathematical premises carried by the model and Fock-domain suppliers. Adopt the isolated autonomous dynamics postulate P4 for the self-adjoint Hamiltonian supplied by the Jaynes–Cummings theorem; this is a model assumption, not an empirical claim ([[def-axiom-of-choice]], [[def-countable-choice]], [[post-nrqm-framework-autonomous-dynamics]], [[def-nrqm-autonomous-dynamics-framework-evolution]]).

[F1] On resonance, the invariant block $\mathcal K_0=\operatorname{span}\{|e,0\rangle,|g,1\rangle\}$ has matrix $H_0=\frac{\hbar\omega}{2}I+\hbar g\sigma_x$ in that ordered orthonormal basis, where $\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ ([[pthm-nrqmx-jaynes-cummings-blocks]]).

[F2] For the self-adjoint assigned energy $H_{\rm JC}$, P4 defines the model evolution on all states by $U(\tau)=\exp(-i\tau H_{\rm JC}/\hbar)$ through its spectral calculus ([[post-nrqm-framework-autonomous-dynamics]], [[def-nrqm-autonomous-dynamics-framework-evolution]]).

[F3] For the excited-state projection $P_e=|e\rangle\langle e|\otimes I$, the assigned probability of its outcome in a unit state $\psi$ is $\|P_e\psi\|^2$ ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]]).

## Proof

1.1 Define $|+\rangle=(|e,0\rangle+|g,1\rangle)/\sqrt2$ and $|-\rangle=(|e,0\rangle-|g,1\rangle)/\sqrt2$. The block matrix in [F1] gives $H_{\rm JC}|+\rangle=\hbar(\omega/2+g)|+\rangle$ and $H_{\rm JC}|-\rangle=\hbar(\omega/2-g)|-\rangle$. Thus these orthonormal vectors are global eigenvectors of the self-adjoint Hamiltonian, including when $g=0$. [F1, algebra]

2.1 Since $|e,0\rangle=(|+\rangle+|-\rangle)/\sqrt2$, P4 [F2] evolves it to $e^{-i\omega\tau/2}\bigl(\cos(g\tau)|e,0\rangle-i\sin(g\tau)|g,1\rangle\bigr)$ by applying the spectral exponential to the two eigenvectors from step 1.1. [A2, F2, step 1.1, algebra]

3.1 The vectors $|e,0\rangle$ and $|g,1\rangle$ are orthogonal, so the squared norm of the excited projection of the state in step 2.1 is $\cos^2(g\tau)$. The PVM rule [F3] makes this the assigned excited-state probability. If $g\ne0$, it returns to one at $\tau=k\pi/|g|$ for $k\in\mathbb N_0$; if $g=0$, it stays one for every $\tau$. This periodicity is a model deduction, not irreversible decay or an experimental observation. [A1, F3, step 2.1, algebra] ∎

