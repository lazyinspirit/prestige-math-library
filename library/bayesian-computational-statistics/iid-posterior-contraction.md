---
page: iid-posterior-contraction
title: "IID posterior contraction by entropy and prior mass"
status: draft
items:
  - def-hellinger-distance-between-density-laws
  - lem-iid-bounded-variance-bernstein-tail
  - lem-iid-posterior-denominator-lower-bound-from-kl-mass
  - lem-hellinger-distance-controls-l1-and-total-variation
  - lem-iid-sieve-entropy-produces-exponential-tests
  - thm-iid-posterior-contraction-by-entropy-and-prior-mass
examples: []
---

## Objective

This page proves the IID posterior contraction theorem from a same-metric packing bound, an exponentially small prior tail outside a measurable parameter sieve, and local prior mass satisfying both a directional KL bound and a log-likelihood second-moment bound. It defines root-L2 Hellinger distance and proves the exact density-L1/event-supremum-TV factor, then constructs exponential tests for Hellinger, full density L1, and uniformly bounded density L2 distances. The denominator lemma uses Jensen and Chebyshev; the final theorem combines its in-probability lower bound with tested sieve mass and a likelihood-ratio bound on the sieve tail.

The metric in the entropy premise is the metric of the posterior conclusion. The L2-density branch requires one finite bound on every model density and the truth. The result gives convergence in P0 probability only; it does not assert almost-sure contraction, minimax optimality, or the separate annular-testing theorem.
