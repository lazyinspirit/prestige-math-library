---
id: thm-primitive-sum-of-two-squares-characterisation
kind: theorem
title: "Characterisation of primitive sums of two squares"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sum-of-two-squares-representation, lem-three-mod-four-prime-dividing-two-square-sum, lem-coprime-primitive-two-square-products-remain-primitive, lem-prime-one-mod-four-powers-have-primitive-two-square-representations, thm-canonical-prime-factorisation, lem-p-adic-valuation-basic, lem-pairwise-coprime-divisibility, thm-euclids-lemma, thm-induction-principle]
aliases: []
landmark: true
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
    - title: "P. Hackman, Elementary Number Theory, Chapter E, Theorem E.II.4 and Lemmas E.II.5–E.II.6"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

A positive integer $n$ has a primitive two-square representation if and only if $v_2(n)\le1$ and no prime $q\equiv3\pmod4$ divides $n$.

## Facts & Assumptions

**Given:** A positive integer $n$.

[F1] A two-square representation is primitive when its coordinate gcd is $1$ ([[def-sum-of-two-squares-representation]]).

[L1] If $q\equiv3\pmod4$ is prime and $q\mid x^2+y^2$, then $q\mid x$ and $q\mid y$ ([[lem-three-mod-four-prime-dividing-two-square-sum]]).

[L2] If $P=a^2+b^2$ and $Q=c^2+d^2$ are primitive representations with $\gcd(P,Q)=1$, then the Brahmagupta–Fibonacci construction gives a primitive representation of $PQ$ ([[lem-coprime-primitive-two-square-products-remain-primitive]]).

[L3] Every natural power of a prime congruent to $1$ modulo $4$ has a primitive two-square representation ([[lem-prime-one-mod-four-powers-have-primitive-two-square-representations]]).

[L4] A positive integer is the finite product of the powers of its prime divisors with their canonical valuations ([[thm-canonical-prime-factorisation]]).

[L5] For a prime $p$ and a nonzero integer $n$, and every $k\in\mathbb N$: $p^k\mid n$ if and only if $k\le v_p(n)$; in particular $v_p(n)\ge1$ if and only if $p\mid n$ ([[lem-p-adic-valuation-basic]]).

[L6] For a finite pairwise-coprime list with partial products $P_k$, one has $\gcd(P_k,n_j)=1$ whenever $k\le j$ ([[lem-pairwise-coprime-divisibility]]).

[L7] If a prime $p$ divides $ab$, then $p\mid a$ or $p\mid b$ ([[thm-euclids-lemma]]).

[L8] If a property holds at $0$ and passes from $j$ to $j+1$, it holds for every $j\in\mathbb N$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction, if $n=x^2+y^2$ primitively and a prime $q\equiv3\pmod4$ divided $n$, [L1] would make $q$ divide both coordinates, contrary to [F1]. [given, F1, L1]

1.2 Squares modulo $4$ show that $4\mid x^2+y^2$ forces both $x$ and $y$ even. Thus a primitive representation has $4\nmid n$, and the divisibility clause of [L5] at $p=2$, $k=2$ makes that equivalent to $v_2(n)\le1$. [F1, L5, algebra]

1.3 For the reverse direction, assume the two stated prime conditions. In [L4], no three-mod-four prime occurs, the factor $2$ occurs with exponent at most one, and all remaining nontrivial factors are powers of distinct primes congruent to one modulo four. The factors are pairwise coprime by uniqueness and [L7]. [given, L4, L5, L7, algebra]

2.1 The possible factor $2$ has the primitive representation $(1,1)$, and every one-mod-four prime power has a primitive representation by [L3]. [step 1.3, L3, F1, construct]

3.1 Combine these pairwise-coprime primitive representations one at a time using [L2]. The partial product is coprime to the next factor by [L6], so [L8] completes the finite induction. If the factor list is empty, $n=1$ and $(1,0)$ is primitive. [step 1.3, step 2.1, L2, L6, L8, F1, discharge-induction]

4.1 Steps 1.1 and 1.2 prove necessity, while step 3.1 proves sufficiency. [step 1.1, step 1.2, step 3.1] ∎
