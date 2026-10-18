---
id: cex-na-defective-rational-approximation-naive-count
kind: counterexample
title: "A defective rational minimizer can have fewer than m+n+2 extrema"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-na-weighted-rational-minimax-family
  - thm-na-weighted-rational-alternation-characterization
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chapter 24"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf"
      locator: "Printed pp. 199–207, defect-sensitive rational alternation."
    - title: "András Kroó and Allan Pinkus, Strong Uniqueness, §6"
      url: "https://pages.cs.wisc.edu/~deboor/sat/papers/12/12.pdf"
      locator: "Printed pp. 43–46, defective type-(m,n) rational approximants."
---

## Statement refuted

Every best real rational approximant of type $(m,n)$ with positive error has
at least $m+n+2$ distinct alternating global extrema.

## Facts & Assumptions

**Given:** $I=[-1,1]$, $f(x)=x^2$, weight $w(x)=1$, type $(m,n)=(1,1)$, and
$r(x)=1/2$.

[F1] [[def-na-weighted-rational-minimax-family]]: type $(m,n)$ candidates have degree bounds $(m,n)$; the defect of a nonzero reduced candidate is $d=\min(m-\deg p,n-\deg q)$.

[F2] [[thm-na-weighted-rational-alternation-characterization]]: a candidate with positive error is best exactly when its error has $m+n+2-d$ ordered alternating global extrema.

## Counterexample

1.1 The pair $p=1/2,q=1$ is reduced, has $q>0$, coefficient norm $1$, degrees $(0,0)$, and error $f-r=x^2-1/2$. Since $x^2\in[0,1]$, this residual lies in $[-1/2,1/2]$ and its absolute value reaches $1/2$ exactly at $x=-1,0,1$. The extremal residual signs in order are $+,-,+$. [F1, given, algebra]

2.1 Here $d=\min(1-0,1-0)=1$, so the defect-sensitive count is $1+1+2-1=3$. By [F2], the three alternating extrema make $r=1/2$ a best type-$(1,1)$ rational approximant. The extremal set is exactly $\{-1,0,1\}$, so there are not four distinct global extrema; the refuted $m+n+2=4$ count fails. [F1, F2, step 1.1, algebra] ∎