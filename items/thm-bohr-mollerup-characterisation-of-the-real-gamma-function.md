---
id: thm-bohr-mollerup-characterisation-of-the-real-gamma-function
kind: theorem
title: 'Bohr--Mollerup characterisation of the real Gamma function'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-real-gamma-functional-equation, thm-real-gamma-is-log-convex, lem-bohr-mollerup-factorial-squeeze, thm-squeeze, thm-of-archimedean, lem-integer-part]
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
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 7 §4"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

Gamma is the unique positive log-convex function $f:(0,\infty)\to(0,\infty)$ with $f(1)=1$ and $f(x+1)=xf(x)$.

## Facts & Assumptions

**Given:** The real Gamma function and an arbitrary positive log-convex function $f$ satisfying the displayed normalization and recurrence.

[F1] Every such function lies between common factorial bounds whose ratio is $(n+x)/n$ for $0<x\le1$ ([[lem-bohr-mollerup-factorial-squeeze]]).

[F2] For every $s>0$, $\Gamma(s+1)=s\Gamma(s)$, and $\Gamma(1)=1$ ([[thm-real-gamma-functional-equation]]).

[F3] The real Gamma function is strictly log-convex on $(0,\infty)$ ([[thm-real-gamma-is-log-convex]]).

[F4] Every real lies in a unique half-open unit interval between consecutive integers ([[lem-integer-part]]).

## Proof

**Proof technique:** direct.

1.1 Gamma is positive by its Euler integrand, normalized and recurrent by [F2], and log-convex by [F3]. Thus it satisfies the characterizing properties. [F2, F3]

2.1 Fix $0<x\le1$. Apply [F1] to $f$ and to Gamma. Both lie between $G_n(x)$ and $((n+x)/n)G_n(x)$ for every $n\ge2$, and the ratio of these bounds tends to $1$. The squeeze theorem therefore gives $f(x)=\Gamma(x)$. [F1, step 1.1, algebra]

3.1 By [F4], every positive real $y$ is an integer shift of a unique $x\in(0,1]$. Iterating the common recurrence from [F2] and the hypothesis on $f$ extends the equality of step 2.1 from that strip to $y$. [step 2.1, F2, F4]

4.1 Step 1.1 proves that Gamma has the properties, and steps 2.1 and 3.1 prove that every function with them equals Gamma. This is the claimed characterization. [step 1.1, step 2.1, step 3.1] ∎
