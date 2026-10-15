---
page: td-stochastic-protocols
title: "Stochastic Protocols"
status: draft
items:
  - def-td-driven-finite-path-model
  - def-td-detailed-balance-rate-model
  - post-td-canonical-protocol-preparation
  - post-td-stationary-bath-kernel
  - post-td-linear-ornstein-uhlenbeck-bath
  - def-td-finite-memory-reset-model
  - pthm-td-finite-pathwise-first-law
  - pthm-td-markov-relative-entropy-and-convergence
  - pthm-td-finite-jarzynski
  - pthm-td-finite-crooks
  - pthm-td-ornstein-uhlenbeck-thermal-fluctuations
  - pthm-td-qualified-landauer-reset
  - pthm-td-mean-dissipation
examples: []
---

This page defines finite driven-path and finite-rate models, adopts their preparation and bath assumptions explicitly, and proves the corresponding conditional work, fluctuation, and relaxation statements. Work is positive into the system; heat is positive into the system. The finite Jarzynski identity is an ensemble expectation, and the Crooks relation compares paired forward and reverse path laws. Mean work is bounded below by the finite free-energy difference, while individual paths can have lower work. The finite detailed-balance theorem establishes relative-entropy decrease and convergence only for a connected rate graph; it makes no claim that Shannon entropy always increases. The Ornstein–Uhlenbeck and memory-reset conclusions retain their explicit model conditions and empirical limits.

The current plan also requires the earlier page td-finite-statistical-bridge. Its current local page and batch-15 inventory include the draft postulate post-td-canonical-sampling, whose finite branch adopts the canonical law for a finite microstate set at positive temperature. The protocol-preparation postulate states the exact stage-zero instance, including $\beta=(k_{\mathrm B}T_b)^{-1}$ and the finite positive partition sum. The bridge and its prerequisite acceptance remain pending, so conclusions that use this preparation stay conditional and the page is escalated for readiness.
