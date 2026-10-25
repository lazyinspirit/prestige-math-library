---
page: interactive-proof-systems-and-public-coins
title: "Interactive Proof Systems and Public Coins"
status: published
items: [def-interactive-proof-transcript-round-and-strategy, def-completeness-and-soundness, lem-sequential-repetition-amplifies-error, def-ip, prop-np-is-contained-in-ip, def-private-coin-public-coin-and-arthur-merlin-protocol, lem-hashing-commits-public-randomness, thm-private-coin-ip-equals-public-coin-ip, def-protocol-game-tree-and-value, lem-optimal-prover-may-be-deterministic, lem-protocol-value-is-computable-in-polynomial-space, thm-ip-is-contained-in-pspace, def-graph-nonisomorphism-protocol, thm-graph-nonisomorphism-is-in-ip, fs-soundness-quantifies-only-over-honest-provers, fs-the-prover-must-run-in-polynomial-time]
examples: []
---

Polynomially bounded interaction gives the verifier random access to evidence without imposing any resource bound on the prover. This page proves the public-coin conversion and the upper inclusion $\mathrm{IP}\subseteq\mathrm{PSPACE}$ only; the reverse inclusion is developed later through arithmetization and sum-check.
