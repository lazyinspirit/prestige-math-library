---
id: ex-least-absolute-remainders-and-the-even-modulus-tie
kind: example
title: "Least absolute remainders modulo $7$ and modulo $8$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-least-absolute-remainder, def-congruence-modulo-an-integer]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Proofs by Descent, §6, Theorem 6.6 (Step 2)"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/descent.pdf"
pipeline_run: null
---

## Example

Write $r_m(a)$ for the least absolute remainder of $a$ modulo $m$
([[lem-least-absolute-remainder]]). For $a=0,1,2,3,4,5,6,7$:

$$r_7(a):\quad 0,\ 1,\ 2,\ 3,\ -3,\ -2,\ -1,\ 0,$$

$$r_8(a):\quad 0,\ 1,\ 2,\ 3,\ 4,\ -3,\ -2,\ -1.$$

Modulo the odd modulus $7$ every entry satisfies $4r^2<49$ strictly, the largest
value of $4r^2$ being $36$. Modulo the even modulus $8$ the entry $r_8(4)=4$
attains $2r=m$ and hence $4r^2=64=8^2$; here $4$ and $-4$ are congruent modulo
$8$, and the normalisation $-m<2r\le m$ is what selects $4$ rather than $-4$.

## Facts & Assumptions

**Given:** The moduli $7$ and $8$ and the integers $0,1,2,3,4,5,6,7$.

[F1] For $a,b,n\in\mathbb Z$, $a\equiv b\pmod n$ means $n\mid(a-b)$ ([[def-congruence-modulo-an-integer]]).

[L1] For an integer $m\ge 1$ and $a\in\mathbb Z$ there is exactly one integer $r$ with $a\equiv r\pmod m$ and $-m<2r\le m$, and consequently $4r^2\le m^2$ ([[lem-least-absolute-remainder]]).

## Verification

**Proof technique:** direct.

1.1 For $m=7$ the condition of [L1] is $-7<2r\le 7$, that is $r\in\{-3,-2,-1,0,1,2,3\}$; each listed value is congruent to its argument, since $4-(-3)=7$, $5-(-2)=7$, $6-(-1)=7$ and $7-0=7$ are multiples of $7$ while $0,1,2,3$ are their own remainders, so the first table is correct and $4r^2\le 36<49$ throughout. [given, L1, F1, algebra]

1.2 For $m=8$ the condition of [L1] is $-8<2r\le 8$, that is $r\in\{-3,-2,-1,0,1,2,3,4\}$; the listed values are congruent to their arguments because $5-(-3)=8$, $6-(-2)=8$ and $7-(-1)=8$ are multiples of $8$ while $0,1,2,3,4$ are their own remainders, so the second table is correct. [given, L1, F1, algebra]

2.1 At $a=4$ and $m=8$ the value $r=4$ gives $2r=8=m$, so the bound $4r^2\le m^2$ of [L1] is attained with equality; the alternative $-4$ is congruent to $4$ modulo $8$ and satisfies $2r=-8$, which the strict left-hand inequality of [L1] excludes, so the normalisation is what makes the remainder unique here. [step 1.1, step 1.2, L1] ∎

## Remarks

**Only an even modulus produces the tie.** The equality $2r=m$ requires $m$ to be twice an integer, so for odd $m$ the bound $4r^2\le m^2$ is automatically strict, as the first table shows. This is exactly the boundary that [[lem-least-absolute-residue-quadruple-of-a-multiple]] has to exclude by a separate argument: the norm estimate there gives only $n\le m$, and equality in all four centred coordinates at once is exactly the case $n=m$ that a separate argument must rule out.
