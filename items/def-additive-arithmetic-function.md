---
id: def-additive-arithmetic-function
kind: definition
title: "Additive arithmetic functions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-arithmetic-function
  - def-coprime
  - thm-fundamental-theorem-of-arithmetic
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Adam J. Harper, Probabilistic Number Theory Lecture Notes 1, Definition 1.1 and prime-power decomposition"
      url: "https://warwick.ac.uk/fac/sci/maths/people/staff/harper/probntnotes1.pdf"
      locator: "PDF pp. 1–2, Definition 1.1 and the formula expressing an additive function as a sum over prime powers."
    - title: "H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory III, §23, equations (23.1)–(23.2)"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "PDF pp. 8–9, definition of additive and completely additive functions and prime-power decomposition."
---

## Definition

An **additive arithmetic function** is a function $f:\mathbb N_{\ge1}\to\mathbb C$ such that
$$f(mn)=f(m)+f(n)$$
whenever $m,n\in\mathbb N_{\ge1}$ are coprime. In particular, $f(1)=0$.

## Definition references

[Harper, *Probabilistic Number Theory Lecture Notes 1*, Definition 1.1 and prime-power decomposition](https://warwick.ac.uk/fac/sci/maths/people/staff/harper/probntnotes1.pdf)

[Montgomery and Vaughan, *Multiplicative Number Theory III*, §23, equations (23.1)–(23.2)](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** A function $f:\mathbb N_{\ge1}\to\mathbb C$ satisfying the coprime-factor identity in the Definition.

[F1] An arithmetic function is a function from the positive integers to $\mathbb C$. ([[def-arithmetic-function]])

[F2] Positive integers $m,n$ are coprime when their greatest common divisor is $1$. ([[def-coprime]])

[F3] Every integer $n\ge2$ has a unique factorization into prime powers with distinct prime bases. ([[thm-fundamental-theorem-of-arithmetic]])

## Proof

**Proof technique:** direct.

1.1 Since $1$ is coprime to itself, the defining identity at $m=n=1$ gives $f(1)=2f(1)$, hence $f(1)=0$. This also confirms that the stated value at the identity is forced by the definition. [given, F2, algebra]

2.1 Let $n=\prod_{p\mid n}p^{v_p(n)}$ be the finite factorization from [F3]. The prime powers in this product are pairwise coprime, so repeated application of the defining identity gives $f(n)=\sum_{p\mid n}f(p^{v_p(n)})$; for $n=1$ the sum is empty and step 1.1 applies. Thus prime-power values determine every value of $f$. [given, F2, F3, step 1.1, induction, algebra] ∎

## Proof references

[[def-arithmetic-function]]

[[def-coprime]]

[[thm-fundamental-theorem-of-arithmetic]]
