---
id: ex-fourier-partial-sums-of-the-sawtooth
kind: example
title: "Fourier partial sums of the sawtooth"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-period-one-fourier-coefficients-partial-sums-and-convolution, thm-dirichlet-jordan-pointwise-convergence]
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
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
---

## Example

Assume the Axiom of Countable Choice.

Let $f$ be the one-periodic sawtooth given by $f(0)=0$ and
$f(x)=x-\tfrac12$ for $0<x<1$. Then $\widehat f(0)=0$ and, for $k\ne0$,

$$\widehat f(k)=-\frac{1}{2\pi ik}.$$

Hence

$$S_Nf(x)=-\sum_{k=1}^N \frac{\sin(2\pi kx)}{\pi k}.$$

At every noninteger $x$, $S_Nf(x)\to f(x)$, while at every integer
$x$, $S_Nf(x)\to0$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the one-periodic sawtooth $f(0)=0$ and $f(x)=x-\tfrac12$ for $0<x<1$.

[L1] Fourier coefficients and partial sums are defined by the one-period formulas in [[def-period-one-fourier-coefficients-partial-sums-and-convolution]].

[L2] Assuming the Axiom of Countable Choice, a one-periodic bounded-variation function converges at each point to the midpoint of its one-sided limits under Fourier partial sums ([[thm-dirichlet-jordan-pointwise-convergence]]).

## Verification

**Proof technique:** direct.

1.1 Since $\int_0^1 (x-\tfrac12)\,dx=0$, [L1] gives $\widehat f(0)=0$. For $k\ne0$, direct integration gives $$\widehat f(k)=\int_0^1 \left(x-\frac12\right)e^{-2\pi ikx}\,dx=-\frac{1}{2\pi ik}.$$ [L1, algebra]

2.1 Insert the coefficients from step 1.1 into the partial-sum formula [L1]. Pairing the $k$ and $-k$ terms gives $$S_Nf(x)=-\sum_{k=1}^N \frac{\sin(2\pi kx)}{\pi k}.$$ [L1, step 1.1, algebra]

3.1 The sawtooth is piecewise $C^1$, hence of bounded variation on one period. If $x\notin\mathbb{Z}$, choose the unique integer $m$ with $y:=x-m\in(0,1)$. Because both $f$ and its Fourier partial sums are one-periodic, one has $S_Nf(x)=S_Nf(y)$ and $f(x)=f(y)=y-\tfrac12$. The one-sided limits at $y$ therefore both equal $f(x)$, so [L2] gives $S_Nf(x)\to f(x)$. At an integer $x$, the one-sided limits are $-1/2$ and $1/2$, whose midpoint is $0$, so [L2] gives $S_Nf(x)\to0$. [L2, step 2.1, choose, algebra] ∎
