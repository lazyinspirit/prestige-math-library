---
id: thm-csm-ising-high-temperature-state
kind: theorem
title: "Unique interacting Ising state at sufficient high temperature"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 5
deps: ["thm-csm-dobrushin-finite-range-uniqueness", "lem-csm-ising-influence-bound", "def-countable-choice", "def-csm-lattice-gibbs-specification", "lem-csm-lattice-specification-consistency"]
justified_by: []
dependency_roles: {"thm-csm-dobrushin-finite-range-uniqueness": "mathematical-premise", "lem-csm-ising-influence-bound": "mathematical-premise", "def-countable-choice": "mathematical-premise", "def-csm-lattice-gibbs-specification": "mathematical-premise", "lem-csm-lattice-specification-consistency": "mathematical-premise"}
proof_strategy: direct
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

Assume Countable Choice, spins $s_i\in\{-1,+1\}$, inverse temperature $\beta>0$, a constant finite field $h\in\mathbb R$, and symmetric pair couplings satisfying $J_{ij}=J_{ji}$, $J_{i+k,j+k}=J_{ij}$ for all $i,j,k\in\mathbb Z^d$, and $J_{ij}=0$ when $\|i-j\|_\infty>R$ for some finite $R$. For finite $\Lambda$, use the conditional energy
$$E_\Lambda(s_\Lambda\mid\eta)=-\sum_{\{i,j\}:\{i,j\}\cap\Lambda\ne\varnothing}J_{ij}\widehat s_i\widehat s_j-h\sum_{i\in\Lambda}s_i,$$
where $\widehat s_i=s_i$ on $\Lambda$ and $\widehat s_i=\eta_i$ outside; let $\gamma$ be the corresponding finite-alphabet Gibbs specification from [[def-csm-lattice-gibbs-specification]]. If
$$\sup_i\sum_j\tanh(\beta|J_{ij}|)<1,$$
then there exists exactly one DLR state. For homogeneous nearest-neighbor coupling $J$ this sufficient condition is $2d\tanh(\beta|J|)<1$. It is not asserted to be sharp.

## Facts & Assumptions

**Given:** The finite-range Ising pair Hamiltonian and one-site conditional Gibbs laws in the Statement, with $\beta>0$ and constant finite field $h$.

[A1] Countable Choice supplies the DLR existence theorem in the finite-alphabet product space ([[def-countable-choice]]).

[F1] The one-site influence satisfies $c_{ij}\leq\tanh(\beta|J_{ij}|)$ for this Hamiltonian normalization ([[lem-csm-ising-influence-bound]]).

[F2] A finite-range specification with strict influence row sum $c<1$ has exactly one DLR state ([[thm-csm-dobrushin-finite-range-uniqueness]]).

[F3] The finite-range lattice Gibbs kernels are proper, consistent and finite range under the stated hypotheses ([[lem-csm-lattice-specification-consistency]]).

## Proof
1.1 By [F1], $\sup_i\sum_jc_{ij}\leq\sup_i\sum_j\tanh(\beta|J_{ij}|)<1$. [given, F1, algebra]

2.1 By [F3], the pair interaction and constant field define a proper consistent finite-range specification. Apply [F2] with the row-sum bound from step 1.1; the compactness-based existence and uniqueness conclusion holds under Countable Choice. This criterion is sufficient only. [A1, F2, F3, step 1.1] ∎ 