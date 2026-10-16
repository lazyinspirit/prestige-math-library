---
id: def-qa-23-qsp-admissible-polynomial-pair
kind: definition
title: Admissible polynomial pair for Hermitian-reflection QSP
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps:
  - def-qa-23-qsp-signal-sequence
  - def-polynomial-ring-over-a-commutative-ring
  - def-polynomial-degree-leading-coefficient-and-monic
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - thm-complex-numbers-form-a-field
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Definition

For an integer $d\ge0$, a pair $P,Q\in\mathbb C[x]$ is **QSP-admissible of degree bound $d$** when:

- $P=0$ or $\deg P\le d$, and every exponent with nonzero coefficient in $P$ is congruent to $d$ modulo $2$;
- $Q=0$ or $\deg Q\le d-1$, and every exponent with nonzero coefficient in $Q$ is congruent to $d-1$ modulo $2$;
- the formal polynomial identity $P P^*+(1-x^2)Q Q^*=1$ holds, where $P^*(x)=\sum_k\overline{p_k}x^k$ if $P(x)=\sum_kp_kx^k$.

The zero polynomial satisfies every degree bound and both parity conditions. On real $x$, coefficient conjugation gives $P^*(x)=\overline{P(x)}$. The bound $d$ is nominal; a polynomial may have smaller degree of the same parity.

## Facts & Assumptions

**Given:** An integer $d\ge0$ and an admissible pair $P,Q$ as defined above.

[F1] [[def-complex-conjugate-real-imaginary-part-and-modulus]]: complex conjugation fixes real numbers and $|z|^2=z\overline z\ge0$.

## Verification

1.1 For real $x$, conjugating each coefficient of $P$ and using $x=\overline x$ gives $P^*(x)=\overline{P(x)}$; the same calculation gives $Q^*(x)=\overline{Q(x)}$. Hence the polynomial identity implies $|P(x)|^2+(1-x^2)|Q(x)|^2=1$ for every real $x$. [given, F1, algebra]

2.1 If $|x|\le1$, then both summands are nonnegative, so $|P(x)|^2\le1$ and $(1-x^2)|Q(x)|^2\le1$. Taking nonnegative square roots yields $|P(x)|\le1$ and $\sqrt{1-x^2}|Q(x)|\le1$. At $d=0$ the degree convention forces $Q=0$, so the second bound also holds at both endpoints. [step 1.1, algebra] ∎
