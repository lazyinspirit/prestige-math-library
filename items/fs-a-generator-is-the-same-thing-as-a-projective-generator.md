---
id: fs-a-generator-is-the-same-thing-as-a-projective-generator
kind: false-statement
title: "FALSE: a generator is automatically projective"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-generator-and-cogenerator-of-a-category, def-projective-object, thm-a-direct-summand-of-a-projective-is-projective]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Section 1.6"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: frontier-22
---

## Statement

A generator is the same thing as a projective generator.

## Facts & Assumptions

**Given:** The abelian group $G=\mathbb Z\oplus\mathbb Z/p$ for a prime $p$.

[L1] Generators are defined by separation of morphisms
([[def-generator-and-cogenerator-of-a-category]]).

[L2] Direct summands of projectives are projective
([[thm-a-direct-summand-of-a-projective-is-projective]]).

[L3] Projective objects are the lifting objects of [[def-projective-object]].

## Refutation

1.1 The summand $\mathbb Z$ is a generator of $\mathbf{Ab}$, so $G=\mathbb Z\oplus\mathbb Z/p$ is also a generator: precompose with the inclusion $\mathbb Z\to G$ and then use the generator property of $\mathbb Z$. [L1, algebra]

2.1 If $G$ were projective, then its direct summand $\mathbb Z/p$ would be projective by [L2]. But the quotient map $\mathbb Z\twoheadrightarrow\mathbb Z/p$ does not split, so $\mathbb Z/p$ does not have the lifting property [L3]. Therefore $G$ is a generator that is not projective. [L2, L3, step 1.1] ∎
