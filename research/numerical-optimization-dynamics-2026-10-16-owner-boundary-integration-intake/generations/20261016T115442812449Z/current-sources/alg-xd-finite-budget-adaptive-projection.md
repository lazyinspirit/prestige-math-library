---
id: alg-xd-finite-budget-adaptive-projection
kind: algorithm
title: "Finite-budget adaptive finite-state projection"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-xd-finite-state-projection-and-cemetery-lift
  - thm-xd-finite-state-projection-loss-and-observable-bound
  - alg-xd-budgeted-uniformization-accumulation
  - thm-xd-uniformization-truncation-and-error
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Brian Munsky and Mustafa Khammash, The Finite State Projection Algorithm for the Solution of the Chemical Master Equation"
      url: "https://www.engr.colostate.edu/~munsky/Papers/JChemPhys_124_044104.pdf"
      locator: "§III, printed pp. 044104-4–044104-5; a finite projection is enlarged only after checking its computed mass certificate."
verification:
  precheck: n/a
---

## Definition

**Inputs.** A given nonexplosive chain $X$ and initial law $p_0$; a finite positive integer $N$ and an explicitly supplied nested list of nonempty finite sets $F_1\subseteq\cdots\subseteq F_N$; for each $F_i$, its exact finite cemetery-lift generator $\widetilde Q_{F_i}$ and lifted initial vector from [[def-xd-finite-state-projection-and-cemetery-lift]]; final time $T\ge0$; tolerance $\varepsilon>0$; a positive integer per-projection term cap $B$; and an arithmetic mode that is either exact real arithmetic or a validated arithmetic backend satisfying the requirements below and of [[alg-xd-budgeted-uniformization-accumulation]].

The supplied lift data must be the exact rates and initial masses of the given chain. An implementation may obtain the cemetery rate from the exact exit rate minus the finite sum of within-$F_i$ rates. A validated backend must certify the lift-rate calculation and its admissibility, the solver's scalar and vector certificates, and an outward enclosure of each computed cemetery coordinate, including the certified arithmetic/algebraic error required by [[thm-xd-uniformization-truncation-and-error]]; if any required certificate is unavailable, the corresponding projection is uncertified.

**Procedure.** For $i=1,\ldots,N$ in order:

1. Let $r_{i,z}:=-(\widetilde Q_{F_i})_{zz}$ for $z\in F_i\cup\{\dagger\}$ and set $\nu_i:=\max_{z\in F_i\cup\{\dagger\}}r_{i,z}=\max_{x\in F_i}\lambda(x)$; this includes the cemetery state's zero exit rate. If a validated backend cannot certify $\nu_i$ and its admissibility, treat the solver status as `certificate-unavailable`. Otherwise apply [[alg-xd-budgeted-uniformization-accumulation]] to $(\widetilde Q_{F_i},\widetilde p_{F_i,0},T)$ with admissible rate $\nu_i$, positive tail budget $\varepsilon$, term cap $B$, and the supplied arithmetic mode. If $\nu_i=0$, use the solver's zero-rate branch. If the status is `budget-exhausted` or `certificate-unavailable`, or the exact lift data are unavailable, return `inconclusive` with the statuses and all completed projection records; do not skip an uncertified projection.
2. Let $\widehat c_i$ be the computed cemetery coordinate. If the solver returns tail and arithmetic/algebraic error bounds $T_i$ and $E_{{\rm alg},i}$, put $\delta_i:=T_i+E_{{\rm alg},i}$, the total certified $\ell^1$ error bound. Form the outward-certified interval
   $$L_i=\max(0,\widehat c_i-\delta_i),\qquad U_i=\min(1,\widehat c_i+\delta_i).$$
   Record $F_i$, $\nu_i$, the computed vector, $\widehat c_i$, $[L_i,U_i]$, its tail bound $T_i$, and its arithmetic/algebraic error $E_{{\rm alg},i}$.
3. If exact comparison or validated interval arithmetic certifies $U_i\le\varepsilon$, return `certified` with this projection and its record.

If all $N$ projections have valid records but none passes the tolerance, return `inconclusive` with every record. The algorithm uses at most $N$ projections and $NB$ uniformization terms. It makes no claim that some finite projection outside this supplied list meets $\varepsilon$.
