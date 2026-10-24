---
id: prop-singular-values-are-well-defined
kind: proposition
title: "Singular values are well defined because the positive square root of T^*T is unique"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-singular-values-of-an-endomorphism, thm-non-negative-square-root-exists-and-is-unique]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

For a linear map $T:V\to W$ between finite-dimensional real or complex inner
product spaces, the multiset of singular values depends only on $T$.

## Facts & Assumptions

**Given:** A linear map $T:V\to W$ between finite-dimensional real or complex inner product spaces.

[L1] The singular values of $T$ are defined as the eigenvalues of the unique non-negative square root $|T|=\sqrt{T^*T}$ ([[def-singular-values-of-an-endomorphism]]).

[L2] A non-negative operator has a unique non-negative square root ([[thm-non-negative-square-root-exists-and-is-unique]]).

## Proof

**Proof technique:** direct.

1.1 The operator $T^*T$ is determined by $T$, and [L2] gives it a unique non-negative square root. Therefore the operator $|T|=\sqrt{T^*T}$ in [L1] is determined uniquely by $T$. [L1, L2]

2.1 The singular values are the eigenvalues of that uniquely determined operator $|T|$, counted with multiplicity. Hence they depend only on $T$. [L1, step 1.1] ∎
