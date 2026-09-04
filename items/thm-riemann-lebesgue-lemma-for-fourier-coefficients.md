---
id: thm-riemann-lebesgue-lemma-for-fourier-coefficients
kind: theorem
title: "Riemann-Lebesgue lemma for Fourier coefficients"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-period-one-fourier-coefficients-partial-sums-and-convolution, lem-step-functions-have-vanishing-torus-fourier-coefficients, lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus]
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

Let $f$ be integrable on one period. Then

$$\widehat f(k)\to0 \qquad \text{as } |k|\to\infty.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a one-period integrable function $f$, and a real $\varepsilon>0$.

[L1] Fourier coefficients are $\widehat f(k)=\int_0^1 f(t)e^{-2\pi ikt}\,dt$ ([[def-period-one-fourier-coefficients-partial-sums-and-convolution]]).

[L2] One-period step functions have Fourier coefficients tending to $0$ as $|k|\to\infty$ ([[lem-step-functions-have-vanishing-torus-fourier-coefficients]]).

[L3] Assuming the Axiom of Countable Choice, one-period step functions are dense in $L^1(\mathbb T)$ ([[lem-step-functions-on-one-period-are-dense-in-l-one-on-the-torus]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], choose a one-period step function $s$ with $$\int_0^1|f(t)-s(t)|\,dt<\varepsilon/3.$$ [given, L3, choose]

1.2 By [L2], choose $K\ge1$ such that $|k|\ge K$ implies $|\widehat s(k)|<\varepsilon/3$. [L2, choose]

2.1 For every integer $k$, [L1, algebra] $$|\widehat f(k)-\widehat s(k)|\le\int_0^1 |f(t)-s(t)|\,dt<\varepsilon/3.$$ [L1, step 1.1, algebra]

3.1 If $|k|\ge K$, then step 2.1 and step 1.2 give $$|\widehat f(k)|\le|\widehat f(k)-\widehat s(k)|+|\widehat s(k)|<\frac{2\varepsilon}{3}<\varepsilon.$$ [step 2.1, step 1.2, algebra]

4.1 Since $\varepsilon>0$ was arbitrary, step 3.1 is exactly $\widehat f(k)\to0$ as $|k|\to\infty$. [step 3.1] ∎
