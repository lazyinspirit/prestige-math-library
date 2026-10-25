---
id: thm-sum-of-two-squares-characterisation
kind: theorem
title: "Characterisation of positive integers that are sums of two squares"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sum-of-two-squares-representation, cor-sums-of-two-squares-closed-under-products, lem-three-mod-four-prime-dividing-two-square-sum, lem-two-square-representations-of-prime-powers, thm-canonical-prime-factorisation, lem-p-adic-valuation-basic, lem-p-adic-valuation-additive, thm-induction-principle]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, Chapter E, Theorem E.II.2"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "W. Stein, Elementary Number Theory: Primes, Congruences, and Secrets, Theorem 5.7.1"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

A positive integer $n$ is a sum of two squares if and only if every prime $q\equiv3\pmod4$ occurs to an even exponent in its canonical prime factorisation.

## Facts & Assumptions

**Given:** A positive integer $n$.

[F1] A representation of a nonnegative integer $n$ as a sum of two squares is an ordered pair $(x,y)\in\mathbb Z^2$ such that $n=x^2+y^2$ ([[def-sum-of-two-squares-representation]]).

[L1] The product of two nonnegative integers representable as sums of two squares is again representable as a sum of two squares ([[cor-sums-of-two-squares-closed-under-products]]).

[L2] If $q\equiv3\pmod4$ is prime and $q\mid x^2+y^2$, then $q\mid x$ and $q\mid y$ ([[lem-three-mod-four-prime-dividing-two-square-sum]]).

[L3] Every power of $2$ and every power of a prime $p\equiv1\pmod4$ is a sum of two squares; a power of $q\equiv3\pmod4$ is representable exactly when its exponent is even ([[lem-two-square-representations-of-prime-powers]]).

[L4] A positive integer is the finite product of the powers of its prime divisors with their canonical valuations ([[thm-canonical-prime-factorisation]]).

[L5] For a nonzero integer, $p^k$ divides it if and only if $k\le v_p$ ([[lem-p-adic-valuation-basic]]).

[L6] For nonzero integers $a,b$, $v_p(ab)=v_p(a)+v_p(b)$ ([[lem-p-adic-valuation-additive]]).

[L7] If a property holds at $0$ and passes from $j$ to $j+1$, it holds for every $j\in\mathbb N$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 For the reverse direction at $n=1$, the canonical factorisation is empty and $(1,0)$ represents $1$. [given, F1, L4, algebra]

1.2 For the reverse direction at $n>1$, assume every three-mod-four prime has even valuation. By [L3], every prime-power factor in [L4] is representable. [given, L3, L4]

1.3 For the forward direction, suppose $n=x^2+y^2$ and let $q\equiv3\pmod4$ divide $n$. By [L2], $x=qx_1$ and $y=qy_1$, so $n=q^2n_1$ with $n_1=x_1^2+y_1^2$. [given, F1, L2, algebra]

2.1 Repeatedly applying [L1] to the finite list of factors from step 1.2 gives a representation of their product $n$; step 1.1 supplies the empty-list case. [step 1.1, step 1.2, L1, F1, algebra]

2.2 By [L5] and [L6], step 1.3 lowers the $q$-adic valuation by exactly two: $v_q(n_1)=v_q(n)-2$. [step 1.3, L5, L6, algebra]

3.1 If $v_q(n)$ were odd, induction on the number of two-step reductions in steps 1.3 and 2.2 would eventually give a represented integer of $q$-valuation one. Applying step 1.3 once more would make its valuation at least two, a contradiction. Thus $v_q(n)$ is even. [step 1.3, step 2.2, L7, discharge-induction]

4.1 Steps 2.1 and 3.1 prove the reverse and forward directions, respectively. [step 2.1, step 3.1] ∎
