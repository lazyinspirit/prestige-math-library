---
id: lem-arbitrarily-large-primes-congruent-to-two-modulo-three
kind: lemma
title: "There are arbitrarily large primes congruent to $2$ modulo $3$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-prime-factorisation-exists, def-congruence-modulo-an-integer, thm-integers-modulo-n-basic-algebra, def-monoid-finite-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Bucic, Probabilistic Method, proof of Theorem 2.3"
      url: "https://homepage.univie.ac.at/matija.bucic/wp-content/uploads/2026/01/Probabilistic_Method.pdf"
pipeline_run: null
---

## Statement

For every natural $M$, there is a prime $p>M$ with $p\equiv2\pmod3$.

## Facts & Assumptions

**Given:** A natural number $M$.

[L1] Every positive integer has a finite prime factorisation, including multiplicities; $1$ is represented by the empty product ([[thm-prime-factorisation-exists]]).

[L2] Congruence modulo $3$ and multiplication of residue classes obey integer modular algebra ([[def-congruence-modulo-an-integer]], [[thm-integers-modulo-n-basic-algebra]]).

[L3] A finite product in a monoid is $1$ on the empty family and obeys the product recursion ([[def-monoid-finite-product]]).

## Proof

**Proof technique:** constructive.

1.1 Let $q_1,\ldots,q_r$ be all primes at most $M$ that are congruent to $2$ modulo $3$, allowing $r=0$, and put $N=3q_1\cdots q_r-1$. Then $N\equiv2\pmod3$ and $N>1$; when the list is empty, $N=2$. [L2, L3, construct]

2.1 No $q_i$ divides $N$, because $N\equiv-1\pmod{q_i}$. Also $3$ does not divide $N$. [step 1.1, L2]

3.1 In a prime factorisation of the positive integer $N$, not every factor can be congruent to $1$ modulo $3$, since their product is congruent to $2$; no factor is congruent to $0$ by step 2.1, so some prime factor $p$ is congruent to $2$ modulo $3$. [step 1.1, step 2.1, L1, L2]

4.1 That $p$ is not among the $q_i$ by step 2.1, hence $p>M$. It is the required prime. [step 2.1, step 3.1, discharge-construct] ∎
