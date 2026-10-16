---
id: def-qa-bernstein-vazirani-promise
kind: definition
title: Bernstein–Vazirani no-offset promise
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-binary-dot-product
  - def-qa-promise-query-instance
  - def-qa-task-and-promise-domain
justified_by: []
axiom_use: None; all arguments use finite sums, finite sets, and explicit finite-dimensional registers.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27)"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 2 §2.4, PDF pp.29-33: complete DJ and BV promises, amplitudes, query bounds."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf
      locator: "§6.1, PDF pp.7-11 (printed pp.1-5): independent direct Deutsch, DJ and BV derivations and classical comparisons."
---

## Definition

Let $n\ge1$. The **Bernstein–Vazirani no-offset promise** consists of the total functions
$$
f_a:\{0,1\}^n\to\{0,1\},\qquad f_a(x):=a\cdot x,
$$
for an unknown secret $a\in\{0,1\}^n$, using [[def-qa-binary-dot-product]]. The task is to output $a$. This version has no additive offset: the oracle is exactly $f_a$, not $x\mapsto a\cdot x\oplus b$.

## Facts & Assumptions

**Given:** $n\ge1$ and a secret $a\in\{0,1\}^n$.

[F1] [[def-qa-task-and-promise-domain]]: a search task requires a witness in the declared relation on each promised input.

[F2] [[def-qa-promise-query-instance]]: a query function is total on every address string in its domain.

[F3] [[def-qa-binary-dot-product]]: $a\cdot x=\bigoplus_{i<n}(a_i\land x_i)$.

## Verification

1.1 For every $x\in\{0,1\}^n$, [F3] is a finite XOR of bits, hence defines one bit; therefore $f_a$ is a total Boolean function and satisfies the query-instance requirement [F2]. [given, F2, F3, algebra]

2.1 For each coordinate $i<n$, let $e_i$ be the string with a single $1$ at position $i$. Then $f_a(e_i)=a_i$ by [F3]. If $f_a=f_b$, evaluation at every $e_i$ gives $a_i=b_i$, so $a=b$. Thus the secret is uniquely determined by the function table. [given, F1, F3, step 1.1, construct, algebra] ∎
