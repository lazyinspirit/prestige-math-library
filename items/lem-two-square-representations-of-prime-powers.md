---
id: lem-two-square-representations-of-prime-powers
kind: lemma
title: "Prime powers represented as sums of two squares"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-sum-of-two-squares-representation, cor-sums-of-two-squares-closed-under-products, lem-three-mod-four-prime-dividing-two-square-sum, thm-fermat-two-square-theorem-for-primes, thm-induction-principle]
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
    - title: "P. Hackman, Elementary Number Theory, Chapter E, §E.II.2"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "W. Stein, Elementary Number Theory: Primes, Congruences, and Secrets, Theorem 5.7.1"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

Every power of $2$ and every power of a prime $p\equiv1\pmod4$ is a sum of two squares; a power of a prime $q\equiv3\pmod4$ is representable exactly when its exponent is even. The exponent ranges over all of $\mathbb N$, including zero.

## Facts & Assumptions

**Given:** A prime and a natural exponent.

[F1] A representation of a nonnegative integer $n$ as a sum of two squares is an ordered pair $(x,y)\in\mathbb Z^2$ such that $n=x^2+y^2$ ([[def-sum-of-two-squares-representation]]).

[L1] The product of two nonnegative integers representable as sums of two squares is again representable as a sum of two squares ([[cor-sums-of-two-squares-closed-under-products]]).

[L2] If $q\equiv3\pmod4$ is prime and $q\mid x^2+y^2$, then $q\mid x$ and $q\mid y$ ([[lem-three-mod-four-prime-dividing-two-square-sum]]).

[L3] A prime $p$ is a sum of two integer squares if and only if $p=2$ or $p\equiv1\pmod4$ ([[thm-fermat-two-square-theorem-for-primes]]).

[L4] If a property holds at $0$ and passes from $n$ to $n+1$, it holds for every $n\in\mathbb N$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 For every prime $\ell$, the exponent-zero power is $\ell^0=1=1^2+0^2$. [F1, base, algebra]

1.2 If $q\equiv3\pmod4$, every even power has the explicit representation $q^{2j}=(q^j)^2+0^2$. [F1, construct, algebra]

1.3 If $q^{2j+1}=x^2+y^2$, then [L2] gives $x=qx_1$ and $y=qy_1$, so $q^{2j-1}=x_1^2+y_1^2$ when $j\ge1$; at $j=0$, the same divisibility would make $q^2$ divide $q$, which is impossible. Induction on $j$ repeatedly reduces any alleged odd-exponent representation to that impossible base case. [F1, L2, L4, algebra, discharge-induction]

2.1 The prime $2$ and every prime $p\equiv1\pmod4$ are represented by [L3]. Multiplying an induction-stage representation by the prime representation and using [L1] gives one for the next power, so [L4] represents all their natural powers. [step 1.1, L1, L3, L4, discharge-induction]

3.1 Steps 1.1 and 2.1 handle $2$ and primes congruent to one modulo four, while steps 1.2 and 1.3 prove both directions for primes congruent to three modulo four. [step 1.1, step 2.1, step 1.2, step 1.3] ∎
