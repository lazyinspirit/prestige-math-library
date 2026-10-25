---
id: cor-binary-quadratic-form-equivalence-is-decidable
kind: corollary
title: "Proper equivalence of positive-definite integral binary quadratic forms is decidable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-reduction-of-positive-definite-binary-quadratic-forms, thm-unique-reduced-positive-definite-binary-quadratic-form]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Section 9.3.2"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, Exercises 4.1e-4.1g"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Statement

There is an algorithm to decide whether two positive-definite integral binary
quadratic forms are properly equivalent: reduce both forms, and compare the two
reduced triples.

## Facts & Assumptions

**Given:** Positive-definite integral binary quadratic forms $f$ and $g$.

[L1] Every positive-definite integral binary quadratic form is properly equivalent to a reduced form ([[thm-reduction-of-positive-definite-binary-quadratic-forms]]).

[L2] Each proper-equivalence class contains exactly one reduced form ([[thm-unique-reduced-positive-definite-binary-quadratic-form]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose reduced forms $f_{\mathrm{red}}$ and $g_{\mathrm{red}}$ properly equivalent to $f$ and $g$, respectively. [L1, choose]

2.1 If $f$ and $g$ are properly equivalent, then $f_{\mathrm{red}}$ and $g_{\mathrm{red}}$ lie in the same proper-equivalence class, so [L2] gives $f_{\mathrm{red}}=g_{\mathrm{red}}$. [L2, step 1.1]

2.2 Conversely, if $f_{\mathrm{red}}=g_{\mathrm{red}}$, then $f$ and $g$ are both properly equivalent to that same reduced form, hence are properly equivalent to each other. [step 1.1, algebra]

3.1 Therefore $f$ and $g$ are properly equivalent exactly when their reduced representatives are equal. Since equality of two explicit coefficient triples is decidable, proper equivalence is decidable. [step 2.1, step 2.2] ∎
