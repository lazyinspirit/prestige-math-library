---
id: thm-fejer-uniform-convergence-for-continuous-periodic-functions
kind: theorem
title: "Fejer means converge uniformly for continuous periodic functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cesaro-and-abel-means-of-a-fourier-series, lem-fejer-kernel-is-a-positive-approximate-identity]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement

Let $f:\mathbb R\to\mathbb C$ be one-periodic and continuous. Then

$$\sup_{x\in\mathbb R}|\sigma_Nf(x)-f(x)|\longrightarrow0 \qquad (N\to\infty).$$

## Facts & Assumptions

**Given:** A one-periodic continuous function $f:\mathbb R\to\mathbb C$.

[L1] The Cesaro means satisfy $\sigma_Nf=f*F_N$, so
$$\sigma_Nf(x)=\int_0^1f(x-t)F_N(t)\,dt$$
for every $x$ ([[def-cesaro-and-abel-means-of-a-fourier-series]]).

[L2] The Fejer kernels are nonnegative, have integral $1$, and their mass on $[\delta,1-\delta]$ tends to $0$ for every $\delta\in(0,1/2]$ ([[lem-fejer-kernel-is-a-positive-approximate-identity]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon>0$. Because $f$ is continuous on the compact interval $[0,1]$ and one-periodic, it is uniformly continuous modulo $1$. Choose $\delta\in(0,1/2]$ such that $$|f(x-t)-f(x)|<\varepsilon/2$$ whenever $x\in\mathbb R$ and $t\in[0,\delta]\cup[1-\delta,1]$. [given, choose]

2.1 For every $x\in\mathbb R$, subtract $f(x)$ inside the integral from [L1]: $$|\sigma_Nf(x)-f(x)|\le\int_0^1|f(x-t)-f(x)|F_N(t)\,dt.$$ Split the integral into the near set $[0,\delta]\cup[1-\delta,1]$ and the far set $[\delta,1-\delta]$. By step 1.1 and the positivity from [L2], the near part is at most $\varepsilon/2$. The far part is at most $$2\|f\|_\infty\int_\delta^{1-\delta}F_N(t)\,dt.$$ [L1, L2, step 1.1, algebra]

3.1 By [L2], choose $N_0$ so large that $$2\|f\|_\infty\int_\delta^{1-\delta}F_N(t)\,dt<\varepsilon/2$$ for all $N\ge N_0$. Then step 2.1 gives $$\sup_{x\in\mathbb R}|\sigma_Nf(x)-f(x)|<\varepsilon \qquad (N\ge N_0).$$ Since $\varepsilon$ was arbitrary, the convergence is uniform. [L2, step 2.1, choose, algebra] ∎
