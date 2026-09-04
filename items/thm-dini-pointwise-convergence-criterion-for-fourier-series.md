---
id: thm-dini-pointwise-convergence-criterion-for-fourier-series
kind: theorem
title: "Dini pointwise convergence criterion for Fourier series"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-closed-form-and-size-bounds-for-the-dirichlet-kernel, thm-riemann-lebesgue-lemma-for-fourier-coefficients, lem-symmetric-difference-formula-for-fourier-partial-sums, lem-sine-positive-and-cosine-decreasing-on-zero-two]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement

Assume the Axiom of Countable Choice.

Let $f$ be a one-period integrable function, let $x,s\in\mathbb R$, and assume
there is $\delta\in(0,1/2)$ such that

$$\int_0^\delta \frac{|f(x+t)+f(x-t)-2s|}{t}\,dt<\infty.$$

Then

$$S_Nf(x)\to s \qquad \text{as } N\to\infty.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a one-period integrable function $f$, reals $x,s$, and a real $\delta$ with $0<\delta<1/2$ such that $$\int_0^\delta \frac{|f(x+t)+f(x-t)-2s|}{t}\,dt<\infty.$$

[L1] For $t\notin\mathbb Z$, $D_N(t)=\sin((2N+1)\pi t)/\sin(\pi t)$ ([[lem-closed-form-and-size-bounds-for-the-dirichlet-kernel]]).

[L2] Assuming the Axiom of Countable Choice, Fourier coefficients of an $L^1(\mathbb T)$ function tend to $0$ at infinity ([[thm-riemann-lebesgue-lemma-for-fourier-coefficients]]).

[L3] $$S_Nf(x)-s=\int_0^{1/2}\bigl(f(x+t)+f(x-t)-2s\bigr)D_N(t)\,dt$$ ([[lem-symmetric-difference-formula-for-fourier-partial-sums]]).

[L4] For $0<u\le2$, $\sin u\ge u/3>0$ ([[lem-sine-positive-and-cosine-decreasing-on-zero-two]]).

## Proof

**Proof technique:** direct.

1.1 Put $a(t):=f(x+t)+f(x-t)-2s$. By [L3], $$S_Nf(x)-s=\int_0^\delta a(t)D_N(t)\,dt+\int_\delta^{1/2} a(t)D_N(t)\,dt.$$ [L3, given, algebra]

2.1 For $0<t\le\delta<1/2$, one has $0<\pi t<\pi/2<2$, so [L4] gives $\sin(\pi t)\ge\pi t/3$. Define $$\psi_0(t):=\mathbf 1_{(0,\delta]}(t)\,\frac{a(t)e^{i\pi t}}{\sin(\pi t)}.$$ Then $$|\psi_0(t)|\le\frac{3}{\pi}\,\mathbf 1_{(0,\delta]}(t)\frac{|a(t)|}{t},$$ so the hypothesis makes $\psi_0\in L^1(\mathbb T)$. Using [L1], $$\int_0^\delta a(t)D_N(t)\,dt=\operatorname{Im}\int_0^1\psi_0(t)e^{2\pi iNt}\,dt=\operatorname{Im}\,\widehat\psi_0(-N).$$ [L1, L4, step 1.1, given, algebra]

2.2 Define $$\psi_1(t):=\mathbf 1_{[\delta,1/2]}(t)\,\frac{a(t)e^{i\pi t}}{\sin(\pi t)}.$$ Since $\sin(\pi t)$ is bounded away from $0$ on $[\delta,1/2]$ and $a\in L^1([\delta,1/2])$, one has $\psi_1\in L^1(\mathbb T)$. Again [L1] turns the second integral in step 1.1 into $$\int_\delta^{1/2} a(t)D_N(t)\,dt=\operatorname{Im}\,\widehat\psi_1(-N).$$ [L1, step 1.1, algebra]

3.1 By [L2], both $\widehat\psi_0(-N)$ and $\widehat\psi_1(-N)$ tend to $0$. Steps 2.1 and 2.2 therefore make both integrals in step 1.1 tend to $0$. Hence $S_Nf(x)-s\to0$, or equivalently $S_Nf(x)\to s$. [L2, step 2.1, step 2.2, algebra] ∎
