---
id: lem-qa-26-hhl-sine-window-kernel-moment
kind: lemma
title: "Second moment of the signed sine-window phase kernel"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qa-26-hhl-sine-window
  - thm-qa-exact-binary-qft-circuit-correct
  - lem-qa-phase-estimation-geometric-sum
  - lem-qa-13-pi-rational-bounds
  - lem-qa-phase-estimation-sine-chord-bounds
  - cor-sine-and-cosine-are-one-lipschitz
  - thm-sine-and-cosine-derivatives
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all outcome sums are finite, and the displayed convergent comparison is choice-free."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Aram W. Harrow, Avinatan Hassidim, and Seth Lloyd, Quantum algorithm for linear systems of equations"
      url: https://arxiv.org/pdf/0811.3171
      locator: "Appendix A, especially §§A1–A3, PDF pp. 5–11; Hermitian embedding §A4, PDF pp. 11–12."
    - title: "Andrew M. Childs, Robin Kothari, and Rolando D. Somma, Quantum algorithm for systems of linear equations with exponentially improved dependence on precision"
      url: https://arxiv.org/pdf/1511.02306
      locator: "QLSP oracle model and Theorem 2, PDF pp. 2–5; used to compare, not to replace a local sparse-simulation proof."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Complete 191-page notes; phase estimation §4.3, printed p. 19; amplitude amplification §19.3; Hamiltonian simulation chapters 27 and 29."
---

## Statement

Let $t_0=2048\kappa/\epsilon$, $0<\epsilon\le1$, $\kappa\ge1$, and let $T$ be the least power of two at least $8(t_0+1)$. For any $\lambda\in[-1,1]$, prepare [[def-qa-26-hhl-sine-window]], apply the controlled phases $e^{i\lambda\tau t_0/T}$ and the negative-sign Fourier transform, then decode $y$ to signed $k$. With probability $p_k(\lambda)$, put $\delta_k=\lambda t_0-2\pi k$. Then
$$\sum_{k=-T/2}^{T/2-1}p_k(\lambda)\,\delta_k^2<300.$$

## Facts & Assumptions

**Given:** The sine-window circuit and OP5 parameter range.

[F1] [[thm-qa-exact-binary-qft-circuit-correct]]: the negative-sign Fourier transform has basis amplitudes $T^{-1/2}e^{-2\pi i k\tau/T}$, so the measured amplitude is the finite Fourier sum of the prepared coefficients.

[F2] [[lem-qa-phase-estimation-geometric-sum]]: finite exponential sums equal their geometric-series quotient when the ratio is not one; the coincident-ratio case is their continuous finite-sum limit.

[F3] [[lem-qa-13-pi-rational-bounds]]: $3<\pi<22/7<16/5$.

[F4] [[lem-qa-phase-estimation-sine-chord-bounds]]: $\sin v\le v$ for $v\ge0$.

[F5] [[cor-sine-and-cosine-are-one-lipschitz]]: cosine changes by at most the change in its real argument.

[F6] [[thm-sine-and-cosine-derivatives]]: $\cos0=1$.

[F7] [[lem-qa-phase-estimation-sine-chord-bounds]]: $\sin(\pi u)\ge2u$ for $0\le u\le1/2$.

## Proof

1.1 Put $\theta=\lambda t_0/(2\pi)$ and $\delta=2\pi(\theta-k)$. Expanding sine into its two exponentials and summing the two geometric series from [F2] gives the amplitude
$$\alpha_k=\frac{\sqrt2}{T}e^{i\delta(1-1/T)/2}\,\frac{\cos(\delta/2)\cos(\delta/(2T))\sin(\pi/(2T))}{\sin((\delta+\pi)/(2T))\sin((\delta-\pi)/(2T))}.$$
At a removable zero this formula means its continuous limit. By [F1], $p_k=|\alpha_k|^2$ and $\sum_kp_k=1$. [given, F1, F2, algebra]

1.2 For $|\delta|\ge2\pi$, set $x=|\delta|/(2T)$ and $a=\pi/(2T)$. Signed decoding and $|\lambda|\le1$ give $x\le\pi/2+t_0/(2T)<\pi/2+1/16$; also $x\ge2a$. Since $t_0\ge2048$, $a<1/100$, hence $x+a<\pi/2+1/10$. On $[0,\pi/2+1/10]$ one has $\sin u\ge u/2$: on $[0,\pi/2]$ put $s=v/\pi\in[0,1/2]$ and apply [F7] to get $\sin v\ge2v/\pi>v/2$ using [F3]; on the remaining interval, $\sin u=\cos(u-\pi/2)\ge1-1/10=9/10$ by [F5] and [F6], while $u/2<(16/5)/4+1/20=17/20<9/10$. Therefore
$$|\sin^2x-\sin^2a|=\sin(x+a)\sin(x-a)\ge\tfrac14(x^2-a^2)\ge\tfrac{3\delta^2}{64T^2}.$$
Using $|\cos|\le1$ and $\sin a\le a$ in step 1.1 yields $p_k\le(2048\pi^2/9)\delta^{-4}$. [F3, F4, F5, F6, F7, step 1.1, algebra]

1.3 The outcomes with $|\delta|<2\pi$ contribute at most $4\pi^2$ because their total probability is at most one. For the rest, group integers by $n\le|\theta-k|<n+1$, $n\ge1$; each shell has at most two integers. Step 1.2 gives
$$\sum_{|\delta_k|\ge2\pi}p_k\delta_k^2\le\frac{2048\pi^2}{9}\frac{2}{4\pi^2}\sum_{n=1}^{\infty}\frac1{n^2}\le\frac{2048}{9},$$
where $\sum_{n\ge1}n^{-2}\le1+\int_1^\infty x^{-2}dx=2$. By [F3], $4\pi^2<4(16/5)^2<41$, so the total is less than $41+2048/9<300$. [F3, step 1.2, algebra] ∎
