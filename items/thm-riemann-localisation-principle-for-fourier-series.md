---
id: thm-riemann-localisation-principle-for-fourier-series
kind: theorem
title: "Riemann localisation principle for Fourier series"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-closed-form-and-size-bounds-for-the-dirichlet-kernel, thm-riemann-lebesgue-lemma-for-fourier-coefficients, lem-symmetric-difference-formula-for-fourier-partial-sums]
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

Let $f$ and $g$ be one-period integrable functions, and let $x\in\mathbb R$.
Assume there is $\delta\in(0,1/2)$ such that $f(y)=g(y)$ for almost every
$y\in(x-\delta,x+\delta)$. Then

$$S_Nf(x)-S_Ng(x)\to0 \qquad \text{as } N\to\infty.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, one-period integrable functions $f,g$, a real $x$, and a real $\delta$ with $0<\delta<1/2$ such that $f(y)=g(y)$ for almost every $y\in(x-\delta,x+\delta)$.

[L1] The Dirichlet kernel satisfies $D_N(t)=\sin((2N+1)\pi t)/\sin(\pi t)$ away from the integers ([[lem-closed-form-and-size-bounds-for-the-dirichlet-kernel]]).

[L2] Assuming the Axiom of Countable Choice, Fourier coefficients of an $L^1(\mathbb T)$ function tend to $0$ at infinity ([[thm-riemann-lebesgue-lemma-for-fourier-coefficients]]).

[L3] For every real $s$, $$S_Nh(x)-s=\int_0^{1/2}\bigl(h(x+t)+h(x-t)-2s\bigr)D_N(t)\,dt$$ ([[lem-symmetric-difference-formula-for-fourier-partial-sums]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L3] to $h:=f-g$ with $s=0$. Since $h(y)=0$ for almost every $y\in(x-\delta,x+\delta)$, the integrand vanishes for almost every $t\in(0,\delta)$, so $$S_Nh(x)=\int_\delta^{1/2}\bigl(h(x+t)+h(x-t)\bigr)D_N(t)\,dt.$$ [given, L3, algebra]

2.1 Define a one-period function $\psi$ on $[0,1)$ by $$\psi(t):=\mathbf 1_{[\delta,1/2]}(t)\,\frac{(h(x+t)+h(x-t))e^{i\pi t}}{\sin(\pi t)}.$$ Because $\sin(\pi t)$ is bounded away from $0$ on $[\delta,1/2]$ and $h\in L^1(\mathbb T)$, one has $\psi\in L^1(\mathbb T)$. Using [L1], step 1.1 becomes $$S_Nh(x)=\operatorname{Im}\int_0^1 \psi(t)e^{2\pi iNt}\,dt = \operatorname{Im}\,\widehat\psi(-N).$$ [L1, step 1.1, algebra]

3.1 By [L2], $\widehat\psi(-N)\to0$ as $N\to\infty$. Step 2.1 therefore gives $S_Nh(x)\to0$. Since $h=f-g$, this is exactly $$S_Nf(x)-S_Ng(x)\to0.$$ [L2, step 2.1, algebra] ∎
