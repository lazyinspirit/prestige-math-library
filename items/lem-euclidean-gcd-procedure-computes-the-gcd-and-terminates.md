---
id: lem-euclidean-gcd-procedure-computes-the-gcd-and-terminates
kind: lemma
title: "The Euclidean Remainder Procedure Computes the Greatest Common Divisor and Terminates"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - alg-enumerate-reduced-forms-of-negative-fundamental-discriminant
  - def-common-divisor-and-gcd
  - def-int-abs
  - lem-gcd-basic-values
  - lem-gcd-euclidean-step
  - thm-division-algorithm-in-z
  - thm-well-ordering-principle
justified_by: []
aliases: []
proof_strategy: contradiction
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, §3.1.2"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
---

## Statement

For integers $u$ and $v$, initialize $(r,s)=(|u|,|v|)$. While $s>0$, use
the unique integers $q,t$ with $r=qs+t$ and $0\le t<s$, then replace
$(r,s)$ by $(s,t)$. When $s=0$, return $r$. Here $|u|=u$ if $u\ge0$ and
$|u|=-u$ if $u<0$; $\gcd(u,v)$ is the nonnegative greatest common divisor,
with $\gcd(0,0)=0$. This procedure terminates and returns $\gcd(u,v)$ for
every pair of integers $(u,v)$.

## Statement references

[[alg-enumerate-reduced-forms-of-negative-fundamental-discriminant]]

[[def-common-divisor-and-gcd]]

[[def-int-abs]]

[[thm-division-algorithm-in-z]]

[[lem-gcd-euclidean-step]]

[[lem-gcd-basic-values]]

[[thm-well-ordering-principle]]

[William Stein, *Elementary Number Theory and Elliptic Curves*, §3.1.2, Algorithm 3.1.8, printed p. 14](https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf)

## Facts & Assumptions

**Given:** Integers $u,v$ and the deterministic initialization and remainder
loop in the statement.

[F1] The enumerator's gcd subroutine initializes $(r,s)=(|u|,|v|)$,
replaces $(r,s)$ by $(s,r\bmod s)$ while $s>0$, and returns $r$ when $s=0$
([[alg-enumerate-reduced-forms-of-negative-fundamental-discriminant]]).

[F2] Absolute value on $\mathbb Z$ is $|x|=x$ for $x\ge0$ and $|x|=-x$
for $x<0$ ([[def-int-abs]]).

[F3] For an integer $r$ and positive integer $s$, there are unique integers
$q,t$ with $r=qs+t$ and $0\le t<s$
([[thm-division-algorithm-in-z]]).

[L1] If $r=qs+t$, then $\gcd(r,s)=\gcd(s,t)$
([[lem-gcd-euclidean-step]]).

[L2] For all integers $x,y$, $\gcd(x,y)=\gcd(|x|,|y|)$ and
$\gcd(x,0)=|x|$, including $\gcd(0,0)=0$
([[lem-gcd-basic-values]]).

[F4] The mathematical $\gcd(x,y)$ is the nonnegative greatest common divisor
of the common divisors of $x$ and $y$, with $\gcd(0,0)=0$
([[def-common-divisor-and-gcd]]).

[L3] Every nonempty subset of $\mathbb N$ has a least element
([[thm-well-ordering-principle]]).

## Proof

1.1 If $s=|v|=0$ initially, the procedure returns $|u|$. By [L2], $\gcd(u,v)=\gcd(|u|,|v|)=\gcd(|u|,0)=|u|$, including the case $u=0$. [F1, F2, L2, given, algebra]

1.2 If a loop iteration has $s>0$, [F3] supplies the quotient and remainder $r=qs+t$ with $0\le t<s$. The update replaces $(r,s)$ by $(s,t)$; by [L1], the gcd is unchanged. Thus the gcd of the pair is invariant through every iteration. [F1, F3, L1, construct]

2.1 Suppose for contradiction that the procedure never terminates. The positive second coordinates it visits form a nonempty subset of $\mathbb N$, so by [L3] it has a least element $s$. At that iteration $s>0$, and [F3] gives a next remainder $t$ with $0\le t<s$. If $t=0$ the next loop condition terminates the procedure; if $t>0$ it is a smaller positive visited coordinate, contradicting minimality. [F3, L3, step 1.2, assume-contra]

3.1 The contradiction in step 2.1 shows the procedure terminates. At termination the current pair is $(r,0)$ with $r\ge0$. By [L1] and step 1.2, its gcd equals the initial $\gcd(|u|,|v|)$; by [L2], $\gcd(r,0)=|r|=r$ and $\gcd(|u|,|v|)=\gcd(u,v)$. Hence the returned value is the mathematical $\gcd(u,v)$, also covering the initial $s=0$ case of step 1.1. [F1, F2, L1, L2, F4, step 1.1, step 1.2, step 2.1, discharge-contradiction, algebra] ∎
