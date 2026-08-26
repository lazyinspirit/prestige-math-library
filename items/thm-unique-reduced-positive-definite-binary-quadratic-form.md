---
id: thm-unique-reduced-positive-definite-binary-quadratic-form
kind: theorem
title: "Each proper-equivalence class of positive-definite integral binary quadratic forms contains exactly one reduced form"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-reduction-of-positive-definite-binary-quadratic-forms, lem-leading-coefficient-is-minimal-in-a-reduced-class, lem-reduced-forms-with-the-same-leading-coefficient-are-equal]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Theorem 9.3.2"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, Exercise 4.1f(c)"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Statement

Each proper-equivalence class of positive-definite integral binary quadratic
forms contains exactly one reduced form.

## Facts & Assumptions

**Given:** A positive-definite integral binary quadratic form $f$.

[L1] Every positive-definite integral binary quadratic form is properly equivalent to a reduced form ([[thm-reduction-of-positive-definite-binary-quadratic-forms]]).

[L2] In a reduced class, the leading coefficient is minimal among all properly equivalent forms ([[lem-leading-coefficient-is-minimal-in-a-reduced-class]]).

[L3] Properly equivalent reduced forms with the same leading coefficient are equal ([[lem-reduced-forms-with-the-same-leading-coefficient-are-equal]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the proper-equivalence class of $f$ contains at least one reduced form. [L1]

2.1 Suppose $g$ and $h$ are reduced forms properly equivalent to $f$. Then $g$ and $h$ are properly equivalent to each other. Applying [L2] first to $g$ against $h$ and then to $h$ against $g$ shows that their leading coefficients are equal. [L2, step 1.1, algebra]

3.1 With equal leading coefficients, [L3] gives $g=h$. So the reduced representative is unique. [L3, step 2.1]

4.1 Existence from step 1.1 and uniqueness from step 3.1 prove the theorem. [step 1.1, step 3.1] ∎
