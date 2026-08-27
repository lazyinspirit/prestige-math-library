---
id: ex-a-negative-real-continued-fraction
kind: example
title: "A negative irrational has a regular continued fraction with positive later digits"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-continued-fraction-complete-quotients, thm-continued-fraction-algorithm-for-real-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "William Stein, Elementary Number Theory: Primes, Congruences, and Secrets"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Example

For the negative irrational $-\sqrt2$, the continued-fraction algorithm gives
$$-\sqrt2=[-2;1,1,\overline2].$$
The only negative digit is the initial one; every later digit is positive.

## Facts & Assumptions

**Given:** The real number $-\sqrt2$.

[F1] The complete-quotient algorithm chooses the unique integer part $a_n$ with
$a_n\le\alpha_n<a_n+1$, and whenever the next complete quotient exists it is
$\alpha_{n+1}=1/(\alpha_n-a_n)$
([[def-continued-fraction-complete-quotients]]).

[F2] The continued-fraction algorithm reconstructs the original real number from
its digits ([[thm-continued-fraction-algorithm-for-real-numbers]]).

## Verification

**Proof technique:** direct.

1.1 Since $-2<-\sqrt2<-1$, the first digit is $a_0=-2$. Then. [F1, given, algebra]
$$\alpha_1=\frac1{-\sqrt2+2}=\frac{2+\sqrt2}{2},\qquad \alpha_2=\frac1{\alpha_1-1}=\sqrt2,$$
so $a_1=1$ and $a_2=1$. [F1, given, algebra]

2.1 One more step gives. [F1, F2, step 1.1, algebra]
$$\alpha_3=\frac1{\sqrt2-1}=\sqrt2+1,$$
so every later digit is $2$. Hence the digit string is
$$[-2;1,1,\overline2],$$
and [F2] identifies its value with $-\sqrt2$. In particular the negative sign
is absorbed entirely into the first digit, while every later digit stays
positive as required by [F1]. [F1, F2, step 1.1, algebra] ∎
