---
dependency_level: 0
id: lem-reciprocal-prime-sum-from-mertens-first-theorem
kind: lemma
title: "The reciprocal prime sum is log log x plus O(1)"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - thm-first-mertens-theorem-for-primes
  - thm-logarithm-derivative-and-integral
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, version 2.0"
      url: "https://www.shoup.net/ntb/ntb-v2_0.pdf"
---

## Statement

For every real $x\ge3$,

$$ \sum_{p\le x}\frac1p=\log\log x+O(1). $$

## Statement references

[[thm-first-mertens-theorem-for-primes]]

[Victor Shoup, *A Computational Introduction to Number Theory and Algebra*, Theorems 5.10–5.12, §5.3, printed pp. 113–116](https://www.shoup.net/ntb/ntb-v2_0.pdf)

## Facts & Assumptions

**Given:** A real number $x\ge3$.

[F1] For every real $t\ge2$, $A(t):=\sum_{p\le t}(\log p)/p=\log t+O(1)$ ([[thm-first-mertens-theorem-for-primes]]).

[F2] For $t>0$, $\log'(t)=1/t$ and $\log t=\int_1^t du/u$ ([[thm-logarithm-derivative-and-integral]]).

## Proof

1.1 Finite summation by parts with $w(t)=1/\log t$ gives
$$ \sum_{p\le x}\frac1p=A(x)w(x)-\int_2^x A(t)w'(t)\,dt
=\frac{A(x)}{\log x}+\int_2^x\frac{A(t)}{t(\log t)^2}\,dt. $$
The identity follows by integrating the step function $A$ on the intervals between successive primes and telescoping the endpoint terms; the lower endpoint is $2^-$, where $A(2^-)=0$, so the jump at $2$ is included. [given, F1, F2, algebra]

2.1 Write $A(t)=\log t+E(t)$ with $E(t)=O(1)$ by [F1]. Then $A(x)/\log x=1+O(1/\log x)$, while
$$ \int_2^x\frac{A(t)}{t(\log t)^2}\,dt
=\int_2^x\frac{dt}{t\log t}+O\!\left(\int_2^\infty\frac{dt}{t(\log t)^2}\right)
=\log\log x+O(1). $$
The error integral equals $1/\log2$ by the substitution $u=\log t$, and [F2] evaluates the main integral. Substituting in step 1.1 proves the assertion. [given, F1, F2, step 1.1, algebra] ∎

## Proof references

[[thm-first-mertens-theorem-for-primes]]

[[thm-logarithm-derivative-and-integral]]
