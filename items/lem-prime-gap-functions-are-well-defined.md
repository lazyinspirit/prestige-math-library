---
id: lem-prime-gap-functions-are-well-defined
kind: lemma
title: "The nth-prime enumeration and gap maxima are well-defined"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
dependency_level: 1
deps:
  - def-prime-gap-functions
  - def-prime
  - def-prime-counting-function
  - def-divides-in-z
  - lem-divisor-bound
  - def-int-abs
  - lem-int-abs-properties
  - thm-int-comm-ring
  - def-integers
  - def-int-operations
  - thm-int-ordered-ring
  - def-int-order
  - thm-euclid-infinitude-of-primes
  - thm-well-ordering-principle
  - thm-recursion
  - thm-induction-principle
  - def-natural-numbers
  - def-nat-order
  - def-nat-addition
  - lem-nat-add-commutative
  - lem-nat-discrete
  - lem-nat-embeds-int
  - lem-cardinality-of-finite-natural-initial-segment
  - thm-subset-of-a-finite-set
  - lem-integer-part
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Euclid's theorem: for every finite list of primes there is another prime"
      url: "https://en.wikipedia.org/wiki/Euclid%27s_theorem"
    - title: "Dimitris Koukoulopoulos, The Distribution of Prime Numbers, Chapter 29"
      url: "https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf"
---

## Statement

The recursive rule that starts with $p_1=2$ and takes $p_{n+1}$ to be the least prime greater than $p_n$ defines a unique sequence of primes. It is strictly increasing and contains every positive prime exactly once. Consequently the maxima defining $G(X)$ and $G_k(X)$ are well-defined on the domains in their Definition.

## Statement references

[[def-prime-gap-functions]]

## Facts & Assumptions

**Given:** The prime definitions and recursive rule in [[def-prime-gap-functions]]. The goal is to construct that sequence, prove it enumerates all primes, and justify the finite maxima.

[F1] A positive integer $p$ is prime when $p>1$ and every positive divisor of $p$ is $1$ or $p$ ([[def-prime]]).

[F2] $d\mid a$ means $a=dq$ for some integer $q$ ([[def-divides-in-z]]).

[F3] Integer order is total and compatible with addition, positive products are positive, and the integer operations form a commutative ring ([[thm-int-ordered-ring]], [[def-int-order]], [[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[F4] If $d\mid a$ and $a\ne0$, then $|d|\le|a|$; also $|x|=x$ for $x\ge0$ ([[lem-divisor-bound]], [[def-int-abs]], [[lem-int-abs-properties]]).

[F5] Every finite list of primes omits a prime: for every natural $r$ and list $p:r\to\mathbb Z$ of primes, a prime $q$ exists with $q\ne p_i$ for every $i<r$ ([[thm-euclid-infinitude-of-primes]]).

[F6] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

[F7] Given a base value and a total successor map, recursion on $\mathbb N$ produces a unique sequence satisfying that recurrence ([[thm-recursion]]).

[F8] The natural embedding into $\mathbb Z$ is injective and order preserving; positive integers are at least $1$, $m<\sigma(n)$ implies $m\le n$, and induction and the usual addition laws hold on $\mathbb N$ ([[lem-nat-embeds-int]], [[lem-nat-discrete]], [[def-natural-numbers]], [[def-nat-order]], [[def-nat-addition]], [[lem-nat-add-commutative]], [[thm-induction-principle]]).

[F9] For every real number $x\ge0$, $\pi(x):=\#\{p\text{ prime}:p\le x\}$ ([[def-prime-counting-function]]).

[F10] For each natural $n$, the initial segment $I_n=\{t\in\mathbb N:t<n\}$ is finite and has cardinality $|I_n|=n$, and every subset of a finite set is finite ([[lem-cardinality-of-finite-natural-initial-segment]], [[thm-subset-of-a-finite-set]]).

## Proof

1.1 The integer $2$ is prime. If $d>0$ and $d\mid2$, then [F4] gives $|d|\le|2|=2$; since $d>0$, $|d|=d$. Integer discreteness from [F8] then gives $d=1$ or $d=2$. Since $2>1$, this verifies [F1] for $2$. [F1, F2, F3, F4, F8, algebra]

2.1 For any natural $m$, every prime not exceeding $m$ embeds as a natural at most $m$ by [F8], so those primes form a subset of the finite initial segment $I_{m+1}$ from [F10] and can be listed in increasing order. Apply [F5] to that finite list: a prime outside it is greater than $m$. Hence the set of primes greater than any $m$ is nonempty, and [F6] gives its least element. The prime set is nonempty by step 1.1, so [F6] also gives its least element, which is $2$ because every prime exceeds $1$ and natural discreteness gives every such prime at least $2$. [F1, F5, F6, F8, F10, step 1.1, choose]

3.1 Define $f(m)$ to be the least prime greater than $m$ from step 2.1. Apply [F7] with initial value $2$ and successor map $f$; it gives a unique sequence $q_0=2$, $q_{n+1}=f(q_n)$. Set $p_{n+1}=q_n$. Each $q_n$ is prime and $q_{n+1}>q_n$ by construction. [F5, F6, F7, step 2.1, construct]

4.1 Induction gives $q_n\ge n+2$: it holds at $n=0$, and $q_{n+1}>q_n$ implies $q_{n+1}\ge q_n+1$ by natural discreteness, so the bound advances to $n+1$. Thus $(q_n)$ is unbounded. [F8, step 3.1, algebra]

5.1 Let $r$ be any prime, viewed as a natural. By step 4.1 some $q_n\ge r$; choose the least such $n$ by [F6]. If $n=0$, then $r\le q_0=2$ and every prime exceeds $1$, so natural discreteness gives $r=2=q_0$. If $n>0$, then $q_{n-1}<r\le q_n$; since $r$ is a prime above $q_{n-1}$ and $q_n$ is the least such prime, $q_n\le r$, hence $q_n=r$. Strict increase gives uniqueness of its index. [F1, F6, step 3.1, step 4.1, choose]

6.1 By step 5.1, the first $\pi(X)$ terms are exactly the primes not exceeding $X$. For $X\ge2$ this set is nonempty by step 1.1 and finite by [F10], so the maximum defining $G(X)$ exists. For fixed $k\ge1$ and every $X$ in the stated domain $\pi(X)>k$, the index set defining $G_k(X)$ is finite and nonempty, so its maximum exists. Thus both definitions are well-defined. [F9, F10, step 1.1, step 5.1, algebra] ∎

