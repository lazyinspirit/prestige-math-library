---
id: lem-bohr-mollerup-factorial-squeeze
kind: lemma
title: 'Log-convex solutions of the Gamma recurrence obey the Bohr--Mollerup factorial squeeze'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-log-convex-positive-function, def-factorial-and-falling-factorial, def-finite-sum, lem-three-slope-inequality-for-convex-functions, thm-natural-logarithm-laws, thm-real-power-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 7 §4"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

Let $f:(0,\infty)\to(0,\infty)$ be log-convex, with $f(1)=1$ and $f(x+1)=xf(x)$ for every $x>0$. For $0<x\le1$ and every integer $n\ge2$, put

$$G_n(x):=\frac{n^x n!}{x(x+1)\cdots(x+n)}.$$

Then

$$G_n(x)\le f(x)\le\frac{n+x}{n}G_n(x).$$

Every positive log-convex $f$ with $f(1)=1$ and $f(x+1)=xf(x)$ lies between the Bohr--Mollerup factorial bounds, whose ratio is $(n+x)/n$ for $0<x\le1$.

## Facts & Assumptions

**Given:** Such a function $f$, a real $0<x\le1$, and an integer $n\ge2$.

[F1] A positive function is log-convex exactly when its logarithm is convex ([[def-log-convex-positive-function]]).

[F2] Factorial is determined by $0!=1$ and $(n+1)!=(n+1)n!$ ([[def-factorial-and-falling-factorial]]).

[F3] For a convex $f$ on an interval, writing $s(a,b)=(f(b)-f(a))/(b-a)$, one has $s(x,y)\le s(x,z)\le s(y,z)$ whenever $x<y<z$ lie in it ([[lem-three-slope-inequality-for-convex-functions]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the function $\log f$ is convex, and the recurrence with $f(n)=(n-1)!$ makes its secant slopes $s(n-1,n)=\log(n-1)$ and $s(n,n+1)=\log n$. For $0<x<1$, [F3] at $n-1<n<n+x$ gives $s(n-1,n)\le s(n,n+x)$ and [F3] at $n<n+x<n+1$ gives $s(n,n+x)\le s(n,n+1)$; at $x=1$ the middle slope is $s(n,n+1)=\log n$ itself and $\log(n-1)\le\log n$. Either way $\log(n-1)\le(\log f(n+x)-\log f(n))/x\le\log n$, and exponentiation yields $(n-1)^x(n-1)!\le f(n+x)\le n^x(n-1)!$. [given, F1, F3, cases]

1.2 Iterating the recurrence gives $f(n+x)=x(x+1)\cdots(x+n-1)f(x)$ and, by induction from [F2], $f(n)=(n-1)!$. [given, F2]

2.1 Divide the bounds of step 1.1 by the positive product in step 1.2. Use the upper bound at $n$ and the lower bound with $n$ replaced by $n+1$; both then have the common term $G_n(x)$, and they become $G_n(x)\le f(x)\le((n+x)/n)G_n(x)$. [step 1.1, step 1.2, algebra] ∎
