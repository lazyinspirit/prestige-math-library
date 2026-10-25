---
page: approximate-bayesian-computation-and-simulation-based-inference-examples
title: Approximate Bayesian computation and simulation-based inference — Examples
status: published
items: []
examples:
- cex-abc-zero-tolerance-limit-fails-without-integrable-envelope
- cex-identifiable-model-with-insufficient-abc-summary
- ex-abc-vanishing-acceptance-rate
- ex-abc-finite-sample-sufficient-summary
---

## Summary

These examples isolate the hypotheses behind tolerance-conditioned inference. A proper countable prior with moving summary-density spikes has parameterwise continuity at the observed summary and positive finite density evidence, yet its ABC targets fail to converge to the density-selected update. The local envelope condition cannot be replaced by pointwise continuity alone.

A binary identifiable experiment with a constant summary leaves the ABC target at the prior, demonstrating that full-model identifiability does not establish summary sufficiency. An adjacent-uniform simulator gives an explicit small-tolerance acceptance probability and accepted law, separating exact tolerance-target simulation from the difficulty of obtaining accepted draws.

The finite Bernoulli example works through a sufficient count summary. It computes the full-data and summary likelihood normalizers and verifies a common conditional-data kernel on summary fibers, so the two posterior updates agree in this finite setting. The calculations use the positive-evidence and version conventions of the A page; they claim no generic coverage, contraction, MCMC convergence, or universal acceptance-rate bound.
