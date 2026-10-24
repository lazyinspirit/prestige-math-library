---
id: alg-na-computed-fft-cyclic-and-linear-convolution
kind: algorithm
title: "Computed FFT cyclic convolution and zero-padded linear convolution"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 13
deps: [alg-na-computed-unitary-radix-two-fft, def-unitary-discrete-fourier-transform-on-z-mod-n, def-cyclic-convolution-on-z-mod-n, lem-na-zero-padding-removes-linear-convolution-aliasing, def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma, def-standard-relative-floating-point-model-and-unit-roundoff, thm-finite-fourier-inversion, lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "C. Sidney Burrus, Fast Fourier Transforms, Chapter 13 §§13.1 and 13.2"
      url: https://repository.rice.edu/server/api/core/bitstreams/01e9e0a5-fa6f-453d-a1b5-8209fa0a565c/content
    - title: "Nicholas J. Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., Chapter 24, Problem 24.1"
      url: https://pages.stat.wisc.edu/~bwu62/771/hingham2002.pdf
verification:
  precheck: n/a
---

## Definition

Fix an instance of the operationwise floating-point model in [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]], with representable real set $\mathbb F$. Input two finite complex sequences $a,b$ whose real and imaginary coordinates all belong to $\mathbb F$, a mode `cyclic` or `linear`, and phase/FFT controls: an exact rational twiddle tolerance $0<\tau\le1/4$, integer dyadic exponent limits $e_{\min}\le e_{\max}$, an initial phase precision $p_0\ge2$, a finite precision cap $p_{\max}\ge p_0$, a finite elementary-series cap $J\ge1$, and a maximum radix-two recursion depth $d_{\max}\ge0$. At precision $p$, phase endpoints use the dyadic format with precision $p$ and exponent limits $e_{\min},e_{\max}$. In cyclic mode the inputs must have the same length $M=2^q$ with integer $q\ge0$; the requested exact operation is cyclic convolution on $\mathbb Z/M\mathbb Z$. In linear mode, with lengths $n,m\ge1$, set $L=n+m-1$, choose the least power of two $M\ge L$, and append zeros to both inputs to length $M$; the requested output is the first $L$ entries of their cyclic convolution. Validate the mode, positive dimensions, input representability, exact rational tolerance, integer control parameters and their displayed inequalities, and the cyclic power-of-two condition before any transform call. If any such input constraint fails, return `inconclusive` with diagnostic `invalid-input` and the offending parameter or coordinate, without a vector output. An arithmetic range failure returns `range-failure` with its operation and index, without a vector output.

For either mode, call [[alg-na-computed-unitary-radix-two-fft]] on each length-$M$ input with direction `forward` and the same $(\tau,e_{\min},e_{\max},p_0,p_{\max},J,d_{\max})$ controls. Multiply corresponding transform entries as $\operatorname{fl}_{\mathbb C}(\widehat A_k\widehat B_k)$ using the six-real-operation complex product of [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]. Call the same FFT routine on this product vector with direction `inverse` and the same controls, and multiply each output component by the computed real scalar $\operatorname{fl}(\sqrt M)$ using componentwise rounded real scaling. Return the length-$M$ cyclic result, or its first $L$ entries in linear mode, only if every phase, recursion-budget, and arithmetic operation succeeds; otherwise return the first `inconclusive` or `range-failure` status and index. The exact convolution identity and numerical-error claim are separate results.
