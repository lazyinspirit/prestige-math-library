---
page: computed-fast-transforms-and-convolution
title: Computed fast transforms and convolution
status: draft
items:
  - def-na-dct-ii-and-dst-i-even-odd-extension
  - lem-na-bluestein-chirp-convolution-factorization
  - lem-na-mixed-radix-cooley-tukey-factorization
  - lem-na-zero-padding-removes-linear-convolution-aliasing
  - lem-na-complex-product-six-operation-roundoff-bound
  - thm-na-dct-ii-orthogonality-inverse-and-dft-extension
  - thm-na-dst-i-orthogonality-inverse-and-dft-extension
  - thm-na-dct-ii-chebyshev-coefficient-extraction
  - thm-na-interval-pi-matches-canonical-fourier-pi
  - alg-na-certified-unit-circle-phase
  - alg-na-computed-unitary-radix-two-fft
  - thm-na-certified-unit-circle-phase-enclosure
  - alg-na-computed-fft-cyclic-and-linear-convolution
  - lem-na-computed-unitary-butterfly-error-bound
  - alg-na-computed-fast-transforms-and-convolution
  - thm-na-computed-unitary-radix-two-fft-error-bound
  - thm-na-arbitrary-length-fft-correctness-and-cost
  - thm-na-computed-fft-convolution-error-bound
  - thm-na-bluestein-chirp-phase-error-separate-from-fft-error
examples: []
---

This page extends the canonical finite Fourier transform and radix-two FFT with computed error bounds, arbitrary-length reductions, trigonometric transforms, and convolution. Its radix-two stability estimate assumes round-to-nearest, normal-range successful operations, and a certified error bound for every twiddle. The product-stage constant is explicit: $\eta=10u+\epsilon_{\rm tw}$; the $O(u\log N)$ shorthand requires $\epsilon_{\rm tw}=O(u)$ and $u\log N$ small. A phase-evaluation budget that cannot certify its requested enclosure returns inconclusive. The interval evaluator's arctangent definition is shown to use the same canonical $\pi$ as the Fourier and chirp formulas.

Mixed-radix Cooley–Tukey and Bluestein supply exact arbitrary-length reductions. Bluestein pads to a supported power of two $M\ge2N-1$ and records chirp-phase error separately from the FFT-convolution error. Arithmetic counts exclude integer factor search, interval phase evaluation, memory traffic, and bit complexity; no general mixed-radix stability theorem is asserted here.

DCT-II uses the even extension and the stated endpoint normalization; DST-I uses the odd extension and its fixed endpoint zeros. Both inverses are proved directly, and the DCT-II recovers Chebyshev coefficients at first-kind roots. Linear convolution uses zero padding to prevent circular aliasing. Its error bound separates forward transforms, pointwise products, inverse transform, and final scaling, conditional on successful operations.
