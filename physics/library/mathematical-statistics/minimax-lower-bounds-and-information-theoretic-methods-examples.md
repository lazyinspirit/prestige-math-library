---
page: minimax-lower-bounds-and-information-theoretic-methods-examples
title: "Minimax Lower Bounds — Examples"
status: published
items: []
examples:
  - ex-gaussian-two-point-le-cam-lower-bound
  - ex-sparse-gaussian-sequence-fano-lower-bound
  - ex-gaussian-hypercube-assouad-lower-bound
---

These examples apply the proved methods to a two-point Gaussian location experiment, a sparse Gaussian sequence, and a dense Gaussian mean hypercube. Product KL additivity and the Gaussian location formula give each divergence; Pinsker converts KL to total variation for the Le Cam and Assouad applications. The sparse example uses the local packing proof for all $1\le k\le d/2$ and handles the two-point packing-size boundary separately. The Gaussian-law suppliers retain their AC assumptions. All risks allow randomized estimators and use squared error.
