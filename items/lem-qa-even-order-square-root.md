---
id: lem-qa-even-order-square-root
kind: lemma
title: "Half an even order gives a square root of one"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - lem-order-characterisation
  - def-order-in-a-group
  - def-group-power
  - def-integers-modulo-n
  - def-unit-group-modulo-n-and-euler-totient
  - thm-integers-modulo-n-basic-algebra
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Peter W. Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer"
      url: "https://arxiv.org/pdf/quant-ph/9508027"
      locator: "§4, “Quantum Fourier transforms,” and §5, “Prime factorization” (order-finding and the factor reduction)."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 5, §§5.1–5.4, “Factoring,” “Reduction from factoring to period-finding,” “Shor’s period-finding algorithm,” and “Continued fractions.”"
---
## Statement

Let $N\ge2$, let $x$ be a unit modulo $N$, and let $q\ge2$ be an even integer with $x^q\equiv1\pmod N$. Then $z=x^{q/2}\bmod N$ satisfies $z^2\equiv1\pmod N$. If $q=\operatorname{ord}_N(x)$, then additionally $z\not\equiv1\pmod N$.

## Facts & Assumptions

**Given:** $N\ge2$, an integer $x$ with $[x]_N\in(\mathbb Z/N)^\times$, an even integer $q\ge2$ with $x^q\equiv1\pmod N$, and $z=[x^{q/2}]_N$. Here $\operatorname{ord}_N(x)$ means the order of $[x]_N$ in the unit group.

[F1] Multiplication makes $(\mathbb Z/N)^\times$ a group, and congruence classes multiply by multiplying representatives ([[def-unit-group-modulo-n-and-euler-totient]], [[def-integers-modulo-n]], [[thm-integers-modulo-n-basic-algebra]]).

[F2] For an element of finite order $r$, $x^t=1$ exactly when $r\mid t$ ([[def-order-in-a-group]], [[lem-order-characterisation]]).

## Proof

1.1 Write $q=2h$ with $h=q/2\ge1$. Then $z^2=[x^h]_N[x^h]_N=[x^{2h}]_N=[x^q]_N=[1]_N$, so $z$ is a square root of one. [given, F1, algebra]

2.1 If $q=\operatorname{ord}_N(x)$ and $z=[1]_N$, then $[x]_N^h=[1]_N$ in the unit group. By [F2], $q\mid h$, which is impossible because $0<h<q$. Thus $z\ne[1]_N$. [given, F1, F2, step 1.1, algebra]

3.1 The square relation holds for every accepted even exponent, and step 2.1 supplies the additional nonidentity conclusion when it is the true order. [step 1.1, step 2.1] ∎
