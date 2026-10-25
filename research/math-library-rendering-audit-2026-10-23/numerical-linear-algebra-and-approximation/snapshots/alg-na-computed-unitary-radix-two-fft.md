---
id: alg-na-computed-unitary-radix-two-fft
kind: algorithm
title: "Computed unitary radix-two FFT with certified twiddle phases"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 12
deps: [alg-na-certified-unit-circle-phase, def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma, def-standard-relative-floating-point-model-and-unit-roundoff, def-unitary-discrete-fourier-transform-on-z-mod-n, def-recursive-radix-two-fast-fourier-transform]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Nicholas J. Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., Chapter 24, pp. 451–454"
      url: https://pages.stat.wisc.edu/~bwu62/771/hingham2002.pdf
    - title: "C. Sidney Burrus, Fast Fourier Transforms, Chapter 11 §11.7"
      url: https://repository.rice.edu/server/api/core/bitstreams/01e9e0a5-fa6f-453d-a1b5-8209fa0a565c/content
verification:
  precheck: n/a
---

## Definition

Fix an instance of the operationwise floating-point model in [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]], with representable real set $\mathbb F$. Input $N=2^m$ with $m\ge0$, $x\in\mathbb C^N$ whose real and imaginary coordinates all belong to $\mathbb F$, a direction `forward` or `inverse`, an exact rational twiddle tolerance $0<\tau\le1/4$, integer exponent limits $e_{\min}\le e_{\max}$ for the dyadic phase format, an initial phase precision $p_0\ge2$, a finite precision cap $p_{\max}\ge p_0$, a finite elementary-series cap $J\ge1$, and a maximum radix-two recursion depth $d_{\max}\ge0$. At precision $p$, phase endpoints use the dyadic format with precision $p$ and exponent limits $e_{\min},e_{\max}$. Output a vector in $\mathbb C^N$ and the certificate for each twiddle used, or the first `range-failure`/`inconclusive` status and its stage, index, or phase. Before multiplying by a certified phase $\widehat w_k$, require its real and imaginary coordinates to belong to $\mathbb F$; otherwise return `range-failure` at that twiddle index before performing the product. Use the same floating-point model instance throughout the recursion.

For direction `forward`, at $N=1$ return $x_0$. For $N>1$, if $d_{\max}=0$ return `inconclusive` with the `subdivision-cap-exhausted` status. Otherwise split $x$ into even and odd subsequences and recursively compute their unitary transforms $E,O$ by calling this routine with the same phase parameters and depth cap $d_{\max}-1$. For each $0\le k<N/2$, call [[alg-na-certified-unit-circle-phase]] on $(q,\tau,e_{\min},e_{\max},p_0,p_{\max},J)$ with $q=-2k/N$, obtaining $(\widehat w_k,\epsilon_k)$ approximating $w_k=e^{-2\pi ik/N}$. Compute the six-real-operation complex product $t_k=\operatorname{fl}_{\mathbb C}(\widehat w_kO_k)$, componentwise rounded sums $s_k^+=\operatorname{fl}_{\mathbb C}(E_k+t_k)$ and $s_k^-=\operatorname{fl}_{\mathbb C}(E_k-t_k)$, and $\widehat c=\operatorname{fl}(\sqrt{1/2})$. Set output entries $k$ and $k+N/2$ to the componentwise rounded real scalings $\operatorname{fl}_{\mathbb C}(\widehat c s_k^+)$ and $\operatorname{fl}_{\mathbb C}(\widehat c s_k^-)$, respectively. For direction `inverse`, conjugate the input, run the forward routine with the same phase parameters and $d_{\max}$, and conjugate its output; conjugation is exact in the operationwise model. Propagate any failed phase certificate; on arithmetic failure return the operationwise range status and index. Accuracy is asserted only by the separate theorem and only on a successful no-range-failure execution.
