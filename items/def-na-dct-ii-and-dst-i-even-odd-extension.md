---
id: def-na-dct-ii-and-dst-i-even-odd-extension
kind: definition
title: "DCT-II and DST-I with fixed even and odd extension conventions"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 0
deps: [def-sine-and-cosine-by-power-series, def-pi-via-first-positive-cosine-zero]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "C. Sidney Burrus, Fast Fourier Transforms, Chapter 8 §8.3.2 and Chapter 12 §12.1"
      url: https://repository.rice.edu/server/api/core/bitstreams/01e9e0a5-fa6f-453d-a1b5-8209fa0a565c/content
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

For $N\ge1$ and $x=(x_0,\ldots,x_{N-1})\in\mathbb R^N$, the **DCT-II** is the vector $X\in\mathbb R^N$ with $X_k=\sum_{j=0}^{N-1}x_j\cos(\pi(j+1/2)k/N)$ for $0\le k<N$. Its even extension $E_Nx\in\mathbb R^{2N}$ is $(E_Nx)_j=x_j$ and $(E_Nx)_{2N-1-j}=x_j$ for $0\le j<N$.

For $N\ge1$ and $x=(x_1,\ldots,x_N)\in\mathbb R^N$, the **DST-I** is the vector $Y\in\mathbb R^N$ with $Y_k=\sum_{j=1}^{N}x_j\sin(\pi jk/(N+1))$ for $1\le k\le N$. Its odd extension $O_Nx\in\mathbb R^{2(N+1)}$ has $(O_Nx)_0=(O_Nx)_{N+1}=0$, $(O_Nx)_j=x_j$, and $(O_Nx)_{2(N+1)-j}=-x_j$ for $1\le j\le N$.

These definitions fix the transform type, index range, extension symmetry, and endpoint normalization. Their orthogonality, inverse formulas, and relation to the unitary DFT are proved in separate results.
