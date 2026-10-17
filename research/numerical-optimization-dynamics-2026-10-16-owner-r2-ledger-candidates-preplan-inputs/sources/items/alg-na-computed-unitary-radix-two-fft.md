---
id: alg-na-computed-unitary-radix-two-fft
kind: algorithm
title: "Computed unitary radix-two FFT with certified twiddle phases"
status: draft
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

Input $N=2^m$ with $m\ge0$, $x\in\mathbb C^N$, a direction `forward` or `inverse`, a twiddle tolerance $0<\tau\le1/4$, finite dyadic precision/exponent limits, and finite series, subdivision, and precision budgets. Output a vector in $\mathbb C^N$ and the certificate for each twiddle used, or the first `range-failure`/`inconclusive` status and its stage, index, or phase.

For direction `forward`, at $N=1$ return $x_0$. For $N>1$, split $x$ into even and odd subsequences and recursively compute their unitary transforms $E,O$. For each $0\le k<N/2$, call [[alg-na-certified-unit-circle-phase]] on $q=-2k/N$ with target $\tau$ to obtain $(\widehat w_k,\epsilon_k)$ approximating $w_k=e^{-2\pi ik/N}$. Compute the six-real-operation complex product $t_k=\operatorname{fl}_{\mathbb C}(\widehat w_kO_k)$, componentwise rounded sums $s_k^+=\operatorname{fl}_{\mathbb C}(E_k+t_k)$ and $s_k^-=\operatorname{fl}_{\mathbb C}(E_k-t_k)$, and $\widehat c=\operatorname{fl}(\sqrt{1/2})$. Set the two outputs to the componentwise rounded real scalings $\operatorname{fl}_{\mathbb C}(\widehat c s_k^+)$ and $\operatorname{fl}_{\mathbb C}(\widehat c s_k^-)$. For direction `inverse`, conjugate the input, run the forward routine, and conjugate its output; conjugation is exact in the operationwise model. Propagate any failed phase certificate; on arithmetic failure return the operationwise range status and index. Accuracy is asserted only by the separate theorem and only on a successful no-range-failure execution.
