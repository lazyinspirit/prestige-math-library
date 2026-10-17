---
id: alg-na-computed-fast-transforms-and-convolution
kind: algorithm
title: "Arbitrary-length mixed-radix and Bluestein DFT"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 14
deps: [alg-na-computed-unitary-radix-two-fft, alg-na-computed-fft-cyclic-and-linear-convolution, alg-na-certified-unit-circle-phase, lem-na-mixed-radix-cooley-tukey-factorization, lem-na-bluestein-chirp-convolution-factorization, def-unitary-discrete-fourier-transform-on-z-mod-n, def-unnormalised-engineering-dft-and-conversion]
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

Input $N\ge1$, $x\in\mathbb C^N$, and finite phase/arithmetic budgets. The output convention is the **unnormalised** DFT $X_k=\sum_{j=0}^{N-1}x_je^{-2\pi ijk/N}$ ([[def-unnormalised-engineering-dft-and-conversion]]); the procedure returns an approximate vector or the first `inconclusive`/`range-failure` status.

1. For $N=1$, return $x_0$.
2. If $N=2^m$ with $m\ge1$, call [[alg-na-computed-unitary-radix-two-fft]] in `forward` mode and multiply each output by the computed scalar $\operatorname{fl}(\sqrt N)$. A failed subcall or scale operation returns its status.
3. If $N$ is composite and not a power of two, find its least divisor $r$ with $1<r<N$ by trial division and put $s=N/r$. For $u=0,\ldots,r-1$, recursively transform the strided vector $(x_{u+rv})_{v=0}^{s-1}$ to obtain an approximate unnormalised length-$s$ DFT $U_u$. For each $0\le k_2<s$, approximate every twiddle $e^{-2\pi iuk_2/N}$ by [[alg-na-certified-unit-circle-phase]], multiply it by $U_u(k_2)$ with the operationwise complex product, and apply the recursive length-$r$ transform to the resulting vector indexed by $u$. Store its output $k_1$ at index $k_2+sk_1$. Propagate any failed phase or arithmetic status.
4. If $N$ is prime, set $M$ to the least power of two with $M\ge2N-1$. Form the chirp-modulated input $a_j=\alpha_jx_j$ with $\alpha_j=e^{-\pi i j^2/N}$ and the length-$M$ chirp vector $b$ supported on residues of $t=-(N-1),\ldots,N-1$, where $b_{[t]_M}=e^{\pi i t^2/N}$. Obtain each phase with [[alg-na-certified-unit-circle-phase]], compute the cyclic convolution with [[alg-na-computed-fft-cyclic-and-linear-convolution]] in `cyclic` mode, and multiply output $k<N$ by $\gamma_k=e^{-\pi i k^2/N}$, again using a certified phase and the rounded complex product. Return the first $N$ entries or the first failure status.

The divisor search and phase-enclosure work have separate integer/interval budgets and are not counted as complex arithmetic operations in the operation-count theorem. The exact factorization lemmas and the chirp-phase error theorem state what is guaranteed; this procedure by itself makes no general mixed-radix stability claim.
