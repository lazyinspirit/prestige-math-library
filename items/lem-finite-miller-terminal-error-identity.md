---
id: lem-finite-miller-terminal-error-identity
kind: lemma
title: Exact finite terminal-contamination error identity
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-order-bessel-series, def-bessel-complementary-recurrence-solution, lem-bessel-casoratian-invariant-positive, lem-integer-order-bessel-recurrences-and-ode]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: DLMF, §3.6(iii), Miller's Algorithm
      url: https://dlmf.nist.gov/3.6
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 4
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 5
---

## Statement

Fix $x>0$, integers $N\ge1$ and $0\le n<N$, and define the exact backward
recurrence solution by $u_{N+1}=0$, $u_N=1$, and
$u_{j-1}=2ju_j/x-u_{j+1}$ for $j=N,N-1,\ldots,1$. If
$D_{N+1}(x)\ne0$, put $q=-J_{N+1}(x)/D_{N+1}(x)$. For $s\in\{0,1\}$ such
that $J_s(x)+qD_s(x)\ne0$, let
$\widehat J_n=J_s(x)u_n/u_s$. Then

$$\widehat J_n-J_n= \frac{q\bigl(J_sD_n-J_nD_s\bigr)}{J_s+qD_s}.$$

This is a finite-$N$ identity. It makes no assertion that the error tends to
zero as $N\to\infty$.

## Facts & Assumptions

**Given:** $x,N,n,s$ as above; the sequences $J,D$; and the terminal recurrence
sequence $u$.

[F1] [[lem-bessel-casoratian-invariant-positive]]: $J,D$ are linearly
independent solutions of the same second-order recurrence.

[F2] [[lem-integer-order-bessel-recurrences-and-ode]]:
$J_{j+1}=2jJ_j/x-J_{j-1}$ for $j\ge1$.

[F3] [[def-bessel-complementary-recurrence-solution]]: $D$ obeys the same
recurrence.

## Proof
1.1 The sequence $J+qD$ obeys the recurrence by [F2] and [F3], and its value at $N+1$ is $J_{N+1}+qD_{N+1}=0$. Its value at $N$ is nonzero: if it too were zero, backward recurrence would make it zero at every index, contradicting the linear independence in [F1] and its coefficient $1$ on $J$. Therefore $(J+qD)/(J_N+qD_N)$ has the terminal values $u_{N+1}=0,u_N=1$. Uniqueness of the finite backward recurrence gives $u_j=(J_j+qD_j)/(J_N+qD_N)$ for $0\le j\le N$. [given, F1, F2, F3, algebra]

2.1 Taking the ratio of the formulas for $j=n$ and $j=s$ yields $u_n/u_s=(J_n+qD_n)/(J_s+qD_s)$. Since the denominator is nonzero, $$\widehat J_n-J_n =J_s\frac{J_n+qD_n}{J_s+qD_s}-J_n =\frac{q(J_sD_n-J_nD_s)}{J_s+qD_s}.$$ Every equality uses this single fixed terminal index $N$; no limit in $N$ was taken. [given, step 1.1, algebra] ∎