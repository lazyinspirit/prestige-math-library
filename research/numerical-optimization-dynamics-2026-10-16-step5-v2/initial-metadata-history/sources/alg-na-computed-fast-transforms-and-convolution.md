---
id: alg-na-computed-fast-transforms-and-convolution
kind: algorithm
title: "Arbitrary-length mixed-radix and Bluestein DFT"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 14
deps: [alg-na-computed-unitary-radix-two-fft, alg-na-computed-fft-cyclic-and-linear-convolution, alg-na-certified-unit-circle-phase, lem-na-mixed-radix-cooley-tukey-factorization, lem-na-bluestein-chirp-convolution-factorization, def-unitary-discrete-fourier-transform-on-z-mod-n, def-unnormalised-engineering-dft-and-conversion, def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "C. Sidney Burrus, Fast Fourier Transforms, Chapter 5 §5.2, Chapter 9 §9.2, and Chapter 11 §11.2"
      url: https://repository.rice.edu/server/api/core/bitstreams/01e9e0a5-fa6f-453d-a1b5-8209fa0a565c/content
    - title: "Nicholas J. Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., Chapter 24"
      url: https://pages.stat.wisc.edu/~bwu62/771/hingham2002.pdf
verification:
  precheck: n/a
---

## Definition

Fix an instance of the operationwise floating-point model in [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]], with representable real set $\mathbb F$. Input $N\ge1$, $x\in\mathbb C^N$ whose real and imaginary coordinates all belong to $\mathbb F$, a phase tolerance $0<\tau\le1/4$, integer dyadic exponent limits $e_{\min}\le e_{\max}$, an initial phase precision $p_0\ge2$, a finite precision cap $p_{\max}\ge p_0$, a finite elementary-series cap $J\ge1$, and a maximum radix-two recursion depth $d_{\max}\ge0$. At precision $p$, phase endpoints use the dyadic format with precision $p$ and exponent limits $e_{\min},e_{\max}$. Before any certified phase is used as an arithmetic operand or stored in an input vector to a computed subroutine, require its real and imaginary coordinates to belong to $\mathbb F$; otherwise return `range-failure` with that phase index before the operation or subcall. Use the same floating-point model instance throughout all recursive calls. The output convention is the **unnormalised** DFT $X_k=\sum_{j=0}^{N-1}x_je^{-2\pi ijk/N}$ ([[def-unnormalised-engineering-dft-and-conversion]]); the procedure returns an approximate vector or the first `inconclusive`/`range-failure` status.

1. For $N=1$, return $x_0$.
2. If $N=2^m$ with $m\ge1$, call [[alg-na-computed-unitary-radix-two-fft]] in `forward` mode with controls $(\tau,e_{\min},e_{\max},p_0,p_{\max},J,d_{\max})$ and multiply each output by the computed scalar $\operatorname{fl}(\sqrt N)$. A failed subcall or scale operation returns its status.
3. If $N$ is composite and not a power of two, find its least divisor $r$ with $1<r<N$ by trial division and put $s=N/r$. For $u=0,\ldots,r-1$, recursively call this procedure with the same controls on the strided vector $(x_{u+rv})_{v=0}^{s-1}$ to obtain an approximate unnormalised length-$s$ DFT $U_u$. For each $0\le k_2<s$ and $0\le u<r$, call [[alg-na-certified-unit-circle-phase]] on $(q,\tau,e_{\min},e_{\max},p_0,p_{\max},J)$ with $q=-2uk_2/N$ to obtain the twiddle enclosure, then multiply its returned phase by $U_u(k_2)$ using $\operatorname{fl}_{\mathbb C}$. For each $0\le k_2<s$, apply this procedure recursively, with the same controls, to the length-$r$ vector of these products indexed by $u$, and for every $0\le k_1<r$ store its output $k_1$ at index $k_2+sk_1$. Propagate any failed phase or arithmetic status.
4. If $N$ is prime, set $M$ to the least power of two with $M\ge2N-1$. For each $0\le j<N$, call [[alg-na-certified-unit-circle-phase]] on $(q,\tau,e_{\min},e_{\max},p_0,p_{\max},J)$ with $q=-j^2/N$ to obtain $\widehat\alpha_j$, and set $a_j=\operatorname{fl}_{\mathbb C}(\widehat\alpha_jx_j)$; set the remaining entries of $a\in\mathbb C^M$ to zero. For each $-(N-1)\le t\le N-1$, obtain $\widehat\beta_t$ by the same call with $q=t^2/N$ and set $b_{[t]_M}=\widehat\beta_t$, setting other entries of $b$ to zero. Compute the cyclic convolution with [[alg-na-computed-fft-cyclic-and-linear-convolution]] in `cyclic` mode using controls $(\tau,e_{\min},e_{\max},p_0,p_{\max},J,d_{\max})$. For each $0\le k<N$, obtain $\widehat\gamma_k$ by the same phase call with $q=-k^2/N$ and set $\widehat X_k=\operatorname{fl}_{\mathbb C}(\widehat\gamma_k\widehat c_k)$. Return the first $N$ entries or the first failure status.

The divisor search and phase-enclosure work have separate integer/interval budgets and are not counted as complex arithmetic operations in the operation-count theorem. The exact factorization lemmas and the chirp-phase error theorem state what is guaranteed; this procedure by itself makes no general mixed-radix stability claim.
