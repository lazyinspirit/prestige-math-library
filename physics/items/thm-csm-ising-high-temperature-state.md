---
id: thm-csm-ising-high-temperature-state
kind: theorem
title: "Unique interacting Ising state at sufficient high temperature"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 5
deps: ["thm-csm-dobrushin-finite-range-uniqueness", "lem-csm-ising-influence-bound", "def-countable-choice", "def-csm-lattice-gibbs-specification", "lem-csm-lattice-specification-consistency", "def-csm-finite-range-lattice-interaction", "thm-csm-lattice-dlr-existence"]
justified_by: []
dependency_roles: {"thm-csm-dobrushin-finite-range-uniqueness": "mathematical-premise", "lem-csm-ising-influence-bound": "mathematical-premise", "def-countable-choice": "mathematical-premise", "def-csm-lattice-gibbs-specification": "mathematical-premise", "lem-csm-lattice-specification-consistency": "mathematical-premise", "def-csm-finite-range-lattice-interaction": "mathematical-premise", "thm-csm-lattice-dlr-existence": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author PDF, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Chapter 6 §6.12, PDF pp. 329–332 (printed pp. 311–314)."
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections (complete 99-page seminar notes)"
      url: "https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf"
      locator: "PDF pp. 20–24, 31–43, and 52–55."
---

## Statement

Assume Countable Choice, spins $s_i\in\{-1,+1\}$, inverse temperature $\beta>0$, a constant finite field $h\in\mathbb R$, and symmetric pair couplings with zero diagonal, $J_{ij}=J_{ji}$ and $J_{ii}=0$, satisfying $J_{i+k,j+k}=J_{ij}$ for all $i,j,k\in\mathbb Z^d$, and $J_{ij}=0$ when $\|i-j\|_\infty>R$ for some finite integer $R\geq0$. For finite $\Lambda$, use the conditional energy
$$E_\Lambda(s_\Lambda\mid\eta)=-\sum_{\{i,j\}:\{i,j\}\cap\Lambda\ne\varnothing}J_{ij}\widehat s_i\widehat s_j-h\sum_{i\in\Lambda}s_i,$$
where $\widehat s_i=s_i$ on $\Lambda$ and $\widehat s_i=\eta_i$ outside; let $\gamma$ be the corresponding finite-alphabet Gibbs specification from [[def-csm-lattice-gibbs-specification]]. If
$$\sup_i\sum_j\tanh(\beta|J_{ij}|)<1,$$
then there exists exactly one DLR state. For homogeneous nearest-neighbor coupling $J$ this sufficient condition is $2d\tanh(\beta|J|)<1$. It is not asserted to be sharp.

## Facts & Assumptions

**Given:** The finite-range Ising pair Hamiltonian and one-site conditional Gibbs laws in the Statement, with $\beta>0$ and constant finite field $h$.

[A1] Assume Countable Choice: every countable family of nonempty sets admits a choice function ([[def-countable-choice]]). Under that assumption, every proper consistent cylinder-local specification on this finite-alphabet product has a DLR state ([[thm-csm-lattice-dlr-existence]]).

[F1] The one-site influence satisfies $c_{ij}\leq\tanh(\beta|J_{ij}|)$ for this Hamiltonian normalization ([[lem-csm-ising-influence-bound]]).

[F2] A finite-range specification with strict influence row sum $c<1$ has exactly one DLR state ([[thm-csm-dobrushin-finite-range-uniqueness]]).

[F3] The finite-range lattice Gibbs kernels are proper, consistent and finite range under the stated hypotheses ([[lem-csm-lattice-specification-consistency]]).

[F4] To realize the displayed pair Hamiltonian in the interaction-list convention of [[def-csm-finite-range-lattice-interaction]], choose one displacement $v$ from each pair $\{v,-v\}$ with $J_{0v}\ne0$, use shape $S_v=\{0,v\}$ and term $\Phi_v(s_0,s_v)=-J_{0v}s_0s_v$, and add the onsite shape $S_0=\{0\}$ with $\Phi_0(s_0)=-hs_0$. Every unordered pair is counted once through its unique representative and translated anchor; this finite list has uniform one-site dependence radius at most $R$.

## Proof

1.1 By [F1], $\sup_i\sum_jc_{ij}\leq\sup_i\sum_j\tanh(\beta|J_{ij}|)<1$. [given, F1, algebra]

2.1 The interaction list in [F4] has exactly the conditional energy displayed in the Statement: each unordered pair occurs once, and each site contributes the single field term $-hs_i$. Thus [F3] gives its proper consistent finite-range Gibbs specification. Existence follows from [A1] for this specification. Apply [F2] with the uniform radius in [F4] and row-sum bound from step 1.1 to obtain uniqueness. This criterion is sufficient only. [A1, F2, F3, F4, step 1.1] ∎
