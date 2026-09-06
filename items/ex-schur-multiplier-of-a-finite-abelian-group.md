---
id: ex-schur-multiplier-of-a-finite-abelian-group
kind: example
title: "Multiplier of a finite abelian group"
status: published
origin: pipeline
deps: [thm-schur-multiplier-of-an-abelian-group-is-its-exterior-square, thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

For $A\cong C_{n_1}\times\cdots\times C_{n_r}$,
$$M(A)\cong\bigoplus_{1\le i<j\le r} C_{\gcd(n_i,n_j)}.$$

## Facts & Assumptions

**Given:** Use the invariant-factor decomposition of $A$.

## Verification

**Proof technique:** direct.

1.1 Exterior squares take finite direct sums to the sum of the exterior squares of the summands and the pairwise tensor products.  Each cyclic summand has zero exterior square, while $C_m\otimes C_n\cong C_{\gcd(m,n)}$. [given, algebra]

2.1 Applying [[thm-schur-multiplier-of-an-abelian-group-is-its-exterior-square]] gives the displayed formula, including the empty sum $0$ when $r\le1$. [step 1.1, algebra] ∎
