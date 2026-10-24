---
id: ex-quadratic-field-codifferent
kind: example
title: "A quadratic-field codifferent"
status: published
origin: pipeline
deps: [thm-different-of-a-monogenic-number-field, thm-discriminant-is-the-norm-of-the-different]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Keith Conrad, The Different Ideal, Examples 3.6 and 4.4"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf"
---

## Example

For $K=\mathbb Q(i)$,
$$\mathcal O_K^\vee=(2i)^{-1}\mathbb Z[i],\qquad \mathfrak D_K=(2i)=(2),\qquad N\mathfrak D_K=4=|d_K|.$$

## Verification

**Given:** $\mathcal O_K=\mathbb Z[i]$ and $f=X^2+1$.

1.1 The monogenic formula gives $\mathfrak D_K=(f'(i))=(2i)=(2)$.  Taking the fractional-ideal inverse gives $\mathcal O_K^\vee=(2i)^{-1}\mathbb Z[i]$. [given, algebra]

2.1 Its norm is $4$, agreeing with the discriminant $d_K=-4$ and the norm-of-the-different theorem. [step 1.1, algebra] ∎
