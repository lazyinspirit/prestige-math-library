---
id: ex-rankin-residue-covering-and-crt-interval
kind: example
title: "A worked residue cover and CRT prime gap"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
dependency_level: 4
deps:
  - def-prime-residue-covering-length
  - def-prime-gap-functions
  - lem-crt-residue-covering-to-prime-gap
  - def-prime
  - def-divides-in-z
  - lem-divisor-bound
  - def-int-abs
  - lem-int-abs-properties
  - thm-division-algorithm-in-z
  - lem-nat-embeds-int
  - lem-nat-discrete
  - def-natural-numbers
  - def-nat-order
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Dimitris Koukoulopoulos, The Distribution of Prime Numbers, Chapter 29"
      url: "https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf"
    - title: "Kevin Ford, Ben Green, Sergei Konyagin, and Terence Tao, Large gaps between consecutive prime numbers"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v183-n3-p04-p.pdf"
---

## Example

At cutoff $z=7$, choose residues $a_2=0$, $a_3=0$, $a_5=1$, and $a_7=5$. They cover the six integers $1,\ldots,6$. The primorial is $P(7)=210$, and $m=324$ satisfies $210<m\le420$ and $m\equiv-a_p\pmod p$ for each chosen prime. The integers $325,\ldots,330$ are all composite, so this construction gives $Y(7)\ge6$ and a prime gap of length at least $7$ with smaller prime at most $420$; in the defined notation, $G(420)\ge7$.

## Example references

[[def-prime-residue-covering-length]]

[[def-prime-gap-functions]]

[[lem-crt-residue-covering-to-prime-gap]]

[Koukoulopoulos, The Distribution of Prime Numbers, Chapter 29](https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf)

[Ford, Green, Konyagin, and Tao, Large gaps between consecutive prime numbers](https://annals.math.princeton.edu/wp-content/uploads/annals-v183-n3-p04-p.pdf)

## Facts & Assumptions

**Given:** The four residue choices in the Example, the interval of integers $1,\ldots,6$, and $P(7)=2\cdot3\cdot5\cdot7$.

[F1] A residue assignment covers $[1,H]$ when every integer $n$ in that interval has a chosen prime $p\le z$ with $p\mid n-a_p$; $Y(z)$ is the greatest coverable length ([[def-prime-residue-covering-length]]).

[F2] $G(X)$ is the maximum of $p_{n+1}-p_n$ over indices with $p_n\le X$ ([[def-prime-gap-functions]]).

[F3] A cover of $[1,H]$ by residues modulo all primes $p\le z$ yields $G(2P(z))\ge H+1$ ([[lem-crt-residue-covering-to-prime-gap]]).

[F4] A prime is greater than $1$ and its only positive divisors are $1$ and itself; $1$, $0$, and negative integers are not prime, while an integer greater than $1$ with a proper positive divisor is composite ([[def-prime]]).

[F5] If $d\mid n$ for positive $d$, division with remainder has remainder $0$ ([[thm-division-algorithm-in-z]], [[def-divides-in-z]]).

[F6] If $d\mid n$ and $n\ne0$, then $|d|\le|n|$ ([[lem-divisor-bound]], [[def-int-abs]], [[lem-int-abs-properties]]).

[F7] Every nonnegative integer is the image of a unique natural number, and the natural order is discrete: there is no natural strictly between $n$ and its successor ([[lem-nat-embeds-int]], [[lem-nat-discrete]], [[def-natural-numbers]], [[def-nat-order]]).

## Verification

1.1 If $d>0$ divides one of $2,3,5,7$, then [F6] gives $d$ at most that integer, and [F7] identifies the possible integer divisors strictly between $1$ and it. For $2$ there is no such divisor, so $2$ is prime. For $3$ the only candidate is $2$, and $3=2\cdot1+1$. For $5$, candidates $2,3,4$ leave remainders $1,2,1$; for $7$, candidates $2,3,4,5,6$ leave remainders $1,1,3,2,1$. Thus none of $3,5,7$ has a proper positive divisor, so they too are prime by [F4]. The integers $1,0$, and all negative integers fail the size clause in [F4]; $4=2\cdot2$ and $6=2\cdot3$ are composite. Hence the primes at most $7$ are exactly $2,3,5,7$. [F4, F5, F6, F7, algebra]

2.1 The class $1\pmod 5$ covers $1$; the class $0\pmod 2$ covers $2,4,6$; the class $0\pmod 3$ covers $3$; and the class $5\pmod 7$ covers $5$. Thus every integer from $1$ through $6$ is covered, so $Y(7)\ge6$ by [F1]. [given, F1, step 1.1, algebra]

2.2 The primorial is $P(7)=2\cdot3\cdot5\cdot7=210$. Direct reduction gives $324\equiv0\pmod2$, $324\equiv0\pmod3$, $324\equiv4\equiv-1\pmod5$, and $324\equiv2\equiv-5\pmod7$. Hence $m=324$ is in $(P(7),2P(7)]$ and solves all four CRT congruences. [given, step 1.1, algebra]

2.3 The six integers factor as $325=5\cdot65$, $326=2\cdot163$, $327=3\cdot109$, $328=2\cdot164$, $329=7\cdot47$, and $330=2\cdot165$. In each case the displayed prime factor is strictly between $1$ and the integer, so [F4] makes the integer composite. [F4, step 1.1, algebra]

3.1 Apply [F3] to the cover in step 2.1 with $H=6$ and $P(7)=210$; it gives $G(420)\ge7$. Step 2.2 identifies the translate $m=324$, and step 2.3 verifies its six consecutive composites explicitly. [F1, F2, F3, step 2.1, step 2.2, step 2.3] ∎

