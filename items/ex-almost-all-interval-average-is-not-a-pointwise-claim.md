---
id: ex-almost-all-interval-average-is-not-a-pointwise-claim
kind: example
title: "Reading an almost-all interval estimate correctly"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - thm-matomaki-radziwill-mean-on-almost-all-short-intervals
  - def-short-interval-sum-of-an-arithmetic-function
  - def-multiplicative-arithmetic-function
justified_by: []
aliases: []
verification:
  precheck: pass
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Kaisa Matomäki and Maksym Radziwiłł, Multiplicative Functions in Short Intervals"
      url: "https://arxiv.org/pdf/1501.04585v4"
---

## Example

Let $X$ tend to infinity through even integers $X\ge16$, set $h=\lfloor\sqrt X\rfloor$ and $x_0=3X/2$, and define $a:\mathbb Z_{>0}\to\{-1,1\}$ by $a(n)=-1$ when $x_0\le n\le x_0+h$ and $a(n)=1$ otherwise.

The function $a$ is not multiplicative. At most $2h+1=o(X)$ integer starts $x\in[X,2X]$ have $[x,x+h]$ intersect the negative block. Yet at $x=x_0$,

$$ \frac{S_a(x_0,h)}{h}=-1-\frac1h,\qquad \frac1X\sum_{\substack{n\in\mathbb Z_{>0}\\X\le n\le2X}}a(n)=1-\frac{2h+1}{X}. $$

so the absolute difference between these two averages tends to $2$. This finite-sequence construction shows that an estimate for all but $o(X)$ starts does not by itself assert a small discrepancy at every start. It is not a counterexample to a theorem whose hypotheses require multiplicativity.

## Example references

[[thm-matomaki-radziwill-mean-on-almost-all-short-intervals|almost-all-starts theorem whose quantifier this example illustrates]]

[[def-short-interval-sum-of-an-arithmetic-function|closed short-interval sum]]

[[def-multiplicative-arithmetic-function|multiplicative-function convention]]

[Matomäki and Radziwiłł, Theorem 1, printed pp. 1–2](https://arxiv.org/pdf/1501.04585v4)

## Facts & Assumptions

**Given:** An even integer $X\ge16$, $h=\lfloor\sqrt X\rfloor$, $x_0=3X/2$, and the function $a$ displayed in the Example.

[F1] $S_a(x,h)$ sums $a(n)$ over positive integers in the closed interval $[x,x+h]$. ([[def-short-interval-sum-of-an-arithmetic-function]])

[F2] A multiplicative arithmetic function satisfies $f(mn)=f(m)f(n)$ for coprime positive integers $m,n$. ([[def-multiplicative-arithmetic-function]])

[F3] The comparison theorem states its estimate for “all but at most” a specified number of integer starts. ([[thm-matomaki-radziwill-mean-on-almost-all-short-intervals]])

## Proof

**Proof technique:** direct.

1.1 Since $X\ge16$, $h\ge4$. The interval $[3X/4,3X/4+h/2]$ has length at least $2$, so choose an odd integer $m$ in it. Its upper endpoint is less than $x_0$, while $2m\in[x_0,x_0+h]$; also $a(2)=a(m)=1$ and $a(2m)=-1$. As $\gcd(2,m)=1$, this contradicts [F2], proving that $a$ is not multiplicative. [given, F2, choose, algebra]

1.2 If an integer start $x$ has $[x,x+h]\cap[x_0,x_0+h]\ne\varnothing$, then $x_0-h\le x\le x_0+h$. Thus at most $2h+1$ integer starts in $[X,2X]$ have such an intersection. There are $X+1$ integer starts in $[X,2X]$, and $h/X\le1/\sqrt X\to0$, so the intersecting-start proportion tends to zero. [given, algebra]

1.3 The interval $[x_0,x_0+h]$ contains exactly $h+1$ integers and all carry value $-1$, so [F1] gives $S_a(x_0,h)/h=-(h+1)/h=-1-1/h$. [given, F1, algebra]

1.4 The block is contained in $[X,2X]$. The long sum contains $X+1$ integers, of which $h+1$ have value $-1$ and $X-h$ have value $1$, so its sum is $(X-h)-(h+1)=X-2h-1$ and its normalized value is $1-(2h+1)/X$. [given, algebra]

2.1 Subtracting the long average from the short average gives $-2-1/h+(2h+1)/X$, which tends to $-2$ because $h\to\infty$ and $h/X\to0$. Thus the displayed estimate at the exceptional start is not small even though step 1.2 gives only $o(X)$ starts intersecting the block. This illustrates the “all but at most” quantifier in [F3]; it does not contradict that theorem, since step 1.1 proves this function is not multiplicative. [F3, step 1.1, step 1.2, step 1.3, step 1.4, algebra] ∎

