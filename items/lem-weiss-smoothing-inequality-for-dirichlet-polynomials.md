---
id: lem-weiss-smoothing-inequality-for-dirichlet-polynomials
kind: lemma
title: Smoothed mean-square majorant for finite Dirichlet polynomials
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-weiss-smoothed-mellin-kernel
  - thm-minkowski-inequality-for-integrals
  - thm-plancherel
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - thm-riesz-fischer-completeness-of-l-p
  - def-countable-choice
proof_strategy: direct
axiom_use: Countable Choice is inherited through the L2 Plancherel supplier.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: A. R. Weiss, The least prime ideal
      url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
      locator: Lemma 3.1 and Corollary 3.3, printed p. 68–70.
    - title: Jesse Thorner and Asif Zaman, A bound for the least prime ideal in the Chebotarev density theorem
      url: https://msp.org/ant/2017/11-5/ant-v11-n5-p04-s.pdf
      locator: Lemma 4.3(vi) and its use in the proof of Theorem 4.2, printed pp. 1156–1158.
---

## Statement

Assume Countable Choice. Let $k\ge2$ be an integer, $T>0$, and $A\ge\sqrt{k}\,T$. Let $(b_m)_{m\ge1}$ be a sequence of complex numbers with $\sum_m|b_m|<\infty$. With $H_{k,A}$ as defined in the Weiss smoothing-kernel definition, one has
$$\int_{-T}^{T}\left|\sum_{m\ge1}b_m m^{-it}\right|^2dt \le \frac{25\pi}{8}\int_0^\infty\left|\sum_{m\ge1}b_mH_{k,A}(x/m)\right|^2\frac{dx}{x}.$$

## Statement references

[[def-weiss-smoothed-mellin-kernel|Weiss smoothing kernel]]

## Facts & Assumptions

**Given:** Countable Choice, $k\ge2$, $T>0$, $A\ge\sqrt{k}\,T$, and the absolutely summable sequence $(b_m)$.

[F1] For real $t$ with $|t|\le A/\sqrt{k}$, $h_{k,A}(it)\ge4/5$. [[def-weiss-smoothed-mellin-kernel]]

[F2] Fourier transformation extends to a unitary map on complex $L^2(\mathbb R)$ and preserves the $L^2$ norm. [[thm-plancherel]]

[F3] For $f\in L^1\cap L^2$, the integral Fourier transform and the Plancherel transform agree as $L^2$ functions. [[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]

[F4] If $f,g\in L^2(\mathbb R)$, then $\|f+g\|_2\le\|f\|_2+\|g\|_2$. [[thm-minkowski-inequality-for-integrals]]

[F5] Under Countable Choice, $L^2(\mathbb R)$ is complete in its norm. [[thm-riesz-fischer-completeness-of-l-p]]

[A1] Countable Choice supplies the Plancherel and L2-completeness interfaces used for the absolutely summable limit. [[def-countable-choice]]

## Proof

**Proof technique:** Plancherel applied to a translate sum.

**Given:** The data in the Statement.

1.1 For a finite sequence $(b_m)_{m\le M}$, define $g_M(u)=\sum_{m\le M}b_m\eta_{k,A}(u-\log m)$. The Fourier transform with negative-sign normalization is $$\widehat g_M(t)=h_{k,A}(it)\sum_{m\le M}b_m m^{-it},$$ by translation in the Fourier integral. Since each summand is compactly supported and bounded, $g_M\in L^1\cap L^2$; [F3] identifies its integral transform with its Plancherel transform. Parseval in [F2], with the change from frequency $\xi$ to $t=2\pi\xi$, gives $$\int_{\mathbb R}|g_M(u)|^2du=\frac1{2\pi}\int_{\mathbb R}|h_{k,A}(it)|^2\left|\sum_{m\le M}b_m m^{-it}\right|^2dt.$$ [F2, F3, given, algebra, A1]

2.1 The condition $A\ge\sqrt{k}\,T$ implies $|h_{k,A}(it)|\ge4/5$ for $|t|\le T$ by [F1]. Therefore $$\int_{-T}^{T}\left|\sum_{m\le M}b_m m^{-it}\right|^2dt \le\frac{25}{16}\int_{-T}^{T}|h_{k,A}(it)|^2\left|\sum_{m\le M}b_m m^{-it}\right|^2dt \le\frac{25\pi}{8}\int_{\mathbb R}|g_M(u)|^2du.$$ The last integral equals $\int_0^\infty|\sum_{m\le M}b_mH_{k,A}(x/m)|^2dx/x$ under $x=e^u$. [F1, step 1.1, algebra]

3.1 For integers $L>M$, Minkowski's inequality [F4] gives $$\left\|\sum_{m=M+1}^{L}b_m\eta_{k,A}(\,\cdot-\log m)\right\|_2 \le\|\eta_{k,A}\|_2\sum_{m=M+1}^{L}|b_m|.$$ Thus the finite translate sums are Cauchy in $L^2$; by [F5] they converge in $L^2$. On every bounded interval in $u$, only finitely many translates are nonzero, because $\eta_{k,A}$ is supported in $[-k/A,k/A]$ and $\log m\to\infty$. Hence their pointwise sum is locally a finite sum and agrees almost everywhere with the $L^2$ limit. Also $\sum_m b_m m^{-it}$ converges uniformly in $t$, by absolute summability. Passing to the limit in step 2.1 is therefore valid on the left by uniform convergence and on the right by $L^2$ convergence. [F1, F4, F5, given, step 2.1, A1] ∎

## Proof status

The smoothing inequality is proved locally from the supplied kernel and Plancherel interfaces.
