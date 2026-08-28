---
id: thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice
kind: theorem
title: "The subobjects of an object in an abelian category form a lattice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-join-of-subobjects-in-an-abelian-category, thm-the-join-of-subobjects-is-their-least-upper-bound, thm-the-meet-of-subobjects-is-their-pullback, def-subobject-and-quotient-object, def-abelian-category]
justified_by: []
aliases: []
landmark: true
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
    - title: "Daniel Murfet, Abelian Categories, Section 4.2"
      url: "https://therisingsea.org/notes/AbelianCategories.pdf"
pipeline_run: frontier-22
---

## Statement

For every object $A$ of an abelian category, the subobjects of $A$ form a
bounded lattice. The meet is pullback, the join is the image construction of
[[def-the-join-of-subobjects-in-an-abelian-category]], the bottom element is the
zero subobject, and the top element is $1_A$.

## Facts & Assumptions

**Given:** An object $A$ in an abelian category.

[L1] Any two subobjects of $A$ admit a least upper bound ([[thm-the-join-of-subobjects-is-their-least-upper-bound]]).

[L2] Any two subobjects of $A$ admit a greatest lower bound ([[thm-the-meet-of-subobjects-is-their-pullback]]).

[L3] Subobjects are mutual-factorization classes of monomorphisms into $A$ ([[def-subobject-and-quotient-object]]).

[L4] An abelian category has a zero object, hence zero morphisms ([[def-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], every pair of subobjects of $A$ has a join and a meet. That gives the binary lattice operations. [L1, L2]

1.2 By [L4], the unique map $0\to A$ exists. It is monic because every two maps into $0$ are equal, so by [L3] it represents a subobject of $A$. Every monomorphism into $A$ factors through $1_A$, and $0\to A$ factors through every monomorphism into $A$, so these classes are respectively the top and bottom elements. [L3, L4, algebra]

2.1 Steps 1.1 and 1.2 prove that the subobjects of $A$ form a bounded lattice. [step 1.1, step 1.2] ∎
