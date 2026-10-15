---
page: euler-maruyama-convergence-examples
title: "Euler–Maruyama Strong and Weak Convergence — Examples"
status: draft
items: []
examples:
  - ex-euler-maruyama-additive-noise-strong-error
  - ex-euler-maruyama-weak-order-one-for-ornstein-uhlenbeck
  - ex-learned-drift-bias-is-not-solver-error
  - ex-shared-brownian-euler-level-coupling-rates
---

These examples check the rate contracts on the Ornstein–Uhlenbeck equation,
including a terminal strong error with an explicit $O(h)$ root-mean-square
bound and a cosine payoff with verified backward regularity for weak order one.
A constant learned-drift error remains even when the Euler solver is exact for
the learned equation. The final example couples fine and coarse Euler paths
with summed Brownian increments and verifies the $O(h)$ correction variance,
$O(h^{1/2})$ strong-route bias, and $O(h^{-1})$ work per path pair.
