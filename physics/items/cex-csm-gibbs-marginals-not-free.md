---
id: cex-csm-gibbs-marginals-not-free
kind: counterexample
title: "Interacting marginals are not free Gibbs laws"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps: ["lem-csm-lattice-specification-consistency", "def-csm-lattice-gibbs-specification", "lem-csm-finite-gibbs-variational-identity", "def-real-exponential-function-and-e", "cor-exponential-reciprocal-and-positivity", "thm-exponential-is-strictly-increasing"]
justified_by: []
dependency_roles: {"lem-csm-lattice-specification-consistency": "mathematical-premise", "def-csm-lattice-gibbs-specification": "mathematical-premise", "lem-csm-finite-gibbs-variational-identity": "mathematical-premise", "def-real-exponential-function-and-e": "mathematical-premise", "cor-exponential-reciprocal-and-positivity": "mathematical-premise", "thm-exponential-is-strictly-increasing": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
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

## Statement refuted

A finite marginal of an interacting Gibbs chain always equals the free Gibbs law obtained by retaining only interaction terms wholly inside the observed sites.

## Facts & Assumptions

**Given:** A three-site zero-field Ising chain with spins $s_1,s_2,s_3\in\{-1,+1\}$, open-chain Hamiltonian $H=-J(s_1s_2+s_2s_3)$, $\beta>0$, and $J\ne0$.

[A1] Put $K=\beta J$ and define $\sinh K:=(e^K-e^{-K})/2$, $\cosh K:=(e^K+e^{-K})/2$, and $\tanh K:=\sinh K/\cosh K=(e^K-e^{-K})/(e^K+e^{-K})$. The denominator is positive by positivity of the exponential; since $K\ne0$, strict increase gives $e^K\ne e^{-K}$, so $\tanh K\ne0$ ([[def-real-exponential-function-and-e]], [[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-is-strictly-increasing]]).

[A2] The specification uses conditional laws given the exterior; it does not identify them with unconditional finite marginals ([[def-csm-lattice-gibbs-specification]]).

[F1] The finite Gibbs weights are proportional to $e^{-\beta H}$ and have positive finite normalizer ([[lem-csm-finite-gibbs-variational-identity]]).

## Counterexample
1.1 With $K$, $\sinh K$, $\cosh K$, and $\tanh K$ as in [A1], summing over the middle spin gives $Z=2(2\cosh K)^2$ and $\mathbb E(s_1s_3)=\frac{2(2\sinh K)^2}{2(2\cosh K)^2}=\tanh^2K>0$. Thus the endpoint marginal is correlated. [given, A1, F1, algebra]

2.1 The only interaction terms are on bonds $\{1,2\}$ and $\{2,3\}$, so no term is wholly supported on the retained endpoint set $\{1,3\}$. The claimed retained-term free law therefore has zero energy and assigns independent uniform endpoint spins, with correlation zero. This contradicts step 1.1, refuting the statement. [A2, F1, step 1.1, algebra] ∎ 
