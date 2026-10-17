---
id: alg-na-computed-clenshaw-curtis-via-fast-dft
kind: algorithm
title: "Computed Clenshaw–Curtis from an even-extension DFT"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: clenshaw-curtis-and-extrapolation-quadrature
dependency_level: 15
deps: [def-na-clenshaw-curtis-dct-i, def-na-clenshaw-curtis-quadrature, alg-na-computed-fast-transforms-and-convolution, def-canonical-natural]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lloyd N. Trefethen, Is Gauss Quadrature Better than Clenshaw–Curtis?, §2"
      url: "https://courses.grainger.illinois.edu/cs591mh/fa2012/trefethen/Clenshaw-Curtis.pdf"
      locator: "Printed pp. 69–70, even extension, FFT implementation, and Chebyshev coefficient integration."
verification:
  precheck: n/a
---

## Definition

Input real numbers $a<b$, a natural $n\ge0$, sampled values $y_0,\ldots,y_n$, and the phase/FFT controls for [[alg-na-computed-fast-transforms-and-convolution]]: a phase tolerance $0<\tau\le1/4$ (required to be exact rational when $n\ge1$), integer dyadic exponent limits $e_{\min}\le e_{\max}$, and integers $p_0\ge2$, $p_{\max}\ge p_0$, $J\ge1$, and $d_{\max}\ge0$. Set $m=(a+b)/2$ and $d=(b-a)/2$. For an underlying $f\in C[a,b]$, admissible samples satisfy $y_0=f(m)$ when $n=0$ and $y_j=f(m+d\cos(j\pi/n))$ for $0\le j\le n$ when $n\ge1$, using the canonical real images of [[def-canonical-natural]]. When $n\ge1$, also require every $y_j$ to lie in the representable real set $\mathbb F$ of the same floating-point model instance used by the called DFT; this ensures its complex input coordinates satisfy that procedure's input condition. No representability condition is needed for $n=0$, when no DFT call is made. The output is an approximate real quadrature value or the first status returned by the called DFT procedure.

1. If $n=0$, return $(b-a)y_0$, the midpoint convention of [[def-na-clenshaw-curtis-quadrature]].
2. If $n\ge1$, form $z\in\mathbb C^{2n}$ by $z_j:=y_j+0i$ for $0\le j\le n$ and $z_{2n-j}:=y_j+0i$ for $1\le j<n$. This is the even extension $(y_0,\ldots,y_n,y_{n-1},\ldots,y_1)$, with real samples embedded as complex numbers with zero imaginary part. Call [[alg-na-computed-fast-transforms-and-convolution]] on $z$ with length $2n$ and the same controls $(\tau,e_{\min},e_{\max},p_0,p_{\max},J,d_{\max})$. If it returns a status instead of a vector, return that status.
3. Otherwise, take the real parts $X_k$ of output entries $0\le k\le n$, form the DCT-I coefficients $a_0=X_0/(2n)$, $a_n=X_n/(2n)$, and $a_k=X_k/n$ for $1\le k<n$ as in [[def-na-clenshaw-curtis-dct-i]], and return $d\sum_{k=0}^n a_k\mu_k$ with the exact moments $\mu_k$ in [[def-na-clenshaw-curtis-quadrature]].

The postprocessing is exact real arithmetic applied to the approximate DFT output. The procedure makes no end-to-end floating-point error or stability claim; it only propagates the DFT routine's declared failure statuses.
