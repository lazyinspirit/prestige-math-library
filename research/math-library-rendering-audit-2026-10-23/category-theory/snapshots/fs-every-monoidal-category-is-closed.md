---
id: fs-every-monoidal-category-is-closed
kind: false-statement
title: "FALSE: every monoidal category is closed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-a-monoidal-category-need-not-be-closed]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Section 4.4"
      url: "https://emilyriehl.github.io/files/context.pdf"
---

## Statement

Every monoidal category is closed.

## Facts & Assumptions

**Given:** The diamond-lattice monoidal category from [[cex-a-monoidal-category-need-not-be-closed]].

[L1] The counterexample item constructs a monoidal category for which $-\otimes p$ has no right adjoint, so the category is not closed ([[cex-a-monoidal-category-need-not-be-closed]]).

## Refutation

**Proof technique:** direct.

1.1 The category exhibited in [L1] is monoidal. [given, L1]

2.1 The same category is not closed, because tensoring with the chosen object $p$ has no right adjoint. Therefore a monoidal category need not be closed. [step 1.1, L1]

3.1 So the statement is false. [step 2.1] ∎
