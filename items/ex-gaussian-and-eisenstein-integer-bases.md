---
id: ex-gaussian-and-eisenstein-integer-bases
kind: example
title: "Gaussian and Eisenstein integral bases"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-ring-of-integers-of-a-quadratic-field, cor-discriminant-of-a-quadratic-field]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Milne, Example 2.10"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Example

$\mathcal O_{\mathbb Q(i)}=\mathbb Z[i]$, $d=-4$; and $\mathcal O_{\mathbb Q(\sqrt{-3})}=\mathbb Z[(1+\sqrt{-3})/2]$, $d=-3$.

## Facts & Assumptions

**Given:** The quadratic integer and discriminant formulas ([[thm-ring-of-integers-of-a-quadratic-field]], [[cor-discriminant-of-a-quadratic-field]]).

## Verification

**Proof technique:** direct.

1.1 Insert $d=-1$ and $d=-3$ in the given integral-basis formula. [given]

2.1 Insert the same residues modulo $4$ in the given discriminant formula. [step 1.1, given] ∎
