---
id: thm-dirichlet-jordan-pointwise-convergence
kind: theorem
title: "Dirichlet-Jordan pointwise convergence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-symmetric-difference-formula-for-fourier-partial-sums, lem-bounded-variation-gives-one-sided-dirichlet-integrability, cor-bv-discontinuities-are-countable-and-of-first-kind, thm-riemann-lebesgue-lemma-for-fourier-coefficients, lem-closed-form-and-size-bounds-for-the-dirichlet-kernel]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
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

Let $f:\mathbb R\to\mathbb R$ be one-periodic and of bounded variation on one
period. Then for every $x\in\mathbb R$,

$$S_Nf(x)\to\frac{f(x+)+f(x-)}{2} \qquad \text{as } N\to\infty.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a one-periodic real function $f$ of bounded variation on one period, and a real $x$.

[L1] For every real $s$, $$S_Nf(x)-s=\int_0^{1/2}\bigl(f(x+t)+f(x-t)-2s\bigr)D_N(t)\,dt$$ ([[lem-symmetric-difference-formula-for-fourier-partial-sums]]).

[L2] Assuming the Axiom of Countable Choice, if $u:[0,\delta]\to\mathbb R$ is of bounded variation with $u(0)=0$ and $u(t)\to0$ as $t\downarrow0$, then $$\int_0^\delta u(t)\frac{\sin((2N+1)\pi t)}{\sin(\pi t)}\,dt\to0$$ ([[lem-bounded-variation-gives-one-sided-dirichlet-integrability]]).

[L3] A bounded-variation function has both one-sided limits at every point ([[cor-bv-discontinuities-are-countable-and-of-first-kind]]).

[L4] Assuming the Axiom of Countable Choice, Fourier coefficients of an $L^1(\mathbb T)$ function tend to $0$ at infinity ([[thm-riemann-lebesgue-lemma-for-fourier-coefficients]]).

[L5] For $t\notin\mathbb Z$, $D_N(t)=\sin((2N+1)\pi t)/\sin(\pi t)$ ([[lem-closed-form-and-size-bounds-for-the-dirichlet-kernel]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], the one-sided limits $f(x+)$ and $f(x-)$ exist. Put $$s:=\frac{f(x+)+f(x-)}{2}.$$ Choose $\delta\in(0,1/2)$ and define, on $[0,\delta]$, $$u_+(0):=0,\qquad u_-(0):=0,$$ $$u_+(t):=f(x+t)-f(x+) \quad\text{and}\quad u_-(t):=f(x-t)-f(x-) \qquad(0<t\le\delta).$$ Because translations and reflections preserve bounded variation on a compact interval, and changing a function at one point preserves bounded variation, both $u_+$ and $u_-$ have bounded variation on $[0,\delta]$. The cited one-sided-limit result [L3] gives $u_\pm(t)\to0$ as $t\downarrow0$, and by construction $u_\pm(0)=0$. [L3, given, choose, algebra]

2.1 Applying [L1] with the value $s$ from step 1.1 yields $$S_Nf(x)-s=\int_0^\delta \bigl(u_+(t)+u_-(t)\bigr)D_N(t)\,dt+\int_\delta^{1/2}\bigl(f(x+t)+f(x-t)-2s\bigr)D_N(t)\,dt.$$ [L1, step 1.1, algebra]

3.1 By [L2] applied to $u_+$ and to $u_-$, and then using [L5], $$\int_0^\delta u_+(t)D_N(t)\,dt\to0, \qquad \int_0^\delta u_-(t)D_N(t)\,dt\to0.$$ Hence the first integral in step 2.1 tends to $0$. [L2, L5, step 1.1, algebra]

3.2 Define $$\psi(t):=\mathbf 1_{[\delta,1/2]}(t)\,\frac{(f(x+t)+f(x-t)-2s)e^{i\pi t}}{\sin(\pi t)}.$$ Since $\sin(\pi t)$ is bounded away from $0$ on $[\delta,1/2]$ and the numerator is integrable there, $\psi\in L^1(\mathbb T)$. By [L5], the second integral in step 2.1 equals $$\operatorname{Im}\int_0^1\psi(t)e^{2\pi iNt}\,dt=\operatorname{Im}\,\widehat\psi(-N),$$ so it tends to $0$ by [L4]. [L4, L5, step 2.1, algebra]

4.1 Steps 3.1 and 3.2 make both integrals in step 2.1 tend to $0$. Therefore $S_Nf(x)-s\to0$, which is exactly $$S_Nf(x)\to\frac{f(x+)+f(x-)}2.$$ [step 1.1, step 2.1, step 3.1, step 3.2, algebra] ∎
