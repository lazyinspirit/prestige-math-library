---
page: finite-alphabet-entropy-and-divergence
title: "Finite-Alphabet Entropy and Divergence"
status: draft
requires:
  - probability-spaces-random-variables-and-expectation
  - quantum-communication-and-fingerprinting
  - minimax-lower-bounds-and-information-theoretic-methods
items:
  - def-it-information-units-and-logarithm-base
  - lem-it-finite-marginals-and-conditionals-are-pmfs
  - lem-it-finite-kl-agrees-with-measurable-kl
  - lem-it-finite-log-sum-inequality
  - def-it-finite-conditional-entropy
  - def-it-finite-mutual-information
  - def-it-finite-conditional-mutual-information
  - thm-it-finite-kl-nonnegative-equality
  - thm-it-information-unit-conversion
  - thm-it-finite-conditional-mutual-information-identities-and-equality
  - thm-it-finite-entropy-chain-rule
  - thm-it-finite-markov-data-processing
  - thm-it-fano-inequality
  - cor-it-fano-with-erasure-or-out-of-alphabet-estimates
examples: []
---

This page fixes the finite-alphabet conventions for natural-log nats and bits, conditional entropy, mutual information, and conditional mutual information. It proves the support-aware log-sum and finite KL equality results, identifies the finite sum with the library's measurable KL under its stated AC interface, and derives the entropy and information chain rules, finite Fano bounds, and Markov data processing. Every sum is finite, zero-support cases are explicit, and no proof subtracts two infinite values.
