---
id: fs-every-short-exact-sequence-splits
kind: false-statement
title: "Every short exact sequence of modules splits"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-split-short-exact-sequence, thm-projective-module-characterizations, thm-injective-module-characterizations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement

> **False.** Every short exact sequence of modules splits.

## Facts & Assumptions

**Given:** The sequence $0\to\mathbb Z\xrightarrow{\times2}\mathbb Z\xrightarrow q\mathbb Z/2\mathbb Z\to0$.

[F1] A split sequence has a section of its epimorphism ([[def-split-short-exact-sequence]]).

[L1] Every short exact sequence ending in a projective module splits ([[thm-projective-module-characterizations]]).

[L2] Every short exact sequence beginning in an injective module splits ([[thm-injective-module-characterizations]]).

## Refutation

**Proof technique:** direct.

1.1 Multiplication by two is injective, $q$ is surjective, and its kernel is $2\mathbb Z$, so the sequence is short exact. [given, algebra]

1.2 If a section $s$ existed, $x=s(1+2\mathbb Z)$ would be odd because $q(x)=1+2\mathbb Z$, but $2x=s(0)=0$, so $x=0$, a contradiction. [assume-hyp, F1, algebra]

2.1 Hence this short exact sequence does not split, refuting the statement. The hypotheses in [L1] and [L2] are sufficient conditions, not properties of every endpoint. [step 1.1, step 1.2, L1, L2] ∎
