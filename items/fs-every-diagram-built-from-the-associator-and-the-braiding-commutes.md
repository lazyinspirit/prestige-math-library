---
id: fs-every-diagram-built-from-the-associator-and-the-braiding-commutes
kind: false-statement
title: "FALSE: every diagram built from the associator and the braiding commutes"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-braided-coherence-fails-in-the-symmetric-form]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Remark 8.2.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

**False claim:** in every braided monoidal category, every diagram whose edges
are built only from associators, unitors, braidings, and their inverses
commutes.

## Facts & Assumptions

**Given:** The failure theorem for braided coherence in the symmetric form.

[L1] There is a braided monoidal category with pairwise distinct canonical endomorphisms $1,c_{X,X}^2,c_{X,X}^4,\dots$ of one tensor square ([[thm-braided-coherence-fails-in-the-symmetric-form]]).

## Refutation

**Proof technique:** direct.

1.1 If the displayed claim were true, then any two canonical endomorphisms of the same tensor word built from associators and braidings would agree. [given, assume-contra]

2.1 The morphisms $1,c_{X,X}^2,c_{X,X}^4,\dots$ from [L1] are all such canonical endomorphisms of $X\otimes X$, yet [L1] says they are pairwise distinct in a specific braided monoidal category. This contradicts step 1.1. [L1, step 1.1, contradiction]

3.1 Therefore the claim is false. [step 2.1, discharge-contradiction] ∎
