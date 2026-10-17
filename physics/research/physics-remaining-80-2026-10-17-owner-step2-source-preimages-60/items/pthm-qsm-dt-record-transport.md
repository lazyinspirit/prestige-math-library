---
id: pthm-qsm-dt-record-transport
kind: physics-theorem
title: Conditional instrument-record diffusion coefficient
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 9
physical_scope: Conditional finite-model prediction for a specified ideal energy-resolved monitoring instrument, Gibbs initial law, and assigned pointer velocities; it is not a measured spatial diffusion coefficient or a generic quantum hydrodynamic limit.
deps:
  - post-qsm-dt-effective-bath
  - thm-qsm-dt-monitored-transport
  - def-axiom-of-choice
dependency_roles:
  post-qsm-dt-effective-bath: physical-assumption
  thm-qsm-dt-monitored-transport: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Robert Alicki and Karl Lendi, Quantum Dynamical Semigroups and Applications, Lecture Notes in Physics 717, §1.3.4
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/P/PS/PSa/Alicki%20R.%2C%20Lendi%20K.%20Quantum%20dynamical%20semigroups%20and%20applications%20%28LNP0717%2C%20Springer%2C%202007%29%28136s%29_PSa_.pdf
    - title: M. B. Plenio and P. L. Knight, The quantum-jump approach to dissipative dynamics in quantum optics, §§I and IV.A
      url: https://arxiv.org/pdf/quant-ph/9702007
---

## Statement

Assume full AC, [[post-qsm-dt-effective-bath]], and the finite connected Gibbs-jump model with its selected energy-resolved instrument. Prepare the system with diagonal Gibbs law $\pi$. Assign a real pointer velocity $v_a$ in metres per second to each recorded energy label, with $\sum_a\pi_av_a=0$, and define the model record displacement $Y_T=\int_0^T v_{a(s)}\,ds$. Then the conditional model prediction is

$$\mathbb E_\pi[Y_T]=0,\qquad \operatorname{Var}_\pi(Y_T)=2\int_0^T(T-s)C_v(s)\,ds,$$

where $C_v(s)=\sum_a\pi_av_a(e^{sW}v)_a$. The limit

$$D_{\rm rec}:=\lim_{T\to\infty}\frac{\operatorname{Var}_\pi(Y_T)}{2T}=\int_0^\infty C_v(s)\,ds=\langle(-W|_{\pi^\perp})^{-1}v,v\rangle_\pi\geq0$$

exists and has units square metres per second. This is a derived prediction of the adopted record model. It is not a measurement of a system's position, a calibrated material coefficient, or evidence that the microscopic bath obeys the effective model.

## Facts & Assumptions

**Given:** Full AC, the effective-bath and monitoring postulate, the finite Gibbs rate model, the stationary initial law $\pi$, and the specified pointer velocity $v$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; the exact formal use is the joint path construction inherited from [[thm-qsm-dt-monitored-transport]].

[A2] [[post-qsm-dt-effective-bath]]: the selected finite GKSL dynamics and energy-resolved instrument are adopted for the stated time scale; no apparatus calibration or measured rate is supplied.

[F1] [[thm-qsm-dt-monitored-transport]]: under full AC and the connected Gibbs-rate hypotheses, the stationary selected record has the stated finite-time variance formula and limit.

## Proof

1.1 The assumptions [A1]–[A2] identify the selected, ideal energy-resolved instrument and its Gibbs initial law; the velocity labels are stipulated model observables. They introduce no empirical premise. [given, A1, A2]

2.1 Applying [F1] with these exact rates, initial law, and centered velocities yields the displayed finite-time variance, resolvent formula, nonnegativity, and limit. The conclusion remains conditional on the adopted model and instrument. [given, F1, step 1.1] ∎

## Remarks

The stochastic record is the selected instrument output. It is not a continuous position trajectory and does not follow uniquely from the one-time GKSL channel family.
