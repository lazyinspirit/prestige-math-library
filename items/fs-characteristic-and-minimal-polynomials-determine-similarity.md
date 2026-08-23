---
id: fs-characteristic-and-minimal-polynomials-determine-similarity
kind: false-statement
title: "FALSE: characteristic and minimal polynomials determine similarity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-matrices-are-similar-iff-their-invariant-factors-agree, cor-largest-invariant-factor-is-the-minimal-polynomial, cor-product-of-invariant-factors-is-the-characteristic-polynomial]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Apisa, Wisconsin Math 542, Lecture 12 worksheet, Problem 3"
      url: "https://people.math.wisc.edu/~apisa/notes542.pdf"
pipeline_run: null
---

## Statement

**False claim.** Two square matrices over a field having the same characteristic polynomial and the same minimal polynomial are similar.

## Facts & Assumptions

**Given:** The minimal and characteristic polynomial dictionaries of [[cor-largest-invariant-factor-is-the-minimal-polynomial]] and [[cor-product-of-invariant-factors-is-the-characteristic-polynomial]].

[L1] Two matrices are similar exactly when their invariant factors agree ([[thm-matrices-are-similar-iff-their-invariant-factors-agree]]).

## Refutation

**Proof technique:** direct.

1.1 Let $A=J_2(0)\oplus J_2(0)$ and $B=J_2(0)\oplus J_1(0)\oplus J_1(0)$. Both are four-dimensional nilpotent matrices with characteristic polynomial $x^4$ and largest block size two, hence minimal polynomial $x^2$. [algebra]

2.1 The invariant factors of $A$ are $x^2,x^2$, while those of $B$ are $x,x,x^2$; equivalently, their ranks are $2$ and $1$. By [L1] they are not similar, despite the equal characteristic and minimal polynomials. [step 1.1, L1] ∎

## Remarks

This witness agrees with [[fs-equal-characteristic-and-minimal-polynomials-imply-similarity]], but the proof here is self-contained because that published item lies on an examples page and is not a dependency.
