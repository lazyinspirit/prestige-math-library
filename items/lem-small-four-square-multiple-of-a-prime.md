---
id: lem-small-four-square-multiple-of-a-prime
kind: lemma
title: "Some multiple $pm$ with $1\\le m<p$ is a sum of four squares"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prime, def-sum-of-four-squares-representation, lem-four-square-congruence-for-primes, lem-least-absolute-remainder, def-congruence-modulo-an-integer, lem-congruence-respects-integer-arithmetic, def-divides-in-z]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Proofs by Descent, §6, Theorem 6.6 (Step 1)"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/descent.pdf"
    - title: "MIT 18.781 Theory of Numbers, Lecture 22, Lemma 81"
      url: "https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/fe790e3f49be0f81f6f25135d00476a9_MIT18_781S12_lec22.pdf"
pipeline_run: null
---

## Statement

Let $p$ be a prime ([[def-prime]]). Then there is an integer $m$ with $1\le m<p$
for which $pm$ is a sum of four integer squares
([[def-sum-of-four-squares-representation]]).

## Facts & Assumptions

**Given:** A prime $p$.

[F1] An integer $p$ is prime when $p>1$ and $d\mid p$ with $d>0$ force $d=1$ or $d=p$; in words, $p$ exceeds $1$, and its only positive divisors are $1$ and $p$ ([[def-prime]]).

[F2] A representation of a nonnegative integer $n$ as a sum of four squares is an ordered quadruple $(a,b,c,d)\in\mathbb Z^4$ with $n=a^2+b^2+c^2+d^2$ ([[def-sum-of-four-squares-representation]]).

[F3] For $a,b,n\in\mathbb Z$, $a\equiv b\pmod n$ means $n\mid(a-b)$ ([[def-congruence-modulo-an-integer]]).

[F4] For $d,a\in\mathbb Z$, $d\mid a$ means $a=dq$ for some $q\in\mathbb Z$ ([[def-divides-in-z]]).

[L1] For every prime $p$ there are integers $x,y$ with $x^2+y^2+1\equiv 0\pmod p$ ([[lem-four-square-congruence-for-primes]]).

[L2] For an integer $m\ge 1$ and $a\in\mathbb Z$ there is exactly one integer $r$ with $a\equiv r\pmod m$ and $-m<2r\le m$, and consequently $4r^2\le m^2$ ([[lem-least-absolute-remainder]]).

[L3] If $a\equiv a'\pmod n$ and $b\equiv b'\pmod n$, then $a+b\equiv a'+b'\pmod n$ and $ab\equiv a'b'\pmod n$ ([[lem-congruence-respects-integer-arithmetic]]).

## Proof

**Proof technique:** direct.

1.1 Fix integers $u,v$ with $u^2+v^2+1\equiv 0\pmod p$, which [L1] supplies for the prime $p$. [given, L1, choose]

2.1 Since $p>1$ by [F1], the modulus $p$ satisfies the hypothesis of [L2]; let $x$ and $y$ be the least absolute remainders of $u$ and $v$ modulo $p$, so that $x\equiv u\pmod p$, $y\equiv v\pmod p$, $4x^2\le p^2$ and $4y^2\le p^2$. [step 1.1, F1, L2, construct]

3.1 By [L3] applied to the products $x\cdot x$ and $y\cdot y$ and then to the sums, $x^2+y^2+1\equiv u^2+v^2+1\pmod p$, and $u^2+v^2+1\equiv 0\pmod p$; hence $x^2+y^2+1\equiv 0\pmod p$, which by [F3] and [F4] says $p\mid x^2+y^2+1$. [step 1.1, step 2.1, L3, F3, F4, algebra]

4.1 Write $x^2+y^2+1=pm$ with $m\in\mathbb Z$, as [F4] permits; the left-hand side is at least $1$ because $x^2\ge 0$ and $y^2\ge 0$, and $p>0$, so $m\ge 1$. [step 3.1, F4, algebra]

5.1 Multiplying step 4.1 by $4$ and using the two bounds of step 2.1 gives $4pm=4x^2+4y^2+4\le p^2+p^2+4=2p^2+4$; since $p\ge 2$ by [F1] we have $p^2\ge 4$, so $2p^2+4\le 3p^2<4p^2$, whence $4pm<4p^2$, $pm<p^2$ and $m<p$. [step 2.1, step 4.1, F1, algebra]

6.1 The equation $pm=x^2+y^2+1^2+0^2$ of step 4.1 exhibits the quadruple $(x,y,1,0)\in\mathbb Z^4$ as a representation of $pm$, so $pm$ is a sum of four integer squares with $1\le m<p$. [step 4.1, step 5.1, F2] ∎

## Remarks

**Why the centring is needed.** The pair $(u,v)$ produced by [L1] is subject to no size condition, so $u^2+v^2+1$ can be an arbitrarily large multiple of $p$. Replacing $u,v$ by their least absolute remainders leaves the congruence class untouched and buys the two bounds $4x^2\le p^2$ and $4y^2\le p^2$, which is what forces the multiplier below $p$.

**The bound is not tight, and does not need to be.** What the coordinate bounds give at step 5.1 is $4pm\le 2p^2+4$, and only the weaker $4pm<4p^2$ is used. The comparison $2p^2+4<4p^2$ needs just $p^2>2$, which every prime satisfies, so $p=2$ needs no separate treatment even though the coordinate bound $4x^2\le p^2$ can be attained there, at $x=\pm 1$.

**The case $m=1$.** Nothing excludes it, and it is the case $p=x^2+y^2+1$ in which the prime is already a sum of four squares.
