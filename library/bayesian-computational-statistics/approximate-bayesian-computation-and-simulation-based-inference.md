---
page: approximate-bayesian-computation-and-simulation-based-inference
title: Approximate Bayesian computation and summary-based inference
status: draft
items:
- def-approximate-bayesian-computation
- alg-abc-rejection
- thm-abc-rejection-target-is-tolerance-conditioned-posterior
- thm-abc-zero-tolerance-target-is-summary-posterior-under-density-regularity
- thm-sufficient-summary-recovers-full-posterior
examples: []
---

## Summary

Approximate Bayesian computation starts with a proper prior, standard-Borel parameter and data spaces, a simulator probability kernel, and a measurable Euclidean summary. For an observed summary $s_0$, the indicator method conditions the prior-simulator law on the closed event $\|S(Y)-s_0\|_2\le\epsilon$. The normalized target is defined only when this event has positive prior-predictive probability; its normalizer is then finite because the joint law is a probability measure. At zero event probability no quotient is assigned.

The rejection procedure repeatedly draws independent prior-simulator pairs and accepts the first pair in the tolerance event. Under its positive-acceptance hypothesis, the local theorem proves almost-sure termination and identifies the accepted parameter law exactly with the tolerance-conditioned target. This exact simulation statement supplies neither a finite-run accuracy guarantee nor an expected proposal-count theorem.

The zero-tolerance result requires a specified jointly measurable summary-density version, almost-everywhere continuity at the observed summary, an integrable envelope on a full closed neighborhood, and finite positive density evidence. Under Countable Choice it proves total-variation convergence to that density-selected summary posterior. This identifies the theorem's particular density-based limit; it does not assign a canonical value to every regular conditional distribution on a marginal-null summary fiber.

A separate sufficient-summary theorem uses a parameter-independent conditional-data kernel under AC to recover a full-data posterior version. Its dominated factorization branch cancels the parameter-independent factor only on the stated finite-positive-evidence fibers. Summary information loss, positive-tolerance bias, and Monte Carlo error therefore remain separate questions. The companion examples include both sufficient and insufficient summaries and a failure of zero-tolerance convergence without the local envelope.
