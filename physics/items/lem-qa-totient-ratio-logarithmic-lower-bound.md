---
id: lem-qa-totient-ratio-logarithmic-lower-bound
kind: lemma
title: Elementary lower bound for the totient ratio
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - thm-euler-totient-product-formula
  - thm-fundamental-theorem-of-arithmetic
  - def-prime
  - thm-int-comm-ring
  - def-divides-in-z
justified_by: []
axiom_use: "None; the proof uses prime factorisation, a finite product, and logarithm monotonicity."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Peter W. Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer"
      url: "https://arxiv.org/pdf/quant-ph/9508027"
      locator: "§5, PDF pp. 16–19; success probability uses a totient lower bound"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§5, PDF pp. 49–56; order-finding success analysis"
---

## Statement

For every integer $r\ge1$, $\varphi(r)/r\ge1/(1+\log_2 r)$, with $\varphi(1)=1$.

## Facts & Assumptions

**Given:** An integer $r\ge1$ and its distinct prime divisors.

[F1] If the distinct prime divisors of $r$ are $p_1<\cdots<p_\omega$, then $\varphi(r)/r=\prod_{i=1}^{\omega}(1-1/p_i)$; the empty product is $1$ when $r=1$ ([[thm-euler-totient-product-formula]]).

[F2] A prime is an integer greater than $1$ with no positive divisors other than $1$ and itself, and every integer $r\ge2$ is a finite product of primes ([[def-prime]], [[thm-fundamental-theorem-of-arithmetic]]).

[F3] Integer multiplication is associative and commutative, and $d\mid r$ means $r=dc$ for some integer $c$ ([[thm-int-comm-ring]], [[def-divides-in-z]]).

## Proof

1.1 If $r=1$, then $\omega=0$ and [F1] gives $\varphi(1)/1=1$, which is the claimed bound. Suppose $r>1$. [given, F1]

2.1 For every $i$, the increasing distinct primes satisfy $p_i\ge i+1$: there are only $i-1$ integers strictly between $1$ and $i+1$, so fewer than $i$ distinct primes can lie there. Therefore each factor in [F1] obeys $1-1/p_i\ge1-1/(i+1)=i/(i+1)$. Multiplying positive factors gives $\varphi(r)/r\ge\prod_{i=1}^{\omega}i/(i+1)=1/(\omega+1)$. [F1, F2, step 1.1, algebra]

3.1 Take a prime factor list for $r$ from [F2] and sort its distinct entries as $p_1<\cdots<p_\omega$, choosing for each value its first occurrence in that finite list. By associativity and commutativity in [F3], regrouping the list gives $r=(p_1\cdots p_\omega)c$ for a positive integer $c$. Thus the distinct-prime product divides $r$, and since every $p_i\ge2$, $r\ge2^\omega$. Therefore $\omega\le\log_2r$, so $1/(\omega+1)\ge1/(1+\log_2r)$. This proves the assertion. [F2, F3, step 2.1, algebra] ∎
