---
id: ex-continued-fraction-and-extended-euclid
kind: example
title: "The continued fraction of 37/11 matches Euclid and Bezout"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-bezout-identity, thm-rational-continued-fraction-termination]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
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

For $37/11$, the Euclidean divisions
$$37=3\cdot11+4,\qquad 11=2\cdot4+3,\qquad 4=1\cdot3+1,\qquad 3=3\cdot1+0$$
give the continued fraction
$$\frac{37}{11}=[3;2,1,3],$$
and the penultimate convergents encode the Bezout relation
$$37\cdot3-11\cdot10=1.$$

## Facts & Assumptions

**Given:** The integers $37$ and $11$.

[F1] For a rational number, the continued-fraction algorithm terminates and its
digits are exactly the Euclidean quotient digits
([[thm-rational-continued-fraction-termination]]).

[F2] Bezout's identity characterizes $\gcd(a,b)$ as an integer linear
combination of $a$ and $b$ ([[thm-bezout-identity]]).

## Verification

**Proof technique:** direct.

1.1 The Euclidean quotient digits are $3,2,1,3$, so [F1] gives. [F1, given, algebra]
$$\frac{37}{11}=[3;2,1,3].$$
Its convergents are
$$3,\qquad 3+\frac12=\frac72,\qquad 3+\frac{1}{2+\frac11}=\frac{10}{3},\qquad 3+\frac{1}{2+\frac{1}{1+\frac13}}=\frac{37}{11}.$$ [F1, given, algebra]

2.1 The penultimate convergent is $10/3$, and. [F2, step 1.1, algebra]
$$37\cdot3-11\cdot10=111-110=1.$$
So $1$ is an explicit integer linear combination of $37$ and $11$, which is
exactly the Bezout identity for $\gcd(37,11)=1$ in the sense of [F2]. [F2, step 1.1, algebra] ∎
