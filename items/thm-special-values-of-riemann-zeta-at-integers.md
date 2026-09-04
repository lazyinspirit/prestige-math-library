---
id: thm-special-values-of-riemann-zeta-at-integers
kind: theorem
title: "The Riemann zeta function has the standard Bernoulli special values at the positive even and nonpositive integers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-riemann-zeta-meromorphic-continuation, thm-riemann-zeta-functional-equation, def-bernoulli-numbers-by-their-generating-function, thm-mittag-leffler-expansion-of-pi-cotangent, thm-trivial-zeros-and-critical-strip]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 11 §3"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

For every integer $m\ge1$,

$$\zeta(2m)=(-1)^{m+1}\frac{B_{2m}(2\pi)^{2m}}{2(2m)!},\qquad \zeta(1-2m)=-\frac{B_{2m}}{2m},\qquad \zeta(-2m)=0,$$

and also

$$\zeta(0)=-\frac12.$$

## Facts & Assumptions

**Given:** The Bernoulli generating function and the functional equation.

[L1] Bernoulli numbers satisfy $$\frac{t}{e^t-1}=\sum_{n\ge0}\frac{B_n}{n!}t^n,$$ with $B_1=-1/2$ ([[def-bernoulli-numbers-by-their-generating-function]]).

[L2] The cotangent expansion is $$\pi\cot(\pi z)=\frac1z+\sum_{n\ge1}\frac{2z}{z^2-n^2}$$ ([[thm-mittag-leffler-expansion-of-pi-cotangent]]).

[L3] Zeta satisfies the classical functional equation ([[thm-riemann-zeta-functional-equation]]).

[L4] The meromorphic continuation has a simple residue-one pole at $1$ ([[thm-riemann-zeta-meromorphic-continuation]]).

[L5] The negative even integers are exactly the trivial zeros of zeta ([[thm-trivial-zeros-and-critical-strip]]).

## Proof

**Proof technique:** direct.

1.1 For $|z|<1$, expand the summand in [L2] as $$\frac{2z}{z^2-n^2}=-\frac{2z}{n^2}\frac{1}{1-z^2/n^2}=-2\sum_{m\ge1}\frac{z^{2m-1}}{n^{2m}}.$$ Summing over $n$ gives $$\pi z\cot(\pi z)=1-2\sum_{m\ge1}\zeta(2m)z^{2m}.$$ [L2, algebra]

1.2 Let $s\to0$ in [L3]. One has $\sin(\pi s/2)\sim \pi s/2$, $\Gamma(1-s)\to1$, and [L4] gives $\zeta(1-s)\sim -1/s$. Therefore $$\zeta(0)=\lim_{s\to0}2^s\pi^{s-1}\sin(\pi s/2)\Gamma(1-s)\zeta(1-s)=-\frac12.$$ Also [L5] already gives $\zeta(-2m)=0$ for $m\ge1$. [L3, L4, L5, algebra]

2.1 From [L1], $$\frac{t}{e^t-1}+\frac{t}{2}=\sum_{n\ge0}\frac{B_n}{n!}t^n+\frac{t}{2}$$ is even, so $B_{2m+1}=0$ for every $m\ge1$. Setting $t=2\pi i z$ and simplifying yields $$\pi z\cot(\pi z)=\sum_{m\ge0}\frac{B_{2m}(2\pi i z)^{2m}}{(2m)!}=1+\sum_{m\ge1}(-1)^m\frac{B_{2m}(2\pi)^{2m}}{(2m)!}z^{2m}.$$ Comparing coefficients with step 1.1 gives $$\zeta(2m)=(-1)^{m+1}\frac{B_{2m}(2\pi)^{2m}}{2(2m)!}\qquad(m\ge1).$$ [step 1.1, L1, algebra]

3.1 For $m\ge1$, substitute $s=1-2m$ into [L3]. Since $\sin(\pi(1-2m)/2)=(-1)^m$ and $\Gamma(2m)=(2m-1)!$, step 2.1 yields $$\zeta(1-2m)=2^{1-2m}\pi^{-2m}(-1)^m(2m-1)!\,\zeta(2m)=-\frac{B_{2m}}{2m}.$$ Together with step 1.2, this gives all the displayed special values. [step 2.1, step 1.2, L3, algebra] ∎
