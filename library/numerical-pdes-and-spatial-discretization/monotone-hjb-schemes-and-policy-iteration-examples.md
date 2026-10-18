---
page: monotone-hjb-schemes-and-policy-iteration-examples
title: "Monotone Hamilton–Jacobi–Bellman schemes and policy iteration — Examples"
status: draft
items: []
examples:
  - cex-na-centered-hjb-update-is-not-monotone
  - ex-na-discounted-control-switching-policy-iteration
  - ex-na-diagonal-diffusion-manufactured-solution
  - ex-na-compact-control-quantization-hamiltonian-error
  - ex-na-eikonal-kink-monotone-hjb-updates
---

These five worked cases test the page’s finite-control algorithms and their hypotheses.

## A centered update can reverse order

[[cex-na-centered-hjb-update-is-not-monotone]] computes a periodic nodal array pair for which a centered HJB update decreases at a node when the input array is increased. It isolates failure of monotonicity as a distinct obstruction to the half-relaxed convergence argument.

## Exact two-state policy switching

[[ex-na-discounted-control-switching-policy-iteration]] gives a two-state discounted generator system with two actions at state $1$ and three at state $2$. It solves the policy equations exactly, exhibits a strict improvement, checks deterministic tie retention, and verifies the terminal Bellman equation.

## A manufactured diagonal-diffusion solution

[[ex-na-diagonal-diffusion-manufactured-solution]] chooses smooth periodic data and forcing, computes the continuous operator and the finite-grid residual, and verifies the declared diffusion-dominance and CFL conditions along the mesh family.

## Compact-control quantization

[[ex-na-compact-control-quantization-hamiltonian-error]] uses an evenly spaced finite action grid for a compact scalar control interval. It computes a uniform Hamiltonian approximation error on bounded momentum sets and checks that the error input required by the first-order scheme vanishes.

## An eikonal kink

[[ex-na-eikonal-kink-monotone-hjb-updates]] evaluates both positive-interpolation and upwind updates at a periodic kink. The exact nodal calculations show how the two monotone branches represent nonsmooth first-order data under their stated mesh conditions.
