---
id: thm-dirac-comb-is-fourier-invariant
kind: theorem
title: "Poisson summation"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Nickolas Andersen, Analytic Number Theory, Theorem 16.5"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Statement

For every Schwartz function $f$ under $\widehat f(\xi)=\int f(x)e(-x\xi)dx$,
$$\sum_{n\in\mathbb Z}f(n)=\sum_{m\in\mathbb Z}\widehat f(m).$$

## Facts & Assumptions

**Given:** A Schwartz function $f$.

## Proof

**Proof technique:** direct.

1.1 Define the periodization $F(x)=\sum_{n\in\mathbb Z}f(x+n)$. Schwartz decay makes this series, and every termwise derivative series, converge uniformly on compact sets, so $F$ is a smooth $1$-periodic function. [given]

2.1 Its $m$th Fourier coefficient is $$\int_0^1F(x)e(-mx)\,dx =\sum_{n\in\mathbb Z}\int_0^1f(x+n)e(-m(x+n))\,dx =\widehat f(m),$$ where absolute convergence justifies interchange and the intervals $[n,n+1]$ partition $\mathbb R$. [step 1.1]

3.1 The sequence $(\widehat f(m))_{m\in\mathbb Z}$ is rapidly decreasing, so the Fourier series of $F$ converges absolutely and uniformly to $F$. Evaluating at $0$ gives $$\sum_{n\in\mathbb Z}f(n)=F(0)=\sum_{m\in\mathbb Z}\widehat f(m).$$ [step 2.1] ∎
