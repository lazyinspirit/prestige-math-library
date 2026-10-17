---
id: ex-csm-high-low-temperature-regimes
kind: example
title: "Sufficient Ising uniqueness and coexistence regimes"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps: ["pthm-csm-ising-equilibrium-phases", "def-countable-choice", "post-csm-interacting-equilibrium-gibbs"]
justified_by: []
dependency_roles: {"pthm-csm-ising-equilibrium-phases": "physical-result", "def-countable-choice": "mathematical-premise", "post-csm-interacting-equilibrium-gibbs": "physical-assumption"}
proof_strategy: direct
physical_scope: "Two-dimensional classical nearest-neighbor ferromagnetic Ising with J>0 and positive temperature: the sufficient uniqueness bound holds at every constant finite field energy h, while the stated coexistence bound requires h=0. Conditional mathematical regimes only; no empirical threshold claim."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author PDF, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Appendix, PDF pp. 329–332."
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections (complete 99-page seminar notes)"
      url: "https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf"
      locator: "PDF pp. 20–24, 31–43, and 52–55."
---

## Example

For the two-dimensional nearest-neighbor ferromagnetic Ising model, take coupling energy $J=J_{\rm I}>0$ joules, a constant finite field energy $h\in\mathbb R$ in joules per dimensionless spin, and temperature $T>0$ kelvin, set $\beta=(k_BT)^{-1}$ in $\mathrm{J}^{-1}$, and write $K=\beta J$ (dimensionless). The results on this page give a sufficient high-temperature uniqueness regime $4\tanh K<1$ at every such $h$, and a sufficient low-temperature coexistence regime $K\geq2$ at $h=0$. Parameters outside these sufficient hypotheses are not classified by these bounds. These are conditional model predictions, not measured transition temperatures.

## Facts & Assumptions

**Given:** A two-dimensional nearest-neighbor classical Ising model with $J>0$, $\beta>0$, a constant finite field energy $h$, and the adopted Gibbs-equilibrium interpretation; the coexistence branch additionally assumes $h=0$.

[A1] Gibbs/DLR states are adopted as the equilibrium model for the chosen Hamiltonian and reference ([[post-csm-interacting-equilibrium-gibbs]]).

[A2] Countable Choice is retained in the DLR construction ([[def-countable-choice]]).

[F1] If $4\tanh K<1$, the influence row sum is below one and the DLR state is unique ([[pthm-csm-ising-equilibrium-phases]]).

[F2] For the zero-field model $h=0$, if $K\geq2$, there are distinct stationary DLR states with opposite nonzero magnetizations ([[pthm-csm-ising-equilibrium-phases]]).

## Verification
1.1 For nearest-neighbor interactions in two dimensions, each site has four neighbors, so the sufficient row sum is $4\tanh K$. Thus $4\tanh K<1$ is a sufficient high-temperature uniqueness condition; [F1] is applicable under the stated Countable Choice hypothesis [A2]. [A1, A2, F1, algebra]

2.1 For $h=0$, the low-temperature theorem [F2] applies for $K\geq2$ under [A2]. At other parameter values outside the high-temperature inequality and this zero-field coexistence regime, neither sufficient conclusion applies in this comparison. [A2, F2, step 1.1, algebra]

3.1 The postulate [A1] makes these mathematical DLR conclusions conditional equilibrium-model predictions only. The thresholds are not empirical measurements, and no exact critical point is asserted. [A1, A2, step 1.1, step 2.1] ∎ 
