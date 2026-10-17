---
id: post-qsm-dt-physical-control
kind: postulate
title: Prepared control and expectation convention
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 4
physical_scope: An idealized finite-dimensional subsystem with a prescribed continuous bounded control on a finite time interval and a fixed prepared initial state; no apparatus calibration, measured response, re-preparation during control, or universal response law is asserted.
deps:
  - def-axiom-of-choice
  - post-qsm-normal-measurement-state
  - thm-qsm-dt-finite-kubo
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  post-qsm-normal-measurement-state: formulation-prerequisite
  thm-qsm-dt-finite-kubo: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Ryogo Kubo, Statistical-Mechanical Theory of Irreversible Processes I, Journal of the Physical Society of Japan 12 (1957), §2, printed pp. 572–575
      url: https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf
    - title: Steven H. Simon, Lecture Notes for Quantum Matter, Chapter 8 §8.2, printed pp. 118–122
      url: https://www-thphys.physics.ox.ac.uk/people/SteveSimon/QCM2023/QuantumMatter.pdf
---

## Postulate

On a finite-dimensional subsystem with unperturbed $H=H^*$ in J, bounded self-adjoint control observable $B$, $\hbar>0$ in J s, and finite interval $[0,T]$ with $T>0$ in s, adopt the idealized controlled Hamiltonian
$$H_\epsilon(t)=H-\epsilon h(t)B,$$
where $h:[0,T]\to\mathbb R$ is continuous, $\epsilon\in\mathbb R$ is dimensionless, and $h(t)B$ has unit J. The initial prepared state is held fixed at $t=0$ as the Gibbs matrix $\sigma=Z_\beta^{-1}e^{-\beta H}$, $\beta>0$ in J$^{-1}$; the model does not re-prepare a Gibbs state for $H_\epsilon(t)$. Expectations use the adopted normal-state Born convention of [[post-qsm-normal-measurement-state]]. The full Axiom of Choice convention, stated in [[def-axiom-of-choice]], of that wider measurement framework is retained. This is an adopted control model; it makes no claim about a particular device or data.

For the controlled propagator $U_\epsilon$ satisfying $i\hbar U_\epsilon'(t)=H_\epsilon(t)U_\epsilon(t)$ and $U_\epsilon(0)=I$, define $\rho_\epsilon(t)=U_\epsilon(t)\sigma U_\epsilon(t)^*$ and $\mathbb E_{\epsilon,t}[A]=\operatorname{Tr}(\rho_\epsilon(t)A)$ for bounded self-adjoint matrices $A$. Existence and uniqueness of this finite-dimensional propagator are supplied by [[thm-qsm-dt-finite-kubo]].

The finite-time response theorem [[thm-qsm-dt-finite-kubo]] supplies the exact mathematical response interface used to formulate this postulate. It does not establish the physical applicability of the control model.
