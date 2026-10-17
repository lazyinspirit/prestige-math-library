---
id: ex-qsm-dt-qubit-record-diffusion
kind: example
title: Exact centered qubit-record displacement variance
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 9
deps:
  - thm-qsm-dt-gibbs-jump
  - thm-qsm-dt-monitored-transport
  - def-axiom-of-choice
dependency_roles:
  thm-qsm-dt-gibbs-jump: mathematical-premise
  thm-qsm-dt-monitored-transport: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: David Aldous and James Allen Fill, Reversible Markov Chains and Random Walks on Graphs, Chapters 2–3
      url: https://www.stat.berkeley.edu/~aldous/RWG/book.pdf
    - title: M. B. Plenio and P. L. Knight, The quantum-jump approach to dissipative dynamics in quantum optics, §IV.1 “Quantum jumps” and §IV.3 “Simulation of single trajectories”
      url: https://arxiv.org/pdf/quant-ph/9702007
---

## Example

Assume full AC and initialize the selected energy-resolved record with the Gibbs law $\pi$. Use the two energy states $|0\rangle,|1\rangle$ of [[thm-qsm-dt-gibbs-jump]] with energies $E_0=\Delta/2$ and $E_1=-\Delta/2$, where $\Delta>0$ is in joules and $\beta>0$ is in joules$^{-1}$. Let $a>0$ be the rate from $0\to1$ and $b>0$ the rate from $1\to0$, both in seconds$^{-1}$, with $b/a=e^{-\beta\Delta}$. The stationary mean is $z_{\rm eq}:=(b-a)/(a+b)$. Write $Z=\operatorname{diag}(1,-1)$ and let $u$ be a speed scale in metres per second; assign centered pointer velocities $v_a=u(Z_{aa}-z_{\rm eq})$. The monitored record displacement $Y_T=\int_0^T v_{a(s)}ds$ has

$$C_v(s)=u^2(1-z_{\rm eq}^2)e^{-(a+b)s},$$

and exact variance

$$\operatorname{Var}(Y_T)=2u^2(1-z_{\rm eq}^2)\left[\frac{T}{a+b}-\frac{1-e^{-(a+b)T}}{(a+b)^2}\right].$$

Consequently

$$\lim_{T\to\infty}\frac{\operatorname{Var}(Y_T)}{2T}=\frac{u^2(1-z_{\rm eq}^2)}{a+b}.$$

This is a variance of the selected classical record with units of squared metres. The record is not asserted to be a continuous quantum position or an experimental velocity.

## Facts & Assumptions

**Given:** Full AC, a two-state connected Gibbs jump model, its ideal energy-resolved record instrument, and $u\in\mathbb R$ in metres per second.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function, retained by the finite joint-path supplier.

[F1] [[thm-qsm-dt-monitored-transport]]: for the stationary selected record and any centered real velocity labels, the covariance integral and variance formulas hold.

[F2] [[thm-qsm-dt-gibbs-jump]]: for energies $E_0=\Delta/2,E_1=-\Delta/2$, the Gibbs weights obey detailed balance with the stated rates, and diagonal populations follow the two-state generator.

## Verification

1.1 The Gibbs weights are $\pi_0=b/(a+b)$ and $\pi_1=a/(a+b)$: their ratio is $b/a=e^{-\beta\Delta}=e^{-\beta(E_0-E_1)}$, and they sum to one. Thus $\pi_0a=\pi_1b$ and $\pi(v)=0$. The two-state generator has centered eigenvector $Z-z_{\rm eq}I$ with eigenvalue $-(a+b)$; therefore $e^{sW}v=e^{-(a+b)s}v$ and $\langle v,v\rangle_\pi=u^2(1-z_{\rm eq}^2)$. [given, F2, algebra]

2.1 Substituting this covariance into [F1] gives
$$
\operatorname{Var}(Y_T)=2u^2(1-z_{\rm eq}^2)\int_0^T(T-s)e^{-(a+b)s}\,ds.
$$
Evaluating the integral gives the displayed finite-time formula. Dividing by $2T$ and letting $T\to\infty$ gives $u^2(1-z_{\rm eq}^2)/(a+b)$. [A1, F1, step 1.1, algebra] ∎
