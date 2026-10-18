---
id: prop-circulants-are-unitarily-diagonalized-by-the-canonical-dft
kind: proposition
title: "The canonical finite DFT diagonalizes every circulant"
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
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ralf Hiptmair, Numerical Methods for Computational Science and
        Engineering, Lecture Document, §4.2.1.6–4.2.1.14"
      url: "https://www.sam.math.ethz.ch/~grsam/NumMeth/NumCSE_Lecture_Document.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $N\ge1$, $c\in\mathbb C^N$, and let $C(c)$ be the circulant of [[def-toeplitz-circulant-and-displacement-notation]]. Put
$$\lambda_k:=\sum_{j=0}^{N-1}c_j e^{-2\pi i k j/N}=\sqrt N\,(\mathcal F_Nc)(k),\qquad 0\le k<N.$$
Then
$$C(c)=\mathcal F_N^{-1}\,\operatorname{diag}(\lambda_0,\ldots,\lambda_{N-1})\,\mathcal F_N.$$
Consequently, $C(c)$ is invertible exactly when every $\lambda_k\ne0$. For $b\in\mathbb C^N$, $C(c)x=b$ is solvable exactly when $(\mathcal F_Nb)(k)=0$ for every zero mode $\lambda_k=0$; on nonzero modes every solution has $(\mathcal F_Nx)(k)=(\mathcal F_Nb)(k)/\lambda_k$, while its zero-mode coordinates are free.

The square records the identity $\mathcal F_NC(c)=\operatorname{diag}(\lambda)\mathcal F_N$; the two paths send each input vector to the same Fourier-coordinate vector. The proof below establishes this identity from the finite convolution sums.

```tikzcd
\begin{tikzcd}
\mathbb C^N \arrow[r,"C(c)"] \arrow[d,"\mathcal F_N"'] & \mathbb C^N \arrow[d,"\mathcal F_N"] \\
\mathbb C^N \arrow[r,"\operatorname{diag}(\lambda)"] & \mathbb C^N
\end{tikzcd}
```

## Facts & Assumptions

**Given:** $N\ge1$, a generator $c\in\mathbb C^N$, the resulting circulant $C(c)$, and an arbitrary right-hand side $b\in\mathbb C^N$.

[F1] The entries of the circulant are $C(c)_{ij}=c_{(i-j)\bmod N}$, with indices $0,\ldots,N-1$. [[def-toeplitz-circulant-and-displacement-notation]]

[F2] Cyclic convolution is $(c*_N x)_i=\sum_{j=0}^{N-1}c_{(i-j)\bmod N}x_j$. [[def-cyclic-convolution-on-z-mod-n]]

[F3] The canonical unitary DFT satisfies $\mathcal F_N(c*_N x)=\sqrt N(\mathcal F_Nc)\odot(\mathcal F_Nx)$, where $\odot$ is coordinatewise multiplication. [[lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product]]

[F4] The canonical unitary DFT is bijective with inverse given by the positive-sign finite Fourier transform. [[thm-finite-fourier-inversion]]

## Proof

1.1 For each $i$, matrix multiplication and [F1] give $(C(c)x)_i=\sum_{j=0}^{N-1}c_{(i-j)\bmod N}x_j$, which is $(c*_N x)_i$ by [F2]. Thus $C(c)x=c*_N x$. [given, F1, F2, algebra]

2.1 Apply $\mathcal F_N$ to the identity in step 1.1 and use [F3]. The $k$-th coordinate is $\sqrt N(\mathcal F_Nc)(k)(\mathcal F_Nx)(k)=\lambda_k(\mathcal F_Nx)(k)$, by the definition of $\lambda_k$. Hence $\mathcal F_N C(c)=\operatorname{diag}(\lambda)\mathcal F_N$. [given, F3, step 1.1, algebra]

3.1 Since [F4] supplies $\mathcal F_N^{-1}$, multiply the identity of step 2.1 by $\mathcal F_N^{-1}$ on the left to obtain the displayed diagonalization. [F4, step 2.1, algebra]

4.1 Applying $\mathcal F_N$ to $C(c)x=b$ gives the independent scalar equations $\lambda_k(\mathcal F_Nx)(k)=(\mathcal F_Nb)(k)$. A zero $\lambda_k$ therefore requires $(\mathcal F_Nb)(k)=0$, and this condition is sufficient because each nonzero mode can be divided by $\lambda_k$ and each zero-mode coordinate can be chosen freely; [F4] converts the resulting vector back to $x$. All modes are nonzero exactly when the diagonal matrix, hence $C(c)$, is invertible. [given, F4, step 2.1, algebra] ∎
