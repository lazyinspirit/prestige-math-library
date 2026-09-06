---
id: prop-weights-of-a-verma-module-lie-below-lambda
kind: proposition
title: "Weights of a Verma module lie below lambda"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-pbw-model-of-a-verma-module]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I & II, Corollary 25.9"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
---

## Statement

The weights of $M(\lambda)$ are exactly $\lambda-\beta$ for
$\beta\in Q^+$; every weight space is finite dimensional, and
$M(\lambda)_\lambda=\mathbb Cv_\lambda$.

## Facts & Assumptions

**Given:** The negative-root PBW basis of [[thm-pbw-model-of-a-verma-module]].

## Proof

**Proof technique:** direct.

1.1 A monomial with negative roots $-\alpha$ occurring $k_\alpha$ times has $\mathfrak h$-weight $\lambda-\sum k_\alpha\alpha$, by commuting $h$ past its factors. [given, algebra]

2.1 Such monomials span each displayed weight space.  For fixed $\beta$, only finitely many nonnegative tuples $(k_\alpha)$ have sum $\beta$, and the zero tuple is the only tuple for $\beta=0$. [given, algebra] ∎
