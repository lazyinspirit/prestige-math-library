---
page: minimax-lower-bounds-and-information-theoretic-methods
title: "Minimax Lower Bounds"
status: published
items:
  - lem-sparse-hamming-packing
  - def-kullback-leibler-divergence
  - def-mutual-information-for-finite-hypothesis-testing
  - thm-pinsker
  - thm-product-kl-additivity
  - lem-gaussian-location-kl-formula
  - thm-two-point-le-cam-risk-bound
  - thm-assouad-hypercube
  - thm-fano-packing
examples: []
---

This page builds finite-sample minimax lower bounds from KL divergence and the event-supremum total-variation convention defined on the stationary Markov-chain page. It defines directional KL and finite uniform-hypothesis mutual information, proves Pinsker’s inequality with the matching factor of $1/2$, and proves finite-product KL additivity under independence. Two-point testing, Fano packing, and Assouad’s hypercube arguments cover arbitrary randomized kernels and reduce squared loss to testing error explicitly. A local Gaussian KL formula and sparse block-code packing supply the calculations used by the companion examples. AC is stated at the Radon–Nikodym and Gaussian-construction steps; the finite testing and coding arguments add no choice. The plan also lists the concentration page as a prerequisite; no concentration inequality is used by these lower-bound proofs.
