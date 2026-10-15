---
page: euler-maruyama-convergence
title: "Euler–Maruyama Strong and Weak Convergence"
status: draft
items:
  - alg-euler-maruyama-autonomous
  - lem-brownian-ito-integral-l1-maximal-bound
  - lem-euler-maruyama-autonomous-interpolation-increment-moments
  - thm-euler-maruyama-strong-rate-under-higham-mao-stuart-hypotheses
  - thm-euler-maruyama-strong-rate-for-square-integrable-initial-data
  - thm-euler-maruyama-weak-order-one-under-backward-regularity
  - thm-shared-brownian-euler-level-correction-rates
examples: []
---

This page separates three Euler–Maruyama error contracts. Under global state
Lipschitz, linear growth, a half-Hölder time modulus and only a finite second
moment at the start, the continuous interpolation has mean-square supremum
error $O(h)$, hence root-mean-square error $O(h^{1/2})$. A separate autonomous
Higham–Mao–Stuart theorem gives the same rate under its one-sided-Lipschitz,
polynomial-local-Lipschitz and all-moment premises. Weak order one is proved
conditionally on explicit backward Kolmogorov regularity, mixed derivatives
and the $p\ge2q+8$ moment bound. Nested fine/coarse Brownian increments then
give correction variance $O(h)$ and cost $O(h^{-1})$; the bias exponent is
$1/2$ from the strong contract and improves to $1$ only under the weak
contract. No theorem here bounds learned-drift or learned-score bias.
