---
id: lem-least-absolute-residue-quadruple-of-a-multiple
kind: lemma
title: "The centred residue quadruple of $pm=a^2+b^2+c^2+d^2$ has norm $mn$ with $1\\le n<m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-prime, lem-least-absolute-remainder, def-congruence-modulo-an-integer, lem-congruence-respects-integer-arithmetic, def-divides-in-z, lem-divisibility-basic, lem-int-cancellation]
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
    - title: "MIT 18.781 Theory of Numbers, Lecture 22, Theorem 80"
      url: "https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/fe790e3f49be0f81f6f25135d00476a9_MIT18_781S12_lec22.pdf"
pipeline_run: null
---

## Statement

Let $p$ be a prime ([[def-prime]]), let $m$ be an integer with $1<m<p$, and let
$a,b,c,d$ be integers with $pm=a^2+b^2+c^2+d^2$. Write $a',b',c',d'$ for the
least absolute remainders of $a,b,c,d$ modulo $m$
([[lem-least-absolute-remainder]]). Then there is an integer $n$ with
$1\le n<m$ and

$$a'^2+b'^2+c'^2+d'^2=mn.$$

## Facts & Assumptions

**Given:** A prime $p$, an integer $m$ with $1<m<p$, integers $a,b,c,d$ with $pm=a^2+b^2+c^2+d^2$, and the least absolute remainders $a',b',c',d'$ of $a,b,c,d$ modulo $m$.

[F1] An integer $p$ is prime when $p>1$ and $d\mid p$ with $d>0$ force $d=1$ or $d=p$; in words, $p$ exceeds $1$, and its only positive divisors are $1$ and $p$ ([[def-prime]]).

[F2] For $a,b,n\in\mathbb Z$, $a\equiv b\pmod n$ means $n\mid(a-b)$ ([[def-congruence-modulo-an-integer]]).

[F3] For $d,a\in\mathbb Z$, $d\mid a$ means $a=dq$ for some $q\in\mathbb Z$ ([[def-divides-in-z]]).

[L1] For an integer $m\ge 1$ and $a\in\mathbb Z$ there is exactly one integer $r$ with $a\equiv r\pmod m$ and $-m<2r\le m$, and consequently $4r^2\le m^2$ ([[lem-least-absolute-remainder]]).

[L2] If $a\equiv a'\pmod n$ and $b\equiv b'\pmod n$, then $a+b\equiv a'+b'\pmod n$ and $ab\equiv a'b'\pmod n$ ([[lem-congruence-respects-integer-arithmetic]]).

[L3] Divisibility is linear: $d\mid a$ and $d\mid b$ imply $d\mid ax+by$ for all $x,y\in\mathbb Z$; in particular $d\mid a+b$ and $d\mid a-b$ ([[lem-divisibility-basic]]).

[L4] If $xz=yz$ and $z\ne 0$, then $x=y$ ([[lem-int-cancellation]]).

## Proof

**Proof technique:** direct.

1.1 Since $m>1$ the hypothesis $m\ge 1$ of [L1] holds, so $a',b',c',d'$ are defined and satisfy $a\equiv a'\pmod m$, $b\equiv b'\pmod m$, $c\equiv c'\pmod m$, $d\equiv d'\pmod m$ together with $-m<2a'\le m$, $4a'^2\le m^2$ and the same three conditions for $b'$, $c'$ and $d'$. [given, L1, construct]

2.1 By [L2] applied to the products $a\cdot a$, $b\cdot b$, $c\cdot c$, $d\cdot d$ and then to the sums, $a'^2+b'^2+c'^2+d'^2\equiv a^2+b^2+c^2+d^2=pm\pmod m$, and $pm\equiv 0\pmod m$ since $m\mid pm$; so by [F2] the modulus $m$ divides $a'^2+b'^2+c'^2+d'^2$, and by [F3] there is an integer $n$ with $a'^2+b'^2+c'^2+d'^2=mn$. [given, step 1.1, L2, F2, F3, algebra]

3.1 The left-hand side of step 2.1 is a sum of squares, hence at least $0$, and $m>0$, so $n\ge 0$. [step 2.1, algebra]

3.2 Summing the four bounds $4a'^2\le m^2$, $4b'^2\le m^2$, $4c'^2\le m^2$, $4d'^2\le m^2$ of step 1.1 gives $4mn\le 4m^2$, hence $mn\le m^2$ and, dividing by the positive integer $m$, $n\le m$. [step 1.1, step 2.1, algebra]

4.1 If $n=0$ then $a'^2+b'^2+c'^2+d'^2=0$ forces $a'=b'=c'=d'=0$, so [F2] and step 1.1 give $m\mid a$, $m\mid b$, $m\mid c$ and $m\mid d$; writing $a=m\alpha$, $b=m\beta$, $c=m\gamma$, $d=m\delta$ with [F3] then gives $pm=m^2(\alpha^2+\beta^2+\gamma^2+\delta^2)$. [step 2.1, step 3.1, F2, F3, algebra]

4.2 If $n=m$ then step 3.2 holds with equality, so each of the four bounds of step 1.1 is an equality: $4a'^2=m^2$ and likewise for $b'$, $c'$, $d'$. [step 3.2, step 1.1, algebra]

5.1 In the case $n=0$, cancelling the nonzero factor $m$ in step 4.1 by [L4] gives $p=m(\alpha^2+\beta^2+\gamma^2+\delta^2)$, so $m$ is a positive divisor of $p$ and [F1] forces $m=1$ or $m=p$, both excluded by $1<m<p$; hence $n\ge 1$. [step 4.1, F1, L4, algebra]

5.2 In the case of step 4.2, $m^2=(2a')^2$ with $m>0$ gives $2a'=m$ or $2a'=-m$, and the normalisation $-m<2a'\le m$ of step 1.1 leaves $2a'=m$; so $m=2s$ with $s:=a'$ a positive integer, and the same argument gives $b'=c'=d'=s$. [step 4.2, step 1.1, algebra]

6.1 Still in the case $n=m$, $a\equiv s\pmod m$ gives $a=s+mt=s(1+2t)$ for some integer $t$ by [F2] and [F3], so $a^2-s^2=s^2\bigl((1+2t)^2-1\bigr)=4s^2t(t+1)$, which $m^2=4s^2$ divides; the same holds for $b$, $c$ and $d$. [step 5.2, step 1.1, F2, F3, algebra]

7.1 In the same case, summing the four differences of step 6.1 and using [L3], $m^2$ divides $(a^2+b^2+c^2+d^2)-4s^2=pm-m^2$, and $m^2$ divides $m^2$, so $m^2\mid pm$. [step 6.1, L3, algebra]

8.1 Still in the case $n=m$, writing $pm=m^2k$ as [F3] permits and cancelling the nonzero factor $m$ by [L4] gives $p=mk$, so $m$ is a positive divisor of $p$ and [F1] forces $m=1$ or $m=p$, both excluded by $1<m<p$; hence $n\ne m$. [step 7.1, F1, F3, L4, algebra]

9.1 Therefore $n\ge 1$ by step 5.1, $n\le m$ by step 3.2 and $n\ne m$ by step 8.1, that is $1\le n<m$, with $a'^2+b'^2+c'^2+d'^2=mn$ from step 2.1. [step 2.1, step 3.2, step 5.1, step 8.1] ∎

## Remarks

**The two excluded values are excluded for the same reason.** Both $n=0$ and $n=m$ end in $m\mid p$, which the hypotheses $1<m<p$ rule out. They differ in how they get there: $n=0$ says the four coordinates are already multiples of $m$, while $n=m$ says each is congruent to half of $m$, and the second is possible only when $m$ is even.

**Why the even case cannot be waved away.** The normalisation $-m<2r\le m$ admits $2r=m$, so for even $m$ a centred coordinate really can attain the bound $4r^2=m^2$, and then the estimate of step 3.2 gives only $n\le m$ rather than $n<m$. Steps 4.2 to 8.1 are what remove the remaining value. An alternative treatment halves all four coordinates first so that only odd moduli are descended through; the route taken here keeps the modulus arbitrary and pays for it with this one extra argument.
