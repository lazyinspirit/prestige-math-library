---
id: thm-uniqueness-of-two-square-representation-of-a-prime
kind: theorem
title: "A prime congruent to $1$ modulo $4$ has one two-square representation up to signs and order"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sum-of-two-squares-representation, thm-fermat-two-square-theorem-for-primes, lem-two-essentially-different-two-square-representations-factor-an-odd-integer]
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
    - title: "P. Hackman, Elementary Number Theory, Chapter E, Theorem E.I.3"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Let $p\equiv1\pmod4$ be prime. There are unique positive integers $x,y$ with $x$ odd, $y$ even, and

$$p=x^2+y^2.$$

Every ordered signed representation of $p$ is obtained from this pair by changing signs and interchanging coordinates ([[def-sum-of-two-squares-representation]]).

## Facts & Assumptions

**Given:** A prime $p\equiv1\pmod4$.

[F1] A representation of a nonnegative integer $n$ as a sum of two squares is an ordered pair $(x,y)\in\mathbb Z^2$ such that $n=x^2+y^2$ ([[def-sum-of-two-squares-representation]]).

[L1] A prime $p$ is a sum of two integer squares if and only if $p=2$ or $p\equiv1\pmod4$ ([[thm-fermat-two-square-theorem-for-primes]]).

[L2] For an odd integer, two essentially different normalized representations force a factorisation $N=PQ$ with $P,Q>1$ ([[lem-two-essentially-different-two-square-representations-factor-an-odd-integer]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose integers $a,b$ with $p=a^2+b^2$. [given, L1, F1, choose]

1.2 Neither coordinate is zero, since a prime cannot be a square of an integer greater than one. Since $p$ is odd, exactly one coordinate is odd: two odd squares sum to $2$ modulo $4$, and two even squares give an even sum. Changing signs and interchanging coordinates therefore turns every representation into a positive normalized one. [given, F1, algebra]

2.1 If two normalized representations differed, their positive odd coordinates would differ; order them as $0<x<u$ and apply [L2]. This would write the prime $p$ as a product of two integers greater than one, a contradiction. Hence the normalized representation is unique. [step 1.2, L2, given]

3.1 Step 1.1 supplies the normalized pair, step 2.1 makes it unique, and undoing the sign changes and interchange in step 1.2 gives all ordered signed representations and no others. [step 1.1, step 1.2, step 2.1, F1, algebra] ∎
