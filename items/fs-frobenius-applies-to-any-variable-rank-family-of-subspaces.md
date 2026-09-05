---
id: fs-frobenius-applies-to-any-variable-rank-family-of-subspaces
kind: false-statement
title: "Frobenius applies to any variable-rank family of subspaces"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-distribution-on-a-manifold,
       def-vector-subbundle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=w4bhBwAAQBAJ"
---

## Statement

Frobenius applies to any variable-rank family of subspaces.

## Facts & Assumptions

**Given:** On $\mathbb R$, let $$\mathcal D_x := \begin{cases} \{0\}, & x = 0, \\ T_x\mathbb R, & x \neq 0. \end{cases}$$

[A1] The rank jumps from $0$ at the origin to $1$ elsewhere.

## Refutation

**Proof technique:** direct.

1.1 This family is not a smooth distribution in the regular sense, because a [given] smooth distribution is by definition a smooth vector subbundle of constant rank. [given]

1.2 Since the regular Frobenius theorem starts from smooth constant-rank [given] distributions, its hypotheses do not even apply to this variable-rank family. [given]

2.1 Therefore the statement is false: singular families require a different [given] theory. [given] ∎
