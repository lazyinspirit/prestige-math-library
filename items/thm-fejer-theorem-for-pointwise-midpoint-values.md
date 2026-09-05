---
id: thm-fejer-theorem-for-pointwise-midpoint-values
kind: theorem
title: "Fejer means converge to midpoint values at jumps"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cesaro-and-abel-means-of-a-fourier-series, lem-fejer-kernel-is-a-positive-approximate-identity]
proof_strategy: direct
verification:
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

Let $f:\mathbb R\to\mathbb C$ be one-periodic with $f|_{[0,1]}\in L^1([0,1])$.
Assume the one-sided limits $f(x-)$ and $f(x+)$ exist at some point $x$.
Then

$$\sigma_Nf(x)\longrightarrow \frac{f(x-)+f(x+)}2 \qquad (N\to\infty).$$

## Facts & Assumptions

**Given:** A one-periodic function $f$ with $f|_{[0,1]}\in L^1([0,1])$, a point $x\in\mathbb R$, and existing one-sided limits $f(x-)$ and $f(x+)$.

[L1] The Cesaro means satisfy $\sigma_Nf=f*F_N$ ([[def-cesaro-and-abel-means-of-a-fourier-series]]).

[L2] The Fejer kernels are nonnegative, have integral $1$, and satisfy the tail estimate in [[lem-fejer-kernel-is-a-positive-approximate-identity]].

## Proof

**Proof technique:** direct.

1.1 Put $m:=(f(x-)+f(x+))/2$. Using [L1], split the integral over $[0,1]$ at $1/2$ and substitute $u=1-t$ on $[1/2,1]$. Because $F_N(1-u)=F_N(u)$, this gives $$\sigma_Nf(x)-m=\int_0^{1/2}\bigl(f(x-t)-f(x-)+f(x+t)-f(x+)\bigr)F_N(t)\,dt.$$ Also $$2\int_0^{1/2}F_N(t)\,dt=\int_0^1F_N(t)\,dt=1.$$ [L1, L2, algebra]

2.1 Let $\varepsilon>0$. Choose $\delta\in(0,1/2]$ so that $$|f(x-t)-f(x-)|<\varepsilon,\qquad |f(x+t)-f(x+)|<\varepsilon \qquad (0<t<\delta).$$ Then the interval $(0,\delta)$ contributes at most $$2\varepsilon\int_0^{1/2}F_N(t)\,dt=\varepsilon$$ by step 1.1. The interval $[\delta,1/2]$ contributes at most $$\left(\int_0^1|f(y)|\,dy+\int_0^1|f(y)|\,dy+\frac{|f(x-)|+|f(x+)|}{2}\right)\sup_{t\in[\delta,1-\delta]}F_N(t),$$ which tends to $0$ by [L2]. [L2, step 1.1, choose, algebra]

3.1 Choose $N_0$ so large that the far contribution in step 2.1 is $<\varepsilon$ for $N\ge N_0$. Then $$|\sigma_Nf(x)-m|<2\varepsilon \qquad (N\ge N_0).$$ Since $\varepsilon$ was arbitrary, $\sigma_Nf(x)\to m$. [L2, step 2.1, choose, algebra] ∎
