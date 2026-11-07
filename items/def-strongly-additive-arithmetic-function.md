---
id: def-strongly-additive-arithmetic-function
kind: definition
title: "Strongly additive arithmetic functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-additive-arithmetic-function
  - thm-fundamental-theorem-of-arithmetic
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory III, §23, definition preceding Theorem 23.1"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "PDF p. 8, strongly additive functions and examples omega and Omega."
    - title: "Adam J. Harper, Probabilistic Number Theory Lecture Notes 1, §1"
      url: "https://warwick.ac.uk/fac/sci/maths/people/staff/harper/probntnotes1.pdf"
      locator: "PDF pp. 1–2, additive prime-power decomposition and the prime-divisor function omega."
---

## Definition

An additive arithmetic function $f$ is **strongly additive** if $f(p^k)=f(p)$ for every prime $p$ and integer $k\ge1$. Equivalently, for every $n\ge1$,
$$f(n)=\sum_{p\mid n}f(p),$$
where the empty sum at $n=1$ is $0$.

## Definition references

[Montgomery and Vaughan, *Multiplicative Number Theory III*, §23, definition preceding Theorem 23.1](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

[Harper, *Probabilistic Number Theory Lecture Notes 1*, §1](https://warwick.ac.uk/fac/sci/maths/people/staff/harper/probntnotes1.pdf)

## Facts & Assumptions

**Given:** An additive arithmetic function $f$ satisfying $f(p^k)=f(p)$ for every prime $p$ and integer $k\ge1$.

[F1] Additivity means $f(mn)=f(m)+f(n)$ for coprime positive integers. ([[def-additive-arithmetic-function]])

[F2] Every positive integer has a unique prime-power factorization. ([[thm-fundamental-theorem-of-arithmetic]])

## Proof

**Proof technique:** direct.

1.1 For $n=1$ the sum over primes dividing $n$ is empty, and $f(1)=0$ by [F1]. For $n\ge2$, write $n=\prod_{p\mid n}p^{v_p(n)}$ using [F2]; the prime powers are pairwise coprime, so additivity gives $f(n)=\sum_{p\mid n}f(p^{v_p(n)})$. [given, F1, F2, induction]

2.1 The defining condition replaces each summand $f(p^{v_p(n)})$ by $f(p)$, proving the displayed identity for every $n$. Conversely, that identity applied to $n=p^k$ gives $f(p^k)=f(p)$, so the two formulations are equivalent, including $n=1$. [given, step 1.1, algebra] ∎

## Proof references

[[def-additive-arithmetic-function]]

[[thm-fundamental-theorem-of-arithmetic]]
