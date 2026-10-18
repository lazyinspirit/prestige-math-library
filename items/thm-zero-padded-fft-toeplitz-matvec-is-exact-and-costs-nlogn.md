---
id: thm-zero-padded-fft-toeplitz-matvec-is-exact-and-costs-nlogn
kind: theorem
title: "A zero-padded circulant embedding computes a Toeplitz product in O(N log N)"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-cyclic-convolution-on-z-mod-n
  - def-toeplitz-circulant-and-displacement-notation
  - def-unitary-discrete-fourier-transform-on-z-mod-n
  - lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product
  - thm-finite-fourier-inversion
  - thm-na-arbitrary-length-fft-correctness-and-cost
  - thm-na-computed-fft-convolution-error-bound
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ralf Hiptmair, Numerical Methods for Computational Science and
        Engineering, Lecture Document, §4.5.2"
      url: "https://www.sam.math.ethz.ch/~grsam/NumMeth/NumCSE_Lecture_Document.pdf"
    - title: "Daniel Kressner and Robert Luce, Fast computation of the matrix
        exponential for a Toeplitz matrix, §1"
      url: "https://www.epfl.ch/labs/mathicse/wp-content/uploads/2018/10/23.2016_DK-R\
        L.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $m,n\ge1$, let $T\in\mathbb C^{m\times n}$ be Toeplitz with $T_{ij}=t_{i-j}$ for $0\le i<m$, $0\le j<n$, and let $x\in\mathbb C^n$. Set $L=m+n-1$ and let $N$ be the least power of two with $N\ge L$. Define $c\in\mathbb C^N$ by
$$c_\ell=t_\ell\ (0\le\ell<m),\qquad c_{N-d}=t_{-d}\ (1\le d<n),$$
and set every other coordinate to zero. Let $\widetilde x=(x_0,\ldots,x_{n-1},0,\ldots,0)^T\in\mathbb C^N$. In exact arithmetic, the first $m$ coordinates of the cyclic convolution $c*_N\widetilde x$ equal $Tx$.

The convolution can be computed with three exact length-$N$ DFT calls, pointwise products, and scalar scaling. Its arithmetic count is $O(N\log_2N)$ for $N\ge2$ and constant when $N=1$. This is an exact-arithmetic count for the formal exact-constant FFT model; a finite-precision execution is not claimed to be exact.

## Facts & Assumptions

**Given:** Positive integers $m,n$, a Toeplitz matrix $T$ with the stated lag convention, a vector $x\in\mathbb C^n$, and the embedding length $N$.

[F1] $T_{ij}=t_{i-j}$ for zero-based row and column indices. [[def-toeplitz-circulant-and-displacement-notation]]

[F2] The cyclic convolution coordinate is $(a*_N b)_i=\sum_{j=0}^{N-1}a_{(i-j)\bmod N}b_j$. [[def-cyclic-convolution-on-z-mod-n]]

[F3] For the canonical unitary DFT, $\mathcal F_N(a*_N b)=\sqrt N(\mathcal F_Na)\odot(\mathcal F_Nb)$. [[lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product]]

[F4] In the formal exact-constant model, the published arbitrary-length FFT procedure returns the unnormalised DFT $D_Na=\sum_j a_j e^{-2\pi i(\cdot)j/N}$ and costs $O(N\log_2N)$ for $N\ge2$. [[thm-na-arbitrary-length-fft-correctness-and-cost]]

[F5] The unitary DFT is invertible, and its inverse is the positive-sign transform. [[thm-finite-fourier-inversion]]

## Proof

1.1 The two nonzero index ranges used for $c$ are disjoint: $N-(n-1)\ge m$ follows from $N\ge m+n-1$. They also lie in $0,\ldots,N-1$. For $0\le i<m$ and $0\le j<n$, if $i\ge j$ then $0\le i-j\le m-1$ and $c_{(i-j)\bmod N}=t_{i-j}$. If $i<j$, put $d=j-i$, so $1\le d<n$ and $c_{(i-j)\bmod N}=c_{N-d}=t_{-d}=t_{i-j}$. Thus every selected circulant entry has the intended Toeplitz lag. [given, F1, algebra]

1.2 Write $D_N=\sqrt N\,\mathcal F_N$. By [F3], $D_N(a*_Nb)=\sqrt N\,\mathcal F_N(a*_Nb) =N(\mathcal F_Na)\odot(\mathcal F_Nb) =(D_Na)\odot(D_Nb)$. By [F5], the inverse coordinate is $(D_N^{-1}y)_j=N^{-1}\sum_{\ell=0}^{N-1}y_\ell e^{2\pi i j\ell/N} =N^{-1}\overline{(D_N\overline y)_j}$. Thus three calls from [F4], two pointwise products, and $O(N)$ scalar operations compute $c*_N\widetilde x$ exactly in the formal model. [F3, F4, F5, algebra]

2.1 By [F2], for $0\le i<m$, $(c*_N\widetilde x)_i=\sum_{j=0}^{n-1}c_{(i-j)\bmod N}x_j=\sum_{j=0}^{n-1}t_{i-j}x_j=(Tx)_i$, where the middle equality is step 1.1. Hence the first $m$ convolution coordinates equal $Tx$. [given, F2, step 1.1, algebra]

3.1 Each of the three DFT calls in step 1.2 costs $O(N\log_2N)$ for $N\ge2$ by [F4], while pointwise products and scaling cost $O(N)$. Since $N$ is the least power of two at least $L$, $N<2L$ when $L\ge2$; for $L=1$, $N=1$ and the product is scalar. This proves the stated count and exact result. [given, step 2.1, step 1.2, F4, algebra] ∎

## Remarks

The computed convolution has a separate conditional error theorem. Under its successful-operation, unit-roundoff, and twiddle-certificate hypotheses, [[thm-na-computed-fft-convolution-error-bound]] bounds the cyclic-convolution error; restricting to the first $m$ coordinates cannot increase its Euclidean norm. No finite-precision exactness is asserted here.
