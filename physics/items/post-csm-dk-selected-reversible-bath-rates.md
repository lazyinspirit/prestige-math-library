---
id: post-csm-dk-selected-reversible-bath-rates
kind: postulate
title: "Adopted finite reversible bath rates and field coupling"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 1
deps:
  - def-csm-dk-finite-reversible-rate-model
  - post-csm-dk-selected-thermal-langevin-bath
  - def-axiom-of-choice
dependency_roles:
  def-csm-dk-finite-reversible-rate-model: formulation-prerequisite
  post-csm-dk-selected-thermal-langevin-bath: formulation-prerequisite
  def-axiom-of-choice: mathematical-premise
physical_scope: "A prescribed connected finite-state rate network at one fixed positive temperature, initialized in its Gibbs stationary law for the equilibrium-response branch, with the explicitly selected symmetric exponential field coupling. No microscopic Hamiltonian reduction, rate calibration, or unique bath prefactor is asserted."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Udo Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/pdf/1205.4176"
      locator: "§§6.1–6.2, §8.1.1, §8.2.4 and §9.4.5: master equations, equilibrium fluctuation response, local detailed balance and the freedom in rate prefactors."
    - title: "David Aldous and James Allen Fill, Reversible Markov Chains and Random Walks on Graphs"
      url: "https://www.stat.berkeley.edu/~aldous/RWG/book.pdf"
      locator: "Chapter 2 §2.1.2 and Chapter 3 §§3.1–3.2: continuous-time transition rates, generators, stationarity and detailed balance."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Postulate

Use the finite state set, energies $e_a$, rates $w_{ab}$, Gibbs weights $\pi_a$, and row generator $Q$ defined in [[def-csm-dk-finite-reversible-rate-model]]. Assign the state energies the physical meaning of coarse-state energies in joules. Use the primitive SI Boltzmann constant $k_B$ in joules per kelvin from [[post-csm-dk-selected-thermal-langevin-bath]], and set $\beta=(k_BT_b)^{-1}$ in joules$^{-1}$ for the positive bath-temperature parameter $T_b$ in kelvins. Adopt the baseline transition rates $w_{ab}$ in seconds$^{-1}$ and the initial law $p_0=\pi$ for the equilibrium-response branch. These choices define a finite phenomenological thermal rate model; they do not say that a real material has these rates.

Fix a finite time horizon $t_f>0$. For a fixed state observable $B:E\to\mathbb R$ with units denoted $[B]$, a dimensionless control amplitude $\epsilon$, and a continuous field $h:[0,t_f]\to\mathbb R$ with units joules per $[B]$, adopt the controlled rates

$$w_{ab}^{\epsilon}(t)=w_{ab}\exp\!\left(\frac{\beta\epsilon h(t)}2(B_b-B_a)\right),\qquad a\ne b.$$

Their units remain seconds$^{-1}$ because the exponent is dimensionless. This is one explicit symmetric allocation of the field-dependent rate factor. For constant $h$ and each positive-rate edge ($w_{ab}>0$, equivalently $w_{ba}>0$), the rate ratio obeys

$$\frac{w_{ab}^{\epsilon}}{w_{ba}^{\epsilon}}=\exp\!\left(-\beta\left[(e_b-\epsilon hB_b)-(e_a-\epsilon hB_a)\right]\right),$$

so the Gibbs weights of the shifted energies $e_a-\epsilon hB_a$ satisfy detailed balance by direct multiplication on every positive-rate edge. For an absent edge, both controlled rates remain zero, so the detailed-balance product identity holds there as well; no rate ratio is defined there. A rate ratio alone leaves state-pair prefactors undetermined; the symmetric splitting above is an additional modeling choice and is the specific perturbation analyzed in the consuming theorem. No experiment or empirical rate estimate is asserted.
