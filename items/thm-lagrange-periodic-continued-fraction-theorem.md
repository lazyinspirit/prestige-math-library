---
id: thm-lagrange-periodic-continued-fraction-theorem
kind: theorem
title: "Lagrange's theorem for regular continued fractions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-eventually-periodic-continued-fraction, lem-periodic-continued-fraction-is-quadratic, lem-quadratic-irrational-complete-quotients-are-finite-state, thm-continued-fraction-algorithm-for-real-numbers, def-continued-fraction-complete-quotients]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "William Stein, Elementary Number Theory: Primes, Congruences, and Secrets"
      url: "https://wstein.org/ent/ent.pdf"
    - title: "Bruce Ikenaga, Periodic Continued Fractions"
      url: "https://sites.millersville.edu/bikenaga/number-theory/periodic-continued-fractions/periodic-continued-fractions.html"
pipeline_run: null
---

## Statement

A real number has an eventually periodic regular continued fraction if and only
if it is a quadratic irrational.

## Facts & Assumptions

**Given:** A real number $\alpha$ and its continued-fraction algorithm.

[F1] Every eventually periodic regular continued fraction has quadratic- irrational value ([[lem-periodic-continued-fraction-is-quadratic]]).

[F2] If $\alpha$ is quadratic irrational, then only finitely many complete quotients occur in its continued-fraction algorithm ([[lem-quadratic-irrational-complete-quotients-are-finite-state]]).

[F3] The continued-fraction algorithm is deterministic: each digit $a_n$ is
the unique integer with $a_n\le\alpha_n<a_n+1$, and whenever
$\alpha_n\ne a_n$ the next complete quotient is
$\alpha_{n+1}=1/(\alpha_n-a_n)$
([[def-continued-fraction-complete-quotients]]).

## Proof

**Proof technique:** direct.

1.1 If the continued fraction of $\alpha$ is eventually periodic, then [F1] shows that $\alpha$ is a quadratic irrational. [F1, given]

1.2 Suppose now that $\alpha$ is a quadratic irrational. By [F2], only finitely. [F2, given] many complete quotients $\alpha_n$ occur, so there exist indices $m<n$ with $$\alpha_m=\alpha_n.$$ [F2, given]

2.1 From $\alpha_m=\alpha_n$ and the determinism in [F3], the next digits agree: $a_m=a_n$, and then the next complete quotients agree: $\alpha_{m+1}=\alpha_{n+1}$. Repeating this argument inductively gives $$a_{m+j}=a_{n+j}\qquad\text{for every }j\ge0,$$ so the continued-fraction digits repeat with period $n-m$ from the index $m$ onward. Thus the continued fraction is eventually periodic. [step 1.2, F3, induction]

3.1 Steps 1.1 and 2.1 prove both directions of the equivalence. [step 1.1, step 2.1] ∎
