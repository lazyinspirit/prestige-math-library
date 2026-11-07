---
id: lem-hecke-maass-burgess-distinct-prime-divisor-subpower-bound
kind: lemma
title: "Subpower bound for the number of distinct prime divisors"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [thm-prime-factorisation-exists, cor-euclids-lemma-for-finite-products, def-prime]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Zeev Rudnick, Lecture 2: Mean Values"
      url: "https://www.math.tau.ac.il/~rudnick/courses/analytic%20number%20theory%202022/lecture_2.pdf"
      locator: "§3.3, Theorem 3.4 and proof, PDF pp. 8–9: τ(n)≪ε n^ε, with the same finite-small-primes argument."
    - title: "Andrew Granville and K. Soundararajan, Multiplicative Number Theory: The Pretentious Approach"
      url: "https://dms.umontreal.ca/~andrew/PDF/Book.To2.5.pdf"
      locator: "§2.2.4, PDF pp. 68–70: definition and elementary properties of ω(n)."
---

## Statement

For every ε>0 there is a constant Cε such that 2^{ω(n)}≤Cε n^ε for every integer n≥1, where ω(n) is the number of distinct prime divisors of n.

## Statement references

[Zeev Rudnick, Lecture 2: Mean Values, §3.3, Theorem 3.4 and proof, PDF pp. 8–9.](https://www.math.tau.ac.il/~rudnick/courses/analytic%20number%20theory%202022/lecture_2.pdf)

[Andrew Granville and K. Soundararajan, Multiplicative Number Theory: The Pretentious Approach, §2.2.4, definition of ω(n) as the number of distinct prime factors; the local proof supplies the subpower estimate.](https://dms.umontreal.ca/~andrew/PDF/Book.To2.5.pdf)
## Facts & Assumptions

**Given:** An integer $n\ge1$ and a real number $\epsilon>0$.

[F1] [[thm-prime-factorisation-exists]]: Every integer $n\ge1$ is a finite product of primes, with $n=1$ represented by the empty product.

[F2] [[cor-euclids-lemma-for-finite-products]]: If a prime divides a finite product of primes, it divides one of the factors.

[F3] [[def-prime]]: A prime is greater than 1 and every positive divisor of it is 1 or itself.

## Proof

**Proof technique:** direct.

1.1 Factor $n$ using [F1]. By [F2], every prime divisor of $n$ occurs in that finite factor list. Grouping equal factors gives $n=\prod_{p\mid n}p^{a_p}$ with each $a_p\ge1$. Let $P_\epsilon$ be the finite set of primes $p<2^{1/\epsilon}$. For $p\notin P_\epsilon$, $2\le p^\epsilon\le p^{\epsilon a_p}$; the factors from primes in $P_\epsilon$ contribute at most $2^{|P_\epsilon|}$ to $2^{\omega(n)}$. Hence $2^{\omega(n)}\le2^{|P_\epsilon|}\prod_{p\notin P_\epsilon,\,p\mid n}p^{\epsilon a_p}\le2^{|P_\epsilon|}n^\epsilon$. [given, F1, F2, F3, construct, algebra]

1.2 Set $C_\epsilon=2^{|P_\epsilon|}$. This proves the inequality for all $n\ge1$, including $n=1$ with an empty product. [step 1.1, algebra] ∎
