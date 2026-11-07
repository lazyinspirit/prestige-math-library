---
id: lem-prime-residue-covering-length-is-finite
kind: lemma
title: "The prime residue-covering length is finite"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
dependency_level: 2
deps:
  - def-prime-residue-covering-length
  - def-prime
  - def-prime-counting-function
  - def-integers-modulo-n
  - def-divides-in-z
  - def-monoid-finite-product
  - thm-generalised-associativity
  - thm-chinese-remainder-theorem
  - thm-standard-representatives-modulo-n
  - lem-prime-not-dividing-is-coprime
  - thm-well-ordering-principle
  - lem-nat-nonzero-is-successor
  - def-natural-numbers
  - def-nat-addition
  - def-nat-order
  - lem-prime-gap-functions-are-well-defined
  - lem-cardinality-of-finite-natural-initial-segment
  - thm-subset-of-a-finite-set
  - lem-integer-part
  - lem-nat-embeds-int
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "K. Conrad, The Chinese Remainder Theorem"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf"
    - title: "Kevin Ford, Ben Green, Sergei Konyagin, James Maynard, and Terence Tao, Large gaps between consecutive prime numbers"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v183-n3-p04-p.pdf"
---

## Statement

For every real $z\ge2$ and every residue assignment at cutoff $z$, there is an integer $n$ with $1\le n\le P(z)$ such that $p\nmid n-a_p$ for every prime $p\le z$. Consequently no assignment covers $[1,P(z)]\cap\mathbb Z$, and the maximum $Y(z)$ in the Definition exists with $0\le Y(z)<P(z)$.

## Statement references

[[def-prime-residue-covering-length]]

## Facts & Assumptions

**Given:** A real $z\ge2$, the finite prime list $p_1,\ldots,p_r$ with $p_r\le z$, and a residue assignment $0\le a_{p_i}<p_i$.

[F1] A prime is an integer greater than $1$ whose positive divisors are only $1$ and itself ([[def-prime]]).

[F2] Distinct primes are coprime: if $p\nmid q$ then $\gcd(p,q)=1$ ([[lem-prime-not-dividing-is-coprime]]); prime divisibility in the same statement and [F1] show that distinct primes do not divide one another.

[F3] For a finite pairwise-coprime list of positive integers, simultaneous residue classes determine a unique class modulo their product ([[thm-chinese-remainder-theorem]]).

[F4] Every class modulo a positive integer $M$ has a unique representative $r$ with $0\le r<M$ ([[thm-standard-representatives-modulo-n]]).

[F5] Congruence classes modulo $p$ are equal exactly when their representatives differ by a multiple of $p$ ([[def-integers-modulo-n]], [[def-divides-in-z]]).

[F6] The finite product has empty value $1$ and adjoining each factor multiplies the previous product by that factor; in particular each listed prime divides $P(z)$ ([[def-monoid-finite-product]], [[thm-generalised-associativity]]).

[F7] Every nonempty subset of $\mathbb N$ has a least element; every nonzero natural is a successor ([[thm-well-ordering-principle]], [[lem-nat-nonzero-is-successor]], [[def-natural-numbers]], [[def-nat-order]], [[def-nat-addition]]).

[F8] The first prime is $2$, and the primes are enumerated by the recursive sequence used in the gap definition ([[lem-prime-gap-functions-are-well-defined]]).

[F9] For $z\ge2$, the primes not exceeding $z$ form a finite list: each prime is a positive integer by its Definition, embeds as a natural, and is at most $\lfloor z\rfloor$; hence the list is a subset of the finite natural initial segment through $\lfloor z\rfloor$. The function $\pi(z)$ counts this list ([[def-prime]], [[def-prime-counting-function]], [[lem-nat-embeds-int]], [[lem-integer-part]], [[lem-cardinality-of-finite-natural-initial-segment]], [[thm-subset-of-a-finite-set]]).

## Proof

1.1 The primes at most $z$ form a finite list by [F9] and include $2$ by [F8]. Distinct members are pairwise coprime: if distinct primes $p_i,p_j$ satisfied $p_i\mid p_j$, then $p_i>1$ would be a positive divisor of the prime $p_j$, forcing $p_i=p_j$ by [F1]; so $p_i\nmid p_j$ and [F2] gives $\gcd(p_i,p_j)=1$. [F1, F2, F8, F9]

1.2 For each listed prime put $b_p=a_p+1$ when $a_p+1<p$, and put $b_p=0$ when $a_p=p-1$. Then $0\le b_p<p$ and $b_p\ne a_p$. Since both are in the standard range, [F4]–[F5] imply $b_p\not\equiv a_p\pmod p$. [F4, F5, given, algebra]

1.3 Apply [F3] to the pairwise-coprime list and target residues $b_p$ to obtain one class modulo $M=P(z)$ with these residues. Let $r$ be its representative with $0\le r<M$ from [F4]. [F3, F4, F6]

2.1 If $r>0$ set $n=r$; if $r=0$ set $n=M$. In either case $1\le n\le M$ and $n\equiv b_p\pmod p$ for every listed prime, because $p\mid M$ by [F6]. Hence $p\nmid n-a_p$ for every $p\le z$, so $n$ is uncovered. [F5, F6, step 1.2, step 1.3, algebra]

3.1 Let $T$ be the set of nonnegative integers $H$ for which no residue assignment covers $[1,H]$. Step 2.1 gives $M\in T$, so [F7] gives a least $H_0\in T$. Since $H=0$ is covered vacuously, $H_0>0$; write $H_0=Y+1$ using [F7]. Every $H\le Y$ is coverable by minimality of $H_0$, while $H_0$ is not. If an assignment covered some $H\ge H_0$, restricting the same assignment to $[1,H_0]$ would cover $H_0$, a contradiction. Thus $Y$ is the greatest coverable length and $Y<M$. [F7, step 2.1, given, algebra] ∎

