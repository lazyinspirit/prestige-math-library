---
id: lem-csm-ising-influence-bound
kind: lemma
title: "Ising influence bounded by hyperbolic tangent"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps: ["def-csm-finite-range-lattice-interaction"]
justified_by: []
dependency_roles: {"def-csm-finite-range-lattice-interaction": "mathematical-premise"}
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

For a finite-range Ising pair interaction on $\mathbb Z^d$ with spins $s_i\in\{-1,+1\}$, energy $-\sum_{\{i,j\}}J_{ij}s_is_j-\sum_i h_i s_i$, finite couplings, and $\beta>0$, let $\gamma_i(\cdot\mid\eta)$ be the one-site conditional Gibbs law. Define $c_{ij}$ as the supremum of the half-total-variation distance between $\gamma_i(\cdot\mid\eta)$ and $\gamma_i(\cdot\mid\eta')$ over boundaries differing only at $j$. Then $c_{ij}=0$ if no interaction term joins $i$ to $j$, and otherwise
$$c_{ij}\leq\tanh(\beta|J_{ij}|).$$
In particular, $\sup_i\sum_j\tanh(\beta|J_{ij}|)<1$ is a sufficient Dobrushin row-sum bound for every bounded field profile $(h_i)$.

## Facts & Assumptions

**Given:** The finite-range interaction convention and conditional energy of [[def-csm-finite-range-lattice-interaction]], the Ising pair energy in the Statement, and $\beta>0$.

[F1] A finite-range interaction has only finitely many sites in each interaction neighborhood, and its conditional energy depends only on those boundary spins ([[def-csm-finite-range-lattice-interaction]]).

## Proof
1.1 Fix $i$ and all boundary spins except $j$. Write $x=\beta(h_i+\sum_{k\ne j}J_{ik}\eta_k)$ and $b=\beta J_{ij}$. Direct normalization of the two weights gives $\gamma_i(+1\mid\eta)=[1+\tanh(x+b)]/2$ and $\gamma_i(+1\mid\eta')=[1+\tanh(x-b)]/2$. [given, F1, algebra]

2.1 For Bernoulli laws the half-total-variation distance equals the absolute difference of the probabilities of $+1$. Using $\cosh(x+b)\cosh(x-b)=(\cosh(2x)+\cosh(2b))/2\geq\cosh^2 b$, their difference is at most $|\sinh(2b)|/(2\cosh^2 b)=\tanh|b|$. If no term joins $i,j$, the conditional weights are identical and $c_{ij}=0$. [step 1.1, algebra]

3.1 Summing the bound in step 2.1 over the finite interaction neighborhood proves the stated sufficient row-sum criterion; the supremum over $i$ is the Dobrushin constant used by the uniqueness theorem. [F1, step 2.1] ∎ 