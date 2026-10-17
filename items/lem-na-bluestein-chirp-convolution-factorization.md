---
id: lem-na-bluestein-chirp-convolution-factorization
kind: lemma
title: "Bluestein’s chirp identity embeds an arbitrary DFT in a padded cyclic convolution"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 0
deps: [def-unitary-discrete-fourier-transform-on-z-mod-n, def-unnormalised-engineering-dft-and-conversion, def-cyclic-convolution-on-z-mod-n, lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product, thm-finite-fourier-inversion, def-integers-modulo-n, thm-integers-modulo-n-basic-algebra, thm-standard-representatives-modulo-n, def-finite-sum-in-a-commutative-monoid, lem-finite-sum-reindexing-and-fubini, thm-complex-exponential-addition-and-real-extension, thm-complex-numbers-form-a-field, def-rational-power, lem-rational-power-laws]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "C. Sidney Burrus, Fast Fourier Transforms, Chapter 5 §5.2, equations (5.15)–(5.17)"
      url: https://repository.rice.edu/server/api/core/bitstreams/01e9e0a5-fa6f-453d-a1b5-8209fa0a565c/content
---

## Statement

Let $N\ge1$, $M\ge2N-1$, and $x\in\mathbb C^N$. Put $\alpha_j=e^{-\pi i j^2/N}$ for $0\le j<N$, $\beta_t=e^{\pi i t^2/N}$ for $-(N-1)\le t\le N-1$, and $\gamma_k=e^{-\pi i k^2/N}$ for $0\le k<N$. Embed $a_j=\alpha_jx_j$ for $0\le j<N$ and $a_j=0$ otherwise in $\mathbb C^M$. Embed $b_{[t]_M}=\beta_t$ for $-(N-1)\le t\le N-1$ and set its other entries to zero; this is well-defined because these $2N-1$ integers have distinct classes modulo $M$. Let $c=a*_M b$ be the unnormalised cyclic convolution on $\mathbb Z/M\mathbb Z$. Then, for $0\le k<N$,

$$
(\mathcal F_Nx)(k)=N^{-1/2}\gamma_k\,c_k,
$$

where $\gamma_k=e^{-\pi i k^2/N}$. Moreover $c=\sqrt M\,\mathcal F_M^{-1}((\mathcal F_Ma)\odot(\mathcal F_Mb))$, where $\odot$ is coordinatewise multiplication. The identity is exact for every $N$; padding to a radix-two $M$ is an implementation choice, not a mathematical restriction.

## Facts & Assumptions

**Given:** Integers $N\ge1$, $M\ge2N-1$, a vector $x\in\mathbb C^N$, and the definitions of $\mathcal F_N$, $\mathcal F_M$, and cyclic convolution.

[F1] The unnormalised DFT is $X_k=\sum_{j=0}^{N-1}x_je^{-2\pi ijk/N}$ and $\mathcal F_Nx=N^{-1/2}X$ ([[def-unnormalised-engineering-dft-and-conversion]], [[def-unitary-discrete-fourier-transform-on-z-mod-n]]).

[F2] Cyclic convolution is $(a*_Mb)_k=\sum_{j=0}^{M-1}a_jb_{[k-j]_M}$, and its unitary DFT satisfies $\mathcal F_M(a*_Mb)=\sqrt M(\mathcal F_Ma)\odot(\mathcal F_Mb)$ ([[def-cyclic-convolution-on-z-mod-n]], [[lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product]]).

[F3] The unitary DFT on $\mathbb Z/M\mathbb Z$ is invertible with inverse given by the positive-sign unitary DFT ([[thm-finite-fourier-inversion]]).

[F4] The map $t\mapsto[t]_M$ is injective on the integer interval $[-(N-1),N-1]$ when $M\ge2N-1$; complex exponentials satisfy their addition law ([[def-integers-modulo-n]], [[thm-integers-modulo-n-basic-algebra]], [[thm-standard-representatives-modulo-n]], [[thm-complex-exponential-addition-and-real-extension]], [[thm-complex-numbers-form-a-field]]).

[F5] Positive rational powers satisfy $(rs)^{1/2}=r^{1/2}s^{1/2}$ for positive $r,s$ ([[def-rational-power]], [[lem-rational-power-laws]]).

## Proof

1.1 If two integers $t,t'$ in $[-(N-1),N-1]$ have the same class modulo $M$, then $M$ divides $t-t'$. But $|t-t'|\le2N-2<M$; the only multiple of $M$ in this range is zero, so $t=t'$. Thus the definition of $b$ assigns at most one value to each residue. For each $0\le k<N$ and $0\le j<N$, the difference $k-j$ lies in $[-(N-1),N-1]$, so the cyclic-convolution sum reduces exactly to $c_k=\sum_{j=0}^{N-1}\alpha_jx_j\beta_{k-j}$. [given, F4, choose]

2.1 For every such $j,k$, $-j^2+(k-j)^2-k^2=-2kj$, hence $\alpha_j\beta_{k-j}\gamma_k=e^{-2\pi ijk/N}$. Summing this identity against $x_j$ and using [F1] gives $\gamma_kc_k=X_k$ and therefore $(\mathcal F_Nx)(k)=N^{-1/2}\gamma_kc_k$. [step 1.1, F1, F4, algebra]

3.1 Applying [F2] to $a,b$ gives $\mathcal F_Mc=\sqrt M((\mathcal F_Ma)\odot(\mathcal F_Mb))$. Applying the positive-sign inverse in [F3] and pulling the scalar $\sqrt M$ through its finite sum gives $c=\sqrt M\,\mathcal F_M^{-1}((\mathcal F_Ma)\odot(\mathcal F_Mb))$, as claimed. [F2, F3, F5, algebra] ∎
