---
id: thm-e-is-irrational
kind: theorem
title: "The number $e$ is irrational"
status: published
origin: session
deps: [lem-exponential-factorial-tail-bound, def-real-exponential-function-and-e, def-rationals, def-integers, def-factorial-and-falling-factorial, thm-of-archimedean, def-canonical-natural]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
pipeline_run: null
---

## Statement

The number $e$ is irrational.

## Facts & Assumptions

**Given:** The series definition of $e$ ([[def-real-exponential-function-and-e]]).

[L1] Factorials are nonzero naturals and obey their recurrence ([[def-factorial-and-falling-factorial]], [[def-canonical-natural]]).

[L2] The exponential factorial tail is bounded by [[lem-exponential-factorial-tail-bound]].

## Proof

**Proof technique:** contradiction.

1.1 Assume $e=p/q$ with integers $p$ and $q\ge1$ ([[def-rationals]], [[def-integers]]). Choose a natural $n\ge\max\{q,2\}$ ([[thm-of-archimedean]]).  [assume-contra, choose]

1.2 Every term in the tail is positive, so $A>0$. Moreover $A=\sum_{j\ge1}1/((n+1)\cdots(n+j))<\sum_{j\ge1}(n+1)^{-j}=1/n\le1/2<1$.  [L1, L2, algebra]

2.1 The number $A:=\iota(n!)\left(e-\sum_{k=0}^{n}1/\iota(k!)\right)$ is an integer: both $\iota(n!)e=\iota(n!)p/q$ and every $\iota(n!)/\iota(k!)$ are integers because $q\mid n!$ and $k!\mid n!$.  [step 1.1, L1, algebra]

3.1 No integer lies strictly between $0$ and $1$, contradicting steps 2.1 and 1.2. Therefore $e\notin\mathbb Q$.  [step 2.1, step 1.2, discharge-contradiction] ∎
