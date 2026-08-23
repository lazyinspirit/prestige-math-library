---
id: cor-squarefree-sum-of-two-squares-characterisation
kind: corollary
title: "Squarefree sums of two squares"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-squarefree-positive-integer, thm-sum-of-two-squares-characterisation, thm-primitive-sum-of-two-squares-characterisation, def-common-divisor-and-gcd, lem-every-integer-above-one-has-a-prime-divisor, thm-euclids-lemma]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, Chapter E, Theorems E.II.2 and E.II.4"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

A squarefree positive integer is a sum of two squares if and only if none of its odd prime factors is congruent to $3$ modulo $4$; every such representation is primitive.

## Facts & Assumptions

**Given:** A squarefree positive integer $n$.

[F1] A positive integer $n$ is squarefree if no square of a prime divides $n$; equivalently, every exponent in its canonical prime factorisation is $0$ or $1$ ([[def-squarefree-positive-integer]]).

[L1] A positive integer $n$ is a sum of two squares if and only if every prime $q\equiv3\pmod4$ occurs to an even exponent in its canonical prime factorisation ([[thm-sum-of-two-squares-characterisation]]).

[L2] A positive integer $n$ has a primitive two-square representation if and only if $v_2(n)\le1$ and no prime $q\equiv3\pmod4$ divides $n$ ([[thm-primitive-sum-of-two-squares-characterisation]]).

[F2] An integer $d$ is a common divisor of $a$ and $b$ when $d\mid a$ and $d\mid b$ ([[def-common-divisor-and-gcd]]).

[L3] Every integer greater than $1$ has a prime divisor ([[lem-every-integer-above-one-has-a-prime-divisor]]).

[L4] If a prime $p$ divides $ab$, then $p\mid a$ or $p\mid b$ ([[thm-euclids-lemma]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], every prime exponent of $n$ is zero or one. Consequently the even-exponent condition in [L1] for a prime congruent to three modulo four is equivalent to that prime not dividing $n$. [F1, L1, algebra]

1.2 To see that every representation is primitive, suppose $n=x^2+y^2$ and $\gcd(x,y)>1$. By [L3] choose a prime $\ell$ dividing the gcd. Then $\ell\mid x$ and $\ell\mid y$ by [F2], so $\ell^2\mid n$, contradicting [F1]. [F1, F2, L3, L4, assume-contra, algebra, discharge-contradiction]

2.1 Squarefreeness also gives $v_2(n)\le1$, so the same exclusion of three-mod-four primes satisfies [L2] and yields a primitive representation whenever $n$ is represented. [step 1.1, L2, F1]

3.1 Step 1.1 proves the representation criterion, step 2.1 supplies primitivity under that criterion, and step 1.2 shows that every representation has it. [step 1.1, step 2.1, step 1.2] ∎
