---
id: ex-nrqmx-flux-half-crossing
kind: example
domain: physics
library: physics
title: Half-flux ground-state crossing on the ring
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 5
deps:
  - pthm-nrqmx-flux-ring-spectrum
  - thm-nrqmx-periodic-flux-spectrum
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
dependency_roles:
  pthm-nrqmx-flux-ring-spectrum: physical-result
  thm-nrqmx-periodic-flux-spectrum: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
physical_scope: "Exact level comparison in the ideal spinless ring model with periodic wavefunctions. It does not include spin, finite-width effects, disorder, or an experimental measurement."
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Applications of Quantum Mechanics, §1.3.1, flux-shifted ring spectrum"
      url: "https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf"
    - title: "V. P. Nair, Notes on Quantum Mechanics, §13.1, flux-dependent Aharonov–Bohm phase"
      url: "https://nair.ccny.cuny.edu/Notes-QM.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Example

In the ideal spinless ring model, at dimensionless flux
$\alpha=q\Phi/(2\pi\hbar)=1/2$ the ground energy is twofold degenerate at
the Fourier labels $n=0$ and $n=1$. At $\alpha=0$ the ground state is unique
at $n=0$. The scale $\kappa=\hbar^2/(2mR^2)$ is in joules and $\alpha$ is
dimensionless.

## Example references

[[pthm-nrqmx-flux-ring-spectrum]]

[[thm-nrqmx-periodic-flux-spectrum]]

## Facts & Assumptions

**Given:** the ideal ring Hamiltonian, $\kappa=\hbar^2/(2mR^2)>0$, and its
dimensionless flux $\alpha$.

[A1] Choice, Countable Choice, and Dependent Choice are retained from the
periodic spectral suppliers ([[def-axiom-of-choice]],
[[def-countable-choice]], [[def-dependent-choice]]).

[F1] Its complete Fourier eigenbasis has energies
$E_n=\kappa(n-\alpha)^2$ for $n\in\mathbb Z$
([[pthm-nrqmx-flux-ring-spectrum]],
[[thm-nrqmx-periodic-flux-spectrum]]).

## Verification

1.1 At $\alpha=1/2$, $E_n=\kappa(n-1/2)^2$. The nearest integers to $1/2$
are exactly $0$ and $1$, and both have squared distance $1/4$; every other
integer has distance at least $3/2$. Therefore $E_0=E_1=\kappa/4$ is the
ground energy and no other Fourier label attains it. The complete basis in
[F1] makes the ground eigenspace exactly two-dimensional, conditional on the ideal ring assumptions. [given, A1, F1, algebra]

2.1 At $\alpha=0$, $E_n=\kappa n^2\ge0$, with equality exactly at the
integer $n=0$. The eigenbasis in [F1] then gives a one-dimensional ground
eigenspace, spanned by $e_0(\phi)=(2\pi)^{-1/2}$, again conditional on the ideal ring assumptions. [A1, F1, algebra] ∎
