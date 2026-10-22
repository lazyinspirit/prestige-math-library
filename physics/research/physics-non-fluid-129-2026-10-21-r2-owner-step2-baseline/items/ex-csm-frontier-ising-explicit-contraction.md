---
id: ex-csm-frontier-ising-explicit-contraction
kind: example
title: "Nearest-neighbor Ising influence bound"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-frontier-dobrushin-matrix
  - lem-csm-ising-influence-bound
  - thm-csm-frontier-dobrushin-comparison
dependency_roles:
  def-csm-frontier-dobrushin-matrix: mathematical-premise
  lem-csm-ising-influence-bound: mathematical-premise
  thm-csm-frontier-dobrushin-comparison: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author-hosted book, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, §3.1, finite-volume Ising Gibbs distributions with boundary conditions, printed pp. 80–82 (PDF pp. 97–99); Chapter 6, §6.5.2, Dobrushin coefficients and uniqueness, printed pp. 268–271 (PDF pp. 285–288)."
    - title: "Patrick Rebeschini and Ramon van Handel, Comparison Theorems for Gibbs Measures"
      url: "https://arxiv.org/pdf/1308.4117"
      locator: "§2.3, Corollary 2.6, the finite-spin single-site Dobrushin comparison criterion, PDF pp. 8–9."
---

## Example

Let $d\geq1$, let spins take values in $\{-1,+1\}$, fix $\beta>0$ and $J\in\mathbb R$, and let $h_i\in\mathbb R$ be any finite field profile. Put $J_{ij}=J$ when $\lVert i-j\rVert_1=1$ and $J_{ij}=0$ otherwise, with $J_{ii}=0$. For each finite volume use the pair-interaction conditional energy and finite-alphabet Gibbs specification. Its one-site Dobrushin coefficients satisfy $c_{ij}\leq\tanh(\beta|J|)$ for each nearest neighbor $j$ of $i$, and $c_{ij}=0$ for every other $j$. Consequently, if

$$2d\tanh(\beta|J|)<1,$$

then this influence matrix has row sums strictly below $1$. More generally, the same condition supplies a common strict row-sum envelope for any two such specifications with possibly different finite field profiles, so the Dobrushin comparison estimate applies. The criterion is sufficient and is not asserted to be the exact phase-transition threshold.

## Example references

[[def-csm-frontier-dobrushin-matrix]]

[[lem-csm-ising-influence-bound]]

[[thm-csm-frontier-dobrushin-comparison]]

## Facts & Assumptions

**Given:** The nearest-neighbor Ising couplings and arbitrary finite field profile in the Statement.

[F1] For the finite-range Ising conditional energy, changing only boundary spin $j$ changes the one-site law at $i$ by at most $\tanh(\beta|J_{ij}|)$ in half-total-variation distance; it gives zero influence when $J_{ij}=0$ ([[lem-csm-ising-influence-bound]]).

[F2] A common nonnegative influence envelope with row sum strictly below $1$ gives the finite-volume and infinite-volume Dobrushin comparison inequalities ([[thm-csm-frontier-dobrushin-comparison]]).

## Verification

1.1 For each site $i\in\mathbb Z^d$, the condition $\lVert i-j\rVert_1=1$ holds for exactly $2d$ distinct sites $j$. By [F1], each of these coefficients is at most $\tanh(\beta|J|)$ and all remaining coefficients vanish, so $\sum_jc_{ij}\leq2d\tanh(\beta|J|)$ for every $i$. [given, F1, algebra]

2.1 If $2d\tanh(\beta|J|)<1$, the displayed influence row bound is strict. For two specifications with the same nearest-neighbor coupling magnitude and different finite field profiles, the same coefficient bound holds for each, so their pointwise maximum is a common envelope with row sum below $1$. Apply [F2] to obtain the comparison estimate. The inequality is only sufficient; it makes no claim that failure of the bound entails nonuniqueness. [given, F1, F2, step 1.1, algebra] ∎
