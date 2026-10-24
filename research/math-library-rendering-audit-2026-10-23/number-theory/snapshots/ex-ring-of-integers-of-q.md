---
id: ex-ring-of-integers-of-q
kind: example
title: "Integers of Q"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ring-of-integers-of-a-number-field, thm-number-field-discriminant-is-well-defined-and-nonzero]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Stein, Example 2.3.14"
      url: "https://wstein.org/books/ant/ant.pdf"
---

## Example

$\mathcal O_{\mathbb Q}=\mathbb Z$ and $d_{\mathbb Q}=1$.

## Facts & Assumptions

**Given:** A rational number $a/b$ in lowest terms.

## Verification

**Proof technique:** direct.

1.1 Its monic minimal polynomial is $X-a/b$, integral only when $b=1$. [given]

2.1 The basis $(1)$ has trace Gram determinant $1$. [step 1.1, algebra] ∎
