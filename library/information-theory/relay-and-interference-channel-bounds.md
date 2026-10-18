---
page: relay-and-interference-channel-bounds
title: "Relay and Interference Channel Bounds"
status: published
requires:
  - multiuser-channel-networks
items:
  - lem-finite-or-euclidean-likelihood-ratio-network-coding
  - lem-complex-gaussian-interference-entropy-estimates
  - lem-gaussian-superposition-nonunique-han-kobayashi-region
  - def-finite-discrete-memoryless-network-and-code
  - def-real-gaussian-multicast-relay-network
  - def-real-two-user-gaussian-interference-channel
  - lem-real-vector-gaussian-maximum-differential-entropy
  - def-finite-discrete-memoryless-relay-channel-and-causal-code
  - def-finite-two-user-interference-channel-and-strong-regime
  - def-finite-two-way-relay-channel-and-causal-code
  - lem-bounded-density-finite-second-moment-has-finite-differential-entropy
  - lem-complex-scalar-gaussian-maximum-differential-entropy
  - lem-finite-joint-iid-strong-typicality
  - thm-real-gaussian-multicast-noisy-network-coding-inner-bound
  - def-finite-directed-information-and-causal-conditioning
  - lem-finite-conditional-codebook-covering
  - lem-finite-conditional-typicality-packing
  - lem-scalar-gaussian-channel-mutual-information-power-bound
  - lem-real-gaussian-han-kobayashi-inner-region
  - lem-real-gaussian-multiple-access-random-coding-region
  - thm-finite-relay-decode-forward-inner-bound
  - lem-finite-conditional-channel-mutual-information-concave-input-law
  - lem-finite-directed-information-feedback-decomposition
  - lem-finite-strong-interference-block-lift
  - thm-finite-multisource-multicast-noisy-network-coding-inner-bound
  - cor-finite-relay-compress-forward-noisy-network-coding-bound
  - cor-finite-two-way-relay-noisy-network-coding-region
  - lem-standard-borel-conditional-mutual-information-chain-rule-and-data-processing
  - lem-standard-borel-memoryless-channel-mutual-information-tensorization
  - lem-real-gaussian-interference-genie-outer-region
  - thm-finite-relay-cut-set-outer-bound
  - thm-real-gaussian-multicast-noisy-network-coding-cut-dependent-gap
  - thm-real-gaussian-strong-interference-capacity-region
  - thm-finite-full-feedback-relay-capacity
  - thm-finite-strong-interference-channel-capacity
  - thm-real-gaussian-interference-channel-within-one-bit
examples: []
---

This page separates three kinds of claims. For finite relay channels it proves a causal cut-set outer bound and a decode-forward inner bound; for the full-output-feedback model the two match. For finite multicast and two-way relay channels it proves noisy-network-coding specializations using explicit likelihood-ratio encoding, simultaneous message decoding, and compression-rate elimination. For interference channels it distinguishes the universal strong-interference hypotheses from Gaussian strong, weak, and mixed regimes. The Gaussian within-one-bit theorem is stated in the complex channel convention of Etkin–Tse–Wang.

Finite-alphabet mutual information and rates use nats. The binary examples explicitly convert those quantities to bits. Gaussian formulas and examples use bits per use. In the Gaussian interference convention, $Y_1=h_{11}X_1+h_{21}X_2+Z_1$ and $Y_2=h_{12}X_1+h_{22}X_2+Z_2$; consequently $\mathrm{INR}_1$ is the interference power at receiver 1 and $\mathrm{INR}_2$ at receiver 2. The real scalar version has unit-variance $N(0,1)$ noise and a factor $1/2$ in logarithmic rates; the complex version has unit-variance circular Gaussian noise and no such factor.

The first diagram labels the relay links by their input/output symbols. The second diagram uses the Etkin–Tse–Wang gain indexing for the Gaussian interference channel. These diagrams specify the models; the proofs use the transition laws and channel equations directly.

```tikzcd
S \arrow[r, "X\mapsto Y_r"] \arrow[dr, "X\mapsto Y"'] & R \arrow[d, "X_r\mapsto Y"] \\
& D
```

```tikzcd
T_1 \arrow[r, "h_{11}"] \arrow[dr, "h_{12}"'] & R_1 \\
T_2 \arrow[ur, "h_{21}"] \arrow[r, "h_{22}"'] & R_2
```

The prerequisite page `multiuser-channel-networks` supplies the finite DM-MAC coding interface used in the finite strong-interference achievability proof. The local Gaussian coding constructions explicitly enforce deterministic power constraints. Noisy network coding includes a Euclidean likelihood-ratio proof and noise-level Gaussian specialization, while the interference comparison treats every weak and mixed regime, including INR below one and clipped coordinate axes. Its noise-level split is nominal: auxiliary removal and rate moving are permitted as proved in the coding bridge. These are draft mathematical constructions; workflow acceptance is recorded separately.

The Gaussian converses use local standard-Borel chain-rule/data-processing and memoryless-vector tensorization lemmas, so codeword coordinates are allowed to be dependent. The scalar Gaussian power bound proves the density-to-mutual-information identity under the stated finite-moment assumptions before applying real or complex maximum entropy.
