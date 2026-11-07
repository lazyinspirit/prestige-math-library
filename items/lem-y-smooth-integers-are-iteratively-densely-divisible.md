---
id: lem-y-smooth-integers-are-iteratively-densely-divisible
kind: lemma
title: "Every y-smooth integer is iteratively y-densely divisible"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps: [def-polymath-densely-divisible-moduli, def-divides-in-z, lem-divisibility-basic, lem-every-integer-above-one-has-a-prime-divisor, def-prime, lem-int-bounded-above-has-greatest, thm-int-comm-ring, thm-int-ordered-ring, lem-nat-embeds-int, lem-nat-discrete, def-natural-numbers, thm-induction-principle]
justified_by: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "D. H. J. Polymath, New equidistribution estimates of Zhang type, and bounded gaps between primes"
      url: "https://arxiv.org/pdf/1402.0811v3"
      locator: "§2.3, Lemma 2.10(iii), printed pp. 12–13"
---

## Statement

For every real $y\ge1$, every positive integer $n$ whose prime divisors are all at most $y$, and every integer $i\ge0$, the integer $n$ is $i$-tuply $y$-densely divisible, that is, $n\in D^{(i)}(y)$.

## Statement references

[Polymath8a, Lemma 2.10(iii)](https://arxiv.org/pdf/1402.0811v3)

## Facts & Assumptions

**Given:** A real $y\ge1$ and a positive integer $n$ every prime divisor of which is at most $y$.

[F1] [[def-polymath-densely-divisible-moduli]]: every positive integer lies in $D^{(0)}(y)$; for $i\ge1$, membership in $D^{(i)}(y)$ requires, for every $j,k\ge0$ with $j+k=i-1$ and every $1\le R\le yn$, a factorization $n=qr$ with $R/y\le r\le R$, $q\in D^{(j)}(y)$, and $r\in D^{(k)}(y)$.

[F2] [[lem-divisibility-basic]]: divisibility on the integers is transitive.

[F3] [[def-divides-in-z]]: $d\mid a$ means $a=dq$ for some integer $q$.

[F4] [[lem-every-integer-above-one-has-a-prime-divisor]]: every integer greater than $1$ has a prime divisor.

[F5] [[def-prime]]: a prime integer is greater than $1$.

[F6] [[thm-int-comm-ring]], [[thm-int-ordered-ring]], [[lem-nat-embeds-int]], [[lem-nat-discrete]], and [[def-natural-numbers]]: integer multiplication is associative and commutative, multiplication by a positive integer preserves order, a product of positive integers is positive, every positive integer different from $1$ is greater than $1$, and for natural numbers $h<i$ implies $h\le i-1$ when $i\ge1$.

[F7] [[lem-int-bounded-above-has-greatest]]: a nonempty subset of the integers that is bounded above has a greatest element.

[F8] [[thm-induction-principle]]: induction on the nonnegative integers is valid.

## Proof

1.1 For each $i\ge0$, let $Q(i)$ assert that every positive integer whose prime divisors are at most $y$ lies in $D^{(h)}(y)$ for every integer $h$ with $0\le h\le i$. The base case $Q(0)$ follows from [F1], since every positive integer lies in $D^{(0)}(y)$. [given, F1, choose]

1.2 Use ordinary induction [F8]. Fix $i\ge1$ and assume $Q(i-1)$. To prove $Q(i)$ it remains to show that an arbitrary positive integer $n$ whose prime divisors are at most $y$ lies in $D^{(i)}(y)$; every lower index $h<i$ is already covered by $Q(i-1)$ and [F6]. Fix nonnegative $j,k$ with $j+k=i-1$ and a real $R$ with $1\le R\le yn$. Then $j,k\le i-1$. [given, F6, F8, choose]

2.1 If $R>n$, take $q=1$ and $r=n$. Since $R\le yn$, we have $R/y\le n$, and the case assumption gives $n\le R$. Both $q$ and $r$ have all prime divisors at most $y$ (the condition for $q=1$ is vacuous), so $Q(i-1)$ gives $q\in D^{(j)}(y)$ and $r\in D^{(k)}(y)$. [given, step 1.2, F1, choose, algebra]

2.2 Suppose $R\le n$ and let $S$ be the set of positive integer divisors $d$ of $n$ with $d\le R$. The set is nonempty because $1\mid n$ and $1\le R$, and it is bounded above by the integer $n$. By [F7], it has a greatest element $r$. Since $r\mid n$, [F3] gives an integer $q$ with $n=rq$. If $q\le0$, multiplication by the positive integer $r$ gives $rq\le0$, contradicting $n>0$; hence $q>0$. Thus $q,r$ are positive integers, $n=qr$, and $r\le R$. [given, F3, F6, F7, choose]

2.3 If $r=R$, then $r\ge R/y$ since $y\ge1$. If $r<R$, then $q\ne1$, since $q=1$ would give $n=r<R$, contrary to $R\le n$; as $q$ is a positive integer, [F6] gives $q>1$. By [F4] choose a prime $p$ dividing $q$. Since $q\mid n$, [F2] gives $p\mid n$, so the hypothesis gives $p\le y$. Maximality of $r$ implies $rp>R$, because $rp$ is a positive divisor of $n$ and is greater than $r$: if $q=pt$, then $n=qr=rpt=(rp)t$ by [F3] and [F6]. Therefore $r>R/p\ge R/y$. In either case, $R/y\le r\le R$. [given, step 2.2, F2, F3, F4, F5, F6, choose, algebra]

3.1 Every prime divisor of $q$ or $r$ divides $n$ by transitivity and the equation $n=qr$ [F2, F3], so every such prime is at most $y$. Since $j,k\le i-1$, $Q(i-1)$ gives $q\in D^{(j)}(y)$ and $r\in D^{(k)}(y)$. With $n=qr$ and the bounds from steps 2.1 or 2.3, [F1] proves the required factorization for this $j,k,R$. These parameters and $n$ were arbitrary, so $Q(i)$ holds. Induction [F8] now proves $Q(i)$ for every $i\ge0$, which includes the stated conclusion with $h=i$. [given, step 1.2, step 2.1, step 2.2, step 2.3, F1, F2, F3, F8, discharge-induction] ∎
