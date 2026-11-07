---
id: lem-unit-modulo-prime-powers
kind: lemma
title: "An integer not divisible by a prime is invertible modulo every power of it"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-prime
  - def-divides-in-z
  - lem-prime-not-dividing-is-coprime
  - thm-bezout-identity
sources:
  scraped: []
  references:
    - title: "D. R. Heath-Brown, The density of rational points on curves and surfaces, Lemma 5"
      url: "https://arxiv.org/pdf/math/0405392v1"
---

## Statement

Let $p$ be a prime and let $a\in\mathbb Z$ satisfy $p\nmid a$. For every
integer $m\ge1$ there is an integer $b_m$ with
$ab_m\equiv1\pmod{p^m}$, where $u\equiv v\pmod{q}$ means $q\mid u-v$.

## Statement references

[Heath-Brown, the simple-root lifting argument](https://arxiv.org/pdf/math/0405392v1)

[[def-prime]]

[[def-divides-in-z]]

## Facts & Assumptions

**Given:** A prime $p$ and an integer $a$ with $p\nmid a$.

[F1] [[lem-prime-not-dividing-is-coprime]]: $\gcd(p,a)=1$.

[F2] [[thm-bezout-identity]]: If two integers are not both zero, their gcd is
an integer linear combination of them.

## Proof

1.1 By [F1] and [F2], choose $u,v\in\mathbb Z$ with $up+va=1$. Thus
$av\equiv1\pmod p$; put $b_1=v$. [F1, F2, given, choose]

1.2 Suppose $ab_m=1+c_mp^m$ for some integer $c_m$. Since $a$ has inverse
$v$ modulo $p$ by step 1.1, choose $t\in\mathbb Z$ with
$c_m+ta\equiv0\pmod p$ and put $b_{m+1}=b_m+tp^m$. Then
$ab_{m+1}=1+p^m(c_m+ta)\equiv1\pmod{p^{m+1}}$. [step 1.1, given, choose, algebra]

2.1 Step 1.1 gives the base case and step 1.2 constructs the next inverse from
any current one, so induction gives such $b_m$ for every $m\ge1$. [step 1.1, step 1.2, induction] ∎
