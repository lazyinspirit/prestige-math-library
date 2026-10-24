---
id: cor-infinitely-many-primes-congruent-to-one-modulo-three
kind: corollary
title: "There are infinitely many primes congruent to $1$ modulo $3$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-primes-dividing-x-squared-plus-three,
       lem-every-integer-above-one-has-a-prime-divisor,
       def-monoid-finite-product, thm-generalised-associativity,
       def-countable, def-equinumerous, def-injection-surjection-bijection,
       lem-divisibility-basic]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "A. Gorodnik, Number Theory, Lecture 9, consequence after Example 2.4"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Statement

The set of primes $p$ satisfying $p\equiv1\pmod3$ is infinite ([[def-countable]]).

## Facts & Assumptions

**Given:** The set $S=\{p:p\text{ is prime and }p\equiv1\pmod3\}$.

[L1] For every odd prime $p\ne3$, the congruence $x^2\equiv-3\pmod p$ is soluble if and only if $p\equiv1\pmod3$ ([[ex-primes-dividing-x-squared-plus-three]]).

[L2] Every integer greater than $1$ has a prime divisor ([[lem-every-integer-above-one-has-a-prime-divisor]]).

[L3] A finite product has empty-product value $1$ and satisfies $\prod_{i<k+1}g_i=(\prod_{i<k}g_i)g_k$ ([[def-monoid-finite-product]]).

[L4] In a commutative monoid, permuting the entries of a finite product does not change its value ([[thm-generalised-associativity]]).

[L5] A set $A$ is finite if $A\approx n$ for some $n\in\mathbb N$ ([[def-countable]]).

[L6] The relation $A\approx B$ means that there exists a bijection $A\to B$ ([[def-equinumerous]]).

[L7] A bijection is, in particular, surjective ([[def-injection-surjection-bijection]]).

[L8] If $d\mid u$ and $d\mid v$, then $d\mid ux+vy$ for all integers $x,y$ ([[lem-divisibility-basic]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $S$ is finite. By [L5] and [L6], choose a bijection from some natural number $r$ onto $S$ and write its prime values as $p_0,\ldots,p_{r-1}$; surjectivity is [L7]. Let $P=\prod_{i<r}p_i$, using the value $P=1$ if $r=0$ from [L3], and set $N=12P^2+1>1$. By [L2], choose a prime $q\mid N$. Since $N$ is odd and $N\equiv1\pmod3$, one has $q\ne2,3$. [assume-contra, L2, L3, L5, L6, L7, choose]

2.1 From $q\mid N$ and $(6P)^2+3=3N$, the class of $6P$ solves $x^2\equiv-3\pmod q$, so [L1] gives $q\equiv1\pmod3$. Thus $q\in S$ and equals some $p_i$; by [L4] move that factor to the end of the finite product, and then [L3] gives $q\mid P$, hence $q\mid12P^2$. Together with $q\mid12P^2+1$, [L8] gives $q\mid1$, impossible for a prime. Therefore $S$ is not finite. [step 1.1, L1, L3, L4, L8, discharge-contradiction] ∎
