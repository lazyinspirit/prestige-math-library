---
id: ex-short-interval-average-for-the-constant-function
kind: example
title: "The constant multiplicative function on a short interval"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
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

Let $f(n)=1$ for every positive integer $n$, and let $x,h$ be positive integers. Then $f$ is multiplicative and

$$
\frac{S_f(x,h)}{h}=1+\frac1h.
$$

This value reflects the closed endpoint convention: the sum contains $h+1$ terms while the normalizing denominator is $h$.

## Example references

[[def-short-interval-sum-of-an-arithmetic-function|closed short-interval sum and endpoint convention]]

[[def-multiplicative-arithmetic-function|multiplicative-function convention]]

[Matomäki and Radziwiłł, Theorem 1 normalization, printed p. 1](https://arxiv.org/pdf/1501.04585v4)

## Facts & Assumptions

**Given:** $f(n)=1$ for every positive integer $n$ and positive integers $x,h$.

[F1] A multiplicative arithmetic function satisfies $f(1)=1$ and $f(mn)=f(m)f(n)$ for coprime positive integers $m,n$. ([[def-multiplicative-arithmetic-function]])

[F2] $S_f(x,h)$ sums $f(n)$ over the positive integers in the closed interval $[x,x+h]$. ([[def-short-interval-sum-of-an-arithmetic-function]])

## Proof

**Proof technique:** direct.

1.1 The constant-one function has $f(1)=1$, and for every coprime $m,n$ it has $f(mn)=1=1\cdot1=f(m)f(n)$; hence it is multiplicative by [F1]. [given, F1, algebra]

1.2 Because $x,h$ are positive integers, the integers in the closed interval $[x,x+h]$ are exactly $x,x+1,\ldots,x+h$, a list of $h+1$ terms. Each summand is $1$, so [F2] gives $S_f(x,h)=h+1$. [given, F2, algebra]

2.1 Since $h>0$, dividing $h+1$ by $h$ yields $S_f(x,h)/h=1+1/h$. [given, step 1.2, algebra] ∎

