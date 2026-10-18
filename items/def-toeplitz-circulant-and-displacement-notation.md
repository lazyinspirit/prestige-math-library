---
id: def-toeplitz-circulant-and-displacement-notation
kind: definition
title: "Toeplitz, circulant, and finite-index conventions for structured solvers"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-matrix-product-and-identity-matrix
  - def-unitary-discrete-fourier-transform-on-z-mod-n
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ralf Hiptmair, Numerical Methods for Computational Science and
        Engineering, Lecture Document, §§4.2.1 and 4.5.1"
      url: "https://www.sam.math.ethz.ch/~grsam/NumMeth/NumCSE_Lecture_Document.pdf"
    - title: "Daniel Kressner and Robert Luce, Fast computation of the matrix
        exponential for a Toeplitz matrix, §2"
      url: "https://www.epfl.ch/labs/mathicse/wp-content/uploads/2018/10/23.2016_DK-R\
        L.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

All vector and matrix indices below start at $0$. A rectangular Toeplitz matrix $T\in\mathbb C^{m\times n}$, where $m,n\ge1$, is specified by lags $t_r\in\mathbb C$ for $-(n-1)\le r\le m-1$ and has entries
$$T_{ij}:=t_{i-j}\qquad(0\le i<m,\ 0\le j<n).$$
For a square matrix $T\in\mathbb C^{n\times n}$, Hermitian Toeplitz means $t_{-r}=\overline{t_r}$ for $0\le r<n$. It is positive definite when $x^*Tx>0$ for every nonzero $x\in\mathbb C^n$, where $x^*:=\overline{x}^{\,T}$ and the product is the matrix product of [[def-matrix-product-and-identity-matrix]].

For $N\ge1$, a vector $c=(c_0,\ldots,c_{N-1})^T\in\mathbb C^N$ generates the circulant matrix
$$C(c)_{ij}:=c_{(i-j)\bmod N}\qquad(0\le i,j<N).$$
For $n\ge1$ and $0\le j<n$, let $e_j\in\mathbb C^n$ be the coordinate vector with $(e_j)_i=1$ when $i=j$ and $0$ otherwise. For $a\in\mathbb C^n$, $J_na$ is the reversed vector, $(J_na)_i=a_{n-1-i}$; $J_0$ is the unique map on the empty vector. The lower-triangular Toeplitz matrix of $a$ is $L(a)\in\mathbb C^{n\times n}$ with $L(a)_{ij}=a_{i-j}$ when $i\ge j$, and $0$ otherwise. The canonical unitary DFT is the map $\mathcal F_N$ of [[def-unitary-discrete-fourier-transform-on-z-mod-n]]; the unnormalised DFT used for operation counts is $D_N:=\sqrt N\,\mathcal F_N$.

These conventions specify matrix orientation, conjugation, normalization, and boundary indexing; in particular, circulant eigenvalues below use the negative-sign canonical DFT.
