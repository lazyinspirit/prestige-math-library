---
id: lem-positive-real-has-dyadic-scale-in-factor-two
kind: lemma
title: "Every positive real lies below a dyadic scale less than twice as large"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: [thm-of-archimedean, thm-induction-principle, def-integer-power, lem-power-laws]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Gábor Lugosi and Shahar Mendelson, Robust Multivariate Mean Estimation: The Optimality of Trimmed Mean, §3.1"
      url: "https://arxiv.org/pdf/1907.11391"
      locator: "PDF pp. 15–16; dyadic scale selection used by the estimator. The lemma proves the scale-existence fact directly."
    - title: "Gábor Lugosi, Mean Estimation in High Dimension, §3.2"
      url: "https://ems.press/content/book-chapter-files/33347?nt=1"
      locator: "PDF pp. 6–7; independent exposition of dyadic slab adaptation."
---

## Statement

For every real $a>0$, there is an integer $i$ such that $a\le2^i<2a$.

## Facts & Assumptions

**Given:** A positive real number $a$.

[F1] The reals are Archimedean: a natural number can be chosen larger than any fixed positive real ([[thm-of-archimedean]]).

[F2] Induction gives $2^n\ge n+1$ for $n\ge0$, and integer powers obey $2^{-n}=1/2^n$ and $2^i=2\cdot2^{i-1}$ ([[thm-induction-principle]], [[def-integer-power]], [[lem-power-laws]]).

## Proof

**Proof technique:** direct.

**Given:** A real $a>0$.

1.1 By [F1], choose an integer $n\ge1$ with $n+1>\max\{a,1/a\}$. By induction from [F2], $2^n\ge n+1>a$, while $2^{-n}=1/2^n\le1/(n+1)<a$. [F1, F2, given, algebra]

2.1 In the finite ordered list of integers $-n,-n+1,\ldots,n$, take the least $i$ with $2^i\ge a$; it exists because exponent $n$ qualifies and exponent $-n$ does not. Thus $i>-n$, so $i-1$ is in the list and fails the defining inequality: $2^{i-1}<a\le2^i$. The power law in [F2] gives $2^i=2\cdot2^{i-1}<2a$. [F2, step 1.1, algebra, choose] ∎

