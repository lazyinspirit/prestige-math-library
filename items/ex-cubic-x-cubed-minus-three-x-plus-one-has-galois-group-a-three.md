---
id: ex-cubic-x-cubed-minus-three-x-plus-one-has-galois-group-a-three
kind: example
title: "$x^3-3x+1$ has discriminant $81$ and Galois group $A_3$ over $\\mathbb Q$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rational-root-theorem, thm-galois-group-of-an-irreducible-cubic-by-discriminant, def-discriminant-of-a-monic-polynomial]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Example 4.7"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, Galois Groups of Cubics and Quartics, Example 2.2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cubicquartic.pdf"
pipeline_run: null
---

## Example

$x^3-3x+1$ has Galois group $A_3$ over $\mathbb Q$. Its discriminant is $81$, and its splitting field is a cyclic cubic extension of $\mathbb Q$.

## Facts & Assumptions

**Given:** The rational-root theorem ([[thm-rational-root-theorem]]) and the discriminant convention of [[def-discriminant-of-a-monic-polynomial]].

[L1] A monic irreducible separable cubic over a field of characteristic not two has group $A_3$ when its discriminant is a square ([[thm-galois-group-of-an-irreducible-cubic-by-discriminant]]).

## Verification

**Proof technique:** direct.

1.1 The only rational-root candidates are $1$ and $-1$, and the polynomial takes the values $-1$ and $3$ there. It has no rational root, so the cubic is irreducible. [given]

1.2 For a depressed cubic $x^3+px+q$, the discriminant is $-4p^3-27q^2$; here it is $-4(-3)^3-27=81=9^2$, which is nonzero. [algebra]

2.1 Steps 1.1 and 1.2 give an irreducible separable cubic with square discriminant, so [L1] gives Galois group $A_3$. Its order is three, equal to the splitting-field degree. [step 1.1, step 1.2, L1] ∎
