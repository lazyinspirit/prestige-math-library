---
id: lem-four-square-descent
kind: lemma
title: "Descent step: a smaller multiple of $p$ is a sum of four squares"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prime, def-sum-of-four-squares-representation, lem-euler-four-square-product-identity, lem-least-absolute-remainder, lem-least-absolute-residue-quadruple-of-a-multiple, lem-congruence-respects-integer-arithmetic, def-congruence-modulo-an-integer, def-divides-in-z, lem-int-cancellation]
justified_by: []
aliases: []
landmark: true
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
    - title: "Keith Conrad, Proofs by Descent, §6, Theorem 6.6 (Step 2)"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/descent.pdf"
    - title: "MIT 18.781 Theory of Numbers, Lecture 22, Theorem 80"
      url: "https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/fe790e3f49be0f81f6f25135d00476a9_MIT18_781S12_lec22.pdf"
pipeline_run: null
---

## Statement

Let $p$ be a prime ([[def-prime]]), let $m$ be an integer with $1<m<p$, and
suppose $pm$ is a sum of four integer squares
([[def-sum-of-four-squares-representation]]). Then there is an integer $n$ with
$1\le n<m$ for which $pn$ is a sum of four integer squares.

## Facts & Assumptions

**Given:** A prime $p$, an integer $m$ with $1<m<p$, and a representation of $pm$ as a sum of four integer squares.

[F1] An integer $p$ is prime when $p>1$ and $d\mid p$ with $d>0$ force $d=1$ or $d=p$ ([[def-prime]]).

[F2] A representation of a nonnegative integer $n$ as a sum of four squares is an ordered quadruple $(a,b,c,d)\in\mathbb Z^4$ with $n=a^2+b^2+c^2+d^2$ ([[def-sum-of-four-squares-representation]]).

[F3] For $a,b,n\in\mathbb Z$, $a\equiv b\pmod n$ means $n\mid(a-b)$ ([[def-congruence-modulo-an-integer]]).

[F4] For $d,a\in\mathbb Z$, $d\mid a$ means $a=dq$ for some $q\in\mathbb Z$ ([[def-divides-in-z]]).

[L1] For all integers $x_1,\dots,x_4,y_1,\dots,y_4$, setting $z_1=x_1y_1+x_2y_2+x_3y_3+x_4y_4$, $z_2=x_1y_2-x_2y_1-x_3y_4+x_4y_3$, $z_3=x_1y_3+x_2y_4-x_3y_1-x_4y_2$ and $z_4=x_1y_4-x_2y_3+x_3y_2-x_4y_1$ gives $(x_1^2+x_2^2+x_3^2+x_4^2)(y_1^2+y_2^2+y_3^2+y_4^2)=z_1^2+z_2^2+z_3^2+z_4^2$ ([[lem-euler-four-square-product-identity]]).

[L2] For an integer $m\ge 1$ and $a\in\mathbb Z$ there is exactly one integer $r$ with $a\equiv r\pmod m$ and $-m<2r\le m$, and consequently $4r^2\le m^2$ ([[lem-least-absolute-remainder]]).

[L3] If $p$ is prime, $1<m<p$ and $pm=a^2+b^2+c^2+d^2$ for integers $a,b,c,d$, then the least absolute remainders $a',b',c',d'$ of $a,b,c,d$ modulo $m$ satisfy $a'^2+b'^2+c'^2+d'^2=mn$ for an integer $n$ with $1\le n<m$ ([[lem-least-absolute-residue-quadruple-of-a-multiple]]).

[L4] If $a\equiv a'\pmod n$ and $b\equiv b'\pmod n$, then $a+b\equiv a'+b'\pmod n$, $a-b\equiv a'-b'\pmod n$ and $ab\equiv a'b'\pmod n$ ([[lem-congruence-respects-integer-arithmetic]]).

[L5] If $x,y\in\mathbb Z$ are nonzero then $xy\ne 0$; consequently, if $xz=yz$ and $z\ne 0$, then $x=y$ ([[lem-int-cancellation]]).

## Proof

**Proof technique:** direct.

1.1 Fix integers $a,b,c,d$ with $pm=a^2+b^2+c^2+d^2$, which the hypothesis supplies. [given, F2, choose]

2.1 Since $m>1$, [L2] applies with modulus $m$; let $a',b',c',d'$ be the least absolute remainders of $a,b,c,d$ modulo $m$, so $a\equiv a'$, $b\equiv b'$, $c\equiv c'$ and $d\equiv d'$ modulo $m$. [step 1.1, L2, construct]

3.1 By [L3] applied to $p$, $m$ and the representation of step 1.1, there is an integer $n$ with $1\le n<m$ and $a'^2+b'^2+c'^2+d'^2=mn$. [step 1.1, step 2.1, L3, F1]

3.2 Put $A=aa'+bb'+cc'+dd'$; substituting the congruences of step 2.1 and using [L4] gives $A\equiv a^2+b^2+c^2+d^2\pmod m$, and $a^2+b^2+c^2+d^2=pm\equiv 0\pmod m$ by [F3], so $A\equiv 0\pmod m$. [step 1.1, step 2.1, L4, F3, algebra]

3.3 Put $B=ab'-ba'-cd'+dc'$, $C=ac'+bd'-ca'-db'$ and $D=ad'-bc'+cb'-da'$; the same substitution and [L4] give $B\equiv ab-ba-cd+dc=0$, $C\equiv ac+bd-ca-db=0$ and $D\equiv ad-bc+cb-da=0$ modulo $m$. [step 2.1, L4, F3, algebra]

4.1 Applying [L1] to $x=(a,b,c,d)$ and $y=(a',b',c',d')$ produces exactly the four quantities $A,B,C,D$ of steps 3.2 and 3.3 as $z_1,z_2,z_3,z_4$, so $(pm)(mn)=A^2+B^2+C^2+D^2$. [step 1.1, step 2.1, step 3.1, L1]

4.2 By [F3] and [F4] the congruences of steps 3.2 and 3.3 say $m\mid A$, $m\mid B$, $m\mid C$ and $m\mid D$; write $A=mA_1$, $B=mB_1$, $C=mC_1$, $D=mD_1$ with $A_1,B_1,C_1,D_1\in\mathbb Z$. [step 3.2, step 3.3, F3, F4, construct]

5.1 Substituting step 4.2 into step 4.1 gives $pm^2n=m^2(A_1^2+B_1^2+C_1^2+D_1^2)$. [step 4.1, step 4.2, algebra]

6.1 Since $m>1$ is nonzero, $m^2\ne 0$ by [L5], so cancelling $m^2$ in step 5.1 by [L5] gives $pn=A_1^2+B_1^2+C_1^2+D_1^2$. [step 5.1, L5, algebra]

7.1 The quadruple $(A_1,B_1,C_1,D_1)\in\mathbb Z^4$ therefore represents $pn$ as a sum of four integer squares, with $1\le n<m$ from step 3.1. [step 3.1, step 6.1, F2] ∎

## Remarks

**The sign pattern is doing the work.** Steps 3.2 and 3.3 substitute $a'\equiv a$, $b'\equiv b$, $c'\equiv c$, $d'\equiv d$ into the four bilinear forms of [L1] and read off that all four become divisible by $m$: the first because it becomes the norm $pm$, the other three because they become expressions in which the terms cancel identically. That is a property of this particular choice of signs, and [[rem-sign-patterns-in-the-four-square-identity]] records which other choices share it.

**The hypothesis $m>1$ is used twice.** It gives the modulus of [L2] and it is part of what [L3] needs; and it is not a restriction in practice, since $m=1$ is the case in which $p$ itself is already a sum of four squares and no descent is wanted.
