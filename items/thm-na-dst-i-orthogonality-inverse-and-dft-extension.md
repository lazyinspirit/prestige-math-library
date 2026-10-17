---
id: thm-na-dst-i-orthogonality-inverse-and-dft-extension
kind: theorem
title: "DST-I is orthogonal with the stated endpoint normalization and odd extension"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 1
deps: [def-na-dct-ii-and-dst-i-even-odd-extension, def-unitary-discrete-fourier-transform-on-z-mod-n, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-complex-exponential-addition-and-real-extension, thm-complex-numbers-form-a-field, thm-product-to-sum-and-sum-to-product-identities, thm-kernel-and-fibres-of-complex-exponential]
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

Let $S_{kj}=\sin(\pi jk/(N+1))$ for $1\le j,k\le N$. Then $S^TS=((N+1)/2)I_N$, so the inverse DST-I is $x_j=2(N+1)^{-1}\sum_{k=1}^{N}Y_k\sin(\pi jk/(N+1))$. For the odd extension $O_Nx$ of [[def-na-dct-ii-and-dst-i-even-odd-extension]], $(\mathcal F_{2(N+1)}O_Nx)(k)=-2i(2(N+1))^{-1/2}Y_k$ for $1\le k\le N$.

## Facts & Assumptions

**Given:** An integer $N\ge1$, a vector $x\in\mathbb R^N$, the DST-I matrix $S$, and the odd extension $O_Nx$.

[F1] $Y_k=\sum_{j=1}^{N}x_j\sin(\pi jk/(N+1))$; $(O_Nx)_0=(O_Nx)_{N+1}=0$, $(O_Nx)_j=x_j$, and $(O_Nx)_{2(N+1)-j}=-x_j$ ([[def-na-dct-ii-and-dst-i-even-odd-extension]]).

[F2] $(\mathcal F_{2(N+1)}z)(k)=(2(N+1))^{-1/2}\sum_{m=0}^{2(N+1)-1}z_m e^{-2\pi i mk/(2(N+1))}$ ([[def-unitary-discrete-fourier-transform-on-z-mod-n]]).

[F3] Euler's identity, the complex exponential addition law, and field laws hold ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-complex-exponential-addition-and-real-extension]], [[thm-complex-numbers-form-a-field]]).

[F4] For real $u,v$, $\sin u\sin v=\tfrac12(\cos(u-v)-\cos(u+v))$ ([[thm-product-to-sum-and-sum-to-product-identities]]).

[F5] $e^z=1$ exactly when $z\in2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

## Proof

1.1 For $1\le r\le2N$, let $T_r=\sum_{j=1}^{N}\cos(\pi rj/(N+1))$. Put $z=e^{\pi i r/(N+1)}$. Since $0<\pi r/(N+1)<2\pi$, [F5] gives $z\ne1$; also $z^{2(N+1)}=1$, so the geometric sum over $j=0,\ldots,2(N+1)-1$ is zero. Pair the terms with indices $j$ and $2(N+1)-j$ for $1\le j\le N$; they are conjugates, while the unpaired terms are $1$ and $(-1)^r$. Taking real parts gives $1+(-1)^r+2T_r=0$. Hence $T_r=-1$ for even $r$ and $T_r=0$ for odd $r$; also define $T_0=N$. [given, F3, F5, algebra]

2.1 Applying [F4] to each product $S_{kj}S_{\ell j}$ gives $(S^TS)_{k\ell}=\tfrac12(T_{|k-\ell|}-T_{k+\ell})$. If $k=\ell$, then the first term is $T_0=N$ and the second is $T_{2k}=-1$, giving $(N+1)/2$. If $k\ne\ell$, then $|k-\ell|$ and $k+\ell$ have the same parity and both are between $1$ and $2N$; their $T$ values from step 1.1 agree, giving zero. Therefore $S^TS=((N+1)/2)I_N$. [F1, F4, step 1.1, algebra]

3.1 Since $S$ is symmetric and $(N+1)/2>0$, step 2.1 gives $S^{-1}=2(N+1)^{-1}S$, proving the inverse formula. For the odd extension, pair its positions $j$ and $2(N+1)-j$: their DFT terms are $x_j e^{-\pi i jk/(N+1)}-x_j e^{\pi i jk/(N+1)}=-2ix_j\sin(\pi jk/(N+1))$ by [F3]. Summing and applying [F2] gives the claimed DFT relation. [F1, F2, F3, step 2.1, algebra] ∎
