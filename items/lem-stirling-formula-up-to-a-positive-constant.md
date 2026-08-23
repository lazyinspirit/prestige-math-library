---
id: lem-stirling-formula-up-to-a-positive-constant
kind: lemma
title: 'Stirling''s factorial asymptotic holds up to a positive constant'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-log-one-plus-x-power-series, thm-p-series-real-exponents, thm-logarithm-derivative-and-integral, thm-linearity-of-the-integral, thm-exponential-limits-and-range, thm-algebra-of-limits]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §1(v)"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

There is a constant $C>0$ such that $n!\sim C\sqrt n(n/e)^n$. Here $n$ tends to infinity through the positive integers.

## Facts & Assumptions

**Given:** Positive integers $r,n$ and the logarithm on positive reals.

[F1] For $-1<x\le1$, $\log(1+x)=\sum_{j=1}^\infty(-1)^{j+1}x^j/j$ ([[thm-log-one-plus-x-power-series|The power series for log(1+x), including the Abel endpoint]]).

[F2] The positive series $\sum_{k\ge1}k^{-p}$ converges exactly when $p>1$ ([[thm-p-series-real-exponents]]).

[F3] For $x>0$, $\log'(x)=1/x$ ([[thm-logarithm-derivative-and-integral]]).

## Proof

**Proof technique:** direct.

1.1 Put $e_r:=\log r-\int_{r-1/2}^{r+1/2}\log t\,dt$. After $t=r+u$, expand $\log(1+u/r)$ by [F1]. Integration over the symmetric interval cancels the odd powers, and the remaining absolutely convergent even series gives $|e_r|\le K/r^2$ for one constant $K$ and all $r\ge1$. [F1, algebra]

2.1 By step 1.1 and [F2] with $p=2$, the series $\sum_{r\ge1}e_r$ converges absolutely. [step 1.1, F2]

3.1 Summing the definition of $e_r$ from $1$ to $n$ telescopes the integrals to $\int_{1/2}^{n+1/2}\log t\,dt$. Fact [F3] gives the primitive $t\log t-t$, and comparison of $n+1/2$ with $n$ shows that $\log(n!)-((n+1/2)\log n-n)$ converges to a real constant $c$. [step 2.1, F3, algebra]

4.1 Exponentiating step 3.1 and putting $C=e^c>0$ gives $n!/(\sqrt n(n/e)^n)\to C$, which is the stated asymptotic. [step 3.1, algebra] ∎
