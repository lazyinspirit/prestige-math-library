---
id: thm-linear-recurrence-iff-rational-generating-function
kind: theorem
title: "A coefficient sequence is eventually linearly recurrent if and only if its formal generating function is rational"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-four-spaces-for-a-fixed-linear-recurrence, thm-polynomial-division-algorithm-over-a-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Theorem 4.1.1 and Proposition 4.2.2"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
    - title: "B. E. Sagan, Combinatorics: The Art of Counting, Theorem 3.7.1"
      url: "https://users.math.msu.edu/users/bsagan/Books/Aoc/GSM210.pdf"
pipeline_run: null
---

## Statement

Let $K$ be a field, let $a=(a_n)_{n\ge0}$ be a sequence in $K$, and let $F(x)=\sum_{n\ge0}a_nx^n$. Then $a$ satisfies an eventual constant-coefficient linear recurrence if and only if $F$ is a rational formal power series.

More precisely, let $Q(x)=1+c_1x+\cdots+c_dx^d$ with $d\ge1$ and $c_d\ne0$. The sequence satisfies the corresponding recurrence from index $N$ exactly when $QF$ has no nonzero coefficient of degree at least $N+d$. In particular, the recurrence starts at zero exactly when $QF$ is zero or has degree below $d$.

## Facts & Assumptions

**Given:** A field $K$, a sequence $a=(a_n)_{n\ge0}$, and its formal generating function $F=\sum_{n\ge0}a_nx^n$.

[L1] For fixed $Q(x)=1+c_1x+\cdots+c_dx^d$ with $d\ge1$ and $c_d\ne0$, multiplication by $Q$ identifies sequences recurrent from zero with numerators of degree below $d$ ([[lem-four-spaces-for-a-fixed-linear-recurrence]]).

[L2] If $0\ne Q\in K[x]$ and $P\in K[x]$, there are unique $D,R\in K[x]$ with $P=DQ+R$ and either $R=0$ or $\deg R<\deg Q$ ([[thm-polynomial-division-algorithm-over-a-field]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $a$ satisfies an order-$d$ recurrence from index $N$. For $m\ge N+d$, coefficient extraction gives $[x^m](QF)=a_m+c_1a_{m-1}+\cdots+c_da_{m-d}=0$, so $QF$ is a polynomial and $F=(QF)/Q$ is rational. [given, L1, algebra]

1.2 An eventual order-zero recurrence means that $a$ is eventually zero, so $F$ is a polynomial and is rational with denominator $1$. [given]

1.3 Conversely, suppose $F=P/Q$ with $Q(0)\ne0$. Rescale so that $Q(0)=1$, and use [L2] to write $P=DQ+R$ with $R=0$ or $\deg R<\deg Q$; then $F=D+R/Q$. [given, L2, algebra]

2.1 If $\deg Q=d\ge1$, [L1] says that the coefficients of $R/Q$ satisfy the order-$d$ recurrence from zero, while the polynomial $D$ changes only finitely many coefficients; hence the coefficients of $F$ satisfy that recurrence eventually. If $Q=1$, then $F=P$ is eventually zero and has eventual order zero. [step 1.3, L1]

3.1 The coefficient calculation in step 1.1 is reversible: for fixed positive-degree $Q$, the recurrence holds at $n$ exactly when $[x^{n+d}](QF)=0$. This gives the stated starting-index clause and completes both directions. [step 1.1, step 2.1, algebra] ∎
