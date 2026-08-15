---
id: thm-characteristic-of-a-field-is-zero-or-prime
kind: theorem
title: "The characteristic of a field is zero or a prime number"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ring-characteristic, def-prime, lem-field-is-a-commutative-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 3"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Statement

The characteristic of a field is either $0$ or a prime number.

## Facts & Assumptions

**Given:** A field $F$.

[L1] If the set of positive $n$ with $n\cdot1_F=0$ is nonempty, the characteristic is its least element; otherwise it is $0$ ([[def-ring-characteristic]]).

[L2] A natural number greater than $1$ is prime exactly when it has no factorization into two natural numbers strictly between $1$ and itself ([[def-prime]]).

[L3] A field is an integral domain, so a product of two nonzero elements cannot be zero ([[lem-field-is-a-commutative-ring]]).

## Proof

**Proof technique:** contradiction.

1.1 If no positive multiple of $1_F$ is zero, [L1] gives characteristic $0$. Otherwise write $n=\operatorname{char}F$. Since $1_F\ne0$, one has $n>1$. [given, L1]

2.1 Suppose, for contradiction, that this positive $n$ is not prime. By [L2], write $n=ab$ with $1<a<n$ and $1<b<n$. [step 1.1, L2, assume-contra]

3.1 Minimality of $n$ gives $a\cdot1_F\ne0$ and $b\cdot1_F\ne0$, while their product is $(ab)\cdot1_F=n\cdot1_F=0$. This contradicts [L3]. [step 1.1, step 2.1, L1, L3, algebra]

4.1 Therefore the positive characteristic is prime, completing both cases. [step 3.1, discharge-contradiction] ∎
