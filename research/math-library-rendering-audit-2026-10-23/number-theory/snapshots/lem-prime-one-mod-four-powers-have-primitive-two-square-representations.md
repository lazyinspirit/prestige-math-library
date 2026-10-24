---
id: lem-prime-one-mod-four-powers-have-primitive-two-square-representations
kind: lemma
title: "Powers of primes congruent to $1$ modulo $4$ have primitive two-square representations"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sum-of-two-squares-representation, lem-brahmagupta-fibonacci-two-square-identity, thm-fermat-two-square-theorem-for-primes, lem-every-integer-above-one-has-a-prime-divisor, thm-euclids-lemma, thm-induction-principle, thm-canonical-prime-factorisation]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, Chapter E, Lemma E.II.6"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Every natural power of a prime congruent to $1$ modulo $4$ has a primitive two-square representation.

## Facts & Assumptions

**Given:** A prime $p\equiv1\pmod4$ and an exponent $e\in\mathbb N$.

[F1] A two-square representation is primitive when its coordinate gcd is $1$ ([[def-sum-of-two-squares-representation]]).

[L1] For all integers $a,b,c,d$, $(a^2+b^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2=(ac+bd)^2+(ad-bc)^2$ ([[lem-brahmagupta-fibonacci-two-square-identity]]).

[L2] A prime $p$ is a sum of two integer squares if and only if $p=2$ or $p\equiv1\pmod4$ ([[thm-fermat-two-square-theorem-for-primes]]).

[L3] Every integer greater than $1$ has a prime divisor ([[lem-every-integer-above-one-has-a-prime-divisor]]).

[L4] If a prime $\ell$ divides $uv$, then $\ell\mid u$ or $\ell\mid v$ ([[thm-euclids-lemma]]).

[L5] If a property holds at $0$ and passes from $e$ to $e+1$, it holds for every $e\in\mathbb N$ ([[thm-induction-principle]]).

[L6] If a positive integer is written as a finite product of powers of distinct primes, every exponent equals the corresponding canonical valuation ([[thm-canonical-prime-factorisation]]).

## Proof

**Proof technique:** induction.

1.1 The pair $(1,0)$ primitively represents $p^0=1$. [F1, base, algebra]

1.2 By [L2], choose $a,b$ with $p=a^2+b^2$. Neither coordinate is zero, and divisibility of either coordinate by $p$ would force divisibility of the other and then $p^2\mid p$; in particular $p$ divides neither coordinate. Any common prime divisor would have square dividing $p$, so $(a,b)$ is primitive; the coordinates have opposite parity because $p$ is odd. [given, L2, F1, choose, algebra]

2.1 Assume $p^e=x^2+y^2$ primitively. The two sign variants in [L1] give representations of $p^{e+1}$ with coordinate pairs $(ax-by,ay+bx)$ and $(ax+by,ay-bx)$. [ih, step 1.2, F1, L1, construct]

3.1 If a prime $\ell$ divides both coordinates of either candidate, then $\ell^2\mid p^{e+1}$ by step 2.1. The uniqueness of prime exponents in [L6], or [L4] iterated through the power, forces $\ell=p$. [step 2.1, L3, L4, L6, algebra]

3.2 If both candidates were coordinatewise divisible by $p$, their sums and differences would show that $p$ divides $2ax,2ay,2bx,2by$. Since $p$ is odd and neither $a$ nor $b$ is divisible by $p$, [L4] would give $p\mid x$ and $p\mid y$, contradicting the induction hypothesis. [step 2.1, step 1.2, L4, ih, algebra]

4.1 Thus at least one candidate has no common prime divisor; by [L3] its coordinate gcd cannot exceed one, so it is primitive. Step 1.1 and [L5] complete the induction. [step 1.1, step 3.1, step 3.2, L3, F1, L5, discharge-induction] ∎
