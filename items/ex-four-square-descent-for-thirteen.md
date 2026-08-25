---
id: ex-four-square-descent-for-thirteen
kind: example
title: "Descending from $13\\cdot 11$ to $13$ in two steps"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-four-square-descent, lem-least-absolute-residue-quadruple-of-a-multiple, lem-least-absolute-remainder, lem-euler-four-square-product-identity, def-sum-of-four-squares-representation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Proofs by Descent, §6, Theorem 6.6"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/descent.pdf"
pipeline_run: null
---

## Example

Start from the prime $p=13$ and the multiplier $m=11$, with

$$143=13\cdot 11=11^2+3^2+3^2+2^2.$$

Centring the coordinates modulo $11$ gives $(0,3,3,2)$, whose norm is
$22=11\cdot 2$, so the multiplier drops to $n=2$. Euler's identity applied to
$(11,3,3,2)$ and $(0,3,3,2)$ gives $(22,33,33,22)$, each coordinate divisible by
$11$; dividing by $11$ gives

$$26=13\cdot 2=2^2+3^2+3^2+2^2.$$

Repeating with $m=2$: the centred quadruple is $(0,1,1,0)$, of norm $2=2\cdot 1$,
so $n=1$; the identity applied to $(2,3,3,2)$ and $(0,1,1,0)$ gives $(6,4,0,0)$,
and dividing by $2$ gives

$$13=3^2+2^2+0^2+0^2.$$

The two steps use an odd modulus and then an even one, so both parities occur.

## Facts & Assumptions

**Given:** The prime $13$, the multiplier $11$, and the representation $143=11^2+3^2+3^2+2^2$.

[F1] A representation of a nonnegative integer $n$ as a sum of four squares is an ordered quadruple $(a,b,c,d)\in\mathbb Z^4$ with $n=a^2+b^2+c^2+d^2$ ([[def-sum-of-four-squares-representation]]).

[L1] If $p$ is prime, $1<m<p$ and $pm$ is a sum of four integer squares, then there is an integer $n$ with $1\le n<m$ for which $pn$ is a sum of four integer squares ([[lem-four-square-descent]]).

[L2] If $p$ is prime, $1<m<p$ and $pm=a^2+b^2+c^2+d^2$, then the least absolute remainders $a',b',c',d'$ of $a,b,c,d$ modulo $m$ satisfy $a'^2+b'^2+c'^2+d'^2=mn$ for an integer $n$ with $1\le n<m$ ([[lem-least-absolute-residue-quadruple-of-a-multiple]]).

[L3] For an integer $m\ge 1$ and $a\in\mathbb Z$ there is exactly one integer $r$ with $a\equiv r\pmod m$ and $-m<2r\le m$, and consequently $4r^2\le m^2$ ([[lem-least-absolute-remainder]]).

[L4] For all integers $x_1,\dots,x_4,y_1,\dots,y_4$, setting $z_1=x_1y_1+x_2y_2+x_3y_3+x_4y_4$, $z_2=x_1y_2-x_2y_1-x_3y_4+x_4y_3$, $z_3=x_1y_3+x_2y_4-x_3y_1-x_4y_2$ and $z_4=x_1y_4-x_2y_3+x_3y_2-x_4y_1$ gives $(x_1^2+x_2^2+x_3^2+x_4^2)(y_1^2+y_2^2+y_3^2+y_4^2)=z_1^2+z_2^2+z_3^2+z_4^2$ ([[lem-euler-four-square-product-identity]]).

## Verification

**Proof technique:** direct.

1.1 The starting datum is a representation: $11^2+3^2+3^2+2^2=121+9+9+4=143$ and $13\cdot 11=143$, with $1<11<13$ as [L1] and [L2] require. [given, F1, algebra]

2.1 By [L3] with modulus $11$, the least absolute remainders of $11,3,3,2$ are $0,3,3,2$, since $11-0=11$ is a multiple of $11$ and $-11<2r\le 11$ holds for $r=0,3,2$; their norm is $0+9+9+4=22=11\cdot 2$, so the integer $n$ of [L2] is $2$, and indeed $1\le 2<11$. [step 1.1, L2, L3, algebra]

3.1 Applying [L4] to $x=(11,3,3,2)$ and $y=(0,3,3,2)$ gives $z_1=11\cdot 0+3\cdot 3+3\cdot 3+2\cdot 2=22$, $z_2=11\cdot 3-3\cdot 0-3\cdot 2+2\cdot 3=33$, $z_3=11\cdot 3+3\cdot 2-3\cdot 0-2\cdot 3=33$ and $z_4=11\cdot 2-3\cdot 3+3\cdot 3-2\cdot 0=22$, whose squares sum to $484+1089+1089+484=3146=143\cdot 22$; each coordinate is divisible by $11$, and dividing gives $(2,3,3,2)$ with $4+9+9+4=26=13\cdot 2$, which is the conclusion of [L1] at $n=2$. [step 2.1, L1, L4, algebra]

4.1 Repeating with $p=13$ and $m=2$, for which $1<2<13$: by [L3] with modulus $2$ the least absolute remainders of $2,3,3,2$ are $0,1,1,0$, since $2r=2$ is admitted for $r=1$; their norm is $0+1+1+0=2=2\cdot 1$, so [L2] gives $n=1$ with $1\le 1<2$. [step 3.1, L2, L3, algebra]

5.1 Applying [L4] to $x=(2,3,3,2)$ and $y=(0,1,1,0)$ gives $z_1=2\cdot 0+3\cdot 1+3\cdot 1+2\cdot 0=6$, $z_2=2\cdot 1-3\cdot 0-3\cdot 0+2\cdot 1=4$, $z_3=2\cdot 1+3\cdot 0-3\cdot 0-2\cdot 1=0$ and $z_4=2\cdot 0-3\cdot 1+3\cdot 1-2\cdot 0=0$, whose squares sum to $36+16=52=26\cdot 2$; each coordinate is divisible by $2$, and dividing gives $(3,2,0,0)$ with $9+4=13$, a representation of $13$ itself. [step 4.1, L1, L4, algebra]

6.1 So two applications of the descent carry $13\cdot 11$ to $13\cdot 2$ and then to $13\cdot 1$, the moduli used being $11$ and $2$. [step 3.1, step 5.1, F1] ∎

## Remarks

**The even step is where the tie could have bitten.** At $m=2$ the centred coordinates $1$ attain $2r=m$, so the estimate $4r^2\le m^2$ is an equality in two of the four coordinates. That is admissible: what [[lem-least-absolute-residue-quadruple-of-a-multiple]] excludes is equality in all four at once, and here two coordinates centre to $0$.

**The starting representation is not the minimal one.** The descent does not require the multiplier to come from [[lem-small-four-square-multiple-of-a-prime]]; any $m$ with $1<m<p$ for which $pm$ is a sum of four squares will do, and $m=11$ was taken to make two steps rather than one.
