---
id: ex-csm-chain-analytic-interacting-model
kind: example
title: "Analytic interacting chain and its Gibbs state"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps: ["thm-csm-chain-dlr-uniqueness", "thm-csm-ising-chain-convergent-series", "post-csm-interacting-equilibrium-gibbs", "def-countable-choice", "lem-csm-chain-markov-bridge"]
justified_by: []
dependency_roles: {"thm-csm-chain-dlr-uniqueness": "mathematical-premise", "thm-csm-ising-chain-convergent-series": "mathematical-premise", "post-csm-interacting-equilibrium-gibbs": "physical-assumption", "def-countable-choice": "mathematical-premise", "lem-csm-chain-markov-bridge": "mathematical-premise"}
proof_strategy: direct
physical_scope: "One-dimensional classical nearest-neighbor Ising model at finite positive temperature; exact conditional model example, not experimental evidence."
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

For a one-dimensional zero-field nearest-neighbor Ising chain with $J>0$ and $\beta>0$, let $K=\beta J$. The thermodynamic pressure is $p(K)=\log(2\cosh K)$, the infinite-volume DLR law is a stationary Markov chain, and for $K<1/2$ its pressure has the convergent series from [[thm-csm-ising-chain-convergent-series]]. Under the adopted Gibbs-equilibrium postulate this is a conditional model example, not an experimental observation.

## Facts & Assumptions

**Given:** The finite-range one-dimensional Ising model, $J>0$, $\beta>0$, and the adopted classical equilibrium interpretation.

[F1] The chain's positive transfer matrix yields a unique stationary Markov DLR law ([[lem-csm-chain-markov-bridge]], [[thm-csm-chain-dlr-uniqueness]]).

[F2] The zero-field chain pressure has the absolutely convergent series for $|K|<1/2$ ([[thm-csm-ising-chain-convergent-series]]).

[F3] Gibbs/DLR states are adopted as the equilibrium model for the chosen Hamiltonian and reference ([[post-csm-interacting-equilibrium-gibbs]]).

[A1] Countable Choice is carried by the chain measure construction ([[def-countable-choice]]).

## Verification
1.1 The transfer-matrix bridge in [F1] supplies a stationary Markov probability with the finite-volume endpoint limits, and the DLR uniqueness theorem identifies it as the sole infinite-volume DLR state. [A1, F1]

1.2 The limiting pressure is $\log(2\cosh K)$ by [F2]; when $0<K<1/2$, the displayed power series converges absolutely and uniformly on compact subintervals. [F2, algebra]

2.1 The physical reading is conditional on [F3]. It predicts the named Gibbs state for this classical model only; it does not claim a measured pressure, equilibration, or agreement with a particular material. [F3, step 1.1, step 1.2] ∎ 