---
id: lem-periodic-fourier-mode-aliasing-under-sampling
kind: lemma
title: "Periodic Fourier modes alias modulo the grid size"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-periodic-fourier-collocation-grid, thm-finite-fourier-inversion, thm-complex-exponential-addition-and-real-extension, thm-kernel-and-fibres-of-complex-exponential]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice axiom is used; the congruence and sample identities are finite."
verification:
  precheck: pending
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
Consequently, sampling a product of Fourier modes with frequencies $k_1,\ldots,k_s$ gives the same nodal data as the single mode whose frequency is the sum $\sum_{\ell=1}^s k_\ell$ reduced modulo $N$. The interpolant is the unique member of the frequency space in [[def-periodic-fourier-collocation-grid]] with those data.

## Facts & Assumptions

**Given:** An integer $N\ge2$, its periodic grid, and integers $k,r$ with $k-r=qN$ for some integer $q$.

[F1] [[def-periodic-fourier-collocation-grid]]: the grid nodes are $x_j=2\pi j/N$, and Fourier interpolation uses a complete set of frequency residues modulo $N$.

[F2] [[thm-complex-exponential-addition-and-real-extension]]: $e^{z+w}=e^ze^w$; [[thm-kernel-and-fibres-of-complex-exponential]]: $e^w=1$ when $w\in2\pi i\mathbb Z$.

[F3] [[thm-finite-fourier-inversion]]: nodal data on $\mathbb Z/N\mathbb Z$ have a unique finite Fourier representation.

## Proof

1.1 Since $k-r=qN$, for every grid index $j$ we have $e^{i(k-r)x_j}=e^{2\pi iqj}=1$ by [F2]. Multiplying by $e^{irx_j}$ gives $e^{ikx_j}=e^{irx_j}$. [given, F1, F2, algebra]

2.1 For frequencies $k_1,\ldots,k_s$, multiplication of the sampled modes gives $\prod_{\ell=1}^s e^{ik_\ell x_j}=e^{i(\sum_\ell k_\ell)x_j}$ by the exponential addition law in [F2]. Applying step 1.1 to this sum and any congruent representative proves the product aliasing identity. [given, F2, step 1.1, algebra]

3.1 For the summed frequency, reduce modulo $N$ to the representative in the residue set defining $\mathcal T_N$. Step 1.1 gives the same samples for this representative, and [F3] makes its interpolant unique. This is a statement about the sampled product and makes no claim that its continuous product equals the representative mode away from the grid. [F1, F3, step 1.1, step 2.1] ∎

