---
id: thm-minimum-modulus-principle
kind: theorem
title: "Minimum modulus principle for a nowhere-zero holomorphic function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-local-maximum-modulus-principle, thm-algebra-of-complex-derivatives, lem-complex-conjugation-and-modulus-laws]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "A nonvanishing interior modulus minimum forces constancy"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercise 3.3.18"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "B. V. Shabat, Introduction to Complex Analysis, Theorem 1.17"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Statement

A nowhere-zero holomorphic function on a complex domain cannot have an interior local modulus minimum unless it is constant.

Equivalently, if $f$ is holomorphic and nowhere zero on a complex domain $\Omega$ and $|f(z)|\ge|f(a)|$ on some neighbourhood of $a\in\Omega$, then $f$ is constant.

## Facts & Assumptions

**Given:** A nowhere-zero holomorphic function $f$ on a complex domain $\Omega$ and an interior local minimum of $|f|$ at $a$. The modulus is multiplicative, so $|1/f|=1/|f|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L1] If the modulus of a holomorphic function on a complex domain has an interior local maximum, then the function is constant ([[thm-local-maximum-modulus-principle]]).

[L2] A nowhere-zero holomorphic function has a holomorphic reciprocal ([[thm-algebra-of-complex-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Since $f$ is nowhere zero, [L2] makes $1/f$ holomorphic throughout $\Omega$. [L2, given]

2.1 The local inequality $|f(z)|\ge|f(a)|>0$ is equivalent to $|1/f(z)|\le|1/f(a)|$, so $|1/f|$ has an interior local maximum at $a$. By [L1], $1/f$ is constant. [step 1.1, L1, algebra]

3.1 The reciprocal of that nonzero constant is $f$, so $f$ is constant on $\Omega$. [step 2.1, algebra] ∎
