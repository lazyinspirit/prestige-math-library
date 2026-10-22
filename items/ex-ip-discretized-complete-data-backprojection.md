---
id: ex-ip-discretized-complete-data-backprojection
kind: example
title: A finite complete-angle filtered-backprojection calculation
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
aliases: []
deps:
  - alg-ip-filtered-backprojection-complete-data
  - def-countable-choice
  - def-unitary-discrete-fourier-transform-on-z-mod-n
  - def-unnormalised-engineering-dft-and-conversion
  - def-recursive-radix-two-fast-fourier-transform
  - thm-radix-two-fft-correctness
  - thm-finite-fourier-inversion
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Frank Natterer, X-ray Tomography, in Inverse Problems and Imaging"
      url: "https://www.researchgate.net/publication/profile/Frank-Natterer/publication/226521751_X-ray_Tomography/links/02e7e525392792a0a3000000/X-ray-Tomography.pdf"
      locator: "§3.1, pp. 26–28: filtering and angular backprojection quadrature for sampled data."
---

## Example

Assume Countable Choice for the continuous backprojection convention. As a finite-grid illustration, take eight equally spaced full-circle directions $\theta_j=(\cos(2\pi j/8),\sin(2\pi j/8))$, $j=0,\ldots,7$, four detector offsets $s_m=m-2$ for $m=0,1,2,3$, detector spacing $\Delta s=1$, and the synthetic row $G_j=(0,0,1,0)$ at every direction. Apply the length-four radix-two FFT to each row, multiply frequency $k$ by the declared sampled ramp $\lambda_k=2\pi\min(k,4-k)/4$, and invert the finite transform. Each filtered row is $Q=(0,-\pi/4,\pi/2,-\pi/4)$. With the eight-point trapezoidal angular rule of weight $\Delta\theta=\pi/4$, the one-pixel backprojection at $x=0$ is
$$\widetilde f(0)=\frac1{4\pi}\Delta\theta\sum_{j=0}^7Q_j[2]=\frac\pi4.$$
This is the exact output of the specified finite computation. The array is a synthetic discrete sinogram; no claim is made that the finite detector or angle grid exactly represents a continuous phantom or that this output converges to one. The continuous theorem assumes full continuous data and makes no finite-sampling, truncation, or noise guarantee.

## Example references

[Frank Natterer, “X-ray Tomography,” §3.1](https://www.researchgate.net/publication/profile/Frank-Natterer/publication/226521751_X-ray_Tomography/links/02e7e525392792a0a3000000/X-ray-Tomography.pdf)

## Facts & Assumptions

**Given:** The finite array and quadrature convention in the Example, Countable Choice, and the recursive radix-two FFT on length four.

[A1] Countable Choice, written $\mathrm{AC}_\omega$, means every sequence of nonempty sets has a choice function. ([[def-countable-choice]])

[F1] [[alg-ip-filtered-backprojection-complete-data]]: take the negative-sign $2\pi$ Fourier transform in detector offset, multiply by $2\pi|\sigma|$, inverse transform, backproject over the full circle, and scale by $1/(4\pi)$.

[F2] [[def-recursive-radix-two-fast-fourier-transform]]: $\operatorname{FFT}_m$ is the recursive even/odd transform on arrays of length $2^m$.

[F3] [[thm-radix-two-fft-correctness]]: for every length $2^m$ input, $\operatorname{FFT}_m$ returns the unnormalised engineering DFT.

[F4] [[def-unnormalised-engineering-dft-and-conversion]]: $X_k(G)=\sum_{m=0}^{N-1}G_m e^{-2\pi i km/N}$ and $G_m=N^{-1}\sum_{k=0}^{N-1}X_k(G)e^{2\pi i km/N}$.

[F5] [[thm-finite-fourier-inversion]]: the finite inverse transform has positive sign and factor $N^{-1/2}$ in the unitary convention; after the engineering rescaling the inverse formula has factor $1/N$.

## Verification

1.1 The only nonzero detector sample is at $m=2$, so the engineering DFT is $X_k=e^{-2\pi i k(2)/4}=(-1)^k$. By [F2] and [F3], the length-four radix-two FFT returns $X=(1,-1,1,-1)$. The sampled ramp is $\lambda=(0,\pi/2,\pi,\pi/2)$, hence its filtered frequency array is $Y=(0,-\pi/2,\pi,-\pi/2)$. [given, F2, F3, F4, algebra]

2.1 The inverse formula [F4] gives $Q_m=\frac14\sum_{k=0}^3Y_ke^{2\pi i km/4}$. For $m=0,1,2,3$ the sums are respectively $0,-\pi,2\pi,-\pi$, so $Q=(0,-\pi/4,\pi/2,-\pi/4)$. [F4, F5, step 1.1, algebra]

3.1 At $x=0$, the detector coordinate is $s=0$, which is bin $m=2$ for every direction. Therefore the declared angular quadrature and backprojection scale give $\widetilde f(0)=\frac1{4\pi}\frac\pi4\sum_{j=0}^7Q_j[2]=\frac1{4\pi}\frac\pi4(8)(\pi/2)=\pi/4$. This verifies the displayed finite output only; no equality with a continuous source value is used. [given, A1, F1, step 2.1, algebra] ∎
