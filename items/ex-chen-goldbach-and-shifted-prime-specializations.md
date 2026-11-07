---
id: ex-chen-goldbach-and-shifted-prime-specializations
kind: example
title: "Goldbach and shifted-prime specializations of Chen's theorem"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - thm-chen-goldbach-prime-plus-p2
  - thm-chen-prime-shift-plus-p2
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jing-run Chen, On the representation of a large even integer as the sum of a prime and the product of at most two primes"
      url: "https://raw.githubusercontent.com/lixiang90/chen_theorem/main/pdf/main_en.pdf"
    - title: "Heini Halberstam, A proof of Chen's theorem"
      url: "https://www.numdam.org/item/AST_1975__24-25__281_0.pdf"
---

## Example

There are two distinct substitutions into the P2 conclusions. For an even
$N$ above the Goldbach threshold, one obtains $N=p+q$ with $p$ prime and
$q\in P_2$. For a fixed nonzero even shift $h$, one obtains infinitely many
primes $p$ with $p+h\in P_2$. In the second case the shifted number is a prime
or a product of two primes counted with multiplicity; neither specialization
asserts that it is prime.

## Example references

[[thm-chen-goldbach-prime-plus-p2|Chen's prime-plus-P2 theorem]]

[[thm-chen-prime-shift-plus-p2|Chen's fixed-shift theorem]]

Chen, *On the representation of a large even integer as the sum of a prime and the product of at most two primes*

Halberstam, *A proof of Chen's theorem*

## Facts & Assumptions

**Given:** An even integer $N$ above the Goldbach threshold, or a fixed nonzero even integer $h$.

[F1] [[thm-chen-goldbach-prime-plus-p2]]: every sufficiently large even $N$ has a prime $p\le N$ with $N-p\in P_2$.

[F2] [[thm-chen-prime-shift-plus-p2]]: for fixed nonzero even $h$, infinitely many primes $p$ satisfy $p+h\in P_2$.

## Proof

1.1 Apply [F1] to the even integer $N$; the resulting prime $p$ gives the representation $N=p+(N-p)$ with the second summand in $P_2$. [F1, given]

2.1 Apply [F2] to the fixed shift $h$; this yields infinitely many prime translates with at most two prime factors counted with multiplicity. [F2, given] ∎
