---
id: thm-na-dct-ii-orthogonality-inverse-and-dft-extension
kind: theorem
title: "DCT-II is orthogonal with the stated endpoint normalization and even extension"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 1
deps: [def-na-dct-ii-and-dst-i-even-odd-extension, def-unitary-discrete-fourier-transform-on-z-mod-n, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-complex-exponential-addition-and-real-extension, thm-complex-numbers-form-a-field, thm-product-to-sum-and-sum-to-product-identities, thm-kernel-and-fibres-of-complex-exponential, thm-sine-cosine-zero-sets-and-fundamental-period, thm-rank-nullity, thm-invertible-matrix-theorem]
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

Let $C_{kj}=\cos(\pi(j+1/2)k/N)$ for $0\le j,k<N$. Then $CC^T=\operatorname{diag}(N,N/2,\ldots,N/2)$, so the inverse DCT-II is $x_j=N^{-1}(X_0+2\sum_{k=1}^{N-1}X_k\cos(\pi(j+1/2)k/N))$. For the even extension $E_Nx$ of [[def-na-dct-ii-and-dst-i-even-odd-extension]], the unitary DFT also satisfies $(\mathcal F_{2N}E_Nx)(k)=\sqrt{2/N}\,e^{\pi i k/(2N)}X_k$ for $0\le k<N$.

## Facts & Assumptions

**Given:** An integer $N\ge1$, a vector $x\in\mathbb R^N$, the DCT-II matrix $C$, and the even extension $E_Nx$.

[F1] $X_k=\sum_{j=0}^{N-1}x_j\cos(\pi(j+1/2)k/N)$ and $(E_Nx)_j=(E_Nx)_{2N-1-j}=x_j$ ([[def-na-dct-ii-and-dst-i-even-odd-extension]]).

[F2] $(\mathcal F_{2N}z)(k)=(2N)^{-1/2}\sum_{m=0}^{2N-1}z_m e^{-2\pi i mk/(2N)}$ ([[def-unitary-discrete-fourier-transform-on-z-mod-n]]).

[F3] $e^{i\theta}=\cos\theta+i\sin\theta$, $e^{u+v}=e^ue^v$, and the complex field laws hold ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-complex-exponential-addition-and-real-extension]], [[thm-complex-numbers-form-a-field]]).

[F4] For real $u,v$, $\cos u\cos v=\tfrac12(\cos(u-v)+\cos(u+v))$ ([[thm-product-to-sum-and-sum-to-product-identities]]).

[F5] $e^z=1$ exactly when $z\in2\pi i\mathbb Z$, and $\sin t=0$ exactly when $t\in\pi\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[F6] Rank–nullity holds for a linear map with finite-dimensional domain ([[thm-rank-nullity]]).

[F7] A square matrix is invertible exactly when its multiplication map is a linear isomorphism; equivalently, unique solvability for every right-hand side implies invertibility ([[thm-invertible-matrix-theorem]]).

## Proof

1.1 For $1\le r<2N$, put $\theta=\pi r/N$ and $S_r=\sum_{j=0}^{N-1}\cos(\theta(j+1/2))$. Since $0<\theta<2\pi$, [F5] gives $e^{i\theta}\ne1$; the finite geometric identity with $z=e^{i\theta}$ therefore gives the complex sum $e^{i\theta/2}(1-e^{iN\theta})/(1-e^{i\theta})$. If $r$ is even, its numerator is zero. If $r$ is odd, $e^{iN\theta}=-1$ and $1-e^{i\theta}=-2ie^{i\theta/2}\sin(\theta/2)$ by [F3]. Here $0<\theta/2<\pi$, so [F5] also implies $\sin(\theta/2)\ne0$; the quotient is purely imaginary. In either case its real part is zero, hence $S_r=0$; also $S_0=N$. [given, F3, F5, algebra]

2.1 Applying [F4] to each product $C_{kj}C_{\ell j}$ gives $(CC^T)_{k\ell}=\tfrac12(S_{|k-\ell|}+S_{k+\ell})$. If $k=\ell=0$, this is $N$. If $k=\ell>0$, then $S_0=N$ and $0<2k<2N$, so it is $N/2$. If $k\ne\ell$, then $0<|k-\ell|<N$ and $0<k+\ell<2N$, so both sums vanish by step 1.1. Thus $CC^T=\operatorname{diag}(N,N/2,\ldots,N/2)$. [F1, F4, step 1.1, algebra]

3.1 Let $D=\operatorname{diag}(N,N/2,\ldots,N/2)$. Since $CC^T=D$ and $D$ is invertible, $R=C^TD^{-1}$ satisfies $CR=I$. Hence every $y\in\mathbb R^N$ has a preimage $Ry$ under $C$, so the linear map defined by $C$ is surjective. Its rank is $N$, and [F6] gives nullity zero; therefore it is bijective and [F7] makes $C$ invertible. The identity $CR=I$ then gives $R=C^{-1}$, whose $(j,k)$ entry yields the stated inverse formula. [step 2.1, F6, F7, algebra]

4.1 For each $j$, the two terms of the DFT of $E_Nx$ at positions $j$ and $2N-1-j$ are $x_j e^{-\pi i jk/N}$ and $x_j e^{\pi i (j+1)k/N}$, since $e^{-2\pi ik}=1$. Their sum is $2x_j e^{\pi i k/(2N)}\cos(\pi(j+1/2)k/N)$ by [F3]. Summing over $j$ and applying the normalization in [F2] gives $(\mathcal F_{2N}E_Nx)(k)=2(2N)^{-1/2}e^{\pi i k/(2N)}X_k=\sqrt{2/N}e^{\pi i k/(2N)}X_k$. [F1, F2, F3, algebra] ∎
