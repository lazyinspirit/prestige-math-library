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
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

2.1 Such monomials span each displayed weight space. For fixed $\beta$, only finitely many nonnegative tuples $(k_\alpha)$ have sum $\beta$, since every positive root has nonnegative simple-root coordinates and each tuple coordinate is bounded by a coordinate of $\beta$. Conversely, write $\beta=\sum_i n_i\alpha_i$ with $n_i\ge0$. The ordered PBW monomial formed from $n_i$ copies of each simple negative-root vector is nonzero in $M(\lambda)$ and has weight $\lambda-\beta$, so every claimed weight occurs. For $\beta=0$ the zero tuple is the only one, giving $M(\lambda)_\lambda=\mathbb Cv_\lambda$. [given, step 1.1, algebra] ∎
