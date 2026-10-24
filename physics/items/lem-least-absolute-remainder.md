---
id: lem-least-absolute-remainder
kind: lemma
title: "The least absolute remainder modulo a positive integer"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-division-algorithm-nonzero-divisor, def-congruence-modulo-an-integer, def-divides-in-z, lem-divisor-bound]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Proofs by Descent, §6, Theorem 6.6 (Step 2)"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/descent.pdf"
    - title: "MIT 18.781 Theory of Numbers, Lecture 22, Lemma 81"
      url: "https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/fe790e3f49be0f81f6f25135d00476a9_MIT18_781S12_lec22.pdf"
pipeline_run: null
---

## Statement

Let $m$ be an integer with $m\ge 1$ and let $a\in\mathbb Z$. Then there is exactly
one integer $r$ with

$$a\equiv r\pmod m\qquad\text{and}\qquad -m<2r\le m,$$

that is, exactly one integer $r$ satisfying $a\equiv r\pmod m$ and
$-m<2r\le m$, and consequently $4r^2\le m^2$. Call this $r$ the **least absolute
remainder** of $a$ modulo $m$.

## Facts & Assumptions

**Given:** An integer $m$ with $m\ge 1$ and an integer $a$.

[F1] For $a,b,n\in\mathbb Z$, $a\equiv b\pmod n$ means $n\mid(a-b)$ ([[def-congruence-modulo-an-integer]]).

[F2] For $d,a\in\mathbb Z$, $d\mid a$ means $a=dq$ for some $q\in\mathbb Z$ ([[def-divides-in-z]]).

[L1] For $a,b\in\mathbb Z$ with $b\ne 0$ there is exactly one pair $(q,r)$ of integers with $a=qb+r$ and $0\le r<|b|$; moreover $b\mid a$ holds exactly when $r=0$ ([[cor-division-algorithm-nonzero-divisor]]).

[L2] If $d\mid a$ and $a\ne 0$, then $d\ne 0$ and $|d|\le|a|$ ([[lem-divisor-bound]]).

## Proof

**Proof technique:** direct.

1.1 Since $m\ge 1$, the modulus is nonzero and $|m|=m$, so [L1] supplies exactly one pair $(q,r_0)$ of integers with $a=qm+r_0$ and $0\le r_0<m$. [given, L1, algebra]

2.1 Define $r:=r_0$ when $2r_0\le m$, and $r:=r_0-m$ otherwise; the two branches are mutually exclusive and exhaustive, so $r$ is a well-defined integer. [step 1.1, construct]

3.1 In either branch $a-r$ is an integer multiple of $m$, since $a-r_0=qm$ and $a-(r_0-m)=(q+1)m$; hence $m\mid(a-r)$ and $a\equiv r\pmod m$. [step 2.1, F1, F2, algebra]

3.2 In either branch $-m<2r\le m$: the first branch gives $0\le 2r_0\le m$ from $r_0\ge 0$ and its own condition, while the second has $2r_0>m$ and $2r_0<2m$, so $2r=2r_0-2m$ satisfies $-m<2r<0$. [step 2.1, algebra]

4.1 From $-m<2r\le m$ it follows that $|2r|\le m$, and squaring the inequality between nonnegative integers gives $4r^2=(2r)^2\le m^2$. [step 3.2, algebra]

4.2 If an integer $r'$ also satisfies $a\equiv r'\pmod m$ and $-m<2r'\le m$, then $a-r=mq_1$ and $a-r'=mq_2$ for integers $q_1,q_2$ by [F1] and [F2], so $r-r'=m(q_2-q_1)$ and $m\mid(r-r')$; adding $-m<2r\le m$ to $-m\le-2r'<m$ gives $-2m<2(r-r')<2m$, so $|r-r'|<m$, and were $r-r'\ne 0$ then [L2] would give $m=|m|\le|r-r'|<m$; hence $r=r'$. [step 3.2, F1, F2, L2, algebra]

5.1 So $r$ exists by steps 3.1 and 3.2, is unique by step 4.2, and satisfies $4r^2\le m^2$ by step 4.1. [step 3.1, step 3.2, step 4.1, step 4.2] ∎

## Remarks

**Where the tie falls.** The normalisation is deliberately half-open on the right: $2r=m$ is permitted and $2r=-m$ is not. The case $|2r|=m$ can arise only for even $m$, where $r_0$ may equal the integer $t$ with $m=2t$; then $t$ and $t-m$ are congruent modulo $m$ with $|t|=|t-m|$, and the convention keeps $t$. Without the half-open choice both values would satisfy $|2r|\le m$ and the uniqueness clause would be false as stated.

**The bound is stated in integers.** Writing $4r^2\le m^2$ rather than $|r|\le m/2$ avoids introducing a quotient that need not be an integer, and it is the form the estimates in [[lem-small-four-square-multiple-of-a-prime]] and [[lem-least-absolute-residue-quadruple-of-a-multiple]] use. The inequality $4r^2\le m^2$ is an equality exactly when $2r=m$.
