---
id: lem-four-square-congruence-for-primes
kind: lemma
title: "For every prime $p$ the congruence $x^2+y^2+1\\equiv 0\\pmod p$ is solvable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prime, def-congruence-modulo-an-integer, def-divides-in-z, lem-units-of-z, prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares, lem-congruence-respects-integer-arithmetic]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Proofs by Descent, §6, Lemma 6.4"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/descent.pdf"
    - title: "Evan Dummit, Number Theory (part 9): The Geometry of Numbers, §9.1.2, Lemma 2"
      url: "https://dummit.cos.northeastern.edu/docs/numthy_9_geometry_of_numbers.pdf"
pipeline_run: null
---

## Statement

Let $p$ be a prime ([[def-prime]]). Then there are integers $x,y$ with
$x^2+y^2+1\equiv 0\pmod p$, the congruence being that of
[[def-congruence-modulo-an-integer]].

## Facts & Assumptions

**Given:** A prime $p$.

[F1] An integer $p$ is prime when $p>1$ and $d\mid p$ with $d>0$ force $d=1$ or $d=p$; in words, $p$ exceeds $1$, and its only positive divisors are $1$ and $p$ ([[def-prime]]).

[F2] For $a,b,n\in\mathbb Z$, $a\equiv b\pmod n$ means $n\mid(a-b)$ ([[def-congruence-modulo-an-integer]]).

[F3] For $d,a\in\mathbb Z$, $d\mid a$ means $a=dq$ for some $q\in\mathbb Z$ ([[def-divides-in-z]]).

[L1] Let $p$ be an odd prime and let $a\in\mathbb Z$ with $p\nmid a$. Then there are integers $x,y$ such that $x^2+y^2\equiv a\pmod p$ ([[prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares]]).

[L2] The group of units of the commutative monoid $(\mathbb Z,\cdot,1)$ is $\{1,-1\}$; equivalently, for $u\in\mathbb Z$ the condition $u\mid 1$ holds exactly when $u=1$ or $u=-1$ ([[lem-units-of-z]]).

[L3] If $a\equiv a'\pmod n$ and $b\equiv b'\pmod n$, then $a+b\equiv a'+b'\pmod n$, $a-b\equiv a'-b'\pmod n$ and $ab\equiv a'b'\pmod n$ ([[lem-congruence-respects-integer-arithmetic]]).

## Proof

**Proof technique:** cases.

1.1 If $2\mid p$ then $2$ is a positive divisor of $p$, so [F1] forces $2=1$ or $2=p$, and $2\ne 1$ leaves $p=2$; hence either $p=2$ or $p$ is odd, and these two cases exhaust the primes. [given, F1, algebra]

1.2 In the case $p=2$, take $x=1$ and $y=0$: then $x^2+y^2+1=1+0+1=2$ and $2\mid(2-0)$, so $x^2+y^2+1\equiv 0\pmod 2$. [assume-case two, F2, algebra]

1.3 In the case $p$ odd, $p\nmid -1$: otherwise $-1=pq$ for some integer $q$ by [F3], hence $1=p(-q)$, so $p\mid 1$ and [L2] gives $p=1$ or $p=-1$, both contradicting $p>1$ from [F1]. [assume-case odd, F1, F3, L2, algebra]

2.1 For the odd case, apply [L1] to the odd prime $p$ with $a=-1$, whose hypothesis $p\nmid -1$ is step 1.3: there are integers $x,y$ with $x^2+y^2\equiv -1\pmod p$. [step 1.3, L1]

3.1 For the odd case, $1\equiv 1\pmod p$ since $p\mid 0$, so adding this to step 2.1 through [L3] gives $x^2+y^2+1\equiv -1+1=0\pmod p$. [step 2.1, L3, F2, algebra]

4.1 Both cases produce integers $x,y$ with $x^2+y^2+1\equiv 0\pmod p$, and by step 1.1 no prime falls outside them. [step 1.2, step 3.1, cases-exhaustive] ∎

## Remarks

**Where the odd case comes from.** For odd $p$ the work is done by [[prop-every-nonzero-residue-mod-prime-is-a-sum-of-two-squares]] at $a=-1$: the set $Q$ of square classes modulo $p$, the zero class included, and the set of classes $-1-z$ for $z\in Q$ are two subsets of $\mathbb Z/p$ with $(p+1)/2$ elements each, so they meet, and a common value gives $x^2\equiv -1-y^2$. The hypothesis $p\nmid a$ of that proposition is what step 1.3 discharges, by an argument that does not use oddness; oddness is needed only to make the proposition applicable at all.

**Why $p=2$ is separate.** The cited proposition is stated for odd primes, so it says nothing at $p=2$; the pair $(1,0)$ settles that case by computation rather than by weakening the proposition's hypothesis.
