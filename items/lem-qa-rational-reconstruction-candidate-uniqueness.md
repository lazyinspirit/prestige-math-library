---
id: lem-qa-rational-reconstruction-candidate-uniqueness
kind: lemma
title: Uniqueness of denominator-bounded phase candidates
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-rat-operations
  - def-common-divisor-and-gcd
  - def-coprime
  - lem-rat-triangle
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: "None; the argument uses integer arithmetic."
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §9"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§9, PDF pp. 45–49; rational reconstruction uniqueness"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§5, PDF pp. 49–56; denominator-bounded approximation"
---

## Statement

Let $N\ge1$, $Q>4N^2$ be integers and $0\le y<Q$. There is at most one reduced fraction $p/q$ with $1\le q\le N$ satisfying $2|yq-pQ|\le q$.

## Facts & Assumptions

**Given:** Integers $N\ge1$, $Q>4N^2$, an integer $y$ with $0\le y<Q$, and reduced fractions with positive denominators.

[F1] A fraction is reduced when its integer numerator and positive denominator are coprime; coprime means gcd equal to $1$ ([[def-common-divisor-and-gcd]], [[def-coprime]]).

[F2] Rational subtraction is computed by cross multiplication: $p_1/q_1-p_2/q_2=(p_1q_2-p_2q_1)/(q_1q_2)$ when $q_1,q_2>0$ ([[def-rat-operations]]).

[F3] Rational absolute value is multiplicative and satisfies $|u+v|\le|u|+|v|$ ([[lem-rat-triangle]]).

## Proof

1.1 For any fraction $p/q$ passing the test, division by the positive integer $2Qq$ gives $|y/Q-p/q|\le1/(2Q)$. Thus two passing fractions have distance at most $1/Q$ by the triangle inequality. [given, F2, F3, algebra]

2.1 If $p_1/q_1$ and $p_2/q_2$ are distinct reduced fractions, [F2] makes their difference a nonzero integer divided by $q_1q_2$, so its absolute value is at least $1/(q_1q_2)\ge1/N^2$. Since $Q>4N^2$, $1/Q<1/(4N^2)<1/N^2$, contradicting the bound from step 1.1. Therefore the two fractions coincide. [given, F1, F2, step 1.1, algebra] ∎
