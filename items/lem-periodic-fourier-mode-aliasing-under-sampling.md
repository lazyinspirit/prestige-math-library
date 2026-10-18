---
id: lem-periodic-fourier-mode-aliasing-under-sampling
kind: lemma
title: "Periodic Fourier modes alias modulo the grid size"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-periodic-fourier-collocation-grid, thm-finite-fourier-inversion, lem-orthogonality-of-characters-on-a-finite-cyclic-group, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-complex-exponential-addition-and-real-extension, thm-kernel-and-fibres-of-complex-exponential, thm-quarter-turn-values-and-shift-formulas, thm-sine-and-cosine-derivatives]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice axiom is used; the congruence and sample identities are finite."
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Benjamin Seibold, MIT 18.336 Lecture 24: Pseudospectral Methods"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/f37c267439433cc6f62b0dec078e3d4f_MIT18_336S09_lec24.pdf"
      locator: "Complete 4-page lecture note, PDF pp. 1–2; Fourier pseudospectral products and the 2/3 truncation rule."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 7"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 7, printed pp. 231–244 (complete book PDF); periodic grids and Fourier differentiation."
---

## Statement

Let $N\ge2$ and $x_j=2\pi j/N$. If integers $k,r$ satisfy $k\equiv r\pmod N$, then
$$
e^{ikx_j}=e^{irx_j}\qquad(0\le j<N).
$$
Consequently, sampling a product of Fourier modes with frequencies $k_1,\ldots,k_s$ gives the same nodal data as the single mode whose frequency is the sum $\sum_{\ell=1}^s k_\ell$ reduced modulo $N$.

The frequency space in [[def-periodic-fourier-collocation-grid]] is real-valued. For complex data, let $\mathcal T_N^{\mathbb C}$ be the space obtained by allowing complex coefficients in that same real basis, and extend its cardinal formula by
$$
I_N^{\mathbb C}V(x):=\sum_{j=0}^{N-1}V_jL_j(x),\qquad V\in\mathbb C^N.
$$
Then $I_N^{\mathbb C}V$ is the unique member of $\mathcal T_N^{\mathbb C}$ with nodal data $V$. On real data this formula agrees with $I_N$; in the even case the complex Nyquist samples are interpolated by the real basis function $\cos(Nx/2)$.

## Facts & Assumptions

**Given:** An integer $N\ge2$, its periodic grid, and integers $k,r$ with $k-r=qN$ for some integer $q$.

[F1] [[def-periodic-fourier-collocation-grid]]: the grid nodes are $x_j=2\pi j/N$, the cardinal functions are $L_j$, and on the grid the complexified basis modes give one complete residue system modulo $N$ (the even-grid Nyquist cosine has the samples of the residue $N/2$); the complexification and its cardinal formula are specified in the Statement.

[F2] [[thm-complex-exponential-addition-and-real-extension]]: $e^{z+w}=e^ze^w$; [[thm-kernel-and-fibres-of-complex-exponential]]: $e^w=1$ when $w\in2\pi i\mathbb Z$.

[F3] [[lem-orthogonality-of-characters-on-a-finite-cyclic-group]]: the sum over a complete residue system of the characters at $i-j$ is $N$ when $i=j$ and $0$ otherwise.

[F4] [[thm-finite-fourier-inversion]]: complex nodal data on $\mathbb Z/N\mathbb Z$ have a unique finite Fourier representation.

[F5] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: $e^{it}=\cos t+i\sin t$ for real $t$.

[F6] [[thm-sine-and-cosine-derivatives]] and [[thm-quarter-turn-values-and-shift-formulas]]: $\sin0=0$ and $\sin(x+\pi)=-\sin x$, hence $\sin(m\pi)=0$ for every integer $m$.

## Proof

1.1 Since $k-r=qN$, for every grid index $j$ we have $e^{i(k-r)x_j}=e^{2\pi iqj}=1$ by [F2]. Multiplying by $e^{irx_j}$ gives $e^{ikx_j}=e^{irx_j}$. [given, F1, F2, algebra]

2.1 For frequencies $k_1,\ldots,k_s$, multiplication of the sampled modes gives $\prod_{\ell=1}^s e^{ik_\ell x_j}=e^{i(\sum_\ell k_\ell)x_j}$ by the exponential addition law in [F2]. Applying step 1.1 to this sum and any congruent representative proves the product aliasing identity. [given, F2, step 1.1, algebra]

3.1 For $\Delta=x_i-x_j$, Euler's identity [F5] writes the odd-grid kernel as $L_j(x_i)=N^{-1}\sum_{k=-K}^{K}e^{ik\Delta}$ when $N=2K+1$. For an even grid $N=2K$, it writes the kernel as $L_j(x_i)=N^{-1}\sum_{k=-K+1}^{K}e^{ik\Delta}$, because $K\Delta=\pi(i-j)$ and [F6] makes the sine term at this Nyquist frequency vanish. In either branch $e^{iN\Delta}=1$ by [F2], so the sum over these complete residue systems equals the sum over $k=0,\ldots,N-1$. Character orthogonality [F3] therefore gives $L_j(x_i)=1$ for $i=j$ and $0$ otherwise, so the displayed complex-linear cardinal formula interpolates every $V\in\mathbb C^N$. For uniqueness inside $\mathcal T_N^{\mathbb C}$, expand each low-frequency cosine/sine pair by [F5] into its two characters. On an odd grid these are the residues $-K,\ldots,K$; on an even grid they are $-K+1,\ldots,K-1$ together with the Nyquist sample $\cos(Kx_j)=e^{iKx_j}$. The real-basis coefficients map invertibly to these character coefficients (the low modes use the two Euler coefficients and the Nyquist coefficient is unchanged). If a member of $\mathcal T_N^{\mathbb C}$ has zero samples, inversion [F4] makes every character coefficient zero, hence the member is zero. The product samples from step 2.1 therefore have the unique cardinal interpolant. In the even Nyquist case the interpolant is $\cos(Nx/2)$, not the complex exponential as a function away from the grid. [F1, F2, F3, F4, F5, F6, step 2.1, algebra] ∎

