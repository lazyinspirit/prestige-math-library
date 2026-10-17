---
page: computed-fast-transforms-and-convolution-examples
title: Computed fast transforms and convolution — Examples
status: draft
items: []
examples:
  - ex-na-prime-length-five-bluestein-transform
  - ex-na-two-point-circular-aliasing
  - ex-na-three-sample-dct-chebyshev-coefficients
---

These examples check three conventions used on the A page: Bluestein’s prime-length chirp identity, the difference between cyclic and zero-padded linear convolution, and DCT-II coefficient normalization at Chebyshev roots. The prime-length example checks the exact Bluestein identity at a supported padded length; the convolution example compares exact cyclic and linear operations. Neither claims that a finite-precision execution must return a successful status.
