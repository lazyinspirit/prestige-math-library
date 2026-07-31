---
id: ex-divisor-lattice-of-sixty
kind: example
title: "The divisors of $60$ form a finite distributive lattice and realize Birkhoff's representation concretely"
status: published
origin: session
deps: [thm-birkhoff-representation-finite-distributive-lattices, thm-fundamental-theorem-of-arithmetic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.212, Lecture 16: Distributive lattices"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/resources/mit18_212s19_lec16/"
pipeline_run: null
---

## Example

Order the positive divisors of $60$ by divisibility. Since
$60=2^2\cdot3\cdot5$, every divisor has a unique form

$$2^\alpha3^\beta5^\gamma,\qquad 0\le\alpha\le2,\quad0\le\beta,\gamma\le1.$$

Divisibility is componentwise comparison of the exponent triples. Meet and
join are componentwise minimum and maximum, so this is a finite distributive
lattice.

## Facts & Assumptions

**Given:** The positive divisors of $60$, ordered by divisibility.

[L1] Every positive integer has a prime factorization unique up to order ([[thm-fundamental-theorem-of-arithmetic]]).

[L2] Every finite distributive lattice is isomorphic to the order-ideal lattice of its join-irreducible poset ([[thm-birkhoff-representation-finite-distributive-lattices]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the exponent-triple description is unique, and $d\mid e$ exactly when every exponent of $d$ is at most the corresponding exponent of $e$. [given, L1]

2.1 Componentwise minimum and maximum give the greatest common divisor and least common multiple, and the distributive identities hold coordinatewise for minimum and maximum on chains. Thus the divisor poset is a finite distributive lattice. [step 1.1, algebra]

2.2 Its join-irreducibles are $2,4,3,5$. In their inherited order, $2<4$ and $3,5$ are incomparable with these and with each other. [step 1.1]

3.1 A divisor $d$ maps to the order ideal of join-irreducibles dividing it: its $2$-exponent chooses $\varnothing$, $\{2\}$, or $\{2,4\}$, while its $3$- and $5$-exponents independently choose whether to include $3$ and $5$. This is exactly the Birkhoff map of [L2]. [step 2.2, L2]

4.1 Hence the divisors of $60$ concretely realize Birkhoff's representation as the order ideals of the poset $2<4$ with isolated elements $3$ and $5$. [step 2.1, step 3.1] ∎
