---
id: pthm-csm-ising-equilibrium-phases
kind: physics-theorem
title: "Conditional Ising equilibrium phase predictions"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps: ["post-csm-interacting-equilibrium-gibbs", "thm-csm-ising-high-temperature-state", "thm-csm-ising-low-temperature-coexistence", "thm-csm-ising-coexistence-pressure-cusp", "thm-csm-chain-dlr-uniqueness", "def-countable-choice"]
justified_by: []
dependency_roles: {"post-csm-interacting-equilibrium-gibbs": "physical-assumption", "thm-csm-ising-high-temperature-state": "mathematical-premise", "thm-csm-ising-low-temperature-coexistence": "mathematical-premise", "thm-csm-ising-coexistence-pressure-cusp": "mathematical-premise", "thm-csm-chain-dlr-uniqueness": "mathematical-premise", "def-countable-choice": "mathematical-premise"}
proof_strategy: direct
physical_scope: "One-dimensional finite-temperature nearest-neighbor Ising and two-dimensional nearest-neighbor ferromagnetic Ising in the stated sufficient regimes; no measured critical point or universal phase diagram."
empirical_premises: []
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

## Statement

Assume Countable Choice and adopt [[post-csm-interacting-equilibrium-gibbs]] for the specified classical Ising model. The conditional model predictions are: (i) for a one-dimensional nearest-neighbor chain with finite $\beta>0$, $J,h\in\mathbb R$, the DLR equilibrium state is unique; (ii) for a translation-invariant finite-range Ising pair interaction with constant finite field, the sufficient condition $\sup_i\sum_j\tanh(\beta|J_{ij}|)<1$ gives a unique DLR equilibrium state; and (iii) for the two-dimensional nearest-neighbor ferromagnet at $h=0$ and $\beta J\geq2$, there are distinct stationary DLR equilibrium states with opposite nonzero magnetization and the pressure is nondifferentiable in $h$ at zero. These deductions are restricted to the stated classical model; they do not report a measured transition or infer a phase diagram between the sufficient regimes.

## Facts & Assumptions

**Given:** A specified classical Ising Hamiltonian, $\beta>0$, finite-range couplings and fields as stated, Countable Choice, and the adopted Gibbs-equilibrium postulate.

[A1] The equilibrium interpretation is an adopted model assumption, not a theorem about equilibration or nature ([[post-csm-interacting-equilibrium-gibbs]]).

[A2] Countable Choice is used in the lattice probability construction ([[def-countable-choice]]).

[F1] The one-dimensional finite-temperature Ising chain has exactly one DLR state ([[thm-csm-chain-dlr-uniqueness]]).

[F2] Under a strict Ising influence row-sum bound, the finite-range DLR state is unique ([[thm-csm-ising-high-temperature-state]]).

[F3] At $\beta J\geq2$ in two dimensions, plus and minus stationary DLR states with nonzero opposite magnetizations exist ([[thm-csm-ising-low-temperature-coexistence]]).

[F4] Those coexistence states force nondifferentiability of the field-dependent pressure at $h=0$ ([[thm-csm-ising-coexistence-pressure-cusp]]).

## Proof
1.1 Apply [F1] to the one-dimensional model to obtain uniqueness of its mathematical DLR equilibrium state; by the adoption [A1], this is the model's unique equilibrium-state prediction under the stated conditions. [A1, F1]

1.2 Under [A2], apply [F2] whenever its strict influence sum is below one. This is a sufficient uniqueness regime and makes no assertion about parameters where the sum is at least one. [A1, A2, F2]

1.3 In the stated two-dimensional low-temperature regime, [F3] supplies two stationary DLR states with magnetizations separated from zero. [A1, A2, F3]

2.1 By [F4], their variational inequalities force a nonzero gap between the left and right pressure secant slopes. Thus coexistence and the cusp follow conditionally from the adopted postulate and the stated parameters; no empirical accuracy or exact critical value is inferred. [A1, F4, step 1.3] ∎ 