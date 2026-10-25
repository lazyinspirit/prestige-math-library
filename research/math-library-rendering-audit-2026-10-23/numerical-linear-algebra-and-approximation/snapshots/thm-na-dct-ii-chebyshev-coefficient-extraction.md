---
id: thm-na-dct-ii-chebyshev-coefficient-extraction
kind: theorem
title: "DCT-II samples extract Chebyshev coefficients at first-kind roots"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 2
deps: [def-na-dct-ii-and-dst-i-even-odd-extension, thm-na-dct-ii-orthogonality-inverse-and-dft-extension, def-chebyshev-polynomials-first-and-second-kind, thm-chebyshev-multiple-angle-identities]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "C. Sidney Burrus, Fast Fourier Transforms, Chapter 8 §8.3.2"
      url: https://repository.rice.edu/server/api/core/bitstreams/01e9e0a5-fa6f-453d-a1b5-8209fa0a565c/content
---

## Statement

Let $p(t)=\sum_{k=0}^{N-1}a_kT_k(t)$ be a polynomial of degree less than $N$, where $T_k$ is the Chebyshev polynomial of the first kind, and sample $x_j=p(\cos(\pi(j+1/2)/N))$ for $0\le j<N$. If $X$ is the DCT-II of $x$, then $a_0=X_0/N$ and $a_k=2X_k/N$ for $1\le k<N$.

## Facts & Assumptions

**Given:** $N\ge1$, coefficients $a_0,\ldots,a_{N-1}$, Chebyshev polynomials $T_k$, and the DCT-II convention of [[def-na-dct-ii-and-dst-i-even-odd-extension]].

[F1] $T_k(\cos\theta)=\cos(k\theta)$ for every integer $k\ge0$, by the recurrence definition together with the addition formulas ([[def-chebyshev-polynomials-first-and-second-kind]], [[thm-chebyshev-multiple-angle-identities]]).

[F2] The DCT-II matrix is $C_{kj}=\cos(\pi(j+1/2)k/N)$, and its row-orthogonality factor is $CC^T=\operatorname{diag}(N,N/2,\ldots,N/2)$ ([[def-na-dct-ii-and-dst-i-even-odd-extension]], [[thm-na-dct-ii-orthogonality-inverse-and-dft-extension]]).

## Proof

1.1 Put $\theta_j=\pi(j+1/2)/N$. By [F1], $x_j=\sum_{k=0}^{N-1}a_k\cos(k\theta_j)=\sum_{k=0}^{N-1}C_{kj}a_k$, so in vector form $x=C^Ta$. [given, F1, F2]

2.1 The DCT output is $X=Cx=C C^Ta$. By [F2], $CC^T$ is diagonal with entries $N$ at index zero and $N/2$ at positive indices. Thus $X_0=Na_0$ and $X_k=(N/2)a_k$ for $k\ge1$. Dividing by these positive constants gives the claimed coefficients. [step 1.1, F2, algebra] ∎
